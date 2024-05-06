//preparar e rodar um código
function setup () {    
  createCanvas( 600 , 400);
  background("rgb(255,255,125)");
}

//responsável por desenhar
function draw() {
  stroke ("rgb(247,34,34)")
  fill("rgb(240,175,56)")
  
  if (mouseIsPressed){
    rect (mouseX, mouseY, 20, 20);
  }
}