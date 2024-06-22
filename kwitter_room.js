var firebaseConfig = {
      apiKey: "AIzaSyCcDhJoOKE9V02Fs_ToC_8hyy-1cQTpCb4",
      authDomain: "let-chat-app-cf7f1.firebaseapp.com",
      databaseURL: "https://let-chat-app-cf7f1-default-rtdb.firebaseio.com",
      projectId: "let-chat-app-cf7f1",
      storageBucket: "let-chat-app-cf7f1.appspot.com",
      messagingSenderId: "980852940102",
      appId: "1:980852940102:web:c314dd00164564a1731947"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
user_name= localStorage.getItem("user_name");
console.log(user_name);
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom(){
      room_name= document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location =" index.html";
}