document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    if (newWithdrawAmount <= 0) {
        alert('You cant withdraw in neagtive value');
        return;
    }

    if (isNaN(newWithdrawAmount)) {
        alert('Please Enter at least a Number')
        return;
    }

    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const preveiousWithdrawAmountString = withdrawTotalAmount.innerText;
    const preveiousWithdrawAmount = parseFloat(preveiousWithdrawAmountString);

    const totalBalanceAmount = document.getElementById('balance-total');
    const preveiousTotalBalanceAmountString = totalBalanceAmount.innerText;
    const preveiousTotalBalance = parseFloat(preveiousTotalBalanceAmountString);

    if (newWithdrawAmount > preveiousTotalBalance) {
        alert('Baper Bank e Ato Taka Nai');
        return;
    }

    const currentWithdrawAmount = preveiousWithdrawAmount + newWithdrawAmount;
    withdrawTotalAmount.innerText = currentWithdrawAmount;

    const totalBalance = preveiousTotalBalance - currentWithdrawAmount;
    totalBalanceAmount.innerText = totalBalance;
})