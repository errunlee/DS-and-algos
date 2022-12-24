//Counting unique numbers;

//[1,1,1,2,2,3,4,5,6,7,7,7,7] => 7

function count(arr){
    let countIndex=0;
    let m=0;
  for(let i=0;i<arr.length;i++){
    if(arr[m]!==arr[i]){
        arr[m]=arr[i];
        m++;
    }
  }
}

let input=[1,1,1,2,2,3,4,5,6,7,7,7,7];
let result=count(input);
// console.log(result)