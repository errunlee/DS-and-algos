let array=[-5,-2,1,2,3,4,5,6]
//finding two numbers in the array whose sum=0;

let left=0;
let right=array.length-1
let sumZeroItems=[]
while(left<right){
    console.log(array[left],array[right])
    if(array[left]+array[right]>0){
        right--;
    }
    else if(array[left]+array[right]<0){
        left++;
    }
    else{
        sumZeroItems.push(array[left],array[right])
        left++;
        right--;
    }
}
console.log(sumZeroItems)

//on2 time complexity


