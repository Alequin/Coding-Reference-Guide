
function getContentsItemsMatchingSearchTerm(contentsElements, searchTerm){


}

function matchContentsFromStart(contentsElements, searchTerm){

  contentsElements = new ContentsItemQuickSort().sort(contentsElements);
  searchTerm = searchTerm.toLowerCase();

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

  var matchingElements = new Array();
  var nextElement = contentsElements[index++].title;
  do{
    matchingElements.push(nextElement);
    nextElement = contentsElements[index++].title;
  }while(nextElement.toLowerCase().search(searchTerm) === 0);

  return matchingElements;
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
