const generatePassword = () => {
    const length = parseInt(document.getElementById('length').value)
    const strength = document.getElementById('strength').value;
    const numbers = "1234567890";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialCharacters = "!@#$%^&*()_+";
    let characters = "";
    let password = "";
    if (strength === "0") {
        alert("Please select a strength level");
        return;
    }
    if (strength === "1") {
        characters = lowerCase;
    } else if (strength === "2") {
        characters = lowerCase + upperCase;
    } else if (strength === "3") {
        characters = lowerCase + upperCase + numbers + specialCharacters;
    }
    else{
        alert("Please select a strength level");
        return;
    }
    if(isNaN(length) || length < 4 || length > 20){
        alert("Please enter a valid number");
        return;
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('password').value = password;

}
document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById('submit-btn');
    submit.addEventListener('click', generatePassword);
});


