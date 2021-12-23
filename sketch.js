var backgroundIMG
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var score=0
//const Body = Matter.Body;
//const Render = Matter.Render;
//const Constraint = Matter.Constraint;
var engine, world
var balls = []
var ball;
function preload()
{
backgroundIMG=loadImage("Soccer.jpeg");

}

function setup() {
createCanvas(1200,700);
engine=Engine.create();
world=engine.world;
goal=new Goal(50,100,70,80);
//ground= new Ground(600,380,,600);
ground2 = new Ground(600,690,1200,20)

player=new Player(1150,550)
ball = new Ball(player.body.position.x,player.body.position.y);
}

function draw() {
console.log(player.body.position.x);
background(backgroundIMG);
Engine.update(engine);
goal.display();

ground2.display();
ball.display();
player.display();

collisionWithBall();
textSize(40);
text("Score:"+score,1000,100)





}

function mousePressed()
{
//  console.log(mouse)
   ball.shoot();
   player.flag=true
}
function collisionWithBall() {
  //for (var i = 0; i < balls.length; i++) {
   // if (balls[index] !== undefined) {
      var collision = Matter.SAT.collides(ball.body, goal.body);

      if (collision.collided) {
        score+=3
         // balls.remove(i);
        

       // Matter.World.remove(world, ball.body);
        //delete balls[index];
      }
    }
  
