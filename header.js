//This is the animation of the logo
var canvas=document.getElementById("canvas");

var context=canvas.getContext("2d");

var x=1;
var y=0;

var s=1;

function draw(){
    context.clearRect(0,0,500,80);

    //drawing the logo and pic
    var img=new Image();
    img.src="blucode – 1.png";   
    context.drawImage(img,x,y,100,90);
   
    var img2=new Image();
    img2.src="me.png";    
    context.drawImage(img2,120,0,90,80);
   
   
   x+=s;
//bounce back the logo
    if (x>=270){
        s=-s;
    }
    if(x<0){
        s=-s;
    }

    
window.requestAnimationFrame(draw);
}

draw();