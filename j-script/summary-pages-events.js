$(document).ready(function(){

  $("#main-header").after(headerMenu);
  positionElementsRelativeToHeader();

  $("#contents-title").click(function(){
    toggleContentsVisibility();
  });

  $("#contents-container a").click(function(){
    toggleContentsVisibility();
  });

  $('#layout-switcher').click(function(){
    toggleCSS();
    timeDelay = 50;
    setTimeout(function () {
      positionElementsRelativeToHeader();
    }, timeDelay);
  });
});
