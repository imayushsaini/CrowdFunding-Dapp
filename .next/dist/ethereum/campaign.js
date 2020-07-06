'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
	return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQ2FtcGFpZ24iLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFxQixBQUFyQixBQUVBOzs7Ozs7a0JBQWUsbUJBQVUsQUFDeEI7UUFBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDTixLQUFLLEFBQUwsTUFBVyxtQkFBUyxBQUFwQixBQURNLFlBQ3lCLEFBRHpCLEFBQVAsQUFFQTtBQUhEIiwiZmlsZSI6ImNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6IkY6L1BST0pFQ1RTL2Jsb2NrY2hhaW4gZXRoZXJldW0vRXRoZXJldW0gYW5kIFNvbGlkaXR5IFRoZSBDb21wbGV0ZSBEZXZlbG9wZXIncyBHdWlkZS9jcm93ZGZ1bmQifQ==