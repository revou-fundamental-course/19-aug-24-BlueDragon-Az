function replaceName() {
    var name = prompt("Hey there! What's your name?", "");
    document.getElementById("name").innerHTML = name
}

replaceName();

function validateForm() {
    const name = document.forms["message-form"]["fullName"].value;
    const birthDate = document.forms["message-form"]["birthDate"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;
    
    if (name == "" || birthDate == "" || gender == "" || messages =="") {
        alert("Please fill all field.");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, message) {
    document.getElementById("senderFullName").innerHTML = name;
    document.getElementById("senderBirthDate").innerHTML = birthDate;
    document.getElementById("senderGender").innerHTML = gender;
    document.getElementById("senderMessages").innerHTML = messages;
}
