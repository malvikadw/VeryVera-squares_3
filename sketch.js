squares = [];

function setup() {
  createCanvas(400, 400);
 
  
  let index = 0
  
  for (let i=0; i<3; i++){
    for (let j=0; j<3; j++){
      
      let x = i*100 + 50
      let y = j*100 + 50    
      let s = 90
      
      squares[index] = new Square (x,y,s)
      index++;
      
      
      
    }
  }
}

function draw() {
   
  background(255);
  
  
  
  for(i=0; i< squares.length; i++){
  
  squares[i].show();
  squares[i].move();
   
    
  }
  
}

class Square{

  constructor (x, y, s){
    this.x = x
    this.y = y
    this.s = s
  }
  
  show(){
    blendMode(MULTIPLY);
    fill(255, 223,0);
    noStroke();
    square (this.x, this.y, this.s);
    blendMode(BLEND);
    
    
    
  }
  
  move(){
    this.x += random(-1,1);
    this.y += random(-1,1);
   
  }
  
  }