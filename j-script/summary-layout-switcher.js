
isBasicLayoutVisible = true;

function toggleCSS() {
  cssFile = isBasicLayoutVisible ? "../css/large-text-summary-page.css" : "../css/summary-page-layout.css";
  isBasicLayoutVisible = !isBasicLayoutVisible;
  document.getElementById('summary-page-layout').setAttribute('href', cssFile);
}

$(document).ready(function(){

  $('#layout-switcher').click(function(){
    toggleCSS();
    timeDelay = 50;
    if(isContentsVisible){
      toggleContentsVisibility();
      timeDelay = 200;
    }
    setTimeout(function () {
      positionElementsRelativeToHeader();
    }, timeDelay);
  });
});
