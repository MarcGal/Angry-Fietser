/*jshint esversion: 6 */
class Tourist {
  constructor (){
    this.img = new Image ();
    this.img.src = 'img/drunk_english.png';
    // this.blood = new Image ();
    // this.blood.src = 'img/blood.jpeg'; BLOOD IMAGE
    this.width = 128;
    this.height = 192;
    // this.imgWitdh = 15; old properties
    // this.imgHeight = 25; old properties
    this.imgRows = 4;
    this.imgCols = 4;
    this.rowLeft = 1;
    this.rowDown = 0;
    this.widthFrame = this.width/this.imgCols;
    this.heightFrame = this.height/this.imgRows;
    this.srcX = 32;
    this.srcY = 48;
    this.currentFrame = 0;
    this.frameCount = 4;
    this.positionX = 810;
    this.positionY = 200;
    this.speed = 0.5;
    this.crossingPoint = this.crossingPoint();
  }

  move (){
      this.positionX -= this.speed;
  }

  crossingPoint () { //Generate random crossing point for each tourist
    this.crossingPoint = Math.floor(Math.random() * (750 - 40) + 40);
    console.log(`this is my crossing point ${this.crossingPoint}`);
    return this.crossingPoint;
  }

}