/*
 ** Developer: <%= developer %>
 ** Date: <%= date %>
 ** Test: <%= testName %>
 ** Variation: <%= variations.currentVariation.name %>
 ** Description: <%= testDescription %>
 */

/**
 * Optimizely IDs
 */

import { waitForElement } from "cro-utils";

const experimentId = "<%= optimizely.experimentId %>",
  variationId = "<%= variations.currentVariation.id %>",
  variationName = "<%= variations.currentVariation.name %>",
  testId = "<%= testId %>";

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
