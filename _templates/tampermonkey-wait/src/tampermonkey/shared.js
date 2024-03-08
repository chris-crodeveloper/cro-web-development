// ==UserScript==
// @name         <%= testId %>: Shared
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       <%= developer %>
// @description  <%= testDescription %>
// @match        <%= testUrl %>*
// @resource     sharedCssFile <%= css.shared %>
// @resource     cssFile <%= css.control %>
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

const jsFiles = ["<%= js.server.shared %>", "<%= js.server.control %>"];

function waitForOptimizely(callback, interval = 100) {
  const maxAttempts = 50; // Adjust as needed
  let attempts = 0;
  const checkExistence = () => {
    if (typeof unsafeWindow !== "undefined") {
      if (
        typeof unsafeWindow.optimizely !== "undefined" ||
        typeof unsafeWindow["optimizely"] !== "undefined"
      ) {
        callback(unsafeWindow.optimizely || unsafeWindow["optimizely"]);
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(checkExistence, interval);
      } else {
        console.warn("Optimizely not found after multiple attempts.");
      }
    } else {
      if (
        typeof window.optimizely !== "undefined" ||
        typeof window["optimizely"] !== "undefined"
      ) {
        callback(window.optimizely || window["optimizely"]);
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(checkExistence, interval);
      } else {
        console.warn("Optimizely not found after multiple attempts.");
      }
    }
    // Check if Optimizely-related objects or properties exist on the WindowProxy
  };
  checkExistence();
}

function injectJS(jsUrl) {
  const script = document.createElement("script");
  script.src = jsUrl;
  document.head.appendChild(script);
}

waitForOptimizely((optimizely) => {
  // CSS and JS injection code can go here
  var sharedCssFile = GM_getResourceText("sharedCssFile");
  GM_addStyle(sharedCssFile);

  var cssFile = GM_getResourceText("cssFile");
  GM_addStyle(cssFile);

  jsFiles.forEach((url) => {
    injectJS(url);
  });
});
