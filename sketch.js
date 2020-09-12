var trex , trex_runner , trex_collided;







function preload (){

trex_runner.loadAnimation ("trex_1.png" , "trex_2.png" , "trex_3.png");

trex_collided.loadAnimation ("trex_collided.png");



}






function setup() {
  createCanvas(windowWidth,windowHeight);

   trex = createSprite (50,height-20,20,50);
   trex.addAnimation("runner", trex_runner);
   trex.addAnimation("collided" , trex_collided);
   trex.scale = 0.5;


}

function draw() {
  background(0);

  drawSprite();
}