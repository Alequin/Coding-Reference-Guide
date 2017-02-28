header_menu = [
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

$(document).ready(function(){
  $("#main-header").after(header_menu);
});
