document.getElementsByClassName('printTest').innerHTML = mainPrint("ls test");

function mainPrint(line){
  //msg is meant for the final concat. string to be returned to the HTML file
  //lineArr is for an array of words from the line string
  var lineArr = [];
  var msg;

  lineArr = line.split(" ");
  for (var i = 0; i < lineArr.length; i++) {
    if (lineArr[i] == "ls") {
      msg += lineArr[i].fontcolor("#39ff14");
    }
  }
  msg = "ls";
  return msg;
}
