// ==== ENTRY POINT ====
document.addEventListener("DOMContentLoaded", () => {
    console.log('DOMContentLoaded — starting PWA load sequence');
    initAppLoad();
});

window.addEventListener("flutter-first-frame", () => {
    console.log('✅ flutter-first-frame — hiding skeleton');
    fadeOutElement(document.getElementById('skeleton'), 300);
});

// ==== CORE LOADING LOGIC ====
async function initAppLoad() {
    const splash = document.getElementById('splash-screen');
    const skeleton = document.getElementById("skeleton");

    // ALWAYS show splash on every load (including refresh)
    splash.style.display = 'flex';
    skeleton.style.display = 'none';

    console.log('🎯 Splash shown');

    // ALWAYS show skeleton after short delay + begin platform-aware load
    setTimeout(() => {
        // run detection on next paint
        requestAnimationFrame(() => {
            // 📱 Platform detection (unchanged logic)
            const isIos = (
                ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) ||
                (navigator.userAgent.includes("Mac") && "ontouchend" in document)
            );
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            const isAndroid = /android/i.test(navigator.userAgent);
            const { isInstalled, firstLaunchEver, firstLoad } = checkPwaState();

            // 🔧 For testing (keep — no change)
            const OVERRIDE_TEST_MODE = true; // false in prod

            console.log(`🎯 Platform Detection : isIos: ${isIos}, isSafari: ${isSafari}, isAndroid: ${isAndroid}, isInstalled: ${isInstalled}, firstLaunchEver: ${firstLaunchEver}, firstLoad: ${firstLoad} `);
            if (OVERRIDE_TEST_MODE) {
                showPlatformSpecificMessages(
                    /* isIos */ true,
                    /* isSafari */ true,
                    /* isAndroid */ false,
                    /* isPwaInstalled */ true,
                    /* isPwaFirstLaunch */ firstLoad,
                );
            } else {
                showPlatformSpecificMessages(
                    isIos, isSafari, isAndroid, isInstalled, firstLoad
                );
            }
        });
    }, 500);
}

// ==== PLATFORM HANDLER (no behavior change) ====
function showPlatformSpecificMessages(isIos, isSafari, isAndroid, isPwaInstalled, isPwaFirstLaunch) {
    const splash = document.getElementById('splash-screen');
    const skeleton = document.getElementById("skeleton");

    // Decide what to show after the splash has fully faded out.
    // This prevents the skeleton from briefly appearing underneath
    // (or before) the splash during paint/timing races.
    const showAfterSplashHidden = (showFn) => {
        fadeOutElement(splash, 1000, () => {
            splash.style.display = 'none';
            // run on next frame to ensure splash is removed from paint
            requestAnimationFrame(() => requestAnimationFrame(showFn));
        });
    };

    if (isIos && isSafari && isPwaInstalled) {
        // iOS Safari PWA — full flow
        console.log("✅ iOS Safari PWA detected");

        showAfterSplashHidden(() => {
            // Make sure skeleton is visible with a stable opacity/transition
            skeleton.style.display = 'block';
            skeleton.style.transition = 'opacity 0.4s';
            skeleton.style.opacity = '1';
            console.log('✅ Skeleton shown');

            setTimeout(() => {
                const rect = skeleton.getBoundingClientRect();
                if (rect.width > 0 && rect.height > 0) {
                    console.log(`✅ Skeleton is painted: ${rect.width}x${rect.height}px`);
                } else {
                    console.warn('❌ Skeleton has no dimensions! Check CSS or display.');
                }
            }, 100);

            loadFlutterApp(skeleton, isPwaFirstLaunch);
        });
    } else {
        console.log("⚠️ Non-iOS Safari PWA detected");
        // 🌐 Non-PWA / Desktop / Android 
        const elementId = isIos && isSafari
            ? 'supported-safari-message'
            : isIos && !isSafari
                ? 'unsupported-non-safari-message'
                : isAndroid
                    ? 'unsupported-android-message'
                    : 'unsupported-desktop-message';

        const el = document.getElementById(elementId);
        showAfterSplashHidden(() => {
            if (el) el.style.display = 'block';
        });
    }
}

