// ==UserScript==
// @name 渣浪微博外链自动跳转
// @namespace https://github.com/fython
// @version 0.2
// @description 渣浪微博外链（t.cn）自动跳转
// @author Siubeng (fython)
// @match *://t.cn/*
// @license  MIT
// @grant none
// ==/UserScript==

(function() {
    'use strict';

    function isValidUrl(string) {
        try {
            new URL(string);
        } catch (_) {
            return false;
        }
        return true;
    }

    const link = document.querySelector("a[href]").href;
    if (isValidUrl(link)) {
        window.location.href = link;
    }
})();
