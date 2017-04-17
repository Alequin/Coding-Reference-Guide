
function setOrderButtonText(order){
  var button = document.getElementById("order-button");
  switch (order) {
    case NO_ORDER:
      button.innerHTML = "Order: No order";
      break;
    case ALPHA_ORDER:
      button.innerHTML = "Order: Ascending";
      break;
    case REVERSE_ALPHA_ORDER:
      button.innerHTML = "Order: Descending";
      break;
  }
}

$(document).ready(function(){

  BASIC_LAYOUT_HEADER_HEIGHT = 120;
  LARGE_LAYOUT_HEADER_HEIGHT = 200;

  var contentsOrder = new OrderHolder();

  var retriveAndInsertContents = function (){
    var contentsToAdd = getContentsItems(getSearchTerm(), contentsOrder.getOrder());
    insertContentsItems(contentsToAdd);
  }

  $("#main-header").after(headerMenu);
  positionElementsRelativeToHeader(BASIC_LAYOUT_HEADER_HEIGHT);

  setOrderButtonText(contentsOrder.getOrder());
  retriveAndInsertContents();

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
    clearContentsItemsFromPage();
    retriveAndInsertContents();
  });

  $('#order-button').click(function(){
    clearContentsItemsFromPage();
    contentsOrder.toggleContentsOrder();
    setOrderButtonText(contentsOrder.getOrder());
    retriveAndInsertContents();
  });

});
