document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('email_confirm').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password_confirm').value;

// First and last name validation
const nameRegex = /^[A-Z][a-z]*(?:-[A-Z][a-z]*)?$/;

    if (!nameRegex.test(firstName) || firstName.length >= 15) {
        message.innerText = "Invalid first name!";
        return;
    }

    if (!nameRegex.test(lastName) || lastName.length >= 15) {
        message.innerText = "Invalid last name!";
        return;
    }

//email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (!emailRegex.test(email)) {
    message.innerText = "Invalid email format!";
    return;
}

if (email !== confirmEmail) {
    message.innerText = "Emails do not match!";
    return;
}
//password validation
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if (!passwordRegex.test(password)) {
    message.innerText = "Password must be at least 8 characters long, contain at least one letter, one number, and one special character!";
    return;

    if (password !== confirmPassword) {
        document.getElementById('message').innerText = "Passwords do not match!";
        return;
    }

    document.getElementById('message').innerText = "Registration successful!";
}





})