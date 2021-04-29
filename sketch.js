function setup() 
{
  createCanvas(400, 400);
  R1 = 1
  Rx = 0
  Ry = 0
  R2 = 3
  t = -PI/4
}

function draw() 
{
  background(0);
  noFill();
  stroke(255);
  translate(width/2,height/2);
  strokeWeight(.1)
  scale(20)
  
  r = (pow(R1,2)-pow(R1,2)*cos(t)+R1*R2-R1*R2*cos(t))/((1)*(R1*cos(t)-R1+R2*cos(t)+R2))
  rx = Rx + (R1+r)*cos(t)
  ry = Ry + (R1+r)*sin(t)
  
  
  
  circle(Rx,Ry,2*R1)
  circle(Rx + R1 + R2,Ry,2*R2)
  circle(rx,-ry,2*r)
  t = t - .01
  //circle(rx,-ry,.1)
  //console.log(r)
  
  
  
}