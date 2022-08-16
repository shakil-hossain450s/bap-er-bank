document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    depositField.value = '';

    if (isNaN(newDepositeAmount)) {
        alert('Enter a valid number');
        return;
    }

    const totalDepositeAmount = document.getElementById('deposite-total');
    const previousTotalDepositeString = totalDepositeAmount.innerText;
    const previousTotalDeposite = parseFloat(previousTotalDepositeString);

    const totalBalanceAmount = document.getElementById('balance-total');
    const previousTotalBalanceString = totalBalanceAmount.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    if (newDepositeAmount <= 0) {
        alert('You Cant Deposite a negative value');
        return;
    }

    const currentDeposite = previousTotalDeposite + newDepositeAmount;
    totalDepositeAmount.innerText = currentDeposite;

    const totalBalance = previousTotalBalance + currentDeposite;
    totalBalanceAmount.innerText = totalBalance;

})