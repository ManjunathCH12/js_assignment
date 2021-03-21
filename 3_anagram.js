/**
 * Given two words, how many minimum characters have to be removed from them to make them
    anagrams & what is the matching anagram?
    solve("willowpump","urowl")
    Result : [7, "lowu"]
    solve("xy","yab") == [3, "y"]
    solve("hello","") == [5, ""]
 */

var str1 = "willowpump".split("").sort()
var str2 = "urowl".split("").sort()
// var str1 = "xy".split("").sort()
// var str2 = "yab".split("").sort()
// var str1 = "hello".split("").sort()
// var str2 = "".split("").sort()
var str1Length = str1.length
var str2Length = str2.length


let intersection = str2.filter(x => str1.includes(x));
console.log("intersection arr",intersection)

var intersectionLength = intersection.length
// console.log(intersection.length)

var totalLength = (str1Length - intersectionLength) + (str2Length - intersectionLength)

var unique = [...new Set(intersection)];
var uniqueLength = unique.length
// console.log("uniqueLength",uniqueLength)

if(intersectionLength != uniqueLength){
   //it has duplicates
   totalLength = (str1Length - intersectionLength) + (str2Length - intersectionLength) + uniqueLength
}
console.log("totalLength removed",totalLength)
unique = unique.join("")
console.log("Result:( "+totalLength+" , "+unique +" )")
