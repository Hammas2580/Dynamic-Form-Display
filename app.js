function formSubmit(e) {
  e.preventDefault();

  const displayName = document.getElementById("name").value;
  const displaySecondName = document.getElementById("last_name").value;
  const displayEmail = document.getElementById("email").value;
  const displayPassword = document.getElementById("pasword").value;
  const displayConformPassword =
    document.getElementById("Conform_password").value;
  const displayBirthDay = document.getElementById("date").value;
  const displayTime = document.getElementById("time").value;
  const displayNumber = document.getElementById("number").value;
  const displayAge = document.getElementById("age").value;
  const displayAddress = document.getElementById("address").value;
  const displayCity = document.getElementById("city").value;

  if (displayPassword !== displayConformPassword) {
    document.getElementById("eroor_conpassword").innerHTML =
      "Passwords do not match!";
    document.getElementById("eroor_conpassword").style.color = "red";
    document.getElementById("Conform_password").style.borderColor = "red";

    let hasUppercase = false;
    for (let i = 0; i < displayPassword.length; i++) {
      let charCode = displayPassword.charCodeAt(i);
      // Check if the character is between ASCII codes 65 (A) and 90 (Z)
      if (charCode >= 65 && charCode <= 90) {
        hasUppercase = true;
        break; 
      }
    }

    if (!hasUppercase) {
      document.getElementById("validition_password").innerHTML =
        "PASSWORD SHOULD CONTAIN AT LEAST ONE UPPERCASE LETTER";
      document.getElementById("validition_password").style.color = "red";

      //   alert("PASSWORD SHOULD CONTAIN AT LEAST ONE UPPERCASE LETTER");
      return false;
    } else {
      document.getElementById("validition_password").innerHTML = "";
      document.getElementById("validition_password").style.color = "none";
    }

    return;
  } else if (
    displayName === "" ||
    displaySecondName === "" ||
    displayEmail === "" ||
    displayPassword === "" ||
    displayConformPassword === "" ||
    displayNumber === "" ||
    displayAge === "" ||
    displayAddress === "" ||
    displayCity === "" ||
    displayTime === "" ||
    displayBirthDay === ""
  ) {
    //  name error
    document.getElementById("error_name").innerHTML = "Please Enter Your Name!";
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("name").style.borderBlockWidth = "2px";
    document.getElementById("error_name").style.color = "red";
    // seond  name errorr
    document.getElementById("error_lastName").innerHTML = "Please Enter Name!";
    document.getElementById("last_name").style.borderColor = "red";
    document.getElementById("last_name").style.borderBlockWidth = "2px";
    document.getElementById("error_lastName").style.color = "red";
    // errorr email
    document.getElementById("eroor_email").innerHTML =
      "Please Enter Valid Email!";
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("email").style.borderBlockWidth = "2px";
    document.getElementById("eroor_email").style.color = "red";
    // error password
    document.getElementById("eroor_password").innerHTML =
      "Please Enter Password!";
    document.getElementById("pasword").style.borderColor = "red";
    document.getElementById("pasword").style.borderBlockWidth = "2px";
    document.getElementById("eroor_password").style.color = "red";
    // error conform password
    document.getElementById("eroor_conpassword").innerHTML =
      "Please Enter Valid Password!";
    document.getElementById("Conform_password").style.borderColor = "red";
    document.getElementById("Conform_password").style.borderBlockWidth = "2px";
    document.getElementById("eroor_conpassword").style.color = "red";
    // eror date
    document.getElementById("eroor_date").innerHTML =
      "Please Enter Valid Date!";
    document.getElementById("date").style.borderColor = "red";
    document.getElementById("date").style.borderBlockWidth = "2px";
    document.getElementById("eroor_date").style.color = "red";
    // error time
    document.getElementById("eroor_time").innerHTML =
      "Please Enter Valid Time!";
    document.getElementById("time").style.borderColor = "red";
    document.getElementById("time").style.borderBlockWidth = "2px";
    document.getElementById("eroor_time").style.color = "red";
    // error number
    document.getElementById("eroor_number").innerHTML =
      "Please Enter Valid Time!";
    document.getElementById("number").style.borderColor = "red";
    document.getElementById("number").style.borderBlockWidth = "2px";
    document.getElementById("eroor_number").style.color = "red";
    // error age
    document.getElementById("eroor_age").innerHTML = "Please Enter Age!";
    document.getElementById("age").style.borderColor = "red";
    document.getElementById("age").style.borderBlockWidth = "2px";
    document.getElementById("eroor_age").style.color = "red";
    // error  address
    document.getElementById("eroor_address").innerHTML =
      "Please Enter Valid Address!";
    document.getElementById("address").style.borderColor = "red";
    document.getElementById("address").style.borderBlockWidth = "2px";
    document.getElementById("eroor_address").style.color = "red";
    // error city
    document.getElementById("eroor_city").innerHTML =
      "Please Enter Your Valid  city!";
    document.getElementById("city").style.borderColor = "red";
    document.getElementById("city").style.borderBlockWidth = "2px";
    document.getElementById("eroor_city").style.color = "red";
    return;
  }

  // Reset all form fields
  document.getElementById("name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("pasword").value = "";
  document.getElementById("Conform_password").value = "";
  document.getElementById("time").value = "";
  document.getElementById("date").value = "";
  document.getElementById("number").value = "";
  document.getElementById("age").value = "";
  document.getElementById("address").value = "";
  document.getElementById("city").value = "";

  // Display the entered data
  document.getElementById("display_name").innerHTML = displayName;
  document.getElementById("display_lastName").innerHTML = displaySecondName;
  document.getElementById("display_email").innerHTML = displayEmail;
  document.getElementById("display_password").innerHTML = displayPassword;
  document.getElementById("display_confrompassword").innerHTML =
    displayConformPassword;
  document.getElementById("display_time").innerHTML = displayTime;
  document.getElementById("display_date").innerHTML = displayBirthDay;
  document.getElementById("display_number").innerHTML = displayNumber;
  document.getElementById("display_age").innerHTML = displayAge;
  document.getElementById("display_address").innerHTML = displayAddress;
  document.getElementById("display_city").innerHTML = displayCity;

  document.getElementById("error_name").innerHTML = "";
  document.getElementById("name").style.borderColor = "blue";
  document.getElementById("error_lastName").innerHTML = "";
  document.getElementById("last_name").style.borderColor = "blue";
  document.getElementById("eroor_email").innerHTML = "";
  document.getElementById("email").style.borderColor = "blue";
  document.getElementById("eroor_password").innerHTML = "";
  document.getElementById("pasword").style.borderColor = "blue";
  document.getElementById("eroor_conpassword").innerHTML = "";
  document.getElementById("Conform_password").style.borderColor = "blue";
  document.getElementById("eroor_date").innerHTML = "";
  document.getElementById("date").style.borderColor = "blue";
  document.getElementById("eroor_time").innerHTML = "";
  document.getElementById("time").style.borderColor = "blue";
  document.getElementById("eroor_number").innerHTML = "";
  document.getElementById("number").style.borderColor = "blue";
  document.getElementById("eroor_address").innerHTML = "";
  document.getElementById("age").style.borderColor = "blue";
  document.getElementById("eroor_age").innerHTML = "";
  document.getElementById("address").style.borderColor = "blue";
  document.getElementById("eroor_city").innerHTML = "";
  document.getElementById("city").style.borderColor = "blue";
}
