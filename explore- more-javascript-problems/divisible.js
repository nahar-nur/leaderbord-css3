// show out from: 1-50
// if the number is divisible by 3 then instead of the number sho'foo'
// if the number is divisible by 5 then instead of the number sho'bar'
// if the number is divisible by bith 3 & 5 then instead of the number show'foobar'

for(let i= 1; i<= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){

    console.log('foobar');
    }
    else if(i % 3 === 0){
        console.log('foo');
    }
    else if(i % 5 === 0){
        console.log('bar');

    }
    else{
        console.log(i);
    }
    
}