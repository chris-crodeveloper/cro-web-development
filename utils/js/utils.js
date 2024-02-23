/**
 * @file Global Utility functions
 * @category Global Utils
 * @module GlobalUtils
 */

/**
 * This callback is displayed as a global member.
 * @callback waitForElementCallback
 * @param {HTMLElement} el
 */

/**
 * Waits for an HTML element to exist in the DOM.
 * @function waitForElement
 * @param {string} element - CSS selector string for the element to wait for
 * @param {waitForElementCallback} callback - Callback to run once element is found with, the cached HTML element as a parameter
 */
export const waitForElement = (element, callback) => {
  const maxCalls = 50,
    delay = 500;
  let count = 0;
  const interval = setInterval(() => {
    try {
      const el = document.querySelector(element);

      if (el) {
        clearInterval(interval);

        callback(el);
      }

      // After trying to find the element for 6 seconds, it stops
      if (count > maxCalls) clearInterval(interval);

      // increment interval count
      count++;
    } catch (error) {
      console.error(error);
    }
  }, delay);
};

/**
 * Waits for HTML elements (using querySelectorAll) to exist in the DOM.
 * @function waitForElements
 * @param {string} element - CSS selector string for the elements to wait for
 * @param {waitForElementCallback} callback - Callback to run once element is found with, the cached HTML DOM Element Array as a parameter
 */
export const waitForElements = (element, callback) => {
  const maxCalls = 50,
    delay = 500;
  let count = 0;
  const interval = setInterval(() => {
    try {
      const el = document.querySelectorAll(element);

      if (el.length > 0) {
        clearInterval(interval);

        callback(el);
      }

      // After trying to find the element for 6 seconds, it stops
      if (count > maxCalls) clearInterval(interval);

      // increment interval count
      count++;
    } catch (error) {
      console.error(error);
    }
  }, delay);
};

/**
 * Waits for an item to be present in local storage.
 * @function waitForLocalStorageItem
 * @param {string} itemName - Local storage item name
 * @param {function} callback - Callback to run once element is found with, the cached local storage item as a parameter
 * @param {object} intervalConfig - maxCalls and delay
 * @param {function} fallback - Fallback to run when the interval times out
 */
export const waitForLocalStorageItem = (
  itemName,
  callback,
  intervalConfig,
  fallback
) => {
  const maxCalls = intervalConfig ? intervalConfig.maxCalls : 500,
    delay = intervalConfig ? intervalConfig.delay : 50;
  let count = 0;
  const interval = setInterval(() => {
    try {
      // Add code here
      const item = window.localStorage.getItem(itemName);

      if (item && item !== "null") {
        clearInterval(interval);

        callback(JSON.parse(item));
      }

      // After trying to find the element for 6 seconds, it stops
      if (count > maxCalls) {
        clearInterval(interval);
        if (fallback) fallback();
      }

      // increment interval count
      count++;
    } catch (error) {
      console.error(error);
    }
  }, delay);
};

/**
 * Waits for an item to be present in session storage.
 * @function waitForSessionStorageItem
 * @param {string} itemName - Session storage item name
 * @param {function} callback - Callback to run once element is found, with the cached session storage item as a parameter
 * @param {object} intervalConfig - maxCalls and delay
 * @param {function} fallback - Fallback to run when the interval times out
 */
export const waitForSessionStorageItem = (
  itemName,
  callback,
  intervalConfig,
  fallback
) => {
  const maxCalls = intervalConfig ? intervalConfig.maxCalls : 500,
    delay = intervalConfig ? intervalConfig.delay : 50;
  let count = 0;
  const interval = setInterval(() => {
    try {
      // Add code here
      const item = window.sessionStorage.getItem(itemName);

      if (item && item !== "null") {
        clearInterval(interval);

        callback(item);
      }

      // After trying to find the element for 6 seconds, it stops
      if (count > maxCalls) {
        clearInterval(interval);
        if (fallback) fallback();
      }

      // increment interval count
      count++;
    } catch (error) {
      console.error(error);
    }
  }, delay);
};

/**
 * Waits for an item to be present in window
 * @function waitForWindowProperty
 * @param {string} propertyName - Window object property name
 * @param {function} callback - Callback to run once property is found, with the cached window property as a parameter
 * @param {object} intervalConfig - maxCalls and delay
 * @param {function} fallback - Fallback to run when the interval times out
 */
export const waitForWindowProperty = (
  propertyName,
  callback,
  intervalConfig,
  fallback
) => {
  const maxCalls = intervalConfig ? intervalConfig.maxCalls : 500,
    delay = intervalConfig ? intervalConfig.delay : 50;
  let count = 0;
  const interval = setInterval(() => {
    try {
      // Add code here
      const item = window[propertyName];

      if (item && item !== "null") {
        clearInterval(interval);

        callback(item);
      }

      // After trying to find the element for 6 seconds, it stops
      if (count > maxCalls) {
        clearInterval(interval);
        if (fallback) fallback();
      }

      // increment interval count
      count++;
    } catch (error) {
      console.error(error);
    }
  }, delay);
};

