
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
  GameView.TURN = 30 * Math.PI / 180;

  var upAndRight = function() { this.game.ship.power(-GameView.PULSE);
                                this.game.ship.rotate(GameView.TURN); }.bind(this);

  GameView.prototype.bindKeyHandlers = function() {
    var that = this;
    if(key.isPressed("M")) alert('M key is pressed, can ya believe it!?');
    window.key('up', function() { that.game.ship.power(GameView.PULSE); });
    window.key('down', function() { that.game.ship.power(-GameView.PULSE); });
    window.key('left', function() { that.game.ship.rotate(-GameView.TURN); });
    window.key('right', function() { that.game.ship.rotate(GameView.TURN); });
    window.key('space', function() { that.game.ship.fireBullet(); });
    // window.key('up+left,left+up', function() { that.game.ship.rotate(-GameView.TURN);
    //                                     that.game.ship.power(GameView.PULSE); });
    // window.key('up+right,right+up', function() { that.game.ship.rotate(GameView.TURN);
    //                                     that.game.ship.power(GameView.PULSE); });
    // window.key('down+left,left+down', function() { that.game.ship.rotate(-GameView.TURN);
    //                                    that.game.ship.power(-GameView.PULSE); });
    // window.key('down+right,right+down', function() { that.game.ship.rotate(GameView.TURN);
    //                                    that.game.ship.power(-GameView.PULSE); });
    // window.key('up+left+space', function() { that.game.ship.rotate(-GameView.TURN);
    //                                          that.game.ship.power(GameView.PULSE);
    //                                          that.game.ship.fireBullet(); });
    // window.key('up+right+space', function() { that.game.ship.rotate(GameView.TURN);
    //                                           that.game.ship.power(GameView.PULSE);
    //                                           that.game.ship.fireBullet(); });
    // window.key('down+left+space', function() { that.game.ship.rotate(-GameView.TURN);
    //                                            that.game.ship.power(-GameView.PULSE);
    //                                            that.game.ship.fireBullet(); });
    // window.key('down+right+space', function() { that.game.ship.rotate(GameView.TURN);
    //                                             that.game.ship.power(-GameView.PULSE);
    //                                             that.game.ship.fireBullet(); });
  };


})();
