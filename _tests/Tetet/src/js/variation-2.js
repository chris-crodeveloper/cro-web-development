/*
 ** Developer:
 ** Date: 21/02/2024
 ** Test: er
 ** Variation: Variation #2
 ** Description: wer
 */

/**
 * Optimizely IDs
 */

const experimentId = "a",
  variationId = "",
  variationName = "Variation #2",
  testId = "Tetet";

const utils = window["optimizely"].get("utils");

// Add a CSS selector of the element
utils.waitForElement("").then(function (element) {
  try {
    // Add namespace to body
    document.documentElement.classList.add(testId);

    // Add your code here...
  } catch (error) {
    console.log(error);
  }
});