alert("working");
const MIN_TEXT_SIZE = 25;
const MAX_TEXT_SIZE = 45;

const MIN_WIDTH = 320;
const MAX_WIDTH = 650;
const WIDTH_RANGE = MAX_WIDTH - MIN_WIDTH;

const MIN_FONT_COEFFICIENT = 12.8;
const MAX_FONT_COEFFICIENT = 14.4;
const COEFFICENT_RANGE = MAX_FONT_COEFFICIENT - MIN_FONT_COEFFICIENT;

currentTextSize = 0;

function manageHeaderFontSize(windowWidth){
  mainHeader = $("#main-header");
  if(windowWidth > MIN_WIDTH && windowWidth < MAX_WIDTH){
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

  manageHeaderFontSize(mainWindow.width());

  mainWindow.resize(function(){

  });
});
