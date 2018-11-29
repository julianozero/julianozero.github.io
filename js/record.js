function record() {
    this.value = 0;

    this.start = function() {
        document.getElementById("record").innerHTML = this.value;
    }
}