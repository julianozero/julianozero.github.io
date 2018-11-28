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

	this.start = function(score, record) {
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
		this.updateRecord(score, record);
		this.reset(score);
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
		if (keyIsDown(UP_ARROW)) {
			this.moveUp();
		} else if (keyIsDown(DOWN_ARROW)) {
			this.moveDown();
		} else if (keyIsDown(RIGHT_ARROW)) {
			this.moveRight();
		} else if (keyIsDown(LEFT_ARROW)) {
			this.moveLeft();
		}
	}

	this.moveUp = function() {
		if (!this.down) {
			this.up = true;
			this.down = this.right = this.left = false;
			this.changeSpeed(0, -this.speed);
		}
	}

	this.moveDown = function() {
		if (!this.up) {
			this.down = true;
			this.up = this.right = this.left = false;
			this.changeSpeed(0, this.speed);
		}
	}

	this.moveRight = function() {
		if (!this.left) {
			this.right = true;
			this.down = this.up = this.left = false;
			this.changeSpeed(this.speed, 0);
		}
	}

	this.moveLeft = function() {
		if (!this.right) {
			this.left = true;
			this.down = this.right = this.up = false;
			this.changeSpeed(-this.speed, 0);
		}
	}

	this.changeSpeed = function(xspeed, yspeed) {
		this.xspeed = xspeed;
		this.yspeed = yspeed;
	}

	this.eat = function(food, score) {
		var d = dist(this.x, this.y, food.x, food.y);
		if (d <= this.r) {
			this.grow();
			food.eaten();
			this.update(score);
		}
	}

	this.update = function(score) {
		score.value++;
	}

	this.reset = function(score) {
		score.value = 0;
	}

	this.end = function(score, record) {
		if (this.x >= width || this.x <= 0 ||
			this.y >= height || this.y <= 0) {
			this.start(score, record);
		}
		for (var i = 0; i <= this.tail.length - 1; i++) {
			var d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
			if (d <= 1) {
				this.start(score, record);
			}
		}
	}

	this.updateRecord = function(score, record) {
		if (score.value > record.value) {
			record.value = score.value;
		}
	}

	this.grow = function() {
		this.size++;
	}
}