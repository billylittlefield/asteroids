(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(args) {
    args['color'] = Ship.COLOR;
    args['radius'] = Ship.RADIUS;
    args['vel'] = [0,0];
    Asteroids.MovingObject.call(this, args);
  };

  Ship.COLOR = 'green';
  Ship.RADIUS = 5;

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.reset = function() {
    this.pos = this.game.randomPosition();
  };

})();
