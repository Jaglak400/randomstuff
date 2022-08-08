String.prototype.toJadenCase = function () {
return this.split(' ').map(sentence => sentence[0].toUpperCase() + sentence.slice(1)).join(' ');
};