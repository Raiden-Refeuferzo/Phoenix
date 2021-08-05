
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

    user_name=localStorage.getItem("Username");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    
    function add_room()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="Phoenix_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="Phoenix_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}