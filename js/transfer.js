// this section is for transfer amount

document.getElementById('transfer-money').addEventListener('click', function(event){
    event.preventDefault();
    // step - 1 transfer amount
    const transferAmount = document.getElementById('input-transfer-money').value;
    console.log(transferAmount);
    // pin value find and compare 
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);
    // compare with pin number which is form user

    if(pinNumber === '1234'){
        console.log("Balance Transfer successful");
        //  available balance in your account
        const balance = document.getElementById('Available-balance').innerText
        const covertToNumberBalance = parseFloat(balance)
        // convert transfer amount
        const convertBalance = parseFloat(transferAmount)
        // after transfer amount
        const afterTransferBalance = covertToNumberBalance - convertBalance;
        console.log(afterTransferBalance);
        // show after transfer amount in UI/DOM
        document.getElementById('Available-balance').innerText = afterTransferBalance
    }else{
        alert("Invalid input correct your information")
    }
})