chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(tab.id, {code: theremin}, function(response) {
        
    });
});

var theremin = function() {
  console.log('kill');
  var windowWidth;
  var windowHeight;
  // console.log("ass")
  $(document).ready(function() {
    windowWidth = $(window).width()
    windowHeight = $(window).height()

    $(window).resize(function() {
      windowWidth = $(window).width()
      windowHeight = $(window).height()
      oscillator.frequency.value = windowWidth;
      oscillator.detune.value = windowHeight;
    });


    var context = new AudioContext(); // Create audio container
    oscillator = context.createOscillator(); // Create bass guitar
    gainNode = context.createGain(); // Create boost pedal
    console.log(gainNode);

    oscillator.connect(gainNode); // Connect bass guitar to boost pedal
    gainNode.connect(context.destination); // Connect boost pedal to amplifier
    gainNode.gain.value = 0.3; // Set boost pedal to 30 percent volume
    oscillator.start(); // Play bass guitar instantly


  });
};