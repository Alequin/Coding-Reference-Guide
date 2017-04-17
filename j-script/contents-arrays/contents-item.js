function ContentsItem (title, link) {
  this.title = title;
  this.link = link;
}

function ContentsItemQuickSort(){

  var array;

  const ASCENDING = "ASCENDING";
  const DESCENDING = "DESCENDING";

  this.sortAsc = function(contentsElements){

    array = contentsElements.slice(0);
    if(!isArraySortable(array)){
      return array;
    }

    return sort(ASCENDING);
  }

  this.sortDesc = function(contentsElements){

    array = contentsElements.slice(0);
    if(!isArraySortable(array)){
      return array;
    }

    return sort(DESCENDING);
  }

  function sort(order){
    if(!isOrderFlagValid(order)){
      throw "order parameter is not valid, must be ASCENDING or DESCENDING";
    }
    quickSort(0, array.length-1, order);
    return array;
  }

  function quickSort(lowerIndex, higherIndex, order){

    if(!isOrderFlagValid(order)){
      throw "order parameter is not valid, must be ASCENDING or DESCENDING";
    }

    var low = lowerIndex;
    var high = higherIndex;
    var pivotIndex = Math.floor(lowerIndex+(higherIndex-lowerIndex)/2);
    var pivot = (array[pivotIndex].title).toLowerCase();

    while(low <= high){
      if(order === ASCENDING){
        while((array[low].title).toLowerCase() < pivot && low < array.length-1){
          low++;
        }
        while((array[high].title).toLowerCase() > pivot && high > 1){
          high--;
        }
      }else{
        while((array[low].title).toLowerCase() > pivot && low < array.length-1){
          low++;
        }
        while((array[high].title).toLowerCase() < pivot && high > 1){
          high--;
        }
      }
      if(low <= high){
        swapIndeces(low, high);
        low++;
        high--;
      }
    }
    if(lowerIndex < high){
      quickSort(lowerIndex, high, order);
    }
    if(low < higherIndex){
      quickSort(low, higherIndex, order);
    }
  }

  function swapIndeces(indexOne, indexTwo){
    var temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;
  }

  function isArraySortable(array){
    return array !== null || array.length > 1;
  }

  function isOrderFlagValid(order){
    return order === ASCENDING || order === DESCENDING;
  }
}
