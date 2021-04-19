Function.prototype.inherits = function(SuperClass) {
    let Surrogate = function () {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;

}

//Ship.inherits(MovingObject)


Function.prototype.inherits2 = function (SuperClass) {
    this.prototype = Object.create(SuperClass);
    this.prototype.constructor = this;


}

function movingObject () {};
movingObject.prototype.move = function() {
    console.log("Moving");
}

function Ship () {};

function Asteroid () {};

Ship.inherits2(movingObject);
Asteroid.inherits2(movingObject);

let s = new Ship();
let a  = new Asteroid();

s.move();
a.move();