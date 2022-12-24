//sum zero

function sum(data){
    let left=0;
    let right=data.length-1
    let resulting=[]
    while(left<right){
        let sum=data[left]+data[right]
        if(sum>0){
            right--;
        }    
        else if (sum<0){
            left++;
        }
        else{
            resulting.push(data[left],data[right]);
            left++;
            right--;
        }
        
    }
    console.log(resulting)
    return resulting;
}
let result=sum([-5,-2,1,2,3,4,5,6])
console.log(result)