import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCRwbTz-fKHNX0l4XX68QYFELbO5poxLnk",
    authDomain: "todo-app-7a198.firebaseapp.com",
    projectId: "todo-app-7a198",
    storageBucket: "todo-app-7a198.appspot.com",
    messagingSenderId: "622127488532",
    appId: "1:622127488532:web:d6e598b6340e4ce2859101",
    measurementId: "G-T4F94NEB0L"
};

firebase.initializeApp(firebaseConfig);