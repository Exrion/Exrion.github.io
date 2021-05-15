GetClock();
setInterval(GetClock,1000);

document.getElementById("consolePrint").innerHTML = mainPrint("test");

function GetClock(){
  var d=new Date();
  var nhour=d.getHours(),nmin=d.getMinutes(),ap;
  if(nhour==0){ap=" AM";nhour=12;}
  else if(nhour<12){ap=" AM";}
  else if(nhour==12){ap=" PM";}
  else if(nhour>12){ap=" PM";nhour-=12;}

  if(nmin<=9) nmin="0"+nmin;

  var clocktext=""+nhour+":"+nmin+ap+"";
  document.getElementById('clockbox').innerHTML=clocktext;
}

function mainPrint(line){
  //msg is meant for the final concat. string to be returned to the HTML file
  //lineArr is for an array of words from the line string
  var lineArr = [];
  var msg;

  lineArr = line.split("");
  for (var i = 0; i < lineArr.length; i++) {
    if (lineArr[i] == "ls") {
      msg += lineArr[i].fontcolor("#39ff14");
    }
  }
  msg = "ls";
  return msg;
}