/**
 * Checks for presence of a cookie
 * @function getCookie
 * @param {string} cname - cookie name
 * @returns {string} - empty string or cookie name
 */
export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

/**
 * Sets a cookie in the browser
 * @function setCookie
 * @param {string} cname - cookie name
 * @param {string} cvalue - cookie value
 * @param {number} exdays - days until expiry
 */
export const setCookie = (cname, cvalue, exdays) => {
  if (exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  } else {
    document.cookie = cname + "=" + cvalue + ";";
  }
};

/**
 * Sets a cookie in the browser
 * @function deleteCookie
 * @param {string} cname - cookie name
 */
export const deleteCookie = (cname) => {
  if (document.cookie.indexOf(cname) > -1) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
};

/**
 * This function is returned from the sendGAMetric function
 * @function fireGA
 * @param {string} eventName
 * @param {string} eventValue
 * @param {number} newVarId optional - for use in shared.js where you may need different variationId
 * @param {string} newVarName optional - for use in shared.js where you may need different variationName
 */

/**
 * Sends a metric to GA
 * @function sendGAMetric
 * @param {string} storyNumber
 * @param {Number} experimentId
 * @param {Number} variationId
 * @param {string} variationName
 * @returns {fireGA}  With params {eventName, eventValue,  newVarId, newVarName}
 * The newVarId and newVarName params are to be used in the shared.js as variationId and variationName
 * will need to be overwritten by the variation that is running.
 */
export const sendGAMetric = (
  storyNumber,
  experimentId,
  variationId,
  variationName
) => {
  return (eventName, eventValue, newVarId, newVarName) => {
    dataLayer.push({
      event: "optimizely_event",
      event_name: "optimizely_event",
      optimizely_experiment: experimentId,
      optimizely_experiment_name: storyNumber,
      optimizely_variant: newVarId ? newVarId : variationId,
      optimizely_variant_name: newVarName ? newVarName : variationName,
      optimizely_event_name: eventName,
      optimizely_event_value: eventValue,
    });

    console.log(
      `VM Tag sent - optimizely_event: ${storyNumber} : ${experimentId} : ${variationId} : ${variationName} : ${eventName} : ${eventValue}`
    );
  };
};

/**
 * Sends a metric to Optimizely
 * @function sendOptimizelyMetric
 * @param {string} eventName
 */
export const sendOptimizelyMetric = (eventName) => {
  window.optimizely = window.optimizely || [];
  window["optimizely"].push({
    type: "event",
    eventName: eventName,
  });
};

/**
 * Sends a metric to GA4
 * @function sendGA4Metric
 * @param {number} optimizelyExperiment // Optimizely Experiment ID
 * @param {string} optimizelyExperimentName // Optimizely Experiment Name
 * @param {number} optimizelyVariantId // Optimizely Variant ID
 * @param {string} optimizelyVariantName // Optimizely Variant Name
 * @param {string} optimizelyEventName // Event Name
 * @param {string} optimizelyEventValue // Event Value
 */
export const sendGA4Metric = (
  optimizelyExperiment,
  optimizelyExperimentName,
  optimizelyVariantId,
  optimizelyVariantName,
  optimizelyEventName,
  optimizelyEventValue
) => {
  window.dataLayer = window.dataLayer || [];

  dataLayer.push({
    event: "optimizely_event",
    event_name: "optimizely_event",
    optimizely_experiment: optimizelyExperiment, // CRO developer must manually add the experiment ID.
    optimizely_experiment_name: optimizelyExperimentName, // CRO developer must manually JIRA ticket number for the test. (eg CRO-123)
    optimizely_variant: optimizelyVariantId, // CRO developer must manually add the variant ID.
    optimizely_variant_name: optimizelyVariantName, // CRO developer must manually add the variant name.
    optimizely_event_name: optimizelyEventName, // CRO developer must manually set the event name for example "click", "open", "close" etc... decryption of action taking place.
    optimizely_event_value: optimizelyEventValue, // OPTIONAL: CRO developer must manually event value, this could be the button text value. Limited to 100 characters.
  });
};

/**
 * Return event from data layer
 * @function getEventFromDataLayer
 * @param {string} eventName - event name property
 * @returns {object} event object
 */
export const getEventFromDataLayer = (eventName) => {
  try {
    const dataLayer = window.dataLayer || window[0].parent.dataLayer;
    let dataLayerItem;

    if (dataLayer) {
      dataLayer.forEach((item) => {
        if (item.event_name === eventName) {
          dataLayerItem = item;
        }
      });

      return dataLayerItem;
    }
  } catch (e) {
    console.log("Set to local storage error: ", e);
  }
};

/**
 * Make HTTP Fetch API call
 * @function fetchApi
 * @param {string} httpMethod - GET, POST
 * @param {string} url - URL
 * @param {object} payload - body
 * @param {object} headers - HTTP Headers
 * @returns {object} promise
 */
