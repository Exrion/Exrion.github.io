function mainPrint(line){
  console.log("mainPrint");

  var lineArr = [];
  var msg;

  lineArr = line.split(" ");
  for (var i = 0; i < lineArr.length; i++) {
    if (lineArr[i] == "ls") {
      msg += lineArr[i].fontcolor("#39ff14");
    }
  }
  msg = "ls";
  console.log(msg);
  return msg;
}

document.getElementById('printTest').innerHTML = mainPrint("ls test");
