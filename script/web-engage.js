var webengage;
console.log("WebEngage script is starting..."); // Log start of script

!function (w, e, b, n, g) {
    function o(e, t) {
        e[t[t.length - 1]] = function () {
            r.__queue.push([t.join("."), arguments]);
            console.log("WebEngage function queued:", t.join("."), arguments); // Log function queueing
        }
    }
    var i, s, r = w[b],
        z = " ",
        l = "init options track screen onReady".split(z),
        a = "feedback survey notification".split(z),
        c = "options render clear abort".split(z),
        p = "Open Close Submit Complete View Click".split(z),
        u = "identify login logout setAttribute".split(z);

    if (!r || !r.__v) {
        console.log("Initializing WebEngage SDK..."); // Log initialization start

        w[b] = r = {
            __queue: [],
            is_spa: 1, // Change this to 0 if you do not wish to use default SPA behaviour of WebEngage SDK
            __v: "6.0",
            user: {}
        };

        for (i = 0; i < l.length; i++) o(r, [l[i]]);
        for (i = 0; i < a.length; i++) {
            for (r[a[i]] = {}, s = 0; s < c.length; s++) o(r[a[i]], [a[i], c[s]]);
            for (s = 0; s < p.length; s++) o(r[a[i]], [a[i], "on" + p[s]]);
        }
        for (i = 0; i < u.length; i++) o(r.user, ["user", u[i]]);

        setTimeout(function () {
            console.log("Loading WebEngage external script..."); // Log script loading
            var f = e.createElement("script"),
                d = e.getElementById("_webengage_script_tag");
            f.type = "text/javascript";
            f.async = !0;
            f.src = ("https:" == e.location.protocol ? "https://ssl.widgets.webengage.com" : "https://cdn.widgets.webengage.com") + "/js/webengage-min-v-6.0.js";
            f.onload = function () {
                console.log("WebEngage external script loaded successfully."); // Log successful load
            };
            f.onerror = function () {
                console.error("Failed to load WebEngage external script."); // Log error
            };
            d.parentNode.insertBefore(f, d);
        }, 0);
    }
}(window, document, "webengage");

console.log("Initializing WebEngage with provided code..."); // Log init call
webengage.init('~10a5cb41c');
console.log("WebEngage initialized successfully."); // Log successful init