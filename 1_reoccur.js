/**
 * You are given a list of items (characters and/or integers). Find if an item reoccurs after a break of its
    sequence. In other words: are there any items that reoccur in the list, but separated by one or more
    different items?    
    solve([0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 4, 0, 0]) == 0
    solve([0, 1, 'a', 2, 'a']) == ‘a’
    solve([0, 0, 1, 1, 2, 2]) == null
 */

var arr = [0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 4, 0, 0]
// var arr = [0, 1, 'a', 2, 'a']
// var arr = [0, 0, 1, 1, 2, 2]
let length = arr.length
var set = []
var n = 0

for(let i=0; i<length ;i++){
    if(arr[i]==arr[i+1]){
        //ignore
    } else {
        set.push(arr[i])
    }
}

console.log(set)

var findDuplicates = set.filter((item, index) => set.indexOf(item) != index)
console.log(findDuplicates)

function checkResult(n){
    if(findDuplicates.includes(n)){
        console.log(true)
    } else {
        console.log(false)
    }

}
checkResult(n)