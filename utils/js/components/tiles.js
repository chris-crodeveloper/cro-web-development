/**
 * @file Functions to build tiles
 * @category Global Components
 * @module Tiles
 */

/**
 * Builds a tile with an image on the left and text on the right
 * Use the SCSS mixin "vm.left-image-right-text-tile()" for styling
 * ![Left Image Right Text Tile Mobile](components/tiles/leftImageRightTextTile-mobile.png)
 * ![Left Image Right Text Tile Desktop](components/tiles/leftImageRightTextTile-desktop.png)
 * @function leftImageRightTextTile
 * @param {string} image - Path to an image
 * @param {string} alt - Alt text for the image
 * @param {string} text - Text for the right hand side of the tile
 * @param {string} link - href for the tile
 *
 */
export const leftImageRightTextTile = (image, alt, text, link, data) => {
  return `
  <div class="left-image-right-text-tile">
    <a href="${link}" class="left-image-right-text-tile--link" data-attr="${data}">
      <div class="left-image-right-text-tile--media">
        <img alt="${alt}" src="${image}" class="left-image-right-text-tile--image">
      </div>
      <div class="left-image-right-text-tile--title-container">
        <h3 class="left-image-right-text-tile--title">
          ${text}
        </h3>
      </div>
    </a>
  </div>
    `;
};

/**
 * Builds a tile with an icon, header and description
 * Use the SCSS mixin "vm.icon-tile()" for styling
 * ![Icon Tile](components/tiles/icon-tile.png)
 * @function buildIconTile
 * @param {string} image - Path to an image
 * @param {string} alt - Alt text for the image
 * @param {string} header - Header text
 * @param {string} description - Description text
 * @param {string} link - href for the tile
 *
 */
export const buildIconTile = (image, alt, header, description, link) => {
  return `
  <div class="icon-tile">
    <a href="${link}" class="icon-tile--link">
      <img alt="${alt}" src="${image}" class="icon-tile--icon">
      <h3 class="icon-tile--title"> ${header}</h3>
      <p class="icon-tile--description">${description}</p>
    </a>
  </div>
    `;
};

/**
 * Builds a tile with a header, description and CTA on the left and image on the right
 * Use the SCSS mixin "vm.text-cta-left-image-right()" for styling
 * ![Text and CTA left, image right tile desktop](components/tiles/textCtaLeftImageRightTile-desktop.png)
 * ![Text and CTA left, image right tile mobile](components/tiles/textCtaLeftImageRightTile-mobile.png)
 * @function buildTextCtaLeftImageRightTile
 * @param {string} header - Text for the header
 * @param {string} description - Text for the description
 * @param {string} image - Path to an image
 * @param {string} alt - Alt text for the image
 * @param {string} ctaText - CTA text
 * @param {string} ctaLink - CTA link
 *
 */
export const buildTextCtaLeftImageRightTile = (
  header,
  description,
  image,
  alt,
  ctaText,
  ctaLink,
  mobileImage,
  mobileMaxWidth
) => {
  return `
  <div class="text-cta-left-image-right-tile">
    <div class="text-cta-left-image-right-tile--left-content">
      <h3 class="text-cta-left-image-right-tile--left-content__header">
        ${header}
      </h3>
      <p class="text-cta-left-image-right-tile--left-content__description">
        ${description}
      </p>
      <a href="${ctaLink}" class="text-cta-left-image-right-tile--left-content__cta">
        <span>${ctaText}</span>
      </a>
    </div>
    <div class="text-cta-left-image-right-tile--right-content">
    <picture>
      ${
        mobileImage
          ? `<source media="(max-width: ${
              mobileMaxWidth ? mobileMaxWidth : "767px"
            })" srcset="${mobileImage}" />`
          : ``
      }
      <img alt="${alt}" src="${image}" class="text-cta-left-image-right-tile--right-content__image">
    </picture>
    </div>
  </div>
    `;
};

/**
 * Builds a tile an icon, text and chevron used for Quicklinks
 * Use the SCSS mixin "vm.quicklinks()" for styling
 * ![Quicklink Desktop](components/tiles/quicklinks-desktop.png)
 * ![Quicklink Mobile](components/tiles/quicklinks-mobile.png)
 * @function buildQuickLink
 * @param {string} image - Image path for the quicklink icon
 * @param {string} alt - Alt text for icon
 * @param {string} label - Label for the quicklink
 * @param {string} link - Destination href for the quiclink
 *
 */
export const buildQuickLink = (image, alt, label, link) => {
  return `
  <div class="quicklink-container">
    <a class="quicklink-container--link" href="${link}">
      <div class="quicklink-container--content" >
        <img class="quicklink-container--image" src="${image}" alt="${alt}" />
        <h5 class="quicklink-container--label">${label}</h5>
      </div>
      <i class="far fa-fw fa-chevron-down ng-star-inserted"></i>
    </a>
  </div>
    `;
};
