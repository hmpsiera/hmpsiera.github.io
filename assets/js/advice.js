//Unique Firebase Object
const firebaseConfig = {
  apiKey: "AIzaSyBYD09T4seb7fbNAJzwEBz52oFSzeQVjT0",
  authDomain: "hmpsiera.firebaseapp.com",
  projectId: "hmpsiera",
  storageBucket: "hmpsiera.appspot.com",
  messagingSenderId: "980970373586",
  appId: "1:980970373586:web:2e2d1cabc7f21922d7880b"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("fomData");

//Get Submit Form
let submitButton = document.getElementById("submit");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // firestore
  //   .collection("fomData")
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       const n = doc.data().name;
  //       if (name === n) {
  //         console.log("Already Exists");
  //       }

  //       // console.log("data", doc.data().fname);
  //     });
  //   });
  //Save Form Data To Firebase
  db.doc()
    .set({
      name: name,
      email: email,
      message: message
    })
    .then(() => {
      console.log("Data saved")
     })
    .catch((error) => {
      console.log(error);
    });

  //alert
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
  function clearForm() {
    document.getElementById("contactForm").reset();
  }
  clearForm()
});