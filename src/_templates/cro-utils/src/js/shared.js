/*
 ** Developer: <%= developer %>
 ** Date: <%= date %>
 ** Test: <%= testName %>
 ** Variation: Shared
 ** Description: <%= testDescription %>
 */

 import { waitForElement } from "cro-utils";

const testId = "<%= testId %>";

// Add a CSS selector of the element
waitForElement("", function (element) {
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
