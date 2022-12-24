//To find and print larget sum of consecutive elems in an array
// (works on unsorted as well)
//Statement
// [1,4,6,8,9,10,13] 
//if sum of 3 digits then compare sum of [1,4,6],[4,6,8],[6,8,9],[8,9,10],[9,10,13] and return largest sum;

//conditions
//num is number of digits to take sum of ;
//num>array.length =>error;
//formula : total number - num + 1
function largetSum(array,num) {
    let high=0;
    for(let i=0;i<arr.length-num+1;i++){
       let temp=0;
        for (let j = i; j < i+num; j++) {
            temp+=arr[j]
        }
        if(temp>high){
            high=temp;
        }
    }
  return high;
}
let arr = [100, 4, 6, 80, 9, 10, 113]
let result = largetSum(arr,5)
console.log(result)
