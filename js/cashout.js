//  feature add cash out 

document.getElementById('cashout-money').addEventListener('click', function(event){
    event.preventDefault()

    const cashOutAmount = document.getElementById('input-cashout-money').value;
    // console.log(cashOutAmount);

    const payooPinNumber = document.getElementById('pin-number').value;
    // console.log(payooPinNumber);

    if (payooPinNumber === '123') {
        console.log('completed cash out');

        const availableBalance = document.getElementById('Available-balance').innerText;
        const valueNumber = parseFloat(availableBalance);
        // console.log(valueNumber);

        const cashNumber = parseFloat(cashOutAmount);
        // console.log(cashNumber);


        const totalAmount = valueNumber - cashNumber;

        //  show ui/ DOM amount

        document.getElementById('Available-balance').innerText = totalAmount;
        console.log(totalAmount);
    }else{
        alert("Enter Valid Information");
    }
})