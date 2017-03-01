
isBasicLayoutVisible = true;

function toggleCSS() {
  cssFile = isBasicLayoutVisible ? "../css/large-text-summary-page.css" : "../css/summary-page-layout.css";
  isBasicLayoutVisible = !isBasicLayoutVisible;
  document.getElementById('summary-page-layout').setAttribute('href', cssFile);
}
