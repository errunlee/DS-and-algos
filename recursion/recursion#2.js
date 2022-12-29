let num=5
function fibo(num){
    if(num===0){
        return 0;
    }
    else if(num===1){
        return 1;
    }
    else{
        return fibo(num)+fibo(num-1)
    }
}
console.log(fibo(num));