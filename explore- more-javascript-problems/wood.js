// fixed: per item wood requrements
// 1.chair....> 3 cft
// 2. table....> 10 cft
// 3. bed......> 50 cft
// vary:quantity

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const pertableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * pertableWood;
    const bedWood = bedQuantity * perBedWood;
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
const totalWood = woodCalculator(2,2,5);
console.log('total wood required:', totalWood);