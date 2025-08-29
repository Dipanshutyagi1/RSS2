function speakText() {
  let text = document.getElementById("mypara").innerText;
  let speech = new SpeechSynthesisUtterance(text);
  speech.lang = "hi-IN"; // Hindi voice
  window.speechSynthesis.speak(speech);
}
