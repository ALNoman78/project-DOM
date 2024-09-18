document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();

    const amountMoney = document.getElementById('input-add-money').value;
    const pinNumber = document.getElementById('pin-number').value;

    // if (pinNumber === '123') {
    //     console.log('transition successful');
    // }else{
    //     alert('transition Failed ! Enter the right information')
    // }

    // const availableBalance = document.getElementById('Available-balance').innerText;
    // // availableBalance.innerText = value;
    // // console.log(availableBalance + amountMoney);
    // console.log(availableBalance);
})