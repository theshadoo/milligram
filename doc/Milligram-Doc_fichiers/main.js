"use strict";
! function() {
    var e, t = (e = window.location.hostname, window.environment = -1 !== e.indexOf("localhost") ? "development" : -1 !== e.indexOf("staging") ? "staging" : "production", window.environment);
    window.Sentry && window.Sentry.init({
        dsn: "https://dae18034fa014d1eb5a5ac9d8f0659da@sentry.io/1518770",
        environment: t
    })
}(),
// function() {
//     if ("development" !== window.environment)
//         for (var e = document.querySelectorAll(".navigation .popover-link"), t = 0; t < e.length; t++) e[t].href.match(/#/g) && (e[t].href = "https://milligram.io/#" + e[t].href.split("#")[1])
// }(),
function() {
    if (window.ClipboardJS) {
        for (var e, t, n = document.querySelectorAll(".code:not(.lang-md)"), o = 0; o < n.length; o++) n[o].insertAdjacentElement("beforebegin", (e = '<button class="button--clipboard" data-clipboard-action="copy" title="Copy"><img src="https://clipboardjs.com/assets/images/clippy.svg" alt="Copy"></button>', t = void 0, (t = document.createElement("div")).innerHTML = e.trim(), t.firstChild)), n[o].previousElementSibling.setAttribute("data-clipboard-text", n[o].firstChild.innerHTML.replace(/\$ /g, "").replace(/<!--(.*?)-->/g, "").replace(/\/\* (.*?)\/\ */g, "").replace(/\n\s*\n/g, "\n").trim());
        var r = new window.ClipboardJS(".button--clipboard");
        r.on("success", function(e) {
            e.clearSelection(), e.trigger.classList.add("tooptip--clipboard"), setTimeout(function() {
                e.trigger.classList.remove("tooptip--clipboard")
            }, 500)
        }), r.on("error", function(e) {
            console.error("[clipboard]", e.trigger)
        })
    }
}(),
function() {
    var e, t, n, o, r, i, a;
    "development" !== window.environment && (e = window, t = document, n = "script", o = "https://www.google-analytics.com/analytics.js", r = "ga", e.GoogleAnalyticsObject = r, e[r] = e[r] || function() {
        (e[r].q = e[r].q || []).push(arguments)
    }, e[r].l = +new Date, i = t.createElement(n), a = t.getElementsByTagName(n)[0], i.async = 1, i.src = o, a.parentNode.insertBefore(i, a), window.ga("create", "UA-24389952-15", "auto"), window.ga("send", "pageview"))
}(),
function() {
    for (var e = document.querySelectorAll("[data-popover]"), n = document.querySelectorAll(".popover"), t = 0; t < e.length; t++) e[t].addEventListener("click", r);

    function o(e) {
        for (var t = 0; t < n.length; t++) n[t].classList.remove("popover-open")
    }

    function r(e) {
        e.preventDefault(), document.querySelector(this.getAttribute("href")).classList.contains("popover-open") ? document.querySelector(this.getAttribute("href")).classList.remove("popover-open") : (o(), document.querySelector(this.getAttribute("href")).classList.add("popover-open")), e.stopImmediatePropagation()
    }
    document.addEventListener("click", o)
}(),
function() {
    for (var e, t, n = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        }, o = document.querySelectorAll(".code-content"), r = 0; r < o.length; r++) o[r].parentNode.classList.contains("lang-html") && (o[r].innerHTML = (t = o[r].innerHTML, String(t).replace(/\/\*/g, "\x3c!--").replace(/\*\//g, "--\x3e"))), o[r].innerHTML = (e = o[r].innerHTML, String(e).replace(/[&<>"']/g, function(e) {
        return n[e]
    }))
}(), "serviceWorker" in window.navigator && "https:" === window.location.protocol && window.navigator.serviceWorker.register("/service-worker.js"),
    function() {
        var e, t = document.querySelector(".description"),
            n = document.querySelector(".download");
        t && n && ((e = new window.XMLHttpRequest).open("GET", "//raw.githubusercontent.com/milligram/milligram/master/package.json", !0), e.onload = function() {
            if (this.status < 200 && 400 <= this.status) return void console.error("[error] There was a connection error of some sort");
            var e = JSON.parse(this.response).version || "";
            t.innerHTML = t.innerHTML + " <br><i><small>" + t.getAttribute("data-version") + " v" + e + "</small></i>", n.setAttribute("href", "https://github.com/milligram/milligram/archive/v" + e + ".zip")
        }, e.send())
    }();