function mainPrint(line){
  console.log("mainPrint");

  var lineArr = [];
  var msg = "exrion@startpage:~" + "$ ".fontcolor("#FFA500");

  lineArr = line.split(" ");
  for (var i = 0; i < lineArr.length; i++) {
    if (lineArr[i] == "ls") {
      msg += lineArr[i].fontcolor("#39ff14") + " ";
    } else {
      msg += lineArr[i].fontcolor("white") + " ";
    }
  }
  return msg;
}

document.getElementById('startPrint1').innerHTML = mainPrint("ls test");
