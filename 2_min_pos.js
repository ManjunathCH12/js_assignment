/**
 * Calculate the minimum positive number that is not a possible sum from a list of positive integers.
    #Examples:
    solve([1,2,8,7]) == 4 => we can get 1, 2, 3 (from 1+2), but we cannot get 4. 4 is the minimum number
    not possible from the list.
    solve([4,1,2,3,12]) == 11. We can get 1, 2, 3, 4, 4+1=5, 4+2=6,4+3=7,4+3+1=8,4+3+2=9,4+3+2+1=10.
    But not 11.
    solve([2,3,2,3,4,2,12,3]) == 1. We cannot get 1.
 */

var arr = [1,2,8,7]
arr.sort((a,b)=> {return a-b})
console.log(arr)
var arrLength = arr.length
var y = 4

function getSmallest(arr,arrLength,y){
var res = 1
for (let i = 0; i < arrLength && arr[i] <= res; i++) {
    res = res + arr[i];
}
console.log("Minimum positive integer=",res)
if(res == y){
    console.log(true)
} else {
    console.log(false)
}
return res; 
}

getSmallest(arr,arrLength,y)