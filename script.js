var SpeechRecognition = window.webkitSpeechRecognition || window.speechRecognition;

var recognition = new SpeechRecognition();

var header = $('#header')

var Content = '';

recognition.continuous = true;

recognition.onresult = function(event) {

  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;

  Content += transcript;
  header.text(transcript);
  //var msg = new SpeechSynthesisUtterance();
  //msg.text = transcript;
  //window.speechSynthesis.speak(msg);
};

recognition.onstart = function() {
  //instructions.text('Voice recognition is ON.');
}


recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    //instructions.text('Try again.');
  }
}

$('#start-btn').on('click', function(e) {
  if (Content.length) {
    Content += ' ';
  }
  recognition.start();
});
