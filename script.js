const form = document.getElementsByTagName('form')[0];

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener('submit', function (event) {

    if( !firstName.validity.valid ){

        email.reportValidity();

        firstName.classList.add("error");

        event.preventDefault();
    } else { 

        firstName.classList.remove("error");
    }

    if( !lastName.validity.valid ){

        email.reportValidity();


        lastName.classList.add("error");

        event.preventDefault();
    } else { 

        lastName.classList.remove("error");
    }

    if( !email.validity.valid ){

        email.reportValidity();

        email.classList.add("error");

        event.preventDefault();
    } else { 

        email.classList.remove("error");
    }

    if( !phoneNumber.validity.valid ){

        email.reportValidity();


        phoneNumber.classList.add("error");

        event.preventDefault();
    } else { 

        phoneNumber.classList.remove("error");
    }

    if( !password.validity.valid ){

        email.reportValidity();


        password.classList.add("error");

        event.preventDefault();
    } else { 

        password.classList.remove("error");
    }

    if( !confirmPassword.validity.valid ){

        email.reportValidity();

        confirmPassword.classList.add("error");

        event.preventDefault();

    } else { 

        confirmPassword.classList.remove("error");
    }

    
});