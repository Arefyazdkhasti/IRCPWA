document.addEventListener('DOMContentLoaded', () => {
    const gs = window.globalStrings || {};

    const setId = (id, key) => {
        const el = document.getElementById(id);
        if (el && gs[key]) {
            el.innerHTML = gs[key];
        }
    };

    // desktop IDs
    setId("install_the_iran_exchange_app_version", "install_the_iran_exchange_app_version");
    setId("install_the_iran_exchange_pwa_version", "install_the_iran_exchange_pwa_version");
    setId("install_the_iran_exchange_with_QrCode", "install_the_iran_exchange_with_QrCode");

    // android IDs
    setId("android_install_title", "android_install_title");
    setId("android_install_description", "android_install_description");
    setId("downloadButton", "downloadButton");
    setId("marketBottomSheetTitle", "marketBottomSheetTitle");
    setId("marketDownloadFromBazaar", "marketDownloadFromBazaar");
    setId("marketDownloadFormGooglePlay", "marketDownloadFormGooglePlay");
    setId("marketDownloadFormMyket", "marketDownloadFormMyket");

    // iOS non-Safari
    setId("ios_but_not_safari_install_title", "ios_but_not_safari_install_title");
    setId("ios_but_not_safari_install_description_1", "ios_but_not_safari_install_description_1");
    setId("ios_but_not_safari_install_description_2", "ios_but_not_safari_install_description_2");

    // iOS Safari
    setId("ios_safari_install_title", "ios_safari_install_title");
    setId("ios_safari_install_description", "ios_safari_install_description");
    setId("safari_instructions_1_1", "safari_instructions_1_1");
    setId("safari_instructions_1_2", "safari_instructions_1_2");
    setId("safari_instructions_2_1", "safari_instructions_2_1");
    setId("safari_instructions_2_2", "safari_instructions_2_2");
    setId("safari_instructions_3_1", "safari_instructions_3_1");
    setId("safari_instructions_3_2", "safari_instructions_3_2");

    // alt attributes for images
    document.querySelectorAll('img').forEach(img => {
        if (gs.app_name) {
            img.setAttribute('alt', gs.app_name);
        }
    });
});
