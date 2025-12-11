'use strict';

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck")["default"];
var _createClass = require("@babel/runtime/helpers/createClass")["default"];
var _defineProperty = require("@babel/runtime/helpers/defineProperty")["default"];
var ampmBn = function ampmBn(dt) {
  var hr = +dt.format('H');
  if (hr < 4) return 'রাত';
  if (hr < 6) return 'ভোর';
  if (hr < 12) return 'সকাল';
  if (hr < 15) return 'দুপুর';
  if (hr < 18) return 'বিকাল';
  if (hr < 20) return 'সন্ধ্যা';
  return 'রাত';
};
var map$2 = {
  jan: 'জানুয়ারি',
  january: 'জানুয়ারি',
  feb: 'ফেব্রুয়ারি',
  february: 'ফেব্রুয়ারি',
  mar: 'মার্চ',
  march: 'মার্চ',
  apr: 'এপ্রিল',
  april: 'এপ্রিল',
  may: 'মে',
  jun: 'জুন',
  june: 'জুন',
  jul: 'জুলাই',
  july: 'জুলাই',
  aug: 'আগস্ট',
  august: 'আগস্ট',
  sep: 'সেপ্টেম্বর',
  september: 'সেপ্টেম্বর',
  oct: 'অক্টোবর',
  october: 'অক্টোবর',
  nov: 'নভেম্বর',
  november: 'নভেম্বর',
  dec: 'ডিসেম্বর',
  december: 'ডিসেম্বর'
};
var monthBn = function monthBn(month) {
  return map$2[month.toLowerCase()];
};
var map$1 = {
  '0': '০',
  '1': '১',
  '2': '২',
  '3': '৩',
  '4': '৪',
  '5': '৫',
  '6': '৬',
  '7': '৭',
  '8': '৮',
  '9': '৯'
};
var numBn = function numBn(str) {
  return str.toString().split('').map(function (i) {
    return map$1[i] === undefined ? i : map$1[i];
  }).join('');
};
var map = {
  '০': '0',
  '১': '1',
  '২': '2',
  '৩': '3',
  '৪': '4',
  '৫': '5',
  '৬': '6',
  '৭': '7',
  '৮': '8',
  '৯': '9'
};
var numBn2En = function numBn2En(str) {
  return str.split('').map(function (i) {
    return map[i] === undefined ? i : map[i];
  }).join('');
};
var numLocale = function numLocale(num) {
  return num.toLocaleString('en-In', {
    maximumFractionDigits: 2
  });
};
var numBnLocale = function numBnLocale(num) {
  return numBn(numLocale(num));
};
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
var beepAudio = typeof window !== 'undefined' ? new AudioContext() : null;
var audioTime = 0;
var _beep = function beep() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sine';
  var frequency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
  var volume = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  if (!beepAudio) return;
  if (beepAudio.state === 'suspended') beepAudio.resume();
  var now = beepAudio.currentTime;
  if (audioTime < now) audioTime = now;
  var start = audioTime;
  var end = start + duration / 1000;
  var osc = beepAudio.createOscillator();
  var gain = beepAudio.createGain();
  osc.connect(gain);
  gain.connect(beepAudio.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(volume, start);
  gain.gain.exponentialRampToValueAtTime(0.01, end);
  osc.start(start);
  osc.stop(end);
  audioTime = end;
};
var beepChain = function beepChain() {
  return new BeepChain();
};
var BeepChain = /*#__PURE__*/function () {
  function BeepChain() {
    _classCallCheck(this, BeepChain);
    _defineProperty(this, "audioTime", 0);
  }
  return _createClass(BeepChain, [{
    key: "beep",
    value: function beep() {
      _beep.apply(void 0, arguments);
      return this;
    }
  }, {
    key: "wait",
    value: function wait() {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
      var d = duration / 1000;
      if (beepAudio) {
        if (this.audioTime < beepAudio.currentTime) this.audioTime = beepAudio.currentTime;
        this.audioTime += d;
      }
      return this;
    }
  }]);
}();
var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};
exports.ampmBn = ampmBn;
exports.average = average;
exports.beep = _beep;
exports.beepChain = beepChain;
exports.fixednum = fixednum;
exports.minmax = minmax;
exports.monthBn = monthBn;
exports.numBn = numBn;
exports.numBn2En = numBn2En;
exports.numBnLocale = numBnLocale;
exports.numLocale = numLocale;
exports.sleep = sleep;
