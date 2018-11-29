function score() {
    this.value = 0;

    this.start = function() {
        document.getElementById("score").innerHTML = this.value;
    }
}