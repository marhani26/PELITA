function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5e8crGXRJrD":
        Script1();
        break;
      case "6Z1dFUUEZRO":
        Script2();
        break;
      case "6GlnoNIqfwP":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  var player = GetPlayer();
var volume = player.GetVar("volume") / 100; // mengubah nilai 0-100 ke 0.0-1.0
var audioElements = document.getElementsByTagName('audio');
for (var i = 0; i < audioElements.length; i++) {
    audioElements[i].volume = volume;
}
}

function Script3()
{
  var player = GetPlayer();
var volume = player.GetVar("volume") / 100; // mengubah nilai 0-100 ke 0.0-1.0
var audioElements = document.getElementsByTagName('audio');
for (var i = 0; i < audioElements.length; i++) {
    audioElements[i].volume = volume;
}
}

