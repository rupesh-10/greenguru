// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv6xSfSmcLiPuhK-5TxNFQUcshZKPxm2I",
  authDomain: "greenguru-684e1.firebaseapp.com",
  projectId: "greenguru-684e1",
  storageBucket: "greenguru-684e1.appspot.com",
  messagingSenderId: "309053531329",
  appId: "1:309053531329:web:03a5cfa705e8dcca2ca040",
  measurementId: "G-N7J3C0179M"
};

let app 
if(firebase?.apps?.length === 0){
    firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app()
}


const auth = firebase.auth();
const database = firebase.database();

export {auth,database};
