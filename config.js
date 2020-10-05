import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD5IzpEG2Ba6Irm1O-IfqEsOkm0Q6IpX44",
    authDomain: "student-attendance-app-aa4de.firebaseapp.com",
    databaseURL: "https://student-attendance-app-aa4de.firebaseio.com",
    projectId: "student-attendance-app-aa4de",
    storageBucket: "student-attendance-app-aa4de.appspot.com",
    messagingSenderId: "394999289044",
    appId: "1:394999289044:web:c3667be04b855f2d8e1741"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();