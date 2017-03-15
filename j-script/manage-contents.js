isContentsVisible = false;
var TABLE_ROW = [
    '<tr>',
      '<td>',
        null,
      '</td>',
      '<td>',
        null,
      '</td>',
      '<td>',
        null,
      '</td>',
    '</tr>'];

function setContentsTitleText(){
  text = "";
  if(!isContentsVisible){
    text = "Hide Contents";
  }else{
    text = "Show Contents";
  }
  isContentsVisible = !isContentsVisible;
  document.getElementById("contents-title").innerHTML = text;
}

function buildContentsTableString(){

  var tableString = '<table id="contents-table">';


  var contentsIndex = 0;
  while(contentsIndex < CONTENTS.length){
    newRow = copyArray(TABLE_ROW);
    for(b=2; b<=8; b+=3){
      newRow[b] = '<a href="'+CONTENTS[contentsIndex].link+'">'+CONTENTS[contentsIndex].title+'</a>';
      contentsIndex++;
      if(contentsIndex >= CONTENTS.length){
        break;
      }
    }
    tableString +=  "\n" + newRow.join('\n');
  }

  return tableString + '\n</table>';
}

function copyArray(inputArray){
  outputArray = [];
  for(a=0; a<inputArray.length; a++){
    outputArray.push(inputArray[a]);
  }
  return outputArray;
}

function insertContentsItems(){
  $('#contents-container .header-divider').after(buildContentsTableString());
}

function toggleContentsVisibility(){
    setContentsTitleText();
    $("#contents-container").slideToggle("fast");
}
