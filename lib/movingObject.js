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

  MovingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function(otherObject){
    var diffX = Math.pow((this.pos[0] - otherObject.pos[0]),2);
    var diffY = Math.pow((this.pos[1] - otherObject.pos[1]),2);
    var diff = Math.sqrt(diffX + diffY);

    return (diff < (this.radius + otherObject.radius));
  };

  MovingObject.prototype.collideWith = function(otherObject) {
    this.game.remove(this);
      console.log("test1");
    if (otherObject instanceof Asteroids.Ship) {
      console.log("test2");
      this.game.ship.reset();
    }
  };
}
)();
