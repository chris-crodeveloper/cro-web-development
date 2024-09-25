/*
 ** Developer: <%= developer %>
 ** Date: <%= date %>
 ** Test: <%= testName %>
 ** Variation: <%= variations.currentVariation.name %>
 ** Description: <%= testDescription %>
 */

import { setupFireGaEvent } from "../../../../../utils/js/ga/utils";
import { withTryCatchHandleError } from "../../../../../utils/js/utils";

const testId = "<%= testId %>";
const fireGA = setupFireGaEvent(testId);
const utils = window["optimizely"].get("utils");
const safeFunction = withTryCatchHandleError("<%= testId %>", fireGA);

// Add a CSS selector of the element
utils.waitForElement("").then(function (element) {
  try {
    // Confirm control is firing
    fireGA("<%= variations.currentVariation.name %>", "active");

    // Add namespace to body
    document.documentElement.classList.add(testId);

    // Add your code here...
  } catch (error) {
    console.log(error);
  }
});
