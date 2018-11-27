var xpos = 0


function setUp({
   createCanvas(500, 200);    
    
})
function draw(){
    background(200);
    fill('red');
    ellipse(xpos, height/2, 30, 30);
    xpos= xpos + 10*dir;
    if (xpos > width){
        //xpos = 0;
        dir = -1;
    }else{
        if(xpos <0){
            dir = 1;
        }
    }
}