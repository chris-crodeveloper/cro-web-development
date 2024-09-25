/*
 ** Developer: <%= developer %>
 ** Date: <%= date %>
 ** Test: <%= testName %>
 ** Variation: <%= variations.currentVariation.name %>
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
  // Confirm control is firing
  fireGA("<%= variations.currentVariation.name %>", "active");

  // Add namespace to body
  document.documentElement.classList.add(testId);

  // Add your code here...
});
