public class MergeSort {

    /**
     * Sorts an integer array using merge sort.
     * @param array
     * @return 
     */
    public static int[] sort(int[] array){
                
        int[] resultArray;
        resultArray = new int[array.length];
        System.arraycopy(array, 0, resultArray, 0, array.length);
        
        // base cases
        if(resultArray.length <= 2){
            if(resultArray.length == 2 && (resultArray[0] > resultArray[1])){
                // base case of two as if the array is length 2 a bubble sort 
                // is faster than creating two array holding one element and calling
                // sort on both
                int temp = resultArray[0];
                resultArray[0] = resultArray[1];
                resultArray[1] = temp;
                return resultArray;
            }
            return resultArray;
        }

        
        int midPoint = array.length/2;

        int[] leftArray = new int[midPoint];
        int[] rightArray = new int[array.length - midPoint];

        System.arraycopy(array, 0, leftArray, 0, leftArray.length);
        System.arraycopy(array, midPoint, rightArray, 0, rightArray.length);
        
        leftArray = sort(leftArray);
        rightArray = sort(rightArray);
        
        resultArray = merge(leftArray, rightArray);

        return resultArray;
    }
 
    private static int[] merge(int[] leftArray, int[] rightArray){
        
        int[] result = new int[leftArray.length + rightArray.length];

        int leftIndex = 0;
        int rightIndex = 0;
        
        for(int a=0; a<result.length; a++){
            
            if( leftIndex >= leftArray.length ){
                result[a] = rightArray[rightIndex++];
            }else 
            if( rightIndex >= rightArray.length ){
                result[a] = leftArray[leftIndex++];
            }else{
                if(leftArray[leftIndex] <= rightArray[rightIndex]){
                    result[a] = leftArray[leftIndex++];
                }else
                if(leftArray[leftIndex] > rightArray[rightIndex]){
                    result[a] = rightArray[rightIndex++];
                }
            }
        }
        
        return result;
    }
    
    /**
     * Checks if the given array is ordered from smallest to largest
     * @param array
     * @return 
     */
    public static boolean checkOrder(int[] array){
        
        for(int a=1; a<array.length; a++){
            
            if( array[a-1] > array[a] )
                return false;
        }
        
        return true;
    }

}
