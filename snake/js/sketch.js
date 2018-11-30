var snake;
var food;
var score;
var record;

function setup() {
  createCanvas(800, 600);
	food = new food(random(width-50), random(height-50));
	score = new score();
	record = new record();
	snake = new snake(food, score, record);
}

function draw() {
	background(000);
	score.start();
	record.start();
	food.show();
	snake.show();
	snake.move();
	snake.eat();
	snake.end();
}