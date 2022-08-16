// Step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // Step-2: get the email address inside the email input field
    // always remember to use .value to get text an input field
    const emailField = document.getElementById('email-address');
    const email = emailField.value;
    // step-3: get the password inside the password input field 
    const passwordField = document.getElementById('email-password');
    const password = passwordField.value;
    // Do Not Verify The Email and Password on The Client side
    // Step-4: Verify email and password and check weather valid or invalid user
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    } else {
        alert('Please Enter The Right Password.....');
    }

})