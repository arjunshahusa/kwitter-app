const firebaseConfig = {
      apiKey: "AIzaSyBNFcXnXCixUs3OeQU7gvCLc0623E7O_W8",
      authDomain: "kwitter-app-19072.firebaseapp.com",
      databaseURL: "https://kwitter-app-19072-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-19072",
      storageBucket: "kwitter-app-19072.appspot.com",
      messagingSenderId: "81522626695",
      appId: "1:81522626695:web:c72e4a240344e414dea822"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome! " + user_name;


function addRoom() {
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", Room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}