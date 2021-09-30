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
  var timeDown = d.getTime();

  switch(e.keyCode)
  {
    case 190:// .
      log.innerHTML += "<br>"+e.key;
      finalStats["dot"].keyDown = timeDown;
      break;
    case 84://74:// t
      log.innerHTML += "<br>"+e.key;
      finalStats["t"].keyDown = timeDown;
      break;
    case 73://105:// i
      log.innerHTML += "<br>"+e.key;
      finalStats["i"].keyDown = timeDown;
      break;
    case 69://101:// e
      log.innerHTML += "<br>"+e.key;
      finalStats["e"].keyDown = timeDown;
      break;
    case 53:// 5
      log.innerHTML += "<br>"+e.key;
      finalStats["5"].keyDown = timeDown;
      break;
    case 16://114:// shift
      log.innerHTML += "<br>"+e.key;
      finalStats["shift"].keyDown = timeDown;
      break;
    case 82:// R
      log.innerHTML += "<br>"+e.key;
      finalStats["R"].keyDown = timeDown;
      break;
    case 79://111:// o
      log.innerHTML += "<br>"+e.key;
      finalStats["o"].keyDown = timeDown;
      break;
    case 78://110:// n
      log.innerHTML += "<br>"+e.key;
      finalStats["n"].keyDown = timeDown;
      break;
    case 65://97:// a
      log.innerHTML += "<br>"+e.key;
      finalStats["a"].keyDown = timeDown;
      break;
    case 76://108:// l
      log.innerHTML += "<br>"+e.key;
      finalStats["l"].keyDown = timeDown;
      break;
    case 13:// enter
      log.innerHTML += "<br>"+e.key;
      finalStats["enter"].keyDown = timeDown;
      break;
  }

  //var keyStat = keyStats.find(function(post, index) {
  //  if(post.title == e.key)
  //  {
  //    return post;
  //  }
  //});
//
  //if(keyStat != null)
  //{
  //  if(keyStat.lastPress != null)
  //  {
  //    keyStats += keyStat.lastPress;
  //  }
  //}
  //else
  //{
  //  keyStat = {"keyPressed":e.key, "keyDown":e.keyDown, "keyUp":e.keyUp}
  //}
  ////log.innerHTML += "<br>"+e.keyCode;
  //log.innerHTML += "<br>"+e.key;
  fileText += ','+e.key;
}

function logKeyUp(e) {
  var d = new Date();
  var timeUp = d.getTime();
  //var fs = require('fs');
  //var filepath = 'data.json';
  //var docFile = document.open("")
  //var keyStat = keyStats.find(function(post, index) {
  //  if(post.title == e.key)
  //  {
  //    //document.write('newLine\n');
  //    //fs.write(filepath, content, 'a');
  //    return post;
  //  }
  //});

  //if(keyStat != null)
  //{
  //  if(keyStat.lastPress != null)
  //  {
  //    keyStats += keyStat.lastPress;
  //  }
  //}
  //else
  //{
  //  keyStats += {"keyPressed":e.key, "keyDown":e.keyDown, "keyUp":e.keyUp}
  //}

  switch(e.keyCode)
  {
    case 190:// .
      log.innerHTML += "<br>"+e.key;
      finalStats["dot"].keyDown = timeUp;
      break;
    case 84://74:// t
      log.innerHTML += "<br>"+e.key;
      finalStats["t"].keyDown = timeUp;
      break;
    case 73://105:// i
      log.innerHTML += "<br>"+e.key;
      finalStats["i"].keyDown = timeUp;
      break;
    case 69://101:// e
      log.innerHTML += "<br>"+e.key;
      finalStats["e"].keyDown = timeUp;
      break;
    case 53:// 5
      log.innerHTML += "<br>"+e.key;
      finalStats["5"].keyDown = timeUp;
      break;
    case 16://114:// shift
      log.innerHTML += "<br>"+e.key;
      finalStats["shift"].keyDown = timeUp;
      break;
    case 82:// R
      log.innerHTML += "<br>"+e.key;
      finalStats["R"].keyDown = timeUp;
      break;
    case 79://111:// o
      log.innerHTML += "<br>"+e.key;
      finalStats["o"].keyDown = timeUp;
      break;
    case 78://110:// n
      log.innerHTML += "<br>"+e.key;
      finalStats["n"].keyDown = timeUp;
      break;
    case 65://97:// a
      log.innerHTML += "<br>"+e.key;
      finalStats["a"].keyDown = timeUp;
      break;
    case 76://108:// l
      log.innerHTML += "<br>"+e.key;
      finalStats["l"].keyDown = timeUp;
      break;
    case 13:// enter
      log.innerHTML += "<br>"+e.key;
      finalStats["enter"].keyDown = timeUp;
      download("hello.csv",fileText);
      break;
  }

  fileText += ','+e.key;
  //log.innerHTML += "<br>"+e.keyCode;
}

function download(filename, text) {
  var attempt = document.getElementById("pwrd");
  if (attempt.value == pwd)
  {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
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