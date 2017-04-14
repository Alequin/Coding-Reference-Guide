isContentsVisible = false;

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

function insertContentsItems(searchTerm){
  var contentsToAdd;
  if(searchTerm === null || searchTerm.length <= 0){
    contentsToAdd = CONTENTS;
  }else{
    contentsToAdd = getContentsItemsMatchingSearchTerm(CONTENTS, searchTerm);
  }

  $('#search-and-sort-table').after(buildContentsTableString(contentsToAdd));
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
