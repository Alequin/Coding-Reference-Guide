headerMenu = [
  '<table id="header-menu">',
    '<tr>',
      '<td>',
        '<a href="../index.html"><p>Home</p></a>',
      '</td>',
      '<td>',
        '<p id="contents-title">Show Contents</p>',
      '</td>',
      '<td>',
        '<p id="layout-switcher">Change Layout</p>',
      '</td>',
    '</tr>',
  '</table>'].join("\n");

function positionElementsRelativeToHeader(headerHeight){
    $(".title-anchor").css("bottom", (headerHeight * 1.25).toString() + "px");
    var windowHeightWithoutHeader = window.innerHeight - headerHeight;
    $("#contents-container").css("height", windowHeightWithoutHeader.toString() + "px");
}
