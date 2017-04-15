isContentsVisible = false;

const NO_ORDER = 0;
const ALPHA_ORDER = 1;
const REVERSE_ALPHA_ORDER = 2;


function OrderHolder(){

  var currentOrder = NO_ORDER;

  this.getOrder = function(){
    return currentOrder;
  }

  this.toggleContentsOrder = function(){
      switch (currentOrder) {
        case NO_ORDER:
          setContentsOrder(ALPHA_ORDER);
          break;
        case ALPHA_ORDER:
          setContentsOrder(REVERSE_ALPHA_ORDER);
          break;
        case REVERSE_ALPHA_ORDER:
          setContentsOrder(NO_ORDER);
          break;
      }
  }

  this.setContentsOrder = function(order){

    if(order !== NO_ORDER && order !== ALPHA_ORDER && order !== REVERSE_ALPHA_ORDER){
      throw order+" is not a valid value. Must be 'NO_ORDER', 'ALPHA_ORDER' or 'REVERSE_ALPHA_ORDER'";
    }
    currentOrder = order;
  }
}

var TABLE_ROW = [
    '<tr>',
      '<td>',
        '%s',
      '</td>',
      '<td>',
        '%s',
      '</td>',
      '<td>',
        '%s',
      '</td>',
    '</tr>'];

function setContentsTitleText(){
  var text = "";
  if(!isContentsVisible){
    text = "Hide Contents";
  }else{
    text = "Show Contents";
  }
  isContentsVisible = !isContentsVisible;
  document.getElementById("contents-title").innerHTML = text;
}

function buildContentsTableString(contentsElements){

  var tableString = '<table id="contents-table">\n';

  var contentsIndex = 0;
  while(contentsIndex < contentsElements.length){
    newRow = TABLE_ROW.join('\n');
    for(b=0; b<3; b++){
      newRow = newRow.replace('%s', getContentsCellText(contentsElements, contentsIndex++));
    }
    tableString += "\n" + newRow;
  }
  return tableString + '\n</table>';
}

function getContentsCellText(contentsElements, index){
  if(index < contentsElements.length){
    return '<a href="#'+contentsElements[index].link+'">'+contentsElements[index].title+'</a>';
  }else{
    return '';
  }
}

function getContentsItems(searchTerm, orderItems){
  var contentsToAdd;
  if(searchTerm === null || searchTerm.length <= 0){
    contentsToAdd = CONTENTS;
  }else{
    contentsToAdd = getContentsItemsMatchingSearchTerm(CONTENTS, searchTerm);
  }

  return orderContentsItems(contentsToAdd, orderItems);
}

function insertContentsItems(contentsToAdd){
  $('#search-and-sort-table').after(buildContentsTableString(contentsToAdd));
}

function orderContentsItems(contentsItems, order){

  switch(order){

    case NO_ORDER:
      return contentsItems;
    case ALPHA_ORDER:
      return new ContentsItemQuickSort().sort(contentsItems);
    case REVERSE_ALPHA_ORDER:
      //reverse sorted array
    default:
      alert(order + "Not recognised");
  }
}

function removeContentsItems(){
  var contentsContainer = document.getElementById('contents-container');
  var contentsTable = document.getElementById('contents-table');
  contentsContainer.removeChild(contentsTable);
}

function toggleContentsVisibility(){
    setContentsTitleText();
    $("#contents-container").slideToggle("fast");
}

function getSearchTerm(){
  return document.forms["search-form"]["contents-search-box"].value;
}
