const selectors = [
  ':is(div[role="listitem"]):has(:is(.s-result-list .a-spacing-micro))',
  ":is(div[data-asin]):has(:is(.sponsored-brand-label-info-desktop))",
  ':is(div[data-asin]):has(:is([data-is-sponsored-label-active="true"]))',
  ':is([class*="item-row-"][class*="-container"]):has(:is([class*="sticker-container"] > [class*="sticker-image-ku"]))',
  ':is([class*="manga-genre-ranking-card"][class*="grid-item"]):has(:is([class*="sticker-container"] > [class*="sticker-image-ku"]))',
];

selectors.forEach((selector) => {
  document.querySelectorAll(selector).forEach((e) => e.remove());
});
