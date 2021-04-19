Function.prototype.inherits = function(SuperClass) {
    let Surrogate = function () {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

//Ship.inherits(MovingObject)
//