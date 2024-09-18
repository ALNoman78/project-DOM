// document.getElementById('add-money').addEventListener('click', function(event){
//     event.preventDefault();

//     const amountMoney = document.getElementById('input-add-money').value;
//     const pinNumber = document.getElementById('pin-number').value;


//     if (pinNumber === '123') {
//         console.log('transition successful');

//         const currentAmount = document.getElementById('Available-balance').innerText;
//         const currentBalance = parseFloat(currentAmount);
//         const numberAmountMoney =  parseFloat(amountMoney);
//         const mainBalance = currentBalance + numberAmountMoney;
        
//         document.getElementById('Available-balance').innerText = mainBalance;
//         console.log(mainBalance);

//     }else{
//         alert('transition Failed ! Enter the right information')
//     }

// })


// step - 1 add event listener

const addMoney = document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault()

    const inputAddMoney = document.getElementById('input-add-money').value;
    // console.log(inputAddMoney);

    const pinNumber = document.getElementById('pin-number').value;
    // console.log(pinNumber);

    if (pinNumber === '123') {

        const availableBalance = document.getElementById('Available-balance').innerText;
        const convertNumberBalance = parseFloat(availableBalance);
        const inputBalance = parseFloat(inputAddMoney)
        
        
        //  total amount

        const totalBalance = convertNumberBalance + inputBalance;
        console.log(totalBalance);

        //  display the amount

        document.getElementById('Available-balance').innerText = totalBalance;

        alert('Transaction Successful ')
    }else{
        alert('Transaction failed ! check you data')
    }
})



//  same as about cash out method


document.getElementById('cash-out').addEventListener('click', function(){
    window.location.href = './cashout.html'
})