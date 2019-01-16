function Queue() {
  this.data = [];
}


//Main methods
Queue.prototype.add = function(record) {
    this.data.unshift(record);
}

Queue.prototype.remove = functioon() {
    this.data.pop();
}

//adding 3 more methods
Queue.prototype.first = function() {
    return this.data[0];
}

Queue.prototype.last = function() {
    return this.data[this.data.length - 1];
}

Queue.prototype.size = function() {
    return this.data.length;
}