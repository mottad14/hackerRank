function countingSort(arr) {
    
    const longArr = Array(100).fill(0);
    //once an array of 100 index locations (filled with 0) exists
    // go through our original array, and for each of its values, ++ on the index value of the 
    //longArr
    for (let index = 0; index < arr.length; index++) {
        longArr[arr[index]]++
    }
    
    return longArr;
    // Write your code here

}

console.log(countingSort([1,1,3,2,1]))
