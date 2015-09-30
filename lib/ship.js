(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(args) {
    args['color'] = Ship.COLOR;
    args['radius'] = Ship.RADIUS;
    args['vel'] = [0,0];
    Asteroids.MovingObject.call(this, args);
    this.direction = 0;
  };

  Ship.COLOR = 'yellow';
  Ship.RADIUS = 10;

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.speed_magnitude = function(vel) {
    return Math.sqrt(Math.pow(this.vel[0], 2) + Math.pow(this.vel[1], 2));
  };

  Ship.prototype.power = function(pulse) {
    if (this.speed_magnitude() < 20) {
      var pulse_vector = this.direction_vector();
      this.vel[0] += (pulse_vector[0] * pulse);
      this.vel[1] += (pulse_vector[1] * pulse);
    }
  };

  Ship.prototype.direction_vector = function() {
    return [Math.cos(this.direction), Math.sin(this.direction)];
  };

  Ship.prototype.rotate = function(turn) {
    this.direction += turn;
    if (this.direction > (2 * Math.PI)) {
      this.direction -= 2 * Math.PI;
    } else if (this.direction < 0) {
      this.direction += 2 * Math.PI;
    }
  };

  Ship.prototype.reset = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
  };

  Ship.prototype.fireBullet = function() {
    var newBullet = new Asteroids.Bullet({ pos: this.pos.slice(), game: this.game,
        vel: [this.direction_vector()[0] * 5, this.direction_vector()[1] * 5] });
    this.game.add(newBullet);
  };

  Ship.prototype.draw = function(ctx) {
    Asteroids.MovingObject.prototype.draw.call(this, ctx)
    ctx.fillStyle = 'black';
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      this.direction + 0.3,
      this.direction - 0.3,
      true
    );
    ctx.lineTo(this.pos[0], this.pos[1]);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius + 1,
      0,
      2 * Math.PI,
      true
    );
    ctx.stroke();
  };
})();