// ==== FLUTTER LOADER (isolated, reusable) ====
function loadFlutterApp(skeleton, isPwaFirstLaunch) {
    updateProgress(0, 'loading', isPwaFirstLaunch);
    handleVisualLoading.start();


    _flutter.loader.loadEntrypoint({
        serviceWorker: {
            serviceWorkerVersion: serviceWorkerVersion,
        },
        onEntrypointLoaded: async function (engineInitializer) {
            try {
                const appRunner = await engineInitializer.initializeEngine();
                await appRunner.runApp();

                if (skeleton.style.display !== 'block') {
                    console.warn("⚠️ Skeleton was not visible when first frame fired!");
                }

                // inside loadFlutterApp after runApp()
                const firstFrameTimeout = setTimeout(() => {
                    console.warn('first-frame timeout — hiding skeleton to avoid blocking UI');
                    fadeOutElement(skeleton, 300);
                }, 300);

                // Wait for first render to hide skeleton
                const onFirstFrame = () => {
                    clearTimeout(firstFrameTimeout);
                    window.removeEventListener('flutter-first-frame', onFirstFrame);
                    // ensure we hide the skeleton only when Flutter painted its first frame
                    fadeOutElement(skeleton, 300);
                };

                window.addEventListener('flutter-first-frame', onFirstFrame);
                if ('serviceWorker' in navigator) {
                    checkForServiceWorkerUpdate();
                    clickNotificationHandler();
                }
            } catch (error) {
                handleVisualLoading.stop();
                updateProgress(0, 'error_initializing', isPwaFirstLaunch);
                setTimeout(() => {
                    skeleton.style.display = 'none';
                    console.error("❌ Error during Flutter app load:", error);
                }, 2000);
            }
        }
    });
}

// ==== UTILS (clean, reusable) ====
function fadeOutElement(el, duration = 300, onComplete) {
    if (!el || el.style.display === 'none') return;
    el.style.transition = `opacity ${duration}ms`;
    el.style.opacity = '0';
    setTimeout(() => {
        el.style.display = 'none';
        if (onComplete) onComplete();
    }, duration);
}


/**
 * Converts English digits (0-9) to Persian (۰-۹)
 */
function toPersianDigits(text) {
    const map = { '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴', '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹' };
    return String(text).replace(/[0-9]/g, d => map[d]);
}

/**
 * Translates a key using window.globalStrings
 */
function textToPersian(key, ...args) {
    let str = window.globalStrings?.[key] || key;
    args.forEach((arg, i) => {
        str = str.replace(new RegExp(`\\{${i}\\}`, 'g'), toPersianDigits(arg));
    });
    return toPersianDigits(str);
}

/**
 * Updates the loading text 
 * @param {number} percent of the download
 * @param {string} messageKey key of the message to show
 * @param {boolean} isPwaFirstLaunch whether to show the loading text or not 
 */
function updateProgress(percent, messageKey = 'loading', isPwaFirstLaunch) {
    const loadingTitle = document.getElementById('splash_loading_title');
    //const p = Math.round(percent); // show precise percentage 

    // console.log("updateProgress", percent, messageKey, isPwaFirstLaunch);

    if (!isPwaFirstLaunch) {
        // console.log("updateProgress not isPwaFirstLaunch");
        if (loadingTitle) {
            loadingTitle.style.display = 'none';
            loadingTitle.textContent = "";
        }
    } else {
        if (loadingTitle) {
            loadingTitle.style.display = 'block';
            loadingTitle.textContent = textToPersian(messageKey, "");
        }
    }
}


/**
 * Track real-time download progress for tracked files using fetch + streams.
 * @param {Function} updateProgress
 * @param {Array<string>} trackedFiles
 */
function createRealProgressTracker(updateProgress, trackedFiles = ['./main.dart.js'], isPwaFirstLaunch) {
    const originalFetch = window.fetch;

    const activate = () => {
        window.fetch = async (url, options) => {
            const isTracked = trackedFiles.some(f => url.endsWith(f));
            if (!isTracked) {
                return originalFetch(url, options);
            }

            const response = await originalFetch(url, options);
            const contentLength = parseInt(response.headers.get('Content-Length'), 10);
            if (!response.body || isNaN(contentLength)) {
                updateProgress(100, 'initializing', isPwaFirstLaunch);
                return response;
            }

            const reader = response.body.getReader();
            let received = 0;

            const stream = new ReadableStream({
                start(controller) {
                    function push() {
                        reader.read().then(({ done, value }) => {
                            if (done) {
                                updateProgress(100, 'initializing', isPwaFirstLaunch);
                                controller.close();
                                return;
                            }
                            received += value.byteLength;
                            const percent = (received / contentLength) * 100;
                            updateProgress(percent, 'loading', isPwaFirstLaunch);
                            controller.enqueue(value);
                            push();
                        }).catch(err => {
                            controller.error(err);
                            updateProgress(0, 'error_loading', isPwaFirstLaunch);
                        });
                    }
                    push();
                }
            });

            return new Response(stream, {
                headers: response.headers,
                status: response.status,
                statusText: response.statusText
            });
        };
    };

    const deactivate = () => {
        window.fetch = originalFetch;
    };

    return { activate, deactivate };
}


