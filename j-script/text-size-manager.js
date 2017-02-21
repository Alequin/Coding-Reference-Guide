alert("working");
const MIN_TEXT_SIZE = 25;
const MAX_TEXT_SIZE = 45;

const MIN_WIDTH = 320;
const MAX_WIDTH = 650;
const WIDTH_RANGE = MAX_WIDTH - MIN_WIDTH;

const MAIN_HEADER_MIN_FONT_COEFFICIENT = 12.8;
const MAIN_HEADER_MAX_FONT_COEFFICIENT = 14.4;
const MAIN_HEADER_COEFFICENT_RANGE = MAIN_HEADER_MAX_FONT_COEFFICIENT - MAIN_HEADER_MIN_FONT_COEFFICIENT;

const SECTION_HEADER_MIN_FONT_COEFFICIENT = 16;
const SECTION_HEADER_MAX_FONT_COEFFICIENT = 26;
const SECTION_HEADER_COEFFICENT_RANGE = SECTION_HEADER_MAX_FONT_COEFFICIENT - SECTION_HEADER_MIN_FONT_COEFFICIENT;

currentTextSize = 0;

/**
* find at what percentage the screen size is at withing the range
* of the min and max values
*/
function getScreenWidthPercent(){
  windowWidth = $(window).width();
  return ( (windowWidth - MIN_WIDTH) / WIDTH_RANGE );
}

/**
  Sets the main headers font size
*/
function manageHeaderFontSize(){
  mainHeader = $("#main-header");
  windowWidth = $(window).width();

  if(windowWidth > MAX_WIDTH){
      mainHeader.css("font-size","45px");
  }else
  if(windowWidth > MIN_WIDTH){
    // calculate, using the percentage, the value required to divide
    // the current screen size by to find a decent font size
    coefficentToUse = (MAIN_HEADER_COEFFICENT_RANGE * getScreenWidthPercent()) + MAIN_HEADER_MIN_FONT_COEFFICIENT;

    // find the font size
    fontSize = windowWidth / coefficentToUse;

    mainHeader.css("font-size",fontSize.toString() + "px");
  }else{
      mainHeader.css("font-size","25px");
  }
}

function manageSectionHeaderFontSize(){
  sectionHeaders = $(".section-header");
  windowWidth = $(window).width();

  if(windowWidth > MAX_WIDTH){
      sectionHeaders.css("font-size","25px");
  }else
  if(windowWidth > MIN_WIDTH){
    // calculate, using the percentage, the value required to divide
    // the current screen size by to find a decent font size
    coefficentToUse = (SECTION_HEADER_COEFFICENT_RANGE * getScreenWidthPercent()) + SECTION_HEADER_MIN_FONT_COEFFICIENT;

    // find the font size
    fontSize = windowWidth / coefficentToUse;

    sectionHeaders.css("font-size",fontSize.toString() + "px");
  }else{
      sectionHeaders.css("font-size","20px");
  }
}

$(document).ready(function(){

  mainWindow = $(window);
  manageHeaderFontSize();
  manageSectionHeaderFontSize();

  mainWindow.resize(function(){
    manageHeaderFontSize();
    manageSectionHeaderFontSize()
  });
});
