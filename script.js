//Creating a function to display an error
function setError(id, error){
    let element = document.getElementById(id);
    element.innerHTML = error;
}

//Clearing errors once they are solved
function clearErrors(){
    let errors = document.getElementsByClassName('formerror');
    for (let item of errors){
        item.innerHTML = "";
    }
}

//Validating the form
function formValidate(){
    // Initializing a returnVal variable which will be set to false if the respective conditions are not met
    let returnVal = true;
    clearErrors(); // Checking for the validation of all the conditions everytime the submit button is clicked and if they are successfully met then the respective errors are deleted

    // Checking condition for name of the user
    let name = document.forms['myForm']["fullName"].value;
    if (name.length < 5){
        setError("nameerror", "Length of name is too short");
        returnVal = false;
    }

    //Checking if email contains '@'
    let email = document.forms['myForm']["email"].value;
    if (!email.includes("@") || !email.includes(".")){
        setError("emailerror", "Enter correct email");
        returnVal = false;
    }

    //Checking condition for phone number
    let phone = document.forms['myForm']["phoneno"].value;
    if ((phone.length != 10) || (phone == 123456789)){
        setError("noerror", "Enter a valid phone number");
        returnVal = false;
    }

    //Checking if password is strong
    let password = document.forms['myForm']["password"].value;
    if ((password == "password") || (password.length < 8) || (password == name)){
        setError("passerror", "Password is not strong");
        returnVal = false;
    }

    //Comparing both the password strings
    let confirmPassword = document.forms['myForm']["confirmPassword"].value;
    if (confirmPassword != password){
        setError("confirmerror", "Both passwords do not match");
        returnVal = false;
    }
    return returnVal;
}
