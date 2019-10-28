$(document).ready(function(){
    console.log( "ready!" );

// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
let config = {
        apiKey: "AIzaSyBIoYRYn2gkYW7YGVSgPvS2jDiIakWMuCo",
        authDomain: "traintimes-68e6e.firebaseapp.com",
        databaseURL: "https://traintimes-68e6e.firebaseio.com",
        projectId: "traintimes-68e6e",
        storageBucket: "traintimes-68e6e.appspot.com",
        messagingSenderId: "15461218892",
        appId: "1:15461218892:web:7652b07bef93e8795cd2e9",
        measurementId: "G-EMS958C48S"
      };
  
  firebase.initializeApp(config);
  
  
  // Create a variable to reference the database.
  let database = firebase.database();

$('add-train-btn').on('click',function(event){
event.preventDefault();
//take user input
Const trainName: $('#train-name-input').val().trim();
Const destination: $('#destination-input').val().trim();
Let trainTime: $('#first-train-input').val().trim();
Let trainFreq: $('#frequency-input').val().trim();

//create temp obj for train data
let newTrain={
    name: trainName,
    dest: destination,
    time: trainTime,
    freq: trainFreq
};
database.ref().push(newTrain);

//consolelog everything!
console.log(trainName.name);
console.log(destination.dest);
console.log(trainTime.time);
console.log(trainFreq.freq);

alert("train successfully ADDED");

$('#train-name-input').val('');
$('#rdestination-input').val('');
$('#first-train-input').val(''); 
$('#frequency-input').val('');

})

});