
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

var currentSearchTerm = null;

$(document).ready(function(){

  var contentsOrder = new OrderHolder();

  var retriveAndInsertContents = function (){
    var contentsToAdd = getContentsItems(currentSearchTerm, contentsOrder.getOrder());
    insertContentsItems(contentsToAdd);
  }

  $("#main-header").after(headerMenu);
  positionElementsRelativeToHeader();

  setOrderButtonText(contentsOrder.getOrder());
  retriveAndInsertContents();

  $("#contents-title").click(function(){
    toggleContentsVisibility();
  });

  $('#layout-switcher').click(function(){
    toggleCSS();
    positionElementsRelativeToHeader();
  });

  $('#search-button').click(function(){
    currentSearchTerm = getSearchTerm();
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
