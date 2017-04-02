
$(document).ready(function(){
  $("#woof-button").click(function(){
    var x = document.getElementsByTagName("p");

    for(j=0; j<(x).length; j++){
      x.item(j).innerHTML = "Woof!"
    }
  });
});