let visualProgress = 0;
let fakeInterval = null;

const handleVisualLoading = {
    start() {
        visualProgress = 0;
        fakeInterval = setTimeout(() => {
            if (visualProgress < 10) {
                fakeInterval = setInterval(() => {
                    if (visualProgress >= 90) {
                        clearInterval(fakeInterval);
                        return;
                    }
                    visualProgress += Math.random() * 2 + 1; // 1–3%
                    updateProgress(Math.round(visualProgress), 'loading');
                }, 200);
            }
        }, 1000);
    },
    stop() {
        if (fakeInterval) {
            clearTimeout(fakeInterval);
            clearInterval(fakeInterval);
            fakeInterval = null;
        }
    }
};


function checkForServiceWorkerUpdate() {
    //Access the already-registered service worker
    navigator.serviceWorker.ready.then((registration) => {
        if (registration.waiting) {
            _promptUserToUpdate();
        }

        registration.addEventListener('updatefound', () => {
            const installingWorker = registration.installing;

            if (installingWorker) {
                installingWorker.addEventListener('statechange', () => {
                    if (registration.waiting && navigator.serviceWorker.controller) {
                        _promptUserToUpdate();
                    } else {
                        console.log('Service Worker initialized for the first time');
                    }
                });
            }
        });
    });

    function _promptUserToUpdate() {
        window.postMessage({ type: 'NEW_VERSION_AVAILABLE' }, '*');
    }
}

function clickNotificationHandler() {
    // Listen for messages from the service worker
    navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('Message received from service worker:', event.data);

        // Ensure the message has a valid type
        if (!event.data.messageType) {
            return;
        }

        // Handle different types of messages
        switch (event.data.messageType) {
            case 'notification-clicked':
                const notification = event.data.notification;
                const title = notification.title || 'No Title';
                const body = notification.body || 'No Body';
                const data = notification.data || 'No Data';

                window.postMessage({
                    type: 'NOTIFICATION_CLICKED',
                    title: title,
                    body: body,
                    data: data,
                });
                break;
            default:
                console.warn('Unknown message type received:', event.data.messageType);
                break;
        }
    });
}


/**
 * Checks PWA installation status and whether this is the first launch ever.
 * Persists the "first launch" state using localStorage.
 * 
 * @returns {{ installed: boolean, firstLoad: boolean, firstLaunchEver: boolean }}
 */
function checkPwaState() {
    // --- 1. Detect if PWA is installed ---
    const isInstalled =
        window.navigator.standalone == true || // iOS PWA Standalone
        document.referrer.includes('android-app://') || // Android Trusted Web App
        ["fullscreen", "standalone", "minimal-ui"].some(
            (displayMode) => window.matchMedia('(display-mode: ' + displayMode + ')').matches
        );

    // --- 2. Check if this is the very first launch ever ---
    const firstLaunchKey = 'pwa_first_launch_ever';
    const isFirstLaunchEver = !localStorage.getItem(firstLaunchKey);

    // Mark as launched if it's the first time
    if (isFirstLaunchEver) {
        localStorage.setItem(firstLaunchKey, 'true');
    }

    // --- 3. Optional: First load in this session (resets on tab close)
    const sessionFirstLoadKey = 'pwa_first_load_session';
    const hasSeenSession = sessionStorage.getItem(sessionFirstLoadKey) !== null;
    const isFirstLoadInSession = !hasSeenSession;

    if (isFirstLoadInSession) {
        sessionStorage.setItem(sessionFirstLoadKey, 'true');
    }

    return {
        isInstalled: isInstalled,
        firstLaunchEver: isFirstLaunchEver,     // Only true once — ever
        firstLoad: isFirstLoadInSession         // True once per session
    };
}

