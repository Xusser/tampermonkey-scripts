// ==UserScript==
// @name         NGA网址重定向
// @namespace    https://github.com/Xusser/tampermonkey-scripts/blob/master/nga.js
// @version      0.1
// @description  重定向NGA所有域名至 nga.178.com
// @include      *://*.ngacn.cc/*
// @include      *://nga.178.com/*
// @include      *://ngabbs.com/*
// @author       created by 咕德 @ WoW-玛洛加尔-<蓝丨图>, updated by Xusser
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.location.href = document.location.href.replace('bbs.nga.cn', 'nga.178.com').replace('ngacn.cc', 'nga.cn').replace('ngabbs.com', 'nga.178.com');