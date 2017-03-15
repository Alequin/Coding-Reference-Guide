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

function buildContentsTableString(){

  var tableString = '<table id="contents-table">\n';

  var contentsIndex = 0;
  while(contentsIndex < CONTENTS.length){
    newRow = TABLE_ROW.join('\n');
    for(b=0; b<3; b++){
      newRow = newRow.replace('%s', getContentsCellText(contentsIndex++));
    }
    tableString +=  "\n" + newRow;
  }
  return tableString + '\n</table>';
}

function getContentsCellText(index){
  if(index < CONTENTS.length){
    return '<a href="'+CONTENTS[index].link+'">'+CONTENTS[index].title+'</a>';
  }else{
    return '';
  }
}

function insertContentsItems(){
  $('#contents-container .header-divider').after(buildContentsTableString());
}

function toggleContentsVisibility(){
    setContentsTitleText();
    $("#contents-container").slideToggle("fast");
}
