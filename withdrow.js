/* 
1: add event hendler with the withdro button
2: get the withdro amount from the withdro infut field
*/


document.getElementById('btn-Withdrow').addEventListener('click', function(){
    const withdrowField = document.getElementById('user-Withdrow');
    const newWithdrowStringField = withdrowField.value;
    const newWithdrowAmount = parseFloat(newWithdrowStringField);
  // step 5
  withdrowField.value = '';
  if(isNaN(newWithdrowAmount)){
    alert('please provide a valid number')
    return;
  }
    // step:3
    const withdrawtotalElement = document.getElementById('WithdrowTotal');
    const previouseWithdrawTotalString = withdrawtotalElement.innerText;
    const previouseWithdrawTotal = parseFloat(previouseWithdrawTotalString);
    
// step:4
    const balenceTotalElement = document.getElementById('totalBalance')
    const previousBalenceTotalString = balenceTotalElement.innerText;
    const previousBalenceTotal = parseFloat(previousBalenceTotalString);

    if(newWithdrowAmount > previousBalenceTotal){
        alert("baper bank a ato tk nai")
        return;
    }

    // step:6
    const currentWithdrawTotal = previouseWithdrawTotal + newWithdrowAmount;
    withdrawtotalElement.innerText =currentWithdrawTotal;

    // step:7
    const newBalenceTotal = previousBalenceTotal - newWithdrowAmount;
    balenceTotalElement.innerText = newBalenceTotal;


})