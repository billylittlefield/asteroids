(function (){
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = function(){};

  Asteroids.Util.inherits = function(ChildClass, ParentClass) {
    function Surrogate () {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Asteroids.Util.randomVec = function(length) {
    var randX = (Math.random() * length);
    var randY = Math.sqrt(Math.pow(length,2) - Math.pow(randX,2));

    randX = Math.random() <= 0.5 ? randX : (randX * -1);
    randY = Math.random() <= 0.5 ? randY : (randY * -1);

    return [randX,randY];
  };

})();
