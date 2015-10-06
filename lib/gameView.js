
(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(game, ctx){
    this.game = game;
    this.ctx = ctx;
    this.map = [];
    $(document.body).on('keydown', this.handleKeydown.bind(this));
    $(document.body).on('keyup', this.handleKeyup.bind(this));
  };

  GameView.prototype.handleKeydown = function (evt) {
      this.map.push(evt.keyCode);
  };

  GameView.prototype.handleKeyup = function (evt) {
    console.log(this.map);
    for (var i = (this.map.length - 1); i >= 0; i--) {
      if (this.map[i] === evt.keyCode) {
        this.map.splice(i,1);
      }
    }
    console.log(this.map);
  };

  GameView.prototype.start = function(){
    setInterval(function (){
      this.game.step();
      this.game.draw(this.ctx);
      this.handleRotation();
    }.bind(this), 20);
    setInterval(function(){
      this.handleEngines();
    }.bind(this), 200);
    setInterval(function(){
      this.handleFiring();
    }.bind(this), 100);
  };

  GameView.PULSE = 2;
  GameView.TURN = 10 * Math.PI / 180;

  GameView.prototype.handleRotation = function() {
    if (this.map.indexOf(37) !== -1) { // Left arrow key
      this.game.ship.rotate(-GameView.TURN);
    }
    if (this.map.indexOf(39) !== -1) { // Right arrow key
      this.game.ship.rotate(GameView.TURN);
    }
  };

  GameView.prototype.handleEngines = function () {
    if (this.map.indexOf(40) !== -1) { // Down arrow key
      this.game.ship.power(-GameView.PULSE);
    }
    if (this.map.indexOf(38) !== -1) { // Up arrow key
      this.game.ship.power(GameView.PULSE);
    }
  };

  GameView.prototype.handleFiring = function () {
    if (this.map.indexOf(32) !== -1) { // Spacebar key
      this.game.ship.fireBullet();
    }
  };
})();
