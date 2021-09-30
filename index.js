//document.addEventListener('keydown', logKey);
let somethingGlobal = {"lastDown":0, "lastUp":0, "lastKey":null};
let keyStats = [];
let fileText = '';
var textFile = null;
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
    if(post.title == e.key)
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
  var keyStat = keyStats.find(function(post, index) {
    if(post.title == e.key)
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
  log.innerHTML += "<br>"+e.key;
}

function logKeyUp(e) {
  //var fs = require('fs');
  //var filepath = 'data.json';
  //var docFile = document.open("")
  var keyStat = keyStats.find(function(post, index) {
    if(post.title == e.key)
    {
      //document.write('newLine\n');
      //fs.write(filepath, content, 'a');
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
  fileText += ','+e.key;
  log.innerHTML += "<br>"+e.key;
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

document.getElementById("dwnld").addEventListener("click", function(){download("hello.csv",fileText);});

document.onkeydown = logKeyDown;
document.onkeyup = logKeyUp;