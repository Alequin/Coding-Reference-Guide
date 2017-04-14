
$(document).ready(function(){

  BASIC_LAYOUT_HEADER_HEIGHT = 120;
  LARGE_LAYOUT_HEADER_HEIGHT = 200;

  $("#main-header").after(headerMenu);
  positionElementsRelativeToHeader(BASIC_LAYOUT_HEADER_HEIGHT);

  insertContentsItems(getSearchTerm());

  $("#contents-title").click(function(){
    toggleContentsVisibility();
  });

  $("#contents-container a").click(function(){
    toggleContentsVisibility();
  });

  $('#layout-switcher').click(function(){
    toggleCSS();
    headerHeight = isBasicLayoutVisible ?
          BASIC_LAYOUT_HEADER_HEIGHT : LARGE_LAYOUT_HEADER_HEIGHT;
    positionElementsRelativeToHeader(headerHeight);
  });

  $('#search-button').click(function(){
    removeContentsItems();
    insertContentsItems(getSearchTerm());
  });

});
