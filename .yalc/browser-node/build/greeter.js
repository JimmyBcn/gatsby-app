"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helloNode = _interopRequireDefault(require("./hello-node"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Greeter =
/*#__PURE__*/
function () {
  function Greeter() {
    _classCallCheck(this, Greeter);
  }

  _createClass(Greeter, [{
    key: "greet",
    value: function greet() {
      (0, _helloNode.default)();
    }
  }]);

  return Greeter;
}();

exports.default = Greeter;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmVldGVyLmpzIl0sIm5hbWVzIjpbIkdyZWV0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztJQUVxQkEsTzs7O0FBQ25CLHFCQUFjO0FBQUE7QUFDYjs7Ozs0QkFFTztBQUNOO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2F5SGVsbG8gZnJvbSAnLi9oZWxsby1ub2RlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyZWV0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgZ3JlZXQoKSB7XHJcbiAgICBzYXlIZWxsbygpO1xyXG4gIH1cclxufSJdfQ==