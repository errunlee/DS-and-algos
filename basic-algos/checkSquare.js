//Check if square of all elements are in another array passed.
//[1,2,3,5,4],[1,4,9,16,25]=>true;

function checkSquare(arr1, arr2) {
    let flag = true;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] * arr1[i] === arr2[j]) {
                flag = false;
            }
            if (j === arr2.length - 1) {
                if (flag) {
                    return false;
                }
            }
        }
       
    }
    return true;
}
const result = checkSquare([1, 2, 3, 4, 5], [1, 4, 9, 25, 16])
console.log(result)

//quadratic time complexity


//for linear time complexity;;

function checkSquare1(arr1,arr2){
    let map1={}
    let map2={}
    for(let elem of arr1){
       map1[elem]=(map1[elem] || 0)+1
    }
    for(let elem of arr2){
       map2[elem]=(map2[elem] || 0)+1
    }
    for(let key in map1){
        if(!map2[key*key] || (map1[key]!==map2[key*key])){ //checking square and number of elems
            return false;
        }
    }
    return true;
}

const result1 = checkSquare1([1, 2, 3, 4, 5], [1, 4, 9, 5, 16])
console.log(result1)

//time complexity =>oN