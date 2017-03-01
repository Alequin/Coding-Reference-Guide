
isBasicLayoutVisible = true;

function toggleCSS() {
  cssFile = isBasicLayoutVisible ? "../css/large-text-summary-page.css" : "../css/normal-text-summary-page.css";
  isBasicLayoutVisible = !isBasicLayoutVisible;
  document.getElementById('summary-page-layout').setAttribute('href', cssFile);
}
