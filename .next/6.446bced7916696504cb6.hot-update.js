webpackHotUpdate(6,{

/***/ 1425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(506);

var _campaign = __webpack_require__(1423);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(1138);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(838);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "F:\\PROJECTS\\blockchain ethereum\\Ethereum and Solidity The Complete Developer's Guide\\crowdfund\\components\\ContributeForm.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\PROJECTS\\blockchain ethereum\\Ethereum and Solidity The Complete Developer's Guide\\crowdfund\\components\\ContributeForm.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi40NDZiY2VkNzkxNjY5NjUwNGNiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcz8xMjhmOWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLElucHV0LE1lc3NhZ2UsQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnLi4vcm91dGVzJztcclxuY2xhc3MgQ29udHJpYnV0ZUZvcm0gZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0c3RhdGU9e1xyXG5cdFx0dmFsdWU6JycsXHJcblx0XHRlcnJvck1lc3NhZ2U6JycsXHJcblx0XHRsb2FkaW5mOmZhbHNlXHJcblx0fTtcclxuXHRvblN1Ym1pdD1hc3luYyAoZXZlbnQpPT57XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgY2FtcGFpZ249Q2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6dHJ1ZSxlcnJvck1lc3NhZ2U6Jyd9KTtcclxuXHRcdHRyeXtcclxuXHRcdFx0Y29uc3QgYWNjb3VudHM9YXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuXHRcdFx0YXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XHJcblx0XHRcdFx0ZnJvbTphY2NvdW50c1swXSxcclxuXHRcdFx0XHR2YWx1ZTp3ZWIzLnV0aWxzLnRvV2VpKHRoaXMuc3RhdGUudmFsdWUsJ2V0aGVyJylcclxuXHRcdFx0fSk7XHJcblx0XHRcdFJvdXRlci5yZXBsYWNlUm91dGUoYC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XHJcblx0XHR9Y2F0Y2goZXJyKXtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOmVyci5tZXNzYWdlfSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlLHZhbHVlOicnfSk7XHJcblx0fTtcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cclxuXHRcdFx0XHQ8Rm9ybS5GaWVsZD5cclxuXHRcdFx0XHRcdDxsYWJlbD5BbW91bnQgdG8gQ29udHJpYnV0ZTwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudD0+dGhpcy5zZXRTdGF0ZSh7dmFsdWU6ZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD0nZXRoZXInXHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwib29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0vPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+Q29udHJpYnV0ZSFcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvRm9ybS5GaWVsZD5cclxuXHRcdFx0PC9Gb3JtPlxyXG5cdFx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGVGb3JtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7O0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFFQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFMQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFWQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBWUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7Ozs7QUFJQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9