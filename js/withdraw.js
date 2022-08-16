/* document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const preveiousWithdrawAmountString = withdrawTotalAmount.innerText;
    const preveiousWithdrawAmount = parseFloat(preveiousWithdrawAmountString);

    const totalBalanceAmount = document.getElementById('balance-total');
    const preveiousToatalBalanceString = totalBalanceAmount.innerText;
    const preveiousToatalBalance = parseFloat(preveiousToatalBalanceString);

    withdrawField.value = '';

    if (newWithdrawAmount > preveiousToatalBalance) {
        alert('Bap er Bank e Eto Taka Nai');
        return;
    }

    const currentWithdrawAmount = preveiousWithdrawAmount + newWithdrawAmount;
    withdrawTotalAmount.innerText = currentWithdrawAmount;

    const currentTotalBalance = preveiousToatalBalance - currentWithdrawAmount;
    totalBalanceAmount.innerText = currentTotalBalance;




}) */