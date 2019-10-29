$(document).ready(function(){
    console.log( "ready!" );

// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var config = {
    apiKey: "AIzaSyAXgG7_7r77PfCQ4nrdcnKq-Ev0_GhIQNo",
    authDomain: "danielle-test-project.firebaseapp.com",
    databaseURL: "https://danielle-test-project.firebaseio.com",
    projectId: "danielle-test-project",
    storageBucket: "danielle-test-project.appspot.com",
    messagingSenderId: "375960205835",
    appId: "1:375960205835:web:2eb57cccde64468a04650e",
    measurementId: "G-KHQDC7VXLW"
  };
  
  firebase.initializeApp(config);
  
  
  // Create a variable to reference the database.
  let database = firebase.database();

$('#add-train-btn').on('click',function(event){
event.preventDefault();
//take user input
const trainName = $('#train-name-input').val().trim();
const destination  = $('#destination-input').val().trim();
let trainTime = $('#first-train-input').val().trim();
let trainFreq = $('#frequency-input').val().trim();
var markup = "<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + trainFreq + "</td></tr>";
            $("table tbody").append(markup);
//consolelog everything!
console.log(trainName);
console.log(destination);
console.log(trainTime);
console.log(trainFreq);

//create temp obj for train data
let newTrain={
    name: trainName,
    dest: destination,
    time: trainTime,
    freq: trainFreq
};
database.ref().push(newTrain);



alert("train successfully ADDED");
//adds content into the schedule
$('#train-name-input').val('');
$('#rdestination-input').val('');
$('#first-train-input').val(''); 
$('#frequency-input').val('');

function myCreateFunction() {
    var table = $("#train-table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
  }

})

});