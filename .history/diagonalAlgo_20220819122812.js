function diagonalDifference(arr) {
    
    let squareN = (arr.length)
    let firstDiag = arr[0][0] 
    let secondDiag = arr[0][squareN-1]
    console.log(`This is what is going into first Diagonal ${firstDiag}. And in Second Diagonal ${secondDiag}`) 

    for(let i=1; i < squareN; i++){
        firstDiag += arr[i][i];
        secondDiag += arr[i][squareN-2]
        console.log(`This is what is going into first Diagonal ${arr[i][i]}. And in Second Diagonal ${arr[i][squareN-(i+1)]}`) 
    }
    console.log(`The sum of first: ${firstDiag} - sum of second ${secondDiag}`)
    return (Math.abs(firstDiag-secondDiag))
    
}

let arr1 = [[11, 2, 4],[4, 5, 6],[10, 8, -12]]
console.log(diagonalDifference(arr1))