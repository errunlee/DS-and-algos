//String Anagram

// hello and ellho => true
//arun and nuar => true
// hello and hella => false

//length same and same characters for same time;

let checkAnagram=(string1,string2)=>{
  let check={}
  if(string1.length!==string2.length){
    return false;
  }

  for(let i=0;i<string1.length;i++){
    check[string1[i]]=(check[string1[i] ] || 0)+1
  }
 for(let i=0;i<string2.length;i++){
    if(!check[string2[i]]){
        return false;
    }
    check[string2[i]]--;
 }
 return true;
}
let result1=checkAnagram('hello','ellho')
let result2=checkAnagram('hello','eilho')
console.log(result1,result2)

