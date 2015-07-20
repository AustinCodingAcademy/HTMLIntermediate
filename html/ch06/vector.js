function Vector(x, y) {
    'use strict';
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(other) {
    'use strict';
    return new Vector(this.x + other.x, this.y + other.y);
};

Vector.prototype.minus = function(other) {
    'use strict';
    return new Vector(this.x - other.x, this.y - other.y);
};

Object.defineProperty(Vector.prototype, 'length', {
    get: function() {
        'use strict';
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});
