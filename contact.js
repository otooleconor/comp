const firebaseConfig = {
  apiKey: "AIzaSyCTT67HbiSoBGYnRfvDmKxGKD6LhdEYwKo",
  authDomain: "fir-f21be.firebaseapp.com",
  databaseURL:
    "https://fir-f21be-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-f21be",
  storageBucket: "fir-f21be.appspot.com",
  messagingSenderId: "451019327964",
  appId: "1:451019327964:web:a5e26b66429864a4bf2719"
};

firebase.initializeApp(firebaseConfig);

const myDBCxn = firebase.database().ref("/contacts");

// Tell JavaScript to call saveContacts when SUBMIT button is clicked
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveContacts);

// Submit clicked so post the data to the server
function saveContacts() {
  alert("SUBMIT clicked!!!");

  // read the data from the email field
  const email = document.getElementById("emailIn");
  const emailValue = email.value;
  // reset form
  email.value = ""; // clear the field
  email.focus(); // set the focus
  // code to save the data to Firebase GOES HERE!
  // read the data from the email field
  


  const data = myDBCxn.push();
  data.set({ email: emailValue });
}
<script>
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
if(myInput==Otoole842)
