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
let enrollments = 0;
var textFile = null;
var startTime;
var endTime;
//let ws;
//var promise = Keyboard.getLayoutMap();

//makeTextFile = function (text)
//{
//  var data = new Blob([text], {type: 'text/plain'});
//  if (textFile != null) {
//    window.URL.revokeObjectURL(textFile);
//  }
//}
//let ws = new WebSocket("ws://localhost:8081");
//var connection = new WrapperWS();
//
//socket.onopen = function(e) {
//  alert("[open] Connection established");
//  alert("Sending to server");
//  socket.send("My name is John");
//};
//
//socket.onmessage = function(event) {
//  alert(`[message] Data received from server: ${event.data}`);
//};
//
//socket.onclose = function(event) {
//  if (event.wasClean) {
//    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
//  } else {
//    // e.g. server process killed or network down
//    // event.code is usually 1006 in this case
//    alert('[close] Connection died');
//  }
//};
//
//socket.onerror = function(error) {
//  alert(`[error] ${error.message}`);
//};

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
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["dot"].downTime = timeInt;
      startTime = timeInt;
      break;
    case 84://74:// t
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["t"].downTime = timeInt;
      break;
    case 73://105:// i
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["i"].downTime = timeInt;
      break;
    case 69://101:// e
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["e"].downTime = timeInt;
      break;
    case 53:// 5
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["5"].downTime = timeInt;
      break;
    case 16://114:// shift
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["shift"].downTime = timeInt;
      break;
    case 82:// R
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["R"].downTime = timeInt;
      break;
    case 79://111:// o
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["o"].downTime = timeInt;
      break;
    case 78://110:// n
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["n"].downTime = timeInt;
      break;
    case 65://97:// a
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["a"].downTime = timeInt;
      break;
    case 76://108:// l
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["l"].downTime = timeInt;
      break;
    case 13:// enter
      log.innerHTML += e.key+" "+timeString+"<br>";
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
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["dot"].upTime = timeInt;
      break;
    case 84://74:// t
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["t"].upTime = timeInt;
      break;
    case 73://105:// i
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["i"].upTime = timeInt;
      break;
    case 69://101:// e
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["e"].upTime = timeInt;
      break;
    case 53:// 5
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["5"].upTime = timeInt;
      break;
    case 16://114:// shift
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["shift"].upTime = timeInt;
      break;
    case 82:// R
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["R"].upTime = timeInt;
      break;
    case 79://111:// o
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["o"].upTime = timeInt;
      break;
    case 78://110:// n
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["n"].upTime = timeInt;
      break;
    case 65://97:// a
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["a"].upTime = timeInt;
      break;
    case 76://108:// l
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["l"].upTime = timeInt;
      break;
    case 13:// enter
      log.innerHTML += e.key+" "+timeString+"<br>";
      finalStats["enter"].upTime = timeInt;
      endTime = timeInt;
      download("data.csv",fileText);
      break;
  }

  //fileText += ','+e.key;
  //log.innerHTML += "<br>"+e.keyCode;
}

function download(filename, text) {
  var attempt = document.getElementById("pwrd");
  var enrollElmnt = document.getElementById("attmpt");
  if (attempt.value == pwd)
  {
    var ddTotal = 0, duTotal = 0, udTotal = 0, uuTotal = 0;
    var ddTime = 0, duTime = 0, udTime = 0, uuTime = 0;

    //finalStats.array.forEach(element => {
    //  fileText+=element.letter;
    //});
    var indexDown = [];
    var indexUp = [];
    for (var x in finalStats){
      indexDown.push(finalStats[x].downTime);
      indexUp.push(finalStats[x].upTime);
    }
    indexDown.sort(function(a, b){return a - b});
    indexUp.sort(function(a, b){return a - b});
    
    duTime = finalStats["dot"].upTime-finalStats["dot"].downTime;
    fileText += duTime;
    duTotal += duTime;
    for(var i = 1; i < 12; i++)
    {
      ddTime = indexDown[i]-indexDown[i-1];
      udTime = indexDown[i]-indexUp[i-1];
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
    var avgUD = udTotal/11;
    var avgUU = uuTotal/11;
    var avgDU = duTotal/12;
    fileText += ','+avgDD;
    fileText += ','+avgUD;
    fileText += ','+avgUU;
    fileText += ','+avgDU;
    fileText += ','+(endTime-startTime);
    fileText += ','+startTime;
    //var session = "Test";
    //this.send(JSON.stringify(fileText), function () {
    //  window.alert("Data sent");
    //});
    ////socket.send(fileText);
    fileText += '\n';
    //finalStats.foreach(x => );
    //var element = document.createElement('a');
    //element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileText));
    //element.setAttribute('download', filename);
  
    //element.style.display = 'none';
    //document.body.appendChild(element);
  
    //element.click();
  
    //document.body.removeChild(element);
    
    
    //fileText = '';
    enrollments++;
    enrollElmnt.innerHTML = enrollments;
    textFile = null;
    finalStats ={
                  "dot":{"letter":190, "downTime":null, "upTime":null},"t":{"letter":84, "downTime":null, "upTime":null}, 
                  "i":{"letter":73, "downTime":null, "upTime":null}, "e":{"letter":69, "downTime":null, "upTime":null}, 
                  "5":{"letter":53, "downTime":null, "upTime":null}, "shift":{"letter":16, "downTime":null, "upTime":null}, 
                  "R":{"letter":82, "downTime":null, "upTime":null}, "o":{"letter":79, "downTime":null, "upTime":null}, 
                  "n":{"letter":78, "downTime":null, "upTime":null}, "a":{"letter":65, "downTime":null, "upTime":null}, 
                  "l":{"letter":76, "downTime":null, "upTime":null}, "enter":{"letter":13, "downTime":null, "upTime":null}
    };
    
    startTime = null;
    endTime = null;
  }
  else
  {
    window.alert("Password incorrect.");
  }
  attempt.value = "";
}

function downloadClick(filename, text) {
  if (text != "")
  {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
}

window.onload = () => {
  const myInput = document.getElementById('pwrd');
  myInput.onpaste = e => e.preventDefault();
  myInput.ondrop = e => e.preventDefault();
}

document.getElementById("dwnld").addEventListener("click", function(){downloadClick("data.csv",fileText);});

document.onkeydown = logKeyDown;
document.onkeyup = logKeyUp;

//this.send = function (message, callback) {
//  this.waitForConnection(function () {
//      ws.send(message);
//      if (typeof callback !== 'undefined') {
//        callback();
//      }
//  }, 1000);
//};
//
//this.waitForConnection = function (callback, interval) {
//  if (ws.readyState === 1) {
//      callback();
//  } else {
//      var that = this;
//      // optional: implement backoff for interval here
//      setTimeout(function () {
//          that.waitForConnection(callback, interval);
//      }, interval);
//  }
//};
//
//function init(){
//  ws = new WebSocket("ws://localhost:8081/");
//}
//
//window.addEventListener("load", init, false);