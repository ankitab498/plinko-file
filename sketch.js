const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground1,ground2,ground3
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300




function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(240,799,800,15)
  ground2=new Ground(0,240,1,800)
  ground3=new Ground(480,240,1,800)
  
for(var k = 0; k <=width; k = k + 80){ //k is xwhich will start at 0 till the last edge of the division's length
    divisions.push(new division(k, height-divisionHeight/2, 10, divisionHeight)); //new division(x,y,width,height)
   }

   //CREATING THE ROWS OF PLINKOS --------------------------------------------------------------------------------------
     for (var j = 55; j <=width; j=j+50){ //j is the x posotion of the plinkos w.r.t divisions 
    plinkos.push(new Plinko(j,75)) //top row of plinkos
    }
    //second row from the top which get shifteda bit from the left side(j=30)
    for (var j = 30; j <=width-10 ; j=j+50){
        //write the push statement for next level
      }
 
    //third row from top j has shifted a bit again
   for (var j = 55; j <=width; j=j+50){
     //write the push statement for next level
   }
 
   for (var j = 30; j <=width-10; j=j+50){
     //write the push statement for next level
   }

}

function draw() {
  background(0); 
   
  Engine.update(engine); 
  ground1.display()

  //FOR LOOP TO DISPLAY THE DIVISION ONE AFTER ANOTHER --------------------------------------------
for(var k = 0; k<divisions.length;k++){
  //display divisions!!
}

//DISPLAY ALL THE ROWS OF PLINKOS ----------------------------------------------------------------------
for(var i = 0; i<plinkos.length;i++){
  //display plinkos
}

//CREATING ARRAY OF  OBJECT OF PARTICLES ---------------------------------------------------------------
if (frameCount% 80 === 0){
  particles.push(new Particle(random(width/2 -30,width/2 +30),10,10))
  
}

//DISPLAY THE PARTICLES -----------------------------------------------------------------------------------
for (var p = 0; p<particles.length; p++){
  //display particles!!
}



drawSprites();
}

