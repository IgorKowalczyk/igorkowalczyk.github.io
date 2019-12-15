/* (c) IGOR KOWALCZYK. All rights reserved. */

var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var math = {
lerp: function lerp(a, b, n) {
return (1 - n) * a + n * b;
},
norm: function norm(value, min, max) {
return (value - min) / (max - min);
} };
var config = {
height: window.innerHeight,
width: window.innerWidth };
var Smooth = function () {
function Smooth() {_classCallCheck(this, Smooth);
this.bindMethods();
this.data = {
ease: 0.1,
current: 0,
last: 0 };
this.dom = {
el: document.querySelector('[data-scroll]'),
content: document.querySelector('[data-scroll-content]') };
this.rAF = null;
this.init();
}_createClass(Smooth, [{ key: 'bindMethods', value: function bindMethods()
{var _this = this;
['scroll', 'run', 'resize'].
forEach(function (fn) {return _this[fn] = _this[fn].bind(_this);});
} }, { key: 'setStyles', value: function setStyles()
{
this.dom.el.style.position = 'fixed';
this.dom.el.style.top = 0;
this.dom.el.style.left = 0;
this.dom.el.style.height = '100%';
this.dom.el.style.width = '100%';
this.dom.el.style.overflow = 'hidden';
} }, { key: 'setHeight', value: function setHeight()
{
document.body.style.height = this.dom.content.offsetHeight + 'px';
} }, { key: 'resize', value: function resize()
{
this.setHeight();
this.scroll();
} }, { key: 'preload', value: function preload()
{var _this2 = this;
this.dom.content, function (instance) {
_this2.setHeight();
};
} }, { key: 'scroll', value: function scroll()
{
this.data.current = window.scrollY;
} }, { key: 'run', value: function run()
{
this.data.last = math.lerp(this.data.last, this.data.current, this.data.ease);
this.data.last = Math.floor(this.data.last * 100) / 100;
var diff = this.data.current - this.data.last;
var acc = diff / config.width;
var velo = +acc;
var skew = velo * 1;
this.dom.content.style.transform = 'translate3d(0, -' + this.data.last.toFixed(2) + 'px, 0) skewY(' + skew + 'deg)';
this.requestAnimationFrame();
} }, { key: 'on', value: function on()
{var requestAnimationFrame = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
this.setStyles();
this.setHeight();
this.addEvents();
requestAnimationFrame && this.requestAnimationFrame();
} }, { key: 'off', value: function off()
{var cancelAnimationFrame = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
cancelAnimationFrame && this.cancelAnimationFrame();
this.removeEvents();
} }, { key: 'requestAnimationFrame', value: function (_requestAnimationFrame) {function requestAnimationFrame() {return _requestAnimationFrame.apply(this, arguments);}requestAnimationFrame.toString = function () {return _requestAnimationFrame.toString();};return requestAnimationFrame;}(function ()
{
this.rAF = requestAnimationFrame(this.run);
}) }, { key: 'cancelAnimationFrame', value: function (_cancelAnimationFrame) {function cancelAnimationFrame() {return _cancelAnimationFrame.apply(this, arguments);}cancelAnimationFrame.toString = function () {return _cancelAnimationFrame.toString();};return cancelAnimationFrame;}(function ()
{
cancelAnimationFrame(this.rAF);
}) }, { key: 'destroy', value: function destroy()
{
document.body.style.height = '';
this.data = null;
this.removeEvents();
this.cancelAnimationFrame();
} }, { key: 'resize', value: function resize()
{
this.setHeight();
} }, { key: 'addEvents', value: function addEvents()
{
window.addEventListener('resize', this.resize, { passive: true });
window.addEventListener('scroll', this.scroll, { passive: true });
} }, { key: 'removeEvents', value: function removeEvents()
{
window.removeEventListener('resize', this.resize, { passive: true });
window.removeEventListener('scroll', this.scroll, { passive: true });
} }, { key: 'init', value: function init()
{
this.preload();
this.on();
} }]);return Smooth;}();
var smooth = new Smooth();

function link1() {
window.open("https://igorkowalczyk.github.io/fest");
}
function link2() {
window.open("https://igorkowalczyk.github.io/color-picker");
}
function link3() {
window.open("https://github.com/igorkowalczyk/igorkowalczyk.github.io");
}