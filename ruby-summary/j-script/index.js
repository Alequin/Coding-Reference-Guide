alert("working");
const MIN_TEXT_SIZE = 25;
const MAX_TEXT_SIZE = 45;

const MIN_WIDTH = 1;
const MAX_WIDTH = 650;
const WIDTH_RANGE = MAX_WIDTH - MIN_WIDTH;

const MIN_FONT_COEFFICIENT = 9;
const MAX_FONT_COEFFICIENT = 14.4;
const COEFFICENT_RANGE = MAX_FONT_COEFFICIENT - MIN_FONT_COEFFICIENT;

currentTextSize = 0;

/**
* Returns true if the current window width is within the range in which
* font sizes should be edited
*/
function isWidthInEditRange(){
  windowWidth = $(window).width();
  return windowWidth > MIN_WIDTH && windowWidth < MAX_WIDTH
}

/**
  Sets the main headers font size
*/
function manageHeaderFontSize(){
  mainHeader = $("#main-header");
  windowWidth = $(window).width();
  if(isWidthInEditRange()){
    // find at what percentage the screen size is at withing the range
    // of the max and min values
    percent = ( (windowWidth - MIN_WIDTH) / WIDTH_RANGE );
    // calculate, using the percentage, the value required to divide
    // the current screen size by to find a decent font size
    coefficentToUse = (COEFFICENT_RANGE * percent) + MIN_FONT_COEFFICIENT;

    // find the font size
    fontSize = windowWidth / coefficentToUse;

    mainHeader.css("font-size",fontSize.toString() + "px");
  }
}

$(document).ready(function(){

  mainWindow = $(window);
  manageHeaderFontSize();

  mainWindow.resize(function(){
    manageHeaderFontSize();
  });
});
