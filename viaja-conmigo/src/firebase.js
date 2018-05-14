import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
	 apiKey: "AIzaSyB6_UoT-9bPdNb1EMg1mGCZvjlkxJ_zThc",
    authDomain: "viaja-conmigo.firebaseapp.com",
    databaseURL: "https://viaja-conmigo.firebaseio.com",
    projectId: "viaja-conmigo",
    storageBucket: "",
    messagingSenderId: "491689740982"
}); 
  
export const db = firebaseApp.database()
export const storage = firebaseApp.storage()
export const auth = firebaseApp.auth()