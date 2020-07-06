'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//inside brower and metamask is running
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	//we are on server or not runnning metamask
	var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/4e8110a142bb4ff189cfb3741fb8985a');
	web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBSSxZQUFKO0FBQ0EsSUFBRyxPQUFPLEFBQVAsV0FBZ0IsQUFBaEIsZUFBOEIsT0FBTyxPQUFPLEFBQWQsU0FBcUIsQUFBdEQsYUFBa0UsQUFDL0Q7QUFDRjtRQUFLLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFMLEFBRUE7QUFKRCxPQUlLLEFBQ0o7QUFDRDtLQUFNLFdBQVUsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNmLEFBRGUsQUFBaEIsQUFHQTtRQUFLLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQUwsQUFDQztBQUNEO2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJGOi9QUk9KRUNUUy9ibG9ja2NoYWluIGV0aGVyZXVtL0V0aGVyZXVtIGFuZCBTb2xpZGl0eSBUaGUgQ29tcGxldGUgRGV2ZWxvcGVyJ3MgR3VpZGUvY3Jvd2RmdW5kIn0=