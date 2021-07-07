
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBaEUsU_rVKGDagFlUQbbbIvWDOLE5PPS8",
      authDomain: "kwitter-dc8fb.firebaseapp.com",
      databaseURL: "https://kwitter-dc8fb-default-rtdb.firebaseio.com",
      projectId: "kwitter-dc8fb",
      storageBucket: "kwitter-dc8fb.appspot.com",
      messagingSenderId: "971272749793",
      appId: "1:971272749793:web:c2837f7cfc2ea7d84a6da0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
