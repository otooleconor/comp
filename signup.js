const firebaseConfig = {
  apiKey: "AIzaSyAs3IB8ZuH0IK-mjU9iIpiWIaFyfdscXAg",
  authDomain: "computerscience-6e601.firebaseapp.com",
  databaseURL: "https://computerscience-6e601-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "computerscience-6e601",
  storageBucket: "computerscience-6e601.appspot.com",
  messagingSenderId: "208934090461",
  appId: "1:208934090461:web:505fd1d783390e73ca4d34",
  measurementId: "G-KXVTYE32XS"
};

firebase.initializeApp(firebaseConfig);

const myDBCxn = firebase.database().ref("/contacts");

// Tell JavaScript to call saveContacts when SUBMIT button is clicked
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveContacts);

// Submit clicked so post the data to the server
function saveContacts() {
  alert("SUBMIT clicked!!!");
  
   const name = document.getElementById("nameIn");
  const nameValue = name.value;
  
  name.value = ""; 
  name.focus(); 
  
  
   const age = document.getElementById("ageIn");
  const ageValue = age.value;
  
  age.value = ""; 
  age.focus(); 
  
  
  const data = myDBCxn.push();
  data.set({ email: name.Value, password: age.Value});
  
  
}


