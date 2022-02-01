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
  const name = document.getElementById("nameIn");
  const nameValue = name.value;
  // reset form
  name.value = ""; // clear the field
  name.focus(); // set the focus
  // code to save the data to Firebase GOES HERE!
  // read the data from the email field
  const age = document.getElementById("ageIn");
  const ageValue = age.value;
  // reset form
  age.value = ""; // clear the field
  age.focus(); // set the focus
  // code to save the data to Firebase GOES HERE!
  const year = document.getElementById("yearIn");
  const yearValue = year.value;
  // reset form
  year.value = ""; // clear the field
  year.focus(); // set the focus
  // code to save the data to Firebase GOES HERE!
  const sport = document.getElementById("sportIn");
  const sportValue = sport.value;
  // reset form
  sport.value = ""; // clear the field
  sport.focus(); // set the focus
  // code to save the data to Firebase GOES HERE!


  const data = myDBCxn.push();
  data.set({ email: nameValue });
}
