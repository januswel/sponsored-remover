const selectors = [
  ':is(div[role="listitem"]):has(:is(.s-result-list .a-spacing-micro))',
  ":is(div[data-asin]):has(:is(.sponsored-brand-label-info-desktop))",
  ':is(div[data-asin]):has(:is([data-is-sponsored-label-active="true"]))',
  ':is([class*=item-row]):has(:is([src="https://f.media-amazon.com/images/I/11TUGKWP39L.png"]))',
];

selectors.forEach((selector) => {
  document.querySelectorAll(selector).forEach((e) => e.remove());
});
