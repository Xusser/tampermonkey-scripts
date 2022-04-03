// ==UserScript==
// @name         NGA网址重定向
// @namespace    https://github.com/Xusser/tampermonkey-scripts/blob/master/nga.js
// @version      0.5
// @description  重定向NGA所有域名至 nga.178.com
// @updateURL    https://raw.githubusercontent.com/Xusser/tampermonkey-scripts/master/nga.js
// @downloadURL  https://raw.githubusercontent.com/Xusser/tampermonkey-scripts/master/nga.js
// @include      *://*.ngacn.cc/*
// @include      *://bbs.nga.cn/*
// @include      *://nga.178.com/*
// @include      *://g.nga.cn/*
// @include      *://yues.org/*
// @author       created by 咕德 @ WoW-玛洛加尔-<蓝丨图>, updated by Xusser
// @grant        none
// @run-at       document-start
// ==/UserScript==

var target_host = 'ngabbs.com';

document.location.href = document.location.href.replace('g.nga.cn', target_host).replace('yues.org', target_host).replace('bbs.nga.cn', target_host).replace('ngacn.cc', target_host).replace('nga.178.com', target_host);
