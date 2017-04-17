
function getContentsItemsMatchingSearchTerm(contentsElements, searchTerm){

  searchTerm = searchTerm.toLowerCase();

  var searchResults = new Array();

  searchResults = searchResults.concat(getArrayOfMatchesCompareStart(contentsElements, searchTerm));
  searchResults = searchResults.concat(getArrayOfMatchesCompareMiddle(contentsElements, searchTerm));

  return searchResults;
}

function getArrayOfMatchesCompareStart(contentsElements, searchTerm){

  contentsElements = new ContentsItemQuickSort().sortAsc(contentsElements);

  var index = findFirstMatchingIndex(contentsElements, searchTerm);

  if(index === -1){
    return new Array();
  }

  var matchingElements = new Array();
  while(index < contentsElements.length && contentsElements[index].title.toLowerCase().search(searchTerm) === 0){
    matchingElements.push(contentsElements[index++]);
  };

  return matchingElements;
}

function findFirstMatchingIndex(contentsElements, searchTerm){

  var matchingIndex = findIndexWithMatchAtStart(contentsElements, searchTerm);

  if(matchingIndex === -1){
    return matchingIndex;
  }

  var index = matchingIndex;
  var matchingTitle = contentsElements[index].title.toLowerCase();
  while(matchingTitle.search(searchTerm) === 0){
    index--;
    if(index < 0){
      break;
    }
    matchingTitle = contentsElements[index].title.toLowerCase();
  }
  index ++;
  return index;
}

function findIndexWithMatchAtStart(contentsElements, searchTerm){

  searchTerm = searchTerm.toLowerCase();

  var low = 0;
  var high = contentsElements.length-1;

  var midPoint = 0;
  var newMidPoint = -1;

  while(low < high){

    midPoint = Math.floor(low + (high - low)/2);

    var currentValue = (contentsElements[midPoint].title).toLowerCase();

    if(currentValue.search(searchTerm) === 0){
       return midPoint;
    }
    if(currentValue < searchTerm){
        low = midPoint+1;
    }else{
        high = midPoint-1;
    }
  }

  if(low === high){
    var currentValue = (contentsElements[low].title).toLowerCase();
    if(currentValue.search(searchTerm) === 0){
       return midPoint;
    }
  }

  return -1;
}

function getArrayOfMatchesCompareMiddle(contentsElements, searchTerm){

  var results = new Array();

  var regExrSearch = new RegExp(".+"+searchTerm);
  var index = 0;
  while(index < contentsElements.length){
    var currentElement = contentsElements[index++];
    if(currentElement.title.toLowerCase().search(regExrSearch) === 0){
      results.push(currentElement);
    }
  }
  return results;
}
