function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  
  cnv.parent(document.querySelector('main'));
  
  background(220);
}
function draw(){
  text("Test!",width/2,height/2)
}
