
$(document).ready(function(){

  BASIC_LAYOUT_HEADER_HEIGHT = 120;
  LARGE_LAYOUT_HEADER_HEIGHT = 200;

  var contentsOrder = new OrderHolder();

  $("#main-header").after(headerMenu);
  positionElementsRelativeToHeader(BASIC_LAYOUT_HEADER_HEIGHT);

  var contentsToAdd = getContentsItems(getSearchTerm(), contentsOrder.getOrder());
  insertContentsItems(contentsToAdd);

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
    var contentsToAdd = getContentsItems(getSearchTerm(), contentsOrder.getOrder());
    insertContentsItems(contentsToAdd);
  });

});
