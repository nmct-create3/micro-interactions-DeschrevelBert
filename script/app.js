let email = {}, password = {}, signInButton;

//helper functies
const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};
const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
};
const isValidpassword = function(password){
    if(password.input.value.length > 1){
        return true;
    }else{
        return false;
    }
}

const addErrors = function(globalObject){
    globalObject.field.classList.add("has-error");
    console.log("AddError")
}
const removeErrors= function(globalObject){
    globalObject.field.classList.remove("has-error");
}

function getDOMElements(){
    email.input = document.querySelector('.js-index-input');
    email.field = document.querySelector('.js-index-field-input');
    email.errorMessage = email.field.querySelector('.js-label-input-errormessage');

    password.input = document.querySelector('.js-index-password');
    password.field = document.querySelector('.js-index-field-password');
    password.errorMessage = password.field.querySelector('.js-label-password-errormessage');

    signInButton = document.querySelector('.js-sign-in-button');
    enableListeners();
}

function enableListeners(){
    email.input.addEventListener('blur', function(){
        
        if(isEmpty(email.field.value)){
            email.errorMessage = "This field is required!"
            addErrors(email);
            
            console.log("email-bullcrap");
        }
        else{
            if(isValidEmailAddress(email.field.value)){
                email.errorMessage = "Invalid emailaddress"
                addErrors(email);
                console.log("email-bullshit");
            }
        }
    });
    password.input.addEventListener('blur', function(){
        if(isEmpty(password.input.value) == false){
            email.errorMessage = "This field is required!"
            addErrors(password);
            console.log("pass-bullshit");
        }
        else{
            if(isValidpassword(password.input.value) == false)
            email.errorMessage = "Invalid emailaddress"
            addErrors(password);
            console.log("password-bullshit");
        }
    });
    signInButton.addEventListener('click', function(){

    });
}

function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    if(!document.querySelector('.c-toggle-password')) return;
    const passwordOptions = ['password', 'text'];
    const Input = document.querySelector('.js-toggle');
    Input.addEventListener('change', function(){
        document.querySelector(".js-input").type = passwordOptions[+this.checked];
        console.log("HEB GEKLIKT")
    });
};

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
    getDOMElements();
});