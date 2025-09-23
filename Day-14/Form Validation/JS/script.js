function Data() {
    let userId = document.getElementById("userid").value;
    let contact = document.getElementById("contact").value;
    let pass = document.getElementById("pass").value;
    let conPass = document.getElementById("conpass").value;

    if (userId == "" || contact == "" || pass == "" || conPass == "") {
        alert("All Fields are Mandatory");
        return false;
    }else if (contact.length<10 || contact.length>10) {
        alert("Number should be of 10 Digits ! Please Enter the valid Number");
        return false;
    }else if (isNaN(contact)) {
        alert("Only Numbers are allowed ! Please Enter the valid Number");
        return false;
    }else if (pass != conPass) {
        alert("Please entered same password");
        return false;
    }
    else{
        true;
    }
}