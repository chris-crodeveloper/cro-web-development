/**
 * @file Functions to build overlays
 * @category Global Templates
 * @module Overlays
 */

/**
 * Builds a responsive full screen overlay.
 * Use the SCSS mixin "fullscreenOverlay" for styling.
 * ![Thin Banner](templates/overlays/overlay-fullscreen.png)
 * @function buildResponsiveFullScreenOverlay
 * @param {object} config - {overlayId, content}
 * @returns {overlayElements}
 */
export const buildResponsiveFullScreenOverlay = (config) => {
  const { overlayId = "", content = { header: "", body: "", footer: "" } } =
    config;

  // if the overlay already exists - don't build it again
  const htmlTag = document.querySelector(`html`);
  const doesOverlayExist = document.querySelector(`#${overlayId}`);
  if (doesOverlayExist) {
    doesOverlayExist.classList.remove("vm-cro-fullscreen-overlay--hide");
    htmlTag.classList.add("vm-cro-fullscreen-overlay--active");
    return;
  }

  // Overlay structure
  // Overlay
  const overlay = document.createElement("div");
  overlay.classList.add("vm-cro-fullscreen-overlay");
  overlay.classList.add("vm-cro-fullscreen-overlay--hide");
  overlay.id = overlayId;
  overlay.addEventListener("click", (e) => {
    // Hide when background is clicked
    const currentTarget = e.currentTarget;
    const target = e.target;
    if (currentTarget === target) {
      overlay.classList.add("vm-cro-fullscreen-overlay--hide");
      htmlTag.classList.remove("vm-cro-fullscreen-overlay--active");
    }
  });

  // Inner overlay
  const overlayContainer = document.createElement("div");
  overlayContainer.classList.add("vm-cro-fullscreen-overlay--container");

  // Close icon
  const overlayClose = document.createElement("span");
  overlayClose.classList.add("vm-cro-fullscreen-overlay--overlay-close");
  overlayClose.innerHTML = `<i class="far fa-fw fa-times"></i>`;
  overlayClose.addEventListener("click", () => {
    overlay.classList.add("vm-cro-fullscreen-overlay--hide");
    htmlTag.classList.remove("vm-cro-fullscreen-overlay--active");
  });

  const overlayHeader = document.createElement("div");
  overlayHeader.classList.add("vm-cro-fullscreen-overlay--header");

  // Add header content
  typeof content.header === "string"
    ? (overlayHeader.innerHTML = content.header)
    : overlayHeader.insertAdjacentElement("beforeend", content.header);

  // Add close icon to header
  overlayHeader.appendChild(overlayClose);

  const overlayBody = document.createElement("div");
  overlayBody.classList.add("vm-cro-fullscreen-overlay--body");

  // Add body content
  typeof content.body === "string"
    ? (overlayBody.innerHTML = content.body)
    : overlayBody.insertAdjacentElement("beforeend", content.body);

  const overlayFooter = document.createElement("div");
  overlayFooter.classList.add("vm-cro-fullscreen-overlay--footer");

  // Add footer content
  typeof content.footer === "string"
    ? (overlayFooter.innerHTML = content.footer)
    : overlayFooter.insertAdjacentElement("beforeend", content.footer);

  // Append elements
  overlayContainer.appendChild(overlayHeader);
  overlayContainer.appendChild(overlayBody);
  overlayContainer.appendChild(overlayFooter);
  overlay.appendChild(overlayContainer);

  return {
    overlayClose,
    overlayHeader,
    overlayBody,
    overlayFooter,
    overlayContainer,
    overlay,
  };
};

/**
 * Opens or closes the overlay depending on the current state
 * @function toggleOverlayById
 * @param {string} overlayId
 */
export const toggleOverlayById = (overlayId) => {
  const overlay = document.querySelector(`#${overlayId}`);
  const htmlTag = document.querySelector(`html`);
  if (overlay.classList.contains("vm-cro-fullscreen-overlay--hide")) {
    overlay.classList.remove("vm-cro-fullscreen-overlay--hide");
    htmlTag.classList.add("vm-cro-fullscreen-overlay--active");
  } else {
    overlay.classList.add("vm-cro-fullscreen-overlay--hide");
    htmlTag.classList.remove("vm-cro-fullscreen-overlay--active");
  }
};

/**
 * Inserts the overlay as a direct child to the body element
 * @function insertOverlayIntoBody
 * @param {HTMLElement} overlayId
 */
export const insertOverlayIntoBody = (overlayElement) => {
  document.body.appendChild(overlayElement);
};
