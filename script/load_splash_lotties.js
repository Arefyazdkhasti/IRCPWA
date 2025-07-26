// Ensure DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Load Splash Logo Animation
    if (document.getElementById('lottie-container')) {
        lottie.loadAnimation({
            container: document.getElementById('lottie-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'animations/splash.json' // Ensure this path is correct
        });
    }


    // Load Loading Spinner Animation
    if (document.getElementById('lottie-loading-container')) {
        lottie.loadAnimation({
            container: document.getElementById('lottie-loading-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'animations/loading.json' // Ensure this path is correct
        });
    }
});