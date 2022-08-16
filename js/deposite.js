/* // Step-1: Add event listner to the deposite button
document.getElementById('deposite-btn').addEventListener('click', function () {
    // Step-2: Get The Deposite Amount from the deposite input field
    // For input Field use .value to the value inside the input field 
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    // Step-7: Clear the input Field
    depositeField.value = '';

    if (isNaN(newDepositeAmount)) {
        alert('Please Enter A Valid Number')
        return;
    }

    // Step-3: Get The Current Deposit total
    // form non-input (element other than input, textarea) use innerText to get the text
    const depositTotalAmount = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositTotalAmount.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);



    // Step-5: set the total amount 
    const totalBalanceAmount = document.getElementById('balance-total');
    const preveiousTotalBalanceAmountString = totalBalanceAmount.innerText;
    const preveiousToatalBalance = parseFloat(preveiousTotalBalanceAmountString);


    if (newDepositeAmount <= 0) {
        alert('Please Enter A Minimu Deposite');
        return;
    }

    // Step-4: Add Number To set the Total Deposite
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;
    depositTotalAmount.innerText = currentDepositeTotal;

    // Step-6:  calculate current balance total 
    const currentTotalBalance = preveiousToatalBalance + newDepositeAmount;

    // set the balance total
    totalBalanceAmount.innerText = currentTotalBalance;


})

 */