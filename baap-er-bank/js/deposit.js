// add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get thhe deposit amount from the deposit input field
    // For input field use .value to the value inside the inpuut field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    
    // step-3: get the current deposit total
    //  for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('depoisit-total');
    const depositTotal = depositTotalElement.innerText;
})