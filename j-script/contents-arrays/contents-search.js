
function getContentsItemsMatchingSearchTerm(contentsElements, searchTerm){

  searchTerm = searchTerm.toLowerCase();
  return getArrayOfMatchesFromStart(contentsElements, searchTerm);
}

function getArrayOfMatchesFromStart(contentsElements, searchTerm){

  contentsElements = new ContentsItemQuickSort().sort(contentsElements);

  var index = findFirstMatchingIndex(contentsElements, searchTerm);

  var matchingElements = new Array();
  var nextElement = contentsElements[index++];
  do{
    matchingElements.push(nextElement);
    nextElement = contentsElements[index++];
  }while(nextElement.title.toLowerCase().search(searchTerm) === 0);

  return matchingElements;
}

function findFirstMatchingIndex(contentsElements, searchTerm){

  var matchingIndex = findIndexWithMatchAtStart(contentsElements, searchTerm);

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
