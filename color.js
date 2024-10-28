var pic;
function preload(){
  pic = loadImage("data/rock.png"); //this will need to be YOUR IMAGE FILENAME!
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("blue");
  imageMode(CENTER, CENTER);
}

function draw(){
  image(pic, width/2, height/2, 100, 100);
    image(pic, mouseX, mouseY, 100, 100);
    button = createButton('click me');
button.position(width/2, height/2);
let buttons=[];
  for (i=0; i<100; i++){
    buttons[i]=createButton('click me');
    buttons[i].position(random(width), random(height));
    // Create a radio button element and place it
  myRadio = createRadio();
  myRadio.position(width/4, height/4);
  myRadio.size(100);

  // Add a few color options.
  myRadio.option('red');
  myRadio.option('yellow');
  myRadio.option('blue');

  // Choose a default option.
  myRadio.selected('yellow');
  }
  
}
