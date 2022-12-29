let counti=10;

function counting(){
    if(counti===0){
        return
    }
    console.log('hi')
    counti--;
    counting();
}
(counting())