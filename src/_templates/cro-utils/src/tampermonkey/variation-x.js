// ==UserScript==
// @name         <%= testId %>: Variation <%= variations.currentVariation.index %>
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       <%= developer %>
// @description  <%= testDescription %>
// @match        <%= testUrl %>*
// @resource     sharedCssFile <%= css.shared %>
// @resource     cssFile <%= css.variation %>variation-<%= variations.currentVariation.index %>.css
// @require      <%= js.shared %>
// @require      <%= js.variation %>variation-<%= variations.currentVariation.index %>.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

var sharedCssFile = GM_getResourceText("sharedCssFile");
GM_addStyle(sharedCssFile);

var cssFile = GM_getResourceText("cssFile");
GM_addStyle(cssFile);
