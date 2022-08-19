function diagonalDifference(arr) {
    // In order to find the sum of the first diagonal,
    // We'll need to identify the initial value
    //Iterate through the array as so:
    // arr[1] + arr[arr[0]*1+(2)] + arr[arr[0]*2+(3)]...etc. 
    let squareN = arr[0]
    let firstDiag = arr[1] 
    let secondDiag = arr[squareN]
    
    for(let i=1; i < squareN; i++){
        firstDiag += arr[(squareN*i+(i+1))];
        secondDiag += arr[(squareN*(i+1))-i];
    }
    return (Math.abs(firstDiag - secondDiag))
    // arr[0] -- easy enough
    // + arr[second or i[n-1+1] value of next row] 
    // and continue adding until we finally reach the last value
    // Assuming we will be passed on a perfect square that includes 4 
    //integers or more
    

}

let arr1 = [3, 11, 2, 4, 4, 5, 6, 10, 8, -12]
console.log(diagonalDifference(arr1))