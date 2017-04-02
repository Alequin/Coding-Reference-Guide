
var words = ["fish", "cocktail", "mercy", "ice cream", "cats"];
var element = document.getElementById("on-click-event-example");
var currentNumber = -1;

function setTextToRandomWord(){
  var randNumber
  do{
    randNumber = Math.floor(Math.random()*words.length);
  }while(randNumber === currentNumber);
  currentNumber = randNumber;
  
  element.innerHTML = words[randNumber];
}
