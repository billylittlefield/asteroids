(function () {
  if (Asteroids typeof === 'undefined') {
    Asteroids = {}
  }

  var Bullet = Asteroids.Bullet = function (args) {
    args['color'] = Bullet.COLOR;
    args['radius'] = Bullet.RADIUS;
    Asteroids.MovingObject.call(this, args);
  };

  Bullet.RADIUS = 2;
  Bullet.COLOR = 'red';

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  

})();
