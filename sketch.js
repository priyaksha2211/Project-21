var canvas, surface1, surface2, surface3, surface4, box;
var music, block1, block2, block3, block4;

function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800, 600);

    surface1 = createSprite(700, 550, 200, 20);
    surface1.shapeColor = "green";

    surface2 = createSprite(500, 550, 200, 20);
    surface2.shapeColor = "red";

    surface3 = createSprite(300, 550, 200, 20);
    surface3.shapeColor = "orange";

    surface4 = createSprite(100, 550, 200, 20);
    surface4.shapeColor = "blue";

    box = createSprite(400, 300, 30, 30)
    box.shapeColor = "black";
    box.velocityX = 2;
    box.velocityY = 4;

    block1 = createSprite(800,300,20,600);
    block2 = createSprite(400,0,800,20);
    block3 = createSprite(0,300,20,600);
    block4 = createSprite(400,600,810,20);



    console.log(box._collideWith);
}

function draw() {
    background(rgb(169, 169, 169));
 
    
    if(box.isTouching(surface2)){
        box.shapeColor = "red";
        music.play();

    }


    if(box.isTouching(surface1)){
        box.shapeColor = "green";
        music.play();

    }

    if(box.isTouching(surface3)){
        box.shapeColor = "orange";
        music.play();
    }

    if(box.isTouching(surface4)){
        box.shapeColor = "blue";
        music.play();
    }

    BounceOff(box, surface2);
    BounceOff(box, surface1);
    BounceOff(box, surface3);
    BounceOff2(box, block1);
    BounceOff2(box, block3);
    BounceOff(box, block2);
    BounceOff(box, surface4);






    drawSprites();
}

function isTouching(sprite1, sprite2) {

    if (sprite1.x - sprite2.x < sprite2.width / 2 + sprite1.width / 2
        && sprite2.x - sprite1.x < sprite2.width / 2 + sprite1.width / 2
        && sprite1.y - sprite2.y < sprite2.height / 2 + sprite1.height / 2
        && sprite2.y - sprite1.y < sprite2.height / 2 + sprite1.height / 2) {
        return true;
    }
    else {
        return false;
    }



}

function BounceOff(movingSprite, fixedSprite) {
    if (movingSprite.x - fixedSprite.x < fixedSprite.width / 2 + movingSprite.width / 2
        && fixedSprite.x - movingSprite.x < fixedSprite.width / 2 + movingSprite.width / 2 && 
        movingSprite.y - fixedSprite.y < fixedSprite.height / 2 + fixedSprite.height / 2
        && fixedSprite.y - movingSprite.y < fixedSprite.height / 2 + fixedSprite.height / 2) {
            // movingSprite.velocityX = (-1) * movingSprite.velocityX;
            movingSprite.velocityY = (-1) * movingSprite.velocityY;
    }


}

function BounceOff2(movingSprite, fixedSprite) {
    if (movingSprite.x - fixedSprite.x < fixedSprite.width / 2 + movingSprite.width / 2
        && fixedSprite.x - movingSprite.x < fixedSprite.width / 2 + movingSprite.width / 2 && 
        movingSprite.y - fixedSprite.y < fixedSprite.height / 2 + fixedSprite.height / 2
        && fixedSprite.y - movingSprite.y < fixedSprite.height / 2 + fixedSprite.height / 2) {
            movingSprite.velocityX = (-1) * movingSprite.velocityX;
            // movingSprite.velocityY = (-1) * movingSprite.velocityY;
    }


}