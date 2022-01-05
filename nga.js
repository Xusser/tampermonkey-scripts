// ==UserScript==
// @name         NGA网址重定向
// @namespace    https://github.com/Xusser/tampermonkey-scripts/blob/master/nga.js
// @version      0.3
// @description  重定向NGA所有域名至 nga.178.com
// @include      *://*.ngacn.cc/*
// @include      *://bbs.nga.cn/*
// @include      *://ngabbs.com/*
// @author       created by 咕德 @ WoW-玛洛加尔-<蓝丨图>, updated by Xusser
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.location.href = document.location.href.replace('bbs.nga.cn', 'ngabbs.com').replace('ngacn.cc', 'ngabbs.com').replace('nga.178.com', 'ngabbs.com');
