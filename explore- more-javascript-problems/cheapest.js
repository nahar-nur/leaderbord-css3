const phones [
    { name: 'samsung'}
]
    
function cheapestPhone(phones){
    let cheapest = phones [0];
    for(let i = 0; i< phones.length; i ++){
        const phone = phones [i];
        if(phones.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones)
console.log(mySelection);