export const fetchApi = (httpMethod, url, payload, headers) => {
  let httpHeaders = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });
  if (headers) {
    headers.forEach((value, key) => {
      httpHeaders.append(key, value);
    });
  }
  return new Promise((resolve, reject) => {
    let options = { method: httpMethod, headers: httpHeaders };
    if ((httpMethod === "POST" || httpMethod === "PATCH") && payload) {
      options = { ...options, body: JSON.stringify(payload) };
    }

    fetch(url, options)
      .then((response) => {
        if (response) {
          if (response.ok) {
            return response.json();
          }
          return response.json().then((error) => {
            console.log(error);
            reject(error);
          });
        }
      })
      .then((jsonData) => {
        console.log(`${httpMethod}: ${url}`, jsonData);

        resolve(jsonData);
      })
      .catch((error) => {
        console.log(`${httpMethod}: ${url}`, error);
        reject(error);
      });
  });
};

/**
 * This callback is displayed as a global member.
 * @callback interceptAjaxResponseCallback
 * @param {string} responseURL - Ajax Response URL
 * @param {string} responseText - Ajax response Text
 */

/**
 * Intercepts AJAX requests by overwriting the XMLHttpRequest prototype.
 * @function interceptAjaxResponse
 * @param {string} pageUrl - The page URL that this function is required on. This is important as the function should be restricted as much as possible
 * @param {string} responseURL - The specific AJAX response URL the data is required from
 * @param {boolean} pageURLsubstringMatch - If true - the pageURL can be matched as a substring. If false, the pageURL is matched as an absolute match
 * @param {boolean} responseURLsubstringMatch - If true - the responseURL can be matched as a substring. If false, the responseURL is matched as an absolute match
 * @param {interceptAjaxResponseCallback} cb - callback. returning the RepsonseURL and the RepsonseText
 */
export const interceptAjaxResponse = (
  pageUrl,
  responseURL,
  pageURLsubstringMatch,
  responseURLsubstringMatch,
  cb
) => {
  // Check if the URL is a match
  if (pageURLsubstringMatch) {
    if (document.location.href.indexOf(pageUrl) === -1) {
      return;
    }
  } else {
    if (document.location.href !== pageUrl) {
      return;
    }
  }

  // Update the AJAX prototype
  const send = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.send = function () {
    this.addEventListener("load", function () {
      try {
        if (this && this.responseURL && this.responseText) {
          // Look for responseURL before changing code
          if (responseURLsubstringMatch) {
            if (this.responseURL.indexOf(responseURL) > -1) {
              const responseURL = this.responseURL;
              const responseText = this.responseText;
              cb(responseURL, responseText);
            }
          } else {
            if (this.responseURL === responseURL) {
              const responseURL = this.responseURL;
              const responseText = this.responseText;
              cb(responseURL, responseText);
            }
          }
        }
      } catch (error) {
        console.log("interceptAjaxResponse Error: " + error);
      }
    });

    return send.apply(this, arguments);
  };
};

/**
 * Set loading spinner
 * @function setLoadingSpinner - sets the loading spinner
 */
export const setLoadingSpinner = () => {
  try {
    const loadingSpinnerHTML = `<vm-loading-overlay class="cro-loading-spinner" class="ng-star-inserted"><div class="page-loading-indicator"><img alt="please wait..." class="small-loading-indicator" src="/my-virgin-media/assets/page-loader.gif"></div></vm-loading-overlay>`;
    document.body.insertAdjacentHTML("afterbegin", loadingSpinnerHTML);
  } catch (e) {
    console.log("Set to local storage error: ", e);
  }
};

/**
 * Set loading spinner
 * @function removeLoadingSpinner - removes the loading spinner
 */
export const removeLoadingSpinner = () => {
  try {
    document.querySelector(".cro-loading-spinner")?.remove();
  } catch (e) {
    console.log("Set to local storage error: ", e);
  }
};

/**
 * Mutation Observer on URL
 * @function mutationObserverOnURL
 * @param {string} pageUrl - The page URL on which you want the callback to execute on.
 * @param {object} callback - callback to run once location.href contains the above pageUrl.
 */
export const mutationObserverOnURL = (pageUrl, callback) => {
  let prevUrl = "";
  const mainEle = document.querySelector("main");
  new MutationObserver(() => {
    const currUrl = window.location.href;
    if (currUrl !== prevUrl) {
      prevUrl = currUrl;
      const isPreferredPage = currUrl.indexOf(pageUrl) > -1;
      if (isPreferredPage) {
        callback();
      }
    }
  }).observe(mainEle, { childList: true });
};

/**
 * To be used in catch blocks to handle any errors that occur
 * @function handleError
 * @param {string} storyNumber - Story number (eg CRO-123)
 * @param {error} error - Error thrown by try catch
 * @param {function} fireGA - fire GA function to send error to GA
 */
export const handleError = (storyNumber, error, fireGA) => {
  // Add error class to test when there is an error
  console.log(`${storyNumber} Error: ${error}`);
  document.documentElement.classList.add(`${storyNumber}-error`);
  if (fireGA) fireGA();
};

/**
 * To be used when we want to convert string to pascal case
 * @function toPascalCase
 * @param {string} inputString - "DAVID"
 * @returns {string} - pascal case string - David
 */
export const toPascalCase = (str) => {
  return str.replace(/(\w)(\w*)/g, function (_, first, rest) {
    return first.toUpperCase() + rest.toLowerCase();
  });
};
