
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

  GameView.IMP_FACTOR = 2;

  GameView.prototype.bindKeyHandlers = function() {
    var that = this;
    window.key('up', function(){ that.game.ship.power([0, -1 * GameView.IMP_FACTOR]); });
    window.key('down', function(){ that.game.ship.power([0, GameView.IMP_FACTOR]); });
    window.key('left', function(){ that.game.ship.power([-1 * GameView.IMP_FACTOR, 0]); });
    window.key('right', function(){ that.game.ship.power([GameView.IMP_FACTOR, 0]); });
  };


})();
