(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.ship = new Asteroids.Ship({ pos: this.randomPosition(),
                                     game: this});
    this.addAsteroids();
  };

  Game.DIM_X = 800;
  Game.DIM_Y = 400;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroids.Asteroid({ pos: this.randomPosition(),
                                                   game: this }));
    }
  };

  Game.prototype.randomPosition = function() {
    var randomX = Math.floor(Math.random() * Game.DIM_X);
    var randomY = Math.floor(Math.random() * Game.DIM_Y);
    return [randomX, randomY];
  };

  Game.prototype.allObjects = function() {
    var temp = this.asteroids.slice();
    temp.push(this.ship);
    return temp;
  };

  Game.prototype.nonAsteroids = function() {
    var temp = [this.ship];
    return temp;
  }

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(function (object) {
      object.draw(ctx);
    });
  };

  Game.prototype.wrap = function(pos) {
    var x = pos[0];
    var y = pos[1];
    if (x < 0) {
      var newX = Game.DIM_X;
      var newY = y;
    } else if (x > Game.DIM_X) {
      var newX = 0;
      var newY = y;
    } else if (y < 0) {
      var newX = x;
      var newY = Game.DIM_Y;
    } else if (y > Game.DIM_Y) {
      var newX = x;
      var newY = 0;
    } else {
      var newX = x;
      var newY = y;
    }
    return [newX, newY];
  };

  Game.prototype.moveObjects = function() {
    this.allObjects().forEach(function (object) {
      object.move();
    });
  };

  Game.prototype.checkCollisions = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      for (var j = 0; j < this.nonAsteroids().length; j++) {
        if (this.asteroids[i].isCollidedWith(this.nonAsteroids()[j])) {
          this.asteroids[i].collideWith(this.nonAsteroids()[j]);
        }
      }
    }
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function(asteroid) {
    for(var i = 0; i<this.asteroids.length; i++){
      if (this.asteroids[i] === asteroid){
        this.asteroids.splice(i,1);
      }
    }
  };

})();
