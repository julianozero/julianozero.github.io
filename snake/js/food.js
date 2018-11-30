function food(x, y) {
	this.x = x;
	this.y = y;
	this.r = 22;
	
	this.show = function() {
		fill(255, 204, 0);
		rect(this.x, this.y, this.r * 2, this.r * 2);
	}
	
	this.eaten = function() {
		this.x = random(width-50);
		this.y = random(height-50);
	}
}