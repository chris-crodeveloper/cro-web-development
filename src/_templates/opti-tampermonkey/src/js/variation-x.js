/*
 ** Developer: <%= developer %>
 ** Date: <%= date %>
 ** Test: <%= testName %>
 ** Variation: <%= variations.currentVariation.name %>
 ** Description: <%= testDescription %>
 */

import { waitForElement } from "cro-utils";

/**
 * Optimizely IDs
 */

const experimentId = "<%= optimizely.experimentId %>",
  variationId = "<%= variations.currentVariation.id %>",
  variationName = "<%= variations.currentVariation.name %>",
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
