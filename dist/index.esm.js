import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
var average = function average(numbers) {
  return numbers.reduce(function (a, b) {
    return a + b;
  }, 0) / numbers.length;
};
var fixednum = function fixednum(num) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return +num.toFixed(digits);
};
var minmax = function minmax(num, min, max) {
  return Math.min(Math.max(num, min), max);
};
var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};
var beep = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var type,
      frequency,
      duration,
      volume,
      audioContext,
      oscillator,
      gainNode,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          type = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'sine';
          frequency = _args.length > 1 && _args[1] !== undefined ? _args[1] : 500;
          duration = _args.length > 2 && _args[2] !== undefined ? _args[2] : 300;
          volume = _args.length > 3 && _args[3] !== undefined ? _args[3] : 1;
          audioContext = new window.AudioContext();
          oscillator = audioContext.createOscillator();
          gainNode = audioContext.createGain();
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          oscillator.frequency.value = frequency;
          oscillator.type = type;
          gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + duration / 1000);
          _context.next = 17;
          return sleep(duration);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function beep() {
    return _ref.apply(this, arguments);
  };
}();
function beepChain() {
  var actions = [];
  return {
    beep: function beep() {
      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }
      actions.push({
        type: 'beep',
        params: params
      });
      return this;
    },
    wait: function wait() {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
      actions.push({
        type: 'wait',
        duration: duration
      });
    },
    play: function play() {
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _i, _actions, action;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _i = 0, _actions = actions;
            case 1:
              if (!(_i < _actions.length)) {
                _context2.next = 13;
                break;
              }
              action = _actions[_i];
              if (!(action.type === 'wait')) {
                _context2.next = 8;
                break;
              }
              _context2.next = 6;
              return sleep(action.duration);
            case 6:
              _context2.next = 10;
              break;
            case 8:
              _context2.next = 10;
              return beep.apply(void 0, _toConsumableArray(action.params));
            case 10:
              _i++;
              _context2.next = 1;
              break;
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  };
}
export { average, beep, beepChain, fixednum, minmax, sleep };
