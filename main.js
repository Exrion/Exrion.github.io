const command = "exrion@startpage".fontcolor("#39ff14") + ":".fontcolor("white") + "~".fontcolor("cyan") + "$ ".fontcolor("white");

function mainPrint(line){
  var lineArr = [];
  var msg = "";

  lineArr = line.split(" ");
  for (var i = 0; i < lineArr.length; i++) {
    if (lineArr[i] == "exrion@startpage") {
      msg += lineArr[i].fontcolor("#39ff14") + " ";
    } else {
      msg += lineArr[i].fontcolor("white") + " ";
    }
  }
  return msg;
}

function getDate(){
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  var construct = day + " " + monthNames[month] + " " + year;
  return construct;
}

function getTime(){
  var date = new Date();
  var hours = date.getUTCHours() + 8; //Adjusted for GMT+8
  var minutes = date.getUTCMinutes();
  var seconds = date.getUTCSeconds();
  var amPM = "";

  if (hours - 12 > 0) {
    hours = hours - 12;
    amPM = "PM";
  } else{
    amPM = "AM";
  }

  if (seconds < 10){
    seconds = "0" + seconds
  }

  var construct = hours + ":" + minutes + " " + amPM;
  return construct
}

function readInput(){

}

function getCommand(){

}

function commandBox(){

}

function printCommandText(){
  return command;
}

document.getElementById('startPrint1').innerHTML = mainPrint("███████╗ &nbsp exrion@startpage");
document.getElementById('startPrint2').innerHTML = mainPrint("██╔════╝ &nbsp Date: " + getDate());
document.getElementById('startPrint3').innerHTML = mainPrint("█████╗░░ &nbsp Time: " + getTime());
document.getElementById('startPrint4').innerHTML = mainPrint("██╔══╝░░ &nbsp ");
document.getElementById('startPrint5').innerHTML = mainPrint("███████╗ &nbsp ");
document.getElementById('startPrint6').innerHTML = mainPrint("╚══════╝ &nbsp ");
document.getElementById('commandStart').innerHTML = printCommandText();
