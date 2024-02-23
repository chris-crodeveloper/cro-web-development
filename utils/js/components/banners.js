/**
 * @file Functions to build banners
 * @category Global Templates
 * @module Banners
 */

/**
 * Builds a hero banner.
 * @function buildHeroBanner
 * @param {object} config - {testId, title, copy, ctaCopy, ctaUrl, imageUrl}
 */
export const buildHeroBanner = (config) => {
  const {
    testId = "",
    title = "",
    copy = "",
    ctaArray = [],
    imageUrl = "",
  } = config;
  return `
    <div class="${testId}--banner cro-hero-banner-1">
        <div class="cro-hero-banner-1--content">
            ${title ? ` <h3>${title}</h3> ` : ""}
            ${copy ? ` <p>${copy}</p> ` : ""}
            ${ctaArray.forEach((cta) => {
              cta.copy && cta.url
                ? ` <a href="${cta.url}"><span>${cta.copy}</span></a> `
                : "";
            })}
        </div>
        <div class="cro-hero-banner-1--image">
            ${imageUrl ? `<img src="${imageUrl}" />` : ""}
        </div>
    </div>
    `;
};

/**
 * Builds a thin banner.
 * Use the SCSS mixin "vm.thin-banner" for styling
 * ![Thin Banner](templates/banners/thin-banner.png)
 * @function buildThinBanner
 * @param {object} config - {testId, title, copy, ctaCopy, ctaUrl, imageUrl}
 */
export const buildThinBanner = (config) => {
  const {
    testId = "",
    title = "",
    copy = "",
    ctaArray = [],
    terms = "",
    imageUrl = {
      desktop: "",
      tablet: "",
      mobile: "",
      default: "",
      alt: "",
    },
    responsive = {
      mobile: "",
      tablet: "",
      desktop: "",
    },
  } = config;
  let ctaString = "";
  ctaArray.forEach((cta, index) => {
    ctaString += `<a class="${testId}--banner--cta-${index}" href="${cta.url}"><span>${cta.copy}</span></a>`;
  });
  return `
    <div class="${testId}--banner cro-thin-banner-1">
        <span class="cro-thin-banner-1--banner-close">
          <i class="far fa-fw fa-times"></i>
        </span>
        <div class="cro-thin-banner-1--content">
            ${title ? ` <h3>${title}</h3> ` : ""}
            ${copy ? ` <p>${copy}</p> ` : ""}
            ${
              ctaString
                ? `<div class="${testId}--banner--ctas cro-thin-banner-1--ctas">${ctaString}</div>`
                : ""
            }
        </div>
        ${
          imageUrl.default !== ""
            ? ` <div class="cro-thin-banner-1--image">
            <picture>
              ${
                imageUrl.mobile
                  ? `<source media="(max-width:${responsive.mobile})" srcset="${imageUrl.mobile}">`
                  : ""
              }
              ${
                imageUrl.tablet
                  ? `<source media="(min-width:${responsive.tablet})" srcset="${imageUrl.tablet}">`
                  : ""
              }
              ${
                imageUrl.desktop
                  ? `<source media="(min-width:${responsive.desktop})" srcset="${imageUrl.desktop}">`
                  : ""
              }
              <img src="${imageUrl.default}" alt="${imageUrl.alt}">
            </picture>
        </div>`
            : ""
        }

        ${
          terms !== ""
            ? `
          <div class="cro-thin-banner-1--terms">
            <p>${config.terms}</p>
          </div>`
            : ""
        }
    </div>
    `;
};
