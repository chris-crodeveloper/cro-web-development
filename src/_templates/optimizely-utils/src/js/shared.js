/*
 ** Developer: <%= developer %>
 ** Date: <%= date %>
 ** Test: <%= testName %>
 ** Variation: Shared
 ** Description: <%= testDescription %>
 */

const testId = "<%= testId %>";
const utils = window["optimizely"].get("utils");

// Add a CSS selector of the element
utils.waitForElement("").then(function (element) {
  try {
    // Create a window object for the shared code which can be called from variations
    window[testId] = {};
    window[testId].activate = () => {
      // Add your code here...
    };

    // Add a 'ready' class which can be used in variations to wait for shared changes to be complete
    document.documentElement.classList.add(`${testId}-ready`);
  } catch (error) {
    console.log(error);
  }
});
