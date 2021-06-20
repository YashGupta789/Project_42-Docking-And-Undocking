var bg;
var hasDocked = false;
var iss,issImage,docked;
var spacecraft;
var spacecraftImage = [];

function preload() {
   bg = loadImage("images/bg1.jpg");
   issImage = loadImage("images/iss.png");
   spacecraftImage[0] = loadImage("images/spacecraft.png");
   spacecraftImage[1] = loadImage("images/spacecraft2.png");
   spacecraftImage[2] = loadImage("images/spacecraft3.png");
   spacecraftImage[3] = loadImage("images/spacecraft4.png");

}

function setup() {
   createCanvas(displayWidth,displayHeight-144);
   
   spacecraft = createSprite(860,620,40,40);
   spacecraft.addImage(spacecraftImage[0]);
   spacecraft.scale = 0.2;
   spacecraft.setCollider("rectangle",10,-150,130,355);
   //spacecraft.debug = true;

   iss = createSprite(displayWidth-700, displayHeight-540, 80, 80);
   iss.addImage(issImage);
   iss.scale = 1.5;
   iss.setCollider("circle",-70,20,17);
   //iss.debug = true;
}

function draw() {
   background(bg); 

   if(!hasDocked){
         if(keyIsDown(UP_ARROW)){
            spacecraft.y = spacecraft.y-5;
            spacecraft.addImage(spacecraftImage[1]);
         }else{
            spacecraft.addImage(spacecraftImage[0]);
         }

         if(keyIsDown(LEFT_ARROW)){
            spacecraft.x = spacecraft.x-5;
            spacecraft.addImage(spacecraftImage[3]);
         }

         if(keyIsDown(RIGHT_ARROW)){
            spacecraft.x = spacecraft.x+5;
            spacecraft.addImage(spacecraftImage[2]);
         }

         if(spacecraft.isTouching(iss)){
            hasDocked = true;
            iss.shapeColor = "red";
         }
  }

   if(hasDocked == true){
      spacecraft.addImage(spacecraftImage[0]);
      fill("chartreuse");
      textSize(50);
      text("Docking Successful!",70,180);
   }


   
   
   drawSprites();
   

}