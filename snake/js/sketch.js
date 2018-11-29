var snake;
var food;
var score;
var record;

function setup() {
  createCanvas(800, 800);
	snake = new snake();
	food = new food(random(width-50), random(height-50));
	score = new score();
	record = new record();
}

function draw() {
	background(000);
	score.start();
	record.start();
	food.show();
	snake.show();
	snake.move();
	snake.eat(food, score);
	snake.end(score, record);
}