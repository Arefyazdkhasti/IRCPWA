import { updateProgress, createRealProgressTracker, handleVisualLoading, checkForServiceWorkerUpdate, clickNotificationHandler, checkPwaState } from './utils.mjs';

window.addEventListener('load', function (ev) {
    const isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
        navigator.userAgent &&
        navigator.userAgent.indexOf('CriOS') == -1 &&
        navigator.userAgent.indexOf('FxiOS') == -1;

    const isIos = (
        ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(
            navigator.platform,
        ) ||
        (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );

    const isAndroid = /android/i.test(navigator.userAgent);


    let isPwaInstalled = false;
    let isPwaFirstLaunch = false;

    const state = checkPwaState();

    isPwaInstalled = state.installed;

    if (state.installed) {
        isPwaFirstLaunch = state.firstLoad;
        if (state.firstLoad) {
            console.log('✅ PWA installed — first launch');
            // Show onboarding or analytics event
        } else {
            console.log('🔄 PWA installed — reopened');
            // Skip onboarding
        }
    } else {
        console.log('🌐 Running in browser (not installed)');
        // Show install prompt
    }

    //showPlatformSpecificMessages(true, true, true, true, isPwaFirstLaunch);

    showPlatformSpecificMessages(isIos, isSafari, isAndroid, isPwaInstalled, isPwaFirstLaunch);
});



function showPlatformSpecificMessages(isIos, isSafari, isAndroid, isPwaInstalled, isPwaFirstLaunch) {
    const splash = document.getElementById('splash-screen');

    splash.style.display = 'flex';

    // Show initial 0%
    updateProgress(0, 'loading', isPwaFirstLaunch);

    if (isIos && isSafari && isPwaInstalled) {
        const progressTracker = createRealProgressTracker(
            (percent, msg) => {
                // Update visual progress
                visualProgress = percent;
                updateProgress(percent, msg, isPwaFirstLaunch);
            },
            ['main.dart.js', 'cansvaskit.wasm', 'canvaskit.js']
        );

        // Start visual feedback if no real progress appears
        handleVisualLoading.start();

        // Activate real tracking
        progressTracker.activate();

        // Load Flutter
        _flutter.loader.loadEntrypoint({
            serviceWorker: {
                serviceWorkerVersion: serviceWorkerVersion,
            },
            onEntrypointLoaded: async function (engineInitializer) {
                try {
                    handleVisualLoading.stop();
                    updateProgress(100, 'initializing', isPwaFirstLaunch);

                    const appRunner = await engineInitializer.initializeEngine();
                    await appRunner.runApp();

                    setTimeout(() => {
                        splash.style.display = 'none';
                    }, 400);

                    if ('serviceWorker' in navigator) {
                        // Check for updates using service worker version 
                        checkForServiceWorkerUpdate();

                        // Handle notifications clicks
                        clickNotificationHandler();
                    }
                } catch (error) {
                    handleVisualLoading.stop();
                    updateProgress(0, 'error_initializing', isPwaFirstLaunch);
                    setTimeout(() => {
                        splash.style.display = 'none';
                        document.getElementById('unsupported-desktop-message').style.display = 'block';
                    }, 2000);
                } finally {
                    progressTracker.deactivate();
                }

            }
        });

    } else {
        // Handle non-iOS/Safari or non-PWA
        splash.style.display = 'none';


        const elementId = isIos && isSafari
            ? 'supported-safari-message'
            : isIos && !isSafari
                ? 'unsupported-non-safari-message'
                : isAndroid
                    ? 'unsupported-android-message'
                    : 'unsupported-desktop-message';

        document.getElementById(elementId).style.display = isIos && isSafari ? 'flex' : 'block';
    }
}


