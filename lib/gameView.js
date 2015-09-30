
(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(game, ctx){
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function(){
    this.bindKeyHandlers();
    setInterval(function (){
      this.game.step();
      this.game.draw(this.ctx);
    }.bind(this), 20);
  };

  GameView.PULSE = 2;
  GameView.TURN = 45 * Math.PI / 180;

  var upAndRight = function() { this.game.ship.power(-GameView.PULSE);
                                this.game.ship.rotate(GameView.TURN); }.bind(this);

  GameView.prototype.bindKeyHandlers = function() {
    var that = this;
    if(key.isPressed("M")) alert('M key is pressed, can ya believe it!?');
    window.key('up, up+right, up+left', function() { that.game.ship.power(GameView.PULSE); });
    window.key('down, down+right, down+left', function() { that.game.ship.power(-GameView.PULSE); });
    window.key('left, down+left, up+left', function() { that.game.ship.rotate(-GameView.TURN); });
    window.key('right, down+right, up+right', function() { that.game.ship.rotate(GameView.TURN); });
    window.key('space, up+space, down+space, left+space, right+space', function() { that.game.ship.fireBullet(); });
  };


})();
