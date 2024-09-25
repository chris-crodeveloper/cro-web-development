/*
 ** Developer: <%= developer %>
 ** Date: <%= date %>
 ** Test: <%= testName %>
 ** Variation: Shared
 ** Description: <%= testDescription %>
 */

import { waitForElementSendAlert } from "../../../../../utils/js/utils";
import { setupFireGaEvent } from "../../../../../utils/js/ga/utils";
import { withTryCatchHandleError } from "../../../../../utils/js/utils";

const testId = "<%= testId %>";
const fireGA = setupFireGaEvent(testId);
const safeFunction = withTryCatchHandleError("<%= testId %>", fireGA);
const safeWaitForElement = waitForElementSendAlert("<%= testId %>", fireGA);

// Add a CSS selector of the element
safeWaitForElement("", function (element) {
  // Create a window object for the shared code which can be called from variations
  window[testId] = {};
  window[testId].activate = safeFunction(() => {
    // Add your code here...
    fireGA("test active", testId);
  });

  // Add a 'ready' class which can be used in variations to wait for shared changes to be complete
  document.documentElement.classList.add(`${testId}-ready`);
});
