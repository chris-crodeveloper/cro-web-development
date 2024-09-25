/*
 ** Developer: <%= developer %>
 ** Date: <%= date %>
 ** Test: <%= testName %>
 ** Variation: <%= variations.currentVariation.name %>
 ** Description: <%= testDescription %>
 */

let sendGAMetric;
let handleError;
let fireGA;

if (window.cro) {
  sendGAMetric = window.cro.sendGAMetric;
  handleError = window.cro.handleError;
}

const runVariation = (event) => {
  const experimentId = event.data.experimentId,
    variationId = event.data.variationId,
    variationName = "<%= variations.currentVariation.name %>",
    storyNumber = "<%= testId %>";

  fireGA = sendGAMetric(storyNumber, experimentId, variationId, variationName);

  const utils = window["optimizely"].get("utils");

  // Add a CSS selector of the element
  utils.waitForElement("body").then(function (element) {
    try {
      // Add namespace to body
      document.documentElement.classList.add(storyNumber);

      // Add your code here...
    } catch (error) {
      console.log(error);
    }
  });
};

window["optimizely"] = window["optimizely"] || [];
window.optimizely.push({
  type: "addListener",
  filter: {
    type: "action",
    name: "applied",
  },
  handler: runVariation,
});
