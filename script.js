function setError(id, error){
    let element = document.getElementById(id);
    element.innerHTML = error;
}
function clearErrors(){
    let errors = document.getElementsByClassName('formerror');
    for (let item of errors){
        item.innerHTML = "";
    }
}
function formValidate(){
    let returnVal = true;
    clearErrors();
    let name = document.forms['myForm']["fullName"].value;
    if (name.length < 5){
        setError("nameerror", "Length of name is too short");
        returnVal = false;
    }
    let email = document.forms['myForm']["email"].value;
    if (!email.includes("@") || !email.includes(".")){
        setError("emailerror", "Enter correct email");
        returnVal = false;
    }
    let phone = document.forms['myForm']["phoneno"].value;
    if ((phone.length != 10) || (phone == 123456789)){
        setError("noerror", "Enter a valid phone number");
        returnVal = false;
    }
    let password = document.forms['myForm']["password"].value;
    if ((password == "password") || (password.length < 8) || (password == name)){
        setError("passerror", "Password is not strong");
        returnVal = false;
    }
    let confirmPassword = document.forms['myForm']["confirmPassword"].value;
    if (confirmPassword != password){
        setError("confirmerror", "Both passwords do not match");
        returnVal = false;
    }
    return returnVal;
}