function ContentsItem (title, link) {
  this.title = title;
  this.link = link;
}

function ContentsItemQuickSort(){

  var array;

  this.sort = function(contentsElements){

    array = contentsElements.slice(0);
    if(array === null){
      return array;
    }

    var length = array.length;
    if(length <= 1){
      return result;
    }

    quickSort(0, length-1);

    return array;
  }

  function quickSort(lowerIndex, higherIndex){

    var low = lowerIndex;
    var high = higherIndex;
    var pivotIndex = Math.floor(lowerIndex+(higherIndex-lowerIndex)/2);
    var pivot = (array[pivotIndex].title).toLowerCase();

    while(low <= high){
      while((array[low].title).toLowerCase() < pivot && low < array.length-1){
        low++;
      }
      while((array[high].title).toLowerCase() > pivot && high > 1){
        high--;
      }
      if(low <= high){
        swapIndeces(low, high);
        low++;
        high--;
      }
    }
    if(lowerIndex < high){
      quickSort(lowerIndex, high);
    }
    if(low < higherIndex){
      quickSort(low, higherIndex);
    }
  }

  this.sortDesc = function(contentsElements){

    array = contentsElements.slice(0);
    if(array === null){
      return array;
    }

    var length = array.length;
    if(length <= 1){
      return result;
    }

    quickSortDesc(0, length-1);

    return array;
  }

  function quickSortDesc(lowerIndex, higherIndex){

    var low = lowerIndex;
    var high = higherIndex;
    var pivotIndex = Math.floor(lowerIndex+(higherIndex-lowerIndex)/2);
    var pivot = (array[pivotIndex].title).toLowerCase();

    while(low <= high){
      while((array[low].title).toLowerCase() > pivot && low < array.length-1){
        low++;
      }
      while((array[high].title).toLowerCase() < pivot && high > 1){
        high--;
      }
      if(low <= high){
        swapIndeces(low, high);
        low++;
        high--;
      }
    }
    if(lowerIndex < high){
      quickSortDesc(lowerIndex, high);
    }
    if(low < higherIndex){
      quickSortDesc(low, higherIndex);
    }
  }

  function swapIndeces(indexOne, indexTwo){
    var temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;

  }
}
