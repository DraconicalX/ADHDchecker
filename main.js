var status
var lock
function preload(){
  deltaruneFont = loadFont('undertale-deltarune-text-font-extended.ttf')
  button1 = loadImage("B1.png")
  button2 = loadImage("B2.png")
}
function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  
  cnv.parent(document.querySelector('main'));
  
  background(220);
  status = 0;
  lock = true
}
function draw(){
  if(lock){
    let answer = prompt("3:3:40")
    if(answer == "Why, you speak like an ancient and most quiet watchman, for I cannot see how sleeping should offend; only have a care that your bills be not stolen. Well, you are to call at all the alehouses and bid those that are drunk get them to bed."){
      lock = false
    }
  }else{
    textFont(deltaruneFont);
    textSize(16);
    textAlign(CENTER, CENTER);
    fill('white')
    text("Tester tester Tester! ABCDEFG",200,200)
    image(button1,width/8,height/8,0,7*height/8)
    image(button2,width/8,height/8,width/8+width/16,7*height/8)
  }
}
