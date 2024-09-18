// step - 01
//  login button

// document.getElementById('login-btn').addEventListener('click', function(event){
//     event.preventDefault()

//     // step - 02 (phone number)
//     const phoneNumber = document.getElementById('phone-number').value;
//     // step - 03 (pin number)
//     const pinNumber = document.getElementById('pin-number').value;

//     // if (phoneNumber === '0123' && pinNumber === '1234') {
//     //     console.log('Your are login');
//     // }else{
//     //     alert("Wrong !!! Check your Phone Number or Pin Number")
//     // }
// })


document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    const  phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);
    if(phoneNumber === '012' && pinNumber === '123'){
        console.log('You are logged in');
        window.location.href = './home-page.html';
    }else{
        alert('Wrong !!! Check your Phone number or pin number')
    }
})