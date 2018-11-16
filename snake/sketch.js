var snake;
var food;

function setup() {
  createCanvas(400, 400);
	snake = new snake();
	food = new food(random(width-50), random(height-50));
}

function draw() {
  background(000);
	food.show();
	snake.show();
	snake.move();
	snake.eat(food);
	snake.end();
}