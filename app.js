//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
//   import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
//   import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";
//   import {getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js"; 

//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyApVvG4EPRinyqHa4xhKBWk5C0UbDf2e3Y",
//     authDomain: "e-com-2a8da.firebaseapp.com",
//     projectId: "e-com-2a8da",
//     storageBucket: "e-com-2a8da.appspot.com",
//     messagingSenderId: "899631938425",
//     appId: "1:899631938425:web:b29145a1cc341eccb4cda8",
//     measurementId: "G-G1MVW7BRDT"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
//   const storage = getStorage();
//   const db = getFirestore(app);


//   function myFun(){
//     const fName = document.getElementById("fName").value
//     const lName = document.getElementById("lName").value
//     const number = document.getElementById("number").value
// const email = document.getElementById("email").value
// const password = document.getElementById("password").value
// const file = document.getElementById("file").files[0]
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     console.log("account created successfully");
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// const storageRef = ref(storage, email);

// uploadBytes(storageRef, file)
// .then((snapshot) => {
//   console.log('Uploaded a blob or file!');
//   console.log(snapshot);
// })
// .catch((error)=>{{
//     console.log("Error on your uploading file");
//     console.log(error);
// }})

//  addDoc(collection(db, "demo"), {
// firstName:fName,
// lastName:lName,
// number:number
// });

//   }

//   module.myFun=myFun


// let mark = 92;

// if(mark>=90 && mark <=100){
// console.log(" 1st class");
// }
// else if(mark>=80 && mark <=90){
//   console.log(" 2st class");

// }
// else if(mark>=70 && mark <=80){
//   console.log(" 3st class");

// }
// else if(mark>=50 && mark <= 70){
//   console.log(" 4st class");

// }
// else{
//   console.log(" fail");

// }


const element=()=>{
  type = "deposit"
  let date = new Date().toDateString()
  let p = document.getElementById("pera")
  let div = document.createElement("div").innerHTML="hello world"
  console.log(date);
  p.innerHTML=div
  p.classList.add("p1")
  p.appendChild(div)
  // pera.style.color="red"

}