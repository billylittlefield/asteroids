(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(args) {
    args['color'] = Asteroid.COLOR;
    args['radius'] = Asteroid.RADIUS;
    args['vel'] = Asteroids.Util.randomVec(Asteroid.SPEED);
    Asteroids.MovingObject.call(this, args);
  };

  Asteroid.SPEED = 2;
  Asteroid.COLOR = 'blue';
  Asteroid.RADIUS = 15;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject){
    this.game.remove(this);
    if (otherObject instanceof Asteroids.Ship) {
      this.game.ship.reset();
    } else if (otherObject instanceof Asteroids.Bullet) {
      this.game.remove(otherObject);
    }
  };

})();
