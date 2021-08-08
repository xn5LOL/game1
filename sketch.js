var player,playerImg,playerI
var jf,jfImg
var hf,hfImg
var back,backImg
var play,playImg,pause,pauseImg
var up 
var down
var PLAY = 1
var END = 0
var gameState = PLAY
var score  = 0

function preload(){
	backImg = loadImage("jungle.jpg")
	playerImg = loadAnimation("a.png","b.png","c.png")
	playerI = loadAnimation("a.png")
	jfImg = loadImage("jf-removebg-preview.png")
	hfImg = loadImage("hf-removebg-preview.png")
	playImg = loadImage("play.png")
	pauseImg = loadImage("pause.png")

}

function setup(){
	createCanvas(windowWidth,windowHeight)

	jfGroup = new Group();
	hfGroup = new Group();

	back = createSprite(750,150,2000,600)
	back.scale = 2
	back.addImage(backImg)

	player = createSprite(windowWidth-150,windowHeight-350,50,100)
	//player.shapeColor = "red"
	player.scale = 1.5
	player.addAnimation("img",playerImg)

	jf = createSprite(windowWidth-850,windowHeight-450,35,35)
	jf.scale = 0.5
	//jf.shapeColor = "brown"
	jf.velocityY = 5
	jf.addImage(jfImg)
	jfGroup.add(jf)

	
	hf = createSprite(windowWidth-850,windowHeight-300,35,35)
	hf.scale = 0.4
	//hf.shapeColor = "green"
	hf.velocityY = 5
	hf.addImage(hfImg)

	play = createSprite(windowWidth-780,windowHeight-600,10,10)
	play.scale = 0.4
	play.addImage(playImg)

	

	up = createSprite(windowWidth-750,windowHeight-0,2000,10)
	up.visible = false
	

	down = createSprite(windowWidth-750,windowHeight-850,2000,10)
	down.visible = false

	
}

function draw(){
	
	background(255)

	textSize(20)
	text(score,200,150) 
	
	

	if(gameState === PLAY){
		play.visible = false
	if(player.isTouching(hf)){
		score = +10
	}

	
	if(frameCount%90 - 35 === 0){
		jf = createSprite(windowWidth-350,windowHeight-400,35,35)
		jf.scale = 0.4
		//jf.shapeColor = "brown"
		jf.velocityY = 5
		jf.addImage(jfImg)
		jfGroup.add(jf)
		
	}
	

	if(frameCount%85 - 50 === 0){
		hf = createSprite(windowWidth-500,windowHeight-250,35,35)
		hf.scale = 0.5
		//hf.shapeColor = "green"
		hf.velocityY = 5
		hf.addImage(hfImg)
	}

	

	

	if(player.x > 1000 ){
		player.x = 150
	}

	

	if(keyDown("RIGHT_ARROW")){
		player.velocityX = +5
		
	}

	if(keyDown("LEFT_ARROW")){
		player.velocityX = -5
		
	}

	if(keyDown("DOWN_ARROW")){
		player.velocityX = 0
		
	}

	if(player.isTouching(jfGroup)){
		player.velocityX = 0
		jfGroup.setVelocityYEach(0)
		hfGroup.setVelocityYEach(0)
		gameState = END
	}
 
	if(player.isTouching(up)){
		player.velocityX = 0
		jfGroup.setVelocityYEach(0)
		hfGroup.setVelocityYEach(0)
		gameState = END
	}
 
	if(player.isTouching(down)){
		player.velocityX = 0
		jfGroup.setVelocityYEach(0)
		hfGroup.setVelocityYEach(0)
		gameState = END
 }
}
	else if(gameState === END){
		//background(0)
		play.visible = true
		jfGroup.setVelocityYEach(0)
		hfGroup.setVelocityYEach(0)
		textSize(75)
		fill(255)
		text("GAME OVER",500,250)
	}
	if(mousePressedOver(play)){
		
		reset();
	}
	

	

	drawSprites();
	
	
   
	}

	function reset(){
		gameState = PLAY
		
	}
