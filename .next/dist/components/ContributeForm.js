'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\PROJECTS\\blockchain ethereum\\Ethereum and Solidity The Complete Developer\'s Guide\\crowdfund\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
	(0, _inherits3.default)(ContributeForm, _Component);

	function ContributeForm() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ContributeForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: '',
			errorMessage: '',
			loadinf: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();
								campaign = (0, _campaign2.default)(_this.props.address);

								_this.setState({ loading: true, errorMessage: '' });
								_context.prev = 3;
								_context.next = 6;
								return _web2.default.eth.getAccounts();

							case 6:
								accounts = _context.sent;
								_context.next = 9;
								return campaign.methods.contribute().send({
									from: accounts[0],
									value: _web2.default.utils.toWei(_this.state.value, 'ether')
								});

							case 9:
								_routes.Router.replaceRoute('/campaigns/' + _this.props.address);
								_context.next = 15;
								break;

							case 12:
								_context.prev = 12;
								_context.t0 = _context['catch'](3);

								_this.setState({ errorMessage: _context.t0.message });

							case 15:
								_this.setState({ loading: false, value: '' });

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[3, 12]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ContributeForm, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value });
				},
				label: 'ether',
				labelPosition: 'right',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'oops!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, 'Contribute!')));
		}
	}]);

	return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmYiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwibG9hZGluZyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFLLEFBQU0sQUFBUTs7QUFDNUIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQWE7Ozs7Ozs7SSxBQUNmOzs7Ozs7Ozs7Ozs7Ozs7ME4sQUFDTDtVQUFNLEFBQ0MsQUFDTjtpQkFGSyxBQUVRLEFBQ2I7WUFBUSxBLEFBSEg7QUFBQSxBQUNMLFcsQUFJRDt3RkFBUyxpQkFBQSxBQUFPLE9BQVA7a0JBQUE7a0VBQUE7ZUFBQTt1Q0FBQTtZQUNSO2NBQUEsQUFBTSxBQUNBO0FBRkUsbUJBRU8sd0JBQVMsTUFBQSxBQUFLLE1BRnJCLEFBRU8sQUFBb0IsQUFDbkM7O2NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE1BQUssY0FIcEIsQUFHUixBQUFjLEFBQTJCO3dCQUhqQzt3QkFBQTtlQUtjLGNBQUEsQUFBSyxJQUxuQixBQUtjLEFBQVM7O1lBQXhCO0FBTEMsNEJBQUE7d0JBQUE7d0JBTUQsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCO2VBQzlCLFNBRG1DLEFBQ25DLEFBQVMsQUFDZDtnQkFBTSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BUjVCLEFBTUQsQUFBbUMsQUFFbEMsQUFBa0M7QUFGQSxBQUN4QyxTQURLOztZQUlOO3VCQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQVZoQyxBQVVQLEFBQTZDO3dCQVZ0QztBQUFBOztZQUFBO3dCQUFBO3dDQVlQOztjQUFBLEFBQUssU0FBUyxFQUFDLGNBQWEsWUFackIsQUFZUCxBQUFjLEFBQWtCOztZQUVqQztjQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxPQUFNLE9BZHJCLEFBY1IsQUFBYyxBQUFxQjs7WUFkM0I7WUFBQTt3QkFBQTs7QUFBQTs2QkFBQTtBOzs7Ozs7Ozs7OzJCQWdCRDtnQkFDUDs7MEJBQ0MsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO2VBQW5EO2lCQUFBLEFBQ0M7QUFERDtJQUFBLGtCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSx5Q0FBQSxBQUFDO1dBQ08sS0FBQSxBQUFLLE1BRGIsQUFDbUIsQUFDbEI7Y0FBVSx5QkFBQTtZQUFPLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTSxNQUFBLEFBQU0sT0FBbEMsQUFBTyxBQUFjLEFBQW9CO0FBRnBELEFBR0M7V0FIRCxBQUdPLEFBQ047bUJBSkQsQUFJZTs7ZUFKZjtpQkFGRCxBQUVDLEFBTUE7QUFOQTtBQUNDLHVCQUtELEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtlQUFsRDtpQkFSRCxBQVFDLEFBQ0E7QUFEQTt1QkFDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7ZUFBcEM7aUJBQUE7QUFBQTtNQVhILEFBQ0MsQUFDQyxBQVNDLEFBS0g7Ozs7O0FBdkMyQixBLEFBMkM3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJGOi9QUk9KRUNUUy9ibG9ja2NoYWluIGV0aGVyZXVtL0V0aGVyZXVtIGFuZCBTb2xpZGl0eSBUaGUgQ29tcGxldGUgRGV2ZWxvcGVyJ3MgR3VpZGUvY3Jvd2RmdW5kIn0=