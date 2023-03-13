"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(id, fullName, type) {
        this._id = id;
        this._fullName = fullName;
        this._type = type;
    }
    Object.defineProperty(Person.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getInfo = function () {
        return "S\u1ED1 b\u00E1o danh : ".concat(this.id, " | T\u00EAn \u0111\u1EA7y \u0111\u1EE7 l\u00E0 : ").concat(this.fullName, " | Kh\u1ED1i thi : ").concat(this.type);
    };
    return Person;
}());
exports.Person = Person;
