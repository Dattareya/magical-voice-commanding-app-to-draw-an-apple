var speechRecog=window.webkitSpeechRecognition;
var recog=new speechRecog();
x=0;
y=0;
ruru="";

 function preload()
 {

 }
 function draw()
 {
   if(ruru=="circle" ) 
   {
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
     circle(x,y,100);
    ruru="";
   }
 }
 function setup()
 {
    canvas=createCanvas(900,600)
 }
 function start()
 {
    document.getElementById("status").innerHTML="I am listening . Plese Speak";
    recog.start();
 }

 recog.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="I am drawing a "+content;
    if(content=="apple")
    {
       ruru="circle";
    }
 }

 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}


