var status
var lock
function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  
  cnv.parent(document.querySelector('main'));
  
  background(220);
  status = 0;
  lock = true
}
function draw(){
  if(lock){
    text("Enter website password:",width/2,height/2+height/16);
    if(keyIsDown(LEFT_ARROW)&&status == 0){
      status++;
      console.log("right")
    }else if(keyIsDown(UP_ARROW)&&status == 1){
      status++;
      console.log("right")
    }else if(keyIsDown(RIGHT_ARROW)&&status == 2){
      status++;
      console.log("right")
    }else if(keyIsDown(DOWN_ARROW)&&status == 3){
      status++;
      console.log("right")
    }else if(keyIsDown(RIGHT_ARROW)&&status == 4){
      status++;
      console.log("right")
    }else if(keyIsDown(DOWN_ARROW)&&status == 5){
      status++;
      console.log("right")
    }else if(keyIsDown(RIGHT_ARROW)&&status == 6){
      status++;
      console.log("right")
    }if(keyIsDown(LEFT_ARROW)&&status == 7){
      status++;
      console.log("right")
    }else if(keyIsDown(UP_ARROW)&&status == 8){
      status++;
      console.log("right")
    }else if(keyIsDown(RIGHT_ARROW)&&status == 9){
      status++;
      console.log("right")
    }else if(keyIsDown(DOWN_ARROW)&&status == 10){
      status++;
      console.log("right")
    }else if(keyIsDown(RIGHT_ARROW)&&status == 11){
      status++;
      console.log("right")
    }else if(keyIsDown(DOWN_ARROW)&&status == 12){
      status++;
      console.log("right")
    }else if(keyIsDown(RIGHT_ARROW)&&status == 13){
      status++;
      console.log("right")
    }else if(keyIsDown(UP_ARROW)&&status == 14){
      lock = false;
    }else{
      status=0;
    }
  }
}
