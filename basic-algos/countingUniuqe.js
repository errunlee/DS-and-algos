//Counting unique numbers;
//              m        i
// [1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 7, 7] => 7

//logic
//i=0,j=1;
//array[i]!==array[j]=>i++; array[i]=array[j]

function count(arr) {
  let countIndex = 0;
  let m = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[m] !== arr[i]) {
      m++;
      arr[m] = arr[i];
      countIndex++;
    }
  }
  return countIndex+1; //+1 because count started from 0;(m=0)
}

let input = [1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 7, 7];
let result = count(input);
console.log(result)