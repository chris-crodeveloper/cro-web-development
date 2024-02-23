/*
 ** Developer: <%= developer %>
 ** Date: <%= date %>
 ** Test: <%= testName %>
 ** Variation: Shared
 ** Description: <%= testDescription %>
 */

import { waitForElement } from "../../../../utils/js/utils";

/**
 * Optimizely IDs
 */

const experimentId = "<%= optimizely.experimentId %>",
  variationId = "<%= optimizely.variationId %>";

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
