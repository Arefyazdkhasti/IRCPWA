// src/web/script/utils.mjs

/**
 * Converts English digits (0-9) to Persian (۰-۹)
 */
export function toPersianDigits(text) {
    const map = { '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴', '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹' };
    return String(text).replace(/[0-9]/g, d => map[d]);
}

/**
 * Translates a key using window.globalStrings
 */
export function textToPersian(key, ...args) {
    let str = window.globalStrings?.[key] || key;
    args.forEach((arg, i) => {
        str = str.replace(new RegExp(`\\{${i}\\}`, 'g'), toPersianDigits(arg));
    });
    return toPersianDigits(str);
}

/**
 * Updates the progress bar and loading text
 */
export function updateProgress(percent, messageKey = 'loading', isPwaFirstLaunch) {
    const progressBar = document.getElementById('loading-progress');
    const loadingTitle = document.getElementById('splash_loading_title');
    const p = Math.round(percent);

    console.log("updateProgress", percent, messageKey, isPwaFirstLaunch);

    if (!isPwaFirstLaunch) {
        console.log("updateProgress not isPwaFirstLaunch");
        if (loadingTitle) {
            loadingTitle.style.display = 'none';
            loadingTitle.textContent = "";
        }
        if (progressBar) progressBar.style.display = 'none';
    } else {
        if (loadingTitle) loadingTitle.style.display = 'block';
        if (progressBar) {
            progressBar.style.width = `${p}%`;
            progressBar.textContent = toPersianDigits(p);
        }
        if (loadingTitle) {
            loadingTitle.textContent = textToPersian(messageKey, p);
        }
    }
}


/**
 * Track real-time download progress for tracked files using fetch + streams.
 * @param {Function} updateProgress
 * @param {Array<string>} trackedFiles
 */
export function createRealProgressTracker(updateProgress, trackedFiles = ['./main.dart.js'], isPwaFirstLaunch) {
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

export const handleVisualLoading = {
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
        }, 500);
    },
    stop() {
        if (fakeInterval) {
            clearTimeout(fakeInterval);
            clearInterval(fakeInterval);
            fakeInterval = null;
        }
    }
};


export function checkForServiceWorkerUpdate() {
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

export function clickNotificationHandler() {
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
 * Checks PWA installation status and whether this is first or subsequent launch.
 * @returns {{ installed: boolean, firstLoad: boolean }}
 */
export function checkPwaState() {

    const installed =
        window.navigator.standalone == true || // iOS PWA Standalone
        document.referrer.includes('android-app://') || // Android Trusted Web App
        ["fullscreen", "standalone", "minimal-ui"].some(
            (displayMode) => window.matchMedia('(display-mode: ' + displayMode + ')').matches
        ); // Chrome PWA (supporting fullscreen, standalone, minimal-ui)

    // Determine first launch vs reopen within standalone context
    let firstLoad = false;

    if (installed) {
        if (!sessionStorage.getItem('pwa_first_launch')) {
            firstLoad = true;
            sessionStorage.setItem('pwa_first_launch', '1');
        }
    }

    return { installed, firstLoad };
}
