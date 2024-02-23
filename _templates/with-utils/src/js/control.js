/*
 ** Developer: <%= developer %>
 ** Date: <%= date %>
 ** Test: <%= testName %>
 ** Variation: <%= currentVariation.control.name %>
 ** Description: <%= testDescription %>
 */

/**
 * Optimizely IDs
 */

import { waitForElement } from "../../../../utils/js/utils";

const experimentId = "<%= optimizely.experimentId %>",
  variationId = "<%= currentVariation.control.id %>",
  variationName = "<%= currentVariation.control.name %>",
  testId = "<%= testId %>";

const utils = window["optimizely"].get("utils");

// Add a CSS selector of the element
waitForElement("", function (element) {
  try {
    // Add namespace to body
    document.documentElement.classList.add(testId);

    // Add your code here...
  } catch (error) {
    console.log(error);
  }
});
