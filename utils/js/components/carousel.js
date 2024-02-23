/**
 * @file Functions to Carsouel Components
 * @category Global Components
 * @module Carousels
 */

/**
 * Builds a carousel which will auto scroll infinitely using SCSS.
 * Options allow for the carousel to have 2 rows and each row to scroll in different directions.
 * The tile params will be cloned once too allow for the infinite scroll effect
 * Use the SCSS mixin "vm.auto-scroll-carousel()" for styling
 * ![Thin Banner](components/carousel/carousel-desktop.png)
 * ![Thin Banner](components/carousel/carousel-mobile.png)
 * @function buildAutoScrollCarousel
 * @param {array|html} topRowTiles - An array of HTML components or a single HTML string
 * @param {boolean} topRowScrollLeft - Default is 'true', if false it will scroll right.
 * @param {array|html} bottomRowTiles - An array of HTML components or a single HTML string
 * @param {boolean} bottomRowScrollLeft - Default is 'false', if false it will scroll left.
 * @param {object} hoverOptions - {pauseWholeCarousel: false, pauseSingleRow: true, growTileOnHover: false}
 *
 */
export const buildAutoScrollCarousel = (
  topRowTiles,
  topRowScrollLeft = true,
  bottomRowTiles,
  bottomRowScrollLeft = false,
  hoverOptions = {
    pauseWholeCarousel: false,
    pauseSingleRow: true,
    growTileOnHover: false,
  }
) => {
  // Outer Carousel Container
  const carouselContainer = document.createElement("div");
  carouselContainer.setAttribute("id", "carousel-container");

  // Inner Carousel
  const innerContainer = document.createElement("div");
  innerContainer.setAttribute("id", "carousel");

  // Rows
  const carouselRows = [];
  let bottomRow;
  const topRow = document.createElement("div");
  topRow.classList.add("carousel-row", topRowScrollLeft ? "left" : "right");

  // Add tiles to row
  if (topRowTiles) {
    if (typeof topRowTiles == "string") {
      // Clone and add the tiles
      topRow.innerHTML = topRowTiles + topRowTiles;
    }
    if (typeof topRowTiles == "array") {
      // Clone and add the tiles
      topRowTiles.forEach((tile) => {
        topRow.insertAdjacentElement("afterbegin", tile);
      });

      // Clone and add the tiles
      topRowTiles.forEach((tile) => {
        topRow.insertAdjacentElement("afterbegin", tile);
      });
    }
  }

  // Add tiles to top row
  carouselRows.push(topRow);

  // Setup the bottom row if it exists
  if (bottomRowTiles) {
    bottomRow = document.createElement("div");
    bottomRow.classList.add(
      "carousel-row",
      bottomRowScrollLeft ? "left" : "right"
    );

    // Add tiles to row
    if (bottomRowTiles) {
      if (typeof bottomRowTiles == "string") {
        // Clone and add the tiles
        bottomRow.innerHTML = bottomRowTiles + bottomRowTiles;
      }
      if (typeof bottomRowTiles == "array") {
        // Clone and add the tiles
        bottomRowTiles.forEach((tile) => {
          bottomRow.insertAdjacentElement("afterbegin", tile);
        });

        // Clone and add the tiles
        bottomRowTiles.forEach((tile) => {
          bottomRow.insertAdjacentElement("afterbegin", tile);
        });
      }
    }

    // Add tiles to top row
    carouselRows.push(bottomRow);
  }

  // Add rows to carousel
  carouselRows.forEach((row) => {
    innerContainer.insertAdjacentElement("afterbegin", row);
  });

  // View all link
  const viewAll = document.createElement("a");
  viewAll.innerText = "View all deals";
  viewAll.setAttribute(
    "href",
    "https://www.virginmedia.com/support/help/change-my-package/my-current-package/offers?intcmpid=myvm"
  );
  viewAll.classList.add("carousel--view-all");

  carouselContainer.appendChild(viewAll);
  carouselContainer.appendChild(innerContainer);

  // ------------------ Event listeners and hover options
  if (hoverOptions.pauseWholeCarousel) {
    // On hover on
    carouselContainer.addEventListener("mouseover", () => {
      innerContainer.classList.add("pause");
    });

    // On hover off
    carouselContainer.addEventListener("mouseout", () => {
      innerContainer.classList.remove("pause");
    });
  }

  if (hoverOptions.pauseSingleRow) {
    // Top row on hover on
    topRow.addEventListener("mouseover", () => {
      topRow.classList.add("pause");
    });

    // Top row on hover off
    topRow.addEventListener("mouseout", () => {
      topRow.classList.remove("pause");
    });

    if (bottomRow) {
      // Bottom row on hover on
      bottomRow.addEventListener("mouseover", () => {
        bottomRow.classList.add("pause");
      });

      // Bottom row on hover off
      bottomRow.addEventListener("mouseout", () => {
        bottomRow.classList.remove("pause");
      });
    }
  }

  // TODO
  if (hoverOptions.growTileOnHover) {
  }

  return carouselContainer;
};
