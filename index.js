//document.addEventListener('keydown', logKey);
let somethingGlobal = {"lastDown":0, "lastUp":0, "lastKey":null};
let keyStats = [];// 

let finalStats ={
                  "dot":{"letter":190, "downTime":null, "upTime":null},"t":{"letter":84, "downTime":null, "upTime":null}, 
                  "i":{"letter":73, "downTime":null, "upTime":null}, "e":{"letter":69, "downTime":null, "upTime":null}, 
                  "5":{"letter":53, "downTime":null, "upTime":null}, "shift":{"letter":16, "downTime":null, "upTime":null}, 
                  "R":{"letter":82, "downTime":null, "upTime":null}, "o":{"letter":79, "downTime":null, "upTime":null}, 
                  "n":{"letter":78, "downTime":null, "upTime":null}, "a":{"letter":65, "downTime":null, "upTime":null}, 
                  "l":{"letter":76, "downTime":null, "upTime":null}, "enter":{"letter":13, "downTime":null, "upTime":null}
                };
let fileText = '';
let pwd = '.tie5Ronal';
var textFile = null;
var startTime;
var endTime;
//var promise = Keyboard.getLayoutMap();

//makeTextFile = function (text)
//{
//  var data = new Blob([text], {type: 'text/plain'});
//  if (textFile != null) {
//    window.URL.revokeObjectURL(textFile);
//  }
//}

function logKey(e) {
  var keyStat = keyStats.find(function(post, index) {
    if(post.letter == e.key)
    {
      return post;
    }
  });

  if(keyStat != null)
  {
    if(keyStat.lastPress != null)
    {
      keyStats
    }
  }
  else
  {
    keyStat = {"keyPressed":e.key, "keyDown":e.keyDown, "keyUp":e.keyUp}
  }
  //log.innerHTML = '' + e.keyCode;
  //log.outerHTML = ' <br> ';
  //log.innerHTML += "<br>"+e.keyCode;
  log.innerHTML += "<br>"+e.key;
  //log.insertAdjacentHTML("<br>"+e.keyCode);
  //log.textContent = ''+e.keyCode+'<br>';
  //log every single time a key is pressed
}

function logKeyDown(e) {
  var d = new Date();
  var timeInt = d.getTime();
  var timeString = d.toLocaleString();

  switch(e.keyCode)
  {
    case 190:// .
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["dot"].downTime = timeInt;
      break;
    case 84://74:// t
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["t"].downTime = timeInt;
      break;
    case 73://105:// i
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["i"].downTime = timeInt;
      break;
    case 69://101:// e
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["e"].downTime = timeInt;
      break;
    case 53:// 5
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["5"].downTime = timeInt;
      break;
    case 16://114:// shift
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["shift"].downTime = timeInt;
      break;
    case 82:// R
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["R"].downTime = timeInt;
      break;
    case 79://111:// o
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["o"].downTime = timeInt;
      break;
    case 78://110:// n
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["n"].downTime = timeInt;
      break;
    case 65://97:// a
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["a"].downTime = timeInt;
      break;
    case 76://108:// l
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["l"].downTime = timeInt;
      break;
    case 13:// enter
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["enter"].downTime = timeInt;
      break;
  }
  //fileText += ','+e.key;
}

function logKeyUp(e) {
  var d = new Date();
  var timeInt = d.getTime();
  var timeString = d.toLocaleString();

  switch(e.keyCode)
  {
    case 190:// .
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["dot"].upTime = timeInt;
      break;
    case 84://74:// t
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["t"].upTime = timeInt;
      break;
    case 73://105:// i
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["i"].upTime = timeInt;
      break;
    case 69://101:// e
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["e"].upTime = timeInt;
      break;
    case 53:// 5
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["5"].upTime = timeInt;
      break;
    case 16://114:// shift
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["shift"].upTime = timeInt;
      break;
    case 82:// R
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["R"].upTime = timeInt;
      break;
    case 79://111:// o
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["o"].upTime = timeInt;
      break;
    case 78://110:// n
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["n"].upTime = timeInt;
      break;
    case 65://97:// a
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["a"].upTime = timeInt;
      break;
    case 76://108:// l
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["l"].upTime = timeInt;
      break;
    case 13:// enter
      log.innerHTML += "<br>"+e.key+" "+timeString;
      finalStats["enter"].upTime = timeInt;
      download("hello.csv",fileText);
      break;
  }

  //fileText += ','+e.key;
  //log.innerHTML += "<br>"+e.keyCode;
}

function download(filename, text) {
  var attempt = document.getElementById("pwrd");
  if (attempt.value == pwd)
  {
    var ddTotal, duTotal, udTotal, uuTotal = 0;
    var ddTime, duTime, udTime, uuTime = 0;

    //finalStats.array.forEach(element => {
    //  fileText+=element.letter;
    //});
    var indexDown = [];
    var indexUp = [];
    for (var x in finalStats){
      indexDown.push(finalStats[x].downTime);
      indexUp.push(finalStats[x].upTime);
    }
    
    duTime = finalStats["dot"].upTime-finalStats["dot"].downTime;
    fileText += ','+duTime;
    duTotal += duTime;
    for(var i = 1; i < 12; i++)
    {
      ddTime = indexDown[i]-indexDown[i-1];
      udTime = indexUp[i]-indexDown[i-1];
      uuTime = indexUp[i]-indexUp[i-1];
      duTime = indexUp[i]-indexDown[i];
      fileText += ','+ddTime;
      fileText += ','+udTime;
      fileText += ','+uuTime;
      fileText += ','+duTime;
      ddTotal += ddTime;
      udTotal += udTime;
      uuTotal += uuTime;
      duTotal += duTime;
    }
    var avgDD = ddTotal/11;
    var avgUD = udTime/11;
    var avgUU = uuTime/11;
    var avgDU =duTime/11;
    fileText += ','+avgDD;
    fileText += ','+avgUD;
    fileText += ','+avgUU;
    fileText += ','+avgDU;
    //finalStats.foreach(x => );
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileText));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  else
  {
    window.alert("Password incorrect.");
  }
}

//document.getElementById("dwnld").addEventListener("click", function(){download("hello.csv",fileText);});

document.onkeydown = logKeyDown;
document.onkeyup = logKeyUp;