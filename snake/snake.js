function snake() {
	this.x = 20;
	this.y = 20;
	this.r = 14;
	this.speed = 6;
	this.xspeed = this.speed;
	this.yspeed = 0;
	this.size = 0;
	this.tail = [];
	this.right = true;
	this.left = false;
	this.up = false;
	this.down = false;

	this.start = function() {
		this.x = 20;
		this.y = 20;
		this.r = 14;
		this.speed = 6;
		this.xspeed = this.speed;
		this.yspeed = 0;
		this.size = 0;
		this.tail = [];
		this.right = true;
		this.left = false;
		this.up = false;
		this.down = false;
	}

	this.show = function() {
		fill(393);
		for (var i = 0; i < this.tail.length; i++) {
			ellipse(this.tail[i].x, this.tail[i].y, this.r * 2, this.r * 2);
		}
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
		this.direction();
	}

	this.move = function() {
		for (var i = 0; i < this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i + 1];
		}
		this.tail[this.size - 1] = createVector(this.x, this.y);
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
	}

	this.direction = function() {
		if (keyIsDown(UP_ARROW) && !this.down) {
			this.up = true;
			this.down = this.right = this.left = false;
			this.changeSpeed(0, -this.speed);
		} else if (keyIsDown(DOWN_ARROW) && !this.up) {
			this.down = true;
			this.up = this.right = this.left = false;
			this.changeSpeed(0, this.speed);
		} else if (keyIsDown(RIGHT_ARROW) && !this.left) {
			this.right = true;
			this.down = this.up = this.left = false;
			this.changeSpeed(this.speed, 0);
		} else if (keyIsDown(LEFT_ARROW) && !this.right) {
			this.left = true;
			this.down = this.right = this.up = false;
			this.changeSpeed(-this.speed, 0);
		}
	}

	this.changeSpeed = function(xspeed, yspeed) {
		this.xspeed = xspeed;
		this.yspeed = yspeed;
	}

	this.eat = function(food) {
		var d = dist(this.x, this.y, food.x, food.y);
		if (d <= this.r) {
			this.grow();
			food.eaten();
		}
	}

	this.end = function() {
		if (this.x >= width || this.x <= 0 ||
			this.y >= height || this.y <= 0) {
			this.start();
		}
		for (var i = 0; i <= this.tail.length - 1; i++) {
			var d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
			if (d <= 1) {
				this.start();
			}
		}
	}

	this.grow = function() {
		this.size++;
	}
}