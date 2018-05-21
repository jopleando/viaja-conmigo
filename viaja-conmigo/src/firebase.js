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
export const notif = firebaseApp.messaging()

notif.onTokenRefresh(function() {
    notif.getToken()
        .then(function(currentToken) {
            if (currentToken) {
                //sendTokenToServer(currentToken);
                //updateUIForPushEnabled(currentToken);
                saveToken();
            } else {
                // Show permission request.
                console.log('No Instance ID token available. Request permission to generate one.');
                // Show permission UI.
                //updateUIForPushPermissionRequired();
                //setTokenSentToServer(false);
            }
        })
        .catch(function(err) {
            console.log('An error occurred while retrieving token. ', err);
            //showToken('Error retrieving Instance ID token. ', err);
            //setTokenSentToServer(false);
        });
});

notif.onMessage(function(payload) {
    console.info("Mensaje web push recibido en primer plano");
    console.log(payload);
});

function saveToken(){
    notif.getToken().then(function(currentToken) {
        if (currentToken) {
            db.ref('notifTokens/' + currentToken).set(true);
        } else {
            requestPermission();
        }
    }.bind(this)).catch(function(err) {
        console.error('Unable to get messaging token.', err);
        if (err.code === 'messaging/permission-default') {
            console.log('You have not enabled notifications on this browser. To enable notifications reload the page and allow notifications using the permission dialog.');
        } else if (err.code === 'messaging/notifications-blocked') {
            console.log('You have blocked notifications on this browser. To enable notifications follow these instructions: <a href="https://support.google.com/chrome/answer/114662?visit_id=1-636150657126357237-2267048771&rd=1&co=GENIE.Platform%3DAndroid&oco=1">Android Chrome Instructions</a><a href="https://support.google.com/chrome/answer/6148059">Desktop Chrome Instructions</a>');
        }
    }.bind(this));
}

function requestPermission(){
    notif.requestPermission().then(function() {
        console.log('Notification permission granted.');
        saveToken();
    }.bind(this)).catch(function(err) {
        console.error('Unable to get permission to notify.', err);
    });
}