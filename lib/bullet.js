(function () {
  if (typeof Asteroids === 'undefined') {
    Asteroids = {}
  }

  var Bullet = Asteroids.Bullet = function(args) {
    args['color'] = Bullet.COLOR;
    args['radius'] = Bullet.RADIUS;
    Asteroids.MovingObject.call(this, args);
  };

  Bullet.RADIUS = 3;
  Bullet.COLOR = 'red';

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

})();
