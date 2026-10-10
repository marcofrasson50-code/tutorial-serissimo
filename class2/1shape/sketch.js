let xMax = 400;
let yMax = 600;
let xRocket = xMax/2;
let yRocket = yMax*0.6;
//variabili globali, visibili da tutto lo script. se scritti all'interno di setup o draw saranno vidibili solo da dentro alla funzione

function setup() {
  createCanvas(xMax, yMax);
}


function draw() {
  background(20,24,40);

//push apre una finestra entro cui utilizzo tutte le impostazioni x i disegni. tutto ciò contenuto tra push e pop è un contesto
  push();
  //corpo del rocket
  fill(220);
  stroke(40);
  strokeWeight(2);
  rectMode(CENTER);//disegna il rettangolo dal centro
  rect(xRocket,yRocket+30,80,180,20);

  //nose del rocket
  fill(200,40,40);//red
  triangle(xRocket-40,yRocket-60,xRocket,yRocket-120,xRocket+40,yRocket-60);

  //window
  fill(40,150,220);//blue
  stroke(255);//bordo bianco
  strokeWeight(3);
  ellipse(xRocket,yRocket+20,48,48)

  //left and right wings
  fill(180,30,30);
  stroke(40)
  strokeWeight(2);
  triangle(xRocket-40,yRocket+90,xRocket-80,yRocket+130,xRocket-20,yRocket+90)//left
  triangle(xRocket+40,yRocket+90,xRocket+80,yRocket+130,xRocket+20,yRocket+90)//right

  pop();

  push()
  randomSeed(99) //imposto il seme di generazione dei numeri random
  noStroke();//tolgo outline stelle
  for (let i=0;i<120;i++) {
    //calcolo coordinate del cerchio che devono essere diverse in maniera incermentale
    let sx = (i*37) % width + i%3;
    let sy = (i*73) % height + i%7;//sposto il centro delle varie stelle
    fill(255,255,255, random(150,255));
    ellipse(sx,sy, random(1,2.8));
      //ora cambio colore e dimensione del raggio
      /*if (i%2 == 0){        //primo tipo
        fill(255,255,150);
        ellipse(sx,sy,1);
      } else if(i%3 == 0) { //secondo tipo
        fill(200,100,155)
        ellipse(sx,sy,1.5)
      } else {              //terzo tipo
        fill(255,255,100)
        ellipse(sx,sy,2.8)
    }*/
  }
  pop()
  xRocket = (xRocket+1)%(xMax+120); //animazione, aggiungiamo 120 perché mi servono 60 da una parte e 60 dall'altra perché il rocket non parta dentro
}
