headerMenu = [
  '<table>',
    '<tr>',
      '<td>',
        '<a href="../index.html"><p>Home</p></a>',
      '</td>',
      '<td>',
        '<p id="contents-title">Show Contents</p>',
      '</td>',
    '</tr>',
  '</table>'].join("\n");

function setHeaderSpaceHeight(headerHeight){
  $("#header-space").css("height", headerHeight.toString() + "px");
}

function setTitleAnchorPosition(headerHeight){
  $(".title-anchor").css("bottom", headerHeight.toString() + "px");
}

function positionElementsRelativeToHeader(){
  headerHeight = $("#header-container").height();
  setHeaderSpaceHeight(headerHeight);
  setTitleAnchorPosition(headerHeight);
}

$(document).ready(function(){
  $("#main-header").after(headerMenu);
  positionElementsRelativeToHeader();
  $(window).resize(function(){
    positionElementsRelativeToHeader();
  });
});
