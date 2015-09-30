(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }


  var Asteroid = Asteroids.Asteroid = function(args) {
    args['color'] = Asteroid.COLOR;
    args['radius'] = Asteroid.RADIUS;
    args['vel'] = Asteroids.Util.randomVec(1);
    Asteroids.MovingObject.call(this, args);
  };

  Asteroid.prototype.collideWith = function(otherObject){
    if (otherObject instanceof "Ship"){
      this.game.ship.pos = [this.game.DIM_X / 2 , this.game.DIM_Y / 2];
      this.game.ship.vel = [0,0];
    }
  };

  Asteroid.COLOR = 'blue';
  Asteroid.RADIUS = 10;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

})();
