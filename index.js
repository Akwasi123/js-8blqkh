// Import stylesheets
import './style.css';

// Use DOM to insert text in an element
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Add User</h1>`;
const form = document.getElementById("addForm");
//initial boxes do not have the red borders since nothing has been entered yet
document.getElementById("first").classList.remove("error_box");
document.getElementById("last").classList.remove("error_box");
document.getElementById("email").classList.remove("error_box");

// write a function to connect to the listner
function onSubmit(event) {
   event.preventDefault(); 
   const first= form.elements["f_name"].value;
   const last = form.elements["l_name"].value;
   const email = form.elements["email"].value;
   const male = form.elements["male"].checked;
   const female = form.elements["female"].checked;
   
   //checks whether the gender has been selected
   if(male == true){
     let gender = form.elements["male"].value;
   }

   if(female == true){
     let gender = form.elements["female"].value;
   }

   /**
    * this sections checks for empty fields and provides
    * error messages.
    */
   document.getElementById("form-errors").innerHTML = "";
   let msg = "";
   document.getElementById("first").classList.remove("error_box");
   document.getElementById("last").classList.remove("error_box");
   document.getElementById("email").classList.remove("error_box");

  
   if (first === "") {
        msg += "Required: Please enter first name\n";
        document.getElementById("first").classList.add("error_box");
    }
    if (last === "") {
        msg += "Required: Please enter last name\n";
        document.getElementById("last").classList.add("error_box");
    }
    if (email === "") {
        msg += "Required: Please enter email\n";
        document.getElementById("email").classList.add("error_box");
    }
    if (male == false && female == false) {
        msg += "Required: Please select gender";
    }

    //checks where and when to display the error message
    if (msg !== "") {
        let err = document.getElementById("form-errors");
        let parg = document.createElement("error-msg");
        parg.innerText = msg; //parg -- paragraph variable
        err.appendChild(parg);
    }
    else{
      window.alert(`hey ${first} ${last}  you submitted a form. Email: ${email} Gender: ${gender}`);
    }
   
}
// attach function to the form "submit" event.
form.addEventListener('submit',onSubmit)