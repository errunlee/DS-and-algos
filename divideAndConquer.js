//Finding index of given element in an array
//[0,1,2,4,5,6,7,8,9] => Index of 7 => Output => 6
//Divide and Conquer Technique

function getIndex(arr, num) {
    let min = 0;
    let max = arr.length - 1
    while(min<=max){
        let mid = Math.floor((min + max) / 2)
        if (arr[mid] < num) {
            min = mid+1;
        }
        else if (arr[mid] > num) {
            max=mid-1;
        }
        else{
            return mid;
        }
    }
}
    const result = getIndex([0, 1, 2, 4, 5, 6, 7, 8, 9], 9)
console.log(result)
