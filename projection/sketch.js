var bgcolor;
var button;
var slider;
var canvas;

function setup()
{
  canvas = createCanvas(1200, 600);
  bgcolor = color(200);
  button = createButton("go");
  button.mousePressed(changeColor);
  slider = createSlider(0,255,8);
}

function changeColor()
{
  fill(slider.value(),40, slider.value());
  ellipse(slider.value(),slider.value(),80,80);
}


/*function changeColor()
{
  bgcolor = color(random(255));
}
function draw()
{
  background(bgcolor);
  fill(255, 0, 175);
  ellipse(100,100, slider.value(), slider.value());
if (mouseIsPressed)
  {
    fill(0);
  }
  else
  {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}*/
