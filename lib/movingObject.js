(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(args){
    this.pos = args['pos'];
    this.vel = args['vel'];
    this.radius = args['radius'];
    this.color = args['color'];
    this.game = args['game'];
  };

  MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.outOfBounds = function() {
    if ((this.pos[0] < 0) || (this.pos[0] > Asteroids.Game.DIM_X) ||
        (this.pos[1] < 0) || (this.pos[1] > Asteroids.Game.DIM_Y)) {
      return true;
    }
    return false;
  };

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (this.outOfBounds() && (this instanceof Asteroids.Bullet)) {
      this.game.remove(this);
    } else
    if (this.outOfBounds() == true) {
      this.pos = this.game.wrap(this.pos);
    }
  };

  MovingObject.prototype.isCollidedWith = function(otherObject){
    var diffX = Math.pow((this.pos[0] - otherObject.pos[0]),2);
    var diffY = Math.pow((this.pos[1] - otherObject.pos[1]),2);
    var diff = Math.sqrt(diffX + diffY);

    return (diff < (this.radius + otherObject.radius));
  };
})();
