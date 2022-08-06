var recognition = new window.webkitSpeechRecognition;
function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
speak();
}
recognition.onresult=function(event){
var Content=event.results[0][0].transcript;
console.log(event);
document.getElementById("textbox").innerHTML=Content;
}
function speak(){
var synth=window.speechSynthesis;
speak_data=document.getElementById("textbox").value ;
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera)
}
Webcam.set({
width:335,
height:250,
image_format:"png",
png_quality:90
});
camera=document.getElementById("camera");