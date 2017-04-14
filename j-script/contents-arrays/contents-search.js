
function getContentsItemsMatchingSearchTerm(contentsElements, searchTerm){

  contentsElements.sort();

}

function matchContentsFromStart(contentsElements, searchTerm){


}

function findIndexWithMatchAtStart(contentsElements, searchTerm){

  contentsElements = sortContentsItemArray(contentsElements);

  var low = 0;
  var high = contentsElements.length-1;

  var midPoint = 0;
  var newMidPoint = -1;

  while(low < high){
    midPoint = low + (high - low)/2;

    var currentValue = contentsElements[midPoint].title;

    if(currentValue.search(searchTerm) === 0){
       return midPoint;
    }
    if(currentValue < searchTerm){
        low = midPoint+1;
    }else{
        high = midPoint-1;
    }
  }
  return -1;
}
