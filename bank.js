//step one: add event listener
document.getElementById('Deposit').addEventListener('click', function(){
   //step two: get the deposit amount from the input
   //input fild element
   const depositField = document.getElementById('user-Deposit');
   const depositAmountstring = depositField.value;   
   const newDepositAmount = parseFloat(depositAmountstring)
   //step three: get the deposit total amount 
   // non infut  element
   //step-7
   depositField.value = '';
   if(isNaN(newDepositAmount)){
    alert('please provide a valid number')
    return
   }
   const depositTotalAmount = document.getElementById('depositTotal');
   const previousDepositTotalString = depositTotalAmount.innerText;
   const previousDepositTotal = parseFloat(previousDepositTotalString);
  
//    stpe 4: add element
const currentDepositTotal =previousDepositTotal + newDepositAmount;
//set the total deposite
depositTotalAmount.innerText =currentDepositTotal;

// step:5 get balnce current total
const balenceTotal = document.getElementById('totalBalance')
const previousBalenceTotalString = balenceTotal.innerText
const previousBalenceTotal = parseFloat(previousBalenceTotalString);

// step:6 calculate current total balnce
const currentBalenceTotal =previousBalenceTotal + newDepositAmount;
//set the total balence
balenceTotal.innerText = currentBalenceTotal;
   
})