// The Contact Form
function validate(){
  // Variable for the name
    var name = document.getElementById("name").value;
    // Variable for the subject
    var subject = document.getElementById("subject").value;
    // Variable for phone number
    var phone = document.getElementById("phone").value;
    // Variable for the email address
    var email = document.getElementById("email").value;
    // Variable for the message
    var message = document.getElementById("message").value;
    // Variable for the error message
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }