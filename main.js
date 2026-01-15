var status
function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  
  cnv.parent(document.querySelector('main'));
  
  background(220);
  status = 0;
}
function draw(){
  text("Enter website password:",width/2,height/2+height/16);
  if(keyIsDown(LEFT_ARROW)&&status == 0){
    status++;
  }else if(keyIsDown(UP_ARROW)&&status == 1){
    status++;
  }else if(keyIsDown(RIGHT_ARROW)&&status == 2){
    status++;
  }else if(keyIsDown(DOWN_ARROW)&&status == 3){
    status++;
  }else if(keyIsDown(RIGHT_ARROW)&&status == 4){
    status++;
  }else if(keyIsDown(DOWN_ARROW)&&status == 5){
    status++;
  }else if(keyIsDown(RIGHT_ARROW)&&status == 6){
    status++;
  }if(keyIsDown(LEFT_ARROW)&&status == 7){
    status++;
  }else if(keyIsDown(UP_ARROW)&&status == 8){
    status++;
  }else if(keyIsDown(RIGHT_ARROW)&&status == 9){
    status++;
  }else if(keyIsDown(DOWN_ARROW)&&status == 10){
    status++;
  }else if(keyIsDown(RIGHT_ARROW)&&status == 11){
    status++;
  }else if(keyIsDown(DOWN_ARROW)&&status == 12){
    status++;
  }else if(keyIsDown(RIGHT_ARROW)&&status == 13){
    status++;
  }
}
