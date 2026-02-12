var status
var lock
var names
var timeHours
var timeMinutes
var reminderIcon
function preload(){
  deltaruneFont = loadFont('undertale-deltarune-text-font-extended.ttf')
  button1 = loadImage("B1.png")
  button2 = loadImage("B2.png")
  reminderIcon = loadImage("Check.png")
  timeHours = []
  timeMinutes = []
  names = []
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
    image(button1,0,9*height/10,width/10,height/10)
    image(button2,width/10,9*height/10,width/10,height/10)
    for(let i = 0; i<names.length; i++){
      image(reminderIcon,0,i*100,width,100)
    }
  }
}
function mouseClicked(){
  if(!lock){
    if(mouseX<width/10&&mouseY>9*height/10){
      push(prompt("Name of reminder:"))
      push(prompt("Hour to remind:"))
      push(prompt("Minute to remind:"))
    }else if(mouseX<width/10&&mouseY>9*height/10){
      
    }
  }
}
