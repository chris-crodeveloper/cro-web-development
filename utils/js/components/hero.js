/**
 * @file Functions to build hero banners
 * @category Global Components
 * @module Tiles
 */

/**
 * Builds a tile with an image on the left and text on the right
 * Use the SCSS mixin "vm.left-image-right-text-tile()" for styling
 * ![Thin Banner](templates/banners/thin-banner.png)
 * @function leftImageRightTextTile
 * @param {string} image - Path to an image
 * @param {string} alt - Alt text for the image
 * @param {string} text - Text for the right hand side of the tile
 * @param {string} link - href for the tile
 *
 */
export const leftImageRightTextTile = (image, alt, text, link) => {
  return `
    <div class="left-image-right-text-tile">
      <a href="${link}" class="left-image-right-text-tile--link">
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
