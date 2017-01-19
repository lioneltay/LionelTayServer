webpackJsonp([1,2],{

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(14);

var _constants = __webpack_require__(9);

var _worksheets = __webpack_require__(169);

var _worksheets2 = _interopRequireDefault(_worksheets);

var _components = __webpack_require__(87);

var _worksheet = __webpack_require__(41);

var _profile = __webpack_require__(88);

var _auth = __webpack_require__(149);

var _admin = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The home page is currently the worksheet page, can easily be changed
var routes = _react2.default.createElement(
	_reactRouter.Router,
	{ history: _reactRouter.browserHistory },
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: _constants.BASE_URL, component: _components.Main },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _worksheet.Home }),
		_react2.default.createElement(_reactRouter.Route, { path: 'admin', component: _admin.Admin }),
		_react2.default.createElement(_reactRouter.Route, { path: 'signup', component: _auth.Signup }),
		_react2.default.createElement(_reactRouter.Route, { path: 'signin', component: _auth.Signin }),
		_react2.default.createElement(_reactRouter.Route, { path: 'signout', component: _auth.Signout }),
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: 'profile/:uid', component: _profile.Profile },
			_react2.default.createElement(_reactRouter.IndexRoute, { component: _profile.LessonHistory }),
			_react2.default.createElement(_reactRouter.Route, { path: 'lessonhistory', component: _profile.LessonHistory, cows: 'moo' })
		),
		_worksheets2.default
	)
);

exports.default = routes;

/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersLessonHistory = exports.users = undefined;

var _users2 = __webpack_require__(26);

var _users3 = _interopRequireDefault(_users2);

var _usersLessonHistory2 = __webpack_require__(89);

var _usersLessonHistory3 = _interopRequireDefault(_usersLessonHistory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.users = _users3.default;
exports.usersLessonHistory = _usersLessonHistory3.default;

/***/ },

/***/ 139:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tex = function (_Component) {
	_inherits(Tex, _Component);

	function Tex() {
		_classCallCheck(this, Tex);

		return _possibleConstructorReturn(this, (Tex.__proto__ || Object.getPrototypeOf(Tex)).apply(this, arguments));
	}

	_createClass(Tex, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		}
	}, {
		key: "getMarkup",
		value: function getMarkup() {
			if (this.props.t) {
				return {
					__html: "$" + this.props.t + "$"
				};
			}

			return {
				__html: "$" + this.props.children + "$"
			};
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement("span", {
				dangerouslySetInnerHTML: this.getMarkup()
			});
		}
	}]);

	return Tex;
}(_react.Component);

exports.default = Tex;

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TexMarkup = function (_Component) {
	_inherits(TexMarkup, _Component);

	function TexMarkup() {
		_classCallCheck(this, TexMarkup);

		return _possibleConstructorReturn(this, (TexMarkup.__proto__ || Object.getPrototypeOf(TexMarkup)).apply(this, arguments));
	}

	_createClass(TexMarkup, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		}
	}, {
		key: "getMarkup",
		value: function getMarkup() {
			return {
				__html: this.props.children
			};
		}
	}, {
		key: "render",
		value: function render() {
			console.log(this.getMarkup().__html);
			return _react2.default.createElement("span", {
				dangerouslySetInnerHTML: this.getMarkup()
			});
		}
	}]);

	return TexMarkup;
}(_react.Component);

exports.default = TexMarkup;

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(87);

var _reactRedux = __webpack_require__(15);

var _users = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainContainer = function (_Component) {
	_inherits(MainContainer, _Component);

	function MainContainer() {
		_classCallCheck(this, MainContainer);

		return _possibleConstructorReturn(this, (MainContainer.__proto__ || Object.getPrototypeOf(MainContainer)).apply(this, arguments));
	}

	_createClass(MainContainer, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.checkAuth();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			// re-route based on auth status
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'Main' },
				_react2.default.createElement(_components.Navigation, null),
				this.props.children
			);
		}
	}]);

	return MainContainer;
}(_react.Component);

MainContainer.propTypes = {
	isAuthed: _react.PropTypes.bool.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		isAuthed: state.users.isAuthed,
		authedId: state.users.authedId
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { checkAuth: _users.checkAuth })(MainContainer);

/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(14);

__webpack_require__(172);

var _constants = __webpack_require__(9);

var _users = __webpack_require__(26);

var _reactRedux = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeftLinks = function LeftLinks(_ref) {
	var admin = _ref.admin;

	return _react2.default.createElement(
		'ul',
		null,
		_react2.default.createElement(
			'li',
			null,
			_react2.default.createElement(
				_reactRouter.Link,
				{ to: _constants.BASE_URL },
				'Home'
			)
		),
		admin ? _react2.default.createElement(
			'li',
			null,
			_react2.default.createElement(
				_reactRouter.Link,
				{ to: _constants.BASE_URL + '/admin' },
				'ADMIN'
			)
		) : null
	);
};

var RightLinks = function RightLinks(_ref2) {
	var isAuthed = _ref2.isAuthed,
	    authedId = _ref2.authedId;

	if (isAuthed) {
		if (!authedId) console.warn('Error: No Authed Id');
		return _react2.default.createElement(
			'ul',
			null,
			_react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: _constants.BASE_URL + '/profile/' + authedId },
					'Profile'
				)
			),
			_react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: _constants.BASE_URL + '/signout' },
					'Logout'
				)
			)
		);
	} else {
		return _react2.default.createElement(
			'ul',
			null,
			_react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: _constants.BASE_URL + '/signin' },
					'Login'
				)
			),
			_react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: _constants.BASE_URL + '/signup' },
					'Sign Up'
				)
			)
		);
	}
};

var Navigation = function Navigation(_ref3) {
	var isAuthed = _ref3.isAuthed,
	    authedId = _ref3.authedId,
	    admin = _ref3.admin;

	return _react2.default.createElement(
		'nav',
		{ className: 'Navigation' },
		_react2.default.createElement(LeftLinks, {
			admin: admin
		}),
		_react2.default.createElement(RightLinks, {
			isAuthed: isAuthed,
			authedId: authedId
		})
	);
};

Navigation.propTypes = {
	isAuthed: _react.PropTypes.bool.isRequired
};

var mapStateToProps = function mapStateToProps(_ref4) {
	var users = _ref4.users;
	return {
		isAuthed: users.isAuthed,
		authedId: users.authedId,
		admin: users.authedId ? users[users.authedId].admin : false
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Navigation);

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(14);

var _constants = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminNav = function (_Component) {
	_inherits(AdminNav, _Component);

	function AdminNav() {
		_classCallCheck(this, AdminNav);

		return _possibleConstructorReturn(this, (AdminNav.__proto__ || Object.getPrototypeOf(AdminNav)).apply(this, arguments));
	}

	_createClass(AdminNav, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'nav',
				null,
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							null,
							'ADMIN'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							null,
							'Lesson History'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							null,
							'Details'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							null,
							'Results'
						)
					)
				)
			);
		}
	}]);

	return AdminNav;
}(_react.Component);

exports.default = AdminNav;

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _admin = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminContainer = function (_Component) {
	_inherits(AdminContainer, _Component);

	function AdminContainer() {
		_classCallCheck(this, AdminContainer);

		return _possibleConstructorReturn(this, (AdminContainer.__proto__ || Object.getPrototypeOf(AdminContainer)).apply(this, arguments));
	}

	_createClass(AdminContainer, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_admin.AdminNav, {
					params: this.props.params
				}),
				this.props.children
			);
		}
	}]);

	return AdminContainer;
}(_react.Component);

exports.default = AdminContainer;

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _users = __webpack_require__(26);

var _reactRedux = __webpack_require__(15);

var _reactRouter = __webpack_require__(14);

var _constants = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function Login(props) {
	var password = '';
	var email = '';

	function onSubmit(e) {
		e.preventDefault();
		props.onSubmit(email, password);
	}

	return _react2.default.createElement(
		'div',
		{ className: 'container' },
		_react2.default.createElement(
			'form',
			{ onSubmit: onSubmit },
			_react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'label',
					null,
					'Email'
				),
				_react2.default.createElement('input', {
					className: 'form-control',
					type: 'email',
					onChange: function onChange(e) {
						return email = e.target.value;
					}
				})
			),
			_react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'label',
					null,
					'Password'
				),
				_react2.default.createElement('input', {
					className: 'form-control',
					type: 'text',
					onChange: function onChange(e) {
						return password = e.target.value;
					}
				})
			),
			_react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'button',
					{ className: 'btn btn-primary', type: 'submit' },
					'Login'
				),
				_react2.default.createElement(
					'button',
					{ className: 'btn btn-warning', type: 'button' },
					'Cancel'
				)
			)
		)
	);
};

Login.propTypes = {
	onSubmit: _react.PropTypes.func.isRequired
};

var LoginContainer = function (_Component) {
	_inherits(LoginContainer, _Component);

	function LoginContainer() {
		_classCallCheck(this, LoginContainer);

		return _possibleConstructorReturn(this, (LoginContainer.__proto__ || Object.getPrototypeOf(LoginContainer)).apply(this, arguments));
	}

	_createClass(LoginContainer, [{
		key: 'onSubmit',
		value: function onSubmit(email, password) {
			this.props.signinUser(email, password).then(function () {
				return _reactRouter.browserHistory.push(_constants.BASE_URL);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(Login, {
				onSubmit: this.onSubmit.bind(this)
			});
		}
	}]);

	return LoginContainer;
}(_react.Component);

LoginContainer.propTypes = {
	signinUser: _react.PropTypes.func.isRequired
};

exports.default = (0, _reactRedux.connect)(null, { signinUser: _users.signinUser })(LoginContainer);

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _users = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signout = function (_Component) {
	_inherits(Signout, _Component);

	function Signout() {
		_classCallCheck(this, Signout);

		return _possibleConstructorReturn(this, (Signout.__proto__ || Object.getPrototypeOf(Signout)).apply(this, arguments));
	}

	_createClass(Signout, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.signoutUser();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Succesfully Logged Out. Come back soon!'
			);
		}
	}]);

	return Signout;
}(_react.Component);

Signout.propTypes = {
	signoutUser: _react.PropTypes.func.isRequired
};

exports.default = (0, _reactRedux.connect)(null, { signoutUser: _users.signoutUser })(Signout);

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _users = __webpack_require__(26);

var _reactRouter = __webpack_require__(14);

var _constants = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function Signup(props) {
	var details = {
		email: '',
		password: '',
		passwordConfirm: ''
	};

	function submit(e) {
		e.preventDefault();
		props.onSubmit(details).then(function () {
			return _reactRouter.browserHistory.push(_constants.BASE_URL);
		}).catch(function (error) {
			return console.warn(error);
		});
	}

	return _react2.default.createElement(
		'div',
		{ className: 'container-fluid' },
		_react2.default.createElement(
			'form',
			{ onSubmit: submit },
			_react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'label',
					null,
					'Email'
				),
				_react2.default.createElement('input', {
					className: 'form-control',
					type: 'email',
					onChange: function onChange(e) {
						return details.email = e.target.value;
					}
				})
			),
			_react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'label',
					null,
					'Password'
				),
				_react2.default.createElement('input', {
					className: 'form-control',
					type: 'text',
					onChange: function onChange(e) {
						return details.password = e.target.value;
					}
				})
			),
			_react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'label',
					null,
					'Confirm Password'
				),
				_react2.default.createElement('input', {
					className: 'form-control',
					type: 'text',
					onChange: function onChange(e) {
						return details.passwordConfirm = e.target.value;
					}
				})
			),
			_react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'button',
					{ className: 'btn btn-primary', type: 'submit' },
					'Register'
				),
				_react2.default.createElement(
					'button',
					{ className: 'btn btn-warning', type: 'button' },
					'Cancel'
				)
			)
		)
	);
};

Signup.propTypes = {
	// Should be asynchronouse and return a promise
	onSubmit: _react.PropTypes.func.isRequired
};

var SignupContainer = function (_Component) {
	_inherits(SignupContainer, _Component);

	function SignupContainer() {
		_classCallCheck(this, SignupContainer);

		return _possibleConstructorReturn(this, (SignupContainer.__proto__ || Object.getPrototypeOf(SignupContainer)).apply(this, arguments));
	}

	_createClass(SignupContainer, [{
		key: 'onSubmit',
		value: function onSubmit(details) {
			return this.props.registerUser(details);
		}
	}, {
		key: 'validate',
		value: function validate() {}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(Signup, {
				onSubmit: this.onSubmit.bind(this)
			});
		}
	}]);

	return SignupContainer;
}(_react.Component);

SignupContainer.propTypes = {
	registerUser: _react.PropTypes.func.isRequired
};

var mapStateToProps = function mapStateToProps() {
	return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { registerUser: _users.registerUser })(SignupContainer);

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Signout = exports.Signin = exports.Signup = undefined;

var _Signup2 = __webpack_require__(148);

var _Signup3 = _interopRequireDefault(_Signup2);

var _Signin2 = __webpack_require__(146);

var _Signin3 = _interopRequireDefault(_Signin2);

var _Signout2 = __webpack_require__(147);

var _Signout3 = _interopRequireDefault(_Signout2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Signup = _Signup3.default;
exports.Signin = _Signin3.default;
exports.Signout = _Signout3.default;

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(173);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Note = function Note(_ref) {
	var children = _ref.children;
	return _react2.default.createElement(
		'div',
		{ className: 'Note' },
		children
	);
};

exports.default = Note;

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Question = Question;
exports.Description = Description;
exports.Part = Part;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(174);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Question(_ref) {
	var children = _ref.children,
	    number = _ref.number,
	    partsPerRow = _ref.partsPerRow;

	children = _react2.default.Children.toArray(children);
	var description = children.find(function (child) {
		return child.type.name === 'Description';
	});
	var parts = children.filter(function (child) {
		return child.type.name === 'Part';
	});
	var hasParts = parts.length > 0;

	function partToComp(part, index) {
		var width = Math.floor(12 / partsPerRow);
		return _react2.default.createElement(
			'div',
			{ className: 'col-xs-' + width + ' col-sm-' + width + ' col-md-' + width + ' col-lg-' + width, key: index },
			_react2.default.createElement(Part, _extends({}, part.props, { number: String.fromCharCode(97 + index) }))
		);
	}

	return _react2.default.createElement(
		'div',
		{ className: 'container-fluid Question' },
		_react2.default.createElement(
			'div',
			{ className: 'row' },
			_react2.default.createElement(
				'div',
				{ className: 'col-xs-1' },
				number
			),
			_react2.default.createElement(
				'div',
				{ className: 'col-xs-11' },
				description,
				hasParts ? _react2.default.createElement(
					'div',
					{ className: 'row auto-clear' },
					parts.map(partToComp)
				) : null
			)
		)
	);
}

Question.defaultProps = {
	partsPerRow: 1
};

function Description(_ref2) {
	var children = _ref2.children;

	return _react2.default.createElement(
		'div',
		{ className: 'row Description' },
		_react2.default.createElement(
			'div',
			{ className: 'col-xs-12' },
			children
		)
	);
}

function Part(_ref3) {
	var children = _ref3.children,
	    number = _ref3.number;

	return _react2.default.createElement(
		'div',
		{ className: 'row Part' },
		_react2.default.createElement(
			'div',
			{ className: 'col-xs-1' },
			number
		),
		_react2.default.createElement(
			'div',
			{ className: 'col-xs-11' },
			children
		)
	);
}

Part.propTypes = {
	number: _react.PropTypes.string
};

/*
	<h2>Questions</h2>
	<div className='container-fluid question'>
		<div className='row'>
			<div className='col-xs-1'>1</div>
			<div className='col-xs-11'>This is a question with NO parts</div>
		</div>
	</div>

	<div className='container-fluid question'>
		<div className='row'>
			<div className='col-xs-1'>1</div>
			<div className='col-xs-11'>
				<div className='row'>
					<div className='col-xs-12'>This is a question with parts</div>
				</div>
				<div className='row'>
					<div className='col-xs-4'>
						<div className='row x'>
							<div className='col-xs-1 y'>a)</div>
							<div className='col-xs-11 x'>Part a</div>
						</div>
					</div>
					<div className='col-xs-4'>
						<div className='row x'>
							<div className='col-xs-1 y'>a)</div>
							<div className='col-xs-11 x'>Part a</div>
						</div>
					</div>
					<div className='col-xs-4'>
						<div className='row x'>
							<div className='col-xs-1 y'>a)</div>
							<div className='col-xs-11 x'>Part a</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
*/

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _usersLessonHistory = __webpack_require__(89);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lesson = function Lesson(_ref) {
	var lesson = _ref.lesson;

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			null,
			lesson.timestamp
		),
		_react2.default.createElement(
			'div',
			null,
			lesson.record.text
		)
	);
};

Lesson.propTypes = {
	lesson: _react.PropTypes.object.isRequired
};

var LessonHistory = function LessonHistory(_ref2) {
	var lessonHistory = _ref2.lessonHistory;

	return _react2.default.createElement(
		'div',
		null,
		lessonHistory.map(function (lesson, index) {
			return _react2.default.createElement(Lesson, { key: index, lesson: lesson });
		})
	);
};

var LessonHistoryContainer = function (_Component) {
	_inherits(LessonHistoryContainer, _Component);

	function LessonHistoryContainer() {
		_classCallCheck(this, LessonHistoryContainer);

		return _possibleConstructorReturn(this, (LessonHistoryContainer.__proto__ || Object.getPrototypeOf(LessonHistoryContainer)).apply(this, arguments));
	}

	_createClass(LessonHistoryContainer, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchUsersLessonHistory(this.props.params.uid).then(function (data) {
				return console.log('hi', data);
			});
			console.log('cows', this.props);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(LessonHistory, {
				lessonHistory: this.props.lessonHistory
			});
		}
	}]);

	return LessonHistoryContainer;
}(_react.Component);

LessonHistoryContainer.propTypes = {
	lessonHistory: _react.PropTypes.array,
	fetchUsersLessonHistory: _react.PropTypes.func.isRequired
};

var mapStateToProps = function mapStateToProps(state, props) {
	return {
		lessonHistory: state.usersLessonHistory[props.params.uid] ? state.usersLessonHistory[props.params.uid].history : []
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUsersLessonHistory: _usersLessonHistory.fetchUsersLessonHistory })(LessonHistoryContainer);

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(14);

var _constants = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileNav = function (_Component) {
	_inherits(ProfileNav, _Component);

	function ProfileNav() {
		_classCallCheck(this, ProfileNav);

		return _possibleConstructorReturn(this, (ProfileNav.__proto__ || Object.getPrototypeOf(ProfileNav)).apply(this, arguments));
	}

	_createClass(ProfileNav, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'nav',
				null,
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							null,
							'Bookmarks'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: _constants.BASE_URL + '/profile/' + this.props.params.uid + '/lessonhistory' },
							'Lesson History'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							null,
							'Details'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							null,
							'Results'
						)
					)
				)
			);
		}
	}]);

	return ProfileNav;
}(_react.Component);

exports.default = ProfileNav;

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _profile = __webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileContainer = function (_Component) {
	_inherits(ProfileContainer, _Component);

	function ProfileContainer() {
		_classCallCheck(this, ProfileContainer);

		return _possibleConstructorReturn(this, (ProfileContainer.__proto__ || Object.getPrototypeOf(ProfileContainer)).apply(this, arguments));
	}

	_createClass(ProfileContainer, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_profile.ProfileNav, {
					params: this.props.params
				}),
				this.props.children
			);
		}
	}]);

	return ProfileContainer;
}(_react.Component);

exports.default = ProfileContainer;

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _worksheet = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contents = function Contents(_ref) {
	var children = _ref.children;

	children = _react2.default.Children.toArray(children);
	children = children.map(function (topic, index) {
		return _react2.default.createElement(topic.type, _extends({}, topic.props, {
			topicNum: index + 1
		}));
	});

	var rows = children.reduce(function (rows, topic, index, children) {
		if (index % 2 === 0) {
			rows.push(_react2.default.createElement(
				'div',
				{ key: index, className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'col-sm-6' },
					children[index]
				),
				_react2.default.createElement(
					'div',
					{ className: 'col-sm-6' },
					children[index + 1]
				)
			));
		}
		return rows;
	}, []);

	// Rendered Component
	return _react2.default.createElement(
		'div',
		{ className: 'Contents container-fluid' },
		rows
	);
};

exports.default = Contents;

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _worksheet = __webpack_require__(41);

var _constants = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
	return _react2.default.createElement(
		'div',
		{ className: 'Home' },
		_react2.default.createElement(
			'h1',
			null,
			'Contents - Worksheets/Notes'
		),
		_react2.default.createElement(
			_worksheet.Contents,
			null,
			_react2.default.createElement(
				_worksheet.Topic,
				{ name: 'Sets' },
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Set Notation [TODO]', path: _constants.BASE_URL + '/' + _constants.WORKSHEETS_URL + '/Sets/SetNotation' }),
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Set Builder Notation [TODO]', path: _constants.BASE_URL + '/' + _constants.WORKSHEETS_URL + '/Sets/SetBuilder' })
			),
			_react2.default.createElement(
				_worksheet.Topic,
				{ name: 'Functions' },
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Composite Functions', path: _constants.BASE_URL + '/' + _constants.WORKSHEETS_URL + '/Functions/CompositeFunctions' }),
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Inverse Functions', path: _constants.BASE_URL + '/' + _constants.WORKSHEETS_URL + '/Functions/InverseFunctions' }),
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Absolute Value Functions [TODO]', path: _constants.BASE_URL + '/' + _constants.WORKSHEETS_URL + '/Functions/AbsoluteValueFunctions' }),
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Reciprocal Functions [TODO]', path: _constants.BASE_URL + '/' + _constants.WORKSHEETS_URL + '/Functions/ReciprocalFunctions' })
			),
			_react2.default.createElement(
				_worksheet.Topic,
				{ name: 'Coordinate Geometry' },
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Circles, Ellipses and Hyperbolas [TODO]', path: _constants.BASE_URL + '/' + _constants.WORKSHEETS_URL + '/CoordinateGeometry/CirclesEllipsesAndHyperbolas' })
			),
			_react2.default.createElement(_worksheet.Topic, { name: 'Trigonometry and Circular Functions' }),
			_react2.default.createElement(_worksheet.Topic, { name: 'Vectors' }),
			_react2.default.createElement(_worksheet.Topic, { name: 'Complex Numbers' }),
			_react2.default.createElement(_worksheet.Topic, { name: 'Kinematics' }),
			_react2.default.createElement(_worksheet.Topic, { name: 'Differential Calculus' }),
			_react2.default.createElement(
				_worksheet.Topic,
				{ name: 'Integral Calculus [OLD NOTES]' },
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Introduction and Notation', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Substitution', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Integration by Parts', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Reverse Quotient Rule. No!', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Using Trigonometric Identities', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Partial Fractions', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Areas Under Curves', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Areas Between Curves', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Volumes of Solids of Revolutions', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_worksheet.SubTopic, { name: 'Area Approximation, Introduction to Rieman Integration', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true })
			),
			_react2.default.createElement(_worksheet.Topic, { name: 'Differential Equations' }),
			_react2.default.createElement(_worksheet.Topic, { name: 'Mechanics' }),
			_react2.default.createElement(_worksheet.Topic, { name: 'Vector Calculus' }),
			_react2.default.createElement(_worksheet.Topic, { name: 'Probability' }),
			_react2.default.createElement(_worksheet.Topic, { name: 'Statistics' })
		)
	);
};

exports.default = Home;

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(14);

var _constants = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubTopic = function SubTopic(props) {
	var internals = [props.external ? _react2.default.createElement(
		'div',
		{ key: 0 },
		_react2.default.createElement(
			'a',
			{ href: props.path },
			props.topicNum
		)
	) : _react2.default.createElement(
		'div',
		{ key: 0 },
		_react2.default.createElement(
			_reactRouter.Link,
			{ to: props.path },
			props.topicNum
		)
	), props.external ? _react2.default.createElement(
		'div',
		{ key: 1 },
		_react2.default.createElement(
			'a',
			{ href: props.path },
			props.name
		)
	) : _react2.default.createElement(
		'div',
		{ key: 1 },
		_react2.default.createElement(
			_reactRouter.Link,
			{ to: props.path },
			props.name
		)
	)];

	return _react2.default.createElement(
		'div',
		{ className: 'SubTopic' },
		internals
	);
};

SubTopic.defaultProps = {
	external: false,
	path: _constants.BASE_URL,
	topicNum: 'error'
};

SubTopic.propTypes = {
	external: _react.PropTypes.bool.isRequired,
	path: _react.PropTypes.string.isRequired,
	name: _react.PropTypes.string.isRequired,
	topicNum: _react.PropTypes.string.isRequired
};

exports.default = SubTopic;

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _worksheet = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Topic = function Topic(_ref) {
	var name = _ref.name,
	    topicNum = _ref.topicNum,
	    children = _ref.children;

	children = _react2.default.Children.toArray(children);
	var key = 0;
	var subtopics = children.map(function (subtopic, index) {
		return _react2.default.createElement(_worksheet.SubTopic, _extends({}, subtopic.props, {
			key: index,
			topicNum: topicNum + '.' + index
		}));
	});
	return _react2.default.createElement(
		'div',
		{ className: 'Topic' },
		_react2.default.createElement(
			'div',
			{ className: 'row' },
			_react2.default.createElement('div', { className: 'col-sm-2' }),
			_react2.default.createElement(
				'div',
				{ className: 'col-sm-10' },
				_react2.default.createElement(
					'h2',
					null,
					topicNum + ' - ' + name
				)
			),
			_react2.default.createElement('div', { className: 'col-sm-0' })
		),
		_react2.default.createElement(
			'div',
			{ className: 'row' },
			_react2.default.createElement('div', { className: 'col-sm-3' }),
			_react2.default.createElement(
				'div',
				{ className: 'col-sm-9' },
				_react2.default.createElement(
					'ul',
					null,
					subtopics
				)
			),
			_react2.default.createElement('div', { className: 'col-sm-0' })
		)
	);
};

exports.default = Topic;

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MathJax = __webpack_require__(21);

var _worksheet = __webpack_require__(53);

var _CircleAtOrigin = __webpack_require__(323);

var _CircleAtOrigin2 = _interopRequireDefault(_CircleAtOrigin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CirclesEllipsesAndHyperbolas = function CirclesEllipsesAndHyperbolas() {
	return _react2.default.createElement(
		'div',
		{ className: 'MathMarkup' },
		_react2.default.createElement(
			'h1',
			null,
			'Circles, Ellipses and Hyperbolas'
		),
		_react2.default.createElement(
			'section',
			null,
			_react2.default.createElement(
				'h2',
				null,
				'Circles'
			),
			_react2.default.createElement(
				'p',
				null,
				'Consider a circle around the origin, it has a constant radius. The distance from a point to the origin is ',
				_react2.default.createElement(_MathJax.Tex, { t: '\\sqrt{x^2 + y^2}' }),
				'. So if our circle has constant radius $r$, then the equation of the circle must be ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'r = \\sqrt{x^2 + y^2}'
				),
				' or ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'r^2 = x^2 + y^2'
				),
				'.',
				_react2.default.createElement('img', { className: 'hcenter img-responsive', src: _CircleAtOrigin2.default, alt: 'CircleAtOrigin' })
			),
			_react2.default.createElement(
				'p',
				null,
				'The general equation of a circle of radius ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'r'
				),
				' and center ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'(a,b)'
				),
				' is then ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'r^2 = (x-a)^2 + (y-b)^2'
				),
				' as we can simply translate a circle centered at the origin.'
			)
		),
		_react2.default.createElement(
			'section',
			null,
			_react2.default.createElement(
				'h2',
				null,
				'Ellipses'
			),
			_react2.default.createElement(
				'p',
				null,
				'Let\'s rewrite our circle equation as ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'1 = \\frac{x^2}{r^2} + \\frac{y^2}{r^2}'
				),
				'. In this form we can see why the ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'x'
				),
				' and ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'y'
				),
				' intercepts are ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'\\pm r'
				),
				' as when either ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'x'
				),
				' or ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'y'
				),
				' are ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'0'
				),
				', the other must be ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'r'
				),
				' in order to equal ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'1'
				),
				'.'
			),
			_react2.default.createElement(
				'p',
				null,
				'We also see that ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'x'
				),
				' and ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'y'
				),
				' are inversely related as when either ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'x'
				),
				' or ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'y'
				),
				' increase the other must decrease, and vice versa, consistent with the shape of a circle. Keeping this in mind, there is no reason that both denominators have to be the same.'
			),
			_react2.default.createElement(
				'p',
				null,
				'Consider ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'1 = \\frac{x^2}{a^2} + \\frac{y^2}{b^2}'
				),
				'. Using the same logic as before, the ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'x'
				),
				' intercept must be ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'\\pm a'
				),
				' and the ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'y'
				),
				' intercept must be ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'\\pm b'
				),
				'. We also maintain the inverse relation between ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'x'
				),
				' and ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'y'
				),
				' so we end up with a \'circle\' that may not have the same height as width, ie, an ellipse.'
			),
			_react2.default.createElement(
				'p',
				null,
				'The general equation of an ellipse centered at ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'(h,k)'
				),
				' is then ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'1 = \\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2}'
				),
				' as we can simply translate an ellipse centered at the origin.'
			)
		),
		_react2.default.createElement(
			'section',
			null,
			_react2.default.createElement(
				'h2',
				null,
				'Hyperbolas'
			)
		),
		_react2.default.createElement(
			'section',
			null,
			_react2.default.createElement(
				_worksheet.Question,
				{ partsPerRow: 3, number: '1' },
				_react2.default.createElement(
					_worksheet.Description,
					null,
					'This is a question without parts'
				)
			),
			_react2.default.createElement(
				_worksheet.Question,
				{ partsPerRow: 3, number: '2' },
				_react2.default.createElement(
					_worksheet.Description,
					null,
					'This is a question with parts'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'a' },
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = \\frac{x + 1}{x + 3}' })
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'a' },
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = \\frac{x + 1}{x + 3}' })
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'a' },
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = \\frac{x + 1}{x + 3}' })
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'a' },
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = \\frac{x + 1}{x + 3}' })
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'a' },
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = \\frac{x + 1}{x + 3}' })
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'b' },
					'Part b'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'c' },
					'Part c'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'c' },
					'Part c'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'c' },
					'Part c'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'c' },
					'Part c'
				)
			),
			_react2.default.createElement(
				_worksheet.Note,
				null,
				_react2.default.createElement(
					'div',
					null,
					'Some Notes ',
					_react2.default.createElement(_MathJax.Tex, { t: 'f : (2,\\infty) \\rightarrow \\mathbb{R}, f(x) = \\sqrt{2x + 3}' }),
					' and some cows'
				)
			),
			_react2.default.createElement(
				_worksheet.Question,
				{ partsPerRow: 4, number: '3' },
				_react2.default.createElement(
					_worksheet.Description,
					null,
					'This is a question with parts'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'b' },
					'Part b'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'a' },
					_react2.default.createElement(
						'div',
						null,
						'fgdfgdfgdfg'
					),
					_react2.default.createElement(
						'div',
						null,
						'cows go moo moo fgdfgdfgdfg dfg df'
					)
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'c' },
					'Part c'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'd' },
					'Part d'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'd' },
					'Part d'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'd' },
					'Part d'
				)
			),
			_react2.default.createElement(
				_worksheet.Question,
				{ partsPerRow: 3, number: '4' },
				_react2.default.createElement(
					_worksheet.Description,
					null,
					'If ',
					_react2.default.createElement(_MathJax.Tex, { t: 'f : (2,\\infty) \\rightarrow \\mathbb{R}, f(x) = \\sqrt{2x + 3}' }),
					', then the inverse function is'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'a' },
					'fghfghfghfgh fgh fgh fgh gghfghfg fghfgh fgh fg fg a'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'b' },
					'Part b'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'c' },
					'Part c'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'c' },
					'Part c'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'c' },
					'Part c'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'c' },
					'Part c'
				)
			),
			_react2.default.createElement(
				_worksheet.Question,
				{ partsPerRow: 3, number: '5' },
				_react2.default.createElement(
					_worksheet.Description,
					null,
					'This is a question with parts'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'a' },
					'Part a'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'b' },
					'Part b'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'c' },
					'Part c'
				)
			),
			_react2.default.createElement(
				_worksheet.Question,
				{ partsPerRow: 3, number: '6' },
				_react2.default.createElement(
					_worksheet.Description,
					null,
					'This is a question with parts'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'a' },
					'Part a'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'b' },
					'Part b'
				),
				_react2.default.createElement(
					_worksheet.Part,
					{ number: 'c' },
					'Part c'
				)
			),
			_react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null)
			)
		)
	);
};

exports.default = CirclesEllipsesAndHyperbolas;

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CirclesEllipsesAndHyperbolas = undefined;

var _CirclesEllipsesAndHyperbolas2 = __webpack_require__(159);

var _CirclesEllipsesAndHyperbolas3 = _interopRequireDefault(_CirclesEllipsesAndHyperbolas2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CirclesEllipsesAndHyperbolas = _CirclesEllipsesAndHyperbolas3.default;

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MathJax = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AbsoluteValueFunctions = function AbsoluteValueFunctions() {
	return _react2.default.createElement(
		'div',
		{ className: 'MathMarkup' },
		_react2.default.createElement(
			'h1',
			null,
			'Absolute Value Functions'
		)
	);
};

exports.default = AbsoluteValueFunctions;

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MathJax = __webpack_require__(21);

var _worksheet = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompositeFunctions = function CompositeFunctions() {
	return _react2.default.createElement(
		'div',
		{ className: 'MathMarkup' },
		_react2.default.createElement(
			'h1',
			null,
			'Composite Functions'
		),
		_react2.default.createElement(
			'h2',
			null,
			'Questions'
		),
		_react2.default.createElement(
			_worksheet.Note,
			null,
			_react2.default.createElement(
				'div',
				null,
				'Given two functions ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g' }),
				', the composition ',
				_react2.default.createElement(_MathJax.Tex, { t: 'h = f \\circ g' }),
				' is defined as ',
				_react2.default.createElement(_MathJax.Tex, { t: 'h(x) = f(g(x))' })
			),
			_react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'strong',
					null,
					'Example:'
				)
			),
			_react2.default.createElement(
				'div',
				null,
				'If ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = 2x' }),
				', ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g(x) = x^2' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'h = f \\circ g' }),
				', then, ',
				_react2.default.createElement(_MathJax.Tex, { t: 'h(x) = f(g(x)) = f(x^2) = 2x^2' })
			)
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ partsPerRow: 3, number: '1' },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				'Assuming that ',
				_react2.default.createElement(_MathJax.Tex, { t: 'h = f \\circ g' }),
				' exists, find the rule of ',
				_react2.default.createElement(_MathJax.Tex, { t: 'h' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = 2x + 1' })
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'g(x) = 3x' })
				)
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = 2x - 1' })
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'g(x) = x^2 + 1' })
				)
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = x^2 + 3x' })
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'g(x) = 2x + 3' })
				)
			)
		),
		_react2.default.createElement(
			_worksheet.Note,
			null,
			_react2.default.createElement(
				'div',
				null,
				'Given two functions ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g' }),
				', the composition ',
				_react2.default.createElement(_MathJax.Tex, { t: 'h = f \\circ g' }),
				' exists if ',
				_react2.default.createElement(_MathJax.Tex, { t: '\\text{range}(g) \\subseteq \\text{domain}(f)' }),
				'.'
			),
			_react2.default.createElement(
				'div',
				null,
				'This means that what comes out of the inner function (',
				_react2.default.createElement(_MathJax.Tex, { t: 'g' }),
				') must be a valid input of the outer function.'
			),
			_react2.default.createElement('br', null),
			_react2.default.createElement(
				'div',
				null,
				'You may imagine an assembly line...'
			),
			_react2.default.createElement(
				'div',
				null,
				'Wood ',
				_react2.default.createElement(_MathJax.Tex, { t: '\\underset{\\text{Table Factory}}{\\rightarrow}' }),
				' Table ',
				_react2.default.createElement(_MathJax.Tex, { t: '\\underset{\\text{Table Painter}}{\\rightarrow}' }),
				' Painted Table'
			),
			_react2.default.createElement(
				'div',
				null,
				'Wood ',
				_react2.default.createElement(_MathJax.Tex, { t: '\\underset{\\text{Wood Chipper}}{\\rightarrow}' }),
				' Wood Chips ',
				_react2.default.createElement(_MathJax.Tex, { t: '\\underset{\\text{Table Painter}}{\\rightarrow}' }),
				' ???'
			)
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ partsPerRow: 2, number: '2' },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				_react2.default.createElement(
					'div',
					null,
					'Find the domain and range of ',
					_react2.default.createElement(_MathJax.Tex, { t: 'f' }),
					' and ',
					_react2.default.createElement(_MathJax.Tex, { t: 'g' }),
					' then determine if ',
					_react2.default.createElement(_MathJax.Tex, { t: 'f(g(x))' }),
					' or ',
					_react2.default.createElement(_MathJax.Tex, { t: 'g(f(x))' }),
					' exist, and if so, find their rules.'
				),
				_react2.default.createElement(
					'div',
					null,
					'(',
					_react2.default.createElement(
						'em',
						null,
						'Note:'
					),
					' If a domain is not stated, we use the implied/maximal domain, hence the name).'
				)
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = \\frac{1}{x^2}' })
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'g(x) = x^2 + 1' })
				)
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = \\sqrt{3 - x}' })
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'g(x) = x^2' })
				)
			)
		),
		_react2.default.createElement(
			_worksheet.Note,
			null,
			_react2.default.createElement(
				'div',
				null,
				'If ',
				_react2.default.createElement(_MathJax.Tex, { t: 'h(x) = f(g(x))' }),
				' exists then:'
			),
			_react2.default.createElement(
				'ul',
				null,
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: '\\text{domain}(h) = \\text{domain}(g)' }),
					' as any input to ',
					_react2.default.createElement(_MathJax.Tex, { t: 'h' }),
					' must be an \'input-able\' in ',
					_react2.default.createElement(_MathJax.Tex, { t: 'g' }),
					'.'
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: '\\text{range}(h) \\subseteq \\text{range}(f)' }),
					' since what comes out of ',
					_react2.default.createElement(_MathJax.Tex, { t: 'h' }),
					' is what comes out of ',
					_react2.default.createElement(_MathJax.Tex, { t: 'f' }),
					' but with more restrictions since the input to ',
					_react2.default.createElement(_MathJax.Tex, { t: 'f' }),
					' is restricted to the range of ',
					_react2.default.createElement(_MathJax.Tex, { t: 'g' }),
					'.'
				)
			)
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ partsPerRow: 2, number: '3' },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				_react2.default.createElement(
					'div',
					null,
					'Find ',
					_react2.default.createElement(_MathJax.Tex, { t: 'f(g(x))' }),
					' and state its rule, domain and range.'
				),
				_react2.default.createElement(
					'div',
					null,
					'(',
					_react2.default.createElement(
						'em',
						null,
						'Note:'
					),
					' You may reuse answers from the previous question).'
				)
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = \\frac{1}{x^2}' })
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'g(x) = x^2 + 1' })
				)
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = \\sqrt{3 - x}' })
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'g(x) = x^2' })
				)
			)
		),
		_react2.default.createElement(
			_worksheet.Note,
			null,
			'Suppose we want to find ',
			_react2.default.createElement(_MathJax.Tex, { t: 'h(x) = f(g(x))' }),
			'. If ',
			_react2.default.createElement(_MathJax.Tex, { t: '\\text{range}(g) \\not\\subseteq \\text{domain}(f)' }),
			' then we know that ',
			_react2.default.createElement(_MathJax.Tex, { t: 'h' }),
			' does not exist. Instead we can create a new function ',
			_react2.default.createElement(_MathJax.Tex, { t: 'g^*' }),
			' by restricting the domain of ',
			_react2.default.createElement(_MathJax.Tex, { t: 'g' }),
			', which in turn will restrict the range, such that hopefully ',
			_react2.default.createElement(_MathJax.Tex, { t: '\\text{range}(g*) \\subseteq \\text{domain}(f)' }),
			' so  that ',
			_react2.default.createElement(_MathJax.Tex, { t: 'h^*(x) = f(g^*(x))' }),
			' exists instead.'
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ partsPerRow: 2, number: '4' },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				'Attempt to find ',
				_react2.default.createElement(_MathJax.Tex, { t: 'h(x) = f(g(x))' }),
				', if necessary create a new function ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g^*' }),
				' by restricting the domain of ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g' }),
				' and find ',
				_react2.default.createElement(_MathJax.Tex, { t: 'h^*(x) = f(g^*(x))' }),
				' instead. Otherwise, state why ',
				_react2.default.createElement(_MathJax.Tex, { t: 'h' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'h^*' }),
				' do not exist.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = (x-1)^2' })
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'g(x) = \\sqrt{9 - x}' })
				)
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = \\sqrt{x - 1}' })
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'g(x) = -\\left|x\\right|' })
				)
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'f: (-\\infty, 5) \\rightarrow \\mathbb{R}, f(x) = x' })
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'g(x) = x^2 + 1' })
				)
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'f: (-\\infty, 5) \\rightarrow \\mathbb{R}, f(x) = x^{774} - sin(x)' })
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'g(x) = x^2 + 1' })
				),
				_react2.default.createElement(
					'div',
					null,
					'(',
					_react2.default.createElement(
						'em',
						null,
						'Hint:'
					),
					' refer to previous part, what do you really care about ',
					_react2.default.createElement(_MathJax.Tex, { t: 'f' }),
					'?)'
				)
			)
		),
		_react2.default.createElement(
			'h2',
			null,
			'Assignment'
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ partsPerRow: 2, number: '1' },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				'If ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = (x+3)(x-2)' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g(x) = x^2' }),
				' determine whether ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(g(x))' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g(f(x))' }),
				' exist. If they do, find the rule for the composite function and state its domain and range.'
			)
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ number: '2' },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				'Let ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = x^2' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g(x) = \\sqrt{x}' }),
				'.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Determine if ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(g(x))' }),
				' exists. If so state its rule, domain and range'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Determine if ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g(f(x))' }),
				' exists. If so state its rule, domain and range'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Are ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(g(x))' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g(f(x))' }),
				' equal?'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Is it possible to restrict the domain of ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f' }),
				' so that ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(g(x))' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g(f(x))' }),
				' equal? If so find a domain restricted function ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^*' }),
				' from ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f' }),
				' such that ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^*(g(x)) = g(f^*(x))' })
			)
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ number: '3' },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				'For the functions, ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f: \\mathbb{R} \\rightarrow \\mathbb{R}, f(x) = x^2 + 2' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g: [6, \\infty) \\rightarrow \\mathbb{R} ,g(x) = \\sqrt{x-6}' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Show that ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(g(x))' }),
				' exists.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Find the rule of ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(g(x))' }),
				' and state its domain and range.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Show that ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g(f(x))' }),
				' does not exist.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Restrict the domain of ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f' }),
				' to obtain a function ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^*' }),
				' such that ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g(f^*(x))' }),
				' exists.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Find ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g(f^*(x))' }),
				' and state its domain and range.'
			)
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ number: '4' },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				'If ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f: (-\\infty, 3] \\rightarrow \\mathbb{R}, f(x) = x^2 + k' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g: [6, \\infty) \\rightarrow \\mathbb{R} ,g(x) = -\\sqrt{x-6} + k' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Find the ranges of ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Find the set of values of ',
				_react2.default.createElement(_MathJax.Tex, { t: 'k' }),
				' such that both ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(g(x))' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'g(f(x))' }),
				' exist.'
			)
		),
		_react2.default.createElement(
			'h2',
			null,
			'Extra'
		)
	);
};

exports.default = CompositeFunctions;

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MathJax = __webpack_require__(21);

var _worksheet = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InverseFunctions = function InverseFunctions() {
	return _react2.default.createElement(
		'div',
		{ className: 'MathMarkup' },
		_react2.default.createElement(
			'h1',
			null,
			'Inverse Functions'
		),
		_react2.default.createElement(
			'h2',
			null,
			'Questions'
		),
		_react2.default.createElement(
			_worksheet.Note,
			null,
			_react2.default.createElement(
				'ul',
				null,
				_react2.default.createElement(
					'li',
					null,
					'A ',
					_react2.default.createElement(
						'strong',
						null,
						'function'
					),
					' ',
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x)' }),
					' has an ',
					_react2.default.createElement(
						'strong',
						null,
						'inverse function'
					),
					', ',
					_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}(x)' }),
					', if and only if it is one-to-one.'
				),
				_react2.default.createElement(
					'li',
					null,
					'A function and its inverse are related geometrically by a reflect along the line ',
					_react2.default.createElement(_MathJax.Tex, { t: 'y = x' })
				),
				_react2.default.createElement(
					'li',
					null,
					'As a result, ',
					_react2.default.createElement(_MathJax.Tex, { t: '\\text{domain}(f) = \\text{range}(f^{-1})' }),
					' and ',
					_react2.default.createElement(_MathJax.Tex, { t: '\\text{range}(f) = \\text{domain}(f^{-1})' })
				)
			)
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ partsPerRow: 2, number: 1 },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				'For each of the following ',
				_react2.default.createElement(
					'strong',
					null,
					'functions'
				),
				' find the inverse ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}' }),
				' and sketch both ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}' }),
				'.',
				_react2.default.createElement(
					'div',
					null,
					'(',
					_react2.default.createElement(
						'em',
						null,
						'Contemplate:'
					),
					' How does the inverse change when you transform the original function?)'
				)
			),
			_react2.default.createElement(
				_worksheet.Part,
				{ number: 'a' },
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = x' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				{ number: 'b' },
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = 2x' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				{ number: 'c' },
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = x + 1' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				{ number: 'c' },
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = (x-1)^3 + 2' })
			)
		),
		_react2.default.createElement(
			_worksheet.Note,
			null,
			_react2.default.createElement(
				'p',
				null,
				'If a function, ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f' }),
				', has an inverse, ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}' }),
				', then,',
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '(f \\circ f^{-1})(x) = x' }),
						' for all ',
						_react2.default.createElement(_MathJax.Tex, { t: 'x \\in \\text{domain}(f^{-1})' })
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '(f^{-1} \\circ f)(x) = x' }),
						' for all ',
						_react2.default.createElement(_MathJax.Tex, { t: 'x \\in \\text{domain}(f)' })
					)
				)
			)
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ partsPerRow: 2, number: 2 },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				'For each of the following ',
				_react2.default.createElement(
					'strong',
					null,
					'functions'
				),
				' find the inverse ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}' }),
				', and sketch both ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}' }),
				'. Also write down the domain and ranges of each function and its inverse.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				{ number: 'a' },
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = \\sqrt{x}' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				{ number: 'b' },
				_react2.default.createElement(_MathJax.Tex, { t: 'f: [0, \\infty), f(x) = x^2' })
			)
		),
		_react2.default.createElement(
			_worksheet.Note,
			null,
			_react2.default.createElement(
				'p',
				null,
				'Any graph of a relation may be inverted by a reflection along the line ',
				_react2.default.createElement(_MathJax.Tex, { t: 'y = x' }),
				'. If the original relation is not [x]-to-[y] then the inverse will be [y]-to-[x].'
			),
			_react2.default.createElement(
				'p',
				null,
				'Some key points to note:',
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						null,
						'A one-to-many ',
						_react2.default.createElement(
							'strong',
							null,
							'function'
						),
						' has a many-to-one inverse ',
						_react2.default.createElement(
							'strong',
							null,
							'relation'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						'A many-to-one ',
						_react2.default.createElement(
							'strong',
							null,
							'relation'
						),
						' has a many-to-one inverse ',
						_react2.default.createElement(
							'strong',
							null,
							'function'
						)
					)
				)
			)
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ partsPerRow: 2, number: 3 },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				'For each of the following ',
				_react2.default.createElement(
					'strong',
					null,
					'relations'
				),
				' find the inverse ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}' }),
				', and sketch both ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f' }),
				' and ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}' }),
				'. Also write down the [x]-to-[y] relationship of each relation and its inverse.',
				_react2.default.createElement(
					'div',
					null,
					'(',
					_react2.default.createElement(
						'em',
						null,
						'Note:'
					),
					' Functions are relations.)'
				)
			),
			_react2.default.createElement(
				_worksheet.Part,
				{ number: 'a' },
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = \\sqrt{x}' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				{ number: 'b' },
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = x^2' })
			)
		),
		_react2.default.createElement(
			_worksheet.Note,
			null,
			_react2.default.createElement(
				'p',
				null,
				'We could find the intersection of a function, ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f' }),
				', and its inverse, ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}' }),
				' just like we would with any other functions by solving ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = f^{-1}(x)' }),
				'.'
			),
			_react2.default.createElement(
				'p',
				null,
				'However, we can use the property that a function and its inverse are related by a reflection along ',
				_react2.default.createElement(_MathJax.Tex, { t: 'y = x' }),
				' to see that we only need to solve either ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = x' }),
				' or ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}(x) = x' }),
				'.'
			)
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ partsPerRow: 1, number: 3 },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				'For each of the following ',
				_react2.default.createElement(
					'strong',
					null,
					'relations'
				),
				' find the points of intersection with its inverse firstly by solving ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = f^{-1}(x)' }),
				', then by solving either ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = x' }),
				' or ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}(x) = x' }),
				'.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				{ number: 'a' },
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = 2x + 1' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				{ number: 'b' },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = x^2' })
				),
				_react2.default.createElement(
					'div',
					null,
					'(',
					_react2.default.createElement(
						'em',
						null,
						'Note:'
					),
					' This is a one-to-many function so its inverse is a many-to-one relation. You may want to write the relation as two separate functions when solving ',
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = f^{-1}(x)' }),
					'.)'
				)
			)
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ partsPerRow: 2, number: 4 },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				'For each of the following ',
				_react2.default.createElement(
					'strong',
					null,
					'functions'
				),
				' find the points of intersection with its inverse by solving either ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = x' }),
				' or ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}(x) = x' }),
				'.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				{ number: 'a' },
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = x^2 + 5x + 4' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				{ number: 'b' },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = \\sqrt{x}' })
				)
			)
		),
		_react2.default.createElement(
			'h2',
			null,
			'Assignment'
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ partsPerRow: 3, number: '1' },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				'Determine the [x]-to-[y] relationships of the following relations.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(_MathJax.Tex, { t: '2x+1' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(_MathJax.Tex, { t: 'x^2' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(_MathJax.Tex, { t: 'x^2 + 3x + 7' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(_MathJax.Tex, { t: '\\frac{1}{x}' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(_MathJax.Tex, { t: '\\frac{1}{x^2}' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(_MathJax.Tex, { t: '\\sin(x)' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MathJax.Tex, { t: 'x^2 + y^2 = 1' })
				),
				_react2.default.createElement(
					'div',
					null,
					'(',
					_react2.default.createElement(
						'em',
						null,
						'Hint:'
					),
					' What is the distance from the origin to a point ',
					_react2.default.createElement(_MathJax.Tex, { t: '(x,y)' }),
					'? Can you graph this relation?)'
				)
			)
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ number: '2' },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				'Let ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f: [a,\\infty) \\rightarrow \\mathbb{R}, f(x) = x^2 - 6x + 9' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Find the smallest value of ',
				_react2.default.createElement(_MathJax.Tex, { t: 'a' }),
				' such that ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}(x)' }),
				' exists.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Find ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}(x)' }),
				'.'
			)
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ number: '3' },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				'Let ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f(x) = \\frac{x + 4}{3x - 1}' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Show that ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f \\circ f' }),
				' is defined.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Find ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f \\circ f' }),
				'.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				_react2.default.createElement(
					'div',
					null,
					'Write down ',
					_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}(x)' }),
					'.'
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'em',
						null,
						'Mobius Transform'
					)
				)
			)
		),
		_react2.default.createElement(
			_worksheet.Question,
			{ number: '4' },
			_react2.default.createElement(
				_worksheet.Description,
				null,
				'Let ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f: [2, \\infty) \\rightarrow \\mathbb{R}, f(x) = \\sqrt{x - 2}' })
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Find ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}(x)' }),
				'.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Graph ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}(x)' }),
				'.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Find ',
				_react2.default.createElement(_MathJax.Tex, { t: 'h(x) = f^{-1}(f(\\frac{x+3}{2}))' }),
				' and state its maximal domain.'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Is ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}(x)' }),
				' odd, even, or neither?'
			),
			_react2.default.createElement(
				_worksheet.Part,
				null,
				'Find ',
				_react2.default.createElement(_MathJax.Tex, { t: 'f^{-1}(-f(\\frac{x+3}{2}))' }),
				'.'
			)
		),
		_react2.default.createElement(
			'h2',
			null,
			'Extra'
		)
	);
};

exports.default = InverseFunctions;

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MathJax = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReciprocalFunctions = function ReciprocalFunctions() {
	return _react2.default.createElement(
		'div',
		{ className: 'MathMarkup' },
		_react2.default.createElement(
			'h1',
			null,
			'Reciprocal Functions'
		)
	);
};

exports.default = ReciprocalFunctions;

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InverseFunctions = exports.CompositeFunctions = exports.ReciprocalFunctions = exports.AbsoluteValueFunctions = undefined;

var _AbsoluteValueFunctions2 = __webpack_require__(161);

var _AbsoluteValueFunctions3 = _interopRequireDefault(_AbsoluteValueFunctions2);

var _ReciprocalFunctions2 = __webpack_require__(164);

var _ReciprocalFunctions3 = _interopRequireDefault(_ReciprocalFunctions2);

var _CompositeFunctions2 = __webpack_require__(162);

var _CompositeFunctions3 = _interopRequireDefault(_CompositeFunctions2);

var _InverseFunctions2 = __webpack_require__(163);

var _InverseFunctions3 = _interopRequireDefault(_InverseFunctions2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AbsoluteValueFunctions = _AbsoluteValueFunctions3.default;
exports.ReciprocalFunctions = _ReciprocalFunctions3.default;
exports.CompositeFunctions = _CompositeFunctions3.default;
exports.InverseFunctions = _InverseFunctions3.default;

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MathJax = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SetBuilder = function SetBuilder() {
	return _react2.default.createElement(
		'div',
		{ className: 'MathMarkup' },
		_react2.default.createElement(
			'h1',
			null,
			'Set Builder Notation'
		),
		_react2.default.createElement(
			'p',
			null,
			'Set builder notation is a way of compactly describing a set'
		),
		_react2.default.createElement(
			'h2',
			null,
			'Questions'
		)
	);
};

exports.default = SetBuilder;

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MathJax = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SetNotation = function SetNotation() {
	return _react2.default.createElement(
		'div',
		{ className: 'MathMarkup' },
		_react2.default.createElement(
			'h1',
			null,
			'Set Notation'
		),
		_react2.default.createElement(
			'table',
			null,
			_react2.default.createElement(
				'thead',
				null,
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'Name'
					),
					_react2.default.createElement(
						'th',
						null,
						'Symbol'
					),
					_react2.default.createElement(
						'th',
						null,
						'Meaning'
					),
					_react2.default.createElement(
						'th',
						null,
						'Example'
					)
				)
			),
			_react2.default.createElement(
				'tbody',
				null,
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Set'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{\\}' })
					),
					_react2.default.createElement(
						'td',
						null,
						'a collection of elements'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3,4\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Union'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cup B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in either ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' or ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cup \\{4,5,6\\} = \\{1,2,3,4,5,6\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Intersect'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Subset'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Proper Subset'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Not a Subset'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Superset'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Proper Superset'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Not a Superset'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Element of (in)'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Not an element of'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Complement'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Exclusion'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Empty Set'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Equality'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Natural Numbers'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Integers'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Rational Numbers'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Real Numbers'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Complex Numbers'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				)
			)
		)
	);
};

exports.default = SetNotation;

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetBuilder = exports.SetNotation = undefined;

var _SetNotation2 = __webpack_require__(167);

var _SetNotation3 = _interopRequireDefault(_SetNotation2);

var _SetBuilder2 = __webpack_require__(166);

var _SetBuilder3 = _interopRequireDefault(_SetBuilder2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SetNotation = _SetNotation3.default;
exports.SetBuilder = _SetBuilder3.default;

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(14);

var _constants = __webpack_require__(9);

var _Functions = __webpack_require__(165);

var _CoordinateGeometry = __webpack_require__(160);

var _Sets = __webpack_require__(168);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var worksheetRoutes = _react2.default.createElement(
	_reactRouter.Route,
	{ path: _constants.WORKSHEETS_URL },
	_react2.default.createElement(_reactRouter.Route, { path: 'Sets/SetNotation', component: _Sets.SetNotation }),
	_react2.default.createElement(_reactRouter.Route, { path: 'Sets/SetBuilder', component: _Sets.SetBuilder }),
	_react2.default.createElement(_reactRouter.Route, { path: 'Functions/AbsoluteValueFunctions', component: _Functions.AbsoluteValueFunctions }),
	_react2.default.createElement(_reactRouter.Route, { path: 'Functions/ReciprocalFunctions', component: _Functions.ReciprocalFunctions }),
	_react2.default.createElement(_reactRouter.Route, { path: 'Functions/CompositeFunctions', component: _Functions.CompositeFunctions }),
	_react2.default.createElement(_reactRouter.Route, { path: 'Functions/InverseFunctions', component: _Functions.InverseFunctions }),
	_react2.default.createElement(_reactRouter.Route, { path: 'CoordinateGeometry/CirclesEllipsesAndHyperbolas', component: _CoordinateGeometry.CirclesEllipsesAndHyperbolas })
);

exports.default = worksheetRoutes;

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.registerUser = registerUser;
exports.signout = signout;
exports.signin = signin;

var _constants = __webpack_require__(9);

var _api = __webpack_require__(54);

// Register user in database using firebase, returns promise for chaining
function registerUser(email, password) {
	return (0, _constants.firebaseAuth)().createUserWithEmailAndPassword(email, password).then(function (_ref) {
		var uid = _ref.uid;
		return uid;
	});
}

function signout() {
	return (0, _constants.firebaseAuth)().signOut().catch(function (error) {
		return console.warn(error);
	});
}

function signin(email, password) {
	return (0, _constants.firebaseAuth)().signInWithEmailAndPassword(email, password).then(function (_ref2) {
		var uid = _ref2.uid;
		return (0, _api.fetchUser)(uid);
	});
}

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.formatUserDetails = formatUserDetails;
function valOrNull(val) {
	return val ? val : null;
}

/*
	Takes details from form single layer key-value pairs and formats into a user object
*/
function formatUserDetails(details) {
	return {
		info: {
			uid: valOrNull(details.uid),
			name: valOrNull(details.name),
			email: valOrNull(details.email)
		}
	};
}

/***/ },

/***/ 172:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 173:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 174:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var firebase = __webpack_require__(34);
(function(){
/*! @license Firebase v3.6.5
    Build: 3.6.5-rc.1
    Terms: https://firebase.google.com/terms/ */
(function(){var h,aa=aa||{},l=this,ba=function(){},m=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a){return null===a},da=function(a){return"array"==m(a)},ea=function(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length},p=function(a){return"string"==typeof a},fa=function(a){return"number"==typeof a},q=function(a){return"function"==m(a)},ga=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ha=function(a,b,
c){return a.call.apply(a.bind,arguments)},ia=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return r.apply(null,arguments)},ja=function(a,b){var c=Array.prototype.slice.call(arguments,
1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},ka=Date.now||function(){return+new Date},t=function(a,b){function c(){}c.prototype=b.prototype;a.hd=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Bf=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};t(u,Error);u.prototype.name="CustomError";var la=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},ma=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},na=/&/g,oa=/</g,pa=/>/g,qa=/"/g,ra=/'/g,sa=/\x00/g,ta=/[\x00&<>"']/,v=function(a,b){return-1!=a.indexOf(b)},ua=function(a,b){return a<b?-1:a>b?1:0};var va=function(a,b){b.unshift(a);u.call(this,la.apply(null,b));b.shift()};t(va,u);va.prototype.name="AssertionError";
var wa=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new va(""+e,f||[]);},w=function(a,b,c){a||wa("",null,b,Array.prototype.slice.call(arguments,2))},xa=function(a,b){throw new va("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},ya=function(a,b,c){fa(a)||wa("Expected number but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2));return a},za=function(a,b,c){p(a)||wa("Expected string but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,
2))},Aa=function(a,b,c){q(a)||wa("Expected function but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2))};var Ba=Array.prototype.indexOf?function(a,b,c){w(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){w(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ca=function(a,b){for(var c=p(a)?
a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Da=Array.prototype.map?function(a,b,c){w(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ea=Array.prototype.some?function(a,b,c){w(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
Ga=function(a){var b;a:{b=Fa;for(var c=a.length,d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:p(a)?a.charAt(b):a[b]},Ha=function(a,b){return 0<=Ba(a,b)},Ja=function(a,b){b=Ba(a,b);var c;(c=0<=b)&&Ia(a,b);return c},Ia=function(a,b){w(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},Ka=function(a,b){var c=0;Ca(a,function(d,e){b.call(void 0,d,e,a)&&Ia(a,e)&&c++})},La=function(a){return Array.prototype.concat.apply(Array.prototype,
arguments)},Ma=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Na=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Oa=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Pa=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Qa=function(a){for(var b in a)return!1;return!0},Ra=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},Sa=function(a){var b={},c;for(c in a)b[c]=a[c];return b},Ta="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
Ua=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ta.length;f++)c=Ta[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Va;a:{var Xa=l.navigator;if(Xa){var Ya=Xa.userAgent;if(Ya){Va=Ya;break a}}Va=""}var z=function(a){return v(Va,a)};var Za=function(a){Za[" "](a);return a};Za[" "]=ba;var ab=function(a,b){var c=$a;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var bb=z("Opera"),A=z("Trident")||z("MSIE"),cb=z("Edge"),db=cb||A,eb=z("Gecko")&&!(v(Va.toLowerCase(),"webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),fb=v(Va.toLowerCase(),"webkit")&&!z("Edge"),gb=function(){var a=l.document;return a?a.documentMode:void 0},hb;
a:{var ib="",jb=function(){var a=Va;if(eb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(cb)return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fb)return/WebKit\/(\S+)/.exec(a);if(bb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();jb&&(ib=jb?jb[1]:"");if(A){var kb=gb();if(null!=kb&&kb>parseFloat(ib)){hb=String(kb);break a}}hb=ib}
var lb=hb,$a={},B=function(a){return ab(a,function(){for(var b=0,c=ma(String(lb)).split("."),d=ma(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=ua(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||ua(0==g[2].length,0==k[2].length)||ua(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})},mb;var nb=l.document;
mb=nb&&A?gb()||("CSS1Compat"==nb.compatMode?parseInt(lb,10):5):void 0;var ob=function(a){return Da(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var pb=null,qb=null,sb=function(a){var b="";rb(a,function(a){b+=String.fromCharCode(a)});return b},rb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=qb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}tb();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=k&&b(g<<6&192|k))}},tb=function(){if(!pb){pb={};qb={};for(var a=0;65>a;a++)pb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
qb[pb[a]]=a,62<=a&&(qb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var ub=function(){this.ya=-1};var xb=function(a,b){this.ya=64;this.Qb=l.Uint8Array?new Uint8Array(this.ya):Array(this.ya);this.vc=this.Va=0;this.h=[];this.Ye=a;this.Bd=b;this.xf=l.Int32Array?new Int32Array(64):Array(64);void 0!==vb||(vb=l.Int32Array?new Int32Array(wb):wb);this.reset()},vb;t(xb,ub);for(var yb=[],zb=0;63>zb;zb++)yb[zb]=0;var Ab=La(128,yb);xb.prototype.reset=function(){this.vc=this.Va=0;this.h=l.Int32Array?new Int32Array(this.Bd):Ma(this.Bd)};
var Bb=function(a){var b=a.Qb;w(b.length==a.ya);for(var c=a.xf,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){var e=c[b-15]|0,d=c[b-2]|0,f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,g=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+g|0}for(var d=a.h[0]|0,e=a.h[1]|0,k=a.h[2]|0,n=a.h[3]|0,y=a.h[4]|0,Eb=a.h[5]|0,Wa=a.h[6]|0,f=a.h[7]|0,b=0;64>b;b++)var oe=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&k^e&k)|0,g=y&Eb^~y&Wa,f=f+((y>>>6|
y<<26)^(y>>>11|y<<21)^(y>>>25|y<<7))|0,g=g+(vb[b]|0)|0,g=f+(g+(c[b]|0)|0)|0,f=Wa,Wa=Eb,Eb=y,y=n+g|0,n=k,k=e,e=d,d=g+oe|0;a.h[0]=a.h[0]+d|0;a.h[1]=a.h[1]+e|0;a.h[2]=a.h[2]+k|0;a.h[3]=a.h[3]+n|0;a.h[4]=a.h[4]+y|0;a.h[5]=a.h[5]+Eb|0;a.h[6]=a.h[6]+Wa|0;a.h[7]=a.h[7]+f|0};
xb.prototype.update=function(a,b){void 0===b&&(b=a.length);var c=0,d=this.Va;if(p(a))for(;c<b;)this.Qb[d++]=a.charCodeAt(c++),d==this.ya&&(Bb(this),d=0);else if(ea(a))for(;c<b;){var e=a[c++];if(!("number"==typeof e&&0<=e&&255>=e&&e==(e|0)))throw Error("message must be a byte array");this.Qb[d++]=e;d==this.ya&&(Bb(this),d=0)}else throw Error("message must be string or array");this.Va=d;this.vc+=b};
xb.prototype.digest=function(){var a=[],b=8*this.vc;56>this.Va?this.update(Ab,56-this.Va):this.update(Ab,this.ya-(this.Va-56));for(var c=63;56<=c;c--)this.Qb[c]=b&255,b/=256;Bb(this);for(c=b=0;c<this.Ye;c++)for(var d=24;0<=d;d-=8)a[b++]=this.h[c]>>d&255;return a};
var wb=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];var Db=function(){xb.call(this,8,Cb)};t(Db,xb);var Cb=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];var Fb=!A||9<=Number(mb),Gb=A&&!B("9");!fb||B("528");eb&&B("1.9b")||A&&B("8")||bb&&B("9.5")||fb&&B("528");eb&&!B("8")||A&&B("9");var Hb=function(){this.Aa=this.Aa;this.gc=this.gc};Hb.prototype.Aa=!1;Hb.prototype.isDisposed=function(){return this.Aa};Hb.prototype.Ra=function(){if(this.gc)for(;this.gc.length;)this.gc.shift()()};var Ib=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.$a=!1;this.Md=!0};Ib.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Md=!1};var Jb=function(a,b){Ib.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.qb=this.state=null;a&&this.init(a,b)};t(Jb,Ib);
Jb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(eb){var e;a:{try{Za(b.nodeName);e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=fb||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=fb||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:
a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.qb=a;a.defaultPrevented&&
this.preventDefault()};Jb.prototype.preventDefault=function(){Jb.hd.preventDefault.call(this);var a=this.qb;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Gb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};Jb.prototype.Ae=function(){return this.qb};var Kb="closure_listenable_"+(1E6*Math.random()|0),Lb=0;var Mb=function(a,b,c,d,e){this.listener=a;this.lc=null;this.src=b;this.type=c;this.capture=!!d;this.Yb=e;this.key=++Lb;this.gb=this.Pb=!1},Nb=function(a){a.gb=!0;a.listener=null;a.lc=null;a.src=null;a.Yb=null};var Ob=function(a){this.src=a;this.C={};this.Lb=0};Ob.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.C[f];a||(a=this.C[f]=[],this.Lb++);var g=Pb(a,b,d,e);-1<g?(b=a[g],c||(b.Pb=!1)):(b=new Mb(b,this.src,f,!!d,e),b.Pb=c,a.push(b));return b};Ob.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.C))return!1;var e=this.C[a];b=Pb(e,b,c,d);return-1<b?(Nb(e[b]),Ia(e,b),0==e.length&&(delete this.C[a],this.Lb--),!0):!1};
var Qb=function(a,b){var c=b.type;c in a.C&&Ja(a.C[c],b)&&(Nb(b),0==a.C[c].length&&(delete a.C[c],a.Lb--))};Ob.prototype.Kc=function(a,b,c,d){a=this.C[a.toString()];var e=-1;a&&(e=Pb(a,b,c,d));return-1<e?a[e]:null};var Pb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.gb&&f.listener==b&&f.capture==!!c&&f.Yb==d)return e}return-1};var Rb="closure_lm_"+(1E6*Math.random()|0),Sb={},Tb=0,Ub=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)Ub(a,b[f],c,d,e);else c=Vb(c),a&&a[Kb]?a.listen(b,c,d,e):Wb(a,b,c,!1,d,e)},Wb=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,k=Xb(a);k||(a[Rb]=k=new Ob(a));c=k.add(b,c,d,e,f);if(!c.lc){d=Yb();c.lc=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Zb(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
Tb++}},Yb=function(){var a=$b,b=Fb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},ac=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)ac(a,b[f],c,d,e);else c=Vb(c),a&&a[Kb]?bc(a,b,c,d,e):Wb(a,b,c,!0,d,e)},cc=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)cc(a,b[f],c,d,e);else c=Vb(c),a&&a[Kb]?a.aa.remove(String(b),c,d,e):a&&(a=Xb(a))&&(b=a.Kc(b,c,!!d,e))&&dc(b)},dc=function(a){if(!fa(a)&&a&&!a.gb){var b=a.src;if(b&&
b[Kb])Qb(b.aa,a);else{var c=a.type,d=a.lc;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(Zb(c),d);Tb--;(c=Xb(b))?(Qb(c,a),0==c.Lb&&(c.src=null,b[Rb]=null)):Nb(a)}}},Zb=function(a){return a in Sb?Sb[a]:Sb[a]="on"+a},fc=function(a,b,c,d){var e=!0;if(a=Xb(a))if(b=a.C[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.gb&&(f=ec(f,d),e=e&&!1!==f)}return e},ec=function(a,b){var c=a.listener,d=a.Yb||a.src;a.Pb&&dc(a);return c.call(d,
b)},$b=function(a,b){if(a.gb)return!0;if(!Fb){if(!b)a:{b=["window","event"];for(var c=l,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new Jb(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.$a&&0<=e;e--){b.currentTarget=d[e];var f=fc(d[e],a,!0,b),c=c&&f}for(e=0;!b.$a&&e<d.length;e++)b.currentTarget=
d[e],f=fc(d[e],a,!1,b),c=c&&f}return c}return ec(a,new Jb(b,this))},Xb=function(a){a=a[Rb];return a instanceof Ob?a:null},gc="__closure_events_fn_"+(1E9*Math.random()>>>0),Vb=function(a){w(a,"Listener can not be null.");if(q(a))return a;w(a.handleEvent,"An object listener must have handleEvent method.");a[gc]||(a[gc]=function(b){return a.handleEvent(b)});return a[gc]};var hc=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var jc=function(){this.sc="";this.ge=ic};jc.prototype.bc=!0;jc.prototype.Wb=function(){return this.sc};jc.prototype.toString=function(){return"Const{"+this.sc+"}"};var kc=function(a){if(a instanceof jc&&a.constructor===jc&&a.ge===ic)return a.sc;xa("expected object of type Const, got '"+a+"'");return"type_error:Const"},ic={},lc=function(a){var b=new jc;b.sc=a;return b};lc("");var nc=function(){this.ma="";this.fe=mc};nc.prototype.bc=!0;nc.prototype.Wb=function(){return this.ma};nc.prototype.toString=function(){return"SafeUrl{"+this.ma+"}"};
var oc=function(a){if(a instanceof nc&&a.constructor===nc&&a.fe===mc)return a.ma;xa("expected object of type SafeUrl, got '"+a+"' of type "+m(a));return"type_error:SafeUrl"},pc=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,rc=function(a){if(a instanceof nc)return a;a=a.bc?a.Wb():String(a);pc.test(a)||(a="about:invalid#zClosurez");return qc(a)},mc={},qc=function(a){var b=new nc;b.ma=a;return b};qc("about:blank");var sc=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))},tc=function(a){a=String(a);if(sc(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},wc=function(a){var b=[];uc(new vc,a,b);return b.join("")},vc=function(){this.nc=void 0},
uc=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],uc(a,a.nc?a.nc.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),xc(d,c),c.push(":"),uc(a,a.nc?a.nc.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":xc(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},yc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},zc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,xc=function(a,b){b.push('"',a.replace(zc,function(a){var b=yc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),
yc[a]=b);return b}),'"')};var Ac=function(){};Ac.prototype.ld=null;var Bc=function(a){return a.ld||(a.ld=a.Pc())};var Cc,Dc=function(){};t(Dc,Ac);Dc.prototype.Rb=function(){var a=Ec(this);return a?new ActiveXObject(a):new XMLHttpRequest};Dc.prototype.Pc=function(){var a={};Ec(this)&&(a[0]=!0,a[1]=!0);return a};
var Ec=function(a){if(!a.Ad&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.Ad=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.Ad};Cc=new Dc;var Fc=function(){};t(Fc,Ac);Fc.prototype.Rb=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Gc;throw Error("Unsupported browser");};Fc.prototype.Pc=function(){return{}};
var Gc=function(){this.pa=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.pa.onload=r(this.De,this);this.pa.onerror=r(this.xd,this);this.pa.onprogress=r(this.Ee,this);this.pa.ontimeout=r(this.Fe,this)};h=Gc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.pa.open(a,b)};
h.send=function(a){if(a)if("string"==typeof a)this.pa.send(a);else throw Error("Only string data is supported");else this.pa.send()};h.abort=function(){this.pa.abort()};h.setRequestHeader=function(){};h.De=function(){this.status=200;this.responseText=this.pa.responseText;Hc(this,4)};h.xd=function(){this.status=500;this.responseText="";Hc(this,4)};h.Fe=function(){this.xd()};h.Ee=function(){this.status=200;Hc(this,1)};var Hc=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};var Jc=function(){this.jc="";this.he=Ic};Jc.prototype.bc=!0;Jc.prototype.Wb=function(){return this.jc};Jc.prototype.toString=function(){return"TrustedResourceUrl{"+this.jc+"}"};var Ic={};var Lc=function(){this.ma="";this.ee=Kc};Lc.prototype.bc=!0;Lc.prototype.Wb=function(){return this.ma};Lc.prototype.toString=function(){return"SafeHtml{"+this.ma+"}"};var Mc=function(a){if(a instanceof Lc&&a.constructor===Lc&&a.ee===Kc)return a.ma;xa("expected object of type SafeHtml, got '"+a+"' of type "+m(a));return"type_error:SafeHtml"},Kc={};Lc.prototype.Me=function(a){this.ma=a;return this};!eb&&!A||A&&9<=Number(mb)||eb&&B("1.9.1");A&&B("9");var Oc=function(a,b){Na(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Nc.hasOwnProperty(d)?a.setAttribute(Nc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Nc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Pc=function(a,b,c){this.Qe=c;this.oe=a;this.df=b;this.fc=0;this.Zb=null};Pc.prototype.get=function(){var a;0<this.fc?(this.fc--,a=this.Zb,this.Zb=a.next,a.next=null):a=this.oe();return a};Pc.prototype.put=function(a){this.df(a);this.fc<this.Qe&&(this.fc++,a.next=this.Zb,this.Zb=a)};var Qc=function(a){l.setTimeout(function(){throw a;},0)},Rc,Sc=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!z("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
a=r(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!z("Trident")&&!z("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.od;c.od=null;a()}};return function(a){d.next={od:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var Tc=function(){this.yc=this.La=null},Vc=new Pc(function(){return new Uc},function(a){a.reset()},100);Tc.prototype.add=function(a,b){var c=Vc.get();c.set(a,b);this.yc?this.yc.next=c:(w(!this.La),this.La=c);this.yc=c};Tc.prototype.remove=function(){var a=null;this.La&&(a=this.La,this.La=this.La.next,this.La||(this.yc=null),a.next=null);return a};var Uc=function(){this.next=this.scope=this.Jc=null};Uc.prototype.set=function(a,b){this.Jc=a;this.scope=b;this.next=null};
Uc.prototype.reset=function(){this.next=this.scope=this.Jc=null};var $c=function(a,b){Wc||Xc();Yc||(Wc(),Yc=!0);Zc.add(a,b)},Wc,Xc=function(){if(-1!=String(l.Promise).indexOf("[native code]")){var a=l.Promise.resolve(void 0);Wc=function(){a.then(ad)}}else Wc=function(){var a=ad;!q(l.setImmediate)||l.Window&&l.Window.prototype&&!z("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Rc||(Rc=Sc()),Rc(a)):l.setImmediate(a)}},Yc=!1,Zc=new Tc,ad=function(){for(var a;a=Zc.remove();){try{a.Jc.call(a.scope)}catch(b){Qc(b)}Vc.put(a)}Yc=!1};var bd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},cd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var C=function(a,b){this.M=0;this.na=void 0;this.Pa=this.ja=this.s=null;this.Xb=this.Ic=!1;if(a!=ba)try{var c=this;a.call(b,function(a){dd(c,2,a)},function(a){if(!(a instanceof ed))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}dd(c,3,a)})}catch(d){dd(this,3,d)}},fd=function(){this.next=this.context=this.Xa=this.Fa=this.child=null;this.ob=!1};fd.prototype.reset=function(){this.context=this.Xa=this.Fa=this.child=null;this.ob=!1};
var gd=new Pc(function(){return new fd},function(a){a.reset()},100),hd=function(a,b,c){var d=gd.get();d.Fa=a;d.Xa=b;d.context=c;return d},D=function(a){if(a instanceof C)return a;var b=new C(ba);dd(b,2,a);return b},E=function(a){return new C(function(b,c){c(a)})},jd=function(a,b,c){id(a,b,c,null)||$c(ja(b,a))},kd=function(a){return new C(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{ye:!0,value:f}:{ye:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],jd(g,ja(e,f,!0),
ja(e,f,!1));else b(d)})};C.prototype.then=function(a,b,c){null!=a&&Aa(a,"opt_onFulfilled should be a function.");null!=b&&Aa(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return ld(this,q(a)?a:null,q(b)?b:null,c)};bd(C);var nd=function(a,b){b=hd(b,b,void 0);b.ob=!0;md(a,b);return a};C.prototype.c=function(a,b){return ld(this,null,a,b)};C.prototype.cancel=function(a){0==this.M&&$c(function(){var b=new ed(a);od(this,b)},this)};
var od=function(a,b){if(0==a.M)if(a.s){var c=a.s;if(c.ja){for(var d=0,e=null,f=null,g=c.ja;g&&(g.ob||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.M&&1==d?od(c,b):(f?(d=f,w(c.ja),w(null!=d),d.next==c.Pa&&(c.Pa=d),d.next=d.next.next):pd(c),qd(c,e,3,b)))}a.s=null}else dd(a,3,b)},md=function(a,b){a.ja||2!=a.M&&3!=a.M||rd(a);w(null!=b.Fa);a.Pa?a.Pa.next=b:a.ja=b;a.Pa=b},ld=function(a,b,c,d){var e=hd(null,null,null);e.child=new C(function(a,g){e.Fa=b?function(c){try{var e=b.call(d,c);a(e)}catch(y){g(y)}}:
a;e.Xa=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof ed?g(b):a(e)}catch(y){g(y)}}:g});e.child.s=a;md(a,e);return e.child};C.prototype.qf=function(a){w(1==this.M);this.M=0;dd(this,2,a)};C.prototype.rf=function(a){w(1==this.M);this.M=0;dd(this,3,a)};
var dd=function(a,b,c){0==a.M&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.M=1,id(c,a.qf,a.rf,a)||(a.na=c,a.M=b,a.s=null,rd(a),3!=b||c instanceof ed||sd(a,c)))},id=function(a,b,c,d){if(a instanceof C)return null!=b&&Aa(b,"opt_onFulfilled should be a function."),null!=c&&Aa(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),md(a,hd(b||ba,c||null,d)),!0;if(cd(a))return a.then(b,c,d),!0;if(ga(a))try{var e=a.then;if(q(e))return td(a,
e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},td=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(n){k(n)}},rd=function(a){a.Ic||(a.Ic=!0,$c(a.te,a))},pd=function(a){var b=null;a.ja&&(b=a.ja,a.ja=b.next,b.next=null);a.ja||(a.Pa=null);null!=b&&w(null!=b.Fa);return b};C.prototype.te=function(){for(var a;a=pd(this);)qd(this,a,this.M,this.na);this.Ic=!1};
var qd=function(a,b,c,d){if(3==c&&b.Xa&&!b.ob)for(;a&&a.Xb;a=a.s)a.Xb=!1;if(b.child)b.child.s=null,ud(b,c,d);else try{b.ob?b.Fa.call(b.context):ud(b,c,d)}catch(e){vd.call(null,e)}gd.put(b)},ud=function(a,b,c){2==b?a.Fa.call(a.context,c):a.Xa&&a.Xa.call(a.context,c)},sd=function(a,b){a.Xb=!0;$c(function(){a.Xb&&vd.call(null,b)})},vd=Qc,ed=function(a){u.call(this,a)};t(ed,u);ed.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var wd=function(a,b){this.pc=[];this.Gd=a;this.rd=b||null;this.sb=this.Ta=!1;this.na=void 0;this.fd=this.kd=this.Dc=!1;this.wc=0;this.s=null;this.Ec=0};wd.prototype.cancel=function(a){if(this.Ta)this.na instanceof wd&&this.na.cancel();else{if(this.s){var b=this.s;delete this.s;a?b.cancel(a):(b.Ec--,0>=b.Ec&&b.cancel())}this.Gd?this.Gd.call(this.rd,this):this.fd=!0;this.Ta||xd(this,new yd)}};wd.prototype.pd=function(a,b){this.Dc=!1;zd(this,a,b)};
var zd=function(a,b,c){a.Ta=!0;a.na=c;a.sb=!b;Ad(a)},Cd=function(a){if(a.Ta){if(!a.fd)throw new Bd;a.fd=!1}};wd.prototype.callback=function(a){Cd(this);Dd(a);zd(this,!0,a)};
var xd=function(a,b){Cd(a);Dd(b);zd(a,!1,b)},Dd=function(a){w(!(a instanceof wd),"An execution sequence may not be initiated with a blocking Deferred.")},Hd=function(a){var b=Ed("https://apis.google.com/js/client.js?onload="+Fd);Gd(b,null,a,void 0)},Gd=function(a,b,c,d){w(!a.kd,"Blocking Deferreds can not be re-used");a.pc.push([b,c,d]);a.Ta&&Ad(a)};wd.prototype.then=function(a,b,c){var d,e,f=new C(function(a,b){d=a;e=b});Gd(this,d,function(a){a instanceof yd?f.cancel():e(a)});return f.then(a,b,c)};
bd(wd);
var Id=function(a){return Ea(a.pc,function(a){return q(a[1])})},Ad=function(a){if(a.wc&&a.Ta&&Id(a)){var b=a.wc,c=Jd[b];c&&(l.clearTimeout(c.tb),delete Jd[b]);a.wc=0}a.s&&(a.s.Ec--,delete a.s);for(var b=a.na,d=c=!1;a.pc.length&&!a.Dc;){var e=a.pc.shift(),f=e[0],g=e[1],e=e[2];if(f=a.sb?g:f)try{var k=f.call(e||a.rd,b);void 0!==k&&(a.sb=a.sb&&(k==b||k instanceof Error),a.na=b=k);if(cd(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.Dc=!0}catch(n){b=n,a.sb=!0,Id(a)||(c=!0)}}a.na=b;d&&
(k=r(a.pd,a,!0),d=r(a.pd,a,!1),b instanceof wd?(Gd(b,k,d),b.kd=!0):b.then(k,d));c&&(b=new Kd(b),Jd[b.tb]=b,a.wc=b.tb)},Bd=function(){u.call(this)};t(Bd,u);Bd.prototype.message="Deferred has already fired";Bd.prototype.name="AlreadyCalledError";var yd=function(){u.call(this)};t(yd,u);yd.prototype.message="Deferred was canceled";yd.prototype.name="CanceledError";var Kd=function(a){this.tb=l.setTimeout(r(this.pf,this),0);this.O=a};
Kd.prototype.pf=function(){w(Jd[this.tb],"Cannot throw an error that is not scheduled.");delete Jd[this.tb];throw this.O;};var Jd={};var Ed=function(a){var b=new Jc;b.jc=a;return Ld(b)},Ld=function(a){var b={},c=b.document||document,d;a instanceof Jc&&a.constructor===Jc&&a.he===Ic?d=a.jc:(xa("expected object of type TrustedResourceUrl, got '"+a+"' of type "+m(a)),d="type_error:TrustedResourceUrl");var e=document.createElement("SCRIPT");a={Nd:e,Kb:void 0};var f=new wd(Md,a),g=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(g=window.setTimeout(function(){Nd(e,!0);xd(f,new Od(1,"Timeout reached for loading script "+d))},k),a.Kb=g);e.onload=
e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Nd(e,b.Cf||!1,g),f.callback(null))};e.onerror=function(){Nd(e,!0,g);xd(f,new Od(0,"Error while loading script "+d))};a=b.attributes||{};Ua(a,{type:"text/javascript",charset:"UTF-8",src:d});Oc(e,a);Pd(c).appendChild(e);return f},Pd=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},Md=function(){if(this&&this.Nd){var a=this.Nd;a&&"SCRIPT"==a.tagName&&
Nd(a,!0,this.Kb)}},Nd=function(a,b,c){null!=c&&l.clearTimeout(c);a.onload=ba;a.onerror=ba;a.onreadystatechange=ba;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)},Od=function(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a};t(Od,u);var Qd=function(){Hb.call(this);this.aa=new Ob(this);this.ke=this;this.Vc=null};t(Qd,Hb);Qd.prototype[Kb]=!0;h=Qd.prototype;h.addEventListener=function(a,b,c,d){Ub(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){cc(this,a,b,c,d)};
h.dispatchEvent=function(a){Rd(this);var b,c=this.Vc;if(c){b=[];for(var d=1;c;c=c.Vc)b.push(c),w(1E3>++d,"infinite loop")}c=this.ke;d=a.type||a;if(p(a))a=new Ib(a,c);else if(a instanceof Ib)a.target=a.target||c;else{var e=a;a=new Ib(d,c);Ua(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.$a&&0<=g;g--)f=a.currentTarget=b[g],e=Sd(f,d,!0,a)&&e;a.$a||(f=a.currentTarget=c,e=Sd(f,d,!0,a)&&e,a.$a||(e=Sd(f,d,!1,a)&&e));if(b)for(g=0;!a.$a&&g<b.length;g++)f=a.currentTarget=b[g],e=Sd(f,d,!1,a)&&e;return e};
h.Ra=function(){Qd.hd.Ra.call(this);if(this.aa){var a=this.aa,b=0,c;for(c in a.C){for(var d=a.C[c],e=0;e<d.length;e++)++b,Nb(d[e]);delete a.C[c];a.Lb--}}this.Vc=null};h.listen=function(a,b,c,d){Rd(this);return this.aa.add(String(a),b,!1,c,d)};
var bc=function(a,b,c,d,e){a.aa.add(String(b),c,!0,d,e)},Sd=function(a,b,c,d){b=a.aa.C[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.gb&&g.capture==c){var k=g.listener,n=g.Yb||g.src;g.Pb&&Qb(a.aa,g);e=!1!==k.call(n,d)&&e}}return e&&0!=d.Md};Qd.prototype.Kc=function(a,b,c,d){return this.aa.Kc(String(a),b,c,d)};var Rd=function(a){w(a.aa,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var Td="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},Ud=function(){};Ud.prototype.next=function(){throw Td;};Ud.prototype.je=function(){return this};var Vd=function(a,b){this.ba={};this.w=[];this.nb=this.o=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};Vd.prototype.Y=function(){Wd(this);for(var a=[],b=0;b<this.w.length;b++)a.push(this.ba[this.w[b]]);return a};Vd.prototype.ka=function(){Wd(this);return this.w.concat()};Vd.prototype.pb=function(a){return Xd(this.ba,a)};
Vd.prototype.remove=function(a){return Xd(this.ba,a)?(delete this.ba[a],this.o--,this.nb++,this.w.length>2*this.o&&Wd(this),!0):!1};var Wd=function(a){if(a.o!=a.w.length){for(var b=0,c=0;b<a.w.length;){var d=a.w[b];Xd(a.ba,d)&&(a.w[c++]=d);b++}a.w.length=c}if(a.o!=a.w.length){for(var e={},c=b=0;b<a.w.length;)d=a.w[b],Xd(e,d)||(a.w[c++]=d,e[d]=1),b++;a.w.length=c}};h=Vd.prototype;h.get=function(a,b){return Xd(this.ba,a)?this.ba[a]:b};
h.set=function(a,b){Xd(this.ba,a)||(this.o++,this.w.push(a),this.nb++);this.ba[a]=b};h.addAll=function(a){var b;a instanceof Vd?(b=a.ka(),a=a.Y()):(b=Pa(a),a=Oa(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.ka(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new Vd(this)};
h.je=function(a){Wd(this);var b=0,c=this.nb,d=this,e=new Ud;e.next=function(){if(c!=d.nb)throw Error("The map has changed since the iterator was created");if(b>=d.w.length)throw Td;var e=d.w[b++];return a?e:d.ba[e]};return e};var Xd=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Yd=function(a){if(a.Y&&"function"==typeof a.Y)return a.Y();if(p(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Oa(a)},Zd=function(a){if(a.ka&&"function"==typeof a.ka)return a.ka();if(!a.Y||"function"!=typeof a.Y){if(ea(a)||p(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return Pa(a)}},$d=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ea(a)||p(a))x(a,b,void 0);else for(var c=Zd(a),d=Yd(a),e=
d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};var ae=function(a,b,c,d,e){this.reset(a,b,c,d,e)};ae.prototype.td=null;var be=0;ae.prototype.reset=function(a,b,c,d,e){"number"==typeof e||be++;d||ka();this.xb=a;this.Ve=b;delete this.td};ae.prototype.Qd=function(a){this.xb=a};var ce=function(a){this.We=a;this.yd=this.Fc=this.xb=this.s=null},de=function(a,b){this.name=a;this.value=b};de.prototype.toString=function(){return this.name};var ee=new de("SEVERE",1E3),fe=new de("CONFIG",700),ge=new de("FINE",500);ce.prototype.getParent=function(){return this.s};ce.prototype.Qd=function(a){this.xb=a};var he=function(a){if(a.xb)return a.xb;if(a.s)return he(a.s);xa("Root logger has no level set.");return null};
ce.prototype.log=function(a,b,c){if(a.value>=he(this).value)for(q(b)&&(b=b()),a=new ae(a,String(b),this.We),c&&(a.td=c),c="log:"+a.Ve,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;){var d=c,e=a;if(d.yd)for(var f=0;b=d.yd[f];f++)b(e);c=c.getParent()}};
var ie={},je=null,ke=function(a){je||(je=new ce(""),ie[""]=je,je.Qd(fe));var b;if(!(b=ie[a])){b=new ce(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=ke(a.substr(0,c));c.Fc||(c.Fc={});c.Fc[d]=b;b.s=c;ie[a]=b}return b};var F=function(a,b){a&&a.log(ge,b,void 0)};var le=function(a,b,c){if(q(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)},me=function(a){var b=null;return(new C(function(c,d){b=le(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).c(function(a){l.clearTimeout(b);throw a;})};var ne=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,pe=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e,f=null;0<=d?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}};var G=function(a){Qd.call(this);this.headers=new Vd;this.Ac=a||null;this.qa=!1;this.zc=this.b=null;this.wb=this.Ed=this.ec="";this.Ca=this.Nc=this.cc=this.Hc=!1;this.kb=0;this.uc=null;this.Ld="";this.xc=this.bf=this.ae=!1};t(G,Qd);var qe=G.prototype,re=ke("goog.net.XhrIo");qe.U=re;var se=/^https?$/i,te=["POST","PUT"];
G.prototype.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ec+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ec=a;this.wb="";this.Ed=b;this.Hc=!1;this.qa=!0;this.b=this.Ac?this.Ac.Rb():Cc.Rb();this.zc=this.Ac?Bc(this.Ac):Bc(Cc);this.b.onreadystatechange=r(this.Id,this);this.bf&&"onprogress"in this.b&&(this.b.onprogress=r(function(a){this.Hd(a,!0)},this),this.b.upload&&(this.b.upload.onprogress=r(this.Hd,this)));try{F(this.U,ue(this,"Opening Xhr")),
this.Nc=!0,this.b.open(b,String(a),!0),this.Nc=!1}catch(f){F(this.U,ue(this,"Error opening Xhr: "+f.message));this.O(5,f);return}a=c||"";var e=this.headers.clone();d&&$d(d,function(a,b){e.set(b,a)});d=Ga(e.ka());c=l.FormData&&a instanceof l.FormData;!Ha(te,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);this.Ld&&(this.b.responseType=this.Ld);"withCredentials"in this.b&&this.b.withCredentials!==this.ae&&(this.b.withCredentials=
this.ae);try{ve(this),0<this.kb&&(this.xc=we(this.b),F(this.U,ue(this,"Will abort after "+this.kb+"ms if incomplete, xhr2 "+this.xc)),this.xc?(this.b.timeout=this.kb,this.b.ontimeout=r(this.Kb,this)):this.uc=le(this.Kb,this.kb,this)),F(this.U,ue(this,"Sending request")),this.cc=!0,this.b.send(a),this.cc=!1}catch(f){F(this.U,ue(this,"Send error: "+f.message)),this.O(5,f)}};var we=function(a){return A&&B(9)&&fa(a.timeout)&&void 0!==a.ontimeout},Fa=function(a){return"content-type"==a.toLowerCase()};
G.prototype.Kb=function(){"undefined"!=typeof aa&&this.b&&(this.wb="Timed out after "+this.kb+"ms, aborting",F(this.U,ue(this,this.wb)),this.dispatchEvent("timeout"),this.abort(8))};G.prototype.O=function(a,b){this.qa=!1;this.b&&(this.Ca=!0,this.b.abort(),this.Ca=!1);this.wb=b;xe(this);ye(this)};var xe=function(a){a.Hc||(a.Hc=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
G.prototype.abort=function(){this.b&&this.qa&&(F(this.U,ue(this,"Aborting")),this.qa=!1,this.Ca=!0,this.b.abort(),this.Ca=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ye(this))};G.prototype.Ra=function(){this.b&&(this.qa&&(this.qa=!1,this.Ca=!0,this.b.abort(),this.Ca=!1),ye(this,!0));G.hd.Ra.call(this)};G.prototype.Id=function(){this.isDisposed()||(this.Nc||this.cc||this.Ca?ze(this):this.$e())};G.prototype.$e=function(){ze(this)};
var ze=function(a){if(a.qa&&"undefined"!=typeof aa)if(a.zc[1]&&4==Ae(a)&&2==Be(a))F(a.U,ue(a,"Local request error detected and ignored"));else if(a.cc&&4==Ae(a))le(a.Id,0,a);else if(a.dispatchEvent("readystatechange"),4==Ae(a)){F(a.U,ue(a,"Request complete"));a.qa=!1;try{var b=Be(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.ec).match(ne)[1]||null;if(!f&&l.self&&l.self.location)var g=l.self.location.protocol,
f=g.substr(0,g.length-1);e=!se.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{var k;try{k=2<Ae(a)?a.b.statusText:""}catch(n){F(a.U,"Can not get status: "+n.message),k=""}a.wb=k+" ["+Be(a)+"]";xe(a)}}finally{ye(a)}}};G.prototype.Hd=function(a,b){w("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Ce(a,"progress"));this.dispatchEvent(Ce(a,b?"downloadprogress":"uploadprogress"))};
var Ce=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},ye=function(a,b){if(a.b){ve(a);var c=a.b,d=a.zc[0]?ba:null;a.b=null;a.zc=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.U)&&a.log(ee,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},ve=function(a){a.b&&a.xc&&(a.b.ontimeout=null);fa(a.uc)&&(l.clearTimeout(a.uc),a.uc=null)},Ae=function(a){return a.b?a.b.readyState:0},Be=function(a){try{return 2<Ae(a)?
a.b.status:-1}catch(b){return-1}},De=function(a){try{return a.b?a.b.responseText:""}catch(b){return F(a.U,"Can not get responseText: "+b.message),""}},ue=function(a,b){return b+" ["+a.Ed+" "+a.ec+" "+Be(a)+"]"};var Ee=function(a,b){this.$=this.Ja=this.da="";this.Za=null;this.Ba=this.sa="";this.R=this.Pe=!1;var c;a instanceof Ee?(this.R=void 0!==b?b:a.R,Fe(this,a.da),c=a.Ja,H(this),this.Ja=c,Ge(this,a.$),He(this,a.Za),Ie(this,a.sa),Je(this,a.W.clone()),a=a.Ba,H(this),this.Ba=a):a&&(c=String(a).match(ne))?(this.R=!!b,Fe(this,c[1]||"",!0),a=c[2]||"",H(this),this.Ja=Ke(a),Ge(this,c[3]||"",!0),He(this,c[4]),Ie(this,c[5]||"",!0),Je(this,c[6]||"",!0),a=c[7]||"",H(this),this.Ba=Ke(a)):(this.R=!!b,this.W=new I(null,
0,this.R))};Ee.prototype.toString=function(){var a=[],b=this.da;b&&a.push(Le(b,Me,!0),":");var c=this.$;if(c||"file"==b)a.push("//"),(b=this.Ja)&&a.push(Le(b,Me,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.Za,null!=c&&a.push(":",String(c));if(c=this.sa)this.$&&"/"!=c.charAt(0)&&a.push("/"),a.push(Le(c,"/"==c.charAt(0)?Ne:Oe,!0));(c=this.W.toString())&&a.push("?",c);(c=this.Ba)&&a.push("#",Le(c,Pe));return a.join("")};
Ee.prototype.resolve=function(a){var b=this.clone(),c=!!a.da;c?Fe(b,a.da):c=!!a.Ja;if(c){var d=a.Ja;H(b);b.Ja=d}else c=!!a.$;c?Ge(b,a.$):c=null!=a.Za;d=a.sa;if(c)He(b,a.Za);else if(c=!!a.sa){if("/"!=d.charAt(0))if(this.$&&!this.sa)d="/"+d;else{var e=b.sa.lastIndexOf("/");-1!=e&&(d=b.sa.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(v(e,"./")||v(e,"/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||
1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?Ie(b,d):c=""!==a.W.toString();c?Je(b,a.W.clone()):c=!!a.Ba;c&&(a=a.Ba,H(b),b.Ba=a);return b};Ee.prototype.clone=function(){return new Ee(this)};
var Fe=function(a,b,c){H(a);a.da=c?Ke(b,!0):b;a.da&&(a.da=a.da.replace(/:$/,""))},Ge=function(a,b,c){H(a);a.$=c?Ke(b,!0):b},He=function(a,b){H(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Za=b}else a.Za=null},Ie=function(a,b,c){H(a);a.sa=c?Ke(b,!0):b},Je=function(a,b,c){H(a);b instanceof I?(a.W=b,a.W.ed(a.R)):(c||(b=Le(b,Qe)),a.W=new I(b,0,a.R))},J=function(a,b,c){H(a);a.W.set(b,c)},Re=function(a,b){return a.W.get(b)},Se=function(a,b){H(a);a.W.remove(b)},H=function(a){if(a.Pe)throw Error("Tried to modify a read-only Uri");
};Ee.prototype.ed=function(a){this.R=a;this.W&&this.W.ed(a);return this};
var Te=function(a){return a instanceof Ee?a.clone():new Ee(a,void 0)},Ue=function(a,b){var c=new Ee(null,void 0);Fe(c,"https");a&&Ge(c,a);b&&Ie(c,b);return c},Ke=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Le=function(a,b,c){return p(a)?(a=encodeURI(a).replace(b,Ve),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},Ve=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Me=/[#\/\?@]/g,Oe=/[\#\?:]/g,Ne=/[\#\?]/g,Qe=/[\#\?@]/g,
Pe=/#/g,I=function(a,b,c){this.o=this.l=null;this.N=a||null;this.R=!!c},We=function(a){a.l||(a.l=new Vd,a.o=0,a.N&&pe(a.N,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},Ye=function(a){var b=Zd(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new I(null,0,void 0);a=Yd(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];da(f)?Xe(c,e,f):c.add(e,f)}return c};h=I.prototype;
h.add=function(a,b){We(this);this.N=null;a=this.P(a);var c=this.l.get(a);c||this.l.set(a,c=[]);c.push(b);this.o=ya(this.o)+1;return this};h.remove=function(a){We(this);a=this.P(a);return this.l.pb(a)?(this.N=null,this.o=ya(this.o)-this.l.get(a).length,this.l.remove(a)):!1};h.pb=function(a){We(this);a=this.P(a);return this.l.pb(a)};h.ka=function(){We(this);for(var a=this.l.Y(),b=this.l.ka(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.Y=function(a){We(this);var b=[];if(p(a))this.pb(a)&&(b=La(b,this.l.get(this.P(a))));else{a=this.l.Y();for(var c=0;c<a.length;c++)b=La(b,a[c])}return b};h.set=function(a,b){We(this);this.N=null;a=this.P(a);this.pb(a)&&(this.o=ya(this.o)-this.l.get(a).length);this.l.set(a,[b]);this.o=ya(this.o)+1;return this};h.get=function(a,b){a=a?this.Y(a):[];return 0<a.length?String(a[0]):b};var Xe=function(a,b,c){a.remove(b);0<c.length&&(a.N=null,a.l.set(a.P(b),Ma(c)),a.o=ya(a.o)+c.length)};
I.prototype.toString=function(){if(this.N)return this.N;if(!this.l)return"";for(var a=[],b=this.l.ka(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.Y(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.N=a.join("&")};I.prototype.clone=function(){var a=new I;a.N=this.N;this.l&&(a.l=this.l.clone(),a.o=this.o);return a};I.prototype.P=function(a){a=String(a);this.R&&(a=a.toLowerCase());return a};
I.prototype.ed=function(a){a&&!this.R&&(We(this),this.N=null,this.l.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),Xe(this,b,a))},this));this.R=a};var Ze=function(){var a=K();return A&&!!mb&&11==mb||/Edge\/\d+/.test(a)},$e=function(){return l.window&&l.window.location.href||""},af=function(a,b){b=b||l.window;var c="about:blank";a&&(c=oc(rc(a)));b.location.href=c},bf=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):da(a[d])?Ra(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<bf(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},df=function(){var a;
a=K();a="Chrome"!=cf(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!A||!mb||9<mb},ef=function(a){a=(a||K()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1},ff=function(a){a=a||l.window;try{a.close()}catch(b){}},gf=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-
b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=K().toLowerCase();d&&(b.target=d,v(c,"crios/")&&(b.target="_blank"));"Firefox"==cf(K())&&(a=a||"http://localhost",b.scrollbars=!0);var g;c=a||"about:blank";(d=b)||(d={});a=window;b=c instanceof nc?c:rc("undefined"!=typeof c.href?c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;
default:e.push(g+"="+(d[g]?1:0))}g=e.join(",");(z("iPhone")&&!z("iPod")&&!z("iPad")||z("iPad")||z("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),"undefined"!=typeof HTMLAnchorElement&&"undefined"!=typeof Location&&"undefined"!=typeof Element&&(e=g&&(g instanceof HTMLAnchorElement||!(g instanceof Location||g instanceof Element)),f=ga(g)?g.constructor.displayName||g.constructor.name||Object.prototype.toString.call(g):void 0===g?"undefined":null===g?"null":
typeof g,w(e,"Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s",f)),b=b instanceof nc?b:rc(b),g.href=oc(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),d=oc(b),g&&(db&&v(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=lc("b/12014412, meta tag with sanitized URL"),ta.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(na,
"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(oa,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(pa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(qa,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(ra,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(sa,"&#0;"))),d='<META HTTP-EQUIV="refresh" content="0; url='+d+'">',za(kc(a),"must provide justification"),w(!/^[\s\xa0]*$/.test(kc(a)),"must provide non-empty justification"),g.document.write(Mc((new Lc).Me(d))),g.document.close())):g=a.open(oc(b),c,g);if(g)try{g.focus()}catch(k){}return g},
hf=function(a){return new C(function(b){var c=function(){me(2E3).then(function(){if(!a||a.closed)b();else return c()})};return c()})},jf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kf=function(){var a=null;return(new C(function(b){"complete"==l.document.readyState?b():(a=function(){b()},ac(window,"load",a))})).c(function(b){cc(window,"load",a);throw b;})},mf=function(){return lf(void 0)?kf().then(function(){return new C(function(a,b){var c=l.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},
1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):E(Error("Cordova must run in an Android or iOS file scheme."))},lf=function(a){a=a||K();return!("file:"!==nf()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))},L=function(){return firebase.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":l.hasOwnProperty("process")?"Node":"Browser"},of=function(){var a=L();return"ReactNative"===a||"Node"===a},cf=function(a){var b=a.toLowerCase();if(v(b,"opera/")||v(b,"opr/")||v(b,
"opios/"))return"Opera";if(v(b,"iemobile"))return"IEMobile";if(v(b,"msie")||v(b,"trident/"))return"IE";if(v(b,"edge/"))return"Edge";if(v(b,"firefox/"))return"Firefox";if(v(b,"silk/"))return"Silk";if(v(b,"blackberry"))return"Blackberry";if(v(b,"webos"))return"Webos";if(!v(b,"safari/")||v(b,"chrome/")||v(b,"crios/")||v(b,"android"))if(!v(b,"chrome/")&&!v(b,"crios/")||v(b,"edge/")){if(v(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";
else return"Safari";return"Other"},pf=function(a){var b=L();return("Browser"===b?cf(K()):b)+"/JsCore/"+a},K=function(){return l.navigator&&l.navigator.userAgent||""},M=function(a,b){a=a.split(".");b=b||l;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b},rf=function(){var a;if(a=("http:"===nf()||"https:"===nf()||lf()&&!1)&&!of())a:{try{var b=l.localStorage,c=qf();if(b){b.setItem(c,"1");b.removeItem(c);a=Ze()?!!l.indexedDB:!0;break a}}catch(d){}a=!1}return a},
nf=function(){return l.location&&l.location.protocol||null},sf=function(a){a=a||K();return ef(a)||"Firefox"==cf(a)?!1:!0},tf=function(a){return"undefined"===typeof a?null:wc(a)},uf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b},vf=function(a){if(null!==a){var b;try{b=tc(a)}catch(c){try{b=JSON.parse(a)}catch(d){throw c;}}return b}},qf=function(a){return a?a:""+Math.floor(1E9*Math.random()).toString()},wf=function(a){a=a||K();return"Safari"==
cf(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0},xf=function(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null},yf=function(){return l.navigator&&"boolean"===typeof l.navigator.onLine?l.navigator.onLine:!0},zf=function(a,b,c,d){if(a>b)throw Error("Short delay should be less than long delay!");this.lf=a;this.Ue=b;a=c||K();d=d||L();this.Oe=ef(a)||"ReactNative"===d};
zf.prototype.get=function(){return this.Oe?this.Ue:this.lf};var Af;try{var Bf={};Object.defineProperty(Bf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Bf,"abcd",{configurable:!0,enumerable:!0,value:2});Af=2==Bf.abcd}catch(a){Af=!1}
var N=function(a,b,c){Af?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},Cf=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&N(a,c,b[c])},Df=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},Ef=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0},Ff=function(a){var b=a;if("object"==typeof a&&null!=a){var b="length"in a?[]:{},c;for(c in a)N(b,c,
Ff(a[c]))}return b};var Gf=["client_id","response_type","scope","redirect_uri","state"],Hf={be:{Bb:500,Ab:600,providerId:"facebook.com",oc:Gf},ce:{Bb:500,Ab:620,providerId:"github.com",oc:Gf},de:{Bb:515,Ab:680,providerId:"google.com",oc:Gf},ie:{Bb:485,Ab:705,providerId:"twitter.com",oc:"oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ")}},If=function(a){for(var b in Hf)if(Hf[b].providerId==a)return Hf[b];return null},Jf=function(a){return(a=If(a))&&
a.oc||[]};var O=function(a,b){this.code="auth/"+a;this.message=b||Kf[a]||""};t(O,Error);O.prototype.D=function(){return{name:this.code,code:this.code,message:this.message}};
var Lf=function(a){var b=a&&(a.name||a.code);return b?new O(b.substring(5),a.message):null},Kf={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","cordova-not-ready":"Cordova framework is not ready.",
"cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.",
"expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
"invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
"invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.",
"invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","missing-iframe-start":"An internal error has occurred.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
"app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.",
"operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.",
"provider-already-linked":"User can only be linked to one identity for the given provider.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.",
"user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};var P=function(a,b,c,d,e){this.ga=a;this.F=b||null;this.mb=c||null;this.dd=d||null;this.O=e||null;if(this.mb||this.O){if(this.mb&&this.O)throw new O("invalid-auth-event");if(this.mb&&!this.dd)throw new O("invalid-auth-event");}else throw new O("invalid-auth-event");};P.prototype.Vb=function(){return this.dd};P.prototype.getError=function(){return this.O};P.prototype.D=function(){return{type:this.ga,eventId:this.F,urlResponse:this.mb,sessionId:this.dd,error:this.O&&this.O.D()}};
var Mf=function(a){a=a||{};return a.type?new P(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&Lf(a.error)):null};var Nf=function(a){var b="unauthorized-domain",c=void 0,d=Te(a);a=d.$;d=d.da;"http"!=d&&"https"!=d?b="operation-not-supported-in-this-environment":c=la("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a);O.call(this,b,c)};t(Nf,O);var Of=function(a){this.Te=a.sub;ka();this.Sb=a.email||null};var Pf=function(a,b,c,d){var e={};ga(c)?e=c:b&&p(c)&&p(d)?e={oauthToken:c,oauthTokenSecret:d}:!b&&p(c)&&(e={accessToken:c});if(b||!e.idToken&&!e.accessToken)if(b&&e.oauthToken&&e.oauthTokenSecret)N(this,"accessToken",e.oauthToken),N(this,"secret",e.oauthTokenSecret);else{if(b)throw new O("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");throw new O("argument-error","credential failed: expected 1 argument (the OAuth access token).");}else e.idToken&&N(this,
"idToken",e.idToken),e.accessToken&&N(this,"accessToken",e.accessToken);N(this,"provider",a)};Pf.prototype.Ub=function(a){return Qf(a,Rf(this))};Pf.prototype.Fd=function(a,b){var c=Rf(this);c.idToken=b;return Sf(a,c)};var Rf=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.provider;return{postBody:Ye(b).toString(),requestUri:rf()?$e():"http://localhost"}};
Pf.prototype.D=function(){var a={provider:this.provider};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
var Tf=function(a,b,c){var d=!!b,e=c||[];b=function(){Cf(this,{providerId:a,isOAuthProvider:!0});this.cd=[];this.qd={};"google.com"==a&&this.addScope("profile")};d||(b.prototype.addScope=function(a){Ha(this.cd,a)||this.cd.push(a)});b.prototype.setCustomParameters=function(a){this.qd=Sa(a)};b.prototype.Be=function(){var a=uf(this.qd),b;for(b in a)a[b]=a[b].toString();a=Sa(a);for(b=0;b<e.length;b++){var c=e[b];c in a&&delete a[c]}return a};b.prototype.Ce=function(){return Ma(this.cd)};b.credential=
function(b,c){return new Pf(a,d,b,c)};Cf(b,{PROVIDER_ID:a});return b},Uf=Tf("facebook.com",!1,Jf("facebook.com"));Uf.prototype.addScope=Uf.prototype.addScope||void 0;var Vf=Tf("github.com",!1,Jf("github.com"));Vf.prototype.addScope=Vf.prototype.addScope||void 0;var Wf=Tf("google.com",!1,Jf("google.com"));Wf.prototype.addScope=Wf.prototype.addScope||void 0;
Wf.credential=function(a,b){if(!a&&!b)throw new O("argument-error","credential failed: must provide the ID token and/or the access token.");return new Pf("google.com",!1,ga(a)?a:{idToken:a||null,accessToken:b||null})};var Xf=Tf("twitter.com",!0,Jf("twitter.com")),Yf=function(a,b){this.Sb=a;this.Wc=b;N(this,"provider","password")};Yf.prototype.Ub=function(a){return Q(a,Zf,{email:this.Sb,password:this.Wc})};Yf.prototype.Fd=function(a,b){return Q(a,$f,{idToken:b,email:this.Sb,password:this.Wc})};
Yf.prototype.D=function(){return{email:this.Sb,password:this.Wc}};var ag=function(){Cf(this,{providerId:"password",isOAuthProvider:!1})};Cf(ag,{PROVIDER_ID:"password"});
var bg={Af:ag,be:Uf,de:Wf,ce:Vf,ie:Xf},cg=function(a){var b=a&&a.providerId;if(!b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;for(var e in bg)if(bg[e].PROVIDER_ID==b)try{return bg[e].credential({accessToken:c,idToken:a,oauthToken:c,oauthTokenSecret:d})}catch(f){break}return null},dg=function(a){if(!a.isOAuthProvider)throw new O("invalid-oauth-provider");};var eg=function(a,b,c,d){O.call(this,a,d);N(this,"email",b);N(this,"credential",c)};t(eg,O);eg.prototype.D=function(){var a={code:this.code,message:this.message,email:this.email},b=this.credential&&this.credential.D();b&&(Ua(a,b),a.providerId=b.provider,delete a.provider);return a};var fg=function(a){if(a.code){var b=a.code||"";0==b.indexOf("auth/")&&(b=b.substring(5));return a.email?new eg(b,a.email,cg(a),a.message):new O(b,a.message||void 0)}return null};var gg=function(a){this.zf=a};t(gg,Ac);gg.prototype.Rb=function(){return new this.zf};gg.prototype.Pc=function(){return{}};
var R=function(a,b,c){var d;d="Node"==L();d=l.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new O("internal-error","The XMLHttpRequest compatibility library was not found.");this.j=a;a=b||{};this.gf=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.hf=a.secureTokenTimeout||hg;this.Od=Sa(a.secureTokenHeaders||ig);this.we=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.xe=a.firebaseTimeout||
jg;this.vd=Sa(a.firebaseHeaders||kg);c&&(this.vd["X-Client-Version"]=c,this.Od["X-Client-Version"]=c);this.ne=new Fc;this.yf=new gg(d)},lg,hg=new zf(1E4,3E4),ig={"Content-Type":"application/x-www-form-urlencoded"},jg=new zf(1E4,3E4),kg={"Content-Type":"application/json"},ng=function(a,b,c,d,e,f,g){yf()?(df()?a=r(a.kf,a):(lg||(lg=new C(function(a,b){mg(a,b)})),a=r(a.jf,a)),a(b,c,d,e,f,g)):c&&c(null)};
R.prototype.kf=function(a,b,c,d,e,f){var g="Node"==L(),k=of()?g?new G(this.yf):new G:new G(this.ne),n;f&&(k.kb=Math.max(0,f),n=setTimeout(function(){k.dispatchEvent("timeout")},f));k.listen("complete",function(){n&&clearTimeout(n);var a=null;try{var c;c=this.b?tc(this.b.responseText):void 0;a=c||null}catch(Wa){try{a=JSON.parse(De(this))||null}catch(oe){a=null}}b&&b(a)});bc(k,"ready",function(){n&&clearTimeout(n);this.Aa||(this.Aa=!0,this.Ra())});bc(k,"timeout",function(){n&&clearTimeout(n);this.Aa||
(this.Aa=!0,this.Ra());b&&b(null)});k.send(a,c,d,e)};var Fd="__fcb"+Math.floor(1E6*Math.random()).toString(),mg=function(a,b){((window.gapi||{}).client||{}).request?a():(l[Fd]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))},Hd(function(){b(Error("CORS_UNSUPPORTED"))}))};
R.prototype.jf=function(a,b,c,d,e){var f=this;lg.then(function(){window.gapi.client.setApiKey(f.j);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).c(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
var pg=function(a,b){return new C(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?ng(a,a.gf+"?key="+encodeURIComponent(a.j),function(a){a?a.error?d(og(a)):a.access_token&&a.refresh_token?c(a):d(new O("internal-error")):d(new O("network-request-failed"))},"POST",Ye(b).toString(),a.Od,a.hf.get()):d(new O("internal-error"))})},qg=function(a,b,c,d,e){var f=Te(a.we+b);J(f,"key",a.j);e&&J(f,"cb",ka().toString());var g="GET"==c;if(g)for(var k in d)d.hasOwnProperty(k)&&
J(f,k,d[k]);return new C(function(b,e){ng(a,f.toString(),function(a){a?a.error?e(og(a)):b(a):e(new O("network-request-failed"))},c,g?void 0:wc(uf(d)),a.vd,a.xe.get())})},rg=function(a){if(!hc.test(a.email))throw new O("invalid-email");},sg=function(a){"email"in a&&rg(a)},ug=function(a,b){var c=rf()?$e():"http://localhost";return Q(a,tg,{identifier:b,continueUri:c}).then(function(a){return a.allProviders||[]})},wg=function(a){return Q(a,vg,{}).then(function(a){return a.authorizedDomains||[]})},xg=
function(a){if(!a.idToken)throw new O("internal-error");};R.prototype.signInAnonymously=function(){return Q(this,yg,{})};R.prototype.updateEmail=function(a,b){return Q(this,zg,{idToken:a,email:b})};R.prototype.updatePassword=function(a,b){return Q(this,$f,{idToken:a,password:b})};var Ag={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};
R.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];Na(Ag,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return Q(this,zg,c)};R.prototype.sendPasswordResetEmail=function(a){return Q(this,Bg,{requestType:"PASSWORD_RESET",email:a})};R.prototype.sendEmailVerification=function(a){return Q(this,Cg,{requestType:"VERIFY_EMAIL",idToken:a})};
var Eg=function(a,b,c){return Q(a,Dg,{idToken:b,deleteProvider:c})},Fg=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new O("internal-error");},Gg=function(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=fg(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=fg(a)):"EMAIL_EXISTS"==a.errorMessage&&(a.code="email-already-in-use",b=fg(a));if(b)throw b;if(!a.idToken)throw new O("internal-error");},Qf=function(a,
b){b.returnIdpCredential=!0;return Q(a,Hg,b)},Sf=function(a,b){b.returnIdpCredential=!0;return Q(a,Ig,b)},Jg=function(a){if(!a.oobCode)throw new O("invalid-action-code");};R.prototype.confirmPasswordReset=function(a,b){return Q(this,Kg,{oobCode:a,newPassword:b})};R.prototype.checkActionCode=function(a){return Q(this,Lg,{oobCode:a})};R.prototype.applyActionCode=function(a){return Q(this,Mg,{oobCode:a})};
var Mg={endpoint:"setAccountInfo",K:Jg,ib:"email"},Lg={endpoint:"resetPassword",K:Jg,va:function(a){if(!a.email||!a.requestType)throw new O("internal-error");}},Ng={endpoint:"signupNewUser",K:function(a){rg(a);if(!a.password)throw new O("weak-password");},va:xg,wa:!0},tg={endpoint:"createAuthUri"},Og={endpoint:"deleteAccount",hb:["idToken"]},Dg={endpoint:"setAccountInfo",hb:["idToken","deleteProvider"],K:function(a){if(!da(a.deleteProvider))throw new O("internal-error");}},Pg={endpoint:"getAccountInfo"},
Cg={endpoint:"getOobConfirmationCode",hb:["idToken","requestType"],K:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new O("internal-error");},ib:"email"},Bg={endpoint:"getOobConfirmationCode",hb:["requestType"],K:function(a){if("PASSWORD_RESET"!=a.requestType)throw new O("internal-error");rg(a)},ib:"email"},vg={me:!0,endpoint:"getProjectConfig",Ie:"GET"},Kg={endpoint:"resetPassword",K:Jg,ib:"email"},zg={endpoint:"setAccountInfo",hb:["idToken"],K:sg,wa:!0},$f={endpoint:"setAccountInfo",hb:["idToken"],
K:function(a){sg(a);if(!a.password)throw new O("weak-password");},va:xg,wa:!0},yg={endpoint:"signupNewUser",va:xg,wa:!0},Hg={endpoint:"verifyAssertion",K:Fg,va:Gg,wa:!0},Ig={endpoint:"verifyAssertion",K:function(a){Fg(a);if(!a.idToken)throw new O("internal-error");},va:Gg,wa:!0},Qg={endpoint:"verifyCustomToken",K:function(a){if(!a.token)throw new O("invalid-custom-token");},va:xg,wa:!0},Zf={endpoint:"verifyPassword",K:function(a){rg(a);if(!a.password)throw new O("wrong-password");},va:xg,wa:!0},Q=
function(a,b,c){if(!Ef(c,b.hb))return E(new O("internal-error"));var d=b.Ie||"POST",e;return D(c).then(b.K).then(function(){b.wa&&(c.returnSecureToken=!0);return qg(a,b.endpoint,d,c,b.me||!1)}).then(function(a){return e=a}).then(b.va).then(function(){if(!b.ib)return e;if(!(b.ib in e))throw new O("internal-error");return e[b.ib]})},og=function(a){var b,c;c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?
new O(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",
FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",
CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled"};b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new O(d[e],b);!b&&a&&(b=tf(a));return new O("internal-error",b)};var Rg=function(a){this.V=a};Rg.prototype.value=function(){return this.V};Rg.prototype.Rd=function(a){this.V.style=a;return this};var Sg=function(a){this.V=a||{}};Sg.prototype.value=function(){return this.V};Sg.prototype.Rd=function(a){this.V.style=a;return this};var Ug=function(a){this.wf=a;this.ac=null;this.Uc=Tg(this)},Vg=function(a){var b=new Sg;b.V.where=document.body;b.V.url=a.wf;b.V.messageHandlersFilter=M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.V.attributes=b.V.attributes||{};(new Rg(b.V.attributes)).Rd({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.V.dontclear=!0;return b},Tg=function(a){return Wg().then(function(){return new C(function(b,c){M("gapi.iframes.getContext")().open(Vg(a).value(),function(d){a.ac=d;a.ac.restyle({setHideOnLeave:!1});
var e=setTimeout(function(){c(Error("Network Error"))},Xg.get()),f=function(){clearTimeout(e);b()};d.ping(f).then(f,function(){c(Error("Network Error"))})})})})};Ug.prototype.sendMessage=function(a){var b=this;return this.Uc.then(function(){return new C(function(c){b.ac.send(a.type,a,c,M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})};
var Yg=function(a,b){a.Uc.then(function(){a.ac.register("authEvent",b,M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},Zg=new zf(3E3,15E3),Xg=new zf(5E3,15E3),Wg=function(){return new C(function(a,b){if(yf()){var c=function(){xf();M("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){xf();b(Error("Network Error"))},timeout:Zg.get()})};if(M("gapi.iframes.Iframe"))a();else if(M("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();l[d]=function(){M("gapi.load")?
c():b(Error("Network Error"))};D(Ed("https://apis.google.com/js/api.js?onload="+d)).c(function(){b(Error("Network Error"))})}}else b(Error("Network Error"))})};var $g=function(a,b,c){this.v=a;this.j=b;this.B=c;this.Ka=null;this.Mb=Ue(this.v,"/__/auth/iframe");J(this.Mb,"apiKey",this.j);J(this.Mb,"appName",this.B)};$g.prototype.setVersion=function(a){this.Ka=a;return this};$g.prototype.toString=function(){this.Ka?J(this.Mb,"v",this.Ka):Se(this.Mb,"v");return this.Mb.toString()};var ah=function(a,b,c,d,e){this.v=a;this.j=b;this.B=c;this.le=d;this.Ka=this.F=this.ad=null;this.kc=e};ah.prototype.setVersion=function(a){this.Ka=a;return this};
ah.prototype.toString=function(){var a=Ue(this.v,"/__/auth/handler");J(a,"apiKey",this.j);J(a,"appName",this.B);J(a,"authType",this.le);if(this.kc.isOAuthProvider){J(a,"providerId",this.kc.providerId);var b=this.kc.Ce();b&&b.length&&J(a,"scopes",b.join(","));b=this.kc.Be();Qa(b)||J(a,"customParameters",tf(b))}this.ad?J(a,"redirectUrl",this.ad):Se(a,"redirectUrl");this.F?J(a,"eventId",this.F):Se(a,"eventId");this.Ka?J(a,"v",this.Ka):Se(a,"v");if(this.Nb)for(var c in this.Nb)this.Nb.hasOwnProperty(c)&&
!Re(a,c)&&J(a,c,this.Nb[c]);return a.toString()};
var bh=function(a,b,c,d){this.v=a;this.j=b;this.B=c;this.ze=(this.za=d||null)?pf(this.za):null;d=this.za;this.Je=(new $g(a,b,c)).setVersion(d).toString();this.ia=[];this.g=new R(b,null,this.ze);this.dc=this.ra=null},ch=function(a){var b=$e();return wg(a).then(function(a){a:{for(var c=Te(b),e=c.da,c=c.$,f=0;f<a.length;f++){var g;var k=a[f];g=c;var n=e;0==k.indexOf("chrome-extension://")?g=Te(k).$==g&&"chrome-extension"==n:"http"!=n&&"https"!=n?g=!1:jf.test(k)?g=g==k:(k=k.split(".").join("\\."),g=(new RegExp("^(.+\\."+
k+"|"+k+")$","i")).test(g));if(g){a=!0;break a}}a=!1}if(!a)throw new Nf($e());})};h=bh.prototype;h.vb=function(){if(this.dc)return this.dc;var a=this;return this.dc=kf().then(function(){a.$b=new Ug(a.Je);dh(a)})};h.Hb=function(a,b,c){var d=new O("popup-closed-by-user"),e=new O("web-storage-unsupported"),f=this,g=!1;return this.Da().then(function(){eh(f).then(function(c){c||(a&&ff(a),b(e),g=!0)})}).c(function(){}).then(function(){if(!g)return hf(a)}).then(function(){if(!g)return me(c).then(function(){b(d)})})};
h.Sd=function(){var a=K();return!sf(a)&&!wf(a)};h.zd=function(){return!1};h.Cb=function(a,b,c,d,e,f,g){if(!a)return E(new O("popup-blocked"));if(g)return this.Da().c(function(b){ff(a);e(b)}),d(),D();this.ra||(this.ra=ch(this.g));var k=this;return this.ra.then(function(){var b=k.Da().c(function(b){ff(a);e(b);throw b;});d();return b}).then(function(){dg(c);var d=fh(k.v,k.j,k.B,b,c,null,f,k.za);af(d,a)}).c(function(a){"auth/network-request-failed"==a.code&&(k.ra=null);throw a;})};
h.Db=function(a,b,c){this.ra||(this.ra=ch(this.g));var d=this;return this.ra.then(function(){dg(b);var e=fh(d.v,d.j,d.B,a,b,$e(),c,d.za);af(e)})};h.Da=function(){var a=this;return this.vb().then(function(){return a.$b.Uc}).c(function(){a.ra=null;throw new O("network-request-failed");})};h.Wd=function(){return!0};
var fh=function(a,b,c,d,e,f,g,k,n){a=new ah(a,b,c,d,e);a.ad=f;a.F=g;f=a.setVersion(k);f.Nb=Sa(n||null);return f.toString()},dh=function(a){if(!a.$b)throw Error("IfcHandler must be initialized!");Yg(a.$b,function(b){var c={};if(b&&b.authEvent){var d=!1;b=Mf(b.authEvent);for(c=0;c<a.ia.length;c++)d=a.ia[c](b)||d;c={};c.status=d?"ACK":"ERROR";return D(c)}c.status="ERROR";return D(c)})},eh=function(a){var b={type:"webStorageSupport"};return a.vb().then(function(){return a.$b.sendMessage(b)}).then(function(a){if(a&&
a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})};bh.prototype.Ma=function(a){this.ia.push(a)};bh.prototype.Gb=function(a){Ka(this.ia,function(b){return b==a})};var gh=function(a){this.A=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.A)throw new O("internal-error","The React Native compatibility library was not found.");};h=gh.prototype;h.get=function(a){return D(this.A.getItem(a)).then(function(a){return a&&vf(a)})};h.set=function(a,b){return D(this.A.setItem(a,tf(b)))};h.remove=function(a){return D(this.A.removeItem(a))};h.Na=function(){};h.fb=function(){};var hh=function(){this.A={}};h=hh.prototype;h.get=function(a){return D(this.A[a])};h.set=function(a,b){this.A[a]=b;return D()};h.remove=function(a){delete this.A[a];return D()};h.Na=function(){};h.fb=function(){};var jh=function(){if(!ih()){if("Node"==L())throw new O("internal-error","The LocalStorage compatibility library was not found.");throw new O("web-storage-unsupported");}this.A=l.localStorage||firebase.INTERNAL.node.localStorage},ih=function(){var a="Node"==L(),a=l.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=jh.prototype;
h.get=function(a){var b=this;return D().then(function(){var c=b.A.getItem(a);return vf(c)})};h.set=function(a,b){var c=this;return D().then(function(){var d=tf(b);null===d?c.remove(a):c.A.setItem(a,d)})};h.remove=function(a){var b=this;return D().then(function(){b.A.removeItem(a)})};h.Na=function(a){l.window&&Ub(l.window,"storage",a)};h.fb=function(a){l.window&&cc(l.window,"storage",a)};var kh=function(){this.A={}};h=kh.prototype;h.get=function(){return D(null)};h.set=function(){return D()};h.remove=function(){return D()};h.Na=function(){};h.fb=function(){};var mh=function(){if(!lh()){if("Node"==L())throw new O("internal-error","The SessionStorage compatibility library was not found.");throw new O("web-storage-unsupported");}this.A=l.sessionStorage||firebase.INTERNAL.node.sessionStorage},lh=function(){var a="Node"==L(),a=l.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=mh.prototype;
h.get=function(a){var b=this;return D().then(function(){var c=b.A.getItem(a);return vf(c)})};h.set=function(a,b){var c=this;return D().then(function(){var d=tf(b);null===d?c.remove(a):c.A.setItem(a,d)})};h.remove=function(a){var b=this;return D().then(function(){b.A.removeItem(a)})};h.Na=function(){};h.fb=function(){};var nh=function(a,b,c,d,e,f){if(!window.indexedDB)throw new O("web-storage-unsupported");this.pe=a;this.Tc=b;this.Gc=c;this.$d=d;this.nb=e;this.T={};this.Ib=[];this.yb=0;this.Ke=f||l.indexedDB},oh,ph=function(a){return new C(function(b,c){var d=a.Ke.open(a.pe,a.nb);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.Tc,{keyPath:a.Gc})}catch(f){c(f)}};d.onsuccess=function(a){b(a.target.result)}})},qh=function(a){a.Cd||(a.Cd=
ph(a));return a.Cd},rh=function(a,b){return b.objectStore(a.Tc)},sh=function(a,b,c){return b.transaction([a.Tc],c?"readwrite":"readonly")},th=function(a){return new C(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=nh.prototype;
h.set=function(a,b){var c=!1,d,e=this;return nd(qh(this).then(function(b){d=b;b=rh(e,sh(e,d,!0));return th(b.get(a))}).then(function(f){var g=rh(e,sh(e,d,!0));if(f)return f.value=b,th(g.put(f));e.yb++;c=!0;f={};f[e.Gc]=a;f[e.$d]=b;return th(g.add(f))}).then(function(){e.T[a]=b}),function(){c&&e.yb--})};h.get=function(a){var b=this;return qh(this).then(function(c){return th(rh(b,sh(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
h.remove=function(a){var b=!1,c=this;return nd(qh(this).then(function(d){b=!0;c.yb++;return th(rh(c,sh(c,d,!0))["delete"](a))}).then(function(){delete c.T[a]}),function(){b&&c.yb--})};
h.nf=function(){var a=this;return qh(this).then(function(b){var c=rh(a,sh(a,b,!1));return c.getAll?th(c.getAll()):new C(function(a,b){var d=[],e=c.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.yb){for(d=0;d<b.length;d++)c[b[d][a.Gc]]=b[d][a.$d];d=bf(a.T,c);a.T=c}return d})};h.Na=function(a){0==this.Ib.length&&this.gd();this.Ib.push(a)};
h.fb=function(a){Ka(this.Ib,function(b){return b==a});0==this.Ib.length&&this.rc()};h.gd=function(){var a=this;this.rc();var b=function(){a.Xc=me(800).then(r(a.nf,a)).then(function(b){0<b.length&&x(a.Ib,function(a){a(b)})}).then(b).c(function(a){"STOP_EVENT"!=a.message&&b()});return a.Xc};b()};h.rc=function(){this.Xc&&this.Xc.cancel("STOP_EVENT")};var xh=function(){this.sd={Browser:uh,Node:vh,ReactNative:wh}[L()]},yh,uh={I:jh,jd:mh},vh={I:jh,jd:mh},wh={I:gh,jd:kh};var zh=function(a){var b={},c=a.email,d=a.newEmail;a=a.requestType;if(!c||!a)throw Error("Invalid provider user info!");b.fromEmail=d||null;b.email=c;N(this,"operation",a);N(this,"data",Ff(b))};var Ah="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),S=function(a,b){return{name:a||"",fa:"a valid string",optional:!!b,ha:p}},T=function(a){return{name:a||"",fa:"a valid object",optional:!1,ha:ga}},Bh=function(a,b){return{name:a||"",fa:"a function",optional:!!b,ha:q}},Ch=function(){return{name:"",fa:"null",optional:!1,ha:ca}},Dh=function(){return{name:"credential",fa:"a valid credential",optional:!1,ha:function(a){return!(!a||!a.Ub)}}},Eh=function(){return{name:"authProvider",
fa:"a valid Auth provider",optional:!1,ha:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},Fh=function(a,b,c,d){return{name:c||"",fa:a.fa+" or "+b.fa,optional:!!d,ha:function(c){return a.ha(c)||b.ha(c)}}};var Hh=function(a,b){for(var c in b){var d=b[c].name;a[d]=Gh(d,a[c],b[c].a)}},U=function(a,b,c,d){a[b]=Gh(b,c,d)},Gh=function(a,b,c){if(!c)return b;var d=Ih(a);a=function(){var a=Array.prototype.slice.call(arguments),e;a:{e=Array.prototype.slice.call(a);var k;k=0;for(var n=!1,y=0;y<c.length;y++)if(c[y].optional)n=!0;else{if(n)throw new O("internal-error","Argument validator encountered a required argument after an optional argument.");k++}n=c.length;if(e.length<k||n<e.length)e="Expected "+(k==n?1==
k?"1 argument":k+" arguments":k+"-"+n+" arguments")+" but got "+e.length+".";else{for(k=0;k<e.length;k++)if(n=c[k].optional&&void 0===e[k],!c[k].ha(e[k])&&!n){e=c[k];if(0>k||k>=Ah.length)throw new O("internal-error","Argument validator received an unsupported number of arguments.");e=Ah[k]+" argument "+(e.name?'"'+e.name+'" ':"")+"must be "+e.fa+".";break a}e=null}}if(e)throw new O("argument-error",d+" failed: "+e);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=
b.prototype[e];return a},Ih=function(a){a=a.split(".");return a[a.length-1]};var Jh=function(a,b,c,d){this.Xe=a;this.Pd=b;this.ef=c;this.jb=d;this.S={};yh||(yh=new xh);a=yh;try{var e;Ze()?(oh||(oh=new nh("firebaseLocalStorageDb","firebaseLocalStorage","fbase_key","value",1)),e=oh):e=new a.sd.I;this.Ya=e}catch(f){this.Ya=new hh,this.jb=!0}try{this.tc=new a.sd.jd}catch(f){this.tc=new hh}this.Td=r(this.Ud,this);this.T={}},Kh,Lh=function(){Kh||(Kh=new Jh("firebase",":",!wf(K())&&l.window&&l.window!=l.window.top?!0:!1,sf()));return Kh};h=Jh.prototype;
h.P=function(a,b){return this.Xe+this.Pd+a.name+(b?this.Pd+b:"")};h.get=function(a,b){return(a.I?this.Ya:this.tc).get(this.P(a,b))};h.remove=function(a,b){b=this.P(a,b);a.I&&!this.jb&&(this.T[b]=null);return(a.I?this.Ya:this.tc).remove(b)};h.set=function(a,b,c){var d=this.P(a,c),e=this,f=a.I?this.Ya:this.tc;return f.set(d,b).then(function(){return f.get(d)}).then(function(b){a.I&&!this.jb&&(e.T[d]=b)})};
h.addListener=function(a,b,c){a=this.P(a,b);this.jb||(this.T[a]=l.localStorage.getItem(a));Qa(this.S)&&this.gd();this.S[a]||(this.S[a]=[]);this.S[a].push(c)};h.removeListener=function(a,b,c){a=this.P(a,b);this.S[a]&&(Ka(this.S[a],function(a){return a==c}),0==this.S[a].length&&delete this.S[a]);Qa(this.S)&&this.rc()};h.gd=function(){this.Ya.Na(this.Td);this.jb||Mh(this)};
var Mh=function(a){Nh(a);a.Sc=setInterval(function(){for(var b in a.S){var c=l.localStorage.getItem(b);c!=a.T[b]&&(a.T[b]=c,c=new Jb({type:"storage",key:b,target:window,oldValue:a.T[b],newValue:c}),a.Ud(c))}},1E3)},Nh=function(a){a.Sc&&(clearInterval(a.Sc),a.Sc=null)};Jh.prototype.rc=function(){this.Ya.fb(this.Td);this.jb||Nh(this)};
Jh.prototype.Ud=function(a){if(a&&a.Ae){var b=a.qb.key;if(this.ef){var c=l.localStorage.getItem(b);a=a.qb.newValue;a!=c&&(a?l.localStorage.setItem(b,a):a||l.localStorage.removeItem(b))}this.T[b]=l.localStorage.getItem(b);this.md(b)}else x(a,r(this.md,this))};Jh.prototype.md=function(a){this.S[a]&&x(this.S[a],function(a){a()})};var Oh=function(a,b){this.u=a;this.i=b||Lh()},Ph={name:"authEvent",I:!0},Qh=function(a){return a.i.get(Ph,a.u).then(function(a){return Mf(a)})};Oh.prototype.Ma=function(a){this.i.addListener(Ph,this.u,a)};Oh.prototype.Gb=function(a){this.i.removeListener(Ph,this.u,a)};var Rh=function(a){this.i=a||Lh()},Sh={name:"sessionId",I:!1};Rh.prototype.Vb=function(a){return this.i.get(Sh,a)};var Th=function(a,b,c,d,e,f){this.v=a;this.j=b;this.B=c;this.za=d||null;this.Vd=b+":"+c;this.ff=new Rh;this.wd=new Oh(this.Vd);this.Oc=null;this.ia=[];this.Ne=e||500;this.cf=f||2E3;this.ub=this.hc=null},Uh=function(a){return new O("invalid-cordova-configuration",a)};
Th.prototype.Da=function(){return this.Qc?this.Qc:this.Qc=mf().then(function(){if("function"!==typeof M("universalLinks.subscribe",l))throw Uh("cordova-universal-links-plugin is not installed");if("undefined"===typeof M("BuildInfo.packageName",l))throw Uh("cordova-plugin-buildinfo is not installed");if("function"!==typeof M("cordova.plugins.browsertab.openUrl",l))throw Uh("cordova-plugin-browsertab is not installed");if("function"!==typeof M("cordova.InAppBrowser.open",l))throw Uh("cordova-plugin-inappbrowser is not installed");
},function(){throw new O("cordova-not-ready");})};var Vh=function(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")},Wh=function(a){var b=new Db;b.update(a);return ob(b.digest())};h=Th.prototype;h.Hb=function(a,b){b(new O("operation-not-supported-in-this-environment"));return D()};h.Cb=function(){return E(new O("operation-not-supported-in-this-environment"))};h.Wd=function(){return!1};h.Sd=function(){return!0};
h.zd=function(){return!0};
h.Db=function(a,b,c){if(this.hc)return E(new O("redirect-operation-pending"));var d=this,e=l.document,f=null,g=null,k=null,n=null;return this.hc=nd(D().then(function(){dg(b);return Xh(d)}).then(function(){return Yh(d,a,b,c)}).then(function(){return(new C(function(a,b){g=function(){var b=M("cordova.plugins.browsertab.close",l);a();"function"===typeof b&&b();d.ub&&"function"===typeof d.ub.close&&(d.ub.close(),d.ub=null);return!1};d.Ma(g);k=function(){f||(f=me(d.cf).then(function(){b(new O("redirect-cancelled-by-user"))}))};n=
function(){var a=l.document;(a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:1)&&k()};e.addEventListener("resume",k,!1);K().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",n,!1)})).c(function(a){return Zh(d).then(function(){throw a;})})}),function(){k&&e.removeEventListener("resume",k,!1);n&&e.removeEventListener("visibilitychange",n,!1);f&&f.cancel();g&&d.Gb(g);d.hc=null})};
var Yh=function(a,b,c,d){var e=Vh(),f=new P(b,d,null,e,new O("no-auth-event")),g=M("BuildInfo.packageName",l);if("string"!==typeof g)throw new O("invalid-cordova-configuration");var k=M("BuildInfo.displayName",l),n={};if(K().toLowerCase().match(/iphone|ipad|ipod/))n.ibi=g;else if(K().toLowerCase().match(/android/))n.apn=g;else return E(new O("operation-not-supported-in-this-environment"));k&&(n.appDisplayName=k);e=Wh(e);n.sessionId=e;var y=fh(a.v,a.j,a.B,b,c,null,d,a.za,n);return a.Da().then(function(){var b=
a.Vd;return a.ff.i.set(Ph,f.D(),b)}).then(function(){var b=M("cordova.plugins.browsertab.isAvailable",l);if("function"!==typeof b)throw new O("invalid-cordova-configuration");var c=null;b(function(b){if(b){c=M("cordova.plugins.browsertab.openUrl",l);if("function"!==typeof c)throw new O("invalid-cordova-configuration");c(y)}else{c=M("cordova.InAppBrowser.open",l);if("function"!==typeof c)throw new O("invalid-cordova-configuration");b=c;var d;d=K();d=!(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i)&&!d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
a.ub=b(y,d?"_blank":"_system","location=yes")}})})},$h=function(a,b){for(var c=0;c<a.ia.length;c++)try{a.ia[c](b)}catch(d){}},Xh=function(a){a.Oc||(a.Oc=a.Da().then(function(){return new C(function(b){var c=function(d){b(d);a.Gb(c);return!1};a.Ma(c);ai(a)})}));return a.Oc},Zh=function(a){var b=null;return Qh(a.wd).then(function(c){b=c;c=a.wd;return c.i.remove(Ph,c.u)}).then(function(){return b})},ai=function(a){var b=M("universalLinks.subscribe",l);if("function"!==typeof b)throw new O("invalid-cordova-configuration");
var c=new P("unknown",null,null,null,new O("no-auth-event")),d=!1,e=me(a.Ne).then(function(){return Zh(a).then(function(){d||$h(a,c)})}),f=function(b){d=!0;e&&e.cancel();Zh(a).then(function(d){var e=c;if(d&&b&&b.url){var e=null,f;f=b.url;var g=Te(f),k=Re(g,"link"),n=Re(Te(k),"link"),g=Re(g,"deep_link_id");f=Re(Te(g),"link")||g||n||k||f;-1!=f.indexOf("/__/auth/callback")&&(e=Te(f),e=vf(Re(e,"error")||null),e=(e="object"===typeof e?Lf(e):null)?new P(d.ga,d.F,null,null,e):new P(d.ga,d.F,f,d.Vb()));e=
e||c}$h(a,e)})},g=l.handleOpenURL;l.handleOpenURL=function(a){0==a.indexOf(M("BuildInfo.packageName",l)+"://")&&f({url:a});if("function"===typeof g)try{g(a)}catch(n){console.error(n)}};b(null,f)};Th.prototype.Ma=function(a){this.ia.push(a);Xh(this).c(function(){})};Th.prototype.Gb=function(a){Ka(this.ia,function(b){return b==a})};var bi=function(a){this.u=a;this.i=Lh()},ci={name:"pendingRedirect",I:!1},di=function(a){return a.i.set(ci,"pending",a.u)},ei=function(a){return a.i.remove(ci,a.u)},fi=function(a){return a.i.get(ci,a.u).then(function(a){return"pending"==a})};var V=function(a,b,c){this.v=a;this.j=b;this.B=c;this.Jb=[];this.Wa=!1;this.Cc=r(this.Mc,this);this.ab=new gi(this);this.Jd=new hi(this);this.zb=new bi(this.j+":"+this.B);this.lb={};this.lb.unknown=this.ab;this.lb.signInViaRedirect=this.ab;this.lb.linkViaRedirect=this.ab;this.lb.signInViaPopup=this.Jd;this.lb.linkViaPopup=this.Jd;this.G=ii(this.v,this.j,this.B)},ii=function(a,b,c){var d=firebase.SDK_VERSION||null;return lf()?new Th(a,b,c,d):new bh(a,b,c,d)};
V.prototype.reset=function(){this.Wa=!1;this.G.Gb(this.Cc);this.G=ii(this.v,this.j,this.B)};V.prototype.vb=function(){var a=this;this.Wa||(this.Wa=!0,this.G.Ma(this.Cc));var b=this.G;return this.G.Da().c(function(c){a.G==b&&a.reset();throw c;})};var li=function(a){a.G.Sd()&&a.vb().c(function(b){var c=new P("unknown",null,null,null,new O("operation-not-supported-in-this-environment"));ji(b)&&a.Mc(c)});a.G.zd()||ki(a.ab)};
V.prototype.subscribe=function(a){Ha(this.Jb,a)||this.Jb.push(a);if(!this.Wa){var b=this;fi(this.zb).then(function(a){a?ei(b.zb).then(function(){b.vb().c(function(a){var c=new P("unknown",null,null,null,new O("operation-not-supported-in-this-environment"));ji(a)&&b.Mc(c)})}):li(b)}).c(function(){li(b)})}};V.prototype.unsubscribe=function(a){Ka(this.Jb,function(b){return b==a})};
V.prototype.Mc=function(a){if(!a)throw new O("invalid-auth-event");for(var b=!1,c=0;c<this.Jb.length;c++){var d=this.Jb[c];if(d.nd(a.ga,a.F)){(b=this.lb[a.ga])&&b.Kd(a,d);b=!0;break}}ki(this.ab);return b};var mi=new zf(2E3,1E4),ni=new zf(1E4,3E4);V.prototype.getRedirectResult=function(){return this.ab.getRedirectResult()};V.prototype.Cb=function(a,b,c,d,e){var f=this;return this.G.Cb(a,b,c,function(){f.Wa||(f.Wa=!0,f.G.Ma(f.Cc))},function(){f.reset()},d,e)};
var ji=function(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1};V.prototype.Db=function(a,b,c){var d=this,e;return di(this.zb).then(function(){return d.G.Db(a,b,c).c(function(a){if(ji(a))throw new O("operation-not-supported-in-this-environment");e=a;return ei(d.zb).then(function(){throw e;})}).then(function(){return d.G.Wd()?new C(function(){}):ei(d.zb).then(function(){return d.getRedirectResult()}).then(function(){}).c(function(){})})})};
V.prototype.Hb=function(a,b,c,d){return this.G.Hb(c,function(c){a.Ia(b,null,c,d)},mi.get())};var oi={},pi=function(a,b,c){var d=b+":"+c;oi[d]||(oi[d]=new V(a,b,c));return oi[d]},gi=function(a){this.i=a;this.eb=null;this.Fb=[];this.Eb=[];this.bb=null;this.$c=!1};gi.prototype.reset=function(){this.eb=null;this.bb&&(this.bb.cancel(),this.bb=null)};
gi.prototype.Kd=function(a,b){if(!a)return E(new O("invalid-auth-event"));this.reset();this.$c=!0;var c=a.ga,d=a.F,e=a.getError()&&"auth/web-storage-unsupported"==a.getError().code,f=a.getError()&&"auth/operation-not-supported-in-this-environment"==a.getError().code;"unknown"!=c||e||f?a=a.O?this.Yc(a,b):b.rb(c,d)?this.Zc(a,b):E(new O("invalid-auth-event")):(qi(this,!1,null,null),a=D());return a};var ki=function(a){a.$c||(a.$c=!0,qi(a,!1,null,null))};
gi.prototype.Yc=function(a){qi(this,!0,null,a.getError());return D()};gi.prototype.Zc=function(a,b){var c=this,d=a.ga;b=b.rb(d,a.F);var e=a.mb;a=a.Vb();var f="signInViaRedirect"==d||"linkViaRedirect"==d;return b(e,a).then(function(a){qi(c,f,a,null)}).c(function(a){qi(c,f,null,a)})};
var ri=function(a,b){a.eb=function(){return E(b)};if(a.Eb.length)for(var c=0;c<a.Eb.length;c++)a.Eb[c](b)},si=function(a,b){a.eb=function(){return D(b)};if(a.Fb.length)for(var c=0;c<a.Fb.length;c++)a.Fb[c](b)},qi=function(a,b,c,d){b?d?ri(a,d):si(a,c):si(a,{user:null});a.Fb=[];a.Eb=[]};gi.prototype.getRedirectResult=function(){var a=this;return new C(function(b,c){a.eb?a.eb().then(b,c):(a.Fb.push(b),a.Eb.push(c),ti(a))})};
var ti=function(a){var b=new O("timeout");a.bb&&a.bb.cancel();a.bb=me(ni.get()).then(function(){a.eb||qi(a,!0,null,b)})},hi=function(a){this.i=a};hi.prototype.Kd=function(a,b){if(!a)return E(new O("invalid-auth-event"));var c=a.ga,d=a.F;return a.O?this.Yc(a,b):b.rb(c,d)?this.Zc(a,b):E(new O("invalid-auth-event"))};hi.prototype.Yc=function(a,b){b.Ia(a.ga,null,a.getError(),a.F);return D()};
hi.prototype.Zc=function(a,b){var c=a.F,d=a.ga,e=b.rb(d,c),f=a.mb;a=a.Vb();return e(f,a).then(function(a){b.Ia(d,a,null,c)}).c(function(a){b.Ia(d,null,a,c)})};var ui=function(a){this.g=a;this.xa=this.X=null;this.Sa=0};ui.prototype.D=function(){return{apiKey:this.g.j,refreshToken:this.X,accessToken:this.xa,expirationTime:this.Sa}};
var wi=function(a,b){var c=b.idToken,d=b.refreshToken;b=vi(b.expiresIn);a.xa=c;a.Sa=b;a.X=d},vi=function(a){return ka()+1E3*parseInt(a,10)},xi=function(a,b){return pg(a.g,b).then(function(b){a.xa=b.access_token;a.Sa=vi(b.expires_in);a.X=b.refresh_token;return{accessToken:a.xa,expirationTime:a.Sa,refreshToken:a.X}}).c(function(b){"auth/user-token-expired"==b.code&&(a.X=null);throw b;})},yi=function(a){return!(!a.xa||a.X)};
ui.prototype.getToken=function(a){a=!!a;return yi(this)?E(new O("user-token-expired")):a||!this.xa||ka()>this.Sa-3E4?this.X?xi(this,{grant_type:"refresh_token",refresh_token:this.X}):D(null):D({accessToken:this.xa,expirationTime:this.Sa,refreshToken:this.X})};var zi=function(a,b,c,d,e){Cf(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,providerId:b})},Ai=function(a,b){Ib.call(this,a);for(var c in b)this[c]=b[c]};t(Ai,Ib);
var W=function(a,b,c){this.Z=[];this.j=a.apiKey;this.B=a.appName;this.v=a.authDomain||null;a=firebase.SDK_VERSION?pf(firebase.SDK_VERSION):null;this.g=new R(this.j,null,a);this.ea=new ui(this.g);Bi(this,b.idToken);wi(this.ea,b);N(this,"refreshToken",this.ea.X);Ci(this,c||{});Qd.call(this);this.ic=!1;this.v&&rf()&&(this.m=pi(this.v,this.j,this.B));this.qc=[];this.Bc=D()};t(W,Qd);
W.prototype.ta=function(a,b){var c=Array.prototype.slice.call(arguments,1),d=this;return this.Bc=this.Bc.then(function(){return a.apply(d,c)},function(){return a.apply(d,c)})};
var Bi=function(a,b){a.Dd=b;N(a,"_lat",b)},Di=function(a,b){Ka(a.qc,function(a){return a==b})},Ei=function(a){for(var b=[],c=0;c<a.qc.length;c++)b.push(a.qc[c](a));return kd(b).then(function(){return a})},Fi=function(a){a.m&&!a.ic&&(a.ic=!0,a.m.subscribe(a))},Ci=function(a,b){Cf(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,isAnonymous:b.isAnonymous||!1,providerData:[]})};N(W.prototype,"providerId","firebase");
var Gi=function(){},Hi=function(a){return D().then(function(){if(a.re)throw new O("app-deleted");})},Ii=function(a){return Da(a.providerData,function(a){return a.providerId})},Ki=function(a,b){b&&(Ji(a,b.providerId),a.providerData.push(b))},Ji=function(a,b){Ka(a.providerData,function(a){return a.providerId==b})},Li=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&N(a,b,c)};
W.prototype.copy=function(a){var b=this;b!=a&&(Cf(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,isAnonymous:a.isAnonymous,providerData:[]}),x(a.providerData,function(a){Ki(b,a)}),this.ea=a.ea,N(this,"refreshToken",this.ea.X))};W.prototype.reload=function(){var a=this;return Hi(this).then(function(){return Mi(a).then(function(){return Ei(a)}).then(Gi)})};
var Mi=function(a){return a.getToken().then(function(b){var c=a.isAnonymous;return Ni(a,b).then(function(){c||Li(a,"isAnonymous",!1);return b}).c(function(b){"auth/user-token-expired"==b.code&&(a.dispatchEvent(new Ai("userDeleted")),Oi(a));throw b;})})};
W.prototype.getToken=function(a){var b=this,c=yi(this.ea);return Hi(this).then(function(){return b.ea.getToken(a)}).then(function(a){if(!a)throw new O("internal-error");a.accessToken!=b.Dd&&(Bi(b,a.accessToken),b.Ea());Li(b,"refreshToken",a.refreshToken);return a.accessToken}).c(function(a){if("auth/user-token-expired"==a.code&&!c)return Ei(b).then(function(){Li(b,"refreshToken",null);throw a;});throw a;})};
var Pi=function(a,b){b.idToken&&a.Dd!=b.idToken&&(wi(a.ea,b),a.Ea(),Bi(a,b.idToken),Li(a,"refreshToken",a.ea.X))};W.prototype.Ea=function(){this.dispatchEvent(new Ai("tokenChanged"))};var Ni=function(a,b){return Q(a.g,Pg,{idToken:b}).then(r(a.af,a))};
W.prototype.af=function(a){a=a.users;if(!a||!a.length)throw new O("internal-error");a=a[0];Ci(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified});for(var b=Qi(a),c=0;c<b.length;c++)Ki(this,b[c]);Li(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
var Qi=function(a){return(a=a.providerUserInfo)&&a.length?Da(a,function(a){return new zi(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl)}):[]};W.prototype.reauthenticate=function(a){var b=this;return this.f(a.Ub(this.g).then(function(a){var c;a:{var e=a.idToken.split(".");if(3==e.length){for(var e=e[1],f=(4-e.length%4)%4,g=0;g<f;g++)e+=".";try{var k=tc(sb(e));if(k.sub&&k.iss&&k.aud&&k.exp){c=new Of(k);break a}}catch(n){}}c=null}if(!c||b.uid!=c.Te)throw new O("user-mismatch");Pi(b,a);return b.reload()}))};
var Ri=function(a,b){return Mi(a).then(function(){if(Ha(Ii(a),b))return Ei(a).then(function(){throw new O("provider-already-linked");})})};h=W.prototype;h.Re=function(a){var b=this;return this.f(Ri(this,a.provider).then(function(){return b.getToken()}).then(function(c){return a.Fd(b.g,c)}).then(r(this.ud,this)))};h.link=function(a){return this.ta(this.Re,a)};h.ud=function(a){Pi(this,a);var b=this;return this.reload().then(function(){return b})};
h.tf=function(a){var b=this;return this.f(this.getToken().then(function(c){return b.g.updateEmail(c,a)}).then(function(a){Pi(b,a);return b.reload()}))};h.updateEmail=function(a){return this.ta(this.tf,a)};h.uf=function(a){var b=this;return this.f(this.getToken().then(function(c){return b.g.updatePassword(c,a)}).then(function(a){Pi(b,a);return b.reload()}))};h.updatePassword=function(a){return this.ta(this.uf,a)};
h.vf=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Hi(this);var b=this;return this.f(this.getToken().then(function(c){return b.g.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){Pi(b,a);Li(b,"displayName",a.displayName||null);Li(b,"photoURL",a.photoUrl||null);return Ei(b)}).then(Gi))};h.updateProfile=function(a){return this.ta(this.vf,a)};
h.sf=function(a){var b=this;return this.f(Mi(this).then(function(c){return Ha(Ii(b),a)?Eg(b.g,c,[a]).then(function(a){var c={};x(a.providerUserInfo||[],function(a){c[a.providerId]=!0});x(Ii(b),function(a){c[a]||Ji(b,a)});return Ei(b)}):Ei(b).then(function(){throw new O("no-such-provider");})}))};h.unlink=function(a){return this.ta(this.sf,a)};h.qe=function(){var a=this;return this.f(this.getToken().then(function(b){return Q(a.g,Og,{idToken:b})}).then(function(){a.dispatchEvent(new Ai("userDeleted"))})).then(function(){Oi(a)})};
h["delete"]=function(){return this.ta(this.qe)};h.nd=function(a,b){return"linkViaPopup"==a&&(this.la||null)==b&&this.ca||"linkViaRedirect"==a&&(this.mc||null)==b?!0:!1};h.Ia=function(a,b,c,d){"linkViaPopup"==a&&d==(this.la||null)&&(c&&this.Ga?this.Ga(c):b&&!c&&this.ca&&this.ca(b),this.J&&(this.J.cancel(),this.J=null),delete this.ca,delete this.Ga)};h.rb=function(a,b){return"linkViaPopup"==a&&b==(this.la||null)||"linkViaRedirect"==a&&(this.mc||null)==b?r(this.ue,this):null};
h.Tb=function(){return qf(this.uid+":::")};
var Ti=function(a,b){if(!rf())return E(new O("operation-not-supported-in-this-environment"));var c=If(b.providerId),d=a.Tb(),e=null;!sf()&&a.v&&b.isOAuthProvider&&(e=fh(a.v,a.j,a.B,"linkViaPopup",b,null,d,firebase.SDK_VERSION||null));var f=gf(e,c&&c.Bb,c&&c.Ab),c=Ri(a,b.providerId).then(function(){return Ei(a)}).then(function(){Si(a);return a.getToken()}).then(function(){return a.m.Cb(f,"linkViaPopup",b,d,!!e)}).then(function(){return new C(function(b,c){a.Ia("linkViaPopup",null,new O("cancelled-popup-request"),
a.la||null);a.ca=b;a.Ga=c;a.la=d;a.J=a.m.Hb(a,"linkViaPopup",f,d)})}).then(function(a){f&&ff(f);return a}).c(function(a){f&&ff(f);throw a;});return a.f(c)};W.prototype.linkWithPopup=function(a){var b=Ti(this,a);return this.ta(function(){return b})};
W.prototype.Se=function(a){if(!rf())return E(new O("operation-not-supported-in-this-environment"));var b=this,c=null,d=this.Tb(),e=Ri(this,a.providerId).then(function(){Si(b);return b.getToken()}).then(function(){b.mc=d;return Ei(b)}).then(function(a){b.Ha&&(a=b.Ha,a=a.i.set(Ui,b.D(),a.u));return a}).then(function(){return b.m.Db("linkViaRedirect",a,d)}).c(function(a){c=a;if(b.Ha)return Vi(b.Ha);throw c;}).then(function(){if(c)throw c;});return this.f(e)};
W.prototype.linkWithRedirect=function(a){return this.ta(this.Se,a)};var Si=function(a){if(!a.m||!a.ic){if(a.m&&!a.ic)throw new O("internal-error");throw new O("auth-domain-config-required");}};W.prototype.ue=function(a,b){var c=this;this.J&&(this.J.cancel(),this.J=null);var d=null,e=this.getToken().then(function(d){return Sf(c.g,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=cg(a);return c.ud(a)}).then(function(a){return{user:a,credential:d}});return this.f(e)};
W.prototype.sendEmailVerification=function(){var a=this;return this.f(this.getToken().then(function(b){return a.g.sendEmailVerification(b)}).then(function(b){if(a.email!=b)return a.reload()}).then(function(){}))};var Oi=function(a){for(var b=0;b<a.Z.length;b++)a.Z[b].cancel("app-deleted");a.Z=[];a.re=!0;N(a,"refreshToken",null);a.m&&a.m.unsubscribe(a)};W.prototype.f=function(a){var b=this;this.Z.push(a);nd(a,function(){Ja(b.Z,a)});return a};W.prototype.toJSON=function(){return this.D()};
W.prototype.D=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.j,appName:this.B,authDomain:this.v,stsTokenManager:this.ea.D(),redirectEventId:this.mc||null};x(this.providerData,function(b){a.providerData.push(Df(b))});return a};
var Wi=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-ka())/1E3;else return null;var d=new W(b,c,a);a.providerData&&x(a.providerData,function(a){if(a){var b={};Cf(b,a);Ki(d,b)}});a.redirectEventId&&(d.mc=a.redirectEventId);
return d},Xi=function(a,b,c){var d=new W(a,b);c&&(d.Ha=c);return d.reload().then(function(){return d})};var Yi=function(a){this.u=a;this.i=Lh()},Ui={name:"redirectUser",I:!1},Vi=function(a){return a.i.remove(Ui,a.u)},Zi=function(a,b){return a.i.get(Ui,a.u).then(function(a){a&&b&&(a.authDomain=b);return Wi(a||{})})};var $i=function(a){this.u=a;this.i=Lh()},aj={name:"authUser",I:!0},bj=function(a,b){return a.i.set(aj,b.D(),a.u)},cj=function(a){return a.i.remove(aj,a.u)},dj=function(a,b){return a.i.get(aj,a.u).then(function(a){a&&b&&(a.authDomain=b);return Wi(a||{})})};var Y=function(a){this.Qa=!1;N(this,"app",a);if(X(this).options&&X(this).options.apiKey)a=firebase.SDK_VERSION?pf(firebase.SDK_VERSION):null,this.g=new R(X(this).options&&X(this).options.apiKey,null,a);else throw new O("invalid-api-key");this.Z=[];this.Oa=[];this.Ze=firebase.INTERNAL.createSubscribe(r(this.Le,this));ej(this,null);this.oa=new $i(X(this).options.apiKey+":"+X(this).name);this.cb=new Yi(X(this).options.apiKey+":"+X(this).name);this.Ob=this.f(fj(this));this.ua=this.f(gj(this));this.Rc=
!1;this.Lc=r(this.mf,this);this.Yd=r(this.Ua,this);this.Zd=r(this.He,this);this.Xd=r(this.Ge,this);hj(this);this.INTERNAL={};this.INTERNAL["delete"]=r(this["delete"],this)};Y.prototype.toJSON=function(){return{apiKey:X(this).options.apiKey,authDomain:X(this).options.authDomain,appName:X(this).name,currentUser:Z(this)&&Z(this).D()}};
var ij=function(a){return a.se||E(new O("auth-domain-config-required"))},hj=function(a){var b=X(a).options.authDomain,c=X(a).options.apiKey;b&&rf()&&(a.se=a.Ob.then(function(){if(!a.Qa)return a.m=pi(b,c,X(a).name),a.m.subscribe(a),Z(a)&&Fi(Z(a)),a.bd&&(Fi(a.bd),a.bd=null),a.m}))};h=Y.prototype;h.nd=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.la==b&&!!this.ca;default:return!1}};
h.Ia=function(a,b,c,d){"signInViaPopup"==a&&this.la==d&&(c&&this.Ga?this.Ga(c):b&&!c&&this.ca&&this.ca(b),this.J&&(this.J.cancel(),this.J=null),delete this.ca,delete this.Ga)};h.rb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.la==b&&this.ca?r(this.ve,this):null};
h.ve=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.J&&(this.J.cancel(),this.J=null);var d=null,e=Qf(c.g,a).then(function(a){d=cg(a);return a});a=c.Ob.then(function(){return e}).then(function(a){return jj(c,a)}).then(function(){return{user:Z(c),credential:d}});return this.f(a)};h.Tb=function(){return qf()};
h.signInWithPopup=function(a){if(!rf())return E(new O("operation-not-supported-in-this-environment"));var b=this,c=If(a.providerId),d=this.Tb(),e=null;!sf()&&X(this).options.authDomain&&a.isOAuthProvider&&(e=fh(X(this).options.authDomain,X(this).options.apiKey,X(this).name,"signInViaPopup",a,null,d,firebase.SDK_VERSION||null));var f=gf(e,c&&c.Bb,c&&c.Ab),c=ij(this).then(function(b){return b.Cb(f,"signInViaPopup",a,d,!!e)}).then(function(){return new C(function(a,c){b.Ia("signInViaPopup",null,new O("cancelled-popup-request"),
b.la);b.ca=a;b.Ga=c;b.la=d;b.J=b.m.Hb(b,"signInViaPopup",f,d)})}).then(function(a){f&&ff(f);return a}).c(function(a){f&&ff(f);throw a;});return this.f(c)};h.signInWithRedirect=function(a){if(!rf())return E(new O("operation-not-supported-in-this-environment"));var b=this,c=ij(this).then(function(){return b.m.Db("signInViaRedirect",a)});return this.f(c)};
h.getRedirectResult=function(){if(!rf())return E(new O("operation-not-supported-in-this-environment"));var a=this,b=ij(this).then(function(){return a.m.getRedirectResult()});return this.f(b)};
var jj=function(a,b){var c={};c.apiKey=X(a).options.apiKey;c.authDomain=X(a).options.authDomain;c.appName=X(a).name;return a.Ob.then(function(){return Xi(c,b,a.cb)}).then(function(b){if(Z(a)&&b.uid==Z(a).uid)return Z(a).copy(b),a.Ua(b);ej(a,b);Fi(b);return a.Ua(b)}).then(function(){a.Ea()})},ej=function(a,b){Z(a)&&(Di(Z(a),a.Yd),cc(Z(a),"tokenChanged",a.Zd),cc(Z(a),"userDeleted",a.Xd));b&&(b.qc.push(a.Yd),Ub(b,"tokenChanged",a.Zd),Ub(b,"userDeleted",a.Xd));N(a,"currentUser",b)};
Y.prototype.signOut=function(){var a=this,b=this.ua.then(function(){if(!Z(a))return D();ej(a,null);return cj(a.oa).then(function(){a.Ea()})});return this.f(b)};
var kj=function(a){var b=Zi(a.cb,X(a).options.authDomain).then(function(b){if(a.bd=b)b.Ha=a.cb;return Vi(a.cb)});return a.f(b)},fj=function(a){var b=X(a).options.authDomain,c=kj(a).then(function(){return dj(a.oa,b)}).then(function(b){return b?(b.Ha=a.cb,b.reload().then(function(){return bj(a.oa,b).then(function(){return b})}).c(function(c){return"auth/network-request-failed"==c.code?b:cj(a.oa)})):null}).then(function(b){ej(a,b||null)});return a.f(c)},gj=function(a){return a.Ob.then(function(){return a.getRedirectResult()}).c(function(){}).then(function(){if(!a.Qa)return a.Lc()}).c(function(){}).then(function(){if(!a.Qa){a.Rc=
!0;var b=a.oa;b.i.addListener(aj,b.u,a.Lc)}})};Y.prototype.mf=function(){var a=this;return dj(this.oa,X(this).options.authDomain).then(function(b){if(!a.Qa){var c;if(c=Z(a)&&b){c=Z(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return Z(a).copy(b),Z(a).getToken();if(Z(a)||b)ej(a,b),b&&(Fi(b),b.Ha=a.cb),a.m&&a.m.subscribe(a),a.Ea()}})};Y.prototype.Ua=function(a){return bj(this.oa,a)};Y.prototype.He=function(){this.Ea();this.Ua(Z(this))};
Y.prototype.Ge=function(){this.signOut()};var lj=function(a,b){return a.f(b.then(function(b){return jj(a,b)}).then(function(){return Z(a)}))};h=Y.prototype;h.Le=function(a){var b=this;this.addAuthTokenListener(function(){a.next(Z(b))})};h.onAuthStateChanged=function(a,b,c){var d=this;this.Rc&&firebase.Promise.resolve().then(function(){q(a)?a(Z(d)):q(a.next)&&a.next(Z(d))});return this.Ze(a,b,c)};
h.getToken=function(a){var b=this,c=this.ua.then(function(){return Z(b)?Z(b).getToken(a).then(function(a){return{accessToken:a}}):null});return this.f(c)};h.signInWithCustomToken=function(a){var b=this;return this.ua.then(function(){return lj(b,Q(b.g,Qg,{token:a}))}).then(function(a){Li(a,"isAnonymous",!1);return b.Ua(a)}).then(function(){return Z(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.ua.then(function(){return lj(c,Q(c.g,Zf,{email:a,password:b}))})};
h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.ua.then(function(){return lj(c,Q(c.g,Ng,{email:a,password:b}))})};h.signInWithCredential=function(a){var b=this;return this.ua.then(function(){return lj(b,a.Ub(b.g))})};h.signInAnonymously=function(){var a=Z(this),b=this;return a&&a.isAnonymous?D(a):this.ua.then(function(){return lj(b,b.g.signInAnonymously())}).then(function(a){Li(a,"isAnonymous",!0);return b.Ua(a)}).then(function(){return Z(b)})};
var X=function(a){return a.app},Z=function(a){return a.currentUser};h=Y.prototype;h.Ea=function(){if(this.Rc)for(var a=0;a<this.Oa.length;a++)if(this.Oa[a])this.Oa[a](Z(this)&&Z(this)._lat||null)};h.addAuthTokenListener=function(a){var b=this;this.Oa.push(a);this.f(this.ua.then(function(){b.Qa||Ha(b.Oa,a)&&a(Z(b)&&Z(b)._lat||null)}))};h.removeAuthTokenListener=function(a){Ka(this.Oa,function(b){return b==a})};
h["delete"]=function(){this.Qa=!0;for(var a=0;a<this.Z.length;a++)this.Z[a].cancel("app-deleted");this.Z=[];this.oa&&(a=this.oa,a.i.removeListener(aj,a.u,this.Lc));this.m&&this.m.unsubscribe(this);return firebase.Promise.resolve()};h.f=function(a){var b=this;this.Z.push(a);nd(a,function(){Ja(b.Z,a)});return a};h.fetchProvidersForEmail=function(a){return this.f(ug(this.g,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};
h.confirmPasswordReset=function(a,b){return this.f(this.g.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.f(this.g.checkActionCode(a).then(function(a){return new zh(a)}))};h.applyActionCode=function(a){return this.f(this.g.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a){return this.f(this.g.sendPasswordResetEmail(a).then(function(){}))};Hh(Y.prototype,{applyActionCode:{name:"applyActionCode",a:[S("code")]},checkActionCode:{name:"checkActionCode",a:[S("code")]},confirmPasswordReset:{name:"confirmPasswordReset",a:[S("code"),S("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",a:[S("email"),S("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",a:[S("email")]},getRedirectResult:{name:"getRedirectResult",a:[]},onAuthStateChanged:{name:"onAuthStateChanged",a:[Fh(T(),Bh(),"nextOrObserver"),
Bh("opt_error",!0),Bh("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",a:[S("email")]},signInAnonymously:{name:"signInAnonymously",a:[]},signInWithCredential:{name:"signInWithCredential",a:[Dh()]},signInWithCustomToken:{name:"signInWithCustomToken",a:[S("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",a:[S("email"),S("password")]},signInWithPopup:{name:"signInWithPopup",a:[Eh()]},signInWithRedirect:{name:"signInWithRedirect",a:[Eh()]},signOut:{name:"signOut",
a:[]},toJSON:{name:"toJSON",a:[S(null,!0)]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",a:[S("code")]}});
Hh(W.prototype,{"delete":{name:"delete",a:[]},getToken:{name:"getToken",a:[{name:"opt_forceRefresh",fa:"a boolean",optional:!0,ha:function(a){return"boolean"==typeof a}}]},link:{name:"link",a:[Dh()]},linkWithPopup:{name:"linkWithPopup",a:[Eh()]},linkWithRedirect:{name:"linkWithRedirect",a:[Eh()]},reauthenticate:{name:"reauthenticate",a:[Dh()]},reload:{name:"reload",a:[]},sendEmailVerification:{name:"sendEmailVerification",a:[]},toJSON:{name:"toJSON",a:[S(null,!0)]},unlink:{name:"unlink",a:[S("provider")]},
updateEmail:{name:"updateEmail",a:[S("email")]},updatePassword:{name:"updatePassword",a:[S("password")]},updateProfile:{name:"updateProfile",a:[T("profile")]}});Hh(C.prototype,{c:{name:"catch"},then:{name:"then"}});U(ag,"credential",function(a,b){return new Yf(a,b)},[S("email"),S("password")]);Hh(Uf.prototype,{addScope:{name:"addScope",a:[S("scope")]},setCustomParameters:{name:"setCustomParameters",a:[T("customOAuthParameters")]}});U(Uf,"credential",Uf.credential,[Fh(S(),T(),"token")]);
Hh(Vf.prototype,{addScope:{name:"addScope",a:[S("scope")]},setCustomParameters:{name:"setCustomParameters",a:[T("customOAuthParameters")]}});U(Vf,"credential",Vf.credential,[Fh(S(),T(),"token")]);Hh(Wf.prototype,{addScope:{name:"addScope",a:[S("scope")]},setCustomParameters:{name:"setCustomParameters",a:[T("customOAuthParameters")]}});U(Wf,"credential",Wf.credential,[Fh(S(),Fh(T(),Ch()),"idToken"),Fh(S(),Ch(),"accessToken",!0)]);Hh(Xf.prototype,{setCustomParameters:{name:"setCustomParameters",a:[T("customOAuthParameters")]}});
U(Xf,"credential",Xf.credential,[Fh(S(),T(),"token"),S("secret",!0)]);
(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:Y,Error:O};U(a,"EmailAuthProvider",ag,[]);U(a,"FacebookAuthProvider",Uf,[]);U(a,"GithubAuthProvider",Vf,[]);U(a,"GoogleAuthProvider",Wf,[]);U(a,"TwitterAuthProvider",Xf,[]);firebase.INTERNAL.registerService("auth",function(a,c){a=new Y(a);c({INTERNAL:{getToken:r(a.getToken,a),addAuthTokenListener:r(a.addAuthTokenListener,a),removeAuthTokenListener:r(a.removeAuthTokenListener,a)}});return a},
a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:W})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();}).call(this);
}).call(global);
module.exports = firebase.auth;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var firebase = __webpack_require__(34);
(function(){
/*! @license Firebase v3.6.5
    Build: 3.6.5-rc.1
    Terms: https://firebase.google.com/terms/

    ---

    typedarray.js
    Copyright (c) 2010, Linden Research, Inc.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE. */
(function() {var g,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.Vb=function(){return a.Ye?a.Ye:a.Ye=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}
function la(a,b){function c(){}c.prototype=b.prototype;a.wg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.sg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function ma(){this.Wa=-1};function na(){this.Wa=-1;this.Wa=64;this.M=[];this.Vd=[];this.Af=[];this.zd=[];this.zd[0]=128;for(var a=1;a<this.Wa;++a)this.zd[a]=0;this.Pd=this.$b=0;this.reset()}la(na,ma);na.prototype.reset=function(){this.M[0]=1732584193;this.M[1]=4023233417;this.M[2]=2562383102;this.M[3]=271733878;this.M[4]=3285377520;this.Pd=this.$b=0};
function oa(a,b,c){c||(c=0);var d=a.Af;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.M[0];c=a.M[1];for(var h=a.M[2],k=a.M[3],l=a.M[4],m,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),m=1518500249):(f=c^h^k,m=1859775393):60>e?(f=c&h|k&(c|h),m=2400959708):(f=c^h^k,m=3395469782),f=(b<<
5|b>>>27)+f+l+m+d[e]&4294967295,l=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.M[0]=a.M[0]+b&4294967295;a.M[1]=a.M[1]+c&4294967295;a.M[2]=a.M[2]+h&4294967295;a.M[3]=a.M[3]+k&4294967295;a.M[4]=a.M[4]+l&4294967295}
na.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length);for(var c=b-this.Wa,d=0,e=this.Vd,f=this.$b;d<b;){if(0==f)for(;d<=c;)oa(this,a,d),d+=this.Wa;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Wa){oa(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Wa){oa(this,e);f=0;break}}this.$b=f;this.Pd+=b}};function r(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function pa(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function qa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function ra(a){var b=0,c;for(c in a)b++;return b}function sa(a){for(var b in a)return b}function ta(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function ua(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function va(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function wa(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function xa(a,b){var c=wa(a,b,void 0);return c&&a[c]}function ya(a){for(var b in a)return!1;return!0}function za(a){var b={},c;for(c in a)b[c]=a[c];return b};function Aa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Ba(){this.Fd=void 0}
function Ca(a,b,c){switch(typeof b){case "string":Da(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ca(a,a.Fd?a.Fd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Da(f,c),
c.push(":"),Ca(a,a.Fd?a.Fd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Ea={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function Da(a,b){b.push('"',a.replace(Fa,function(a){if(a in Ea)return Ea[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Ea[a]=e+b.toString(16)}),'"')};var t;a:{var Ga=aa.navigator;if(Ga){var Ha=Ga.userAgent;if(Ha){t=Ha;break a}}t=""};var v=Array.prototype,Ia=v.indexOf?function(a,b,c){return v.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ja=v.forEach?function(a,b,c){v.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=v.filter?function(a,b,c){return v.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},La=v.map?function(a,b,c){return v.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Ma=v.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f<h;f++)e.push(arguments[f]);d&&(e[0]=q(b,d));return v.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Ja(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Na=v.every?function(a,b,
c){return v.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Oa(a,b){var c=Pa(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Pa(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Qa(a,b){var c=Ia(a,b);0<=c&&v.splice.call(a,c,1)}function Ra(a,b,c){return 2>=arguments.length?v.slice.call(a,b):v.slice.call(a,b,c)}
function Sa(a,b){a.sort(b||Ta)}function Ta(a,b){return a>b?1:a<b?-1:0};var Ua=-1!=t.indexOf("Opera")||-1!=t.indexOf("OPR"),Va=-1!=t.indexOf("Trident")||-1!=t.indexOf("MSIE"),Wa=-1!=t.indexOf("Gecko")&&-1==t.toLowerCase().indexOf("webkit")&&!(-1!=t.indexOf("Trident")||-1!=t.indexOf("MSIE")),Xa=-1!=t.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(Ua&&aa.opera)return a=aa.opera.version,ha(a)?a():a;Wa?b=/rv\:([^\);]+)(\)|;)/:Va?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(t))?a[1]:"");return Va&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Ya=null,Za=null,$a=null;function ab(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");bb();for(var c=b?Za:Ya,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,k=h?a[e+1]:0,l=e+2<a.length,m=l?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|m>>6,m=m&63;l||(m=64,h||(k=64));d.push(c[u],c[f],c[k],c[m])}return d.join("")}
function bb(){if(!Ya){Ya={};Za={};$a={};for(var a=0;65>a;a++)Ya[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Za[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),$a[Za[a]]=a,62<=a&&($a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function cb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function db(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};function x(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function y(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function A(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(y(a,b,d)+"must be a valid function.");}function eb(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(y(a,b,!0)+"must be a valid context object.");};function fb(a){var b=[];db(a,function(a,d){ea(d)?Ja(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};var gb=firebase.Promise;function hb(){var a=this;this.reject=this.resolve=null;this.ra=new gb(function(b,c){a.resolve=b;a.reject=c})}function ib(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ha(b)&&(jb(a.ra),1===b.length?b(c):b(c,d))}}function jb(a){a.then(void 0,ba)};function kb(a,b){if(!a)throw lb(b);}function lb(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function mb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,kb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function nb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function ob(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):Aa(a)}function B(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ca(new Ba,a,b);a=b.join("")}return a};function pb(a,b){this.committed=a;this.snapshot=b};function qb(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:"")};function rb(a){this.re=a;this.Bd=[];this.Qb=0;this.Xd=-1;this.Fb=null}function sb(a,b,c){a.Xd=b;a.Fb=c;a.Xd<a.Qb&&(a.Fb(),a.Fb=null)}function tb(a,b,c){for(a.Bd[b]=c;a.Bd[a.Qb];){var d=a.Bd[a.Qb];delete a.Bd[a.Qb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;ub(function(){f.re(d[e])})}if(a.Qb===a.Xd){a.Fb&&(clearTimeout(a.Fb),a.Fb(),a.Fb=null);break}a.Qb++}};function vb(){this.pc={}}vb.prototype.set=function(a,b){null==b?delete this.pc[a]:this.pc[a]=b};vb.prototype.get=function(a){return cb(this.pc,a)?this.pc[a]:null};vb.prototype.remove=function(a){delete this.pc[a]};vb.prototype.Ze=!0;function wb(a){this.uc=a;this.Cd="firebase:"}g=wb.prototype;g.set=function(a,b){null==b?this.uc.removeItem(this.Cd+a):this.uc.setItem(this.Cd+a,B(b))};g.get=function(a){a=this.uc.getItem(this.Cd+a);return null==a?null:ob(a)};g.remove=function(a){this.uc.removeItem(this.Cd+a)};g.Ze=!1;g.toString=function(){return this.uc.toString()};function xb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new wb(b)}}catch(c){}return new vb}var yb=xb("localStorage"),zb=xb("sessionStorage");function Ab(a,b,c){this.type=Bb;this.source=a;this.path=b;this.Ga=c}Ab.prototype.Mc=function(a){return this.path.e()?new Ab(this.source,C,this.Ga.Q(a)):new Ab(this.source,D(this.path),this.Ga)};Ab.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ga.toString()+")"};function Cb(a,b){this.type=Db;this.source=a;this.path=b}Cb.prototype.Mc=function(){return this.path.e()?new Cb(this.source,C):new Cb(this.source,D(this.path))};Cb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function Eb(a){this.oc=a}Eb.prototype.getToken=function(a){return this.oc.INTERNAL.getToken(a).then(null,function(a){return a&&"auth/token-not-initialized"===a.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)})};function Fb(a,b){a.oc.INTERNAL.addAuthTokenListener(b)};function Gb(){this.Jd=G}Gb.prototype.j=function(a){return this.Jd.P(a)};Gb.prototype.toString=function(){return this.Jd.toString()};function Hb(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Sc=b;this.ne=c;this.qg=d;this.gf=e||"";this.$a=yb.get("host:"+a)||this.host}function Ib(a,b){b!==a.$a&&(a.$a=b,"s-"===a.$a.substr(0,2)&&yb.set("host:"+a.host,a.$a))}
function Jb(a,b,c){H("string"===typeof b,"typeof type must == string");H("object"===typeof c,"typeof params must == object");if("websocket"===b)b=(a.Sc?"wss://":"ws://")+a.$a+"/.ws?";else if("long_polling"===b)b=(a.Sc?"https://":"http://")+a.$a+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.$a&&(c.ns=a.ne);var d=[];r(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}
Hb.prototype.toString=function(){var a=(this.Sc?"https://":"http://")+this.host;this.gf&&(a+="<"+this.gf+">");return a};function Kb(){this.tc={}}function Lb(a,b,c){n(c)||(c=1);cb(a.tc,b)||(a.tc[b]=0);a.tc[b]+=c}Kb.prototype.get=function(){return za(this.tc)};function Mb(a){this.Ef=a;this.rd=null}Mb.prototype.get=function(){var a=this.Ef.get(),b=za(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};function Nb(){this.vb=[]}function Ob(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Yb();null===c||f.Z(c.Yb())||(a.vb.push(c),c=null);null===c&&(c=new Pb(f));c.add(e)}c&&a.vb.push(c)}function Qb(a,b,c){Ob(a,c);Rb(a,function(a){return a.Z(b)})}function Sb(a,b,c){Ob(a,c);Rb(a,function(a){return a.contains(b)||b.contains(a)})}
function Rb(a,b){for(var c=!0,d=0;d<a.vb.length;d++){var e=a.vb[d];if(e)if(e=e.Yb(),b(e)){for(var e=a.vb[d],f=0;f<e.jd.length;f++){var h=e.jd[f];if(null!==h){e.jd[f]=null;var k=h.Tb();Tb&&E("event: "+h.toString());ub(k)}}a.vb[d]=null}else c=!1}c&&(a.vb=[])}function Pb(a){this.qa=a;this.jd=[]}Pb.prototype.add=function(a){this.jd.push(a)};Pb.prototype.Yb=function(){return this.qa};function Ub(a,b,c,d){this.$d=b;this.Md=c;this.Dd=d;this.hd=a}Ub.prototype.Yb=function(){var a=this.Md.wb();return"value"===this.hd?a.path:a.getParent().path};Ub.prototype.ee=function(){return this.hd};Ub.prototype.Tb=function(){return this.$d.Tb(this)};Ub.prototype.toString=function(){return this.Yb().toString()+":"+this.hd+":"+B(this.Md.Qe())};function Vb(a,b,c){this.$d=a;this.error=b;this.path=c}Vb.prototype.Yb=function(){return this.path};Vb.prototype.ee=function(){return"cancel"};
Vb.prototype.Tb=function(){return this.$d.Tb(this)};Vb.prototype.toString=function(){return this.path.toString()+":cancel"};function Wb(){}Wb.prototype.Te=function(){return null};Wb.prototype.de=function(){return null};var Xb=new Wb;function Yb(a,b,c){this.xf=a;this.Ka=b;this.yd=c}Yb.prototype.Te=function(a){var b=this.Ka.N;if(Zb(b,a))return b.j().Q(a);b=null!=this.yd?new $b(this.yd,!0,!1):this.Ka.w();return this.xf.qc(a,b)};Yb.prototype.de=function(a,b,c){var d=null!=this.yd?this.yd:ac(this.Ka);a=this.xf.Wd(d,b,1,c,a);return 0===a.length?null:a[0]};function I(a,b,c,d){this.type=a;this.Ja=b;this.Xa=c;this.oe=d;this.Dd=void 0}function bc(a){return new I(cc,a)}var cc="value";function $b(a,b,c){this.A=a;this.da=b;this.Sb=c}function dc(a){return a.da}function ec(a){return a.Sb}function fc(a,b){return b.e()?a.da&&!a.Sb:Zb(a,J(b))}function Zb(a,b){return a.da&&!a.Sb||a.A.Da(b)}$b.prototype.j=function(){return this.A};function gc(a,b){return hc(a.name,b.name)}function ic(a,b){return hc(a,b)};function K(a,b){this.name=a;this.R=b}function jc(a,b){return new K(a,b)};function kc(a,b){return a&&"object"===typeof a?(H(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function lc(a,b){var c=new mc;nc(a,new L(""),function(a,e){oc(c,a,pc(e,b))});return c}function pc(a,b){var c=a.C().H(),c=kc(c,b),d;if(a.J()){var e=kc(a.Ca(),b);return e!==a.Ca()||c!==a.C().H()?new qc(e,M(c)):a}d=a;c!==a.C().H()&&(d=d.fa(new qc(c)));a.O(N,function(a,c){var e=pc(c,b);e!==c&&(d=d.T(a,e))});return d};var rc=function(){var a=1;return function(){return a++}}(),H=kb,sc=lb;
function tc(a){try{var b;bb();for(var c=$a,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],h=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var l=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==l)throw Error();d.push(f<<2|h>>4);64!=k&&(d.push(h<<4&240|k>>2),64!=l&&d.push(k<<6&192|l))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ra(d,c,c+8192));b=a}return b}catch(m){E("base64Decode failed: ",
m)}return null}function uc(a){var b=mb(a);a=new na;a.update(b);var b=[],c=8*a.Pd;56>a.$b?a.update(a.zd,56-a.$b):a.update(a.zd,a.Wa-(a.$b-56));for(var d=a.Wa-1;56<=d;d--)a.Vd[d]=c&255,c/=256;oa(a,a.Vd);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.M[d]>>e&255,++c;return ab(b)}function vc(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+vc.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b}var Tb=null,wc=!0;
function xc(a,b){kb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Tb=q(console.log,console):"object"===typeof console.log&&(Tb=function(a){console.log(a)})),b&&zb.set("logging_enabled",!0)):ha(a)?Tb=a:(Tb=null,zb.remove("logging_enabled"))}function E(a){!0===wc&&(wc=!1,null===Tb&&!0===zb.get("logging_enabled")&&xc(!0));if(Tb){var b=vc.apply(null,arguments);Tb(b)}}
function yc(a){return function(){E(a,arguments)}}function zc(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+vc.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Ac(a){var b=vc.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function O(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+vc.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function Bc(a){var b,c,d,e,f,h=a;f=c=a=b="";d=!0;e="https";if(p(h)){var k=h.indexOf("//");0<=k&&(e=h.substring(0,k-1),h=h.substring(k+2));k=h.indexOf("/");-1===k&&(k=h.length);b=h.substring(0,k);f="";h=h.substring(k).split("/");for(k=0;k<h.length;k++)if(0<h[k].length){var l=h[k];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch(m){}f+="/"+l}h=b.split(".");3===h.length?(a=h[1],c=h[0].toLowerCase()):2===h.length&&(a=h[0]);k=b.indexOf(":");0<=k&&(d="https"===e||"wss"===e)}"firebase"===a&&Ac(b+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
c&&"undefined"!=c||Ac("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");return{jc:new Hb(b,d,c,"ws"===e||"wss"===e),path:new L(f)}}function Cc(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function Dc(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function hc(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=Ec(a),d=Ec(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function Fc(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}
function Gc(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=Gc(a[b[d]]);return c+"}"}function Hc(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function Ic(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else r(a,b)}
function Jc(a){H(!Cc(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var Kc=/^-?\d{1,10}$/;function Ec(a){return Kc.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function ub(a){try{a()}catch(b){setTimeout(function(){O("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function Lc(a,b,c){Object.defineProperty(a,b,{get:c})}function Mc(a,b){var c=setTimeout(a,b);"object"===typeof c&&c.unref&&c.unref();return c};function Nc(a){var b={},c={},d={},e="";try{var f=a.split("."),b=ob(tc(f[0])||""),c=ob(tc(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(h){}return{tg:b,Ie:c,data:d,mg:e}}function Oc(a){a=Nc(a);var b=a.Ie;return!!a.mg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")}function Pc(a){a=Nc(a).Ie;return"object"===typeof a&&!0===w(a,"admin")};function Qc(a,b,c){this.f=yc("p:rest:");this.L=a;this.Gb=b;this.$c=c;this.$={}}function Rc(a,b){if(n(b))return"tag$"+b;H(Sc(a.m),"should have a tag if it's not a default query.");return a.path.toString()}g=Qc.prototype;
g.$e=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ja());var f=Rc(a,c),h={};this.$[f]=h;a=Tc(a.m);var k=this;Uc(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.Gb(e,u,!1,c);w(k.$,f)===h&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};g.uf=function(a,b){var c=Rc(a,b);delete this.$[c]};g.kf=function(){};g.pe=function(){};g.cf=function(){};g.xd=function(){};g.put=function(){};g.af=function(){};g.we=function(){};
function Uc(a,b,c,d){c=c||{};c.format="export";a.$c.getToken(!1).then(function(e){(e=e&&e.accessToken)&&(c.auth=e);var f=(a.L.Sc?"https://":"http://")+a.L.host+b+"?"+fb(c);a.f("Sending REST request for "+f);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(d&&4===h.readyState){a.f("REST Response for "+f+" received. status:",h.status,"response:",h.responseText);var b=null;if(200<=h.status&&300>h.status){try{b=ob(h.responseText)}catch(c){O("Failed to parse JSON response for "+f+": "+h.responseText)}d(null,
b)}else 401!==h.status&&404!==h.status&&O("Got unsuccessful REST response for "+f+" Status: "+h.status),d(h.status);d=null}};h.open("GET",f,!0);h.send()})};function Vc(a,b,c){this.type=Wc;this.source=a;this.path=b;this.children=c}Vc.prototype.Mc=function(a){if(this.path.e())return a=this.children.subtree(new L(a)),a.e()?null:a.value?new Ab(this.source,C,a.value):new Vc(this.source,C,a);H(J(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new Vc(this.source,D(this.path),this.children)};Vc.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function Xc(a,b){this.rf={};this.Vc=new Mb(a);this.va=b;var c=1E4+2E4*Math.random();Mc(q(this.lf,this),Math.floor(c))}Xc.prototype.lf=function(){var a=this.Vc.get(),b={},c=!1,d;for(d in a)0<a[d]&&cb(this.rf,d)&&(b[d]=a[d],c=!0);c&&this.va.we(b);Mc(q(this.lf,this),Math.floor(6E5*Math.random()))};var Yc={},Zc={};function $c(a){a=a.toString();Yc[a]||(Yc[a]=new Kb);return Yc[a]}function ad(a,b){var c=a.toString();Zc[c]||(Zc[c]=b());return Zc[c]};var bd=null;"undefined"!==typeof MozWebSocket?bd=MozWebSocket:"undefined"!==typeof WebSocket&&(bd=WebSocket);function cd(a,b,c,d){this.Yd=a;this.f=yc(this.Yd);this.frames=this.zc=null;this.pb=this.qb=this.De=0;this.Va=$c(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.Je=Jb(b,"websocket",a)}var dd;
cd.prototype.open=function(a,b){this.ib=b;this.Xf=a;this.f("Websocket connecting to "+this.Je);this.wc=!1;yb.set("previous_websocket_failure",!0);try{this.Ia=new bd(this.Je)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.bb();return}var e=this;this.Ia.onopen=function(){e.f("Websocket connected.");e.wc=!0};this.Ia.onclose=function(){e.f("Websocket connection was disconnected.");e.Ia=null;e.bb()};this.Ia.onmessage=function(a){if(null!==e.Ia)if(a=a.data,e.pb+=
a.length,Lb(e.Va,"bytes_received",a.length),ed(e),null!==e.frames)fd(e,a);else{a:{H(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.De=b;e.frames=[];a=null;break a}}e.De=1;e.frames=[]}null!==a&&fd(e,a)}};this.Ia.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.bb()}};cd.prototype.start=function(){};
cd.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==bd&&!dd};cd.responsesRequiredToBeHealthy=2;cd.healthyTimeout=3E4;g=cd.prototype;g.sd=function(){yb.remove("previous_websocket_failure")};function fd(a,b){a.frames.push(b);if(a.frames.length==a.De){var c=a.frames.join("");a.frames=null;c=ob(c);a.Xf(c)}}
g.send=function(a){ed(this);a=B(a);this.qb+=a.length;Lb(this.Va,"bytes_sent",a.length);a=Hc(a,16384);1<a.length&&gd(this,String(a.length));for(var b=0;b<a.length;b++)gd(this,a[b])};g.Tc=function(){this.Ab=!0;this.zc&&(clearInterval(this.zc),this.zc=null);this.Ia&&(this.Ia.close(),this.Ia=null)};g.bb=function(){this.Ab||(this.f("WebSocket is closing itself"),this.Tc(),this.ib&&(this.ib(this.wc),this.ib=null))};g.close=function(){this.Ab||(this.f("WebSocket is being closed"),this.Tc())};
function ed(a){clearInterval(a.zc);a.zc=setInterval(function(){a.Ia&&gd(a,"0");ed(a)},Math.floor(45E3))}function gd(a,b){try{a.Ia.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(q(a.bb,a),0)}};function hd(){this.fb={}}
function jd(a,b){var c=b.type,d=b.Xa;H("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");H(".priority"!==d,"Only non-priority child changes can be tracked.");var e=w(a.fb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.fb[d]=new I("child_changed",b.Ja,d,e.Ja);else if("child_removed"==c&&"child_added"==f)delete a.fb[d];else if("child_removed"==c&&"child_changed"==f)a.fb[d]=new I("child_removed",e.oe,d);else if("child_changed"==c&&
"child_added"==f)a.fb[d]=new I("child_added",b.Ja,d);else if("child_changed"==c&&"child_changed"==f)a.fb[d]=new I("child_changed",b.Ja,d,e.oe);else throw sc("Illegal combination of changes: "+b+" occurred after "+e);}else a.fb[d]=b};function kd(a){this.V=a;this.g=a.m.g}function ld(a,b,c,d){var e=[],f=[];Ja(b,function(b){"child_changed"===b.type&&a.g.nd(b.oe,b.Ja)&&f.push(new I("child_moved",b.Ja,b.Xa))});md(a,e,"child_removed",b,d,c);md(a,e,"child_added",b,d,c);md(a,e,"child_moved",f,d,c);md(a,e,"child_changed",b,d,c);md(a,e,cc,b,d,c);return e}function md(a,b,c,d,e,f){d=Ka(d,function(a){return a.type===c});Sa(d,q(a.Ff,a));Ja(d,function(c){var d=nd(a,c,f);Ja(e,function(e){e.nf(c.type)&&b.push(e.createEvent(d,a.V))})})}
function nd(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Dd=c.Ve(b.Xa,b.Ja,a.g));return b}kd.prototype.Ff=function(a,b){if(null==a.Xa||null==b.Xa)throw sc("Should only compare child_ events.");return this.g.compare(new K(a.Xa,a.Ja),new K(b.Xa,b.Ja))};function od(a,b){this.Sd=a;this.Df=b}function pd(a){this.U=a}
pd.prototype.eb=function(a,b,c,d){var e=new hd,f;if(b.type===Bb)b.source.ce?c=qd(this,a,b.path,b.Ga,c,d,e):(H(b.source.Se,"Unknown source."),f=b.source.Ce||ec(a.w())&&!b.path.e(),c=rd(this,a,b.path,b.Ga,c,d,f,e));else if(b.type===Wc)b.source.ce?c=sd(this,a,b.path,b.children,c,d,e):(H(b.source.Se,"Unknown source."),f=b.source.Ce||ec(a.w()),c=td(this,a,b.path,b.children,c,d,f,e));else if(b.type===ud)if(b.Id)if(b=b.path,null!=c.lc(b))c=a;else{f=new Yb(c,a,d);d=a.N.j();if(b.e()||".priority"===J(b))dc(a.w())?
b=c.Aa(ac(a)):(b=a.w().j(),H(b instanceof P,"serverChildren would be complete if leaf node"),b=c.rc(b)),b=this.U.ya(d,b,e);else{var h=J(b),k=c.qc(h,a.w());null==k&&Zb(a.w(),h)&&(k=d.Q(h));b=null!=k?this.U.F(d,h,k,D(b),f,e):a.N.j().Da(h)?this.U.F(d,h,G,D(b),f,e):d;b.e()&&dc(a.w())&&(d=c.Aa(ac(a)),d.J()&&(b=this.U.ya(b,d,e)))}d=dc(a.w())||null!=c.lc(C);c=vd(a,b,d,this.U.Na())}else c=wd(this,a,b.path,b.Ob,c,d,e);else if(b.type===Db)d=b.path,b=a.w(),f=b.j(),h=b.da||d.e(),c=xd(this,new yd(a.N,new $b(f,
h,b.Sb)),d,c,Xb,e);else throw sc("Unknown operation type: "+b.type);e=ta(e.fb);d=c;b=d.N;b.da&&(f=b.j().J()||b.j().e(),h=zd(a),(0<e.length||!a.N.da||f&&!b.j().Z(h)||!b.j().C().Z(h.C()))&&e.push(bc(zd(d))));return new od(c,e)};
function xd(a,b,c,d,e,f){var h=b.N;if(null!=d.lc(c))return b;var k;if(c.e())H(dc(b.w()),"If change path is empty, we must have complete server data"),ec(b.w())?(e=ac(b),d=d.rc(e instanceof P?e:G)):d=d.Aa(ac(b)),f=a.U.ya(b.N.j(),d,f);else{var l=J(c);if(".priority"==l)H(1==Ad(c),"Can't have a priority with additional path components"),f=h.j(),k=b.w().j(),d=d.ad(c,f,k),f=null!=d?a.U.fa(f,d):h.j();else{var m=D(c);Zb(h,l)?(k=b.w().j(),d=d.ad(c,h.j(),k),d=null!=d?h.j().Q(l).F(m,d):h.j().Q(l)):d=d.qc(l,
b.w());f=null!=d?a.U.F(h.j(),l,d,m,e,f):h.j()}}return vd(b,f,h.da||c.e(),a.U.Na())}function rd(a,b,c,d,e,f,h,k){var l=b.w();h=h?a.U:a.U.Ub();if(c.e())d=h.ya(l.j(),d,null);else if(h.Na()&&!l.Sb)d=l.j().F(c,d),d=h.ya(l.j(),d,null);else{var m=J(c);if(!fc(l,c)&&1<Ad(c))return b;var u=D(c);d=l.j().Q(m).F(u,d);d=".priority"==m?h.fa(l.j(),d):h.F(l.j(),m,d,u,Xb,null)}l=l.da||c.e();b=new yd(b.N,new $b(d,l,h.Na()));return xd(a,b,c,e,new Yb(e,b,f),k)}
function qd(a,b,c,d,e,f,h){var k=b.N;e=new Yb(e,b,f);if(c.e())h=a.U.ya(b.N.j(),d,h),a=vd(b,h,!0,a.U.Na());else if(f=J(c),".priority"===f)h=a.U.fa(b.N.j(),d),a=vd(b,h,k.da,k.Sb);else{c=D(c);var l=k.j().Q(f);if(!c.e()){var m=e.Te(f);d=null!=m?".priority"===Bd(c)&&m.P(c.parent()).e()?m:m.F(c,d):G}l.Z(d)?a=b:(h=a.U.F(k.j(),f,d,c,e,h),a=vd(b,h,k.da,a.U.Na()))}return a}
function sd(a,b,c,d,e,f,h){var k=b;Cd(d,function(d,m){var u=c.n(d);Zb(b.N,J(u))&&(k=qd(a,k,u,m,e,f,h))});Cd(d,function(d,m){var u=c.n(d);Zb(b.N,J(u))||(k=qd(a,k,u,m,e,f,h))});return k}function Dd(a,b){Cd(b,function(b,d){a=a.F(b,d)});return a}
function td(a,b,c,d,e,f,h,k){if(b.w().j().e()&&!dc(b.w()))return b;var l=b;c=c.e()?d:Ed(Q,c,d);var m=b.w().j();c.children.ha(function(c,d){if(m.Da(c)){var F=b.w().j().Q(c),F=Dd(F,d);l=rd(a,l,new L(c),F,e,f,h,k)}});c.children.ha(function(c,d){var F=!Zb(b.w(),c)&&null==d.value;m.Da(c)||F||(F=b.w().j().Q(c),F=Dd(F,d),l=rd(a,l,new L(c),F,e,f,h,k))});return l}
function wd(a,b,c,d,e,f,h){if(null!=e.lc(c))return b;var k=ec(b.w()),l=b.w();if(null!=d.value){if(c.e()&&l.da||fc(l,c))return rd(a,b,c,l.j().P(c),e,f,k,h);if(c.e()){var m=Q;l.j().O(Fd,function(a,b){m=m.set(new L(a),b)});return td(a,b,c,m,e,f,k,h)}return b}m=Q;Cd(d,function(a){var b=c.n(a);fc(l,b)&&(m=m.set(a,l.j().P(b)))});return td(a,b,c,m,e,f,k,h)};function Gd(a){this.g=a}g=Gd.prototype;g.F=function(a,b,c,d,e,f){H(a.yc(this.g),"A node must be indexed if only a child is updated");e=a.Q(b);if(e.P(d).Z(c.P(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Da(b)?jd(f,new I("child_removed",e,b)):H(a.J(),"A child remove without an old child only makes sense on a leaf node"):e.e()?jd(f,new I("child_added",c,b)):jd(f,new I("child_changed",c,b,e)));return a.J()&&c.e()?a:a.T(b,c).nb(this.g)};
g.ya=function(a,b,c){null!=c&&(a.J()||a.O(N,function(a,e){b.Da(a)||jd(c,new I("child_removed",e,a))}),b.J()||b.O(N,function(b,e){if(a.Da(b)){var f=a.Q(b);f.Z(e)||jd(c,new I("child_changed",e,b,f))}else jd(c,new I("child_added",e,b))}));return b.nb(this.g)};g.fa=function(a,b){return a.e()?G:a.fa(b)};g.Na=function(){return!1};g.Ub=function(){return this};function Hd(a){this.fe=new Gd(a.g);this.g=a.g;var b;a.ka?(b=Id(a),b=a.g.Ec(Jd(a),b)):b=a.g.Hc();this.Uc=b;a.na?(b=Kd(a),a=a.g.Ec(Ld(a),b)):a=a.g.Fc();this.vc=a}g=Hd.prototype;g.matches=function(a){return 0>=this.g.compare(this.Uc,a)&&0>=this.g.compare(a,this.vc)};g.F=function(a,b,c,d,e,f){this.matches(new K(b,c))||(c=G);return this.fe.F(a,b,c,d,e,f)};
g.ya=function(a,b,c){b.J()&&(b=G);var d=b.nb(this.g),d=d.fa(G),e=this;b.O(N,function(a,b){e.matches(new K(a,b))||(d=d.T(a,G))});return this.fe.ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.fe};function Md(a){this.sa=new Hd(a);this.g=a.g;H(a.xa,"Only valid if limit has been set");this.oa=a.oa;this.Ib=!Nd(a)}g=Md.prototype;g.F=function(a,b,c,d,e,f){this.sa.matches(new K(b,c))||(c=G);return a.Q(b).Z(c)?a:a.Eb()<this.oa?this.sa.Ub().F(a,b,c,d,e,f):Od(this,a,b,c,e,f)};
g.ya=function(a,b,c){var d;if(b.J()||b.e())d=G.nb(this.g);else if(2*this.oa<b.Eb()&&b.yc(this.g)){d=G.nb(this.g);b=this.Ib?b.Zb(this.sa.vc,this.g):b.Xb(this.sa.Uc,this.g);for(var e=0;0<b.Pa.length&&e<this.oa;){var f=R(b),h;if(h=this.Ib?0>=this.g.compare(this.sa.Uc,f):0>=this.g.compare(f,this.sa.vc))d=d.T(f.name,f.R),e++;else break}}else{d=b.nb(this.g);d=d.fa(G);var k,l,m;if(this.Ib){b=d.We(this.g);k=this.sa.vc;l=this.sa.Uc;var u=Pd(this.g);m=function(a,b){return u(b,a)}}else b=d.Wb(this.g),k=this.sa.Uc,
l=this.sa.vc,m=Pd(this.g);for(var e=0,z=!1;0<b.Pa.length;)f=R(b),!z&&0>=m(k,f)&&(z=!0),(h=z&&e<this.oa&&0>=m(f,l))?e++:d=d.T(f.name,G)}return this.sa.Ub().ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.sa.Ub()};
function Od(a,b,c,d,e,f){var h;if(a.Ib){var k=Pd(a.g);h=function(a,b){return k(b,a)}}else h=Pd(a.g);H(b.Eb()==a.oa,"");var l=new K(c,d),m=a.Ib?Qd(b,a.g):Rd(b,a.g),u=a.sa.matches(l);if(b.Da(c)){for(var z=b.Q(c),m=e.de(a.g,m,a.Ib);null!=m&&(m.name==c||b.Da(m.name));)m=e.de(a.g,m,a.Ib);e=null==m?1:h(m,l);if(u&&!d.e()&&0<=e)return null!=f&&jd(f,new I("child_changed",d,c,z)),b.T(c,d);null!=f&&jd(f,new I("child_removed",z,c));b=b.T(c,G);return null!=m&&a.sa.matches(m)?(null!=f&&jd(f,new I("child_added",
m.R,m.name)),b.T(m.name,m.R)):b}return d.e()?b:u&&0<=h(m,l)?(null!=f&&(jd(f,new I("child_removed",m.R,m.name)),jd(f,new I("child_added",d,c))),b.T(c,d).T(m.name,G)):b};function qc(a,b){this.B=a;H(n(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||G;Sd(this.aa);this.Db=null}var Td=["object","boolean","number","string"];g=qc.prototype;g.J=function(){return!0};g.C=function(){return this.aa};g.fa=function(a){return new qc(this.B,a)};g.Q=function(a){return".priority"===a?this.aa:G};g.P=function(a){return a.e()?this:".priority"===J(a)?this.aa:G};g.Da=function(){return!1};g.Ve=function(){return null};
g.T=function(a,b){return".priority"===a?this.fa(b):b.e()&&".priority"!==a?this:G.T(a,b).fa(this.aa)};g.F=function(a,b){var c=J(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;H(".priority"!==c||1===Ad(a),".priority must be the last token in a path");return this.T(c,G.F(D(a),b))};g.e=function(){return!1};g.Eb=function(){return 0};g.O=function(){return!1};g.H=function(a){return a&&!this.C().e()?{".value":this.Ca(),".priority":this.C().H()}:this.Ca()};
g.hash=function(){if(null===this.Db){var a="";this.aa.e()||(a+="priority:"+Ud(this.aa.H())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+Jc(this.B):a+this.B;this.Db=uc(a)}return this.Db};g.Ca=function(){return this.B};g.sc=function(a){if(a===G)return 1;if(a instanceof P)return-1;H(a.J(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=Ia(Td,b),e=Ia(Td,c);H(0<=d,"Unknown leaf type: "+b);H(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
g.nb=function(){return this};g.yc=function(){return!0};g.Z=function(a){return a===this?!0:a.J()?this.B===a.B&&this.aa.Z(a.aa):!1};g.toString=function(){return B(this.H(!0))};function Vd(){}var Wd={};function Pd(a){return q(a.compare,a)}Vd.prototype.nd=function(a,b){return 0!==this.compare(new K("[MIN_NAME]",a),new K("[MIN_NAME]",b))};Vd.prototype.Hc=function(){return Xd};function Yd(a){H(!a.e()&&".priority"!==J(a),"Can't create PathIndex with empty path or .priority key");this.bc=a}la(Yd,Vd);g=Yd.prototype;g.xc=function(a){return!a.P(this.bc).e()};g.compare=function(a,b){var c=a.R.P(this.bc),d=b.R.P(this.bc),c=c.sc(d);return 0===c?hc(a.name,b.name):c};
g.Ec=function(a,b){var c=M(a),c=G.F(this.bc,c);return new K(b,c)};g.Fc=function(){var a=G.F(this.bc,Zd);return new K("[MAX_NAME]",a)};g.toString=function(){return this.bc.slice().join("/")};function $d(){}la($d,Vd);g=$d.prototype;g.compare=function(a,b){var c=a.R.C(),d=b.R.C(),c=c.sc(d);return 0===c?hc(a.name,b.name):c};g.xc=function(a){return!a.C().e()};g.nd=function(a,b){return!a.C().Z(b.C())};g.Hc=function(){return Xd};g.Fc=function(){return new K("[MAX_NAME]",new qc("[PRIORITY-POST]",Zd))};
g.Ec=function(a,b){var c=M(a);return new K(b,new qc("[PRIORITY-POST]",c))};g.toString=function(){return".priority"};var N=new $d;function ae(){}la(ae,Vd);g=ae.prototype;g.compare=function(a,b){return hc(a.name,b.name)};g.xc=function(){throw sc("KeyIndex.isDefinedOn not expected to be called.");};g.nd=function(){return!1};g.Hc=function(){return Xd};g.Fc=function(){return new K("[MAX_NAME]",G)};g.Ec=function(a){H(p(a),"KeyIndex indexValue must always be a string.");return new K(a,G)};g.toString=function(){return".key"};
var Fd=new ae;function be(){}la(be,Vd);g=be.prototype;g.compare=function(a,b){var c=a.R.sc(b.R);return 0===c?hc(a.name,b.name):c};g.xc=function(){return!0};g.nd=function(a,b){return!a.Z(b)};g.Hc=function(){return Xd};g.Fc=function(){return ce};g.Ec=function(a,b){var c=M(a);return new K(b,c)};g.toString=function(){return".value"};var de=new be;function ee(){this.Rb=this.na=this.Kb=this.ka=this.xa=!1;this.oa=0;this.mb="";this.dc=null;this.zb="";this.ac=null;this.xb="";this.g=N}var fe=new ee;function Nd(a){return""===a.mb?a.ka:"l"===a.mb}function Jd(a){H(a.ka,"Only valid if start has been set");return a.dc}function Id(a){H(a.ka,"Only valid if start has been set");return a.Kb?a.zb:"[MIN_NAME]"}function Ld(a){H(a.na,"Only valid if end has been set");return a.ac}
function Kd(a){H(a.na,"Only valid if end has been set");return a.Rb?a.xb:"[MAX_NAME]"}function ge(a){var b=new ee;b.xa=a.xa;b.oa=a.oa;b.ka=a.ka;b.dc=a.dc;b.Kb=a.Kb;b.zb=a.zb;b.na=a.na;b.ac=a.ac;b.Rb=a.Rb;b.xb=a.xb;b.g=a.g;b.mb=a.mb;return b}g=ee.prototype;g.le=function(a){var b=ge(this);b.xa=!0;b.oa=a;b.mb="l";return b};g.me=function(a){var b=ge(this);b.xa=!0;b.oa=a;b.mb="r";return b};g.Nd=function(a,b){var c=ge(this);c.ka=!0;n(a)||(a=null);c.dc=a;null!=b?(c.Kb=!0,c.zb=b):(c.Kb=!1,c.zb="");return c};
g.gd=function(a,b){var c=ge(this);c.na=!0;n(a)||(a=null);c.ac=a;n(b)?(c.Rb=!0,c.xb=b):(c.vg=!1,c.xb="");return c};function he(a,b){var c=ge(a);c.g=b;return c}function ie(a){var b={};a.ka&&(b.sp=a.dc,a.Kb&&(b.sn=a.zb));a.na&&(b.ep=a.ac,a.Rb&&(b.en=a.xb));if(a.xa){b.l=a.oa;var c=a.mb;""===c&&(c=Nd(a)?"l":"r");b.vf=c}a.g!==N&&(b.i=a.g.toString());return b}function S(a){return!(a.ka||a.na||a.xa)}function Sc(a){return S(a)&&a.g==N}
function Tc(a){var b={};if(Sc(a))return b;var c;a.g===N?c="$priority":a.g===de?c="$value":a.g===Fd?c="$key":(H(a.g instanceof Yd,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.ka&&(b.startAt=B(a.dc),a.Kb&&(b.startAt+=","+B(a.zb)));a.na&&(b.endAt=B(a.ac),a.Rb&&(b.endAt+=","+B(a.xb)));a.xa&&(Nd(a)?b.limitToFirst=a.oa:b.limitToLast=a.oa);return b}g.toString=function(){return B(ie(this))};function je(a,b){this.od=a;this.cc=b}je.prototype.get=function(a){var b=w(this.od,a);if(!b)throw Error("No index defined for "+a);return b===Wd?null:b};function ke(a,b,c){var d=pa(a.od,function(d,f){var h=w(a.cc,f);H(h,"Missing index implementation for "+f);if(d===Wd){if(h.xc(b.R)){for(var k=[],l=c.Wb(jc),m=R(l);m;)m.name!=b.name&&k.push(m),m=R(l);k.push(b);return le(k,Pd(h))}return Wd}h=c.get(b.name);k=d;h&&(k=k.remove(new K(b.name,h)));return k.Oa(b,b.R)});return new je(d,a.cc)}
function me(a,b,c){var d=pa(a.od,function(a){if(a===Wd)return a;var d=c.get(b.name);return d?a.remove(new K(b.name,d)):a});return new je(d,a.cc)}var ne=new je({".priority":Wd},{".priority":N});function oe(){this.set={}}g=oe.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return cb(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return ya(this.set)};g.count=function(){return ra(this.set)};function pe(a,b){r(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];r(this.set,function(b,c){a.push(c)});return a};function qe(a,b,c,d){this.Yd=a;this.f=yc(a);this.jc=b;this.pb=this.qb=0;this.Va=$c(b);this.tf=c;this.wc=!1;this.Cb=d;this.Yc=function(a){return Jb(b,"long_polling",a)}}var re,se;
qe.prototype.open=function(a,b){this.Me=0;this.ia=b;this.bf=new rb(a);this.Ab=!1;var c=this;this.sb=setTimeout(function(){c.f("Timed out trying to connect.");c.bb();c.sb=null},Math.floor(3E4));Dc(function(){if(!c.Ab){c.Ta=new te(function(a,b,d,k,l){ue(c,arguments);if(c.Ta)if(c.sb&&(clearTimeout(c.sb),c.sb=null),c.wc=!0,"start"==a)c.id=b,c.ff=d;else if("close"===a)b?(c.Ta.Kd=!1,sb(c.bf,b,function(){c.bb()})):c.bb();else throw Error("Unrecognized command received: "+a);},function(a,b){ue(c,arguments);
tb(c.bf,a,b)},function(){c.bb()},c.Yc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Ta.Qd&&(a.cb=c.Ta.Qd);a.v="5";c.tf&&(a.s=c.tf);c.Cb&&(a.ls=c.Cb);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Yc(a);c.f("Connecting via long-poll to "+a);ve(c.Ta,a,function(){})}})};
qe.prototype.start=function(){var a=this.Ta,b=this.ff;a.Vf=this.id;a.Wf=b;for(a.Ud=!0;we(a););a=this.id;b=this.ff;this.fc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.fc.src=this.Yc(c);this.fc.style.display="none";document.body.appendChild(this.fc)};
qe.isAvailable=function(){return re||!se&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.rg)&&!0};g=qe.prototype;g.sd=function(){};g.Tc=function(){this.Ab=!0;this.Ta&&(this.Ta.close(),this.Ta=null);this.fc&&(document.body.removeChild(this.fc),this.fc=null);this.sb&&(clearTimeout(this.sb),this.sb=null)};
g.bb=function(){this.Ab||(this.f("Longpoll is closing itself"),this.Tc(),this.ia&&(this.ia(this.wc),this.ia=null))};g.close=function(){this.Ab||(this.f("Longpoll is being closed."),this.Tc())};g.send=function(a){a=B(a);this.qb+=a.length;Lb(this.Va,"bytes_sent",a.length);a=mb(a);a=ab(a,!0);a=Hc(a,1840);for(var b=0;b<a.length;b++){var c=this.Ta;c.Qc.push({jg:this.Me,pg:a.length,Oe:a[b]});c.Ud&&we(c);this.Me++}};function ue(a,b){var c=B(b).length;a.pb+=c;Lb(a.Va,"bytes_received",c)}
function te(a,b,c,d){this.Yc=d;this.ib=c;this.te=new oe;this.Qc=[];this.Zd=Math.floor(1E8*Math.random());this.Kd=!0;this.Qd=rc();window["pLPCommand"+this.Qd]=a;window["pRTLPCB"+this.Qd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||E("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.gb=a.contentDocument:a.contentWindow?a.gb=a.contentWindow.document:a.document&&(a.gb=a.document);this.Ea=a;a="";this.Ea.src&&"javascript:"===this.Ea.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ea.gb.open(),this.Ea.gb.write(a),this.Ea.gb.close()}catch(f){E("frame writing exception"),f.stack&&E(f.stack),E(f)}}
te.prototype.close=function(){this.Ud=!1;if(this.Ea){this.Ea.gb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ea&&(document.body.removeChild(a.Ea),a.Ea=null)},Math.floor(0))}var b=this.ib;b&&(this.ib=null,b())};
function we(a){if(a.Ud&&a.Kd&&a.te.count()<(0<a.Qc.length?2:1)){a.Zd++;var b={};b.id=a.Vf;b.pw=a.Wf;b.ser=a.Zd;for(var b=a.Yc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].Oe.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.jg+"&ts"+d+"="+e.pg+"&d"+d+"="+e.Oe;d++}else break;xe(a,b+c,a.Zd);return!0}return!1}function xe(a,b,c){function d(){a.te.remove(c);we(a)}a.te.add(c,1);var e=setTimeout(d,Math.floor(25E3));ve(a,b,function(){clearTimeout(e);d()})}
function ve(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ea.gb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){E("Long-poll script failed to load: "+b);a.Kd=!1;a.close()};a.Ea.gb.body.appendChild(d)}}catch(e){}},Math.floor(1))};function ye(a){ze(this,a)}var Ae=[qe,cd];function ze(a,b){var c=cd&&cd.isAvailable(),d=c&&!(yb.Ze||!0===yb.get("previous_websocket_failure"));b.qg&&(c||O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Wc=[cd];else{var e=a.Wc=[];Ic(Ae,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function Be(a){if(0<a.Wc.length)return a.Wc[0];throw Error("No transports available");};function Ce(a,b,c,d,e,f,h){this.id=a;this.f=yc("c:"+this.id+":");this.re=c;this.Lc=d;this.ia=e;this.qe=f;this.L=b;this.Ad=[];this.Ke=0;this.sf=new ye(b);this.Ua=0;this.Cb=h;this.f("Connection created");De(this)}
function De(a){var b=Be(a.sf);a.I=new b("c:"+a.id+":"+a.Ke++,a.L,void 0,a.Cb);a.ve=b.responsesRequiredToBeHealthy||0;var c=Ee(a,a.I),d=Fe(a,a.I);a.Xc=a.I;a.Rc=a.I;a.D=null;a.Bb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.md=Mc(function(){a.md=null;a.Bb||(a.I&&102400<a.I.pb?(a.f("Connection exceeded healthy timeout but has received "+a.I.pb+" bytes.  Marking connection healthy."),a.Bb=!0,a.I.sd()):a.I&&10240<a.I.qb?a.f("Connection exceeded healthy timeout but has sent "+
a.I.qb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function Fe(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.Ua?1===a.Ua&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.L.$a.substr(0,2)&&(yb.remove("host:"+a.L.host),a.L.$a=a.L.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Xc!==c&&a.Rc!==c||a.close()):a.f("closing an old connection")}}
function Ee(a,b){return function(c){if(2!=a.Ua)if(b===a.Rc){var d=Fc("t",c);c=Fc("d",c);if("c"==d){if(d=Fc("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.qf=c.s;Ib(a.L,f);0==a.Ua&&(a.I.start(),Ge(a,a.I,d),"5"!==e&&O("Protocol version mismatch detected"),c=a.sf,(c=1<c.Wc.length?c.Wc[1]:null)&&He(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Rc=a.D;for(c=0;c<a.Ad.length;++c)a.wd(a.Ad[c]);a.Ad=[];Ie(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.qe&&(a.qe(c),a.qe=null),a.ia=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Ib(a.L,c),1===a.Ua?a.close():(Je(a),De(a))):"e"===d?zc("Server Error: "+c):"o"===d?(a.f("got pong on primary."),Ke(a),Le(a)):zc("Unknown control packet command: "+d)}else"d"==d&&a.wd(c)}else if(b===a.D)if(d=Fc("t",c),c=Fc("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?Me(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Xc!==a.D&&a.Rc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.pf--,Me(a)));else if("d"==d)a.Ad.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}Ce.prototype.ua=function(a){Ne(this,{t:"d",d:a})};function Ie(a){a.Xc===a.D&&a.Rc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.Yd),a.I=a.D,a.D=null)}
function Me(a){0>=a.pf?(a.f("Secondary connection is healthy."),a.Bb=!0,a.D.sd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Xc=a.D,Ie(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}Ce.prototype.wd=function(a){Ke(this);this.re(a)};function Ke(a){a.Bb||(a.ve--,0>=a.ve&&(a.f("Primary connection is healthy."),a.Bb=!0,a.I.sd()))}
function He(a,b){a.D=new b("c:"+a.id+":"+a.Ke++,a.L,a.qf);a.pf=b.responsesRequiredToBeHealthy||0;a.D.open(Ee(a,a.D),Fe(a,a.D));Mc(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function Ge(a,b,c){a.f("Realtime connection established.");a.I=b;a.Ua=1;a.Lc&&(a.Lc(c,a.qf),a.Lc=null);0===a.ve?(a.f("Primary connection is healthy."),a.Bb=!0):Mc(function(){Le(a)},Math.floor(5E3))}
function Le(a){a.Bb||1!==a.Ua||(a.f("sending ping on primary."),Ne(a,{t:"c",d:{t:"p",d:{}}}))}function Ne(a,b){if(1!==a.Ua)throw"Connection is not connected";a.Xc.send(b)}Ce.prototype.close=function(){2!==this.Ua&&(this.f("Closing realtime connection."),this.Ua=2,Je(this),this.ia&&(this.ia(),this.ia=null))};function Je(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.md&&(clearTimeout(a.md),a.md=null)};function L(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Y=0}else this.o=a,this.Y=b}function T(a,b){var c=J(a);if(null===c)return b;if(c===J(b))return T(D(a),D(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
function Oe(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=hc(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function J(a){return a.Y>=a.o.length?null:a.o[a.Y]}function Ad(a){return a.o.length-a.Y}function D(a){var b=a.Y;b<a.o.length&&b++;return new L(a.o,b)}function Bd(a){return a.Y<a.o.length?a.o[a.o.length-1]:null}g=L.prototype;
g.toString=function(){for(var a="",b=this.Y;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};g.slice=function(a){return this.o.slice(this.Y+(a||0))};g.parent=function(){if(this.Y>=this.o.length)return null;for(var a=[],b=this.Y;b<this.o.length-1;b++)a.push(this.o[b]);return new L(a,0)};
g.n=function(a){for(var b=[],c=this.Y;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof L)for(c=a.Y;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new L(b,0)};g.e=function(){return this.Y>=this.o.length};g.Z=function(a){if(Ad(this)!==Ad(a))return!1;for(var b=this.Y,c=a.Y;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
g.contains=function(a){var b=this.Y,c=a.Y;if(Ad(this)>Ad(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var C=new L("");function Pe(a,b){this.Qa=a.slice();this.Ha=Math.max(1,this.Qa.length);this.Pe=b;for(var c=0;c<this.Qa.length;c++)this.Ha+=nb(this.Qa[c]);Qe(this)}Pe.prototype.push=function(a){0<this.Qa.length&&(this.Ha+=1);this.Qa.push(a);this.Ha+=nb(a);Qe(this)};Pe.prototype.pop=function(){var a=this.Qa.pop();this.Ha-=nb(a);0<this.Qa.length&&--this.Ha};
function Qe(a){if(768<a.Ha)throw Error(a.Pe+"has a key path longer than 768 bytes ("+a.Ha+").");if(32<a.Qa.length)throw Error(a.Pe+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Re(a));}function Re(a){return 0==a.Qa.length?"":"in property '"+a.Qa.join(".")+"'"};function Se(a){a instanceof Te||Ac("Don't call new Database() directly - please use firebase.database().");this.ta=a;this.ba=new U(a,C);this.INTERNAL=new Ue(this)}var Ve={TIMESTAMP:{".sv":"timestamp"}};g=Se.prototype;g.app=null;g.jf=function(a){We(this,"ref");x("database.ref",0,1,arguments.length);return n(a)?this.ba.n(a):this.ba};
g.gg=function(a){We(this,"database.refFromURL");x("database.refFromURL",1,1,arguments.length);var b=Bc(a);Xe("database.refFromURL",b);var c=b.jc;c.host!==this.ta.L.host&&Ac("database.refFromURL: Host name does not match the current database: (found "+c.host+" but expected "+this.ta.L.host+")");return this.jf(b.path.toString())};function We(a,b){null===a.ta&&Ac("Cannot call "+b+" on a deleted database.")}g.Pf=function(){x("database.goOffline",0,0,arguments.length);We(this,"goOffline");this.ta.ab()};
g.Qf=function(){x("database.goOnline",0,0,arguments.length);We(this,"goOnline");this.ta.kc()};Object.defineProperty(Se.prototype,"app",{get:function(){return this.ta.app}});function Ue(a){this.Ya=a}Ue.prototype.delete=function(){We(this.Ya,"delete");var a=Ye.Vb(),b=this.Ya.ta;w(a.lb,b.app.name)!==b&&Ac("Database "+b.app.name+" has already been deleted.");b.ab();delete a.lb[b.app.name];this.Ya.ta=null;this.Ya.ba=null;this.Ya=this.Ya.INTERNAL=null;return firebase.Promise.resolve()};
Se.prototype.ref=Se.prototype.jf;Se.prototype.refFromURL=Se.prototype.gg;Se.prototype.goOnline=Se.prototype.Qf;Se.prototype.goOffline=Se.prototype.Pf;Ue.prototype["delete"]=Ue.prototype.delete;function mc(){this.k=this.B=null}mc.prototype.find=function(a){if(null!=this.B)return this.B.P(a);if(a.e()||null==this.k)return null;var b=J(a);a=D(a);return this.k.contains(b)?this.k.get(b).find(a):null};function oc(a,b,c){if(b.e())a.B=c,a.k=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.k&&(a.k=new oe);var d=J(b);a.k.contains(d)||a.k.add(d,new mc);a=a.k.get(d);b=D(b);oc(a,b,c)}}
function Ze(a,b){if(b.e())return a.B=null,a.k=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.O(N,function(b,c){oc(a,new L(b),c)});return Ze(a,b)}return null!==a.k?(c=J(b),b=D(b),a.k.contains(c)&&Ze(a.k.get(c),b)&&a.k.remove(c),a.k.e()?(a.k=null,!0):!1):!0}function nc(a,b,c){null!==a.B?c(b,a.B):a.O(function(a,e){var f=new L(b.toString()+"/"+a);nc(e,f,c)})}mc.prototype.O=function(a){null!==this.k&&pe(this.k,function(b,c){a(b,c)})};var $e=/[\[\].#$\/\u0000-\u001F\u007F]/,af=/[\[\].#$\u0000-\u001F\u007F]/;function bf(a){return p(a)&&0!==a.length&&!$e.test(a)}function cf(a){return null===a||p(a)||ga(a)&&!Cc(a)||ia(a)&&cb(a,".sv")}function df(a,b,c,d){d&&!n(b)||ef(y(a,1,d),b,c)}
function ef(a,b,c){c instanceof L&&(c=new Pe(c,a));if(!n(b))throw Error(a+"contains undefined "+Re(c));if(ha(b))throw Error(a+"contains a function "+Re(c)+" with contents: "+b.toString());if(Cc(b))throw Error(a+"contains "+b.toString()+" "+Re(c));if(p(b)&&b.length>10485760/3&&10485760<nb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+Re(c)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var d=!1,e=!1;db(b,function(b,h){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
!0,!bf(b)))throw Error(a+" contains an invalid key ("+b+") "+Re(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);ef(a,h,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+Re(c)+" in addition to actual children.");}}
function ff(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!bf(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(Oe);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
function gf(a,b,c){var d=y(a,1,!1);if(!ia(b)||ea(b))throw Error(d+" must be an object containing the children to replace.");var e=[];db(b,function(a,b){var k=new L(a);ef(d,b,c.n(k));if(".priority"===Bd(k)&&!cf(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});ff(d,e)}
function hf(a,b,c){if(Cc(c))throw Error(y(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!cf(c))throw Error(y(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function jf(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(y(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function kf(a,b){if(n(b)&&!bf(b))throw Error(y(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function lf(a,b){if(!p(b)||0===b.length||af.test(b))throw Error(y(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function mf(a,b){if(".info"===J(b))throw Error(a+" failed: Can't modify data under /.info/");}
function Xe(a,b){var c=b.path.toString(),d;!(d=!p(b.jc.host)||0===b.jc.host.length||!bf(b.jc.ne))&&(d=0!==c.length)&&(c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),d=!(p(c)&&0!==c.length&&!af.test(c)));if(d)throw Error(y(a,1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');};function V(a,b){this.ta=a;this.qa=b}V.prototype.cancel=function(a){x("Firebase.onDisconnect().cancel",0,1,arguments.length);A("Firebase.onDisconnect().cancel",1,a,!0);var b=new hb;this.ta.xd(this.qa,ib(b,a));return b.ra};V.prototype.cancel=V.prototype.cancel;V.prototype.remove=function(a){x("Firebase.onDisconnect().remove",0,1,arguments.length);mf("Firebase.onDisconnect().remove",this.qa);A("Firebase.onDisconnect().remove",1,a,!0);var b=new hb;nf(this.ta,this.qa,null,ib(b,a));return b.ra};
V.prototype.remove=V.prototype.remove;V.prototype.set=function(a,b){x("Firebase.onDisconnect().set",1,2,arguments.length);mf("Firebase.onDisconnect().set",this.qa);df("Firebase.onDisconnect().set",a,this.qa,!1);A("Firebase.onDisconnect().set",2,b,!0);var c=new hb;nf(this.ta,this.qa,a,ib(c,b));return c.ra};V.prototype.set=V.prototype.set;
V.prototype.Jb=function(a,b,c){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);mf("Firebase.onDisconnect().setWithPriority",this.qa);df("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);hf("Firebase.onDisconnect().setWithPriority",2,b);A("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new hb;of(this.ta,this.qa,a,b,ib(d,c));return d.ra};V.prototype.setWithPriority=V.prototype.Jb;
V.prototype.update=function(a,b){x("Firebase.onDisconnect().update",1,2,arguments.length);mf("Firebase.onDisconnect().update",this.qa);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}gf("Firebase.onDisconnect().update",a,this.qa);A("Firebase.onDisconnect().update",2,b,!0);
c=new hb;pf(this.ta,this.qa,a,ib(c,b));return c.ra};V.prototype.update=V.prototype.update;function qf(a){H(ea(a)&&0<a.length,"Requires a non-empty array");this.Bf=a;this.Dc={}}qf.prototype.Ee=function(a,b){var c;c=this.Dc[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].He.apply(c[d].Ma,Array.prototype.slice.call(arguments,1))};qf.prototype.gc=function(a,b,c){rf(this,a);this.Dc[a]=this.Dc[a]||[];this.Dc[a].push({He:b,Ma:c});(a=this.Ue(a))&&b.apply(c,a)};
qf.prototype.Ic=function(a,b,c){rf(this,a);a=this.Dc[a]||[];for(var d=0;d<a.length;d++)if(a[d].He===b&&(!c||c===a[d].Ma)){a.splice(d,1);break}};function rf(a,b){H(Oa(a.Bf,function(a){return a===b}),"Unknown event: "+b)};function sf(){qf.call(this,["online"]);this.hc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener&&!qb()){var a=this;window.addEventListener("online",function(){a.hc||(a.hc=!0,a.Ee("online",!0))},!1);window.addEventListener("offline",function(){a.hc&&(a.hc=!1,a.Ee("online",!1))},!1)}}la(sf,qf);sf.prototype.Ue=function(a){H("online"===a,"Unknown event type: "+a);return[this.hc]};ca(sf);function tf(){qf.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Mb=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.Mb&&(c.Mb=b,c.Ee("visible",b))},!1)}}la(tf,qf);tf.prototype.Ue=function(a){H("visible"===a,"Unknown event type: "+a);return[this.Mb]};ca(tf);var uf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);H(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);H(20===c.length,"nextPushId: Length should be 20.");
return c}}();function vf(a,b){this.La=a;this.ba=b?b:wf}g=vf.prototype;g.Oa=function(a,b){return new vf(this.La,this.ba.Oa(a,b,this.La).X(null,null,!1,null,null))};g.remove=function(a){return new vf(this.La,this.ba.remove(a,this.La).X(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.ba;!c.e();){b=this.La(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function xf(a,b){for(var c,d=a.ba,e=null;!d.e();){c=a.La(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}g.e=function(){return this.ba.e()};g.count=function(){return this.ba.count()};g.Gc=function(){return this.ba.Gc()};g.ec=function(){return this.ba.ec()};g.ha=function(a){return this.ba.ha(a)};
g.Wb=function(a){return new yf(this.ba,null,this.La,!1,a)};g.Xb=function(a,b){return new yf(this.ba,a,this.La,!1,b)};g.Zb=function(a,b){return new yf(this.ba,a,this.La,!0,b)};g.We=function(a){return new yf(this.ba,null,this.La,!0,a)};function yf(a,b,c,d,e){this.Hd=e||null;this.je=d;this.Pa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.je?a.left:a.right;else if(0===e){this.Pa.push(a);break}else this.Pa.push(a),a=this.je?a.right:a.left}
function R(a){if(0===a.Pa.length)return null;var b=a.Pa.pop(),c;c=a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};if(a.je)for(b=b.left;!b.e();)a.Pa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Pa.push(b),b=b.left;return c}function zf(a){if(0===a.Pa.length)return null;var b;b=a.Pa;b=b[b.length-1];return a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value}}function Af(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:wf;this.right=null!=e?e:wf}g=Af.prototype;
g.X=function(a,b,c,d,e){return new Af(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ha=function(a){return this.left.ha(a)||a(this.key,this.value)||this.right.ha(a)};function Bf(a){return a.left.e()?a:Bf(a.left)}g.Gc=function(){return Bf(this).key};g.ec=function(){return this.right.e()?this.key:this.right.ec()};
g.Oa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.X(null,null,null,e.left.Oa(a,b,c),null):0===d?e.X(null,b,null,null,null):e.X(null,null,null,null,e.right.Oa(a,b,c));return Cf(e)};function Df(a){if(a.left.e())return wf;a.left.ea()||a.left.left.ea()||(a=Ef(a));a=a.X(null,null,null,Df(a.left),null);return Cf(a)}
g.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.ea()||c.left.left.ea()||(c=Ef(c)),c=c.X(null,null,null,c.left.remove(a,b),null);else{c.left.ea()&&(c=Ff(c));c.right.e()||c.right.ea()||c.right.left.ea()||(c=Gf(c),c.left.left.ea()&&(c=Ff(c),c=Gf(c)));if(0===b(a,c.key)){if(c.right.e())return wf;d=Bf(c.right);c=c.X(d.key,d.value,null,null,Df(c.right))}c=c.X(null,null,null,null,c.right.remove(a,b))}return Cf(c)};g.ea=function(){return this.color};
function Cf(a){a.right.ea()&&!a.left.ea()&&(a=Hf(a));a.left.ea()&&a.left.left.ea()&&(a=Ff(a));a.left.ea()&&a.right.ea()&&(a=Gf(a));return a}function Ef(a){a=Gf(a);a.right.left.ea()&&(a=a.X(null,null,null,null,Ff(a.right)),a=Hf(a),a=Gf(a));return a}function Hf(a){return a.right.X(null,null,a.color,a.X(null,null,!0,null,a.right.left),null)}function Ff(a){return a.left.X(null,null,a.color,null,a.X(null,null,!0,a.left.right,null))}
function Gf(a){return a.X(null,null,!a.color,a.left.X(null,null,!a.left.color,null,null),a.right.X(null,null,!a.right.color,null,null))}function If(){}g=If.prototype;g.X=function(){return this};g.Oa=function(a,b){return new Af(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ha=function(){return!1};g.Gc=function(){return null};g.ec=function(){return null};g.ea=function(){return!1};var wf=new If;function P(a,b,c){this.k=a;(this.aa=b)&&Sd(this.aa);a.e()&&H(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.yb=c;this.Db=null}g=P.prototype;g.J=function(){return!1};g.C=function(){return this.aa||G};g.fa=function(a){return this.k.e()?this:new P(this.k,a,this.yb)};g.Q=function(a){if(".priority"===a)return this.C();a=this.k.get(a);return null===a?G:a};g.P=function(a){var b=J(a);return null===b?this:this.Q(b).P(D(a))};g.Da=function(a){return null!==this.k.get(a)};
g.T=function(a,b){H(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.fa(b);var c=new K(a,b),d,e;b.e()?(d=this.k.remove(a),c=me(this.yb,c,this.k)):(d=this.k.Oa(a,b),c=ke(this.yb,c,this.k));e=d.e()?G:this.aa;return new P(d,e,c)};g.F=function(a,b){var c=J(a);if(null===c)return b;H(".priority"!==J(a)||1===Ad(a),".priority must be the last token in a path");var d=this.Q(c).F(D(a),b);return this.T(c,d)};g.e=function(){return this.k.e()};g.Eb=function(){return this.k.count()};
var Jf=/^(0|[1-9]\d*)$/;g=P.prototype;g.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.O(N,function(f,h){b[f]=h.H(a);c++;e&&Jf.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&!this.C().e()&&(b[".priority"]=this.C().H());return b};g.hash=function(){if(null===this.Db){var a="";this.C().e()||(a+="priority:"+Ud(this.C().H())+":");this.O(N,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Db=""===a?"":uc(a)}return this.Db};
g.Ve=function(a,b,c){return(c=Kf(this,c))?(a=xf(c,new K(a,b)))?a.name:null:xf(this.k,a)};function Qd(a,b){var c;c=(c=Kf(a,b))?(c=c.Gc())&&c.name:a.k.Gc();return c?new K(c,a.k.get(c)):null}function Rd(a,b){var c;c=(c=Kf(a,b))?(c=c.ec())&&c.name:a.k.ec();return c?new K(c,a.k.get(c)):null}g.O=function(a,b){var c=Kf(this,a);return c?c.ha(function(a){return b(a.name,a.R)}):this.k.ha(b)};g.Wb=function(a){return this.Xb(a.Hc(),a)};
g.Xb=function(a,b){var c=Kf(this,b);if(c)return c.Xb(a,function(a){return a});for(var c=this.k.Xb(a.name,jc),d=zf(c);null!=d&&0>b.compare(d,a);)R(c),d=zf(c);return c};g.We=function(a){return this.Zb(a.Fc(),a)};g.Zb=function(a,b){var c=Kf(this,b);if(c)return c.Zb(a,function(a){return a});for(var c=this.k.Zb(a.name,jc),d=zf(c);null!=d&&0<b.compare(d,a);)R(c),d=zf(c);return c};g.sc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===Zd?-1:0};
g.nb=function(a){if(a===Fd||va(this.yb.cc,a.toString()))return this;var b=this.yb,c=this.k;H(a!==Fd,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Wb(jc),f=R(c);f;)e=e||a.xc(f.R),d.push(f),f=R(c);d=e?le(d,Pd(a)):Wd;e=a.toString();c=za(b.cc);c[e]=a;a=za(b.od);a[e]=d;return new P(this.k,this.aa,new je(a,c))};g.yc=function(a){return a===Fd||va(this.yb.cc,a.toString())};
g.Z=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().Z(a.C())&&this.k.count()===a.k.count()){var b=this.Wb(N);a=a.Wb(N);for(var c=R(b),d=R(a);c&&d;){if(c.name!==d.name||!c.R.Z(d.R))return!1;c=R(b);d=R(a)}return null===c&&null===d}return!1};function Kf(a,b){return b===Fd?null:a.yb.get(b.toString())}g.toString=function(){return B(this.H(!0))};function M(a,b){if(null===a)return G;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);H(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new qc(a,M(c));if(a instanceof Array){var d=G,e=a;r(e,function(a,b){if(cb(e,b)&&"."!==b.substring(0,1)){var c=M(a);if(c.J()||!c.e())d=
d.T(b,c)}});return d.fa(M(c))}var f=[],h=!1,k=a;db(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=M(k[a]);b.e()||(h=h||!b.C().e(),f.push(new K(a,b)))}});if(0==f.length)return G;var l=le(f,gc,function(a){return a.name},ic);if(h){var m=le(f,Pd(N));return new P(l,M(c),new je({".priority":m},{".priority":N}))}return new P(l,M(c),ne)}var Lf=Math.log(2);
function Mf(a){this.count=parseInt(Math.log(a+1)/Lf,10);this.Ne=this.count-1;this.Cf=a+1&parseInt(Array(this.count+1).join("1"),2)}function Nf(a){var b=!(a.Cf&1<<a.Ne);a.Ne--;return b}
function le(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var m=a[b],u=c?c(m):m;return new Af(u,m.R,!1,null,null)}var m=parseInt(f/2,10)+b,f=e(b,m),z=e(m+1,d),m=a[m],u=c?c(m):m;return new Af(u,m.R,!1,f,z)}a.sort(b);var f=function(b){function d(b,h){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],F=c?c(k):k,z=new Af(F,k.R,h,null,z);f?f.left=z:m=z;f=z}for(var f=null,m=null,u=a.length,z=0;z<b.count;++z){var F=Nf(b),id=Math.pow(2,b.count-(z+1));F?d(id,!1):(d(id,!1),d(id,!0))}return m}(new Mf(a.length));
return null!==f?new vf(d||b,f):new vf(d||b)}function Ud(a){return"number"===typeof a?"number:"+Jc(a):"string:"+a}function Sd(a){if(a.J()){var b=a.H();H("string"===typeof b||"number"===typeof b||"object"===typeof b&&cb(b,".sv"),"Priority must be a string or number.")}else H(a===Zd||a.e(),"priority of unexpected type.");H(a===Zd||a.C().e(),"Priority nodes can't have a priority of their own.")}var G=new P(new vf(ic),null,ne);function Of(){P.call(this,new vf(ic),G,ne)}la(Of,P);g=Of.prototype;
g.sc=function(a){return a===this?0:1};g.Z=function(a){return a===this};g.C=function(){return this};g.Q=function(){return G};g.e=function(){return!1};var Zd=new Of,Xd=new K("[MIN_NAME]",G),ce=new K("[MAX_NAME]",Zd);function W(a,b,c){this.A=a;this.V=b;this.g=c}W.prototype.H=function(){x("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.H()};W.prototype.val=W.prototype.H;W.prototype.Qe=function(){x("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.H(!0)};W.prototype.exportVal=W.prototype.Qe;W.prototype.Lf=function(){x("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};W.prototype.exists=W.prototype.Lf;
W.prototype.n=function(a){x("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));lf("Firebase.DataSnapshot.child",a);var b=new L(a),c=this.V.n(b);return new W(this.A.P(b),c,N)};W.prototype.child=W.prototype.n;W.prototype.Da=function(a){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length);lf("Firebase.DataSnapshot.hasChild",a);var b=new L(a);return!this.A.P(b).e()};W.prototype.hasChild=W.prototype.Da;
W.prototype.C=function(){x("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().H()};W.prototype.getPriority=W.prototype.C;W.prototype.forEach=function(a){x("Firebase.DataSnapshot.forEach",1,1,arguments.length);A("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.O(this.g,function(c,d){return a(new W(d,b.V.n(c),N))})};W.prototype.forEach=W.prototype.forEach;
W.prototype.kd=function(){x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.J()?!1:!this.A.e()};W.prototype.hasChildren=W.prototype.kd;W.prototype.getKey=function(){x("Firebase.DataSnapshot.key",0,0,arguments.length);return this.V.getKey()};Lc(W.prototype,"key",W.prototype.getKey);W.prototype.Eb=function(){x("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Eb()};W.prototype.numChildren=W.prototype.Eb;
W.prototype.wb=function(){x("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.V};Lc(W.prototype,"ref",W.prototype.wb);function yd(a,b){this.N=a;this.Ld=b}function vd(a,b,c,d){return new yd(new $b(b,c,d),a.Ld)}function zd(a){return a.N.da?a.N.j():null}yd.prototype.w=function(){return this.Ld};function ac(a){return a.Ld.da?a.Ld.j():null};function Pf(a,b){this.V=a;var c=a.m,d=new Gd(c.g),c=S(c)?new Gd(c.g):c.xa?new Md(c):new Hd(c);this.hf=new pd(c);var e=b.w(),f=b.N,h=d.ya(G,e.j(),null),k=c.ya(G,f.j(),null);this.Ka=new yd(new $b(k,f.da,c.Na()),new $b(h,e.da,d.Na()));this.Za=[];this.Jf=new kd(a)}function Qf(a){return a.V}g=Pf.prototype;g.w=function(){return this.Ka.w().j()};g.hb=function(a){var b=ac(this.Ka);return b&&(S(this.V.m)||!a.e()&&!b.Q(J(a)).e())?b.P(a):null};g.e=function(){return 0===this.Za.length};g.Nb=function(a){this.Za.push(a)};
g.kb=function(a,b){var c=[];if(b){H(null==a,"A cancel should cancel all event registrations.");var d=this.V.path;Ja(this.Za,function(a){(a=a.Le(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Za.length;++f){var h=this.Za[f];if(!h.matches(a))e.push(h);else if(a.Xe()){e=e.concat(this.Za.slice(f+1));break}}this.Za=e}else this.Za=[];return c};
g.eb=function(a,b,c){a.type===Wc&&null!==a.source.Hb&&(H(ac(this.Ka),"We should always have a full cache before handling merges"),H(zd(this.Ka),"Missing event cache, even though we have a server cache"));var d=this.Ka;a=this.hf.eb(d,a,b,c);b=this.hf;c=a.Sd;H(c.N.j().yc(b.U.g),"Event snap not indexed");H(c.w().j().yc(b.U.g),"Server snap not indexed");H(dc(a.Sd.w())||!dc(d.w()),"Once a server snap is complete, it should never go back");this.Ka=a.Sd;return Rf(this,a.Df,a.Sd.N.j(),null)};
function Sf(a,b){var c=a.Ka.N,d=[];c.j().J()||c.j().O(N,function(a,b){d.push(new I("child_added",b,a))});c.da&&d.push(bc(c.j()));return Rf(a,d,c.j(),b)}function Rf(a,b,c,d){return ld(a.Jf,b,c,d?[d]:a.Za)};function Tf(a,b,c){this.Pb=a;this.rb=b;this.tb=c||null}g=Tf.prototype;g.nf=function(a){return"value"===a};g.createEvent=function(a,b){var c=b.m.g;return new Ub("value",this,new W(a.Ja,b.wb(),c))};g.Tb=function(a){var b=this.tb;if("cancel"===a.ee()){H(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.Pb;return function(){d.call(b,a.Md)}};g.Le=function(a,b){return this.rb?new Vb(this,a,b):null};
g.matches=function(a){return a instanceof Tf?a.Pb&&this.Pb?a.Pb===this.Pb&&a.tb===this.tb:!0:!1};g.Xe=function(){return null!==this.Pb};function Uf(a,b,c){this.ga=a;this.rb=b;this.tb=c}g=Uf.prototype;g.nf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ga};g.Le=function(a,b){return this.rb?new Vb(this,a,b):null};
g.createEvent=function(a,b){H(null!=a.Xa,"Child events should have a childName.");var c=b.wb().n(a.Xa);return new Ub(a.type,this,new W(a.Ja,c,b.m.g),a.Dd)};g.Tb=function(a){var b=this.tb;if("cancel"===a.ee()){H(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.ga[a.hd];return function(){d.call(b,a.Md,a.Dd)}};
g.matches=function(a){if(a instanceof Uf){if(!this.ga||!a.ga)return!0;if(this.tb===a.tb){var b=ra(a.ga);if(b===ra(this.ga)){if(1===b){var b=sa(a.ga),c=sa(this.ga);return c===b&&(!a.ga[b]||!this.ga[c]||a.ga[b]===this.ga[c])}return qa(this.ga,function(b,c){return a.ga[c]===b})}}}return!1};g.Xe=function(){return null!==this.ga};function X(a,b,c,d){this.u=a;this.path=b;this.m=c;this.Nc=d}
function Vf(a){var b=null,c=null;a.ka&&(b=Jd(a));a.na&&(c=Ld(a));if(a.g===Fd){if(a.ka){if("[MIN_NAME]"!=Id(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=Kd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===N){if(null!=b&&!cf(b)||null!=c&&!cf(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(H(a.g instanceof Yd||a.g===de,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function Wf(a){if(a.ka&&a.na&&a.xa&&(!a.xa||""===a.mb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function Xf(a,b){if(!0===a.Nc)throw Error(b+": You can't combine multiple orderBy calls.");}g=X.prototype;g.wb=function(){x("Query.ref",0,0,arguments.length);return new U(this.u,this.path)};
g.gc=function(a,b,c,d){x("Query.on",2,4,arguments.length);jf("Query.on",a,!1);A("Query.on",2,b,!1);var e=Yf("Query.on",c,d);if("value"===a)Zf(this.u,this,new Tf(b,e.cancel||null,e.Ma||null));else{var f={};f[a]=b;Zf(this.u,this,new Uf(f,e.cancel,e.Ma))}return b};
g.Ic=function(a,b,c){x("Query.off",0,3,arguments.length);jf("Query.off",a,!0);A("Query.off",2,b,!0);eb("Query.off",3,c);var d=null,e=null;"value"===a?d=new Tf(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new Uf(e,null,c||null));e=this.u;d=".info"===J(this.path)?e.pd.kb(this,d):e.K.kb(this,d);Qb(e.ca,this.path,d)};
g.$f=function(a,b){function c(k){f&&(f=!1,e.Ic(a,c),b&&b.call(d.Ma,k),h.resolve(k))}x("Query.once",1,4,arguments.length);jf("Query.once",a,!1);A("Query.once",2,b,!0);var d=Yf("Query.once",arguments[2],arguments[3]),e=this,f=!0,h=new hb;jb(h.ra);this.gc(a,c,function(b){e.Ic(a,c);d.cancel&&d.cancel.call(d.Ma,b);h.reject(b)});return h.ra};
g.le=function(a){x("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.le(a),this.Nc)};
g.me=function(a){x("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.me(a),this.Nc)};
g.ag=function(a){x("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');lf("Query.orderByChild",a);Xf(this,"Query.orderByChild");var b=new L(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
b=new Yd(b);b=he(this.m,b);Vf(b);return new X(this.u,this.path,b,!0)};g.bg=function(){x("Query.orderByKey",0,0,arguments.length);Xf(this,"Query.orderByKey");var a=he(this.m,Fd);Vf(a);return new X(this.u,this.path,a,!0)};g.cg=function(){x("Query.orderByPriority",0,0,arguments.length);Xf(this,"Query.orderByPriority");var a=he(this.m,N);Vf(a);return new X(this.u,this.path,a,!0)};
g.dg=function(){x("Query.orderByValue",0,0,arguments.length);Xf(this,"Query.orderByValue");var a=he(this.m,de);Vf(a);return new X(this.u,this.path,a,!0)};g.Nd=function(a,b){x("Query.startAt",0,2,arguments.length);df("Query.startAt",a,this.path,!0);kf("Query.startAt",b);var c=this.m.Nd(a,b);Wf(c);Vf(c);if(this.m.ka)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new X(this.u,this.path,c,this.Nc)};
g.gd=function(a,b){x("Query.endAt",0,2,arguments.length);df("Query.endAt",a,this.path,!0);kf("Query.endAt",b);var c=this.m.gd(a,b);Wf(c);Vf(c);if(this.m.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new X(this.u,this.path,c,this.Nc)};
g.If=function(a,b){x("Query.equalTo",1,2,arguments.length);df("Query.equalTo",a,this.path,!1);kf("Query.equalTo",b);if(this.m.ka)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.m.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Nd(a,b).gd(a,b)};
g.toString=function(){x("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Y;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.u.toString()+(b||"/")};g.ja=function(){var a=Gc(ie(this.m));return"{}"===a?"default":a};
g.isEqual=function(a){x("Query.isEqual",1,1,arguments.length);if(!(a instanceof X))throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");var b=this.u===a.u,c=this.path.Z(a.path),d=this.ja()===a.ja();return b&&c&&d};
function Yf(a,b,c){var d={cancel:null,Ma:null};if(b&&c)d.cancel=b,A(a,3,d.cancel,!0),d.Ma=c,eb(a,4,d.Ma);else if(b)if("object"===typeof b&&null!==b)d.Ma=b;else if("function"===typeof b)d.cancel=b;else throw Error(y(a,3,!0)+" must either be a cancel callback or a context object.");return d}X.prototype.on=X.prototype.gc;X.prototype.off=X.prototype.Ic;X.prototype.once=X.prototype.$f;X.prototype.limitToFirst=X.prototype.le;X.prototype.limitToLast=X.prototype.me;X.prototype.orderByChild=X.prototype.ag;
X.prototype.orderByKey=X.prototype.bg;X.prototype.orderByPriority=X.prototype.cg;X.prototype.orderByValue=X.prototype.dg;X.prototype.startAt=X.prototype.Nd;X.prototype.endAt=X.prototype.gd;X.prototype.equalTo=X.prototype.If;X.prototype.toString=X.prototype.toString;X.prototype.isEqual=X.prototype.isEqual;Lc(X.prototype,"ref",X.prototype.wb);function $f(a,b){this.value=a;this.children=b||ag}var ag=new vf(function(a,b){return a===b?0:a<b?-1:1});function bg(a){var b=Q;r(a,function(a,d){b=b.set(new L(d),a)});return b}g=$f.prototype;g.e=function(){return null===this.value&&this.children.e()};function cg(a,b,c){if(null!=a.value&&c(a.value))return{path:C,value:a.value};if(b.e())return null;var d=J(b);a=a.children.get(d);return null!==a?(b=cg(a,D(b),c),null!=b?{path:(new L(d)).n(b.path),value:b.value}:null):null}
function dg(a,b){return cg(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(J(a));return null!==b?b.subtree(D(a)):Q};g.set=function(a,b){if(a.e())return new $f(b,this.children);var c=J(a),d=(this.children.get(c)||Q).set(D(a),b),c=this.children.Oa(c,d);return new $f(this.value,c)};
g.remove=function(a){if(a.e())return this.children.e()?Q:new $f(null,this.children);var b=J(a),c=this.children.get(b);return c?(a=c.remove(D(a)),b=a.e()?this.children.remove(b):this.children.Oa(b,a),null===this.value&&b.e()?Q:new $f(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(J(a));return b?b.get(D(a)):null};
function Ed(a,b,c){if(b.e())return c;var d=J(b);b=Ed(a.children.get(d)||Q,D(b),c);d=b.e()?a.children.remove(d):a.children.Oa(d,b);return new $f(a.value,d)}function eg(a,b){return fg(a,C,b)}function fg(a,b,c){var d={};a.children.ha(function(a,f){d[a]=fg(f,b.n(a),c)});return c(b,a.value,d)}function gg(a,b,c){return hg(a,b,C,c)}function hg(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=J(b);return(a=a.children.get(e))?hg(a,D(b),c.n(e),d):null}
function ig(a,b,c){jg(a,b,C,c)}function jg(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=J(b);return(a=a.children.get(e))?jg(a,D(b),c.n(e),d):Q}function Cd(a,b){kg(a,C,b)}function kg(a,b,c){a.children.ha(function(a,e){kg(e,b.n(a),c)});a.value&&c(b,a.value)}function lg(a,b){a.children.ha(function(a,d){d.value&&b(a,d.value)})}var Q=new $f(null);$f.prototype.toString=function(){var a={};Cd(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function mg(a,b,c){this.type=ud;this.source=ng;this.path=a;this.Ob=b;this.Id=c}mg.prototype.Mc=function(a){if(this.path.e()){if(null!=this.Ob.value)return H(this.Ob.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Ob.subtree(new L(a));return new mg(C,a,this.Id)}H(J(this.path)===a,"operationForChild called for unrelated child.");return new mg(D(this.path),this.Ob,this.Id)};
mg.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Id+" affectedTree="+this.Ob+")"};var Bb=0,Wc=1,ud=2,Db=3;function og(a,b,c,d){this.ce=a;this.Se=b;this.Hb=c;this.Ce=d;H(!d||b,"Tagged queries must be from server.")}var ng=new og(!0,!1,null,!1),pg=new og(!1,!0,null,!1);og.prototype.toString=function(){return this.ce?"user":this.Ce?"server(queryID="+this.Hb+")":"server"};function qg(a){this.W=a}var rg=new qg(new $f(null));function sg(a,b,c){if(b.e())return new qg(new $f(c));var d=dg(a.W,b);if(null!=d){var e=d.path,d=d.value;b=T(e,b);d=d.F(b,c);return new qg(a.W.set(e,d))}a=Ed(a.W,b,new $f(c));return new qg(a)}function tg(a,b,c){var d=a;db(c,function(a,c){d=sg(d,b.n(a),c)});return d}qg.prototype.Ed=function(a){if(a.e())return rg;a=Ed(this.W,a,Q);return new qg(a)};function ug(a,b){var c=dg(a.W,b);return null!=c?a.W.get(c.path).P(T(c.path,b)):null}
function vg(a){var b=[],c=a.W.value;null!=c?c.J()||c.O(N,function(a,c){b.push(new K(a,c))}):a.W.children.ha(function(a,c){null!=c.value&&b.push(new K(a,c.value))});return b}function wg(a,b){if(b.e())return a;var c=ug(a,b);return null!=c?new qg(new $f(c)):new qg(a.W.subtree(b))}qg.prototype.e=function(){return this.W.e()};qg.prototype.apply=function(a){return xg(C,this.W,a)};
function xg(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ha(function(b,f){".priority"===b?(H(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=xg(a.n(b),f,c)});c.P(a).e()||null===d||(c=c.F(a.n(".priority"),d));return c};function yg(){this.za={}}g=yg.prototype;g.e=function(){return ya(this.za)};g.eb=function(a,b,c){var d=a.source.Hb;if(null!==d)return d=w(this.za,d),H(null!=d,"SyncTree gave us an op for an invalid query."),d.eb(a,b,c);var e=[];r(this.za,function(d){e=e.concat(d.eb(a,b,c))});return e};g.Nb=function(a,b,c,d,e){var f=a.ja(),h=w(this.za,f);if(!h){var h=c.Aa(e?d:null),k=!1;h?k=!0:(h=d instanceof P?c.rc(d):G,k=!1);h=new Pf(a,new yd(new $b(h,k,!1),new $b(d,e,!1)));this.za[f]=h}h.Nb(b);return Sf(h,b)};
g.kb=function(a,b,c){var d=a.ja(),e=[],f=[],h=null!=zg(this);if("default"===d){var k=this;r(this.za,function(a,d){f=f.concat(a.kb(b,c));a.e()&&(delete k.za[d],S(a.V.m)||e.push(a.V))})}else{var l=w(this.za,d);l&&(f=f.concat(l.kb(b,c)),l.e()&&(delete this.za[d],S(l.V.m)||e.push(l.V)))}h&&null==zg(this)&&e.push(new U(a.u,a.path));return{hg:e,Kf:f}};function Ag(a){return Ka(ta(a.za),function(a){return!S(a.V.m)})}g.hb=function(a){var b=null;r(this.za,function(c){b=b||c.hb(a)});return b};
function Bg(a,b){if(S(b.m))return zg(a);var c=b.ja();return w(a.za,c)}function zg(a){return xa(a.za,function(a){return S(a.V.m)})||null};function Cg(){this.S=rg;this.la=[];this.Bc=-1}function Dg(a,b){for(var c=0;c<a.la.length;c++){var d=a.la[c];if(d.Zc===b)return d}return null}g=Cg.prototype;
g.Ed=function(a){var b=Pa(this.la,function(b){return b.Zc===a});H(0<=b,"removeWrite called with nonexistent writeId.");var c=this.la[b];this.la.splice(b,1);for(var d=c.visible,e=!1,f=this.la.length-1;d&&0<=f;){var h=this.la[f];h.visible&&(f>=b&&Eg(h,c.path)?d=!1:c.path.contains(h.path)&&(e=!0));f--}if(d){if(e)this.S=Fg(this.la,Gg,C),this.Bc=0<this.la.length?this.la[this.la.length-1].Zc:-1;else if(c.Ga)this.S=this.S.Ed(c.path);else{var k=this;r(c.children,function(a,b){k.S=k.S.Ed(c.path.n(b))})}return!0}return!1};
g.Aa=function(a,b,c,d){if(c||d){var e=wg(this.S,a);return!d&&e.e()?b:d||null!=b||null!=ug(e,C)?(e=Fg(this.la,function(b){return(b.visible||d)&&(!c||!(0<=Ia(c,b.Zc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||G,e.apply(b)):null}e=ug(this.S,a);if(null!=e)return e;e=wg(this.S,a);return e.e()?b:null!=b||null!=ug(e,C)?(b=b||G,e.apply(b)):null};
g.rc=function(a,b){var c=G,d=ug(this.S,a);if(d)d.J()||d.O(N,function(a,b){c=c.T(a,b)});else if(b){var e=wg(this.S,a);b.O(N,function(a,b){var d=wg(e,new L(a)).apply(b);c=c.T(a,d)});Ja(vg(e),function(a){c=c.T(a.name,a.R)})}else e=wg(this.S,a),Ja(vg(e),function(a){c=c.T(a.name,a.R)});return c};g.ad=function(a,b,c,d){H(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.n(b);if(null!=ug(this.S,a))return null;a=wg(this.S,a);return a.e()?d.P(b):a.apply(d.P(b))};
g.qc=function(a,b,c){a=a.n(b);var d=ug(this.S,a);return null!=d?d:Zb(c,b)?wg(this.S,a).apply(c.j().Q(b)):null};g.lc=function(a){return ug(this.S,a)};g.Wd=function(a,b,c,d,e,f){var h;a=wg(this.S,a);h=ug(a,C);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.nb(f);if(h.e()||h.J())return[];b=[];a=Pd(f);e=e?h.Zb(c,f):h.Xb(c,f);for(f=R(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=R(e);return b};
function Eg(a,b){return a.Ga?a.path.contains(b):!!wa(a.children,function(c,d){return a.path.n(d).contains(b)})}function Gg(a){return a.visible}
function Fg(a,b,c){for(var d=rg,e=0;e<a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ga)c.contains(h)?(h=T(c,h),d=sg(d,h,f.Ga)):h.contains(c)&&(h=T(h,c),d=sg(d,C,f.Ga.P(h)));else if(f.children)if(c.contains(h))h=T(c,h),d=tg(d,h,f.children);else{if(h.contains(c))if(h=T(h,c),h.e())d=tg(d,C,f.children);else if(f=w(f.children,J(h)))f=f.P(D(h)),d=sg(d,C,f)}else throw sc("WriteRecord should have .snap or .children");}}return d}function Hg(a,b){this.Lb=a;this.W=b}g=Hg.prototype;
g.Aa=function(a,b,c){return this.W.Aa(this.Lb,a,b,c)};g.rc=function(a){return this.W.rc(this.Lb,a)};g.ad=function(a,b,c){return this.W.ad(this.Lb,a,b,c)};g.lc=function(a){return this.W.lc(this.Lb.n(a))};g.Wd=function(a,b,c,d,e){return this.W.Wd(this.Lb,a,b,c,d,e)};g.qc=function(a,b){return this.W.qc(this.Lb,a,b)};g.n=function(a){return new Hg(this.Lb.n(a),this.W)};function Ig(){this.children={};this.bd=0;this.value=null}function Jg(a,b,c){this.ud=a?a:"";this.Pc=b?b:null;this.A=c?c:new Ig}function Kg(a,b){for(var c=b instanceof L?b:new L(b),d=a,e;null!==(e=J(c));)d=new Jg(e,d,w(d.A.children,e)||new Ig),c=D(c);return d}g=Jg.prototype;g.Ca=function(){return this.A.value};function Lg(a,b){H("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;Mg(a)}g.clear=function(){this.A.value=null;this.A.children={};this.A.bd=0;Mg(this)};
g.kd=function(){return 0<this.A.bd};g.e=function(){return null===this.Ca()&&!this.kd()};g.O=function(a){var b=this;r(this.A.children,function(c,d){a(new Jg(d,b,c))})};function Ng(a,b,c,d){c&&!d&&b(a);a.O(function(a){Ng(a,b,!0,d)});c&&d&&b(a)}function Og(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}g.path=function(){return new L(null===this.Pc?this.ud:this.Pc.path()+"/"+this.ud)};g.name=function(){return this.ud};g.parent=function(){return this.Pc};
function Mg(a){if(null!==a.Pc){var b=a.Pc,c=a.ud,d=a.e(),e=cb(b.A.children,c);d&&e?(delete b.A.children[c],b.A.bd--,Mg(b)):d||e||(b.A.children[c]=a.A,b.A.bd++,Mg(b))}};function Pg(a,b,c,d,e,f){this.id=Qg++;this.f=yc("p:"+this.id+":");this.qd={};this.$={};this.pa=[];this.Oc=0;this.Kc=[];this.ma=!1;this.Sa=1E3;this.td=3E5;this.Gb=b;this.Jc=c;this.se=d;this.L=a;this.ob=this.Fa=this.Cb=this.xe=null;this.$c=e;this.be=!1;this.ie=0;if(f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");this.Ge=f||null;this.ub=null;this.Mb=!1;this.Gd={};this.ig=0;this.Re=!0;this.Ac=this.ke=null;Rg(this,0);tf.Vb().gc("visible",this.Zf,this);-1===
a.host.indexOf("fblocal")&&sf.Vb().gc("online",this.Yf,this)}var Qg=0,Sg=0;g=Pg.prototype;g.ua=function(a,b,c){var d=++this.ig;a={r:d,a:a,b:b};this.f(B(a));H(this.ma,"sendRequest call when we're not connected not allowed.");this.Fa.ua(a);c&&(this.Gd[d]=c)};
g.$e=function(a,b,c,d){var e=a.ja(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};H(Sc(a.m)||!S(a.m),"listen() called for non-default but complete query");H(!this.$[f][e],"listen() called twice for same path/queryId.");a={G:d,ld:b,eg:a,tag:c};this.$[f][e]=a;this.ma&&Tg(this,a)};
function Tg(a,b){var c=b.eg,d=c.path.toString(),e=c.ja();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=ie(c.m),f.t=b.tag);f.h=b.ld();a.ua("q",f,function(f){var k=f.d,l=f.s;if(k&&"object"===typeof k&&cb(k,"w")){var m=w(k,"w");ea(m)&&0<=Ia(m,"no_index")&&O("Using an unspecified index. Consider adding "+('".indexOn": "'+c.m.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==l&&Ug(a,d,e),b.G&&b.G(l,
k))})}g.kf=function(a){this.ob=a;this.f("Auth token refreshed");this.ob?Vg(this):this.ma&&this.ua("unauth",{},function(){});if(a&&40===a.length||Pc(a))this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4};function Vg(a){if(a.ma&&a.ob){var b=a.ob,c=Oc(b)?"auth":"gauth",d={cred:b};a.Ge&&(d.authvar=a.Ge);a.ua(c,d,function(c){var d=c.s;c=c.d||"error";a.ob===b&&("ok"===d?a.ie=0:Wg(a,d,c))})}}
g.uf=function(a,b){var c=a.path.toString(),d=a.ja();this.f("Unlisten called for "+c+" "+d);H(Sc(a.m)||!S(a.m),"unlisten() called for non-default but complete query");if(Ug(this,c,d)&&this.ma){var e=ie(a.m);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.ua("n",c)}};g.pe=function(a,b,c){this.ma?Xg(this,"o",a,b,c):this.Kc.push({ue:a,action:"o",data:b,G:c})};g.cf=function(a,b,c){this.ma?Xg(this,"om",a,b,c):this.Kc.push({ue:a,action:"om",data:b,G:c})};
g.xd=function(a,b){this.ma?Xg(this,"oc",a,null,b):this.Kc.push({ue:a,action:"oc",data:null,G:b})};function Xg(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.ua(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){Yg(this,"p",a,b,c,d)};g.af=function(a,b,c,d){Yg(this,"m",a,b,c,d)};function Yg(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.pa.push({action:b,mf:d,G:e});a.Oc++;b=a.pa.length-1;a.ma?Zg(a,b):a.f("Buffering put: "+c)}
function Zg(a,b){var c=a.pa[b].action,d=a.pa[b].mf,e=a.pa[b].G;a.pa[b].fg=a.ma;a.ua(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Oc--;0===a.Oc&&(a.pa=[]);e&&e(d.s,d.d)})}g.we=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.ua("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
g.wd=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.Gd[b];c&&(delete this.Gd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,a=a.b,this.f("handleServerMessage",b,a),"d"===b?this.Gb(a.p,a.d,!1,a.t):"m"===b?this.Gb(a.p,a.d,!0,a.t):"c"===b?$g(this,a.p,a.q):"ac"===b?Wg(this,a.s,a.d):"sd"===b?this.xe?this.xe(a):"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):zc("Unrecognized action received from server: "+
B(b)+"\nAre you using the latest client?"))}};g.Lc=function(a,b){this.f("connection ready");this.ma=!0;this.Ac=(new Date).getTime();this.se({serverTimeOffset:a-(new Date).getTime()});this.Cb=b;if(this.Re){var c={};c["sdk.js."+firebase.SDK_VERSION.replace(/\./g,"-")]=1;qb()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.we(c)}ah(this);this.Re=!1;this.Jc(!0)};
function Rg(a,b){H(!a.Fa,"Scheduling a connect when we're already connected/ing?");a.ub&&clearTimeout(a.ub);a.ub=setTimeout(function(){a.ub=null;bh(a)},Math.floor(b))}g.Zf=function(a){a&&!this.Mb&&this.Sa===this.td&&(this.f("Window became visible.  Reducing delay."),this.Sa=1E3,this.Fa||Rg(this,0));this.Mb=a};g.Yf=function(a){a?(this.f("Browser went online."),this.Sa=1E3,this.Fa||Rg(this,0)):(this.f("Browser went offline.  Killing connection."),this.Fa&&this.Fa.close())};
g.df=function(){this.f("data client disconnected");this.ma=!1;this.Fa=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.mf&&b.fg&&(b.G&&b.G("disconnect"),delete this.pa[a],this.Oc--)}0===this.Oc&&(this.pa=[]);this.Gd={};ch(this)&&(this.Mb?this.Ac&&(3E4<(new Date).getTime()-this.Ac&&(this.Sa=1E3),this.Ac=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Sa=this.td,this.ke=(new Date).getTime()),a=Math.max(0,this.Sa-((new Date).getTime()-this.ke)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),Rg(this,a),this.Sa=Math.min(this.td,1.3*this.Sa));this.Jc(!1)};
function bh(a){if(ch(a)){a.f("Making a connection attempt");a.ke=(new Date).getTime();a.Ac=null;var b=q(a.wd,a),c=q(a.Lc,a),d=q(a.df,a),e=a.id+":"+Sg++,f=a.Cb,h=!1,k=null,l=function(){k?k.close():(h=!0,d())};a.Fa={close:l,ua:function(a){H(k,"sendRequest call when we're not connected not allowed.");k.ua(a)}};var m=a.be;a.be=!1;a.$c.getToken(m).then(function(l){h?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),a.ob=l&&l.accessToken,k=new Ce(e,a.L,b,c,d,function(b){O(b+
" ("+a.L.toString()+")");a.ab("server_kill")},f))}).then(null,function(b){a.f("Failed to get token: "+b);h||l()})}}g.ab=function(a){E("Interrupting connection for reason: "+a);this.qd[a]=!0;this.Fa?this.Fa.close():(this.ub&&(clearTimeout(this.ub),this.ub=null),this.ma&&this.df())};g.kc=function(a){E("Resuming connection for reason: "+a);delete this.qd[a];ya(this.qd)&&(this.Sa=1E3,this.Fa||Rg(this,0))};
function $g(a,b,c){c=c?La(c,function(a){return Gc(a)}).join("$"):"default";(a=Ug(a,b,c))&&a.G&&a.G("permission_denied")}function Ug(a,b,c){b=(new L(b)).toString();var d;n(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===ra(a.$[b])&&delete a.$[b]):d=void 0;return d}
function Wg(a,b,c){E("Auth token revoked: "+b+"/"+c);a.ob=null;a.be=!0;a.Fa.close();"invalid_token"===b&&(a.ie++,3<=a.ie&&(a.Sa=3E4,a=a.$c,b='Provided authentication credentials for the app named "'+a.oc.name+'" are invalid. This usually indicates your app was not initialized correctly. ',b="credential"in a.oc.options?b+'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in a.oc.options?
b+'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':b+'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',O(b)))}
function ah(a){Vg(a);r(a.$,function(b){r(b,function(b){Tg(a,b)})});for(var b=0;b<a.pa.length;b++)a.pa[b]&&Zg(a,b);for(;a.Kc.length;)b=a.Kc.shift(),Xg(a,b.action,b.ue,b.data,b.G)}function ch(a){var b;b=sf.Vb().hc;return ya(a.qd)&&b};var Y={Mf:function(){re=dd=!0}};Y.forceLongPolling=Y.Mf;Y.Nf=function(){se=!0};Y.forceWebSockets=Y.Nf;Y.Tf=function(){return cd.isAvailable()};Y.isWebSocketsAvailable=Y.Tf;Y.lg=function(a,b){a.u.Ra.xe=b};Y.setSecurityDebugCallback=Y.lg;Y.ze=function(a,b){a.u.ze(b)};Y.stats=Y.ze;Y.Ae=function(a,b){a.u.Ae(b)};Y.statsIncrementCounter=Y.Ae;Y.fd=function(a){return a.u.fd};Y.dataUpdateCount=Y.fd;Y.Sf=function(a,b){a.u.he=b};Y.interceptServerData=Y.Sf;function dh(a){this.wa=Q;this.jb=new Cg;this.Be={};this.ic={};this.Cc=a}function eh(a,b,c,d,e){var f=a.jb,h=e;H(d>f.Bc,"Stacking an older write on top of newer ones");n(h)||(h=!0);f.la.push({path:b,Ga:c,Zc:d,visible:h});h&&(f.S=sg(f.S,b,c));f.Bc=d;return e?fh(a,new Ab(ng,b,c)):[]}function gh(a,b,c,d){var e=a.jb;H(d>e.Bc,"Stacking an older merge on top of newer ones");e.la.push({path:b,children:c,Zc:d,visible:!0});e.S=tg(e.S,b,c);e.Bc=d;c=bg(c);return fh(a,new Vc(ng,b,c))}
function hh(a,b,c){c=c||!1;var d=Dg(a.jb,b);if(a.jb.Ed(b)){var e=Q;null!=d.Ga?e=e.set(C,!0):db(d.children,function(a,b){e=e.set(new L(a),b)});return fh(a,new mg(d.path,e,c))}return[]}function ih(a,b,c){c=bg(c);return fh(a,new Vc(pg,b,c))}function jh(a,b,c,d){d=kh(a,d);if(null!=d){var e=lh(d);d=e.path;e=e.Hb;b=T(d,b);c=new Ab(new og(!1,!0,e,!0),b,c);return mh(a,d,c)}return[]}
function nh(a,b,c,d){if(d=kh(a,d)){var e=lh(d);d=e.path;e=e.Hb;b=T(d,b);c=bg(c);c=new Vc(new og(!1,!0,e,!0),b,c);return mh(a,d,c)}return[]}
dh.prototype.Nb=function(a,b){var c=a.path,d=null,e=!1;ig(this.wa,c,function(a,b){var f=T(a,c);d=d||b.hb(f);e=e||null!=zg(b)});var f=this.wa.get(c);f?(e=e||null!=zg(f),d=d||f.hb(C)):(f=new yg,this.wa=this.wa.set(c,f));var h;null!=d?h=!0:(h=!1,d=G,lg(this.wa.subtree(c),function(a,b){var c=b.hb(C);c&&(d=d.T(a,c))}));var k=null!=Bg(f,a);if(!k&&!S(a.m)){var l=oh(a);H(!(l in this.ic),"View does not exist, but we have a tag");var m=ph++;this.ic[l]=m;this.Be["_"+m]=l}h=f.Nb(a,b,new Hg(c,this.jb),d,h);k||
e||(f=Bg(f,a),h=h.concat(qh(this,a,f)));return h};
dh.prototype.kb=function(a,b,c){var d=a.path,e=this.wa.get(d),f=[];if(e&&("default"===a.ja()||null!=Bg(e,a))){f=e.kb(a,b,c);e.e()&&(this.wa=this.wa.remove(d));e=f.hg;f=f.Kf;b=-1!==Pa(e,function(a){return S(a.m)});var h=gg(this.wa,d,function(a,b){return null!=zg(b)});if(b&&!h&&(d=this.wa.subtree(d),!d.e()))for(var d=rh(d),k=0;k<d.length;++k){var l=d[k],m=l.V,l=sh(this,l);this.Cc.ye(th(m),uh(this,m),l.ld,l.G)}if(!h&&0<e.length&&!c)if(b)this.Cc.Od(th(a),null);else{var u=this;Ja(e,function(a){a.ja();
var b=u.ic[oh(a)];u.Cc.Od(th(a),b)})}vh(this,e)}return f};dh.prototype.Aa=function(a,b){var c=this.jb,d=gg(this.wa,a,function(b,c){var d=T(b,a);if(d=c.hb(d))return d});return c.Aa(a,d,b,!0)};function rh(a){return eg(a,function(a,c,d){if(c&&null!=zg(c))return[zg(c)];var e=[];c&&(e=Ag(c));r(d,function(a){e=e.concat(a)});return e})}function vh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!S(d.m)){var d=oh(d),e=a.ic[d];delete a.ic[d];delete a.Be["_"+e]}}}
function th(a){return S(a.m)&&!Sc(a.m)?a.wb():a}function qh(a,b,c){var d=b.path,e=uh(a,b);c=sh(a,c);b=a.Cc.ye(th(b),e,c.ld,c.G);d=a.wa.subtree(d);if(e)H(null==zg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=eg(d,function(a,b,c){if(!a.e()&&b&&null!=zg(b))return[Qf(zg(b))];var d=[];b&&(d=d.concat(La(Ag(b),function(a){return a.V})));r(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Cc.Od(th(c),uh(a,c));return b}
function sh(a,b){var c=b.V,d=uh(a,c);return{ld:function(){return(b.w()||G).hash()},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=kh(a,d)){var h=lh(b);b=h.path;h=h.Hb;f=T(b,f);f=new Cb(new og(!1,!0,h,!0),f);b=mh(a,b,f)}else b=[]}else b=fh(a,new Cb(pg,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.kb(c,null,f)}}}function oh(a){return a.path.toString()+"$"+a.ja()}function lh(a){var b=a.indexOf("$");H(-1!==b&&b<a.length-1,"Bad queryKey.");return{Hb:a.substr(b+1),path:new L(a.substr(0,b))}}function kh(a,b){var c=a.Be,d="_"+b;return d in c?c[d]:void 0}function uh(a,b){var c=oh(b);return w(a.ic,c)}var ph=1;
function mh(a,b,c){var d=a.wa.get(b);H(d,"Missing sync point for query tag that we're tracking");return d.eb(c,new Hg(b,a.jb),null)}function fh(a,b){return wh(a,b,a.wa,null,new Hg(C,a.jb))}function wh(a,b,c,d,e){if(b.path.e())return xh(a,b,c,d,e);var f=c.get(C);null==d&&null!=f&&(d=f.hb(C));var h=[],k=J(b.path),l=b.Mc(k);if((c=c.children.get(k))&&l)var m=d?d.Q(k):null,k=e.n(k),h=h.concat(wh(a,l,c,m,k));f&&(h=h.concat(f.eb(b,e,d)));return h}
function xh(a,b,c,d,e){var f=c.get(C);null==d&&null!=f&&(d=f.hb(C));var h=[];c.children.ha(function(c,f){var m=d?d.Q(c):null,u=e.n(c),z=b.Mc(c);z&&(h=h.concat(xh(a,z,f,m,u)))});f&&(h=h.concat(f.eb(b,e,d)));return h};function Te(a,b,c){this.app=c;var d=new Eb(c);this.L=a;this.Va=$c(a);this.Vc=null;this.ca=new Nb;this.vd=1;this.Ra=null;if(b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.va=new Qc(this.L,q(this.Gb,this),d),setTimeout(q(this.Jc,this,!0),0);else{b=c.options.databaseAuthVariableOverride||null;if(null!==b){if("object"!==da(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");
try{B(b)}catch(e){throw Error("Invalid authOverride provided: "+e);}}this.va=this.Ra=new Pg(this.L,q(this.Gb,this),q(this.Jc,this),q(this.se,this),d,b)}var f=this;Fb(d,function(a){f.va.kf(a)});this.og=ad(a,q(function(){return new Xc(this.Va,this.va)},this));this.mc=new Jg;this.ge=new Gb;this.pd=new dh({ye:function(a,b,c,d){b=[];c=f.ge.j(a.path);c.e()||(b=fh(f.pd,new Ab(pg,a.path,c)),setTimeout(function(){d("ok")},0));return b},Od:ba});yh(this,"connected",!1);this.ia=new mc;this.Ya=new Se(this);this.fd=
0;this.he=null;this.K=new dh({ye:function(a,b,c,d){f.va.$e(a,c,b,function(b,c){var e=d(b,c);Sb(f.ca,a.path,e)});return[]},Od:function(a,b){f.va.uf(a,b)}})}g=Te.prototype;g.toString=function(){return(this.L.Sc?"https://":"http://")+this.L.host};g.name=function(){return this.L.ne};function zh(a){a=a.ge.j(new L(".info/serverTimeOffset")).H()||0;return(new Date).getTime()+a}function Ah(a){a=a={timestamp:zh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
g.Gb=function(a,b,c,d){this.fd++;var e=new L(a);b=this.he?this.he(a,b):b;a=[];d?c?(b=pa(b,function(a){return M(a)}),a=nh(this.K,e,b,d)):(b=M(b),a=jh(this.K,e,b,d)):c?(d=pa(b,function(a){return M(a)}),a=ih(this.K,e,d)):(d=M(b),a=fh(this.K,new Ab(pg,e,d)));d=e;0<a.length&&(d=Bh(this,e));Sb(this.ca,d,a)};g.Jc=function(a){yh(this,"connected",a);!1===a&&Ch(this)};g.se=function(a){var b=this;Ic(a,function(a,d){yh(b,d,a)})};
function yh(a,b,c){b=new L("/.info/"+b);c=M(c);var d=a.ge;d.Jd=d.Jd.F(b,c);c=fh(a.pd,new Ab(pg,b,c));Sb(a.ca,b,c)}g.Jb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,ug:c});var e=Ah(this);b=M(b,c);var e=pc(b,e),f=this.vd++,e=eh(this.K,a,e,f,!0);Ob(this.ca,e);var h=this;this.va.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||O("set at "+a+" failed: "+b);e=hh(h.K,f,!e);Sb(h.ca,a,e);Dh(d,b,c)});e=Eh(this,a);Bh(this,e);Sb(this.ca,e,[])};
g.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Ah(this),f={};r(b,function(a,b){d=!1;var c=M(a);f[b]=pc(c,e)});if(d)E("update() called with empty data.  Don't do anything."),Dh(c,"ok");else{var h=this.vd++,k=gh(this.K,a,f,h);Ob(this.ca,k);var l=this;this.va.af(a.toString(),b,function(b,d){var e="ok"===b;e||O("update at "+a+" failed: "+b);var e=hh(l.K,h,!e),f=a;0<e.length&&(f=Bh(l,a));Sb(l.ca,f,e);Dh(c,b,d)});r(b,function(b,c){var d=Eh(l,a.n(c));Bh(l,d)});Sb(this.ca,
a,[])}};function Ch(a){a.f("onDisconnectEvents");var b=Ah(a),c=[];nc(lc(a.ia,b),C,function(b,e){c=c.concat(fh(a.K,new Ab(pg,b,e)));var f=Eh(a,b);Bh(a,f)});a.ia=new mc;Sb(a.ca,C,c)}g.xd=function(a,b){var c=this;this.va.xd(a.toString(),function(d,e){"ok"===d&&Ze(c.ia,a);Dh(b,d,e)})};function nf(a,b,c,d){var e=M(c);a.va.pe(b.toString(),e.H(!0),function(c,h){"ok"===c&&oc(a.ia,b,e);Dh(d,c,h)})}
function of(a,b,c,d,e){var f=M(c,d);a.va.pe(b.toString(),f.H(!0),function(c,d){"ok"===c&&oc(a.ia,b,f);Dh(e,c,d)})}function pf(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(E("onDisconnect().update() called with empty data.  Don't do anything."),Dh(d,"ok")):a.va.cf(b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var m=M(c[l]);oc(a.ia,b.n(l),m)}Dh(d,e,f)})}function Zf(a,b,c){c=".info"===J(b.path)?a.pd.Nb(b,c):a.K.Nb(b,c);Qb(a.ca,b.path,c)}g.ab=function(){this.Ra&&this.Ra.ab("repo_interrupt")};
g.kc=function(){this.Ra&&this.Ra.kc("repo_interrupt")};g.ze=function(a){if("undefined"!==typeof console){a?(this.Vc||(this.Vc=new Mb(this.Va)),a=this.Vc.get()):a=this.Va.get();var b=Ma(ua(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};g.Ae=function(a){Lb(this.Va,a);this.og.rf[a]=!0};g.f=function(a){var b="";this.Ra&&(b=this.Ra.id+":");E(b,arguments)};
function Dh(a,b,c){a&&ub(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Fh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var h=new U(a,b);h.gc("value",f);c={path:b,update:c,G:d,status:null,ef:rc(),Fe:e,of:0,Rd:function(){h.Ic("value",f)},Td:null,Ba:null,cd:null,dd:null,ed:null};d=a.K.Aa(b,void 0)||G;c.cd=d;d=c.update(d.H());if(n(d)){ef("transaction failed: Data returned ",d,c.path);c.status=1;e=Kg(a.mc,b);var k=e.Ca()||[];k.push(c);Lg(e,k);"object"===typeof d&&null!==d&&cb(d,".priority")?(k=w(d,".priority"),H(cf(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.K.Aa(b)||G).C().H();e=Ah(a);d=M(d,k);e=pc(d,e);c.dd=d;c.ed=e;c.Ba=a.vd++;c=eh(a.K,b,e,c.Ba,c.Fe);Sb(a.ca,b,c);Gh(a)}else c.Rd(),c.dd=null,c.ed=null,c.G&&(a=new W(c.cd,new U(a,c.path),N),c.G(null,!1,a))}function Gh(a,b){var c=b||a.mc;b||Hh(a,c);if(null!==c.Ca()){var d=Ih(a,c);H(0<d.length,"Sending zero length transaction queue");Na(d,function(a){return 1===a.status})&&Jh(a,c.path(),d)}else c.kd()&&c.O(function(b){Gh(a,b)})}
function Jh(a,b,c){for(var d=La(c,function(a){return a.Ba}),e=a.K.Aa(b,d)||G,d=e,e=e.hash(),f=0;f<c.length;f++){var h=c[f];H(1===h.status,"tryToSendTransactionQueue_: items in queue should all be run.");h.status=2;h.of++;var k=T(b,h.path),d=d.F(k,h.dd)}d=d.H(!0);a.va.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(hh(a.K,c[f].Ba));if(c[f].G){var h=c[f].ed,k=new U(a,c[f].path);d.push(q(c[f].G,
null,null,!0,new W(h,k,N)))}c[f].Rd()}Hh(a,Kg(a.mc,b));Gh(a);Sb(a.ca,b,e);for(f=0;f<d.length;f++)ub(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(O("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Td=d;Bh(a,b)}},e)}function Bh(a,b){var c=Kh(a,b),d=c.path(),c=Ih(a,c);Lh(a,c,d);return d}
function Lh(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Ka(b,function(a){return 1===a.status}),f=La(f,function(a){return a.Ba}),h=0;h<b.length;h++){var k=b[h],l=T(c,k.path),m=!1,u;H(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)m=!0,u=k.Td,e=e.concat(hh(a.K,k.Ba,!0));else if(1===k.status)if(25<=k.of)m=!0,u="maxretry",e=e.concat(hh(a.K,k.Ba,!0));else{var z=a.K.Aa(k.path,f)||G;k.cd=z;var F=b[h].update(z.H());n(F)?(ef("transaction failed: Data returned ",F,
k.path),l=M(F),"object"===typeof F&&null!=F&&cb(F,".priority")||(l=l.fa(z.C())),z=k.Ba,F=Ah(a),F=pc(l,F),k.dd=l,k.ed=F,k.Ba=a.vd++,Qa(f,z),e=e.concat(eh(a.K,k.path,F,k.Ba,k.Fe)),e=e.concat(hh(a.K,z,!0))):(m=!0,u="nodata",e=e.concat(hh(a.K,k.Ba,!0)))}Sb(a.ca,c,e);e=[];m&&(b[h].status=3,setTimeout(b[h].Rd,Math.floor(0)),b[h].G&&("nodata"===u?(k=new U(a,b[h].path),d.push(q(b[h].G,null,null,!1,new W(b[h].cd,k,N)))):d.push(q(b[h].G,null,Error(u),!1,null))))}Hh(a,a.mc);for(h=0;h<d.length;h++)ub(d[h]);Gh(a)}}
function Kh(a,b){for(var c,d=a.mc;null!==(c=J(b))&&null===d.Ca();)d=Kg(d,c),b=D(b);return d}function Ih(a,b){var c=[];Mh(a,b,c);c.sort(function(a,b){return a.ef-b.ef});return c}function Mh(a,b,c){var d=b.Ca();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.O(function(b){Mh(a,b,c)})}function Hh(a,b){var c=b.Ca();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Lg(b,0<c.length?c:null)}b.O(function(b){Hh(a,b)})}
function Eh(a,b){var c=Kh(a,b).path(),d=Kg(a.mc,b);Og(d,function(b){Nh(a,b)});Nh(a,d);Ng(d,function(b){Nh(a,b)});return c}
function Nh(a,b){var c=b.Ca();if(null!==c){for(var d=[],e=[],f=-1,h=0;h<c.length;h++)4!==c[h].status&&(2===c[h].status?(H(f===h-1,"All SENT items should be at beginning of queue."),f=h,c[h].status=4,c[h].Td="set"):(H(1===c[h].status,"Unexpected transaction status in abort"),c[h].Rd(),e=e.concat(hh(a.K,c[h].Ba,!0)),c[h].G&&d.push(q(c[h].G,null,Error("set"),!1,null))));-1===f?Lg(b,null):c.length=f+1;Sb(a.ca,b.path(),e);for(h=0;h<d.length;h++)ub(d[h])}};function Ye(){this.lb={};this.wf=!1}Ye.prototype.ab=function(){for(var a in this.lb)this.lb[a].ab()};Ye.prototype.kc=function(){for(var a in this.lb)this.lb[a].kc()};Ye.prototype.ae=function(a){this.wf=a};ca(Ye);Ye.prototype.interrupt=Ye.prototype.ab;Ye.prototype.resume=Ye.prototype.kc;var Z={};Z.nc=Pg;Z.DataConnection=Z.nc;Pg.prototype.ng=function(a,b){this.ua("q",{p:a},b)};Z.nc.prototype.simpleListen=Z.nc.prototype.ng;Pg.prototype.Hf=function(a,b){this.ua("echo",{d:a},b)};Z.nc.prototype.echo=Z.nc.prototype.Hf;Pg.prototype.interrupt=Pg.prototype.ab;Z.zf=Ce;Z.RealTimeConnection=Z.zf;Ce.prototype.sendRequest=Ce.prototype.ua;Ce.prototype.close=Ce.prototype.close;
Z.Rf=function(a){var b=Pg.prototype.put;Pg.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Pg.prototype.put=b}};Z.hijackHash=Z.Rf;Z.yf=Hb;Z.ConnectionTarget=Z.yf;Z.ja=function(a){return a.ja()};Z.queryIdentifier=Z.ja;Z.Uf=function(a){return a.u.Ra.$};Z.listens=Z.Uf;Z.ae=function(a){Ye.Vb().ae(a)};Z.forceRestClient=Z.ae;Z.Context=Ye;function U(a,b){if(!(a instanceof Te))throw Error("new Firebase() no longer supported - use app.database().");X.call(this,a,b,fe,!1);this.then=void 0;this["catch"]=void 0}la(U,X);g=U.prototype;g.getKey=function(){x("Firebase.key",0,0,arguments.length);return this.path.e()?null:Bd(this.path)};
g.n=function(a){x("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof L))if(null===J(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));lf("Firebase.child",b)}else lf("Firebase.child",a);return new U(this.u,this.path.n(a))};g.getParent=function(){x("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.u,a)};
g.Of=function(){x("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a};g.Gf=function(){return this.u.Ya};g.set=function(a,b){x("Firebase.set",1,2,arguments.length);mf("Firebase.set",this.path);df("Firebase.set",a,this.path,!1);A("Firebase.set",2,b,!0);var c=new hb;this.u.Jb(this.path,a,null,ib(c,b));return c.ra};
g.update=function(a,b){x("Firebase.update",1,2,arguments.length);mf("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}gf("Firebase.update",a,this.path);A("Firebase.update",2,b,!0);c=new hb;this.u.update(this.path,a,ib(c,b));return c.ra};
g.Jb=function(a,b,c){x("Firebase.setWithPriority",2,3,arguments.length);mf("Firebase.setWithPriority",this.path);df("Firebase.setWithPriority",a,this.path,!1);hf("Firebase.setWithPriority",2,b);A("Firebase.setWithPriority",3,c,!0);if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.setWithPriority failed: "+this.getKey()+" is a read-only object.";var d=new hb;this.u.Jb(this.path,a,b,ib(d,c));return d.ra};
g.remove=function(a){x("Firebase.remove",0,1,arguments.length);mf("Firebase.remove",this.path);A("Firebase.remove",1,a,!0);return this.set(null,a)};
g.transaction=function(a,b,c){x("Firebase.transaction",1,3,arguments.length);mf("Firebase.transaction",this.path);A("Firebase.transaction",1,a,!1);A("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(y("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.transaction failed: "+this.getKey()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new hb;ha(b)&&jb(d.ra);Fh(this.u,this.path,a,function(a,c,h){a?
d.reject(a):d.resolve(new pb(c,h));ha(b)&&b(a,c,h)},c);return d.ra};g.kg=function(a,b){x("Firebase.setPriority",1,2,arguments.length);mf("Firebase.setPriority",this.path);hf("Firebase.setPriority",1,a);A("Firebase.setPriority",2,b,!0);var c=new hb;this.u.Jb(this.path.n(".priority"),a,null,ib(c,b));return c.ra};
g.push=function(a,b){x("Firebase.push",0,2,arguments.length);mf("Firebase.push",this.path);df("Firebase.push",a,this.path,!0);A("Firebase.push",2,b,!0);var c=zh(this.u),d=uf(c),c=this.n(d);if(null!=a){var e=this,f=c.set(a,b).then(function(){return e.n(d)});c.then=q(f.then,f);c["catch"]=q(f.then,f,void 0);ha(b)&&jb(f)}return c};g.ib=function(){mf("Firebase.onDisconnect",this.path);return new V(this.u,this.path)};U.prototype.child=U.prototype.n;U.prototype.set=U.prototype.set;U.prototype.update=U.prototype.update;
U.prototype.setWithPriority=U.prototype.Jb;U.prototype.remove=U.prototype.remove;U.prototype.transaction=U.prototype.transaction;U.prototype.setPriority=U.prototype.kg;U.prototype.push=U.prototype.push;U.prototype.onDisconnect=U.prototype.ib;Lc(U.prototype,"database",U.prototype.Gf);Lc(U.prototype,"key",U.prototype.getKey);Lc(U.prototype,"parent",U.prototype.getParent);Lc(U.prototype,"root",U.prototype.Of);if("undefined"===typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
try{firebase.INTERNAL.registerService("database",function(a){var b=Ye.Vb(),c=a.options.databaseURL;n(c)||Ac("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");var d=Bc(c),c=d.jc;Xe("Invalid Firebase Database URL",d);d.path.e()||Ac("Database URL must point to the root of a Firebase Database (not including a child path).");(d=w(b.lb,a.name))&&Ac("FIREBASE INTERNAL ERROR: Database initialized multiple times.");d=new Te(c,b.wf,a);b.lb[a.name]=
d;return d.Ya},{Reference:U,Query:X,Database:Se,enableLogging:xc,INTERNAL:Y,TEST_ACCESS:Z,ServerValue:Ve})}catch(Oh){Ac("Failed to register the Firebase Database Service ("+Oh+")")};})();

}).call(global);
module.exports = firebase.database;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

/**
 *  Firebase libraries for browser - npm package.
 *
 * Usage:
 *
 *   firebase = require('firebase');
 */
var firebase = __webpack_require__(34);
__webpack_require__(189);
__webpack_require__(190);
__webpack_require__(193);
__webpack_require__(192);
module.exports = firebase;


/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var firebase = __webpack_require__(34);
(function(){
/*! @license Firebase v3.6.5
    Build: 3.6.5-rc.1
    Terms: https://firebase.google.com/terms/ */
(function(){var f=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]},g=this,h=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=
typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},k=function(a,b){function c(){}c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.u=function(a,c,n){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];
return b.prototype[c].apply(a,d)}};var m={},p=(m["only-available-in-window"]="This method is available in a Window context.",m["only-available-in-sw"]="This method is available in a service worker context.",m["should-be-overriden"]="This method should be overriden by extended classes.",m["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",m["permission-default"]="The required permissions were not granted and dismissed instead.",m["permission-blocked"]="The required permissions were not granted and blocked instead.",
m["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",m["notifications-blocked"]="Notifications have been blocked.",m["failed-serviceworker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",m["sw-registration-expected"]="A service worker registration was the expected input.",m["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",m["invalid-saved-token"]="Unable to access details of the saved token.",
m["sw-reg-redundant"]="The service worker being used for push was made redundant.",m["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$message}",m["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",m["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",m["use-sw-before-get-token"]="You must call useServiceWorker() before calling getToken() to ensure your service worker is used.",m["invalid-delete-token"]=
"You must pass a valid token into deleteToken(), i.e. the token from getToken().",m["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",m["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",m["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",m["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",
m["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",m["failed-to-delete-token"]="Unable to delete the currently saved token.",m["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",m["incorrect-gcm-sender-id"]="Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",m);var q={userVisibleOnly:!0,applicationServerKey:new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110])};var r=function(a,b){var c={};return c["firebase-messaging-msg-type"]=a,c["firebase-messaging-msg-data"]=b,c};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};k(u,Error);var v=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var w=function(a,b){b.unshift(a);u.call(this,v.apply(null,b));b.shift()};k(w,u);var x=function(a,b,c){if(!a){var d="Assertion failed";if(b)var d=d+(": "+b),e=Array.prototype.slice.call(arguments,2);throw new w(""+d,e||[]);}};var y=null;var A=function(a){a=new Uint8Array(a);var b=h(a);x("array"==b||"object"==b&&"number"==typeof a.length,"encodeByteArray takes an array as a parameter");if(!y)for(y={},b=0;65>b;b++)y[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b);for(var b=y,c=[],d=0;d<a.length;d+=3){var e=a[d],n=d+1<a.length,l=n?a[d+1]:0,z=d+2<a.length,t=z?a[d+2]:0,M=e>>2,e=(e&3)<<4|l>>4,l=(l&15)<<2|t>>6,t=t&63;z||(t=64,n||(l=64));c.push(b[M],b[e],b[l],b[t])}return c.join("").replace(/\+/g,"-").replace(/\//g,
"_").replace(/=+$/,"")};var B=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",p),C=function(){this.a=null},D=function(a){if(a.a)return a.a;a.a=new Promise(function(a,c){var b=g.indexedDB.open("fcm_token_details_db",1);b.onerror=function(a){c(a.target.error)};b.onsuccess=function(b){a(b.target.result)};b.onupgradeneeded=function(a){a=a.target.result.createObjectStore("fcm_token_object_Store",{keyPath:"swScope"});a.createIndex("fcmSenderId","fcmSenderId",{unique:!1});a.createIndex("fcmToken","fcmToken",{unique:!0})}});
return a.a},E=function(a){a.a?a.a.then(function(b){b.close();a.a=null}):Promise.resolve()},F=function(a,b){return D(a).then(function(a){return new Promise(function(c,e){var d=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").index("fcmToken").get(b);d.onerror=function(a){e(a.target.error)};d.onsuccess=function(a){c(a.target.result)}})})},G=function(a,b){return D(a).then(function(a){return new Promise(function(c,e){var d=[],l=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").openCursor();
l.onerror=function(a){e(a.target.error)};l.onsuccess=function(a){(a=a.target.result)?(a.value.fcmSenderId===b&&d.push(a.value),a.continue()):c(d)}})})},H=function(a,b,c){var d=A(b.getKey("p256dh")),e=A(b.getKey("auth"));a="authorized_entity="+a+"&"+("endpoint="+b.endpoint+"&")+("encryption_key="+d+"&")+("encryption_auth="+e);c&&(a+="&pushSet="+c);c=new Headers;c.append("Content-Type","application/x-www-form-urlencoded");return fetch("https://fcm.googleapis.com/fcm/connect/subscribe",{method:"POST",
headers:c,body:a}).then(function(a){return a.json()}).then(function(a){if(a.error)throw B.create("token-subscribe-failed",{message:a.error.message});if(!a.token)throw B.create("token-subscribe-no-token");if(!a.pushSet)throw B.create("token-subscribe-no-push-set");return{token:a.token,pushSet:a.pushSet}})},I=function(a,b,c,d,e,n){var l={swScope:c.scope,endpoint:d.endpoint,auth:A(d.getKey("auth")),p256dh:A(d.getKey("p256dh")),fcmToken:e,fcmPushSet:n,fcmSenderId:b};return D(a).then(function(a){return new Promise(function(b,
c){var d=a.transaction(["fcm_token_object_Store"],"readwrite").objectStore("fcm_token_object_Store").put(l);d.onerror=function(a){c(a.target.error)};d.onsuccess=function(){b()}})})};
C.prototype.i=function(a,b){return b instanceof ServiceWorkerRegistration?"string"!==typeof a||0===a.length?Promise.reject(B.create("bad-sender-id")):G(this,a).then(function(c){if(0!==c.length){var d=c.findIndex(function(c){return b.scope===c.swScope&&a===c.fcmSenderId});if(-1!==d)return c[d]}}).then(function(a){if(a)return b.pushManager.getSubscription().catch(function(){throw B.create("get-subscription-failed");}).then(function(b){var c;if(c=b)c=b.endpoint===a.endpoint&&A(b.getKey("auth"))===a.auth&&
A(b.getKey("p256dh"))===a.p256dh;if(c)return a.fcmToken})}):Promise.reject(B.create("sw-registration-expected"))};C.prototype.getSavedToken=C.prototype.i;
C.prototype.h=function(a,b){var c=this;return"string"!==typeof a||0===a.length?Promise.reject(B.create("bad-sender-id")):b instanceof ServiceWorkerRegistration?b.pushManager.getSubscription().then(function(a){return a?a:b.pushManager.subscribe(q)}).then(function(d){return H(a,d).then(function(e){return I(c,a,b,d,e.token,e.pushSet).then(function(){return e.token})})}):Promise.reject(B.create("sw-registration-expected"))};C.prototype.createToken=C.prototype.h;
C.prototype.deleteToken=function(a){var b=this;return"string"!==typeof a||0===a.length?Promise.reject(B.create("invalid-delete-token")):F(this,a).then(function(a){if(!a)throw B.create("delete-token-not-found");return D(b).then(function(b){return new Promise(function(c,d){var e=b.transaction(["fcm_token_object_Store"],"readwrite").objectStore("fcm_token_object_Store").delete(a.swScope);e.onerror=function(a){d(a.target.error)};e.onsuccess=function(b){0===b.target.result?d(B.create("failed-to-delete-token")):
c(a)}})})})};var J=function(a){var b=this;this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",p);if(!a.options.messagingSenderId||"string"!==typeof a.options.messagingSenderId)throw this.a.create("bad-sender-id");this.l=a.options.messagingSenderId;this.c=new C;this.app=a;this.INTERNAL={};this.INTERNAL.delete=function(){return b.delete}};
J.prototype.getToken=function(){var a=this,b=Notification.permission;return"granted"!==b?"denied"===b?Promise.reject(this.a.create("notifications-blocked")):Promise.resolve(null):this.f().then(function(b){return a.c.i(a.l,b).then(function(c){return c?c:a.c.h(a.l,b)})})};J.prototype.getToken=J.prototype.getToken;J.prototype.deleteToken=function(a){var b=this;return this.c.deleteToken(a).then(function(){return b.f()}).then(function(a){return a?a.pushManager.getSubscription():null}).then(function(a){if(a)return a.unsubscribe()})};
J.prototype.deleteToken=J.prototype.deleteToken;J.prototype.f=function(){throw this.a.create("should-be-overriden");};J.prototype.requestPermission=function(){throw this.a.create("only-available-in-window");};J.prototype.useServiceWorker=function(){throw this.a.create("only-available-in-window");};J.prototype.useServiceWorker=J.prototype.useServiceWorker;J.prototype.onMessage=function(){throw this.a.create("only-available-in-window");};J.prototype.onMessage=J.prototype.onMessage;
J.prototype.onTokenRefresh=function(){throw this.a.create("only-available-in-window");};J.prototype.onTokenRefresh=J.prototype.onTokenRefresh;J.prototype.setBackgroundMessageHandler=function(){throw this.a.create("only-available-in-sw");};J.prototype.setBackgroundMessageHandler=J.prototype.setBackgroundMessageHandler;J.prototype.delete=function(){E(this.c)};var K=self,P=function(a){J.call(this,a);var b=this;this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",p);K.addEventListener("push",function(a){return L(b,a)},!1);K.addEventListener("pushsubscriptionchange",function(a){return N(b,a)},!1);K.addEventListener("notificationclick",function(a){return O(b,a)},!1);this.b=null};f(P,J);
var L=function(a,b){var c;try{c=b.data.json()}catch(e){return}var d=Q().then(function(b){if(b){if(c.notification||a.b)return R(a,c)}else{if((b=c)&&"object"===typeof b.notification){var d=Object.assign({},b.notification),e={};d.data=(e.FCM_MSG=b,e);b=d}else b=void 0;if(b)return K.registration.showNotification(b.title||"",b);if(a.b)return a.b(c)}});b.waitUntil(d)},N=function(a,b){var c=a.getToken().then(function(b){if(!b)throw a.a.create("no-fcm-token-for-resubscribe");var c=a.c;return F(c,b).then(function(b){if(!b)throw a.a.create("invalid-saved-token");
return K.registration.pushManager.subscribe(q).then(function(a){return H(b.w,a,b.v)}).catch(function(d){return c.deleteToken(b.A).then(function(){throw a.a.create("unable-to-resubscribe",{message:d});})})})});b.waitUntil(c)},O=function(a,b){if(b.notification&&b.notification.data&&b.notification.data.FCM_MSG){b.stopImmediatePropagation();b.notification.close();var c=b.notification.data.FCM_MSG,d=c.notification.click_action;if(d){var e=S(d).then(function(a){return a?a:K.clients.openWindow(d)}).then(function(b){if(b)return delete c.notification,
T(a,b,r("notification-clicked",c))});b.waitUntil(e)}}};P.prototype.setBackgroundMessageHandler=function(a){if(a&&"function"!==typeof a)throw this.a.create("bg-handler-function-expected");this.b=a};P.prototype.setBackgroundMessageHandler=P.prototype.setBackgroundMessageHandler;
var S=function(a){var b=(new URL(a)).href;return K.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){for(var c=null,e=0;e<a.length;e++)if((new URL(a[e].url)).href===b){c=a[e];break}if(c)return c.focus(),c})},T=function(a,b,c){return new Promise(function(d,e){if(!b)return e(a.a.create("no-window-client-to-msg"));b.postMessage(c);d()})},Q=function(){return K.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){return a.some(function(a){return"visible"===
a.visibilityState})})},R=function(a,b){return K.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(c){var d=r("push-msg-received",b);return Promise.all(c.map(function(b){return T(a,b,d)}))})};P.prototype.f=function(){return Promise.resolve(K.registration)};var V=function(a){J.call(this,a);var b=this;this.j=null;this.m=firebase.INTERNAL.createSubscribe(function(a){b.j=a});this.s=null;this.o=firebase.INTERNAL.createSubscribe(function(a){b.s=a});U(this)};f(V,J);
V.prototype.getToken=function(){var a=this;return"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")?W(this).then(function(){return J.prototype.getToken.call(a)}):Promise.reject(this.a.create("unsupported-browser"))};V.prototype.getToken=V.prototype.getToken;
var W=function(a){if(a.g)return a.g;var b=document.querySelector('link[rel="manifest"]');b?a.g=fetch(b.href).then(function(a){return a.json()}).catch(function(){return Promise.resolve()}).then(function(b){if(b&&b.gcm_sender_id&&"103953800507"!==b.gcm_sender_id)throw a.a.create("incorrect-gcm-sender-id");}):a.g=Promise.resolve();return a.g};
V.prototype.requestPermission=function(){var a=this;return"granted"===Notification.permission?Promise.resolve():new Promise(function(b,c){var d=function(d){return"granted"===d?b():"denied"===d?c(a.a.create("permission-blocked")):c(a.a.create("permission-default"))},e=Notification.requestPermission(function(a){e||d(a)});e&&e.then(d)})};V.prototype.requestPermission=V.prototype.requestPermission;
V.prototype.useServiceWorker=function(a){if(!(a instanceof ServiceWorkerRegistration))throw this.a.create("sw-registration-expected");if("undefined"!==typeof this.b)throw this.a.create("use-sw-before-get-token");this.b=a};V.prototype.useServiceWorker=V.prototype.useServiceWorker;V.prototype.onMessage=function(a,b,c){return this.m(a,b,c)};V.prototype.onMessage=V.prototype.onMessage;V.prototype.onTokenRefresh=function(a,b,c){return this.o(a,b,c)};V.prototype.onTokenRefresh=V.prototype.onTokenRefresh;
var X=function(a,b){var c=b.installing||b.waiting||b.active;return new Promise(function(d,e){if(c)if("activated"===c.state)d(b);else if("redundant"===c.state)e(a.a.create("sw-reg-redundant"));else{var n=function(){if("activated"===c.state)d(b);else if("redundant"===c.state)e(a.a.create("sw-reg-redundant"));else return;c.removeEventListener("statechange",n)};c.addEventListener("statechange",n)}else e(a.a.create("no-sw-in-reg"))})};
V.prototype.f=function(){var a=this;if(this.b)return X(this,this.b);this.b=null;return navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch(function(b){throw a.a.create("failed-serviceworker-registration",{browserErrorMessage:b.message});}).then(function(b){return X(a,b).then(function(){a.b=b;b.update();return b})})};
var U=function(a){"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",function(b){if(b.data&&b.data["firebase-messaging-msg-type"])switch(b=b.data,b["firebase-messaging-msg-type"]){case "push-msg-received":case "notification-clicked":a.j.next(b["firebase-messaging-msg-data"])}},!1)};if(!(firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService))throw Error("Cannot install Firebase Messaging - be sure to load firebase-app.js first.");firebase.INTERNAL.registerService("messaging",function(a){return self&&"ServiceWorkerGlobalScope"in self?new P(a):new V(a)},{Messaging:V});}).call(this);
}).call(global);
module.exports = firebase.messaging;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var firebase = __webpack_require__(34);
(function(){
/*! @license Firebase v3.6.5
    Build: 3.6.5-rc.1
    Terms: https://firebase.google.com/terms/ */
(function(){var k,l=this,m=function(a){return void 0!==a},aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var p=function(a,b){return-1!==a.indexOf(b)};var ba=function(a,b,c){function d(){z||(z=!0,b.apply(null,arguments))}function e(b){n=setTimeout(function(){n=null;a(f,2===C)},b)}function f(a,b){if(!z)if(a)d.apply(null,arguments);else if(2===C||B)d.apply(null,arguments);else{64>h&&(h*=2);var c;1===C?(C=2,c=0):c=1E3*(h+Math.random());e(c)}}function g(a){Ha||(Ha=!0,z||(null!==n?(a||(C=2),clearTimeout(n),e(0)):a||(C=1)))}var h=1,n=null,B=!1,C=0,z=!1,Ha=!1;e(0);setTimeout(function(){B=!0;g(!0)},c);return g};var q="https://firebasestorage.googleapis.com";var r=function(a,b){this.code="storage/"+a;this.message="Firebase Storage: "+b;this.serverResponse=null;this.name="FirebaseError"};(function(){var a=Error;function b(){}b.prototype=a.prototype;r.b=a.prototype;r.prototype=new b;r.a=function(b,d,e){for(var c=Array(arguments.length-2),g=2;g<arguments.length;g++)c[g-2]=arguments[g];return a.prototype[d].apply(b,c)}})();
var ca=function(){return new r("unknown","An unknown error occurred, please check the error payload for server response.")},da=function(){return new r("canceled","User canceled the upload/download.")},ea=function(){return new r("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")},fa=function(a,b,c){return new r("invalid-argument","Invalid argument in `"+b+"` at index "+a+": "+c)},ga=function(){return new r("app-deleted","The Firebase app was deleted.")},t=function(a,b){return new r("invalid-format",
"String does not match format '"+a+"': "+b)},u=function(a){throw new r("internal-error","Internal error: "+a);};var v=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ha=function(a){var b={};v(a,function(a,d){b[a]=d});return b};var ia=function(a,b){b=b.split("/").filter(function(a){return 0<a.length}).join("/");return 0===a.length?b:a+"/"+b},ja=function(a){var b=a.lastIndexOf("/",a.length-2);return-1===b?a:a.slice(b+1)};var ka=function(a){if("undefined"!==typeof firebase)return new firebase.Promise(a);throw Error("Error in Firebase Storage - be sure to load firebase-app.js first.");};var w=function(a,b,c,d){this.h=a;this.b={};this.method=b;this.headers={};this.body=null;this.j=c;this.l=this.a=null;this.c=[200];this.g=[];this.timeout=d;this.f=!0};var la={STATE_CHANGED:"state_changed"},x={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},ma=function(a){switch(a){case "running":case "pausing":case "canceling":return"running";case "paused":return"paused";case "success":return"success";case "canceled":return"canceled";case "error":return"error";default:return"error"}};var y=function(a){return m(a)&&null!==a},na=function(a){return"string"===typeof a||a instanceof String},oa=function(){return"undefined"!==typeof Blob};var qa=function(a,b){var c=pa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},sa=function(a,b){return a<b?-1:a>b?1:0};var A=function(a){return function(){var b=[];Array.prototype.push.apply(b,arguments);firebase.Promise.resolve(!0).then(function(){a.apply(null,b)})}};var D=function(a,b){this.bucket=a;this.path=b},ta=function(a){var b=encodeURIComponent;return"/b/"+b(a.bucket)+"/o/"+b(a.path)},ua=function(a){for(var b=null,c=[{K:/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,G:{bucket:1,path:3},J:function(a){"/"===a.path.charAt(a.path.length-1)&&(a.path=a.path.slice(0,-1))}},{K:/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,G:{bucket:1,path:3},J:function(a){a.path=decodeURIComponent(a.path)}}],d=0;d<c.length;d++){var e=
c[d],f=e.K.exec(a);if(f){b=f[e.G.bucket];(f=f[e.G.path])||(f="");b=new D(b,f);e.J(b);break}}if(null==b)throw new r("invalid-url","Invalid URL '"+a+"'.");return b};var va=function(a,b,c){"function"==aa(a)||y(b)||y(c)?(this.c=a,this.a=b||null,this.b=c||null):(this.c=a.next||null,this.a=a.error||null,this.b=a.complete||null)};var E={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},wa=function(a){switch(a){case "raw":case "base64":case "base64url":case "data_url":break;default:throw"Expected one of the event types: [raw, base64, base64url, data_url].";}},xa=function(a,b){this.b=a;this.a=b||null},Ba=function(a,b){switch(a){case "raw":return new xa(ya(b));case "base64":case "base64url":return new xa(za(a,b));case "data_url":a=new Aa(b);var c;if(a.a)c=za("base64",a.c);else{try{c=decodeURIComponent(a.c)}catch(d){throw t("data_url",
"Malformed data URL.");}c=ya(c)}return new xa(c,(new Aa(b)).b)}throw ca();},ya=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);if(127>=d)b.push(d);else if(2047>=d)b.push(192|d>>6,128|d&63);else if(55296==(d&64512))if(c<a.length-1&&56320==(a.charCodeAt(c+1)&64512)){var e=a.charCodeAt(++c),d=65536|(d&1023)<<10|e&1023;b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63)}else b.push(239,191,189);else 56320==(d&64512)?b.push(239,191,189):b.push(224|d>>12,128|d>>6&63,128|d&63)}return new Uint8Array(b)},
za=function(a,b){switch(a){case "base64":var c=-1!==b.indexOf("-"),d=-1!==b.indexOf("_");if(c||d)throw t(a,"Invalid character '"+(c?"-":"_")+"' found: is it base64url encoded?");break;case "base64url":c=-1!==b.indexOf("+");d=-1!==b.indexOf("/");if(c||d)throw t(a,"Invalid character '"+(c?"+":"/")+"' found: is it base64 encoded?");b=b.replace(/-/g,"+").replace(/_/g,"/")}var e;try{e=atob(b)}catch(f){throw t(a,"Invalid character found");}a=new Uint8Array(e.length);for(b=0;b<e.length;b++)a[b]=e.charCodeAt(b);
return a},Aa=function(a){var b=a.match(/^data:([^,]+)?,/);if(null===b)throw t("data_url","Must be formatted 'data:[<mediatype>][;base64],<data>");b=b[1]||null;this.a=!1;this.b=null;if(null!=b){var c=b.length-7;this.b=(this.a=0<=c&&b.indexOf(";base64",c)==c)?b.substring(0,b.length-7):b}this.c=a.substring(a.indexOf(",")+1)};var Ca=function(a){var b=encodeURIComponent,c="?";v(a,function(a,e){a=b(a)+"="+b(e);c=c+a+"&"});return c=c.slice(0,-1)};var Da=function(){var a=this;this.a=new XMLHttpRequest;this.c=0;this.f=ka(function(b){a.a.addEventListener("abort",function(){a.c=2;b(a)});a.a.addEventListener("error",function(){a.c=1;b(a)});a.a.addEventListener("load",function(){b(a)})});this.b=!1},Ea=function(a,b,c,d,e){if(a.b)throw u("cannot .send() more than once");a.b=!0;a.a.open(c,b,!0);y(e)&&v(e,function(b,c){a.a.setRequestHeader(b,c.toString())});y(d)?a.a.send(d):a.a.send();return a.f},Fa=function(a){if(!a.b)throw u("cannot .getErrorCode() before sending");
return a.c},F=function(a){if(!a.b)throw u("cannot .getStatus() before sending");try{return a.a.status}catch(b){return-1}},Ga=function(a){if(!a.b)throw u("cannot .getResponseText() before sending");return a.a.responseText};Da.prototype.abort=function(){this.a.abort()};var G=function(a,b,c,d,e,f){this.b=a;this.h=b;this.f=c;this.a=d;this.g=e;this.c=f};k=G.prototype;k.V=function(){return this.b};k.qa=function(){return this.h};k.na=function(){return this.f};k.ia=function(){return this.a};k.W=function(){if(y(this.a)){var a=this.a.downloadURLs;return y(a)&&y(a[0])?a[0]:null}return null};k.pa=function(){return this.g};k.la=function(){return this.c};var H;a:{var Ia=l.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){H=Ja;break a}}H=""};var La=function(a,b,c,d,e,f,g,h,n,B,C){this.C=a;this.A=b;this.v=c;this.o=d;this.B=e.slice();this.m=f.slice();this.j=this.l=this.c=this.b=null;this.f=this.g=!1;this.s=g;this.h=h;this.D=C;this.w=n;var z=this;this.u=ka(function(a,b){z.l=a;z.j=b;Ka(z)})},Ma=function(a,b,c){this.b=a;this.c=b;this.a=!!c},Ka=function(a){function b(a,b){b?a(!1,new Ma(!1,null,!0)):(b=new Da,b.a.withCredentials=d.D,d.b=b,Ea(b,d.C,d.A,d.o,d.v).then(function(b){d.b=null;var c=0===Fa(b),e=F(b);if(!(c=!c))var c=p([408,429],e),
f=p(d.m,e),c=500<=e&&600>e||c||f;c?(b=2===Fa(b),a(!1,new Ma(!1,null,b))):a(!0,new Ma(p(d.B,e),b))}))}function c(a,b){var c=d.l;a=d.j;var e=b.c;if(b.b)try{var f=d.s(e,Ga(e));m(f)?c(f):c()}catch(B){a(B)}else null!==e?(b=ca(),f=Ga(e),b.serverResponse=f,d.h?a(d.h(e,b)):a(b)):(b=b.a?d.f?ga():da():new r("retry-limit-exceeded","Max retry time for operation exceeded, please try again."),a(b))}var d=a;a.g?c(0,new Ma(!1,null,!0)):a.c=ba(b,c,a.w)};La.prototype.a=function(){return this.u};
La.prototype.cancel=function(a){this.g=!0;this.f=a||!1;null!==this.c&&(0,this.c)(!1);null!==this.b&&this.b.abort()};var Na=function(a,b,c){var d=Ca(a.b),d=a.h+d,e=a.headers?ha(a.headers):{};null!==b&&0<b.length&&(e.Authorization="Firebase "+b);e["X-Firebase-Storage-Version"]="webjs/"+("undefined"!==typeof firebase?firebase.SDK_VERSION:"AppManager");return new La(d,a.method,e,a.body,a.c,a.g,a.j,a.a,a.timeout,0,c)};var Oa=function(){};var Pa=function(a){this.b=firebase.Promise.reject(a)};Pa.prototype.a=function(){return this.b};Pa.prototype.cancel=function(){};var Qa=function(){this.a={};this.b=Number.MIN_SAFE_INTEGER},Ra=function(a,b){function c(){delete e.a[d]}var d=a.b;a.b++;a.a[d]=b;var e=a;b.a().then(c,c)},Sa=function(a){v(a.a,function(a,c){c&&c.cancel(!0)});a.a={}};var Ta=function(a,b,c,d,e){this.a=a;this.g=null;if(null!==this.a&&(a=this.a.options,y(a))){a=a.storageBucket||null;if(null==a)a=null;else{var f=null;try{f=ua(a)}catch(g){}if(null!==f){if(""!==f.path)throw new r("invalid-default-bucket","Invalid default bucket '"+a+"'.");a=f.bucket}}this.g=a}this.o=b;this.m=c;this.j=e;this.l=d;this.c=12E4;this.b=6E4;this.h=new Qa;this.f=!1},Ua=function(a){return null!==a.a&&y(a.a.INTERNAL)&&y(a.a.INTERNAL.getToken)?a.a.INTERNAL.getToken().then(function(a){return y(a)?
a.accessToken:null},function(){return null}):firebase.Promise.resolve(null)};Ta.prototype.bucket=function(){if(this.f)throw ga();return this.g};var I=function(a,b,c){if(a.f)return new Pa(ga());b=a.m(b,c,null===a.a,a.j);Ra(a.h,b);return b};var Va=-1!=H.indexOf("Opera"),Wa=-1!=H.indexOf("Trident")||-1!=H.indexOf("MSIE"),Xa=-1!=H.indexOf("Edge"),Ya=-1!=H.indexOf("Gecko")&&!(-1!=H.toLowerCase().indexOf("webkit")&&-1==H.indexOf("Edge"))&&!(-1!=H.indexOf("Trident")||-1!=H.indexOf("MSIE"))&&-1==H.indexOf("Edge"),Za=-1!=H.toLowerCase().indexOf("webkit")&&-1==H.indexOf("Edge"),$a;
a:{var ab="",bb=function(){var a=H;if(Ya)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Xa)return/Edge\/([\d\.]+)/.exec(a);if(Wa)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Za)return/WebKit\/(\S+)/.exec(a);if(Va)return/(?:Version)[ \/]?(\S+)/.exec(a)}();bb&&(ab=bb?bb[1]:"");if(Wa){var cb,db=l.document;cb=db?db.documentMode:void 0;if(null!=cb&&cb>parseFloat(ab)){$a=String(cb);break a}}$a=ab}
var eb=$a,pa={},fb=function(a){return qa(a,function(){for(var b=0,c=ra(String(eb)).split("."),d=ra(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=sa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||sa(0==g[2].length,0==h[2].length)||sa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})};var gb=function(a){var b=l.BlobBuilder||l.WebKitBlobBuilder;if(m(b)){for(var b=new b,c=0;c<arguments.length;c++)b.append(arguments[c]);return b.getBlob()}b=Array.prototype.slice.call(arguments);c=l.BlobBuilder||l.WebKitBlobBuilder;if(m(c)){for(var c=new c,d=0;d<b.length;d++)c.append(b[d],void 0);b=c.getBlob(void 0)}else if(m(l.Blob))b=new Blob(b,{});else throw Error("This browser doesn't seem to support creating Blobs");return b},hb=function(a,b,c){m(c)||(c=a.size);return a.webkitSlice?a.webkitSlice(b,
c):a.mozSlice?a.mozSlice(b,c):a.slice?Ya&&!fb("13.0")||Za&&!fb("537.1")?(0>b&&(b+=a.size),0>b&&(b=0),0>c&&(c+=a.size),c<b&&(c=b),a.slice(b,c-b)):a.slice(b,c):null};var ib=function(a,b){return b},J=function(a,b,c,d){this.c=a;this.b=b||a;this.writable=!!c;this.a=d||ib},jb=null,kb=function(){if(jb)return jb;var a=[];a.push(new J("bucket"));a.push(new J("generation"));a.push(new J("metageneration"));a.push(new J("name","fullPath",!0));var b=new J("name");b.a=function(a,b){return!na(b)||2>b.length?b:ja(b)};a.push(b);b=new J("size");b.a=function(a,b){return y(b)?+b:b};a.push(b);a.push(new J("timeCreated"));a.push(new J("updated"));a.push(new J("md5Hash",null,!0));
a.push(new J("cacheControl",null,!0));a.push(new J("contentDisposition",null,!0));a.push(new J("contentEncoding",null,!0));a.push(new J("contentLanguage",null,!0));a.push(new J("contentType",null,!0));a.push(new J("metadata","customMetadata",!0));a.push(new J("downloadTokens","downloadURLs",!1,function(a,b){if(!(na(b)&&0<b.length))return[];var c=encodeURIComponent;return b.split(",").map(function(b){var d=a.fullPath,d="https://firebasestorage.googleapis.com/v0"+("/b/"+c(a.bucket)+"/o/"+c(d));b=Ca({alt:"media",
token:b});return d+b})}));return jb=a},lb=function(a,b){Object.defineProperty(a,"ref",{get:function(){return b.o(b,new D(a.bucket,a.fullPath))}})},mb=function(a,b){for(var c={},d=b.length,e=0;e<d;e++){var f=b[e];f.writable&&(c[f.c]=a[f.b])}return JSON.stringify(c)},nb=function(a){if(!a||"object"!==typeof a)throw"Expected Metadata object.";for(var b in a){var c=a[b];if("customMetadata"===b){if("object"!==typeof c)throw"Expected object for 'customMetadata' mapping.";}else if(null!=c&&"object"===typeof c)throw"Mapping for '"+
b+"' cannot be an object.";}};var K=function(a,b,c){for(var d=b.length,e=b.length,f=0;f<b.length;f++)if(b[f].b){d=f;break}if(!(d<=c.length&&c.length<=e))throw d===e?(b=d,d=1===d?"argument":"arguments"):(b="between "+d+" and "+e,d="arguments"),new r("invalid-argument-count","Invalid argument count in `"+a+"`: Expected "+b+" "+d+", received "+c.length+".");for(f=0;f<c.length;f++)try{b[f].a(c[f])}catch(g){if(g instanceof Error)throw fa(f,a,g.message);throw fa(f,a,g);}},L=function(a,b){var c=this;this.a=function(b){c.b&&!m(b)||a(b)};
this.b=!!b},ob=function(a,b){return function(c){a(c);b(c)}},M=function(a,b){function c(a){if(!("string"===typeof a||a instanceof String))throw"Expected string.";}var d;a?d=ob(c,a):d=c;return new L(d,b)},pb=function(){return new L(function(a){if(!(a instanceof Uint8Array||a instanceof ArrayBuffer||oa()&&a instanceof Blob))throw"Expected Blob or File.";})},qb=function(){return new L(function(a){if(!(("number"===typeof a||a instanceof Number)&&0<=a))throw"Expected a number 0 or greater.";})},rb=function(a,
b){return new L(function(b){if(!(null===b||y(b)&&b instanceof Object))throw"Expected an Object.";y(a)&&a(b)},b)},N=function(){return new L(function(a){if(null!==a&&"function"!=aa(a))throw"Expected a Function.";},!0)};var O=function(a,b){oa()&&a instanceof Blob?(this.i=a,b=a.size,a=a.type):(a instanceof ArrayBuffer?(b?this.i=new Uint8Array(a):(this.i=new Uint8Array(a.byteLength),this.i.set(new Uint8Array(a))),b=this.i.length):(b?this.i=a:(this.i=new Uint8Array(a.length),this.i.set(a)),b=a.length),a="");this.a=b;this.b=a};O.prototype.type=function(){return this.b};
O.prototype.slice=function(a,b){if(oa()&&this.i instanceof Blob)return a=hb(this.i,a,b),null===a?null:new O(a);a=new Uint8Array(this.i.buffer,a,b-a);return new O(a,!0)};
var sb=function(a){var b=[];Array.prototype.push.apply(b,arguments);if(oa())return b=b.map(function(a){return a instanceof O?a.i:a}),new O(gb.apply(null,b));var b=b.map(function(a){return na(a)?Ba("raw",a).b.buffer:a.i.buffer}),c=0;b.forEach(function(a){c+=a.byteLength});var d=new Uint8Array(c),e=0;b.forEach(function(a){a=new Uint8Array(a);for(var b=0;b<a.length;b++)d[e++]=a[b]});return new O(d,!0)};var P=function(a){if(!a)throw ca();},tb=function(a,b){return function(c,d){var e;a:{try{e=JSON.parse(d)}catch(h){e=null;break a}c=typeof e;e="object"==c&&null!=e||"function"==c?e:null}if(null===e)e=null;else{c={type:"file"};d=b.length;for(var f=0;f<d;f++){var g=b[f];c[g.b]=g.a(c,e[g.c])}lb(c,a);e=c}P(null!==e);return e}},Q=function(a){return function(b,c){b=401===F(b)?new r("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===F(b)?
new r("quota-exceeded","Quota for bucket '"+a.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===F(b)?new r("unauthorized","User does not have permission to access '"+a.path+"'."):c;b.serverResponse=c.serverResponse;return b}},ub=function(a){var b=Q(a);return function(c,d){var e=b(c,d);404===F(c)&&(e=new r("object-not-found","Object '"+a.path+"' does not exist."));e.serverResponse=d.serverResponse;return e}},vb=function(a,b,c){var d=ta(b);a=new w(q+"/v0"+d,"GET",
tb(a,c),a.c);a.a=ub(b);return a},wb=function(a,b){var c=ta(b);a=new w(q+"/v0"+c,"DELETE",function(){},a.c);a.c=[200,204];a.a=ub(b);return a},xb=function(a,b,c){c=c?ha(c):{};c.fullPath=a.path;c.size=b.a;c.contentType||(a=b&&b.type()||"application/octet-stream",c.contentType=a);return c},yb=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g={"X-Goog-Upload-Protocol":"multipart"},h;h="";for(var n=0;2>n;n++)h+=Math.random().toString().slice(2);g["Content-Type"]="multipart/related; boundary="+
h;e=xb(b,d,e);n=mb(e,c);d=sb("--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+n+"\r\n--"+h+"\r\nContent-Type: "+e.contentType+"\r\n\r\n",d,"\r\n--"+h+"--");if(null===d)throw ea();a=new w(q+"/v0"+f,"POST",tb(a,c),a.b);a.b={name:e.fullPath};a.headers=g;a.body=d.i;a.a=Q(b);return a},zb=function(a,b,c,d){this.a=a;this.b=b;this.c=!!c;this.f=d||null},Ab=function(a,b){var c;try{c=a.a.getResponseHeader("X-Goog-Upload-Status")}catch(d){P(!1)}P(p(b||["active"],c));return c},Bb=function(a,
b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g=xb(b,d,e);e={name:g.fullPath};f=q+"/v0"+f;d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":d.a,"X-Goog-Upload-Header-Content-Type":g.contentType,"Content-Type":"application/json; charset=utf-8"};c=mb(g,c);a=new w(f,"POST",function(a){Ab(a);var b;try{b=a.a.getResponseHeader("X-Goog-Upload-URL")}catch(B){P(!1)}P(na(b));return b},a.b);a.b=e;a.headers=d;a.body=c;a.a=Q(b);return a},Cb=
function(a,b,c,d){a=new w(c,"POST",function(a){var b=Ab(a,["active","final"]),c;try{c=a.a.getResponseHeader("X-Goog-Upload-Size-Received")}catch(h){P(!1)}a=c;isFinite(a)&&(a=String(a));a="string"==typeof a?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN;P(!isNaN(a));return new zb(a,d.a,"final"===b)},a.b);a.headers={"X-Goog-Upload-Command":"query"};a.a=Q(b);a.f=!1;return a},Db=function(a,b,c,d,e,f,g){var h=new zb(0,0);g?(h.a=g.a,h.b=g.b):(h.a=0,h.b=d.a);if(d.a!==h.b)throw new r("server-file-wrong-size",
"Server recorded incorrect upload file size, please retry the upload.");var n=g=h.b-h.a;0<e&&(n=Math.min(n,e));var B=h.a;e={"X-Goog-Upload-Command":n===g?"upload, finalize":"upload","X-Goog-Upload-Offset":h.a};g=d.slice(B,B+n);if(null===g)throw ea();c=new w(c,"POST",function(a,c){var e=Ab(a,["active","final"]),g=h.a+n,C=d.a,z;"final"===e?z=tb(b,f)(a,c):z=null;return new zb(g,C,"final"===e,z)},b.b);c.headers=e;c.body=g.i;c.l=null;c.a=Q(a);c.f=!1;return c};var T=function(a,b,c,d,e,f){this.L=a;this.c=b;this.l=c;this.f=e;this.h=f||null;this.s=d;this.m=0;this.D=this.u=!1;this.B=[];this.S=262144<this.f.a;this.b="running";this.a=this.v=this.g=null;this.j=1;var g=this;this.F=function(a){g.a=null;g.j=1;"storage/canceled"===a.code?(g.u=!0,R(g)):(g.g=a,S(g,"error"))};this.P=function(a){g.a=null;"storage/canceled"===a.code?R(g):(g.g=a,S(g,"error"))};this.A=this.o=null;this.C=ka(function(a,b){g.o=a;g.A=b;Eb(g)});this.C.then(null,function(){})},Eb=function(a){"running"===
a.b&&null===a.a&&(a.S?null===a.v?Fb(a):a.u?Gb(a):a.D?Hb(a):Ib(a):Jb(a))},U=function(a,b){Ua(a.c).then(function(c){switch(a.b){case "running":b(c);break;case "canceling":S(a,"canceled");break;case "pausing":S(a,"paused")}})},Fb=function(a){U(a,function(b){var c=Bb(a.c,a.l,a.s,a.f,a.h);a.a=I(a.c,c,b);a.a.a().then(function(b){a.a=null;a.v=b;a.u=!1;R(a)},this.F)})},Gb=function(a){var b=a.v;U(a,function(c){var d=Cb(a.c,a.l,b,a.f);a.a=I(a.c,d,c);a.a.a().then(function(b){a.a=null;Kb(a,b.a);a.u=!1;b.c&&(a.D=
!0);R(a)},a.F)})},Ib=function(a){var b=262144*a.j,c=new zb(a.m,a.f.a),d=a.v;U(a,function(e){var f;try{f=Db(a.l,a.c,d,a.f,b,a.s,c)}catch(g){a.g=g;S(a,"error");return}a.a=I(a.c,f,e);a.a.a().then(function(b){33554432>262144*a.j&&(a.j*=2);a.a=null;Kb(a,b.a);b.c?(a.h=b.f,S(a,"success")):R(a)},a.F)})},Hb=function(a){U(a,function(b){var c=vb(a.c,a.l,a.s);a.a=I(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;S(a,"success")},a.P)})},Jb=function(a){U(a,function(b){var c=yb(a.c,a.l,a.s,a.f,a.h);a.a=I(a.c,c,
b);a.a.a().then(function(b){a.a=null;a.h=b;Kb(a,a.f.a);S(a,"success")},a.F)})},Kb=function(a,b){var c=a.m;a.m=b;a.m>c&&V(a)},S=function(a,b){if(a.b!==b)switch(b){case "canceling":a.b=b;null!==a.a&&a.a.cancel();break;case "pausing":a.b=b;null!==a.a&&a.a.cancel();break;case "running":var c="paused"===a.b;a.b=b;c&&(V(a),Eb(a));break;case "paused":a.b=b;V(a);break;case "canceled":a.g=da();a.b=b;V(a);break;case "error":a.b=b;V(a);break;case "success":a.b=b,V(a)}},R=function(a){switch(a.b){case "pausing":S(a,
"paused");break;case "canceling":S(a,"canceled");break;case "running":Eb(a)}};T.prototype.w=function(){return new G(this.m,this.f.a,ma(this.b),this.h,this,this.L)};
T.prototype.M=function(a,b,c,d){function e(a){try{g(a);return}catch(z){}try{if(h(a),!(m(a.next)||m(a.error)||m(a.complete)))throw"";}catch(z){throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";}}function f(a){return function(b,c,d){null!==a&&K("on",a,arguments);var e=new va(b,c,d);Lb(n,e);return function(){var a=n.B,b=a.indexOf(e);-1!==b&&a.splice(b,1)}}}var g=N().a,h=rb(null,!0).a;K("on",[M(function(){if("state_changed"!==a)throw"Expected one of the event types: [state_changed].";
}),rb(e,!0),N(),N()],arguments);var n=this,B=[rb(function(a){if(null===a)throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";e(a)}),N(),N()];return m(b)||m(c)||m(d)?f(null)(b,c,d):f(B)};T.prototype.then=function(a,b){return this.C.then(a,b)};
var Lb=function(a,b){a.B.push(b);Mb(a,b)},V=function(a){Nb(a);Array.prototype.slice.call(a.B).forEach(function(b){Mb(a,b)})},Nb=function(a){if(null!==a.o){var b=!0;switch(ma(a.b)){case "success":A(a.o.bind(null,a.w()))();break;case "canceled":case "error":A(a.A.bind(null,a.g))();break;default:b=!1}b&&(a.o=null,a.A=null)}},Mb=function(a,b){switch(ma(a.b)){case "running":case "paused":null!==b.c&&A(b.c.bind(b,a.w()))();break;case "success":null!==b.b&&A(b.b.bind(b))();break;case "canceled":case "error":null!==
b.a&&A(b.a.bind(b,a.g))();break;default:null!==b.a&&A(b.a.bind(b,a.g))()}};T.prototype.O=function(){K("resume",[],arguments);var a="paused"===this.b||"pausing"===this.b;a&&S(this,"running");return a};T.prototype.N=function(){K("pause",[],arguments);var a="running"===this.b;a&&S(this,"pausing");return a};T.prototype.cancel=function(){K("cancel",[],arguments);var a="running"===this.b||"pausing"===this.b;a&&S(this,"canceling");return a};var W=function(a,b){this.b=a;if(b)this.a=b instanceof D?b:ua(b);else if(a=a.bucket(),null!==a)this.a=new D(a,"");else throw new r("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");};W.prototype.toString=function(){K("toString",[],arguments);return"gs://"+this.a.bucket+"/"+this.a.path};var Ob=function(a,b){return new W(a,b)};k=W.prototype;
k.H=function(a){K("child",[M()],arguments);var b=ia(this.a.path,a);return Ob(this.b,new D(this.a.bucket,b))};k.ka=function(){var a;a=this.a.path;if(0==a.length)a=null;else{var b=a.lastIndexOf("/");a=-1===b?"":a.slice(0,b)}return null===a?null:Ob(this.b,new D(this.a.bucket,a))};k.ma=function(){return Ob(this.b,new D(this.a.bucket,""))};k.U=function(){return this.a.bucket};k.fa=function(){return this.a.path};k.ja=function(){return ja(this.a.path)};k.oa=function(){return this.b.l};
k.Z=function(a,b){K("put",[pb(),new L(nb,!0)],arguments);X(this,"put");return new T(this,this.b,this.a,kb(),new O(a),b)};k.$=function(a,b,c){K("putString",[M(),M(wa,!0),new L(nb,!0)],arguments);X(this,"putString");var d=Ba(y(b)?b:"raw",a),e=c?ha(c):{};!y(e.contentType)&&y(d.a)&&(e.contentType=d.a);return new T(this,this.b,this.a,kb(),new O(d.b,!0),e)};k.X=function(){K("delete",[],arguments);X(this,"delete");var a=this;return Ua(this.b).then(function(b){var c=wb(a.b,a.a);return I(a.b,c,b).a()})};
k.I=function(){K("getMetadata",[],arguments);X(this,"getMetadata");var a=this;return Ua(this.b).then(function(b){var c=vb(a.b,a.a,kb());return I(a.b,c,b).a()})};k.aa=function(a){K("updateMetadata",[new L(nb,void 0)],arguments);X(this,"updateMetadata");var b=this;return Ua(this.b).then(function(c){var d=b.b,e=b.a,f=a,g=kb(),h=ta(e),h=q+"/v0"+h,f=mb(f,g),d=new w(h,"PATCH",tb(d,g),d.c);d.headers={"Content-Type":"application/json; charset=utf-8"};d.body=f;d.a=ub(e);return I(b.b,d,c).a()})};
k.Y=function(){K("getDownloadURL",[],arguments);X(this,"getDownloadURL");return this.I().then(function(a){a=a.downloadURLs[0];if(y(a))return a;throw new r("no-download-url","The given file does not have any download URLs.");})};var X=function(a,b){if(""===a.a.path)throw new r("invalid-root-operation","The operation '"+b+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");};var Y=function(a,b){this.a=new Ta(a,function(a,b){return new W(a,b)},Na,this,y(b)?b:new Oa);this.b=a;this.c=new Pb(this)};k=Y.prototype;k.ba=function(a){K("ref",[M(function(a){if(/^[A-Za-z]+:\/\//.test(a))throw"Expected child path but got a URL, use refFromURL instead.";},!0)],arguments);var b=new W(this.a);return m(a)?b.H(a):b};
k.ca=function(a){K("refFromURL",[M(function(a){if(!/^[A-Za-z]+:\/\//.test(a))throw"Expected full URL but got a child path, use ref instead.";try{ua(a)}catch(c){throw"Expected valid full URL but got an invalid one.";}},!1)],arguments);return new W(this.a,a)};k.ha=function(){return this.a.b};k.ea=function(a){K("setMaxUploadRetryTime",[qb()],arguments);this.a.b=a};k.ga=function(){return this.a.c};k.da=function(a){K("setMaxOperationRetryTime",[qb()],arguments);this.a.c=a};k.T=function(){return this.b};
k.R=function(){return this.c};var Pb=function(a){this.a=a};Pb.prototype.b=function(){var a=this.a.a;a.f=!0;a.a=null;Sa(a.h)};var Z=function(a,b,c){Object.defineProperty(a,b,{get:c})};W.prototype.toString=W.prototype.toString;W.prototype.child=W.prototype.H;W.prototype.put=W.prototype.Z;W.prototype.putString=W.prototype.$;W.prototype["delete"]=W.prototype.X;W.prototype.getMetadata=W.prototype.I;W.prototype.updateMetadata=W.prototype.aa;W.prototype.getDownloadURL=W.prototype.Y;Z(W.prototype,"parent",W.prototype.ka);Z(W.prototype,"root",W.prototype.ma);Z(W.prototype,"bucket",W.prototype.U);Z(W.prototype,"fullPath",W.prototype.fa);
Z(W.prototype,"name",W.prototype.ja);Z(W.prototype,"storage",W.prototype.oa);Y.prototype.ref=Y.prototype.ba;Y.prototype.refFromURL=Y.prototype.ca;Z(Y.prototype,"maxOperationRetryTime",Y.prototype.ga);Y.prototype.setMaxOperationRetryTime=Y.prototype.da;Z(Y.prototype,"maxUploadRetryTime",Y.prototype.ha);Y.prototype.setMaxUploadRetryTime=Y.prototype.ea;Z(Y.prototype,"app",Y.prototype.T);Z(Y.prototype,"INTERNAL",Y.prototype.R);Pb.prototype["delete"]=Pb.prototype.b;Y.prototype.capi_=function(a){q=a};
T.prototype.on=T.prototype.M;T.prototype.resume=T.prototype.O;T.prototype.pause=T.prototype.N;T.prototype.cancel=T.prototype.cancel;Z(T.prototype,"snapshot",T.prototype.w);Z(G.prototype,"bytesTransferred",G.prototype.V);Z(G.prototype,"totalBytes",G.prototype.qa);Z(G.prototype,"state",G.prototype.na);Z(G.prototype,"metadata",G.prototype.ia);Z(G.prototype,"downloadURL",G.prototype.W);Z(G.prototype,"task",G.prototype.pa);Z(G.prototype,"ref",G.prototype.la);la.STATE_CHANGED="state_changed";
x.RUNNING="running";x.PAUSED="paused";x.SUCCESS="success";x.CANCELED="canceled";x.ERROR="error";E.RAW="raw";E.BASE64="base64";E.BASE64URL="base64url";E.DATA_URL="data_url";(function(){function a(a){return new Y(a)}var b={TaskState:x,TaskEvent:la,StringFormat:E,Storage:Y,Reference:W};if("undefined"!==typeof firebase)firebase.INTERNAL.registerService("storage",a,b);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");})();}).call(this);
}).call(global);
module.exports = firebase.storage;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TexMarkup = exports.Tex = undefined;

var _Tex2 = __webpack_require__(140);

var _Tex3 = _interopRequireDefault(_Tex2);

var _TexMarkup2 = __webpack_require__(141);

var _TexMarkup3 = _interopRequireDefault(_TexMarkup2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tex = _Tex3.default;
exports.TexMarkup = _TexMarkup3.default;

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.signinUser = exports.signoutUser = exports.checkAuth = exports.registerUser = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = users;

var _auth = __webpack_require__(170);

var _api = __webpack_require__(54);

var _format = __webpack_require__(171);

var _constants = __webpack_require__(9);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FETCHING_USER = 'FETCHING_USER';
var FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS';
var FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE';
var AUTH_USER = 'AUTH_USER';
var UNAUTH_USER = 'UNAUTH_USER';

var fetchingUser = function fetchingUser() {
	return {
		type: FETCHING_USER
	};
};

var fetchingUserSuccess = function fetchingUserSuccess(user) {
	return {
		type: FETCHING_USER_SUCCESS,
		user: user
	};
};

var fetchingUserFailure = function fetchingUserFailure(error) {
	console.error(error);
	return {
		type: FETCHING_USER_FAILURE,
		error: 'Error Fetching User'
	};
};

var authUser = function authUser(uid) {
	return {
		type: AUTH_USER,
		uid: uid
	};
};

var unauthUser = function unauthUser() {
	return {
		type: UNAUTH_USER
	};
};

// Thunks

/*
	Details come directly from form component, each key value pair is an input on the form
*/
var registerUser = exports.registerUser = function registerUser(details) {
	return function (dispatch) {
		dispatch(fetchingUser());

		return (0, _auth.registerUser)(details.email, details.password).then(function (uid) {
			return (0, _api.saveUser)((0, _format.formatUserDetails)(_extends({}, details, { uid: uid })));
		}).then(function (user) {
			dispatch(fetchingUserSuccess(user));
			dispatch(authUser(user.uid));
		}).catch(function (error) {
			return dispatch(fetchingUserFailure(error));
		});
	};
};

// Keeps the client app's auth state in sync with firebase
var checkAuth = exports.checkAuth = function checkAuth() {
	return function (dispatch) {
		return (0, _constants.firebaseAuth)().onAuthStateChanged(function (user) {
			if (user) {
				var uid = user.uid;
				dispatch(fetchingUser());

				return (0, _api.fetchUser)(user.uid).then(function (user) {
					dispatch(fetchingUserSuccess(user));
					dispatch(authUser(user.info.uid));
				}).catch(function (error) {
					return dispatch(fetchingUserFailure(error));
				});
			}
		});
	};
};

var signoutUser = exports.signoutUser = function signoutUser() {
	return function (dispatch) {
		return (0, _auth.signout)().then(function () {
			return dispatch(unauthUser());
		});
	};
};

var signinUser = exports.signinUser = function signinUser(email, password) {
	return function (dispatch) {
		dispatch(fetchingUser());

		return (0, _auth.signin)(email, password).then(function (user) {
			dispatch(fetchingUserSuccess(user));
			dispatch(authUser(user.info.uid));
		}).catch(function (error) {
			return dispatch(fetchingUserFailure(error));
		});
	};
};

// Reducers
var initialUsersState = {
	isFetching: false,
	error: '',
	authedId: null,
	isAuthed: false
};

function users() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialUsersState;
	var action = arguments[1];

	switch (action.type) {
		case FETCHING_USER:
			return _extends({}, state, {
				isFetching: true,
				error: ''
			});
		case FETCHING_USER_SUCCESS:
			return _extends({}, state, _defineProperty({
				isFetching: false,
				error: ''
			}, action.user.info.uid, user(state[action.user.info.uid], action)));
		case FETCHING_USER_FAILURE:
			return _extends({}, state, {
				isFetching: false,
				error: action.error
			});
		case AUTH_USER:
			return _extends({}, state, {
				authedId: action.uid,
				isAuthed: true
			});
		case UNAUTH_USER:
			return _extends({}, state, {
				authedId: null,
				isAuthed: false
			});
		default:
			return state;
	}
}

var initialUserState = {
	info: {},
	admin: false
};

function user() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialUserState;
	var action = arguments[1];

	switch (action.type) {
		case FETCHING_USER_SUCCESS:
			return _extends({}, state, action.user);
		default:
			return state;
	}
}

/***/ },

/***/ 323:
/***/ function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACUCAMAAACdrIr5AAAB9VBMVEX////Y5O6syNx1qco1jbv1+PqTudP+/v4AAAAAhLbD1+VPl8Ds8fbi4uJjoMU1NTW40OGEsc7O3umgwdjDw8Pi6/L19fWgoKDs7OzY2NjOzs5jY2OTk5NPT091dXWsrKz+/veEhIT9/v4APVT+/vv+/vq4uLjlvIzl+v3+/vNpfZrst3Ps/v5phbzP+/4Rb7erm38RT6LPkEfd/f7dolsAXazl/v4AMZDlrGf++9OWPj6IiIjp/f5gkcPw/v7dolwofcH+/vz98NHq06yXYDOKMWNGRpz98tuDipW84N/+98pPnNWzfUb5/v7Y/P73/v7W4fL82Jwuisq0vuD+/uq8dj6n4PggOIL6/v7wwYIvi7kvSVmWy+zt/f4AWnwAcZs4QXWn2PDby9Y6M2H0y4zls5/+/vb+/vmz5fn+/ejYpmh9wevs/f7y4c/hp2L+/uwzDBFGnMumj1e9kpt9wezBfT8MRpycRkHY/Pv0/v74/d2Cwewod7ynWEfgqqLvvIq98PyEv8Wl2PSppM1GV3y2ilOs5fP94Kc6kM5YEWj+/Nb2/v6c2Pai3PdhETjWxZRgQWdXETr95KwgaK754cdgoNKsil394af+/v2QMVf++8/96bZwLnZwt+W3cEq37Pv97Lx3vOh3LnD+/eb+/eOy6PqyaEpRFPFoAAAFo0lEQVR42u3bVXfjOhAAYMuyNCOz48RpknJ39zIzMzMzMzMzMzPz/Z33oW22YFtjSK63x3ras936fJZG4NGsYZRqQGrG1Frr2Qc99z74+PsvvvIQwEwzPLseeefZ5197CaCfNGS83vvg3VdfBxgNGuL58Lk33noBABca4nnsmbffBBjgUkM89z368sMAfQySZnh233M/AMwhdpvhOfOq6wGGiDhqgueEE085GQCW5nAWveaszwsJwmDYpP0CG7Z/7SueEq31tJ7W03paz5qnjoe0ntbTena8p2eb3Ffrzedx2PvfPG4YWcrisdlhjK0wxpgZc0spHrrT9wjbV1Zk97aNl2tLS/mhmKrHlZYlO5nx05GWkmxqHlcqZ2sH4NbucxRnU/EIqRybML8YV9KdvMe2LJs4323HMifsEVzFgrz+CFP57iQ9zHJYofWw56f2Zk2eUEWi4PospIon5ZHKLLFf2EqKiXikskvtX8zyxQQ80mIl99NeMZBB5PTK7u/eTTcWARm0weqUPW94QbdnyXo9trJLn3+CLgArMMsInp72cah9oU59HuHwsudDLxjHn1ubJ7JESY8XdOnvRPV0CH2N2bGzvgypsB6PcKLS5/mNOfLYErV4TMrIjz2LZ51/9umnbo6dtfciTnqNR5AOMWPPeRdfd8Hly5tjZzzH3Bo8ktTNY8/V11x0CQAAzATbbnwcWd1D6569ngvPuXb1D4mXsgi5lT0mLQrHnivOvRQAwJtP+1ekDsr3OLSFft2zeNqVl6XFztqBjvJyRv7a4xbyQFbsrA6+sit6pF8mn5B4WY/jFT1WWNzj9XO6W1TyUIdroycjdlYbYcDyPDFxuDZ4ZvI4EEWVPH5c3DPM/WSyKnnIpyjUx87aLu9W8DBq+Kx7cmOH+IZGXvIACnn0HPDNCh6TF/MMhvqzZlTBE8kiHl3sEF8xx8PNAh7CYAGA6dA8SbeaZ4bGAaZS/nKYbPF4s0G/wm7hBYgnDaG0ZwFn99Z7GcP+CNPriRQxJbmEiOiV98AIca7fXS3SMzCzqRWsu62o7J+N+gkAGDDoz6W/HrV/FhCzCrZI/ZMEGPQHyYZ4Hi7Nl1q8YHG/Aw8/ZP8+ztOGK90zO9/dNt+TcvPr9z//+fvfP5bJ9zud1P4B+P7rb7/67PNPqq4/uw464qjFow87mOzJXg+/++KbjzTrof54ecCRxxy7+/jjDq3B8+MPH2v3L792D888UX356dM6T+pgVxsvJysEHnjqySfuvCXf01Pa676ffv7tr19/IcezyFhCzrjh9jvuvuvmZc35UJ/tX53v5PtTpv/AyPNw6oGD6tFHZK4ndGr2ED4Q8jyEACrkcQkfCEYN6QSqh/C5k++JnVo9vqzocYlbPNY2XJr8D49q9EhKb+d7iElIkkeQzr+afCYtCUny0HJ/Gg+tg5DUPaTPFV0+nJKeJ3mICXqdp0OZYkiZXLSvJ+19Cndq8XBibkvrcQnjrveE1I8Vo45HaT09i5pqI9xXcm0k6jzCp2YiKR7h+BU99OtK0v2y9sJa44np17m0+3dbyQoeWxWocqHVJ2hAmP+7ReqSiPUb+SCs0LflPPmPzfFIVaxqi1z/08mpU8n0iEgVrJCi10f1nMyaGyz+K9U9IKKMcrYsj6l44YK2QvV+YUZFW6qH+apEwV+x+kM3Sn3lFI8rFS9T7Vu0XpQ5Sva0Hje1jHMSHgDbUdzO9XSisppy9cadSG0u8N3oYfF274Q9AG7oKxWZTGz2sDCylBNXqcguXa/u2tJRyuKRaZq3mqYZcUcpJ6pYHl6tnl+w0JSc89s455EZMgGVW/v/HVpP62k9raf1tJ7W03pazw73jAaY9Pc0x9NHDDBpjmcGEWebFD8jxEGTPF2ca9T8mqlvuOqZ78GeZnmo5VrT8iw0bH2Gnev5D++0SRgIm9K8AAAAAElFTkSuQmCC"

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(51);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = __webpack_require__(137);

var _routes2 = _interopRequireDefault(_routes);

var _reactRedux = __webpack_require__(15);

var _redux = __webpack_require__(40);

var _reduxThunk = __webpack_require__(52);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _modules = __webpack_require__(138);

var reducers = _interopRequireWildcard(_modules);

__webpack_require__(139);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)((0, _redux.combineReducers)(reducers), (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	return f;
}));

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_routes2.default
), document.querySelector('#app'));

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var firebase = (function(){
/*! @license Firebase v3.6.5
    Build: 3.6.5-rc.1
    Terms: https://firebase.google.com/terms/ */
var firebase = null; (function() { var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,l=function(){l=function(){};h.Symbol||(h.Symbol=ba)},ca=0,ba=function(a){return"jscomp_symbol_"+(a||"")+ca++},n=function(){l();var a=h.Symbol.iterator;a||(a=h.Symbol.iterator=
h.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return m(this)}});n=function(){}},m=function(a){var b=0;return da(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},da=function(a){n();a={next:a};a[h.Symbol.iterator]=function(){return this};return a},q=this,r=function(){},t=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);
if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},v=function(a){return"function"==t(a)},ea=function(a,
b,c){return a.call.apply(a.bind,arguments)},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},w=function(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return w.apply(null,arguments)},x=function(a,b){var c=Array.prototype.slice.call(arguments,
1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},y=function(a,b){function c(){}c.prototype=b.prototype;a.ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.aa=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var z;z="undefined"!==typeof window?window:"undefined"!==typeof self?self:global;function __extends(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}
function __decorate(a,b,c,d){var e=arguments.length,f=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,g;g=z.Reflect;if("object"===typeof g&&"function"===typeof g.decorate)f=g.decorate(a,b,c,d);else for(var k=a.length-1;0<=k;k--)if(g=a[k])f=(3>e?g(f):3<e?g(b,c,f):g(b,c))||f;return 3<e&&f&&Object.defineProperty(b,c,f),f}function __metadata(a,b){var c=z.Reflect;if("object"===typeof c&&"function"===typeof c.metadata)return c.metadata(a,b)}
var __param=function(a,b){return function(c,d){b(c,d,a)}},__awaiter=function(a,b,c,d){return new (c||(c=Promise))(function(e,f){function g(a){try{p(d.next(a))}catch(u){f(u)}}function k(a){try{p(d.throw(a))}catch(u){f(u)}}function p(a){a.done?e(a.value):(new c(function(b){b(a.value)})).then(g,k)}p((d=d.apply(a,b)).next())})};"undefined"!==typeof z.M&&z.M||(z.__extends=__extends,z.__decorate=__decorate,z.__metadata=__metadata,z.__param=__param,z.__awaiter=__awaiter);var A=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,A);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};y(A,Error);A.prototype.name="CustomError";var ga=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var B=function(a,b){b.unshift(a);A.call(this,ga.apply(null,b));b.shift()};y(B,A);B.prototype.name="AssertionError";var ha=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new B(""+e,f||[]);},C=function(a,b,c){a||ha("",null,b,Array.prototype.slice.call(arguments,2))},D=function(a,b,c){v(a)||ha("Expected function but got %s: %s.",[t(a),a],b,Array.prototype.slice.call(arguments,2))};var E=function(a,b,c){this.T=c;this.N=a;this.U=b;this.s=0;this.o=null};E.prototype.get=function(){var a;0<this.s?(this.s--,a=this.o,this.o=a.next,a.next=null):a=this.N();return a};E.prototype.put=function(a){this.U(a);this.s<this.T&&(this.s++,a.next=this.o,this.o=a)};var F;a:{var ia=q.navigator;if(ia){var ja=ia.userAgent;if(ja){F=ja;break a}}F=""};var ka=function(a){q.setTimeout(function(){throw a;},0)},G,la=function(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==F.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+
"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==F.indexOf("Trident")&&-1==F.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.G;c.G=null;a()}};return function(a){d.next={G:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in
document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}};var H=function(){this.v=this.f=null},ma=new E(function(){return new I},function(a){a.reset()},100);H.prototype.add=function(a,b){var c=ma.get();c.set(a,b);this.v?this.v.next=c:(C(!this.f),this.f=c);this.v=c};H.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.v=null),a.next=null);return a};var I=function(){this.next=this.scope=this.B=null};I.prototype.set=function(a,b){this.B=a;this.scope=b;this.next=null};
I.prototype.reset=function(){this.next=this.scope=this.B=null};var M=function(a,b){J||na();L||(J(),L=!0);oa.add(a,b)},J,na=function(){if(-1!=String(q.Promise).indexOf("[native code]")){var a=q.Promise.resolve(void 0);J=function(){a.then(pa)}}else J=function(){var a=pa;!v(q.setImmediate)||q.Window&&q.Window.prototype&&-1==F.indexOf("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(G||(G=la()),G(a)):q.setImmediate(a)}},L=!1,oa=new H,pa=function(){for(var a;a=oa.remove();){try{a.B.call(a.scope)}catch(b){ka(b)}ma.put(a)}L=!1};var O=function(a,b){this.b=0;this.L=void 0;this.j=this.g=this.u=null;this.m=this.A=!1;if(a!=r)try{var c=this;a.call(b,function(a){N(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}N(c,3,a)})}catch(d){N(this,3,d)}},qa=function(){this.next=this.context=this.h=this.c=this.child=null;this.w=!1};qa.prototype.reset=function(){this.context=this.h=this.c=this.child=null;this.w=!1};
var ra=new E(function(){return new qa},function(a){a.reset()},100),sa=function(a,b,c){var d=ra.get();d.c=a;d.h=b;d.context=c;return d},ua=function(a,b,c){ta(a,b,c,null)||M(x(b,a))};O.prototype.then=function(a,b,c){null!=a&&D(a,"opt_onFulfilled should be a function.");null!=b&&D(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return va(this,v(a)?a:null,v(b)?b:null,c)};O.prototype.then=O.prototype.then;O.prototype.$goog_Thenable=!0;
O.prototype.X=function(a,b){return va(this,null,a,b)};var xa=function(a,b){a.g||2!=a.b&&3!=a.b||wa(a);C(null!=b.c);a.j?a.j.next=b:a.g=b;a.j=b},va=function(a,b,c,d){var e=sa(null,null,null);e.child=new O(function(a,g){e.c=b?function(c){try{var e=b.call(d,c);a(e)}catch(K){g(K)}}:a;e.h=c?function(b){try{var e=c.call(d,b);a(e)}catch(K){g(K)}}:g});e.child.u=a;xa(a,e);return e.child};O.prototype.Y=function(a){C(1==this.b);this.b=0;N(this,2,a)};O.prototype.Z=function(a){C(1==this.b);this.b=0;N(this,3,a)};
var N=function(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,ta(c,a.Y,a.Z,a)||(a.L=c,a.b=b,a.u=null,wa(a),3!=b||ya(a,c)))},ta=function(a,b,c,d){if(a instanceof O)return null!=b&&D(b,"opt_onFulfilled should be a function."),null!=c&&D(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),xa(a,sa(b||r,c||null,d)),!0;var e;if(a)try{e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),
!0;e=typeof a;if("object"==e&&null!=a||"function"==e)try{var f=a.then;if(v(f))return za(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1},za=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(p){k(p)}},wa=function(a){a.A||(a.A=!0,M(a.P,a))},Aa=function(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);null!=b&&C(null!=b.c);return b};
O.prototype.P=function(){for(var a;a=Aa(this);){var b=this.b,c=this.L;if(3==b&&a.h&&!a.w){var d;for(d=this;d&&d.m;d=d.u)d.m=!1}if(a.child)a.child.u=null,Ba(a,b,c);else try{a.w?a.c.call(a.context):Ba(a,b,c)}catch(e){Ca.call(null,e)}ra.put(a)}this.A=!1};var Ba=function(a,b,c){2==b?a.c.call(a.context,c):a.h&&a.h.call(a.context,c)},ya=function(a,b){a.m=!0;M(function(){a.m&&Ca.call(null,b)})},Ca=ka;function P(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(var c in b)b.hasOwnProperty(c)&&(a[c]=P(a[c],b[c]));return a};O.all=function(a){return new O(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},k=0,p;k<a.length;k++)p=a[k],ua(p,x(f,k),g);else b(e)})};O.resolve=function(a){if(a instanceof O)return a;var b=new O(r);N(b,2,a);return b};O.reject=function(a){return new O(function(b,c){c(a)})};O.prototype["catch"]=O.prototype.X;var Q=O;"undefined"!==typeof Promise&&(Q=Promise);var Da=Q;function Ea(a,b){a=new R(a,b);return a.subscribe.bind(a)}var R=function(a,b){var c=this;this.a=[];this.K=0;this.task=Da.resolve();this.l=!1;this.D=b;this.task.then(function(){a(c)}).catch(function(a){c.error(a)})};R.prototype.next=function(a){S(this,function(b){b.next(a)})};R.prototype.error=function(a){S(this,function(b){b.error(a)});this.close(a)};R.prototype.complete=function(){S(this,function(a){a.complete()});this.close()};
R.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&&void 0===b&&void 0===c)throw Error("Missing Observer.");e=Fa(a)?a:{next:a,error:b,complete:c};void 0===e.next&&(e.next=T);void 0===e.error&&(e.error=T);void 0===e.complete&&(e.complete=T);a=this.$.bind(this,this.a.length);this.l&&this.task.then(function(){try{d.H?e.error(d.H):e.complete()}catch(f){}});this.a.push(e);return a};
R.prototype.$=function(a){void 0!==this.a&&void 0!==this.a[a]&&(delete this.a[a],--this.K,0===this.K&&void 0!==this.D&&this.D(this))};var S=function(a,b){if(!a.l)for(var c=0;c<a.a.length;c++)Ga(a,c,b)},Ga=function(a,b,c){a.task.then(function(){if(void 0!==a.a&&void 0!==a.a[b])try{c(a.a[b])}catch(d){"undefined"!==typeof console&&console.error&&console.error(d)}})};R.prototype.close=function(a){var b=this;this.l||(this.l=!0,void 0!==a&&(this.H=a),this.task.then(function(){b.a=void 0;b.D=void 0}))};
function Fa(a){if("object"!==typeof a||null===a)return!1;var b;b=["next","error","complete"];n();var c=b[Symbol.iterator];b=c?c.call(b):m(b);for(c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1}function T(){};var Ha=Error.captureStackTrace,V=function(a,b){this.code=a;this.message=b;if(Ha)Ha(this,U.prototype.create);else{var c=Error.apply(this,arguments);this.name="FirebaseError";Object.defineProperty(this,"stack",{get:function(){return c.stack}})}};V.prototype=Object.create(Error.prototype);V.prototype.constructor=V;V.prototype.name="FirebaseError";var U=function(a,b,c){this.V=a;this.W=b;this.O=c;this.pattern=/\{\$([^}]+)}/g};
U.prototype.create=function(a,b){void 0===b&&(b={});var c=this.O[a];a=this.V+"/"+a;var c=void 0===c?"Error":c.replace(this.pattern,function(a,c){a=b[c];return void 0!==a?a.toString():"<"+c+"?>"}),c=this.W+": "+c+" ("+a+").",c=new V(a,c),d;for(d in b)b.hasOwnProperty(d)&&"_"!==d.slice(-1)&&(c[d]=b[d]);return c};var W=Q,X=function(a,b,c){var d=this;this.I=c;this.J=!1;this.i={};this.C=b;this.F=P(void 0,a);a="serviceAccount"in this.F;("credential"in this.F||a)&&"undefined"!==typeof console&&console.log("The '"+(a?"serviceAccount":"credential")+"' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.");Object.keys(c.INTERNAL.factories).forEach(function(a){var b=
c.INTERNAL.useAsService(d,a);null!==b&&(b=d.S.bind(d,b),d[a]=b)})};X.prototype.delete=function(){var a=this;return(new W(function(b){Y(a);b()})).then(function(){a.I.INTERNAL.removeApp(a.C);return W.all(Object.keys(a.i).map(function(b){return a.i[b].INTERNAL.delete()}))}).then(function(){a.J=!0;a.i={}})};X.prototype.S=function(a){Y(this);void 0===this.i[a]&&(this.i[a]=this.I.INTERNAL.factories[a](this,this.R.bind(this)));return this.i[a]};X.prototype.R=function(a){P(this,a)};
var Y=function(a){a.J&&Z(Ia("deleted",{name:a.C}))};h.Object.defineProperties(X.prototype,{name:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.C}},options:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.F}}});X.prototype.name&&X.prototype.options||X.prototype.delete||console.log("dc");
function Ja(){function a(a){a=a||"[DEFAULT]";var b=d[a];void 0===b&&Z("noApp",{name:a});return b}function b(a,b){Object.keys(e).forEach(function(d){d=c(a,d);if(null!==d&&f[d])f[d](b,a)})}function c(a,b){if("serverAuth"===b)return null;var c=b;a=a.options;"auth"===b&&(a.serviceAccount||a.credential)&&(c="serverAuth","serverAuth"in e||Z("serverAuthMissing"));return c}var d={},e={},f={},g={__esModule:!0,initializeApp:function(a,c){void 0===c?c="[DEFAULT]":"string"===typeof c&&""!==c||Z("bad-app-name",
{name:c+""});void 0!==d[c]&&Z("dupApp",{name:c});a=new X(a,c,g);d[c]=a;b(a,"create");void 0!=a.INTERNAL&&void 0!=a.INTERNAL.getToken||P(a,{INTERNAL:{getToken:function(){return W.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});return a},app:a,apps:null,Promise:W,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(b,c,d,u){e[b]&&Z("dupService",{name:b});e[b]=c;u&&(f[b]=u);c=function(c){void 0===c&&(c=a());return c[b]()};void 0!==d&&P(c,d);return g[b]=c},createFirebaseNamespace:Ja,
extendNamespace:function(a){P(g,a)},createSubscribe:Ea,ErrorFactory:U,removeApp:function(a){b(d[a],"delete");delete d[a]},factories:e,useAsService:c,Promise:O,deepExtend:P}};g["default"]=g;Object.defineProperty(g,"apps",{get:function(){return Object.keys(d).map(function(a){return d[a]})}});a.App=X;return g}function Z(a,b){throw Error(Ia(a,b));}
function Ia(a,b){b=b||{};b={noApp:"No Firebase App '"+b.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+b.name+"'.",dupApp:"Firebase App named '"+b.name+"' already exists.",deleted:"Firebase App named '"+b.name+"' already deleted.",dupService:"Firebase Service named '"+b.name+"' already registered.",serverAuthMissing:"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain."}[a];
return void 0===b?"Application Error: ("+a+")":b};"undefined"!==typeof firebase&&(firebase=Ja()); }).call(this);
firebase.SDK_VERSION = "3.6.5";
return firebase;}).call(global);
module.exports = firebase;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contents = exports.Topic = exports.SubTopic = exports.Home = undefined;

var _Home2 = __webpack_require__(156);

var _Home3 = _interopRequireDefault(_Home2);

var _SubTopic2 = __webpack_require__(157);

var _SubTopic3 = _interopRequireDefault(_SubTopic2);

var _Topic2 = __webpack_require__(158);

var _Topic3 = _interopRequireDefault(_Topic2);

var _Contents2 = __webpack_require__(155);

var _Contents3 = _interopRequireDefault(_Contents2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Home = _Home3.default;
exports.SubTopic = _SubTopic3.default;
exports.Topic = _Topic3.default;
exports.Contents = _Contents3.default;

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Note = exports.Part = exports.Description = exports.Question = undefined;

var _question = __webpack_require__(151);

Object.defineProperty(exports, 'Question', {
  enumerable: true,
  get: function get() {
    return _question.Question;
  }
});
Object.defineProperty(exports, 'Description', {
  enumerable: true,
  get: function get() {
    return _question.Description;
  }
});
Object.defineProperty(exports, 'Part', {
  enumerable: true,
  get: function get() {
    return _question.Part;
  }
});

var _Note2 = __webpack_require__(150);

var _Note3 = _interopRequireDefault(_Note2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Note = _Note3.default;

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.saveUser = saveUser;
exports.fetchUser = fetchUser;
exports.fetchUsersLessonHistory = fetchUsersLessonHistory;

var _constants = __webpack_require__(9);

// USER

// Saves user to database
// User should be the full user details
// User already has a uid from the register
function saveUser(user) {
	return _constants.ref.child('users/' + user.info.uid).set(user)
	// return promise resolved with user for chaining
	.then(function () {
		return user;
	});
}

function fetchUser(uid) {
	return _constants.ref.child('users/' + uid).once('value').then(function (snapshot) {
		return snapshot.val();
	});
}

// LESSON HISTORY

function fetchUsersLessonHistory(uid) {
	return _constants.ref.child('usersLessonHistory/' + uid).once('value').then(function (snapshot) {
		return snapshot.val();
	});
}

/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminNav = exports.Admin = undefined;

var _Admin2 = __webpack_require__(145);

var _Admin3 = _interopRequireDefault(_Admin2);

var _AdminNav2 = __webpack_require__(144);

var _AdminNav3 = _interopRequireDefault(_AdminNav2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Admin = _Admin3.default;
exports.AdminNav = _AdminNav3.default;

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = exports.Main = undefined;

var _Main2 = __webpack_require__(142);

var _Main3 = _interopRequireDefault(_Main2);

var _Navigation2 = __webpack_require__(143);

var _Navigation3 = _interopRequireDefault(_Navigation2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Main = _Main3.default;
exports.Navigation = _Navigation3.default;

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LessonHistory = exports.ProfileNav = exports.Profile = undefined;

var _Profile2 = __webpack_require__(154);

var _Profile3 = _interopRequireDefault(_Profile2);

var _ProfileNav2 = __webpack_require__(153);

var _ProfileNav3 = _interopRequireDefault(_ProfileNav2);

var _LessonHistory2 = __webpack_require__(152);

var _LessonHistory3 = _interopRequireDefault(_LessonHistory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Profile = _Profile3.default;
exports.ProfileNav = _ProfileNav3.default;
exports.LessonHistory = _LessonHistory3.default;

/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchUsersLessonHistory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = usersLessonHistory;

var _api = __webpack_require__(54);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FETCHING_USERS_LESSON_HISTORY = 'FETCHING_USERS_LESSON_HISTORY';
var FETCHING_USERS_LESSON_HISTORY_SUCCESS = 'FETCHING_USERS_LESSON_HISTORY_SUCCESS';
var FETCHING_USERS_LESSON_HISTORY_FAILURE = 'FETCHING_USERS_LESSON_HISTORY_FAILURE';

var fetchingUsersLessonHistory = function fetchingUsersLessonHistory() {
	return {
		type: FETCHING_USERS_LESSON_HISTORY
	};
};

var fetchingUsersLessonHistorySuccess = function fetchingUsersLessonHistorySuccess(uid, lessonHistory) {
	return {
		type: FETCHING_USERS_LESSON_HISTORY_SUCCESS,
		lessonHistory: lessonHistory,
		uid: uid
	};
};

var fetchingUsersLessonHistoryFailure = function fetchingUsersLessonHistoryFailure(error) {
	console.error(error);
	return {
		type: FETCHING_USERS_LESSON_HISTORY_FAILURE
	};
};

// THUNKS
//TODO MOVE THIS SOMEWHERE? UTIL FUNCTION
function lessonHistoryArray(obj) {
	return Object.keys(obj).sort(function (a, b) {
		return obj[b].timestamp - obj[a].timestamp;
	}).map(function (key) {
		return obj[key];
	});
}

var fetchUsersLessonHistory = exports.fetchUsersLessonHistory = function fetchUsersLessonHistory(uid) {
	return function (dispatch) {
		dispatch(fetchingUsersLessonHistory());

		return (0, _api.fetchUsersLessonHistory)(uid).then(function (lessonHistory) {
			return lessonHistoryArray(lessonHistory);
		}).then(function (historyArray) {
			return dispatch(fetchingUsersLessonHistorySuccess(uid, historyArray));
		}).catch(function (error) {
			return dispatch(fetchingUsersLessonHistoryFailure(error));
		});
	};
};

// REDUCERS
var initialUsersLessonHistoryState = {
	isFetching: false,
	error: ''
};

function usersLessonHistory() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialUsersLessonHistoryState;
	var action = arguments[1];

	switch (action.type) {
		case FETCHING_USERS_LESSON_HISTORY:
			return _extends({}, state, {
				isFetching: true,
				error: ''
			});
		case FETCHING_USERS_LESSON_HISTORY_FAILURE:
			return _extends({}, state, {
				isFetching: false,
				error: action.error
			});
		case FETCHING_USERS_LESSON_HISTORY_SUCCESS:
			return _extends({}, state, _defineProperty({
				isFetching: false,
				error: ''
			}, action.uid, lessonHistory(state[action.uid], action)));
		default:
			return state;
	}
}

var initialLessonHistoryState = {
	history: {}
};

function lessonHistory() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialLessonHistoryState;
	var action = arguments[1];

	switch (action.type) {
		case FETCHING_USERS_LESSON_HISTORY_SUCCESS:
			return _extends({}, state, {
				history: action.lessonHistory
			});
		default:
			return state;
	}
}

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.firebaseAuth = exports.ref = exports.WORKSHEETS_URL = exports.BASE_URL = undefined;

var _firebase = __webpack_require__(191);

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_URL = exports.BASE_URL = '/math';
var WORKSHEETS_URL = exports.WORKSHEETS_URL = 'worksheets';

var appConfig = {
	apiKey: "AIzaSyACypH4o2TFCn-oNdbKQchtF8AyQHUNnV4",
	authDomain: "mathsite-e9273.firebaseapp.com",
	databaseURL: "https://mathsite-e9273.firebaseio.com",
	storageBucket: "mathsite-e9273.appspot.com",
	messagingSenderId: "1096802129876"
};

var devConfig = {
	apiKey: "AIzaSyA5JgBObwTJ86eoFvFyDVOPc0JlDr9wBZY",
	authDomain: "mathsitedev.firebaseapp.com",
	databaseURL: "https://mathsitedev.firebaseio.com",
	storageBucket: "mathsitedev.appspot.com",
	messagingSenderId: "1036725185091"
};

_firebase2.default.initializeApp(devConfig);

var ref = exports.ref = _firebase2.default.database().ref();
var firebaseAuth = exports.firebaseAuth = _firebase2.default.auth;

/***/ }

},[325]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjVhMGNjMDRhMjY4MDJjYTM5ODBhLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb25maWcvcm91dGVzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL3JlZHV4L21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL01hdGhKYXgvVGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL01hdGhKYXgvVGV4TWFya3VwLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTWFpbi9NYWluLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWRtaW4vQWRtaW5OYXYvQWRtaW5OYXYuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9hZG1pbi9BZG1pbi9BZG1pbi5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2F1dGgvU2lnbmluL1NpZ25pbi5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2F1dGgvU2lnbm91dC9TaWdub3V0LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYXV0aC9TaWdudXAvU2lnbnVwLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYXV0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbWFya3VwL3dvcmtzaGVldC9Ob3RlL05vdGUuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9tYXJrdXAvd29ya3NoZWV0L3F1ZXN0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9MZXNzb25IaXN0b3J5L0xlc3Nvbkhpc3RvcnkuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9wcm9maWxlL1Byb2ZpbGVOYXYvUHJvZmlsZU5hdi5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZS9Qcm9maWxlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L0NvbnRlbnRzL0NvbnRlbnRzLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L0hvbWUvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3dvcmtzaGVldC9TdWJUb3BpYy9TdWJUb3BpYy5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3dvcmtzaGVldC9Ub3BpYy9Ub3BpYy5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvQ29vcmRpbmF0ZUdlb21ldHJ5L0NpcmNsZXNFbGxpcHNlc0FuZEh5cGVyYm9sYXMvQ2lyY2xlc0VsbGlwc2VzQW5kSHlwZXJib2xhcy5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvQ29vcmRpbmF0ZUdlb21ldHJ5L2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL0Z1bmN0aW9ucy9BYnNvbHV0ZVZhbHVlRnVuY3Rpb25zL0Fic29sdXRlVmFsdWVGdW5jdGlvbnMuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL0Z1bmN0aW9ucy9Db21wb3NpdGVGdW5jdGlvbnMvQ29tcG9zaXRlRnVuY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9GdW5jdGlvbnMvSW52ZXJzZUZ1bmN0aW9ucy9JbnZlcnNlRnVuY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9GdW5jdGlvbnMvUmVjaXByb2NhbEZ1bmN0aW9ucy9SZWNpcHJvY2FsRnVuY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9GdW5jdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvU2V0cy9TZXRCdWlsZGVyL1NldEJ1aWxkZXIuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL1NldHMvU2V0Tm90YXRpb24vU2V0Tm90YXRpb24uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL1NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb25maWcvcm91dGVzL3dvcmtzaGVldHMuanN4Iiwid2VicGFjazovLy9zcmMvaGVscGVycy9hdXRoLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXJrdXAvd29ya3NoZWV0L05vdGUvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFya3VwL3dvcmtzaGVldC9xdWVzdGlvbi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2ZpcmViYXNlL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXJlYmFzZS9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpcmViYXNlL2ZpcmViYXNlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXJlYmFzZS9tZXNzYWdpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXJlYmFzZS9zdG9yYWdlLmpzIiwid2VicGFjazovLy9zcmMvTWF0aEpheC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL3JlZHV4L21vZHVsZXMvdXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9Db29yZGluYXRlR2VvbWV0cnkvQ2lyY2xlc0VsbGlwc2VzQW5kSHlwZXJib2xhcy9DaXJjbGVBdE9yaWdpbi5wbmciLCJ3ZWJwYWNrOi8vL3NyYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9maXJlYmFzZS9hcHAuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3dvcmtzaGVldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbWFya3VwL3dvcmtzaGVldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvYXBpLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9hZG1pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3Byb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9yZWR1eC9tb2R1bGVzL3VzZXJzTGVzc29uSGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbmZpZy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tICdjb25maWcvY29uc3RhbnRzJ1xyXG5cclxuaW1wb3J0IHdvcmtzaGVldFJvdXRlcyBmcm9tICcuL3dvcmtzaGVldHMnXHJcblxyXG5pbXBvcnQgeyBNYWluIH0gZnJvbSAnY29tcG9uZW50cydcclxuLy8gVGhlIGhvbWUgcGFnZSBpcyBjdXJyZW50bHkgdGhlIHdvcmtzaGVldCBwYWdlLCBjYW4gZWFzaWx5IGJlIGNoYW5nZWRcclxuaW1wb3J0IHsgSG9tZSB9IGZyb20gJ2NvbXBvbmVudHMvd29ya3NoZWV0J1xyXG5cclxuaW1wb3J0IHtcclxuXHRQcm9maWxlLFxyXG5cdExlc3Nvbkhpc3RvcnksXHJcbn0gZnJvbSAnY29tcG9uZW50cy9wcm9maWxlLydcclxuXHJcbmltcG9ydCB7XHJcblx0U2lnbnVwLFxyXG5cdFNpZ25pbixcclxuXHRTaWdub3V0LFxyXG59IGZyb20gJ2NvbXBvbmVudHMvYXV0aCdcclxuXHJcbmltcG9ydCB7XHJcblx0QWRtaW4sXHJcbn0gZnJvbSAnY29tcG9uZW50cy9hZG1pbidcclxuXHJcbmNvbnN0IHJvdXRlcyA9IChcclxuXHQ8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cclxuXHRcdDxSb3V0ZSBwYXRoPXtCQVNFX1VSTH0gY29tcG9uZW50PXtNYWlufT5cclxuXHRcdFx0PEluZGV4Um91dGUgY29tcG9uZW50PXtIb21lfSAvPlxyXG5cdFx0XHRcclxuXHRcdFx0PFJvdXRlIHBhdGg9J2FkbWluJyBjb21wb25lbnQ9e0FkbWlufSAvPlxyXG5cdFx0XHRcclxuXHRcdFx0PFJvdXRlIHBhdGg9J3NpZ251cCcgY29tcG9uZW50PXtTaWdudXB9IC8+XHJcblx0XHRcdDxSb3V0ZSBwYXRoPSdzaWduaW4nIGNvbXBvbmVudD17U2lnbmlufSAvPlxyXG5cdFx0XHQ8Um91dGUgcGF0aD0nc2lnbm91dCcgY29tcG9uZW50PXtTaWdub3V0fSAvPlxyXG5cdFx0XHRcclxuXHRcdFx0PFJvdXRlIHBhdGg9J3Byb2ZpbGUvOnVpZCcgY29tcG9uZW50PXtQcm9maWxlfT5cclxuXHRcdFx0XHQ8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0xlc3Nvbkhpc3Rvcnl9IC8+XHJcblx0XHRcdFx0PFJvdXRlIHBhdGg9J2xlc3Nvbmhpc3RvcnknIGNvbXBvbmVudD17TGVzc29uSGlzdG9yeX0gY293cz0nbW9vJy8+XHJcblx0XHRcdDwvUm91dGU+XHJcblx0XHRcdFxyXG5cdFx0XHR7d29ya3NoZWV0Um91dGVzfVxyXG5cdFx0XHRcclxuXHRcdDwvUm91dGU+XHJcblx0PC9Sb3V0ZXI+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29uZmlnL3JvdXRlcy9pbmRleC5qc3giLCJleHBvcnQgdXNlcnMgZnJvbSAnLi91c2VycydcclxuZXhwb3J0IHVzZXJzTGVzc29uSGlzdG9yeSBmcm9tICcuL3VzZXJzTGVzc29uSGlzdG9yeSdcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JlZHV4L21vZHVsZXMvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY2xhc3MgVGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdE1hdGhKYXguSHViLlF1ZXVlKFtcIlR5cGVzZXRcIixNYXRoSmF4Lkh1Yl0pXHJcblx0fVxyXG5cdFxyXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuXHRcdE1hdGhKYXguSHViLlF1ZXVlKFtcIlR5cGVzZXRcIixNYXRoSmF4Lkh1Yl0pXHJcblx0fVxyXG5cdFxyXG5cdGdldE1hcmt1cCgpIHtcclxuXHRcdGlmICh0aGlzLnByb3BzLnQpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRfX2h0bWw6IGAkJHt0aGlzLnByb3BzLnR9JGAsXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0X19odG1sOiBgJCR7dGhpcy5wcm9wcy5jaGlsZHJlbn0kYCxcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHNwYW5cclxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17dGhpcy5nZXRNYXJrdXAoKX1cclxuXHRcdFx0Lz5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvTWF0aEpheC9UZXguanN4IiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jbGFzcyBUZXhNYXJrdXAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0TWF0aEpheC5IdWIuUXVldWUoW1wiVHlwZXNldFwiLE1hdGhKYXguSHViXSlcclxuXHR9XHJcblx0XHJcblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG5cdFx0TWF0aEpheC5IdWIuUXVldWUoW1wiVHlwZXNldFwiLE1hdGhKYXguSHViXSlcclxuXHR9XHJcblx0XHJcblx0Z2V0TWFya3VwKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0X19odG1sOiB0aGlzLnByb3BzLmNoaWxkcmVuLFxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLmdldE1hcmt1cCgpLl9faHRtbClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxzcGFuXHJcblx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3RoaXMuZ2V0TWFya3VwKCl9XHJcblx0XHRcdC8+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXhNYXJrdXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL01hdGhKYXgvVGV4TWFya3VwLmpzeCIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnY29tcG9uZW50cydcclxuaW1wb3J0IHsgTWFpbiB9IGZyb20gJ2NvbXBvbmVudHMnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgY2hlY2tBdXRoIH0gZnJvbSAncmVkdXgvbW9kdWxlcy91c2VycydcclxuXHJcbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5wcm9wcy5jaGVja0F1dGgoKVxyXG5cdH1cclxuXHRcclxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcblx0XHQvLyByZS1yb3V0ZSBiYXNlZCBvbiBhdXRoIHN0YXR1c1xyXG5cdH1cclxuXHRcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nTWFpbic+XHJcblx0XHRcdFx0PE5hdmlnYXRpb24gLz5cclxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5NYWluQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuXHRpc0F1dGhlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdGlzQXV0aGVkOiBzdGF0ZS51c2Vycy5pc0F1dGhlZCxcclxuXHRhdXRoZWRJZDogc3RhdGUudXNlcnMuYXV0aGVkSWQsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG5cdG1hcFN0YXRlVG9Qcm9wcyxcclxuXHR7IGNoZWNrQXV0aCB9LFxyXG4pKE1haW5Db250YWluZXIpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL01haW4vTWFpbi5qc3giLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCAnLi9zdHlsZXMuc2NzcydcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tICdjb25maWcvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBzaWdub3V0VXNlciB9IGZyb20gJ3JlZHV4L21vZHVsZXMvdXNlcnMnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmNvbnN0IExlZnRMaW5rcyA9ICh7IGFkbWluIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PHVsPlxyXG5cdFx0XHQ8bGk+PExpbmsgdG89e0JBU0VfVVJMfT5Ib21lPC9MaW5rPjwvbGk+XHJcblx0XHRcdHsgYWRtaW4gPyA8bGk+PExpbmsgdG89e2Ake0JBU0VfVVJMfS9hZG1pbmB9PkFETUlOPC9MaW5rPjwvbGk+IDogbnVsbCB9XHJcblx0XHQ8L3VsPlxyXG5cdClcclxufVxyXG5cclxuY29uc3QgUmlnaHRMaW5rcyA9ICh7IGlzQXV0aGVkLCBhdXRoZWRJZCB9KSA9PiB7XHJcblx0aWYgKGlzQXV0aGVkKSB7XHJcblx0XHRpZiAoIWF1dGhlZElkKSBjb25zb2xlLndhcm4oJ0Vycm9yOiBObyBBdXRoZWQgSWQnKVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHVsPlxyXG5cdFx0XHRcdDxsaT48TGluayB0bz17YCR7QkFTRV9VUkx9L3Byb2ZpbGUvJHthdXRoZWRJZH1gfT5Qcm9maWxlPC9MaW5rPjwvbGk+XHJcblx0XHRcdFx0PGxpPjxMaW5rIHRvPXtgJHtCQVNFX1VSTH0vc2lnbm91dGB9PkxvZ291dDwvTGluaz48L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0KVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0PGxpPjxMaW5rIHRvPXtgJHtCQVNFX1VSTH0vc2lnbmluYH0+TG9naW48L0xpbms+PC9saT5cclxuXHRcdFx0XHQ8bGk+PExpbmsgdG89e2Ake0JBU0VfVVJMfS9zaWdudXBgfT5TaWduIFVwPC9MaW5rPjwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gKHsgaXNBdXRoZWQsIGF1dGhlZElkLCBhZG1pbiB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxuYXYgY2xhc3NOYW1lPSdOYXZpZ2F0aW9uJz5cclxuXHRcdFx0PExlZnRMaW5rcyBcclxuXHRcdFx0XHRhZG1pbj17YWRtaW59XHJcblx0XHRcdC8+XHJcblx0XHRcdDxSaWdodExpbmtzIFxyXG5cdFx0XHRcdGlzQXV0aGVkPXtpc0F1dGhlZH1cclxuXHRcdFx0XHRhdXRoZWRJZD17YXV0aGVkSWR9XHJcblx0XHRcdC8+XHJcblx0XHQ8L25hdj5cclxuXHQpXHJcbn1cclxuXHJcbk5hdmlnYXRpb24ucHJvcFR5cGVzID0ge1xyXG5cdGlzQXV0aGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyB1c2VycyB9KSA9PiAoe1xyXG5cdGlzQXV0aGVkOiB1c2Vycy5pc0F1dGhlZCxcclxuXHRhdXRoZWRJZDogdXNlcnMuYXV0aGVkSWQsXHJcblx0YWRtaW46IHVzZXJzLmF1dGhlZElkID8gdXNlcnNbdXNlcnMuYXV0aGVkSWRdLmFkbWluIDogZmFsc2UsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG5cdG1hcFN0YXRlVG9Qcm9wcyxcclxuKShOYXZpZ2F0aW9uKVxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzeCIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gJ2NvbmZpZy9jb25zdGFudHMnXHJcblxyXG5jbGFzcyBBZG1pbk5hdiBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PG5hdj5cclxuXHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHQ8bGk+PExpbms+QURNSU48L0xpbms+PC9saT5cclxuXHRcdFx0XHRcdDxsaT48TGluaz5MZXNzb24gSGlzdG9yeTwvTGluaz48L2xpPlxyXG5cdFx0XHRcdFx0PGxpPjxMaW5rPkRldGFpbHM8L0xpbms+PC9saT5cclxuXHRcdFx0XHRcdDxsaT48TGluaz5SZXN1bHRzPC9MaW5rPjwvbGk+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5OYXZcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvYWRtaW4vQWRtaW5OYXYvQWRtaW5OYXYuanN4IiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFkbWluTmF2IH0gZnJvbSAnY29tcG9uZW50cy9hZG1pbidcclxuXHJcbmNsYXNzIEFkbWluQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxBZG1pbk5hdlxyXG5cdFx0XHRcdFx0cGFyYW1zPXt0aGlzLnByb3BzLnBhcmFtc31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluQ29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2FkbWluL0FkbWluL0FkbWluLmpzeCIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzaWduaW5Vc2VyIH0gZnJvbSAncmVkdXgvbW9kdWxlcy91c2VycydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tICdjb25maWcvY29uc3RhbnRzJ1xyXG5cclxuY29uc3QgTG9naW4gPSAocHJvcHMpID0+IHtcclxuXHRsZXQgcGFzc3dvcmQgPSAnJ1xyXG5cdGxldCBlbWFpbCA9ICcnXHJcblx0XHJcblx0ZnVuY3Rpb24gb25TdWJtaXQoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRwcm9wcy5vblN1Ym1pdChlbWFpbCwgcGFzc3dvcmQpXHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHQ8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiIFxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGVtYWlsID0gZS50YXJnZXQudmFsdWV9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBwYXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi13YXJuaW5nJyB0eXBlPVwiYnV0dG9uXCI+Q2FuY2VsPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuTG9naW4ucHJvcFR5cGVzID0ge1xyXG5cdG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jbGFzcyBMb2dpbkNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0b25TdWJtaXQoZW1haWwsIHBhc3N3b3JkKSB7XHJcblx0XHR0aGlzLnByb3BzLnNpZ25pblVzZXIoZW1haWwsIHBhc3N3b3JkKVxyXG5cdFx0XHQudGhlbigoKSA9PiBicm93c2VySGlzdG9yeS5wdXNoKEJBU0VfVVJMKSlcclxuXHR9XHJcblx0XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PExvZ2luIFxyXG5cdFx0XHRcdG9uU3VibWl0PXt0aGlzLm9uU3VibWl0LmJpbmQodGhpcyl9XHJcblx0XHRcdC8+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5Mb2dpbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcblx0c2lnbmluVXNlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuXHRudWxsLFxyXG5cdHsgc2lnbmluVXNlciB9LFxyXG4pKExvZ2luQ29udGFpbmVyKVxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9hdXRoL1NpZ25pbi9TaWduaW4uanN4IiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2lnbm91dFVzZXIgfSBmcm9tICdyZWR1eC9tb2R1bGVzL3VzZXJzJ1xyXG5cclxuY2xhc3MgU2lnbm91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLnByb3BzLnNpZ25vdXRVc2VyKClcclxuXHR9XHJcblx0XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHRTdWNjZXNmdWxseSBMb2dnZWQgT3V0LiBDb21lIGJhY2sgc29vbiFcclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5TaWdub3V0LnByb3BUeXBlcyA9IHtcclxuXHRzaWdub3V0VXNlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuXHRudWxsLFxyXG5cdHsgc2lnbm91dFVzZXIgfSxcclxuKShTaWdub3V0KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9hdXRoL1NpZ25vdXQvU2lnbm91dC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyByZWdpc3RlclVzZXIgfSBmcm9tICdyZWR1eC9tb2R1bGVzL3VzZXJzJ1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tICdjb25maWcvY29uc3RhbnRzJ1xyXG5cclxuY29uc3QgU2lnbnVwID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgZGV0YWlscyA9IHtcclxuXHRcdGVtYWlsOiAnJyxcclxuXHRcdHBhc3N3b3JkOiAnJyxcclxuXHRcdHBhc3N3b3JkQ29uZmlybTogJycsXHJcblx0fVx0XHJcblx0XHJcblx0ZnVuY3Rpb24gc3VibWl0KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0cHJvcHMub25TdWJtaXQoZGV0YWlscylcclxuXHRcdFx0LnRoZW4oKCkgPT4gYnJvd3Nlckhpc3RvcnkucHVzaChCQVNFX1VSTCkpXHJcblx0XHRcdC5jYXRjaChlcnJvciA9PiBjb25zb2xlLndhcm4oZXJyb3IpKVxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtzdWJtaXR9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBcclxuXHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCIgXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gZGV0YWlscy5lbWFpbCA9IGUudGFyZ2V0LnZhbHVlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHQ8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gZGV0YWlscy5wYXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHQ8bGFiZWw+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBkZXRhaWxzLnBhc3N3b3JkQ29uZmlybSA9IGUudGFyZ2V0LnZhbHVlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgdHlwZT1cInN1Ym1pdFwiPlJlZ2lzdGVyPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi13YXJuaW5nJyB0eXBlPVwiYnV0dG9uXCI+Q2FuY2VsPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuU2lnbnVwLnByb3BUeXBlcyA9IHtcclxuXHQvLyBTaG91bGQgYmUgYXN5bmNocm9ub3VzZSBhbmQgcmV0dXJuIGEgcHJvbWlzZVxyXG5cdG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jbGFzcyBTaWdudXBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdG9uU3VibWl0KGRldGFpbHMpIHtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLnJlZ2lzdGVyVXNlcihkZXRhaWxzKVxyXG5cdH1cclxuXHRcclxuXHR2YWxpZGF0ZSgpIHtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8U2lnbnVwXHJcblx0XHRcdFx0b25TdWJtaXQ9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cclxuXHRcdFx0Lz5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcblNpZ251cENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcblx0cmVnaXN0ZXJVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoKSA9PiAoe1xyXG5cdFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuXHRtYXBTdGF0ZVRvUHJvcHMsXHJcblx0eyByZWdpc3RlclVzZXIgfVxyXG4pKFNpZ251cENvbnRhaW5lcilcclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2F1dGgvU2lnbnVwL1NpZ251cC5qc3giLCJleHBvcnQgU2lnbnVwIGZyb20gJy4vU2lnbnVwL1NpZ251cCdcclxuZXhwb3J0IFNpZ25pbiBmcm9tICcuL1NpZ25pbi9TaWduaW4nXHJcbmV4cG9ydCBTaWdub3V0IGZyb20gJy4vU2lnbm91dC9TaWdub3V0J1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9hdXRoL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnXHJcblxyXG5jb25zdCBOb3RlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPSdOb3RlJz5cclxuXHRcdHtjaGlsZHJlbn1cclxuXHQ8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9tYXJrdXAvd29ya3NoZWV0L05vdGUvTm90ZS5qc3giLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi9zdHlsZXMuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBRdWVzdGlvbih7IGNoaWxkcmVuLCBudW1iZXIsIHBhcnRzUGVyUm93IH0pIHtcclxuXHRjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pXHJcblx0Y29uc3QgZGVzY3JpcHRpb24gPSBjaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkLnR5cGUubmFtZSA9PT0gJ0Rlc2NyaXB0aW9uJylcclxuXHRjb25zdCBwYXJ0cyA9IGNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC50eXBlLm5hbWUgPT09ICdQYXJ0JylcclxuXHRjb25zdCBoYXNQYXJ0cyA9IHBhcnRzLmxlbmd0aCA+IDBcclxuXHRcclxuXHRmdW5jdGlvbiBwYXJ0VG9Db21wKHBhcnQsIGluZGV4KSB7XHJcblx0XHRjb25zdCB3aWR0aCA9IE1hdGguZmxvb3IoMTIvcGFydHNQZXJSb3cpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGNvbC14cy0ke3dpZHRofSBjb2wtc20tJHt3aWR0aH0gY29sLW1kLSR7d2lkdGh9IGNvbC1sZy0ke3dpZHRofWB9IGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdDxQYXJ0IHsuLi5wYXJ0LnByb3BzfSBudW1iZXI9e1N0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyBpbmRleCl9IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCBRdWVzdGlvbic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMSc+e251bWJlcn08L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTExJz5cclxuXHRcdFx0XHRcdHtkZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRcdGhhc1BhcnRzXHJcblx0XHRcdFx0XHRcdD8gPGRpdiBjbGFzc05hbWU9J3JvdyBhdXRvLWNsZWFyJz5cclxuXHRcdFx0XHRcdFx0XHR7cGFydHMubWFwKHBhcnRUb0NvbXApfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0OiBudWxsIFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuUXVlc3Rpb24uZGVmYXVsdFByb3BzID0ge1xyXG5cdHBhcnRzUGVyUm93OiAxLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVzY3JpcHRpb24oeyBjaGlsZHJlbiB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgRGVzY3JpcHRpb24nPntcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMic+e2NoaWxkcmVufTwvZGl2Pn1cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcnQoeyBjaGlsZHJlbiwgbnVtYmVyIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3JvdyBQYXJ0Jz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xJz57bnVtYmVyfTwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTExJz57Y2hpbGRyZW59PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcblBhcnQucHJvcFR5cGVzID0ge1xyXG5cdG51bWJlcjogUHJvcFR5cGVzLnN0cmluZyxcclxufVxyXG5cclxuXHJcbi8qXHJcblx0PGgyPlF1ZXN0aW9uczwvaDI+XHJcblx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCBxdWVzdGlvbic+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xJz4xPC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTEnPlRoaXMgaXMgYSBxdWVzdGlvbiB3aXRoIE5PIHBhcnRzPC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCBxdWVzdGlvbic+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xJz4xPC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTEnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMic+VGhpcyBpcyBhIHF1ZXN0aW9uIHdpdGggcGFydHM8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtNCc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgeCc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xIHknPmEpPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMSB4Jz5QYXJ0IGE8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtNCc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgeCc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xIHknPmEpPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMSB4Jz5QYXJ0IGE8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtNCc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgeCc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xIHknPmEpPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMSB4Jz5QYXJ0IGE8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuKi9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvbWFya3VwL3dvcmtzaGVldC9xdWVzdGlvbi9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBmZXRjaFVzZXJzTGVzc29uSGlzdG9yeSB9IGZyb20gJ3JlZHV4L21vZHVsZXMvdXNlcnNMZXNzb25IaXN0b3J5J1xyXG5cclxuY29uc3QgTGVzc29uID0gKHsgbGVzc29uIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdj57bGVzc29uLnRpbWVzdGFtcH08L2Rpdj5cclxuXHRcdFx0PGRpdj57bGVzc29uLnJlY29yZC50ZXh0fTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5MZXNzb24ucHJvcFR5cGVzID0ge1xyXG5cdGxlc3NvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jb25zdCBMZXNzb25IaXN0b3J5ID0gKHsgbGVzc29uSGlzdG9yeSB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdHtsZXNzb25IaXN0b3J5Lm1hcCgobGVzc29uLCBpbmRleCkgPT4gPExlc3NvbiBrZXk9e2luZGV4fSBsZXNzb249e2xlc3Nvbn0gLz4pfVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5jbGFzcyBMZXNzb25IaXN0b3J5Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMucHJvcHMuZmV0Y2hVc2Vyc0xlc3Nvbkhpc3RvcnkodGhpcy5wcm9wcy5wYXJhbXMudWlkKVxyXG5cdFx0XHQudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coJ2hpJywgZGF0YSkpXHJcblx0XHRjb25zb2xlLmxvZygnY293cycsIHRoaXMucHJvcHMpXHJcblx0fVxyXG5cdFxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxMZXNzb25IaXN0b3J5IFxyXG5cdFx0XHRcdGxlc3Nvbkhpc3Rvcnk9e3RoaXMucHJvcHMubGVzc29uSGlzdG9yeX1cclxuXHRcdFx0Lz5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbkxlc3Nvbkhpc3RvcnlDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG5cdGxlc3Nvbkhpc3Rvcnk6IFByb3BUeXBlcy5hcnJheSxcclxuXHRmZXRjaFVzZXJzTGVzc29uSGlzdG9yeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4gKHtcclxuXHRsZXNzb25IaXN0b3J5OiBzdGF0ZS51c2Vyc0xlc3Nvbkhpc3RvcnlbcHJvcHMucGFyYW1zLnVpZF1cclxuXHRcdD8gc3RhdGUudXNlcnNMZXNzb25IaXN0b3J5W3Byb3BzLnBhcmFtcy51aWRdLmhpc3RvcnlcclxuXHRcdDogW10sXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG5cdG1hcFN0YXRlVG9Qcm9wcyxcclxuXHR7IGZldGNoVXNlcnNMZXNzb25IaXN0b3J5IH0sXHJcbikoTGVzc29uSGlzdG9yeUNvbnRhaW5lcilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9MZXNzb25IaXN0b3J5L0xlc3Nvbkhpc3RvcnkuanN4IiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSAnY29uZmlnL2NvbnN0YW50cydcclxuXHJcbmNsYXNzIFByb2ZpbGVOYXYgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxuYXY+XHJcblx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0PGxpPjxMaW5rPkJvb2ttYXJrczwvTGluaz48L2xpPlxyXG5cdFx0XHRcdFx0PGxpPjxMaW5rIHRvPXtgJHtCQVNFX1VSTH0vcHJvZmlsZS8ke3RoaXMucHJvcHMucGFyYW1zLnVpZH0vbGVzc29uaGlzdG9yeWB9Pkxlc3NvbiBIaXN0b3J5PC9MaW5rPjwvbGk+XHJcblx0XHRcdFx0XHQ8bGk+PExpbms+RGV0YWlsczwvTGluaz48L2xpPlxyXG5cdFx0XHRcdFx0PGxpPjxMaW5rPlJlc3VsdHM8L0xpbms+PC9saT5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9uYXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlTmF2XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZU5hdi9Qcm9maWxlTmF2LmpzeCIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQcm9maWxlTmF2IH0gZnJvbSAnY29tcG9uZW50cy9wcm9maWxlJ1xyXG5cclxuY2xhc3MgUHJvZmlsZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8UHJvZmlsZU5hdlxyXG5cdFx0XHRcdFx0cGFyYW1zPXt0aGlzLnByb3BzLnBhcmFtc31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVDb250YWluZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9Qcm9maWxlL1Byb2ZpbGUuanN4IiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUb3BpYywgU3ViVG9waWMgfSBmcm9tICdjb21wb25lbnRzL3dvcmtzaGVldCdcclxuXHJcbmNvbnN0IENvbnRlbnRzID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cdGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbilcclxuXHRjaGlsZHJlbiA9IGNoaWxkcmVuLm1hcCgodG9waWMsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PHRvcGljLnR5cGUgXHJcblx0XHRcdFx0XHRcdFx0XHR7Li4udG9waWMucHJvcHN9XHJcblx0XHRcdFx0XHRcdFx0XHR0b3BpY051bT17KGluZGV4ICsgMSl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KSlcclxuXHRcclxuXHRjb25zdCByb3dzID0gY2hpbGRyZW4ucmVkdWNlKChyb3dzLCB0b3BpYywgaW5kZXgsIGNoaWxkcmVuKSA9PiB7XHJcblx0XHRpZiAoaW5kZXggJSAyID09PSAwKSB7XHJcblx0XHRcdHJvd3MucHVzaCgoXHJcblx0XHRcdFx0PGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTYnPlxyXG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW5baW5kZXhdfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTYnPlxyXG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW5baW5kZXggKyAxXX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpKVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJvd3NcclxuXHR9LCBbXSlcclxuXHRcclxuXHQvLyBSZW5kZXJlZCBDb21wb25lbnRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J0NvbnRlbnRzIGNvbnRhaW5lci1mbHVpZCc+XHJcblx0XHRcdHtyb3dzfVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50c1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvQ29udGVudHMvQ29udGVudHMuanN4IiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUb3BpYywgU3ViVG9waWMsIENvbnRlbnRzIH0gZnJvbSAnY29tcG9uZW50cy93b3Jrc2hlZXQnXHJcbmltcG9ydCB7IEJBU0VfVVJMLCBXT1JLU0hFRVRTX1VSTCB9IGZyb20gJ2NvbmZpZy9jb25zdGFudHMnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPSdIb21lJz5cclxuXHRcdDxoMT5Db250ZW50cyAtIFdvcmtzaGVldHMvTm90ZXM8L2gxPlxyXG5cdFx0PENvbnRlbnRzPlxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nU2V0cyc+XHJcblx0XHRcdFx0PFN1YlRvcGljIG5hbWU9J1NldCBOb3RhdGlvbiBbVE9ET10nIHBhdGg9e2Ake0JBU0VfVVJMfS8ke1dPUktTSEVFVFNfVVJMfS9TZXRzL1NldE5vdGF0aW9uYH0vPlxyXG5cdFx0XHRcdDxTdWJUb3BpYyBuYW1lPSdTZXQgQnVpbGRlciBOb3RhdGlvbiBbVE9ET10nIHBhdGg9e2Ake0JBU0VfVVJMfS8ke1dPUktTSEVFVFNfVVJMfS9TZXRzL1NldEJ1aWxkZXJgfS8+XHJcblx0XHRcdDwvVG9waWM+XHJcblx0XHRcdFxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nRnVuY3Rpb25zJz5cclxuXHRcdFx0XHQ8U3ViVG9waWMgbmFtZT0nQ29tcG9zaXRlIEZ1bmN0aW9ucycgcGF0aD17YCR7QkFTRV9VUkx9LyR7V09SS1NIRUVUU19VUkx9L0Z1bmN0aW9ucy9Db21wb3NpdGVGdW5jdGlvbnNgfS8+XHJcblx0XHRcdFx0PFN1YlRvcGljIG5hbWU9J0ludmVyc2UgRnVuY3Rpb25zJyBwYXRoPXtgJHtCQVNFX1VSTH0vJHtXT1JLU0hFRVRTX1VSTH0vRnVuY3Rpb25zL0ludmVyc2VGdW5jdGlvbnNgfS8+XHRcdFx0XHRcclxuXHRcdFx0XHQ8U3ViVG9waWMgbmFtZT0nQWJzb2x1dGUgVmFsdWUgRnVuY3Rpb25zIFtUT0RPXScgcGF0aD17YCR7QkFTRV9VUkx9LyR7V09SS1NIRUVUU19VUkx9L0Z1bmN0aW9ucy9BYnNvbHV0ZVZhbHVlRnVuY3Rpb25zYH0vPlxyXG5cdFx0XHRcdDxTdWJUb3BpYyBuYW1lPSdSZWNpcHJvY2FsIEZ1bmN0aW9ucyBbVE9ET10nIHBhdGg9e2Ake0JBU0VfVVJMfS8ke1dPUktTSEVFVFNfVVJMfS9GdW5jdGlvbnMvUmVjaXByb2NhbEZ1bmN0aW9uc2B9Lz5cclxuXHRcdFx0PC9Ub3BpYz5cclxuXHRcdFx0XHJcblx0XHRcdDxUb3BpYyBuYW1lPSdDb29yZGluYXRlIEdlb21ldHJ5Jz5cclxuXHRcdFx0XHQ8U3ViVG9waWMgbmFtZT0nQ2lyY2xlcywgRWxsaXBzZXMgYW5kIEh5cGVyYm9sYXMgW1RPRE9dJyBwYXRoPXtgJHtCQVNFX1VSTH0vJHtXT1JLU0hFRVRTX1VSTH0vQ29vcmRpbmF0ZUdlb21ldHJ5L0NpcmNsZXNFbGxpcHNlc0FuZEh5cGVyYm9sYXNgfS8+XHJcblx0XHRcdDwvVG9waWM+XHJcblx0XHRcdFxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nVHJpZ29ub21ldHJ5IGFuZCBDaXJjdWxhciBGdW5jdGlvbnMnPjwvVG9waWM+XHJcblx0XHRcdFxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nVmVjdG9ycyc+PC9Ub3BpYz5cclxuXHRcdFx0PFRvcGljIG5hbWU9J0NvbXBsZXggTnVtYmVycyc+PC9Ub3BpYz5cclxuXHRcdFx0XHJcblx0XHRcdDxUb3BpYyBuYW1lPSdLaW5lbWF0aWNzJz48L1RvcGljPlxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nRGlmZmVyZW50aWFsIENhbGN1bHVzJz48L1RvcGljPlxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nSW50ZWdyYWwgQ2FsY3VsdXMgW09MRCBOT1RFU10nPlxyXG5cdFx0XHRcdDxTdWJUb3BpYyBuYW1lPSdJbnRyb2R1Y3Rpb24gYW5kIE5vdGF0aW9uJyBwYXRoPXsnaHR0cHM6Ly93d3cub3ZlcmxlYWYuY29tL3JlYWQvbWprY2Rqd252d3ZiJ30gZXh0ZXJuYWw9e3RydWV9IC8+XHJcblx0XHRcdFx0PFN1YlRvcGljIG5hbWU9J1N1YnN0aXR1dGlvbicgcGF0aD17J2h0dHBzOi8vd3d3Lm92ZXJsZWFmLmNvbS9yZWFkL21qa2Nkandudnd2Yid9IGV4dGVybmFsPXt0cnVlfSAvPlxyXG5cdFx0XHRcdDxTdWJUb3BpYyBuYW1lPSdJbnRlZ3JhdGlvbiBieSBQYXJ0cycgcGF0aD17J2h0dHBzOi8vd3d3Lm92ZXJsZWFmLmNvbS9yZWFkL21qa2Nkandudnd2Yid9IGV4dGVybmFsPXt0cnVlfSAvPlxyXG5cdFx0XHRcdDxTdWJUb3BpYyBuYW1lPSdSZXZlcnNlIFF1b3RpZW50IFJ1bGUuIE5vIScgcGF0aD17J2h0dHBzOi8vd3d3Lm92ZXJsZWFmLmNvbS9yZWFkL21qa2Nkandudnd2Yid9IGV4dGVybmFsPXt0cnVlfSAvPlxyXG5cdFx0XHRcdDxTdWJUb3BpYyBuYW1lPSdVc2luZyBUcmlnb25vbWV0cmljIElkZW50aXRpZXMnIHBhdGg9eydodHRwczovL3d3dy5vdmVybGVhZi5jb20vcmVhZC9tamtjZGp3bnZ3dmInfSBleHRlcm5hbD17dHJ1ZX0gLz5cclxuXHRcdFx0XHQ8U3ViVG9waWMgbmFtZT0nUGFydGlhbCBGcmFjdGlvbnMnIHBhdGg9eydodHRwczovL3d3dy5vdmVybGVhZi5jb20vcmVhZC9tamtjZGp3bnZ3dmInfSBleHRlcm5hbD17dHJ1ZX0gLz5cclxuXHRcdFx0XHQ8U3ViVG9waWMgbmFtZT0nQXJlYXMgVW5kZXIgQ3VydmVzJyBwYXRoPXsnaHR0cHM6Ly93d3cub3ZlcmxlYWYuY29tL3JlYWQvbWprY2Rqd252d3ZiJ30gZXh0ZXJuYWw9e3RydWV9IC8+XHJcblx0XHRcdFx0PFN1YlRvcGljIG5hbWU9J0FyZWFzIEJldHdlZW4gQ3VydmVzJyBwYXRoPXsnaHR0cHM6Ly93d3cub3ZlcmxlYWYuY29tL3JlYWQvbWprY2Rqd252d3ZiJ30gZXh0ZXJuYWw9e3RydWV9IC8+XHJcblx0XHRcdFx0PFN1YlRvcGljIG5hbWU9J1ZvbHVtZXMgb2YgU29saWRzIG9mIFJldm9sdXRpb25zJyBwYXRoPXsnaHR0cHM6Ly93d3cub3ZlcmxlYWYuY29tL3JlYWQvbWprY2Rqd252d3ZiJ30gZXh0ZXJuYWw9e3RydWV9IC8+XHJcblx0XHRcdFx0PFN1YlRvcGljIG5hbWU9J0FyZWEgQXBwcm94aW1hdGlvbiwgSW50cm9kdWN0aW9uIHRvIFJpZW1hbiBJbnRlZ3JhdGlvbicgcGF0aD17J2h0dHBzOi8vd3d3Lm92ZXJsZWFmLmNvbS9yZWFkL21qa2Nkandudnd2Yid9IGV4dGVybmFsPXt0cnVlfSAvPlxyXG5cdFx0XHQ8L1RvcGljPlxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nRGlmZmVyZW50aWFsIEVxdWF0aW9ucyc+PC9Ub3BpYz5cdFx0XHRcclxuXHRcdFx0PFRvcGljIG5hbWU9J01lY2hhbmljcyc+PC9Ub3BpYz5cclxuXHRcdFx0PFRvcGljIG5hbWU9J1ZlY3RvciBDYWxjdWx1cyc+PC9Ub3BpYz5cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nUHJvYmFiaWxpdHknPjwvVG9waWM+XHJcblx0XHRcdDxUb3BpYyBuYW1lPSdTdGF0aXN0aWNzJz48L1RvcGljPlxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHQ8L0NvbnRlbnRzPlxyXG5cdDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvSG9tZS9Ib21lLmpzeCIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tICdjb25maWcvY29uc3RhbnRzJ1xyXG5cclxuY29uc3QgU3ViVG9waWMgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBpbnRlcm5hbHMgPSBbXHJcblx0XHRwcm9wcy5leHRlcm5hbFxyXG5cdFx0XHRcdD8gPGRpdiBrZXk9ezB9PjxhIGhyZWY9e3Byb3BzLnBhdGh9Pntwcm9wcy50b3BpY051bX08L2E+PC9kaXY+XHJcblx0XHQ6IDxkaXYga2V5PXswfT48TGluayB0bz17cHJvcHMucGF0aH0+e3Byb3BzLnRvcGljTnVtfTwvTGluaz48L2Rpdj4sXHJcblx0XHRwcm9wcy5leHRlcm5hbFxyXG5cdFx0XHQ/IDxkaXYga2V5PXsxfT48YSBocmVmPXtwcm9wcy5wYXRofT57cHJvcHMubmFtZX08L2E+PC9kaXY+XHJcblx0XHRcdDogPGRpdiBrZXk9ezF9PjxMaW5rIHRvPXtwcm9wcy5wYXRofT57cHJvcHMubmFtZX08L0xpbms+PC9kaXY+LFx0XHRcclxuXHRdXHJcblx0XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdTdWJUb3BpYyc+XHJcblx0XHRcdHtpbnRlcm5hbHN9XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcblN1YlRvcGljLmRlZmF1bHRQcm9wcyA9IHtcclxuXHRleHRlcm5hbDogZmFsc2UsXHJcblx0cGF0aDogQkFTRV9VUkwsXHJcblx0dG9waWNOdW06ICdlcnJvcicsXHJcbn1cclxuXHJcblN1YlRvcGljLnByb3BUeXBlcyA9IHtcclxuXHRleHRlcm5hbDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuXHRwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0bmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdHRvcGljTnVtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1YlRvcGljXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3dvcmtzaGVldC9TdWJUb3BpYy9TdWJUb3BpYy5qc3giLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFN1YlRvcGljIH0gZnJvbSAnY29tcG9uZW50cy93b3Jrc2hlZXQnXHJcblxyXG5jb25zdCBUb3BpYyA9ICh7IG5hbWUsIHRvcGljTnVtLCBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVxyXG5cdGxldCBrZXkgPSAwXHJcblx0Y29uc3Qgc3VidG9waWNzID0gY2hpbGRyZW4ubWFwKChzdWJ0b3BpYywgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTdWJUb3BpYyBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnN1YnRvcGljLnByb3BzfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG9waWNOdW09e2Ake3RvcGljTnVtfS4ke2luZGV4fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdUb3BpYyc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiIC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuXHRcdFx0XHRcdDxoMj57YCR7dG9waWNOdW19IC0gJHtuYW1lfWB9PC9oMj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0wXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tM1wiIC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxyXG5cdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHR7c3VidG9waWNzfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0wXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcGljXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3dvcmtzaGVldC9Ub3BpYy9Ub3BpYy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRleCBhcyBUIH0gZnJvbSAnTWF0aEpheCdcclxuaW1wb3J0IHsgUXVlc3Rpb24sIERlc2NyaXB0aW9uLCBQYXJ0LCBOb3RlIH0gZnJvbSAnY29tcG9uZW50cy9tYXJrdXAvd29ya3NoZWV0J1xyXG5pbXBvcnQgY2lyY2xlQXRPcmlnaW4gZnJvbSAnLi9DaXJjbGVBdE9yaWdpbi5wbmcnXHJcblxyXG5jb25zdCBDaXJjbGVzRWxsaXBzZXNBbmRIeXBlcmJvbGFzID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPSdNYXRoTWFya3VwJz5cclxuXHRcdDxoMT5DaXJjbGVzLCBFbGxpcHNlcyBhbmQgSHlwZXJib2xhczwvaDE+XHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0PGgyPkNpcmNsZXM8L2gyPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRDb25zaWRlciBhIGNpcmNsZSBhcm91bmQgdGhlIG9yaWdpbiwgaXQgaGFzIGEgY29uc3RhbnQgcmFkaXVzLiBUaGUgZGlzdGFuY2UgZnJvbSBhIHBvaW50IHRvIHRoZSBvcmlnaW4gaXMgPFQgdD0nXFxzcXJ0e3heMiArIHleMn0nIC8+LiBTbyBpZiBvdXIgY2lyY2xlIGhhcyBjb25zdGFudCByYWRpdXMgJHIkLCB0aGVuIHRoZSBlcXVhdGlvbiBvZiB0aGUgY2lyY2xlIG11c3QgYmUgPFQ+e2ByID0gXFxcXHNxcnR7eF4yICsgeV4yfWB9PC9UPiBvciA8VD57YHJeMiA9IHheMiArIHleMmB9PC9UPi5cdFx0XHRcdFxyXG5cdFx0XHRcdDxpbWcgY2xhc3NOYW1lPSdoY2VudGVyIGltZy1yZXNwb25zaXZlJyBzcmM9e2NpcmNsZUF0T3JpZ2lufSBhbHQ9XCJDaXJjbGVBdE9yaWdpblwiIC8+XHJcblx0XHRcdDwvcD5cclxuXHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdFRoZSBnZW5lcmFsIGVxdWF0aW9uIG9mIGEgY2lyY2xlIG9mIHJhZGl1cyA8VD57J3InfTwvVD4gYW5kIGNlbnRlciA8VD57YChhLGIpYH08L1Q+IGlzIHRoZW4gPFQ+eydyXjIgPSAoeC1hKV4yICsgKHktYileMid9PC9UPiBhcyB3ZSBjYW4gc2ltcGx5IHRyYW5zbGF0ZSBhIGNpcmNsZSBjZW50ZXJlZCBhdCB0aGUgb3JpZ2luLlxyXG5cdFx0XHQ8L3A+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcclxuXHRcdDxzZWN0aW9uPlxyXG5cdFx0XHQ8aDI+RWxsaXBzZXM8L2gyPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRMZXQncyByZXdyaXRlIG91ciBjaXJjbGUgZXF1YXRpb24gYXMgPFQ+e2AxID0gXFxcXGZyYWN7eF4yfXtyXjJ9ICsgXFxcXGZyYWN7eV4yfXtyXjJ9YH08L1Q+LiBJbiB0aGlzIGZvcm0gd2UgY2FuIHNlZSB3aHkgdGhlIDxUPnsneCd9PC9UPiBhbmQgPFQ+eyd5J308L1Q+IGludGVyY2VwdHMgYXJlIDxUPnsnXFxcXHBtIHInfTwvVD4gYXMgd2hlbiBlaXRoZXIgPFQ+eyd4J308L1Q+IG9yIDxUPnsneSd9PC9UPiBhcmUgPFQ+eycwJ308L1Q+LCB0aGUgb3RoZXIgbXVzdCBiZSA8VD57J3InfTwvVD4gaW4gb3JkZXIgdG8gZXF1YWwgPFQ+eycxJ308L1Q+LlxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdFxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRXZSBhbHNvIHNlZSB0aGF0IDxUPnsneCd9PC9UPiBhbmQgPFQ+eyd5J308L1Q+IGFyZSBpbnZlcnNlbHkgcmVsYXRlZCBhcyB3aGVuIGVpdGhlciA8VD57J3gnfTwvVD4gb3IgPFQ+eyd5J308L1Q+IGluY3JlYXNlIHRoZSBvdGhlciBtdXN0IGRlY3JlYXNlLCBhbmQgdmljZSB2ZXJzYSwgY29uc2lzdGVudCB3aXRoIHRoZSBzaGFwZSBvZiBhIGNpcmNsZS4gS2VlcGluZyB0aGlzIGluIG1pbmQsIHRoZXJlIGlzIG5vIHJlYXNvbiB0aGF0IGJvdGggZGVub21pbmF0b3JzIGhhdmUgdG8gYmUgdGhlIHNhbWUuIFxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdFxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRDb25zaWRlciA8VD57YDEgPSBcXFxcZnJhY3t4XjJ9e2FeMn0gKyBcXFxcZnJhY3t5XjJ9e2JeMn1gfTwvVD4uIFVzaW5nIHRoZSBzYW1lIGxvZ2ljIGFzIGJlZm9yZSwgdGhlIDxUPnsneCd9PC9UPiBpbnRlcmNlcHQgbXVzdCBiZSA8VD57J1xcXFxwbSBhJ308L1Q+IGFuZCB0aGUgPFQ+eyd5J308L1Q+IGludGVyY2VwdCBtdXN0IGJlIDxUPnsnXFxcXHBtIGInfTwvVD4uIFdlIGFsc28gbWFpbnRhaW4gdGhlIGludmVyc2UgcmVsYXRpb24gYmV0d2VlbiA8VD57J3gnfTwvVD4gYW5kIDxUPnsneSd9PC9UPiBzbyB3ZSBlbmQgdXAgd2l0aCBhICdjaXJjbGUnIHRoYXQgbWF5IG5vdCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyB3aWR0aCwgaWUsIGFuIGVsbGlwc2UuXHJcblx0XHRcdDwvcD5cclxuXHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdFRoZSBnZW5lcmFsIGVxdWF0aW9uIG9mIGFuIGVsbGlwc2UgY2VudGVyZWQgYXQgPFQ+e2AoaCxrKWB9PC9UPiBpcyB0aGVuIDxUPnsnMSA9IFxcXFxmcmFjeyh4LWgpXjJ9e2FeMn0gKyBcXFxcZnJhY3soeS1rKV4yfXtiXjJ9J308L1Q+IGFzIHdlIGNhbiBzaW1wbHkgdHJhbnNsYXRlIGFuIGVsbGlwc2UgY2VudGVyZWQgYXQgdGhlIG9yaWdpbi5cclxuXHRcdFx0PC9wPlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0PGgyPkh5cGVyYm9sYXM8L2gyPlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFxyXG5cdFx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezN9IG51bWJlcj0nMSc+XHJcblx0XHRcdFx0PERlc2NyaXB0aW9uPlRoaXMgaXMgYSBxdWVzdGlvbiB3aXRob3V0IHBhcnRzPC9EZXNjcmlwdGlvbj5cclxuXHRcdFx0PC9RdWVzdGlvbj5cclxuXHRcdFx0XHJcblx0XHRcdDxRdWVzdGlvbiBwYXJ0c1BlclJvdz17M30gbnVtYmVyPScyJz5cclxuXHRcdFx0XHQ8RGVzY3JpcHRpb24+VGhpcyBpcyBhIHF1ZXN0aW9uIHdpdGggcGFydHM8L0Rlc2NyaXB0aW9uPlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYSc+PFQgdD0nZih4KSA9IFxcZnJhY3t4ICsgMX17eCArIDN9Jy8+PC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYSc+PFQgdD0nZih4KSA9IFxcZnJhY3t4ICsgMX17eCArIDN9Jy8+PC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYSc+PFQgdD0nZih4KSA9IFxcZnJhY3t4ICsgMX17eCArIDN9Jy8+PC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYSc+PFQgdD0nZih4KSA9IFxcZnJhY3t4ICsgMX17eCArIDN9Jy8+PC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYSc+PFQgdD0nZih4KSA9IFxcZnJhY3t4ICsgMX17eCArIDN9Jy8+PC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYic+UGFydCBiPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHQ8L1F1ZXN0aW9uPlxyXG5cdFx0XHRcclxuXHRcdFx0PE5vdGU+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFNvbWUgTm90ZXMgPFQgdD0nZiA6ICgyLFxcaW5mdHkpIFxccmlnaHRhcnJvdyBcXG1hdGhiYntSfSwgZih4KSA9IFxcc3FydHsyeCArIDN9Jy8+IGFuZCBzb21lIGNvd3NcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9Ob3RlPlxyXG5cdFx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezR9IG51bWJlcj0nMyc+XHJcblx0XHRcdFx0PERlc2NyaXB0aW9uPlRoaXMgaXMgYSBxdWVzdGlvbiB3aXRoIHBhcnRzPC9EZXNjcmlwdGlvbj5cclxuXHRcdFx0XHQ8UGFydCBudW1iZXI9J2InPlBhcnQgYjwvUGFydD5cclxuXHRcdFx0XHQ8UGFydCBudW1iZXI9J2EnPlxyXG5cdFx0XHRcdFx0PGRpdj5mZ2RmZ2RmZ2RmZzwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj5jb3dzIGdvIG1vbyBtb28gZmdkZmdkZmdkZmcgZGZnIGRmPC9kaXY+XHJcblx0XHRcdFx0PC9QYXJ0Plx0XHRcdFx0XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdjJz5QYXJ0IGM8L1BhcnQ+XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdkJz5QYXJ0IGQ8L1BhcnQ+XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdkJz5QYXJ0IGQ8L1BhcnQ+XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdkJz5QYXJ0IGQ8L1BhcnQ+XHJcblx0XHRcdDwvUXVlc3Rpb24+XHJcblx0XHRcdFxyXG5cdFx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezN9IG51bWJlcj0nNCc+XHJcblx0XHRcdFx0PERlc2NyaXB0aW9uPklmIDxUIHQ9J2YgOiAoMixcXGluZnR5KSBcXHJpZ2h0YXJyb3cgXFxtYXRoYmJ7Un0sIGYoeCkgPSBcXHNxcnR7MnggKyAzfScvPiwgdGhlbiB0aGUgaW52ZXJzZSBmdW5jdGlvbiBpczwvRGVzY3JpcHRpb24+XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdhJz5mZ2hmZ2hmZ2hmZ2ggZmdoIGZnaCBmZ2ggZ2doZmdoZmcgZmdoZmdoIGZnaCBmZyBmZyBhPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYic+UGFydCBiPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHQ8L1F1ZXN0aW9uPlxyXG5cdFx0XHRcclxuXHRcdFx0PFF1ZXN0aW9uIHBhcnRzUGVyUm93PXszfSBudW1iZXI9JzUnPlxyXG5cdFx0XHRcdDxEZXNjcmlwdGlvbj5UaGlzIGlzIGEgcXVlc3Rpb24gd2l0aCBwYXJ0czwvRGVzY3JpcHRpb24+XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdhJz5QYXJ0IGE8L1BhcnQ+XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdiJz5QYXJ0IGI8L1BhcnQ+XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdjJz5QYXJ0IGM8L1BhcnQ+XHJcblx0XHRcdDwvUXVlc3Rpb24+XHJcblx0XHRcdFxyXG5cdFx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezN9IG51bWJlcj0nNic+XHJcblx0XHRcdFx0PERlc2NyaXB0aW9uPlRoaXMgaXMgYSBxdWVzdGlvbiB3aXRoIHBhcnRzPC9EZXNjcmlwdGlvbj5cclxuXHRcdFx0XHQ8UGFydCBudW1iZXI9J2EnPlBhcnQgYTwvUGFydD5cclxuXHRcdFx0XHQ8UGFydCBudW1iZXI9J2InPlBhcnQgYjwvUGFydD5cclxuXHRcdFx0XHQ8UGFydCBudW1iZXI9J2MnPlBhcnQgYzwvUGFydD5cclxuXHRcdFx0PC9RdWVzdGlvbj5cclxuXHRcdFx0XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdDwvZGl2PlxyXG4pXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaXJjbGVzRWxsaXBzZXNBbmRIeXBlcmJvbGFzXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL0Nvb3JkaW5hdGVHZW9tZXRyeS9DaXJjbGVzRWxsaXBzZXNBbmRIeXBlcmJvbGFzL0NpcmNsZXNFbGxpcHNlc0FuZEh5cGVyYm9sYXMuanN4IiwiZXhwb3J0IENpcmNsZXNFbGxpcHNlc0FuZEh5cGVyYm9sYXMgZnJvbSAnLi9DaXJjbGVzRWxsaXBzZXNBbmRIeXBlcmJvbGFzL0NpcmNsZXNFbGxpcHNlc0FuZEh5cGVyYm9sYXMnXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvQ29vcmRpbmF0ZUdlb21ldHJ5L2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUZXgsIFRleE1hcmt1cCB9IGZyb20gJ01hdGhKYXgnXHJcblxyXG5jb25zdCBBYnNvbHV0ZVZhbHVlRnVuY3Rpb25zID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPSdNYXRoTWFya3VwJz5cclxuXHRcdDxoMT5BYnNvbHV0ZSBWYWx1ZSBGdW5jdGlvbnM8L2gxPlxyXG5cdDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYnNvbHV0ZVZhbHVlRnVuY3Rpb25zXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvRnVuY3Rpb25zL0Fic29sdXRlVmFsdWVGdW5jdGlvbnMvQWJzb2x1dGVWYWx1ZUZ1bmN0aW9ucy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRleCBhcyBUIH0gZnJvbSAnTWF0aEpheCdcclxuaW1wb3J0IHsgUXVlc3Rpb24sIERlc2NyaXB0aW9uLCBQYXJ0LCBOb3RlIH0gZnJvbSAnY29tcG9uZW50cy9tYXJrdXAvd29ya3NoZWV0J1xyXG5cclxuY29uc3QgQ29tcG9zaXRlRnVuY3Rpb25zID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPSdNYXRoTWFya3VwJz5cclxuXHRcdDxoMT5Db21wb3NpdGUgRnVuY3Rpb25zPC9oMT5cclxuXHRcdFxyXG5cdFx0PGgyPlF1ZXN0aW9uczwvaDI+XHJcblx0XHRcclxuXHRcdDxOb3RlPlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdEdpdmVuIHR3byBmdW5jdGlvbnMgPFQgdD0nZicvPiBhbmQgPFQgdD0nZycvPiwgdGhlIGNvbXBvc2l0aW9uIDxUIHQ9J2ggPSBmIFxcY2lyYyBnJy8+IGlzIGRlZmluZWQgYXMgPFQgdD0naCh4KSA9IGYoZyh4KSknLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXY+PHN0cm9uZz5FeGFtcGxlOjwvc3Ryb25nPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2PklmIDxUIHQ9J2YoeCkgPSAyeCcvPiwgPFQgdD0nZyh4KSA9IHheMicvPiBhbmQgPFQgdD0naCA9IGYgXFxjaXJjIGcnLz4sIHRoZW4sIDxUIHQ9J2goeCkgPSBmKGcoeCkpID0gZih4XjIpID0gMnheMicvPjwvZGl2PlxyXG5cdFx0PC9Ob3RlPlxyXG5cdFx0XHJcblx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezN9IG51bWJlcj0nMSc+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5Bc3N1bWluZyB0aGF0IDxUIHQ9J2ggPSBmIFxcY2lyYyBnJy8+IGV4aXN0cywgZmluZCB0aGUgcnVsZSBvZiA8VCB0PSdoJy8+PC9EZXNjcmlwdGlvbj5cclxuXHRcdFx0PFBhcnQ+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdmKHgpID0gMnggKyAxJy8+PC9kaXY+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdnKHgpID0gM3gnLz48L2Rpdj5cclxuXHRcdFx0PC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2YoeCkgPSAyeCAtIDEnLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2coeCkgPSB4XjIgKyAxJy8+PC9kaXY+XHJcblx0XHRcdDwvUGFydD5cclxuXHRcdFx0PFBhcnQ+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdmKHgpID0geF4yICsgM3gnLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2coeCkgPSAyeCArIDMnLz48L2Rpdj5cclxuXHRcdFx0PC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PE5vdGU+XHJcblx0XHRcdDxkaXY+R2l2ZW4gdHdvIGZ1bmN0aW9ucyA8VCB0PSdmJy8+IGFuZCA8VCB0PSdnJy8+LCB0aGUgY29tcG9zaXRpb24gPFQgdD0naCA9IGYgXFxjaXJjIGcnLz4gZXhpc3RzIGlmIDxUIHQ9J1xcdGV4dHtyYW5nZX0oZykgXFxzdWJzZXRlcSBcXHRleHR7ZG9tYWlufShmKScvPi48L2Rpdj5cclxuXHRcdFx0PGRpdj5UaGlzIG1lYW5zIHRoYXQgd2hhdCBjb21lcyBvdXQgb2YgdGhlIGlubmVyIGZ1bmN0aW9uICg8VCB0PSdnJy8+KSBtdXN0IGJlIGEgdmFsaWQgaW5wdXQgb2YgdGhlIG91dGVyIGZ1bmN0aW9uLjwvZGl2PlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0PGRpdj5Zb3UgbWF5IGltYWdpbmUgYW4gYXNzZW1ibHkgbGluZS4uLjwvZGl2PlxyXG5cdFx0XHQ8ZGl2Pldvb2QgPFQgdD0nXFx1bmRlcnNldHtcXHRleHR7VGFibGUgRmFjdG9yeX19e1xccmlnaHRhcnJvd30nLz4gVGFibGUgPFQgdD0nXFx1bmRlcnNldHtcXHRleHR7VGFibGUgUGFpbnRlcn19e1xccmlnaHRhcnJvd30nLz4gUGFpbnRlZCBUYWJsZTwvZGl2PlxyXG5cdFx0XHQ8ZGl2Pldvb2QgPFQgdD0nXFx1bmRlcnNldHtcXHRleHR7V29vZCBDaGlwcGVyfX17XFxyaWdodGFycm93fScvPiBXb29kIENoaXBzIDxUIHQ9J1xcdW5kZXJzZXR7XFx0ZXh0e1RhYmxlIFBhaW50ZXJ9fXtcXHJpZ2h0YXJyb3d9Jy8+ID8/PzwvZGl2PlxyXG5cdFx0PC9Ob3RlPlxyXG5cdFx0XHJcblx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezJ9IG51bWJlcj0nMic+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0RmluZCB0aGUgZG9tYWluIGFuZCByYW5nZSBvZiA8VCB0PSdmJy8+IGFuZCA8VCB0PSdnJy8+IHRoZW4gZGV0ZXJtaW5lIGlmIDxUIHQ9J2YoZyh4KSknLz4gb3IgPFQgdD0nZyhmKHgpKScvPiBleGlzdCwgYW5kIGlmIHNvLCBmaW5kIHRoZWlyIHJ1bGVzLlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQoPGVtPk5vdGU6PC9lbT4gSWYgYSBkb21haW4gaXMgbm90IHN0YXRlZCwgd2UgdXNlIHRoZSBpbXBsaWVkL21heGltYWwgZG9tYWluLCBoZW5jZSB0aGUgbmFtZSkuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0PlxyXG5cdFx0XHRcdDxkaXY+PFQgdD0nZih4KSA9IFxcZnJhY3sxfXt4XjJ9Jy8+PC9kaXY+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdnKHgpID0geF4yICsgMScvPjwvZGl2PlxyXG5cdFx0XHQ8L1BhcnQ+XHJcblx0XHRcdDxQYXJ0PlxyXG5cdFx0XHRcdDxkaXY+PFQgdD0nZih4KSA9IFxcc3FydHszIC0geH0nLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2coeCkgPSB4XjInLz48L2Rpdj5cclxuXHRcdFx0PC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PE5vdGU+XHJcblx0XHRcdDxkaXY+SWYgPFQgdD0naCh4KSA9IGYoZyh4KSknLz4gZXhpc3RzIHRoZW46PC9kaXY+XHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8VCB0PSdcXHRleHR7ZG9tYWlufShoKSA9IFxcdGV4dHtkb21haW59KGcpJy8+IGFzIGFueSBpbnB1dCB0byA8VCB0PSdoJy8+IG11c3QgYmUgYW4gJ2lucHV0LWFibGUnIGluIDxUIHQ9J2cnLz4uXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8VCB0PSdcXHRleHR7cmFuZ2V9KGgpIFxcc3Vic2V0ZXEgXFx0ZXh0e3JhbmdlfShmKScvPiBzaW5jZSB3aGF0IGNvbWVzIG91dCBvZiA8VCB0PSdoJy8+IGlzIHdoYXQgY29tZXMgb3V0IG9mIDxUIHQ9J2YnLz4gYnV0IHdpdGggbW9yZSByZXN0cmljdGlvbnMgc2luY2UgdGhlIGlucHV0IHRvIDxUIHQ9J2YnLz4gaXMgcmVzdHJpY3RlZCB0byB0aGUgcmFuZ2Ugb2YgPFQgdD0nZycvPi5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9Ob3RlPlxyXG5cdFx0XHJcblx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezJ9IG51bWJlcj0nMyc+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0RmluZCA8VCB0PSdmKGcoeCkpJy8+IGFuZCBzdGF0ZSBpdHMgcnVsZSwgZG9tYWluIGFuZCByYW5nZS5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0KDxlbT5Ob3RlOjwvZW0+IFlvdSBtYXkgcmV1c2UgYW5zd2VycyBmcm9tIHRoZSBwcmV2aW91cyBxdWVzdGlvbikuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0PlxyXG5cdFx0XHRcdDxkaXY+PFQgdD0nZih4KSA9IFxcZnJhY3sxfXt4XjJ9Jy8+PC9kaXY+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdnKHgpID0geF4yICsgMScvPjwvZGl2PlxyXG5cdFx0XHQ8L1BhcnQ+XHJcblx0XHRcdDxQYXJ0PlxyXG5cdFx0XHRcdDxkaXY+PFQgdD0nZih4KSA9IFxcc3FydHszIC0geH0nLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2coeCkgPSB4XjInLz48L2Rpdj5cclxuXHRcdFx0PC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PE5vdGU+XHJcblx0XHRcdFN1cHBvc2Ugd2Ugd2FudCB0byBmaW5kIDxUIHQ9J2goeCkgPSBmKGcoeCkpJy8+LiBJZiA8VCB0PSdcXHRleHR7cmFuZ2V9KGcpIFxcbm90XFxzdWJzZXRlcSBcXHRleHR7ZG9tYWlufShmKScvPiB0aGVuIHdlIGtub3cgdGhhdCA8VCB0PSdoJy8+IGRvZXMgbm90IGV4aXN0LiBJbnN0ZWFkIHdlIGNhbiBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gPFQgdD0nZ14qJy8+IGJ5IHJlc3RyaWN0aW5nIHRoZSBkb21haW4gb2YgPFQgdD0nZycvPiwgd2hpY2ggaW4gdHVybiB3aWxsIHJlc3RyaWN0IHRoZSByYW5nZSwgc3VjaCB0aGF0IGhvcGVmdWxseSA8VCB0PSdcXHRleHR7cmFuZ2V9KGcqKSBcXHN1YnNldGVxIFxcdGV4dHtkb21haW59KGYpJy8+IHNvICB0aGF0IDxUIHQ9J2heKih4KSA9IGYoZ14qKHgpKScvPiBleGlzdHMgaW5zdGVhZC5cclxuXHRcdDwvTm90ZT5cclxuXHRcdFxyXG5cdFx0PFF1ZXN0aW9uIHBhcnRzUGVyUm93PXsyfSBudW1iZXI9JzQnPlxyXG5cdFx0XHQ8RGVzY3JpcHRpb24+XHJcblx0XHRcdFx0QXR0ZW1wdCB0byBmaW5kIDxUIHQ9J2goeCkgPSBmKGcoeCkpJy8+LCBpZiBuZWNlc3NhcnkgY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIDxUIHQ9J2deKicvPiBieSByZXN0cmljdGluZyB0aGUgZG9tYWluIG9mIDxUIHQ9J2cnLz4gYW5kIGZpbmQgPFQgdD0naF4qKHgpID0gZihnXiooeCkpJy8+IGluc3RlYWQuIE90aGVyd2lzZSwgc3RhdGUgd2h5IDxUIHQ9J2gnLz4gYW5kIDxUIHQ9J2heKicvPiBkbyBub3QgZXhpc3QuXHJcblx0XHRcdDwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0PlxyXG5cdFx0XHRcdDxkaXY+PFQgdD0nZih4KSA9ICh4LTEpXjInLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2coeCkgPSBcXHNxcnR7OSAtIHh9Jy8+PC9kaXY+XHJcblx0XHRcdDwvUGFydD5cclxuXHRcdFx0PFBhcnQ+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdmKHgpID0gXFxzcXJ0e3ggLSAxfScvPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+PFQgdD0nZyh4KSA9IC1cXGxlZnR8eFxccmlnaHR8Jy8+PC9kaXY+XHJcblx0XHRcdDwvUGFydD5cclxuXHRcdFx0PFBhcnQ+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdmOiAoLVxcaW5mdHksIDUpIFxccmlnaHRhcnJvdyBcXG1hdGhiYntSfSwgZih4KSA9IHgnLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2coeCkgPSB4XjIgKyAxJy8+PC9kaXY+XHJcblx0XHRcdDwvUGFydD5cclxuXHRcdFx0PFBhcnQ+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdmOiAoLVxcaW5mdHksIDUpIFxccmlnaHRhcnJvdyBcXG1hdGhiYntSfSwgZih4KSA9IHheezc3NH0gLSBzaW4oeCknLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2coeCkgPSB4XjIgKyAxJy8+PC9kaXY+XHJcblx0XHRcdFx0PGRpdj4oPGVtPkhpbnQ6PC9lbT4gcmVmZXIgdG8gcHJldmlvdXMgcGFydCwgd2hhdCBkbyB5b3UgcmVhbGx5IGNhcmUgYWJvdXQgPFQgdD0nZicvPj8pPC9kaXY+XHJcblx0XHRcdDwvUGFydD5cclxuXHRcdDwvUXVlc3Rpb24+XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0PGgyPkFzc2lnbm1lbnQ8L2gyPlxyXG5cdFx0XHJcblx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezJ9IG51bWJlcj0nMSc+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5cclxuXHRcdFx0XHRJZiA8VCB0PSdmKHgpID0gKHgrMykoeC0yKScvPiBhbmQgPFQgdD0nZyh4KSA9IHheMicvPiBkZXRlcm1pbmUgd2hldGhlciA8VCB0PSdmKGcoeCkpJy8+IGFuZCA8VCB0PSdnKGYoeCkpJy8+IGV4aXN0LiBJZiB0aGV5IGRvLCBmaW5kIHRoZSBydWxlIGZvciB0aGUgY29tcG9zaXRlIGZ1bmN0aW9uIGFuZCBzdGF0ZSBpdHMgZG9tYWluIGFuZCByYW5nZS5cclxuXHRcdFx0PC9EZXNjcmlwdGlvbj5cclxuXHRcdDwvUXVlc3Rpb24+XHJcblx0XHRcclxuXHRcdDxRdWVzdGlvbiBudW1iZXI9JzInPlxyXG5cdFx0XHQ8RGVzY3JpcHRpb24+TGV0IDxUIHQ9J2YoeCkgPSB4XjInLz4gYW5kIDxUIHQ9J2coeCkgPSBcXHNxcnR7eH0nLz4uPC9EZXNjcmlwdGlvbj5cclxuXHRcdFx0PFBhcnQ+RGV0ZXJtaW5lIGlmIDxUIHQ9J2YoZyh4KSknLz4gZXhpc3RzLiBJZiBzbyBzdGF0ZSBpdHMgcnVsZSwgZG9tYWluIGFuZCByYW5nZTwvUGFydD5cclxuXHRcdFx0PFBhcnQ+RGV0ZXJtaW5lIGlmIDxUIHQ9J2coZih4KSknLz4gZXhpc3RzLiBJZiBzbyBzdGF0ZSBpdHMgcnVsZSwgZG9tYWluIGFuZCByYW5nZTwvUGFydD5cclxuXHRcdFx0PFBhcnQ+QXJlIDxUIHQ9J2YoZyh4KSknLz4gYW5kIDxUIHQ9J2coZih4KSknLz4gZXF1YWw/PC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5JcyBpdCBwb3NzaWJsZSB0byByZXN0cmljdCB0aGUgZG9tYWluIG9mIDxUIHQ9J2YnLz4gc28gdGhhdCA8VCB0PSdmKGcoeCkpJy8+IGFuZCA8VCB0PSdnKGYoeCkpJy8+IGVxdWFsPyBJZiBzbyBmaW5kIGEgZG9tYWluIHJlc3RyaWN0ZWQgZnVuY3Rpb24gPFQgdD0nZl4qJy8+IGZyb20gPFQgdD0nZicvPiBzdWNoIHRoYXQgPFQgdD0nZl4qKGcoeCkpID0gZyhmXiooeCkpJy8+PC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PFF1ZXN0aW9uIG51bWJlcj0nMyc+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5cclxuXHRcdFx0XHRGb3IgdGhlIGZ1bmN0aW9ucywgPFQgdD0nZjogXFxtYXRoYmJ7Un0gXFxyaWdodGFycm93IFxcbWF0aGJie1J9LCBmKHgpID0geF4yICsgMicvPiBhbmQgPFQgdD0nZzogWzYsIFxcaW5mdHkpIFxccmlnaHRhcnJvdyBcXG1hdGhiYntSfSAsZyh4KSA9IFxcc3FydHt4LTZ9Jy8+XHJcblx0XHRcdDwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0PlNob3cgdGhhdCA8VCB0PSdmKGcoeCkpJy8+IGV4aXN0cy48L1BhcnQ+XHJcblx0XHRcdDxQYXJ0PkZpbmQgdGhlIHJ1bGUgb2YgPFQgdD0nZihnKHgpKScvPiBhbmQgc3RhdGUgaXRzIGRvbWFpbiBhbmQgcmFuZ2UuPC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5TaG93IHRoYXQgPFQgdD0nZyhmKHgpKScvPiBkb2VzIG5vdCBleGlzdC48L1BhcnQ+XHJcblx0XHRcdDxQYXJ0PlJlc3RyaWN0IHRoZSBkb21haW4gb2YgPFQgdD0nZicvPiB0byBvYnRhaW4gYSBmdW5jdGlvbiA8VCB0PSdmXionLz4gc3VjaCB0aGF0IDxUIHQ9J2coZl4qKHgpKScvPiBleGlzdHMuPC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5GaW5kIDxUIHQ9J2coZl4qKHgpKScvPiBhbmQgc3RhdGUgaXRzIGRvbWFpbiBhbmQgcmFuZ2UuPC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PFF1ZXN0aW9uIG51bWJlcj0nNCc+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5cclxuXHRcdFx0XHRJZiA8VCB0PSdmOiAoLVxcaW5mdHksIDNdIFxccmlnaHRhcnJvdyBcXG1hdGhiYntSfSwgZih4KSA9IHheMiArIGsnLz4gYW5kIDxUIHQ9J2c6IFs2LCBcXGluZnR5KSBcXHJpZ2h0YXJyb3cgXFxtYXRoYmJ7Un0gLGcoeCkgPSAtXFxzcXJ0e3gtNn0gKyBrJy8+XHJcblx0XHRcdDwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0PkZpbmQgdGhlIHJhbmdlcyBvZiA8VCB0PSdmJy8+IGFuZCA8VCB0PSdnJy8+PC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5GaW5kIHRoZSBzZXQgb2YgdmFsdWVzIG9mIDxUIHQ9J2snLz4gc3VjaCB0aGF0IGJvdGggPFQgdD0nZihnKHgpKScvPiBhbmQgPFQgdD0nZyhmKHgpKScvPiBleGlzdC48L1BhcnQ+XHJcblx0XHQ8L1F1ZXN0aW9uPlxyXG5cdFx0XHJcblx0XHRcclxuXHRcdDxoMj5FeHRyYTwvaDI+XHJcblx0XHRcclxuXHRcdFxyXG5cdDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb3NpdGVGdW5jdGlvbnNcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9GdW5jdGlvbnMvQ29tcG9zaXRlRnVuY3Rpb25zL0NvbXBvc2l0ZUZ1bmN0aW9ucy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRleCBhcyBUIH0gZnJvbSAnTWF0aEpheCdcclxuaW1wb3J0IHsgUXVlc3Rpb24sIERlc2NyaXB0aW9uLCBQYXJ0LCBOb3RlIH0gZnJvbSAnY29tcG9uZW50cy9tYXJrdXAvd29ya3NoZWV0J1xyXG5cclxuY29uc3QgSW52ZXJzZUZ1bmN0aW9ucyA9ICgpID0+IChcclxuXHQ8ZGl2IGNsYXNzTmFtZT0nTWF0aE1hcmt1cCc+XHJcblx0XHQ8aDE+SW52ZXJzZSBGdW5jdGlvbnM8L2gxPlxyXG5cdFx0XHJcblx0XHQ8aDI+UXVlc3Rpb25zPC9oMj5cclxuXHRcdFxyXG5cdFx0PE5vdGU+XHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRBIDxzdHJvbmc+ZnVuY3Rpb248L3N0cm9uZz4gPFQgdD0nZih4KScvPiBoYXMgYW4gPHN0cm9uZz5pbnZlcnNlIGZ1bmN0aW9uPC9zdHJvbmc+LCA8VCB0PSdmXnstMX0oeCknLz4sIGlmIGFuZCBvbmx5IGlmIGl0IGlzIG9uZS10by1vbmUuXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRBIGZ1bmN0aW9uIGFuZCBpdHMgaW52ZXJzZSBhcmUgcmVsYXRlZCBnZW9tZXRyaWNhbGx5IGJ5IGEgcmVmbGVjdCBhbG9uZyB0aGUgbGluZSA8VCB0PSd5ID0geCcvPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0QXMgYSByZXN1bHQsIDxUIHQ9J1xcdGV4dHtkb21haW59KGYpID0gXFx0ZXh0e3JhbmdlfShmXnstMX0pJy8+IGFuZCA8VCB0PSdcXHRleHR7cmFuZ2V9KGYpID0gXFx0ZXh0e2RvbWFpbn0oZl57LTF9KScvPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L05vdGU+XHJcblx0XHRcclxuXHRcdDxRdWVzdGlvbiBwYXJ0c1BlclJvdz17Mn0gbnVtYmVyPXsxfT5cclxuXHRcdFx0PERlc2NyaXB0aW9uPlxyXG5cdFx0XHRcdEZvciBlYWNoIG9mIHRoZSBmb2xsb3dpbmcgPHN0cm9uZz5mdW5jdGlvbnM8L3N0cm9uZz4gZmluZCB0aGUgaW52ZXJzZSA8VCB0PSdmXnstMX0nLz4gYW5kIHNrZXRjaCBib3RoIDxUIHQ9J2YnLz4gYW5kIDxUIHQ9J2Zeey0xfScvPi5cclxuXHRcdFx0XHQ8ZGl2Pig8ZW0+Q29udGVtcGxhdGU6PC9lbT4gSG93IGRvZXMgdGhlIGludmVyc2UgY2hhbmdlIHdoZW4geW91IHRyYW5zZm9ybSB0aGUgb3JpZ2luYWwgZnVuY3Rpb24/KTwvZGl2PlxyXG5cdFx0XHQ8L0Rlc2NyaXB0aW9uPlxyXG5cdFx0XHQ8UGFydCBudW1iZXI9J2EnPjxUIHQ9J2YoeCkgPSB4Jy8+PC9QYXJ0PlxyXG5cdFx0XHQ8UGFydCBudW1iZXI9J2InPjxUIHQ9J2YoeCkgPSAyeCcvPjwvUGFydD5cclxuXHRcdFx0PFBhcnQgbnVtYmVyPSdjJz48VCB0PSdmKHgpID0geCArIDEnLz48L1BhcnQ+XHJcblx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+PFQgdD0nZih4KSA9ICh4LTEpXjMgKyAyJy8+PC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PE5vdGU+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdElmIGEgZnVuY3Rpb24sIDxUIHQ9J2YnLz4sIGhhcyBhbiBpbnZlcnNlLCA8VCB0PSdmXnstMX0nLz4sIHRoZW4sXHJcblx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0PGxpPjxUIHQ9JyhmIFxcY2lyYyBmXnstMX0pKHgpID0geCcvPiBmb3IgYWxsIDxUIHQ9J3ggXFxpbiBcXHRleHR7ZG9tYWlufShmXnstMX0pJy8+PC9saT5cclxuXHRcdFx0XHRcdDxsaT48VCB0PScoZl57LTF9IFxcY2lyYyBmKSh4KSA9IHgnLz4gZm9yIGFsbCA8VCB0PSd4IFxcaW4gXFx0ZXh0e2RvbWFpbn0oZiknLz48L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvcD5cclxuXHRcdDwvTm90ZT5cclxuXHRcdFxyXG5cdFx0PFF1ZXN0aW9uIHBhcnRzUGVyUm93PXsyfSBudW1iZXI9ezJ9PlxyXG5cdFx0XHQ8RGVzY3JpcHRpb24+XHJcblx0XHRcdFx0Rm9yIGVhY2ggb2YgdGhlIGZvbGxvd2luZyA8c3Ryb25nPmZ1bmN0aW9uczwvc3Ryb25nPiBmaW5kIHRoZSBpbnZlcnNlIDxUIHQ9J2Zeey0xfScvPiwgYW5kIHNrZXRjaCBib3RoIDxUIHQ9J2YnLz4gYW5kIDxUIHQ9J2Zeey0xfScvPi4gQWxzbyB3cml0ZSBkb3duIHRoZSBkb21haW4gYW5kIHJhbmdlcyBvZiBlYWNoIGZ1bmN0aW9uIGFuZCBpdHMgaW52ZXJzZS5cclxuXHRcdFx0PC9EZXNjcmlwdGlvbj5cclxuXHRcdFx0PFBhcnQgbnVtYmVyPSdhJz48VCB0PSdmKHgpID0gXFxzcXJ0e3h9Jy8+PC9QYXJ0PlxyXG5cdFx0XHQ8UGFydCBudW1iZXI9J2InPjxUIHQ9J2Y6IFswLCBcXGluZnR5KSwgZih4KSA9IHheMicvPjwvUGFydD5cclxuXHRcdDwvUXVlc3Rpb24+XHJcblx0XHRcclxuXHRcdDxOb3RlPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRBbnkgZ3JhcGggb2YgYSByZWxhdGlvbiBtYXkgYmUgaW52ZXJ0ZWQgYnkgYSByZWZsZWN0aW9uIGFsb25nIHRoZSBsaW5lIDxUIHQ9J3kgPSB4Jy8+LiBJZiB0aGUgb3JpZ2luYWwgcmVsYXRpb24gaXMgbm90IFt4XS10by1beV0gdGhlbiB0aGUgaW52ZXJzZSB3aWxsIGJlIFt5XS10by1beF0uXHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0U29tZSBrZXkgcG9pbnRzIHRvIG5vdGU6XHJcblx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0PGxpPkEgb25lLXRvLW1hbnkgPHN0cm9uZz5mdW5jdGlvbjwvc3Ryb25nPiBoYXMgYSBtYW55LXRvLW9uZSBpbnZlcnNlIDxzdHJvbmc+cmVsYXRpb248L3N0cm9uZz48L2xpPlxyXG5cdFx0XHRcdFx0PGxpPkEgbWFueS10by1vbmUgPHN0cm9uZz5yZWxhdGlvbjwvc3Ryb25nPiBoYXMgYSBtYW55LXRvLW9uZSBpbnZlcnNlIDxzdHJvbmc+ZnVuY3Rpb248L3N0cm9uZz48L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvcD5cclxuXHRcdDwvTm90ZT5cclxuXHRcdFxyXG5cdFx0PFF1ZXN0aW9uIHBhcnRzUGVyUm93PXsyfSBudW1iZXI9ezN9PlxyXG5cdFx0XHQ8RGVzY3JpcHRpb24+XHJcblx0XHRcdFx0Rm9yIGVhY2ggb2YgdGhlIGZvbGxvd2luZyA8c3Ryb25nPnJlbGF0aW9uczwvc3Ryb25nPiBmaW5kIHRoZSBpbnZlcnNlIDxUIHQ9J2Zeey0xfScvPiwgYW5kIHNrZXRjaCBib3RoIDxUIHQ9J2YnLz4gYW5kIDxUIHQ9J2Zeey0xfScvPi4gQWxzbyB3cml0ZSBkb3duIHRoZSBbeF0tdG8tW3ldIHJlbGF0aW9uc2hpcCBvZiBlYWNoIHJlbGF0aW9uIGFuZCBpdHMgaW52ZXJzZS5cclxuXHRcdFx0XHQ8ZGl2Pig8ZW0+Tm90ZTo8L2VtPiBGdW5jdGlvbnMgYXJlIHJlbGF0aW9ucy4pPC9kaXY+XHJcblx0XHRcdDwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0IG51bWJlcj0nYSc+PFQgdD0nZih4KSA9IFxcc3FydHt4fScvPjwvUGFydD5cclxuXHRcdFx0PFBhcnQgbnVtYmVyPSdiJz48VCB0PSdmKHgpID0geF4yJy8+PC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PE5vdGU+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdFdlIGNvdWxkIGZpbmQgdGhlIGludGVyc2VjdGlvbiBvZiBhIGZ1bmN0aW9uLCA8VCB0PSdmJy8+LCBhbmQgaXRzIGludmVyc2UsIDxUIHQ9J2Zeey0xfScvPiBqdXN0IGxpa2Ugd2Ugd291bGQgd2l0aCBhbnkgb3RoZXIgZnVuY3Rpb25zIGJ5IHNvbHZpbmcgPFQgdD0nZih4KSA9IGZeey0xfSh4KScvPi5cclxuXHRcdFx0PC9wPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRIb3dldmVyLCB3ZSBjYW4gdXNlIHRoZSBwcm9wZXJ0eSB0aGF0IGEgZnVuY3Rpb24gYW5kIGl0cyBpbnZlcnNlIGFyZSByZWxhdGVkIGJ5IGEgcmVmbGVjdGlvbiBhbG9uZyA8VCB0PSd5ID0geCcvPiB0byBzZWUgdGhhdCB3ZSBvbmx5IG5lZWQgdG8gc29sdmUgZWl0aGVyIDxUIHQ9J2YoeCkgPSB4Jy8+IG9yXHQ8VCB0PSdmXnstMX0oeCkgPSB4Jy8+LlxyXG5cdFx0XHQ8L3A+XHJcblx0XHQ8L05vdGU+XHJcblx0XHRcclxuXHRcdDxRdWVzdGlvbiBwYXJ0c1BlclJvdz17MX0gbnVtYmVyPXszfT5cclxuXHRcdFx0PERlc2NyaXB0aW9uPlxyXG5cdFx0XHRcdEZvciBlYWNoIG9mIHRoZSBmb2xsb3dpbmcgPHN0cm9uZz5yZWxhdGlvbnM8L3N0cm9uZz4gZmluZCB0aGUgcG9pbnRzIG9mIGludGVyc2VjdGlvbiB3aXRoIGl0cyBpbnZlcnNlIGZpcnN0bHkgYnkgc29sdmluZyA8VCB0PSdmKHgpID0gZl57LTF9KHgpJy8+LCB0aGVuIGJ5IHNvbHZpbmcgZWl0aGVyIDxUIHQ9J2YoeCkgPSB4Jy8+IG9yXHQ8VCB0PSdmXnstMX0oeCkgPSB4Jy8+LlxyXG5cdFx0XHQ8L0Rlc2NyaXB0aW9uPlxyXG5cdFx0XHQ8UGFydCBudW1iZXI9J2EnPjxUIHQ9J2YoeCkgPSAyeCArIDEnLz48L1BhcnQ+XHJcblx0XHRcdDxQYXJ0IG51bWJlcj0nYic+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdmKHgpID0geF4yJy8+PC9kaXY+XHJcblx0XHRcdFx0PGRpdj4oPGVtPk5vdGU6PC9lbT4gVGhpcyBpcyBhIG9uZS10by1tYW55IGZ1bmN0aW9uIHNvIGl0cyBpbnZlcnNlIGlzIGEgbWFueS10by1vbmUgcmVsYXRpb24uIFlvdSBtYXkgd2FudCB0byB3cml0ZSB0aGUgcmVsYXRpb24gYXMgdHdvIHNlcGFyYXRlIGZ1bmN0aW9ucyB3aGVuIHNvbHZpbmcgPFQgdD0nZih4KSA9IGZeey0xfSh4KScvPi4pPC9kaXY+XHJcblx0XHRcdDwvUGFydD5cclxuXHRcdDwvUXVlc3Rpb24+XHJcblx0XHRcclxuXHRcdDxRdWVzdGlvbiBwYXJ0c1BlclJvdz17Mn0gbnVtYmVyPXs0fT5cclxuXHRcdFx0PERlc2NyaXB0aW9uPlxyXG5cdFx0XHRcdEZvciBlYWNoIG9mIHRoZSBmb2xsb3dpbmcgPHN0cm9uZz5mdW5jdGlvbnM8L3N0cm9uZz4gZmluZCB0aGUgcG9pbnRzIG9mIGludGVyc2VjdGlvbiB3aXRoIGl0cyBpbnZlcnNlIGJ5IHNvbHZpbmcgZWl0aGVyIDxUIHQ9J2YoeCkgPSB4Jy8+IG9yIDxUIHQ9J2Zeey0xfSh4KSA9IHgnLz4uXHJcblx0XHRcdDwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0IG51bWJlcj0nYSc+PFQgdD0nZih4KSA9IHheMiArIDV4ICsgNCcvPjwvUGFydD5cclxuXHRcdFx0PFBhcnQgbnVtYmVyPSdiJz48ZGl2PjxUIHQ9J2YoeCkgPSBcXHNxcnR7eH0nLz48L2Rpdj48L1BhcnQ+XHJcblx0XHQ8L1F1ZXN0aW9uPlxyXG5cdFx0XHJcblx0XHQ8aDI+QXNzaWdubWVudDwvaDI+XHJcblx0XHRcclxuXHRcdDxRdWVzdGlvbiBwYXJ0c1BlclJvdz17M30gbnVtYmVyPScxJz5cclxuXHRcdFx0PERlc2NyaXB0aW9uPkRldGVybWluZSB0aGUgW3hdLXRvLVt5XSByZWxhdGlvbnNoaXBzIG9mIHRoZSBmb2xsb3dpbmcgcmVsYXRpb25zLjwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0PjxUIHQ9JzJ4KzEnLz48L1BhcnQ+XHJcblx0XHRcdDxQYXJ0PjxUIHQ9J3heMicvPjwvUGFydD5cclxuXHRcdFx0PFBhcnQ+PFQgdD0neF4yICsgM3ggKyA3Jy8+PC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD48VCB0PSdcXGZyYWN7MX17eH0nLz48L1BhcnQ+XHJcblx0XHRcdDxQYXJ0PjxUIHQ9J1xcZnJhY3sxfXt4XjJ9Jy8+PC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD48VCB0PSdcXHNpbih4KScvPjwvUGFydD5cclxuXHRcdFx0PFBhcnQ+XHJcblx0XHRcdFx0PGRpdj48VCB0PSd4XjIgKyB5XjIgPSAxJy8+PC9kaXY+XHJcblx0XHRcdFx0PGRpdj4oPGVtPkhpbnQ6PC9lbT4gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIHRvIGEgcG9pbnQgPFQgdD0nKHgseSknLz4/IENhbiB5b3UgZ3JhcGggdGhpcyByZWxhdGlvbj8pPC9kaXY+XHJcblx0XHRcdDwvUGFydD5cclxuXHRcdDwvUXVlc3Rpb24+XHJcblx0XHRcclxuXHRcdDxRdWVzdGlvbiBudW1iZXI9JzInPlxyXG5cdFx0XHQ8RGVzY3JpcHRpb24+TGV0IDxUIHQ9J2Y6IFthLFxcaW5mdHkpIFxccmlnaHRhcnJvdyBcXG1hdGhiYntSfSwgZih4KSA9IHheMiAtIDZ4ICsgOScvPjwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0PkZpbmQgdGhlIHNtYWxsZXN0IHZhbHVlIG9mIDxUIHQ9J2EnLz4gc3VjaCB0aGF0IDxUIHQ9J2Zeey0xfSh4KScvPiBleGlzdHMuPC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5GaW5kIDxUIHQ9J2Zeey0xfSh4KScvPi48L1BhcnQ+XHJcblx0XHQ8L1F1ZXN0aW9uPlxyXG5cdFx0XHJcblx0XHQ8UXVlc3Rpb24gbnVtYmVyPSczJz5cclxuXHRcdFx0PERlc2NyaXB0aW9uPkxldCA8VCB0PSdmKHgpID0gXFxmcmFje3ggKyA0fXszeCAtIDF9Jy8+PC9EZXNjcmlwdGlvbj5cclxuXHRcdFx0PFBhcnQ+U2hvdyB0aGF0IDxUIHQ9J2YgXFxjaXJjIGYnLz4gaXMgZGVmaW5lZC48L1BhcnQ+XHJcblx0XHRcdDxQYXJ0PkZpbmQgPFQgdD0nZiBcXGNpcmMgZicvPi48L1BhcnQ+XHJcblx0XHRcdDxQYXJ0PlxyXG5cdFx0XHRcdDxkaXY+V3JpdGUgZG93biA8VCB0PSdmXnstMX0oeCknLz4uPC9kaXY+XHJcblx0XHRcdFx0PGRpdj48ZW0+TW9iaXVzIFRyYW5zZm9ybTwvZW0+PC9kaXY+XHJcblx0XHRcdDwvUGFydD5cclxuXHRcdDwvUXVlc3Rpb24+XHJcblx0XHRcclxuXHRcdDxRdWVzdGlvbiBudW1iZXI9JzQnPlxyXG5cdFx0XHQ8RGVzY3JpcHRpb24+TGV0IDxUIHQ9J2Y6IFsyLCBcXGluZnR5KSBcXHJpZ2h0YXJyb3cgXFxtYXRoYmJ7Un0sIGYoeCkgPSBcXHNxcnR7eCAtIDJ9Jy8+PC9EZXNjcmlwdGlvbj5cclxuXHRcdFx0PFBhcnQ+RmluZCA8VCB0PSdmXnstMX0oeCknLz4uPC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5HcmFwaCA8VCB0PSdmXnstMX0oeCknLz4uPC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5GaW5kIDxUIHQ9J2goeCkgPSBmXnstMX0oZihcXGZyYWN7eCszfXsyfSkpJy8+IGFuZCBzdGF0ZSBpdHMgbWF4aW1hbCBkb21haW4uPC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5JcyA8VCB0PSdmXnstMX0oeCknLz4gb2RkLCBldmVuLCBvciBuZWl0aGVyPzwvUGFydD5cclxuXHRcdFx0PFBhcnQ+RmluZCA8VCB0PSdmXnstMX0oLWYoXFxmcmFje3grM317Mn0pKScvPi48L1BhcnQ+XHJcblx0XHQ8L1F1ZXN0aW9uPlxyXG5cdFx0XHJcblx0XHQ8aDI+RXh0cmE8L2gyPlxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZlcnNlRnVuY3Rpb25zXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvRnVuY3Rpb25zL0ludmVyc2VGdW5jdGlvbnMvSW52ZXJzZUZ1bmN0aW9ucy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRleCwgVGV4TWFya3VwIH0gZnJvbSAnTWF0aEpheCdcclxuXHJcbmNvbnN0IFJlY2lwcm9jYWxGdW5jdGlvbnMgPSAoKSA9PiAoXHJcblx0PGRpdiBjbGFzc05hbWU9J01hdGhNYXJrdXAnPlxyXG5cdFx0PGgxPlJlY2lwcm9jYWwgRnVuY3Rpb25zPC9oMT5cclxuXHQ8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjaXByb2NhbEZ1bmN0aW9uc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL0Z1bmN0aW9ucy9SZWNpcHJvY2FsRnVuY3Rpb25zL1JlY2lwcm9jYWxGdW5jdGlvbnMuanN4IiwiZXhwb3J0IEFic29sdXRlVmFsdWVGdW5jdGlvbnMgZnJvbSAnLi9BYnNvbHV0ZVZhbHVlRnVuY3Rpb25zL0Fic29sdXRlVmFsdWVGdW5jdGlvbnMnXHJcbmV4cG9ydCBSZWNpcHJvY2FsRnVuY3Rpb25zIGZyb20gJy4vUmVjaXByb2NhbEZ1bmN0aW9ucy9SZWNpcHJvY2FsRnVuY3Rpb25zJ1xyXG5leHBvcnQgQ29tcG9zaXRlRnVuY3Rpb25zIGZyb20gJy4vQ29tcG9zaXRlRnVuY3Rpb25zL0NvbXBvc2l0ZUZ1bmN0aW9ucydcclxuZXhwb3J0IEludmVyc2VGdW5jdGlvbnMgZnJvbSAnLi9JbnZlcnNlRnVuY3Rpb25zL0ludmVyc2VGdW5jdGlvbnMnXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvRnVuY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUZXggYXMgVCwgVGV4TWFya3VwIH0gZnJvbSAnTWF0aEpheCdcclxuXHJcbmNvbnN0IFNldEJ1aWxkZXIgPSAoKSA9PiAoXHJcblx0PGRpdiBjbGFzc05hbWU9J01hdGhNYXJrdXAnPlxyXG5cdFx0PGgxPlNldCBCdWlsZGVyIE5vdGF0aW9uPC9oMT5cclxuXHRcdDxwPlNldCBidWlsZGVyIG5vdGF0aW9uIGlzIGEgd2F5IG9mIGNvbXBhY3RseSBkZXNjcmliaW5nIGEgc2V0PC9wPlxyXG5cdFx0PGgyPlF1ZXN0aW9uczwvaDI+XHJcblx0XHRcclxuXHQ8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0QnVpbGRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL1NldHMvU2V0QnVpbGRlci9TZXRCdWlsZGVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVGV4IGFzIFQsIFRleE1hcmt1cCB9IGZyb20gJ01hdGhKYXgnXHJcblxyXG5jb25zdCBTZXROb3RhdGlvbiA9ICgpID0+IChcclxuXHQ8ZGl2IGNsYXNzTmFtZT0nTWF0aE1hcmt1cCc+XHJcblx0XHQ8aDE+U2V0IE5vdGF0aW9uPC9oMT5cclxuXHRcdDx0YWJsZT5cclxuXHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cclxuXHRcdFx0XHRcdDx0aD5TeW1ib2w8L3RoPlxyXG5cdFx0XHRcdFx0PHRoPk1lYW5pbmc8L3RoPlxyXG5cdFx0XHRcdFx0PHRoPkV4YW1wbGU8L3RoPlxyXG5cdFx0XHRcdDwvdHI+XHRcdFxyXG5cdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPlNldDwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7XFx9JyAvPjwvdGQ+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHRkPmEgY29sbGVjdGlvbiBvZiBlbGVtZW50czwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7MSwyLDMsNFxcfScgLz48L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPlVuaW9uPC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdBIFxcY3VwIEInIC8+PC90ZD5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dGQ+ZWxlbWVudHMgaW4gZWl0aGVyIDxUIHQ9J0EnIC8+IG9yIDxUIHQ9J0InIC8+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdcXHsxLDIsM1xcfSBcXGN1cCBcXHs0LDUsNlxcfSA9IFxcezEsMiwzLDQsNSw2XFx9JyAvPjwvdGQ+XHJcblx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8dGQ+SW50ZXJzZWN0PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdBIFxcY2FwIEInIC8+PC90ZD5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dGQ+ZWxlbWVudHMgaW4gYm90aCA8VCB0PSdBJyAvPiBhbmQgPFQgdD0nQicgLz48L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J1xcezEsMiwzXFx9IFxcY2FwIFxcezIsMyw0XFx9ID0gXFx7MiwzXFx9JyAvPjwvdGQ+XHJcblx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8dGQ+U3Vic2V0PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdBIFxcY2FwIEInIC8+PC90ZD5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dGQ+ZWxlbWVudHMgaW4gYm90aCA8VCB0PSdBJyAvPiBhbmQgPFQgdD0nQicgLz48L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J1xcezEsMiwzXFx9IFxcY2FwIFxcezIsMyw0XFx9ID0gXFx7MiwzXFx9JyAvPjwvdGQ+XHJcblx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8dGQ+UHJvcGVyIFN1YnNldDwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nQSBcXGNhcCBCJyAvPjwvdGQ+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHRkPmVsZW1lbnRzIGluIGJvdGggPFQgdD0nQScgLz4gYW5kIDxUIHQ9J0InIC8+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdcXHsxLDIsM1xcfSBcXGNhcCBcXHsyLDMsNFxcfSA9IFxcezIsM1xcfScgLz48L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPk5vdCBhIFN1YnNldDwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nQSBcXGNhcCBCJyAvPjwvdGQ+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHRkPmVsZW1lbnRzIGluIGJvdGggPFQgdD0nQScgLz4gYW5kIDxUIHQ9J0InIC8+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdcXHsxLDIsM1xcfSBcXGNhcCBcXHsyLDMsNFxcfSA9IFxcezIsM1xcfScgLz48L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPlN1cGVyc2V0PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdBIFxcY2FwIEInIC8+PC90ZD5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dGQ+ZWxlbWVudHMgaW4gYm90aCA8VCB0PSdBJyAvPiBhbmQgPFQgdD0nQicgLz48L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J1xcezEsMiwzXFx9IFxcY2FwIFxcezIsMyw0XFx9ID0gXFx7MiwzXFx9JyAvPjwvdGQ+XHJcblx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8dGQ+UHJvcGVyIFN1cGVyc2V0PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdBIFxcY2FwIEInIC8+PC90ZD5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dGQ+ZWxlbWVudHMgaW4gYm90aCA8VCB0PSdBJyAvPiBhbmQgPFQgdD0nQicgLz48L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J1xcezEsMiwzXFx9IFxcY2FwIFxcezIsMyw0XFx9ID0gXFx7MiwzXFx9JyAvPjwvdGQ+XHJcblx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8dGQ+Tm90IGEgU3VwZXJzZXQ8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J0EgXFxjYXAgQicgLz48L3RkPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZD5lbGVtZW50cyBpbiBib3RoIDxUIHQ9J0EnIC8+IGFuZCA8VCB0PSdCJyAvPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7MSwyLDNcXH0gXFxjYXAgXFx7MiwzLDRcXH0gPSBcXHsyLDNcXH0nIC8+PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0ZD5FbGVtZW50IG9mIChpbik8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J0EgXFxjYXAgQicgLz48L3RkPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZD5lbGVtZW50cyBpbiBib3RoIDxUIHQ9J0EnIC8+IGFuZCA8VCB0PSdCJyAvPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7MSwyLDNcXH0gXFxjYXAgXFx7MiwzLDRcXH0gPSBcXHsyLDNcXH0nIC8+PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0ZD5Ob3QgYW4gZWxlbWVudCBvZjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nQSBcXGNhcCBCJyAvPjwvdGQ+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHRkPmVsZW1lbnRzIGluIGJvdGggPFQgdD0nQScgLz4gYW5kIDxUIHQ9J0InIC8+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdcXHsxLDIsM1xcfSBcXGNhcCBcXHsyLDMsNFxcfSA9IFxcezIsM1xcfScgLz48L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPkNvbXBsZW1lbnQ8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J0EgXFxjYXAgQicgLz48L3RkPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZD5lbGVtZW50cyBpbiBib3RoIDxUIHQ9J0EnIC8+IGFuZCA8VCB0PSdCJyAvPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7MSwyLDNcXH0gXFxjYXAgXFx7MiwzLDRcXH0gPSBcXHsyLDNcXH0nIC8+PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0ZD5FeGNsdXNpb248L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J0EgXFxjYXAgQicgLz48L3RkPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZD5lbGVtZW50cyBpbiBib3RoIDxUIHQ9J0EnIC8+IGFuZCA8VCB0PSdCJyAvPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7MSwyLDNcXH0gXFxjYXAgXFx7MiwzLDRcXH0gPSBcXHsyLDNcXH0nIC8+PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0ZD5FbXB0eSBTZXQ8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J0EgXFxjYXAgQicgLz48L3RkPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZD5lbGVtZW50cyBpbiBib3RoIDxUIHQ9J0EnIC8+IGFuZCA8VCB0PSdCJyAvPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7MSwyLDNcXH0gXFxjYXAgXFx7MiwzLDRcXH0gPSBcXHsyLDNcXH0nIC8+PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0ZD5FcXVhbGl0eTwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nQSBcXGNhcCBCJyAvPjwvdGQ+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHRkPmVsZW1lbnRzIGluIGJvdGggPFQgdD0nQScgLz4gYW5kIDxUIHQ9J0InIC8+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdcXHsxLDIsM1xcfSBcXGNhcCBcXHsyLDMsNFxcfSA9IFxcezIsM1xcfScgLz48L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPk5hdHVyYWwgTnVtYmVyczwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nQSBcXGNhcCBCJyAvPjwvdGQ+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHRkPmVsZW1lbnRzIGluIGJvdGggPFQgdD0nQScgLz4gYW5kIDxUIHQ9J0InIC8+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdcXHsxLDIsM1xcfSBcXGNhcCBcXHsyLDMsNFxcfSA9IFxcezIsM1xcfScgLz48L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPkludGVnZXJzPC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdBIFxcY2FwIEInIC8+PC90ZD5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dGQ+ZWxlbWVudHMgaW4gYm90aCA8VCB0PSdBJyAvPiBhbmQgPFQgdD0nQicgLz48L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J1xcezEsMiwzXFx9IFxcY2FwIFxcezIsMyw0XFx9ID0gXFx7MiwzXFx9JyAvPjwvdGQ+XHJcblx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8dGQ+UmF0aW9uYWwgTnVtYmVyczwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nQSBcXGNhcCBCJyAvPjwvdGQ+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHRkPmVsZW1lbnRzIGluIGJvdGggPFQgdD0nQScgLz4gYW5kIDxUIHQ9J0InIC8+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdcXHsxLDIsM1xcfSBcXGNhcCBcXHsyLDMsNFxcfSA9IFxcezIsM1xcfScgLz48L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPlJlYWwgTnVtYmVyczwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nQSBcXGNhcCBCJyAvPjwvdGQ+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHRkPmVsZW1lbnRzIGluIGJvdGggPFQgdD0nQScgLz4gYW5kIDxUIHQ9J0InIC8+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdcXHsxLDIsM1xcfSBcXGNhcCBcXHsyLDMsNFxcfSA9IFxcezIsM1xcfScgLz48L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPkNvbXBsZXggTnVtYmVyczwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nQSBcXGNhcCBCJyAvPjwvdGQ+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHRkPmVsZW1lbnRzIGluIGJvdGggPFQgdD0nQScgLz4gYW5kIDxUIHQ9J0InIC8+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdcXHsxLDIsM1xcfSBcXGNhcCBcXHsyLDMsNFxcfSA9IFxcezIsM1xcfScgLz48L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdDwvdGJvZHk+XHJcblx0XHQ8L3RhYmxlPlxyXG5cdDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXROb3RhdGlvblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL1NldHMvU2V0Tm90YXRpb24vU2V0Tm90YXRpb24uanN4IiwiZXhwb3J0IFNldE5vdGF0aW9uIGZyb20gJy4vU2V0Tm90YXRpb24vU2V0Tm90YXRpb24nXHJcbmV4cG9ydCBTZXRCdWlsZGVyIGZyb20gJy4vU2V0QnVpbGRlci9TZXRCdWlsZGVyJ1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvU2V0cy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCB7IFdPUktTSEVFVFNfVVJMIH0gZnJvbSAnY29uZmlnL2NvbnN0YW50cydcclxuXHJcbmltcG9ydCB7XHJcblx0QWJzb2x1dGVWYWx1ZUZ1bmN0aW9ucyxcclxuXHRSZWNpcHJvY2FsRnVuY3Rpb25zLFxyXG5cdENvbXBvc2l0ZUZ1bmN0aW9ucyxcclxuXHRJbnZlcnNlRnVuY3Rpb25zLFxyXG59IGZyb20gJ2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9GdW5jdGlvbnMnXHJcblxyXG5pbXBvcnQgeyBcclxuXHRDaXJjbGVzRWxsaXBzZXNBbmRIeXBlcmJvbGFzLFxyXG59IGZyb20gJ2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9Db29yZGluYXRlR2VvbWV0cnknXHJcblxyXG5pbXBvcnQgeyBcclxuXHRTZXROb3RhdGlvbixcclxuXHRTZXRCdWlsZGVyLFxyXG59IGZyb20gJ2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9TZXRzJ1xyXG5cclxuY29uc3Qgd29ya3NoZWV0Um91dGVzID0gKFxyXG5cdDxSb3V0ZSBwYXRoPXtXT1JLU0hFRVRTX1VSTH0+XHJcblx0XHQ8Um91dGUgcGF0aD0nU2V0cy9TZXROb3RhdGlvbicgY29tcG9uZW50PXtTZXROb3RhdGlvbn0gLz5cdFxyXG5cdFx0PFJvdXRlIHBhdGg9J1NldHMvU2V0QnVpbGRlcicgY29tcG9uZW50PXtTZXRCdWlsZGVyfSAvPlx0XHJcblxyXG5cdFx0PFJvdXRlIHBhdGg9J0Z1bmN0aW9ucy9BYnNvbHV0ZVZhbHVlRnVuY3Rpb25zJyBjb21wb25lbnQ9e0Fic29sdXRlVmFsdWVGdW5jdGlvbnN9IC8+XHRcclxuXHRcdDxSb3V0ZSBwYXRoPSdGdW5jdGlvbnMvUmVjaXByb2NhbEZ1bmN0aW9ucycgY29tcG9uZW50PXtSZWNpcHJvY2FsRnVuY3Rpb25zfSAvPlxyXG5cdFx0PFJvdXRlIHBhdGg9J0Z1bmN0aW9ucy9Db21wb3NpdGVGdW5jdGlvbnMnIGNvbXBvbmVudD17Q29tcG9zaXRlRnVuY3Rpb25zfSAvPlxyXG5cdFx0PFJvdXRlIHBhdGg9J0Z1bmN0aW9ucy9JbnZlcnNlRnVuY3Rpb25zJyBjb21wb25lbnQ9e0ludmVyc2VGdW5jdGlvbnN9IC8+XHJcblxyXG5cdFx0PFJvdXRlIHBhdGg9J0Nvb3JkaW5hdGVHZW9tZXRyeS9DaXJjbGVzRWxsaXBzZXNBbmRIeXBlcmJvbGFzJyBjb21wb25lbnQ9e0NpcmNsZXNFbGxpcHNlc0FuZEh5cGVyYm9sYXN9IC8+XHRcclxuXHQ8L1JvdXRlPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3b3Jrc2hlZXRSb3V0ZXNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbmZpZy9yb3V0ZXMvd29ya3NoZWV0cy5qc3giLCJpbXBvcnQgeyBmaXJlYmFzZUF1dGggfSBmcm9tICdjb25maWcvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBmZXRjaFVzZXIgfSBmcm9tICdoZWxwZXJzL2FwaSdcclxuXHJcbi8vIFJlZ2lzdGVyIHVzZXIgaW4gZGF0YWJhc2UgdXNpbmcgZmlyZWJhc2UsIHJldHVybnMgcHJvbWlzZSBmb3IgY2hhaW5pbmdcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihlbWFpbCwgcGFzc3dvcmQpIHtcclxuXHRyZXR1cm4gZmlyZWJhc2VBdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuXHRcdC50aGVuKCh7IHVpZCB9KSA9PiB1aWQpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWdub3V0KCkge1xyXG5cdHJldHVybiBmaXJlYmFzZUF1dGgoKS5zaWduT3V0KClcclxuXHRcdC5jYXRjaChlcnJvciA9PiBjb25zb2xlLndhcm4oZXJyb3IpKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbmluKGVtYWlsLCBwYXNzd29yZCkge1xyXG5cdHJldHVybiBmaXJlYmFzZUF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcblx0XHQudGhlbigoeyB1aWQgfSkgPT4gZmV0Y2hVc2VyKHVpZCkpXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2hlbHBlcnMvYXV0aC5qcyIsImZ1bmN0aW9uIHZhbE9yTnVsbCh2YWwpIHtcclxuXHRyZXR1cm4gdmFsID8gdmFsIDogbnVsbFxyXG59XHJcblxyXG4vKlxyXG5cdFRha2VzIGRldGFpbHMgZnJvbSBmb3JtIHNpbmdsZSBsYXllciBrZXktdmFsdWUgcGFpcnMgYW5kIGZvcm1hdHMgaW50byBhIHVzZXIgb2JqZWN0XHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVc2VyRGV0YWlscyhkZXRhaWxzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGluZm86IHtcclxuXHRcdFx0dWlkOiB2YWxPck51bGwoZGV0YWlscy51aWQpLFxyXG5cdFx0XHRuYW1lOiB2YWxPck51bGwoZGV0YWlscy5uYW1lKSxcclxuXHRcdFx0ZW1haWw6IHZhbE9yTnVsbChkZXRhaWxzLmVtYWlsKSxcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2hlbHBlcnMvZm9ybWF0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vc3R5bGVzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvbWFya3VwL3dvcmtzaGVldC9Ob3RlL3N0eWxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL21hcmt1cC93b3Jrc2hlZXQvcXVlc3Rpb24vc3R5bGVzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZmlyZWJhc2UgPSByZXF1aXJlKCcuL2FwcCcpO1xuKGZ1bmN0aW9uKCl7XG4vKiEgQGxpY2Vuc2UgRmlyZWJhc2UgdjMuNi41XG4gICAgQnVpbGQ6IDMuNi41LXJjLjFcbiAgICBUZXJtczogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL3Rlcm1zLyAqL1xuKGZ1bmN0aW9uKCl7dmFyIGgsYWE9YWF8fHt9LGw9dGhpcyxiYT1mdW5jdGlvbigpe30sbT1mdW5jdGlvbihhKXt2YXIgYj10eXBlb2YgYTtpZihcIm9iamVjdFwiPT1iKWlmKGEpe2lmKGEgaW5zdGFuY2VvZiBBcnJheSlyZXR1cm5cImFycmF5XCI7aWYoYSBpbnN0YW5jZW9mIE9iamVjdClyZXR1cm4gYjt2YXIgYz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSk7aWYoXCJbb2JqZWN0IFdpbmRvd11cIj09YylyZXR1cm5cIm9iamVjdFwiO2lmKFwiW29iamVjdCBBcnJheV1cIj09Y3x8XCJudW1iZXJcIj09dHlwZW9mIGEubGVuZ3RoJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5zcGxpY2UmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnByb3BlcnR5SXNFbnVtZXJhYmxlJiYhYS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcInNwbGljZVwiKSlyZXR1cm5cImFycmF5XCI7aWYoXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT1jfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5jYWxsJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5wcm9wZXJ0eUlzRW51bWVyYWJsZSYmXG4hYS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcImNhbGxcIikpcmV0dXJuXCJmdW5jdGlvblwifWVsc2UgcmV0dXJuXCJudWxsXCI7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PWImJlwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmNhbGwpcmV0dXJuXCJvYmplY3RcIjtyZXR1cm4gYn0sY2E9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hfSxkYT1mdW5jdGlvbihhKXtyZXR1cm5cImFycmF5XCI9PW0oYSl9LGVhPWZ1bmN0aW9uKGEpe3ZhciBiPW0oYSk7cmV0dXJuXCJhcnJheVwiPT1ifHxcIm9iamVjdFwiPT1iJiZcIm51bWJlclwiPT10eXBlb2YgYS5sZW5ndGh9LHA9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGF9LGZhPWZ1bmN0aW9uKGEpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBhfSxxPWZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09bShhKX0sZ2E9ZnVuY3Rpb24oYSl7dmFyIGI9dHlwZW9mIGE7cmV0dXJuXCJvYmplY3RcIj09YiYmbnVsbCE9YXx8XCJmdW5jdGlvblwiPT1ifSxoYT1mdW5jdGlvbihhLGIsXG5jKXtyZXR1cm4gYS5jYWxsLmFwcGx5KGEuYmluZCxhcmd1bWVudHMpfSxpYT1mdW5jdGlvbihhLGIsYyl7aWYoIWEpdGhyb3cgRXJyb3IoKTtpZigyPGFyZ3VtZW50cy5sZW5ndGgpe3ZhciBkPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO0FycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGMsZCk7cmV0dXJuIGEuYXBwbHkoYixjKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX0scj1mdW5jdGlvbihhLGIsYyl7cj1GdW5jdGlvbi5wcm90b3R5cGUuYmluZCYmLTEhPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLnRvU3RyaW5nKCkuaW5kZXhPZihcIm5hdGl2ZSBjb2RlXCIpP2hhOmlhO3JldHVybiByLmFwcGx5KG51bGwsYXJndW1lbnRzKX0samE9ZnVuY3Rpb24oYSxiKXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsXG4xKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYj1jLnNsaWNlKCk7Yi5wdXNoLmFwcGx5KGIsYXJndW1lbnRzKTtyZXR1cm4gYS5hcHBseSh0aGlzLGIpfX0sa2E9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlfSx0PWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYygpe31jLnByb3RvdHlwZT1iLnByb3RvdHlwZTthLmhkPWIucHJvdG90eXBlO2EucHJvdG90eXBlPW5ldyBjO2EucHJvdG90eXBlLmNvbnN0cnVjdG9yPWE7YS5CZj1mdW5jdGlvbihhLGMsZil7Zm9yKHZhciBkPUFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMiksZT0yO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspZFtlLTJdPWFyZ3VtZW50c1tlXTtyZXR1cm4gYi5wcm90b3R5cGVbY10uYXBwbHkoYSxkKX19O3ZhciB1PWZ1bmN0aW9uKGEpe2lmKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKUVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsdSk7ZWxzZXt2YXIgYj1FcnJvcigpLnN0YWNrO2ImJih0aGlzLnN0YWNrPWIpfWEmJih0aGlzLm1lc3NhZ2U9U3RyaW5nKGEpKX07dCh1LEVycm9yKTt1LnByb3RvdHlwZS5uYW1lPVwiQ3VzdG9tRXJyb3JcIjt2YXIgbGE9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9YS5zcGxpdChcIiVzXCIpLGQ9XCJcIixlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtlLmxlbmd0aCYmMTxjLmxlbmd0aDspZCs9Yy5zaGlmdCgpK2Uuc2hpZnQoKTtyZXR1cm4gZCtjLmpvaW4oXCIlc1wiKX0sbWE9U3RyaW5nLnByb3RvdHlwZS50cmltP2Z1bmN0aW9uKGEpe3JldHVybiBhLnRyaW0oKX06ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvXltcXHNcXHhhMF0rfFtcXHNcXHhhMF0rJC9nLFwiXCIpfSxuYT0vJi9nLG9hPS88L2cscGE9Lz4vZyxxYT0vXCIvZyxyYT0vJy9nLHNhPS9cXHgwMC9nLHRhPS9bXFx4MDAmPD5cIiddLyx2PWZ1bmN0aW9uKGEsYil7cmV0dXJuLTEhPWEuaW5kZXhPZihiKX0sdWE9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYTxiPy0xOmE+Yj8xOjB9O3ZhciB2YT1mdW5jdGlvbihhLGIpe2IudW5zaGlmdChhKTt1LmNhbGwodGhpcyxsYS5hcHBseShudWxsLGIpKTtiLnNoaWZ0KCl9O3QodmEsdSk7dmEucHJvdG90eXBlLm5hbWU9XCJBc3NlcnRpb25FcnJvclwiO1xudmFyIHdhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPVwiQXNzZXJ0aW9uIGZhaWxlZFwiO2lmKGMpdmFyIGU9ZSsoXCI6IFwiK2MpLGY9ZDtlbHNlIGEmJihlKz1cIjogXCIrYSxmPWIpO3Rocm93IG5ldyB2YShcIlwiK2UsZnx8W10pO30sdz1mdW5jdGlvbihhLGIsYyl7YXx8d2EoXCJcIixudWxsLGIsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpKX0seGE9ZnVuY3Rpb24oYSxiKXt0aHJvdyBuZXcgdmEoXCJGYWlsdXJlXCIrKGE/XCI6IFwiK2E6XCJcIiksQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTt9LHlhPWZ1bmN0aW9uKGEsYixjKXtmYShhKXx8d2EoXCJFeHBlY3RlZCBudW1iZXIgYnV0IGdvdCAlczogJXMuXCIsW20oYSksYV0sYixBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMikpO3JldHVybiBhfSx6YT1mdW5jdGlvbihhLGIsYyl7cChhKXx8d2EoXCJFeHBlY3RlZCBzdHJpbmcgYnV0IGdvdCAlczogJXMuXCIsW20oYSksYV0sYixBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsXG4yKSl9LEFhPWZ1bmN0aW9uKGEsYixjKXtxKGEpfHx3YShcIkV4cGVjdGVkIGZ1bmN0aW9uIGJ1dCBnb3QgJXM6ICVzLlwiLFttKGEpLGFdLGIsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpKX07dmFyIEJhPUFycmF5LnByb3RvdHlwZS5pbmRleE9mP2Z1bmN0aW9uKGEsYixjKXt3KG51bGwhPWEubGVuZ3RoKTtyZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhLGIsYyl9OmZ1bmN0aW9uKGEsYixjKXtjPW51bGw9PWM/MDowPmM/TWF0aC5tYXgoMCxhLmxlbmd0aCtjKTpjO2lmKHAoYSkpcmV0dXJuIHAoYikmJjE9PWIubGVuZ3RoP2EuaW5kZXhPZihiLGMpOi0xO2Zvcig7YzxhLmxlbmd0aDtjKyspaWYoYyBpbiBhJiZhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0seD1BcnJheS5wcm90b3R5cGUuZm9yRWFjaD9mdW5jdGlvbihhLGIsYyl7dyhudWxsIT1hLmxlbmd0aCk7QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhLGIsYyl9OmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YS5sZW5ndGgsZT1wKGEpP2Euc3BsaXQoXCJcIik6YSxmPTA7ZjxkO2YrKylmIGluIGUmJmIuY2FsbChjLGVbZl0sZixhKX0sQ2E9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9cChhKT9cbmEuc3BsaXQoXCJcIik6YSxkPWEubGVuZ3RoLTE7MDw9ZDstLWQpZCBpbiBjJiZiLmNhbGwodm9pZCAwLGNbZF0sZCxhKX0sRGE9QXJyYXkucHJvdG90eXBlLm1hcD9mdW5jdGlvbihhLGIsYyl7dyhudWxsIT1hLmxlbmd0aCk7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChhLGIsYyl9OmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YS5sZW5ndGgsZT1BcnJheShkKSxmPXAoYSk/YS5zcGxpdChcIlwiKTphLGc9MDtnPGQ7ZysrKWcgaW4gZiYmKGVbZ109Yi5jYWxsKGMsZltnXSxnLGEpKTtyZXR1cm4gZX0sRWE9QXJyYXkucHJvdG90eXBlLnNvbWU/ZnVuY3Rpb24oYSxiLGMpe3cobnVsbCE9YS5sZW5ndGgpO3JldHVybiBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKGEsYixjKX06ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1hLmxlbmd0aCxlPXAoYSk/YS5zcGxpdChcIlwiKTphLGY9MDtmPGQ7ZisrKWlmKGYgaW4gZSYmYi5jYWxsKGMsZVtmXSxmLGEpKXJldHVybiEwO3JldHVybiExfSxcbkdhPWZ1bmN0aW9uKGEpe3ZhciBiO2E6e2I9RmE7Zm9yKHZhciBjPWEubGVuZ3RoLGQ9cChhKT9hLnNwbGl0KFwiXCIpOmEsZT0wO2U8YztlKyspaWYoZSBpbiBkJiZiLmNhbGwodm9pZCAwLGRbZV0sZSxhKSl7Yj1lO2JyZWFrIGF9Yj0tMX1yZXR1cm4gMD5iP251bGw6cChhKT9hLmNoYXJBdChiKTphW2JdfSxIYT1mdW5jdGlvbihhLGIpe3JldHVybiAwPD1CYShhLGIpfSxKYT1mdW5jdGlvbihhLGIpe2I9QmEoYSxiKTt2YXIgYzsoYz0wPD1iKSYmSWEoYSxiKTtyZXR1cm4gY30sSWE9ZnVuY3Rpb24oYSxiKXt3KG51bGwhPWEubGVuZ3RoKTtyZXR1cm4gMT09QXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGEsYiwxKS5sZW5ndGh9LEthPWZ1bmN0aW9uKGEsYil7dmFyIGM9MDtDYShhLGZ1bmN0aW9uKGQsZSl7Yi5jYWxsKHZvaWQgMCxkLGUsYSkmJklhKGEsZSkmJmMrK30pfSxMYT1mdW5jdGlvbihhKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShBcnJheS5wcm90b3R5cGUsXG5hcmd1bWVudHMpfSxNYT1mdW5jdGlvbihhKXt2YXIgYj1hLmxlbmd0aDtpZigwPGIpe2Zvcih2YXIgYz1BcnJheShiKSxkPTA7ZDxiO2QrKyljW2RdPWFbZF07cmV0dXJuIGN9cmV0dXJuW119O3ZhciBOYT1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYyBpbiBhKWIuY2FsbCh2b2lkIDAsYVtjXSxjLGEpfSxPYT1mdW5jdGlvbihhKXt2YXIgYj1bXSxjPTAsZDtmb3IoZCBpbiBhKWJbYysrXT1hW2RdO3JldHVybiBifSxQYT1mdW5jdGlvbihhKXt2YXIgYj1bXSxjPTAsZDtmb3IoZCBpbiBhKWJbYysrXT1kO3JldHVybiBifSxRYT1mdW5jdGlvbihhKXtmb3IodmFyIGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH0sUmE9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMgaW4gYSlpZighKGMgaW4gYil8fGFbY10hPT1iW2NdKXJldHVybiExO2ZvcihjIGluIGIpaWYoIShjIGluIGEpKXJldHVybiExO3JldHVybiEwfSxTYT1mdW5jdGlvbihhKXt2YXIgYj17fSxjO2ZvcihjIGluIGEpYltjXT1hW2NdO3JldHVybiBifSxUYT1cImNvbnN0cnVjdG9yIGhhc093blByb3BlcnR5IGlzUHJvdG90eXBlT2YgcHJvcGVydHlJc0VudW1lcmFibGUgdG9Mb2NhbGVTdHJpbmcgdG9TdHJpbmcgdmFsdWVPZlwiLnNwbGl0KFwiIFwiKSxcblVhPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQsZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe2Q9YXJndW1lbnRzW2VdO2ZvcihjIGluIGQpYVtjXT1kW2NdO2Zvcih2YXIgZj0wO2Y8VGEubGVuZ3RoO2YrKyljPVRhW2ZdLE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkLGMpJiYoYVtjXT1kW2NdKX19O3ZhciBWYTthOnt2YXIgWGE9bC5uYXZpZ2F0b3I7aWYoWGEpe3ZhciBZYT1YYS51c2VyQWdlbnQ7aWYoWWEpe1ZhPVlhO2JyZWFrIGF9fVZhPVwiXCJ9dmFyIHo9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoVmEsYSl9O3ZhciBaYT1mdW5jdGlvbihhKXtaYVtcIiBcIl0oYSk7cmV0dXJuIGF9O1phW1wiIFwiXT1iYTt2YXIgYWI9ZnVuY3Rpb24oYSxiKXt2YXIgYz0kYTtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGMsYSk/Y1thXTpjW2FdPWIoYSl9O3ZhciBiYj16KFwiT3BlcmFcIiksQT16KFwiVHJpZGVudFwiKXx8eihcIk1TSUVcIiksY2I9eihcIkVkZ2VcIiksZGI9Y2J8fEEsZWI9eihcIkdlY2tvXCIpJiYhKHYoVmEudG9Mb3dlckNhc2UoKSxcIndlYmtpdFwiKSYmIXooXCJFZGdlXCIpKSYmISh6KFwiVHJpZGVudFwiKXx8eihcIk1TSUVcIikpJiYheihcIkVkZ2VcIiksZmI9dihWYS50b0xvd2VyQ2FzZSgpLFwid2Via2l0XCIpJiYheihcIkVkZ2VcIiksZ2I9ZnVuY3Rpb24oKXt2YXIgYT1sLmRvY3VtZW50O3JldHVybiBhP2EuZG9jdW1lbnRNb2RlOnZvaWQgMH0saGI7XG5hOnt2YXIgaWI9XCJcIixqYj1mdW5jdGlvbigpe3ZhciBhPVZhO2lmKGViKXJldHVybi9ydlxcOihbXlxcKTtdKykoXFwpfDspLy5leGVjKGEpO2lmKGNiKXJldHVybi9FZGdlXFwvKFtcXGRcXC5dKykvLmV4ZWMoYSk7aWYoQSlyZXR1cm4vXFxiKD86TVNJRXxydilbOiBdKFteXFwpO10rKShcXCl8OykvLmV4ZWMoYSk7aWYoZmIpcmV0dXJuL1dlYktpdFxcLyhcXFMrKS8uZXhlYyhhKTtpZihiYilyZXR1cm4vKD86VmVyc2lvbilbIFxcL10/KFxcUyspLy5leGVjKGEpfSgpO2piJiYoaWI9amI/amJbMV06XCJcIik7aWYoQSl7dmFyIGtiPWdiKCk7aWYobnVsbCE9a2ImJmtiPnBhcnNlRmxvYXQoaWIpKXtoYj1TdHJpbmcoa2IpO2JyZWFrIGF9fWhiPWlifVxudmFyIGxiPWhiLCRhPXt9LEI9ZnVuY3Rpb24oYSl7cmV0dXJuIGFiKGEsZnVuY3Rpb24oKXtmb3IodmFyIGI9MCxjPW1hKFN0cmluZyhsYikpLnNwbGl0KFwiLlwiKSxkPW1hKFN0cmluZyhhKSkuc3BsaXQoXCIuXCIpLGU9TWF0aC5tYXgoYy5sZW5ndGgsZC5sZW5ndGgpLGY9MDswPT1iJiZmPGU7ZisrKXt2YXIgZz1jW2ZdfHxcIlwiLGs9ZFtmXXx8XCJcIjtkb3tnPS8oXFxkKikoXFxEKikoLiopLy5leGVjKGcpfHxbXCJcIixcIlwiLFwiXCIsXCJcIl07az0vKFxcZCopKFxcRCopKC4qKS8uZXhlYyhrKXx8W1wiXCIsXCJcIixcIlwiLFwiXCJdO2lmKDA9PWdbMF0ubGVuZ3RoJiYwPT1rWzBdLmxlbmd0aClicmVhaztiPXVhKDA9PWdbMV0ubGVuZ3RoPzA6cGFyc2VJbnQoZ1sxXSwxMCksMD09a1sxXS5sZW5ndGg/MDpwYXJzZUludChrWzFdLDEwKSl8fHVhKDA9PWdbMl0ubGVuZ3RoLDA9PWtbMl0ubGVuZ3RoKXx8dWEoZ1syXSxrWzJdKTtnPWdbM107az1rWzNdfXdoaWxlKDA9PWIpfXJldHVybiAwPD1ifSl9LG1iO3ZhciBuYj1sLmRvY3VtZW50O1xubWI9bmImJkE/Z2IoKXx8KFwiQ1NTMUNvbXBhdFwiPT1uYi5jb21wYXRNb2RlP3BhcnNlSW50KGxiLDEwKTo1KTp2b2lkIDA7dmFyIG9iPWZ1bmN0aW9uKGEpe3JldHVybiBEYShhLGZ1bmN0aW9uKGEpe2E9YS50b1N0cmluZygxNik7cmV0dXJuIDE8YS5sZW5ndGg/YTpcIjBcIithfSkuam9pbihcIlwiKX07dmFyIHBiPW51bGwscWI9bnVsbCxzYj1mdW5jdGlvbihhKXt2YXIgYj1cIlwiO3JiKGEsZnVuY3Rpb24oYSl7Yis9U3RyaW5nLmZyb21DaGFyQ29kZShhKX0pO3JldHVybiBifSxyYj1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYil7Zm9yKDtkPGEubGVuZ3RoOyl7dmFyIGM9YS5jaGFyQXQoZCsrKSxlPXFiW2NdO2lmKG51bGwhPWUpcmV0dXJuIGU7aWYoIS9eW1xcc1xceGEwXSokLy50ZXN0KGMpKXRocm93IEVycm9yKFwiVW5rbm93biBiYXNlNjQgZW5jb2RpbmcgYXQgY2hhcjogXCIrYyk7fXJldHVybiBifXRiKCk7Zm9yKHZhciBkPTA7Oyl7dmFyIGU9YygtMSksZj1jKDApLGc9Yyg2NCksaz1jKDY0KTtpZig2ND09PWsmJi0xPT09ZSlicmVhaztiKGU8PDJ8Zj4+NCk7NjQhPWcmJihiKGY8PDQmMjQwfGc+PjIpLDY0IT1rJiZiKGc8PDYmMTkyfGspKX19LHRiPWZ1bmN0aW9uKCl7aWYoIXBiKXtwYj17fTtxYj17fTtmb3IodmFyIGE9MDs2NT5hO2ErKylwYlthXT1cIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCIuY2hhckF0KGEpLFxucWJbcGJbYV1dPWEsNjI8PWEmJihxYltcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5LV8uXCIuY2hhckF0KGEpXT1hKX19O3ZhciB1Yj1mdW5jdGlvbigpe3RoaXMueWE9LTF9O3ZhciB4Yj1mdW5jdGlvbihhLGIpe3RoaXMueWE9NjQ7dGhpcy5RYj1sLlVpbnQ4QXJyYXk/bmV3IFVpbnQ4QXJyYXkodGhpcy55YSk6QXJyYXkodGhpcy55YSk7dGhpcy52Yz10aGlzLlZhPTA7dGhpcy5oPVtdO3RoaXMuWWU9YTt0aGlzLkJkPWI7dGhpcy54Zj1sLkludDMyQXJyYXk/bmV3IEludDMyQXJyYXkoNjQpOkFycmF5KDY0KTt2b2lkIDAhPT12Ynx8KHZiPWwuSW50MzJBcnJheT9uZXcgSW50MzJBcnJheSh3Yik6d2IpO3RoaXMucmVzZXQoKX0sdmI7dCh4Yix1Yik7Zm9yKHZhciB5Yj1bXSx6Yj0wOzYzPnpiO3piKyspeWJbemJdPTA7dmFyIEFiPUxhKDEyOCx5Yik7eGIucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy52Yz10aGlzLlZhPTA7dGhpcy5oPWwuSW50MzJBcnJheT9uZXcgSW50MzJBcnJheSh0aGlzLkJkKTpNYSh0aGlzLkJkKX07XG52YXIgQmI9ZnVuY3Rpb24oYSl7dmFyIGI9YS5RYjt3KGIubGVuZ3RoPT1hLnlhKTtmb3IodmFyIGM9YS54ZixkPTAsZT0wO2U8Yi5sZW5ndGg7KWNbZCsrXT1iW2VdPDwyNHxiW2UrMV08PDE2fGJbZSsyXTw8OHxiW2UrM10sZT00KmQ7Zm9yKGI9MTY7NjQ+YjtiKyspe3ZhciBlPWNbYi0xNV18MCxkPWNbYi0yXXwwLGY9KGNbYi0xNl18MCkrKChlPj4+N3xlPDwyNSleKGU+Pj4xOHxlPDwxNCleZT4+PjMpfDAsZz0oY1tiLTddfDApKygoZD4+PjE3fGQ8PDE1KV4oZD4+PjE5fGQ8PDEzKV5kPj4+MTApfDA7Y1tiXT1mK2d8MH1mb3IodmFyIGQ9YS5oWzBdfDAsZT1hLmhbMV18MCxrPWEuaFsyXXwwLG49YS5oWzNdfDAseT1hLmhbNF18MCxFYj1hLmhbNV18MCxXYT1hLmhbNl18MCxmPWEuaFs3XXwwLGI9MDs2ND5iO2IrKyl2YXIgb2U9KChkPj4+MnxkPDwzMCleKGQ+Pj4xM3xkPDwxOSleKGQ+Pj4yMnxkPDwxMCkpKyhkJmVeZCZrXmUmayl8MCxnPXkmRWJefnkmV2EsZj1mKygoeT4+PjZ8XG55PDwyNileKHk+Pj4xMXx5PDwyMSleKHk+Pj4yNXx5PDw3KSl8MCxnPWcrKHZiW2JdfDApfDAsZz1mKyhnKyhjW2JdfDApfDApfDAsZj1XYSxXYT1FYixFYj15LHk9bitnfDAsbj1rLGs9ZSxlPWQsZD1nK29lfDA7YS5oWzBdPWEuaFswXStkfDA7YS5oWzFdPWEuaFsxXStlfDA7YS5oWzJdPWEuaFsyXStrfDA7YS5oWzNdPWEuaFszXStufDA7YS5oWzRdPWEuaFs0XSt5fDA7YS5oWzVdPWEuaFs1XStFYnwwO2EuaFs2XT1hLmhbNl0rV2F8MDthLmhbN109YS5oWzddK2Z8MH07XG54Yi5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9YS5sZW5ndGgpO3ZhciBjPTAsZD10aGlzLlZhO2lmKHAoYSkpZm9yKDtjPGI7KXRoaXMuUWJbZCsrXT1hLmNoYXJDb2RlQXQoYysrKSxkPT10aGlzLnlhJiYoQmIodGhpcyksZD0wKTtlbHNlIGlmKGVhKGEpKWZvcig7YzxiOyl7dmFyIGU9YVtjKytdO2lmKCEoXCJudW1iZXJcIj09dHlwZW9mIGUmJjA8PWUmJjI1NT49ZSYmZT09KGV8MCkpKXRocm93IEVycm9yKFwibWVzc2FnZSBtdXN0IGJlIGEgYnl0ZSBhcnJheVwiKTt0aGlzLlFiW2QrK109ZTtkPT10aGlzLnlhJiYoQmIodGhpcyksZD0wKX1lbHNlIHRocm93IEVycm9yKFwibWVzc2FnZSBtdXN0IGJlIHN0cmluZyBvciBhcnJheVwiKTt0aGlzLlZhPWQ7dGhpcy52Yys9Yn07XG54Yi5wcm90b3R5cGUuZGlnZXN0PWZ1bmN0aW9uKCl7dmFyIGE9W10sYj04KnRoaXMudmM7NTY+dGhpcy5WYT90aGlzLnVwZGF0ZShBYiw1Ni10aGlzLlZhKTp0aGlzLnVwZGF0ZShBYix0aGlzLnlhLSh0aGlzLlZhLTU2KSk7Zm9yKHZhciBjPTYzOzU2PD1jO2MtLSl0aGlzLlFiW2NdPWImMjU1LGIvPTI1NjtCYih0aGlzKTtmb3IoYz1iPTA7Yzx0aGlzLlllO2MrKylmb3IodmFyIGQ9MjQ7MDw9ZDtkLT04KWFbYisrXT10aGlzLmhbY10+PmQmMjU1O3JldHVybiBhfTtcbnZhciB3Yj1bMTExNjM1MjQwOCwxODk5NDQ3NDQxLDMwNDkzMjM0NzEsMzkyMTAwOTU3Myw5NjE5ODcxNjMsMTUwODk3MDk5MywyNDUzNjM1NzQ4LDI4NzA3NjMyMjEsMzYyNDM4MTA4MCwzMTA1OTg0MDEsNjA3MjI1Mjc4LDE0MjY4ODE5ODcsMTkyNTA3ODM4OCwyMTYyMDc4MjA2LDI2MTQ4ODgxMDMsMzI0ODIyMjU4MCwzODM1MzkwNDAxLDQwMjIyMjQ3NzQsMjY0MzQ3MDc4LDYwNDgwNzYyOCw3NzAyNTU5ODMsMTI0OTE1MDEyMiwxNTU1MDgxNjkyLDE5OTYwNjQ5ODYsMjU1NDIyMDg4MiwyODIxODM0MzQ5LDI5NTI5OTY4MDgsMzIxMDMxMzY3MSwzMzM2NTcxODkxLDM1ODQ1Mjg3MTEsMTEzOTI2OTkzLDMzODI0MTg5NSw2NjYzMDcyMDUsNzczNTI5OTEyLDEyOTQ3NTczNzIsMTM5NjE4MjI5MSwxNjk1MTgzNzAwLDE5ODY2NjEwNTEsMjE3NzAyNjM1MCwyNDU2OTU2MDM3LDI3MzA0ODU5MjEsMjgyMDMwMjQxMSwzMjU5NzMwODAwLDMzNDU3NjQ3NzEsMzUxNjA2NTgxNywzNjAwMzUyODA0LFxuNDA5NDU3MTkwOSwyNzU0MjMzNDQsNDMwMjI3NzM0LDUwNjk0ODYxNiw2NTkwNjA1NTYsODgzOTk3ODc3LDk1ODEzOTU3MSwxMzIyODIyMjE4LDE1MzcwMDIwNjMsMTc0Nzg3Mzc3OSwxOTU1NTYyMjIyLDIwMjQxMDQ4MTUsMjIyNzczMDQ1MiwyMzYxODUyNDI0LDI0Mjg0MzY0NzQsMjc1NjczNDE4NywzMjA0MDMxNDc5LDMzMjkzMjUyOThdO3ZhciBEYj1mdW5jdGlvbigpe3hiLmNhbGwodGhpcyw4LENiKX07dChEYix4Yik7dmFyIENiPVsxNzc5MDMzNzAzLDMxNDQxMzQyNzcsMTAxMzkwNDI0MiwyNzczNDgwNzYyLDEzNTk4OTMxMTksMjYwMDgyMjkyNCw1Mjg3MzQ2MzUsMTU0MTQ1OTIyNV07dmFyIEZiPSFBfHw5PD1OdW1iZXIobWIpLEdiPUEmJiFCKFwiOVwiKTshZmJ8fEIoXCI1MjhcIik7ZWImJkIoXCIxLjliXCIpfHxBJiZCKFwiOFwiKXx8YmImJkIoXCI5LjVcIil8fGZiJiZCKFwiNTI4XCIpO2ViJiYhQihcIjhcIil8fEEmJkIoXCI5XCIpO3ZhciBIYj1mdW5jdGlvbigpe3RoaXMuQWE9dGhpcy5BYTt0aGlzLmdjPXRoaXMuZ2N9O0hiLnByb3RvdHlwZS5BYT0hMTtIYi5wcm90b3R5cGUuaXNEaXNwb3NlZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLkFhfTtIYi5wcm90b3R5cGUuUmE9ZnVuY3Rpb24oKXtpZih0aGlzLmdjKWZvcig7dGhpcy5nYy5sZW5ndGg7KXRoaXMuZ2Muc2hpZnQoKSgpfTt2YXIgSWI9ZnVuY3Rpb24oYSxiKXt0aGlzLnR5cGU9YTt0aGlzLmN1cnJlbnRUYXJnZXQ9dGhpcy50YXJnZXQ9Yjt0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9dGhpcy4kYT0hMTt0aGlzLk1kPSEwfTtJYi5wcm90b3R5cGUucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXt0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITA7dGhpcy5NZD0hMX07dmFyIEpiPWZ1bmN0aW9uKGEsYil7SWIuY2FsbCh0aGlzLGE/YS50eXBlOlwiXCIpO3RoaXMucmVsYXRlZFRhcmdldD10aGlzLmN1cnJlbnRUYXJnZXQ9dGhpcy50YXJnZXQ9bnVsbDt0aGlzLmNoYXJDb2RlPXRoaXMua2V5Q29kZT10aGlzLmJ1dHRvbj10aGlzLnNjcmVlblk9dGhpcy5zY3JlZW5YPXRoaXMuY2xpZW50WT10aGlzLmNsaWVudFg9dGhpcy5vZmZzZXRZPXRoaXMub2Zmc2V0WD0wO3RoaXMubWV0YUtleT10aGlzLnNoaWZ0S2V5PXRoaXMuYWx0S2V5PXRoaXMuY3RybEtleT0hMTt0aGlzLnFiPXRoaXMuc3RhdGU9bnVsbDthJiZ0aGlzLmluaXQoYSxiKX07dChKYixJYik7XG5KYi5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMudHlwZT1hLnR5cGUsZD1hLmNoYW5nZWRUb3VjaGVzP2EuY2hhbmdlZFRvdWNoZXNbMF06bnVsbDt0aGlzLnRhcmdldD1hLnRhcmdldHx8YS5zcmNFbGVtZW50O3RoaXMuY3VycmVudFRhcmdldD1iO2lmKGI9YS5yZWxhdGVkVGFyZ2V0KXtpZihlYil7dmFyIGU7YTp7dHJ5e1phKGIubm9kZU5hbWUpO2U9ITA7YnJlYWsgYX1jYXRjaChmKXt9ZT0hMX1lfHwoYj1udWxsKX19ZWxzZVwibW91c2VvdmVyXCI9PWM/Yj1hLmZyb21FbGVtZW50OlwibW91c2VvdXRcIj09YyYmKGI9YS50b0VsZW1lbnQpO3RoaXMucmVsYXRlZFRhcmdldD1iO251bGw9PT1kPyh0aGlzLm9mZnNldFg9ZmJ8fHZvaWQgMCE9PWEub2Zmc2V0WD9hLm9mZnNldFg6YS5sYXllclgsdGhpcy5vZmZzZXRZPWZifHx2b2lkIDAhPT1hLm9mZnNldFk/YS5vZmZzZXRZOmEubGF5ZXJZLHRoaXMuY2xpZW50WD12b2lkIDAhPT1hLmNsaWVudFg/YS5jbGllbnRYOlxuYS5wYWdlWCx0aGlzLmNsaWVudFk9dm9pZCAwIT09YS5jbGllbnRZP2EuY2xpZW50WTphLnBhZ2VZLHRoaXMuc2NyZWVuWD1hLnNjcmVlblh8fDAsdGhpcy5zY3JlZW5ZPWEuc2NyZWVuWXx8MCk6KHRoaXMuY2xpZW50WD12b2lkIDAhPT1kLmNsaWVudFg/ZC5jbGllbnRYOmQucGFnZVgsdGhpcy5jbGllbnRZPXZvaWQgMCE9PWQuY2xpZW50WT9kLmNsaWVudFk6ZC5wYWdlWSx0aGlzLnNjcmVlblg9ZC5zY3JlZW5YfHwwLHRoaXMuc2NyZWVuWT1kLnNjcmVlbll8fDApO3RoaXMuYnV0dG9uPWEuYnV0dG9uO3RoaXMua2V5Q29kZT1hLmtleUNvZGV8fDA7dGhpcy5jaGFyQ29kZT1hLmNoYXJDb2RlfHwoXCJrZXlwcmVzc1wiPT1jP2Eua2V5Q29kZTowKTt0aGlzLmN0cmxLZXk9YS5jdHJsS2V5O3RoaXMuYWx0S2V5PWEuYWx0S2V5O3RoaXMuc2hpZnRLZXk9YS5zaGlmdEtleTt0aGlzLm1ldGFLZXk9YS5tZXRhS2V5O3RoaXMuc3RhdGU9YS5zdGF0ZTt0aGlzLnFiPWE7YS5kZWZhdWx0UHJldmVudGVkJiZcbnRoaXMucHJldmVudERlZmF1bHQoKX07SmIucHJvdG90eXBlLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7SmIuaGQucHJldmVudERlZmF1bHQuY2FsbCh0aGlzKTt2YXIgYT10aGlzLnFiO2lmKGEucHJldmVudERlZmF1bHQpYS5wcmV2ZW50RGVmYXVsdCgpO2Vsc2UgaWYoYS5yZXR1cm5WYWx1ZT0hMSxHYil0cnl7aWYoYS5jdHJsS2V5fHwxMTI8PWEua2V5Q29kZSYmMTIzPj1hLmtleUNvZGUpYS5rZXlDb2RlPS0xfWNhdGNoKGIpe319O0piLnByb3RvdHlwZS5BZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnFifTt2YXIgS2I9XCJjbG9zdXJlX2xpc3RlbmFibGVfXCIrKDFFNipNYXRoLnJhbmRvbSgpfDApLExiPTA7dmFyIE1iPWZ1bmN0aW9uKGEsYixjLGQsZSl7dGhpcy5saXN0ZW5lcj1hO3RoaXMubGM9bnVsbDt0aGlzLnNyYz1iO3RoaXMudHlwZT1jO3RoaXMuY2FwdHVyZT0hIWQ7dGhpcy5ZYj1lO3RoaXMua2V5PSsrTGI7dGhpcy5nYj10aGlzLlBiPSExfSxOYj1mdW5jdGlvbihhKXthLmdiPSEwO2EubGlzdGVuZXI9bnVsbDthLmxjPW51bGw7YS5zcmM9bnVsbDthLlliPW51bGx9O3ZhciBPYj1mdW5jdGlvbihhKXt0aGlzLnNyYz1hO3RoaXMuQz17fTt0aGlzLkxiPTB9O09iLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1hLnRvU3RyaW5nKCk7YT10aGlzLkNbZl07YXx8KGE9dGhpcy5DW2ZdPVtdLHRoaXMuTGIrKyk7dmFyIGc9UGIoYSxiLGQsZSk7LTE8Zz8oYj1hW2ddLGN8fChiLlBiPSExKSk6KGI9bmV3IE1iKGIsdGhpcy5zcmMsZiwhIWQsZSksYi5QYj1jLGEucHVzaChiKSk7cmV0dXJuIGJ9O09iLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oYSxiLGMsZCl7YT1hLnRvU3RyaW5nKCk7aWYoIShhIGluIHRoaXMuQykpcmV0dXJuITE7dmFyIGU9dGhpcy5DW2FdO2I9UGIoZSxiLGMsZCk7cmV0dXJuLTE8Yj8oTmIoZVtiXSksSWEoZSxiKSwwPT1lLmxlbmd0aCYmKGRlbGV0ZSB0aGlzLkNbYV0sdGhpcy5MYi0tKSwhMCk6ITF9O1xudmFyIFFiPWZ1bmN0aW9uKGEsYil7dmFyIGM9Yi50eXBlO2MgaW4gYS5DJiZKYShhLkNbY10sYikmJihOYihiKSwwPT1hLkNbY10ubGVuZ3RoJiYoZGVsZXRlIGEuQ1tjXSxhLkxiLS0pKX07T2IucHJvdG90eXBlLktjPWZ1bmN0aW9uKGEsYixjLGQpe2E9dGhpcy5DW2EudG9TdHJpbmcoKV07dmFyIGU9LTE7YSYmKGU9UGIoYSxiLGMsZCkpO3JldHVybi0xPGU/YVtlXTpudWxsfTt2YXIgUGI9ZnVuY3Rpb24oYSxiLGMsZCl7Zm9yKHZhciBlPTA7ZTxhLmxlbmd0aDsrK2Upe3ZhciBmPWFbZV07aWYoIWYuZ2ImJmYubGlzdGVuZXI9PWImJmYuY2FwdHVyZT09ISFjJiZmLlliPT1kKXJldHVybiBlfXJldHVybi0xfTt2YXIgUmI9XCJjbG9zdXJlX2xtX1wiKygxRTYqTWF0aC5yYW5kb20oKXwwKSxTYj17fSxUYj0wLFViPWZ1bmN0aW9uKGEsYixjLGQsZSl7aWYoZGEoYikpZm9yKHZhciBmPTA7ZjxiLmxlbmd0aDtmKyspVWIoYSxiW2ZdLGMsZCxlKTtlbHNlIGM9VmIoYyksYSYmYVtLYl0/YS5saXN0ZW4oYixjLGQsZSk6V2IoYSxiLGMsITEsZCxlKX0sV2I9ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe2lmKCFiKXRocm93IEVycm9yKFwiSW52YWxpZCBldmVudCB0eXBlXCIpO3ZhciBnPSEhZSxrPVhiKGEpO2t8fChhW1JiXT1rPW5ldyBPYihhKSk7Yz1rLmFkZChiLGMsZCxlLGYpO2lmKCFjLmxjKXtkPVliKCk7Yy5sYz1kO2Quc3JjPWE7ZC5saXN0ZW5lcj1jO2lmKGEuYWRkRXZlbnRMaXN0ZW5lcilhLmFkZEV2ZW50TGlzdGVuZXIoYi50b1N0cmluZygpLGQsZyk7ZWxzZSBpZihhLmF0dGFjaEV2ZW50KWEuYXR0YWNoRXZlbnQoWmIoYi50b1N0cmluZygpKSxkKTtlbHNlIHRocm93IEVycm9yKFwiYWRkRXZlbnRMaXN0ZW5lciBhbmQgYXR0YWNoRXZlbnQgYXJlIHVuYXZhaWxhYmxlLlwiKTtcblRiKyt9fSxZYj1mdW5jdGlvbigpe3ZhciBhPSRiLGI9RmI/ZnVuY3Rpb24oYyl7cmV0dXJuIGEuY2FsbChiLnNyYyxiLmxpc3RlbmVyLGMpfTpmdW5jdGlvbihjKXtjPWEuY2FsbChiLnNyYyxiLmxpc3RlbmVyLGMpO2lmKCFjKXJldHVybiBjfTtyZXR1cm4gYn0sYWM9ZnVuY3Rpb24oYSxiLGMsZCxlKXtpZihkYShiKSlmb3IodmFyIGY9MDtmPGIubGVuZ3RoO2YrKylhYyhhLGJbZl0sYyxkLGUpO2Vsc2UgYz1WYihjKSxhJiZhW0tiXT9iYyhhLGIsYyxkLGUpOldiKGEsYixjLCEwLGQsZSl9LGNjPWZ1bmN0aW9uKGEsYixjLGQsZSl7aWYoZGEoYikpZm9yKHZhciBmPTA7ZjxiLmxlbmd0aDtmKyspY2MoYSxiW2ZdLGMsZCxlKTtlbHNlIGM9VmIoYyksYSYmYVtLYl0/YS5hYS5yZW1vdmUoU3RyaW5nKGIpLGMsZCxlKTphJiYoYT1YYihhKSkmJihiPWEuS2MoYixjLCEhZCxlKSkmJmRjKGIpfSxkYz1mdW5jdGlvbihhKXtpZighZmEoYSkmJmEmJiFhLmdiKXt2YXIgYj1hLnNyYztpZihiJiZcbmJbS2JdKVFiKGIuYWEsYSk7ZWxzZXt2YXIgYz1hLnR5cGUsZD1hLmxjO2IucmVtb3ZlRXZlbnRMaXN0ZW5lcj9iLnJlbW92ZUV2ZW50TGlzdGVuZXIoYyxkLGEuY2FwdHVyZSk6Yi5kZXRhY2hFdmVudCYmYi5kZXRhY2hFdmVudChaYihjKSxkKTtUYi0tOyhjPVhiKGIpKT8oUWIoYyxhKSwwPT1jLkxiJiYoYy5zcmM9bnVsbCxiW1JiXT1udWxsKSk6TmIoYSl9fX0sWmI9ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW4gU2I/U2JbYV06U2JbYV09XCJvblwiK2F9LGZjPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPSEwO2lmKGE9WGIoYSkpaWYoYj1hLkNbYi50b1N0cmluZygpXSlmb3IoYj1iLmNvbmNhdCgpLGE9MDthPGIubGVuZ3RoO2ErKyl7dmFyIGY9YlthXTtmJiZmLmNhcHR1cmU9PWMmJiFmLmdiJiYoZj1lYyhmLGQpLGU9ZSYmITEhPT1mKX1yZXR1cm4gZX0sZWM9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmxpc3RlbmVyLGQ9YS5ZYnx8YS5zcmM7YS5QYiYmZGMoYSk7cmV0dXJuIGMuY2FsbChkLFxuYil9LCRiPWZ1bmN0aW9uKGEsYil7aWYoYS5nYilyZXR1cm4hMDtpZighRmIpe2lmKCFiKWE6e2I9W1wid2luZG93XCIsXCJldmVudFwiXTtmb3IodmFyIGM9bCxkO2Q9Yi5zaGlmdCgpOylpZihudWxsIT1jW2RdKWM9Y1tkXTtlbHNle2I9bnVsbDticmVhayBhfWI9Y31kPWI7Yj1uZXcgSmIoZCx0aGlzKTtjPSEwO2lmKCEoMD5kLmtleUNvZGV8fHZvaWQgMCE9ZC5yZXR1cm5WYWx1ZSkpe2E6e3ZhciBlPSExO2lmKDA9PWQua2V5Q29kZSl0cnl7ZC5rZXlDb2RlPS0xO2JyZWFrIGF9Y2F0Y2goZyl7ZT0hMH1pZihlfHx2b2lkIDA9PWQucmV0dXJuVmFsdWUpZC5yZXR1cm5WYWx1ZT0hMH1kPVtdO2ZvcihlPWIuY3VycmVudFRhcmdldDtlO2U9ZS5wYXJlbnROb2RlKWQucHVzaChlKTthPWEudHlwZTtmb3IoZT1kLmxlbmd0aC0xOyFiLiRhJiYwPD1lO2UtLSl7Yi5jdXJyZW50VGFyZ2V0PWRbZV07dmFyIGY9ZmMoZFtlXSxhLCEwLGIpLGM9YyYmZn1mb3IoZT0wOyFiLiRhJiZlPGQubGVuZ3RoO2UrKyliLmN1cnJlbnRUYXJnZXQ9XG5kW2VdLGY9ZmMoZFtlXSxhLCExLGIpLGM9YyYmZn1yZXR1cm4gY31yZXR1cm4gZWMoYSxuZXcgSmIoYix0aGlzKSl9LFhiPWZ1bmN0aW9uKGEpe2E9YVtSYl07cmV0dXJuIGEgaW5zdGFuY2VvZiBPYj9hOm51bGx9LGdjPVwiX19jbG9zdXJlX2V2ZW50c19mbl9cIisoMUU5Kk1hdGgucmFuZG9tKCk+Pj4wKSxWYj1mdW5jdGlvbihhKXt3KGEsXCJMaXN0ZW5lciBjYW4gbm90IGJlIG51bGwuXCIpO2lmKHEoYSkpcmV0dXJuIGE7dyhhLmhhbmRsZUV2ZW50LFwiQW4gb2JqZWN0IGxpc3RlbmVyIG11c3QgaGF2ZSBoYW5kbGVFdmVudCBtZXRob2QuXCIpO2FbZ2NdfHwoYVtnY109ZnVuY3Rpb24oYil7cmV0dXJuIGEuaGFuZGxlRXZlbnQoYil9KTtyZXR1cm4gYVtnY119O3ZhciBoYz0vXlsrYS16QS1aMC05Xy4hIyQlJicqXFwvPT9eYHt8fX4tXStAKFthLXpBLVowLTktXStcXC4pK1thLXpBLVowLTldezIsNjN9JC87dmFyIGpjPWZ1bmN0aW9uKCl7dGhpcy5zYz1cIlwiO3RoaXMuZ2U9aWN9O2pjLnByb3RvdHlwZS5iYz0hMDtqYy5wcm90b3R5cGUuV2I9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zY307amMucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJDb25zdHtcIit0aGlzLnNjK1wifVwifTt2YXIga2M9ZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIGpjJiZhLmNvbnN0cnVjdG9yPT09amMmJmEuZ2U9PT1pYylyZXR1cm4gYS5zYzt4YShcImV4cGVjdGVkIG9iamVjdCBvZiB0eXBlIENvbnN0LCBnb3QgJ1wiK2ErXCInXCIpO3JldHVyblwidHlwZV9lcnJvcjpDb25zdFwifSxpYz17fSxsYz1mdW5jdGlvbihhKXt2YXIgYj1uZXcgamM7Yi5zYz1hO3JldHVybiBifTtsYyhcIlwiKTt2YXIgbmM9ZnVuY3Rpb24oKXt0aGlzLm1hPVwiXCI7dGhpcy5mZT1tY307bmMucHJvdG90eXBlLmJjPSEwO25jLnByb3RvdHlwZS5XYj1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hfTtuYy5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIlNhZmVVcmx7XCIrdGhpcy5tYStcIn1cIn07XG52YXIgb2M9ZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIG5jJiZhLmNvbnN0cnVjdG9yPT09bmMmJmEuZmU9PT1tYylyZXR1cm4gYS5tYTt4YShcImV4cGVjdGVkIG9iamVjdCBvZiB0eXBlIFNhZmVVcmwsIGdvdCAnXCIrYStcIicgb2YgdHlwZSBcIittKGEpKTtyZXR1cm5cInR5cGVfZXJyb3I6U2FmZVVybFwifSxwYz0vXig/Oig/Omh0dHBzP3xtYWlsdG98ZnRwKTp8W14mOi8/I10qKD86Wy8/I118JCkpL2kscmM9ZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIG5jKXJldHVybiBhO2E9YS5iYz9hLldiKCk6U3RyaW5nKGEpO3BjLnRlc3QoYSl8fChhPVwiYWJvdXQ6aW52YWxpZCN6Q2xvc3VyZXpcIik7cmV0dXJuIHFjKGEpfSxtYz17fSxxYz1mdW5jdGlvbihhKXt2YXIgYj1uZXcgbmM7Yi5tYT1hO3JldHVybiBifTtxYyhcImFib3V0OmJsYW5rXCIpO3ZhciBzYz1mdW5jdGlvbihhKXtyZXR1cm4vXlxccyokLy50ZXN0KGEpPyExOi9eW1xcXSw6e31cXHNcXHUyMDI4XFx1MjAyOV0qJC8udGVzdChhLnJlcGxhY2UoL1xcXFxbXCJcXFxcXFwvYmZucnR1XS9nLFwiQFwiKS5yZXBsYWNlKC8oPzpcIlteXCJcXFxcXFxuXFxyXFx1MjAyOFxcdTIwMjlcXHgwMC1cXHgwOFxceDBhLVxceDFmXSpcInx0cnVlfGZhbHNlfG51bGx8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrXFwtXT9cXGQrKT8pW1xcc1xcdTIwMjhcXHUyMDI5XSooPz06fCx8XXx9fCQpL2csXCJdXCIpLnJlcGxhY2UoLyg/Ol58OnwsKSg/OltcXHNcXHUyMDI4XFx1MjAyOV0qXFxbKSsvZyxcIlwiKSl9LHRjPWZ1bmN0aW9uKGEpe2E9U3RyaW5nKGEpO2lmKHNjKGEpKXRyeXtyZXR1cm4gZXZhbChcIihcIithK1wiKVwiKX1jYXRjaChiKXt9dGhyb3cgRXJyb3IoXCJJbnZhbGlkIEpTT04gc3RyaW5nOiBcIithKTt9LHdjPWZ1bmN0aW9uKGEpe3ZhciBiPVtdO3VjKG5ldyB2YyxhLGIpO3JldHVybiBiLmpvaW4oXCJcIil9LHZjPWZ1bmN0aW9uKCl7dGhpcy5uYz12b2lkIDB9LFxudWM9ZnVuY3Rpb24oYSxiLGMpe2lmKG51bGw9PWIpYy5wdXNoKFwibnVsbFwiKTtlbHNle2lmKFwib2JqZWN0XCI9PXR5cGVvZiBiKXtpZihkYShiKSl7dmFyIGQ9YjtiPWQubGVuZ3RoO2MucHVzaChcIltcIik7Zm9yKHZhciBlPVwiXCIsZj0wO2Y8YjtmKyspYy5wdXNoKGUpLGU9ZFtmXSx1YyhhLGEubmM/YS5uYy5jYWxsKGQsU3RyaW5nKGYpLGUpOmUsYyksZT1cIixcIjtjLnB1c2goXCJdXCIpO3JldHVybn1pZihiIGluc3RhbmNlb2YgU3RyaW5nfHxiIGluc3RhbmNlb2YgTnVtYmVyfHxiIGluc3RhbmNlb2YgQm9vbGVhbiliPWIudmFsdWVPZigpO2Vsc2V7Yy5wdXNoKFwie1wiKTtmPVwiXCI7Zm9yKGQgaW4gYilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYixkKSYmKGU9YltkXSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiYoYy5wdXNoKGYpLHhjKGQsYyksYy5wdXNoKFwiOlwiKSx1YyhhLGEubmM/YS5uYy5jYWxsKGIsZCxlKTplLGMpLGY9XCIsXCIpKTtjLnB1c2goXCJ9XCIpO3JldHVybn19c3dpdGNoKHR5cGVvZiBiKXtjYXNlIFwic3RyaW5nXCI6eGMoYixcbmMpO2JyZWFrO2Nhc2UgXCJudW1iZXJcIjpjLnB1c2goaXNGaW5pdGUoYikmJiFpc05hTihiKT9TdHJpbmcoYik6XCJudWxsXCIpO2JyZWFrO2Nhc2UgXCJib29sZWFuXCI6Yy5wdXNoKFN0cmluZyhiKSk7YnJlYWs7Y2FzZSBcImZ1bmN0aW9uXCI6Yy5wdXNoKFwibnVsbFwiKTticmVhaztkZWZhdWx0OnRocm93IEVycm9yKFwiVW5rbm93biB0eXBlOiBcIit0eXBlb2YgYik7fX19LHljPXsnXCInOidcXFxcXCInLFwiXFxcXFwiOlwiXFxcXFxcXFxcIixcIi9cIjpcIlxcXFwvXCIsXCJcXGJcIjpcIlxcXFxiXCIsXCJcXGZcIjpcIlxcXFxmXCIsXCJcXG5cIjpcIlxcXFxuXCIsXCJcXHJcIjpcIlxcXFxyXCIsXCJcXHRcIjpcIlxcXFx0XCIsXCJcXHgwQlwiOlwiXFxcXHUwMDBiXCJ9LHpjPS9cXHVmZmZmLy50ZXN0KFwiXFx1ZmZmZlwiKT8vW1xcXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHVmZmZmXS9nOi9bXFxcXFxcXCJcXHgwMC1cXHgxZlxceDdmLVxceGZmXS9nLHhjPWZ1bmN0aW9uKGEsYil7Yi5wdXNoKCdcIicsYS5yZXBsYWNlKHpjLGZ1bmN0aW9uKGEpe3ZhciBiPXljW2FdO2J8fChiPVwiXFxcXHVcIisoYS5jaGFyQ29kZUF0KDApfDY1NTM2KS50b1N0cmluZygxNikuc3Vic3RyKDEpLFxueWNbYV09Yik7cmV0dXJuIGJ9KSwnXCInKX07dmFyIEFjPWZ1bmN0aW9uKCl7fTtBYy5wcm90b3R5cGUubGQ9bnVsbDt2YXIgQmM9ZnVuY3Rpb24oYSl7cmV0dXJuIGEubGR8fChhLmxkPWEuUGMoKSl9O3ZhciBDYyxEYz1mdW5jdGlvbigpe307dChEYyxBYyk7RGMucHJvdG90eXBlLlJiPWZ1bmN0aW9uKCl7dmFyIGE9RWModGhpcyk7cmV0dXJuIGE/bmV3IEFjdGl2ZVhPYmplY3QoYSk6bmV3IFhNTEh0dHBSZXF1ZXN0fTtEYy5wcm90b3R5cGUuUGM9ZnVuY3Rpb24oKXt2YXIgYT17fTtFYyh0aGlzKSYmKGFbMF09ITAsYVsxXT0hMCk7cmV0dXJuIGF9O1xudmFyIEVjPWZ1bmN0aW9uKGEpe2lmKCFhLkFkJiZcInVuZGVmaW5lZFwiPT10eXBlb2YgWE1MSHR0cFJlcXVlc3QmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBBY3RpdmVYT2JqZWN0KXtmb3IodmFyIGI9W1wiTVNYTUwyLlhNTEhUVFAuNi4wXCIsXCJNU1hNTDIuWE1MSFRUUC4zLjBcIixcIk1TWE1MMi5YTUxIVFRQXCIsXCJNaWNyb3NvZnQuWE1MSFRUUFwiXSxjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPWJbY107dHJ5e3JldHVybiBuZXcgQWN0aXZlWE9iamVjdChkKSxhLkFkPWR9Y2F0Y2goZSl7fX10aHJvdyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgQWN0aXZlWE9iamVjdC4gQWN0aXZlWCBtaWdodCBiZSBkaXNhYmxlZCwgb3IgTVNYTUwgbWlnaHQgbm90IGJlIGluc3RhbGxlZFwiKTt9cmV0dXJuIGEuQWR9O0NjPW5ldyBEYzt2YXIgRmM9ZnVuY3Rpb24oKXt9O3QoRmMsQWMpO0ZjLnByb3RvdHlwZS5SYj1mdW5jdGlvbigpe3ZhciBhPW5ldyBYTUxIdHRwUmVxdWVzdDtpZihcIndpdGhDcmVkZW50aWFsc1wiaW4gYSlyZXR1cm4gYTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgWERvbWFpblJlcXVlc3QpcmV0dXJuIG5ldyBHYzt0aHJvdyBFcnJvcihcIlVuc3VwcG9ydGVkIGJyb3dzZXJcIik7fTtGYy5wcm90b3R5cGUuUGM9ZnVuY3Rpb24oKXtyZXR1cm57fX07XG52YXIgR2M9ZnVuY3Rpb24oKXt0aGlzLnBhPW5ldyBYRG9tYWluUmVxdWVzdDt0aGlzLnJlYWR5U3RhdGU9MDt0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsO3RoaXMucmVzcG9uc2VUZXh0PVwiXCI7dGhpcy5zdGF0dXM9LTE7dGhpcy5zdGF0dXNUZXh0PXRoaXMucmVzcG9uc2VYTUw9bnVsbDt0aGlzLnBhLm9ubG9hZD1yKHRoaXMuRGUsdGhpcyk7dGhpcy5wYS5vbmVycm9yPXIodGhpcy54ZCx0aGlzKTt0aGlzLnBhLm9ucHJvZ3Jlc3M9cih0aGlzLkVlLHRoaXMpO3RoaXMucGEub250aW1lb3V0PXIodGhpcy5GZSx0aGlzKX07aD1HYy5wcm90b3R5cGU7aC5vcGVuPWZ1bmN0aW9uKGEsYixjKXtpZihudWxsIT1jJiYhYyl0aHJvdyBFcnJvcihcIk9ubHkgYXN5bmMgcmVxdWVzdHMgYXJlIHN1cHBvcnRlZC5cIik7dGhpcy5wYS5vcGVuKGEsYil9O1xuaC5zZW5kPWZ1bmN0aW9uKGEpe2lmKGEpaWYoXCJzdHJpbmdcIj09dHlwZW9mIGEpdGhpcy5wYS5zZW5kKGEpO2Vsc2UgdGhyb3cgRXJyb3IoXCJPbmx5IHN0cmluZyBkYXRhIGlzIHN1cHBvcnRlZFwiKTtlbHNlIHRoaXMucGEuc2VuZCgpfTtoLmFib3J0PWZ1bmN0aW9uKCl7dGhpcy5wYS5hYm9ydCgpfTtoLnNldFJlcXVlc3RIZWFkZXI9ZnVuY3Rpb24oKXt9O2guRGU9ZnVuY3Rpb24oKXt0aGlzLnN0YXR1cz0yMDA7dGhpcy5yZXNwb25zZVRleHQ9dGhpcy5wYS5yZXNwb25zZVRleHQ7SGModGhpcyw0KX07aC54ZD1mdW5jdGlvbigpe3RoaXMuc3RhdHVzPTUwMDt0aGlzLnJlc3BvbnNlVGV4dD1cIlwiO0hjKHRoaXMsNCl9O2guRmU9ZnVuY3Rpb24oKXt0aGlzLnhkKCl9O2guRWU9ZnVuY3Rpb24oKXt0aGlzLnN0YXR1cz0yMDA7SGModGhpcywxKX07dmFyIEhjPWZ1bmN0aW9uKGEsYil7YS5yZWFkeVN0YXRlPWI7aWYoYS5vbnJlYWR5c3RhdGVjaGFuZ2UpYS5vbnJlYWR5c3RhdGVjaGFuZ2UoKX07dmFyIEpjPWZ1bmN0aW9uKCl7dGhpcy5qYz1cIlwiO3RoaXMuaGU9SWN9O0pjLnByb3RvdHlwZS5iYz0hMDtKYy5wcm90b3R5cGUuV2I9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5qY307SmMucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJUcnVzdGVkUmVzb3VyY2VVcmx7XCIrdGhpcy5qYytcIn1cIn07dmFyIEljPXt9O3ZhciBMYz1mdW5jdGlvbigpe3RoaXMubWE9XCJcIjt0aGlzLmVlPUtjfTtMYy5wcm90b3R5cGUuYmM9ITA7TGMucHJvdG90eXBlLldiPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWF9O0xjLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiU2FmZUh0bWx7XCIrdGhpcy5tYStcIn1cIn07dmFyIE1jPWZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiBMYyYmYS5jb25zdHJ1Y3Rvcj09PUxjJiZhLmVlPT09S2MpcmV0dXJuIGEubWE7eGEoXCJleHBlY3RlZCBvYmplY3Qgb2YgdHlwZSBTYWZlSHRtbCwgZ290ICdcIithK1wiJyBvZiB0eXBlIFwiK20oYSkpO3JldHVyblwidHlwZV9lcnJvcjpTYWZlSHRtbFwifSxLYz17fTtMYy5wcm90b3R5cGUuTWU9ZnVuY3Rpb24oYSl7dGhpcy5tYT1hO3JldHVybiB0aGlzfTshZWImJiFBfHxBJiY5PD1OdW1iZXIobWIpfHxlYiYmQihcIjEuOS4xXCIpO0EmJkIoXCI5XCIpO3ZhciBPYz1mdW5jdGlvbihhLGIpe05hKGIsZnVuY3Rpb24oYixkKXtcInN0eWxlXCI9PWQ/YS5zdHlsZS5jc3NUZXh0PWI6XCJjbGFzc1wiPT1kP2EuY2xhc3NOYW1lPWI6XCJmb3JcIj09ZD9hLmh0bWxGb3I9YjpOYy5oYXNPd25Qcm9wZXJ0eShkKT9hLnNldEF0dHJpYnV0ZShOY1tkXSxiKTowPT1kLmxhc3RJbmRleE9mKFwiYXJpYS1cIiwwKXx8MD09ZC5sYXN0SW5kZXhPZihcImRhdGEtXCIsMCk/YS5zZXRBdHRyaWJ1dGUoZCxiKTphW2RdPWJ9KX0sTmM9e2NlbGxwYWRkaW5nOlwiY2VsbFBhZGRpbmdcIixjZWxsc3BhY2luZzpcImNlbGxTcGFjaW5nXCIsY29sc3BhbjpcImNvbFNwYW5cIixmcmFtZWJvcmRlcjpcImZyYW1lQm9yZGVyXCIsaGVpZ2h0OlwiaGVpZ2h0XCIsbWF4bGVuZ3RoOlwibWF4TGVuZ3RoXCIsbm9uY2U6XCJub25jZVwiLHJvbGU6XCJyb2xlXCIscm93c3BhbjpcInJvd1NwYW5cIix0eXBlOlwidHlwZVwiLHVzZW1hcDpcInVzZU1hcFwiLHZhbGlnbjpcInZBbGlnblwiLHdpZHRoOlwid2lkdGhcIn07dmFyIFBjPWZ1bmN0aW9uKGEsYixjKXt0aGlzLlFlPWM7dGhpcy5vZT1hO3RoaXMuZGY9Yjt0aGlzLmZjPTA7dGhpcy5aYj1udWxsfTtQYy5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKCl7dmFyIGE7MDx0aGlzLmZjPyh0aGlzLmZjLS0sYT10aGlzLlpiLHRoaXMuWmI9YS5uZXh0LGEubmV4dD1udWxsKTphPXRoaXMub2UoKTtyZXR1cm4gYX07UGMucHJvdG90eXBlLnB1dD1mdW5jdGlvbihhKXt0aGlzLmRmKGEpO3RoaXMuZmM8dGhpcy5RZSYmKHRoaXMuZmMrKyxhLm5leHQ9dGhpcy5aYix0aGlzLlpiPWEpfTt2YXIgUWM9ZnVuY3Rpb24oYSl7bC5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgYTt9LDApfSxSYyxTYz1mdW5jdGlvbigpe3ZhciBhPWwuTWVzc2FnZUNoYW5uZWw7XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIHdpbmRvdyYmd2luZG93LnBvc3RNZXNzYWdlJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciYmIXooXCJQcmVzdG9cIikmJihhPWZ1bmN0aW9uKCl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklGUkFNRVwiKTthLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7YS5zcmM9XCJcIjtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYSk7dmFyIGI9YS5jb250ZW50V2luZG93LGE9Yi5kb2N1bWVudDthLm9wZW4oKTthLndyaXRlKFwiXCIpO2EuY2xvc2UoKTt2YXIgYz1cImNhbGxJbW1lZGlhdGVcIitNYXRoLnJhbmRvbSgpLGQ9XCJmaWxlOlwiPT1iLmxvY2F0aW9uLnByb3RvY29sP1wiKlwiOmIubG9jYXRpb24ucHJvdG9jb2wrXCIvL1wiK2IubG9jYXRpb24uaG9zdCxcbmE9cihmdW5jdGlvbihhKXtpZigoXCIqXCI9PWR8fGEub3JpZ2luPT1kKSYmYS5kYXRhPT1jKXRoaXMucG9ydDEub25tZXNzYWdlKCl9LHRoaXMpO2IuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhLCExKTt0aGlzLnBvcnQxPXt9O3RoaXMucG9ydDI9e3Bvc3RNZXNzYWdlOmZ1bmN0aW9uKCl7Yi5wb3N0TWVzc2FnZShjLGQpfX19KTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGEmJiF6KFwiVHJpZGVudFwiKSYmIXooXCJNU0lFXCIpKXt2YXIgYj1uZXcgYSxjPXt9LGQ9YztiLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbigpe2lmKHZvaWQgMCE9PWMubmV4dCl7Yz1jLm5leHQ7dmFyIGE9Yy5vZDtjLm9kPW51bGw7YSgpfX07cmV0dXJuIGZ1bmN0aW9uKGEpe2QubmV4dD17b2Q6YX07ZD1kLm5leHQ7Yi5wb3J0Mi5wb3N0TWVzc2FnZSgwKX19cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudCYmXCJvbnJlYWR5c3RhdGVjaGFuZ2VcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTQ1JJUFRcIik/XG5mdW5jdGlvbihhKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU0NSSVBUXCIpO2Iub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7Yi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbDtiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYik7Yj1udWxsO2EoKTthPW51bGx9O2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChiKX06ZnVuY3Rpb24oYSl7bC5zZXRUaW1lb3V0KGEsMCl9fTt2YXIgVGM9ZnVuY3Rpb24oKXt0aGlzLnljPXRoaXMuTGE9bnVsbH0sVmM9bmV3IFBjKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBVY30sZnVuY3Rpb24oYSl7YS5yZXNldCgpfSwxMDApO1RjLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz1WYy5nZXQoKTtjLnNldChhLGIpO3RoaXMueWM/dGhpcy55Yy5uZXh0PWM6KHcoIXRoaXMuTGEpLHRoaXMuTGE9Yyk7dGhpcy55Yz1jfTtUYy5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKCl7dmFyIGE9bnVsbDt0aGlzLkxhJiYoYT10aGlzLkxhLHRoaXMuTGE9dGhpcy5MYS5uZXh0LHRoaXMuTGF8fCh0aGlzLnljPW51bGwpLGEubmV4dD1udWxsKTtyZXR1cm4gYX07dmFyIFVjPWZ1bmN0aW9uKCl7dGhpcy5uZXh0PXRoaXMuc2NvcGU9dGhpcy5KYz1udWxsfTtVYy5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGEsYil7dGhpcy5KYz1hO3RoaXMuc2NvcGU9Yjt0aGlzLm5leHQ9bnVsbH07XG5VYy5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLm5leHQ9dGhpcy5zY29wZT10aGlzLkpjPW51bGx9O3ZhciAkYz1mdW5jdGlvbihhLGIpe1djfHxYYygpO1ljfHwoV2MoKSxZYz0hMCk7WmMuYWRkKGEsYil9LFdjLFhjPWZ1bmN0aW9uKCl7aWYoLTEhPVN0cmluZyhsLlByb21pc2UpLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpKXt2YXIgYT1sLlByb21pc2UucmVzb2x2ZSh2b2lkIDApO1djPWZ1bmN0aW9uKCl7YS50aGVuKGFkKX19ZWxzZSBXYz1mdW5jdGlvbigpe3ZhciBhPWFkOyFxKGwuc2V0SW1tZWRpYXRlKXx8bC5XaW5kb3cmJmwuV2luZG93LnByb3RvdHlwZSYmIXooXCJFZGdlXCIpJiZsLldpbmRvdy5wcm90b3R5cGUuc2V0SW1tZWRpYXRlPT1sLnNldEltbWVkaWF0ZT8oUmN8fChSYz1TYygpKSxSYyhhKSk6bC5zZXRJbW1lZGlhdGUoYSl9fSxZYz0hMSxaYz1uZXcgVGMsYWQ9ZnVuY3Rpb24oKXtmb3IodmFyIGE7YT1aYy5yZW1vdmUoKTspe3RyeXthLkpjLmNhbGwoYS5zY29wZSl9Y2F0Y2goYil7UWMoYil9VmMucHV0KGEpfVljPSExfTt2YXIgYmQ9ZnVuY3Rpb24oYSl7YS5wcm90b3R5cGUudGhlbj1hLnByb3RvdHlwZS50aGVuO2EucHJvdG90eXBlLiRnb29nX1RoZW5hYmxlPSEwfSxjZD1mdW5jdGlvbihhKXtpZighYSlyZXR1cm4hMTt0cnl7cmV0dXJuISFhLiRnb29nX1RoZW5hYmxlfWNhdGNoKGIpe3JldHVybiExfX07dmFyIEM9ZnVuY3Rpb24oYSxiKXt0aGlzLk09MDt0aGlzLm5hPXZvaWQgMDt0aGlzLlBhPXRoaXMuamE9dGhpcy5zPW51bGw7dGhpcy5YYj10aGlzLkljPSExO2lmKGEhPWJhKXRyeXt2YXIgYz10aGlzO2EuY2FsbChiLGZ1bmN0aW9uKGEpe2RkKGMsMixhKX0sZnVuY3Rpb24oYSl7aWYoIShhIGluc3RhbmNlb2YgZWQpKXRyeXtpZihhIGluc3RhbmNlb2YgRXJyb3IpdGhyb3cgYTt0aHJvdyBFcnJvcihcIlByb21pc2UgcmVqZWN0ZWQuXCIpO31jYXRjaChlKXt9ZGQoYywzLGEpfSl9Y2F0Y2goZCl7ZGQodGhpcywzLGQpfX0sZmQ9ZnVuY3Rpb24oKXt0aGlzLm5leHQ9dGhpcy5jb250ZXh0PXRoaXMuWGE9dGhpcy5GYT10aGlzLmNoaWxkPW51bGw7dGhpcy5vYj0hMX07ZmQucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5jb250ZXh0PXRoaXMuWGE9dGhpcy5GYT10aGlzLmNoaWxkPW51bGw7dGhpcy5vYj0hMX07XG52YXIgZ2Q9bmV3IFBjKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBmZH0sZnVuY3Rpb24oYSl7YS5yZXNldCgpfSwxMDApLGhkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1nZC5nZXQoKTtkLkZhPWE7ZC5YYT1iO2QuY29udGV4dD1jO3JldHVybiBkfSxEPWZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiBDKXJldHVybiBhO3ZhciBiPW5ldyBDKGJhKTtkZChiLDIsYSk7cmV0dXJuIGJ9LEU9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBDKGZ1bmN0aW9uKGIsYyl7YyhhKX0pfSxqZD1mdW5jdGlvbihhLGIsYyl7aWQoYSxiLGMsbnVsbCl8fCRjKGphKGIsYSkpfSxrZD1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IEMoZnVuY3Rpb24oYil7dmFyIGM9YS5sZW5ndGgsZD1bXTtpZihjKWZvcih2YXIgZT1mdW5jdGlvbihhLGUsZil7Yy0tO2RbYV09ZT97eWU6ITAsdmFsdWU6Zn06e3llOiExLHJlYXNvbjpmfTswPT1jJiZiKGQpfSxmPTAsZztmPGEubGVuZ3RoO2YrKylnPWFbZl0samQoZyxqYShlLGYsITApLFxuamEoZSxmLCExKSk7ZWxzZSBiKGQpfSl9O0MucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oYSxiLGMpe251bGwhPWEmJkFhKGEsXCJvcHRfb25GdWxmaWxsZWQgc2hvdWxkIGJlIGEgZnVuY3Rpb24uXCIpO251bGwhPWImJkFhKGIsXCJvcHRfb25SZWplY3RlZCBzaG91bGQgYmUgYSBmdW5jdGlvbi4gRGlkIHlvdSBwYXNzIG9wdF9jb250ZXh0IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgaW5zdGVhZCBvZiB0aGUgdGhpcmQ/XCIpO3JldHVybiBsZCh0aGlzLHEoYSk/YTpudWxsLHEoYik/YjpudWxsLGMpfTtiZChDKTt2YXIgbmQ9ZnVuY3Rpb24oYSxiKXtiPWhkKGIsYix2b2lkIDApO2Iub2I9ITA7bWQoYSxiKTtyZXR1cm4gYX07Qy5wcm90b3R5cGUuYz1mdW5jdGlvbihhLGIpe3JldHVybiBsZCh0aGlzLG51bGwsYSxiKX07Qy5wcm90b3R5cGUuY2FuY2VsPWZ1bmN0aW9uKGEpezA9PXRoaXMuTSYmJGMoZnVuY3Rpb24oKXt2YXIgYj1uZXcgZWQoYSk7b2QodGhpcyxiKX0sdGhpcyl9O1xudmFyIG9kPWZ1bmN0aW9uKGEsYil7aWYoMD09YS5NKWlmKGEucyl7dmFyIGM9YS5zO2lmKGMuamEpe2Zvcih2YXIgZD0wLGU9bnVsbCxmPW51bGwsZz1jLmphO2cmJihnLm9ifHwoZCsrLGcuY2hpbGQ9PWEmJihlPWcpLCEoZSYmMTxkKSkpO2c9Zy5uZXh0KWV8fChmPWcpO2UmJigwPT1jLk0mJjE9PWQ/b2QoYyxiKTooZj8oZD1mLHcoYy5qYSksdyhudWxsIT1kKSxkLm5leHQ9PWMuUGEmJihjLlBhPWQpLGQubmV4dD1kLm5leHQubmV4dCk6cGQoYykscWQoYyxlLDMsYikpKX1hLnM9bnVsbH1lbHNlIGRkKGEsMyxiKX0sbWQ9ZnVuY3Rpb24oYSxiKXthLmphfHwyIT1hLk0mJjMhPWEuTXx8cmQoYSk7dyhudWxsIT1iLkZhKTthLlBhP2EuUGEubmV4dD1iOmEuamE9YjthLlBhPWJ9LGxkPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWhkKG51bGwsbnVsbCxudWxsKTtlLmNoaWxkPW5ldyBDKGZ1bmN0aW9uKGEsZyl7ZS5GYT1iP2Z1bmN0aW9uKGMpe3RyeXt2YXIgZT1iLmNhbGwoZCxjKTthKGUpfWNhdGNoKHkpe2coeSl9fTpcbmE7ZS5YYT1jP2Z1bmN0aW9uKGIpe3RyeXt2YXIgZT1jLmNhbGwoZCxiKTt2b2lkIDA9PT1lJiZiIGluc3RhbmNlb2YgZWQ/ZyhiKTphKGUpfWNhdGNoKHkpe2coeSl9fTpnfSk7ZS5jaGlsZC5zPWE7bWQoYSxlKTtyZXR1cm4gZS5jaGlsZH07Qy5wcm90b3R5cGUucWY9ZnVuY3Rpb24oYSl7dygxPT10aGlzLk0pO3RoaXMuTT0wO2RkKHRoaXMsMixhKX07Qy5wcm90b3R5cGUucmY9ZnVuY3Rpb24oYSl7dygxPT10aGlzLk0pO3RoaXMuTT0wO2RkKHRoaXMsMyxhKX07XG52YXIgZGQ9ZnVuY3Rpb24oYSxiLGMpezA9PWEuTSYmKGE9PT1jJiYoYj0zLGM9bmV3IFR5cGVFcnJvcihcIlByb21pc2UgY2Fubm90IHJlc29sdmUgdG8gaXRzZWxmXCIpKSxhLk09MSxpZChjLGEucWYsYS5yZixhKXx8KGEubmE9YyxhLk09YixhLnM9bnVsbCxyZChhKSwzIT1ifHxjIGluc3RhbmNlb2YgZWR8fHNkKGEsYykpKX0saWQ9ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYSBpbnN0YW5jZW9mIEMpcmV0dXJuIG51bGwhPWImJkFhKGIsXCJvcHRfb25GdWxmaWxsZWQgc2hvdWxkIGJlIGEgZnVuY3Rpb24uXCIpLG51bGwhPWMmJkFhKGMsXCJvcHRfb25SZWplY3RlZCBzaG91bGQgYmUgYSBmdW5jdGlvbi4gRGlkIHlvdSBwYXNzIG9wdF9jb250ZXh0IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgaW5zdGVhZCBvZiB0aGUgdGhpcmQ/XCIpLG1kKGEsaGQoYnx8YmEsY3x8bnVsbCxkKSksITA7aWYoY2QoYSkpcmV0dXJuIGEudGhlbihiLGMsZCksITA7aWYoZ2EoYSkpdHJ5e3ZhciBlPWEudGhlbjtpZihxKGUpKXJldHVybiB0ZChhLFxuZSxiLGMsZCksITB9Y2F0Y2goZil7cmV0dXJuIGMuY2FsbChkLGYpLCEwfXJldHVybiExfSx0ZD1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPSExLGc9ZnVuY3Rpb24oYSl7Znx8KGY9ITAsYy5jYWxsKGUsYSkpfSxrPWZ1bmN0aW9uKGEpe2Z8fChmPSEwLGQuY2FsbChlLGEpKX07dHJ5e2IuY2FsbChhLGcsayl9Y2F0Y2gobil7ayhuKX19LHJkPWZ1bmN0aW9uKGEpe2EuSWN8fChhLkljPSEwLCRjKGEudGUsYSkpfSxwZD1mdW5jdGlvbihhKXt2YXIgYj1udWxsO2EuamEmJihiPWEuamEsYS5qYT1iLm5leHQsYi5uZXh0PW51bGwpO2EuamF8fChhLlBhPW51bGwpO251bGwhPWImJncobnVsbCE9Yi5GYSk7cmV0dXJuIGJ9O0MucHJvdG90eXBlLnRlPWZ1bmN0aW9uKCl7Zm9yKHZhciBhO2E9cGQodGhpcyk7KXFkKHRoaXMsYSx0aGlzLk0sdGhpcy5uYSk7dGhpcy5JYz0hMX07XG52YXIgcWQ9ZnVuY3Rpb24oYSxiLGMsZCl7aWYoMz09YyYmYi5YYSYmIWIub2IpZm9yKDthJiZhLlhiO2E9YS5zKWEuWGI9ITE7aWYoYi5jaGlsZCliLmNoaWxkLnM9bnVsbCx1ZChiLGMsZCk7ZWxzZSB0cnl7Yi5vYj9iLkZhLmNhbGwoYi5jb250ZXh0KTp1ZChiLGMsZCl9Y2F0Y2goZSl7dmQuY2FsbChudWxsLGUpfWdkLnB1dChiKX0sdWQ9ZnVuY3Rpb24oYSxiLGMpezI9PWI/YS5GYS5jYWxsKGEuY29udGV4dCxjKTphLlhhJiZhLlhhLmNhbGwoYS5jb250ZXh0LGMpfSxzZD1mdW5jdGlvbihhLGIpe2EuWGI9ITA7JGMoZnVuY3Rpb24oKXthLlhiJiZ2ZC5jYWxsKG51bGwsYil9KX0sdmQ9UWMsZWQ9ZnVuY3Rpb24oYSl7dS5jYWxsKHRoaXMsYSl9O3QoZWQsdSk7ZWQucHJvdG90eXBlLm5hbWU9XCJjYW5jZWxcIjsvKlxuIFBvcnRpb25zIG9mIHRoaXMgY29kZSBhcmUgZnJvbSBNb2NoaUtpdCwgcmVjZWl2ZWQgYnlcbiBUaGUgQ2xvc3VyZSBBdXRob3JzIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gQWxsIG90aGVyIGNvZGUgaXMgQ29weXJpZ2h0XG4gMjAwNS0yMDA5IFRoZSBDbG9zdXJlIEF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qL1xudmFyIHdkPWZ1bmN0aW9uKGEsYil7dGhpcy5wYz1bXTt0aGlzLkdkPWE7dGhpcy5yZD1ifHxudWxsO3RoaXMuc2I9dGhpcy5UYT0hMTt0aGlzLm5hPXZvaWQgMDt0aGlzLmZkPXRoaXMua2Q9dGhpcy5EYz0hMTt0aGlzLndjPTA7dGhpcy5zPW51bGw7dGhpcy5FYz0wfTt3ZC5wcm90b3R5cGUuY2FuY2VsPWZ1bmN0aW9uKGEpe2lmKHRoaXMuVGEpdGhpcy5uYSBpbnN0YW5jZW9mIHdkJiZ0aGlzLm5hLmNhbmNlbCgpO2Vsc2V7aWYodGhpcy5zKXt2YXIgYj10aGlzLnM7ZGVsZXRlIHRoaXMuczthP2IuY2FuY2VsKGEpOihiLkVjLS0sMD49Yi5FYyYmYi5jYW5jZWwoKSl9dGhpcy5HZD90aGlzLkdkLmNhbGwodGhpcy5yZCx0aGlzKTp0aGlzLmZkPSEwO3RoaXMuVGF8fHhkKHRoaXMsbmV3IHlkKX19O3dkLnByb3RvdHlwZS5wZD1mdW5jdGlvbihhLGIpe3RoaXMuRGM9ITE7emQodGhpcyxhLGIpfTtcbnZhciB6ZD1mdW5jdGlvbihhLGIsYyl7YS5UYT0hMDthLm5hPWM7YS5zYj0hYjtBZChhKX0sQ2Q9ZnVuY3Rpb24oYSl7aWYoYS5UYSl7aWYoIWEuZmQpdGhyb3cgbmV3IEJkO2EuZmQ9ITF9fTt3ZC5wcm90b3R5cGUuY2FsbGJhY2s9ZnVuY3Rpb24oYSl7Q2QodGhpcyk7RGQoYSk7emQodGhpcywhMCxhKX07XG52YXIgeGQ9ZnVuY3Rpb24oYSxiKXtDZChhKTtEZChiKTt6ZChhLCExLGIpfSxEZD1mdW5jdGlvbihhKXt3KCEoYSBpbnN0YW5jZW9mIHdkKSxcIkFuIGV4ZWN1dGlvbiBzZXF1ZW5jZSBtYXkgbm90IGJlIGluaXRpYXRlZCB3aXRoIGEgYmxvY2tpbmcgRGVmZXJyZWQuXCIpfSxIZD1mdW5jdGlvbihhKXt2YXIgYj1FZChcImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2NsaWVudC5qcz9vbmxvYWQ9XCIrRmQpO0dkKGIsbnVsbCxhLHZvaWQgMCl9LEdkPWZ1bmN0aW9uKGEsYixjLGQpe3coIWEua2QsXCJCbG9ja2luZyBEZWZlcnJlZHMgY2FuIG5vdCBiZSByZS11c2VkXCIpO2EucGMucHVzaChbYixjLGRdKTthLlRhJiZBZChhKX07d2QucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1uZXcgQyhmdW5jdGlvbihhLGIpe2Q9YTtlPWJ9KTtHZCh0aGlzLGQsZnVuY3Rpb24oYSl7YSBpbnN0YW5jZW9mIHlkP2YuY2FuY2VsKCk6ZShhKX0pO3JldHVybiBmLnRoZW4oYSxiLGMpfTtcbmJkKHdkKTtcbnZhciBJZD1mdW5jdGlvbihhKXtyZXR1cm4gRWEoYS5wYyxmdW5jdGlvbihhKXtyZXR1cm4gcShhWzFdKX0pfSxBZD1mdW5jdGlvbihhKXtpZihhLndjJiZhLlRhJiZJZChhKSl7dmFyIGI9YS53YyxjPUpkW2JdO2MmJihsLmNsZWFyVGltZW91dChjLnRiKSxkZWxldGUgSmRbYl0pO2Eud2M9MH1hLnMmJihhLnMuRWMtLSxkZWxldGUgYS5zKTtmb3IodmFyIGI9YS5uYSxkPWM9ITE7YS5wYy5sZW5ndGgmJiFhLkRjOyl7dmFyIGU9YS5wYy5zaGlmdCgpLGY9ZVswXSxnPWVbMV0sZT1lWzJdO2lmKGY9YS5zYj9nOmYpdHJ5e3ZhciBrPWYuY2FsbChlfHxhLnJkLGIpO3ZvaWQgMCE9PWsmJihhLnNiPWEuc2ImJihrPT1ifHxrIGluc3RhbmNlb2YgRXJyb3IpLGEubmE9Yj1rKTtpZihjZChiKXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGwuUHJvbWlzZSYmYiBpbnN0YW5jZW9mIGwuUHJvbWlzZSlkPSEwLGEuRGM9ITB9Y2F0Y2gobil7Yj1uLGEuc2I9ITAsSWQoYSl8fChjPSEwKX19YS5uYT1iO2QmJlxuKGs9cihhLnBkLGEsITApLGQ9cihhLnBkLGEsITEpLGIgaW5zdGFuY2VvZiB3ZD8oR2QoYixrLGQpLGIua2Q9ITApOmIudGhlbihrLGQpKTtjJiYoYj1uZXcgS2QoYiksSmRbYi50Yl09YixhLndjPWIudGIpfSxCZD1mdW5jdGlvbigpe3UuY2FsbCh0aGlzKX07dChCZCx1KTtCZC5wcm90b3R5cGUubWVzc2FnZT1cIkRlZmVycmVkIGhhcyBhbHJlYWR5IGZpcmVkXCI7QmQucHJvdG90eXBlLm5hbWU9XCJBbHJlYWR5Q2FsbGVkRXJyb3JcIjt2YXIgeWQ9ZnVuY3Rpb24oKXt1LmNhbGwodGhpcyl9O3QoeWQsdSk7eWQucHJvdG90eXBlLm1lc3NhZ2U9XCJEZWZlcnJlZCB3YXMgY2FuY2VsZWRcIjt5ZC5wcm90b3R5cGUubmFtZT1cIkNhbmNlbGVkRXJyb3JcIjt2YXIgS2Q9ZnVuY3Rpb24oYSl7dGhpcy50Yj1sLnNldFRpbWVvdXQocih0aGlzLnBmLHRoaXMpLDApO3RoaXMuTz1hfTtcbktkLnByb3RvdHlwZS5wZj1mdW5jdGlvbigpe3coSmRbdGhpcy50Yl0sXCJDYW5ub3QgdGhyb3cgYW4gZXJyb3IgdGhhdCBpcyBub3Qgc2NoZWR1bGVkLlwiKTtkZWxldGUgSmRbdGhpcy50Yl07dGhyb3cgdGhpcy5PO307dmFyIEpkPXt9O3ZhciBFZD1mdW5jdGlvbihhKXt2YXIgYj1uZXcgSmM7Yi5qYz1hO3JldHVybiBMZChiKX0sTGQ9ZnVuY3Rpb24oYSl7dmFyIGI9e30sYz1iLmRvY3VtZW50fHxkb2N1bWVudCxkO2EgaW5zdGFuY2VvZiBKYyYmYS5jb25zdHJ1Y3Rvcj09PUpjJiZhLmhlPT09SWM/ZD1hLmpjOih4YShcImV4cGVjdGVkIG9iamVjdCBvZiB0eXBlIFRydXN0ZWRSZXNvdXJjZVVybCwgZ290ICdcIithK1wiJyBvZiB0eXBlIFwiK20oYSkpLGQ9XCJ0eXBlX2Vycm9yOlRydXN0ZWRSZXNvdXJjZVVybFwiKTt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU0NSSVBUXCIpO2E9e05kOmUsS2I6dm9pZCAwfTt2YXIgZj1uZXcgd2QoTWQsYSksZz1udWxsLGs9bnVsbCE9Yi50aW1lb3V0P2IudGltZW91dDo1RTM7MDxrJiYoZz13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe05kKGUsITApO3hkKGYsbmV3IE9kKDEsXCJUaW1lb3V0IHJlYWNoZWQgZm9yIGxvYWRpbmcgc2NyaXB0IFwiK2QpKX0sayksYS5LYj1nKTtlLm9ubG9hZD1cbmUub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ZS5yZWFkeVN0YXRlJiZcImxvYWRlZFwiIT1lLnJlYWR5U3RhdGUmJlwiY29tcGxldGVcIiE9ZS5yZWFkeVN0YXRlfHwoTmQoZSxiLkNmfHwhMSxnKSxmLmNhbGxiYWNrKG51bGwpKX07ZS5vbmVycm9yPWZ1bmN0aW9uKCl7TmQoZSwhMCxnKTt4ZChmLG5ldyBPZCgwLFwiRXJyb3Igd2hpbGUgbG9hZGluZyBzY3JpcHQgXCIrZCkpfTthPWIuYXR0cmlidXRlc3x8e307VWEoYSx7dHlwZTpcInRleHQvamF2YXNjcmlwdFwiLGNoYXJzZXQ6XCJVVEYtOFwiLHNyYzpkfSk7T2MoZSxhKTtQZChjKS5hcHBlbmRDaGlsZChlKTtyZXR1cm4gZn0sUGQ9ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuKGI9KGF8fGRvY3VtZW50KS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkhFQURcIikpJiYwIT1iLmxlbmd0aD9iWzBdOmEuZG9jdW1lbnRFbGVtZW50fSxNZD1mdW5jdGlvbigpe2lmKHRoaXMmJnRoaXMuTmQpe3ZhciBhPXRoaXMuTmQ7YSYmXCJTQ1JJUFRcIj09YS50YWdOYW1lJiZcbk5kKGEsITAsdGhpcy5LYil9fSxOZD1mdW5jdGlvbihhLGIsYyl7bnVsbCE9YyYmbC5jbGVhclRpbWVvdXQoYyk7YS5vbmxvYWQ9YmE7YS5vbmVycm9yPWJhO2Eub25yZWFkeXN0YXRlY2hhbmdlPWJhO2ImJndpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YSYmYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSl9LDApfSxPZD1mdW5jdGlvbihhLGIpe3ZhciBjPVwiSnNsb2FkZXIgZXJyb3IgKGNvZGUgI1wiK2ErXCIpXCI7YiYmKGMrPVwiOiBcIitiKTt1LmNhbGwodGhpcyxjKTt0aGlzLmNvZGU9YX07dChPZCx1KTt2YXIgUWQ9ZnVuY3Rpb24oKXtIYi5jYWxsKHRoaXMpO3RoaXMuYWE9bmV3IE9iKHRoaXMpO3RoaXMua2U9dGhpczt0aGlzLlZjPW51bGx9O3QoUWQsSGIpO1FkLnByb3RvdHlwZVtLYl09ITA7aD1RZC5wcm90b3R5cGU7aC5hZGRFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGEsYixjLGQpe1ViKHRoaXMsYSxiLGMsZCl9O2gucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyxkKXtjYyh0aGlzLGEsYixjLGQpfTtcbmguZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihhKXtSZCh0aGlzKTt2YXIgYixjPXRoaXMuVmM7aWYoYyl7Yj1bXTtmb3IodmFyIGQ9MTtjO2M9Yy5WYyliLnB1c2goYyksdygxRTM+KytkLFwiaW5maW5pdGUgbG9vcFwiKX1jPXRoaXMua2U7ZD1hLnR5cGV8fGE7aWYocChhKSlhPW5ldyBJYihhLGMpO2Vsc2UgaWYoYSBpbnN0YW5jZW9mIEliKWEudGFyZ2V0PWEudGFyZ2V0fHxjO2Vsc2V7dmFyIGU9YTthPW5ldyBJYihkLGMpO1VhKGEsZSl9dmFyIGU9ITAsZjtpZihiKWZvcih2YXIgZz1iLmxlbmd0aC0xOyFhLiRhJiYwPD1nO2ctLSlmPWEuY3VycmVudFRhcmdldD1iW2ddLGU9U2QoZixkLCEwLGEpJiZlO2EuJGF8fChmPWEuY3VycmVudFRhcmdldD1jLGU9U2QoZixkLCEwLGEpJiZlLGEuJGF8fChlPVNkKGYsZCwhMSxhKSYmZSkpO2lmKGIpZm9yKGc9MDshYS4kYSYmZzxiLmxlbmd0aDtnKyspZj1hLmN1cnJlbnRUYXJnZXQ9YltnXSxlPVNkKGYsZCwhMSxhKSYmZTtyZXR1cm4gZX07XG5oLlJhPWZ1bmN0aW9uKCl7UWQuaGQuUmEuY2FsbCh0aGlzKTtpZih0aGlzLmFhKXt2YXIgYT10aGlzLmFhLGI9MCxjO2ZvcihjIGluIGEuQyl7Zm9yKHZhciBkPWEuQ1tjXSxlPTA7ZTxkLmxlbmd0aDtlKyspKytiLE5iKGRbZV0pO2RlbGV0ZSBhLkNbY107YS5MYi0tfX10aGlzLlZjPW51bGx9O2gubGlzdGVuPWZ1bmN0aW9uKGEsYixjLGQpe1JkKHRoaXMpO3JldHVybiB0aGlzLmFhLmFkZChTdHJpbmcoYSksYiwhMSxjLGQpfTtcbnZhciBiYz1mdW5jdGlvbihhLGIsYyxkLGUpe2EuYWEuYWRkKFN0cmluZyhiKSxjLCEwLGQsZSl9LFNkPWZ1bmN0aW9uKGEsYixjLGQpe2I9YS5hYS5DW1N0cmluZyhiKV07aWYoIWIpcmV0dXJuITA7Yj1iLmNvbmNhdCgpO2Zvcih2YXIgZT0hMCxmPTA7ZjxiLmxlbmd0aDsrK2Ype3ZhciBnPWJbZl07aWYoZyYmIWcuZ2ImJmcuY2FwdHVyZT09Yyl7dmFyIGs9Zy5saXN0ZW5lcixuPWcuWWJ8fGcuc3JjO2cuUGImJlFiKGEuYWEsZyk7ZT0hMSE9PWsuY2FsbChuLGQpJiZlfX1yZXR1cm4gZSYmMCE9ZC5NZH07UWQucHJvdG90eXBlLktjPWZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmFhLktjKFN0cmluZyhhKSxiLGMsZCl9O3ZhciBSZD1mdW5jdGlvbihhKXt3KGEuYWEsXCJFdmVudCB0YXJnZXQgaXMgbm90IGluaXRpYWxpemVkLiBEaWQgeW91IGNhbGwgdGhlIHN1cGVyY2xhc3MgKGdvb2cuZXZlbnRzLkV2ZW50VGFyZ2V0KSBjb25zdHJ1Y3Rvcj9cIil9O3ZhciBUZD1cIlN0b3BJdGVyYXRpb25cImluIGw/bC5TdG9wSXRlcmF0aW9uOnttZXNzYWdlOlwiU3RvcEl0ZXJhdGlvblwiLHN0YWNrOlwiXCJ9LFVkPWZ1bmN0aW9uKCl7fTtVZC5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3Rocm93IFRkO307VWQucHJvdG90eXBlLmplPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3ZhciBWZD1mdW5jdGlvbihhLGIpe3RoaXMuYmE9e307dGhpcy53PVtdO3RoaXMubmI9dGhpcy5vPTA7dmFyIGM9YXJndW1lbnRzLmxlbmd0aDtpZigxPGMpe2lmKGMlMil0aHJvdyBFcnJvcihcIlVuZXZlbiBudW1iZXIgb2YgYXJndW1lbnRzXCIpO2Zvcih2YXIgZD0wO2Q8YztkKz0yKXRoaXMuc2V0KGFyZ3VtZW50c1tkXSxhcmd1bWVudHNbZCsxXSl9ZWxzZSBhJiZ0aGlzLmFkZEFsbChhKX07VmQucHJvdG90eXBlLlk9ZnVuY3Rpb24oKXtXZCh0aGlzKTtmb3IodmFyIGE9W10sYj0wO2I8dGhpcy53Lmxlbmd0aDtiKyspYS5wdXNoKHRoaXMuYmFbdGhpcy53W2JdXSk7cmV0dXJuIGF9O1ZkLnByb3RvdHlwZS5rYT1mdW5jdGlvbigpe1dkKHRoaXMpO3JldHVybiB0aGlzLncuY29uY2F0KCl9O1ZkLnByb3RvdHlwZS5wYj1mdW5jdGlvbihhKXtyZXR1cm4gWGQodGhpcy5iYSxhKX07XG5WZC5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKGEpe3JldHVybiBYZCh0aGlzLmJhLGEpPyhkZWxldGUgdGhpcy5iYVthXSx0aGlzLm8tLSx0aGlzLm5iKyssdGhpcy53Lmxlbmd0aD4yKnRoaXMubyYmV2QodGhpcyksITApOiExfTt2YXIgV2Q9ZnVuY3Rpb24oYSl7aWYoYS5vIT1hLncubGVuZ3RoKXtmb3IodmFyIGI9MCxjPTA7YjxhLncubGVuZ3RoOyl7dmFyIGQ9YS53W2JdO1hkKGEuYmEsZCkmJihhLndbYysrXT1kKTtiKyt9YS53Lmxlbmd0aD1jfWlmKGEubyE9YS53Lmxlbmd0aCl7Zm9yKHZhciBlPXt9LGM9Yj0wO2I8YS53Lmxlbmd0aDspZD1hLndbYl0sWGQoZSxkKXx8KGEud1tjKytdPWQsZVtkXT0xKSxiKys7YS53Lmxlbmd0aD1jfX07aD1WZC5wcm90b3R5cGU7aC5nZXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gWGQodGhpcy5iYSxhKT90aGlzLmJhW2FdOmJ9O1xuaC5zZXQ9ZnVuY3Rpb24oYSxiKXtYZCh0aGlzLmJhLGEpfHwodGhpcy5vKyssdGhpcy53LnB1c2goYSksdGhpcy5uYisrKTt0aGlzLmJhW2FdPWJ9O2guYWRkQWxsPWZ1bmN0aW9uKGEpe3ZhciBiO2EgaW5zdGFuY2VvZiBWZD8oYj1hLmthKCksYT1hLlkoKSk6KGI9UGEoYSksYT1PYShhKSk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5zZXQoYltjXSxhW2NdKX07aC5mb3JFYWNoPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPXRoaXMua2EoKSxkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF0sZj10aGlzLmdldChlKTthLmNhbGwoYixmLGUsdGhpcyl9fTtoLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBWZCh0aGlzKX07XG5oLmplPWZ1bmN0aW9uKGEpe1dkKHRoaXMpO3ZhciBiPTAsYz10aGlzLm5iLGQ9dGhpcyxlPW5ldyBVZDtlLm5leHQ9ZnVuY3Rpb24oKXtpZihjIT1kLm5iKXRocm93IEVycm9yKFwiVGhlIG1hcCBoYXMgY2hhbmdlZCBzaW5jZSB0aGUgaXRlcmF0b3Igd2FzIGNyZWF0ZWRcIik7aWYoYj49ZC53Lmxlbmd0aCl0aHJvdyBUZDt2YXIgZT1kLndbYisrXTtyZXR1cm4gYT9lOmQuYmFbZV19O3JldHVybiBlfTt2YXIgWGQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsYil9O3ZhciBZZD1mdW5jdGlvbihhKXtpZihhLlkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEuWSlyZXR1cm4gYS5ZKCk7aWYocChhKSlyZXR1cm4gYS5zcGxpdChcIlwiKTtpZihlYShhKSl7Zm9yKHZhciBiPVtdLGM9YS5sZW5ndGgsZD0wO2Q8YztkKyspYi5wdXNoKGFbZF0pO3JldHVybiBifXJldHVybiBPYShhKX0sWmQ9ZnVuY3Rpb24oYSl7aWYoYS5rYSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS5rYSlyZXR1cm4gYS5rYSgpO2lmKCFhLll8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIGEuWSl7aWYoZWEoYSl8fHAoYSkpe3ZhciBiPVtdO2E9YS5sZW5ndGg7Zm9yKHZhciBjPTA7YzxhO2MrKyliLnB1c2goYyk7cmV0dXJuIGJ9cmV0dXJuIFBhKGEpfX0sJGQ9ZnVuY3Rpb24oYSxiKXtpZihhLmZvckVhY2gmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEuZm9yRWFjaClhLmZvckVhY2goYix2b2lkIDApO2Vsc2UgaWYoZWEoYSl8fHAoYSkpeChhLGIsdm9pZCAwKTtlbHNlIGZvcih2YXIgYz1aZChhKSxkPVlkKGEpLGU9XG5kLmxlbmd0aCxmPTA7ZjxlO2YrKyliLmNhbGwodm9pZCAwLGRbZl0sYyYmY1tmXSxhKX07dmFyIGFlPWZ1bmN0aW9uKGEsYixjLGQsZSl7dGhpcy5yZXNldChhLGIsYyxkLGUpfTthZS5wcm90b3R5cGUudGQ9bnVsbDt2YXIgYmU9MDthZS5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oYSxiLGMsZCxlKXtcIm51bWJlclwiPT10eXBlb2YgZXx8YmUrKztkfHxrYSgpO3RoaXMueGI9YTt0aGlzLlZlPWI7ZGVsZXRlIHRoaXMudGR9O2FlLnByb3RvdHlwZS5RZD1mdW5jdGlvbihhKXt0aGlzLnhiPWF9O3ZhciBjZT1mdW5jdGlvbihhKXt0aGlzLldlPWE7dGhpcy55ZD10aGlzLkZjPXRoaXMueGI9dGhpcy5zPW51bGx9LGRlPWZ1bmN0aW9uKGEsYil7dGhpcy5uYW1lPWE7dGhpcy52YWx1ZT1ifTtkZS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5uYW1lfTt2YXIgZWU9bmV3IGRlKFwiU0VWRVJFXCIsMUUzKSxmZT1uZXcgZGUoXCJDT05GSUdcIiw3MDApLGdlPW5ldyBkZShcIkZJTkVcIiw1MDApO2NlLnByb3RvdHlwZS5nZXRQYXJlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zfTtjZS5wcm90b3R5cGUuUWQ9ZnVuY3Rpb24oYSl7dGhpcy54Yj1hfTt2YXIgaGU9ZnVuY3Rpb24oYSl7aWYoYS54YilyZXR1cm4gYS54YjtpZihhLnMpcmV0dXJuIGhlKGEucyk7eGEoXCJSb290IGxvZ2dlciBoYXMgbm8gbGV2ZWwgc2V0LlwiKTtyZXR1cm4gbnVsbH07XG5jZS5wcm90b3R5cGUubG9nPWZ1bmN0aW9uKGEsYixjKXtpZihhLnZhbHVlPj1oZSh0aGlzKS52YWx1ZSlmb3IocShiKSYmKGI9YigpKSxhPW5ldyBhZShhLFN0cmluZyhiKSx0aGlzLldlKSxjJiYoYS50ZD1jKSxjPVwibG9nOlwiK2EuVmUsbC5jb25zb2xlJiYobC5jb25zb2xlLnRpbWVTdGFtcD9sLmNvbnNvbGUudGltZVN0YW1wKGMpOmwuY29uc29sZS5tYXJrVGltZWxpbmUmJmwuY29uc29sZS5tYXJrVGltZWxpbmUoYykpLGwubXNXcml0ZVByb2ZpbGVyTWFyayYmbC5tc1dyaXRlUHJvZmlsZXJNYXJrKGMpLGM9dGhpcztjOyl7dmFyIGQ9YyxlPWE7aWYoZC55ZClmb3IodmFyIGY9MDtiPWQueWRbZl07ZisrKWIoZSk7Yz1jLmdldFBhcmVudCgpfX07XG52YXIgaWU9e30samU9bnVsbCxrZT1mdW5jdGlvbihhKXtqZXx8KGplPW5ldyBjZShcIlwiKSxpZVtcIlwiXT1qZSxqZS5RZChmZSkpO3ZhciBiO2lmKCEoYj1pZVthXSkpe2I9bmV3IGNlKGEpO3ZhciBjPWEubGFzdEluZGV4T2YoXCIuXCIpLGQ9YS5zdWJzdHIoYysxKSxjPWtlKGEuc3Vic3RyKDAsYykpO2MuRmN8fChjLkZjPXt9KTtjLkZjW2RdPWI7Yi5zPWM7aWVbYV09Yn1yZXR1cm4gYn07dmFyIEY9ZnVuY3Rpb24oYSxiKXthJiZhLmxvZyhnZSxiLHZvaWQgMCl9O3ZhciBsZT1mdW5jdGlvbihhLGIsYyl7aWYocShhKSljJiYoYT1yKGEsYykpO2Vsc2UgaWYoYSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS5oYW5kbGVFdmVudClhPXIoYS5oYW5kbGVFdmVudCxhKTtlbHNlIHRocm93IEVycm9yKFwiSW52YWxpZCBsaXN0ZW5lciBhcmd1bWVudFwiKTtyZXR1cm4gMjE0NzQ4MzY0NzxOdW1iZXIoYik/LTE6bC5zZXRUaW1lb3V0KGEsYnx8MCl9LG1lPWZ1bmN0aW9uKGEpe3ZhciBiPW51bGw7cmV0dXJuKG5ldyBDKGZ1bmN0aW9uKGMsZCl7Yj1sZShmdW5jdGlvbigpe2Modm9pZCAwKX0sYSk7LTE9PWImJmQoRXJyb3IoXCJGYWlsZWQgdG8gc2NoZWR1bGUgdGltZXIuXCIpKX0pKS5jKGZ1bmN0aW9uKGEpe2wuY2xlYXJUaW1lb3V0KGIpO3Rocm93IGE7fSl9O3ZhciBuZT0vXig/OihbXjovPyMuXSspOik/KD86XFwvXFwvKD86KFteLz8jXSopQCk/KFteLyM/XSo/KSg/OjooWzAtOV0rKSk/KD89Wy8jP118JCkpPyhbXj8jXSspPyg/OlxcPyhbXiNdKikpPyg/OiMoW1xcc1xcU10qKSk/JC8scGU9ZnVuY3Rpb24oYSxiKXtpZihhKXthPWEuc3BsaXQoXCImXCIpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdLmluZGV4T2YoXCI9XCIpLGUsZj1udWxsOzA8PWQ/KGU9YVtjXS5zdWJzdHJpbmcoMCxkKSxmPWFbY10uc3Vic3RyaW5nKGQrMSkpOmU9YVtjXTtiKGUsZj9kZWNvZGVVUklDb21wb25lbnQoZi5yZXBsYWNlKC9cXCsvZyxcIiBcIikpOlwiXCIpfX19O3ZhciBHPWZ1bmN0aW9uKGEpe1FkLmNhbGwodGhpcyk7dGhpcy5oZWFkZXJzPW5ldyBWZDt0aGlzLkFjPWF8fG51bGw7dGhpcy5xYT0hMTt0aGlzLnpjPXRoaXMuYj1udWxsO3RoaXMud2I9dGhpcy5FZD10aGlzLmVjPVwiXCI7dGhpcy5DYT10aGlzLk5jPXRoaXMuY2M9dGhpcy5IYz0hMTt0aGlzLmtiPTA7dGhpcy51Yz1udWxsO3RoaXMuTGQ9XCJcIjt0aGlzLnhjPXRoaXMuYmY9dGhpcy5hZT0hMX07dChHLFFkKTt2YXIgcWU9Ry5wcm90b3R5cGUscmU9a2UoXCJnb29nLm5ldC5YaHJJb1wiKTtxZS5VPXJlO3ZhciBzZT0vXmh0dHBzPyQvaSx0ZT1bXCJQT1NUXCIsXCJQVVRcIl07XG5HLnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKGEsYixjLGQpe2lmKHRoaXMuYil0aHJvdyBFcnJvcihcIltnb29nLm5ldC5YaHJJb10gT2JqZWN0IGlzIGFjdGl2ZSB3aXRoIGFub3RoZXIgcmVxdWVzdD1cIit0aGlzLmVjK1wiOyBuZXdVcmk9XCIrYSk7Yj1iP2IudG9VcHBlckNhc2UoKTpcIkdFVFwiO3RoaXMuZWM9YTt0aGlzLndiPVwiXCI7dGhpcy5FZD1iO3RoaXMuSGM9ITE7dGhpcy5xYT0hMDt0aGlzLmI9dGhpcy5BYz90aGlzLkFjLlJiKCk6Q2MuUmIoKTt0aGlzLnpjPXRoaXMuQWM/QmModGhpcy5BYyk6QmMoQ2MpO3RoaXMuYi5vbnJlYWR5c3RhdGVjaGFuZ2U9cih0aGlzLklkLHRoaXMpO3RoaXMuYmYmJlwib25wcm9ncmVzc1wiaW4gdGhpcy5iJiYodGhpcy5iLm9ucHJvZ3Jlc3M9cihmdW5jdGlvbihhKXt0aGlzLkhkKGEsITApfSx0aGlzKSx0aGlzLmIudXBsb2FkJiYodGhpcy5iLnVwbG9hZC5vbnByb2dyZXNzPXIodGhpcy5IZCx0aGlzKSkpO3RyeXtGKHRoaXMuVSx1ZSh0aGlzLFwiT3BlbmluZyBYaHJcIikpLFxudGhpcy5OYz0hMCx0aGlzLmIub3BlbihiLFN0cmluZyhhKSwhMCksdGhpcy5OYz0hMX1jYXRjaChmKXtGKHRoaXMuVSx1ZSh0aGlzLFwiRXJyb3Igb3BlbmluZyBYaHI6IFwiK2YubWVzc2FnZSkpO3RoaXMuTyg1LGYpO3JldHVybn1hPWN8fFwiXCI7dmFyIGU9dGhpcy5oZWFkZXJzLmNsb25lKCk7ZCYmJGQoZCxmdW5jdGlvbihhLGIpe2Uuc2V0KGIsYSl9KTtkPUdhKGUua2EoKSk7Yz1sLkZvcm1EYXRhJiZhIGluc3RhbmNlb2YgbC5Gb3JtRGF0YTshSGEodGUsYil8fGR8fGN8fGUuc2V0KFwiQ29udGVudC1UeXBlXCIsXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOFwiKTtlLmZvckVhY2goZnVuY3Rpb24oYSxiKXt0aGlzLmIuc2V0UmVxdWVzdEhlYWRlcihiLGEpfSx0aGlzKTt0aGlzLkxkJiYodGhpcy5iLnJlc3BvbnNlVHlwZT10aGlzLkxkKTtcIndpdGhDcmVkZW50aWFsc1wiaW4gdGhpcy5iJiZ0aGlzLmIud2l0aENyZWRlbnRpYWxzIT09dGhpcy5hZSYmKHRoaXMuYi53aXRoQ3JlZGVudGlhbHM9XG50aGlzLmFlKTt0cnl7dmUodGhpcyksMDx0aGlzLmtiJiYodGhpcy54Yz13ZSh0aGlzLmIpLEYodGhpcy5VLHVlKHRoaXMsXCJXaWxsIGFib3J0IGFmdGVyIFwiK3RoaXMua2IrXCJtcyBpZiBpbmNvbXBsZXRlLCB4aHIyIFwiK3RoaXMueGMpKSx0aGlzLnhjPyh0aGlzLmIudGltZW91dD10aGlzLmtiLHRoaXMuYi5vbnRpbWVvdXQ9cih0aGlzLktiLHRoaXMpKTp0aGlzLnVjPWxlKHRoaXMuS2IsdGhpcy5rYix0aGlzKSksRih0aGlzLlUsdWUodGhpcyxcIlNlbmRpbmcgcmVxdWVzdFwiKSksdGhpcy5jYz0hMCx0aGlzLmIuc2VuZChhKSx0aGlzLmNjPSExfWNhdGNoKGYpe0YodGhpcy5VLHVlKHRoaXMsXCJTZW5kIGVycm9yOiBcIitmLm1lc3NhZ2UpKSx0aGlzLk8oNSxmKX19O3ZhciB3ZT1mdW5jdGlvbihhKXtyZXR1cm4gQSYmQig5KSYmZmEoYS50aW1lb3V0KSYmdm9pZCAwIT09YS5vbnRpbWVvdXR9LEZhPWZ1bmN0aW9uKGEpe3JldHVyblwiY29udGVudC10eXBlXCI9PWEudG9Mb3dlckNhc2UoKX07XG5HLnByb3RvdHlwZS5LYj1mdW5jdGlvbigpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBhYSYmdGhpcy5iJiYodGhpcy53Yj1cIlRpbWVkIG91dCBhZnRlciBcIit0aGlzLmtiK1wibXMsIGFib3J0aW5nXCIsRih0aGlzLlUsdWUodGhpcyx0aGlzLndiKSksdGhpcy5kaXNwYXRjaEV2ZW50KFwidGltZW91dFwiKSx0aGlzLmFib3J0KDgpKX07Ry5wcm90b3R5cGUuTz1mdW5jdGlvbihhLGIpe3RoaXMucWE9ITE7dGhpcy5iJiYodGhpcy5DYT0hMCx0aGlzLmIuYWJvcnQoKSx0aGlzLkNhPSExKTt0aGlzLndiPWI7eGUodGhpcyk7eWUodGhpcyl9O3ZhciB4ZT1mdW5jdGlvbihhKXthLkhjfHwoYS5IYz0hMCxhLmRpc3BhdGNoRXZlbnQoXCJjb21wbGV0ZVwiKSxhLmRpc3BhdGNoRXZlbnQoXCJlcnJvclwiKSl9O1xuRy5wcm90b3R5cGUuYWJvcnQ9ZnVuY3Rpb24oKXt0aGlzLmImJnRoaXMucWEmJihGKHRoaXMuVSx1ZSh0aGlzLFwiQWJvcnRpbmdcIikpLHRoaXMucWE9ITEsdGhpcy5DYT0hMCx0aGlzLmIuYWJvcnQoKSx0aGlzLkNhPSExLHRoaXMuZGlzcGF0Y2hFdmVudChcImNvbXBsZXRlXCIpLHRoaXMuZGlzcGF0Y2hFdmVudChcImFib3J0XCIpLHllKHRoaXMpKX07Ry5wcm90b3R5cGUuUmE9ZnVuY3Rpb24oKXt0aGlzLmImJih0aGlzLnFhJiYodGhpcy5xYT0hMSx0aGlzLkNhPSEwLHRoaXMuYi5hYm9ydCgpLHRoaXMuQ2E9ITEpLHllKHRoaXMsITApKTtHLmhkLlJhLmNhbGwodGhpcyl9O0cucHJvdG90eXBlLklkPWZ1bmN0aW9uKCl7dGhpcy5pc0Rpc3Bvc2VkKCl8fCh0aGlzLk5jfHx0aGlzLmNjfHx0aGlzLkNhP3plKHRoaXMpOnRoaXMuJGUoKSl9O0cucHJvdG90eXBlLiRlPWZ1bmN0aW9uKCl7emUodGhpcyl9O1xudmFyIHplPWZ1bmN0aW9uKGEpe2lmKGEucWEmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhYSlpZihhLnpjWzFdJiY0PT1BZShhKSYmMj09QmUoYSkpRihhLlUsdWUoYSxcIkxvY2FsIHJlcXVlc3QgZXJyb3IgZGV0ZWN0ZWQgYW5kIGlnbm9yZWRcIikpO2Vsc2UgaWYoYS5jYyYmND09QWUoYSkpbGUoYS5JZCwwLGEpO2Vsc2UgaWYoYS5kaXNwYXRjaEV2ZW50KFwicmVhZHlzdGF0ZWNoYW5nZVwiKSw0PT1BZShhKSl7RihhLlUsdWUoYSxcIlJlcXVlc3QgY29tcGxldGVcIikpO2EucWE9ITE7dHJ5e3ZhciBiPUJlKGEpLGM7YTpzd2l0Y2goYil7Y2FzZSAyMDA6Y2FzZSAyMDE6Y2FzZSAyMDI6Y2FzZSAyMDQ6Y2FzZSAyMDY6Y2FzZSAzMDQ6Y2FzZSAxMjIzOmM9ITA7YnJlYWsgYTtkZWZhdWx0OmM9ITF9dmFyIGQ7aWYoIShkPWMpKXt2YXIgZTtpZihlPTA9PT1iKXt2YXIgZj1TdHJpbmcoYS5lYykubWF0Y2gobmUpWzFdfHxudWxsO2lmKCFmJiZsLnNlbGYmJmwuc2VsZi5sb2NhdGlvbil2YXIgZz1sLnNlbGYubG9jYXRpb24ucHJvdG9jb2wsXG5mPWcuc3Vic3RyKDAsZy5sZW5ndGgtMSk7ZT0hc2UudGVzdChmP2YudG9Mb3dlckNhc2UoKTpcIlwiKX1kPWV9aWYoZClhLmRpc3BhdGNoRXZlbnQoXCJjb21wbGV0ZVwiKSxhLmRpc3BhdGNoRXZlbnQoXCJzdWNjZXNzXCIpO2Vsc2V7dmFyIGs7dHJ5e2s9MjxBZShhKT9hLmIuc3RhdHVzVGV4dDpcIlwifWNhdGNoKG4pe0YoYS5VLFwiQ2FuIG5vdCBnZXQgc3RhdHVzOiBcIituLm1lc3NhZ2UpLGs9XCJcIn1hLndiPWsrXCIgW1wiK0JlKGEpK1wiXVwiO3hlKGEpfX1maW5hbGx5e3llKGEpfX19O0cucHJvdG90eXBlLkhkPWZ1bmN0aW9uKGEsYil7dyhcInByb2dyZXNzXCI9PT1hLnR5cGUsXCJnb29nLm5ldC5FdmVudFR5cGUuUFJPR1JFU1MgaXMgb2YgdGhlIHNhbWUgdHlwZSBhcyByYXcgWEhSIHByb2dyZXNzLlwiKTt0aGlzLmRpc3BhdGNoRXZlbnQoQ2UoYSxcInByb2dyZXNzXCIpKTt0aGlzLmRpc3BhdGNoRXZlbnQoQ2UoYSxiP1wiZG93bmxvYWRwcm9ncmVzc1wiOlwidXBsb2FkcHJvZ3Jlc3NcIikpfTtcbnZhciBDZT1mdW5jdGlvbihhLGIpe3JldHVybnt0eXBlOmIsbGVuZ3RoQ29tcHV0YWJsZTphLmxlbmd0aENvbXB1dGFibGUsbG9hZGVkOmEubG9hZGVkLHRvdGFsOmEudG90YWx9fSx5ZT1mdW5jdGlvbihhLGIpe2lmKGEuYil7dmUoYSk7dmFyIGM9YS5iLGQ9YS56Y1swXT9iYTpudWxsO2EuYj1udWxsO2EuemM9bnVsbDtifHxhLmRpc3BhdGNoRXZlbnQoXCJyZWFkeVwiKTt0cnl7Yy5vbnJlYWR5c3RhdGVjaGFuZ2U9ZH1jYXRjaChlKXsoYT1hLlUpJiZhLmxvZyhlZSxcIlByb2JsZW0gZW5jb3VudGVyZWQgcmVzZXR0aW5nIG9ucmVhZHlzdGF0ZWNoYW5nZTogXCIrZS5tZXNzYWdlLHZvaWQgMCl9fX0sdmU9ZnVuY3Rpb24oYSl7YS5iJiZhLnhjJiYoYS5iLm9udGltZW91dD1udWxsKTtmYShhLnVjKSYmKGwuY2xlYXJUaW1lb3V0KGEudWMpLGEudWM9bnVsbCl9LEFlPWZ1bmN0aW9uKGEpe3JldHVybiBhLmI/YS5iLnJlYWR5U3RhdGU6MH0sQmU9ZnVuY3Rpb24oYSl7dHJ5e3JldHVybiAyPEFlKGEpP1xuYS5iLnN0YXR1czotMX1jYXRjaChiKXtyZXR1cm4tMX19LERlPWZ1bmN0aW9uKGEpe3RyeXtyZXR1cm4gYS5iP2EuYi5yZXNwb25zZVRleHQ6XCJcIn1jYXRjaChiKXtyZXR1cm4gRihhLlUsXCJDYW4gbm90IGdldCByZXNwb25zZVRleHQ6IFwiK2IubWVzc2FnZSksXCJcIn19LHVlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIrXCIgW1wiK2EuRWQrXCIgXCIrYS5lYytcIiBcIitCZShhKStcIl1cIn07dmFyIEVlPWZ1bmN0aW9uKGEsYil7dGhpcy4kPXRoaXMuSmE9dGhpcy5kYT1cIlwiO3RoaXMuWmE9bnVsbDt0aGlzLkJhPXRoaXMuc2E9XCJcIjt0aGlzLlI9dGhpcy5QZT0hMTt2YXIgYzthIGluc3RhbmNlb2YgRWU/KHRoaXMuUj12b2lkIDAhPT1iP2I6YS5SLEZlKHRoaXMsYS5kYSksYz1hLkphLEgodGhpcyksdGhpcy5KYT1jLEdlKHRoaXMsYS4kKSxIZSh0aGlzLGEuWmEpLEllKHRoaXMsYS5zYSksSmUodGhpcyxhLlcuY2xvbmUoKSksYT1hLkJhLEgodGhpcyksdGhpcy5CYT1hKTphJiYoYz1TdHJpbmcoYSkubWF0Y2gobmUpKT8odGhpcy5SPSEhYixGZSh0aGlzLGNbMV18fFwiXCIsITApLGE9Y1syXXx8XCJcIixIKHRoaXMpLHRoaXMuSmE9S2UoYSksR2UodGhpcyxjWzNdfHxcIlwiLCEwKSxIZSh0aGlzLGNbNF0pLEllKHRoaXMsY1s1XXx8XCJcIiwhMCksSmUodGhpcyxjWzZdfHxcIlwiLCEwKSxhPWNbN118fFwiXCIsSCh0aGlzKSx0aGlzLkJhPUtlKGEpKToodGhpcy5SPSEhYix0aGlzLlc9bmV3IEkobnVsbCxcbjAsdGhpcy5SKSl9O0VlLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3ZhciBhPVtdLGI9dGhpcy5kYTtiJiZhLnB1c2goTGUoYixNZSwhMCksXCI6XCIpO3ZhciBjPXRoaXMuJDtpZihjfHxcImZpbGVcIj09YilhLnB1c2goXCIvL1wiKSwoYj10aGlzLkphKSYmYS5wdXNoKExlKGIsTWUsITApLFwiQFwiKSxhLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhjKSkucmVwbGFjZSgvJTI1KFswLTlhLWZBLUZdezJ9KS9nLFwiJSQxXCIpKSxjPXRoaXMuWmEsbnVsbCE9YyYmYS5wdXNoKFwiOlwiLFN0cmluZyhjKSk7aWYoYz10aGlzLnNhKXRoaXMuJCYmXCIvXCIhPWMuY2hhckF0KDApJiZhLnB1c2goXCIvXCIpLGEucHVzaChMZShjLFwiL1wiPT1jLmNoYXJBdCgwKT9OZTpPZSwhMCkpOyhjPXRoaXMuVy50b1N0cmluZygpKSYmYS5wdXNoKFwiP1wiLGMpOyhjPXRoaXMuQmEpJiZhLnB1c2goXCIjXCIsTGUoYyxQZSkpO3JldHVybiBhLmpvaW4oXCJcIil9O1xuRWUucHJvdG90eXBlLnJlc29sdmU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5jbG9uZSgpLGM9ISFhLmRhO2M/RmUoYixhLmRhKTpjPSEhYS5KYTtpZihjKXt2YXIgZD1hLkphO0goYik7Yi5KYT1kfWVsc2UgYz0hIWEuJDtjP0dlKGIsYS4kKTpjPW51bGwhPWEuWmE7ZD1hLnNhO2lmKGMpSGUoYixhLlphKTtlbHNlIGlmKGM9ISFhLnNhKXtpZihcIi9cIiE9ZC5jaGFyQXQoMCkpaWYodGhpcy4kJiYhdGhpcy5zYSlkPVwiL1wiK2Q7ZWxzZXt2YXIgZT1iLnNhLmxhc3RJbmRleE9mKFwiL1wiKTstMSE9ZSYmKGQ9Yi5zYS5zdWJzdHIoMCxlKzEpK2QpfWU9ZDtpZihcIi4uXCI9PWV8fFwiLlwiPT1lKWQ9XCJcIjtlbHNlIGlmKHYoZSxcIi4vXCIpfHx2KGUsXCIvLlwiKSl7Zm9yKHZhciBkPTA9PWUubGFzdEluZGV4T2YoXCIvXCIsMCksZT1lLnNwbGl0KFwiL1wiKSxmPVtdLGc9MDtnPGUubGVuZ3RoOyl7dmFyIGs9ZVtnKytdO1wiLlwiPT1rP2QmJmc9PWUubGVuZ3RoJiZmLnB1c2goXCJcIik6XCIuLlwiPT1rPygoMTxmLmxlbmd0aHx8XG4xPT1mLmxlbmd0aCYmXCJcIiE9ZlswXSkmJmYucG9wKCksZCYmZz09ZS5sZW5ndGgmJmYucHVzaChcIlwiKSk6KGYucHVzaChrKSxkPSEwKX1kPWYuam9pbihcIi9cIil9ZWxzZSBkPWV9Yz9JZShiLGQpOmM9XCJcIiE9PWEuVy50b1N0cmluZygpO2M/SmUoYixhLlcuY2xvbmUoKSk6Yz0hIWEuQmE7YyYmKGE9YS5CYSxIKGIpLGIuQmE9YSk7cmV0dXJuIGJ9O0VlLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRWUodGhpcyl9O1xudmFyIEZlPWZ1bmN0aW9uKGEsYixjKXtIKGEpO2EuZGE9Yz9LZShiLCEwKTpiO2EuZGEmJihhLmRhPWEuZGEucmVwbGFjZSgvOiQvLFwiXCIpKX0sR2U9ZnVuY3Rpb24oYSxiLGMpe0goYSk7YS4kPWM/S2UoYiwhMCk6Yn0sSGU9ZnVuY3Rpb24oYSxiKXtIKGEpO2lmKGIpe2I9TnVtYmVyKGIpO2lmKGlzTmFOKGIpfHwwPmIpdGhyb3cgRXJyb3IoXCJCYWQgcG9ydCBudW1iZXIgXCIrYik7YS5aYT1ifWVsc2UgYS5aYT1udWxsfSxJZT1mdW5jdGlvbihhLGIsYyl7SChhKTthLnNhPWM/S2UoYiwhMCk6Yn0sSmU9ZnVuY3Rpb24oYSxiLGMpe0goYSk7YiBpbnN0YW5jZW9mIEk/KGEuVz1iLGEuVy5lZChhLlIpKTooY3x8KGI9TGUoYixRZSkpLGEuVz1uZXcgSShiLDAsYS5SKSl9LEo9ZnVuY3Rpb24oYSxiLGMpe0goYSk7YS5XLnNldChiLGMpfSxSZT1mdW5jdGlvbihhLGIpe3JldHVybiBhLlcuZ2V0KGIpfSxTZT1mdW5jdGlvbihhLGIpe0goYSk7YS5XLnJlbW92ZShiKX0sSD1mdW5jdGlvbihhKXtpZihhLlBlKXRocm93IEVycm9yKFwiVHJpZWQgdG8gbW9kaWZ5IGEgcmVhZC1vbmx5IFVyaVwiKTtcbn07RWUucHJvdG90eXBlLmVkPWZ1bmN0aW9uKGEpe3RoaXMuUj1hO3RoaXMuVyYmdGhpcy5XLmVkKGEpO3JldHVybiB0aGlzfTtcbnZhciBUZT1mdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIEVlP2EuY2xvbmUoKTpuZXcgRWUoYSx2b2lkIDApfSxVZT1mdW5jdGlvbihhLGIpe3ZhciBjPW5ldyBFZShudWxsLHZvaWQgMCk7RmUoYyxcImh0dHBzXCIpO2EmJkdlKGMsYSk7YiYmSWUoYyxiKTtyZXR1cm4gY30sS2U9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT9iP2RlY29kZVVSSShhLnJlcGxhY2UoLyUyNS9nLFwiJTI1MjVcIikpOmRlY29kZVVSSUNvbXBvbmVudChhKTpcIlwifSxMZT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIHAoYSk/KGE9ZW5jb2RlVVJJKGEpLnJlcGxhY2UoYixWZSksYyYmKGE9YS5yZXBsYWNlKC8lMjUoWzAtOWEtZkEtRl17Mn0pL2csXCIlJDFcIikpLGEpOm51bGx9LFZlPWZ1bmN0aW9uKGEpe2E9YS5jaGFyQ29kZUF0KDApO3JldHVyblwiJVwiKyhhPj40JjE1KS50b1N0cmluZygxNikrKGEmMTUpLnRvU3RyaW5nKDE2KX0sTWU9L1sjXFwvXFw/QF0vZyxPZT0vW1xcI1xcPzpdL2csTmU9L1tcXCNcXD9dL2csUWU9L1tcXCNcXD9AXS9nLFxuUGU9LyMvZyxJPWZ1bmN0aW9uKGEsYixjKXt0aGlzLm89dGhpcy5sPW51bGw7dGhpcy5OPWF8fG51bGw7dGhpcy5SPSEhY30sV2U9ZnVuY3Rpb24oYSl7YS5sfHwoYS5sPW5ldyBWZCxhLm89MCxhLk4mJnBlKGEuTixmdW5jdGlvbihiLGMpe2EuYWRkKGRlY29kZVVSSUNvbXBvbmVudChiLnJlcGxhY2UoL1xcKy9nLFwiIFwiKSksYyl9KSl9LFllPWZ1bmN0aW9uKGEpe3ZhciBiPVpkKGEpO2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBiKXRocm93IEVycm9yKFwiS2V5cyBhcmUgdW5kZWZpbmVkXCIpO3ZhciBjPW5ldyBJKG51bGwsMCx2b2lkIDApO2E9WWQoYSk7Zm9yKHZhciBkPTA7ZDxiLmxlbmd0aDtkKyspe3ZhciBlPWJbZF0sZj1hW2RdO2RhKGYpP1hlKGMsZSxmKTpjLmFkZChlLGYpfXJldHVybiBjfTtoPUkucHJvdG90eXBlO1xuaC5hZGQ9ZnVuY3Rpb24oYSxiKXtXZSh0aGlzKTt0aGlzLk49bnVsbDthPXRoaXMuUChhKTt2YXIgYz10aGlzLmwuZ2V0KGEpO2N8fHRoaXMubC5zZXQoYSxjPVtdKTtjLnB1c2goYik7dGhpcy5vPXlhKHRoaXMubykrMTtyZXR1cm4gdGhpc307aC5yZW1vdmU9ZnVuY3Rpb24oYSl7V2UodGhpcyk7YT10aGlzLlAoYSk7cmV0dXJuIHRoaXMubC5wYihhKT8odGhpcy5OPW51bGwsdGhpcy5vPXlhKHRoaXMubyktdGhpcy5sLmdldChhKS5sZW5ndGgsdGhpcy5sLnJlbW92ZShhKSk6ITF9O2gucGI9ZnVuY3Rpb24oYSl7V2UodGhpcyk7YT10aGlzLlAoYSk7cmV0dXJuIHRoaXMubC5wYihhKX07aC5rYT1mdW5jdGlvbigpe1dlKHRoaXMpO2Zvcih2YXIgYT10aGlzLmwuWSgpLGI9dGhpcy5sLmthKCksYz1bXSxkPTA7ZDxiLmxlbmd0aDtkKyspZm9yKHZhciBlPWFbZF0sZj0wO2Y8ZS5sZW5ndGg7ZisrKWMucHVzaChiW2RdKTtyZXR1cm4gY307XG5oLlk9ZnVuY3Rpb24oYSl7V2UodGhpcyk7dmFyIGI9W107aWYocChhKSl0aGlzLnBiKGEpJiYoYj1MYShiLHRoaXMubC5nZXQodGhpcy5QKGEpKSkpO2Vsc2V7YT10aGlzLmwuWSgpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWI9TGEoYixhW2NdKX1yZXR1cm4gYn07aC5zZXQ9ZnVuY3Rpb24oYSxiKXtXZSh0aGlzKTt0aGlzLk49bnVsbDthPXRoaXMuUChhKTt0aGlzLnBiKGEpJiYodGhpcy5vPXlhKHRoaXMubyktdGhpcy5sLmdldChhKS5sZW5ndGgpO3RoaXMubC5zZXQoYSxbYl0pO3RoaXMubz15YSh0aGlzLm8pKzE7cmV0dXJuIHRoaXN9O2guZ2V0PWZ1bmN0aW9uKGEsYil7YT1hP3RoaXMuWShhKTpbXTtyZXR1cm4gMDxhLmxlbmd0aD9TdHJpbmcoYVswXSk6Yn07dmFyIFhlPWZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZShiKTswPGMubGVuZ3RoJiYoYS5OPW51bGwsYS5sLnNldChhLlAoYiksTWEoYykpLGEubz15YShhLm8pK2MubGVuZ3RoKX07XG5JLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe2lmKHRoaXMuTilyZXR1cm4gdGhpcy5OO2lmKCF0aGlzLmwpcmV0dXJuXCJcIjtmb3IodmFyIGE9W10sYj10aGlzLmwua2EoKSxjPTA7YzxiLmxlbmd0aDtjKyspZm9yKHZhciBkPWJbY10sZT1lbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGQpKSxkPXRoaXMuWShkKSxmPTA7ZjxkLmxlbmd0aDtmKyspe3ZhciBnPWU7XCJcIiE9PWRbZl0mJihnKz1cIj1cIitlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGRbZl0pKSk7YS5wdXNoKGcpfXJldHVybiB0aGlzLk49YS5qb2luKFwiJlwiKX07SS5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgSTthLk49dGhpcy5OO3RoaXMubCYmKGEubD10aGlzLmwuY2xvbmUoKSxhLm89dGhpcy5vKTtyZXR1cm4gYX07SS5wcm90b3R5cGUuUD1mdW5jdGlvbihhKXthPVN0cmluZyhhKTt0aGlzLlImJihhPWEudG9Mb3dlckNhc2UoKSk7cmV0dXJuIGF9O1xuSS5wcm90b3R5cGUuZWQ9ZnVuY3Rpb24oYSl7YSYmIXRoaXMuUiYmKFdlKHRoaXMpLHRoaXMuTj1udWxsLHRoaXMubC5mb3JFYWNoKGZ1bmN0aW9uKGEsYyl7dmFyIGI9Yy50b0xvd2VyQ2FzZSgpO2MhPWImJih0aGlzLnJlbW92ZShjKSxYZSh0aGlzLGIsYSkpfSx0aGlzKSk7dGhpcy5SPWF9O3ZhciBaZT1mdW5jdGlvbigpe3ZhciBhPUsoKTtyZXR1cm4gQSYmISFtYiYmMTE9PW1ifHwvRWRnZVxcL1xcZCsvLnRlc3QoYSl9LCRlPWZ1bmN0aW9uKCl7cmV0dXJuIGwud2luZG93JiZsLndpbmRvdy5sb2NhdGlvbi5ocmVmfHxcIlwifSxhZj1mdW5jdGlvbihhLGIpe2I9Ynx8bC53aW5kb3c7dmFyIGM9XCJhYm91dDpibGFua1wiO2EmJihjPW9jKHJjKGEpKSk7Yi5sb2NhdGlvbi5ocmVmPWN9LGJmPWZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZDtmb3IoZCBpbiBhKWQgaW4gYj90eXBlb2YgYVtkXSE9dHlwZW9mIGJbZF0/Yy5wdXNoKGQpOmRhKGFbZF0pP1JhKGFbZF0sYltkXSl8fGMucHVzaChkKTpcIm9iamVjdFwiPT10eXBlb2YgYVtkXSYmbnVsbCE9YVtkXSYmbnVsbCE9YltkXT8wPGJmKGFbZF0sYltkXSkubGVuZ3RoJiZjLnB1c2goZCk6YVtkXSE9PWJbZF0mJmMucHVzaChkKTpjLnB1c2goZCk7Zm9yKGQgaW4gYilkIGluIGF8fGMucHVzaChkKTtyZXR1cm4gY30sZGY9ZnVuY3Rpb24oKXt2YXIgYTtcbmE9SygpO2E9XCJDaHJvbWVcIiE9Y2YoYSk/bnVsbDooYT1hLm1hdGNoKC9cXHNDaHJvbWVcXC8oXFxkKykvaSkpJiYyPT1hLmxlbmd0aD9wYXJzZUludChhWzFdLDEwKTpudWxsO3JldHVybiBhJiYzMD5hPyExOiFBfHwhbWJ8fDk8bWJ9LGVmPWZ1bmN0aW9uKGEpe2E9KGF8fEsoKSkudG9Mb3dlckNhc2UoKTtyZXR1cm4gYS5tYXRjaCgvYW5kcm9pZC8pfHxhLm1hdGNoKC93ZWJvcy8pfHxhLm1hdGNoKC9pcGhvbmV8aXBhZHxpcG9kLyl8fGEubWF0Y2goL2JsYWNrYmVycnkvKXx8YS5tYXRjaCgvd2luZG93cyBwaG9uZS8pfHxhLm1hdGNoKC9pZW1vYmlsZS8pPyEwOiExfSxmZj1mdW5jdGlvbihhKXthPWF8fGwud2luZG93O3RyeXthLmNsb3NlKCl9Y2F0Y2goYil7fX0sZ2Y9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPU1hdGguZmxvb3IoMUU5Kk1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKCk7Yj1ifHw1MDA7Yz1jfHw2MDA7dmFyIGU9KHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQtYykvMixmPSh3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGgtXG5iKS8yO2I9e3dpZHRoOmIsaGVpZ2h0OmMsdG9wOjA8ZT9lOjAsbGVmdDowPGY/ZjowLGxvY2F0aW9uOiEwLHJlc2l6YWJsZTohMCxzdGF0dXNiYXI6ITAsdG9vbGJhcjohMX07Yz1LKCkudG9Mb3dlckNhc2UoKTtkJiYoYi50YXJnZXQ9ZCx2KGMsXCJjcmlvcy9cIikmJihiLnRhcmdldD1cIl9ibGFua1wiKSk7XCJGaXJlZm94XCI9PWNmKEsoKSkmJihhPWF8fFwiaHR0cDovL2xvY2FsaG9zdFwiLGIuc2Nyb2xsYmFycz0hMCk7dmFyIGc7Yz1hfHxcImFib3V0OmJsYW5rXCI7KGQ9Yil8fChkPXt9KTthPXdpbmRvdztiPWMgaW5zdGFuY2VvZiBuYz9jOnJjKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBjLmhyZWY/Yy5ocmVmOlN0cmluZyhjKSk7Yz1kLnRhcmdldHx8Yy50YXJnZXQ7ZT1bXTtmb3IoZyBpbiBkKXN3aXRjaChnKXtjYXNlIFwid2lkdGhcIjpjYXNlIFwiaGVpZ2h0XCI6Y2FzZSBcInRvcFwiOmNhc2UgXCJsZWZ0XCI6ZS5wdXNoKGcrXCI9XCIrZFtnXSk7YnJlYWs7Y2FzZSBcInRhcmdldFwiOmNhc2UgXCJub3JlZmVycmVyXCI6YnJlYWs7XG5kZWZhdWx0OmUucHVzaChnK1wiPVwiKyhkW2ddPzE6MCkpfWc9ZS5qb2luKFwiLFwiKTsoeihcImlQaG9uZVwiKSYmIXooXCJpUG9kXCIpJiYheihcImlQYWRcIil8fHooXCJpUGFkXCIpfHx6KFwiaVBvZFwiKSkmJmEubmF2aWdhdG9yJiZhLm5hdmlnYXRvci5zdGFuZGFsb25lJiZjJiZcIl9zZWxmXCIhPWM/KGc9YS5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQVwiKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgSFRNTEFuY2hvckVsZW1lbnQmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBMb2NhdGlvbiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEVsZW1lbnQmJihlPWcmJihnIGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnR8fCEoZyBpbnN0YW5jZW9mIExvY2F0aW9ufHxnIGluc3RhbmNlb2YgRWxlbWVudCkpLGY9Z2EoZyk/Zy5jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZXx8Zy5jb25zdHJ1Y3Rvci5uYW1lfHxPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZyk6dm9pZCAwPT09Zz9cInVuZGVmaW5lZFwiOm51bGw9PT1nP1wibnVsbFwiOlxudHlwZW9mIGcsdyhlLFwiQXJndW1lbnQgaXMgbm90IGEgSFRNTEFuY2hvckVsZW1lbnQgKG9yIGEgbm9uLUVsZW1lbnQgbW9jayk7IGdvdDogJXNcIixmKSksYj1iIGluc3RhbmNlb2YgbmM/YjpyYyhiKSxnLmhyZWY9b2MoYiksZy5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIixjKSxkLm5vcmVmZXJyZXImJmcuc2V0QXR0cmlidXRlKFwicmVsXCIsXCJub3JlZmVycmVyXCIpLGQ9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50XCIpLGQuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLGEsMSksZy5kaXNwYXRjaEV2ZW50KGQpLGc9e30pOmQubm9yZWZlcnJlcj8oZz1hLm9wZW4oXCJcIixjLGcpLGQ9b2MoYiksZyYmKGRiJiZ2KGQsXCI7XCIpJiYoZD1cIidcIitkLnJlcGxhY2UoLycvZyxcIiUyN1wiKStcIidcIiksZy5vcGVuZXI9bnVsbCxhPWxjKFwiYi8xMjAxNDQxMiwgbWV0YSB0YWcgd2l0aCBzYW5pdGl6ZWQgVVJMXCIpLHRhLnRlc3QoZCkmJigtMSE9ZC5pbmRleE9mKFwiJlwiKSYmKGQ9ZC5yZXBsYWNlKG5hLFxuXCImYW1wO1wiKSksLTEhPWQuaW5kZXhPZihcIjxcIikmJihkPWQucmVwbGFjZShvYSxcIiZsdDtcIikpLC0xIT1kLmluZGV4T2YoXCI+XCIpJiYoZD1kLnJlcGxhY2UocGEsXCImZ3Q7XCIpKSwtMSE9ZC5pbmRleE9mKCdcIicpJiYoZD1kLnJlcGxhY2UocWEsXCImcXVvdDtcIikpLC0xIT1kLmluZGV4T2YoXCInXCIpJiYoZD1kLnJlcGxhY2UocmEsXCImIzM5O1wiKSksLTEhPWQuaW5kZXhPZihcIlxceDAwXCIpJiYoZD1kLnJlcGxhY2Uoc2EsXCImIzA7XCIpKSksZD0nPE1FVEEgSFRUUC1FUVVJVj1cInJlZnJlc2hcIiBjb250ZW50PVwiMDsgdXJsPScrZCsnXCI+Jyx6YShrYyhhKSxcIm11c3QgcHJvdmlkZSBqdXN0aWZpY2F0aW9uXCIpLHcoIS9eW1xcc1xceGEwXSokLy50ZXN0KGtjKGEpKSxcIm11c3QgcHJvdmlkZSBub24tZW1wdHkganVzdGlmaWNhdGlvblwiKSxnLmRvY3VtZW50LndyaXRlKE1jKChuZXcgTGMpLk1lKGQpKSksZy5kb2N1bWVudC5jbG9zZSgpKSk6Zz1hLm9wZW4ob2MoYiksYyxnKTtpZihnKXRyeXtnLmZvY3VzKCl9Y2F0Y2goayl7fXJldHVybiBnfSxcbmhmPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgQyhmdW5jdGlvbihiKXt2YXIgYz1mdW5jdGlvbigpe21lKDJFMykudGhlbihmdW5jdGlvbigpe2lmKCFhfHxhLmNsb3NlZCliKCk7ZWxzZSByZXR1cm4gYygpfSl9O3JldHVybiBjKCl9KX0samY9L15cXGR7MSwzfVxcLlxcZHsxLDN9XFwuXFxkezEsM31cXC5cXGR7MSwzfSQvLGtmPWZ1bmN0aW9uKCl7dmFyIGE9bnVsbDtyZXR1cm4obmV3IEMoZnVuY3Rpb24oYil7XCJjb21wbGV0ZVwiPT1sLmRvY3VtZW50LnJlYWR5U3RhdGU/YigpOihhPWZ1bmN0aW9uKCl7YigpfSxhYyh3aW5kb3csXCJsb2FkXCIsYSkpfSkpLmMoZnVuY3Rpb24oYil7Y2Mod2luZG93LFwibG9hZFwiLGEpO3Rocm93IGI7fSl9LG1mPWZ1bmN0aW9uKCl7cmV0dXJuIGxmKHZvaWQgMCk/a2YoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBDKGZ1bmN0aW9uKGEsYil7dmFyIGM9bC5kb2N1bWVudCxkPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtiKEVycm9yKFwiQ29yZG92YSBmcmFtZXdvcmsgaXMgbm90IHJlYWR5LlwiKSl9LFxuMUUzKTtjLmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VyZWFkeVwiLGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGQpO2EoKX0sITEpfSl9KTpFKEVycm9yKFwiQ29yZG92YSBtdXN0IHJ1biBpbiBhbiBBbmRyb2lkIG9yIGlPUyBmaWxlIHNjaGVtZS5cIikpfSxsZj1mdW5jdGlvbihhKXthPWF8fEsoKTtyZXR1cm4hKFwiZmlsZTpcIiE9PW5mKCl8fCFhLnRvTG93ZXJDYXNlKCkubWF0Y2goL2lwaG9uZXxpcGFkfGlwb2R8YW5kcm9pZC8pKX0sTD1mdW5jdGlvbigpe3JldHVybiBmaXJlYmFzZS5JTlRFUk5BTC5oYXNPd25Qcm9wZXJ0eShcInJlYWN0TmF0aXZlXCIpP1wiUmVhY3ROYXRpdmVcIjpsLmhhc093blByb3BlcnR5KFwicHJvY2Vzc1wiKT9cIk5vZGVcIjpcIkJyb3dzZXJcIn0sb2Y9ZnVuY3Rpb24oKXt2YXIgYT1MKCk7cmV0dXJuXCJSZWFjdE5hdGl2ZVwiPT09YXx8XCJOb2RlXCI9PT1hfSxjZj1mdW5jdGlvbihhKXt2YXIgYj1hLnRvTG93ZXJDYXNlKCk7aWYodihiLFwib3BlcmEvXCIpfHx2KGIsXCJvcHIvXCIpfHx2KGIsXG5cIm9waW9zL1wiKSlyZXR1cm5cIk9wZXJhXCI7aWYodihiLFwiaWVtb2JpbGVcIikpcmV0dXJuXCJJRU1vYmlsZVwiO2lmKHYoYixcIm1zaWVcIil8fHYoYixcInRyaWRlbnQvXCIpKXJldHVyblwiSUVcIjtpZih2KGIsXCJlZGdlL1wiKSlyZXR1cm5cIkVkZ2VcIjtpZih2KGIsXCJmaXJlZm94L1wiKSlyZXR1cm5cIkZpcmVmb3hcIjtpZih2KGIsXCJzaWxrL1wiKSlyZXR1cm5cIlNpbGtcIjtpZih2KGIsXCJibGFja2JlcnJ5XCIpKXJldHVyblwiQmxhY2tiZXJyeVwiO2lmKHYoYixcIndlYm9zXCIpKXJldHVyblwiV2Vib3NcIjtpZighdihiLFwic2FmYXJpL1wiKXx8dihiLFwiY2hyb21lL1wiKXx8dihiLFwiY3Jpb3MvXCIpfHx2KGIsXCJhbmRyb2lkXCIpKWlmKCF2KGIsXCJjaHJvbWUvXCIpJiYhdihiLFwiY3Jpb3MvXCIpfHx2KGIsXCJlZGdlL1wiKSl7aWYodihiLFwiYW5kcm9pZFwiKSlyZXR1cm5cIkFuZHJvaWRcIjtpZigoYT1hLm1hdGNoKC8oW2EtekEtWlxcZFxcLl0rKVxcL1thLXpBLVpcXGRcXC5dKiQvKSkmJjI9PWEubGVuZ3RoKXJldHVybiBhWzFdfWVsc2UgcmV0dXJuXCJDaHJvbWVcIjtcbmVsc2UgcmV0dXJuXCJTYWZhcmlcIjtyZXR1cm5cIk90aGVyXCJ9LHBmPWZ1bmN0aW9uKGEpe3ZhciBiPUwoKTtyZXR1cm4oXCJCcm93c2VyXCI9PT1iP2NmKEsoKSk6YikrXCIvSnNDb3JlL1wiK2F9LEs9ZnVuY3Rpb24oKXtyZXR1cm4gbC5uYXZpZ2F0b3ImJmwubmF2aWdhdG9yLnVzZXJBZ2VudHx8XCJcIn0sTT1mdW5jdGlvbihhLGIpe2E9YS5zcGxpdChcIi5cIik7Yj1ifHxsO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGgmJlwib2JqZWN0XCI9PXR5cGVvZiBiJiZudWxsIT1iO2MrKyliPWJbYVtjXV07YyE9YS5sZW5ndGgmJihiPXZvaWQgMCk7cmV0dXJuIGJ9LHJmPWZ1bmN0aW9uKCl7dmFyIGE7aWYoYT0oXCJodHRwOlwiPT09bmYoKXx8XCJodHRwczpcIj09PW5mKCl8fGxmKCkmJiExKSYmIW9mKCkpYTp7dHJ5e3ZhciBiPWwubG9jYWxTdG9yYWdlLGM9cWYoKTtpZihiKXtiLnNldEl0ZW0oYyxcIjFcIik7Yi5yZW1vdmVJdGVtKGMpO2E9WmUoKT8hIWwuaW5kZXhlZERCOiEwO2JyZWFrIGF9fWNhdGNoKGQpe31hPSExfXJldHVybiBhfSxcbm5mPWZ1bmN0aW9uKCl7cmV0dXJuIGwubG9jYXRpb24mJmwubG9jYXRpb24ucHJvdG9jb2x8fG51bGx9LHNmPWZ1bmN0aW9uKGEpe2E9YXx8SygpO3JldHVybiBlZihhKXx8XCJGaXJlZm94XCI9PWNmKGEpPyExOiEwfSx0Zj1mdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGE/bnVsbDp3YyhhKX0sdWY9ZnVuY3Rpb24oYSl7dmFyIGI9e30sYztmb3IoYyBpbiBhKWEuaGFzT3duUHJvcGVydHkoYykmJm51bGwhPT1hW2NdJiZ2b2lkIDAhPT1hW2NdJiYoYltjXT1hW2NdKTtyZXR1cm4gYn0sdmY9ZnVuY3Rpb24oYSl7aWYobnVsbCE9PWEpe3ZhciBiO3RyeXtiPXRjKGEpfWNhdGNoKGMpe3RyeXtiPUpTT04ucGFyc2UoYSl9Y2F0Y2goZCl7dGhyb3cgYzt9fXJldHVybiBifX0scWY9ZnVuY3Rpb24oYSl7cmV0dXJuIGE/YTpcIlwiK01hdGguZmxvb3IoMUU5Kk1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKCl9LHdmPWZ1bmN0aW9uKGEpe2E9YXx8SygpO3JldHVyblwiU2FmYXJpXCI9PVxuY2YoYSl8fGEudG9Mb3dlckNhc2UoKS5tYXRjaCgvaXBob25lfGlwYWR8aXBvZC8pPyExOiEwfSx4Zj1mdW5jdGlvbigpe3ZhciBhPWwuX19fanNsO2lmKGEmJmEuSClmb3IodmFyIGIgaW4gYS5IKWlmKGEuSFtiXS5yPWEuSFtiXS5yfHxbXSxhLkhbYl0uTD1hLkhbYl0uTHx8W10sYS5IW2JdLnI9YS5IW2JdLkwuY29uY2F0KCksYS5DUClmb3IodmFyIGM9MDtjPGEuQ1AubGVuZ3RoO2MrKylhLkNQW2NdPW51bGx9LHlmPWZ1bmN0aW9uKCl7cmV0dXJuIGwubmF2aWdhdG9yJiZcImJvb2xlYW5cIj09PXR5cGVvZiBsLm5hdmlnYXRvci5vbkxpbmU/bC5uYXZpZ2F0b3Iub25MaW5lOiEwfSx6Zj1mdW5jdGlvbihhLGIsYyxkKXtpZihhPmIpdGhyb3cgRXJyb3IoXCJTaG9ydCBkZWxheSBzaG91bGQgYmUgbGVzcyB0aGFuIGxvbmcgZGVsYXkhXCIpO3RoaXMubGY9YTt0aGlzLlVlPWI7YT1jfHxLKCk7ZD1kfHxMKCk7dGhpcy5PZT1lZihhKXx8XCJSZWFjdE5hdGl2ZVwiPT09ZH07XG56Zi5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuT2U/dGhpcy5VZTp0aGlzLmxmfTt2YXIgQWY7dHJ5e3ZhciBCZj17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoQmYsXCJhYmNkXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHZhbHVlOjF9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoQmYsXCJhYmNkXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHZhbHVlOjJ9KTtBZj0yPT1CZi5hYmNkfWNhdGNoKGEpe0FmPSExfVxudmFyIE49ZnVuY3Rpb24oYSxiLGMpe0FmP09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHZhbHVlOmN9KTphW2JdPWN9LENmPWZ1bmN0aW9uKGEsYil7aWYoYilmb3IodmFyIGMgaW4gYiliLmhhc093blByb3BlcnR5KGMpJiZOKGEsYyxiW2NdKX0sRGY9ZnVuY3Rpb24oYSl7dmFyIGI9e30sYztmb3IoYyBpbiBhKWEuaGFzT3duUHJvcGVydHkoYykmJihiW2NdPWFbY10pO3JldHVybiBifSxFZj1mdW5jdGlvbihhLGIpe2lmKCFifHwhYi5sZW5ndGgpcmV0dXJuITA7aWYoIWEpcmV0dXJuITE7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPWFbYltjXV07aWYodm9pZCAwPT09ZHx8bnVsbD09PWR8fFwiXCI9PT1kKXJldHVybiExfXJldHVybiEwfSxGZj1mdW5jdGlvbihhKXt2YXIgYj1hO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhJiZudWxsIT1hKXt2YXIgYj1cImxlbmd0aFwiaW4gYT9bXTp7fSxjO2ZvcihjIGluIGEpTihiLGMsXG5GZihhW2NdKSl9cmV0dXJuIGJ9O3ZhciBHZj1bXCJjbGllbnRfaWRcIixcInJlc3BvbnNlX3R5cGVcIixcInNjb3BlXCIsXCJyZWRpcmVjdF91cmlcIixcInN0YXRlXCJdLEhmPXtiZTp7QmI6NTAwLEFiOjYwMCxwcm92aWRlcklkOlwiZmFjZWJvb2suY29tXCIsb2M6R2Z9LGNlOntCYjo1MDAsQWI6NjIwLHByb3ZpZGVySWQ6XCJnaXRodWIuY29tXCIsb2M6R2Z9LGRlOntCYjo1MTUsQWI6NjgwLHByb3ZpZGVySWQ6XCJnb29nbGUuY29tXCIsb2M6R2Z9LGllOntCYjo0ODUsQWI6NzA1LHByb3ZpZGVySWQ6XCJ0d2l0dGVyLmNvbVwiLG9jOlwib2F1dGhfY29uc3VtZXJfa2V5IG9hdXRoX25vbmNlIG9hdXRoX3NpZ25hdHVyZSBvYXV0aF9zaWduYXR1cmVfbWV0aG9kIG9hdXRoX3RpbWVzdGFtcCBvYXV0aF90b2tlbiBvYXV0aF92ZXJzaW9uXCIuc3BsaXQoXCIgXCIpfX0sSWY9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiIGluIEhmKWlmKEhmW2JdLnByb3ZpZGVySWQ9PWEpcmV0dXJuIEhmW2JdO3JldHVybiBudWxsfSxKZj1mdW5jdGlvbihhKXtyZXR1cm4oYT1JZihhKSkmJlxuYS5vY3x8W119O3ZhciBPPWZ1bmN0aW9uKGEsYil7dGhpcy5jb2RlPVwiYXV0aC9cIithO3RoaXMubWVzc2FnZT1ifHxLZlthXXx8XCJcIn07dChPLEVycm9yKTtPLnByb3RvdHlwZS5EPWZ1bmN0aW9uKCl7cmV0dXJue25hbWU6dGhpcy5jb2RlLGNvZGU6dGhpcy5jb2RlLG1lc3NhZ2U6dGhpcy5tZXNzYWdlfX07XG52YXIgTGY9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmKGEubmFtZXx8YS5jb2RlKTtyZXR1cm4gYj9uZXcgTyhiLnN1YnN0cmluZyg1KSxhLm1lc3NhZ2UpOm51bGx9LEtmPXtcImFyZ3VtZW50LWVycm9yXCI6XCJcIixcImFwcC1ub3QtYXV0aG9yaXplZFwiOlwiVGhpcyBhcHAsIGlkZW50aWZpZWQgYnkgdGhlIGRvbWFpbiB3aGVyZSBpdCdzIGhvc3RlZCwgaXMgbm90IGF1dGhvcml6ZWQgdG8gdXNlIEZpcmViYXNlIEF1dGhlbnRpY2F0aW9uIHdpdGggdGhlIHByb3ZpZGVkIEFQSSBrZXkuIFJldmlldyB5b3VyIGtleSBjb25maWd1cmF0aW9uIGluIHRoZSBHb29nbGUgQVBJIGNvbnNvbGUuXCIsXCJhcHAtbm90LWluc3RhbGxlZFwiOlwiVGhlIHJlcXVlc3RlZCBtb2JpbGUgYXBwbGljYXRpb24gY29ycmVzcG9uZGluZyB0byB0aGUgaWRlbnRpZmllciAoQW5kcm9pZCBwYWNrYWdlIG5hbWUgb3IgaU9TIGJ1bmRsZSBJRCkgcHJvdmlkZWQgaXMgbm90IGluc3RhbGxlZCBvbiB0aGlzIGRldmljZS5cIixcImNvcmRvdmEtbm90LXJlYWR5XCI6XCJDb3Jkb3ZhIGZyYW1ld29yayBpcyBub3QgcmVhZHkuXCIsXG5cImNvcnMtdW5zdXBwb3J0ZWRcIjpcIlRoaXMgYnJvd3NlciBpcyBub3Qgc3VwcG9ydGVkLlwiLFwiY3JlZGVudGlhbC1hbHJlYWR5LWluLXVzZVwiOlwiVGhpcyBjcmVkZW50aWFsIGlzIGFscmVhZHkgYXNzb2NpYXRlZCB3aXRoIGEgZGlmZmVyZW50IHVzZXIgYWNjb3VudC5cIixcImN1c3RvbS10b2tlbi1taXNtYXRjaFwiOlwiVGhlIGN1c3RvbSB0b2tlbiBjb3JyZXNwb25kcyB0byBhIGRpZmZlcmVudCBhdWRpZW5jZS5cIixcInJlcXVpcmVzLXJlY2VudC1sb2dpblwiOlwiVGhpcyBvcGVyYXRpb24gaXMgc2Vuc2l0aXZlIGFuZCByZXF1aXJlcyByZWNlbnQgYXV0aGVudGljYXRpb24uIExvZyBpbiBhZ2FpbiBiZWZvcmUgcmV0cnlpbmcgdGhpcyByZXF1ZXN0LlwiLFwiZHluYW1pYy1saW5rLW5vdC1hY3RpdmF0ZWRcIjpcIlBsZWFzZSBhY3RpdmF0ZSBEeW5hbWljIExpbmtzIGluIHRoZSBGaXJlYmFzZSBDb25zb2xlIGFuZCBhZ3JlZSB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMuXCIsXCJlbWFpbC1hbHJlYWR5LWluLXVzZVwiOlwiVGhlIGVtYWlsIGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhY2NvdW50LlwiLFxuXCJleHBpcmVkLWFjdGlvbi1jb2RlXCI6XCJUaGUgYWN0aW9uIGNvZGUgaGFzIGV4cGlyZWQuIFwiLFwiY2FuY2VsbGVkLXBvcHVwLXJlcXVlc3RcIjpcIlRoaXMgb3BlcmF0aW9uIGhhcyBiZWVuIGNhbmNlbGxlZCBkdWUgdG8gYW5vdGhlciBjb25mbGljdGluZyBwb3B1cCBiZWluZyBvcGVuZWQuXCIsXCJpbnRlcm5hbC1lcnJvclwiOlwiQW4gaW50ZXJuYWwgZXJyb3IgaGFzIG9jY3VycmVkLlwiLFwiaW52YWxpZC11c2VyLXRva2VuXCI6XCJUaGUgdXNlcidzIGNyZWRlbnRpYWwgaXMgbm8gbG9uZ2VyIHZhbGlkLiBUaGUgdXNlciBtdXN0IHNpZ24gaW4gYWdhaW4uXCIsXCJpbnZhbGlkLWF1dGgtZXZlbnRcIjpcIkFuIGludGVybmFsIGVycm9yIGhhcyBvY2N1cnJlZC5cIixcImludmFsaWQtY29yZG92YS1jb25maWd1cmF0aW9uXCI6XCJUaGUgZm9sbG93aW5nIENvcmRvdmEgcGx1Z2lucyBtdXN0IGJlIGluc3RhbGxlZCB0byBlbmFibGUgT0F1dGggc2lnbi1pbjogY29yZG92YS1wbHVnaW4tYnVpbGRpbmZvLCBjb3Jkb3ZhLXVuaXZlcnNhbC1saW5rcy1wbHVnaW4sIGNvcmRvdmEtcGx1Z2luLWJyb3dzZXJ0YWIsIGNvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3NlciBhbmQgY29yZG92YS1wbHVnaW4tY3VzdG9tdXJsc2NoZW1lLlwiLFxuXCJpbnZhbGlkLWN1c3RvbS10b2tlblwiOlwiVGhlIGN1c3RvbSB0b2tlbiBmb3JtYXQgaXMgaW5jb3JyZWN0LiBQbGVhc2UgY2hlY2sgdGhlIGRvY3VtZW50YXRpb24uXCIsXCJpbnZhbGlkLWVtYWlsXCI6XCJUaGUgZW1haWwgYWRkcmVzcyBpcyBiYWRseSBmb3JtYXR0ZWQuXCIsXCJpbnZhbGlkLWFwaS1rZXlcIjpcIllvdXIgQVBJIGtleSBpcyBpbnZhbGlkLCBwbGVhc2UgY2hlY2sgeW91IGhhdmUgY29waWVkIGl0IGNvcnJlY3RseS5cIixcImludmFsaWQtY3JlZGVudGlhbFwiOlwiVGhlIHN1cHBsaWVkIGF1dGggY3JlZGVudGlhbCBpcyBtYWxmb3JtZWQgb3IgaGFzIGV4cGlyZWQuXCIsXCJpbnZhbGlkLW1lc3NhZ2UtcGF5bG9hZFwiOlwiVGhlIGVtYWlsIHRlbXBsYXRlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBhY3Rpb24gY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIGluIGl0cyBtZXNzYWdlLiBQbGVhc2UgZml4IGJ5IGdvaW5nIHRvIHRoZSBBdXRoIGVtYWlsIHRlbXBsYXRlcyBzZWN0aW9uIGluIHRoZSBGaXJlYmFzZSBDb25zb2xlLlwiLFxuXCJpbnZhbGlkLW9hdXRoLXByb3ZpZGVyXCI6XCJFbWFpbEF1dGhQcm92aWRlciBpcyBub3Qgc3VwcG9ydGVkIGZvciB0aGlzIG9wZXJhdGlvbi4gVGhpcyBvcGVyYXRpb24gb25seSBzdXBwb3J0cyBPQXV0aCBwcm92aWRlcnMuXCIsXCJ1bmF1dGhvcml6ZWQtZG9tYWluXCI6XCJUaGlzIGRvbWFpbiBpcyBub3QgYXV0aG9yaXplZCBmb3IgT0F1dGggb3BlcmF0aW9ucyBmb3IgeW91ciBGaXJlYmFzZSBwcm9qZWN0LiBFZGl0IHRoZSBsaXN0IG9mIGF1dGhvcml6ZWQgZG9tYWlucyBmcm9tIHRoZSBGaXJlYmFzZSBjb25zb2xlLlwiLFwiaW52YWxpZC1hY3Rpb24tY29kZVwiOlwiVGhlIGFjdGlvbiBjb2RlIGlzIGludmFsaWQuIFRoaXMgY2FuIGhhcHBlbiBpZiB0aGUgY29kZSBpcyBtYWxmb3JtZWQsIGV4cGlyZWQsIG9yIGhhcyBhbHJlYWR5IGJlZW4gdXNlZC5cIixcIndyb25nLXBhc3N3b3JkXCI6XCJUaGUgcGFzc3dvcmQgaXMgaW52YWxpZCBvciB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIGEgcGFzc3dvcmQuXCIsXG5cImludmFsaWQtcmVjaXBpZW50LWVtYWlsXCI6XCJUaGUgZW1haWwgY29ycmVzcG9uZGluZyB0byB0aGlzIGFjdGlvbiBmYWlsZWQgdG8gc2VuZCBhcyB0aGUgcHJvdmlkZWQgcmVjaXBpZW50IGVtYWlsIGFkZHJlc3MgaXMgaW52YWxpZC5cIixcImludmFsaWQtc2VuZGVyXCI6XCJUaGUgZW1haWwgdGVtcGxhdGUgY29ycmVzcG9uZGluZyB0byB0aGlzIGFjdGlvbiBjb250YWlucyBhbiBpbnZhbGlkIHNlbmRlciBlbWFpbCBvciBuYW1lLiBQbGVhc2UgZml4IGJ5IGdvaW5nIHRvIHRoZSBBdXRoIGVtYWlsIHRlbXBsYXRlcyBzZWN0aW9uIGluIHRoZSBGaXJlYmFzZSBDb25zb2xlLlwiLFwibWlzc2luZy1pZnJhbWUtc3RhcnRcIjpcIkFuIGludGVybmFsIGVycm9yIGhhcyBvY2N1cnJlZC5cIixcImF1dGgtZG9tYWluLWNvbmZpZy1yZXF1aXJlZFwiOlwiQmUgc3VyZSB0byBpbmNsdWRlIGF1dGhEb21haW4gd2hlbiBjYWxsaW5nIGZpcmViYXNlLmluaXRpYWxpemVBcHAoKSwgYnkgZm9sbG93aW5nIHRoZSBpbnN0cnVjdGlvbnMgaW4gdGhlIEZpcmViYXNlIGNvbnNvbGUuXCIsXG5cImFwcC1kZWxldGVkXCI6XCJUaGlzIGluc3RhbmNlIG9mIEZpcmViYXNlQXBwIGhhcyBiZWVuIGRlbGV0ZWQuXCIsXCJhY2NvdW50LWV4aXN0cy13aXRoLWRpZmZlcmVudC1jcmVkZW50aWFsXCI6XCJBbiBhY2NvdW50IGFscmVhZHkgZXhpc3RzIHdpdGggdGhlIHNhbWUgZW1haWwgYWRkcmVzcyBidXQgZGlmZmVyZW50IHNpZ24taW4gY3JlZGVudGlhbHMuIFNpZ24gaW4gdXNpbmcgYSBwcm92aWRlciBhc3NvY2lhdGVkIHdpdGggdGhpcyBlbWFpbCBhZGRyZXNzLlwiLFwibmV0d29yay1yZXF1ZXN0LWZhaWxlZFwiOlwiQSBuZXR3b3JrIGVycm9yIChzdWNoIGFzIHRpbWVvdXQsIGludGVycnVwdGVkIGNvbm5lY3Rpb24gb3IgdW5yZWFjaGFibGUgaG9zdCkgaGFzIG9jY3VycmVkLlwiLFwibm8tYXV0aC1ldmVudFwiOlwiQW4gaW50ZXJuYWwgZXJyb3IgaGFzIG9jY3VycmVkLlwiLFwibm8tc3VjaC1wcm92aWRlclwiOlwiVXNlciB3YXMgbm90IGxpbmtlZCB0byBhbiBhY2NvdW50IHdpdGggdGhlIGdpdmVuIHByb3ZpZGVyLlwiLFxuXCJvcGVyYXRpb24tbm90LWFsbG93ZWRcIjpcIlRoZSBnaXZlbiBzaWduLWluIHByb3ZpZGVyIGlzIGRpc2FibGVkIGZvciB0aGlzIEZpcmViYXNlIHByb2plY3QuIEVuYWJsZSBpdCBpbiB0aGUgRmlyZWJhc2UgY29uc29sZSwgdW5kZXIgdGhlIHNpZ24taW4gbWV0aG9kIHRhYiBvZiB0aGUgQXV0aCBzZWN0aW9uLlwiLFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiOidUaGlzIG9wZXJhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGluIHRoZSBlbnZpcm9ubWVudCB0aGlzIGFwcGxpY2F0aW9uIGlzIHJ1bm5pbmcgb24uIFwibG9jYXRpb24ucHJvdG9jb2xcIiBtdXN0IGJlIGh0dHAgb3IgaHR0cHMgYW5kIHdlYiBzdG9yYWdlIG11c3QgYmUgZW5hYmxlZC4nLFwicG9wdXAtYmxvY2tlZFwiOlwiVW5hYmxlIHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gd2l0aCB0aGUgcG9wdXAuIEl0IG1heSBoYXZlIGJlZW4gYmxvY2tlZCBieSB0aGUgYnJvd3Nlci5cIixcInBvcHVwLWNsb3NlZC1ieS11c2VyXCI6XCJUaGUgcG9wdXAgaGFzIGJlZW4gY2xvc2VkIGJ5IHRoZSB1c2VyIGJlZm9yZSBmaW5hbGl6aW5nIHRoZSBvcGVyYXRpb24uXCIsXG5cInByb3ZpZGVyLWFscmVhZHktbGlua2VkXCI6XCJVc2VyIGNhbiBvbmx5IGJlIGxpbmtlZCB0byBvbmUgaWRlbnRpdHkgZm9yIHRoZSBnaXZlbiBwcm92aWRlci5cIixcInJlZGlyZWN0LWNhbmNlbGxlZC1ieS11c2VyXCI6XCJUaGUgcmVkaXJlY3Qgb3BlcmF0aW9uIGhhcyBiZWVuIGNhbmNlbGxlZCBieSB0aGUgdXNlciBiZWZvcmUgZmluYWxpemluZy5cIixcInJlZGlyZWN0LW9wZXJhdGlvbi1wZW5kaW5nXCI6XCJBIHJlZGlyZWN0IHNpZ24taW4gb3BlcmF0aW9uIGlzIGFscmVhZHkgcGVuZGluZy5cIix0aW1lb3V0OlwiVGhlIG9wZXJhdGlvbiBoYXMgdGltZWQgb3V0LlwiLFwidXNlci10b2tlbi1leHBpcmVkXCI6XCJUaGUgdXNlcidzIGNyZWRlbnRpYWwgaXMgbm8gbG9uZ2VyIHZhbGlkLiBUaGUgdXNlciBtdXN0IHNpZ24gaW4gYWdhaW4uXCIsXCJ0b28tbWFueS1yZXF1ZXN0c1wiOlwiV2UgaGF2ZSBibG9ja2VkIGFsbCByZXF1ZXN0cyBmcm9tIHRoaXMgZGV2aWNlIGR1ZSB0byB1bnVzdWFsIGFjdGl2aXR5LiBUcnkgYWdhaW4gbGF0ZXIuXCIsXG5cInVzZXItY2FuY2VsbGVkXCI6XCJVc2VyIGRpZCBub3QgZ3JhbnQgeW91ciBhcHBsaWNhdGlvbiB0aGUgcGVybWlzc2lvbnMgaXQgcmVxdWVzdGVkLlwiLFwidXNlci1ub3QtZm91bmRcIjpcIlRoZXJlIGlzIG5vIHVzZXIgcmVjb3JkIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBpZGVudGlmaWVyLiBUaGUgdXNlciBtYXkgaGF2ZSBiZWVuIGRlbGV0ZWQuXCIsXCJ1c2VyLWRpc2FibGVkXCI6XCJUaGUgdXNlciBhY2NvdW50IGhhcyBiZWVuIGRpc2FibGVkIGJ5IGFuIGFkbWluaXN0cmF0b3IuXCIsXCJ1c2VyLW1pc21hdGNoXCI6XCJUaGUgc3VwcGxpZWQgY3JlZGVudGlhbHMgZG8gbm90IGNvcnJlc3BvbmQgdG8gdGhlIHByZXZpb3VzbHkgc2lnbmVkIGluIHVzZXIuXCIsXCJ1c2VyLXNpZ25lZC1vdXRcIjpcIlwiLFwid2Vhay1wYXNzd29yZFwiOlwiVGhlIHBhc3N3b3JkIG11c3QgYmUgNiBjaGFyYWN0ZXJzIGxvbmcgb3IgbW9yZS5cIixcIndlYi1zdG9yYWdlLXVuc3VwcG9ydGVkXCI6XCJUaGlzIGJyb3dzZXIgaXMgbm90IHN1cHBvcnRlZCBvciAzcmQgcGFydHkgY29va2llcyBhbmQgZGF0YSBtYXkgYmUgZGlzYWJsZWQuXCJ9O3ZhciBQPWZ1bmN0aW9uKGEsYixjLGQsZSl7dGhpcy5nYT1hO3RoaXMuRj1ifHxudWxsO3RoaXMubWI9Y3x8bnVsbDt0aGlzLmRkPWR8fG51bGw7dGhpcy5PPWV8fG51bGw7aWYodGhpcy5tYnx8dGhpcy5PKXtpZih0aGlzLm1iJiZ0aGlzLk8pdGhyb3cgbmV3IE8oXCJpbnZhbGlkLWF1dGgtZXZlbnRcIik7aWYodGhpcy5tYiYmIXRoaXMuZGQpdGhyb3cgbmV3IE8oXCJpbnZhbGlkLWF1dGgtZXZlbnRcIik7fWVsc2UgdGhyb3cgbmV3IE8oXCJpbnZhbGlkLWF1dGgtZXZlbnRcIik7fTtQLnByb3RvdHlwZS5WYj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmRkfTtQLnByb3RvdHlwZS5nZXRFcnJvcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLk99O1AucHJvdG90eXBlLkQ9ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTp0aGlzLmdhLGV2ZW50SWQ6dGhpcy5GLHVybFJlc3BvbnNlOnRoaXMubWIsc2Vzc2lvbklkOnRoaXMuZGQsZXJyb3I6dGhpcy5PJiZ0aGlzLk8uRCgpfX07XG52YXIgTWY9ZnVuY3Rpb24oYSl7YT1hfHx7fTtyZXR1cm4gYS50eXBlP25ldyBQKGEudHlwZSxhLmV2ZW50SWQsYS51cmxSZXNwb25zZSxhLnNlc3Npb25JZCxhLmVycm9yJiZMZihhLmVycm9yKSk6bnVsbH07dmFyIE5mPWZ1bmN0aW9uKGEpe3ZhciBiPVwidW5hdXRob3JpemVkLWRvbWFpblwiLGM9dm9pZCAwLGQ9VGUoYSk7YT1kLiQ7ZD1kLmRhO1wiaHR0cFwiIT1kJiZcImh0dHBzXCIhPWQ/Yj1cIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIjpjPWxhKFwiVGhpcyBkb21haW4gKCVzKSBpcyBub3QgYXV0aG9yaXplZCB0byBydW4gdGhpcyBvcGVyYXRpb24uIEFkZCBpdCB0byB0aGUgT0F1dGggcmVkaXJlY3QgZG9tYWlucyBsaXN0IGluIHRoZSBGaXJlYmFzZSBjb25zb2xlIC0+IEF1dGggc2VjdGlvbiAtPiBTaWduIGluIG1ldGhvZCB0YWIuXCIsYSk7Ty5jYWxsKHRoaXMsYixjKX07dChOZixPKTt2YXIgT2Y9ZnVuY3Rpb24oYSl7dGhpcy5UZT1hLnN1YjtrYSgpO3RoaXMuU2I9YS5lbWFpbHx8bnVsbH07dmFyIFBmPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXt9O2dhKGMpP2U9YzpiJiZwKGMpJiZwKGQpP2U9e29hdXRoVG9rZW46YyxvYXV0aFRva2VuU2VjcmV0OmR9OiFiJiZwKGMpJiYoZT17YWNjZXNzVG9rZW46Y30pO2lmKGJ8fCFlLmlkVG9rZW4mJiFlLmFjY2Vzc1Rva2VuKWlmKGImJmUub2F1dGhUb2tlbiYmZS5vYXV0aFRva2VuU2VjcmV0KU4odGhpcyxcImFjY2Vzc1Rva2VuXCIsZS5vYXV0aFRva2VuKSxOKHRoaXMsXCJzZWNyZXRcIixlLm9hdXRoVG9rZW5TZWNyZXQpO2Vsc2V7aWYoYil0aHJvdyBuZXcgTyhcImFyZ3VtZW50LWVycm9yXCIsXCJjcmVkZW50aWFsIGZhaWxlZDogZXhwZWN0ZWQgMiBhcmd1bWVudHMgKHRoZSBPQXV0aCBhY2Nlc3MgdG9rZW4gYW5kIHNlY3JldCkuXCIpO3Rocm93IG5ldyBPKFwiYXJndW1lbnQtZXJyb3JcIixcImNyZWRlbnRpYWwgZmFpbGVkOiBleHBlY3RlZCAxIGFyZ3VtZW50ICh0aGUgT0F1dGggYWNjZXNzIHRva2VuKS5cIik7fWVsc2UgZS5pZFRva2VuJiZOKHRoaXMsXG5cImlkVG9rZW5cIixlLmlkVG9rZW4pLGUuYWNjZXNzVG9rZW4mJk4odGhpcyxcImFjY2Vzc1Rva2VuXCIsZS5hY2Nlc3NUb2tlbik7Tih0aGlzLFwicHJvdmlkZXJcIixhKX07UGYucHJvdG90eXBlLlViPWZ1bmN0aW9uKGEpe3JldHVybiBRZihhLFJmKHRoaXMpKX07UGYucHJvdG90eXBlLkZkPWZ1bmN0aW9uKGEsYil7dmFyIGM9UmYodGhpcyk7Yy5pZFRva2VuPWI7cmV0dXJuIFNmKGEsYyl9O3ZhciBSZj1mdW5jdGlvbihhKXt2YXIgYj17fTthLmlkVG9rZW4mJihiLmlkX3Rva2VuPWEuaWRUb2tlbik7YS5hY2Nlc3NUb2tlbiYmKGIuYWNjZXNzX3Rva2VuPWEuYWNjZXNzVG9rZW4pO2Euc2VjcmV0JiYoYi5vYXV0aF90b2tlbl9zZWNyZXQ9YS5zZWNyZXQpO2IucHJvdmlkZXJJZD1hLnByb3ZpZGVyO3JldHVybntwb3N0Qm9keTpZZShiKS50b1N0cmluZygpLHJlcXVlc3RVcmk6cmYoKT8kZSgpOlwiaHR0cDovL2xvY2FsaG9zdFwifX07XG5QZi5wcm90b3R5cGUuRD1mdW5jdGlvbigpe3ZhciBhPXtwcm92aWRlcjp0aGlzLnByb3ZpZGVyfTt0aGlzLmlkVG9rZW4mJihhLm9hdXRoSWRUb2tlbj10aGlzLmlkVG9rZW4pO3RoaXMuYWNjZXNzVG9rZW4mJihhLm9hdXRoQWNjZXNzVG9rZW49dGhpcy5hY2Nlc3NUb2tlbik7dGhpcy5zZWNyZXQmJihhLm9hdXRoVG9rZW5TZWNyZXQ9dGhpcy5zZWNyZXQpO3JldHVybiBhfTtcbnZhciBUZj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9ISFiLGU9Y3x8W107Yj1mdW5jdGlvbigpe0NmKHRoaXMse3Byb3ZpZGVySWQ6YSxpc09BdXRoUHJvdmlkZXI6ITB9KTt0aGlzLmNkPVtdO3RoaXMucWQ9e307XCJnb29nbGUuY29tXCI9PWEmJnRoaXMuYWRkU2NvcGUoXCJwcm9maWxlXCIpfTtkfHwoYi5wcm90b3R5cGUuYWRkU2NvcGU9ZnVuY3Rpb24oYSl7SGEodGhpcy5jZCxhKXx8dGhpcy5jZC5wdXNoKGEpfSk7Yi5wcm90b3R5cGUuc2V0Q3VzdG9tUGFyYW1ldGVycz1mdW5jdGlvbihhKXt0aGlzLnFkPVNhKGEpfTtiLnByb3RvdHlwZS5CZT1mdW5jdGlvbigpe3ZhciBhPXVmKHRoaXMucWQpLGI7Zm9yKGIgaW4gYSlhW2JdPWFbYl0udG9TdHJpbmcoKTthPVNhKGEpO2ZvcihiPTA7YjxlLmxlbmd0aDtiKyspe3ZhciBjPWVbYl07YyBpbiBhJiZkZWxldGUgYVtjXX1yZXR1cm4gYX07Yi5wcm90b3R5cGUuQ2U9ZnVuY3Rpb24oKXtyZXR1cm4gTWEodGhpcy5jZCl9O2IuY3JlZGVudGlhbD1cbmZ1bmN0aW9uKGIsYyl7cmV0dXJuIG5ldyBQZihhLGQsYixjKX07Q2YoYix7UFJPVklERVJfSUQ6YX0pO3JldHVybiBifSxVZj1UZihcImZhY2Vib29rLmNvbVwiLCExLEpmKFwiZmFjZWJvb2suY29tXCIpKTtVZi5wcm90b3R5cGUuYWRkU2NvcGU9VWYucHJvdG90eXBlLmFkZFNjb3BlfHx2b2lkIDA7dmFyIFZmPVRmKFwiZ2l0aHViLmNvbVwiLCExLEpmKFwiZ2l0aHViLmNvbVwiKSk7VmYucHJvdG90eXBlLmFkZFNjb3BlPVZmLnByb3RvdHlwZS5hZGRTY29wZXx8dm9pZCAwO3ZhciBXZj1UZihcImdvb2dsZS5jb21cIiwhMSxKZihcImdvb2dsZS5jb21cIikpO1dmLnByb3RvdHlwZS5hZGRTY29wZT1XZi5wcm90b3R5cGUuYWRkU2NvcGV8fHZvaWQgMDtcbldmLmNyZWRlbnRpYWw9ZnVuY3Rpb24oYSxiKXtpZighYSYmIWIpdGhyb3cgbmV3IE8oXCJhcmd1bWVudC1lcnJvclwiLFwiY3JlZGVudGlhbCBmYWlsZWQ6IG11c3QgcHJvdmlkZSB0aGUgSUQgdG9rZW4gYW5kL29yIHRoZSBhY2Nlc3MgdG9rZW4uXCIpO3JldHVybiBuZXcgUGYoXCJnb29nbGUuY29tXCIsITEsZ2EoYSk/YTp7aWRUb2tlbjphfHxudWxsLGFjY2Vzc1Rva2VuOmJ8fG51bGx9KX07dmFyIFhmPVRmKFwidHdpdHRlci5jb21cIiwhMCxKZihcInR3aXR0ZXIuY29tXCIpKSxZZj1mdW5jdGlvbihhLGIpe3RoaXMuU2I9YTt0aGlzLldjPWI7Tih0aGlzLFwicHJvdmlkZXJcIixcInBhc3N3b3JkXCIpfTtZZi5wcm90b3R5cGUuVWI9ZnVuY3Rpb24oYSl7cmV0dXJuIFEoYSxaZix7ZW1haWw6dGhpcy5TYixwYXNzd29yZDp0aGlzLldjfSl9O1lmLnByb3RvdHlwZS5GZD1mdW5jdGlvbihhLGIpe3JldHVybiBRKGEsJGYse2lkVG9rZW46YixlbWFpbDp0aGlzLlNiLHBhc3N3b3JkOnRoaXMuV2N9KX07XG5ZZi5wcm90b3R5cGUuRD1mdW5jdGlvbigpe3JldHVybntlbWFpbDp0aGlzLlNiLHBhc3N3b3JkOnRoaXMuV2N9fTt2YXIgYWc9ZnVuY3Rpb24oKXtDZih0aGlzLHtwcm92aWRlcklkOlwicGFzc3dvcmRcIixpc09BdXRoUHJvdmlkZXI6ITF9KX07Q2YoYWcse1BST1ZJREVSX0lEOlwicGFzc3dvcmRcIn0pO1xudmFyIGJnPXtBZjphZyxiZTpVZixkZTpXZixjZTpWZixpZTpYZn0sY2c9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmYS5wcm92aWRlcklkO2lmKCFiKXJldHVybiBudWxsO3ZhciBjPWEmJmEub2F1dGhBY2Nlc3NUb2tlbixkPWEmJmEub2F1dGhUb2tlblNlY3JldDthPWEmJmEub2F1dGhJZFRva2VuO2Zvcih2YXIgZSBpbiBiZylpZihiZ1tlXS5QUk9WSURFUl9JRD09Yil0cnl7cmV0dXJuIGJnW2VdLmNyZWRlbnRpYWwoe2FjY2Vzc1Rva2VuOmMsaWRUb2tlbjphLG9hdXRoVG9rZW46YyxvYXV0aFRva2VuU2VjcmV0OmR9KX1jYXRjaChmKXticmVha31yZXR1cm4gbnVsbH0sZGc9ZnVuY3Rpb24oYSl7aWYoIWEuaXNPQXV0aFByb3ZpZGVyKXRocm93IG5ldyBPKFwiaW52YWxpZC1vYXV0aC1wcm92aWRlclwiKTt9O3ZhciBlZz1mdW5jdGlvbihhLGIsYyxkKXtPLmNhbGwodGhpcyxhLGQpO04odGhpcyxcImVtYWlsXCIsYik7Tih0aGlzLFwiY3JlZGVudGlhbFwiLGMpfTt0KGVnLE8pO2VnLnByb3RvdHlwZS5EPWZ1bmN0aW9uKCl7dmFyIGE9e2NvZGU6dGhpcy5jb2RlLG1lc3NhZ2U6dGhpcy5tZXNzYWdlLGVtYWlsOnRoaXMuZW1haWx9LGI9dGhpcy5jcmVkZW50aWFsJiZ0aGlzLmNyZWRlbnRpYWwuRCgpO2ImJihVYShhLGIpLGEucHJvdmlkZXJJZD1iLnByb3ZpZGVyLGRlbGV0ZSBhLnByb3ZpZGVyKTtyZXR1cm4gYX07dmFyIGZnPWZ1bmN0aW9uKGEpe2lmKGEuY29kZSl7dmFyIGI9YS5jb2RlfHxcIlwiOzA9PWIuaW5kZXhPZihcImF1dGgvXCIpJiYoYj1iLnN1YnN0cmluZyg1KSk7cmV0dXJuIGEuZW1haWw/bmV3IGVnKGIsYS5lbWFpbCxjZyhhKSxhLm1lc3NhZ2UpOm5ldyBPKGIsYS5tZXNzYWdlfHx2b2lkIDApfXJldHVybiBudWxsfTt2YXIgZ2c9ZnVuY3Rpb24oYSl7dGhpcy56Zj1hfTt0KGdnLEFjKTtnZy5wcm90b3R5cGUuUmI9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHRoaXMuemZ9O2dnLnByb3RvdHlwZS5QYz1mdW5jdGlvbigpe3JldHVybnt9fTtcbnZhciBSPWZ1bmN0aW9uKGEsYixjKXt2YXIgZDtkPVwiTm9kZVwiPT1MKCk7ZD1sLlhNTEh0dHBSZXF1ZXN0fHxkJiZmaXJlYmFzZS5JTlRFUk5BTC5ub2RlJiZmaXJlYmFzZS5JTlRFUk5BTC5ub2RlLlhNTEh0dHBSZXF1ZXN0O2lmKCFkKXRocm93IG5ldyBPKFwiaW50ZXJuYWwtZXJyb3JcIixcIlRoZSBYTUxIdHRwUmVxdWVzdCBjb21wYXRpYmlsaXR5IGxpYnJhcnkgd2FzIG5vdCBmb3VuZC5cIik7dGhpcy5qPWE7YT1ifHx7fTt0aGlzLmdmPWEuc2VjdXJlVG9rZW5FbmRwb2ludHx8XCJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZWFwaXMuY29tL3YxL3Rva2VuXCI7dGhpcy5oZj1hLnNlY3VyZVRva2VuVGltZW91dHx8aGc7dGhpcy5PZD1TYShhLnNlY3VyZVRva2VuSGVhZGVyc3x8aWcpO3RoaXMud2U9YS5maXJlYmFzZUVuZHBvaW50fHxcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2lkZW50aXR5dG9vbGtpdC92My9yZWx5aW5ncGFydHkvXCI7dGhpcy54ZT1hLmZpcmViYXNlVGltZW91dHx8XG5qZzt0aGlzLnZkPVNhKGEuZmlyZWJhc2VIZWFkZXJzfHxrZyk7YyYmKHRoaXMudmRbXCJYLUNsaWVudC1WZXJzaW9uXCJdPWMsdGhpcy5PZFtcIlgtQ2xpZW50LVZlcnNpb25cIl09Yyk7dGhpcy5uZT1uZXcgRmM7dGhpcy55Zj1uZXcgZ2coZCl9LGxnLGhnPW5ldyB6ZigxRTQsM0U0KSxpZz17XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwifSxqZz1uZXcgemYoMUU0LDNFNCksa2c9e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJ9LG5nPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3lmKCk/KGRmKCk/YT1yKGEua2YsYSk6KGxnfHwobGc9bmV3IEMoZnVuY3Rpb24oYSxiKXttZyhhLGIpfSkpLGE9cihhLmpmLGEpKSxhKGIsYyxkLGUsZixnKSk6YyYmYyhudWxsKX07XG5SLnByb3RvdHlwZS5rZj1mdW5jdGlvbihhLGIsYyxkLGUsZil7dmFyIGc9XCJOb2RlXCI9PUwoKSxrPW9mKCk/Zz9uZXcgRyh0aGlzLnlmKTpuZXcgRzpuZXcgRyh0aGlzLm5lKSxuO2YmJihrLmtiPU1hdGgubWF4KDAsZiksbj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ay5kaXNwYXRjaEV2ZW50KFwidGltZW91dFwiKX0sZikpO2subGlzdGVuKFwiY29tcGxldGVcIixmdW5jdGlvbigpe24mJmNsZWFyVGltZW91dChuKTt2YXIgYT1udWxsO3RyeXt2YXIgYztjPXRoaXMuYj90Yyh0aGlzLmIucmVzcG9uc2VUZXh0KTp2b2lkIDA7YT1jfHxudWxsfWNhdGNoKFdhKXt0cnl7YT1KU09OLnBhcnNlKERlKHRoaXMpKXx8bnVsbH1jYXRjaChvZSl7YT1udWxsfX1iJiZiKGEpfSk7YmMoayxcInJlYWR5XCIsZnVuY3Rpb24oKXtuJiZjbGVhclRpbWVvdXQobik7dGhpcy5BYXx8KHRoaXMuQWE9ITAsdGhpcy5SYSgpKX0pO2JjKGssXCJ0aW1lb3V0XCIsZnVuY3Rpb24oKXtuJiZjbGVhclRpbWVvdXQobik7dGhpcy5BYXx8XG4odGhpcy5BYT0hMCx0aGlzLlJhKCkpO2ImJmIobnVsbCl9KTtrLnNlbmQoYSxjLGQsZSl9O3ZhciBGZD1cIl9fZmNiXCIrTWF0aC5mbG9vcigxRTYqTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoKSxtZz1mdW5jdGlvbihhLGIpeygod2luZG93LmdhcGl8fHt9KS5jbGllbnR8fHt9KS5yZXF1ZXN0P2EoKToobFtGZF09ZnVuY3Rpb24oKXsoKHdpbmRvdy5nYXBpfHx7fSkuY2xpZW50fHx7fSkucmVxdWVzdD9hKCk6YihFcnJvcihcIkNPUlNfVU5TVVBQT1JURURcIikpfSxIZChmdW5jdGlvbigpe2IoRXJyb3IoXCJDT1JTX1VOU1VQUE9SVEVEXCIpKX0pKX07XG5SLnByb3RvdHlwZS5qZj1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPXRoaXM7bGcudGhlbihmdW5jdGlvbigpe3dpbmRvdy5nYXBpLmNsaWVudC5zZXRBcGlLZXkoZi5qKTt2YXIgZz13aW5kb3cuZ2FwaS5hdXRoLmdldFRva2VuKCk7d2luZG93LmdhcGkuYXV0aC5zZXRUb2tlbihudWxsKTt3aW5kb3cuZ2FwaS5jbGllbnQucmVxdWVzdCh7cGF0aDphLG1ldGhvZDpjLGJvZHk6ZCxoZWFkZXJzOmUsYXV0aFR5cGU6XCJub25lXCIsY2FsbGJhY2s6ZnVuY3Rpb24oYSl7d2luZG93LmdhcGkuYXV0aC5zZXRUb2tlbihnKTtiJiZiKGEpfX0pfSkuYyhmdW5jdGlvbihhKXtiJiZiKHtlcnJvcjp7bWVzc2FnZTphJiZhLm1lc3NhZ2V8fFwiQ09SU19VTlNVUFBPUlRFRFwifX0pfSl9O1xudmFyIHBnPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBDKGZ1bmN0aW9uKGMsZCl7XCJyZWZyZXNoX3Rva2VuXCI9PWIuZ3JhbnRfdHlwZSYmYi5yZWZyZXNoX3Rva2VufHxcImF1dGhvcml6YXRpb25fY29kZVwiPT1iLmdyYW50X3R5cGUmJmIuY29kZT9uZyhhLGEuZ2YrXCI/a2V5PVwiK2VuY29kZVVSSUNvbXBvbmVudChhLmopLGZ1bmN0aW9uKGEpe2E/YS5lcnJvcj9kKG9nKGEpKTphLmFjY2Vzc190b2tlbiYmYS5yZWZyZXNoX3Rva2VuP2MoYSk6ZChuZXcgTyhcImludGVybmFsLWVycm9yXCIpKTpkKG5ldyBPKFwibmV0d29yay1yZXF1ZXN0LWZhaWxlZFwiKSl9LFwiUE9TVFwiLFllKGIpLnRvU3RyaW5nKCksYS5PZCxhLmhmLmdldCgpKTpkKG5ldyBPKFwiaW50ZXJuYWwtZXJyb3JcIikpfSl9LHFnPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9VGUoYS53ZStiKTtKKGYsXCJrZXlcIixhLmopO2UmJkooZixcImNiXCIsa2EoKS50b1N0cmluZygpKTt2YXIgZz1cIkdFVFwiPT1jO2lmKGcpZm9yKHZhciBrIGluIGQpZC5oYXNPd25Qcm9wZXJ0eShrKSYmXG5KKGYsayxkW2tdKTtyZXR1cm4gbmV3IEMoZnVuY3Rpb24oYixlKXtuZyhhLGYudG9TdHJpbmcoKSxmdW5jdGlvbihhKXthP2EuZXJyb3I/ZShvZyhhKSk6YihhKTplKG5ldyBPKFwibmV0d29yay1yZXF1ZXN0LWZhaWxlZFwiKSl9LGMsZz92b2lkIDA6d2ModWYoZCkpLGEudmQsYS54ZS5nZXQoKSl9KX0scmc9ZnVuY3Rpb24oYSl7aWYoIWhjLnRlc3QoYS5lbWFpbCkpdGhyb3cgbmV3IE8oXCJpbnZhbGlkLWVtYWlsXCIpO30sc2c9ZnVuY3Rpb24oYSl7XCJlbWFpbFwiaW4gYSYmcmcoYSl9LHVnPWZ1bmN0aW9uKGEsYil7dmFyIGM9cmYoKT8kZSgpOlwiaHR0cDovL2xvY2FsaG9zdFwiO3JldHVybiBRKGEsdGcse2lkZW50aWZpZXI6Yixjb250aW51ZVVyaTpjfSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gYS5hbGxQcm92aWRlcnN8fFtdfSl9LHdnPWZ1bmN0aW9uKGEpe3JldHVybiBRKGEsdmcse30pLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIGEuYXV0aG9yaXplZERvbWFpbnN8fFtdfSl9LHhnPVxuZnVuY3Rpb24oYSl7aWYoIWEuaWRUb2tlbil0aHJvdyBuZXcgTyhcImludGVybmFsLWVycm9yXCIpO307Ui5wcm90b3R5cGUuc2lnbkluQW5vbnltb3VzbHk9ZnVuY3Rpb24oKXtyZXR1cm4gUSh0aGlzLHlnLHt9KX07Ui5wcm90b3R5cGUudXBkYXRlRW1haWw9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUSh0aGlzLHpnLHtpZFRva2VuOmEsZW1haWw6Yn0pfTtSLnByb3RvdHlwZS51cGRhdGVQYXNzd29yZD1mdW5jdGlvbihhLGIpe3JldHVybiBRKHRoaXMsJGYse2lkVG9rZW46YSxwYXNzd29yZDpifSl9O3ZhciBBZz17ZGlzcGxheU5hbWU6XCJESVNQTEFZX05BTUVcIixwaG90b1VybDpcIlBIT1RPX1VSTFwifTtcblIucHJvdG90eXBlLnVwZGF0ZVByb2ZpbGU9ZnVuY3Rpb24oYSxiKXt2YXIgYz17aWRUb2tlbjphfSxkPVtdO05hKEFnLGZ1bmN0aW9uKGEsZil7dmFyIGU9YltmXTtudWxsPT09ZT9kLnB1c2goYSk6ZiBpbiBiJiYoY1tmXT1lKX0pO2QubGVuZ3RoJiYoYy5kZWxldGVBdHRyaWJ1dGU9ZCk7cmV0dXJuIFEodGhpcyx6ZyxjKX07Ui5wcm90b3R5cGUuc2VuZFBhc3N3b3JkUmVzZXRFbWFpbD1mdW5jdGlvbihhKXtyZXR1cm4gUSh0aGlzLEJnLHtyZXF1ZXN0VHlwZTpcIlBBU1NXT1JEX1JFU0VUXCIsZW1haWw6YX0pfTtSLnByb3RvdHlwZS5zZW5kRW1haWxWZXJpZmljYXRpb249ZnVuY3Rpb24oYSl7cmV0dXJuIFEodGhpcyxDZyx7cmVxdWVzdFR5cGU6XCJWRVJJRllfRU1BSUxcIixpZFRva2VuOmF9KX07XG52YXIgRWc9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBRKGEsRGcse2lkVG9rZW46YixkZWxldGVQcm92aWRlcjpjfSl9LEZnPWZ1bmN0aW9uKGEpe2lmKCFhLnJlcXVlc3RVcml8fCFhLnNlc3Npb25JZCYmIWEucG9zdEJvZHkpdGhyb3cgbmV3IE8oXCJpbnRlcm5hbC1lcnJvclwiKTt9LEdnPWZ1bmN0aW9uKGEpe3ZhciBiPW51bGw7YS5uZWVkQ29uZmlybWF0aW9uPyhhLmNvZGU9XCJhY2NvdW50LWV4aXN0cy13aXRoLWRpZmZlcmVudC1jcmVkZW50aWFsXCIsYj1mZyhhKSk6XCJGRURFUkFURURfVVNFUl9JRF9BTFJFQURZX0xJTktFRFwiPT1hLmVycm9yTWVzc2FnZT8oYS5jb2RlPVwiY3JlZGVudGlhbC1hbHJlYWR5LWluLXVzZVwiLGI9ZmcoYSkpOlwiRU1BSUxfRVhJU1RTXCI9PWEuZXJyb3JNZXNzYWdlJiYoYS5jb2RlPVwiZW1haWwtYWxyZWFkeS1pbi11c2VcIixiPWZnKGEpKTtpZihiKXRocm93IGI7aWYoIWEuaWRUb2tlbil0aHJvdyBuZXcgTyhcImludGVybmFsLWVycm9yXCIpO30sUWY9ZnVuY3Rpb24oYSxcbmIpe2IucmV0dXJuSWRwQ3JlZGVudGlhbD0hMDtyZXR1cm4gUShhLEhnLGIpfSxTZj1mdW5jdGlvbihhLGIpe2IucmV0dXJuSWRwQ3JlZGVudGlhbD0hMDtyZXR1cm4gUShhLElnLGIpfSxKZz1mdW5jdGlvbihhKXtpZighYS5vb2JDb2RlKXRocm93IG5ldyBPKFwiaW52YWxpZC1hY3Rpb24tY29kZVwiKTt9O1IucHJvdG90eXBlLmNvbmZpcm1QYXNzd29yZFJlc2V0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFEodGhpcyxLZyx7b29iQ29kZTphLG5ld1Bhc3N3b3JkOmJ9KX07Ui5wcm90b3R5cGUuY2hlY2tBY3Rpb25Db2RlPWZ1bmN0aW9uKGEpe3JldHVybiBRKHRoaXMsTGcse29vYkNvZGU6YX0pfTtSLnByb3RvdHlwZS5hcHBseUFjdGlvbkNvZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFEodGhpcyxNZyx7b29iQ29kZTphfSl9O1xudmFyIE1nPXtlbmRwb2ludDpcInNldEFjY291bnRJbmZvXCIsSzpKZyxpYjpcImVtYWlsXCJ9LExnPXtlbmRwb2ludDpcInJlc2V0UGFzc3dvcmRcIixLOkpnLHZhOmZ1bmN0aW9uKGEpe2lmKCFhLmVtYWlsfHwhYS5yZXF1ZXN0VHlwZSl0aHJvdyBuZXcgTyhcImludGVybmFsLWVycm9yXCIpO319LE5nPXtlbmRwb2ludDpcInNpZ251cE5ld1VzZXJcIixLOmZ1bmN0aW9uKGEpe3JnKGEpO2lmKCFhLnBhc3N3b3JkKXRocm93IG5ldyBPKFwid2Vhay1wYXNzd29yZFwiKTt9LHZhOnhnLHdhOiEwfSx0Zz17ZW5kcG9pbnQ6XCJjcmVhdGVBdXRoVXJpXCJ9LE9nPXtlbmRwb2ludDpcImRlbGV0ZUFjY291bnRcIixoYjpbXCJpZFRva2VuXCJdfSxEZz17ZW5kcG9pbnQ6XCJzZXRBY2NvdW50SW5mb1wiLGhiOltcImlkVG9rZW5cIixcImRlbGV0ZVByb3ZpZGVyXCJdLEs6ZnVuY3Rpb24oYSl7aWYoIWRhKGEuZGVsZXRlUHJvdmlkZXIpKXRocm93IG5ldyBPKFwiaW50ZXJuYWwtZXJyb3JcIik7fX0sUGc9e2VuZHBvaW50OlwiZ2V0QWNjb3VudEluZm9cIn0sXG5DZz17ZW5kcG9pbnQ6XCJnZXRPb2JDb25maXJtYXRpb25Db2RlXCIsaGI6W1wiaWRUb2tlblwiLFwicmVxdWVzdFR5cGVcIl0sSzpmdW5jdGlvbihhKXtpZihcIlZFUklGWV9FTUFJTFwiIT1hLnJlcXVlc3RUeXBlKXRocm93IG5ldyBPKFwiaW50ZXJuYWwtZXJyb3JcIik7fSxpYjpcImVtYWlsXCJ9LEJnPXtlbmRwb2ludDpcImdldE9vYkNvbmZpcm1hdGlvbkNvZGVcIixoYjpbXCJyZXF1ZXN0VHlwZVwiXSxLOmZ1bmN0aW9uKGEpe2lmKFwiUEFTU1dPUkRfUkVTRVRcIiE9YS5yZXF1ZXN0VHlwZSl0aHJvdyBuZXcgTyhcImludGVybmFsLWVycm9yXCIpO3JnKGEpfSxpYjpcImVtYWlsXCJ9LHZnPXttZTohMCxlbmRwb2ludDpcImdldFByb2plY3RDb25maWdcIixJZTpcIkdFVFwifSxLZz17ZW5kcG9pbnQ6XCJyZXNldFBhc3N3b3JkXCIsSzpKZyxpYjpcImVtYWlsXCJ9LHpnPXtlbmRwb2ludDpcInNldEFjY291bnRJbmZvXCIsaGI6W1wiaWRUb2tlblwiXSxLOnNnLHdhOiEwfSwkZj17ZW5kcG9pbnQ6XCJzZXRBY2NvdW50SW5mb1wiLGhiOltcImlkVG9rZW5cIl0sXG5LOmZ1bmN0aW9uKGEpe3NnKGEpO2lmKCFhLnBhc3N3b3JkKXRocm93IG5ldyBPKFwid2Vhay1wYXNzd29yZFwiKTt9LHZhOnhnLHdhOiEwfSx5Zz17ZW5kcG9pbnQ6XCJzaWdudXBOZXdVc2VyXCIsdmE6eGcsd2E6ITB9LEhnPXtlbmRwb2ludDpcInZlcmlmeUFzc2VydGlvblwiLEs6RmcsdmE6R2csd2E6ITB9LElnPXtlbmRwb2ludDpcInZlcmlmeUFzc2VydGlvblwiLEs6ZnVuY3Rpb24oYSl7RmcoYSk7aWYoIWEuaWRUb2tlbil0aHJvdyBuZXcgTyhcImludGVybmFsLWVycm9yXCIpO30sdmE6R2csd2E6ITB9LFFnPXtlbmRwb2ludDpcInZlcmlmeUN1c3RvbVRva2VuXCIsSzpmdW5jdGlvbihhKXtpZighYS50b2tlbil0aHJvdyBuZXcgTyhcImludmFsaWQtY3VzdG9tLXRva2VuXCIpO30sdmE6eGcsd2E6ITB9LFpmPXtlbmRwb2ludDpcInZlcmlmeVBhc3N3b3JkXCIsSzpmdW5jdGlvbihhKXtyZyhhKTtpZighYS5wYXNzd29yZCl0aHJvdyBuZXcgTyhcIndyb25nLXBhc3N3b3JkXCIpO30sdmE6eGcsd2E6ITB9LFE9XG5mdW5jdGlvbihhLGIsYyl7aWYoIUVmKGMsYi5oYikpcmV0dXJuIEUobmV3IE8oXCJpbnRlcm5hbC1lcnJvclwiKSk7dmFyIGQ9Yi5JZXx8XCJQT1NUXCIsZTtyZXR1cm4gRChjKS50aGVuKGIuSykudGhlbihmdW5jdGlvbigpe2Iud2EmJihjLnJldHVyblNlY3VyZVRva2VuPSEwKTtyZXR1cm4gcWcoYSxiLmVuZHBvaW50LGQsYyxiLm1lfHwhMSl9KS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBlPWF9KS50aGVuKGIudmEpLnRoZW4oZnVuY3Rpb24oKXtpZighYi5pYilyZXR1cm4gZTtpZighKGIuaWIgaW4gZSkpdGhyb3cgbmV3IE8oXCJpbnRlcm5hbC1lcnJvclwiKTtyZXR1cm4gZVtiLmliXX0pfSxvZz1mdW5jdGlvbihhKXt2YXIgYixjO2M9KGEuZXJyb3ImJmEuZXJyb3IuZXJyb3JzJiZhLmVycm9yLmVycm9yc1swXXx8e30pLnJlYXNvbnx8XCJcIjt2YXIgZD17a2V5SW52YWxpZDpcImludmFsaWQtYXBpLWtleVwiLGlwUmVmZXJlckJsb2NrZWQ6XCJhcHAtbm90LWF1dGhvcml6ZWRcIn07aWYoYz1kW2NdP1xubmV3IE8oZFtjXSk6bnVsbClyZXR1cm4gYztjPWEuZXJyb3ImJmEuZXJyb3IubWVzc2FnZXx8XCJcIjtkPXtJTlZBTElEX0NVU1RPTV9UT0tFTjpcImludmFsaWQtY3VzdG9tLXRva2VuXCIsQ1JFREVOVElBTF9NSVNNQVRDSDpcImN1c3RvbS10b2tlbi1taXNtYXRjaFwiLE1JU1NJTkdfQ1VTVE9NX1RPS0VOOlwiaW50ZXJuYWwtZXJyb3JcIixJTlZBTElEX0lERU5USUZJRVI6XCJpbnZhbGlkLWVtYWlsXCIsTUlTU0lOR19DT05USU5VRV9VUkk6XCJpbnRlcm5hbC1lcnJvclwiLElOVkFMSURfRU1BSUw6XCJpbnZhbGlkLWVtYWlsXCIsSU5WQUxJRF9QQVNTV09SRDpcIndyb25nLXBhc3N3b3JkXCIsVVNFUl9ESVNBQkxFRDpcInVzZXItZGlzYWJsZWRcIixNSVNTSU5HX1BBU1NXT1JEOlwiaW50ZXJuYWwtZXJyb3JcIixFTUFJTF9FWElTVFM6XCJlbWFpbC1hbHJlYWR5LWluLXVzZVwiLFBBU1NXT1JEX0xPR0lOX0RJU0FCTEVEOlwib3BlcmF0aW9uLW5vdC1hbGxvd2VkXCIsSU5WQUxJRF9JRFBfUkVTUE9OU0U6XCJpbnZhbGlkLWNyZWRlbnRpYWxcIixcbkZFREVSQVRFRF9VU0VSX0lEX0FMUkVBRFlfTElOS0VEOlwiY3JlZGVudGlhbC1hbHJlYWR5LWluLXVzZVwiLElOVkFMSURfTUVTU0FHRV9QQVlMT0FEOlwiaW52YWxpZC1tZXNzYWdlLXBheWxvYWRcIixJTlZBTElEX1JFQ0lQSUVOVF9FTUFJTDpcImludmFsaWQtcmVjaXBpZW50LWVtYWlsXCIsSU5WQUxJRF9TRU5ERVI6XCJpbnZhbGlkLXNlbmRlclwiLEVNQUlMX05PVF9GT1VORDpcInVzZXItbm90LWZvdW5kXCIsRVhQSVJFRF9PT0JfQ09ERTpcImV4cGlyZWQtYWN0aW9uLWNvZGVcIixJTlZBTElEX09PQl9DT0RFOlwiaW52YWxpZC1hY3Rpb24tY29kZVwiLE1JU1NJTkdfT09CX0NPREU6XCJpbnRlcm5hbC1lcnJvclwiLENSRURFTlRJQUxfVE9PX09MRF9MT0dJTl9BR0FJTjpcInJlcXVpcmVzLXJlY2VudC1sb2dpblwiLElOVkFMSURfSURfVE9LRU46XCJpbnZhbGlkLXVzZXItdG9rZW5cIixUT0tFTl9FWFBJUkVEOlwidXNlci10b2tlbi1leHBpcmVkXCIsVVNFUl9OT1RfRk9VTkQ6XCJ1c2VyLXRva2VuLWV4cGlyZWRcIixcbkNPUlNfVU5TVVBQT1JURUQ6XCJjb3JzLXVuc3VwcG9ydGVkXCIsRFlOQU1JQ19MSU5LX05PVF9BQ1RJVkFURUQ6XCJkeW5hbWljLWxpbmstbm90LWFjdGl2YXRlZFwiLFRPT19NQU5ZX0FUVEVNUFRTX1RSWV9MQVRFUjpcInRvby1tYW55LXJlcXVlc3RzXCIsV0VBS19QQVNTV09SRDpcIndlYWstcGFzc3dvcmRcIixPUEVSQVRJT05fTk9UX0FMTE9XRUQ6XCJvcGVyYXRpb24tbm90LWFsbG93ZWRcIixVU0VSX0NBTkNFTExFRDpcInVzZXItY2FuY2VsbGVkXCJ9O2I9KGI9Yy5tYXRjaCgvXlteXFxzXStcXHMqOlxccyooLiopJC8pKSYmMTxiLmxlbmd0aD9iWzFdOnZvaWQgMDtmb3IodmFyIGUgaW4gZClpZigwPT09Yy5pbmRleE9mKGUpKXJldHVybiBuZXcgTyhkW2VdLGIpOyFiJiZhJiYoYj10ZihhKSk7cmV0dXJuIG5ldyBPKFwiaW50ZXJuYWwtZXJyb3JcIixiKX07dmFyIFJnPWZ1bmN0aW9uKGEpe3RoaXMuVj1hfTtSZy5wcm90b3R5cGUudmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5WfTtSZy5wcm90b3R5cGUuUmQ9ZnVuY3Rpb24oYSl7dGhpcy5WLnN0eWxlPWE7cmV0dXJuIHRoaXN9O3ZhciBTZz1mdW5jdGlvbihhKXt0aGlzLlY9YXx8e319O1NnLnByb3RvdHlwZS52YWx1ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLlZ9O1NnLnByb3RvdHlwZS5SZD1mdW5jdGlvbihhKXt0aGlzLlYuc3R5bGU9YTtyZXR1cm4gdGhpc307dmFyIFVnPWZ1bmN0aW9uKGEpe3RoaXMud2Y9YTt0aGlzLmFjPW51bGw7dGhpcy5VYz1UZyh0aGlzKX0sVmc9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IFNnO2IuVi53aGVyZT1kb2N1bWVudC5ib2R5O2IuVi51cmw9YS53ZjtiLlYubWVzc2FnZUhhbmRsZXJzRmlsdGVyPU0oXCJnYXBpLmlmcmFtZXMuQ1JPU1NfT1JJR0lOX0lGUkFNRVNfRklMVEVSXCIpO2IuVi5hdHRyaWJ1dGVzPWIuVi5hdHRyaWJ1dGVzfHx7fTsobmV3IFJnKGIuVi5hdHRyaWJ1dGVzKSkuUmQoe3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCItMTAwcHhcIix3aWR0aDpcIjFweFwiLGhlaWdodDpcIjFweFwifSk7Yi5WLmRvbnRjbGVhcj0hMDtyZXR1cm4gYn0sVGc9ZnVuY3Rpb24oYSl7cmV0dXJuIFdnKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBuZXcgQyhmdW5jdGlvbihiLGMpe00oXCJnYXBpLmlmcmFtZXMuZ2V0Q29udGV4dFwiKSgpLm9wZW4oVmcoYSkudmFsdWUoKSxmdW5jdGlvbihkKXthLmFjPWQ7YS5hYy5yZXN0eWxlKHtzZXRIaWRlT25MZWF2ZTohMX0pO1xudmFyIGU9c2V0VGltZW91dChmdW5jdGlvbigpe2MoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKX0sWGcuZ2V0KCkpLGY9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoZSk7YigpfTtkLnBpbmcoZikudGhlbihmLGZ1bmN0aW9uKCl7YyhFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpfSl9KX0pfSl9O1VnLnByb3RvdHlwZS5zZW5kTWVzc2FnZT1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiB0aGlzLlVjLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEMoZnVuY3Rpb24oYyl7Yi5hYy5zZW5kKGEudHlwZSxhLGMsTShcImdhcGkuaWZyYW1lcy5DUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVJcIikpfSl9KX07XG52YXIgWWc9ZnVuY3Rpb24oYSxiKXthLlVjLnRoZW4oZnVuY3Rpb24oKXthLmFjLnJlZ2lzdGVyKFwiYXV0aEV2ZW50XCIsYixNKFwiZ2FwaS5pZnJhbWVzLkNST1NTX09SSUdJTl9JRlJBTUVTX0ZJTFRFUlwiKSl9KX0sWmc9bmV3IHpmKDNFMywxNUUzKSxYZz1uZXcgemYoNUUzLDE1RTMpLFdnPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBDKGZ1bmN0aW9uKGEsYil7aWYoeWYoKSl7dmFyIGM9ZnVuY3Rpb24oKXt4ZigpO00oXCJnYXBpLmxvYWRcIikoXCJnYXBpLmlmcmFtZXNcIix7Y2FsbGJhY2s6YSxvbnRpbWVvdXQ6ZnVuY3Rpb24oKXt4ZigpO2IoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKX0sdGltZW91dDpaZy5nZXQoKX0pfTtpZihNKFwiZ2FwaS5pZnJhbWVzLklmcmFtZVwiKSlhKCk7ZWxzZSBpZihNKFwiZ2FwaS5sb2FkXCIpKWMoKTtlbHNle3ZhciBkPVwiX19pZnJhbWVmY2JcIitNYXRoLmZsb29yKDFFNipNYXRoLnJhbmRvbSgpKS50b1N0cmluZygpO2xbZF09ZnVuY3Rpb24oKXtNKFwiZ2FwaS5sb2FkXCIpP1xuYygpOmIoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKX07RChFZChcImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcz9vbmxvYWQ9XCIrZCkpLmMoZnVuY3Rpb24oKXtiKEVycm9yKFwiTmV0d29yayBFcnJvclwiKSl9KX19ZWxzZSBiKEVycm9yKFwiTmV0d29yayBFcnJvclwiKSl9KX07dmFyICRnPWZ1bmN0aW9uKGEsYixjKXt0aGlzLnY9YTt0aGlzLmo9Yjt0aGlzLkI9Yzt0aGlzLkthPW51bGw7dGhpcy5NYj1VZSh0aGlzLnYsXCIvX18vYXV0aC9pZnJhbWVcIik7Sih0aGlzLk1iLFwiYXBpS2V5XCIsdGhpcy5qKTtKKHRoaXMuTWIsXCJhcHBOYW1lXCIsdGhpcy5CKX07JGcucHJvdG90eXBlLnNldFZlcnNpb249ZnVuY3Rpb24oYSl7dGhpcy5LYT1hO3JldHVybiB0aGlzfTskZy5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXt0aGlzLkthP0oodGhpcy5NYixcInZcIix0aGlzLkthKTpTZSh0aGlzLk1iLFwidlwiKTtyZXR1cm4gdGhpcy5NYi50b1N0cmluZygpfTt2YXIgYWg9ZnVuY3Rpb24oYSxiLGMsZCxlKXt0aGlzLnY9YTt0aGlzLmo9Yjt0aGlzLkI9Yzt0aGlzLmxlPWQ7dGhpcy5LYT10aGlzLkY9dGhpcy5hZD1udWxsO3RoaXMua2M9ZX07YWgucHJvdG90eXBlLnNldFZlcnNpb249ZnVuY3Rpb24oYSl7dGhpcy5LYT1hO3JldHVybiB0aGlzfTtcbmFoLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3ZhciBhPVVlKHRoaXMudixcIi9fXy9hdXRoL2hhbmRsZXJcIik7SihhLFwiYXBpS2V5XCIsdGhpcy5qKTtKKGEsXCJhcHBOYW1lXCIsdGhpcy5CKTtKKGEsXCJhdXRoVHlwZVwiLHRoaXMubGUpO2lmKHRoaXMua2MuaXNPQXV0aFByb3ZpZGVyKXtKKGEsXCJwcm92aWRlcklkXCIsdGhpcy5rYy5wcm92aWRlcklkKTt2YXIgYj10aGlzLmtjLkNlKCk7YiYmYi5sZW5ndGgmJkooYSxcInNjb3Blc1wiLGIuam9pbihcIixcIikpO2I9dGhpcy5rYy5CZSgpO1FhKGIpfHxKKGEsXCJjdXN0b21QYXJhbWV0ZXJzXCIsdGYoYikpfXRoaXMuYWQ/SihhLFwicmVkaXJlY3RVcmxcIix0aGlzLmFkKTpTZShhLFwicmVkaXJlY3RVcmxcIik7dGhpcy5GP0ooYSxcImV2ZW50SWRcIix0aGlzLkYpOlNlKGEsXCJldmVudElkXCIpO3RoaXMuS2E/SihhLFwidlwiLHRoaXMuS2EpOlNlKGEsXCJ2XCIpO2lmKHRoaXMuTmIpZm9yKHZhciBjIGluIHRoaXMuTmIpdGhpcy5OYi5oYXNPd25Qcm9wZXJ0eShjKSYmXG4hUmUoYSxjKSYmSihhLGMsdGhpcy5OYltjXSk7cmV0dXJuIGEudG9TdHJpbmcoKX07XG52YXIgYmg9ZnVuY3Rpb24oYSxiLGMsZCl7dGhpcy52PWE7dGhpcy5qPWI7dGhpcy5CPWM7dGhpcy56ZT0odGhpcy56YT1kfHxudWxsKT9wZih0aGlzLnphKTpudWxsO2Q9dGhpcy56YTt0aGlzLkplPShuZXcgJGcoYSxiLGMpKS5zZXRWZXJzaW9uKGQpLnRvU3RyaW5nKCk7dGhpcy5pYT1bXTt0aGlzLmc9bmV3IFIoYixudWxsLHRoaXMuemUpO3RoaXMuZGM9dGhpcy5yYT1udWxsfSxjaD1mdW5jdGlvbihhKXt2YXIgYj0kZSgpO3JldHVybiB3ZyhhKS50aGVuKGZ1bmN0aW9uKGEpe2E6e2Zvcih2YXIgYz1UZShiKSxlPWMuZGEsYz1jLiQsZj0wO2Y8YS5sZW5ndGg7ZisrKXt2YXIgZzt2YXIgaz1hW2ZdO2c9Yzt2YXIgbj1lOzA9PWsuaW5kZXhPZihcImNocm9tZS1leHRlbnNpb246Ly9cIik/Zz1UZShrKS4kPT1nJiZcImNocm9tZS1leHRlbnNpb25cIj09bjpcImh0dHBcIiE9biYmXCJodHRwc1wiIT1uP2c9ITE6amYudGVzdChrKT9nPWc9PWs6KGs9ay5zcGxpdChcIi5cIikuam9pbihcIlxcXFwuXCIpLGc9KG5ldyBSZWdFeHAoXCJeKC4rXFxcXC5cIitcbmsrXCJ8XCIraytcIikkXCIsXCJpXCIpKS50ZXN0KGcpKTtpZihnKXthPSEwO2JyZWFrIGF9fWE9ITF9aWYoIWEpdGhyb3cgbmV3IE5mKCRlKCkpO30pfTtoPWJoLnByb3RvdHlwZTtoLnZiPWZ1bmN0aW9uKCl7aWYodGhpcy5kYylyZXR1cm4gdGhpcy5kYzt2YXIgYT10aGlzO3JldHVybiB0aGlzLmRjPWtmKCkudGhlbihmdW5jdGlvbigpe2EuJGI9bmV3IFVnKGEuSmUpO2RoKGEpfSl9O2guSGI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPW5ldyBPKFwicG9wdXAtY2xvc2VkLWJ5LXVzZXJcIiksZT1uZXcgTyhcIndlYi1zdG9yYWdlLXVuc3VwcG9ydGVkXCIpLGY9dGhpcyxnPSExO3JldHVybiB0aGlzLkRhKCkudGhlbihmdW5jdGlvbigpe2VoKGYpLnRoZW4oZnVuY3Rpb24oYyl7Y3x8KGEmJmZmKGEpLGIoZSksZz0hMCl9KX0pLmMoZnVuY3Rpb24oKXt9KS50aGVuKGZ1bmN0aW9uKCl7aWYoIWcpcmV0dXJuIGhmKGEpfSkudGhlbihmdW5jdGlvbigpe2lmKCFnKXJldHVybiBtZShjKS50aGVuKGZ1bmN0aW9uKCl7YihkKX0pfSl9O1xuaC5TZD1mdW5jdGlvbigpe3ZhciBhPUsoKTtyZXR1cm4hc2YoYSkmJiF3ZihhKX07aC56ZD1mdW5jdGlvbigpe3JldHVybiExfTtoLkNiPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe2lmKCFhKXJldHVybiBFKG5ldyBPKFwicG9wdXAtYmxvY2tlZFwiKSk7aWYoZylyZXR1cm4gdGhpcy5EYSgpLmMoZnVuY3Rpb24oYil7ZmYoYSk7ZShiKX0pLGQoKSxEKCk7dGhpcy5yYXx8KHRoaXMucmE9Y2godGhpcy5nKSk7dmFyIGs9dGhpcztyZXR1cm4gdGhpcy5yYS50aGVuKGZ1bmN0aW9uKCl7dmFyIGI9ay5EYSgpLmMoZnVuY3Rpb24oYil7ZmYoYSk7ZShiKTt0aHJvdyBiO30pO2QoKTtyZXR1cm4gYn0pLnRoZW4oZnVuY3Rpb24oKXtkZyhjKTt2YXIgZD1maChrLnYsay5qLGsuQixiLGMsbnVsbCxmLGsuemEpO2FmKGQsYSl9KS5jKGZ1bmN0aW9uKGEpe1wiYXV0aC9uZXR3b3JrLXJlcXVlc3QtZmFpbGVkXCI9PWEuY29kZSYmKGsucmE9bnVsbCk7dGhyb3cgYTt9KX07XG5oLkRiPWZ1bmN0aW9uKGEsYixjKXt0aGlzLnJhfHwodGhpcy5yYT1jaCh0aGlzLmcpKTt2YXIgZD10aGlzO3JldHVybiB0aGlzLnJhLnRoZW4oZnVuY3Rpb24oKXtkZyhiKTt2YXIgZT1maChkLnYsZC5qLGQuQixhLGIsJGUoKSxjLGQuemEpO2FmKGUpfSl9O2guRGE9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3JldHVybiB0aGlzLnZiKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBhLiRiLlVjfSkuYyhmdW5jdGlvbigpe2EucmE9bnVsbDt0aHJvdyBuZXcgTyhcIm5ldHdvcmstcmVxdWVzdC1mYWlsZWRcIik7fSl9O2guV2Q9ZnVuY3Rpb24oKXtyZXR1cm4hMH07XG52YXIgZmg9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyxrLG4pe2E9bmV3IGFoKGEsYixjLGQsZSk7YS5hZD1mO2EuRj1nO2Y9YS5zZXRWZXJzaW9uKGspO2YuTmI9U2Eobnx8bnVsbCk7cmV0dXJuIGYudG9TdHJpbmcoKX0sZGg9ZnVuY3Rpb24oYSl7aWYoIWEuJGIpdGhyb3cgRXJyb3IoXCJJZmNIYW5kbGVyIG11c3QgYmUgaW5pdGlhbGl6ZWQhXCIpO1lnKGEuJGIsZnVuY3Rpb24oYil7dmFyIGM9e307aWYoYiYmYi5hdXRoRXZlbnQpe3ZhciBkPSExO2I9TWYoYi5hdXRoRXZlbnQpO2ZvcihjPTA7YzxhLmlhLmxlbmd0aDtjKyspZD1hLmlhW2NdKGIpfHxkO2M9e307Yy5zdGF0dXM9ZD9cIkFDS1wiOlwiRVJST1JcIjtyZXR1cm4gRChjKX1jLnN0YXR1cz1cIkVSUk9SXCI7cmV0dXJuIEQoYyl9KX0sZWg9ZnVuY3Rpb24oYSl7dmFyIGI9e3R5cGU6XCJ3ZWJTdG9yYWdlU3VwcG9ydFwifTtyZXR1cm4gYS52YigpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS4kYi5zZW5kTWVzc2FnZShiKX0pLnRoZW4oZnVuY3Rpb24oYSl7aWYoYSYmXG5hLmxlbmd0aCYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhWzBdLndlYlN0b3JhZ2VTdXBwb3J0KXJldHVybiBhWzBdLndlYlN0b3JhZ2VTdXBwb3J0O3Rocm93IEVycm9yKCk7fSl9O2JoLnByb3RvdHlwZS5NYT1mdW5jdGlvbihhKXt0aGlzLmlhLnB1c2goYSl9O2JoLnByb3RvdHlwZS5HYj1mdW5jdGlvbihhKXtLYSh0aGlzLmlhLGZ1bmN0aW9uKGIpe3JldHVybiBiPT1hfSl9O3ZhciBnaD1mdW5jdGlvbihhKXt0aGlzLkE9YXx8ZmlyZWJhc2UuSU5URVJOQUwucmVhY3ROYXRpdmUmJmZpcmViYXNlLklOVEVSTkFMLnJlYWN0TmF0aXZlLkFzeW5jU3RvcmFnZTtpZighdGhpcy5BKXRocm93IG5ldyBPKFwiaW50ZXJuYWwtZXJyb3JcIixcIlRoZSBSZWFjdCBOYXRpdmUgY29tcGF0aWJpbGl0eSBsaWJyYXJ5IHdhcyBub3QgZm91bmQuXCIpO307aD1naC5wcm90b3R5cGU7aC5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIEQodGhpcy5BLmdldEl0ZW0oYSkpLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIGEmJnZmKGEpfSl9O2guc2V0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIEQodGhpcy5BLnNldEl0ZW0oYSx0ZihiKSkpfTtoLnJlbW92ZT1mdW5jdGlvbihhKXtyZXR1cm4gRCh0aGlzLkEucmVtb3ZlSXRlbShhKSl9O2guTmE9ZnVuY3Rpb24oKXt9O2guZmI9ZnVuY3Rpb24oKXt9O3ZhciBoaD1mdW5jdGlvbigpe3RoaXMuQT17fX07aD1oaC5wcm90b3R5cGU7aC5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIEQodGhpcy5BW2FdKX07aC5zZXQ9ZnVuY3Rpb24oYSxiKXt0aGlzLkFbYV09YjtyZXR1cm4gRCgpfTtoLnJlbW92ZT1mdW5jdGlvbihhKXtkZWxldGUgdGhpcy5BW2FdO3JldHVybiBEKCl9O2guTmE9ZnVuY3Rpb24oKXt9O2guZmI9ZnVuY3Rpb24oKXt9O3ZhciBqaD1mdW5jdGlvbigpe2lmKCFpaCgpKXtpZihcIk5vZGVcIj09TCgpKXRocm93IG5ldyBPKFwiaW50ZXJuYWwtZXJyb3JcIixcIlRoZSBMb2NhbFN0b3JhZ2UgY29tcGF0aWJpbGl0eSBsaWJyYXJ5IHdhcyBub3QgZm91bmQuXCIpO3Rocm93IG5ldyBPKFwid2ViLXN0b3JhZ2UtdW5zdXBwb3J0ZWRcIik7fXRoaXMuQT1sLmxvY2FsU3RvcmFnZXx8ZmlyZWJhc2UuSU5URVJOQUwubm9kZS5sb2NhbFN0b3JhZ2V9LGloPWZ1bmN0aW9uKCl7dmFyIGE9XCJOb2RlXCI9PUwoKSxhPWwubG9jYWxTdG9yYWdlfHxhJiZmaXJlYmFzZS5JTlRFUk5BTC5ub2RlJiZmaXJlYmFzZS5JTlRFUk5BTC5ub2RlLmxvY2FsU3RvcmFnZTtpZighYSlyZXR1cm4hMTt0cnl7cmV0dXJuIGEuc2V0SXRlbShcIl9fc2FrXCIsXCIxXCIpLGEucmVtb3ZlSXRlbShcIl9fc2FrXCIpLCEwfWNhdGNoKGIpe3JldHVybiExfX07aD1qaC5wcm90b3R5cGU7XG5oLmdldD1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiBEKCkudGhlbihmdW5jdGlvbigpe3ZhciBjPWIuQS5nZXRJdGVtKGEpO3JldHVybiB2ZihjKX0pfTtoLnNldD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIEQoKS50aGVuKGZ1bmN0aW9uKCl7dmFyIGQ9dGYoYik7bnVsbD09PWQ/Yy5yZW1vdmUoYSk6Yy5BLnNldEl0ZW0oYSxkKX0pfTtoLnJlbW92ZT1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiBEKCkudGhlbihmdW5jdGlvbigpe2IuQS5yZW1vdmVJdGVtKGEpfSl9O2guTmE9ZnVuY3Rpb24oYSl7bC53aW5kb3cmJlViKGwud2luZG93LFwic3RvcmFnZVwiLGEpfTtoLmZiPWZ1bmN0aW9uKGEpe2wud2luZG93JiZjYyhsLndpbmRvdyxcInN0b3JhZ2VcIixhKX07dmFyIGtoPWZ1bmN0aW9uKCl7dGhpcy5BPXt9fTtoPWtoLnByb3RvdHlwZTtoLmdldD1mdW5jdGlvbigpe3JldHVybiBEKG51bGwpfTtoLnNldD1mdW5jdGlvbigpe3JldHVybiBEKCl9O2gucmVtb3ZlPWZ1bmN0aW9uKCl7cmV0dXJuIEQoKX07aC5OYT1mdW5jdGlvbigpe307aC5mYj1mdW5jdGlvbigpe307dmFyIG1oPWZ1bmN0aW9uKCl7aWYoIWxoKCkpe2lmKFwiTm9kZVwiPT1MKCkpdGhyb3cgbmV3IE8oXCJpbnRlcm5hbC1lcnJvclwiLFwiVGhlIFNlc3Npb25TdG9yYWdlIGNvbXBhdGliaWxpdHkgbGlicmFyeSB3YXMgbm90IGZvdW5kLlwiKTt0aHJvdyBuZXcgTyhcIndlYi1zdG9yYWdlLXVuc3VwcG9ydGVkXCIpO310aGlzLkE9bC5zZXNzaW9uU3RvcmFnZXx8ZmlyZWJhc2UuSU5URVJOQUwubm9kZS5zZXNzaW9uU3RvcmFnZX0sbGg9ZnVuY3Rpb24oKXt2YXIgYT1cIk5vZGVcIj09TCgpLGE9bC5zZXNzaW9uU3RvcmFnZXx8YSYmZmlyZWJhc2UuSU5URVJOQUwubm9kZSYmZmlyZWJhc2UuSU5URVJOQUwubm9kZS5zZXNzaW9uU3RvcmFnZTtpZighYSlyZXR1cm4hMTt0cnl7cmV0dXJuIGEuc2V0SXRlbShcIl9fc2FrXCIsXCIxXCIpLGEucmVtb3ZlSXRlbShcIl9fc2FrXCIpLCEwfWNhdGNoKGIpe3JldHVybiExfX07aD1taC5wcm90b3R5cGU7XG5oLmdldD1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiBEKCkudGhlbihmdW5jdGlvbigpe3ZhciBjPWIuQS5nZXRJdGVtKGEpO3JldHVybiB2ZihjKX0pfTtoLnNldD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIEQoKS50aGVuKGZ1bmN0aW9uKCl7dmFyIGQ9dGYoYik7bnVsbD09PWQ/Yy5yZW1vdmUoYSk6Yy5BLnNldEl0ZW0oYSxkKX0pfTtoLnJlbW92ZT1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiBEKCkudGhlbihmdW5jdGlvbigpe2IuQS5yZW1vdmVJdGVtKGEpfSl9O2guTmE9ZnVuY3Rpb24oKXt9O2guZmI9ZnVuY3Rpb24oKXt9O3ZhciBuaD1mdW5jdGlvbihhLGIsYyxkLGUsZil7aWYoIXdpbmRvdy5pbmRleGVkREIpdGhyb3cgbmV3IE8oXCJ3ZWItc3RvcmFnZS11bnN1cHBvcnRlZFwiKTt0aGlzLnBlPWE7dGhpcy5UYz1iO3RoaXMuR2M9Yzt0aGlzLiRkPWQ7dGhpcy5uYj1lO3RoaXMuVD17fTt0aGlzLkliPVtdO3RoaXMueWI9MDt0aGlzLktlPWZ8fGwuaW5kZXhlZERCfSxvaCxwaD1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IEMoZnVuY3Rpb24oYixjKXt2YXIgZD1hLktlLm9wZW4oYS5wZSxhLm5iKTtkLm9uZXJyb3I9ZnVuY3Rpb24oYSl7YyhFcnJvcihhLnRhcmdldC5lcnJvckNvZGUpKX07ZC5vbnVwZ3JhZGVuZWVkZWQ9ZnVuY3Rpb24oYil7Yj1iLnRhcmdldC5yZXN1bHQ7dHJ5e2IuY3JlYXRlT2JqZWN0U3RvcmUoYS5UYyx7a2V5UGF0aDphLkdjfSl9Y2F0Y2goZil7YyhmKX19O2Qub25zdWNjZXNzPWZ1bmN0aW9uKGEpe2IoYS50YXJnZXQucmVzdWx0KX19KX0scWg9ZnVuY3Rpb24oYSl7YS5DZHx8KGEuQ2Q9XG5waChhKSk7cmV0dXJuIGEuQ2R9LHJoPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIub2JqZWN0U3RvcmUoYS5UYyl9LHNoPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYi50cmFuc2FjdGlvbihbYS5UY10sYz9cInJlYWR3cml0ZVwiOlwicmVhZG9ubHlcIil9LHRoPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgQyhmdW5jdGlvbihiLGMpe2Eub25zdWNjZXNzPWZ1bmN0aW9uKGEpe2EmJmEudGFyZ2V0P2IoYS50YXJnZXQucmVzdWx0KTpiKCl9O2Eub25lcnJvcj1mdW5jdGlvbihhKXtjKEVycm9yKGEudGFyZ2V0LmVycm9yQ29kZSkpfX0pfTtoPW5oLnByb3RvdHlwZTtcbmguc2V0PWZ1bmN0aW9uKGEsYil7dmFyIGM9ITEsZCxlPXRoaXM7cmV0dXJuIG5kKHFoKHRoaXMpLnRoZW4oZnVuY3Rpb24oYil7ZD1iO2I9cmgoZSxzaChlLGQsITApKTtyZXR1cm4gdGgoYi5nZXQoYSkpfSkudGhlbihmdW5jdGlvbihmKXt2YXIgZz1yaChlLHNoKGUsZCwhMCkpO2lmKGYpcmV0dXJuIGYudmFsdWU9Yix0aChnLnB1dChmKSk7ZS55YisrO2M9ITA7Zj17fTtmW2UuR2NdPWE7ZltlLiRkXT1iO3JldHVybiB0aChnLmFkZChmKSl9KS50aGVuKGZ1bmN0aW9uKCl7ZS5UW2FdPWJ9KSxmdW5jdGlvbigpe2MmJmUueWItLX0pfTtoLmdldD1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiBxaCh0aGlzKS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiB0aChyaChiLHNoKGIsYywhMSkpLmdldChhKSl9KS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBhJiZhLnZhbHVlfSl9O1xuaC5yZW1vdmU9ZnVuY3Rpb24oYSl7dmFyIGI9ITEsYz10aGlzO3JldHVybiBuZChxaCh0aGlzKS50aGVuKGZ1bmN0aW9uKGQpe2I9ITA7Yy55YisrO3JldHVybiB0aChyaChjLHNoKGMsZCwhMCkpW1wiZGVsZXRlXCJdKGEpKX0pLnRoZW4oZnVuY3Rpb24oKXtkZWxldGUgYy5UW2FdfSksZnVuY3Rpb24oKXtiJiZjLnliLS19KX07XG5oLm5mPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm4gcWgodGhpcykudGhlbihmdW5jdGlvbihiKXt2YXIgYz1yaChhLHNoKGEsYiwhMSkpO3JldHVybiBjLmdldEFsbD90aChjLmdldEFsbCgpKTpuZXcgQyhmdW5jdGlvbihhLGIpe3ZhciBkPVtdLGU9Yy5vcGVuQ3Vyc29yKCk7ZS5vbnN1Y2Nlc3M9ZnVuY3Rpb24oYil7KGI9Yi50YXJnZXQucmVzdWx0KT8oZC5wdXNoKGIudmFsdWUpLGJbXCJjb250aW51ZVwiXSgpKTphKGQpfTtlLm9uZXJyb3I9ZnVuY3Rpb24oYSl7YihFcnJvcihhLnRhcmdldC5lcnJvckNvZGUpKX19KX0pLnRoZW4oZnVuY3Rpb24oYil7dmFyIGM9e30sZD1bXTtpZigwPT1hLnliKXtmb3IoZD0wO2Q8Yi5sZW5ndGg7ZCsrKWNbYltkXVthLkdjXV09YltkXVthLiRkXTtkPWJmKGEuVCxjKTthLlQ9Y31yZXR1cm4gZH0pfTtoLk5hPWZ1bmN0aW9uKGEpezA9PXRoaXMuSWIubGVuZ3RoJiZ0aGlzLmdkKCk7dGhpcy5JYi5wdXNoKGEpfTtcbmguZmI9ZnVuY3Rpb24oYSl7S2EodGhpcy5JYixmdW5jdGlvbihiKXtyZXR1cm4gYj09YX0pOzA9PXRoaXMuSWIubGVuZ3RoJiZ0aGlzLnJjKCl9O2guZ2Q9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3RoaXMucmMoKTt2YXIgYj1mdW5jdGlvbigpe2EuWGM9bWUoODAwKS50aGVuKHIoYS5uZixhKSkudGhlbihmdW5jdGlvbihiKXswPGIubGVuZ3RoJiZ4KGEuSWIsZnVuY3Rpb24oYSl7YShiKX0pfSkudGhlbihiKS5jKGZ1bmN0aW9uKGEpe1wiU1RPUF9FVkVOVFwiIT1hLm1lc3NhZ2UmJmIoKX0pO3JldHVybiBhLlhjfTtiKCl9O2gucmM9ZnVuY3Rpb24oKXt0aGlzLlhjJiZ0aGlzLlhjLmNhbmNlbChcIlNUT1BfRVZFTlRcIil9O3ZhciB4aD1mdW5jdGlvbigpe3RoaXMuc2Q9e0Jyb3dzZXI6dWgsTm9kZTp2aCxSZWFjdE5hdGl2ZTp3aH1bTCgpXX0seWgsdWg9e0k6amgsamQ6bWh9LHZoPXtJOmpoLGpkOm1ofSx3aD17STpnaCxqZDpraH07dmFyIHpoPWZ1bmN0aW9uKGEpe3ZhciBiPXt9LGM9YS5lbWFpbCxkPWEubmV3RW1haWw7YT1hLnJlcXVlc3RUeXBlO2lmKCFjfHwhYSl0aHJvdyBFcnJvcihcIkludmFsaWQgcHJvdmlkZXIgdXNlciBpbmZvIVwiKTtiLmZyb21FbWFpbD1kfHxudWxsO2IuZW1haWw9YztOKHRoaXMsXCJvcGVyYXRpb25cIixhKTtOKHRoaXMsXCJkYXRhXCIsRmYoYikpfTt2YXIgQWg9XCJGaXJzdCBTZWNvbmQgVGhpcmQgRm91cnRoIEZpZnRoIFNpeHRoIFNldmVudGggRWlnaHRoIE5pbnRoXCIuc3BsaXQoXCIgXCIpLFM9ZnVuY3Rpb24oYSxiKXtyZXR1cm57bmFtZTphfHxcIlwiLGZhOlwiYSB2YWxpZCBzdHJpbmdcIixvcHRpb25hbDohIWIsaGE6cH19LFQ9ZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6YXx8XCJcIixmYTpcImEgdmFsaWQgb2JqZWN0XCIsb3B0aW9uYWw6ITEsaGE6Z2F9fSxCaD1mdW5jdGlvbihhLGIpe3JldHVybntuYW1lOmF8fFwiXCIsZmE6XCJhIGZ1bmN0aW9uXCIsb3B0aW9uYWw6ISFiLGhhOnF9fSxDaD1mdW5jdGlvbigpe3JldHVybntuYW1lOlwiXCIsZmE6XCJudWxsXCIsb3B0aW9uYWw6ITEsaGE6Y2F9fSxEaD1mdW5jdGlvbigpe3JldHVybntuYW1lOlwiY3JlZGVudGlhbFwiLGZhOlwiYSB2YWxpZCBjcmVkZW50aWFsXCIsb3B0aW9uYWw6ITEsaGE6ZnVuY3Rpb24oYSl7cmV0dXJuISghYXx8IWEuVWIpfX19LEVoPWZ1bmN0aW9uKCl7cmV0dXJue25hbWU6XCJhdXRoUHJvdmlkZXJcIixcbmZhOlwiYSB2YWxpZCBBdXRoIHByb3ZpZGVyXCIsb3B0aW9uYWw6ITEsaGE6ZnVuY3Rpb24oYSl7cmV0dXJuISEoYSYmYS5wcm92aWRlcklkJiZhLmhhc093blByb3BlcnR5JiZhLmhhc093blByb3BlcnR5KFwiaXNPQXV0aFByb3ZpZGVyXCIpKX19fSxGaD1mdW5jdGlvbihhLGIsYyxkKXtyZXR1cm57bmFtZTpjfHxcIlwiLGZhOmEuZmErXCIgb3IgXCIrYi5mYSxvcHRpb25hbDohIWQsaGE6ZnVuY3Rpb24oYyl7cmV0dXJuIGEuaGEoYyl8fGIuaGEoYyl9fX07dmFyIEhoPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjIGluIGIpe3ZhciBkPWJbY10ubmFtZTthW2RdPUdoKGQsYVtjXSxiW2NdLmEpfX0sVT1mdW5jdGlvbihhLGIsYyxkKXthW2JdPUdoKGIsYyxkKX0sR2g9ZnVuY3Rpb24oYSxiLGMpe2lmKCFjKXJldHVybiBiO3ZhciBkPUloKGEpO2E9ZnVuY3Rpb24oKXt2YXIgYT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLGU7YTp7ZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhKTt2YXIgaztrPTA7Zm9yKHZhciBuPSExLHk9MDt5PGMubGVuZ3RoO3krKylpZihjW3ldLm9wdGlvbmFsKW49ITA7ZWxzZXtpZihuKXRocm93IG5ldyBPKFwiaW50ZXJuYWwtZXJyb3JcIixcIkFyZ3VtZW50IHZhbGlkYXRvciBlbmNvdW50ZXJlZCBhIHJlcXVpcmVkIGFyZ3VtZW50IGFmdGVyIGFuIG9wdGlvbmFsIGFyZ3VtZW50LlwiKTtrKyt9bj1jLmxlbmd0aDtpZihlLmxlbmd0aDxrfHxuPGUubGVuZ3RoKWU9XCJFeHBlY3RlZCBcIisoaz09bj8xPT1cbms/XCIxIGFyZ3VtZW50XCI6aytcIiBhcmd1bWVudHNcIjprK1wiLVwiK24rXCIgYXJndW1lbnRzXCIpK1wiIGJ1dCBnb3QgXCIrZS5sZW5ndGgrXCIuXCI7ZWxzZXtmb3Ioaz0wO2s8ZS5sZW5ndGg7aysrKWlmKG49Y1trXS5vcHRpb25hbCYmdm9pZCAwPT09ZVtrXSwhY1trXS5oYShlW2tdKSYmIW4pe2U9Y1trXTtpZigwPmt8fGs+PUFoLmxlbmd0aCl0aHJvdyBuZXcgTyhcImludGVybmFsLWVycm9yXCIsXCJBcmd1bWVudCB2YWxpZGF0b3IgcmVjZWl2ZWQgYW4gdW5zdXBwb3J0ZWQgbnVtYmVyIG9mIGFyZ3VtZW50cy5cIik7ZT1BaFtrXStcIiBhcmd1bWVudCBcIisoZS5uYW1lPydcIicrZS5uYW1lKydcIiAnOlwiXCIpK1wibXVzdCBiZSBcIitlLmZhK1wiLlwiO2JyZWFrIGF9ZT1udWxsfX1pZihlKXRocm93IG5ldyBPKFwiYXJndW1lbnQtZXJyb3JcIixkK1wiIGZhaWxlZDogXCIrZSk7cmV0dXJuIGIuYXBwbHkodGhpcyxhKX07Zm9yKHZhciBlIGluIGIpYVtlXT1iW2VdO2ZvcihlIGluIGIucHJvdG90eXBlKWEucHJvdG90eXBlW2VdPVxuYi5wcm90b3R5cGVbZV07cmV0dXJuIGF9LEloPWZ1bmN0aW9uKGEpe2E9YS5zcGxpdChcIi5cIik7cmV0dXJuIGFbYS5sZW5ndGgtMV19O3ZhciBKaD1mdW5jdGlvbihhLGIsYyxkKXt0aGlzLlhlPWE7dGhpcy5QZD1iO3RoaXMuZWY9Yzt0aGlzLmpiPWQ7dGhpcy5TPXt9O3lofHwoeWg9bmV3IHhoKTthPXloO3RyeXt2YXIgZTtaZSgpPyhvaHx8KG9oPW5ldyBuaChcImZpcmViYXNlTG9jYWxTdG9yYWdlRGJcIixcImZpcmViYXNlTG9jYWxTdG9yYWdlXCIsXCJmYmFzZV9rZXlcIixcInZhbHVlXCIsMSkpLGU9b2gpOmU9bmV3IGEuc2QuSTt0aGlzLllhPWV9Y2F0Y2goZil7dGhpcy5ZYT1uZXcgaGgsdGhpcy5qYj0hMH10cnl7dGhpcy50Yz1uZXcgYS5zZC5qZH1jYXRjaChmKXt0aGlzLnRjPW5ldyBoaH10aGlzLlRkPXIodGhpcy5VZCx0aGlzKTt0aGlzLlQ9e319LEtoLExoPWZ1bmN0aW9uKCl7S2h8fChLaD1uZXcgSmgoXCJmaXJlYmFzZVwiLFwiOlwiLCF3ZihLKCkpJiZsLndpbmRvdyYmbC53aW5kb3chPWwud2luZG93LnRvcD8hMDohMSxzZigpKSk7cmV0dXJuIEtofTtoPUpoLnByb3RvdHlwZTtcbmguUD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLlhlK3RoaXMuUGQrYS5uYW1lKyhiP3RoaXMuUGQrYjpcIlwiKX07aC5nZXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5JP3RoaXMuWWE6dGhpcy50YykuZ2V0KHRoaXMuUChhLGIpKX07aC5yZW1vdmU9ZnVuY3Rpb24oYSxiKXtiPXRoaXMuUChhLGIpO2EuSSYmIXRoaXMuamImJih0aGlzLlRbYl09bnVsbCk7cmV0dXJuKGEuST90aGlzLllhOnRoaXMudGMpLnJlbW92ZShiKX07aC5zZXQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMuUChhLGMpLGU9dGhpcyxmPWEuST90aGlzLllhOnRoaXMudGM7cmV0dXJuIGYuc2V0KGQsYikudGhlbihmdW5jdGlvbigpe3JldHVybiBmLmdldChkKX0pLnRoZW4oZnVuY3Rpb24oYil7YS5JJiYhdGhpcy5qYiYmKGUuVFtkXT1iKX0pfTtcbmguYWRkTGlzdGVuZXI9ZnVuY3Rpb24oYSxiLGMpe2E9dGhpcy5QKGEsYik7dGhpcy5qYnx8KHRoaXMuVFthXT1sLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGEpKTtRYSh0aGlzLlMpJiZ0aGlzLmdkKCk7dGhpcy5TW2FdfHwodGhpcy5TW2FdPVtdKTt0aGlzLlNbYV0ucHVzaChjKX07aC5yZW1vdmVMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyl7YT10aGlzLlAoYSxiKTt0aGlzLlNbYV0mJihLYSh0aGlzLlNbYV0sZnVuY3Rpb24oYSl7cmV0dXJuIGE9PWN9KSwwPT10aGlzLlNbYV0ubGVuZ3RoJiZkZWxldGUgdGhpcy5TW2FdKTtRYSh0aGlzLlMpJiZ0aGlzLnJjKCl9O2guZ2Q9ZnVuY3Rpb24oKXt0aGlzLllhLk5hKHRoaXMuVGQpO3RoaXMuamJ8fE1oKHRoaXMpfTtcbnZhciBNaD1mdW5jdGlvbihhKXtOaChhKTthLlNjPXNldEludGVydmFsKGZ1bmN0aW9uKCl7Zm9yKHZhciBiIGluIGEuUyl7dmFyIGM9bC5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShiKTtjIT1hLlRbYl0mJihhLlRbYl09YyxjPW5ldyBKYih7dHlwZTpcInN0b3JhZ2VcIixrZXk6Yix0YXJnZXQ6d2luZG93LG9sZFZhbHVlOmEuVFtiXSxuZXdWYWx1ZTpjfSksYS5VZChjKSl9fSwxRTMpfSxOaD1mdW5jdGlvbihhKXthLlNjJiYoY2xlYXJJbnRlcnZhbChhLlNjKSxhLlNjPW51bGwpfTtKaC5wcm90b3R5cGUucmM9ZnVuY3Rpb24oKXt0aGlzLllhLmZiKHRoaXMuVGQpO3RoaXMuamJ8fE5oKHRoaXMpfTtcbkpoLnByb3RvdHlwZS5VZD1mdW5jdGlvbihhKXtpZihhJiZhLkFlKXt2YXIgYj1hLnFiLmtleTtpZih0aGlzLmVmKXt2YXIgYz1sLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGIpO2E9YS5xYi5uZXdWYWx1ZTthIT1jJiYoYT9sLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGIsYSk6YXx8bC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShiKSl9dGhpcy5UW2JdPWwubG9jYWxTdG9yYWdlLmdldEl0ZW0oYik7dGhpcy5tZChiKX1lbHNlIHgoYSxyKHRoaXMubWQsdGhpcykpfTtKaC5wcm90b3R5cGUubWQ9ZnVuY3Rpb24oYSl7dGhpcy5TW2FdJiZ4KHRoaXMuU1thXSxmdW5jdGlvbihhKXthKCl9KX07dmFyIE9oPWZ1bmN0aW9uKGEsYil7dGhpcy51PWE7dGhpcy5pPWJ8fExoKCl9LFBoPXtuYW1lOlwiYXV0aEV2ZW50XCIsSTohMH0sUWg9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuaS5nZXQoUGgsYS51KS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBNZihhKX0pfTtPaC5wcm90b3R5cGUuTWE9ZnVuY3Rpb24oYSl7dGhpcy5pLmFkZExpc3RlbmVyKFBoLHRoaXMudSxhKX07T2gucHJvdG90eXBlLkdiPWZ1bmN0aW9uKGEpe3RoaXMuaS5yZW1vdmVMaXN0ZW5lcihQaCx0aGlzLnUsYSl9O3ZhciBSaD1mdW5jdGlvbihhKXt0aGlzLmk9YXx8TGgoKX0sU2g9e25hbWU6XCJzZXNzaW9uSWRcIixJOiExfTtSaC5wcm90b3R5cGUuVmI9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuaS5nZXQoU2gsYSl9O3ZhciBUaD1mdW5jdGlvbihhLGIsYyxkLGUsZil7dGhpcy52PWE7dGhpcy5qPWI7dGhpcy5CPWM7dGhpcy56YT1kfHxudWxsO3RoaXMuVmQ9YitcIjpcIitjO3RoaXMuZmY9bmV3IFJoO3RoaXMud2Q9bmV3IE9oKHRoaXMuVmQpO3RoaXMuT2M9bnVsbDt0aGlzLmlhPVtdO3RoaXMuTmU9ZXx8NTAwO3RoaXMuY2Y9Znx8MkUzO3RoaXMudWI9dGhpcy5oYz1udWxsfSxVaD1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IE8oXCJpbnZhbGlkLWNvcmRvdmEtY29uZmlndXJhdGlvblwiLGEpfTtcblRoLnByb3RvdHlwZS5EYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLlFjP3RoaXMuUWM6dGhpcy5RYz1tZigpLnRoZW4oZnVuY3Rpb24oKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgTShcInVuaXZlcnNhbExpbmtzLnN1YnNjcmliZVwiLGwpKXRocm93IFVoKFwiY29yZG92YS11bml2ZXJzYWwtbGlua3MtcGx1Z2luIGlzIG5vdCBpbnN0YWxsZWRcIik7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBNKFwiQnVpbGRJbmZvLnBhY2thZ2VOYW1lXCIsbCkpdGhyb3cgVWgoXCJjb3Jkb3ZhLXBsdWdpbi1idWlsZGluZm8gaXMgbm90IGluc3RhbGxlZFwiKTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgTShcImNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLm9wZW5VcmxcIixsKSl0aHJvdyBVaChcImNvcmRvdmEtcGx1Z2luLWJyb3dzZXJ0YWIgaXMgbm90IGluc3RhbGxlZFwiKTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgTShcImNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW5cIixsKSl0aHJvdyBVaChcImNvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3NlciBpcyBub3QgaW5zdGFsbGVkXCIpO1xufSxmdW5jdGlvbigpe3Rocm93IG5ldyBPKFwiY29yZG92YS1ub3QtcmVhZHlcIik7fSl9O3ZhciBWaD1mdW5jdGlvbigpe2Zvcih2YXIgYT0yMCxiPVtdOzA8YTspYi5wdXNoKFwiMTIzNDU2Nzg5MGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIi5jaGFyQXQoTWF0aC5mbG9vcig2MipNYXRoLnJhbmRvbSgpKSkpLGEtLTtyZXR1cm4gYi5qb2luKFwiXCIpfSxXaD1mdW5jdGlvbihhKXt2YXIgYj1uZXcgRGI7Yi51cGRhdGUoYSk7cmV0dXJuIG9iKGIuZGlnZXN0KCkpfTtoPVRoLnByb3RvdHlwZTtoLkhiPWZ1bmN0aW9uKGEsYil7YihuZXcgTyhcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIikpO3JldHVybiBEKCl9O2guQ2I9ZnVuY3Rpb24oKXtyZXR1cm4gRShuZXcgTyhcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIikpfTtoLldkPWZ1bmN0aW9uKCl7cmV0dXJuITF9O2guU2Q9ZnVuY3Rpb24oKXtyZXR1cm4hMH07XG5oLnpkPWZ1bmN0aW9uKCl7cmV0dXJuITB9O1xuaC5EYj1mdW5jdGlvbihhLGIsYyl7aWYodGhpcy5oYylyZXR1cm4gRShuZXcgTyhcInJlZGlyZWN0LW9wZXJhdGlvbi1wZW5kaW5nXCIpKTt2YXIgZD10aGlzLGU9bC5kb2N1bWVudCxmPW51bGwsZz1udWxsLGs9bnVsbCxuPW51bGw7cmV0dXJuIHRoaXMuaGM9bmQoRCgpLnRoZW4oZnVuY3Rpb24oKXtkZyhiKTtyZXR1cm4gWGgoZCl9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIFloKGQsYSxiLGMpfSkudGhlbihmdW5jdGlvbigpe3JldHVybihuZXcgQyhmdW5jdGlvbihhLGIpe2c9ZnVuY3Rpb24oKXt2YXIgYj1NKFwiY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWIuY2xvc2VcIixsKTthKCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGImJmIoKTtkLnViJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC51Yi5jbG9zZSYmKGQudWIuY2xvc2UoKSxkLnViPW51bGwpO3JldHVybiExfTtkLk1hKGcpO2s9ZnVuY3Rpb24oKXtmfHwoZj1tZShkLmNmKS50aGVuKGZ1bmN0aW9uKCl7YihuZXcgTyhcInJlZGlyZWN0LWNhbmNlbGxlZC1ieS11c2VyXCIpKX0pKX07bj1cbmZ1bmN0aW9uKCl7dmFyIGE9bC5kb2N1bWVudDsoYSYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhLnZpc2liaWxpdHlTdGF0ZT9cInZpc2libGVcIj09YS52aXNpYmlsaXR5U3RhdGU6MSkmJmsoKX07ZS5hZGRFdmVudExpc3RlbmVyKFwicmVzdW1lXCIsaywhMSk7SygpLnRvTG93ZXJDYXNlKCkubWF0Y2goL2FuZHJvaWQvKXx8ZS5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLG4sITEpfSkpLmMoZnVuY3Rpb24oYSl7cmV0dXJuIFpoKGQpLnRoZW4oZnVuY3Rpb24oKXt0aHJvdyBhO30pfSl9KSxmdW5jdGlvbigpe2smJmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc3VtZVwiLGssITEpO24mJmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixuLCExKTtmJiZmLmNhbmNlbCgpO2cmJmQuR2IoZyk7ZC5oYz1udWxsfSl9O1xudmFyIFloPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPVZoKCksZj1uZXcgUChiLGQsbnVsbCxlLG5ldyBPKFwibm8tYXV0aC1ldmVudFwiKSksZz1NKFwiQnVpbGRJbmZvLnBhY2thZ2VOYW1lXCIsbCk7aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBnKXRocm93IG5ldyBPKFwiaW52YWxpZC1jb3Jkb3ZhLWNvbmZpZ3VyYXRpb25cIik7dmFyIGs9TShcIkJ1aWxkSW5mby5kaXNwbGF5TmFtZVwiLGwpLG49e307aWYoSygpLnRvTG93ZXJDYXNlKCkubWF0Y2goL2lwaG9uZXxpcGFkfGlwb2QvKSluLmliaT1nO2Vsc2UgaWYoSygpLnRvTG93ZXJDYXNlKCkubWF0Y2goL2FuZHJvaWQvKSluLmFwbj1nO2Vsc2UgcmV0dXJuIEUobmV3IE8oXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpKTtrJiYobi5hcHBEaXNwbGF5TmFtZT1rKTtlPVdoKGUpO24uc2Vzc2lvbklkPWU7dmFyIHk9ZmgoYS52LGEuaixhLkIsYixjLG51bGwsZCxhLnphLG4pO3JldHVybiBhLkRhKCkudGhlbihmdW5jdGlvbigpe3ZhciBiPVxuYS5WZDtyZXR1cm4gYS5mZi5pLnNldChQaCxmLkQoKSxiKX0pLnRoZW4oZnVuY3Rpb24oKXt2YXIgYj1NKFwiY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWIuaXNBdmFpbGFibGVcIixsKTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgYil0aHJvdyBuZXcgTyhcImludmFsaWQtY29yZG92YS1jb25maWd1cmF0aW9uXCIpO3ZhciBjPW51bGw7YihmdW5jdGlvbihiKXtpZihiKXtjPU0oXCJjb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYi5vcGVuVXJsXCIsbCk7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGMpdGhyb3cgbmV3IE8oXCJpbnZhbGlkLWNvcmRvdmEtY29uZmlndXJhdGlvblwiKTtjKHkpfWVsc2V7Yz1NKFwiY29yZG92YS5JbkFwcEJyb3dzZXIub3BlblwiLGwpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjKXRocm93IG5ldyBPKFwiaW52YWxpZC1jb3Jkb3ZhLWNvbmZpZ3VyYXRpb25cIik7Yj1jO3ZhciBkO2Q9SygpO2Q9ISghZC5tYXRjaCgvKGlQYWR8aVBob25lfGlQb2QpLipPUyA3X1xcZC9pKSYmIWQubWF0Y2goLyhpUGFkfGlQaG9uZXxpUG9kKS4qT1MgOF9cXGQvaSkpO1xuYS51Yj1iKHksZD9cIl9ibGFua1wiOlwiX3N5c3RlbVwiLFwibG9jYXRpb249eWVzXCIpfX0pfSl9LCRoPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7YzxhLmlhLmxlbmd0aDtjKyspdHJ5e2EuaWFbY10oYil9Y2F0Y2goZCl7fX0sWGg9ZnVuY3Rpb24oYSl7YS5PY3x8KGEuT2M9YS5EYSgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEMoZnVuY3Rpb24oYil7dmFyIGM9ZnVuY3Rpb24oZCl7YihkKTthLkdiKGMpO3JldHVybiExfTthLk1hKGMpO2FpKGEpfSl9KSk7cmV0dXJuIGEuT2N9LFpoPWZ1bmN0aW9uKGEpe3ZhciBiPW51bGw7cmV0dXJuIFFoKGEud2QpLnRoZW4oZnVuY3Rpb24oYyl7Yj1jO2M9YS53ZDtyZXR1cm4gYy5pLnJlbW92ZShQaCxjLnUpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBifSl9LGFpPWZ1bmN0aW9uKGEpe3ZhciBiPU0oXCJ1bml2ZXJzYWxMaW5rcy5zdWJzY3JpYmVcIixsKTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgYil0aHJvdyBuZXcgTyhcImludmFsaWQtY29yZG92YS1jb25maWd1cmF0aW9uXCIpO1xudmFyIGM9bmV3IFAoXCJ1bmtub3duXCIsbnVsbCxudWxsLG51bGwsbmV3IE8oXCJuby1hdXRoLWV2ZW50XCIpKSxkPSExLGU9bWUoYS5OZSkudGhlbihmdW5jdGlvbigpe3JldHVybiBaaChhKS50aGVuKGZ1bmN0aW9uKCl7ZHx8JGgoYSxjKX0pfSksZj1mdW5jdGlvbihiKXtkPSEwO2UmJmUuY2FuY2VsKCk7WmgoYSkudGhlbihmdW5jdGlvbihkKXt2YXIgZT1jO2lmKGQmJmImJmIudXJsKXt2YXIgZT1udWxsLGY7Zj1iLnVybDt2YXIgZz1UZShmKSxrPVJlKGcsXCJsaW5rXCIpLG49UmUoVGUoayksXCJsaW5rXCIpLGc9UmUoZyxcImRlZXBfbGlua19pZFwiKTtmPVJlKFRlKGcpLFwibGlua1wiKXx8Z3x8bnx8a3x8ZjstMSE9Zi5pbmRleE9mKFwiL19fL2F1dGgvY2FsbGJhY2tcIikmJihlPVRlKGYpLGU9dmYoUmUoZSxcImVycm9yXCIpfHxudWxsKSxlPShlPVwib2JqZWN0XCI9PT10eXBlb2YgZT9MZihlKTpudWxsKT9uZXcgUChkLmdhLGQuRixudWxsLG51bGwsZSk6bmV3IFAoZC5nYSxkLkYsZixkLlZiKCkpKTtlPVxuZXx8Y30kaChhLGUpfSl9LGc9bC5oYW5kbGVPcGVuVVJMO2wuaGFuZGxlT3BlblVSTD1mdW5jdGlvbihhKXswPT1hLmluZGV4T2YoTShcIkJ1aWxkSW5mby5wYWNrYWdlTmFtZVwiLGwpK1wiOi8vXCIpJiZmKHt1cmw6YX0pO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnKXRyeXtnKGEpfWNhdGNoKG4pe2NvbnNvbGUuZXJyb3Iobil9fTtiKG51bGwsZil9O1RoLnByb3RvdHlwZS5NYT1mdW5jdGlvbihhKXt0aGlzLmlhLnB1c2goYSk7WGgodGhpcykuYyhmdW5jdGlvbigpe30pfTtUaC5wcm90b3R5cGUuR2I9ZnVuY3Rpb24oYSl7S2EodGhpcy5pYSxmdW5jdGlvbihiKXtyZXR1cm4gYj09YX0pfTt2YXIgYmk9ZnVuY3Rpb24oYSl7dGhpcy51PWE7dGhpcy5pPUxoKCl9LGNpPXtuYW1lOlwicGVuZGluZ1JlZGlyZWN0XCIsSTohMX0sZGk9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuaS5zZXQoY2ksXCJwZW5kaW5nXCIsYS51KX0sZWk9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuaS5yZW1vdmUoY2ksYS51KX0sZmk9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuaS5nZXQoY2ksYS51KS50aGVuKGZ1bmN0aW9uKGEpe3JldHVyblwicGVuZGluZ1wiPT1hfSl9O3ZhciBWPWZ1bmN0aW9uKGEsYixjKXt0aGlzLnY9YTt0aGlzLmo9Yjt0aGlzLkI9Yzt0aGlzLkpiPVtdO3RoaXMuV2E9ITE7dGhpcy5DYz1yKHRoaXMuTWMsdGhpcyk7dGhpcy5hYj1uZXcgZ2kodGhpcyk7dGhpcy5KZD1uZXcgaGkodGhpcyk7dGhpcy56Yj1uZXcgYmkodGhpcy5qK1wiOlwiK3RoaXMuQik7dGhpcy5sYj17fTt0aGlzLmxiLnVua25vd249dGhpcy5hYjt0aGlzLmxiLnNpZ25JblZpYVJlZGlyZWN0PXRoaXMuYWI7dGhpcy5sYi5saW5rVmlhUmVkaXJlY3Q9dGhpcy5hYjt0aGlzLmxiLnNpZ25JblZpYVBvcHVwPXRoaXMuSmQ7dGhpcy5sYi5saW5rVmlhUG9wdXA9dGhpcy5KZDt0aGlzLkc9aWkodGhpcy52LHRoaXMuaix0aGlzLkIpfSxpaT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZmlyZWJhc2UuU0RLX1ZFUlNJT058fG51bGw7cmV0dXJuIGxmKCk/bmV3IFRoKGEsYixjLGQpOm5ldyBiaChhLGIsYyxkKX07XG5WLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMuV2E9ITE7dGhpcy5HLkdiKHRoaXMuQ2MpO3RoaXMuRz1paSh0aGlzLnYsdGhpcy5qLHRoaXMuQil9O1YucHJvdG90eXBlLnZiPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczt0aGlzLldhfHwodGhpcy5XYT0hMCx0aGlzLkcuTWEodGhpcy5DYykpO3ZhciBiPXRoaXMuRztyZXR1cm4gdGhpcy5HLkRhKCkuYyhmdW5jdGlvbihjKXthLkc9PWImJmEucmVzZXQoKTt0aHJvdyBjO30pfTt2YXIgbGk9ZnVuY3Rpb24oYSl7YS5HLlNkKCkmJmEudmIoKS5jKGZ1bmN0aW9uKGIpe3ZhciBjPW5ldyBQKFwidW5rbm93blwiLG51bGwsbnVsbCxudWxsLG5ldyBPKFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiKSk7amkoYikmJmEuTWMoYyl9KTthLkcuemQoKXx8a2koYS5hYil9O1xuVi5wcm90b3R5cGUuc3Vic2NyaWJlPWZ1bmN0aW9uKGEpe0hhKHRoaXMuSmIsYSl8fHRoaXMuSmIucHVzaChhKTtpZighdGhpcy5XYSl7dmFyIGI9dGhpcztmaSh0aGlzLnpiKS50aGVuKGZ1bmN0aW9uKGEpe2E/ZWkoYi56YikudGhlbihmdW5jdGlvbigpe2IudmIoKS5jKGZ1bmN0aW9uKGEpe3ZhciBjPW5ldyBQKFwidW5rbm93blwiLG51bGwsbnVsbCxudWxsLG5ldyBPKFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiKSk7amkoYSkmJmIuTWMoYyl9KX0pOmxpKGIpfSkuYyhmdW5jdGlvbigpe2xpKGIpfSl9fTtWLnByb3RvdHlwZS51bnN1YnNjcmliZT1mdW5jdGlvbihhKXtLYSh0aGlzLkpiLGZ1bmN0aW9uKGIpe3JldHVybiBiPT1hfSl9O1xuVi5wcm90b3R5cGUuTWM9ZnVuY3Rpb24oYSl7aWYoIWEpdGhyb3cgbmV3IE8oXCJpbnZhbGlkLWF1dGgtZXZlbnRcIik7Zm9yKHZhciBiPSExLGM9MDtjPHRoaXMuSmIubGVuZ3RoO2MrKyl7dmFyIGQ9dGhpcy5KYltjXTtpZihkLm5kKGEuZ2EsYS5GKSl7KGI9dGhpcy5sYlthLmdhXSkmJmIuS2QoYSxkKTtiPSEwO2JyZWFrfX1raSh0aGlzLmFiKTtyZXR1cm4gYn07dmFyIG1pPW5ldyB6ZigyRTMsMUU0KSxuaT1uZXcgemYoMUU0LDNFNCk7Vi5wcm90b3R5cGUuZ2V0UmVkaXJlY3RSZXN1bHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hYi5nZXRSZWRpcmVjdFJlc3VsdCgpfTtWLnByb3RvdHlwZS5DYj1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPXRoaXM7cmV0dXJuIHRoaXMuRy5DYihhLGIsYyxmdW5jdGlvbigpe2YuV2F8fChmLldhPSEwLGYuRy5NYShmLkNjKSl9LGZ1bmN0aW9uKCl7Zi5yZXNldCgpfSxkLGUpfTtcbnZhciBqaT1mdW5jdGlvbihhKXtyZXR1cm4gYSYmXCJhdXRoL2NvcmRvdmEtbm90LXJlYWR5XCI9PWEuY29kZT8hMDohMX07Vi5wcm90b3R5cGUuRGI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMsZTtyZXR1cm4gZGkodGhpcy56YikudGhlbihmdW5jdGlvbigpe3JldHVybiBkLkcuRGIoYSxiLGMpLmMoZnVuY3Rpb24oYSl7aWYoamkoYSkpdGhyb3cgbmV3IE8oXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpO2U9YTtyZXR1cm4gZWkoZC56YikudGhlbihmdW5jdGlvbigpe3Rocm93IGU7fSl9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGQuRy5XZCgpP25ldyBDKGZ1bmN0aW9uKCl7fSk6ZWkoZC56YikudGhlbihmdW5jdGlvbigpe3JldHVybiBkLmdldFJlZGlyZWN0UmVzdWx0KCl9KS50aGVuKGZ1bmN0aW9uKCl7fSkuYyhmdW5jdGlvbigpe30pfSl9KX07XG5WLnByb3RvdHlwZS5IYj1mdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5HLkhiKGMsZnVuY3Rpb24oYyl7YS5JYShiLG51bGwsYyxkKX0sbWkuZ2V0KCkpfTt2YXIgb2k9e30scGk9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWIrXCI6XCIrYztvaVtkXXx8KG9pW2RdPW5ldyBWKGEsYixjKSk7cmV0dXJuIG9pW2RdfSxnaT1mdW5jdGlvbihhKXt0aGlzLmk9YTt0aGlzLmViPW51bGw7dGhpcy5GYj1bXTt0aGlzLkViPVtdO3RoaXMuYmI9bnVsbDt0aGlzLiRjPSExfTtnaS5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLmViPW51bGw7dGhpcy5iYiYmKHRoaXMuYmIuY2FuY2VsKCksdGhpcy5iYj1udWxsKX07XG5naS5wcm90b3R5cGUuS2Q9ZnVuY3Rpb24oYSxiKXtpZighYSlyZXR1cm4gRShuZXcgTyhcImludmFsaWQtYXV0aC1ldmVudFwiKSk7dGhpcy5yZXNldCgpO3RoaXMuJGM9ITA7dmFyIGM9YS5nYSxkPWEuRixlPWEuZ2V0RXJyb3IoKSYmXCJhdXRoL3dlYi1zdG9yYWdlLXVuc3VwcG9ydGVkXCI9PWEuZ2V0RXJyb3IoKS5jb2RlLGY9YS5nZXRFcnJvcigpJiZcImF1dGgvb3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiPT1hLmdldEVycm9yKCkuY29kZTtcInVua25vd25cIiE9Y3x8ZXx8Zj9hPWEuTz90aGlzLlljKGEsYik6Yi5yYihjLGQpP3RoaXMuWmMoYSxiKTpFKG5ldyBPKFwiaW52YWxpZC1hdXRoLWV2ZW50XCIpKToocWkodGhpcywhMSxudWxsLG51bGwpLGE9RCgpKTtyZXR1cm4gYX07dmFyIGtpPWZ1bmN0aW9uKGEpe2EuJGN8fChhLiRjPSEwLHFpKGEsITEsbnVsbCxudWxsKSl9O1xuZ2kucHJvdG90eXBlLlljPWZ1bmN0aW9uKGEpe3FpKHRoaXMsITAsbnVsbCxhLmdldEVycm9yKCkpO3JldHVybiBEKCl9O2dpLnByb3RvdHlwZS5aYz1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMsZD1hLmdhO2I9Yi5yYihkLGEuRik7dmFyIGU9YS5tYjthPWEuVmIoKTt2YXIgZj1cInNpZ25JblZpYVJlZGlyZWN0XCI9PWR8fFwibGlua1ZpYVJlZGlyZWN0XCI9PWQ7cmV0dXJuIGIoZSxhKS50aGVuKGZ1bmN0aW9uKGEpe3FpKGMsZixhLG51bGwpfSkuYyhmdW5jdGlvbihhKXtxaShjLGYsbnVsbCxhKX0pfTtcbnZhciByaT1mdW5jdGlvbihhLGIpe2EuZWI9ZnVuY3Rpb24oKXtyZXR1cm4gRShiKX07aWYoYS5FYi5sZW5ndGgpZm9yKHZhciBjPTA7YzxhLkViLmxlbmd0aDtjKyspYS5FYltjXShiKX0sc2k9ZnVuY3Rpb24oYSxiKXthLmViPWZ1bmN0aW9uKCl7cmV0dXJuIEQoYil9O2lmKGEuRmIubGVuZ3RoKWZvcih2YXIgYz0wO2M8YS5GYi5sZW5ndGg7YysrKWEuRmJbY10oYil9LHFpPWZ1bmN0aW9uKGEsYixjLGQpe2I/ZD9yaShhLGQpOnNpKGEsYyk6c2koYSx7dXNlcjpudWxsfSk7YS5GYj1bXTthLkViPVtdfTtnaS5wcm90b3R5cGUuZ2V0UmVkaXJlY3RSZXN1bHQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3JldHVybiBuZXcgQyhmdW5jdGlvbihiLGMpe2EuZWI/YS5lYigpLnRoZW4oYixjKTooYS5GYi5wdXNoKGIpLGEuRWIucHVzaChjKSx0aShhKSl9KX07XG52YXIgdGk9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IE8oXCJ0aW1lb3V0XCIpO2EuYmImJmEuYmIuY2FuY2VsKCk7YS5iYj1tZShuaS5nZXQoKSkudGhlbihmdW5jdGlvbigpe2EuZWJ8fHFpKGEsITAsbnVsbCxiKX0pfSxoaT1mdW5jdGlvbihhKXt0aGlzLmk9YX07aGkucHJvdG90eXBlLktkPWZ1bmN0aW9uKGEsYil7aWYoIWEpcmV0dXJuIEUobmV3IE8oXCJpbnZhbGlkLWF1dGgtZXZlbnRcIikpO3ZhciBjPWEuZ2EsZD1hLkY7cmV0dXJuIGEuTz90aGlzLlljKGEsYik6Yi5yYihjLGQpP3RoaXMuWmMoYSxiKTpFKG5ldyBPKFwiaW52YWxpZC1hdXRoLWV2ZW50XCIpKX07aGkucHJvdG90eXBlLlljPWZ1bmN0aW9uKGEsYil7Yi5JYShhLmdhLG51bGwsYS5nZXRFcnJvcigpLGEuRik7cmV0dXJuIEQoKX07XG5oaS5wcm90b3R5cGUuWmM9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLkYsZD1hLmdhLGU9Yi5yYihkLGMpLGY9YS5tYjthPWEuVmIoKTtyZXR1cm4gZShmLGEpLnRoZW4oZnVuY3Rpb24oYSl7Yi5JYShkLGEsbnVsbCxjKX0pLmMoZnVuY3Rpb24oYSl7Yi5JYShkLG51bGwsYSxjKX0pfTt2YXIgdWk9ZnVuY3Rpb24oYSl7dGhpcy5nPWE7dGhpcy54YT10aGlzLlg9bnVsbDt0aGlzLlNhPTB9O3VpLnByb3RvdHlwZS5EPWZ1bmN0aW9uKCl7cmV0dXJue2FwaUtleTp0aGlzLmcuaixyZWZyZXNoVG9rZW46dGhpcy5YLGFjY2Vzc1Rva2VuOnRoaXMueGEsZXhwaXJhdGlvblRpbWU6dGhpcy5TYX19O1xudmFyIHdpPWZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5pZFRva2VuLGQ9Yi5yZWZyZXNoVG9rZW47Yj12aShiLmV4cGlyZXNJbik7YS54YT1jO2EuU2E9YjthLlg9ZH0sdmk9ZnVuY3Rpb24oYSl7cmV0dXJuIGthKCkrMUUzKnBhcnNlSW50KGEsMTApfSx4aT1mdW5jdGlvbihhLGIpe3JldHVybiBwZyhhLmcsYikudGhlbihmdW5jdGlvbihiKXthLnhhPWIuYWNjZXNzX3Rva2VuO2EuU2E9dmkoYi5leHBpcmVzX2luKTthLlg9Yi5yZWZyZXNoX3Rva2VuO3JldHVybnthY2Nlc3NUb2tlbjphLnhhLGV4cGlyYXRpb25UaW1lOmEuU2EscmVmcmVzaFRva2VuOmEuWH19KS5jKGZ1bmN0aW9uKGIpe1wiYXV0aC91c2VyLXRva2VuLWV4cGlyZWRcIj09Yi5jb2RlJiYoYS5YPW51bGwpO3Rocm93IGI7fSl9LHlpPWZ1bmN0aW9uKGEpe3JldHVybiEoIWEueGF8fGEuWCl9O1xudWkucHJvdG90eXBlLmdldFRva2VuPWZ1bmN0aW9uKGEpe2E9ISFhO3JldHVybiB5aSh0aGlzKT9FKG5ldyBPKFwidXNlci10b2tlbi1leHBpcmVkXCIpKTphfHwhdGhpcy54YXx8a2EoKT50aGlzLlNhLTNFND90aGlzLlg/eGkodGhpcyx7Z3JhbnRfdHlwZTpcInJlZnJlc2hfdG9rZW5cIixyZWZyZXNoX3Rva2VuOnRoaXMuWH0pOkQobnVsbCk6RCh7YWNjZXNzVG9rZW46dGhpcy54YSxleHBpcmF0aW9uVGltZTp0aGlzLlNhLHJlZnJlc2hUb2tlbjp0aGlzLlh9KX07dmFyIHppPWZ1bmN0aW9uKGEsYixjLGQsZSl7Q2YodGhpcyx7dWlkOmEsZGlzcGxheU5hbWU6ZHx8bnVsbCxwaG90b1VSTDplfHxudWxsLGVtYWlsOmN8fG51bGwscHJvdmlkZXJJZDpifSl9LEFpPWZ1bmN0aW9uKGEsYil7SWIuY2FsbCh0aGlzLGEpO2Zvcih2YXIgYyBpbiBiKXRoaXNbY109YltjXX07dChBaSxJYik7XG52YXIgVz1mdW5jdGlvbihhLGIsYyl7dGhpcy5aPVtdO3RoaXMuaj1hLmFwaUtleTt0aGlzLkI9YS5hcHBOYW1lO3RoaXMudj1hLmF1dGhEb21haW58fG51bGw7YT1maXJlYmFzZS5TREtfVkVSU0lPTj9wZihmaXJlYmFzZS5TREtfVkVSU0lPTik6bnVsbDt0aGlzLmc9bmV3IFIodGhpcy5qLG51bGwsYSk7dGhpcy5lYT1uZXcgdWkodGhpcy5nKTtCaSh0aGlzLGIuaWRUb2tlbik7d2kodGhpcy5lYSxiKTtOKHRoaXMsXCJyZWZyZXNoVG9rZW5cIix0aGlzLmVhLlgpO0NpKHRoaXMsY3x8e30pO1FkLmNhbGwodGhpcyk7dGhpcy5pYz0hMTt0aGlzLnYmJnJmKCkmJih0aGlzLm09cGkodGhpcy52LHRoaXMuaix0aGlzLkIpKTt0aGlzLnFjPVtdO3RoaXMuQmM9RCgpfTt0KFcsUWQpO1xuVy5wcm90b3R5cGUudGE9ZnVuY3Rpb24oYSxiKXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSksZD10aGlzO3JldHVybiB0aGlzLkJjPXRoaXMuQmMudGhlbihmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGQsYyl9LGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoZCxjKX0pfTtcbnZhciBCaT1mdW5jdGlvbihhLGIpe2EuRGQ9YjtOKGEsXCJfbGF0XCIsYil9LERpPWZ1bmN0aW9uKGEsYil7S2EoYS5xYyxmdW5jdGlvbihhKXtyZXR1cm4gYT09Yn0pfSxFaT1mdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wO2M8YS5xYy5sZW5ndGg7YysrKWIucHVzaChhLnFjW2NdKGEpKTtyZXR1cm4ga2QoYikudGhlbihmdW5jdGlvbigpe3JldHVybiBhfSl9LEZpPWZ1bmN0aW9uKGEpe2EubSYmIWEuaWMmJihhLmljPSEwLGEubS5zdWJzY3JpYmUoYSkpfSxDaT1mdW5jdGlvbihhLGIpe0NmKGEse3VpZDpiLnVpZCxkaXNwbGF5TmFtZTpiLmRpc3BsYXlOYW1lfHxudWxsLHBob3RvVVJMOmIucGhvdG9VUkx8fG51bGwsZW1haWw6Yi5lbWFpbHx8bnVsbCxlbWFpbFZlcmlmaWVkOmIuZW1haWxWZXJpZmllZHx8ITEsaXNBbm9ueW1vdXM6Yi5pc0Fub255bW91c3x8ITEscHJvdmlkZXJEYXRhOltdfSl9O04oVy5wcm90b3R5cGUsXCJwcm92aWRlcklkXCIsXCJmaXJlYmFzZVwiKTtcbnZhciBHaT1mdW5jdGlvbigpe30sSGk9ZnVuY3Rpb24oYSl7cmV0dXJuIEQoKS50aGVuKGZ1bmN0aW9uKCl7aWYoYS5yZSl0aHJvdyBuZXcgTyhcImFwcC1kZWxldGVkXCIpO30pfSxJaT1mdW5jdGlvbihhKXtyZXR1cm4gRGEoYS5wcm92aWRlckRhdGEsZnVuY3Rpb24oYSl7cmV0dXJuIGEucHJvdmlkZXJJZH0pfSxLaT1mdW5jdGlvbihhLGIpe2ImJihKaShhLGIucHJvdmlkZXJJZCksYS5wcm92aWRlckRhdGEucHVzaChiKSl9LEppPWZ1bmN0aW9uKGEsYil7S2EoYS5wcm92aWRlckRhdGEsZnVuY3Rpb24oYSl7cmV0dXJuIGEucHJvdmlkZXJJZD09Yn0pfSxMaT1mdW5jdGlvbihhLGIsYyl7KFwidWlkXCIhPWJ8fGMpJiZhLmhhc093blByb3BlcnR5KGIpJiZOKGEsYixjKX07XG5XLnByb3RvdHlwZS5jb3B5PWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7YiE9YSYmKENmKHRoaXMse3VpZDphLnVpZCxkaXNwbGF5TmFtZTphLmRpc3BsYXlOYW1lLHBob3RvVVJMOmEucGhvdG9VUkwsZW1haWw6YS5lbWFpbCxlbWFpbFZlcmlmaWVkOmEuZW1haWxWZXJpZmllZCxpc0Fub255bW91czphLmlzQW5vbnltb3VzLHByb3ZpZGVyRGF0YTpbXX0pLHgoYS5wcm92aWRlckRhdGEsZnVuY3Rpb24oYSl7S2koYixhKX0pLHRoaXMuZWE9YS5lYSxOKHRoaXMsXCJyZWZyZXNoVG9rZW5cIix0aGlzLmVhLlgpKX07Vy5wcm90b3R5cGUucmVsb2FkPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm4gSGkodGhpcykudGhlbihmdW5jdGlvbigpe3JldHVybiBNaShhKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIEVpKGEpfSkudGhlbihHaSl9KX07XG52YXIgTWk9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0VG9rZW4oKS50aGVuKGZ1bmN0aW9uKGIpe3ZhciBjPWEuaXNBbm9ueW1vdXM7cmV0dXJuIE5pKGEsYikudGhlbihmdW5jdGlvbigpe2N8fExpKGEsXCJpc0Fub255bW91c1wiLCExKTtyZXR1cm4gYn0pLmMoZnVuY3Rpb24oYil7XCJhdXRoL3VzZXItdG9rZW4tZXhwaXJlZFwiPT1iLmNvZGUmJihhLmRpc3BhdGNoRXZlbnQobmV3IEFpKFwidXNlckRlbGV0ZWRcIikpLE9pKGEpKTt0aHJvdyBiO30pfSl9O1xuVy5wcm90b3R5cGUuZ2V0VG9rZW49ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPXlpKHRoaXMuZWEpO3JldHVybiBIaSh0aGlzKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGIuZWEuZ2V0VG9rZW4oYSl9KS50aGVuKGZ1bmN0aW9uKGEpe2lmKCFhKXRocm93IG5ldyBPKFwiaW50ZXJuYWwtZXJyb3JcIik7YS5hY2Nlc3NUb2tlbiE9Yi5EZCYmKEJpKGIsYS5hY2Nlc3NUb2tlbiksYi5FYSgpKTtMaShiLFwicmVmcmVzaFRva2VuXCIsYS5yZWZyZXNoVG9rZW4pO3JldHVybiBhLmFjY2Vzc1Rva2VufSkuYyhmdW5jdGlvbihhKXtpZihcImF1dGgvdXNlci10b2tlbi1leHBpcmVkXCI9PWEuY29kZSYmIWMpcmV0dXJuIEVpKGIpLnRoZW4oZnVuY3Rpb24oKXtMaShiLFwicmVmcmVzaFRva2VuXCIsbnVsbCk7dGhyb3cgYTt9KTt0aHJvdyBhO30pfTtcbnZhciBQaT1mdW5jdGlvbihhLGIpe2IuaWRUb2tlbiYmYS5EZCE9Yi5pZFRva2VuJiYod2koYS5lYSxiKSxhLkVhKCksQmkoYSxiLmlkVG9rZW4pLExpKGEsXCJyZWZyZXNoVG9rZW5cIixhLmVhLlgpKX07Vy5wcm90b3R5cGUuRWE9ZnVuY3Rpb24oKXt0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEFpKFwidG9rZW5DaGFuZ2VkXCIpKX07dmFyIE5pPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFEoYS5nLFBnLHtpZFRva2VuOmJ9KS50aGVuKHIoYS5hZixhKSl9O1xuVy5wcm90b3R5cGUuYWY9ZnVuY3Rpb24oYSl7YT1hLnVzZXJzO2lmKCFhfHwhYS5sZW5ndGgpdGhyb3cgbmV3IE8oXCJpbnRlcm5hbC1lcnJvclwiKTthPWFbMF07Q2kodGhpcyx7dWlkOmEubG9jYWxJZCxkaXNwbGF5TmFtZTphLmRpc3BsYXlOYW1lLHBob3RvVVJMOmEucGhvdG9VcmwsZW1haWw6YS5lbWFpbCxlbWFpbFZlcmlmaWVkOiEhYS5lbWFpbFZlcmlmaWVkfSk7Zm9yKHZhciBiPVFpKGEpLGM9MDtjPGIubGVuZ3RoO2MrKylLaSh0aGlzLGJbY10pO0xpKHRoaXMsXCJpc0Fub255bW91c1wiLCEodGhpcy5lbWFpbCYmYS5wYXNzd29yZEhhc2gpJiYhKHRoaXMucHJvdmlkZXJEYXRhJiZ0aGlzLnByb3ZpZGVyRGF0YS5sZW5ndGgpKX07XG52YXIgUWk9ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5wcm92aWRlclVzZXJJbmZvKSYmYS5sZW5ndGg/RGEoYSxmdW5jdGlvbihhKXtyZXR1cm4gbmV3IHppKGEucmF3SWQsYS5wcm92aWRlcklkLGEuZW1haWwsYS5kaXNwbGF5TmFtZSxhLnBob3RvVXJsKX0pOltdfTtXLnByb3RvdHlwZS5yZWF1dGhlbnRpY2F0ZT1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiB0aGlzLmYoYS5VYih0aGlzLmcpLnRoZW4oZnVuY3Rpb24oYSl7dmFyIGM7YTp7dmFyIGU9YS5pZFRva2VuLnNwbGl0KFwiLlwiKTtpZigzPT1lLmxlbmd0aCl7Zm9yKHZhciBlPWVbMV0sZj0oNC1lLmxlbmd0aCU0KSU0LGc9MDtnPGY7ZysrKWUrPVwiLlwiO3RyeXt2YXIgaz10YyhzYihlKSk7aWYoay5zdWImJmsuaXNzJiZrLmF1ZCYmay5leHApe2M9bmV3IE9mKGspO2JyZWFrIGF9fWNhdGNoKG4pe319Yz1udWxsfWlmKCFjfHxiLnVpZCE9Yy5UZSl0aHJvdyBuZXcgTyhcInVzZXItbWlzbWF0Y2hcIik7UGkoYixhKTtyZXR1cm4gYi5yZWxvYWQoKX0pKX07XG52YXIgUmk9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gTWkoYSkudGhlbihmdW5jdGlvbigpe2lmKEhhKElpKGEpLGIpKXJldHVybiBFaShhKS50aGVuKGZ1bmN0aW9uKCl7dGhyb3cgbmV3IE8oXCJwcm92aWRlci1hbHJlYWR5LWxpbmtlZFwiKTt9KX0pfTtoPVcucHJvdG90eXBlO2guUmU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gdGhpcy5mKFJpKHRoaXMsYS5wcm92aWRlcikudGhlbihmdW5jdGlvbigpe3JldHVybiBiLmdldFRva2VuKCl9KS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiBhLkZkKGIuZyxjKX0pLnRoZW4ocih0aGlzLnVkLHRoaXMpKSl9O2gubGluaz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy50YSh0aGlzLlJlLGEpfTtoLnVkPWZ1bmN0aW9uKGEpe1BpKHRoaXMsYSk7dmFyIGI9dGhpcztyZXR1cm4gdGhpcy5yZWxvYWQoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGJ9KX07XG5oLnRmPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIHRoaXMuZih0aGlzLmdldFRva2VuKCkudGhlbihmdW5jdGlvbihjKXtyZXR1cm4gYi5nLnVwZGF0ZUVtYWlsKGMsYSl9KS50aGVuKGZ1bmN0aW9uKGEpe1BpKGIsYSk7cmV0dXJuIGIucmVsb2FkKCl9KSl9O2gudXBkYXRlRW1haWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudGEodGhpcy50ZixhKX07aC51Zj1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiB0aGlzLmYodGhpcy5nZXRUb2tlbigpLnRoZW4oZnVuY3Rpb24oYyl7cmV0dXJuIGIuZy51cGRhdGVQYXNzd29yZChjLGEpfSkudGhlbihmdW5jdGlvbihhKXtQaShiLGEpO3JldHVybiBiLnJlbG9hZCgpfSkpfTtoLnVwZGF0ZVBhc3N3b3JkPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnRhKHRoaXMudWYsYSl9O1xuaC52Zj1mdW5jdGlvbihhKXtpZih2b2lkIDA9PT1hLmRpc3BsYXlOYW1lJiZ2b2lkIDA9PT1hLnBob3RvVVJMKXJldHVybiBIaSh0aGlzKTt2YXIgYj10aGlzO3JldHVybiB0aGlzLmYodGhpcy5nZXRUb2tlbigpLnRoZW4oZnVuY3Rpb24oYyl7cmV0dXJuIGIuZy51cGRhdGVQcm9maWxlKGMse2Rpc3BsYXlOYW1lOmEuZGlzcGxheU5hbWUscGhvdG9Vcmw6YS5waG90b1VSTH0pfSkudGhlbihmdW5jdGlvbihhKXtQaShiLGEpO0xpKGIsXCJkaXNwbGF5TmFtZVwiLGEuZGlzcGxheU5hbWV8fG51bGwpO0xpKGIsXCJwaG90b1VSTFwiLGEucGhvdG9Vcmx8fG51bGwpO3JldHVybiBFaShiKX0pLnRoZW4oR2kpKX07aC51cGRhdGVQcm9maWxlPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnRhKHRoaXMudmYsYSl9O1xuaC5zZj1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiB0aGlzLmYoTWkodGhpcykudGhlbihmdW5jdGlvbihjKXtyZXR1cm4gSGEoSWkoYiksYSk/RWcoYi5nLGMsW2FdKS50aGVuKGZ1bmN0aW9uKGEpe3ZhciBjPXt9O3goYS5wcm92aWRlclVzZXJJbmZvfHxbXSxmdW5jdGlvbihhKXtjW2EucHJvdmlkZXJJZF09ITB9KTt4KElpKGIpLGZ1bmN0aW9uKGEpe2NbYV18fEppKGIsYSl9KTtyZXR1cm4gRWkoYil9KTpFaShiKS50aGVuKGZ1bmN0aW9uKCl7dGhyb3cgbmV3IE8oXCJuby1zdWNoLXByb3ZpZGVyXCIpO30pfSkpfTtoLnVubGluaz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy50YSh0aGlzLnNmLGEpfTtoLnFlPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm4gdGhpcy5mKHRoaXMuZ2V0VG9rZW4oKS50aGVuKGZ1bmN0aW9uKGIpe3JldHVybiBRKGEuZyxPZyx7aWRUb2tlbjpifSl9KS50aGVuKGZ1bmN0aW9uKCl7YS5kaXNwYXRjaEV2ZW50KG5ldyBBaShcInVzZXJEZWxldGVkXCIpKX0pKS50aGVuKGZ1bmN0aW9uKCl7T2koYSl9KX07XG5oW1wiZGVsZXRlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGEodGhpcy5xZSl9O2gubmQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm5cImxpbmtWaWFQb3B1cFwiPT1hJiYodGhpcy5sYXx8bnVsbCk9PWImJnRoaXMuY2F8fFwibGlua1ZpYVJlZGlyZWN0XCI9PWEmJih0aGlzLm1jfHxudWxsKT09Yj8hMDohMX07aC5JYT1mdW5jdGlvbihhLGIsYyxkKXtcImxpbmtWaWFQb3B1cFwiPT1hJiZkPT0odGhpcy5sYXx8bnVsbCkmJihjJiZ0aGlzLkdhP3RoaXMuR2EoYyk6YiYmIWMmJnRoaXMuY2EmJnRoaXMuY2EoYiksdGhpcy5KJiYodGhpcy5KLmNhbmNlbCgpLHRoaXMuSj1udWxsKSxkZWxldGUgdGhpcy5jYSxkZWxldGUgdGhpcy5HYSl9O2gucmI9ZnVuY3Rpb24oYSxiKXtyZXR1cm5cImxpbmtWaWFQb3B1cFwiPT1hJiZiPT0odGhpcy5sYXx8bnVsbCl8fFwibGlua1ZpYVJlZGlyZWN0XCI9PWEmJih0aGlzLm1jfHxudWxsKT09Yj9yKHRoaXMudWUsdGhpcyk6bnVsbH07XG5oLlRiPWZ1bmN0aW9uKCl7cmV0dXJuIHFmKHRoaXMudWlkK1wiOjo6XCIpfTtcbnZhciBUaT1mdW5jdGlvbihhLGIpe2lmKCFyZigpKXJldHVybiBFKG5ldyBPKFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiKSk7dmFyIGM9SWYoYi5wcm92aWRlcklkKSxkPWEuVGIoKSxlPW51bGw7IXNmKCkmJmEudiYmYi5pc09BdXRoUHJvdmlkZXImJihlPWZoKGEudixhLmosYS5CLFwibGlua1ZpYVBvcHVwXCIsYixudWxsLGQsZmlyZWJhc2UuU0RLX1ZFUlNJT058fG51bGwpKTt2YXIgZj1nZihlLGMmJmMuQmIsYyYmYy5BYiksYz1SaShhLGIucHJvdmlkZXJJZCkudGhlbihmdW5jdGlvbigpe3JldHVybiBFaShhKX0pLnRoZW4oZnVuY3Rpb24oKXtTaShhKTtyZXR1cm4gYS5nZXRUb2tlbigpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBhLm0uQ2IoZixcImxpbmtWaWFQb3B1cFwiLGIsZCwhIWUpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBuZXcgQyhmdW5jdGlvbihiLGMpe2EuSWEoXCJsaW5rVmlhUG9wdXBcIixudWxsLG5ldyBPKFwiY2FuY2VsbGVkLXBvcHVwLXJlcXVlc3RcIiksXG5hLmxhfHxudWxsKTthLmNhPWI7YS5HYT1jO2EubGE9ZDthLko9YS5tLkhiKGEsXCJsaW5rVmlhUG9wdXBcIixmLGQpfSl9KS50aGVuKGZ1bmN0aW9uKGEpe2YmJmZmKGYpO3JldHVybiBhfSkuYyhmdW5jdGlvbihhKXtmJiZmZihmKTt0aHJvdyBhO30pO3JldHVybiBhLmYoYyl9O1cucHJvdG90eXBlLmxpbmtXaXRoUG9wdXA9ZnVuY3Rpb24oYSl7dmFyIGI9VGkodGhpcyxhKTtyZXR1cm4gdGhpcy50YShmdW5jdGlvbigpe3JldHVybiBifSl9O1xuVy5wcm90b3R5cGUuU2U9ZnVuY3Rpb24oYSl7aWYoIXJmKCkpcmV0dXJuIEUobmV3IE8oXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpKTt2YXIgYj10aGlzLGM9bnVsbCxkPXRoaXMuVGIoKSxlPVJpKHRoaXMsYS5wcm92aWRlcklkKS50aGVuKGZ1bmN0aW9uKCl7U2koYik7cmV0dXJuIGIuZ2V0VG9rZW4oKX0pLnRoZW4oZnVuY3Rpb24oKXtiLm1jPWQ7cmV0dXJuIEVpKGIpfSkudGhlbihmdW5jdGlvbihhKXtiLkhhJiYoYT1iLkhhLGE9YS5pLnNldChVaSxiLkQoKSxhLnUpKTtyZXR1cm4gYX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYi5tLkRiKFwibGlua1ZpYVJlZGlyZWN0XCIsYSxkKX0pLmMoZnVuY3Rpb24oYSl7Yz1hO2lmKGIuSGEpcmV0dXJuIFZpKGIuSGEpO3Rocm93IGM7fSkudGhlbihmdW5jdGlvbigpe2lmKGMpdGhyb3cgYzt9KTtyZXR1cm4gdGhpcy5mKGUpfTtcblcucHJvdG90eXBlLmxpbmtXaXRoUmVkaXJlY3Q9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudGEodGhpcy5TZSxhKX07dmFyIFNpPWZ1bmN0aW9uKGEpe2lmKCFhLm18fCFhLmljKXtpZihhLm0mJiFhLmljKXRocm93IG5ldyBPKFwiaW50ZXJuYWwtZXJyb3JcIik7dGhyb3cgbmV3IE8oXCJhdXRoLWRvbWFpbi1jb25maWctcmVxdWlyZWRcIik7fX07Vy5wcm90b3R5cGUudWU9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3RoaXMuSiYmKHRoaXMuSi5jYW5jZWwoKSx0aGlzLko9bnVsbCk7dmFyIGQ9bnVsbCxlPXRoaXMuZ2V0VG9rZW4oKS50aGVuKGZ1bmN0aW9uKGQpe3JldHVybiBTZihjLmcse3JlcXVlc3RVcmk6YSxzZXNzaW9uSWQ6YixpZFRva2VuOmR9KX0pLnRoZW4oZnVuY3Rpb24oYSl7ZD1jZyhhKTtyZXR1cm4gYy51ZChhKX0pLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJue3VzZXI6YSxjcmVkZW50aWFsOmR9fSk7cmV0dXJuIHRoaXMuZihlKX07XG5XLnByb3RvdHlwZS5zZW5kRW1haWxWZXJpZmljYXRpb249ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3JldHVybiB0aGlzLmYodGhpcy5nZXRUb2tlbigpLnRoZW4oZnVuY3Rpb24oYil7cmV0dXJuIGEuZy5zZW5kRW1haWxWZXJpZmljYXRpb24oYil9KS50aGVuKGZ1bmN0aW9uKGIpe2lmKGEuZW1haWwhPWIpcmV0dXJuIGEucmVsb2FkKCl9KS50aGVuKGZ1bmN0aW9uKCl7fSkpfTt2YXIgT2k9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTA7YjxhLloubGVuZ3RoO2IrKylhLlpbYl0uY2FuY2VsKFwiYXBwLWRlbGV0ZWRcIik7YS5aPVtdO2EucmU9ITA7TihhLFwicmVmcmVzaFRva2VuXCIsbnVsbCk7YS5tJiZhLm0udW5zdWJzY3JpYmUoYSl9O1cucHJvdG90eXBlLmY9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczt0aGlzLloucHVzaChhKTtuZChhLGZ1bmN0aW9uKCl7SmEoYi5aLGEpfSk7cmV0dXJuIGF9O1cucHJvdG90eXBlLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLkQoKX07XG5XLnByb3RvdHlwZS5EPWZ1bmN0aW9uKCl7dmFyIGE9e3VpZDp0aGlzLnVpZCxkaXNwbGF5TmFtZTp0aGlzLmRpc3BsYXlOYW1lLHBob3RvVVJMOnRoaXMucGhvdG9VUkwsZW1haWw6dGhpcy5lbWFpbCxlbWFpbFZlcmlmaWVkOnRoaXMuZW1haWxWZXJpZmllZCxpc0Fub255bW91czp0aGlzLmlzQW5vbnltb3VzLHByb3ZpZGVyRGF0YTpbXSxhcGlLZXk6dGhpcy5qLGFwcE5hbWU6dGhpcy5CLGF1dGhEb21haW46dGhpcy52LHN0c1Rva2VuTWFuYWdlcjp0aGlzLmVhLkQoKSxyZWRpcmVjdEV2ZW50SWQ6dGhpcy5tY3x8bnVsbH07eCh0aGlzLnByb3ZpZGVyRGF0YSxmdW5jdGlvbihiKXthLnByb3ZpZGVyRGF0YS5wdXNoKERmKGIpKX0pO3JldHVybiBhfTtcbnZhciBXaT1mdW5jdGlvbihhKXtpZighYS5hcGlLZXkpcmV0dXJuIG51bGw7dmFyIGI9e2FwaUtleTphLmFwaUtleSxhdXRoRG9tYWluOmEuYXV0aERvbWFpbixhcHBOYW1lOmEuYXBwTmFtZX0sYz17fTtpZihhLnN0c1Rva2VuTWFuYWdlciYmYS5zdHNUb2tlbk1hbmFnZXIuYWNjZXNzVG9rZW4mJmEuc3RzVG9rZW5NYW5hZ2VyLmV4cGlyYXRpb25UaW1lKWMuaWRUb2tlbj1hLnN0c1Rva2VuTWFuYWdlci5hY2Nlc3NUb2tlbixjLnJlZnJlc2hUb2tlbj1hLnN0c1Rva2VuTWFuYWdlci5yZWZyZXNoVG9rZW58fG51bGwsYy5leHBpcmVzSW49KGEuc3RzVG9rZW5NYW5hZ2VyLmV4cGlyYXRpb25UaW1lLWthKCkpLzFFMztlbHNlIHJldHVybiBudWxsO3ZhciBkPW5ldyBXKGIsYyxhKTthLnByb3ZpZGVyRGF0YSYmeChhLnByb3ZpZGVyRGF0YSxmdW5jdGlvbihhKXtpZihhKXt2YXIgYj17fTtDZihiLGEpO0tpKGQsYil9fSk7YS5yZWRpcmVjdEV2ZW50SWQmJihkLm1jPWEucmVkaXJlY3RFdmVudElkKTtcbnJldHVybiBkfSxYaT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9bmV3IFcoYSxiKTtjJiYoZC5IYT1jKTtyZXR1cm4gZC5yZWxvYWQoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGR9KX07dmFyIFlpPWZ1bmN0aW9uKGEpe3RoaXMudT1hO3RoaXMuaT1MaCgpfSxVaT17bmFtZTpcInJlZGlyZWN0VXNlclwiLEk6ITF9LFZpPWZ1bmN0aW9uKGEpe3JldHVybiBhLmkucmVtb3ZlKFVpLGEudSl9LFppPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuaS5nZXQoVWksYS51KS50aGVuKGZ1bmN0aW9uKGEpe2EmJmImJihhLmF1dGhEb21haW49Yik7cmV0dXJuIFdpKGF8fHt9KX0pfTt2YXIgJGk9ZnVuY3Rpb24oYSl7dGhpcy51PWE7dGhpcy5pPUxoKCl9LGFqPXtuYW1lOlwiYXV0aFVzZXJcIixJOiEwfSxiaj1mdW5jdGlvbihhLGIpe3JldHVybiBhLmkuc2V0KGFqLGIuRCgpLGEudSl9LGNqPWZ1bmN0aW9uKGEpe3JldHVybiBhLmkucmVtb3ZlKGFqLGEudSl9LGRqPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuaS5nZXQoYWosYS51KS50aGVuKGZ1bmN0aW9uKGEpe2EmJmImJihhLmF1dGhEb21haW49Yik7cmV0dXJuIFdpKGF8fHt9KX0pfTt2YXIgWT1mdW5jdGlvbihhKXt0aGlzLlFhPSExO04odGhpcyxcImFwcFwiLGEpO2lmKFgodGhpcykub3B0aW9ucyYmWCh0aGlzKS5vcHRpb25zLmFwaUtleSlhPWZpcmViYXNlLlNES19WRVJTSU9OP3BmKGZpcmViYXNlLlNES19WRVJTSU9OKTpudWxsLHRoaXMuZz1uZXcgUihYKHRoaXMpLm9wdGlvbnMmJlgodGhpcykub3B0aW9ucy5hcGlLZXksbnVsbCxhKTtlbHNlIHRocm93IG5ldyBPKFwiaW52YWxpZC1hcGkta2V5XCIpO3RoaXMuWj1bXTt0aGlzLk9hPVtdO3RoaXMuWmU9ZmlyZWJhc2UuSU5URVJOQUwuY3JlYXRlU3Vic2NyaWJlKHIodGhpcy5MZSx0aGlzKSk7ZWoodGhpcyxudWxsKTt0aGlzLm9hPW5ldyAkaShYKHRoaXMpLm9wdGlvbnMuYXBpS2V5K1wiOlwiK1godGhpcykubmFtZSk7dGhpcy5jYj1uZXcgWWkoWCh0aGlzKS5vcHRpb25zLmFwaUtleStcIjpcIitYKHRoaXMpLm5hbWUpO3RoaXMuT2I9dGhpcy5mKGZqKHRoaXMpKTt0aGlzLnVhPXRoaXMuZihnaih0aGlzKSk7dGhpcy5SYz1cbiExO3RoaXMuTGM9cih0aGlzLm1mLHRoaXMpO3RoaXMuWWQ9cih0aGlzLlVhLHRoaXMpO3RoaXMuWmQ9cih0aGlzLkhlLHRoaXMpO3RoaXMuWGQ9cih0aGlzLkdlLHRoaXMpO2hqKHRoaXMpO3RoaXMuSU5URVJOQUw9e307dGhpcy5JTlRFUk5BTFtcImRlbGV0ZVwiXT1yKHRoaXNbXCJkZWxldGVcIl0sdGhpcyl9O1kucHJvdG90eXBlLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybnthcGlLZXk6WCh0aGlzKS5vcHRpb25zLmFwaUtleSxhdXRoRG9tYWluOlgodGhpcykub3B0aW9ucy5hdXRoRG9tYWluLGFwcE5hbWU6WCh0aGlzKS5uYW1lLGN1cnJlbnRVc2VyOloodGhpcykmJloodGhpcykuRCgpfX07XG52YXIgaWo9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc2V8fEUobmV3IE8oXCJhdXRoLWRvbWFpbi1jb25maWctcmVxdWlyZWRcIikpfSxoaj1mdW5jdGlvbihhKXt2YXIgYj1YKGEpLm9wdGlvbnMuYXV0aERvbWFpbixjPVgoYSkub3B0aW9ucy5hcGlLZXk7YiYmcmYoKSYmKGEuc2U9YS5PYi50aGVuKGZ1bmN0aW9uKCl7aWYoIWEuUWEpcmV0dXJuIGEubT1waShiLGMsWChhKS5uYW1lKSxhLm0uc3Vic2NyaWJlKGEpLFooYSkmJkZpKFooYSkpLGEuYmQmJihGaShhLmJkKSxhLmJkPW51bGwpLGEubX0pKX07aD1ZLnByb3RvdHlwZTtoLm5kPWZ1bmN0aW9uKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJ1bmtub3duXCI6Y2FzZSBcInNpZ25JblZpYVJlZGlyZWN0XCI6cmV0dXJuITA7Y2FzZSBcInNpZ25JblZpYVBvcHVwXCI6cmV0dXJuIHRoaXMubGE9PWImJiEhdGhpcy5jYTtkZWZhdWx0OnJldHVybiExfX07XG5oLklhPWZ1bmN0aW9uKGEsYixjLGQpe1wic2lnbkluVmlhUG9wdXBcIj09YSYmdGhpcy5sYT09ZCYmKGMmJnRoaXMuR2E/dGhpcy5HYShjKTpiJiYhYyYmdGhpcy5jYSYmdGhpcy5jYShiKSx0aGlzLkomJih0aGlzLkouY2FuY2VsKCksdGhpcy5KPW51bGwpLGRlbGV0ZSB0aGlzLmNhLGRlbGV0ZSB0aGlzLkdhKX07aC5yYj1mdW5jdGlvbihhLGIpe3JldHVyblwic2lnbkluVmlhUmVkaXJlY3RcIj09YXx8XCJzaWduSW5WaWFQb3B1cFwiPT1hJiZ0aGlzLmxhPT1iJiZ0aGlzLmNhP3IodGhpcy52ZSx0aGlzKTpudWxsfTtcbmgudmU9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO2E9e3JlcXVlc3RVcmk6YSxzZXNzaW9uSWQ6Yn07dGhpcy5KJiYodGhpcy5KLmNhbmNlbCgpLHRoaXMuSj1udWxsKTt2YXIgZD1udWxsLGU9UWYoYy5nLGEpLnRoZW4oZnVuY3Rpb24oYSl7ZD1jZyhhKTtyZXR1cm4gYX0pO2E9Yy5PYi50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGV9KS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBqaihjLGEpfSkudGhlbihmdW5jdGlvbigpe3JldHVybnt1c2VyOlooYyksY3JlZGVudGlhbDpkfX0pO3JldHVybiB0aGlzLmYoYSl9O2guVGI9ZnVuY3Rpb24oKXtyZXR1cm4gcWYoKX07XG5oLnNpZ25JbldpdGhQb3B1cD1mdW5jdGlvbihhKXtpZighcmYoKSlyZXR1cm4gRShuZXcgTyhcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIikpO3ZhciBiPXRoaXMsYz1JZihhLnByb3ZpZGVySWQpLGQ9dGhpcy5UYigpLGU9bnVsbDshc2YoKSYmWCh0aGlzKS5vcHRpb25zLmF1dGhEb21haW4mJmEuaXNPQXV0aFByb3ZpZGVyJiYoZT1maChYKHRoaXMpLm9wdGlvbnMuYXV0aERvbWFpbixYKHRoaXMpLm9wdGlvbnMuYXBpS2V5LFgodGhpcykubmFtZSxcInNpZ25JblZpYVBvcHVwXCIsYSxudWxsLGQsZmlyZWJhc2UuU0RLX1ZFUlNJT058fG51bGwpKTt2YXIgZj1nZihlLGMmJmMuQmIsYyYmYy5BYiksYz1paih0aGlzKS50aGVuKGZ1bmN0aW9uKGIpe3JldHVybiBiLkNiKGYsXCJzaWduSW5WaWFQb3B1cFwiLGEsZCwhIWUpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBuZXcgQyhmdW5jdGlvbihhLGMpe2IuSWEoXCJzaWduSW5WaWFQb3B1cFwiLG51bGwsbmV3IE8oXCJjYW5jZWxsZWQtcG9wdXAtcmVxdWVzdFwiKSxcbmIubGEpO2IuY2E9YTtiLkdhPWM7Yi5sYT1kO2IuSj1iLm0uSGIoYixcInNpZ25JblZpYVBvcHVwXCIsZixkKX0pfSkudGhlbihmdW5jdGlvbihhKXtmJiZmZihmKTtyZXR1cm4gYX0pLmMoZnVuY3Rpb24oYSl7ZiYmZmYoZik7dGhyb3cgYTt9KTtyZXR1cm4gdGhpcy5mKGMpfTtoLnNpZ25JbldpdGhSZWRpcmVjdD1mdW5jdGlvbihhKXtpZighcmYoKSlyZXR1cm4gRShuZXcgTyhcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIikpO3ZhciBiPXRoaXMsYz1paih0aGlzKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGIubS5EYihcInNpZ25JblZpYVJlZGlyZWN0XCIsYSl9KTtyZXR1cm4gdGhpcy5mKGMpfTtcbmguZ2V0UmVkaXJlY3RSZXN1bHQ9ZnVuY3Rpb24oKXtpZighcmYoKSlyZXR1cm4gRShuZXcgTyhcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIikpO3ZhciBhPXRoaXMsYj1paih0aGlzKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGEubS5nZXRSZWRpcmVjdFJlc3VsdCgpfSk7cmV0dXJuIHRoaXMuZihiKX07XG52YXIgamo9ZnVuY3Rpb24oYSxiKXt2YXIgYz17fTtjLmFwaUtleT1YKGEpLm9wdGlvbnMuYXBpS2V5O2MuYXV0aERvbWFpbj1YKGEpLm9wdGlvbnMuYXV0aERvbWFpbjtjLmFwcE5hbWU9WChhKS5uYW1lO3JldHVybiBhLk9iLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gWGkoYyxiLGEuY2IpfSkudGhlbihmdW5jdGlvbihiKXtpZihaKGEpJiZiLnVpZD09WihhKS51aWQpcmV0dXJuIFooYSkuY29weShiKSxhLlVhKGIpO2VqKGEsYik7RmkoYik7cmV0dXJuIGEuVWEoYil9KS50aGVuKGZ1bmN0aW9uKCl7YS5FYSgpfSl9LGVqPWZ1bmN0aW9uKGEsYil7WihhKSYmKERpKFooYSksYS5ZZCksY2MoWihhKSxcInRva2VuQ2hhbmdlZFwiLGEuWmQpLGNjKFooYSksXCJ1c2VyRGVsZXRlZFwiLGEuWGQpKTtiJiYoYi5xYy5wdXNoKGEuWWQpLFViKGIsXCJ0b2tlbkNoYW5nZWRcIixhLlpkKSxVYihiLFwidXNlckRlbGV0ZWRcIixhLlhkKSk7TihhLFwiY3VycmVudFVzZXJcIixiKX07XG5ZLnByb3RvdHlwZS5zaWduT3V0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPXRoaXMudWEudGhlbihmdW5jdGlvbigpe2lmKCFaKGEpKXJldHVybiBEKCk7ZWooYSxudWxsKTtyZXR1cm4gY2ooYS5vYSkudGhlbihmdW5jdGlvbigpe2EuRWEoKX0pfSk7cmV0dXJuIHRoaXMuZihiKX07XG52YXIga2o9ZnVuY3Rpb24oYSl7dmFyIGI9WmkoYS5jYixYKGEpLm9wdGlvbnMuYXV0aERvbWFpbikudGhlbihmdW5jdGlvbihiKXtpZihhLmJkPWIpYi5IYT1hLmNiO3JldHVybiBWaShhLmNiKX0pO3JldHVybiBhLmYoYil9LGZqPWZ1bmN0aW9uKGEpe3ZhciBiPVgoYSkub3B0aW9ucy5hdXRoRG9tYWluLGM9a2ooYSkudGhlbihmdW5jdGlvbigpe3JldHVybiBkaihhLm9hLGIpfSkudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gYj8oYi5IYT1hLmNiLGIucmVsb2FkKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBiaihhLm9hLGIpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYn0pfSkuYyhmdW5jdGlvbihjKXtyZXR1cm5cImF1dGgvbmV0d29yay1yZXF1ZXN0LWZhaWxlZFwiPT1jLmNvZGU/YjpjaihhLm9hKX0pKTpudWxsfSkudGhlbihmdW5jdGlvbihiKXtlaihhLGJ8fG51bGwpfSk7cmV0dXJuIGEuZihjKX0sZ2o9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuT2IudGhlbihmdW5jdGlvbigpe3JldHVybiBhLmdldFJlZGlyZWN0UmVzdWx0KCl9KS5jKGZ1bmN0aW9uKCl7fSkudGhlbihmdW5jdGlvbigpe2lmKCFhLlFhKXJldHVybiBhLkxjKCl9KS5jKGZ1bmN0aW9uKCl7fSkudGhlbihmdW5jdGlvbigpe2lmKCFhLlFhKXthLlJjPVxuITA7dmFyIGI9YS5vYTtiLmkuYWRkTGlzdGVuZXIoYWosYi51LGEuTGMpfX0pfTtZLnByb3RvdHlwZS5tZj1mdW5jdGlvbigpe3ZhciBhPXRoaXM7cmV0dXJuIGRqKHRoaXMub2EsWCh0aGlzKS5vcHRpb25zLmF1dGhEb21haW4pLnRoZW4oZnVuY3Rpb24oYil7aWYoIWEuUWEpe3ZhciBjO2lmKGM9WihhKSYmYil7Yz1aKGEpLnVpZDt2YXIgZD1iLnVpZDtjPXZvaWQgMD09PWN8fG51bGw9PT1jfHxcIlwiPT09Y3x8dm9pZCAwPT09ZHx8bnVsbD09PWR8fFwiXCI9PT1kPyExOmM9PWR9aWYoYylyZXR1cm4gWihhKS5jb3B5KGIpLFooYSkuZ2V0VG9rZW4oKTtpZihaKGEpfHxiKWVqKGEsYiksYiYmKEZpKGIpLGIuSGE9YS5jYiksYS5tJiZhLm0uc3Vic2NyaWJlKGEpLGEuRWEoKX19KX07WS5wcm90b3R5cGUuVWE9ZnVuY3Rpb24oYSl7cmV0dXJuIGJqKHRoaXMub2EsYSl9O1kucHJvdG90eXBlLkhlPWZ1bmN0aW9uKCl7dGhpcy5FYSgpO3RoaXMuVWEoWih0aGlzKSl9O1xuWS5wcm90b3R5cGUuR2U9ZnVuY3Rpb24oKXt0aGlzLnNpZ25PdXQoKX07dmFyIGxqPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuZihiLnRoZW4oZnVuY3Rpb24oYil7cmV0dXJuIGpqKGEsYil9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIFooYSl9KSl9O2g9WS5wcm90b3R5cGU7aC5MZT1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3RoaXMuYWRkQXV0aFRva2VuTGlzdGVuZXIoZnVuY3Rpb24oKXthLm5leHQoWihiKSl9KX07aC5vbkF1dGhTdGF0ZUNoYW5nZWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXM7dGhpcy5SYyYmZmlyZWJhc2UuUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpe3EoYSk/YShaKGQpKTpxKGEubmV4dCkmJmEubmV4dChaKGQpKX0pO3JldHVybiB0aGlzLlplKGEsYixjKX07XG5oLmdldFRva2VuPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz10aGlzLnVhLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gWihiKT9aKGIpLmdldFRva2VuKGEpLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJue2FjY2Vzc1Rva2VuOmF9fSk6bnVsbH0pO3JldHVybiB0aGlzLmYoYyl9O2guc2lnbkluV2l0aEN1c3RvbVRva2VuPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIHRoaXMudWEudGhlbihmdW5jdGlvbigpe3JldHVybiBsaihiLFEoYi5nLFFnLHt0b2tlbjphfSkpfSkudGhlbihmdW5jdGlvbihhKXtMaShhLFwiaXNBbm9ueW1vdXNcIiwhMSk7cmV0dXJuIGIuVWEoYSl9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIFooYil9KX07aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIHRoaXMudWEudGhlbihmdW5jdGlvbigpe3JldHVybiBsaihjLFEoYy5nLFpmLHtlbWFpbDphLHBhc3N3b3JkOmJ9KSl9KX07XG5oLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIHRoaXMudWEudGhlbihmdW5jdGlvbigpe3JldHVybiBsaihjLFEoYy5nLE5nLHtlbWFpbDphLHBhc3N3b3JkOmJ9KSl9KX07aC5zaWduSW5XaXRoQ3JlZGVudGlhbD1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiB0aGlzLnVhLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbGooYixhLlViKGIuZykpfSl9O2guc2lnbkluQW5vbnltb3VzbHk9ZnVuY3Rpb24oKXt2YXIgYT1aKHRoaXMpLGI9dGhpcztyZXR1cm4gYSYmYS5pc0Fub255bW91cz9EKGEpOnRoaXMudWEudGhlbihmdW5jdGlvbigpe3JldHVybiBsaihiLGIuZy5zaWduSW5Bbm9ueW1vdXNseSgpKX0pLnRoZW4oZnVuY3Rpb24oYSl7TGkoYSxcImlzQW5vbnltb3VzXCIsITApO3JldHVybiBiLlVhKGEpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBaKGIpfSl9O1xudmFyIFg9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuYXBwfSxaPWZ1bmN0aW9uKGEpe3JldHVybiBhLmN1cnJlbnRVc2VyfTtoPVkucHJvdG90eXBlO2guRWE9ZnVuY3Rpb24oKXtpZih0aGlzLlJjKWZvcih2YXIgYT0wO2E8dGhpcy5PYS5sZW5ndGg7YSsrKWlmKHRoaXMuT2FbYV0pdGhpcy5PYVthXShaKHRoaXMpJiZaKHRoaXMpLl9sYXR8fG51bGwpfTtoLmFkZEF1dGhUb2tlbkxpc3RlbmVyPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7dGhpcy5PYS5wdXNoKGEpO3RoaXMuZih0aGlzLnVhLnRoZW4oZnVuY3Rpb24oKXtiLlFhfHxIYShiLk9hLGEpJiZhKFooYikmJlooYikuX2xhdHx8bnVsbCl9KSl9O2gucmVtb3ZlQXV0aFRva2VuTGlzdGVuZXI9ZnVuY3Rpb24oYSl7S2EodGhpcy5PYSxmdW5jdGlvbihiKXtyZXR1cm4gYj09YX0pfTtcbmhbXCJkZWxldGVcIl09ZnVuY3Rpb24oKXt0aGlzLlFhPSEwO2Zvcih2YXIgYT0wO2E8dGhpcy5aLmxlbmd0aDthKyspdGhpcy5aW2FdLmNhbmNlbChcImFwcC1kZWxldGVkXCIpO3RoaXMuWj1bXTt0aGlzLm9hJiYoYT10aGlzLm9hLGEuaS5yZW1vdmVMaXN0ZW5lcihhaixhLnUsdGhpcy5MYykpO3RoaXMubSYmdGhpcy5tLnVuc3Vic2NyaWJlKHRoaXMpO3JldHVybiBmaXJlYmFzZS5Qcm9taXNlLnJlc29sdmUoKX07aC5mPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7dGhpcy5aLnB1c2goYSk7bmQoYSxmdW5jdGlvbigpe0phKGIuWixhKX0pO3JldHVybiBhfTtoLmZldGNoUHJvdmlkZXJzRm9yRW1haWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZih1Zyh0aGlzLmcsYSkpfTtoLnZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNoZWNrQWN0aW9uQ29kZShhKS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBhLmRhdGEuZW1haWx9KX07XG5oLmNvbmZpcm1QYXNzd29yZFJlc2V0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZih0aGlzLmcuY29uZmlybVBhc3N3b3JkUmVzZXQoYSxiKS50aGVuKGZ1bmN0aW9uKCl7fSkpfTtoLmNoZWNrQWN0aW9uQ29kZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5mKHRoaXMuZy5jaGVja0FjdGlvbkNvZGUoYSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gbmV3IHpoKGEpfSkpfTtoLmFwcGx5QWN0aW9uQ29kZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5mKHRoaXMuZy5hcHBseUFjdGlvbkNvZGUoYSkudGhlbihmdW5jdGlvbigpe30pKX07aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmYodGhpcy5nLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoYSkudGhlbihmdW5jdGlvbigpe30pKX07SGgoWS5wcm90b3R5cGUse2FwcGx5QWN0aW9uQ29kZTp7bmFtZTpcImFwcGx5QWN0aW9uQ29kZVwiLGE6W1MoXCJjb2RlXCIpXX0sY2hlY2tBY3Rpb25Db2RlOntuYW1lOlwiY2hlY2tBY3Rpb25Db2RlXCIsYTpbUyhcImNvZGVcIildfSxjb25maXJtUGFzc3dvcmRSZXNldDp7bmFtZTpcImNvbmZpcm1QYXNzd29yZFJlc2V0XCIsYTpbUyhcImNvZGVcIiksUyhcIm5ld1Bhc3N3b3JkXCIpXX0sY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkOntuYW1lOlwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkXCIsYTpbUyhcImVtYWlsXCIpLFMoXCJwYXNzd29yZFwiKV19LGZldGNoUHJvdmlkZXJzRm9yRW1haWw6e25hbWU6XCJmZXRjaFByb3ZpZGVyc0ZvckVtYWlsXCIsYTpbUyhcImVtYWlsXCIpXX0sZ2V0UmVkaXJlY3RSZXN1bHQ6e25hbWU6XCJnZXRSZWRpcmVjdFJlc3VsdFwiLGE6W119LG9uQXV0aFN0YXRlQ2hhbmdlZDp7bmFtZTpcIm9uQXV0aFN0YXRlQ2hhbmdlZFwiLGE6W0ZoKFQoKSxCaCgpLFwibmV4dE9yT2JzZXJ2ZXJcIiksXG5CaChcIm9wdF9lcnJvclwiLCEwKSxCaChcIm9wdF9jb21wbGV0ZWRcIiwhMCldfSxzZW5kUGFzc3dvcmRSZXNldEVtYWlsOntuYW1lOlwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbFwiLGE6W1MoXCJlbWFpbFwiKV19LHNpZ25JbkFub255bW91c2x5OntuYW1lOlwic2lnbkluQW5vbnltb3VzbHlcIixhOltdfSxzaWduSW5XaXRoQ3JlZGVudGlhbDp7bmFtZTpcInNpZ25JbldpdGhDcmVkZW50aWFsXCIsYTpbRGgoKV19LHNpZ25JbldpdGhDdXN0b21Ub2tlbjp7bmFtZTpcInNpZ25JbldpdGhDdXN0b21Ub2tlblwiLGE6W1MoXCJ0b2tlblwiKV19LHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkOntuYW1lOlwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmRcIixhOltTKFwiZW1haWxcIiksUyhcInBhc3N3b3JkXCIpXX0sc2lnbkluV2l0aFBvcHVwOntuYW1lOlwic2lnbkluV2l0aFBvcHVwXCIsYTpbRWgoKV19LHNpZ25JbldpdGhSZWRpcmVjdDp7bmFtZTpcInNpZ25JbldpdGhSZWRpcmVjdFwiLGE6W0VoKCldfSxzaWduT3V0OntuYW1lOlwic2lnbk91dFwiLFxuYTpbXX0sdG9KU09OOntuYW1lOlwidG9KU09OXCIsYTpbUyhudWxsLCEwKV19LHZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlOntuYW1lOlwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGVcIixhOltTKFwiY29kZVwiKV19fSk7XG5IaChXLnByb3RvdHlwZSx7XCJkZWxldGVcIjp7bmFtZTpcImRlbGV0ZVwiLGE6W119LGdldFRva2VuOntuYW1lOlwiZ2V0VG9rZW5cIixhOlt7bmFtZTpcIm9wdF9mb3JjZVJlZnJlc2hcIixmYTpcImEgYm9vbGVhblwiLG9wdGlvbmFsOiEwLGhhOmZ1bmN0aW9uKGEpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYX19XX0sbGluazp7bmFtZTpcImxpbmtcIixhOltEaCgpXX0sbGlua1dpdGhQb3B1cDp7bmFtZTpcImxpbmtXaXRoUG9wdXBcIixhOltFaCgpXX0sbGlua1dpdGhSZWRpcmVjdDp7bmFtZTpcImxpbmtXaXRoUmVkaXJlY3RcIixhOltFaCgpXX0scmVhdXRoZW50aWNhdGU6e25hbWU6XCJyZWF1dGhlbnRpY2F0ZVwiLGE6W0RoKCldfSxyZWxvYWQ6e25hbWU6XCJyZWxvYWRcIixhOltdfSxzZW5kRW1haWxWZXJpZmljYXRpb246e25hbWU6XCJzZW5kRW1haWxWZXJpZmljYXRpb25cIixhOltdfSx0b0pTT046e25hbWU6XCJ0b0pTT05cIixhOltTKG51bGwsITApXX0sdW5saW5rOntuYW1lOlwidW5saW5rXCIsYTpbUyhcInByb3ZpZGVyXCIpXX0sXG51cGRhdGVFbWFpbDp7bmFtZTpcInVwZGF0ZUVtYWlsXCIsYTpbUyhcImVtYWlsXCIpXX0sdXBkYXRlUGFzc3dvcmQ6e25hbWU6XCJ1cGRhdGVQYXNzd29yZFwiLGE6W1MoXCJwYXNzd29yZFwiKV19LHVwZGF0ZVByb2ZpbGU6e25hbWU6XCJ1cGRhdGVQcm9maWxlXCIsYTpbVChcInByb2ZpbGVcIildfX0pO0hoKEMucHJvdG90eXBlLHtjOntuYW1lOlwiY2F0Y2hcIn0sdGhlbjp7bmFtZTpcInRoZW5cIn19KTtVKGFnLFwiY3JlZGVudGlhbFwiLGZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBZZihhLGIpfSxbUyhcImVtYWlsXCIpLFMoXCJwYXNzd29yZFwiKV0pO0hoKFVmLnByb3RvdHlwZSx7YWRkU2NvcGU6e25hbWU6XCJhZGRTY29wZVwiLGE6W1MoXCJzY29wZVwiKV19LHNldEN1c3RvbVBhcmFtZXRlcnM6e25hbWU6XCJzZXRDdXN0b21QYXJhbWV0ZXJzXCIsYTpbVChcImN1c3RvbU9BdXRoUGFyYW1ldGVyc1wiKV19fSk7VShVZixcImNyZWRlbnRpYWxcIixVZi5jcmVkZW50aWFsLFtGaChTKCksVCgpLFwidG9rZW5cIildKTtcbkhoKFZmLnByb3RvdHlwZSx7YWRkU2NvcGU6e25hbWU6XCJhZGRTY29wZVwiLGE6W1MoXCJzY29wZVwiKV19LHNldEN1c3RvbVBhcmFtZXRlcnM6e25hbWU6XCJzZXRDdXN0b21QYXJhbWV0ZXJzXCIsYTpbVChcImN1c3RvbU9BdXRoUGFyYW1ldGVyc1wiKV19fSk7VShWZixcImNyZWRlbnRpYWxcIixWZi5jcmVkZW50aWFsLFtGaChTKCksVCgpLFwidG9rZW5cIildKTtIaChXZi5wcm90b3R5cGUse2FkZFNjb3BlOntuYW1lOlwiYWRkU2NvcGVcIixhOltTKFwic2NvcGVcIildfSxzZXRDdXN0b21QYXJhbWV0ZXJzOntuYW1lOlwic2V0Q3VzdG9tUGFyYW1ldGVyc1wiLGE6W1QoXCJjdXN0b21PQXV0aFBhcmFtZXRlcnNcIildfX0pO1UoV2YsXCJjcmVkZW50aWFsXCIsV2YuY3JlZGVudGlhbCxbRmgoUygpLEZoKFQoKSxDaCgpKSxcImlkVG9rZW5cIiksRmgoUygpLENoKCksXCJhY2Nlc3NUb2tlblwiLCEwKV0pO0hoKFhmLnByb3RvdHlwZSx7c2V0Q3VzdG9tUGFyYW1ldGVyczp7bmFtZTpcInNldEN1c3RvbVBhcmFtZXRlcnNcIixhOltUKFwiY3VzdG9tT0F1dGhQYXJhbWV0ZXJzXCIpXX19KTtcblUoWGYsXCJjcmVkZW50aWFsXCIsWGYuY3JlZGVudGlhbCxbRmgoUygpLFQoKSxcInRva2VuXCIpLFMoXCJzZWNyZXRcIiwhMCldKTtcbihmdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgZmlyZWJhc2UmJmZpcmViYXNlLklOVEVSTkFMJiZmaXJlYmFzZS5JTlRFUk5BTC5yZWdpc3RlclNlcnZpY2Upe3ZhciBhPXtBdXRoOlksRXJyb3I6T307VShhLFwiRW1haWxBdXRoUHJvdmlkZXJcIixhZyxbXSk7VShhLFwiRmFjZWJvb2tBdXRoUHJvdmlkZXJcIixVZixbXSk7VShhLFwiR2l0aHViQXV0aFByb3ZpZGVyXCIsVmYsW10pO1UoYSxcIkdvb2dsZUF1dGhQcm92aWRlclwiLFdmLFtdKTtVKGEsXCJUd2l0dGVyQXV0aFByb3ZpZGVyXCIsWGYsW10pO2ZpcmViYXNlLklOVEVSTkFMLnJlZ2lzdGVyU2VydmljZShcImF1dGhcIixmdW5jdGlvbihhLGMpe2E9bmV3IFkoYSk7Yyh7SU5URVJOQUw6e2dldFRva2VuOnIoYS5nZXRUb2tlbixhKSxhZGRBdXRoVG9rZW5MaXN0ZW5lcjpyKGEuYWRkQXV0aFRva2VuTGlzdGVuZXIsYSkscmVtb3ZlQXV0aFRva2VuTGlzdGVuZXI6cihhLnJlbW92ZUF1dGhUb2tlbkxpc3RlbmVyLGEpfX0pO3JldHVybiBhfSxcbmEsZnVuY3Rpb24oYSxjKXtpZihcImNyZWF0ZVwiPT09YSl0cnl7Yy5hdXRoKCl9Y2F0Y2goZCl7fX0pO2ZpcmViYXNlLklOVEVSTkFMLmV4dGVuZE5hbWVzcGFjZSh7VXNlcjpXfSl9ZWxzZSB0aHJvdyBFcnJvcihcIkNhbm5vdCBmaW5kIHRoZSBmaXJlYmFzZSBuYW1lc3BhY2U7IGJlIHN1cmUgdG8gaW5jbHVkZSBmaXJlYmFzZS1hcHAuanMgYmVmb3JlIHRoaXMgbGlicmFyeS5cIik7fSkoKTt9KS5jYWxsKHRoaXMpO1xufSkuY2FsbChnbG9iYWwpO1xubW9kdWxlLmV4cG9ydHMgPSBmaXJlYmFzZS5hdXRoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpcmViYXNlL2F1dGguanNcbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZmlyZWJhc2UgPSByZXF1aXJlKCcuL2FwcCcpO1xuKGZ1bmN0aW9uKCl7XG4vKiEgQGxpY2Vuc2UgRmlyZWJhc2UgdjMuNi41XG4gICAgQnVpbGQ6IDMuNi41LXJjLjFcbiAgICBUZXJtczogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL3Rlcm1zL1xuXG4gICAgLS0tXG5cbiAgICB0eXBlZGFycmF5LmpzXG4gICAgQ29weXJpZ2h0IChjKSAyMDEwLCBMaW5kZW4gUmVzZWFyY2gsIEluYy5cblxuICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAgICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gICAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICAgIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAgICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAgICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAgICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAgICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gICAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gICAgVEhFIFNPRlRXQVJFLiAqL1xuKGZ1bmN0aW9uKCkge3ZhciBnLGFhPXRoaXM7ZnVuY3Rpb24gbihhKXtyZXR1cm4gdm9pZCAwIT09YX1mdW5jdGlvbiBiYSgpe31mdW5jdGlvbiBjYShhKXthLlZiPWZ1bmN0aW9uKCl7cmV0dXJuIGEuWWU/YS5ZZTphLlllPW5ldyBhfX1cbmZ1bmN0aW9uIGRhKGEpe3ZhciBiPXR5cGVvZiBhO2lmKFwib2JqZWN0XCI9PWIpaWYoYSl7aWYoYSBpbnN0YW5jZW9mIEFycmF5KXJldHVyblwiYXJyYXlcIjtpZihhIGluc3RhbmNlb2YgT2JqZWN0KXJldHVybiBiO3ZhciBjPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKTtpZihcIltvYmplY3QgV2luZG93XVwiPT1jKXJldHVyblwib2JqZWN0XCI7aWYoXCJbb2JqZWN0IEFycmF5XVwiPT1jfHxcIm51bWJlclwiPT10eXBlb2YgYS5sZW5ndGgmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnNwbGljZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucHJvcGVydHlJc0VudW1lcmFibGUmJiFhLnByb3BlcnR5SXNFbnVtZXJhYmxlKFwic3BsaWNlXCIpKXJldHVyblwiYXJyYXlcIjtpZihcIltvYmplY3QgRnVuY3Rpb25dXCI9PWN8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmNhbGwmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnByb3BlcnR5SXNFbnVtZXJhYmxlJiYhYS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcImNhbGxcIikpcmV0dXJuXCJmdW5jdGlvblwifWVsc2UgcmV0dXJuXCJudWxsXCI7XG5lbHNlIGlmKFwiZnVuY3Rpb25cIj09YiYmXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuY2FsbClyZXR1cm5cIm9iamVjdFwiO3JldHVybiBifWZ1bmN0aW9uIGVhKGEpe3JldHVyblwiYXJyYXlcIj09ZGEoYSl9ZnVuY3Rpb24gZmEoYSl7dmFyIGI9ZGEoYSk7cmV0dXJuXCJhcnJheVwiPT1ifHxcIm9iamVjdFwiPT1iJiZcIm51bWJlclwiPT10eXBlb2YgYS5sZW5ndGh9ZnVuY3Rpb24gcChhKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYX1mdW5jdGlvbiBnYShhKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgYX1mdW5jdGlvbiBoYShhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PWRhKGEpfWZ1bmN0aW9uIGlhKGEpe3ZhciBiPXR5cGVvZiBhO3JldHVyblwib2JqZWN0XCI9PWImJm51bGwhPWF8fFwiZnVuY3Rpb25cIj09Yn1mdW5jdGlvbiBqYShhLGIsYyl7cmV0dXJuIGEuY2FsbC5hcHBseShhLmJpbmQsYXJndW1lbnRzKX1cbmZ1bmN0aW9uIGthKGEsYixjKXtpZighYSl0aHJvdyBFcnJvcigpO2lmKDI8YXJndW1lbnRzLmxlbmd0aCl7dmFyIGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7QXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYyxkKTtyZXR1cm4gYS5hcHBseShiLGMpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIHEoYSxiLGMpe3E9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQmJi0xIT1GdW5jdGlvbi5wcm90b3R5cGUuYmluZC50b1N0cmluZygpLmluZGV4T2YoXCJuYXRpdmUgY29kZVwiKT9qYTprYTtyZXR1cm4gcS5hcHBseShudWxsLGFyZ3VtZW50cyl9XG5mdW5jdGlvbiBsYShhLGIpe2Z1bmN0aW9uIGMoKXt9Yy5wcm90b3R5cGU9Yi5wcm90b3R5cGU7YS53Zz1iLnByb3RvdHlwZTthLnByb3RvdHlwZT1uZXcgYzthLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hO2Euc2c9ZnVuY3Rpb24oYSxjLGYpe2Zvcih2YXIgaD1BcnJheShhcmd1bWVudHMubGVuZ3RoLTIpLGs9MjtrPGFyZ3VtZW50cy5sZW5ndGg7aysrKWhbay0yXT1hcmd1bWVudHNba107cmV0dXJuIGIucHJvdG90eXBlW2NdLmFwcGx5KGEsaCl9fTtmdW5jdGlvbiBtYSgpe3RoaXMuV2E9LTF9O2Z1bmN0aW9uIG5hKCl7dGhpcy5XYT0tMTt0aGlzLldhPTY0O3RoaXMuTT1bXTt0aGlzLlZkPVtdO3RoaXMuQWY9W107dGhpcy56ZD1bXTt0aGlzLnpkWzBdPTEyODtmb3IodmFyIGE9MTthPHRoaXMuV2E7KythKXRoaXMuemRbYV09MDt0aGlzLlBkPXRoaXMuJGI9MDt0aGlzLnJlc2V0KCl9bGEobmEsbWEpO25hLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMuTVswXT0xNzMyNTg0MTkzO3RoaXMuTVsxXT00MDIzMjMzNDE3O3RoaXMuTVsyXT0yNTYyMzgzMTAyO3RoaXMuTVszXT0yNzE3MzM4Nzg7dGhpcy5NWzRdPTMyODUzNzc1MjA7dGhpcy5QZD10aGlzLiRiPTB9O1xuZnVuY3Rpb24gb2EoYSxiLGMpe2N8fChjPTApO3ZhciBkPWEuQWY7aWYocChiKSlmb3IodmFyIGU9MDsxNj5lO2UrKylkW2VdPWIuY2hhckNvZGVBdChjKTw8MjR8Yi5jaGFyQ29kZUF0KGMrMSk8PDE2fGIuY2hhckNvZGVBdChjKzIpPDw4fGIuY2hhckNvZGVBdChjKzMpLGMrPTQ7ZWxzZSBmb3IoZT0wOzE2PmU7ZSsrKWRbZV09YltjXTw8MjR8YltjKzFdPDwxNnxiW2MrMl08PDh8YltjKzNdLGMrPTQ7Zm9yKGU9MTY7ODA+ZTtlKyspe3ZhciBmPWRbZS0zXV5kW2UtOF1eZFtlLTE0XV5kW2UtMTZdO2RbZV09KGY8PDF8Zj4+PjMxKSY0Mjk0OTY3Mjk1fWI9YS5NWzBdO2M9YS5NWzFdO2Zvcih2YXIgaD1hLk1bMl0saz1hLk1bM10sbD1hLk1bNF0sbSxlPTA7ODA+ZTtlKyspNDA+ZT8yMD5lPyhmPWteYyYoaF5rKSxtPTE1MTg1MDAyNDkpOihmPWNeaF5rLG09MTg1OTc3NTM5Myk6NjA+ZT8oZj1jJmh8ayYoY3xoKSxtPTI0MDA5NTk3MDgpOihmPWNeaF5rLG09MzM5NTQ2OTc4MiksZj0oYjw8XG41fGI+Pj4yNykrZitsK20rZFtlXSY0Mjk0OTY3Mjk1LGw9ayxrPWgsaD0oYzw8MzB8Yz4+PjIpJjQyOTQ5NjcyOTUsYz1iLGI9ZjthLk1bMF09YS5NWzBdK2ImNDI5NDk2NzI5NTthLk1bMV09YS5NWzFdK2MmNDI5NDk2NzI5NTthLk1bMl09YS5NWzJdK2gmNDI5NDk2NzI5NTthLk1bM109YS5NWzNdK2smNDI5NDk2NzI5NTthLk1bNF09YS5NWzRdK2wmNDI5NDk2NzI5NX1cbm5hLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1hKXtuKGIpfHwoYj1hLmxlbmd0aCk7Zm9yKHZhciBjPWItdGhpcy5XYSxkPTAsZT10aGlzLlZkLGY9dGhpcy4kYjtkPGI7KXtpZigwPT1mKWZvcig7ZDw9Yzspb2EodGhpcyxhLGQpLGQrPXRoaXMuV2E7aWYocChhKSlmb3IoO2Q8Yjspe2lmKGVbZl09YS5jaGFyQ29kZUF0KGQpLCsrZiwrK2QsZj09dGhpcy5XYSl7b2EodGhpcyxlKTtmPTA7YnJlYWt9fWVsc2UgZm9yKDtkPGI7KWlmKGVbZl09YVtkXSwrK2YsKytkLGY9PXRoaXMuV2Epe29hKHRoaXMsZSk7Zj0wO2JyZWFrfX10aGlzLiRiPWY7dGhpcy5QZCs9Yn19O2Z1bmN0aW9uIHIoYSxiKXtmb3IodmFyIGMgaW4gYSliLmNhbGwodm9pZCAwLGFbY10sYyxhKX1mdW5jdGlvbiBwYShhLGIpe3ZhciBjPXt9LGQ7Zm9yKGQgaW4gYSljW2RdPWIuY2FsbCh2b2lkIDAsYVtkXSxkLGEpO3JldHVybiBjfWZ1bmN0aW9uIHFhKGEsYil7Zm9yKHZhciBjIGluIGEpaWYoIWIuY2FsbCh2b2lkIDAsYVtjXSxjLGEpKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIHJhKGEpe3ZhciBiPTAsYztmb3IoYyBpbiBhKWIrKztyZXR1cm4gYn1mdW5jdGlvbiBzYShhKXtmb3IodmFyIGIgaW4gYSlyZXR1cm4gYn1mdW5jdGlvbiB0YShhKXt2YXIgYj1bXSxjPTAsZDtmb3IoZCBpbiBhKWJbYysrXT1hW2RdO3JldHVybiBifWZ1bmN0aW9uIHVhKGEpe3ZhciBiPVtdLGM9MCxkO2ZvcihkIGluIGEpYltjKytdPWQ7cmV0dXJuIGJ9ZnVuY3Rpb24gdmEoYSxiKXtmb3IodmFyIGMgaW4gYSlpZihhW2NdPT1iKXJldHVybiEwO3JldHVybiExfVxuZnVuY3Rpb24gd2EoYSxiLGMpe2Zvcih2YXIgZCBpbiBhKWlmKGIuY2FsbChjLGFbZF0sZCxhKSlyZXR1cm4gZH1mdW5jdGlvbiB4YShhLGIpe3ZhciBjPXdhKGEsYix2b2lkIDApO3JldHVybiBjJiZhW2NdfWZ1bmN0aW9uIHlhKGEpe2Zvcih2YXIgYiBpbiBhKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIHphKGEpe3ZhciBiPXt9LGM7Zm9yKGMgaW4gYSliW2NdPWFbY107cmV0dXJuIGJ9O2Z1bmN0aW9uIEFhKGEpe2E9U3RyaW5nKGEpO2lmKC9eXFxzKiQvLnRlc3QoYSk/MDovXltcXF0sOnt9XFxzXFx1MjAyOFxcdTIwMjldKiQvLnRlc3QoYS5yZXBsYWNlKC9cXFxcW1wiXFxcXFxcL2JmbnJ0dV0vZyxcIkBcIikucmVwbGFjZSgvXCJbXlwiXFxcXFxcblxcclxcdTIwMjhcXHUyMDI5XFx4MDAtXFx4MDhcXHgwYS1cXHgxZl0qXCJ8dHJ1ZXxmYWxzZXxudWxsfC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/L2csXCJdXCIpLnJlcGxhY2UoLyg/Ol58OnwsKSg/OltcXHNcXHUyMDI4XFx1MjAyOV0qXFxbKSsvZyxcIlwiKSkpdHJ5e3JldHVybiBldmFsKFwiKFwiK2ErXCIpXCIpfWNhdGNoKGIpe310aHJvdyBFcnJvcihcIkludmFsaWQgSlNPTiBzdHJpbmc6IFwiK2EpO31mdW5jdGlvbiBCYSgpe3RoaXMuRmQ9dm9pZCAwfVxuZnVuY3Rpb24gQ2EoYSxiLGMpe3N3aXRjaCh0eXBlb2YgYil7Y2FzZSBcInN0cmluZ1wiOkRhKGIsYyk7YnJlYWs7Y2FzZSBcIm51bWJlclwiOmMucHVzaChpc0Zpbml0ZShiKSYmIWlzTmFOKGIpP2I6XCJudWxsXCIpO2JyZWFrO2Nhc2UgXCJib29sZWFuXCI6Yy5wdXNoKGIpO2JyZWFrO2Nhc2UgXCJ1bmRlZmluZWRcIjpjLnB1c2goXCJudWxsXCIpO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjppZihudWxsPT1iKXtjLnB1c2goXCJudWxsXCIpO2JyZWFrfWlmKGVhKGIpKXt2YXIgZD1iLmxlbmd0aDtjLnB1c2goXCJbXCIpO2Zvcih2YXIgZT1cIlwiLGY9MDtmPGQ7ZisrKWMucHVzaChlKSxlPWJbZl0sQ2EoYSxhLkZkP2EuRmQuY2FsbChiLFN0cmluZyhmKSxlKTplLGMpLGU9XCIsXCI7Yy5wdXNoKFwiXVwiKTticmVha31jLnB1c2goXCJ7XCIpO2Q9XCJcIjtmb3IoZiBpbiBiKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLGYpJiYoZT1iW2ZdLFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJihjLnB1c2goZCksRGEoZixjKSxcbmMucHVzaChcIjpcIiksQ2EoYSxhLkZkP2EuRmQuY2FsbChiLGYsZSk6ZSxjKSxkPVwiLFwiKSk7Yy5wdXNoKFwifVwiKTticmVhaztjYXNlIFwiZnVuY3Rpb25cIjpicmVhaztkZWZhdWx0OnRocm93IEVycm9yKFwiVW5rbm93biB0eXBlOiBcIit0eXBlb2YgYik7fX12YXIgRWE9eydcIic6J1xcXFxcIicsXCJcXFxcXCI6XCJcXFxcXFxcXFwiLFwiL1wiOlwiXFxcXC9cIixcIlxcYlwiOlwiXFxcXGJcIixcIlxcZlwiOlwiXFxcXGZcIixcIlxcblwiOlwiXFxcXG5cIixcIlxcclwiOlwiXFxcXHJcIixcIlxcdFwiOlwiXFxcXHRcIixcIlxceDBCXCI6XCJcXFxcdTAwMGJcIn0sRmE9L1xcdWZmZmYvLnRlc3QoXCJcXHVmZmZmXCIpPy9bXFxcXFxcXCJcXHgwMC1cXHgxZlxceDdmLVxcdWZmZmZdL2c6L1tcXFxcXFxcIlxceDAwLVxceDFmXFx4N2YtXFx4ZmZdL2c7XG5mdW5jdGlvbiBEYShhLGIpe2IucHVzaCgnXCInLGEucmVwbGFjZShGYSxmdW5jdGlvbihhKXtpZihhIGluIEVhKXJldHVybiBFYVthXTt2YXIgYj1hLmNoYXJDb2RlQXQoMCksZT1cIlxcXFx1XCI7MTY+Yj9lKz1cIjAwMFwiOjI1Nj5iP2UrPVwiMDBcIjo0MDk2PmImJihlKz1cIjBcIik7cmV0dXJuIEVhW2FdPWUrYi50b1N0cmluZygxNil9KSwnXCInKX07dmFyIHQ7YTp7dmFyIEdhPWFhLm5hdmlnYXRvcjtpZihHYSl7dmFyIEhhPUdhLnVzZXJBZ2VudDtpZihIYSl7dD1IYTticmVhayBhfX10PVwiXCJ9O3ZhciB2PUFycmF5LnByb3RvdHlwZSxJYT12LmluZGV4T2Y/ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB2LmluZGV4T2YuY2FsbChhLGIsYyl9OmZ1bmN0aW9uKGEsYixjKXtjPW51bGw9PWM/MDowPmM/TWF0aC5tYXgoMCxhLmxlbmd0aCtjKTpjO2lmKHAoYSkpcmV0dXJuIHAoYikmJjE9PWIubGVuZ3RoP2EuaW5kZXhPZihiLGMpOi0xO2Zvcig7YzxhLmxlbmd0aDtjKyspaWYoYyBpbiBhJiZhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0sSmE9di5mb3JFYWNoP2Z1bmN0aW9uKGEsYixjKXt2LmZvckVhY2guY2FsbChhLGIsYyl9OmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YS5sZW5ndGgsZT1wKGEpP2Euc3BsaXQoXCJcIik6YSxmPTA7ZjxkO2YrKylmIGluIGUmJmIuY2FsbChjLGVbZl0sZixhKX0sS2E9di5maWx0ZXI/ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB2LmZpbHRlci5jYWxsKGEsYixjKX06ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1hLmxlbmd0aCxlPVtdLGY9MCxoPXAoYSk/XG5hLnNwbGl0KFwiXCIpOmEsaz0wO2s8ZDtrKyspaWYoayBpbiBoKXt2YXIgbD1oW2tdO2IuY2FsbChjLGwsayxhKSYmKGVbZisrXT1sKX1yZXR1cm4gZX0sTGE9di5tYXA/ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB2Lm1hcC5jYWxsKGEsYixjKX06ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1hLmxlbmd0aCxlPUFycmF5KGQpLGY9cChhKT9hLnNwbGl0KFwiXCIpOmEsaD0wO2g8ZDtoKyspaCBpbiBmJiYoZVtoXT1iLmNhbGwoYyxmW2hdLGgsYSkpO3JldHVybiBlfSxNYT12LnJlZHVjZT9mdW5jdGlvbihhLGIsYyxkKXtmb3IodmFyIGU9W10sZj0xLGg9YXJndW1lbnRzLmxlbmd0aDtmPGg7ZisrKWUucHVzaChhcmd1bWVudHNbZl0pO2QmJihlWzBdPXEoYixkKSk7cmV0dXJuIHYucmVkdWNlLmFwcGx5KGEsZSl9OmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWM7SmEoYSxmdW5jdGlvbihjLGgpe2U9Yi5jYWxsKGQsZSxjLGgsYSl9KTtyZXR1cm4gZX0sTmE9di5ldmVyeT9mdW5jdGlvbihhLGIsXG5jKXtyZXR1cm4gdi5ldmVyeS5jYWxsKGEsYixjKX06ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1hLmxlbmd0aCxlPXAoYSk/YS5zcGxpdChcIlwiKTphLGY9MDtmPGQ7ZisrKWlmKGYgaW4gZSYmIWIuY2FsbChjLGVbZl0sZixhKSlyZXR1cm4hMTtyZXR1cm4hMH07ZnVuY3Rpb24gT2EoYSxiKXt2YXIgYz1QYShhLGIsdm9pZCAwKTtyZXR1cm4gMD5jP251bGw6cChhKT9hLmNoYXJBdChjKTphW2NdfWZ1bmN0aW9uIFBhKGEsYixjKXtmb3IodmFyIGQ9YS5sZW5ndGgsZT1wKGEpP2Euc3BsaXQoXCJcIik6YSxmPTA7ZjxkO2YrKylpZihmIGluIGUmJmIuY2FsbChjLGVbZl0sZixhKSlyZXR1cm4gZjtyZXR1cm4tMX1mdW5jdGlvbiBRYShhLGIpe3ZhciBjPUlhKGEsYik7MDw9YyYmdi5zcGxpY2UuY2FsbChhLGMsMSl9ZnVuY3Rpb24gUmEoYSxiLGMpe3JldHVybiAyPj1hcmd1bWVudHMubGVuZ3RoP3Yuc2xpY2UuY2FsbChhLGIpOnYuc2xpY2UuY2FsbChhLGIsYyl9XG5mdW5jdGlvbiBTYShhLGIpe2Euc29ydChifHxUYSl9ZnVuY3Rpb24gVGEoYSxiKXtyZXR1cm4gYT5iPzE6YTxiPy0xOjB9O3ZhciBVYT0tMSE9dC5pbmRleE9mKFwiT3BlcmFcIil8fC0xIT10LmluZGV4T2YoXCJPUFJcIiksVmE9LTEhPXQuaW5kZXhPZihcIlRyaWRlbnRcIil8fC0xIT10LmluZGV4T2YoXCJNU0lFXCIpLFdhPS0xIT10LmluZGV4T2YoXCJHZWNrb1wiKSYmLTE9PXQudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwid2Via2l0XCIpJiYhKC0xIT10LmluZGV4T2YoXCJUcmlkZW50XCIpfHwtMSE9dC5pbmRleE9mKFwiTVNJRVwiKSksWGE9LTEhPXQudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwid2Via2l0XCIpO1xuKGZ1bmN0aW9uKCl7dmFyIGE9XCJcIixiO2lmKFVhJiZhYS5vcGVyYSlyZXR1cm4gYT1hYS5vcGVyYS52ZXJzaW9uLGhhKGEpP2EoKTphO1dhP2I9L3J2XFw6KFteXFwpO10rKShcXCl8OykvOlZhP2I9L1xcYig/Ok1TSUV8cnYpWzogXShbXlxcKTtdKykoXFwpfDspLzpYYSYmKGI9L1dlYktpdFxcLyhcXFMrKS8pO2ImJihhPShhPWIuZXhlYyh0KSk/YVsxXTpcIlwiKTtyZXR1cm4gVmEmJihiPShiPWFhLmRvY3VtZW50KT9iLmRvY3VtZW50TW9kZTp2b2lkIDAsYj5wYXJzZUZsb2F0KGEpKT9TdHJpbmcoYik6YX0pKCk7dmFyIFlhPW51bGwsWmE9bnVsbCwkYT1udWxsO2Z1bmN0aW9uIGFiKGEsYil7aWYoIWZhKGEpKXRocm93IEVycm9yKFwiZW5jb2RlQnl0ZUFycmF5IHRha2VzIGFuIGFycmF5IGFzIGEgcGFyYW1ldGVyXCIpO2JiKCk7Zm9yKHZhciBjPWI/WmE6WWEsZD1bXSxlPTA7ZTxhLmxlbmd0aDtlKz0zKXt2YXIgZj1hW2VdLGg9ZSsxPGEubGVuZ3RoLGs9aD9hW2UrMV06MCxsPWUrMjxhLmxlbmd0aCxtPWw/YVtlKzJdOjAsdT1mPj4yLGY9KGYmMyk8PDR8az4+NCxrPShrJjE1KTw8MnxtPj42LG09bSY2MztsfHwobT02NCxofHwoaz02NCkpO2QucHVzaChjW3VdLGNbZl0sY1trXSxjW21dKX1yZXR1cm4gZC5qb2luKFwiXCIpfVxuZnVuY3Rpb24gYmIoKXtpZighWWEpe1lhPXt9O1phPXt9OyRhPXt9O2Zvcih2YXIgYT0wOzY1PmE7YSsrKVlhW2FdPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIi5jaGFyQXQoYSksWmFbYV09XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OS1fLlwiLmNoYXJBdChhKSwkYVtaYVthXV09YSw2Mjw9YSYmKCRhW1wiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIi5jaGFyQXQoYSldPWEpfX07ZnVuY3Rpb24gY2IoYSxiKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsYil9ZnVuY3Rpb24gdyhhLGIpe2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLGIpKXJldHVybiBhW2JdfWZ1bmN0aW9uIGRiKGEsYil7Zm9yKHZhciBjIGluIGEpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsYykmJmIoYyxhW2NdKX07ZnVuY3Rpb24geChhLGIsYyxkKXt2YXIgZTtkPGI/ZT1cImF0IGxlYXN0IFwiK2I6ZD5jJiYoZT0wPT09Yz9cIm5vbmVcIjpcIm5vIG1vcmUgdGhhbiBcIitjKTtpZihlKXRocm93IEVycm9yKGErXCIgZmFpbGVkOiBXYXMgY2FsbGVkIHdpdGggXCIrZCsoMT09PWQ/XCIgYXJndW1lbnQuXCI6XCIgYXJndW1lbnRzLlwiKStcIiBFeHBlY3RzIFwiK2UrXCIuXCIpO31mdW5jdGlvbiB5KGEsYixjKXt2YXIgZD1cIlwiO3N3aXRjaChiKXtjYXNlIDE6ZD1jP1wiZmlyc3RcIjpcIkZpcnN0XCI7YnJlYWs7Y2FzZSAyOmQ9Yz9cInNlY29uZFwiOlwiU2Vjb25kXCI7YnJlYWs7Y2FzZSAzOmQ9Yz9cInRoaXJkXCI6XCJUaGlyZFwiO2JyZWFrO2Nhc2UgNDpkPWM/XCJmb3VydGhcIjpcIkZvdXJ0aFwiO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoXCJlcnJvclByZWZpeCBjYWxsZWQgd2l0aCBhcmd1bWVudE51bWJlciA+IDQuICBOZWVkIHRvIHVwZGF0ZSBpdD9cIik7fXJldHVybiBhPWErXCIgZmFpbGVkOiBcIisoZCtcIiBhcmd1bWVudCBcIil9XG5mdW5jdGlvbiBBKGEsYixjLGQpe2lmKCghZHx8bihjKSkmJiFoYShjKSl0aHJvdyBFcnJvcih5KGEsYixkKStcIm11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cIik7fWZ1bmN0aW9uIGViKGEsYixjKXtpZihuKGMpJiYoIWlhKGMpfHxudWxsPT09YykpdGhyb3cgRXJyb3IoeShhLGIsITApK1wibXVzdCBiZSBhIHZhbGlkIGNvbnRleHQgb2JqZWN0LlwiKTt9O2Z1bmN0aW9uIGZiKGEpe3ZhciBiPVtdO2RiKGEsZnVuY3Rpb24oYSxkKXtlYShkKT9KYShkLGZ1bmN0aW9uKGQpe2IucHVzaChlbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGQpKX0pOmIucHVzaChlbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGQpKX0pO3JldHVybiBiLmxlbmd0aD9cIiZcIitiLmpvaW4oXCImXCIpOlwiXCJ9O3ZhciBnYj1maXJlYmFzZS5Qcm9taXNlO2Z1bmN0aW9uIGhiKCl7dmFyIGE9dGhpczt0aGlzLnJlamVjdD10aGlzLnJlc29sdmU9bnVsbDt0aGlzLnJhPW5ldyBnYihmdW5jdGlvbihiLGMpe2EucmVzb2x2ZT1iO2EucmVqZWN0PWN9KX1mdW5jdGlvbiBpYihhLGIpe3JldHVybiBmdW5jdGlvbihjLGQpe2M/YS5yZWplY3QoYyk6YS5yZXNvbHZlKGQpO2hhKGIpJiYoamIoYS5yYSksMT09PWIubGVuZ3RoP2IoYyk6YihjLGQpKX19ZnVuY3Rpb24gamIoYSl7YS50aGVuKHZvaWQgMCxiYSl9O2Z1bmN0aW9uIGtiKGEsYil7aWYoIWEpdGhyb3cgbGIoYik7fWZ1bmN0aW9uIGxiKGEpe3JldHVybiBFcnJvcihcIkZpcmViYXNlIERhdGFiYXNlIChcIitmaXJlYmFzZS5TREtfVkVSU0lPTitcIikgSU5URVJOQUwgQVNTRVJUIEZBSUxFRDogXCIrYSl9O2Z1bmN0aW9uIG1iKGEpe2Zvcih2YXIgYj1bXSxjPTAsZD0wO2Q8YS5sZW5ndGg7ZCsrKXt2YXIgZT1hLmNoYXJDb2RlQXQoZCk7NTUyOTY8PWUmJjU2MzE5Pj1lJiYoZS09NTUyOTYsZCsrLGtiKGQ8YS5sZW5ndGgsXCJTdXJyb2dhdGUgcGFpciBtaXNzaW5nIHRyYWlsIHN1cnJvZ2F0ZS5cIiksZT02NTUzNisoZTw8MTApKyhhLmNoYXJDb2RlQXQoZCktNTYzMjApKTsxMjg+ZT9iW2MrK109ZTooMjA0OD5lP2JbYysrXT1lPj42fDE5MjooNjU1MzY+ZT9iW2MrK109ZT4+MTJ8MjI0OihiW2MrK109ZT4+MTh8MjQwLGJbYysrXT1lPj4xMiY2M3wxMjgpLGJbYysrXT1lPj42JjYzfDEyOCksYltjKytdPWUmNjN8MTI4KX1yZXR1cm4gYn1mdW5jdGlvbiBuYihhKXtmb3IodmFyIGI9MCxjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWEuY2hhckNvZGVBdChjKTsxMjg+ZD9iKys6MjA0OD5kP2IrPTI6NTUyOTY8PWQmJjU2MzE5Pj1kPyhiKz00LGMrKyk6Yis9M31yZXR1cm4gYn07ZnVuY3Rpb24gb2IoYSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBKU09OJiZuKEpTT04ucGFyc2UpP0pTT04ucGFyc2UoYSk6QWEoYSl9ZnVuY3Rpb24gQihhKXtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIEpTT04mJm4oSlNPTi5zdHJpbmdpZnkpKWE9SlNPTi5zdHJpbmdpZnkoYSk7ZWxzZXt2YXIgYj1bXTtDYShuZXcgQmEsYSxiKTthPWIuam9pbihcIlwiKX1yZXR1cm4gYX07ZnVuY3Rpb24gcGIoYSxiKXt0aGlzLmNvbW1pdHRlZD1hO3RoaXMuc25hcHNob3Q9Yn07ZnVuY3Rpb24gcWIoKXtyZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIHdpbmRvdyYmISEod2luZG93LmNvcmRvdmF8fHdpbmRvdy5waG9uZWdhcHx8d2luZG93LlBob25lR2FwKSYmL2lvc3xpcGhvbmV8aXBvZHxpcGFkfGFuZHJvaWR8YmxhY2tiZXJyeXxpZW1vYmlsZS9pLnRlc3QoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBuYXZpZ2F0b3ImJlwic3RyaW5nXCI9PT10eXBlb2YgbmF2aWdhdG9yLnVzZXJBZ2VudD9uYXZpZ2F0b3IudXNlckFnZW50OlwiXCIpfTtmdW5jdGlvbiByYihhKXt0aGlzLnJlPWE7dGhpcy5CZD1bXTt0aGlzLlFiPTA7dGhpcy5YZD0tMTt0aGlzLkZiPW51bGx9ZnVuY3Rpb24gc2IoYSxiLGMpe2EuWGQ9YjthLkZiPWM7YS5YZDxhLlFiJiYoYS5GYigpLGEuRmI9bnVsbCl9ZnVuY3Rpb24gdGIoYSxiLGMpe2ZvcihhLkJkW2JdPWM7YS5CZFthLlFiXTspe3ZhciBkPWEuQmRbYS5RYl07ZGVsZXRlIGEuQmRbYS5RYl07Zm9yKHZhciBlPTA7ZTxkLmxlbmd0aDsrK2UpaWYoZFtlXSl7dmFyIGY9YTt1YihmdW5jdGlvbigpe2YucmUoZFtlXSl9KX1pZihhLlFiPT09YS5YZCl7YS5GYiYmKGNsZWFyVGltZW91dChhLkZiKSxhLkZiKCksYS5GYj1udWxsKTticmVha31hLlFiKyt9fTtmdW5jdGlvbiB2Yigpe3RoaXMucGM9e319dmIucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGIpe251bGw9PWI/ZGVsZXRlIHRoaXMucGNbYV06dGhpcy5wY1thXT1ifTt2Yi5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBjYih0aGlzLnBjLGEpP3RoaXMucGNbYV06bnVsbH07dmIucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbihhKXtkZWxldGUgdGhpcy5wY1thXX07dmIucHJvdG90eXBlLlplPSEwO2Z1bmN0aW9uIHdiKGEpe3RoaXMudWM9YTt0aGlzLkNkPVwiZmlyZWJhc2U6XCJ9Zz13Yi5wcm90b3R5cGU7Zy5zZXQ9ZnVuY3Rpb24oYSxiKXtudWxsPT1iP3RoaXMudWMucmVtb3ZlSXRlbSh0aGlzLkNkK2EpOnRoaXMudWMuc2V0SXRlbSh0aGlzLkNkK2EsQihiKSl9O2cuZ2V0PWZ1bmN0aW9uKGEpe2E9dGhpcy51Yy5nZXRJdGVtKHRoaXMuQ2QrYSk7cmV0dXJuIG51bGw9PWE/bnVsbDpvYihhKX07Zy5yZW1vdmU9ZnVuY3Rpb24oYSl7dGhpcy51Yy5yZW1vdmVJdGVtKHRoaXMuQ2QrYSl9O2cuWmU9ITE7Zy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnVjLnRvU3RyaW5nKCl9O2Z1bmN0aW9uIHhiKGEpe3RyeXtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIHdpbmRvdyYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3aW5kb3dbYV0pe3ZhciBiPXdpbmRvd1thXTtiLnNldEl0ZW0oXCJmaXJlYmFzZTpzZW50aW5lbFwiLFwiY2FjaGVcIik7Yi5yZW1vdmVJdGVtKFwiZmlyZWJhc2U6c2VudGluZWxcIik7cmV0dXJuIG5ldyB3YihiKX19Y2F0Y2goYyl7fXJldHVybiBuZXcgdmJ9dmFyIHliPXhiKFwibG9jYWxTdG9yYWdlXCIpLHpiPXhiKFwic2Vzc2lvblN0b3JhZ2VcIik7ZnVuY3Rpb24gQWIoYSxiLGMpe3RoaXMudHlwZT1CYjt0aGlzLnNvdXJjZT1hO3RoaXMucGF0aD1iO3RoaXMuR2E9Y31BYi5wcm90b3R5cGUuTWM9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucGF0aC5lKCk/bmV3IEFiKHRoaXMuc291cmNlLEMsdGhpcy5HYS5RKGEpKTpuZXcgQWIodGhpcy5zb3VyY2UsRCh0aGlzLnBhdGgpLHRoaXMuR2EpfTtBYi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIk9wZXJhdGlvbihcIit0aGlzLnBhdGgrXCI6IFwiK3RoaXMuc291cmNlLnRvU3RyaW5nKCkrXCIgb3ZlcndyaXRlOiBcIit0aGlzLkdhLnRvU3RyaW5nKCkrXCIpXCJ9O2Z1bmN0aW9uIENiKGEsYil7dGhpcy50eXBlPURiO3RoaXMuc291cmNlPWE7dGhpcy5wYXRoPWJ9Q2IucHJvdG90eXBlLk1jPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGF0aC5lKCk/bmV3IENiKHRoaXMuc291cmNlLEMpOm5ldyBDYih0aGlzLnNvdXJjZSxEKHRoaXMucGF0aCkpfTtDYi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIk9wZXJhdGlvbihcIit0aGlzLnBhdGgrXCI6IFwiK3RoaXMuc291cmNlLnRvU3RyaW5nKCkrXCIgbGlzdGVuX2NvbXBsZXRlKVwifTtmdW5jdGlvbiBFYihhKXt0aGlzLm9jPWF9RWIucHJvdG90eXBlLmdldFRva2VuPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9jLklOVEVSTkFMLmdldFRva2VuKGEpLnRoZW4obnVsbCxmdW5jdGlvbihhKXtyZXR1cm4gYSYmXCJhdXRoL3Rva2VuLW5vdC1pbml0aWFsaXplZFwiPT09YS5jb2RlPyhFKFwiR290IGF1dGgvdG9rZW4tbm90LWluaXRpYWxpemVkIGVycm9yLiAgVHJlYXRpbmcgYXMgbnVsbCB0b2tlbi5cIiksbnVsbCk6UHJvbWlzZS5yZWplY3QoYSl9KX07ZnVuY3Rpb24gRmIoYSxiKXthLm9jLklOVEVSTkFMLmFkZEF1dGhUb2tlbkxpc3RlbmVyKGIpfTtmdW5jdGlvbiBHYigpe3RoaXMuSmQ9R31HYi5wcm90b3R5cGUuaj1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5KZC5QKGEpfTtHYi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5KZC50b1N0cmluZygpfTtmdW5jdGlvbiBIYihhLGIsYyxkLGUpe3RoaXMuaG9zdD1hLnRvTG93ZXJDYXNlKCk7dGhpcy5kb21haW49dGhpcy5ob3N0LnN1YnN0cih0aGlzLmhvc3QuaW5kZXhPZihcIi5cIikrMSk7dGhpcy5TYz1iO3RoaXMubmU9Yzt0aGlzLnFnPWQ7dGhpcy5nZj1lfHxcIlwiO3RoaXMuJGE9eWIuZ2V0KFwiaG9zdDpcIithKXx8dGhpcy5ob3N0fWZ1bmN0aW9uIEliKGEsYil7YiE9PWEuJGEmJihhLiRhPWIsXCJzLVwiPT09YS4kYS5zdWJzdHIoMCwyKSYmeWIuc2V0KFwiaG9zdDpcIithLmhvc3QsYS4kYSkpfVxuZnVuY3Rpb24gSmIoYSxiLGMpe0goXCJzdHJpbmdcIj09PXR5cGVvZiBiLFwidHlwZW9mIHR5cGUgbXVzdCA9PSBzdHJpbmdcIik7SChcIm9iamVjdFwiPT09dHlwZW9mIGMsXCJ0eXBlb2YgcGFyYW1zIG11c3QgPT0gb2JqZWN0XCIpO2lmKFwid2Vic29ja2V0XCI9PT1iKWI9KGEuU2M/XCJ3c3M6Ly9cIjpcIndzOi8vXCIpK2EuJGErXCIvLndzP1wiO2Vsc2UgaWYoXCJsb25nX3BvbGxpbmdcIj09PWIpYj0oYS5TYz9cImh0dHBzOi8vXCI6XCJodHRwOi8vXCIpK2EuJGErXCIvLmxwP1wiO2Vsc2UgdGhyb3cgRXJyb3IoXCJVbmtub3duIGNvbm5lY3Rpb24gdHlwZTogXCIrYik7YS5ob3N0IT09YS4kYSYmKGMubnM9YS5uZSk7dmFyIGQ9W107cihjLGZ1bmN0aW9uKGEsYil7ZC5wdXNoKGIrXCI9XCIrYSl9KTtyZXR1cm4gYitkLmpvaW4oXCImXCIpfVxuSGIucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7dmFyIGE9KHRoaXMuU2M/XCJodHRwczovL1wiOlwiaHR0cDovL1wiKSt0aGlzLmhvc3Q7dGhpcy5nZiYmKGErPVwiPFwiK3RoaXMuZ2YrXCI+XCIpO3JldHVybiBhfTtmdW5jdGlvbiBLYigpe3RoaXMudGM9e319ZnVuY3Rpb24gTGIoYSxiLGMpe24oYyl8fChjPTEpO2NiKGEudGMsYil8fChhLnRjW2JdPTApO2EudGNbYl0rPWN9S2IucHJvdG90eXBlLmdldD1mdW5jdGlvbigpe3JldHVybiB6YSh0aGlzLnRjKX07ZnVuY3Rpb24gTWIoYSl7dGhpcy5FZj1hO3RoaXMucmQ9bnVsbH1NYi5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5FZi5nZXQoKSxiPXphKGEpO2lmKHRoaXMucmQpZm9yKHZhciBjIGluIHRoaXMucmQpYltjXS09dGhpcy5yZFtjXTt0aGlzLnJkPWE7cmV0dXJuIGJ9O2Z1bmN0aW9uIE5iKCl7dGhpcy52Yj1bXX1mdW5jdGlvbiBPYihhLGIpe2Zvcih2YXIgYz1udWxsLGQ9MDtkPGIubGVuZ3RoO2QrKyl7dmFyIGU9YltkXSxmPWUuWWIoKTtudWxsPT09Y3x8Zi5aKGMuWWIoKSl8fChhLnZiLnB1c2goYyksYz1udWxsKTtudWxsPT09YyYmKGM9bmV3IFBiKGYpKTtjLmFkZChlKX1jJiZhLnZiLnB1c2goYyl9ZnVuY3Rpb24gUWIoYSxiLGMpe09iKGEsYyk7UmIoYSxmdW5jdGlvbihhKXtyZXR1cm4gYS5aKGIpfSl9ZnVuY3Rpb24gU2IoYSxiLGMpe09iKGEsYyk7UmIoYSxmdW5jdGlvbihhKXtyZXR1cm4gYS5jb250YWlucyhiKXx8Yi5jb250YWlucyhhKX0pfVxuZnVuY3Rpb24gUmIoYSxiKXtmb3IodmFyIGM9ITAsZD0wO2Q8YS52Yi5sZW5ndGg7ZCsrKXt2YXIgZT1hLnZiW2RdO2lmKGUpaWYoZT1lLlliKCksYihlKSl7Zm9yKHZhciBlPWEudmJbZF0sZj0wO2Y8ZS5qZC5sZW5ndGg7ZisrKXt2YXIgaD1lLmpkW2ZdO2lmKG51bGwhPT1oKXtlLmpkW2ZdPW51bGw7dmFyIGs9aC5UYigpO1RiJiZFKFwiZXZlbnQ6IFwiK2gudG9TdHJpbmcoKSk7dWIoayl9fWEudmJbZF09bnVsbH1lbHNlIGM9ITF9YyYmKGEudmI9W10pfWZ1bmN0aW9uIFBiKGEpe3RoaXMucWE9YTt0aGlzLmpkPVtdfVBiLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSl7dGhpcy5qZC5wdXNoKGEpfTtQYi5wcm90b3R5cGUuWWI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5xYX07ZnVuY3Rpb24gVWIoYSxiLGMsZCl7dGhpcy4kZD1iO3RoaXMuTWQ9Yzt0aGlzLkRkPWQ7dGhpcy5oZD1hfVViLnByb3RvdHlwZS5ZYj1mdW5jdGlvbigpe3ZhciBhPXRoaXMuTWQud2IoKTtyZXR1cm5cInZhbHVlXCI9PT10aGlzLmhkP2EucGF0aDphLmdldFBhcmVudCgpLnBhdGh9O1ViLnByb3RvdHlwZS5lZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmhkfTtVYi5wcm90b3R5cGUuVGI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5UYih0aGlzKX07VWIucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuWWIoKS50b1N0cmluZygpK1wiOlwiK3RoaXMuaGQrXCI6XCIrQih0aGlzLk1kLlFlKCkpfTtmdW5jdGlvbiBWYihhLGIsYyl7dGhpcy4kZD1hO3RoaXMuZXJyb3I9Yjt0aGlzLnBhdGg9Y31WYi5wcm90b3R5cGUuWWI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXRofTtWYi5wcm90b3R5cGUuZWU9ZnVuY3Rpb24oKXtyZXR1cm5cImNhbmNlbFwifTtcblZiLnByb3RvdHlwZS5UYj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLlRiKHRoaXMpfTtWYi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXRoLnRvU3RyaW5nKCkrXCI6Y2FuY2VsXCJ9O2Z1bmN0aW9uIFdiKCl7fVdiLnByb3RvdHlwZS5UZT1mdW5jdGlvbigpe3JldHVybiBudWxsfTtXYi5wcm90b3R5cGUuZGU9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH07dmFyIFhiPW5ldyBXYjtmdW5jdGlvbiBZYihhLGIsYyl7dGhpcy54Zj1hO3RoaXMuS2E9Yjt0aGlzLnlkPWN9WWIucHJvdG90eXBlLlRlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuS2EuTjtpZihaYihiLGEpKXJldHVybiBiLmooKS5RKGEpO2I9bnVsbCE9dGhpcy55ZD9uZXcgJGIodGhpcy55ZCwhMCwhMSk6dGhpcy5LYS53KCk7cmV0dXJuIHRoaXMueGYucWMoYSxiKX07WWIucHJvdG90eXBlLmRlPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1udWxsIT10aGlzLnlkP3RoaXMueWQ6YWModGhpcy5LYSk7YT10aGlzLnhmLldkKGQsYiwxLGMsYSk7cmV0dXJuIDA9PT1hLmxlbmd0aD9udWxsOmFbMF19O2Z1bmN0aW9uIEkoYSxiLGMsZCl7dGhpcy50eXBlPWE7dGhpcy5KYT1iO3RoaXMuWGE9Yzt0aGlzLm9lPWQ7dGhpcy5EZD12b2lkIDB9ZnVuY3Rpb24gYmMoYSl7cmV0dXJuIG5ldyBJKGNjLGEpfXZhciBjYz1cInZhbHVlXCI7ZnVuY3Rpb24gJGIoYSxiLGMpe3RoaXMuQT1hO3RoaXMuZGE9Yjt0aGlzLlNiPWN9ZnVuY3Rpb24gZGMoYSl7cmV0dXJuIGEuZGF9ZnVuY3Rpb24gZWMoYSl7cmV0dXJuIGEuU2J9ZnVuY3Rpb24gZmMoYSxiKXtyZXR1cm4gYi5lKCk/YS5kYSYmIWEuU2I6WmIoYSxKKGIpKX1mdW5jdGlvbiBaYihhLGIpe3JldHVybiBhLmRhJiYhYS5TYnx8YS5BLkRhKGIpfSRiLnByb3RvdHlwZS5qPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuQX07ZnVuY3Rpb24gZ2MoYSxiKXtyZXR1cm4gaGMoYS5uYW1lLGIubmFtZSl9ZnVuY3Rpb24gaWMoYSxiKXtyZXR1cm4gaGMoYSxiKX07ZnVuY3Rpb24gSyhhLGIpe3RoaXMubmFtZT1hO3RoaXMuUj1ifWZ1bmN0aW9uIGpjKGEsYil7cmV0dXJuIG5ldyBLKGEsYil9O2Z1bmN0aW9uIGtjKGEsYil7cmV0dXJuIGEmJlwib2JqZWN0XCI9PT10eXBlb2YgYT8oSChcIi5zdlwiaW4gYSxcIlVuZXhwZWN0ZWQgbGVhZiBub2RlIG9yIHByaW9yaXR5IGNvbnRlbnRzXCIpLGJbYVtcIi5zdlwiXV0pOmF9ZnVuY3Rpb24gbGMoYSxiKXt2YXIgYz1uZXcgbWM7bmMoYSxuZXcgTChcIlwiKSxmdW5jdGlvbihhLGUpe29jKGMsYSxwYyhlLGIpKX0pO3JldHVybiBjfWZ1bmN0aW9uIHBjKGEsYil7dmFyIGM9YS5DKCkuSCgpLGM9a2MoYyxiKSxkO2lmKGEuSigpKXt2YXIgZT1rYyhhLkNhKCksYik7cmV0dXJuIGUhPT1hLkNhKCl8fGMhPT1hLkMoKS5IKCk/bmV3IHFjKGUsTShjKSk6YX1kPWE7YyE9PWEuQygpLkgoKSYmKGQ9ZC5mYShuZXcgcWMoYykpKTthLk8oTixmdW5jdGlvbihhLGMpe3ZhciBlPXBjKGMsYik7ZSE9PWMmJihkPWQuVChhLGUpKX0pO3JldHVybiBkfTt2YXIgcmM9ZnVuY3Rpb24oKXt2YXIgYT0xO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhKyt9fSgpLEg9a2Isc2M9bGI7XG5mdW5jdGlvbiB0YyhhKXt0cnl7dmFyIGI7YmIoKTtmb3IodmFyIGM9JGEsZD1bXSxlPTA7ZTxhLmxlbmd0aDspe3ZhciBmPWNbYS5jaGFyQXQoZSsrKV0saD1lPGEubGVuZ3RoP2NbYS5jaGFyQXQoZSldOjA7KytlO3ZhciBrPWU8YS5sZW5ndGg/Y1thLmNoYXJBdChlKV06NjQ7KytlO3ZhciBsPWU8YS5sZW5ndGg/Y1thLmNoYXJBdChlKV06NjQ7KytlO2lmKG51bGw9PWZ8fG51bGw9PWh8fG51bGw9PWt8fG51bGw9PWwpdGhyb3cgRXJyb3IoKTtkLnB1c2goZjw8MnxoPj40KTs2NCE9ayYmKGQucHVzaChoPDw0JjI0MHxrPj4yKSw2NCE9bCYmZC5wdXNoKGs8PDYmMTkyfGwpKX1pZig4MTkyPmQubGVuZ3RoKWI9U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLGQpO2Vsc2V7YT1cIlwiO2ZvcihjPTA7YzxkLmxlbmd0aDtjKz04MTkyKWErPVN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxSYShkLGMsYys4MTkyKSk7Yj1hfXJldHVybiBifWNhdGNoKG0pe0UoXCJiYXNlNjREZWNvZGUgZmFpbGVkOiBcIixcbm0pfXJldHVybiBudWxsfWZ1bmN0aW9uIHVjKGEpe3ZhciBiPW1iKGEpO2E9bmV3IG5hO2EudXBkYXRlKGIpO3ZhciBiPVtdLGM9OCphLlBkOzU2PmEuJGI/YS51cGRhdGUoYS56ZCw1Ni1hLiRiKTphLnVwZGF0ZShhLnpkLGEuV2EtKGEuJGItNTYpKTtmb3IodmFyIGQ9YS5XYS0xOzU2PD1kO2QtLSlhLlZkW2RdPWMmMjU1LGMvPTI1NjtvYShhLGEuVmQpO2ZvcihkPWM9MDs1PmQ7ZCsrKWZvcih2YXIgZT0yNDswPD1lO2UtPTgpYltjXT1hLk1bZF0+PmUmMjU1LCsrYztyZXR1cm4gYWIoYil9ZnVuY3Rpb24gdmMoYSl7Zm9yKHZhciBiPVwiXCIsYz0wO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYj1mYShhcmd1bWVudHNbY10pP2IrdmMuYXBwbHkobnVsbCxhcmd1bWVudHNbY10pOlwib2JqZWN0XCI9PT10eXBlb2YgYXJndW1lbnRzW2NdP2IrQihhcmd1bWVudHNbY10pOmIrYXJndW1lbnRzW2NdLGIrPVwiIFwiO3JldHVybiBifXZhciBUYj1udWxsLHdjPSEwO1xuZnVuY3Rpb24geGMoYSxiKXtrYighYnx8ITA9PT1hfHwhMT09PWEsXCJDYW4ndCB0dXJuIG9uIGN1c3RvbSBsb2dnZXJzIHBlcnNpc3RlbnRseS5cIik7ITA9PT1hPyhcInVuZGVmaW5lZFwiIT09dHlwZW9mIGNvbnNvbGUmJihcImZ1bmN0aW9uXCI9PT10eXBlb2YgY29uc29sZS5sb2c/VGI9cShjb25zb2xlLmxvZyxjb25zb2xlKTpcIm9iamVjdFwiPT09dHlwZW9mIGNvbnNvbGUubG9nJiYoVGI9ZnVuY3Rpb24oYSl7Y29uc29sZS5sb2coYSl9KSksYiYmemIuc2V0KFwibG9nZ2luZ19lbmFibGVkXCIsITApKTpoYShhKT9UYj1hOihUYj1udWxsLHpiLnJlbW92ZShcImxvZ2dpbmdfZW5hYmxlZFwiKSl9ZnVuY3Rpb24gRShhKXshMD09PXdjJiYod2M9ITEsbnVsbD09PVRiJiYhMD09PXpiLmdldChcImxvZ2dpbmdfZW5hYmxlZFwiKSYmeGMoITApKTtpZihUYil7dmFyIGI9dmMuYXBwbHkobnVsbCxhcmd1bWVudHMpO1RiKGIpfX1cbmZ1bmN0aW9uIHljKGEpe3JldHVybiBmdW5jdGlvbigpe0UoYSxhcmd1bWVudHMpfX1mdW5jdGlvbiB6YyhhKXtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGNvbnNvbGUpe3ZhciBiPVwiRklSRUJBU0UgSU5URVJOQUwgRVJST1I6IFwiK3ZjLmFwcGx5KG51bGwsYXJndW1lbnRzKTtcInVuZGVmaW5lZFwiIT09dHlwZW9mIGNvbnNvbGUuZXJyb3I/Y29uc29sZS5lcnJvcihiKTpjb25zb2xlLmxvZyhiKX19ZnVuY3Rpb24gQWMoYSl7dmFyIGI9dmMuYXBwbHkobnVsbCxhcmd1bWVudHMpO3Rocm93IEVycm9yKFwiRklSRUJBU0UgRkFUQUwgRVJST1I6IFwiK2IpO31mdW5jdGlvbiBPKGEpe2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSl7dmFyIGI9XCJGSVJFQkFTRSBXQVJOSU5HOiBcIit2Yy5hcHBseShudWxsLGFyZ3VtZW50cyk7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlLndhcm4/Y29uc29sZS53YXJuKGIpOmNvbnNvbGUubG9nKGIpfX1cbmZ1bmN0aW9uIEJjKGEpe3ZhciBiLGMsZCxlLGYsaD1hO2Y9Yz1hPWI9XCJcIjtkPSEwO2U9XCJodHRwc1wiO2lmKHAoaCkpe3ZhciBrPWguaW5kZXhPZihcIi8vXCIpOzA8PWsmJihlPWguc3Vic3RyaW5nKDAsay0xKSxoPWguc3Vic3RyaW5nKGsrMikpO2s9aC5pbmRleE9mKFwiL1wiKTstMT09PWsmJihrPWgubGVuZ3RoKTtiPWguc3Vic3RyaW5nKDAsayk7Zj1cIlwiO2g9aC5zdWJzdHJpbmcoaykuc3BsaXQoXCIvXCIpO2ZvcihrPTA7azxoLmxlbmd0aDtrKyspaWYoMDxoW2tdLmxlbmd0aCl7dmFyIGw9aFtrXTt0cnl7bD1kZWNvZGVVUklDb21wb25lbnQobC5yZXBsYWNlKC9cXCsvZyxcIiBcIikpfWNhdGNoKG0pe31mKz1cIi9cIitsfWg9Yi5zcGxpdChcIi5cIik7Mz09PWgubGVuZ3RoPyhhPWhbMV0sYz1oWzBdLnRvTG93ZXJDYXNlKCkpOjI9PT1oLmxlbmd0aCYmKGE9aFswXSk7az1iLmluZGV4T2YoXCI6XCIpOzA8PWsmJihkPVwiaHR0cHNcIj09PWV8fFwid3NzXCI9PT1lKX1cImZpcmViYXNlXCI9PT1hJiZBYyhiK1wiIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQuIFBsZWFzZSB1c2UgPFlPVVIgRklSRUJBU0U+LmZpcmViYXNlaW8uY29tIGluc3RlYWRcIik7XG5jJiZcInVuZGVmaW5lZFwiIT1jfHxBYyhcIkNhbm5vdCBwYXJzZSBGaXJlYmFzZSB1cmwuIFBsZWFzZSB1c2UgaHR0cHM6Ly88WU9VUiBGSVJFQkFTRT4uZmlyZWJhc2Vpby5jb21cIik7ZHx8XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy5sb2NhdGlvbiYmd2luZG93LmxvY2F0aW9uLnByb3RvY29sJiYtMSE9PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cHM6XCIpJiZPKFwiSW5zZWN1cmUgRmlyZWJhc2UgYWNjZXNzIGZyb20gYSBzZWN1cmUgcGFnZS4gUGxlYXNlIHVzZSBodHRwcyBpbiBjYWxscyB0byBuZXcgRmlyZWJhc2UoKS5cIik7cmV0dXJue2pjOm5ldyBIYihiLGQsYyxcIndzXCI9PT1lfHxcIndzc1wiPT09ZSkscGF0aDpuZXcgTChmKX19ZnVuY3Rpb24gQ2MoYSl7cmV0dXJuIGdhKGEpJiYoYSE9YXx8YT09TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZfHxhPT1OdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkpfVxuZnVuY3Rpb24gRGMoYSl7aWYoXCJjb21wbGV0ZVwiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZSlhKCk7ZWxzZXt2YXIgYj0hMSxjPWZ1bmN0aW9uKCl7ZG9jdW1lbnQuYm9keT9ifHwoYj0hMCxhKCkpOnNldFRpbWVvdXQoYyxNYXRoLmZsb29yKDEwKSl9O2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/KGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsYywhMSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsYywhMSkpOmRvY3VtZW50LmF0dGFjaEV2ZW50JiYoZG9jdW1lbnQuYXR0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbigpe1wiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUmJmMoKX0pLHdpbmRvdy5hdHRhY2hFdmVudChcIm9ubG9hZFwiLGMpKX19XG5mdW5jdGlvbiBoYyhhLGIpe2lmKGE9PT1iKXJldHVybiAwO2lmKFwiW01JTl9OQU1FXVwiPT09YXx8XCJbTUFYX05BTUVdXCI9PT1iKXJldHVybi0xO2lmKFwiW01JTl9OQU1FXVwiPT09Ynx8XCJbTUFYX05BTUVdXCI9PT1hKXJldHVybiAxO3ZhciBjPUVjKGEpLGQ9RWMoYik7cmV0dXJuIG51bGwhPT1jP251bGwhPT1kPzA9PWMtZD9hLmxlbmd0aC1iLmxlbmd0aDpjLWQ6LTE6bnVsbCE9PWQ/MTphPGI/LTE6MX1mdW5jdGlvbiBGYyhhLGIpe2lmKGImJmEgaW4gYilyZXR1cm4gYlthXTt0aHJvdyBFcnJvcihcIk1pc3NpbmcgcmVxdWlyZWQga2V5IChcIithK1wiKSBpbiBvYmplY3Q6IFwiK0IoYikpO31cbmZ1bmN0aW9uIEdjKGEpe2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYXx8bnVsbD09PWEpcmV0dXJuIEIoYSk7dmFyIGI9W10sYztmb3IoYyBpbiBhKWIucHVzaChjKTtiLnNvcnQoKTtjPVwie1wiO2Zvcih2YXIgZD0wO2Q8Yi5sZW5ndGg7ZCsrKTAhPT1kJiYoYys9XCIsXCIpLGMrPUIoYltkXSksYys9XCI6XCIsYys9R2MoYVtiW2RdXSk7cmV0dXJuIGMrXCJ9XCJ9ZnVuY3Rpb24gSGMoYSxiKXtpZihhLmxlbmd0aDw9YilyZXR1cm5bYV07Zm9yKHZhciBjPVtdLGQ9MDtkPGEubGVuZ3RoO2QrPWIpZCtiPmE/Yy5wdXNoKGEuc3Vic3RyaW5nKGQsYS5sZW5ndGgpKTpjLnB1c2goYS5zdWJzdHJpbmcoZCxkK2IpKTtyZXR1cm4gY31mdW5jdGlvbiBJYyhhLGIpe2lmKGVhKGEpKWZvcih2YXIgYz0wO2M8YS5sZW5ndGg7KytjKWIoYyxhW2NdKTtlbHNlIHIoYSxiKX1cbmZ1bmN0aW9uIEpjKGEpe0goIUNjKGEpLFwiSW52YWxpZCBKU09OIG51bWJlclwiKTt2YXIgYixjLGQsZTswPT09YT8oZD1jPTAsYj0tSW5maW5pdHk9PT0xL2E/MTowKTooYj0wPmEsYT1NYXRoLmFicyhhKSxhPj1NYXRoLnBvdygyLC0xMDIyKT8oZD1NYXRoLm1pbihNYXRoLmZsb29yKE1hdGgubG9nKGEpL01hdGguTE4yKSwxMDIzKSxjPWQrMTAyMyxkPU1hdGgucm91bmQoYSpNYXRoLnBvdygyLDUyLWQpLU1hdGgucG93KDIsNTIpKSk6KGM9MCxkPU1hdGgucm91bmQoYS9NYXRoLnBvdygyLC0xMDc0KSkpKTtlPVtdO2ZvcihhPTUyO2E7LS1hKWUucHVzaChkJTI/MTowKSxkPU1hdGguZmxvb3IoZC8yKTtmb3IoYT0xMTthOy0tYSllLnB1c2goYyUyPzE6MCksYz1NYXRoLmZsb29yKGMvMik7ZS5wdXNoKGI/MTowKTtlLnJldmVyc2UoKTtiPWUuam9pbihcIlwiKTtjPVwiXCI7Zm9yKGE9MDs2ND5hO2ErPTgpZD1wYXJzZUludChiLnN1YnN0cihhLDgpLDIpLnRvU3RyaW5nKDE2KSwxPT09ZC5sZW5ndGgmJlxuKGQ9XCIwXCIrZCksYys9ZDtyZXR1cm4gYy50b0xvd2VyQ2FzZSgpfXZhciBLYz0vXi0/XFxkezEsMTB9JC87ZnVuY3Rpb24gRWMoYSl7cmV0dXJuIEtjLnRlc3QoYSkmJihhPU51bWJlcihhKSwtMjE0NzQ4MzY0ODw9YSYmMjE0NzQ4MzY0Nz49YSk/YTpudWxsfWZ1bmN0aW9uIHViKGEpe3RyeXthKCl9Y2F0Y2goYil7c2V0VGltZW91dChmdW5jdGlvbigpe08oXCJFeGNlcHRpb24gd2FzIHRocm93biBieSB1c2VyIGNhbGxiYWNrLlwiLGIuc3RhY2t8fFwiXCIpO3Rocm93IGI7fSxNYXRoLmZsb29yKDApKX19ZnVuY3Rpb24gTGMoYSxiLGMpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2dldDpjfSl9ZnVuY3Rpb24gTWMoYSxiKXt2YXIgYz1zZXRUaW1lb3V0KGEsYik7XCJvYmplY3RcIj09PXR5cGVvZiBjJiZjLnVucmVmJiZjLnVucmVmKCk7cmV0dXJuIGN9O2Z1bmN0aW9uIE5jKGEpe3ZhciBiPXt9LGM9e30sZD17fSxlPVwiXCI7dHJ5e3ZhciBmPWEuc3BsaXQoXCIuXCIpLGI9b2IodGMoZlswXSl8fFwiXCIpLGM9b2IodGMoZlsxXSl8fFwiXCIpLGU9ZlsyXSxkPWMuZHx8e307ZGVsZXRlIGMuZH1jYXRjaChoKXt9cmV0dXJue3RnOmIsSWU6YyxkYXRhOmQsbWc6ZX19ZnVuY3Rpb24gT2MoYSl7YT1OYyhhKTt2YXIgYj1hLkllO3JldHVybiEhYS5tZyYmISFiJiZcIm9iamVjdFwiPT09dHlwZW9mIGImJmIuaGFzT3duUHJvcGVydHkoXCJpYXRcIil9ZnVuY3Rpb24gUGMoYSl7YT1OYyhhKS5JZTtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJiEwPT09dyhhLFwiYWRtaW5cIil9O2Z1bmN0aW9uIFFjKGEsYixjKXt0aGlzLmY9eWMoXCJwOnJlc3Q6XCIpO3RoaXMuTD1hO3RoaXMuR2I9Yjt0aGlzLiRjPWM7dGhpcy4kPXt9fWZ1bmN0aW9uIFJjKGEsYil7aWYobihiKSlyZXR1cm5cInRhZyRcIitiO0goU2MoYS5tKSxcInNob3VsZCBoYXZlIGEgdGFnIGlmIGl0J3Mgbm90IGEgZGVmYXVsdCBxdWVyeS5cIik7cmV0dXJuIGEucGF0aC50b1N0cmluZygpfWc9UWMucHJvdG90eXBlO1xuZy4kZT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1hLnBhdGgudG9TdHJpbmcoKTt0aGlzLmYoXCJMaXN0ZW4gY2FsbGVkIGZvciBcIitlK1wiIFwiK2EuamEoKSk7dmFyIGY9UmMoYSxjKSxoPXt9O3RoaXMuJFtmXT1oO2E9VGMoYS5tKTt2YXIgaz10aGlzO1VjKHRoaXMsZStcIi5qc29uXCIsYSxmdW5jdGlvbihhLGIpe3ZhciB1PWI7NDA0PT09YSYmKGE9dT1udWxsKTtudWxsPT09YSYmay5HYihlLHUsITEsYyk7dyhrLiQsZik9PT1oJiZkKGE/NDAxPT1hP1wicGVybWlzc2lvbl9kZW5pZWRcIjpcInJlc3RfZXJyb3I6XCIrYTpcIm9rXCIsbnVsbCl9KX07Zy51Zj1mdW5jdGlvbihhLGIpe3ZhciBjPVJjKGEsYik7ZGVsZXRlIHRoaXMuJFtjXX07Zy5rZj1mdW5jdGlvbigpe307Zy5wZT1mdW5jdGlvbigpe307Zy5jZj1mdW5jdGlvbigpe307Zy54ZD1mdW5jdGlvbigpe307Zy5wdXQ9ZnVuY3Rpb24oKXt9O2cuYWY9ZnVuY3Rpb24oKXt9O2cud2U9ZnVuY3Rpb24oKXt9O1xuZnVuY3Rpb24gVWMoYSxiLGMsZCl7Yz1jfHx7fTtjLmZvcm1hdD1cImV4cG9ydFwiO2EuJGMuZ2V0VG9rZW4oITEpLnRoZW4oZnVuY3Rpb24oZSl7KGU9ZSYmZS5hY2Nlc3NUb2tlbikmJihjLmF1dGg9ZSk7dmFyIGY9KGEuTC5TYz9cImh0dHBzOi8vXCI6XCJodHRwOi8vXCIpK2EuTC5ob3N0K2IrXCI/XCIrZmIoYyk7YS5mKFwiU2VuZGluZyBSRVNUIHJlcXVlc3QgZm9yIFwiK2YpO3ZhciBoPW5ldyBYTUxIdHRwUmVxdWVzdDtoLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2lmKGQmJjQ9PT1oLnJlYWR5U3RhdGUpe2EuZihcIlJFU1QgUmVzcG9uc2UgZm9yIFwiK2YrXCIgcmVjZWl2ZWQuIHN0YXR1czpcIixoLnN0YXR1cyxcInJlc3BvbnNlOlwiLGgucmVzcG9uc2VUZXh0KTt2YXIgYj1udWxsO2lmKDIwMDw9aC5zdGF0dXMmJjMwMD5oLnN0YXR1cyl7dHJ5e2I9b2IoaC5yZXNwb25zZVRleHQpfWNhdGNoKGMpe08oXCJGYWlsZWQgdG8gcGFyc2UgSlNPTiByZXNwb25zZSBmb3IgXCIrZitcIjogXCIraC5yZXNwb25zZVRleHQpfWQobnVsbCxcbmIpfWVsc2UgNDAxIT09aC5zdGF0dXMmJjQwNCE9PWguc3RhdHVzJiZPKFwiR290IHVuc3VjY2Vzc2Z1bCBSRVNUIHJlc3BvbnNlIGZvciBcIitmK1wiIFN0YXR1czogXCIraC5zdGF0dXMpLGQoaC5zdGF0dXMpO2Q9bnVsbH19O2gub3BlbihcIkdFVFwiLGYsITApO2guc2VuZCgpfSl9O2Z1bmN0aW9uIFZjKGEsYixjKXt0aGlzLnR5cGU9V2M7dGhpcy5zb3VyY2U9YTt0aGlzLnBhdGg9Yjt0aGlzLmNoaWxkcmVuPWN9VmMucHJvdG90eXBlLk1jPWZ1bmN0aW9uKGEpe2lmKHRoaXMucGF0aC5lKCkpcmV0dXJuIGE9dGhpcy5jaGlsZHJlbi5zdWJ0cmVlKG5ldyBMKGEpKSxhLmUoKT9udWxsOmEudmFsdWU/bmV3IEFiKHRoaXMuc291cmNlLEMsYS52YWx1ZSk6bmV3IFZjKHRoaXMuc291cmNlLEMsYSk7SChKKHRoaXMucGF0aCk9PT1hLFwiQ2FuJ3QgZ2V0IGEgbWVyZ2UgZm9yIGEgY2hpbGQgbm90IG9uIHRoZSBwYXRoIG9mIHRoZSBvcGVyYXRpb25cIik7cmV0dXJuIG5ldyBWYyh0aGlzLnNvdXJjZSxEKHRoaXMucGF0aCksdGhpcy5jaGlsZHJlbil9O1ZjLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiT3BlcmF0aW9uKFwiK3RoaXMucGF0aCtcIjogXCIrdGhpcy5zb3VyY2UudG9TdHJpbmcoKStcIiBtZXJnZTogXCIrdGhpcy5jaGlsZHJlbi50b1N0cmluZygpK1wiKVwifTtmdW5jdGlvbiBYYyhhLGIpe3RoaXMucmY9e307dGhpcy5WYz1uZXcgTWIoYSk7dGhpcy52YT1iO3ZhciBjPTFFNCsyRTQqTWF0aC5yYW5kb20oKTtNYyhxKHRoaXMubGYsdGhpcyksTWF0aC5mbG9vcihjKSl9WGMucHJvdG90eXBlLmxmPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5WYy5nZXQoKSxiPXt9LGM9ITEsZDtmb3IoZCBpbiBhKTA8YVtkXSYmY2IodGhpcy5yZixkKSYmKGJbZF09YVtkXSxjPSEwKTtjJiZ0aGlzLnZhLndlKGIpO01jKHEodGhpcy5sZix0aGlzKSxNYXRoLmZsb29yKDZFNSpNYXRoLnJhbmRvbSgpKSl9O3ZhciBZYz17fSxaYz17fTtmdW5jdGlvbiAkYyhhKXthPWEudG9TdHJpbmcoKTtZY1thXXx8KFljW2FdPW5ldyBLYik7cmV0dXJuIFljW2FdfWZ1bmN0aW9uIGFkKGEsYil7dmFyIGM9YS50b1N0cmluZygpO1pjW2NdfHwoWmNbY109YigpKTtyZXR1cm4gWmNbY119O3ZhciBiZD1udWxsO1widW5kZWZpbmVkXCIhPT10eXBlb2YgTW96V2ViU29ja2V0P2JkPU1veldlYlNvY2tldDpcInVuZGVmaW5lZFwiIT09dHlwZW9mIFdlYlNvY2tldCYmKGJkPVdlYlNvY2tldCk7ZnVuY3Rpb24gY2QoYSxiLGMsZCl7dGhpcy5ZZD1hO3RoaXMuZj15Yyh0aGlzLllkKTt0aGlzLmZyYW1lcz10aGlzLnpjPW51bGw7dGhpcy5wYj10aGlzLnFiPXRoaXMuRGU9MDt0aGlzLlZhPSRjKGIpO2E9e3Y6XCI1XCJ9O1widW5kZWZpbmVkXCIhPT10eXBlb2YgbG9jYXRpb24mJmxvY2F0aW9uLmhyZWYmJi0xIT09bG9jYXRpb24uaHJlZi5pbmRleE9mKFwiZmlyZWJhc2Vpby5jb21cIikmJihhLnI9XCJmXCIpO2MmJihhLnM9Yyk7ZCYmKGEubHM9ZCk7dGhpcy5KZT1KYihiLFwid2Vic29ja2V0XCIsYSl9dmFyIGRkO1xuY2QucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24oYSxiKXt0aGlzLmliPWI7dGhpcy5YZj1hO3RoaXMuZihcIldlYnNvY2tldCBjb25uZWN0aW5nIHRvIFwiK3RoaXMuSmUpO3RoaXMud2M9ITE7eWIuc2V0KFwicHJldmlvdXNfd2Vic29ja2V0X2ZhaWx1cmVcIiwhMCk7dHJ5e3RoaXMuSWE9bmV3IGJkKHRoaXMuSmUpfWNhdGNoKGMpe3RoaXMuZihcIkVycm9yIGluc3RhbnRpYXRpbmcgV2ViU29ja2V0LlwiKTt2YXIgZD1jLm1lc3NhZ2V8fGMuZGF0YTtkJiZ0aGlzLmYoZCk7dGhpcy5iYigpO3JldHVybn12YXIgZT10aGlzO3RoaXMuSWEub25vcGVuPWZ1bmN0aW9uKCl7ZS5mKFwiV2Vic29ja2V0IGNvbm5lY3RlZC5cIik7ZS53Yz0hMH07dGhpcy5JYS5vbmNsb3NlPWZ1bmN0aW9uKCl7ZS5mKFwiV2Vic29ja2V0IGNvbm5lY3Rpb24gd2FzIGRpc2Nvbm5lY3RlZC5cIik7ZS5JYT1udWxsO2UuYmIoKX07dGhpcy5JYS5vbm1lc3NhZ2U9ZnVuY3Rpb24oYSl7aWYobnVsbCE9PWUuSWEpaWYoYT1hLmRhdGEsZS5wYis9XG5hLmxlbmd0aCxMYihlLlZhLFwiYnl0ZXNfcmVjZWl2ZWRcIixhLmxlbmd0aCksZWQoZSksbnVsbCE9PWUuZnJhbWVzKWZkKGUsYSk7ZWxzZXthOntIKG51bGw9PT1lLmZyYW1lcyxcIldlIGFscmVhZHkgaGF2ZSBhIGZyYW1lIGJ1ZmZlclwiKTtpZig2Pj1hLmxlbmd0aCl7dmFyIGI9TnVtYmVyKGEpO2lmKCFpc05hTihiKSl7ZS5EZT1iO2UuZnJhbWVzPVtdO2E9bnVsbDticmVhayBhfX1lLkRlPTE7ZS5mcmFtZXM9W119bnVsbCE9PWEmJmZkKGUsYSl9fTt0aGlzLklhLm9uZXJyb3I9ZnVuY3Rpb24oYSl7ZS5mKFwiV2ViU29ja2V0IGVycm9yLiAgQ2xvc2luZyBjb25uZWN0aW9uLlwiKTsoYT1hLm1lc3NhZ2V8fGEuZGF0YSkmJmUuZihhKTtlLmJiKCl9fTtjZC5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt9O1xuY2QuaXNBdmFpbGFibGU9ZnVuY3Rpb24oKXt2YXIgYT0hMTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIG5hdmlnYXRvciYmbmF2aWdhdG9yLnVzZXJBZ2VudCl7dmFyIGI9bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZCAoWzAtOV17MCx9XFwuWzAtOV17MCx9KS8pO2ImJjE8Yi5sZW5ndGgmJjQuND5wYXJzZUZsb2F0KGJbMV0pJiYoYT0hMCl9cmV0dXJuIWEmJm51bGwhPT1iZCYmIWRkfTtjZC5yZXNwb25zZXNSZXF1aXJlZFRvQmVIZWFsdGh5PTI7Y2QuaGVhbHRoeVRpbWVvdXQ9M0U0O2c9Y2QucHJvdG90eXBlO2cuc2Q9ZnVuY3Rpb24oKXt5Yi5yZW1vdmUoXCJwcmV2aW91c193ZWJzb2NrZXRfZmFpbHVyZVwiKX07ZnVuY3Rpb24gZmQoYSxiKXthLmZyYW1lcy5wdXNoKGIpO2lmKGEuZnJhbWVzLmxlbmd0aD09YS5EZSl7dmFyIGM9YS5mcmFtZXMuam9pbihcIlwiKTthLmZyYW1lcz1udWxsO2M9b2IoYyk7YS5YZihjKX19XG5nLnNlbmQ9ZnVuY3Rpb24oYSl7ZWQodGhpcyk7YT1CKGEpO3RoaXMucWIrPWEubGVuZ3RoO0xiKHRoaXMuVmEsXCJieXRlc19zZW50XCIsYS5sZW5ndGgpO2E9SGMoYSwxNjM4NCk7MTxhLmxlbmd0aCYmZ2QodGhpcyxTdHJpbmcoYS5sZW5ndGgpKTtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKylnZCh0aGlzLGFbYl0pfTtnLlRjPWZ1bmN0aW9uKCl7dGhpcy5BYj0hMDt0aGlzLnpjJiYoY2xlYXJJbnRlcnZhbCh0aGlzLnpjKSx0aGlzLnpjPW51bGwpO3RoaXMuSWEmJih0aGlzLklhLmNsb3NlKCksdGhpcy5JYT1udWxsKX07Zy5iYj1mdW5jdGlvbigpe3RoaXMuQWJ8fCh0aGlzLmYoXCJXZWJTb2NrZXQgaXMgY2xvc2luZyBpdHNlbGZcIiksdGhpcy5UYygpLHRoaXMuaWImJih0aGlzLmliKHRoaXMud2MpLHRoaXMuaWI9bnVsbCkpfTtnLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5BYnx8KHRoaXMuZihcIldlYlNvY2tldCBpcyBiZWluZyBjbG9zZWRcIiksdGhpcy5UYygpKX07XG5mdW5jdGlvbiBlZChhKXtjbGVhckludGVydmFsKGEuemMpO2EuemM9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXthLklhJiZnZChhLFwiMFwiKTtlZChhKX0sTWF0aC5mbG9vcig0NUUzKSl9ZnVuY3Rpb24gZ2QoYSxiKXt0cnl7YS5JYS5zZW5kKGIpfWNhdGNoKGMpe2EuZihcIkV4Y2VwdGlvbiB0aHJvd24gZnJvbSBXZWJTb2NrZXQuc2VuZCgpOlwiLGMubWVzc2FnZXx8Yy5kYXRhLFwiQ2xvc2luZyBjb25uZWN0aW9uLlwiKSxzZXRUaW1lb3V0KHEoYS5iYixhKSwwKX19O2Z1bmN0aW9uIGhkKCl7dGhpcy5mYj17fX1cbmZ1bmN0aW9uIGpkKGEsYil7dmFyIGM9Yi50eXBlLGQ9Yi5YYTtIKFwiY2hpbGRfYWRkZWRcIj09Y3x8XCJjaGlsZF9jaGFuZ2VkXCI9PWN8fFwiY2hpbGRfcmVtb3ZlZFwiPT1jLFwiT25seSBjaGlsZCBjaGFuZ2VzIHN1cHBvcnRlZCBmb3IgdHJhY2tpbmdcIik7SChcIi5wcmlvcml0eVwiIT09ZCxcIk9ubHkgbm9uLXByaW9yaXR5IGNoaWxkIGNoYW5nZXMgY2FuIGJlIHRyYWNrZWQuXCIpO3ZhciBlPXcoYS5mYixkKTtpZihlKXt2YXIgZj1lLnR5cGU7aWYoXCJjaGlsZF9hZGRlZFwiPT1jJiZcImNoaWxkX3JlbW92ZWRcIj09ZilhLmZiW2RdPW5ldyBJKFwiY2hpbGRfY2hhbmdlZFwiLGIuSmEsZCxlLkphKTtlbHNlIGlmKFwiY2hpbGRfcmVtb3ZlZFwiPT1jJiZcImNoaWxkX2FkZGVkXCI9PWYpZGVsZXRlIGEuZmJbZF07ZWxzZSBpZihcImNoaWxkX3JlbW92ZWRcIj09YyYmXCJjaGlsZF9jaGFuZ2VkXCI9PWYpYS5mYltkXT1uZXcgSShcImNoaWxkX3JlbW92ZWRcIixlLm9lLGQpO2Vsc2UgaWYoXCJjaGlsZF9jaGFuZ2VkXCI9PWMmJlxuXCJjaGlsZF9hZGRlZFwiPT1mKWEuZmJbZF09bmV3IEkoXCJjaGlsZF9hZGRlZFwiLGIuSmEsZCk7ZWxzZSBpZihcImNoaWxkX2NoYW5nZWRcIj09YyYmXCJjaGlsZF9jaGFuZ2VkXCI9PWYpYS5mYltkXT1uZXcgSShcImNoaWxkX2NoYW5nZWRcIixiLkphLGQsZS5vZSk7ZWxzZSB0aHJvdyBzYyhcIklsbGVnYWwgY29tYmluYXRpb24gb2YgY2hhbmdlczogXCIrYitcIiBvY2N1cnJlZCBhZnRlciBcIitlKTt9ZWxzZSBhLmZiW2RdPWJ9O2Z1bmN0aW9uIGtkKGEpe3RoaXMuVj1hO3RoaXMuZz1hLm0uZ31mdW5jdGlvbiBsZChhLGIsYyxkKXt2YXIgZT1bXSxmPVtdO0phKGIsZnVuY3Rpb24oYil7XCJjaGlsZF9jaGFuZ2VkXCI9PT1iLnR5cGUmJmEuZy5uZChiLm9lLGIuSmEpJiZmLnB1c2gobmV3IEkoXCJjaGlsZF9tb3ZlZFwiLGIuSmEsYi5YYSkpfSk7bWQoYSxlLFwiY2hpbGRfcmVtb3ZlZFwiLGIsZCxjKTttZChhLGUsXCJjaGlsZF9hZGRlZFwiLGIsZCxjKTttZChhLGUsXCJjaGlsZF9tb3ZlZFwiLGYsZCxjKTttZChhLGUsXCJjaGlsZF9jaGFuZ2VkXCIsYixkLGMpO21kKGEsZSxjYyxiLGQsYyk7cmV0dXJuIGV9ZnVuY3Rpb24gbWQoYSxiLGMsZCxlLGYpe2Q9S2EoZCxmdW5jdGlvbihhKXtyZXR1cm4gYS50eXBlPT09Y30pO1NhKGQscShhLkZmLGEpKTtKYShkLGZ1bmN0aW9uKGMpe3ZhciBkPW5kKGEsYyxmKTtKYShlLGZ1bmN0aW9uKGUpe2UubmYoYy50eXBlKSYmYi5wdXNoKGUuY3JlYXRlRXZlbnQoZCxhLlYpKX0pfSl9XG5mdW5jdGlvbiBuZChhLGIsYyl7XCJ2YWx1ZVwiIT09Yi50eXBlJiZcImNoaWxkX3JlbW92ZWRcIiE9PWIudHlwZSYmKGIuRGQ9Yy5WZShiLlhhLGIuSmEsYS5nKSk7cmV0dXJuIGJ9a2QucHJvdG90eXBlLkZmPWZ1bmN0aW9uKGEsYil7aWYobnVsbD09YS5YYXx8bnVsbD09Yi5YYSl0aHJvdyBzYyhcIlNob3VsZCBvbmx5IGNvbXBhcmUgY2hpbGRfIGV2ZW50cy5cIik7cmV0dXJuIHRoaXMuZy5jb21wYXJlKG5ldyBLKGEuWGEsYS5KYSksbmV3IEsoYi5YYSxiLkphKSl9O2Z1bmN0aW9uIG9kKGEsYil7dGhpcy5TZD1hO3RoaXMuRGY9Yn1mdW5jdGlvbiBwZChhKXt0aGlzLlU9YX1cbnBkLnByb3RvdHlwZS5lYj1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1uZXcgaGQsZjtpZihiLnR5cGU9PT1CYiliLnNvdXJjZS5jZT9jPXFkKHRoaXMsYSxiLnBhdGgsYi5HYSxjLGQsZSk6KEgoYi5zb3VyY2UuU2UsXCJVbmtub3duIHNvdXJjZS5cIiksZj1iLnNvdXJjZS5DZXx8ZWMoYS53KCkpJiYhYi5wYXRoLmUoKSxjPXJkKHRoaXMsYSxiLnBhdGgsYi5HYSxjLGQsZixlKSk7ZWxzZSBpZihiLnR5cGU9PT1XYyliLnNvdXJjZS5jZT9jPXNkKHRoaXMsYSxiLnBhdGgsYi5jaGlsZHJlbixjLGQsZSk6KEgoYi5zb3VyY2UuU2UsXCJVbmtub3duIHNvdXJjZS5cIiksZj1iLnNvdXJjZS5DZXx8ZWMoYS53KCkpLGM9dGQodGhpcyxhLGIucGF0aCxiLmNoaWxkcmVuLGMsZCxmLGUpKTtlbHNlIGlmKGIudHlwZT09PXVkKWlmKGIuSWQpaWYoYj1iLnBhdGgsbnVsbCE9Yy5sYyhiKSljPWE7ZWxzZXtmPW5ldyBZYihjLGEsZCk7ZD1hLk4uaigpO2lmKGIuZSgpfHxcIi5wcmlvcml0eVwiPT09SihiKSlkYyhhLncoKSk/XG5iPWMuQWEoYWMoYSkpOihiPWEudygpLmooKSxIKGIgaW5zdGFuY2VvZiBQLFwic2VydmVyQ2hpbGRyZW4gd291bGQgYmUgY29tcGxldGUgaWYgbGVhZiBub2RlXCIpLGI9Yy5yYyhiKSksYj10aGlzLlUueWEoZCxiLGUpO2Vsc2V7dmFyIGg9SihiKSxrPWMucWMoaCxhLncoKSk7bnVsbD09ayYmWmIoYS53KCksaCkmJihrPWQuUShoKSk7Yj1udWxsIT1rP3RoaXMuVS5GKGQsaCxrLEQoYiksZixlKTphLk4uaigpLkRhKGgpP3RoaXMuVS5GKGQsaCxHLEQoYiksZixlKTpkO2IuZSgpJiZkYyhhLncoKSkmJihkPWMuQWEoYWMoYSkpLGQuSigpJiYoYj10aGlzLlUueWEoYixkLGUpKSl9ZD1kYyhhLncoKSl8fG51bGwhPWMubGMoQyk7Yz12ZChhLGIsZCx0aGlzLlUuTmEoKSl9ZWxzZSBjPXdkKHRoaXMsYSxiLnBhdGgsYi5PYixjLGQsZSk7ZWxzZSBpZihiLnR5cGU9PT1EYilkPWIucGF0aCxiPWEudygpLGY9Yi5qKCksaD1iLmRhfHxkLmUoKSxjPXhkKHRoaXMsbmV3IHlkKGEuTixuZXcgJGIoZixcbmgsYi5TYikpLGQsYyxYYixlKTtlbHNlIHRocm93IHNjKFwiVW5rbm93biBvcGVyYXRpb24gdHlwZTogXCIrYi50eXBlKTtlPXRhKGUuZmIpO2Q9YztiPWQuTjtiLmRhJiYoZj1iLmooKS5KKCl8fGIuaigpLmUoKSxoPXpkKGEpLCgwPGUubGVuZ3RofHwhYS5OLmRhfHxmJiYhYi5qKCkuWihoKXx8IWIuaigpLkMoKS5aKGguQygpKSkmJmUucHVzaChiYyh6ZChkKSkpKTtyZXR1cm4gbmV3IG9kKGMsZSl9O1xuZnVuY3Rpb24geGQoYSxiLGMsZCxlLGYpe3ZhciBoPWIuTjtpZihudWxsIT1kLmxjKGMpKXJldHVybiBiO3ZhciBrO2lmKGMuZSgpKUgoZGMoYi53KCkpLFwiSWYgY2hhbmdlIHBhdGggaXMgZW1wdHksIHdlIG11c3QgaGF2ZSBjb21wbGV0ZSBzZXJ2ZXIgZGF0YVwiKSxlYyhiLncoKSk/KGU9YWMoYiksZD1kLnJjKGUgaW5zdGFuY2VvZiBQP2U6RykpOmQ9ZC5BYShhYyhiKSksZj1hLlUueWEoYi5OLmooKSxkLGYpO2Vsc2V7dmFyIGw9SihjKTtpZihcIi5wcmlvcml0eVwiPT1sKUgoMT09QWQoYyksXCJDYW4ndCBoYXZlIGEgcHJpb3JpdHkgd2l0aCBhZGRpdGlvbmFsIHBhdGggY29tcG9uZW50c1wiKSxmPWguaigpLGs9Yi53KCkuaigpLGQ9ZC5hZChjLGYsayksZj1udWxsIT1kP2EuVS5mYShmLGQpOmguaigpO2Vsc2V7dmFyIG09RChjKTtaYihoLGwpPyhrPWIudygpLmooKSxkPWQuYWQoYyxoLmooKSxrKSxkPW51bGwhPWQ/aC5qKCkuUShsKS5GKG0sZCk6aC5qKCkuUShsKSk6ZD1kLnFjKGwsXG5iLncoKSk7Zj1udWxsIT1kP2EuVS5GKGguaigpLGwsZCxtLGUsZik6aC5qKCl9fXJldHVybiB2ZChiLGYsaC5kYXx8Yy5lKCksYS5VLk5hKCkpfWZ1bmN0aW9uIHJkKGEsYixjLGQsZSxmLGgsayl7dmFyIGw9Yi53KCk7aD1oP2EuVTphLlUuVWIoKTtpZihjLmUoKSlkPWgueWEobC5qKCksZCxudWxsKTtlbHNlIGlmKGguTmEoKSYmIWwuU2IpZD1sLmooKS5GKGMsZCksZD1oLnlhKGwuaigpLGQsbnVsbCk7ZWxzZXt2YXIgbT1KKGMpO2lmKCFmYyhsLGMpJiYxPEFkKGMpKXJldHVybiBiO3ZhciB1PUQoYyk7ZD1sLmooKS5RKG0pLkYodSxkKTtkPVwiLnByaW9yaXR5XCI9PW0/aC5mYShsLmooKSxkKTpoLkYobC5qKCksbSxkLHUsWGIsbnVsbCl9bD1sLmRhfHxjLmUoKTtiPW5ldyB5ZChiLk4sbmV3ICRiKGQsbCxoLk5hKCkpKTtyZXR1cm4geGQoYSxiLGMsZSxuZXcgWWIoZSxiLGYpLGspfVxuZnVuY3Rpb24gcWQoYSxiLGMsZCxlLGYsaCl7dmFyIGs9Yi5OO2U9bmV3IFliKGUsYixmKTtpZihjLmUoKSloPWEuVS55YShiLk4uaigpLGQsaCksYT12ZChiLGgsITAsYS5VLk5hKCkpO2Vsc2UgaWYoZj1KKGMpLFwiLnByaW9yaXR5XCI9PT1mKWg9YS5VLmZhKGIuTi5qKCksZCksYT12ZChiLGgsay5kYSxrLlNiKTtlbHNle2M9RChjKTt2YXIgbD1rLmooKS5RKGYpO2lmKCFjLmUoKSl7dmFyIG09ZS5UZShmKTtkPW51bGwhPW0/XCIucHJpb3JpdHlcIj09PUJkKGMpJiZtLlAoYy5wYXJlbnQoKSkuZSgpP206bS5GKGMsZCk6R31sLlooZCk/YT1iOihoPWEuVS5GKGsuaigpLGYsZCxjLGUsaCksYT12ZChiLGgsay5kYSxhLlUuTmEoKSkpfXJldHVybiBhfVxuZnVuY3Rpb24gc2QoYSxiLGMsZCxlLGYsaCl7dmFyIGs9YjtDZChkLGZ1bmN0aW9uKGQsbSl7dmFyIHU9Yy5uKGQpO1piKGIuTixKKHUpKSYmKGs9cWQoYSxrLHUsbSxlLGYsaCkpfSk7Q2QoZCxmdW5jdGlvbihkLG0pe3ZhciB1PWMubihkKTtaYihiLk4sSih1KSl8fChrPXFkKGEsayx1LG0sZSxmLGgpKX0pO3JldHVybiBrfWZ1bmN0aW9uIERkKGEsYil7Q2QoYixmdW5jdGlvbihiLGQpe2E9YS5GKGIsZCl9KTtyZXR1cm4gYX1cbmZ1bmN0aW9uIHRkKGEsYixjLGQsZSxmLGgsayl7aWYoYi53KCkuaigpLmUoKSYmIWRjKGIudygpKSlyZXR1cm4gYjt2YXIgbD1iO2M9Yy5lKCk/ZDpFZChRLGMsZCk7dmFyIG09Yi53KCkuaigpO2MuY2hpbGRyZW4uaGEoZnVuY3Rpb24oYyxkKXtpZihtLkRhKGMpKXt2YXIgRj1iLncoKS5qKCkuUShjKSxGPURkKEYsZCk7bD1yZChhLGwsbmV3IEwoYyksRixlLGYsaCxrKX19KTtjLmNoaWxkcmVuLmhhKGZ1bmN0aW9uKGMsZCl7dmFyIEY9IVpiKGIudygpLGMpJiZudWxsPT1kLnZhbHVlO20uRGEoYyl8fEZ8fChGPWIudygpLmooKS5RKGMpLEY9RGQoRixkKSxsPXJkKGEsbCxuZXcgTChjKSxGLGUsZixoLGspKX0pO3JldHVybiBsfVxuZnVuY3Rpb24gd2QoYSxiLGMsZCxlLGYsaCl7aWYobnVsbCE9ZS5sYyhjKSlyZXR1cm4gYjt2YXIgaz1lYyhiLncoKSksbD1iLncoKTtpZihudWxsIT1kLnZhbHVlKXtpZihjLmUoKSYmbC5kYXx8ZmMobCxjKSlyZXR1cm4gcmQoYSxiLGMsbC5qKCkuUChjKSxlLGYsayxoKTtpZihjLmUoKSl7dmFyIG09UTtsLmooKS5PKEZkLGZ1bmN0aW9uKGEsYil7bT1tLnNldChuZXcgTChhKSxiKX0pO3JldHVybiB0ZChhLGIsYyxtLGUsZixrLGgpfXJldHVybiBifW09UTtDZChkLGZ1bmN0aW9uKGEpe3ZhciBiPWMubihhKTtmYyhsLGIpJiYobT1tLnNldChhLGwuaigpLlAoYikpKX0pO3JldHVybiB0ZChhLGIsYyxtLGUsZixrLGgpfTtmdW5jdGlvbiBHZChhKXt0aGlzLmc9YX1nPUdkLnByb3RvdHlwZTtnLkY9ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe0goYS55Yyh0aGlzLmcpLFwiQSBub2RlIG11c3QgYmUgaW5kZXhlZCBpZiBvbmx5IGEgY2hpbGQgaXMgdXBkYXRlZFwiKTtlPWEuUShiKTtpZihlLlAoZCkuWihjLlAoZCkpJiZlLmUoKT09Yy5lKCkpcmV0dXJuIGE7bnVsbCE9ZiYmKGMuZSgpP2EuRGEoYik/amQoZixuZXcgSShcImNoaWxkX3JlbW92ZWRcIixlLGIpKTpIKGEuSigpLFwiQSBjaGlsZCByZW1vdmUgd2l0aG91dCBhbiBvbGQgY2hpbGQgb25seSBtYWtlcyBzZW5zZSBvbiBhIGxlYWYgbm9kZVwiKTplLmUoKT9qZChmLG5ldyBJKFwiY2hpbGRfYWRkZWRcIixjLGIpKTpqZChmLG5ldyBJKFwiY2hpbGRfY2hhbmdlZFwiLGMsYixlKSkpO3JldHVybiBhLkooKSYmYy5lKCk/YTphLlQoYixjKS5uYih0aGlzLmcpfTtcbmcueWE9ZnVuY3Rpb24oYSxiLGMpe251bGwhPWMmJihhLkooKXx8YS5PKE4sZnVuY3Rpb24oYSxlKXtiLkRhKGEpfHxqZChjLG5ldyBJKFwiY2hpbGRfcmVtb3ZlZFwiLGUsYSkpfSksYi5KKCl8fGIuTyhOLGZ1bmN0aW9uKGIsZSl7aWYoYS5EYShiKSl7dmFyIGY9YS5RKGIpO2YuWihlKXx8amQoYyxuZXcgSShcImNoaWxkX2NoYW5nZWRcIixlLGIsZikpfWVsc2UgamQoYyxuZXcgSShcImNoaWxkX2FkZGVkXCIsZSxiKSl9KSk7cmV0dXJuIGIubmIodGhpcy5nKX07Zy5mYT1mdW5jdGlvbihhLGIpe3JldHVybiBhLmUoKT9HOmEuZmEoYil9O2cuTmE9ZnVuY3Rpb24oKXtyZXR1cm4hMX07Zy5VYj1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtmdW5jdGlvbiBIZChhKXt0aGlzLmZlPW5ldyBHZChhLmcpO3RoaXMuZz1hLmc7dmFyIGI7YS5rYT8oYj1JZChhKSxiPWEuZy5FYyhKZChhKSxiKSk6Yj1hLmcuSGMoKTt0aGlzLlVjPWI7YS5uYT8oYj1LZChhKSxhPWEuZy5FYyhMZChhKSxiKSk6YT1hLmcuRmMoKTt0aGlzLnZjPWF9Zz1IZC5wcm90b3R5cGU7Zy5tYXRjaGVzPWZ1bmN0aW9uKGEpe3JldHVybiAwPj10aGlzLmcuY29tcGFyZSh0aGlzLlVjLGEpJiYwPj10aGlzLmcuY29tcGFyZShhLHRoaXMudmMpfTtnLkY9ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMubWF0Y2hlcyhuZXcgSyhiLGMpKXx8KGM9Ryk7cmV0dXJuIHRoaXMuZmUuRihhLGIsYyxkLGUsZil9O1xuZy55YT1mdW5jdGlvbihhLGIsYyl7Yi5KKCkmJihiPUcpO3ZhciBkPWIubmIodGhpcy5nKSxkPWQuZmEoRyksZT10aGlzO2IuTyhOLGZ1bmN0aW9uKGEsYil7ZS5tYXRjaGVzKG5ldyBLKGEsYikpfHwoZD1kLlQoYSxHKSl9KTtyZXR1cm4gdGhpcy5mZS55YShhLGQsYyl9O2cuZmE9ZnVuY3Rpb24oYSl7cmV0dXJuIGF9O2cuTmE9ZnVuY3Rpb24oKXtyZXR1cm4hMH07Zy5VYj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmZlfTtmdW5jdGlvbiBNZChhKXt0aGlzLnNhPW5ldyBIZChhKTt0aGlzLmc9YS5nO0goYS54YSxcIk9ubHkgdmFsaWQgaWYgbGltaXQgaGFzIGJlZW4gc2V0XCIpO3RoaXMub2E9YS5vYTt0aGlzLkliPSFOZChhKX1nPU1kLnByb3RvdHlwZTtnLkY9ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMuc2EubWF0Y2hlcyhuZXcgSyhiLGMpKXx8KGM9Ryk7cmV0dXJuIGEuUShiKS5aKGMpP2E6YS5FYigpPHRoaXMub2E/dGhpcy5zYS5VYigpLkYoYSxiLGMsZCxlLGYpOk9kKHRoaXMsYSxiLGMsZSxmKX07XG5nLnlhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZDtpZihiLkooKXx8Yi5lKCkpZD1HLm5iKHRoaXMuZyk7ZWxzZSBpZigyKnRoaXMub2E8Yi5FYigpJiZiLnljKHRoaXMuZykpe2Q9Ry5uYih0aGlzLmcpO2I9dGhpcy5JYj9iLlpiKHRoaXMuc2EudmMsdGhpcy5nKTpiLlhiKHRoaXMuc2EuVWMsdGhpcy5nKTtmb3IodmFyIGU9MDswPGIuUGEubGVuZ3RoJiZlPHRoaXMub2E7KXt2YXIgZj1SKGIpLGg7aWYoaD10aGlzLkliPzA+PXRoaXMuZy5jb21wYXJlKHRoaXMuc2EuVWMsZik6MD49dGhpcy5nLmNvbXBhcmUoZix0aGlzLnNhLnZjKSlkPWQuVChmLm5hbWUsZi5SKSxlKys7ZWxzZSBicmVha319ZWxzZXtkPWIubmIodGhpcy5nKTtkPWQuZmEoRyk7dmFyIGssbCxtO2lmKHRoaXMuSWIpe2I9ZC5XZSh0aGlzLmcpO2s9dGhpcy5zYS52YztsPXRoaXMuc2EuVWM7dmFyIHU9UGQodGhpcy5nKTttPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHUoYixhKX19ZWxzZSBiPWQuV2IodGhpcy5nKSxrPXRoaXMuc2EuVWMsXG5sPXRoaXMuc2EudmMsbT1QZCh0aGlzLmcpO2Zvcih2YXIgZT0wLHo9ITE7MDxiLlBhLmxlbmd0aDspZj1SKGIpLCF6JiYwPj1tKGssZikmJih6PSEwKSwoaD16JiZlPHRoaXMub2EmJjA+PW0oZixsKSk/ZSsrOmQ9ZC5UKGYubmFtZSxHKX1yZXR1cm4gdGhpcy5zYS5VYigpLnlhKGEsZCxjKX07Zy5mYT1mdW5jdGlvbihhKXtyZXR1cm4gYX07Zy5OYT1mdW5jdGlvbigpe3JldHVybiEwfTtnLlViPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2EuVWIoKX07XG5mdW5jdGlvbiBPZChhLGIsYyxkLGUsZil7dmFyIGg7aWYoYS5JYil7dmFyIGs9UGQoYS5nKTtoPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGsoYixhKX19ZWxzZSBoPVBkKGEuZyk7SChiLkViKCk9PWEub2EsXCJcIik7dmFyIGw9bmV3IEsoYyxkKSxtPWEuSWI/UWQoYixhLmcpOlJkKGIsYS5nKSx1PWEuc2EubWF0Y2hlcyhsKTtpZihiLkRhKGMpKXtmb3IodmFyIHo9Yi5RKGMpLG09ZS5kZShhLmcsbSxhLkliKTtudWxsIT1tJiYobS5uYW1lPT1jfHxiLkRhKG0ubmFtZSkpOyltPWUuZGUoYS5nLG0sYS5JYik7ZT1udWxsPT1tPzE6aChtLGwpO2lmKHUmJiFkLmUoKSYmMDw9ZSlyZXR1cm4gbnVsbCE9ZiYmamQoZixuZXcgSShcImNoaWxkX2NoYW5nZWRcIixkLGMseikpLGIuVChjLGQpO251bGwhPWYmJmpkKGYsbmV3IEkoXCJjaGlsZF9yZW1vdmVkXCIseixjKSk7Yj1iLlQoYyxHKTtyZXR1cm4gbnVsbCE9bSYmYS5zYS5tYXRjaGVzKG0pPyhudWxsIT1mJiZqZChmLG5ldyBJKFwiY2hpbGRfYWRkZWRcIixcbm0uUixtLm5hbWUpKSxiLlQobS5uYW1lLG0uUikpOmJ9cmV0dXJuIGQuZSgpP2I6dSYmMDw9aChtLGwpPyhudWxsIT1mJiYoamQoZixuZXcgSShcImNoaWxkX3JlbW92ZWRcIixtLlIsbS5uYW1lKSksamQoZixuZXcgSShcImNoaWxkX2FkZGVkXCIsZCxjKSkpLGIuVChjLGQpLlQobS5uYW1lLEcpKTpifTtmdW5jdGlvbiBxYyhhLGIpe3RoaXMuQj1hO0gobih0aGlzLkIpJiZudWxsIT09dGhpcy5CLFwiTGVhZk5vZGUgc2hvdWxkbid0IGJlIGNyZWF0ZWQgd2l0aCBudWxsL3VuZGVmaW5lZCB2YWx1ZS5cIik7dGhpcy5hYT1ifHxHO1NkKHRoaXMuYWEpO3RoaXMuRGI9bnVsbH12YXIgVGQ9W1wib2JqZWN0XCIsXCJib29sZWFuXCIsXCJudW1iZXJcIixcInN0cmluZ1wiXTtnPXFjLnByb3RvdHlwZTtnLko9ZnVuY3Rpb24oKXtyZXR1cm4hMH07Zy5DPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYWF9O2cuZmE9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBxYyh0aGlzLkIsYSl9O2cuUT1mdW5jdGlvbihhKXtyZXR1cm5cIi5wcmlvcml0eVwiPT09YT90aGlzLmFhOkd9O2cuUD1mdW5jdGlvbihhKXtyZXR1cm4gYS5lKCk/dGhpczpcIi5wcmlvcml0eVwiPT09SihhKT90aGlzLmFhOkd9O2cuRGE9ZnVuY3Rpb24oKXtyZXR1cm4hMX07Zy5WZT1mdW5jdGlvbigpe3JldHVybiBudWxsfTtcbmcuVD1mdW5jdGlvbihhLGIpe3JldHVyblwiLnByaW9yaXR5XCI9PT1hP3RoaXMuZmEoYik6Yi5lKCkmJlwiLnByaW9yaXR5XCIhPT1hP3RoaXM6Ry5UKGEsYikuZmEodGhpcy5hYSl9O2cuRj1mdW5jdGlvbihhLGIpe3ZhciBjPUooYSk7aWYobnVsbD09PWMpcmV0dXJuIGI7aWYoYi5lKCkmJlwiLnByaW9yaXR5XCIhPT1jKXJldHVybiB0aGlzO0goXCIucHJpb3JpdHlcIiE9PWN8fDE9PT1BZChhKSxcIi5wcmlvcml0eSBtdXN0IGJlIHRoZSBsYXN0IHRva2VuIGluIGEgcGF0aFwiKTtyZXR1cm4gdGhpcy5UKGMsRy5GKEQoYSksYikpfTtnLmU9ZnVuY3Rpb24oKXtyZXR1cm4hMX07Zy5FYj1mdW5jdGlvbigpe3JldHVybiAwfTtnLk89ZnVuY3Rpb24oKXtyZXR1cm4hMX07Zy5IPWZ1bmN0aW9uKGEpe3JldHVybiBhJiYhdGhpcy5DKCkuZSgpP3tcIi52YWx1ZVwiOnRoaXMuQ2EoKSxcIi5wcmlvcml0eVwiOnRoaXMuQygpLkgoKX06dGhpcy5DYSgpfTtcbmcuaGFzaD1mdW5jdGlvbigpe2lmKG51bGw9PT10aGlzLkRiKXt2YXIgYT1cIlwiO3RoaXMuYWEuZSgpfHwoYSs9XCJwcmlvcml0eTpcIitVZCh0aGlzLmFhLkgoKSkrXCI6XCIpO3ZhciBiPXR5cGVvZiB0aGlzLkIsYT1hKyhiK1wiOlwiKSxhPVwibnVtYmVyXCI9PT1iP2ErSmModGhpcy5CKTphK3RoaXMuQjt0aGlzLkRiPXVjKGEpfXJldHVybiB0aGlzLkRifTtnLkNhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuQn07Zy5zYz1mdW5jdGlvbihhKXtpZihhPT09RylyZXR1cm4gMTtpZihhIGluc3RhbmNlb2YgUClyZXR1cm4tMTtIKGEuSigpLFwiVW5rbm93biBub2RlIHR5cGVcIik7dmFyIGI9dHlwZW9mIGEuQixjPXR5cGVvZiB0aGlzLkIsZD1JYShUZCxiKSxlPUlhKFRkLGMpO0goMDw9ZCxcIlVua25vd24gbGVhZiB0eXBlOiBcIitiKTtIKDA8PWUsXCJVbmtub3duIGxlYWYgdHlwZTogXCIrYyk7cmV0dXJuIGQ9PT1lP1wib2JqZWN0XCI9PT1jPzA6dGhpcy5CPGEuQj8tMTp0aGlzLkI9PT1hLkI/MDoxOmUtZH07XG5nLm5iPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O2cueWM9ZnVuY3Rpb24oKXtyZXR1cm4hMH07Zy5aPWZ1bmN0aW9uKGEpe3JldHVybiBhPT09dGhpcz8hMDphLkooKT90aGlzLkI9PT1hLkImJnRoaXMuYWEuWihhLmFhKTohMX07Zy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBCKHRoaXMuSCghMCkpfTtmdW5jdGlvbiBWZCgpe312YXIgV2Q9e307ZnVuY3Rpb24gUGQoYSl7cmV0dXJuIHEoYS5jb21wYXJlLGEpfVZkLnByb3RvdHlwZS5uZD1mdW5jdGlvbihhLGIpe3JldHVybiAwIT09dGhpcy5jb21wYXJlKG5ldyBLKFwiW01JTl9OQU1FXVwiLGEpLG5ldyBLKFwiW01JTl9OQU1FXVwiLGIpKX07VmQucHJvdG90eXBlLkhjPWZ1bmN0aW9uKCl7cmV0dXJuIFhkfTtmdW5jdGlvbiBZZChhKXtIKCFhLmUoKSYmXCIucHJpb3JpdHlcIiE9PUooYSksXCJDYW4ndCBjcmVhdGUgUGF0aEluZGV4IHdpdGggZW1wdHkgcGF0aCBvciAucHJpb3JpdHkga2V5XCIpO3RoaXMuYmM9YX1sYShZZCxWZCk7Zz1ZZC5wcm90b3R5cGU7Zy54Yz1mdW5jdGlvbihhKXtyZXR1cm4hYS5QKHRoaXMuYmMpLmUoKX07Zy5jb21wYXJlPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5SLlAodGhpcy5iYyksZD1iLlIuUCh0aGlzLmJjKSxjPWMuc2MoZCk7cmV0dXJuIDA9PT1jP2hjKGEubmFtZSxiLm5hbWUpOmN9O1xuZy5FYz1mdW5jdGlvbihhLGIpe3ZhciBjPU0oYSksYz1HLkYodGhpcy5iYyxjKTtyZXR1cm4gbmV3IEsoYixjKX07Zy5GYz1mdW5jdGlvbigpe3ZhciBhPUcuRih0aGlzLmJjLFpkKTtyZXR1cm4gbmV3IEsoXCJbTUFYX05BTUVdXCIsYSl9O2cudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5iYy5zbGljZSgpLmpvaW4oXCIvXCIpfTtmdW5jdGlvbiAkZCgpe31sYSgkZCxWZCk7Zz0kZC5wcm90b3R5cGU7Zy5jb21wYXJlPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5SLkMoKSxkPWIuUi5DKCksYz1jLnNjKGQpO3JldHVybiAwPT09Yz9oYyhhLm5hbWUsYi5uYW1lKTpjfTtnLnhjPWZ1bmN0aW9uKGEpe3JldHVybiFhLkMoKS5lKCl9O2cubmQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4hYS5DKCkuWihiLkMoKSl9O2cuSGM9ZnVuY3Rpb24oKXtyZXR1cm4gWGR9O2cuRmM9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEsoXCJbTUFYX05BTUVdXCIsbmV3IHFjKFwiW1BSSU9SSVRZLVBPU1RdXCIsWmQpKX07XG5nLkVjPWZ1bmN0aW9uKGEsYil7dmFyIGM9TShhKTtyZXR1cm4gbmV3IEsoYixuZXcgcWMoXCJbUFJJT1JJVFktUE9TVF1cIixjKSl9O2cudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIi5wcmlvcml0eVwifTt2YXIgTj1uZXcgJGQ7ZnVuY3Rpb24gYWUoKXt9bGEoYWUsVmQpO2c9YWUucHJvdG90eXBlO2cuY29tcGFyZT1mdW5jdGlvbihhLGIpe3JldHVybiBoYyhhLm5hbWUsYi5uYW1lKX07Zy54Yz1mdW5jdGlvbigpe3Rocm93IHNjKFwiS2V5SW5kZXguaXNEZWZpbmVkT24gbm90IGV4cGVjdGVkIHRvIGJlIGNhbGxlZC5cIik7fTtnLm5kPWZ1bmN0aW9uKCl7cmV0dXJuITF9O2cuSGM9ZnVuY3Rpb24oKXtyZXR1cm4gWGR9O2cuRmM9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEsoXCJbTUFYX05BTUVdXCIsRyl9O2cuRWM9ZnVuY3Rpb24oYSl7SChwKGEpLFwiS2V5SW5kZXggaW5kZXhWYWx1ZSBtdXN0IGFsd2F5cyBiZSBhIHN0cmluZy5cIik7cmV0dXJuIG5ldyBLKGEsRyl9O2cudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIi5rZXlcIn07XG52YXIgRmQ9bmV3IGFlO2Z1bmN0aW9uIGJlKCl7fWxhKGJlLFZkKTtnPWJlLnByb3RvdHlwZTtnLmNvbXBhcmU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLlIuc2MoYi5SKTtyZXR1cm4gMD09PWM/aGMoYS5uYW1lLGIubmFtZSk6Y307Zy54Yz1mdW5jdGlvbigpe3JldHVybiEwfTtnLm5kPWZ1bmN0aW9uKGEsYil7cmV0dXJuIWEuWihiKX07Zy5IYz1mdW5jdGlvbigpe3JldHVybiBYZH07Zy5GYz1mdW5jdGlvbigpe3JldHVybiBjZX07Zy5FYz1mdW5jdGlvbihhLGIpe3ZhciBjPU0oYSk7cmV0dXJuIG5ldyBLKGIsYyl9O2cudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIi52YWx1ZVwifTt2YXIgZGU9bmV3IGJlO2Z1bmN0aW9uIGVlKCl7dGhpcy5SYj10aGlzLm5hPXRoaXMuS2I9dGhpcy5rYT10aGlzLnhhPSExO3RoaXMub2E9MDt0aGlzLm1iPVwiXCI7dGhpcy5kYz1udWxsO3RoaXMuemI9XCJcIjt0aGlzLmFjPW51bGw7dGhpcy54Yj1cIlwiO3RoaXMuZz1OfXZhciBmZT1uZXcgZWU7ZnVuY3Rpb24gTmQoYSl7cmV0dXJuXCJcIj09PWEubWI/YS5rYTpcImxcIj09PWEubWJ9ZnVuY3Rpb24gSmQoYSl7SChhLmthLFwiT25seSB2YWxpZCBpZiBzdGFydCBoYXMgYmVlbiBzZXRcIik7cmV0dXJuIGEuZGN9ZnVuY3Rpb24gSWQoYSl7SChhLmthLFwiT25seSB2YWxpZCBpZiBzdGFydCBoYXMgYmVlbiBzZXRcIik7cmV0dXJuIGEuS2I/YS56YjpcIltNSU5fTkFNRV1cIn1mdW5jdGlvbiBMZChhKXtIKGEubmEsXCJPbmx5IHZhbGlkIGlmIGVuZCBoYXMgYmVlbiBzZXRcIik7cmV0dXJuIGEuYWN9XG5mdW5jdGlvbiBLZChhKXtIKGEubmEsXCJPbmx5IHZhbGlkIGlmIGVuZCBoYXMgYmVlbiBzZXRcIik7cmV0dXJuIGEuUmI/YS54YjpcIltNQVhfTkFNRV1cIn1mdW5jdGlvbiBnZShhKXt2YXIgYj1uZXcgZWU7Yi54YT1hLnhhO2Iub2E9YS5vYTtiLmthPWEua2E7Yi5kYz1hLmRjO2IuS2I9YS5LYjtiLnpiPWEuemI7Yi5uYT1hLm5hO2IuYWM9YS5hYztiLlJiPWEuUmI7Yi54Yj1hLnhiO2IuZz1hLmc7Yi5tYj1hLm1iO3JldHVybiBifWc9ZWUucHJvdG90eXBlO2cubGU9ZnVuY3Rpb24oYSl7dmFyIGI9Z2UodGhpcyk7Yi54YT0hMDtiLm9hPWE7Yi5tYj1cImxcIjtyZXR1cm4gYn07Zy5tZT1mdW5jdGlvbihhKXt2YXIgYj1nZSh0aGlzKTtiLnhhPSEwO2Iub2E9YTtiLm1iPVwiclwiO3JldHVybiBifTtnLk5kPWZ1bmN0aW9uKGEsYil7dmFyIGM9Z2UodGhpcyk7Yy5rYT0hMDtuKGEpfHwoYT1udWxsKTtjLmRjPWE7bnVsbCE9Yj8oYy5LYj0hMCxjLnpiPWIpOihjLktiPSExLGMuemI9XCJcIik7cmV0dXJuIGN9O1xuZy5nZD1mdW5jdGlvbihhLGIpe3ZhciBjPWdlKHRoaXMpO2MubmE9ITA7bihhKXx8KGE9bnVsbCk7Yy5hYz1hO24oYik/KGMuUmI9ITAsYy54Yj1iKTooYy52Zz0hMSxjLnhiPVwiXCIpO3JldHVybiBjfTtmdW5jdGlvbiBoZShhLGIpe3ZhciBjPWdlKGEpO2MuZz1iO3JldHVybiBjfWZ1bmN0aW9uIGllKGEpe3ZhciBiPXt9O2Eua2EmJihiLnNwPWEuZGMsYS5LYiYmKGIuc249YS56YikpO2EubmEmJihiLmVwPWEuYWMsYS5SYiYmKGIuZW49YS54YikpO2lmKGEueGEpe2IubD1hLm9hO3ZhciBjPWEubWI7XCJcIj09PWMmJihjPU5kKGEpP1wibFwiOlwiclwiKTtiLnZmPWN9YS5nIT09TiYmKGIuaT1hLmcudG9TdHJpbmcoKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gUyhhKXtyZXR1cm4hKGEua2F8fGEubmF8fGEueGEpfWZ1bmN0aW9uIFNjKGEpe3JldHVybiBTKGEpJiZhLmc9PU59XG5mdW5jdGlvbiBUYyhhKXt2YXIgYj17fTtpZihTYyhhKSlyZXR1cm4gYjt2YXIgYzthLmc9PT1OP2M9XCIkcHJpb3JpdHlcIjphLmc9PT1kZT9jPVwiJHZhbHVlXCI6YS5nPT09RmQ/Yz1cIiRrZXlcIjooSChhLmcgaW5zdGFuY2VvZiBZZCxcIlVucmVjb2duaXplZCBpbmRleCB0eXBlIVwiKSxjPWEuZy50b1N0cmluZygpKTtiLm9yZGVyQnk9QihjKTthLmthJiYoYi5zdGFydEF0PUIoYS5kYyksYS5LYiYmKGIuc3RhcnRBdCs9XCIsXCIrQihhLnpiKSkpO2EubmEmJihiLmVuZEF0PUIoYS5hYyksYS5SYiYmKGIuZW5kQXQrPVwiLFwiK0IoYS54YikpKTthLnhhJiYoTmQoYSk/Yi5saW1pdFRvRmlyc3Q9YS5vYTpiLmxpbWl0VG9MYXN0PWEub2EpO3JldHVybiBifWcudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gQihpZSh0aGlzKSl9O2Z1bmN0aW9uIGplKGEsYil7dGhpcy5vZD1hO3RoaXMuY2M9Yn1qZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe3ZhciBiPXcodGhpcy5vZCxhKTtpZighYil0aHJvdyBFcnJvcihcIk5vIGluZGV4IGRlZmluZWQgZm9yIFwiK2EpO3JldHVybiBiPT09V2Q/bnVsbDpifTtmdW5jdGlvbiBrZShhLGIsYyl7dmFyIGQ9cGEoYS5vZCxmdW5jdGlvbihkLGYpe3ZhciBoPXcoYS5jYyxmKTtIKGgsXCJNaXNzaW5nIGluZGV4IGltcGxlbWVudGF0aW9uIGZvciBcIitmKTtpZihkPT09V2Qpe2lmKGgueGMoYi5SKSl7Zm9yKHZhciBrPVtdLGw9Yy5XYihqYyksbT1SKGwpO207KW0ubmFtZSE9Yi5uYW1lJiZrLnB1c2gobSksbT1SKGwpO2sucHVzaChiKTtyZXR1cm4gbGUoayxQZChoKSl9cmV0dXJuIFdkfWg9Yy5nZXQoYi5uYW1lKTtrPWQ7aCYmKGs9ay5yZW1vdmUobmV3IEsoYi5uYW1lLGgpKSk7cmV0dXJuIGsuT2EoYixiLlIpfSk7cmV0dXJuIG5ldyBqZShkLGEuY2MpfVxuZnVuY3Rpb24gbWUoYSxiLGMpe3ZhciBkPXBhKGEub2QsZnVuY3Rpb24oYSl7aWYoYT09PVdkKXJldHVybiBhO3ZhciBkPWMuZ2V0KGIubmFtZSk7cmV0dXJuIGQ/YS5yZW1vdmUobmV3IEsoYi5uYW1lLGQpKTphfSk7cmV0dXJuIG5ldyBqZShkLGEuY2MpfXZhciBuZT1uZXcgamUoe1wiLnByaW9yaXR5XCI6V2R9LHtcIi5wcmlvcml0eVwiOk59KTtmdW5jdGlvbiBvZSgpe3RoaXMuc2V0PXt9fWc9b2UucHJvdG90eXBlO2cuYWRkPWZ1bmN0aW9uKGEsYil7dGhpcy5zZXRbYV09bnVsbCE9PWI/YjohMH07Zy5jb250YWlucz1mdW5jdGlvbihhKXtyZXR1cm4gY2IodGhpcy5zZXQsYSl9O2cuZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNvbnRhaW5zKGEpP3RoaXMuc2V0W2FdOnZvaWQgMH07Zy5yZW1vdmU9ZnVuY3Rpb24oYSl7ZGVsZXRlIHRoaXMuc2V0W2FdfTtnLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5zZXQ9e319O2cuZT1mdW5jdGlvbigpe3JldHVybiB5YSh0aGlzLnNldCl9O2cuY291bnQ9ZnVuY3Rpb24oKXtyZXR1cm4gcmEodGhpcy5zZXQpfTtmdW5jdGlvbiBwZShhLGIpe3IoYS5zZXQsZnVuY3Rpb24oYSxkKXtiKGQsYSl9KX1nLmtleXM9ZnVuY3Rpb24oKXt2YXIgYT1bXTtyKHRoaXMuc2V0LGZ1bmN0aW9uKGIsYyl7YS5wdXNoKGMpfSk7cmV0dXJuIGF9O2Z1bmN0aW9uIHFlKGEsYixjLGQpe3RoaXMuWWQ9YTt0aGlzLmY9eWMoYSk7dGhpcy5qYz1iO3RoaXMucGI9dGhpcy5xYj0wO3RoaXMuVmE9JGMoYik7dGhpcy50Zj1jO3RoaXMud2M9ITE7dGhpcy5DYj1kO3RoaXMuWWM9ZnVuY3Rpb24oYSl7cmV0dXJuIEpiKGIsXCJsb25nX3BvbGxpbmdcIixhKX19dmFyIHJlLHNlO1xucWUucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24oYSxiKXt0aGlzLk1lPTA7dGhpcy5pYT1iO3RoaXMuYmY9bmV3IHJiKGEpO3RoaXMuQWI9ITE7dmFyIGM9dGhpczt0aGlzLnNiPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtjLmYoXCJUaW1lZCBvdXQgdHJ5aW5nIHRvIGNvbm5lY3QuXCIpO2MuYmIoKTtjLnNiPW51bGx9LE1hdGguZmxvb3IoM0U0KSk7RGMoZnVuY3Rpb24oKXtpZighYy5BYil7Yy5UYT1uZXcgdGUoZnVuY3Rpb24oYSxiLGQsayxsKXt1ZShjLGFyZ3VtZW50cyk7aWYoYy5UYSlpZihjLnNiJiYoY2xlYXJUaW1lb3V0KGMuc2IpLGMuc2I9bnVsbCksYy53Yz0hMCxcInN0YXJ0XCI9PWEpYy5pZD1iLGMuZmY9ZDtlbHNlIGlmKFwiY2xvc2VcIj09PWEpYj8oYy5UYS5LZD0hMSxzYihjLmJmLGIsZnVuY3Rpb24oKXtjLmJiKCl9KSk6Yy5iYigpO2Vsc2UgdGhyb3cgRXJyb3IoXCJVbnJlY29nbml6ZWQgY29tbWFuZCByZWNlaXZlZDogXCIrYSk7fSxmdW5jdGlvbihhLGIpe3VlKGMsYXJndW1lbnRzKTtcbnRiKGMuYmYsYSxiKX0sZnVuY3Rpb24oKXtjLmJiKCl9LGMuWWMpO3ZhciBhPXtzdGFydDpcInRcIn07YS5zZXI9TWF0aC5mbG9vcigxRTgqTWF0aC5yYW5kb20oKSk7Yy5UYS5RZCYmKGEuY2I9Yy5UYS5RZCk7YS52PVwiNVwiO2MudGYmJihhLnM9Yy50Zik7Yy5DYiYmKGEubHM9Yy5DYik7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBsb2NhdGlvbiYmbG9jYXRpb24uaHJlZiYmLTEhPT1sb2NhdGlvbi5ocmVmLmluZGV4T2YoXCJmaXJlYmFzZWlvLmNvbVwiKSYmKGEucj1cImZcIik7YT1jLlljKGEpO2MuZihcIkNvbm5lY3RpbmcgdmlhIGxvbmctcG9sbCB0byBcIithKTt2ZShjLlRhLGEsZnVuY3Rpb24oKXt9KX19KX07XG5xZS5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLlRhLGI9dGhpcy5mZjthLlZmPXRoaXMuaWQ7YS5XZj1iO2ZvcihhLlVkPSEwO3dlKGEpOyk7YT10aGlzLmlkO2I9dGhpcy5mZjt0aGlzLmZjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7dmFyIGM9e2RmcmFtZTpcInRcIn07Yy5pZD1hO2MucHc9Yjt0aGlzLmZjLnNyYz10aGlzLlljKGMpO3RoaXMuZmMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZmMpfTtcbnFlLmlzQXZhaWxhYmxlPWZ1bmN0aW9uKCl7cmV0dXJuIHJlfHwhc2UmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgZG9jdW1lbnQmJm51bGwhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQmJiEoXCJvYmplY3RcIj09PXR5cGVvZiB3aW5kb3cmJndpbmRvdy5jaHJvbWUmJndpbmRvdy5jaHJvbWUuZXh0ZW5zaW9uJiYhL15jaHJvbWUvLnRlc3Qod2luZG93LmxvY2F0aW9uLmhyZWYpKSYmIShcIm9iamVjdFwiPT09dHlwZW9mIFdpbmRvd3MmJlwib2JqZWN0XCI9PT10eXBlb2YgV2luZG93cy5yZykmJiEwfTtnPXFlLnByb3RvdHlwZTtnLnNkPWZ1bmN0aW9uKCl7fTtnLlRjPWZ1bmN0aW9uKCl7dGhpcy5BYj0hMDt0aGlzLlRhJiYodGhpcy5UYS5jbG9zZSgpLHRoaXMuVGE9bnVsbCk7dGhpcy5mYyYmKGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5mYyksdGhpcy5mYz1udWxsKTt0aGlzLnNiJiYoY2xlYXJUaW1lb3V0KHRoaXMuc2IpLHRoaXMuc2I9bnVsbCl9O1xuZy5iYj1mdW5jdGlvbigpe3RoaXMuQWJ8fCh0aGlzLmYoXCJMb25ncG9sbCBpcyBjbG9zaW5nIGl0c2VsZlwiKSx0aGlzLlRjKCksdGhpcy5pYSYmKHRoaXMuaWEodGhpcy53YyksdGhpcy5pYT1udWxsKSl9O2cuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLkFifHwodGhpcy5mKFwiTG9uZ3BvbGwgaXMgYmVpbmcgY2xvc2VkLlwiKSx0aGlzLlRjKCkpfTtnLnNlbmQ9ZnVuY3Rpb24oYSl7YT1CKGEpO3RoaXMucWIrPWEubGVuZ3RoO0xiKHRoaXMuVmEsXCJieXRlc19zZW50XCIsYS5sZW5ndGgpO2E9bWIoYSk7YT1hYihhLCEwKTthPUhjKGEsMTg0MCk7Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPXRoaXMuVGE7Yy5RYy5wdXNoKHtqZzp0aGlzLk1lLHBnOmEubGVuZ3RoLE9lOmFbYl19KTtjLlVkJiZ3ZShjKTt0aGlzLk1lKyt9fTtmdW5jdGlvbiB1ZShhLGIpe3ZhciBjPUIoYikubGVuZ3RoO2EucGIrPWM7TGIoYS5WYSxcImJ5dGVzX3JlY2VpdmVkXCIsYyl9XG5mdW5jdGlvbiB0ZShhLGIsYyxkKXt0aGlzLlljPWQ7dGhpcy5pYj1jO3RoaXMudGU9bmV3IG9lO3RoaXMuUWM9W107dGhpcy5aZD1NYXRoLmZsb29yKDFFOCpNYXRoLnJhbmRvbSgpKTt0aGlzLktkPSEwO3RoaXMuUWQ9cmMoKTt3aW5kb3dbXCJwTFBDb21tYW5kXCIrdGhpcy5RZF09YTt3aW5kb3dbXCJwUlRMUENCXCIrdGhpcy5RZF09YjthPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7YS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO2lmKGRvY3VtZW50LmJvZHkpe2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7dHJ5e2EuY29udGVudFdpbmRvdy5kb2N1bWVudHx8RShcIk5vIElFIGRvbWFpbiBzZXR0aW5nIHJlcXVpcmVkXCIpfWNhdGNoKGUpe2Euc3JjPVwiamF2YXNjcmlwdDp2b2lkKChmdW5jdGlvbigpe2RvY3VtZW50Lm9wZW4oKTtkb2N1bWVudC5kb21haW49J1wiK2RvY3VtZW50LmRvbWFpbitcIic7ZG9jdW1lbnQuY2xvc2UoKTt9KSgpKVwifX1lbHNlIHRocm93XCJEb2N1bWVudCBib2R5IGhhcyBub3QgaW5pdGlhbGl6ZWQuIFdhaXQgdG8gaW5pdGlhbGl6ZSBGaXJlYmFzZSB1bnRpbCBhZnRlciB0aGUgZG9jdW1lbnQgaXMgcmVhZHkuXCI7XG5hLmNvbnRlbnREb2N1bWVudD9hLmdiPWEuY29udGVudERvY3VtZW50OmEuY29udGVudFdpbmRvdz9hLmdiPWEuY29udGVudFdpbmRvdy5kb2N1bWVudDphLmRvY3VtZW50JiYoYS5nYj1hLmRvY3VtZW50KTt0aGlzLkVhPWE7YT1cIlwiO3RoaXMuRWEuc3JjJiZcImphdmFzY3JpcHQ6XCI9PT10aGlzLkVhLnNyYy5zdWJzdHIoMCwxMSkmJihhPSc8c2NyaXB0PmRvY3VtZW50LmRvbWFpbj1cIicrZG9jdW1lbnQuZG9tYWluKydcIjtcXHgzYy9zY3JpcHQ+Jyk7YT1cIjxodG1sPjxib2R5PlwiK2ErXCI8L2JvZHk+PC9odG1sPlwiO3RyeXt0aGlzLkVhLmdiLm9wZW4oKSx0aGlzLkVhLmdiLndyaXRlKGEpLHRoaXMuRWEuZ2IuY2xvc2UoKX1jYXRjaChmKXtFKFwiZnJhbWUgd3JpdGluZyBleGNlcHRpb25cIiksZi5zdGFjayYmRShmLnN0YWNrKSxFKGYpfX1cbnRlLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuVWQ9ITE7aWYodGhpcy5FYSl7dGhpcy5FYS5nYi5ib2R5LmlubmVySFRNTD1cIlwiO3ZhciBhPXRoaXM7c2V0VGltZW91dChmdW5jdGlvbigpe251bGwhPT1hLkVhJiYoZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhLkVhKSxhLkVhPW51bGwpfSxNYXRoLmZsb29yKDApKX12YXIgYj10aGlzLmliO2ImJih0aGlzLmliPW51bGwsYigpKX07XG5mdW5jdGlvbiB3ZShhKXtpZihhLlVkJiZhLktkJiZhLnRlLmNvdW50KCk8KDA8YS5RYy5sZW5ndGg/MjoxKSl7YS5aZCsrO3ZhciBiPXt9O2IuaWQ9YS5WZjtiLnB3PWEuV2Y7Yi5zZXI9YS5aZDtmb3IodmFyIGI9YS5ZYyhiKSxjPVwiXCIsZD0wOzA8YS5RYy5sZW5ndGg7KWlmKDE4NzA+PWEuUWNbMF0uT2UubGVuZ3RoKzMwK2MubGVuZ3RoKXt2YXIgZT1hLlFjLnNoaWZ0KCksYz1jK1wiJnNlZ1wiK2QrXCI9XCIrZS5qZytcIiZ0c1wiK2QrXCI9XCIrZS5wZytcIiZkXCIrZCtcIj1cIitlLk9lO2QrK31lbHNlIGJyZWFrO3hlKGEsYitjLGEuWmQpO3JldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIHhlKGEsYixjKXtmdW5jdGlvbiBkKCl7YS50ZS5yZW1vdmUoYyk7d2UoYSl9YS50ZS5hZGQoYywxKTt2YXIgZT1zZXRUaW1lb3V0KGQsTWF0aC5mbG9vcigyNUUzKSk7dmUoYSxiLGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGUpO2QoKX0pfVxuZnVuY3Rpb24gdmUoYSxiLGMpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0cnl7aWYoYS5LZCl7dmFyIGQ9YS5FYS5nYi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2QudHlwZT1cInRleHQvamF2YXNjcmlwdFwiO2QuYXN5bmM9ITA7ZC5zcmM9YjtkLm9ubG9hZD1kLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3ZhciBhPWQucmVhZHlTdGF0ZTthJiZcImxvYWRlZFwiIT09YSYmXCJjb21wbGV0ZVwiIT09YXx8KGQub25sb2FkPWQub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsZC5wYXJlbnROb2RlJiZkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksYygpKX07ZC5vbmVycm9yPWZ1bmN0aW9uKCl7RShcIkxvbmctcG9sbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQ6IFwiK2IpO2EuS2Q9ITE7YS5jbG9zZSgpfTthLkVhLmdiLmJvZHkuYXBwZW5kQ2hpbGQoZCl9fWNhdGNoKGUpe319LE1hdGguZmxvb3IoMSkpfTtmdW5jdGlvbiB5ZShhKXt6ZSh0aGlzLGEpfXZhciBBZT1bcWUsY2RdO2Z1bmN0aW9uIHplKGEsYil7dmFyIGM9Y2QmJmNkLmlzQXZhaWxhYmxlKCksZD1jJiYhKHliLlplfHwhMD09PXliLmdldChcInByZXZpb3VzX3dlYnNvY2tldF9mYWlsdXJlXCIpKTtiLnFnJiYoY3x8TyhcIndzczovLyBVUkwgdXNlZCwgYnV0IGJyb3dzZXIgaXNuJ3Qga25vd24gdG8gc3VwcG9ydCB3ZWJzb2NrZXRzLiAgVHJ5aW5nIGFueXdheS5cIiksZD0hMCk7aWYoZClhLldjPVtjZF07ZWxzZXt2YXIgZT1hLldjPVtdO0ljKEFlLGZ1bmN0aW9uKGEsYil7YiYmYi5pc0F2YWlsYWJsZSgpJiZlLnB1c2goYil9KX19ZnVuY3Rpb24gQmUoYSl7aWYoMDxhLldjLmxlbmd0aClyZXR1cm4gYS5XY1swXTt0aHJvdyBFcnJvcihcIk5vIHRyYW5zcG9ydHMgYXZhaWxhYmxlXCIpO307ZnVuY3Rpb24gQ2UoYSxiLGMsZCxlLGYsaCl7dGhpcy5pZD1hO3RoaXMuZj15YyhcImM6XCIrdGhpcy5pZCtcIjpcIik7dGhpcy5yZT1jO3RoaXMuTGM9ZDt0aGlzLmlhPWU7dGhpcy5xZT1mO3RoaXMuTD1iO3RoaXMuQWQ9W107dGhpcy5LZT0wO3RoaXMuc2Y9bmV3IHllKGIpO3RoaXMuVWE9MDt0aGlzLkNiPWg7dGhpcy5mKFwiQ29ubmVjdGlvbiBjcmVhdGVkXCIpO0RlKHRoaXMpfVxuZnVuY3Rpb24gRGUoYSl7dmFyIGI9QmUoYS5zZik7YS5JPW5ldyBiKFwiYzpcIithLmlkK1wiOlwiK2EuS2UrKyxhLkwsdm9pZCAwLGEuQ2IpO2EudmU9Yi5yZXNwb25zZXNSZXF1aXJlZFRvQmVIZWFsdGh5fHwwO3ZhciBjPUVlKGEsYS5JKSxkPUZlKGEsYS5JKTthLlhjPWEuSTthLlJjPWEuSTthLkQ9bnVsbDthLkJiPSExO3NldFRpbWVvdXQoZnVuY3Rpb24oKXthLkkmJmEuSS5vcGVuKGMsZCl9LE1hdGguZmxvb3IoMCkpO2I9Yi5oZWFsdGh5VGltZW91dHx8MDswPGImJihhLm1kPU1jKGZ1bmN0aW9uKCl7YS5tZD1udWxsO2EuQmJ8fChhLkkmJjEwMjQwMDxhLkkucGI/KGEuZihcIkNvbm5lY3Rpb24gZXhjZWVkZWQgaGVhbHRoeSB0aW1lb3V0IGJ1dCBoYXMgcmVjZWl2ZWQgXCIrYS5JLnBiK1wiIGJ5dGVzLiAgTWFya2luZyBjb25uZWN0aW9uIGhlYWx0aHkuXCIpLGEuQmI9ITAsYS5JLnNkKCkpOmEuSSYmMTAyNDA8YS5JLnFiP2EuZihcIkNvbm5lY3Rpb24gZXhjZWVkZWQgaGVhbHRoeSB0aW1lb3V0IGJ1dCBoYXMgc2VudCBcIitcbmEuSS5xYitcIiBieXRlcy4gIExlYXZpbmcgY29ubmVjdGlvbiBhbGl2ZS5cIik6KGEuZihcIkNsb3NpbmcgdW5oZWFsdGh5IGNvbm5lY3Rpb24gYWZ0ZXIgdGltZW91dC5cIiksYS5jbG9zZSgpKSl9LE1hdGguZmxvb3IoYikpKX1mdW5jdGlvbiBGZShhLGIpe3JldHVybiBmdW5jdGlvbihjKXtiPT09YS5JPyhhLkk9bnVsbCxjfHwwIT09YS5VYT8xPT09YS5VYSYmYS5mKFwiUmVhbHRpbWUgY29ubmVjdGlvbiBsb3N0LlwiKTooYS5mKFwiUmVhbHRpbWUgY29ubmVjdGlvbiBmYWlsZWQuXCIpLFwicy1cIj09PWEuTC4kYS5zdWJzdHIoMCwyKSYmKHliLnJlbW92ZShcImhvc3Q6XCIrYS5MLmhvc3QpLGEuTC4kYT1hLkwuaG9zdCkpLGEuY2xvc2UoKSk6Yj09PWEuRD8oYS5mKFwiU2Vjb25kYXJ5IGNvbm5lY3Rpb24gbG9zdC5cIiksYz1hLkQsYS5EPW51bGwsYS5YYyE9PWMmJmEuUmMhPT1jfHxhLmNsb3NlKCkpOmEuZihcImNsb3NpbmcgYW4gb2xkIGNvbm5lY3Rpb25cIil9fVxuZnVuY3Rpb24gRWUoYSxiKXtyZXR1cm4gZnVuY3Rpb24oYyl7aWYoMiE9YS5VYSlpZihiPT09YS5SYyl7dmFyIGQ9RmMoXCJ0XCIsYyk7Yz1GYyhcImRcIixjKTtpZihcImNcIj09ZCl7aWYoZD1GYyhcInRcIixjKSxcImRcImluIGMpaWYoYz1jLmQsXCJoXCI9PT1kKXt2YXIgZD1jLnRzLGU9Yy52LGY9Yy5oO2EucWY9Yy5zO0liKGEuTCxmKTswPT1hLlVhJiYoYS5JLnN0YXJ0KCksR2UoYSxhLkksZCksXCI1XCIhPT1lJiZPKFwiUHJvdG9jb2wgdmVyc2lvbiBtaXNtYXRjaCBkZXRlY3RlZFwiKSxjPWEuc2YsKGM9MTxjLldjLmxlbmd0aD9jLldjWzFdOm51bGwpJiZIZShhLGMpKX1lbHNlIGlmKFwiblwiPT09ZCl7YS5mKFwicmVjdmQgZW5kIHRyYW5zbWlzc2lvbiBvbiBwcmltYXJ5XCIpO2EuUmM9YS5EO2ZvcihjPTA7YzxhLkFkLmxlbmd0aDsrK2MpYS53ZChhLkFkW2NdKTthLkFkPVtdO0llKGEpfWVsc2VcInNcIj09PWQ/KGEuZihcIkNvbm5lY3Rpb24gc2h1dGRvd24gY29tbWFuZCByZWNlaXZlZC4gU2h1dHRpbmcgZG93bi4uLlwiKSxcbmEucWUmJihhLnFlKGMpLGEucWU9bnVsbCksYS5pYT1udWxsLGEuY2xvc2UoKSk6XCJyXCI9PT1kPyhhLmYoXCJSZXNldCBwYWNrZXQgcmVjZWl2ZWQuICBOZXcgaG9zdDogXCIrYyksSWIoYS5MLGMpLDE9PT1hLlVhP2EuY2xvc2UoKTooSmUoYSksRGUoYSkpKTpcImVcIj09PWQ/emMoXCJTZXJ2ZXIgRXJyb3I6IFwiK2MpOlwib1wiPT09ZD8oYS5mKFwiZ290IHBvbmcgb24gcHJpbWFyeS5cIiksS2UoYSksTGUoYSkpOnpjKFwiVW5rbm93biBjb250cm9sIHBhY2tldCBjb21tYW5kOiBcIitkKX1lbHNlXCJkXCI9PWQmJmEud2QoYyl9ZWxzZSBpZihiPT09YS5EKWlmKGQ9RmMoXCJ0XCIsYyksYz1GYyhcImRcIixjKSxcImNcIj09ZClcInRcImluIGMmJihjPWMudCxcImFcIj09PWM/TWUoYSk6XCJyXCI9PT1jPyhhLmYoXCJHb3QgYSByZXNldCBvbiBzZWNvbmRhcnksIGNsb3NpbmcgaXRcIiksYS5ELmNsb3NlKCksYS5YYyE9PWEuRCYmYS5SYyE9PWEuRHx8YS5jbG9zZSgpKTpcIm9cIj09PWMmJihhLmYoXCJnb3QgcG9uZyBvbiBzZWNvbmRhcnkuXCIpLFxuYS5wZi0tLE1lKGEpKSk7ZWxzZSBpZihcImRcIj09ZClhLkFkLnB1c2goYyk7ZWxzZSB0aHJvdyBFcnJvcihcIlVua25vd24gcHJvdG9jb2wgbGF5ZXI6IFwiK2QpO2Vsc2UgYS5mKFwibWVzc2FnZSBvbiBvbGQgY29ubmVjdGlvblwiKX19Q2UucHJvdG90eXBlLnVhPWZ1bmN0aW9uKGEpe05lKHRoaXMse3Q6XCJkXCIsZDphfSl9O2Z1bmN0aW9uIEllKGEpe2EuWGM9PT1hLkQmJmEuUmM9PT1hLkQmJihhLmYoXCJjbGVhbmluZyB1cCBhbmQgcHJvbW90aW5nIGEgY29ubmVjdGlvbjogXCIrYS5ELllkKSxhLkk9YS5ELGEuRD1udWxsKX1cbmZ1bmN0aW9uIE1lKGEpezA+PWEucGY/KGEuZihcIlNlY29uZGFyeSBjb25uZWN0aW9uIGlzIGhlYWx0aHkuXCIpLGEuQmI9ITAsYS5ELnNkKCksYS5ELnN0YXJ0KCksYS5mKFwic2VuZGluZyBjbGllbnQgYWNrIG9uIHNlY29uZGFyeVwiKSxhLkQuc2VuZCh7dDpcImNcIixkOnt0OlwiYVwiLGQ6e319fSksYS5mKFwiRW5kaW5nIHRyYW5zbWlzc2lvbiBvbiBwcmltYXJ5XCIpLGEuSS5zZW5kKHt0OlwiY1wiLGQ6e3Q6XCJuXCIsZDp7fX19KSxhLlhjPWEuRCxJZShhKSk6KGEuZihcInNlbmRpbmcgcGluZyBvbiBzZWNvbmRhcnkuXCIpLGEuRC5zZW5kKHt0OlwiY1wiLGQ6e3Q6XCJwXCIsZDp7fX19KSl9Q2UucHJvdG90eXBlLndkPWZ1bmN0aW9uKGEpe0tlKHRoaXMpO3RoaXMucmUoYSl9O2Z1bmN0aW9uIEtlKGEpe2EuQmJ8fChhLnZlLS0sMD49YS52ZSYmKGEuZihcIlByaW1hcnkgY29ubmVjdGlvbiBpcyBoZWFsdGh5LlwiKSxhLkJiPSEwLGEuSS5zZCgpKSl9XG5mdW5jdGlvbiBIZShhLGIpe2EuRD1uZXcgYihcImM6XCIrYS5pZCtcIjpcIithLktlKyssYS5MLGEucWYpO2EucGY9Yi5yZXNwb25zZXNSZXF1aXJlZFRvQmVIZWFsdGh5fHwwO2EuRC5vcGVuKEVlKGEsYS5EKSxGZShhLGEuRCkpO01jKGZ1bmN0aW9uKCl7YS5EJiYoYS5mKFwiVGltZWQgb3V0IHRyeWluZyB0byB1cGdyYWRlLlwiKSxhLkQuY2xvc2UoKSl9LE1hdGguZmxvb3IoNkU0KSl9ZnVuY3Rpb24gR2UoYSxiLGMpe2EuZihcIlJlYWx0aW1lIGNvbm5lY3Rpb24gZXN0YWJsaXNoZWQuXCIpO2EuST1iO2EuVWE9MTthLkxjJiYoYS5MYyhjLGEucWYpLGEuTGM9bnVsbCk7MD09PWEudmU/KGEuZihcIlByaW1hcnkgY29ubmVjdGlvbiBpcyBoZWFsdGh5LlwiKSxhLkJiPSEwKTpNYyhmdW5jdGlvbigpe0xlKGEpfSxNYXRoLmZsb29yKDVFMykpfVxuZnVuY3Rpb24gTGUoYSl7YS5CYnx8MSE9PWEuVWF8fChhLmYoXCJzZW5kaW5nIHBpbmcgb24gcHJpbWFyeS5cIiksTmUoYSx7dDpcImNcIixkOnt0OlwicFwiLGQ6e319fSkpfWZ1bmN0aW9uIE5lKGEsYil7aWYoMSE9PWEuVWEpdGhyb3dcIkNvbm5lY3Rpb24gaXMgbm90IGNvbm5lY3RlZFwiO2EuWGMuc2VuZChiKX1DZS5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXsyIT09dGhpcy5VYSYmKHRoaXMuZihcIkNsb3NpbmcgcmVhbHRpbWUgY29ubmVjdGlvbi5cIiksdGhpcy5VYT0yLEplKHRoaXMpLHRoaXMuaWEmJih0aGlzLmlhKCksdGhpcy5pYT1udWxsKSl9O2Z1bmN0aW9uIEplKGEpe2EuZihcIlNodXR0aW5nIGRvd24gYWxsIGNvbm5lY3Rpb25zXCIpO2EuSSYmKGEuSS5jbG9zZSgpLGEuST1udWxsKTthLkQmJihhLkQuY2xvc2UoKSxhLkQ9bnVsbCk7YS5tZCYmKGNsZWFyVGltZW91dChhLm1kKSxhLm1kPW51bGwpfTtmdW5jdGlvbiBMKGEsYil7aWYoMT09YXJndW1lbnRzLmxlbmd0aCl7dGhpcy5vPWEuc3BsaXQoXCIvXCIpO2Zvcih2YXIgYz0wLGQ9MDtkPHRoaXMuby5sZW5ndGg7ZCsrKTA8dGhpcy5vW2RdLmxlbmd0aCYmKHRoaXMub1tjXT10aGlzLm9bZF0sYysrKTt0aGlzLm8ubGVuZ3RoPWM7dGhpcy5ZPTB9ZWxzZSB0aGlzLm89YSx0aGlzLlk9Yn1mdW5jdGlvbiBUKGEsYil7dmFyIGM9SihhKTtpZihudWxsPT09YylyZXR1cm4gYjtpZihjPT09SihiKSlyZXR1cm4gVChEKGEpLEQoYikpO3Rocm93IEVycm9yKFwiSU5URVJOQUwgRVJST1I6IGlubmVyUGF0aCAoXCIrYitcIikgaXMgbm90IHdpdGhpbiBvdXRlclBhdGggKFwiK2ErXCIpXCIpO31cbmZ1bmN0aW9uIE9lKGEsYil7Zm9yKHZhciBjPWEuc2xpY2UoKSxkPWIuc2xpY2UoKSxlPTA7ZTxjLmxlbmd0aCYmZTxkLmxlbmd0aDtlKyspe3ZhciBmPWhjKGNbZV0sZFtlXSk7aWYoMCE9PWYpcmV0dXJuIGZ9cmV0dXJuIGMubGVuZ3RoPT09ZC5sZW5ndGg/MDpjLmxlbmd0aDxkLmxlbmd0aD8tMToxfWZ1bmN0aW9uIEooYSl7cmV0dXJuIGEuWT49YS5vLmxlbmd0aD9udWxsOmEub1thLlldfWZ1bmN0aW9uIEFkKGEpe3JldHVybiBhLm8ubGVuZ3RoLWEuWX1mdW5jdGlvbiBEKGEpe3ZhciBiPWEuWTtiPGEuby5sZW5ndGgmJmIrKztyZXR1cm4gbmV3IEwoYS5vLGIpfWZ1bmN0aW9uIEJkKGEpe3JldHVybiBhLlk8YS5vLmxlbmd0aD9hLm9bYS5vLmxlbmd0aC0xXTpudWxsfWc9TC5wcm90b3R5cGU7XG5nLnRvU3RyaW5nPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPVwiXCIsYj10aGlzLlk7Yjx0aGlzLm8ubGVuZ3RoO2IrKylcIlwiIT09dGhpcy5vW2JdJiYoYSs9XCIvXCIrdGhpcy5vW2JdKTtyZXR1cm4gYXx8XCIvXCJ9O2cuc2xpY2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuby5zbGljZSh0aGlzLlkrKGF8fDApKX07Zy5wYXJlbnQ9ZnVuY3Rpb24oKXtpZih0aGlzLlk+PXRoaXMuby5sZW5ndGgpcmV0dXJuIG51bGw7Zm9yKHZhciBhPVtdLGI9dGhpcy5ZO2I8dGhpcy5vLmxlbmd0aC0xO2IrKylhLnB1c2godGhpcy5vW2JdKTtyZXR1cm4gbmV3IEwoYSwwKX07XG5nLm49ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVtdLGM9dGhpcy5ZO2M8dGhpcy5vLmxlbmd0aDtjKyspYi5wdXNoKHRoaXMub1tjXSk7aWYoYSBpbnN0YW5jZW9mIEwpZm9yKGM9YS5ZO2M8YS5vLmxlbmd0aDtjKyspYi5wdXNoKGEub1tjXSk7ZWxzZSBmb3IoYT1hLnNwbGl0KFwiL1wiKSxjPTA7YzxhLmxlbmd0aDtjKyspMDxhW2NdLmxlbmd0aCYmYi5wdXNoKGFbY10pO3JldHVybiBuZXcgTChiLDApfTtnLmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ZPj10aGlzLm8ubGVuZ3RofTtnLlo9ZnVuY3Rpb24oYSl7aWYoQWQodGhpcykhPT1BZChhKSlyZXR1cm4hMTtmb3IodmFyIGI9dGhpcy5ZLGM9YS5ZO2I8PXRoaXMuby5sZW5ndGg7YisrLGMrKylpZih0aGlzLm9bYl0hPT1hLm9bY10pcmV0dXJuITE7cmV0dXJuITB9O1xuZy5jb250YWlucz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLlksYz1hLlk7aWYoQWQodGhpcyk+QWQoYSkpcmV0dXJuITE7Zm9yKDtiPHRoaXMuby5sZW5ndGg7KXtpZih0aGlzLm9bYl0hPT1hLm9bY10pcmV0dXJuITE7KytiOysrY31yZXR1cm4hMH07dmFyIEM9bmV3IEwoXCJcIik7ZnVuY3Rpb24gUGUoYSxiKXt0aGlzLlFhPWEuc2xpY2UoKTt0aGlzLkhhPU1hdGgubWF4KDEsdGhpcy5RYS5sZW5ndGgpO3RoaXMuUGU9Yjtmb3IodmFyIGM9MDtjPHRoaXMuUWEubGVuZ3RoO2MrKyl0aGlzLkhhKz1uYih0aGlzLlFhW2NdKTtRZSh0aGlzKX1QZS5wcm90b3R5cGUucHVzaD1mdW5jdGlvbihhKXswPHRoaXMuUWEubGVuZ3RoJiYodGhpcy5IYSs9MSk7dGhpcy5RYS5wdXNoKGEpO3RoaXMuSGErPW5iKGEpO1FlKHRoaXMpfTtQZS5wcm90b3R5cGUucG9wPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5RYS5wb3AoKTt0aGlzLkhhLT1uYihhKTswPHRoaXMuUWEubGVuZ3RoJiYtLXRoaXMuSGF9O1xuZnVuY3Rpb24gUWUoYSl7aWYoNzY4PGEuSGEpdGhyb3cgRXJyb3IoYS5QZStcImhhcyBhIGtleSBwYXRoIGxvbmdlciB0aGFuIDc2OCBieXRlcyAoXCIrYS5IYStcIikuXCIpO2lmKDMyPGEuUWEubGVuZ3RoKXRocm93IEVycm9yKGEuUGUrXCJwYXRoIHNwZWNpZmllZCBleGNlZWRzIHRoZSBtYXhpbXVtIGRlcHRoIHRoYXQgY2FuIGJlIHdyaXR0ZW4gKDMyKSBvciBvYmplY3QgY29udGFpbnMgYSBjeWNsZSBcIitSZShhKSk7fWZ1bmN0aW9uIFJlKGEpe3JldHVybiAwPT1hLlFhLmxlbmd0aD9cIlwiOlwiaW4gcHJvcGVydHkgJ1wiK2EuUWEuam9pbihcIi5cIikrXCInXCJ9O2Z1bmN0aW9uIFNlKGEpe2EgaW5zdGFuY2VvZiBUZXx8QWMoXCJEb24ndCBjYWxsIG5ldyBEYXRhYmFzZSgpIGRpcmVjdGx5IC0gcGxlYXNlIHVzZSBmaXJlYmFzZS5kYXRhYmFzZSgpLlwiKTt0aGlzLnRhPWE7dGhpcy5iYT1uZXcgVShhLEMpO3RoaXMuSU5URVJOQUw9bmV3IFVlKHRoaXMpfXZhciBWZT17VElNRVNUQU1QOntcIi5zdlwiOlwidGltZXN0YW1wXCJ9fTtnPVNlLnByb3RvdHlwZTtnLmFwcD1udWxsO2cuamY9ZnVuY3Rpb24oYSl7V2UodGhpcyxcInJlZlwiKTt4KFwiZGF0YWJhc2UucmVmXCIsMCwxLGFyZ3VtZW50cy5sZW5ndGgpO3JldHVybiBuKGEpP3RoaXMuYmEubihhKTp0aGlzLmJhfTtcbmcuZ2c9ZnVuY3Rpb24oYSl7V2UodGhpcyxcImRhdGFiYXNlLnJlZkZyb21VUkxcIik7eChcImRhdGFiYXNlLnJlZkZyb21VUkxcIiwxLDEsYXJndW1lbnRzLmxlbmd0aCk7dmFyIGI9QmMoYSk7WGUoXCJkYXRhYmFzZS5yZWZGcm9tVVJMXCIsYik7dmFyIGM9Yi5qYztjLmhvc3QhPT10aGlzLnRhLkwuaG9zdCYmQWMoXCJkYXRhYmFzZS5yZWZGcm9tVVJMOiBIb3N0IG5hbWUgZG9lcyBub3QgbWF0Y2ggdGhlIGN1cnJlbnQgZGF0YWJhc2U6IChmb3VuZCBcIitjLmhvc3QrXCIgYnV0IGV4cGVjdGVkIFwiK3RoaXMudGEuTC5ob3N0K1wiKVwiKTtyZXR1cm4gdGhpcy5qZihiLnBhdGgudG9TdHJpbmcoKSl9O2Z1bmN0aW9uIFdlKGEsYil7bnVsbD09PWEudGEmJkFjKFwiQ2Fubm90IGNhbGwgXCIrYitcIiBvbiBhIGRlbGV0ZWQgZGF0YWJhc2UuXCIpfWcuUGY9ZnVuY3Rpb24oKXt4KFwiZGF0YWJhc2UuZ29PZmZsaW5lXCIsMCwwLGFyZ3VtZW50cy5sZW5ndGgpO1dlKHRoaXMsXCJnb09mZmxpbmVcIik7dGhpcy50YS5hYigpfTtcbmcuUWY9ZnVuY3Rpb24oKXt4KFwiZGF0YWJhc2UuZ29PbmxpbmVcIiwwLDAsYXJndW1lbnRzLmxlbmd0aCk7V2UodGhpcyxcImdvT25saW5lXCIpO3RoaXMudGEua2MoKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KFNlLnByb3RvdHlwZSxcImFwcFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50YS5hcHB9fSk7ZnVuY3Rpb24gVWUoYSl7dGhpcy5ZYT1hfVVlLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24oKXtXZSh0aGlzLllhLFwiZGVsZXRlXCIpO3ZhciBhPVllLlZiKCksYj10aGlzLllhLnRhO3coYS5sYixiLmFwcC5uYW1lKSE9PWImJkFjKFwiRGF0YWJhc2UgXCIrYi5hcHAubmFtZStcIiBoYXMgYWxyZWFkeSBiZWVuIGRlbGV0ZWQuXCIpO2IuYWIoKTtkZWxldGUgYS5sYltiLmFwcC5uYW1lXTt0aGlzLllhLnRhPW51bGw7dGhpcy5ZYS5iYT1udWxsO3RoaXMuWWE9dGhpcy5ZYS5JTlRFUk5BTD1udWxsO3JldHVybiBmaXJlYmFzZS5Qcm9taXNlLnJlc29sdmUoKX07XG5TZS5wcm90b3R5cGUucmVmPVNlLnByb3RvdHlwZS5qZjtTZS5wcm90b3R5cGUucmVmRnJvbVVSTD1TZS5wcm90b3R5cGUuZ2c7U2UucHJvdG90eXBlLmdvT25saW5lPVNlLnByb3RvdHlwZS5RZjtTZS5wcm90b3R5cGUuZ29PZmZsaW5lPVNlLnByb3RvdHlwZS5QZjtVZS5wcm90b3R5cGVbXCJkZWxldGVcIl09VWUucHJvdG90eXBlLmRlbGV0ZTtmdW5jdGlvbiBtYygpe3RoaXMuaz10aGlzLkI9bnVsbH1tYy5wcm90b3R5cGUuZmluZD1mdW5jdGlvbihhKXtpZihudWxsIT10aGlzLkIpcmV0dXJuIHRoaXMuQi5QKGEpO2lmKGEuZSgpfHxudWxsPT10aGlzLmspcmV0dXJuIG51bGw7dmFyIGI9SihhKTthPUQoYSk7cmV0dXJuIHRoaXMuay5jb250YWlucyhiKT90aGlzLmsuZ2V0KGIpLmZpbmQoYSk6bnVsbH07ZnVuY3Rpb24gb2MoYSxiLGMpe2lmKGIuZSgpKWEuQj1jLGEuaz1udWxsO2Vsc2UgaWYobnVsbCE9PWEuQilhLkI9YS5CLkYoYixjKTtlbHNle251bGw9PWEuayYmKGEuaz1uZXcgb2UpO3ZhciBkPUooYik7YS5rLmNvbnRhaW5zKGQpfHxhLmsuYWRkKGQsbmV3IG1jKTthPWEuay5nZXQoZCk7Yj1EKGIpO29jKGEsYixjKX19XG5mdW5jdGlvbiBaZShhLGIpe2lmKGIuZSgpKXJldHVybiBhLkI9bnVsbCxhLms9bnVsbCwhMDtpZihudWxsIT09YS5CKXtpZihhLkIuSigpKXJldHVybiExO3ZhciBjPWEuQjthLkI9bnVsbDtjLk8oTixmdW5jdGlvbihiLGMpe29jKGEsbmV3IEwoYiksYyl9KTtyZXR1cm4gWmUoYSxiKX1yZXR1cm4gbnVsbCE9PWEuaz8oYz1KKGIpLGI9RChiKSxhLmsuY29udGFpbnMoYykmJlplKGEuay5nZXQoYyksYikmJmEuay5yZW1vdmUoYyksYS5rLmUoKT8oYS5rPW51bGwsITApOiExKTohMH1mdW5jdGlvbiBuYyhhLGIsYyl7bnVsbCE9PWEuQj9jKGIsYS5CKTphLk8oZnVuY3Rpb24oYSxlKXt2YXIgZj1uZXcgTChiLnRvU3RyaW5nKCkrXCIvXCIrYSk7bmMoZSxmLGMpfSl9bWMucHJvdG90eXBlLk89ZnVuY3Rpb24oYSl7bnVsbCE9PXRoaXMuayYmcGUodGhpcy5rLGZ1bmN0aW9uKGIsYyl7YShiLGMpfSl9O3ZhciAkZT0vW1xcW1xcXS4jJFxcL1xcdTAwMDAtXFx1MDAxRlxcdTAwN0ZdLyxhZj0vW1xcW1xcXS4jJFxcdTAwMDAtXFx1MDAxRlxcdTAwN0ZdLztmdW5jdGlvbiBiZihhKXtyZXR1cm4gcChhKSYmMCE9PWEubGVuZ3RoJiYhJGUudGVzdChhKX1mdW5jdGlvbiBjZihhKXtyZXR1cm4gbnVsbD09PWF8fHAoYSl8fGdhKGEpJiYhQ2MoYSl8fGlhKGEpJiZjYihhLFwiLnN2XCIpfWZ1bmN0aW9uIGRmKGEsYixjLGQpe2QmJiFuKGIpfHxlZih5KGEsMSxkKSxiLGMpfVxuZnVuY3Rpb24gZWYoYSxiLGMpe2MgaW5zdGFuY2VvZiBMJiYoYz1uZXcgUGUoYyxhKSk7aWYoIW4oYikpdGhyb3cgRXJyb3IoYStcImNvbnRhaW5zIHVuZGVmaW5lZCBcIitSZShjKSk7aWYoaGEoYikpdGhyb3cgRXJyb3IoYStcImNvbnRhaW5zIGEgZnVuY3Rpb24gXCIrUmUoYykrXCIgd2l0aCBjb250ZW50czogXCIrYi50b1N0cmluZygpKTtpZihDYyhiKSl0aHJvdyBFcnJvcihhK1wiY29udGFpbnMgXCIrYi50b1N0cmluZygpK1wiIFwiK1JlKGMpKTtpZihwKGIpJiZiLmxlbmd0aD4xMDQ4NTc2MC8zJiYxMDQ4NTc2MDxuYihiKSl0aHJvdyBFcnJvcihhK1wiY29udGFpbnMgYSBzdHJpbmcgZ3JlYXRlciB0aGFuIDEwNDg1NzYwIHV0ZjggYnl0ZXMgXCIrUmUoYykrXCIgKCdcIitiLnN1YnN0cmluZygwLDUwKStcIi4uLicpXCIpO2lmKGlhKGIpKXt2YXIgZD0hMSxlPSExO2RiKGIsZnVuY3Rpb24oYixoKXtpZihcIi52YWx1ZVwiPT09YilkPSEwO2Vsc2UgaWYoXCIucHJpb3JpdHlcIiE9PWImJlwiLnN2XCIhPT1iJiYoZT1cbiEwLCFiZihiKSkpdGhyb3cgRXJyb3IoYStcIiBjb250YWlucyBhbiBpbnZhbGlkIGtleSAoXCIrYitcIikgXCIrUmUoYykrJy4gIEtleXMgbXVzdCBiZSBub24tZW1wdHkgc3RyaW5ncyBhbmQgY2FuXFwndCBjb250YWluIFwiLlwiLCBcIiNcIiwgXCIkXCIsIFwiL1wiLCBcIltcIiwgb3IgXCJdXCInKTtjLnB1c2goYik7ZWYoYSxoLGMpO2MucG9wKCl9KTtpZihkJiZlKXRocm93IEVycm9yKGErJyBjb250YWlucyBcIi52YWx1ZVwiIGNoaWxkICcrUmUoYykrXCIgaW4gYWRkaXRpb24gdG8gYWN0dWFsIGNoaWxkcmVuLlwiKTt9fVxuZnVuY3Rpb24gZmYoYSxiKXt2YXIgYyxkO2ZvcihjPTA7YzxiLmxlbmd0aDtjKyspe2Q9YltjXTtmb3IodmFyIGU9ZC5zbGljZSgpLGY9MDtmPGUubGVuZ3RoO2YrKylpZigoXCIucHJpb3JpdHlcIiE9PWVbZl18fGYhPT1lLmxlbmd0aC0xKSYmIWJmKGVbZl0pKXRocm93IEVycm9yKGErXCJjb250YWlucyBhbiBpbnZhbGlkIGtleSAoXCIrZVtmXStcIikgaW4gcGF0aCBcIitkLnRvU3RyaW5nKCkrJy4gS2V5cyBtdXN0IGJlIG5vbi1lbXB0eSBzdHJpbmdzIGFuZCBjYW5cXCd0IGNvbnRhaW4gXCIuXCIsIFwiI1wiLCBcIiRcIiwgXCIvXCIsIFwiW1wiLCBvciBcIl1cIicpO31iLnNvcnQoT2UpO2U9bnVsbDtmb3IoYz0wO2M8Yi5sZW5ndGg7YysrKXtkPWJbY107aWYobnVsbCE9PWUmJmUuY29udGFpbnMoZCkpdGhyb3cgRXJyb3IoYStcImNvbnRhaW5zIGEgcGF0aCBcIitlLnRvU3RyaW5nKCkrXCIgdGhhdCBpcyBhbmNlc3RvciBvZiBhbm90aGVyIHBhdGggXCIrZC50b1N0cmluZygpKTtlPWR9fVxuZnVuY3Rpb24gZ2YoYSxiLGMpe3ZhciBkPXkoYSwxLCExKTtpZighaWEoYil8fGVhKGIpKXRocm93IEVycm9yKGQrXCIgbXVzdCBiZSBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgY2hpbGRyZW4gdG8gcmVwbGFjZS5cIik7dmFyIGU9W107ZGIoYixmdW5jdGlvbihhLGIpe3ZhciBrPW5ldyBMKGEpO2VmKGQsYixjLm4oaykpO2lmKFwiLnByaW9yaXR5XCI9PT1CZChrKSYmIWNmKGIpKXRocm93IEVycm9yKGQrXCJjb250YWlucyBhbiBpbnZhbGlkIHZhbHVlIGZvciAnXCIray50b1N0cmluZygpK1wiJywgd2hpY2ggbXVzdCBiZSBhIHZhbGlkIEZpcmViYXNlIHByaW9yaXR5IChhIHN0cmluZywgZmluaXRlIG51bWJlciwgc2VydmVyIHZhbHVlLCBvciBudWxsKS5cIik7ZS5wdXNoKGspfSk7ZmYoZCxlKX1cbmZ1bmN0aW9uIGhmKGEsYixjKXtpZihDYyhjKSl0aHJvdyBFcnJvcih5KGEsYiwhMSkrXCJpcyBcIitjLnRvU3RyaW5nKCkrXCIsIGJ1dCBtdXN0IGJlIGEgdmFsaWQgRmlyZWJhc2UgcHJpb3JpdHkgKGEgc3RyaW5nLCBmaW5pdGUgbnVtYmVyLCBzZXJ2ZXIgdmFsdWUsIG9yIG51bGwpLlwiKTtpZighY2YoYykpdGhyb3cgRXJyb3IoeShhLGIsITEpK1wibXVzdCBiZSBhIHZhbGlkIEZpcmViYXNlIHByaW9yaXR5IChhIHN0cmluZywgZmluaXRlIG51bWJlciwgc2VydmVyIHZhbHVlLCBvciBudWxsKS5cIik7fVxuZnVuY3Rpb24gamYoYSxiLGMpe2lmKCFjfHxuKGIpKXN3aXRjaChiKXtjYXNlIFwidmFsdWVcIjpjYXNlIFwiY2hpbGRfYWRkZWRcIjpjYXNlIFwiY2hpbGRfcmVtb3ZlZFwiOmNhc2UgXCJjaGlsZF9jaGFuZ2VkXCI6Y2FzZSBcImNoaWxkX21vdmVkXCI6YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KGEsMSxjKSsnbXVzdCBiZSBhIHZhbGlkIGV2ZW50IHR5cGU6IFwidmFsdWVcIiwgXCJjaGlsZF9hZGRlZFwiLCBcImNoaWxkX3JlbW92ZWRcIiwgXCJjaGlsZF9jaGFuZ2VkXCIsIG9yIFwiY2hpbGRfbW92ZWRcIi4nKTt9fWZ1bmN0aW9uIGtmKGEsYil7aWYobihiKSYmIWJmKGIpKXRocm93IEVycm9yKHkoYSwyLCEwKSsnd2FzIGFuIGludmFsaWQga2V5OiBcIicrYisnXCIuICBGaXJlYmFzZSBrZXlzIG11c3QgYmUgbm9uLWVtcHR5IHN0cmluZ3MgYW5kIGNhblxcJ3QgY29udGFpbiBcIi5cIiwgXCIjXCIsIFwiJFwiLCBcIi9cIiwgXCJbXCIsIG9yIFwiXVwiKS4nKTt9XG5mdW5jdGlvbiBsZihhLGIpe2lmKCFwKGIpfHwwPT09Yi5sZW5ndGh8fGFmLnRlc3QoYikpdGhyb3cgRXJyb3IoeShhLDEsITEpKyd3YXMgYW4gaW52YWxpZCBwYXRoOiBcIicrYisnXCIuIFBhdGhzIG11c3QgYmUgbm9uLWVtcHR5IHN0cmluZ3MgYW5kIGNhblxcJ3QgY29udGFpbiBcIi5cIiwgXCIjXCIsIFwiJFwiLCBcIltcIiwgb3IgXCJdXCInKTt9ZnVuY3Rpb24gbWYoYSxiKXtpZihcIi5pbmZvXCI9PT1KKGIpKXRocm93IEVycm9yKGErXCIgZmFpbGVkOiBDYW4ndCBtb2RpZnkgZGF0YSB1bmRlciAvLmluZm8vXCIpO31cbmZ1bmN0aW9uIFhlKGEsYil7dmFyIGM9Yi5wYXRoLnRvU3RyaW5nKCksZDshKGQ9IXAoYi5qYy5ob3N0KXx8MD09PWIuamMuaG9zdC5sZW5ndGh8fCFiZihiLmpjLm5lKSkmJihkPTAhPT1jLmxlbmd0aCkmJihjJiYoYz1jLnJlcGxhY2UoL15cXC8qXFwuaW5mbyhcXC98JCkvLFwiL1wiKSksZD0hKHAoYykmJjAhPT1jLmxlbmd0aCYmIWFmLnRlc3QoYykpKTtpZihkKXRocm93IEVycm9yKHkoYSwxLCExKSsnbXVzdCBiZSBhIHZhbGlkIGZpcmViYXNlIFVSTCBhbmQgdGhlIHBhdGggY2FuXFwndCBjb250YWluIFwiLlwiLCBcIiNcIiwgXCIkXCIsIFwiW1wiLCBvciBcIl1cIi4nKTt9O2Z1bmN0aW9uIFYoYSxiKXt0aGlzLnRhPWE7dGhpcy5xYT1ifVYucHJvdG90eXBlLmNhbmNlbD1mdW5jdGlvbihhKXt4KFwiRmlyZWJhc2Uub25EaXNjb25uZWN0KCkuY2FuY2VsXCIsMCwxLGFyZ3VtZW50cy5sZW5ndGgpO0EoXCJGaXJlYmFzZS5vbkRpc2Nvbm5lY3QoKS5jYW5jZWxcIiwxLGEsITApO3ZhciBiPW5ldyBoYjt0aGlzLnRhLnhkKHRoaXMucWEsaWIoYixhKSk7cmV0dXJuIGIucmF9O1YucHJvdG90eXBlLmNhbmNlbD1WLnByb3RvdHlwZS5jYW5jZWw7Vi5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKGEpe3goXCJGaXJlYmFzZS5vbkRpc2Nvbm5lY3QoKS5yZW1vdmVcIiwwLDEsYXJndW1lbnRzLmxlbmd0aCk7bWYoXCJGaXJlYmFzZS5vbkRpc2Nvbm5lY3QoKS5yZW1vdmVcIix0aGlzLnFhKTtBKFwiRmlyZWJhc2Uub25EaXNjb25uZWN0KCkucmVtb3ZlXCIsMSxhLCEwKTt2YXIgYj1uZXcgaGI7bmYodGhpcy50YSx0aGlzLnFhLG51bGwsaWIoYixhKSk7cmV0dXJuIGIucmF9O1xuVi5wcm90b3R5cGUucmVtb3ZlPVYucHJvdG90eXBlLnJlbW92ZTtWLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSxiKXt4KFwiRmlyZWJhc2Uub25EaXNjb25uZWN0KCkuc2V0XCIsMSwyLGFyZ3VtZW50cy5sZW5ndGgpO21mKFwiRmlyZWJhc2Uub25EaXNjb25uZWN0KCkuc2V0XCIsdGhpcy5xYSk7ZGYoXCJGaXJlYmFzZS5vbkRpc2Nvbm5lY3QoKS5zZXRcIixhLHRoaXMucWEsITEpO0EoXCJGaXJlYmFzZS5vbkRpc2Nvbm5lY3QoKS5zZXRcIiwyLGIsITApO3ZhciBjPW5ldyBoYjtuZih0aGlzLnRhLHRoaXMucWEsYSxpYihjLGIpKTtyZXR1cm4gYy5yYX07Vi5wcm90b3R5cGUuc2V0PVYucHJvdG90eXBlLnNldDtcblYucHJvdG90eXBlLkpiPWZ1bmN0aW9uKGEsYixjKXt4KFwiRmlyZWJhc2Uub25EaXNjb25uZWN0KCkuc2V0V2l0aFByaW9yaXR5XCIsMiwzLGFyZ3VtZW50cy5sZW5ndGgpO21mKFwiRmlyZWJhc2Uub25EaXNjb25uZWN0KCkuc2V0V2l0aFByaW9yaXR5XCIsdGhpcy5xYSk7ZGYoXCJGaXJlYmFzZS5vbkRpc2Nvbm5lY3QoKS5zZXRXaXRoUHJpb3JpdHlcIixhLHRoaXMucWEsITEpO2hmKFwiRmlyZWJhc2Uub25EaXNjb25uZWN0KCkuc2V0V2l0aFByaW9yaXR5XCIsMixiKTtBKFwiRmlyZWJhc2Uub25EaXNjb25uZWN0KCkuc2V0V2l0aFByaW9yaXR5XCIsMyxjLCEwKTt2YXIgZD1uZXcgaGI7b2YodGhpcy50YSx0aGlzLnFhLGEsYixpYihkLGMpKTtyZXR1cm4gZC5yYX07Vi5wcm90b3R5cGUuc2V0V2l0aFByaW9yaXR5PVYucHJvdG90eXBlLkpiO1xuVi5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKGEsYil7eChcIkZpcmViYXNlLm9uRGlzY29ubmVjdCgpLnVwZGF0ZVwiLDEsMixhcmd1bWVudHMubGVuZ3RoKTttZihcIkZpcmViYXNlLm9uRGlzY29ubmVjdCgpLnVwZGF0ZVwiLHRoaXMucWEpO2lmKGVhKGEpKXtmb3IodmFyIGM9e30sZD0wO2Q8YS5sZW5ndGg7KytkKWNbXCJcIitkXT1hW2RdO2E9YztPKFwiUGFzc2luZyBhbiBBcnJheSB0byBGaXJlYmFzZS5vbkRpc2Nvbm5lY3QoKS51cGRhdGUoKSBpcyBkZXByZWNhdGVkLiBVc2Ugc2V0KCkgaWYgeW91IHdhbnQgdG8gb3ZlcndyaXRlIHRoZSBleGlzdGluZyBkYXRhLCBvciBhbiBPYmplY3Qgd2l0aCBpbnRlZ2VyIGtleXMgaWYgeW91IHJlYWxseSBkbyB3YW50IHRvIG9ubHkgdXBkYXRlIHNvbWUgb2YgdGhlIGNoaWxkcmVuLlwiKX1nZihcIkZpcmViYXNlLm9uRGlzY29ubmVjdCgpLnVwZGF0ZVwiLGEsdGhpcy5xYSk7QShcIkZpcmViYXNlLm9uRGlzY29ubmVjdCgpLnVwZGF0ZVwiLDIsYiwhMCk7XG5jPW5ldyBoYjtwZih0aGlzLnRhLHRoaXMucWEsYSxpYihjLGIpKTtyZXR1cm4gYy5yYX07Vi5wcm90b3R5cGUudXBkYXRlPVYucHJvdG90eXBlLnVwZGF0ZTtmdW5jdGlvbiBxZihhKXtIKGVhKGEpJiYwPGEubGVuZ3RoLFwiUmVxdWlyZXMgYSBub24tZW1wdHkgYXJyYXlcIik7dGhpcy5CZj1hO3RoaXMuRGM9e319cWYucHJvdG90eXBlLkVlPWZ1bmN0aW9uKGEsYil7dmFyIGM7Yz10aGlzLkRjW2FdfHxbXTt2YXIgZD1jLmxlbmd0aDtpZigwPGQpe2Zvcih2YXIgZT1BcnJheShkKSxmPTA7ZjxkO2YrKyllW2ZdPWNbZl07Yz1lfWVsc2UgYz1bXTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKWNbZF0uSGUuYXBwbHkoY1tkXS5NYSxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpfTtxZi5wcm90b3R5cGUuZ2M9ZnVuY3Rpb24oYSxiLGMpe3JmKHRoaXMsYSk7dGhpcy5EY1thXT10aGlzLkRjW2FdfHxbXTt0aGlzLkRjW2FdLnB1c2goe0hlOmIsTWE6Y30pOyhhPXRoaXMuVWUoYSkpJiZiLmFwcGx5KGMsYSl9O1xucWYucHJvdG90eXBlLkljPWZ1bmN0aW9uKGEsYixjKXtyZih0aGlzLGEpO2E9dGhpcy5EY1thXXx8W107Zm9yKHZhciBkPTA7ZDxhLmxlbmd0aDtkKyspaWYoYVtkXS5IZT09PWImJighY3x8Yz09PWFbZF0uTWEpKXthLnNwbGljZShkLDEpO2JyZWFrfX07ZnVuY3Rpb24gcmYoYSxiKXtIKE9hKGEuQmYsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSksXCJVbmtub3duIGV2ZW50OiBcIitiKX07ZnVuY3Rpb24gc2YoKXtxZi5jYWxsKHRoaXMsW1wib25saW5lXCJdKTt0aGlzLmhjPSEwO2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2Ygd2luZG93JiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyJiYhcWIoKSl7dmFyIGE9dGhpczt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLGZ1bmN0aW9uKCl7YS5oY3x8KGEuaGM9ITAsYS5FZShcIm9ubGluZVwiLCEwKSl9LCExKTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIixmdW5jdGlvbigpe2EuaGMmJihhLmhjPSExLGEuRWUoXCJvbmxpbmVcIiwhMSkpfSwhMSl9fWxhKHNmLHFmKTtzZi5wcm90b3R5cGUuVWU9ZnVuY3Rpb24oYSl7SChcIm9ubGluZVwiPT09YSxcIlVua25vd24gZXZlbnQgdHlwZTogXCIrYSk7cmV0dXJuW3RoaXMuaGNdfTtjYShzZik7ZnVuY3Rpb24gdGYoKXtxZi5jYWxsKHRoaXMsW1widmlzaWJsZVwiXSk7dmFyIGEsYjtcInVuZGVmaW5lZFwiIT09dHlwZW9mIGRvY3VtZW50JiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXImJihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGRvY3VtZW50LmhpZGRlbj8oYj1cInZpc2liaWxpdHljaGFuZ2VcIixhPVwiaGlkZGVuXCIpOlwidW5kZWZpbmVkXCIhPT10eXBlb2YgZG9jdW1lbnQubW96SGlkZGVuPyhiPVwibW96dmlzaWJpbGl0eWNoYW5nZVwiLGE9XCJtb3pIaWRkZW5cIik6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudC5tc0hpZGRlbj8oYj1cIm1zdmlzaWJpbGl0eWNoYW5nZVwiLGE9XCJtc0hpZGRlblwiKTpcInVuZGVmaW5lZFwiIT09dHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiYmKGI9XCJ3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlXCIsYT1cIndlYmtpdEhpZGRlblwiKSk7dGhpcy5NYj0hMDtpZihiKXt2YXIgYz10aGlzO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYixcbmZ1bmN0aW9uKCl7dmFyIGI9IWRvY3VtZW50W2FdO2IhPT1jLk1iJiYoYy5NYj1iLGMuRWUoXCJ2aXNpYmxlXCIsYikpfSwhMSl9fWxhKHRmLHFmKTt0Zi5wcm90b3R5cGUuVWU9ZnVuY3Rpb24oYSl7SChcInZpc2libGVcIj09PWEsXCJVbmtub3duIGV2ZW50IHR5cGU6IFwiK2EpO3JldHVyblt0aGlzLk1iXX07Y2EodGYpO3ZhciB1Zj1mdW5jdGlvbigpe3ZhciBhPTAsYj1bXTtyZXR1cm4gZnVuY3Rpb24oYyl7dmFyIGQ9Yz09PWE7YT1jO2Zvcih2YXIgZT1BcnJheSg4KSxmPTc7MDw9ZjtmLS0pZVtmXT1cIi0wMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpfYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIi5jaGFyQXQoYyU2NCksYz1NYXRoLmZsb29yKGMvNjQpO0goMD09PWMsXCJDYW5ub3QgcHVzaCBhdCB0aW1lID09IDBcIik7Yz1lLmpvaW4oXCJcIik7aWYoZCl7Zm9yKGY9MTE7MDw9ZiYmNjM9PT1iW2ZdO2YtLSliW2ZdPTA7YltmXSsrfWVsc2UgZm9yKGY9MDsxMj5mO2YrKyliW2ZdPU1hdGguZmxvb3IoNjQqTWF0aC5yYW5kb20oKSk7Zm9yKGY9MDsxMj5mO2YrKyljKz1cIi0wMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpfYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIi5jaGFyQXQoYltmXSk7SCgyMD09PWMubGVuZ3RoLFwibmV4dFB1c2hJZDogTGVuZ3RoIHNob3VsZCBiZSAyMC5cIik7XG5yZXR1cm4gY319KCk7ZnVuY3Rpb24gdmYoYSxiKXt0aGlzLkxhPWE7dGhpcy5iYT1iP2I6d2Z9Zz12Zi5wcm90b3R5cGU7Zy5PYT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgdmYodGhpcy5MYSx0aGlzLmJhLk9hKGEsYix0aGlzLkxhKS5YKG51bGwsbnVsbCwhMSxudWxsLG51bGwpKX07Zy5yZW1vdmU9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyB2Zih0aGlzLkxhLHRoaXMuYmEucmVtb3ZlKGEsdGhpcy5MYSkuWChudWxsLG51bGwsITEsbnVsbCxudWxsKSl9O2cuZ2V0PWZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjPXRoaXMuYmE7IWMuZSgpOyl7Yj10aGlzLkxhKGEsYy5rZXkpO2lmKDA9PT1iKXJldHVybiBjLnZhbHVlOzA+Yj9jPWMubGVmdDowPGImJihjPWMucmlnaHQpfXJldHVybiBudWxsfTtcbmZ1bmN0aW9uIHhmKGEsYil7Zm9yKHZhciBjLGQ9YS5iYSxlPW51bGw7IWQuZSgpOyl7Yz1hLkxhKGIsZC5rZXkpO2lmKDA9PT1jKXtpZihkLmxlZnQuZSgpKXJldHVybiBlP2Uua2V5Om51bGw7Zm9yKGQ9ZC5sZWZ0OyFkLnJpZ2h0LmUoKTspZD1kLnJpZ2h0O3JldHVybiBkLmtleX0wPmM/ZD1kLmxlZnQ6MDxjJiYoZT1kLGQ9ZC5yaWdodCl9dGhyb3cgRXJyb3IoXCJBdHRlbXB0ZWQgdG8gZmluZCBwcmVkZWNlc3NvciBrZXkgZm9yIGEgbm9uZXhpc3RlbnQga2V5LiAgV2hhdCBnaXZlcz9cIik7fWcuZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmJhLmUoKX07Zy5jb3VudD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmJhLmNvdW50KCl9O2cuR2M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5iYS5HYygpfTtnLmVjPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYmEuZWMoKX07Zy5oYT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5iYS5oYShhKX07XG5nLldiPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgeWYodGhpcy5iYSxudWxsLHRoaXMuTGEsITEsYSl9O2cuWGI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IHlmKHRoaXMuYmEsYSx0aGlzLkxhLCExLGIpfTtnLlpiPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyB5Zih0aGlzLmJhLGEsdGhpcy5MYSwhMCxiKX07Zy5XZT1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IHlmKHRoaXMuYmEsbnVsbCx0aGlzLkxhLCEwLGEpfTtmdW5jdGlvbiB5ZihhLGIsYyxkLGUpe3RoaXMuSGQ9ZXx8bnVsbDt0aGlzLmplPWQ7dGhpcy5QYT1bXTtmb3IoZT0xOyFhLmUoKTspaWYoZT1iP2MoYS5rZXksYik6MSxkJiYoZSo9LTEpLDA+ZSlhPXRoaXMuamU/YS5sZWZ0OmEucmlnaHQ7ZWxzZSBpZigwPT09ZSl7dGhpcy5QYS5wdXNoKGEpO2JyZWFrfWVsc2UgdGhpcy5QYS5wdXNoKGEpLGE9dGhpcy5qZT9hLnJpZ2h0OmEubGVmdH1cbmZ1bmN0aW9uIFIoYSl7aWYoMD09PWEuUGEubGVuZ3RoKXJldHVybiBudWxsO3ZhciBiPWEuUGEucG9wKCksYztjPWEuSGQ/YS5IZChiLmtleSxiLnZhbHVlKTp7a2V5OmIua2V5LHZhbHVlOmIudmFsdWV9O2lmKGEuamUpZm9yKGI9Yi5sZWZ0OyFiLmUoKTspYS5QYS5wdXNoKGIpLGI9Yi5yaWdodDtlbHNlIGZvcihiPWIucmlnaHQ7IWIuZSgpOylhLlBhLnB1c2goYiksYj1iLmxlZnQ7cmV0dXJuIGN9ZnVuY3Rpb24gemYoYSl7aWYoMD09PWEuUGEubGVuZ3RoKXJldHVybiBudWxsO3ZhciBiO2I9YS5QYTtiPWJbYi5sZW5ndGgtMV07cmV0dXJuIGEuSGQ/YS5IZChiLmtleSxiLnZhbHVlKTp7a2V5OmIua2V5LHZhbHVlOmIudmFsdWV9fWZ1bmN0aW9uIEFmKGEsYixjLGQsZSl7dGhpcy5rZXk9YTt0aGlzLnZhbHVlPWI7dGhpcy5jb2xvcj1udWxsIT1jP2M6ITA7dGhpcy5sZWZ0PW51bGwhPWQ/ZDp3Zjt0aGlzLnJpZ2h0PW51bGwhPWU/ZTp3Zn1nPUFmLnByb3RvdHlwZTtcbmcuWD1mdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBuZXcgQWYobnVsbCE9YT9hOnRoaXMua2V5LG51bGwhPWI/Yjp0aGlzLnZhbHVlLG51bGwhPWM/Yzp0aGlzLmNvbG9yLG51bGwhPWQ/ZDp0aGlzLmxlZnQsbnVsbCE9ZT9lOnRoaXMucmlnaHQpfTtnLmNvdW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGVmdC5jb3VudCgpKzErdGhpcy5yaWdodC5jb3VudCgpfTtnLmU9ZnVuY3Rpb24oKXtyZXR1cm4hMX07Zy5oYT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5sZWZ0LmhhKGEpfHxhKHRoaXMua2V5LHRoaXMudmFsdWUpfHx0aGlzLnJpZ2h0LmhhKGEpfTtmdW5jdGlvbiBCZihhKXtyZXR1cm4gYS5sZWZ0LmUoKT9hOkJmKGEubGVmdCl9Zy5HYz1mdW5jdGlvbigpe3JldHVybiBCZih0aGlzKS5rZXl9O2cuZWM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yaWdodC5lKCk/dGhpcy5rZXk6dGhpcy5yaWdodC5lYygpfTtcbmcuT2E9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7ZT10aGlzO2Q9YyhhLGUua2V5KTtlPTA+ZD9lLlgobnVsbCxudWxsLG51bGwsZS5sZWZ0Lk9hKGEsYixjKSxudWxsKTowPT09ZD9lLlgobnVsbCxiLG51bGwsbnVsbCxudWxsKTplLlgobnVsbCxudWxsLG51bGwsbnVsbCxlLnJpZ2h0Lk9hKGEsYixjKSk7cmV0dXJuIENmKGUpfTtmdW5jdGlvbiBEZihhKXtpZihhLmxlZnQuZSgpKXJldHVybiB3ZjthLmxlZnQuZWEoKXx8YS5sZWZ0LmxlZnQuZWEoKXx8KGE9RWYoYSkpO2E9YS5YKG51bGwsbnVsbCxudWxsLERmKGEubGVmdCksbnVsbCk7cmV0dXJuIENmKGEpfVxuZy5yZW1vdmU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkO2M9dGhpcztpZigwPmIoYSxjLmtleSkpYy5sZWZ0LmUoKXx8Yy5sZWZ0LmVhKCl8fGMubGVmdC5sZWZ0LmVhKCl8fChjPUVmKGMpKSxjPWMuWChudWxsLG51bGwsbnVsbCxjLmxlZnQucmVtb3ZlKGEsYiksbnVsbCk7ZWxzZXtjLmxlZnQuZWEoKSYmKGM9RmYoYykpO2MucmlnaHQuZSgpfHxjLnJpZ2h0LmVhKCl8fGMucmlnaHQubGVmdC5lYSgpfHwoYz1HZihjKSxjLmxlZnQubGVmdC5lYSgpJiYoYz1GZihjKSxjPUdmKGMpKSk7aWYoMD09PWIoYSxjLmtleSkpe2lmKGMucmlnaHQuZSgpKXJldHVybiB3ZjtkPUJmKGMucmlnaHQpO2M9Yy5YKGQua2V5LGQudmFsdWUsbnVsbCxudWxsLERmKGMucmlnaHQpKX1jPWMuWChudWxsLG51bGwsbnVsbCxudWxsLGMucmlnaHQucmVtb3ZlKGEsYikpfXJldHVybiBDZihjKX07Zy5lYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbG9yfTtcbmZ1bmN0aW9uIENmKGEpe2EucmlnaHQuZWEoKSYmIWEubGVmdC5lYSgpJiYoYT1IZihhKSk7YS5sZWZ0LmVhKCkmJmEubGVmdC5sZWZ0LmVhKCkmJihhPUZmKGEpKTthLmxlZnQuZWEoKSYmYS5yaWdodC5lYSgpJiYoYT1HZihhKSk7cmV0dXJuIGF9ZnVuY3Rpb24gRWYoYSl7YT1HZihhKTthLnJpZ2h0LmxlZnQuZWEoKSYmKGE9YS5YKG51bGwsbnVsbCxudWxsLG51bGwsRmYoYS5yaWdodCkpLGE9SGYoYSksYT1HZihhKSk7cmV0dXJuIGF9ZnVuY3Rpb24gSGYoYSl7cmV0dXJuIGEucmlnaHQuWChudWxsLG51bGwsYS5jb2xvcixhLlgobnVsbCxudWxsLCEwLG51bGwsYS5yaWdodC5sZWZ0KSxudWxsKX1mdW5jdGlvbiBGZihhKXtyZXR1cm4gYS5sZWZ0LlgobnVsbCxudWxsLGEuY29sb3IsbnVsbCxhLlgobnVsbCxudWxsLCEwLGEubGVmdC5yaWdodCxudWxsKSl9XG5mdW5jdGlvbiBHZihhKXtyZXR1cm4gYS5YKG51bGwsbnVsbCwhYS5jb2xvcixhLmxlZnQuWChudWxsLG51bGwsIWEubGVmdC5jb2xvcixudWxsLG51bGwpLGEucmlnaHQuWChudWxsLG51bGwsIWEucmlnaHQuY29sb3IsbnVsbCxudWxsKSl9ZnVuY3Rpb24gSWYoKXt9Zz1JZi5wcm90b3R5cGU7Zy5YPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O2cuT2E9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEFmKGEsYixudWxsKX07Zy5yZW1vdmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307Zy5jb3VudD1mdW5jdGlvbigpe3JldHVybiAwfTtnLmU9ZnVuY3Rpb24oKXtyZXR1cm4hMH07Zy5oYT1mdW5jdGlvbigpe3JldHVybiExfTtnLkdjPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9O2cuZWM9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH07Zy5lYT1mdW5jdGlvbigpe3JldHVybiExfTt2YXIgd2Y9bmV3IElmO2Z1bmN0aW9uIFAoYSxiLGMpe3RoaXMuaz1hOyh0aGlzLmFhPWIpJiZTZCh0aGlzLmFhKTthLmUoKSYmSCghdGhpcy5hYXx8dGhpcy5hYS5lKCksXCJBbiBlbXB0eSBub2RlIGNhbm5vdCBoYXZlIGEgcHJpb3JpdHlcIik7dGhpcy55Yj1jO3RoaXMuRGI9bnVsbH1nPVAucHJvdG90eXBlO2cuSj1mdW5jdGlvbigpe3JldHVybiExfTtnLkM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hYXx8R307Zy5mYT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5rLmUoKT90aGlzOm5ldyBQKHRoaXMuayxhLHRoaXMueWIpfTtnLlE9ZnVuY3Rpb24oYSl7aWYoXCIucHJpb3JpdHlcIj09PWEpcmV0dXJuIHRoaXMuQygpO2E9dGhpcy5rLmdldChhKTtyZXR1cm4gbnVsbD09PWE/RzphfTtnLlA9ZnVuY3Rpb24oYSl7dmFyIGI9SihhKTtyZXR1cm4gbnVsbD09PWI/dGhpczp0aGlzLlEoYikuUChEKGEpKX07Zy5EYT1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9PXRoaXMuay5nZXQoYSl9O1xuZy5UPWZ1bmN0aW9uKGEsYil7SChiLFwiV2Ugc2hvdWxkIGFsd2F5cyBiZSBwYXNzaW5nIHNuYXBzaG90IG5vZGVzXCIpO2lmKFwiLnByaW9yaXR5XCI9PT1hKXJldHVybiB0aGlzLmZhKGIpO3ZhciBjPW5ldyBLKGEsYiksZCxlO2IuZSgpPyhkPXRoaXMuay5yZW1vdmUoYSksYz1tZSh0aGlzLnliLGMsdGhpcy5rKSk6KGQ9dGhpcy5rLk9hKGEsYiksYz1rZSh0aGlzLnliLGMsdGhpcy5rKSk7ZT1kLmUoKT9HOnRoaXMuYWE7cmV0dXJuIG5ldyBQKGQsZSxjKX07Zy5GPWZ1bmN0aW9uKGEsYil7dmFyIGM9SihhKTtpZihudWxsPT09YylyZXR1cm4gYjtIKFwiLnByaW9yaXR5XCIhPT1KKGEpfHwxPT09QWQoYSksXCIucHJpb3JpdHkgbXVzdCBiZSB0aGUgbGFzdCB0b2tlbiBpbiBhIHBhdGhcIik7dmFyIGQ9dGhpcy5RKGMpLkYoRChhKSxiKTtyZXR1cm4gdGhpcy5UKGMsZCl9O2cuZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmsuZSgpfTtnLkViPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuay5jb3VudCgpfTtcbnZhciBKZj0vXigwfFsxLTldXFxkKikkLztnPVAucHJvdG90eXBlO2cuSD1mdW5jdGlvbihhKXtpZih0aGlzLmUoKSlyZXR1cm4gbnVsbDt2YXIgYj17fSxjPTAsZD0wLGU9ITA7dGhpcy5PKE4sZnVuY3Rpb24oZixoKXtiW2ZdPWguSChhKTtjKys7ZSYmSmYudGVzdChmKT9kPU1hdGgubWF4KGQsTnVtYmVyKGYpKTplPSExfSk7aWYoIWEmJmUmJmQ8MipjKXt2YXIgZj1bXSxoO2ZvcihoIGluIGIpZltoXT1iW2hdO3JldHVybiBmfWEmJiF0aGlzLkMoKS5lKCkmJihiW1wiLnByaW9yaXR5XCJdPXRoaXMuQygpLkgoKSk7cmV0dXJuIGJ9O2cuaGFzaD1mdW5jdGlvbigpe2lmKG51bGw9PT10aGlzLkRiKXt2YXIgYT1cIlwiO3RoaXMuQygpLmUoKXx8KGErPVwicHJpb3JpdHk6XCIrVWQodGhpcy5DKCkuSCgpKStcIjpcIik7dGhpcy5PKE4sZnVuY3Rpb24oYixjKXt2YXIgZD1jLmhhc2goKTtcIlwiIT09ZCYmKGErPVwiOlwiK2IrXCI6XCIrZCl9KTt0aGlzLkRiPVwiXCI9PT1hP1wiXCI6dWMoYSl9cmV0dXJuIHRoaXMuRGJ9O1xuZy5WZT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuKGM9S2YodGhpcyxjKSk/KGE9eGYoYyxuZXcgSyhhLGIpKSk/YS5uYW1lOm51bGw6eGYodGhpcy5rLGEpfTtmdW5jdGlvbiBRZChhLGIpe3ZhciBjO2M9KGM9S2YoYSxiKSk/KGM9Yy5HYygpKSYmYy5uYW1lOmEuay5HYygpO3JldHVybiBjP25ldyBLKGMsYS5rLmdldChjKSk6bnVsbH1mdW5jdGlvbiBSZChhLGIpe3ZhciBjO2M9KGM9S2YoYSxiKSk/KGM9Yy5lYygpKSYmYy5uYW1lOmEuay5lYygpO3JldHVybiBjP25ldyBLKGMsYS5rLmdldChjKSk6bnVsbH1nLk89ZnVuY3Rpb24oYSxiKXt2YXIgYz1LZih0aGlzLGEpO3JldHVybiBjP2MuaGEoZnVuY3Rpb24oYSl7cmV0dXJuIGIoYS5uYW1lLGEuUil9KTp0aGlzLmsuaGEoYil9O2cuV2I9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuWGIoYS5IYygpLGEpfTtcbmcuWGI9ZnVuY3Rpb24oYSxiKXt2YXIgYz1LZih0aGlzLGIpO2lmKGMpcmV0dXJuIGMuWGIoYSxmdW5jdGlvbihhKXtyZXR1cm4gYX0pO2Zvcih2YXIgYz10aGlzLmsuWGIoYS5uYW1lLGpjKSxkPXpmKGMpO251bGwhPWQmJjA+Yi5jb21wYXJlKGQsYSk7KVIoYyksZD16ZihjKTtyZXR1cm4gY307Zy5XZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5aYihhLkZjKCksYSl9O2cuWmI9ZnVuY3Rpb24oYSxiKXt2YXIgYz1LZih0aGlzLGIpO2lmKGMpcmV0dXJuIGMuWmIoYSxmdW5jdGlvbihhKXtyZXR1cm4gYX0pO2Zvcih2YXIgYz10aGlzLmsuWmIoYS5uYW1lLGpjKSxkPXpmKGMpO251bGwhPWQmJjA8Yi5jb21wYXJlKGQsYSk7KVIoYyksZD16ZihjKTtyZXR1cm4gY307Zy5zYz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lKCk/YS5lKCk/MDotMTphLkooKXx8YS5lKCk/MTphPT09WmQ/LTE6MH07XG5nLm5iPWZ1bmN0aW9uKGEpe2lmKGE9PT1GZHx8dmEodGhpcy55Yi5jYyxhLnRvU3RyaW5nKCkpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMueWIsYz10aGlzLms7SChhIT09RmQsXCJLZXlJbmRleCBhbHdheXMgZXhpc3RzIGFuZCBpc24ndCBtZWFudCB0byBiZSBhZGRlZCB0byB0aGUgSW5kZXhNYXAuXCIpO2Zvcih2YXIgZD1bXSxlPSExLGM9Yy5XYihqYyksZj1SKGMpO2Y7KWU9ZXx8YS54YyhmLlIpLGQucHVzaChmKSxmPVIoYyk7ZD1lP2xlKGQsUGQoYSkpOldkO2U9YS50b1N0cmluZygpO2M9emEoYi5jYyk7Y1tlXT1hO2E9emEoYi5vZCk7YVtlXT1kO3JldHVybiBuZXcgUCh0aGlzLmssdGhpcy5hYSxuZXcgamUoYSxjKSl9O2cueWM9ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1GZHx8dmEodGhpcy55Yi5jYyxhLnRvU3RyaW5nKCkpfTtcbmcuWj1mdW5jdGlvbihhKXtpZihhPT09dGhpcylyZXR1cm4hMDtpZihhLkooKSlyZXR1cm4hMTtpZih0aGlzLkMoKS5aKGEuQygpKSYmdGhpcy5rLmNvdW50KCk9PT1hLmsuY291bnQoKSl7dmFyIGI9dGhpcy5XYihOKTthPWEuV2IoTik7Zm9yKHZhciBjPVIoYiksZD1SKGEpO2MmJmQ7KXtpZihjLm5hbWUhPT1kLm5hbWV8fCFjLlIuWihkLlIpKXJldHVybiExO2M9UihiKTtkPVIoYSl9cmV0dXJuIG51bGw9PT1jJiZudWxsPT09ZH1yZXR1cm4hMX07ZnVuY3Rpb24gS2YoYSxiKXtyZXR1cm4gYj09PUZkP251bGw6YS55Yi5nZXQoYi50b1N0cmluZygpKX1nLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIEIodGhpcy5IKCEwKSl9O2Z1bmN0aW9uIE0oYSxiKXtpZihudWxsPT09YSlyZXR1cm4gRzt2YXIgYz1udWxsO1wib2JqZWN0XCI9PT10eXBlb2YgYSYmXCIucHJpb3JpdHlcImluIGE/Yz1hW1wiLnByaW9yaXR5XCJdOlwidW5kZWZpbmVkXCIhPT10eXBlb2YgYiYmKGM9Yik7SChudWxsPT09Y3x8XCJzdHJpbmdcIj09PXR5cGVvZiBjfHxcIm51bWJlclwiPT09dHlwZW9mIGN8fFwib2JqZWN0XCI9PT10eXBlb2YgYyYmXCIuc3ZcImluIGMsXCJJbnZhbGlkIHByaW9yaXR5IHR5cGUgZm91bmQ6IFwiK3R5cGVvZiBjKTtcIm9iamVjdFwiPT09dHlwZW9mIGEmJlwiLnZhbHVlXCJpbiBhJiZudWxsIT09YVtcIi52YWx1ZVwiXSYmKGE9YVtcIi52YWx1ZVwiXSk7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhfHxcIi5zdlwiaW4gYSlyZXR1cm4gbmV3IHFjKGEsTShjKSk7aWYoYSBpbnN0YW5jZW9mIEFycmF5KXt2YXIgZD1HLGU9YTtyKGUsZnVuY3Rpb24oYSxiKXtpZihjYihlLGIpJiZcIi5cIiE9PWIuc3Vic3RyaW5nKDAsMSkpe3ZhciBjPU0oYSk7aWYoYy5KKCl8fCFjLmUoKSlkPVxuZC5UKGIsYyl9fSk7cmV0dXJuIGQuZmEoTShjKSl9dmFyIGY9W10saD0hMSxrPWE7ZGIoayxmdW5jdGlvbihhKXtpZihcInN0cmluZ1wiIT09dHlwZW9mIGF8fFwiLlwiIT09YS5zdWJzdHJpbmcoMCwxKSl7dmFyIGI9TShrW2FdKTtiLmUoKXx8KGg9aHx8IWIuQygpLmUoKSxmLnB1c2gobmV3IEsoYSxiKSkpfX0pO2lmKDA9PWYubGVuZ3RoKXJldHVybiBHO3ZhciBsPWxlKGYsZ2MsZnVuY3Rpb24oYSl7cmV0dXJuIGEubmFtZX0saWMpO2lmKGgpe3ZhciBtPWxlKGYsUGQoTikpO3JldHVybiBuZXcgUChsLE0oYyksbmV3IGplKHtcIi5wcmlvcml0eVwiOm19LHtcIi5wcmlvcml0eVwiOk59KSl9cmV0dXJuIG5ldyBQKGwsTShjKSxuZSl9dmFyIExmPU1hdGgubG9nKDIpO1xuZnVuY3Rpb24gTWYoYSl7dGhpcy5jb3VudD1wYXJzZUludChNYXRoLmxvZyhhKzEpL0xmLDEwKTt0aGlzLk5lPXRoaXMuY291bnQtMTt0aGlzLkNmPWErMSZwYXJzZUludChBcnJheSh0aGlzLmNvdW50KzEpLmpvaW4oXCIxXCIpLDIpfWZ1bmN0aW9uIE5mKGEpe3ZhciBiPSEoYS5DZiYxPDxhLk5lKTthLk5lLS07cmV0dXJuIGJ9XG5mdW5jdGlvbiBsZShhLGIsYyxkKXtmdW5jdGlvbiBlKGIsZCl7dmFyIGY9ZC1iO2lmKDA9PWYpcmV0dXJuIG51bGw7aWYoMT09Zil7dmFyIG09YVtiXSx1PWM/YyhtKTptO3JldHVybiBuZXcgQWYodSxtLlIsITEsbnVsbCxudWxsKX12YXIgbT1wYXJzZUludChmLzIsMTApK2IsZj1lKGIsbSksej1lKG0rMSxkKSxtPWFbbV0sdT1jP2MobSk6bTtyZXR1cm4gbmV3IEFmKHUsbS5SLCExLGYseil9YS5zb3J0KGIpO3ZhciBmPWZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGQoYixoKXt2YXIgaz11LWIsej11O3UtPWI7dmFyIHo9ZShrKzEseiksaz1hW2tdLEY9Yz9jKGspOmssej1uZXcgQWYoRixrLlIsaCxudWxsLHopO2Y/Zi5sZWZ0PXo6bT16O2Y9en1mb3IodmFyIGY9bnVsbCxtPW51bGwsdT1hLmxlbmd0aCx6PTA7ejxiLmNvdW50Oysreil7dmFyIEY9TmYoYiksaWQ9TWF0aC5wb3coMixiLmNvdW50LSh6KzEpKTtGP2QoaWQsITEpOihkKGlkLCExKSxkKGlkLCEwKSl9cmV0dXJuIG19KG5ldyBNZihhLmxlbmd0aCkpO1xucmV0dXJuIG51bGwhPT1mP25ldyB2ZihkfHxiLGYpOm5ldyB2ZihkfHxiKX1mdW5jdGlvbiBVZChhKXtyZXR1cm5cIm51bWJlclwiPT09dHlwZW9mIGE/XCJudW1iZXI6XCIrSmMoYSk6XCJzdHJpbmc6XCIrYX1mdW5jdGlvbiBTZChhKXtpZihhLkooKSl7dmFyIGI9YS5IKCk7SChcInN0cmluZ1wiPT09dHlwZW9mIGJ8fFwibnVtYmVyXCI9PT10eXBlb2YgYnx8XCJvYmplY3RcIj09PXR5cGVvZiBiJiZjYihiLFwiLnN2XCIpLFwiUHJpb3JpdHkgbXVzdCBiZSBhIHN0cmluZyBvciBudW1iZXIuXCIpfWVsc2UgSChhPT09WmR8fGEuZSgpLFwicHJpb3JpdHkgb2YgdW5leHBlY3RlZCB0eXBlLlwiKTtIKGE9PT1aZHx8YS5DKCkuZSgpLFwiUHJpb3JpdHkgbm9kZXMgY2FuJ3QgaGF2ZSBhIHByaW9yaXR5IG9mIHRoZWlyIG93bi5cIil9dmFyIEc9bmV3IFAobmV3IHZmKGljKSxudWxsLG5lKTtmdW5jdGlvbiBPZigpe1AuY2FsbCh0aGlzLG5ldyB2ZihpYyksRyxuZSl9bGEoT2YsUCk7Zz1PZi5wcm90b3R5cGU7XG5nLnNjPWZ1bmN0aW9uKGEpe3JldHVybiBhPT09dGhpcz8wOjF9O2cuWj1mdW5jdGlvbihhKXtyZXR1cm4gYT09PXRoaXN9O2cuQz1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtnLlE9ZnVuY3Rpb24oKXtyZXR1cm4gR307Zy5lPWZ1bmN0aW9uKCl7cmV0dXJuITF9O3ZhciBaZD1uZXcgT2YsWGQ9bmV3IEsoXCJbTUlOX05BTUVdXCIsRyksY2U9bmV3IEsoXCJbTUFYX05BTUVdXCIsWmQpO2Z1bmN0aW9uIFcoYSxiLGMpe3RoaXMuQT1hO3RoaXMuVj1iO3RoaXMuZz1jfVcucHJvdG90eXBlLkg9ZnVuY3Rpb24oKXt4KFwiRmlyZWJhc2UuRGF0YVNuYXBzaG90LnZhbFwiLDAsMCxhcmd1bWVudHMubGVuZ3RoKTtyZXR1cm4gdGhpcy5BLkgoKX07Vy5wcm90b3R5cGUudmFsPVcucHJvdG90eXBlLkg7Vy5wcm90b3R5cGUuUWU9ZnVuY3Rpb24oKXt4KFwiRmlyZWJhc2UuRGF0YVNuYXBzaG90LmV4cG9ydFZhbFwiLDAsMCxhcmd1bWVudHMubGVuZ3RoKTtyZXR1cm4gdGhpcy5BLkgoITApfTtXLnByb3RvdHlwZS5leHBvcnRWYWw9Vy5wcm90b3R5cGUuUWU7Vy5wcm90b3R5cGUuTGY9ZnVuY3Rpb24oKXt4KFwiRmlyZWJhc2UuRGF0YVNuYXBzaG90LmV4aXN0c1wiLDAsMCxhcmd1bWVudHMubGVuZ3RoKTtyZXR1cm4hdGhpcy5BLmUoKX07Vy5wcm90b3R5cGUuZXhpc3RzPVcucHJvdG90eXBlLkxmO1xuVy5wcm90b3R5cGUubj1mdW5jdGlvbihhKXt4KFwiRmlyZWJhc2UuRGF0YVNuYXBzaG90LmNoaWxkXCIsMCwxLGFyZ3VtZW50cy5sZW5ndGgpO2dhKGEpJiYoYT1TdHJpbmcoYSkpO2xmKFwiRmlyZWJhc2UuRGF0YVNuYXBzaG90LmNoaWxkXCIsYSk7dmFyIGI9bmV3IEwoYSksYz10aGlzLlYubihiKTtyZXR1cm4gbmV3IFcodGhpcy5BLlAoYiksYyxOKX07Vy5wcm90b3R5cGUuY2hpbGQ9Vy5wcm90b3R5cGUubjtXLnByb3RvdHlwZS5EYT1mdW5jdGlvbihhKXt4KFwiRmlyZWJhc2UuRGF0YVNuYXBzaG90Lmhhc0NoaWxkXCIsMSwxLGFyZ3VtZW50cy5sZW5ndGgpO2xmKFwiRmlyZWJhc2UuRGF0YVNuYXBzaG90Lmhhc0NoaWxkXCIsYSk7dmFyIGI9bmV3IEwoYSk7cmV0dXJuIXRoaXMuQS5QKGIpLmUoKX07Vy5wcm90b3R5cGUuaGFzQ2hpbGQ9Vy5wcm90b3R5cGUuRGE7XG5XLnByb3RvdHlwZS5DPWZ1bmN0aW9uKCl7eChcIkZpcmViYXNlLkRhdGFTbmFwc2hvdC5nZXRQcmlvcml0eVwiLDAsMCxhcmd1bWVudHMubGVuZ3RoKTtyZXR1cm4gdGhpcy5BLkMoKS5IKCl9O1cucHJvdG90eXBlLmdldFByaW9yaXR5PVcucHJvdG90eXBlLkM7Vy5wcm90b3R5cGUuZm9yRWFjaD1mdW5jdGlvbihhKXt4KFwiRmlyZWJhc2UuRGF0YVNuYXBzaG90LmZvckVhY2hcIiwxLDEsYXJndW1lbnRzLmxlbmd0aCk7QShcIkZpcmViYXNlLkRhdGFTbmFwc2hvdC5mb3JFYWNoXCIsMSxhLCExKTtpZih0aGlzLkEuSigpKXJldHVybiExO3ZhciBiPXRoaXM7cmV0dXJuISF0aGlzLkEuTyh0aGlzLmcsZnVuY3Rpb24oYyxkKXtyZXR1cm4gYShuZXcgVyhkLGIuVi5uKGMpLE4pKX0pfTtXLnByb3RvdHlwZS5mb3JFYWNoPVcucHJvdG90eXBlLmZvckVhY2g7XG5XLnByb3RvdHlwZS5rZD1mdW5jdGlvbigpe3goXCJGaXJlYmFzZS5EYXRhU25hcHNob3QuaGFzQ2hpbGRyZW5cIiwwLDAsYXJndW1lbnRzLmxlbmd0aCk7cmV0dXJuIHRoaXMuQS5KKCk/ITE6IXRoaXMuQS5lKCl9O1cucHJvdG90eXBlLmhhc0NoaWxkcmVuPVcucHJvdG90eXBlLmtkO1cucHJvdG90eXBlLmdldEtleT1mdW5jdGlvbigpe3goXCJGaXJlYmFzZS5EYXRhU25hcHNob3Qua2V5XCIsMCwwLGFyZ3VtZW50cy5sZW5ndGgpO3JldHVybiB0aGlzLlYuZ2V0S2V5KCl9O0xjKFcucHJvdG90eXBlLFwia2V5XCIsVy5wcm90b3R5cGUuZ2V0S2V5KTtXLnByb3RvdHlwZS5FYj1mdW5jdGlvbigpe3goXCJGaXJlYmFzZS5EYXRhU25hcHNob3QubnVtQ2hpbGRyZW5cIiwwLDAsYXJndW1lbnRzLmxlbmd0aCk7cmV0dXJuIHRoaXMuQS5FYigpfTtXLnByb3RvdHlwZS5udW1DaGlsZHJlbj1XLnByb3RvdHlwZS5FYjtcblcucHJvdG90eXBlLndiPWZ1bmN0aW9uKCl7eChcIkZpcmViYXNlLkRhdGFTbmFwc2hvdC5yZWZcIiwwLDAsYXJndW1lbnRzLmxlbmd0aCk7cmV0dXJuIHRoaXMuVn07TGMoVy5wcm90b3R5cGUsXCJyZWZcIixXLnByb3RvdHlwZS53Yik7ZnVuY3Rpb24geWQoYSxiKXt0aGlzLk49YTt0aGlzLkxkPWJ9ZnVuY3Rpb24gdmQoYSxiLGMsZCl7cmV0dXJuIG5ldyB5ZChuZXcgJGIoYixjLGQpLGEuTGQpfWZ1bmN0aW9uIHpkKGEpe3JldHVybiBhLk4uZGE/YS5OLmooKTpudWxsfXlkLnByb3RvdHlwZS53PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuTGR9O2Z1bmN0aW9uIGFjKGEpe3JldHVybiBhLkxkLmRhP2EuTGQuaigpOm51bGx9O2Z1bmN0aW9uIFBmKGEsYil7dGhpcy5WPWE7dmFyIGM9YS5tLGQ9bmV3IEdkKGMuZyksYz1TKGMpP25ldyBHZChjLmcpOmMueGE/bmV3IE1kKGMpOm5ldyBIZChjKTt0aGlzLmhmPW5ldyBwZChjKTt2YXIgZT1iLncoKSxmPWIuTixoPWQueWEoRyxlLmooKSxudWxsKSxrPWMueWEoRyxmLmooKSxudWxsKTt0aGlzLkthPW5ldyB5ZChuZXcgJGIoayxmLmRhLGMuTmEoKSksbmV3ICRiKGgsZS5kYSxkLk5hKCkpKTt0aGlzLlphPVtdO3RoaXMuSmY9bmV3IGtkKGEpfWZ1bmN0aW9uIFFmKGEpe3JldHVybiBhLlZ9Zz1QZi5wcm90b3R5cGU7Zy53PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuS2EudygpLmooKX07Zy5oYj1mdW5jdGlvbihhKXt2YXIgYj1hYyh0aGlzLkthKTtyZXR1cm4gYiYmKFModGhpcy5WLm0pfHwhYS5lKCkmJiFiLlEoSihhKSkuZSgpKT9iLlAoYSk6bnVsbH07Zy5lPWZ1bmN0aW9uKCl7cmV0dXJuIDA9PT10aGlzLlphLmxlbmd0aH07Zy5OYj1mdW5jdGlvbihhKXt0aGlzLlphLnB1c2goYSl9O1xuZy5rYj1mdW5jdGlvbihhLGIpe3ZhciBjPVtdO2lmKGIpe0gobnVsbD09YSxcIkEgY2FuY2VsIHNob3VsZCBjYW5jZWwgYWxsIGV2ZW50IHJlZ2lzdHJhdGlvbnMuXCIpO3ZhciBkPXRoaXMuVi5wYXRoO0phKHRoaXMuWmEsZnVuY3Rpb24oYSl7KGE9YS5MZShiLGQpKSYmYy5wdXNoKGEpfSl9aWYoYSl7Zm9yKHZhciBlPVtdLGY9MDtmPHRoaXMuWmEubGVuZ3RoOysrZil7dmFyIGg9dGhpcy5aYVtmXTtpZighaC5tYXRjaGVzKGEpKWUucHVzaChoKTtlbHNlIGlmKGEuWGUoKSl7ZT1lLmNvbmNhdCh0aGlzLlphLnNsaWNlKGYrMSkpO2JyZWFrfX10aGlzLlphPWV9ZWxzZSB0aGlzLlphPVtdO3JldHVybiBjfTtcbmcuZWI9ZnVuY3Rpb24oYSxiLGMpe2EudHlwZT09PVdjJiZudWxsIT09YS5zb3VyY2UuSGImJihIKGFjKHRoaXMuS2EpLFwiV2Ugc2hvdWxkIGFsd2F5cyBoYXZlIGEgZnVsbCBjYWNoZSBiZWZvcmUgaGFuZGxpbmcgbWVyZ2VzXCIpLEgoemQodGhpcy5LYSksXCJNaXNzaW5nIGV2ZW50IGNhY2hlLCBldmVuIHRob3VnaCB3ZSBoYXZlIGEgc2VydmVyIGNhY2hlXCIpKTt2YXIgZD10aGlzLkthO2E9dGhpcy5oZi5lYihkLGEsYixjKTtiPXRoaXMuaGY7Yz1hLlNkO0goYy5OLmooKS55YyhiLlUuZyksXCJFdmVudCBzbmFwIG5vdCBpbmRleGVkXCIpO0goYy53KCkuaigpLnljKGIuVS5nKSxcIlNlcnZlciBzbmFwIG5vdCBpbmRleGVkXCIpO0goZGMoYS5TZC53KCkpfHwhZGMoZC53KCkpLFwiT25jZSBhIHNlcnZlciBzbmFwIGlzIGNvbXBsZXRlLCBpdCBzaG91bGQgbmV2ZXIgZ28gYmFja1wiKTt0aGlzLkthPWEuU2Q7cmV0dXJuIFJmKHRoaXMsYS5EZixhLlNkLk4uaigpLG51bGwpfTtcbmZ1bmN0aW9uIFNmKGEsYil7dmFyIGM9YS5LYS5OLGQ9W107Yy5qKCkuSigpfHxjLmooKS5PKE4sZnVuY3Rpb24oYSxiKXtkLnB1c2gobmV3IEkoXCJjaGlsZF9hZGRlZFwiLGIsYSkpfSk7Yy5kYSYmZC5wdXNoKGJjKGMuaigpKSk7cmV0dXJuIFJmKGEsZCxjLmooKSxiKX1mdW5jdGlvbiBSZihhLGIsYyxkKXtyZXR1cm4gbGQoYS5KZixiLGMsZD9bZF06YS5aYSl9O2Z1bmN0aW9uIFRmKGEsYixjKXt0aGlzLlBiPWE7dGhpcy5yYj1iO3RoaXMudGI9Y3x8bnVsbH1nPVRmLnByb3RvdHlwZTtnLm5mPWZ1bmN0aW9uKGEpe3JldHVyblwidmFsdWVcIj09PWF9O2cuY3JlYXRlRXZlbnQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz1iLm0uZztyZXR1cm4gbmV3IFViKFwidmFsdWVcIix0aGlzLG5ldyBXKGEuSmEsYi53YigpLGMpKX07Zy5UYj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLnRiO2lmKFwiY2FuY2VsXCI9PT1hLmVlKCkpe0godGhpcy5yYixcIlJhaXNpbmcgYSBjYW5jZWwgZXZlbnQgb24gYSBsaXN0ZW5lciB3aXRoIG5vIGNhbmNlbCBjYWxsYmFja1wiKTt2YXIgYz10aGlzLnJiO3JldHVybiBmdW5jdGlvbigpe2MuY2FsbChiLGEuZXJyb3IpfX12YXIgZD10aGlzLlBiO3JldHVybiBmdW5jdGlvbigpe2QuY2FsbChiLGEuTWQpfX07Zy5MZT1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnJiP25ldyBWYih0aGlzLGEsYik6bnVsbH07XG5nLm1hdGNoZXM9ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBUZj9hLlBiJiZ0aGlzLlBiP2EuUGI9PT10aGlzLlBiJiZhLnRiPT09dGhpcy50YjohMDohMX07Zy5YZT1mdW5jdGlvbigpe3JldHVybiBudWxsIT09dGhpcy5QYn07ZnVuY3Rpb24gVWYoYSxiLGMpe3RoaXMuZ2E9YTt0aGlzLnJiPWI7dGhpcy50Yj1jfWc9VWYucHJvdG90eXBlO2cubmY9ZnVuY3Rpb24oYSl7YT1cImNoaWxkcmVuX2FkZGVkXCI9PT1hP1wiY2hpbGRfYWRkZWRcIjphO3JldHVybihcImNoaWxkcmVuX3JlbW92ZWRcIj09PWE/XCJjaGlsZF9yZW1vdmVkXCI6YSlpbiB0aGlzLmdhfTtnLkxlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucmI/bmV3IFZiKHRoaXMsYSxiKTpudWxsfTtcbmcuY3JlYXRlRXZlbnQ9ZnVuY3Rpb24oYSxiKXtIKG51bGwhPWEuWGEsXCJDaGlsZCBldmVudHMgc2hvdWxkIGhhdmUgYSBjaGlsZE5hbWUuXCIpO3ZhciBjPWIud2IoKS5uKGEuWGEpO3JldHVybiBuZXcgVWIoYS50eXBlLHRoaXMsbmV3IFcoYS5KYSxjLGIubS5nKSxhLkRkKX07Zy5UYj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLnRiO2lmKFwiY2FuY2VsXCI9PT1hLmVlKCkpe0godGhpcy5yYixcIlJhaXNpbmcgYSBjYW5jZWwgZXZlbnQgb24gYSBsaXN0ZW5lciB3aXRoIG5vIGNhbmNlbCBjYWxsYmFja1wiKTt2YXIgYz10aGlzLnJiO3JldHVybiBmdW5jdGlvbigpe2MuY2FsbChiLGEuZXJyb3IpfX12YXIgZD10aGlzLmdhW2EuaGRdO3JldHVybiBmdW5jdGlvbigpe2QuY2FsbChiLGEuTWQsYS5EZCl9fTtcbmcubWF0Y2hlcz1mdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgVWYpe2lmKCF0aGlzLmdhfHwhYS5nYSlyZXR1cm4hMDtpZih0aGlzLnRiPT09YS50Yil7dmFyIGI9cmEoYS5nYSk7aWYoYj09PXJhKHRoaXMuZ2EpKXtpZigxPT09Yil7dmFyIGI9c2EoYS5nYSksYz1zYSh0aGlzLmdhKTtyZXR1cm4gYz09PWImJighYS5nYVtiXXx8IXRoaXMuZ2FbY118fGEuZ2FbYl09PT10aGlzLmdhW2NdKX1yZXR1cm4gcWEodGhpcy5nYSxmdW5jdGlvbihiLGMpe3JldHVybiBhLmdhW2NdPT09Yn0pfX19cmV0dXJuITF9O2cuWGU9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9PXRoaXMuZ2F9O2Z1bmN0aW9uIFgoYSxiLGMsZCl7dGhpcy51PWE7dGhpcy5wYXRoPWI7dGhpcy5tPWM7dGhpcy5OYz1kfVxuZnVuY3Rpb24gVmYoYSl7dmFyIGI9bnVsbCxjPW51bGw7YS5rYSYmKGI9SmQoYSkpO2EubmEmJihjPUxkKGEpKTtpZihhLmc9PT1GZCl7aWYoYS5rYSl7aWYoXCJbTUlOX05BTUVdXCIhPUlkKGEpKXRocm93IEVycm9yKFwiUXVlcnk6IFdoZW4gb3JkZXJpbmcgYnkga2V5LCB5b3UgbWF5IG9ubHkgcGFzcyBvbmUgYXJndW1lbnQgdG8gc3RhcnRBdCgpLCBlbmRBdCgpLCBvciBlcXVhbFRvKCkuXCIpO2lmKFwic3RyaW5nXCIhPT10eXBlb2YgYil0aHJvdyBFcnJvcihcIlF1ZXJ5OiBXaGVuIG9yZGVyaW5nIGJ5IGtleSwgdGhlIGFyZ3VtZW50IHBhc3NlZCB0byBzdGFydEF0KCksIGVuZEF0KCksb3IgZXF1YWxUbygpIG11c3QgYmUgYSBzdHJpbmcuXCIpO31pZihhLm5hKXtpZihcIltNQVhfTkFNRV1cIiE9S2QoYSkpdGhyb3cgRXJyb3IoXCJRdWVyeTogV2hlbiBvcmRlcmluZyBieSBrZXksIHlvdSBtYXkgb25seSBwYXNzIG9uZSBhcmd1bWVudCB0byBzdGFydEF0KCksIGVuZEF0KCksIG9yIGVxdWFsVG8oKS5cIik7aWYoXCJzdHJpbmdcIiE9PVxudHlwZW9mIGMpdGhyb3cgRXJyb3IoXCJRdWVyeTogV2hlbiBvcmRlcmluZyBieSBrZXksIHRoZSBhcmd1bWVudCBwYXNzZWQgdG8gc3RhcnRBdCgpLCBlbmRBdCgpLG9yIGVxdWFsVG8oKSBtdXN0IGJlIGEgc3RyaW5nLlwiKTt9fWVsc2UgaWYoYS5nPT09Til7aWYobnVsbCE9YiYmIWNmKGIpfHxudWxsIT1jJiYhY2YoYykpdGhyb3cgRXJyb3IoXCJRdWVyeTogV2hlbiBvcmRlcmluZyBieSBwcmlvcml0eSwgdGhlIGZpcnN0IGFyZ3VtZW50IHBhc3NlZCB0byBzdGFydEF0KCksIGVuZEF0KCksIG9yIGVxdWFsVG8oKSBtdXN0IGJlIGEgdmFsaWQgcHJpb3JpdHkgdmFsdWUgKG51bGwsIGEgbnVtYmVyLCBvciBhIHN0cmluZykuXCIpO31lbHNlIGlmKEgoYS5nIGluc3RhbmNlb2YgWWR8fGEuZz09PWRlLFwidW5rbm93biBpbmRleCB0eXBlLlwiKSxudWxsIT1iJiZcIm9iamVjdFwiPT09dHlwZW9mIGJ8fG51bGwhPWMmJlwib2JqZWN0XCI9PT10eXBlb2YgYyl0aHJvdyBFcnJvcihcIlF1ZXJ5OiBGaXJzdCBhcmd1bWVudCBwYXNzZWQgdG8gc3RhcnRBdCgpLCBlbmRBdCgpLCBvciBlcXVhbFRvKCkgY2Fubm90IGJlIGFuIG9iamVjdC5cIik7XG59ZnVuY3Rpb24gV2YoYSl7aWYoYS5rYSYmYS5uYSYmYS54YSYmKCFhLnhhfHxcIlwiPT09YS5tYikpdGhyb3cgRXJyb3IoXCJRdWVyeTogQ2FuJ3QgY29tYmluZSBzdGFydEF0KCksIGVuZEF0KCksIGFuZCBsaW1pdCgpLiBVc2UgbGltaXRUb0ZpcnN0KCkgb3IgbGltaXRUb0xhc3QoKSBpbnN0ZWFkLlwiKTt9ZnVuY3Rpb24gWGYoYSxiKXtpZighMD09PWEuTmMpdGhyb3cgRXJyb3IoYitcIjogWW91IGNhbid0IGNvbWJpbmUgbXVsdGlwbGUgb3JkZXJCeSBjYWxscy5cIik7fWc9WC5wcm90b3R5cGU7Zy53Yj1mdW5jdGlvbigpe3goXCJRdWVyeS5yZWZcIiwwLDAsYXJndW1lbnRzLmxlbmd0aCk7cmV0dXJuIG5ldyBVKHRoaXMudSx0aGlzLnBhdGgpfTtcbmcuZ2M9ZnVuY3Rpb24oYSxiLGMsZCl7eChcIlF1ZXJ5Lm9uXCIsMiw0LGFyZ3VtZW50cy5sZW5ndGgpO2pmKFwiUXVlcnkub25cIixhLCExKTtBKFwiUXVlcnkub25cIiwyLGIsITEpO3ZhciBlPVlmKFwiUXVlcnkub25cIixjLGQpO2lmKFwidmFsdWVcIj09PWEpWmYodGhpcy51LHRoaXMsbmV3IFRmKGIsZS5jYW5jZWx8fG51bGwsZS5NYXx8bnVsbCkpO2Vsc2V7dmFyIGY9e307ZlthXT1iO1pmKHRoaXMudSx0aGlzLG5ldyBVZihmLGUuY2FuY2VsLGUuTWEpKX1yZXR1cm4gYn07XG5nLkljPWZ1bmN0aW9uKGEsYixjKXt4KFwiUXVlcnkub2ZmXCIsMCwzLGFyZ3VtZW50cy5sZW5ndGgpO2pmKFwiUXVlcnkub2ZmXCIsYSwhMCk7QShcIlF1ZXJ5Lm9mZlwiLDIsYiwhMCk7ZWIoXCJRdWVyeS5vZmZcIiwzLGMpO3ZhciBkPW51bGwsZT1udWxsO1widmFsdWVcIj09PWE/ZD1uZXcgVGYoYnx8bnVsbCxudWxsLGN8fG51bGwpOmEmJihiJiYoZT17fSxlW2FdPWIpLGQ9bmV3IFVmKGUsbnVsbCxjfHxudWxsKSk7ZT10aGlzLnU7ZD1cIi5pbmZvXCI9PT1KKHRoaXMucGF0aCk/ZS5wZC5rYih0aGlzLGQpOmUuSy5rYih0aGlzLGQpO1FiKGUuY2EsdGhpcy5wYXRoLGQpfTtcbmcuJGY9ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGspe2YmJihmPSExLGUuSWMoYSxjKSxiJiZiLmNhbGwoZC5NYSxrKSxoLnJlc29sdmUoaykpfXgoXCJRdWVyeS5vbmNlXCIsMSw0LGFyZ3VtZW50cy5sZW5ndGgpO2pmKFwiUXVlcnkub25jZVwiLGEsITEpO0EoXCJRdWVyeS5vbmNlXCIsMixiLCEwKTt2YXIgZD1ZZihcIlF1ZXJ5Lm9uY2VcIixhcmd1bWVudHNbMl0sYXJndW1lbnRzWzNdKSxlPXRoaXMsZj0hMCxoPW5ldyBoYjtqYihoLnJhKTt0aGlzLmdjKGEsYyxmdW5jdGlvbihiKXtlLkljKGEsYyk7ZC5jYW5jZWwmJmQuY2FuY2VsLmNhbGwoZC5NYSxiKTtoLnJlamVjdChiKX0pO3JldHVybiBoLnJhfTtcbmcubGU9ZnVuY3Rpb24oYSl7eChcIlF1ZXJ5LmxpbWl0VG9GaXJzdFwiLDEsMSxhcmd1bWVudHMubGVuZ3RoKTtpZighZ2EoYSl8fE1hdGguZmxvb3IoYSkhPT1hfHwwPj1hKXRocm93IEVycm9yKFwiUXVlcnkubGltaXRUb0ZpcnN0OiBGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5cIik7aWYodGhpcy5tLnhhKXRocm93IEVycm9yKFwiUXVlcnkubGltaXRUb0ZpcnN0OiBMaW1pdCB3YXMgYWxyZWFkeSBzZXQgKGJ5IGFub3RoZXIgY2FsbCB0byBsaW1pdCwgbGltaXRUb0ZpcnN0LCBvciBsaW1pdFRvTGFzdCkuXCIpO3JldHVybiBuZXcgWCh0aGlzLnUsdGhpcy5wYXRoLHRoaXMubS5sZShhKSx0aGlzLk5jKX07XG5nLm1lPWZ1bmN0aW9uKGEpe3goXCJRdWVyeS5saW1pdFRvTGFzdFwiLDEsMSxhcmd1bWVudHMubGVuZ3RoKTtpZighZ2EoYSl8fE1hdGguZmxvb3IoYSkhPT1hfHwwPj1hKXRocm93IEVycm9yKFwiUXVlcnkubGltaXRUb0xhc3Q6IEZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLlwiKTtpZih0aGlzLm0ueGEpdGhyb3cgRXJyb3IoXCJRdWVyeS5saW1pdFRvTGFzdDogTGltaXQgd2FzIGFscmVhZHkgc2V0IChieSBhbm90aGVyIGNhbGwgdG8gbGltaXQsIGxpbWl0VG9GaXJzdCwgb3IgbGltaXRUb0xhc3QpLlwiKTtyZXR1cm4gbmV3IFgodGhpcy51LHRoaXMucGF0aCx0aGlzLm0ubWUoYSksdGhpcy5OYyl9O1xuZy5hZz1mdW5jdGlvbihhKXt4KFwiUXVlcnkub3JkZXJCeUNoaWxkXCIsMSwxLGFyZ3VtZW50cy5sZW5ndGgpO2lmKFwiJGtleVwiPT09YSl0aHJvdyBFcnJvcignUXVlcnkub3JkZXJCeUNoaWxkOiBcIiRrZXlcIiBpcyBpbnZhbGlkLiAgVXNlIFF1ZXJ5Lm9yZGVyQnlLZXkoKSBpbnN0ZWFkLicpO2lmKFwiJHByaW9yaXR5XCI9PT1hKXRocm93IEVycm9yKCdRdWVyeS5vcmRlckJ5Q2hpbGQ6IFwiJHByaW9yaXR5XCIgaXMgaW52YWxpZC4gIFVzZSBRdWVyeS5vcmRlckJ5UHJpb3JpdHkoKSBpbnN0ZWFkLicpO2lmKFwiJHZhbHVlXCI9PT1hKXRocm93IEVycm9yKCdRdWVyeS5vcmRlckJ5Q2hpbGQ6IFwiJHZhbHVlXCIgaXMgaW52YWxpZC4gIFVzZSBRdWVyeS5vcmRlckJ5VmFsdWUoKSBpbnN0ZWFkLicpO2xmKFwiUXVlcnkub3JkZXJCeUNoaWxkXCIsYSk7WGYodGhpcyxcIlF1ZXJ5Lm9yZGVyQnlDaGlsZFwiKTt2YXIgYj1uZXcgTChhKTtpZihiLmUoKSl0aHJvdyBFcnJvcihcIlF1ZXJ5Lm9yZGVyQnlDaGlsZDogY2Fubm90IHBhc3MgaW4gZW1wdHkgcGF0aC4gIFVzZSBRdWVyeS5vcmRlckJ5VmFsdWUoKSBpbnN0ZWFkLlwiKTtcbmI9bmV3IFlkKGIpO2I9aGUodGhpcy5tLGIpO1ZmKGIpO3JldHVybiBuZXcgWCh0aGlzLnUsdGhpcy5wYXRoLGIsITApfTtnLmJnPWZ1bmN0aW9uKCl7eChcIlF1ZXJ5Lm9yZGVyQnlLZXlcIiwwLDAsYXJndW1lbnRzLmxlbmd0aCk7WGYodGhpcyxcIlF1ZXJ5Lm9yZGVyQnlLZXlcIik7dmFyIGE9aGUodGhpcy5tLEZkKTtWZihhKTtyZXR1cm4gbmV3IFgodGhpcy51LHRoaXMucGF0aCxhLCEwKX07Zy5jZz1mdW5jdGlvbigpe3goXCJRdWVyeS5vcmRlckJ5UHJpb3JpdHlcIiwwLDAsYXJndW1lbnRzLmxlbmd0aCk7WGYodGhpcyxcIlF1ZXJ5Lm9yZGVyQnlQcmlvcml0eVwiKTt2YXIgYT1oZSh0aGlzLm0sTik7VmYoYSk7cmV0dXJuIG5ldyBYKHRoaXMudSx0aGlzLnBhdGgsYSwhMCl9O1xuZy5kZz1mdW5jdGlvbigpe3goXCJRdWVyeS5vcmRlckJ5VmFsdWVcIiwwLDAsYXJndW1lbnRzLmxlbmd0aCk7WGYodGhpcyxcIlF1ZXJ5Lm9yZGVyQnlWYWx1ZVwiKTt2YXIgYT1oZSh0aGlzLm0sZGUpO1ZmKGEpO3JldHVybiBuZXcgWCh0aGlzLnUsdGhpcy5wYXRoLGEsITApfTtnLk5kPWZ1bmN0aW9uKGEsYil7eChcIlF1ZXJ5LnN0YXJ0QXRcIiwwLDIsYXJndW1lbnRzLmxlbmd0aCk7ZGYoXCJRdWVyeS5zdGFydEF0XCIsYSx0aGlzLnBhdGgsITApO2tmKFwiUXVlcnkuc3RhcnRBdFwiLGIpO3ZhciBjPXRoaXMubS5OZChhLGIpO1dmKGMpO1ZmKGMpO2lmKHRoaXMubS5rYSl0aHJvdyBFcnJvcihcIlF1ZXJ5LnN0YXJ0QXQ6IFN0YXJ0aW5nIHBvaW50IHdhcyBhbHJlYWR5IHNldCAoYnkgYW5vdGhlciBjYWxsIHRvIHN0YXJ0QXQgb3IgZXF1YWxUbykuXCIpO24oYSl8fChiPWE9bnVsbCk7cmV0dXJuIG5ldyBYKHRoaXMudSx0aGlzLnBhdGgsYyx0aGlzLk5jKX07XG5nLmdkPWZ1bmN0aW9uKGEsYil7eChcIlF1ZXJ5LmVuZEF0XCIsMCwyLGFyZ3VtZW50cy5sZW5ndGgpO2RmKFwiUXVlcnkuZW5kQXRcIixhLHRoaXMucGF0aCwhMCk7a2YoXCJRdWVyeS5lbmRBdFwiLGIpO3ZhciBjPXRoaXMubS5nZChhLGIpO1dmKGMpO1ZmKGMpO2lmKHRoaXMubS5uYSl0aHJvdyBFcnJvcihcIlF1ZXJ5LmVuZEF0OiBFbmRpbmcgcG9pbnQgd2FzIGFscmVhZHkgc2V0IChieSBhbm90aGVyIGNhbGwgdG8gZW5kQXQgb3IgZXF1YWxUbykuXCIpO3JldHVybiBuZXcgWCh0aGlzLnUsdGhpcy5wYXRoLGMsdGhpcy5OYyl9O1xuZy5JZj1mdW5jdGlvbihhLGIpe3goXCJRdWVyeS5lcXVhbFRvXCIsMSwyLGFyZ3VtZW50cy5sZW5ndGgpO2RmKFwiUXVlcnkuZXF1YWxUb1wiLGEsdGhpcy5wYXRoLCExKTtrZihcIlF1ZXJ5LmVxdWFsVG9cIixiKTtpZih0aGlzLm0ua2EpdGhyb3cgRXJyb3IoXCJRdWVyeS5lcXVhbFRvOiBTdGFydGluZyBwb2ludCB3YXMgYWxyZWFkeSBzZXQgKGJ5IGFub3RoZXIgY2FsbCB0byBlbmRBdCBvciBlcXVhbFRvKS5cIik7aWYodGhpcy5tLm5hKXRocm93IEVycm9yKFwiUXVlcnkuZXF1YWxUbzogRW5kaW5nIHBvaW50IHdhcyBhbHJlYWR5IHNldCAoYnkgYW5vdGhlciBjYWxsIHRvIGVuZEF0IG9yIGVxdWFsVG8pLlwiKTtyZXR1cm4gdGhpcy5OZChhLGIpLmdkKGEsYil9O1xuZy50b1N0cmluZz1mdW5jdGlvbigpe3goXCJRdWVyeS50b1N0cmluZ1wiLDAsMCxhcmd1bWVudHMubGVuZ3RoKTtmb3IodmFyIGE9dGhpcy5wYXRoLGI9XCJcIixjPWEuWTtjPGEuby5sZW5ndGg7YysrKVwiXCIhPT1hLm9bY10mJihiKz1cIi9cIitlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGEub1tjXSkpKTtyZXR1cm4gdGhpcy51LnRvU3RyaW5nKCkrKGJ8fFwiL1wiKX07Zy5qYT1mdW5jdGlvbigpe3ZhciBhPUdjKGllKHRoaXMubSkpO3JldHVyblwie31cIj09PWE/XCJkZWZhdWx0XCI6YX07XG5nLmlzRXF1YWw9ZnVuY3Rpb24oYSl7eChcIlF1ZXJ5LmlzRXF1YWxcIiwxLDEsYXJndW1lbnRzLmxlbmd0aCk7aWYoIShhIGluc3RhbmNlb2YgWCkpdGhyb3cgRXJyb3IoXCJRdWVyeS5pc0VxdWFsIGZhaWxlZDogRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBmaXJlYmFzZS5kYXRhYmFzZS5RdWVyeS5cIik7dmFyIGI9dGhpcy51PT09YS51LGM9dGhpcy5wYXRoLlooYS5wYXRoKSxkPXRoaXMuamEoKT09PWEuamEoKTtyZXR1cm4gYiYmYyYmZH07XG5mdW5jdGlvbiBZZihhLGIsYyl7dmFyIGQ9e2NhbmNlbDpudWxsLE1hOm51bGx9O2lmKGImJmMpZC5jYW5jZWw9YixBKGEsMyxkLmNhbmNlbCwhMCksZC5NYT1jLGViKGEsNCxkLk1hKTtlbHNlIGlmKGIpaWYoXCJvYmplY3RcIj09PXR5cGVvZiBiJiZudWxsIT09YilkLk1hPWI7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYilkLmNhbmNlbD1iO2Vsc2UgdGhyb3cgRXJyb3IoeShhLDMsITApK1wiIG11c3QgZWl0aGVyIGJlIGEgY2FuY2VsIGNhbGxiYWNrIG9yIGEgY29udGV4dCBvYmplY3QuXCIpO3JldHVybiBkfVgucHJvdG90eXBlLm9uPVgucHJvdG90eXBlLmdjO1gucHJvdG90eXBlLm9mZj1YLnByb3RvdHlwZS5JYztYLnByb3RvdHlwZS5vbmNlPVgucHJvdG90eXBlLiRmO1gucHJvdG90eXBlLmxpbWl0VG9GaXJzdD1YLnByb3RvdHlwZS5sZTtYLnByb3RvdHlwZS5saW1pdFRvTGFzdD1YLnByb3RvdHlwZS5tZTtYLnByb3RvdHlwZS5vcmRlckJ5Q2hpbGQ9WC5wcm90b3R5cGUuYWc7XG5YLnByb3RvdHlwZS5vcmRlckJ5S2V5PVgucHJvdG90eXBlLmJnO1gucHJvdG90eXBlLm9yZGVyQnlQcmlvcml0eT1YLnByb3RvdHlwZS5jZztYLnByb3RvdHlwZS5vcmRlckJ5VmFsdWU9WC5wcm90b3R5cGUuZGc7WC5wcm90b3R5cGUuc3RhcnRBdD1YLnByb3RvdHlwZS5OZDtYLnByb3RvdHlwZS5lbmRBdD1YLnByb3RvdHlwZS5nZDtYLnByb3RvdHlwZS5lcXVhbFRvPVgucHJvdG90eXBlLklmO1gucHJvdG90eXBlLnRvU3RyaW5nPVgucHJvdG90eXBlLnRvU3RyaW5nO1gucHJvdG90eXBlLmlzRXF1YWw9WC5wcm90b3R5cGUuaXNFcXVhbDtMYyhYLnByb3RvdHlwZSxcInJlZlwiLFgucHJvdG90eXBlLndiKTtmdW5jdGlvbiAkZihhLGIpe3RoaXMudmFsdWU9YTt0aGlzLmNoaWxkcmVuPWJ8fGFnfXZhciBhZz1uZXcgdmYoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWI/MDphPGI/LTE6MX0pO2Z1bmN0aW9uIGJnKGEpe3ZhciBiPVE7cihhLGZ1bmN0aW9uKGEsZCl7Yj1iLnNldChuZXcgTChkKSxhKX0pO3JldHVybiBifWc9JGYucHJvdG90eXBlO2cuZT1mdW5jdGlvbigpe3JldHVybiBudWxsPT09dGhpcy52YWx1ZSYmdGhpcy5jaGlsZHJlbi5lKCl9O2Z1bmN0aW9uIGNnKGEsYixjKXtpZihudWxsIT1hLnZhbHVlJiZjKGEudmFsdWUpKXJldHVybntwYXRoOkMsdmFsdWU6YS52YWx1ZX07aWYoYi5lKCkpcmV0dXJuIG51bGw7dmFyIGQ9SihiKTthPWEuY2hpbGRyZW4uZ2V0KGQpO3JldHVybiBudWxsIT09YT8oYj1jZyhhLEQoYiksYyksbnVsbCE9Yj97cGF0aDoobmV3IEwoZCkpLm4oYi5wYXRoKSx2YWx1ZTpiLnZhbHVlfTpudWxsKTpudWxsfVxuZnVuY3Rpb24gZGcoYSxiKXtyZXR1cm4gY2coYSxiLGZ1bmN0aW9uKCl7cmV0dXJuITB9KX1nLnN1YnRyZWU9ZnVuY3Rpb24oYSl7aWYoYS5lKCkpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5jaGlsZHJlbi5nZXQoSihhKSk7cmV0dXJuIG51bGwhPT1iP2Iuc3VidHJlZShEKGEpKTpRfTtnLnNldD1mdW5jdGlvbihhLGIpe2lmKGEuZSgpKXJldHVybiBuZXcgJGYoYix0aGlzLmNoaWxkcmVuKTt2YXIgYz1KKGEpLGQ9KHRoaXMuY2hpbGRyZW4uZ2V0KGMpfHxRKS5zZXQoRChhKSxiKSxjPXRoaXMuY2hpbGRyZW4uT2EoYyxkKTtyZXR1cm4gbmV3ICRmKHRoaXMudmFsdWUsYyl9O1xuZy5yZW1vdmU9ZnVuY3Rpb24oYSl7aWYoYS5lKCkpcmV0dXJuIHRoaXMuY2hpbGRyZW4uZSgpP1E6bmV3ICRmKG51bGwsdGhpcy5jaGlsZHJlbik7dmFyIGI9SihhKSxjPXRoaXMuY2hpbGRyZW4uZ2V0KGIpO3JldHVybiBjPyhhPWMucmVtb3ZlKEQoYSkpLGI9YS5lKCk/dGhpcy5jaGlsZHJlbi5yZW1vdmUoYik6dGhpcy5jaGlsZHJlbi5PYShiLGEpLG51bGw9PT10aGlzLnZhbHVlJiZiLmUoKT9ROm5ldyAkZih0aGlzLnZhbHVlLGIpKTp0aGlzfTtnLmdldD1mdW5jdGlvbihhKXtpZihhLmUoKSlyZXR1cm4gdGhpcy52YWx1ZTt2YXIgYj10aGlzLmNoaWxkcmVuLmdldChKKGEpKTtyZXR1cm4gYj9iLmdldChEKGEpKTpudWxsfTtcbmZ1bmN0aW9uIEVkKGEsYixjKXtpZihiLmUoKSlyZXR1cm4gYzt2YXIgZD1KKGIpO2I9RWQoYS5jaGlsZHJlbi5nZXQoZCl8fFEsRChiKSxjKTtkPWIuZSgpP2EuY2hpbGRyZW4ucmVtb3ZlKGQpOmEuY2hpbGRyZW4uT2EoZCxiKTtyZXR1cm4gbmV3ICRmKGEudmFsdWUsZCl9ZnVuY3Rpb24gZWcoYSxiKXtyZXR1cm4gZmcoYSxDLGIpfWZ1bmN0aW9uIGZnKGEsYixjKXt2YXIgZD17fTthLmNoaWxkcmVuLmhhKGZ1bmN0aW9uKGEsZil7ZFthXT1mZyhmLGIubihhKSxjKX0pO3JldHVybiBjKGIsYS52YWx1ZSxkKX1mdW5jdGlvbiBnZyhhLGIsYyl7cmV0dXJuIGhnKGEsYixDLGMpfWZ1bmN0aW9uIGhnKGEsYixjLGQpe3ZhciBlPWEudmFsdWU/ZChjLGEudmFsdWUpOiExO2lmKGUpcmV0dXJuIGU7aWYoYi5lKCkpcmV0dXJuIG51bGw7ZT1KKGIpO3JldHVybihhPWEuY2hpbGRyZW4uZ2V0KGUpKT9oZyhhLEQoYiksYy5uKGUpLGQpOm51bGx9XG5mdW5jdGlvbiBpZyhhLGIsYyl7amcoYSxiLEMsYyl9ZnVuY3Rpb24gamcoYSxiLGMsZCl7aWYoYi5lKCkpcmV0dXJuIGE7YS52YWx1ZSYmZChjLGEudmFsdWUpO3ZhciBlPUooYik7cmV0dXJuKGE9YS5jaGlsZHJlbi5nZXQoZSkpP2pnKGEsRChiKSxjLm4oZSksZCk6UX1mdW5jdGlvbiBDZChhLGIpe2tnKGEsQyxiKX1mdW5jdGlvbiBrZyhhLGIsYyl7YS5jaGlsZHJlbi5oYShmdW5jdGlvbihhLGUpe2tnKGUsYi5uKGEpLGMpfSk7YS52YWx1ZSYmYyhiLGEudmFsdWUpfWZ1bmN0aW9uIGxnKGEsYil7YS5jaGlsZHJlbi5oYShmdW5jdGlvbihhLGQpe2QudmFsdWUmJmIoYSxkLnZhbHVlKX0pfXZhciBRPW5ldyAkZihudWxsKTskZi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXt2YXIgYT17fTtDZCh0aGlzLGZ1bmN0aW9uKGIsYyl7YVtiLnRvU3RyaW5nKCldPWMudG9TdHJpbmcoKX0pO3JldHVybiBCKGEpfTtmdW5jdGlvbiBtZyhhLGIsYyl7dGhpcy50eXBlPXVkO3RoaXMuc291cmNlPW5nO3RoaXMucGF0aD1hO3RoaXMuT2I9Yjt0aGlzLklkPWN9bWcucHJvdG90eXBlLk1jPWZ1bmN0aW9uKGEpe2lmKHRoaXMucGF0aC5lKCkpe2lmKG51bGwhPXRoaXMuT2IudmFsdWUpcmV0dXJuIEgodGhpcy5PYi5jaGlsZHJlbi5lKCksXCJhZmZlY3RlZFRyZWUgc2hvdWxkIG5vdCBoYXZlIG92ZXJsYXBwaW5nIGFmZmVjdGVkIHBhdGhzLlwiKSx0aGlzO2E9dGhpcy5PYi5zdWJ0cmVlKG5ldyBMKGEpKTtyZXR1cm4gbmV3IG1nKEMsYSx0aGlzLklkKX1IKEoodGhpcy5wYXRoKT09PWEsXCJvcGVyYXRpb25Gb3JDaGlsZCBjYWxsZWQgZm9yIHVucmVsYXRlZCBjaGlsZC5cIik7cmV0dXJuIG5ldyBtZyhEKHRoaXMucGF0aCksdGhpcy5PYix0aGlzLklkKX07XG5tZy5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIk9wZXJhdGlvbihcIit0aGlzLnBhdGgrXCI6IFwiK3RoaXMuc291cmNlLnRvU3RyaW5nKCkrXCIgYWNrIHdyaXRlIHJldmVydD1cIit0aGlzLklkK1wiIGFmZmVjdGVkVHJlZT1cIit0aGlzLk9iK1wiKVwifTt2YXIgQmI9MCxXYz0xLHVkPTIsRGI9MztmdW5jdGlvbiBvZyhhLGIsYyxkKXt0aGlzLmNlPWE7dGhpcy5TZT1iO3RoaXMuSGI9Yzt0aGlzLkNlPWQ7SCghZHx8YixcIlRhZ2dlZCBxdWVyaWVzIG11c3QgYmUgZnJvbSBzZXJ2ZXIuXCIpfXZhciBuZz1uZXcgb2coITAsITEsbnVsbCwhMSkscGc9bmV3IG9nKCExLCEwLG51bGwsITEpO29nLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNlP1widXNlclwiOnRoaXMuQ2U/XCJzZXJ2ZXIocXVlcnlJRD1cIit0aGlzLkhiK1wiKVwiOlwic2VydmVyXCJ9O2Z1bmN0aW9uIHFnKGEpe3RoaXMuVz1hfXZhciByZz1uZXcgcWcobmV3ICRmKG51bGwpKTtmdW5jdGlvbiBzZyhhLGIsYyl7aWYoYi5lKCkpcmV0dXJuIG5ldyBxZyhuZXcgJGYoYykpO3ZhciBkPWRnKGEuVyxiKTtpZihudWxsIT1kKXt2YXIgZT1kLnBhdGgsZD1kLnZhbHVlO2I9VChlLGIpO2Q9ZC5GKGIsYyk7cmV0dXJuIG5ldyBxZyhhLlcuc2V0KGUsZCkpfWE9RWQoYS5XLGIsbmV3ICRmKGMpKTtyZXR1cm4gbmV3IHFnKGEpfWZ1bmN0aW9uIHRnKGEsYixjKXt2YXIgZD1hO2RiKGMsZnVuY3Rpb24oYSxjKXtkPXNnKGQsYi5uKGEpLGMpfSk7cmV0dXJuIGR9cWcucHJvdG90eXBlLkVkPWZ1bmN0aW9uKGEpe2lmKGEuZSgpKXJldHVybiByZzthPUVkKHRoaXMuVyxhLFEpO3JldHVybiBuZXcgcWcoYSl9O2Z1bmN0aW9uIHVnKGEsYil7dmFyIGM9ZGcoYS5XLGIpO3JldHVybiBudWxsIT1jP2EuVy5nZXQoYy5wYXRoKS5QKFQoYy5wYXRoLGIpKTpudWxsfVxuZnVuY3Rpb24gdmcoYSl7dmFyIGI9W10sYz1hLlcudmFsdWU7bnVsbCE9Yz9jLkooKXx8Yy5PKE4sZnVuY3Rpb24oYSxjKXtiLnB1c2gobmV3IEsoYSxjKSl9KTphLlcuY2hpbGRyZW4uaGEoZnVuY3Rpb24oYSxjKXtudWxsIT1jLnZhbHVlJiZiLnB1c2gobmV3IEsoYSxjLnZhbHVlKSl9KTtyZXR1cm4gYn1mdW5jdGlvbiB3ZyhhLGIpe2lmKGIuZSgpKXJldHVybiBhO3ZhciBjPXVnKGEsYik7cmV0dXJuIG51bGwhPWM/bmV3IHFnKG5ldyAkZihjKSk6bmV3IHFnKGEuVy5zdWJ0cmVlKGIpKX1xZy5wcm90b3R5cGUuZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLlcuZSgpfTtxZy5wcm90b3R5cGUuYXBwbHk9ZnVuY3Rpb24oYSl7cmV0dXJuIHhnKEMsdGhpcy5XLGEpfTtcbmZ1bmN0aW9uIHhnKGEsYixjKXtpZihudWxsIT1iLnZhbHVlKXJldHVybiBjLkYoYSxiLnZhbHVlKTt2YXIgZD1udWxsO2IuY2hpbGRyZW4uaGEoZnVuY3Rpb24oYixmKXtcIi5wcmlvcml0eVwiPT09Yj8oSChudWxsIT09Zi52YWx1ZSxcIlByaW9yaXR5IHdyaXRlcyBtdXN0IGFsd2F5cyBiZSBsZWFmIG5vZGVzXCIpLGQ9Zi52YWx1ZSk6Yz14ZyhhLm4oYiksZixjKX0pO2MuUChhKS5lKCl8fG51bGw9PT1kfHwoYz1jLkYoYS5uKFwiLnByaW9yaXR5XCIpLGQpKTtyZXR1cm4gY307ZnVuY3Rpb24geWcoKXt0aGlzLnphPXt9fWc9eWcucHJvdG90eXBlO2cuZT1mdW5jdGlvbigpe3JldHVybiB5YSh0aGlzLnphKX07Zy5lYj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YS5zb3VyY2UuSGI7aWYobnVsbCE9PWQpcmV0dXJuIGQ9dyh0aGlzLnphLGQpLEgobnVsbCE9ZCxcIlN5bmNUcmVlIGdhdmUgdXMgYW4gb3AgZm9yIGFuIGludmFsaWQgcXVlcnkuXCIpLGQuZWIoYSxiLGMpO3ZhciBlPVtdO3IodGhpcy56YSxmdW5jdGlvbihkKXtlPWUuY29uY2F0KGQuZWIoYSxiLGMpKX0pO3JldHVybiBlfTtnLk5iPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9YS5qYSgpLGg9dyh0aGlzLnphLGYpO2lmKCFoKXt2YXIgaD1jLkFhKGU/ZDpudWxsKSxrPSExO2g/az0hMDooaD1kIGluc3RhbmNlb2YgUD9jLnJjKGQpOkcsaz0hMSk7aD1uZXcgUGYoYSxuZXcgeWQobmV3ICRiKGgsaywhMSksbmV3ICRiKGQsZSwhMSkpKTt0aGlzLnphW2ZdPWh9aC5OYihiKTtyZXR1cm4gU2YoaCxiKX07XG5nLmtiPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hLmphKCksZT1bXSxmPVtdLGg9bnVsbCE9emcodGhpcyk7aWYoXCJkZWZhdWx0XCI9PT1kKXt2YXIgaz10aGlzO3IodGhpcy56YSxmdW5jdGlvbihhLGQpe2Y9Zi5jb25jYXQoYS5rYihiLGMpKTthLmUoKSYmKGRlbGV0ZSBrLnphW2RdLFMoYS5WLm0pfHxlLnB1c2goYS5WKSl9KX1lbHNle3ZhciBsPXcodGhpcy56YSxkKTtsJiYoZj1mLmNvbmNhdChsLmtiKGIsYykpLGwuZSgpJiYoZGVsZXRlIHRoaXMuemFbZF0sUyhsLlYubSl8fGUucHVzaChsLlYpKSl9aCYmbnVsbD09emcodGhpcykmJmUucHVzaChuZXcgVShhLnUsYS5wYXRoKSk7cmV0dXJue2hnOmUsS2Y6Zn19O2Z1bmN0aW9uIEFnKGEpe3JldHVybiBLYSh0YShhLnphKSxmdW5jdGlvbihhKXtyZXR1cm4hUyhhLlYubSl9KX1nLmhiPWZ1bmN0aW9uKGEpe3ZhciBiPW51bGw7cih0aGlzLnphLGZ1bmN0aW9uKGMpe2I9Ynx8Yy5oYihhKX0pO3JldHVybiBifTtcbmZ1bmN0aW9uIEJnKGEsYil7aWYoUyhiLm0pKXJldHVybiB6ZyhhKTt2YXIgYz1iLmphKCk7cmV0dXJuIHcoYS56YSxjKX1mdW5jdGlvbiB6ZyhhKXtyZXR1cm4geGEoYS56YSxmdW5jdGlvbihhKXtyZXR1cm4gUyhhLlYubSl9KXx8bnVsbH07ZnVuY3Rpb24gQ2coKXt0aGlzLlM9cmc7dGhpcy5sYT1bXTt0aGlzLkJjPS0xfWZ1bmN0aW9uIERnKGEsYil7Zm9yKHZhciBjPTA7YzxhLmxhLmxlbmd0aDtjKyspe3ZhciBkPWEubGFbY107aWYoZC5aYz09PWIpcmV0dXJuIGR9cmV0dXJuIG51bGx9Zz1DZy5wcm90b3R5cGU7XG5nLkVkPWZ1bmN0aW9uKGEpe3ZhciBiPVBhKHRoaXMubGEsZnVuY3Rpb24oYil7cmV0dXJuIGIuWmM9PT1hfSk7SCgwPD1iLFwicmVtb3ZlV3JpdGUgY2FsbGVkIHdpdGggbm9uZXhpc3RlbnQgd3JpdGVJZC5cIik7dmFyIGM9dGhpcy5sYVtiXTt0aGlzLmxhLnNwbGljZShiLDEpO2Zvcih2YXIgZD1jLnZpc2libGUsZT0hMSxmPXRoaXMubGEubGVuZ3RoLTE7ZCYmMDw9Zjspe3ZhciBoPXRoaXMubGFbZl07aC52aXNpYmxlJiYoZj49YiYmRWcoaCxjLnBhdGgpP2Q9ITE6Yy5wYXRoLmNvbnRhaW5zKGgucGF0aCkmJihlPSEwKSk7Zi0tfWlmKGQpe2lmKGUpdGhpcy5TPUZnKHRoaXMubGEsR2csQyksdGhpcy5CYz0wPHRoaXMubGEubGVuZ3RoP3RoaXMubGFbdGhpcy5sYS5sZW5ndGgtMV0uWmM6LTE7ZWxzZSBpZihjLkdhKXRoaXMuUz10aGlzLlMuRWQoYy5wYXRoKTtlbHNle3ZhciBrPXRoaXM7cihjLmNoaWxkcmVuLGZ1bmN0aW9uKGEsYil7ay5TPWsuUy5FZChjLnBhdGgubihiKSl9KX1yZXR1cm4hMH1yZXR1cm4hMX07XG5nLkFhPWZ1bmN0aW9uKGEsYixjLGQpe2lmKGN8fGQpe3ZhciBlPXdnKHRoaXMuUyxhKTtyZXR1cm4hZCYmZS5lKCk/YjpkfHxudWxsIT1ifHxudWxsIT11ZyhlLEMpPyhlPUZnKHRoaXMubGEsZnVuY3Rpb24oYil7cmV0dXJuKGIudmlzaWJsZXx8ZCkmJighY3x8ISgwPD1JYShjLGIuWmMpKSkmJihiLnBhdGguY29udGFpbnMoYSl8fGEuY29udGFpbnMoYi5wYXRoKSl9LGEpLGI9Ynx8RyxlLmFwcGx5KGIpKTpudWxsfWU9dWcodGhpcy5TLGEpO2lmKG51bGwhPWUpcmV0dXJuIGU7ZT13Zyh0aGlzLlMsYSk7cmV0dXJuIGUuZSgpP2I6bnVsbCE9Ynx8bnVsbCE9dWcoZSxDKT8oYj1ifHxHLGUuYXBwbHkoYikpOm51bGx9O1xuZy5yYz1mdW5jdGlvbihhLGIpe3ZhciBjPUcsZD11Zyh0aGlzLlMsYSk7aWYoZClkLkooKXx8ZC5PKE4sZnVuY3Rpb24oYSxiKXtjPWMuVChhLGIpfSk7ZWxzZSBpZihiKXt2YXIgZT13Zyh0aGlzLlMsYSk7Yi5PKE4sZnVuY3Rpb24oYSxiKXt2YXIgZD13ZyhlLG5ldyBMKGEpKS5hcHBseShiKTtjPWMuVChhLGQpfSk7SmEodmcoZSksZnVuY3Rpb24oYSl7Yz1jLlQoYS5uYW1lLGEuUil9KX1lbHNlIGU9d2codGhpcy5TLGEpLEphKHZnKGUpLGZ1bmN0aW9uKGEpe2M9Yy5UKGEubmFtZSxhLlIpfSk7cmV0dXJuIGN9O2cuYWQ9ZnVuY3Rpb24oYSxiLGMsZCl7SChjfHxkLFwiRWl0aGVyIGV4aXN0aW5nRXZlbnRTbmFwIG9yIGV4aXN0aW5nU2VydmVyU25hcCBtdXN0IGV4aXN0XCIpO2E9YS5uKGIpO2lmKG51bGwhPXVnKHRoaXMuUyxhKSlyZXR1cm4gbnVsbDthPXdnKHRoaXMuUyxhKTtyZXR1cm4gYS5lKCk/ZC5QKGIpOmEuYXBwbHkoZC5QKGIpKX07XG5nLnFjPWZ1bmN0aW9uKGEsYixjKXthPWEubihiKTt2YXIgZD11Zyh0aGlzLlMsYSk7cmV0dXJuIG51bGwhPWQ/ZDpaYihjLGIpP3dnKHRoaXMuUyxhKS5hcHBseShjLmooKS5RKGIpKTpudWxsfTtnLmxjPWZ1bmN0aW9uKGEpe3JldHVybiB1Zyh0aGlzLlMsYSl9O2cuV2Q9ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3ZhciBoO2E9d2codGhpcy5TLGEpO2g9dWcoYSxDKTtpZihudWxsPT1oKWlmKG51bGwhPWIpaD1hLmFwcGx5KGIpO2Vsc2UgcmV0dXJuW107aD1oLm5iKGYpO2lmKGguZSgpfHxoLkooKSlyZXR1cm5bXTtiPVtdO2E9UGQoZik7ZT1lP2guWmIoYyxmKTpoLlhiKGMsZik7Zm9yKGY9UihlKTtmJiZiLmxlbmd0aDxkOykwIT09YShmLGMpJiZiLnB1c2goZiksZj1SKGUpO3JldHVybiBifTtcbmZ1bmN0aW9uIEVnKGEsYil7cmV0dXJuIGEuR2E/YS5wYXRoLmNvbnRhaW5zKGIpOiEhd2EoYS5jaGlsZHJlbixmdW5jdGlvbihjLGQpe3JldHVybiBhLnBhdGgubihkKS5jb250YWlucyhiKX0pfWZ1bmN0aW9uIEdnKGEpe3JldHVybiBhLnZpc2libGV9XG5mdW5jdGlvbiBGZyhhLGIsYyl7Zm9yKHZhciBkPXJnLGU9MDtlPGEubGVuZ3RoOysrZSl7dmFyIGY9YVtlXTtpZihiKGYpKXt2YXIgaD1mLnBhdGg7aWYoZi5HYSljLmNvbnRhaW5zKGgpPyhoPVQoYyxoKSxkPXNnKGQsaCxmLkdhKSk6aC5jb250YWlucyhjKSYmKGg9VChoLGMpLGQ9c2coZCxDLGYuR2EuUChoKSkpO2Vsc2UgaWYoZi5jaGlsZHJlbilpZihjLmNvbnRhaW5zKGgpKWg9VChjLGgpLGQ9dGcoZCxoLGYuY2hpbGRyZW4pO2Vsc2V7aWYoaC5jb250YWlucyhjKSlpZihoPVQoaCxjKSxoLmUoKSlkPXRnKGQsQyxmLmNoaWxkcmVuKTtlbHNlIGlmKGY9dyhmLmNoaWxkcmVuLEooaCkpKWY9Zi5QKEQoaCkpLGQ9c2coZCxDLGYpfWVsc2UgdGhyb3cgc2MoXCJXcml0ZVJlY29yZCBzaG91bGQgaGF2ZSAuc25hcCBvciAuY2hpbGRyZW5cIik7fX1yZXR1cm4gZH1mdW5jdGlvbiBIZyhhLGIpe3RoaXMuTGI9YTt0aGlzLlc9Yn1nPUhnLnByb3RvdHlwZTtcbmcuQWE9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLlcuQWEodGhpcy5MYixhLGIsYyl9O2cucmM9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuVy5yYyh0aGlzLkxiLGEpfTtnLmFkPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5XLmFkKHRoaXMuTGIsYSxiLGMpfTtnLmxjPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlcubGModGhpcy5MYi5uKGEpKX07Zy5XZD1mdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiB0aGlzLlcuV2QodGhpcy5MYixhLGIsYyxkLGUpfTtnLnFjPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuVy5xYyh0aGlzLkxiLGEsYil9O2cubj1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IEhnKHRoaXMuTGIubihhKSx0aGlzLlcpfTtmdW5jdGlvbiBJZygpe3RoaXMuY2hpbGRyZW49e307dGhpcy5iZD0wO3RoaXMudmFsdWU9bnVsbH1mdW5jdGlvbiBKZyhhLGIsYyl7dGhpcy51ZD1hP2E6XCJcIjt0aGlzLlBjPWI/YjpudWxsO3RoaXMuQT1jP2M6bmV3IElnfWZ1bmN0aW9uIEtnKGEsYil7Zm9yKHZhciBjPWIgaW5zdGFuY2VvZiBMP2I6bmV3IEwoYiksZD1hLGU7bnVsbCE9PShlPUooYykpOylkPW5ldyBKZyhlLGQsdyhkLkEuY2hpbGRyZW4sZSl8fG5ldyBJZyksYz1EKGMpO3JldHVybiBkfWc9SmcucHJvdG90eXBlO2cuQ2E9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5BLnZhbHVlfTtmdW5jdGlvbiBMZyhhLGIpe0goXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBiLFwiQ2Fubm90IHNldCB2YWx1ZSB0byB1bmRlZmluZWRcIik7YS5BLnZhbHVlPWI7TWcoYSl9Zy5jbGVhcj1mdW5jdGlvbigpe3RoaXMuQS52YWx1ZT1udWxsO3RoaXMuQS5jaGlsZHJlbj17fTt0aGlzLkEuYmQ9MDtNZyh0aGlzKX07XG5nLmtkPWZ1bmN0aW9uKCl7cmV0dXJuIDA8dGhpcy5BLmJkfTtnLmU9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09PXRoaXMuQ2EoKSYmIXRoaXMua2QoKX07Zy5PPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cih0aGlzLkEuY2hpbGRyZW4sZnVuY3Rpb24oYyxkKXthKG5ldyBKZyhkLGIsYykpfSl9O2Z1bmN0aW9uIE5nKGEsYixjLGQpe2MmJiFkJiZiKGEpO2EuTyhmdW5jdGlvbihhKXtOZyhhLGIsITAsZCl9KTtjJiZkJiZiKGEpfWZ1bmN0aW9uIE9nKGEsYil7Zm9yKHZhciBjPWEucGFyZW50KCk7bnVsbCE9PWMmJiFiKGMpOyljPWMucGFyZW50KCl9Zy5wYXRoPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBMKG51bGw9PT10aGlzLlBjP3RoaXMudWQ6dGhpcy5QYy5wYXRoKCkrXCIvXCIrdGhpcy51ZCl9O2cubmFtZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnVkfTtnLnBhcmVudD1mdW5jdGlvbigpe3JldHVybiB0aGlzLlBjfTtcbmZ1bmN0aW9uIE1nKGEpe2lmKG51bGwhPT1hLlBjKXt2YXIgYj1hLlBjLGM9YS51ZCxkPWEuZSgpLGU9Y2IoYi5BLmNoaWxkcmVuLGMpO2QmJmU/KGRlbGV0ZSBiLkEuY2hpbGRyZW5bY10sYi5BLmJkLS0sTWcoYikpOmR8fGV8fChiLkEuY2hpbGRyZW5bY109YS5BLGIuQS5iZCsrLE1nKGIpKX19O2Z1bmN0aW9uIFBnKGEsYixjLGQsZSxmKXt0aGlzLmlkPVFnKys7dGhpcy5mPXljKFwicDpcIit0aGlzLmlkK1wiOlwiKTt0aGlzLnFkPXt9O3RoaXMuJD17fTt0aGlzLnBhPVtdO3RoaXMuT2M9MDt0aGlzLktjPVtdO3RoaXMubWE9ITE7dGhpcy5TYT0xRTM7dGhpcy50ZD0zRTU7dGhpcy5HYj1iO3RoaXMuSmM9Yzt0aGlzLnNlPWQ7dGhpcy5MPWE7dGhpcy5vYj10aGlzLkZhPXRoaXMuQ2I9dGhpcy54ZT1udWxsO3RoaXMuJGM9ZTt0aGlzLmJlPSExO3RoaXMuaWU9MDtpZihmKXRocm93IEVycm9yKFwiQXV0aCBvdmVycmlkZSBzcGVjaWZpZWQgaW4gb3B0aW9ucywgYnV0IG5vdCBzdXBwb3J0ZWQgb24gbm9uIE5vZGUuanMgcGxhdGZvcm1zXCIpO3RoaXMuR2U9Znx8bnVsbDt0aGlzLnViPW51bGw7dGhpcy5NYj0hMTt0aGlzLkdkPXt9O3RoaXMuaWc9MDt0aGlzLlJlPSEwO3RoaXMuQWM9dGhpcy5rZT1udWxsO1JnKHRoaXMsMCk7dGYuVmIoKS5nYyhcInZpc2libGVcIix0aGlzLlpmLHRoaXMpOy0xPT09XG5hLmhvc3QuaW5kZXhPZihcImZibG9jYWxcIikmJnNmLlZiKCkuZ2MoXCJvbmxpbmVcIix0aGlzLllmLHRoaXMpfXZhciBRZz0wLFNnPTA7Zz1QZy5wcm90b3R5cGU7Zy51YT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9Kyt0aGlzLmlnO2E9e3I6ZCxhOmEsYjpifTt0aGlzLmYoQihhKSk7SCh0aGlzLm1hLFwic2VuZFJlcXVlc3QgY2FsbCB3aGVuIHdlJ3JlIG5vdCBjb25uZWN0ZWQgbm90IGFsbG93ZWQuXCIpO3RoaXMuRmEudWEoYSk7YyYmKHRoaXMuR2RbZF09Yyl9O1xuZy4kZT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1hLmphKCksZj1hLnBhdGgudG9TdHJpbmcoKTt0aGlzLmYoXCJMaXN0ZW4gY2FsbGVkIGZvciBcIitmK1wiIFwiK2UpO3RoaXMuJFtmXT10aGlzLiRbZl18fHt9O0goU2MoYS5tKXx8IVMoYS5tKSxcImxpc3RlbigpIGNhbGxlZCBmb3Igbm9uLWRlZmF1bHQgYnV0IGNvbXBsZXRlIHF1ZXJ5XCIpO0goIXRoaXMuJFtmXVtlXSxcImxpc3RlbigpIGNhbGxlZCB0d2ljZSBmb3Igc2FtZSBwYXRoL3F1ZXJ5SWQuXCIpO2E9e0c6ZCxsZDpiLGVnOmEsdGFnOmN9O3RoaXMuJFtmXVtlXT1hO3RoaXMubWEmJlRnKHRoaXMsYSl9O1xuZnVuY3Rpb24gVGcoYSxiKXt2YXIgYz1iLmVnLGQ9Yy5wYXRoLnRvU3RyaW5nKCksZT1jLmphKCk7YS5mKFwiTGlzdGVuIG9uIFwiK2QrXCIgZm9yIFwiK2UpO3ZhciBmPXtwOmR9O2IudGFnJiYoZi5xPWllKGMubSksZi50PWIudGFnKTtmLmg9Yi5sZCgpO2EudWEoXCJxXCIsZixmdW5jdGlvbihmKXt2YXIgaz1mLmQsbD1mLnM7aWYoayYmXCJvYmplY3RcIj09PXR5cGVvZiBrJiZjYihrLFwid1wiKSl7dmFyIG09dyhrLFwid1wiKTtlYShtKSYmMDw9SWEobSxcIm5vX2luZGV4XCIpJiZPKFwiVXNpbmcgYW4gdW5zcGVjaWZpZWQgaW5kZXguIENvbnNpZGVyIGFkZGluZyBcIisoJ1wiLmluZGV4T25cIjogXCInK2MubS5nLnRvU3RyaW5nKCkrJ1wiJykrXCIgYXQgXCIrYy5wYXRoLnRvU3RyaW5nKCkrXCIgdG8geW91ciBzZWN1cml0eSBydWxlcyBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXCIpfShhLiRbZF0mJmEuJFtkXVtlXSk9PT1iJiYoYS5mKFwibGlzdGVuIHJlc3BvbnNlXCIsZiksXCJva1wiIT09bCYmVWcoYSxkLGUpLGIuRyYmYi5HKGwsXG5rKSl9KX1nLmtmPWZ1bmN0aW9uKGEpe3RoaXMub2I9YTt0aGlzLmYoXCJBdXRoIHRva2VuIHJlZnJlc2hlZFwiKTt0aGlzLm9iP1ZnKHRoaXMpOnRoaXMubWEmJnRoaXMudWEoXCJ1bmF1dGhcIix7fSxmdW5jdGlvbigpe30pO2lmKGEmJjQwPT09YS5sZW5ndGh8fFBjKGEpKXRoaXMuZihcIkFkbWluIGF1dGggY3JlZGVudGlhbCBkZXRlY3RlZC4gIFJlZHVjaW5nIG1heCByZWNvbm5lY3QgdGltZS5cIiksdGhpcy50ZD0zRTR9O2Z1bmN0aW9uIFZnKGEpe2lmKGEubWEmJmEub2Ipe3ZhciBiPWEub2IsYz1PYyhiKT9cImF1dGhcIjpcImdhdXRoXCIsZD17Y3JlZDpifTthLkdlJiYoZC5hdXRodmFyPWEuR2UpO2EudWEoYyxkLGZ1bmN0aW9uKGMpe3ZhciBkPWMucztjPWMuZHx8XCJlcnJvclwiO2Eub2I9PT1iJiYoXCJva1wiPT09ZD9hLmllPTA6V2coYSxkLGMpKX0pfX1cbmcudWY9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnBhdGgudG9TdHJpbmcoKSxkPWEuamEoKTt0aGlzLmYoXCJVbmxpc3RlbiBjYWxsZWQgZm9yIFwiK2MrXCIgXCIrZCk7SChTYyhhLm0pfHwhUyhhLm0pLFwidW5saXN0ZW4oKSBjYWxsZWQgZm9yIG5vbi1kZWZhdWx0IGJ1dCBjb21wbGV0ZSBxdWVyeVwiKTtpZihVZyh0aGlzLGMsZCkmJnRoaXMubWEpe3ZhciBlPWllKGEubSk7dGhpcy5mKFwiVW5saXN0ZW4gb24gXCIrYytcIiBmb3IgXCIrZCk7Yz17cDpjfTtiJiYoYy5xPWUsYy50PWIpO3RoaXMudWEoXCJuXCIsYyl9fTtnLnBlPWZ1bmN0aW9uKGEsYixjKXt0aGlzLm1hP1hnKHRoaXMsXCJvXCIsYSxiLGMpOnRoaXMuS2MucHVzaCh7dWU6YSxhY3Rpb246XCJvXCIsZGF0YTpiLEc6Y30pfTtnLmNmPWZ1bmN0aW9uKGEsYixjKXt0aGlzLm1hP1hnKHRoaXMsXCJvbVwiLGEsYixjKTp0aGlzLktjLnB1c2goe3VlOmEsYWN0aW9uOlwib21cIixkYXRhOmIsRzpjfSl9O1xuZy54ZD1mdW5jdGlvbihhLGIpe3RoaXMubWE/WGcodGhpcyxcIm9jXCIsYSxudWxsLGIpOnRoaXMuS2MucHVzaCh7dWU6YSxhY3Rpb246XCJvY1wiLGRhdGE6bnVsbCxHOmJ9KX07ZnVuY3Rpb24gWGcoYSxiLGMsZCxlKXtjPXtwOmMsZDpkfTthLmYoXCJvbkRpc2Nvbm5lY3QgXCIrYixjKTthLnVhKGIsYyxmdW5jdGlvbihhKXtlJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShhLnMsYS5kKX0sTWF0aC5mbG9vcigwKSl9KX1nLnB1dD1mdW5jdGlvbihhLGIsYyxkKXtZZyh0aGlzLFwicFwiLGEsYixjLGQpfTtnLmFmPWZ1bmN0aW9uKGEsYixjLGQpe1lnKHRoaXMsXCJtXCIsYSxiLGMsZCl9O2Z1bmN0aW9uIFlnKGEsYixjLGQsZSxmKXtkPXtwOmMsZDpkfTtuKGYpJiYoZC5oPWYpO2EucGEucHVzaCh7YWN0aW9uOmIsbWY6ZCxHOmV9KTthLk9jKys7Yj1hLnBhLmxlbmd0aC0xO2EubWE/WmcoYSxiKTphLmYoXCJCdWZmZXJpbmcgcHV0OiBcIitjKX1cbmZ1bmN0aW9uIFpnKGEsYil7dmFyIGM9YS5wYVtiXS5hY3Rpb24sZD1hLnBhW2JdLm1mLGU9YS5wYVtiXS5HO2EucGFbYl0uZmc9YS5tYTthLnVhKGMsZCxmdW5jdGlvbihkKXthLmYoYytcIiByZXNwb25zZVwiLGQpO2RlbGV0ZSBhLnBhW2JdO2EuT2MtLTswPT09YS5PYyYmKGEucGE9W10pO2UmJmUoZC5zLGQuZCl9KX1nLndlPWZ1bmN0aW9uKGEpe3RoaXMubWEmJihhPXtjOmF9LHRoaXMuZihcInJlcG9ydFN0YXRzXCIsYSksdGhpcy51YShcInNcIixhLGZ1bmN0aW9uKGEpe1wib2tcIiE9PWEucyYmdGhpcy5mKFwicmVwb3J0U3RhdHNcIixcIkVycm9yIHNlbmRpbmcgc3RhdHM6IFwiK2EuZCl9KSl9O1xuZy53ZD1mdW5jdGlvbihhKXtpZihcInJcImluIGEpe3RoaXMuZihcImZyb20gc2VydmVyOiBcIitCKGEpKTt2YXIgYj1hLnIsYz10aGlzLkdkW2JdO2MmJihkZWxldGUgdGhpcy5HZFtiXSxjKGEuYikpfWVsc2V7aWYoXCJlcnJvclwiaW4gYSl0aHJvd1wiQSBzZXJ2ZXItc2lkZSBlcnJvciBoYXMgb2NjdXJyZWQ6IFwiK2EuZXJyb3I7XCJhXCJpbiBhJiYoYj1hLmEsYT1hLmIsdGhpcy5mKFwiaGFuZGxlU2VydmVyTWVzc2FnZVwiLGIsYSksXCJkXCI9PT1iP3RoaXMuR2IoYS5wLGEuZCwhMSxhLnQpOlwibVwiPT09Yj90aGlzLkdiKGEucCxhLmQsITAsYS50KTpcImNcIj09PWI/JGcodGhpcyxhLnAsYS5xKTpcImFjXCI9PT1iP1dnKHRoaXMsYS5zLGEuZCk6XCJzZFwiPT09Yj90aGlzLnhlP3RoaXMueGUoYSk6XCJtc2dcImluIGEmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSYmY29uc29sZS5sb2coXCJGSVJFQkFTRTogXCIrYS5tc2cucmVwbGFjZShcIlxcblwiLFwiXFxuRklSRUJBU0U6IFwiKSk6emMoXCJVbnJlY29nbml6ZWQgYWN0aW9uIHJlY2VpdmVkIGZyb20gc2VydmVyOiBcIitcbkIoYikrXCJcXG5BcmUgeW91IHVzaW5nIHRoZSBsYXRlc3QgY2xpZW50P1wiKSl9fTtnLkxjPWZ1bmN0aW9uKGEsYil7dGhpcy5mKFwiY29ubmVjdGlvbiByZWFkeVwiKTt0aGlzLm1hPSEwO3RoaXMuQWM9KG5ldyBEYXRlKS5nZXRUaW1lKCk7dGhpcy5zZSh7c2VydmVyVGltZU9mZnNldDphLShuZXcgRGF0ZSkuZ2V0VGltZSgpfSk7dGhpcy5DYj1iO2lmKHRoaXMuUmUpe3ZhciBjPXt9O2NbXCJzZGsuanMuXCIrZmlyZWJhc2UuU0RLX1ZFUlNJT04ucmVwbGFjZSgvXFwuL2csXCItXCIpXT0xO3FiKCk/Y1tcImZyYW1ld29yay5jb3Jkb3ZhXCJdPTE6XCJvYmplY3RcIj09PXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0JiYoY1tcImZyYW1ld29yay5yZWFjdG5hdGl2ZVwiXT0xKTt0aGlzLndlKGMpfWFoKHRoaXMpO3RoaXMuUmU9ITE7dGhpcy5KYyghMCl9O1xuZnVuY3Rpb24gUmcoYSxiKXtIKCFhLkZhLFwiU2NoZWR1bGluZyBhIGNvbm5lY3Qgd2hlbiB3ZSdyZSBhbHJlYWR5IGNvbm5lY3RlZC9pbmc/XCIpO2EudWImJmNsZWFyVGltZW91dChhLnViKTthLnViPXNldFRpbWVvdXQoZnVuY3Rpb24oKXthLnViPW51bGw7YmgoYSl9LE1hdGguZmxvb3IoYikpfWcuWmY9ZnVuY3Rpb24oYSl7YSYmIXRoaXMuTWImJnRoaXMuU2E9PT10aGlzLnRkJiYodGhpcy5mKFwiV2luZG93IGJlY2FtZSB2aXNpYmxlLiAgUmVkdWNpbmcgZGVsYXkuXCIpLHRoaXMuU2E9MUUzLHRoaXMuRmF8fFJnKHRoaXMsMCkpO3RoaXMuTWI9YX07Zy5ZZj1mdW5jdGlvbihhKXthPyh0aGlzLmYoXCJCcm93c2VyIHdlbnQgb25saW5lLlwiKSx0aGlzLlNhPTFFMyx0aGlzLkZhfHxSZyh0aGlzLDApKToodGhpcy5mKFwiQnJvd3NlciB3ZW50IG9mZmxpbmUuICBLaWxsaW5nIGNvbm5lY3Rpb24uXCIpLHRoaXMuRmEmJnRoaXMuRmEuY2xvc2UoKSl9O1xuZy5kZj1mdW5jdGlvbigpe3RoaXMuZihcImRhdGEgY2xpZW50IGRpc2Nvbm5lY3RlZFwiKTt0aGlzLm1hPSExO3RoaXMuRmE9bnVsbDtmb3IodmFyIGE9MDthPHRoaXMucGEubGVuZ3RoO2ErKyl7dmFyIGI9dGhpcy5wYVthXTtiJiZcImhcImluIGIubWYmJmIuZmcmJihiLkcmJmIuRyhcImRpc2Nvbm5lY3RcIiksZGVsZXRlIHRoaXMucGFbYV0sdGhpcy5PYy0tKX0wPT09dGhpcy5PYyYmKHRoaXMucGE9W10pO3RoaXMuR2Q9e307Y2godGhpcykmJih0aGlzLk1iP3RoaXMuQWMmJigzRTQ8KG5ldyBEYXRlKS5nZXRUaW1lKCktdGhpcy5BYyYmKHRoaXMuU2E9MUUzKSx0aGlzLkFjPW51bGwpOih0aGlzLmYoXCJXaW5kb3cgaXNuJ3QgdmlzaWJsZS4gIERlbGF5aW5nIHJlY29ubmVjdC5cIiksdGhpcy5TYT10aGlzLnRkLHRoaXMua2U9KG5ldyBEYXRlKS5nZXRUaW1lKCkpLGE9TWF0aC5tYXgoMCx0aGlzLlNhLSgobmV3IERhdGUpLmdldFRpbWUoKS10aGlzLmtlKSksYSo9TWF0aC5yYW5kb20oKSx0aGlzLmYoXCJUcnlpbmcgdG8gcmVjb25uZWN0IGluIFwiK1xuYStcIm1zXCIpLFJnKHRoaXMsYSksdGhpcy5TYT1NYXRoLm1pbih0aGlzLnRkLDEuMyp0aGlzLlNhKSk7dGhpcy5KYyghMSl9O1xuZnVuY3Rpb24gYmgoYSl7aWYoY2goYSkpe2EuZihcIk1ha2luZyBhIGNvbm5lY3Rpb24gYXR0ZW1wdFwiKTthLmtlPShuZXcgRGF0ZSkuZ2V0VGltZSgpO2EuQWM9bnVsbDt2YXIgYj1xKGEud2QsYSksYz1xKGEuTGMsYSksZD1xKGEuZGYsYSksZT1hLmlkK1wiOlwiK1NnKyssZj1hLkNiLGg9ITEsaz1udWxsLGw9ZnVuY3Rpb24oKXtrP2suY2xvc2UoKTooaD0hMCxkKCkpfTthLkZhPXtjbG9zZTpsLHVhOmZ1bmN0aW9uKGEpe0goayxcInNlbmRSZXF1ZXN0IGNhbGwgd2hlbiB3ZSdyZSBub3QgY29ubmVjdGVkIG5vdCBhbGxvd2VkLlwiKTtrLnVhKGEpfX07dmFyIG09YS5iZTthLmJlPSExO2EuJGMuZ2V0VG9rZW4obSkudGhlbihmdW5jdGlvbihsKXtoP0UoXCJnZXRUb2tlbigpIGNvbXBsZXRlZCBidXQgd2FzIGNhbmNlbGVkXCIpOihFKFwiZ2V0VG9rZW4oKSBjb21wbGV0ZWQuIENyZWF0aW5nIGNvbm5lY3Rpb24uXCIpLGEub2I9bCYmbC5hY2Nlc3NUb2tlbixrPW5ldyBDZShlLGEuTCxiLGMsZCxmdW5jdGlvbihiKXtPKGIrXG5cIiAoXCIrYS5MLnRvU3RyaW5nKCkrXCIpXCIpO2EuYWIoXCJzZXJ2ZXJfa2lsbFwiKX0sZikpfSkudGhlbihudWxsLGZ1bmN0aW9uKGIpe2EuZihcIkZhaWxlZCB0byBnZXQgdG9rZW46IFwiK2IpO2h8fGwoKX0pfX1nLmFiPWZ1bmN0aW9uKGEpe0UoXCJJbnRlcnJ1cHRpbmcgY29ubmVjdGlvbiBmb3IgcmVhc29uOiBcIithKTt0aGlzLnFkW2FdPSEwO3RoaXMuRmE/dGhpcy5GYS5jbG9zZSgpOih0aGlzLnViJiYoY2xlYXJUaW1lb3V0KHRoaXMudWIpLHRoaXMudWI9bnVsbCksdGhpcy5tYSYmdGhpcy5kZigpKX07Zy5rYz1mdW5jdGlvbihhKXtFKFwiUmVzdW1pbmcgY29ubmVjdGlvbiBmb3IgcmVhc29uOiBcIithKTtkZWxldGUgdGhpcy5xZFthXTt5YSh0aGlzLnFkKSYmKHRoaXMuU2E9MUUzLHRoaXMuRmF8fFJnKHRoaXMsMCkpfTtcbmZ1bmN0aW9uICRnKGEsYixjKXtjPWM/TGEoYyxmdW5jdGlvbihhKXtyZXR1cm4gR2MoYSl9KS5qb2luKFwiJFwiKTpcImRlZmF1bHRcIjsoYT1VZyhhLGIsYykpJiZhLkcmJmEuRyhcInBlcm1pc3Npb25fZGVuaWVkXCIpfWZ1bmN0aW9uIFVnKGEsYixjKXtiPShuZXcgTChiKSkudG9TdHJpbmcoKTt2YXIgZDtuKGEuJFtiXSk/KGQ9YS4kW2JdW2NdLGRlbGV0ZSBhLiRbYl1bY10sMD09PXJhKGEuJFtiXSkmJmRlbGV0ZSBhLiRbYl0pOmQ9dm9pZCAwO3JldHVybiBkfVxuZnVuY3Rpb24gV2coYSxiLGMpe0UoXCJBdXRoIHRva2VuIHJldm9rZWQ6IFwiK2IrXCIvXCIrYyk7YS5vYj1udWxsO2EuYmU9ITA7YS5GYS5jbG9zZSgpO1wiaW52YWxpZF90b2tlblwiPT09YiYmKGEuaWUrKywzPD1hLmllJiYoYS5TYT0zRTQsYT1hLiRjLGI9J1Byb3ZpZGVkIGF1dGhlbnRpY2F0aW9uIGNyZWRlbnRpYWxzIGZvciB0aGUgYXBwIG5hbWVkIFwiJythLm9jLm5hbWUrJ1wiIGFyZSBpbnZhbGlkLiBUaGlzIHVzdWFsbHkgaW5kaWNhdGVzIHlvdXIgYXBwIHdhcyBub3QgaW5pdGlhbGl6ZWQgY29ycmVjdGx5LiAnLGI9XCJjcmVkZW50aWFsXCJpbiBhLm9jLm9wdGlvbnM/YisnTWFrZSBzdXJlIHRoZSBcImNyZWRlbnRpYWxcIiBwcm9wZXJ0eSBwcm92aWRlZCB0byBpbml0aWFsaXplQXBwKCkgaXMgYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhlIHNwZWNpZmllZCBcImRhdGFiYXNlVVJMXCIgYW5kIGlzIGZyb20gdGhlIGNvcnJlY3QgcHJvamVjdC4nOlwic2VydmljZUFjY291bnRcImluIGEub2Mub3B0aW9ucz9cbmIrJ01ha2Ugc3VyZSB0aGUgXCJzZXJ2aWNlQWNjb3VudFwiIHByb3BlcnR5IHByb3ZpZGVkIHRvIGluaXRpYWxpemVBcHAoKSBpcyBhdXRob3JpemVkIHRvIGFjY2VzcyB0aGUgc3BlY2lmaWVkIFwiZGF0YWJhc2VVUkxcIiBhbmQgaXMgZnJvbSB0aGUgY29ycmVjdCBwcm9qZWN0Lic6YisnTWFrZSBzdXJlIHRoZSBcImFwaUtleVwiIGFuZCBcImRhdGFiYXNlVVJMXCIgcHJvcGVydGllcyBwcm92aWRlZCB0byBpbml0aWFsaXplQXBwKCkgbWF0Y2ggdGhlIHZhbHVlcyBwcm92aWRlZCBmb3IgeW91ciBhcHAgYXQgaHR0cHM6Ly9jb25zb2xlLmZpcmViYXNlLmdvb2dsZS5jb20vLicsTyhiKSkpfVxuZnVuY3Rpb24gYWgoYSl7VmcoYSk7cihhLiQsZnVuY3Rpb24oYil7cihiLGZ1bmN0aW9uKGIpe1RnKGEsYil9KX0pO2Zvcih2YXIgYj0wO2I8YS5wYS5sZW5ndGg7YisrKWEucGFbYl0mJlpnKGEsYik7Zm9yKDthLktjLmxlbmd0aDspYj1hLktjLnNoaWZ0KCksWGcoYSxiLmFjdGlvbixiLnVlLGIuZGF0YSxiLkcpfWZ1bmN0aW9uIGNoKGEpe3ZhciBiO2I9c2YuVmIoKS5oYztyZXR1cm4geWEoYS5xZCkmJmJ9O3ZhciBZPXtNZjpmdW5jdGlvbigpe3JlPWRkPSEwfX07WS5mb3JjZUxvbmdQb2xsaW5nPVkuTWY7WS5OZj1mdW5jdGlvbigpe3NlPSEwfTtZLmZvcmNlV2ViU29ja2V0cz1ZLk5mO1kuVGY9ZnVuY3Rpb24oKXtyZXR1cm4gY2QuaXNBdmFpbGFibGUoKX07WS5pc1dlYlNvY2tldHNBdmFpbGFibGU9WS5UZjtZLmxnPWZ1bmN0aW9uKGEsYil7YS51LlJhLnhlPWJ9O1kuc2V0U2VjdXJpdHlEZWJ1Z0NhbGxiYWNrPVkubGc7WS56ZT1mdW5jdGlvbihhLGIpe2EudS56ZShiKX07WS5zdGF0cz1ZLnplO1kuQWU9ZnVuY3Rpb24oYSxiKXthLnUuQWUoYil9O1kuc3RhdHNJbmNyZW1lbnRDb3VudGVyPVkuQWU7WS5mZD1mdW5jdGlvbihhKXtyZXR1cm4gYS51LmZkfTtZLmRhdGFVcGRhdGVDb3VudD1ZLmZkO1kuU2Y9ZnVuY3Rpb24oYSxiKXthLnUuaGU9Yn07WS5pbnRlcmNlcHRTZXJ2ZXJEYXRhPVkuU2Y7ZnVuY3Rpb24gZGgoYSl7dGhpcy53YT1RO3RoaXMuamI9bmV3IENnO3RoaXMuQmU9e307dGhpcy5pYz17fTt0aGlzLkNjPWF9ZnVuY3Rpb24gZWgoYSxiLGMsZCxlKXt2YXIgZj1hLmpiLGg9ZTtIKGQ+Zi5CYyxcIlN0YWNraW5nIGFuIG9sZGVyIHdyaXRlIG9uIHRvcCBvZiBuZXdlciBvbmVzXCIpO24oaCl8fChoPSEwKTtmLmxhLnB1c2goe3BhdGg6YixHYTpjLFpjOmQsdmlzaWJsZTpofSk7aCYmKGYuUz1zZyhmLlMsYixjKSk7Zi5CYz1kO3JldHVybiBlP2ZoKGEsbmV3IEFiKG5nLGIsYykpOltdfWZ1bmN0aW9uIGdoKGEsYixjLGQpe3ZhciBlPWEuamI7SChkPmUuQmMsXCJTdGFja2luZyBhbiBvbGRlciBtZXJnZSBvbiB0b3Agb2YgbmV3ZXIgb25lc1wiKTtlLmxhLnB1c2goe3BhdGg6YixjaGlsZHJlbjpjLFpjOmQsdmlzaWJsZTohMH0pO2UuUz10ZyhlLlMsYixjKTtlLkJjPWQ7Yz1iZyhjKTtyZXR1cm4gZmgoYSxuZXcgVmMobmcsYixjKSl9XG5mdW5jdGlvbiBoaChhLGIsYyl7Yz1jfHwhMTt2YXIgZD1EZyhhLmpiLGIpO2lmKGEuamIuRWQoYikpe3ZhciBlPVE7bnVsbCE9ZC5HYT9lPWUuc2V0KEMsITApOmRiKGQuY2hpbGRyZW4sZnVuY3Rpb24oYSxiKXtlPWUuc2V0KG5ldyBMKGEpLGIpfSk7cmV0dXJuIGZoKGEsbmV3IG1nKGQucGF0aCxlLGMpKX1yZXR1cm5bXX1mdW5jdGlvbiBpaChhLGIsYyl7Yz1iZyhjKTtyZXR1cm4gZmgoYSxuZXcgVmMocGcsYixjKSl9ZnVuY3Rpb24gamgoYSxiLGMsZCl7ZD1raChhLGQpO2lmKG51bGwhPWQpe3ZhciBlPWxoKGQpO2Q9ZS5wYXRoO2U9ZS5IYjtiPVQoZCxiKTtjPW5ldyBBYihuZXcgb2coITEsITAsZSwhMCksYixjKTtyZXR1cm4gbWgoYSxkLGMpfXJldHVybltdfVxuZnVuY3Rpb24gbmgoYSxiLGMsZCl7aWYoZD1raChhLGQpKXt2YXIgZT1saChkKTtkPWUucGF0aDtlPWUuSGI7Yj1UKGQsYik7Yz1iZyhjKTtjPW5ldyBWYyhuZXcgb2coITEsITAsZSwhMCksYixjKTtyZXR1cm4gbWgoYSxkLGMpfXJldHVybltdfVxuZGgucHJvdG90eXBlLk5iPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5wYXRoLGQ9bnVsbCxlPSExO2lnKHRoaXMud2EsYyxmdW5jdGlvbihhLGIpe3ZhciBmPVQoYSxjKTtkPWR8fGIuaGIoZik7ZT1lfHxudWxsIT16ZyhiKX0pO3ZhciBmPXRoaXMud2EuZ2V0KGMpO2Y/KGU9ZXx8bnVsbCE9emcoZiksZD1kfHxmLmhiKEMpKTooZj1uZXcgeWcsdGhpcy53YT10aGlzLndhLnNldChjLGYpKTt2YXIgaDtudWxsIT1kP2g9ITA6KGg9ITEsZD1HLGxnKHRoaXMud2Euc3VidHJlZShjKSxmdW5jdGlvbihhLGIpe3ZhciBjPWIuaGIoQyk7YyYmKGQ9ZC5UKGEsYykpfSkpO3ZhciBrPW51bGwhPUJnKGYsYSk7aWYoIWsmJiFTKGEubSkpe3ZhciBsPW9oKGEpO0goIShsIGluIHRoaXMuaWMpLFwiVmlldyBkb2VzIG5vdCBleGlzdCwgYnV0IHdlIGhhdmUgYSB0YWdcIik7dmFyIG09cGgrKzt0aGlzLmljW2xdPW07dGhpcy5CZVtcIl9cIittXT1sfWg9Zi5OYihhLGIsbmV3IEhnKGMsdGhpcy5qYiksZCxoKTtrfHxcbmV8fChmPUJnKGYsYSksaD1oLmNvbmNhdChxaCh0aGlzLGEsZikpKTtyZXR1cm4gaH07XG5kaC5wcm90b3R5cGUua2I9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEucGF0aCxlPXRoaXMud2EuZ2V0KGQpLGY9W107aWYoZSYmKFwiZGVmYXVsdFwiPT09YS5qYSgpfHxudWxsIT1CZyhlLGEpKSl7Zj1lLmtiKGEsYixjKTtlLmUoKSYmKHRoaXMud2E9dGhpcy53YS5yZW1vdmUoZCkpO2U9Zi5oZztmPWYuS2Y7Yj0tMSE9PVBhKGUsZnVuY3Rpb24oYSl7cmV0dXJuIFMoYS5tKX0pO3ZhciBoPWdnKHRoaXMud2EsZCxmdW5jdGlvbihhLGIpe3JldHVybiBudWxsIT16ZyhiKX0pO2lmKGImJiFoJiYoZD10aGlzLndhLnN1YnRyZWUoZCksIWQuZSgpKSlmb3IodmFyIGQ9cmgoZCksaz0wO2s8ZC5sZW5ndGg7KytrKXt2YXIgbD1kW2tdLG09bC5WLGw9c2godGhpcyxsKTt0aGlzLkNjLnllKHRoKG0pLHVoKHRoaXMsbSksbC5sZCxsLkcpfWlmKCFoJiYwPGUubGVuZ3RoJiYhYylpZihiKXRoaXMuQ2MuT2QodGgoYSksbnVsbCk7ZWxzZXt2YXIgdT10aGlzO0phKGUsZnVuY3Rpb24oYSl7YS5qYSgpO1xudmFyIGI9dS5pY1tvaChhKV07dS5DYy5PZCh0aChhKSxiKX0pfXZoKHRoaXMsZSl9cmV0dXJuIGZ9O2RoLnByb3RvdHlwZS5BYT1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuamIsZD1nZyh0aGlzLndhLGEsZnVuY3Rpb24oYixjKXt2YXIgZD1UKGIsYSk7aWYoZD1jLmhiKGQpKXJldHVybiBkfSk7cmV0dXJuIGMuQWEoYSxkLGIsITApfTtmdW5jdGlvbiByaChhKXtyZXR1cm4gZWcoYSxmdW5jdGlvbihhLGMsZCl7aWYoYyYmbnVsbCE9emcoYykpcmV0dXJuW3pnKGMpXTt2YXIgZT1bXTtjJiYoZT1BZyhjKSk7cihkLGZ1bmN0aW9uKGEpe2U9ZS5jb25jYXQoYSl9KTtyZXR1cm4gZX0pfWZ1bmN0aW9uIHZoKGEsYil7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDsrK2Mpe3ZhciBkPWJbY107aWYoIVMoZC5tKSl7dmFyIGQ9b2goZCksZT1hLmljW2RdO2RlbGV0ZSBhLmljW2RdO2RlbGV0ZSBhLkJlW1wiX1wiK2VdfX19XG5mdW5jdGlvbiB0aChhKXtyZXR1cm4gUyhhLm0pJiYhU2MoYS5tKT9hLndiKCk6YX1mdW5jdGlvbiBxaChhLGIsYyl7dmFyIGQ9Yi5wYXRoLGU9dWgoYSxiKTtjPXNoKGEsYyk7Yj1hLkNjLnllKHRoKGIpLGUsYy5sZCxjLkcpO2Q9YS53YS5zdWJ0cmVlKGQpO2lmKGUpSChudWxsPT16ZyhkLnZhbHVlKSxcIklmIHdlJ3JlIGFkZGluZyBhIHF1ZXJ5LCBpdCBzaG91bGRuJ3QgYmUgc2hhZG93ZWRcIik7ZWxzZSBmb3IoZT1lZyhkLGZ1bmN0aW9uKGEsYixjKXtpZighYS5lKCkmJmImJm51bGwhPXpnKGIpKXJldHVybltRZih6ZyhiKSldO3ZhciBkPVtdO2ImJihkPWQuY29uY2F0KExhKEFnKGIpLGZ1bmN0aW9uKGEpe3JldHVybiBhLlZ9KSkpO3IoYyxmdW5jdGlvbihhKXtkPWQuY29uY2F0KGEpfSk7cmV0dXJuIGR9KSxkPTA7ZDxlLmxlbmd0aDsrK2QpYz1lW2RdLGEuQ2MuT2QodGgoYyksdWgoYSxjKSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiBzaChhLGIpe3ZhciBjPWIuVixkPXVoKGEsYyk7cmV0dXJue2xkOmZ1bmN0aW9uKCl7cmV0dXJuKGIudygpfHxHKS5oYXNoKCl9LEc6ZnVuY3Rpb24oYil7aWYoXCJva1wiPT09Yil7aWYoZCl7dmFyIGY9Yy5wYXRoO2lmKGI9a2goYSxkKSl7dmFyIGg9bGgoYik7Yj1oLnBhdGg7aD1oLkhiO2Y9VChiLGYpO2Y9bmV3IENiKG5ldyBvZyghMSwhMCxoLCEwKSxmKTtiPW1oKGEsYixmKX1lbHNlIGI9W119ZWxzZSBiPWZoKGEsbmV3IENiKHBnLGMucGF0aCkpO3JldHVybiBifWY9XCJVbmtub3duIEVycm9yXCI7XCJ0b29fYmlnXCI9PT1iP2Y9XCJUaGUgZGF0YSByZXF1ZXN0ZWQgZXhjZWVkcyB0aGUgbWF4aW11bSBzaXplIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIHdpdGggYSBzaW5nbGUgcmVxdWVzdC5cIjpcInBlcm1pc3Npb25fZGVuaWVkXCI9PWI/Zj1cIkNsaWVudCBkb2Vzbid0IGhhdmUgcGVybWlzc2lvbiB0byBhY2Nlc3MgdGhlIGRlc2lyZWQgZGF0YS5cIjpcInVuYXZhaWxhYmxlXCI9PWImJlxuKGY9XCJUaGUgc2VydmljZSBpcyB1bmF2YWlsYWJsZVwiKTtmPUVycm9yKGIrXCIgYXQgXCIrYy5wYXRoLnRvU3RyaW5nKCkrXCI6IFwiK2YpO2YuY29kZT1iLnRvVXBwZXJDYXNlKCk7cmV0dXJuIGEua2IoYyxudWxsLGYpfX19ZnVuY3Rpb24gb2goYSl7cmV0dXJuIGEucGF0aC50b1N0cmluZygpK1wiJFwiK2EuamEoKX1mdW5jdGlvbiBsaChhKXt2YXIgYj1hLmluZGV4T2YoXCIkXCIpO0goLTEhPT1iJiZiPGEubGVuZ3RoLTEsXCJCYWQgcXVlcnlLZXkuXCIpO3JldHVybntIYjphLnN1YnN0cihiKzEpLHBhdGg6bmV3IEwoYS5zdWJzdHIoMCxiKSl9fWZ1bmN0aW9uIGtoKGEsYil7dmFyIGM9YS5CZSxkPVwiX1wiK2I7cmV0dXJuIGQgaW4gYz9jW2RdOnZvaWQgMH1mdW5jdGlvbiB1aChhLGIpe3ZhciBjPW9oKGIpO3JldHVybiB3KGEuaWMsYyl9dmFyIHBoPTE7XG5mdW5jdGlvbiBtaChhLGIsYyl7dmFyIGQ9YS53YS5nZXQoYik7SChkLFwiTWlzc2luZyBzeW5jIHBvaW50IGZvciBxdWVyeSB0YWcgdGhhdCB3ZSdyZSB0cmFja2luZ1wiKTtyZXR1cm4gZC5lYihjLG5ldyBIZyhiLGEuamIpLG51bGwpfWZ1bmN0aW9uIGZoKGEsYil7cmV0dXJuIHdoKGEsYixhLndhLG51bGwsbmV3IEhnKEMsYS5qYikpfWZ1bmN0aW9uIHdoKGEsYixjLGQsZSl7aWYoYi5wYXRoLmUoKSlyZXR1cm4geGgoYSxiLGMsZCxlKTt2YXIgZj1jLmdldChDKTtudWxsPT1kJiZudWxsIT1mJiYoZD1mLmhiKEMpKTt2YXIgaD1bXSxrPUooYi5wYXRoKSxsPWIuTWMoayk7aWYoKGM9Yy5jaGlsZHJlbi5nZXQoaykpJiZsKXZhciBtPWQ/ZC5RKGspOm51bGwsaz1lLm4oayksaD1oLmNvbmNhdCh3aChhLGwsYyxtLGspKTtmJiYoaD1oLmNvbmNhdChmLmViKGIsZSxkKSkpO3JldHVybiBofVxuZnVuY3Rpb24geGgoYSxiLGMsZCxlKXt2YXIgZj1jLmdldChDKTtudWxsPT1kJiZudWxsIT1mJiYoZD1mLmhiKEMpKTt2YXIgaD1bXTtjLmNoaWxkcmVuLmhhKGZ1bmN0aW9uKGMsZil7dmFyIG09ZD9kLlEoYyk6bnVsbCx1PWUubihjKSx6PWIuTWMoYyk7eiYmKGg9aC5jb25jYXQoeGgoYSx6LGYsbSx1KSkpfSk7ZiYmKGg9aC5jb25jYXQoZi5lYihiLGUsZCkpKTtyZXR1cm4gaH07ZnVuY3Rpb24gVGUoYSxiLGMpe3RoaXMuYXBwPWM7dmFyIGQ9bmV3IEViKGMpO3RoaXMuTD1hO3RoaXMuVmE9JGMoYSk7dGhpcy5WYz1udWxsO3RoaXMuY2E9bmV3IE5iO3RoaXMudmQ9MTt0aGlzLlJhPW51bGw7aWYoYnx8MDw9KFwib2JqZWN0XCI9PT10eXBlb2Ygd2luZG93JiZ3aW5kb3cubmF2aWdhdG9yJiZ3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudHx8XCJcIikuc2VhcmNoKC9nb29nbGVib3R8Z29vZ2xlIHdlYm1hc3RlciB0b29sc3xiaW5nYm90fHlhaG9vISBzbHVycHxiYWlkdXNwaWRlcnx5YW5kZXhib3R8ZHVja2R1Y2tib3QvaSkpdGhpcy52YT1uZXcgUWModGhpcy5MLHEodGhpcy5HYix0aGlzKSxkKSxzZXRUaW1lb3V0KHEodGhpcy5KYyx0aGlzLCEwKSwwKTtlbHNle2I9Yy5vcHRpb25zLmRhdGFiYXNlQXV0aFZhcmlhYmxlT3ZlcnJpZGV8fG51bGw7aWYobnVsbCE9PWIpe2lmKFwib2JqZWN0XCIhPT1kYShiKSl0aHJvdyBFcnJvcihcIk9ubHkgb2JqZWN0cyBhcmUgc3VwcG9ydGVkIGZvciBvcHRpb24gZGF0YWJhc2VBdXRoVmFyaWFibGVPdmVycmlkZVwiKTtcbnRyeXtCKGIpfWNhdGNoKGUpe3Rocm93IEVycm9yKFwiSW52YWxpZCBhdXRoT3ZlcnJpZGUgcHJvdmlkZWQ6IFwiK2UpO319dGhpcy52YT10aGlzLlJhPW5ldyBQZyh0aGlzLkwscSh0aGlzLkdiLHRoaXMpLHEodGhpcy5KYyx0aGlzKSxxKHRoaXMuc2UsdGhpcyksZCxiKX12YXIgZj10aGlzO0ZiKGQsZnVuY3Rpb24oYSl7Zi52YS5rZihhKX0pO3RoaXMub2c9YWQoYSxxKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBYYyh0aGlzLlZhLHRoaXMudmEpfSx0aGlzKSk7dGhpcy5tYz1uZXcgSmc7dGhpcy5nZT1uZXcgR2I7dGhpcy5wZD1uZXcgZGgoe3llOmZ1bmN0aW9uKGEsYixjLGQpe2I9W107Yz1mLmdlLmooYS5wYXRoKTtjLmUoKXx8KGI9ZmgoZi5wZCxuZXcgQWIocGcsYS5wYXRoLGMpKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZChcIm9rXCIpfSwwKSk7cmV0dXJuIGJ9LE9kOmJhfSk7eWgodGhpcyxcImNvbm5lY3RlZFwiLCExKTt0aGlzLmlhPW5ldyBtYzt0aGlzLllhPW5ldyBTZSh0aGlzKTt0aGlzLmZkPVxuMDt0aGlzLmhlPW51bGw7dGhpcy5LPW5ldyBkaCh7eWU6ZnVuY3Rpb24oYSxiLGMsZCl7Zi52YS4kZShhLGMsYixmdW5jdGlvbihiLGMpe3ZhciBlPWQoYixjKTtTYihmLmNhLGEucGF0aCxlKX0pO3JldHVybltdfSxPZDpmdW5jdGlvbihhLGIpe2YudmEudWYoYSxiKX19KX1nPVRlLnByb3RvdHlwZTtnLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuKHRoaXMuTC5TYz9cImh0dHBzOi8vXCI6XCJodHRwOi8vXCIpK3RoaXMuTC5ob3N0fTtnLm5hbWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5MLm5lfTtmdW5jdGlvbiB6aChhKXthPWEuZ2UuaihuZXcgTChcIi5pbmZvL3NlcnZlclRpbWVPZmZzZXRcIikpLkgoKXx8MDtyZXR1cm4obmV3IERhdGUpLmdldFRpbWUoKSthfWZ1bmN0aW9uIEFoKGEpe2E9YT17dGltZXN0YW1wOnpoKGEpfTthLnRpbWVzdGFtcD1hLnRpbWVzdGFtcHx8KG5ldyBEYXRlKS5nZXRUaW1lKCk7cmV0dXJuIGF9XG5nLkdiPWZ1bmN0aW9uKGEsYixjLGQpe3RoaXMuZmQrKzt2YXIgZT1uZXcgTChhKTtiPXRoaXMuaGU/dGhpcy5oZShhLGIpOmI7YT1bXTtkP2M/KGI9cGEoYixmdW5jdGlvbihhKXtyZXR1cm4gTShhKX0pLGE9bmgodGhpcy5LLGUsYixkKSk6KGI9TShiKSxhPWpoKHRoaXMuSyxlLGIsZCkpOmM/KGQ9cGEoYixmdW5jdGlvbihhKXtyZXR1cm4gTShhKX0pLGE9aWgodGhpcy5LLGUsZCkpOihkPU0oYiksYT1maCh0aGlzLkssbmV3IEFiKHBnLGUsZCkpKTtkPWU7MDxhLmxlbmd0aCYmKGQ9QmgodGhpcyxlKSk7U2IodGhpcy5jYSxkLGEpfTtnLkpjPWZ1bmN0aW9uKGEpe3loKHRoaXMsXCJjb25uZWN0ZWRcIixhKTshMT09PWEmJkNoKHRoaXMpfTtnLnNlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7SWMoYSxmdW5jdGlvbihhLGQpe3loKGIsZCxhKX0pfTtcbmZ1bmN0aW9uIHloKGEsYixjKXtiPW5ldyBMKFwiLy5pbmZvL1wiK2IpO2M9TShjKTt2YXIgZD1hLmdlO2QuSmQ9ZC5KZC5GKGIsYyk7Yz1maChhLnBkLG5ldyBBYihwZyxiLGMpKTtTYihhLmNhLGIsYyl9Zy5KYj1mdW5jdGlvbihhLGIsYyxkKXt0aGlzLmYoXCJzZXRcIix7cGF0aDphLnRvU3RyaW5nKCksdmFsdWU6Yix1ZzpjfSk7dmFyIGU9QWgodGhpcyk7Yj1NKGIsYyk7dmFyIGU9cGMoYixlKSxmPXRoaXMudmQrKyxlPWVoKHRoaXMuSyxhLGUsZiwhMCk7T2IodGhpcy5jYSxlKTt2YXIgaD10aGlzO3RoaXMudmEucHV0KGEudG9TdHJpbmcoKSxiLkgoITApLGZ1bmN0aW9uKGIsYyl7dmFyIGU9XCJva1wiPT09YjtlfHxPKFwic2V0IGF0IFwiK2ErXCIgZmFpbGVkOiBcIitiKTtlPWhoKGguSyxmLCFlKTtTYihoLmNhLGEsZSk7RGgoZCxiLGMpfSk7ZT1FaCh0aGlzLGEpO0JoKHRoaXMsZSk7U2IodGhpcy5jYSxlLFtdKX07XG5nLnVwZGF0ZT1mdW5jdGlvbihhLGIsYyl7dGhpcy5mKFwidXBkYXRlXCIse3BhdGg6YS50b1N0cmluZygpLHZhbHVlOmJ9KTt2YXIgZD0hMCxlPUFoKHRoaXMpLGY9e307cihiLGZ1bmN0aW9uKGEsYil7ZD0hMTt2YXIgYz1NKGEpO2ZbYl09cGMoYyxlKX0pO2lmKGQpRShcInVwZGF0ZSgpIGNhbGxlZCB3aXRoIGVtcHR5IGRhdGEuICBEb24ndCBkbyBhbnl0aGluZy5cIiksRGgoYyxcIm9rXCIpO2Vsc2V7dmFyIGg9dGhpcy52ZCsrLGs9Z2godGhpcy5LLGEsZixoKTtPYih0aGlzLmNhLGspO3ZhciBsPXRoaXM7dGhpcy52YS5hZihhLnRvU3RyaW5nKCksYixmdW5jdGlvbihiLGQpe3ZhciBlPVwib2tcIj09PWI7ZXx8TyhcInVwZGF0ZSBhdCBcIithK1wiIGZhaWxlZDogXCIrYik7dmFyIGU9aGgobC5LLGgsIWUpLGY9YTswPGUubGVuZ3RoJiYoZj1CaChsLGEpKTtTYihsLmNhLGYsZSk7RGgoYyxiLGQpfSk7cihiLGZ1bmN0aW9uKGIsYyl7dmFyIGQ9RWgobCxhLm4oYykpO0JoKGwsZCl9KTtTYih0aGlzLmNhLFxuYSxbXSl9fTtmdW5jdGlvbiBDaChhKXthLmYoXCJvbkRpc2Nvbm5lY3RFdmVudHNcIik7dmFyIGI9QWgoYSksYz1bXTtuYyhsYyhhLmlhLGIpLEMsZnVuY3Rpb24oYixlKXtjPWMuY29uY2F0KGZoKGEuSyxuZXcgQWIocGcsYixlKSkpO3ZhciBmPUVoKGEsYik7QmgoYSxmKX0pO2EuaWE9bmV3IG1jO1NiKGEuY2EsQyxjKX1nLnhkPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpczt0aGlzLnZhLnhkKGEudG9TdHJpbmcoKSxmdW5jdGlvbihkLGUpe1wib2tcIj09PWQmJlplKGMuaWEsYSk7RGgoYixkLGUpfSl9O2Z1bmN0aW9uIG5mKGEsYixjLGQpe3ZhciBlPU0oYyk7YS52YS5wZShiLnRvU3RyaW5nKCksZS5IKCEwKSxmdW5jdGlvbihjLGgpe1wib2tcIj09PWMmJm9jKGEuaWEsYixlKTtEaChkLGMsaCl9KX1cbmZ1bmN0aW9uIG9mKGEsYixjLGQsZSl7dmFyIGY9TShjLGQpO2EudmEucGUoYi50b1N0cmluZygpLGYuSCghMCksZnVuY3Rpb24oYyxkKXtcIm9rXCI9PT1jJiZvYyhhLmlhLGIsZik7RGgoZSxjLGQpfSl9ZnVuY3Rpb24gcGYoYSxiLGMsZCl7dmFyIGU9ITAsZjtmb3IoZiBpbiBjKWU9ITE7ZT8oRShcIm9uRGlzY29ubmVjdCgpLnVwZGF0ZSgpIGNhbGxlZCB3aXRoIGVtcHR5IGRhdGEuICBEb24ndCBkbyBhbnl0aGluZy5cIiksRGgoZCxcIm9rXCIpKTphLnZhLmNmKGIudG9TdHJpbmcoKSxjLGZ1bmN0aW9uKGUsZil7aWYoXCJva1wiPT09ZSlmb3IodmFyIGwgaW4gYyl7dmFyIG09TShjW2xdKTtvYyhhLmlhLGIubihsKSxtKX1EaChkLGUsZil9KX1mdW5jdGlvbiBaZihhLGIsYyl7Yz1cIi5pbmZvXCI9PT1KKGIucGF0aCk/YS5wZC5OYihiLGMpOmEuSy5OYihiLGMpO1FiKGEuY2EsYi5wYXRoLGMpfWcuYWI9ZnVuY3Rpb24oKXt0aGlzLlJhJiZ0aGlzLlJhLmFiKFwicmVwb19pbnRlcnJ1cHRcIil9O1xuZy5rYz1mdW5jdGlvbigpe3RoaXMuUmEmJnRoaXMuUmEua2MoXCJyZXBvX2ludGVycnVwdFwiKX07Zy56ZT1mdW5jdGlvbihhKXtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGNvbnNvbGUpe2E/KHRoaXMuVmN8fCh0aGlzLlZjPW5ldyBNYih0aGlzLlZhKSksYT10aGlzLlZjLmdldCgpKTphPXRoaXMuVmEuZ2V0KCk7dmFyIGI9TWEodWEoYSksZnVuY3Rpb24oYSxiKXtyZXR1cm4gTWF0aC5tYXgoYi5sZW5ndGgsYSl9LDApLGM7Zm9yKGMgaW4gYSl7Zm9yKHZhciBkPWFbY10sZT1jLmxlbmd0aDtlPGIrMjtlKyspYys9XCIgXCI7Y29uc29sZS5sb2coYytkKX19fTtnLkFlPWZ1bmN0aW9uKGEpe0xiKHRoaXMuVmEsYSk7dGhpcy5vZy5yZlthXT0hMH07Zy5mPWZ1bmN0aW9uKGEpe3ZhciBiPVwiXCI7dGhpcy5SYSYmKGI9dGhpcy5SYS5pZCtcIjpcIik7RShiLGFyZ3VtZW50cyl9O1xuZnVuY3Rpb24gRGgoYSxiLGMpe2EmJnViKGZ1bmN0aW9uKCl7aWYoXCJva1wiPT1iKWEobnVsbCk7ZWxzZXt2YXIgZD0oYnx8XCJlcnJvclwiKS50b1VwcGVyQ2FzZSgpLGU9ZDtjJiYoZSs9XCI6IFwiK2MpO2U9RXJyb3IoZSk7ZS5jb2RlPWQ7YShlKX19KX07ZnVuY3Rpb24gRmgoYSxiLGMsZCxlKXtmdW5jdGlvbiBmKCl7fWEuZihcInRyYW5zYWN0aW9uIG9uIFwiK2IpO3ZhciBoPW5ldyBVKGEsYik7aC5nYyhcInZhbHVlXCIsZik7Yz17cGF0aDpiLHVwZGF0ZTpjLEc6ZCxzdGF0dXM6bnVsbCxlZjpyYygpLEZlOmUsb2Y6MCxSZDpmdW5jdGlvbigpe2guSWMoXCJ2YWx1ZVwiLGYpfSxUZDpudWxsLEJhOm51bGwsY2Q6bnVsbCxkZDpudWxsLGVkOm51bGx9O2Q9YS5LLkFhKGIsdm9pZCAwKXx8RztjLmNkPWQ7ZD1jLnVwZGF0ZShkLkgoKSk7aWYobihkKSl7ZWYoXCJ0cmFuc2FjdGlvbiBmYWlsZWQ6IERhdGEgcmV0dXJuZWQgXCIsZCxjLnBhdGgpO2Muc3RhdHVzPTE7ZT1LZyhhLm1jLGIpO3ZhciBrPWUuQ2EoKXx8W107ay5wdXNoKGMpO0xnKGUsayk7XCJvYmplY3RcIj09PXR5cGVvZiBkJiZudWxsIT09ZCYmY2IoZCxcIi5wcmlvcml0eVwiKT8oaz13KGQsXCIucHJpb3JpdHlcIiksSChjZihrKSxcIkludmFsaWQgcHJpb3JpdHkgcmV0dXJuZWQgYnkgdHJhbnNhY3Rpb24uIFByaW9yaXR5IG11c3QgYmUgYSB2YWxpZCBzdHJpbmcsIGZpbml0ZSBudW1iZXIsIHNlcnZlciB2YWx1ZSwgb3IgbnVsbC5cIikpOlxuaz0oYS5LLkFhKGIpfHxHKS5DKCkuSCgpO2U9QWgoYSk7ZD1NKGQsayk7ZT1wYyhkLGUpO2MuZGQ9ZDtjLmVkPWU7Yy5CYT1hLnZkKys7Yz1laChhLkssYixlLGMuQmEsYy5GZSk7U2IoYS5jYSxiLGMpO0doKGEpfWVsc2UgYy5SZCgpLGMuZGQ9bnVsbCxjLmVkPW51bGwsYy5HJiYoYT1uZXcgVyhjLmNkLG5ldyBVKGEsYy5wYXRoKSxOKSxjLkcobnVsbCwhMSxhKSl9ZnVuY3Rpb24gR2goYSxiKXt2YXIgYz1ifHxhLm1jO2J8fEhoKGEsYyk7aWYobnVsbCE9PWMuQ2EoKSl7dmFyIGQ9SWgoYSxjKTtIKDA8ZC5sZW5ndGgsXCJTZW5kaW5nIHplcm8gbGVuZ3RoIHRyYW5zYWN0aW9uIHF1ZXVlXCIpO05hKGQsZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLnN0YXR1c30pJiZKaChhLGMucGF0aCgpLGQpfWVsc2UgYy5rZCgpJiZjLk8oZnVuY3Rpb24oYil7R2goYSxiKX0pfVxuZnVuY3Rpb24gSmgoYSxiLGMpe2Zvcih2YXIgZD1MYShjLGZ1bmN0aW9uKGEpe3JldHVybiBhLkJhfSksZT1hLksuQWEoYixkKXx8RyxkPWUsZT1lLmhhc2goKSxmPTA7ZjxjLmxlbmd0aDtmKyspe3ZhciBoPWNbZl07SCgxPT09aC5zdGF0dXMsXCJ0cnlUb1NlbmRUcmFuc2FjdGlvblF1ZXVlXzogaXRlbXMgaW4gcXVldWUgc2hvdWxkIGFsbCBiZSBydW4uXCIpO2guc3RhdHVzPTI7aC5vZisrO3ZhciBrPVQoYixoLnBhdGgpLGQ9ZC5GKGssaC5kZCl9ZD1kLkgoITApO2EudmEucHV0KGIudG9TdHJpbmcoKSxkLGZ1bmN0aW9uKGQpe2EuZihcInRyYW5zYWN0aW9uIHB1dCByZXNwb25zZVwiLHtwYXRoOmIudG9TdHJpbmcoKSxzdGF0dXM6ZH0pO3ZhciBlPVtdO2lmKFwib2tcIj09PWQpe2Q9W107Zm9yKGY9MDtmPGMubGVuZ3RoO2YrKyl7Y1tmXS5zdGF0dXM9MztlPWUuY29uY2F0KGhoKGEuSyxjW2ZdLkJhKSk7aWYoY1tmXS5HKXt2YXIgaD1jW2ZdLmVkLGs9bmV3IFUoYSxjW2ZdLnBhdGgpO2QucHVzaChxKGNbZl0uRyxcbm51bGwsbnVsbCwhMCxuZXcgVyhoLGssTikpKX1jW2ZdLlJkKCl9SGgoYSxLZyhhLm1jLGIpKTtHaChhKTtTYihhLmNhLGIsZSk7Zm9yKGY9MDtmPGQubGVuZ3RoO2YrKyl1YihkW2ZdKX1lbHNle2lmKFwiZGF0YXN0YWxlXCI9PT1kKWZvcihmPTA7ZjxjLmxlbmd0aDtmKyspY1tmXS5zdGF0dXM9ND09PWNbZl0uc3RhdHVzPzU6MTtlbHNlIGZvcihPKFwidHJhbnNhY3Rpb24gYXQgXCIrYi50b1N0cmluZygpK1wiIGZhaWxlZDogXCIrZCksZj0wO2Y8Yy5sZW5ndGg7ZisrKWNbZl0uc3RhdHVzPTUsY1tmXS5UZD1kO0JoKGEsYil9fSxlKX1mdW5jdGlvbiBCaChhLGIpe3ZhciBjPUtoKGEsYiksZD1jLnBhdGgoKSxjPUloKGEsYyk7TGgoYSxjLGQpO3JldHVybiBkfVxuZnVuY3Rpb24gTGgoYSxiLGMpe2lmKDAhPT1iLmxlbmd0aCl7Zm9yKHZhciBkPVtdLGU9W10sZj1LYShiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5zdGF0dXN9KSxmPUxhKGYsZnVuY3Rpb24oYSl7cmV0dXJuIGEuQmF9KSxoPTA7aDxiLmxlbmd0aDtoKyspe3ZhciBrPWJbaF0sbD1UKGMsay5wYXRoKSxtPSExLHU7SChudWxsIT09bCxcInJlcnVuVHJhbnNhY3Rpb25zVW5kZXJOb2RlXzogcmVsYXRpdmVQYXRoIHNob3VsZCBub3QgYmUgbnVsbC5cIik7aWYoNT09PWsuc3RhdHVzKW09ITAsdT1rLlRkLGU9ZS5jb25jYXQoaGgoYS5LLGsuQmEsITApKTtlbHNlIGlmKDE9PT1rLnN0YXR1cylpZigyNTw9ay5vZiltPSEwLHU9XCJtYXhyZXRyeVwiLGU9ZS5jb25jYXQoaGgoYS5LLGsuQmEsITApKTtlbHNle3ZhciB6PWEuSy5BYShrLnBhdGgsZil8fEc7ay5jZD16O3ZhciBGPWJbaF0udXBkYXRlKHouSCgpKTtuKEYpPyhlZihcInRyYW5zYWN0aW9uIGZhaWxlZDogRGF0YSByZXR1cm5lZCBcIixGLFxuay5wYXRoKSxsPU0oRiksXCJvYmplY3RcIj09PXR5cGVvZiBGJiZudWxsIT1GJiZjYihGLFwiLnByaW9yaXR5XCIpfHwobD1sLmZhKHouQygpKSksej1rLkJhLEY9QWgoYSksRj1wYyhsLEYpLGsuZGQ9bCxrLmVkPUYsay5CYT1hLnZkKyssUWEoZix6KSxlPWUuY29uY2F0KGVoKGEuSyxrLnBhdGgsRixrLkJhLGsuRmUpKSxlPWUuY29uY2F0KGhoKGEuSyx6LCEwKSkpOihtPSEwLHU9XCJub2RhdGFcIixlPWUuY29uY2F0KGhoKGEuSyxrLkJhLCEwKSkpfVNiKGEuY2EsYyxlKTtlPVtdO20mJihiW2hdLnN0YXR1cz0zLHNldFRpbWVvdXQoYltoXS5SZCxNYXRoLmZsb29yKDApKSxiW2hdLkcmJihcIm5vZGF0YVwiPT09dT8oaz1uZXcgVShhLGJbaF0ucGF0aCksZC5wdXNoKHEoYltoXS5HLG51bGwsbnVsbCwhMSxuZXcgVyhiW2hdLmNkLGssTikpKSk6ZC5wdXNoKHEoYltoXS5HLG51bGwsRXJyb3IodSksITEsbnVsbCkpKSl9SGgoYSxhLm1jKTtmb3IoaD0wO2g8ZC5sZW5ndGg7aCsrKXViKGRbaF0pO0doKGEpfX1cbmZ1bmN0aW9uIEtoKGEsYil7Zm9yKHZhciBjLGQ9YS5tYztudWxsIT09KGM9SihiKSkmJm51bGw9PT1kLkNhKCk7KWQ9S2coZCxjKSxiPUQoYik7cmV0dXJuIGR9ZnVuY3Rpb24gSWgoYSxiKXt2YXIgYz1bXTtNaChhLGIsYyk7Yy5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuZWYtYi5lZn0pO3JldHVybiBjfWZ1bmN0aW9uIE1oKGEsYixjKXt2YXIgZD1iLkNhKCk7aWYobnVsbCE9PWQpZm9yKHZhciBlPTA7ZTxkLmxlbmd0aDtlKyspYy5wdXNoKGRbZV0pO2IuTyhmdW5jdGlvbihiKXtNaChhLGIsYyl9KX1mdW5jdGlvbiBIaChhLGIpe3ZhciBjPWIuQ2EoKTtpZihjKXtmb3IodmFyIGQ9MCxlPTA7ZTxjLmxlbmd0aDtlKyspMyE9PWNbZV0uc3RhdHVzJiYoY1tkXT1jW2VdLGQrKyk7Yy5sZW5ndGg9ZDtMZyhiLDA8Yy5sZW5ndGg/YzpudWxsKX1iLk8oZnVuY3Rpb24oYil7SGgoYSxiKX0pfVxuZnVuY3Rpb24gRWgoYSxiKXt2YXIgYz1LaChhLGIpLnBhdGgoKSxkPUtnKGEubWMsYik7T2coZCxmdW5jdGlvbihiKXtOaChhLGIpfSk7TmgoYSxkKTtOZyhkLGZ1bmN0aW9uKGIpe05oKGEsYil9KTtyZXR1cm4gY31cbmZ1bmN0aW9uIE5oKGEsYil7dmFyIGM9Yi5DYSgpO2lmKG51bGwhPT1jKXtmb3IodmFyIGQ9W10sZT1bXSxmPS0xLGg9MDtoPGMubGVuZ3RoO2grKyk0IT09Y1toXS5zdGF0dXMmJigyPT09Y1toXS5zdGF0dXM/KEgoZj09PWgtMSxcIkFsbCBTRU5UIGl0ZW1zIHNob3VsZCBiZSBhdCBiZWdpbm5pbmcgb2YgcXVldWUuXCIpLGY9aCxjW2hdLnN0YXR1cz00LGNbaF0uVGQ9XCJzZXRcIik6KEgoMT09PWNbaF0uc3RhdHVzLFwiVW5leHBlY3RlZCB0cmFuc2FjdGlvbiBzdGF0dXMgaW4gYWJvcnRcIiksY1toXS5SZCgpLGU9ZS5jb25jYXQoaGgoYS5LLGNbaF0uQmEsITApKSxjW2hdLkcmJmQucHVzaChxKGNbaF0uRyxudWxsLEVycm9yKFwic2V0XCIpLCExLG51bGwpKSkpOy0xPT09Zj9MZyhiLG51bGwpOmMubGVuZ3RoPWYrMTtTYihhLmNhLGIucGF0aCgpLGUpO2ZvcihoPTA7aDxkLmxlbmd0aDtoKyspdWIoZFtoXSl9fTtmdW5jdGlvbiBZZSgpe3RoaXMubGI9e307dGhpcy53Zj0hMX1ZZS5wcm90b3R5cGUuYWI9ZnVuY3Rpb24oKXtmb3IodmFyIGEgaW4gdGhpcy5sYil0aGlzLmxiW2FdLmFiKCl9O1llLnByb3RvdHlwZS5rYz1mdW5jdGlvbigpe2Zvcih2YXIgYSBpbiB0aGlzLmxiKXRoaXMubGJbYV0ua2MoKX07WWUucHJvdG90eXBlLmFlPWZ1bmN0aW9uKGEpe3RoaXMud2Y9YX07Y2EoWWUpO1llLnByb3RvdHlwZS5pbnRlcnJ1cHQ9WWUucHJvdG90eXBlLmFiO1llLnByb3RvdHlwZS5yZXN1bWU9WWUucHJvdG90eXBlLmtjO3ZhciBaPXt9O1oubmM9UGc7Wi5EYXRhQ29ubmVjdGlvbj1aLm5jO1BnLnByb3RvdHlwZS5uZz1mdW5jdGlvbihhLGIpe3RoaXMudWEoXCJxXCIse3A6YX0sYil9O1oubmMucHJvdG90eXBlLnNpbXBsZUxpc3Rlbj1aLm5jLnByb3RvdHlwZS5uZztQZy5wcm90b3R5cGUuSGY9ZnVuY3Rpb24oYSxiKXt0aGlzLnVhKFwiZWNob1wiLHtkOmF9LGIpfTtaLm5jLnByb3RvdHlwZS5lY2hvPVoubmMucHJvdG90eXBlLkhmO1BnLnByb3RvdHlwZS5pbnRlcnJ1cHQ9UGcucHJvdG90eXBlLmFiO1ouemY9Q2U7Wi5SZWFsVGltZUNvbm5lY3Rpb249Wi56ZjtDZS5wcm90b3R5cGUuc2VuZFJlcXVlc3Q9Q2UucHJvdG90eXBlLnVhO0NlLnByb3RvdHlwZS5jbG9zZT1DZS5wcm90b3R5cGUuY2xvc2U7XG5aLlJmPWZ1bmN0aW9uKGEpe3ZhciBiPVBnLnByb3RvdHlwZS5wdXQ7UGcucHJvdG90eXBlLnB1dD1mdW5jdGlvbihjLGQsZSxmKXtuKGYpJiYoZj1hKCkpO2IuY2FsbCh0aGlzLGMsZCxlLGYpfTtyZXR1cm4gZnVuY3Rpb24oKXtQZy5wcm90b3R5cGUucHV0PWJ9fTtaLmhpamFja0hhc2g9Wi5SZjtaLnlmPUhiO1ouQ29ubmVjdGlvblRhcmdldD1aLnlmO1ouamE9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuamEoKX07Wi5xdWVyeUlkZW50aWZpZXI9Wi5qYTtaLlVmPWZ1bmN0aW9uKGEpe3JldHVybiBhLnUuUmEuJH07Wi5saXN0ZW5zPVouVWY7Wi5hZT1mdW5jdGlvbihhKXtZZS5WYigpLmFlKGEpfTtaLmZvcmNlUmVzdENsaWVudD1aLmFlO1ouQ29udGV4dD1ZZTtmdW5jdGlvbiBVKGEsYil7aWYoIShhIGluc3RhbmNlb2YgVGUpKXRocm93IEVycm9yKFwibmV3IEZpcmViYXNlKCkgbm8gbG9uZ2VyIHN1cHBvcnRlZCAtIHVzZSBhcHAuZGF0YWJhc2UoKS5cIik7WC5jYWxsKHRoaXMsYSxiLGZlLCExKTt0aGlzLnRoZW49dm9pZCAwO3RoaXNbXCJjYXRjaFwiXT12b2lkIDB9bGEoVSxYKTtnPVUucHJvdG90eXBlO2cuZ2V0S2V5PWZ1bmN0aW9uKCl7eChcIkZpcmViYXNlLmtleVwiLDAsMCxhcmd1bWVudHMubGVuZ3RoKTtyZXR1cm4gdGhpcy5wYXRoLmUoKT9udWxsOkJkKHRoaXMucGF0aCl9O1xuZy5uPWZ1bmN0aW9uKGEpe3goXCJGaXJlYmFzZS5jaGlsZFwiLDEsMSxhcmd1bWVudHMubGVuZ3RoKTtpZihnYShhKSlhPVN0cmluZyhhKTtlbHNlIGlmKCEoYSBpbnN0YW5jZW9mIEwpKWlmKG51bGw9PT1KKHRoaXMucGF0aCkpe3ZhciBiPWE7YiYmKGI9Yi5yZXBsYWNlKC9eXFwvKlxcLmluZm8oXFwvfCQpLyxcIi9cIikpO2xmKFwiRmlyZWJhc2UuY2hpbGRcIixiKX1lbHNlIGxmKFwiRmlyZWJhc2UuY2hpbGRcIixhKTtyZXR1cm4gbmV3IFUodGhpcy51LHRoaXMucGF0aC5uKGEpKX07Zy5nZXRQYXJlbnQ9ZnVuY3Rpb24oKXt4KFwiRmlyZWJhc2UucGFyZW50XCIsMCwwLGFyZ3VtZW50cy5sZW5ndGgpO3ZhciBhPXRoaXMucGF0aC5wYXJlbnQoKTtyZXR1cm4gbnVsbD09PWE/bnVsbDpuZXcgVSh0aGlzLnUsYSl9O1xuZy5PZj1mdW5jdGlvbigpe3goXCJGaXJlYmFzZS5yZWZcIiwwLDAsYXJndW1lbnRzLmxlbmd0aCk7Zm9yKHZhciBhPXRoaXM7bnVsbCE9PWEuZ2V0UGFyZW50KCk7KWE9YS5nZXRQYXJlbnQoKTtyZXR1cm4gYX07Zy5HZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLnUuWWF9O2cuc2V0PWZ1bmN0aW9uKGEsYil7eChcIkZpcmViYXNlLnNldFwiLDEsMixhcmd1bWVudHMubGVuZ3RoKTttZihcIkZpcmViYXNlLnNldFwiLHRoaXMucGF0aCk7ZGYoXCJGaXJlYmFzZS5zZXRcIixhLHRoaXMucGF0aCwhMSk7QShcIkZpcmViYXNlLnNldFwiLDIsYiwhMCk7dmFyIGM9bmV3IGhiO3RoaXMudS5KYih0aGlzLnBhdGgsYSxudWxsLGliKGMsYikpO3JldHVybiBjLnJhfTtcbmcudXBkYXRlPWZ1bmN0aW9uKGEsYil7eChcIkZpcmViYXNlLnVwZGF0ZVwiLDEsMixhcmd1bWVudHMubGVuZ3RoKTttZihcIkZpcmViYXNlLnVwZGF0ZVwiLHRoaXMucGF0aCk7aWYoZWEoYSkpe2Zvcih2YXIgYz17fSxkPTA7ZDxhLmxlbmd0aDsrK2QpY1tcIlwiK2RdPWFbZF07YT1jO08oXCJQYXNzaW5nIGFuIEFycmF5IHRvIEZpcmViYXNlLnVwZGF0ZSgpIGlzIGRlcHJlY2F0ZWQuIFVzZSBzZXQoKSBpZiB5b3Ugd2FudCB0byBvdmVyd3JpdGUgdGhlIGV4aXN0aW5nIGRhdGEsIG9yIGFuIE9iamVjdCB3aXRoIGludGVnZXIga2V5cyBpZiB5b3UgcmVhbGx5IGRvIHdhbnQgdG8gb25seSB1cGRhdGUgc29tZSBvZiB0aGUgY2hpbGRyZW4uXCIpfWdmKFwiRmlyZWJhc2UudXBkYXRlXCIsYSx0aGlzLnBhdGgpO0EoXCJGaXJlYmFzZS51cGRhdGVcIiwyLGIsITApO2M9bmV3IGhiO3RoaXMudS51cGRhdGUodGhpcy5wYXRoLGEsaWIoYyxiKSk7cmV0dXJuIGMucmF9O1xuZy5KYj1mdW5jdGlvbihhLGIsYyl7eChcIkZpcmViYXNlLnNldFdpdGhQcmlvcml0eVwiLDIsMyxhcmd1bWVudHMubGVuZ3RoKTttZihcIkZpcmViYXNlLnNldFdpdGhQcmlvcml0eVwiLHRoaXMucGF0aCk7ZGYoXCJGaXJlYmFzZS5zZXRXaXRoUHJpb3JpdHlcIixhLHRoaXMucGF0aCwhMSk7aGYoXCJGaXJlYmFzZS5zZXRXaXRoUHJpb3JpdHlcIiwyLGIpO0EoXCJGaXJlYmFzZS5zZXRXaXRoUHJpb3JpdHlcIiwzLGMsITApO2lmKFwiLmxlbmd0aFwiPT09dGhpcy5nZXRLZXkoKXx8XCIua2V5c1wiPT09dGhpcy5nZXRLZXkoKSl0aHJvd1wiRmlyZWJhc2Uuc2V0V2l0aFByaW9yaXR5IGZhaWxlZDogXCIrdGhpcy5nZXRLZXkoKStcIiBpcyBhIHJlYWQtb25seSBvYmplY3QuXCI7dmFyIGQ9bmV3IGhiO3RoaXMudS5KYih0aGlzLnBhdGgsYSxiLGliKGQsYykpO3JldHVybiBkLnJhfTtcbmcucmVtb3ZlPWZ1bmN0aW9uKGEpe3goXCJGaXJlYmFzZS5yZW1vdmVcIiwwLDEsYXJndW1lbnRzLmxlbmd0aCk7bWYoXCJGaXJlYmFzZS5yZW1vdmVcIix0aGlzLnBhdGgpO0EoXCJGaXJlYmFzZS5yZW1vdmVcIiwxLGEsITApO3JldHVybiB0aGlzLnNldChudWxsLGEpfTtcbmcudHJhbnNhY3Rpb249ZnVuY3Rpb24oYSxiLGMpe3goXCJGaXJlYmFzZS50cmFuc2FjdGlvblwiLDEsMyxhcmd1bWVudHMubGVuZ3RoKTttZihcIkZpcmViYXNlLnRyYW5zYWN0aW9uXCIsdGhpcy5wYXRoKTtBKFwiRmlyZWJhc2UudHJhbnNhY3Rpb25cIiwxLGEsITEpO0EoXCJGaXJlYmFzZS50cmFuc2FjdGlvblwiLDIsYiwhMCk7aWYobihjKSYmXCJib29sZWFuXCIhPXR5cGVvZiBjKXRocm93IEVycm9yKHkoXCJGaXJlYmFzZS50cmFuc2FjdGlvblwiLDMsITApK1wibXVzdCBiZSBhIGJvb2xlYW4uXCIpO2lmKFwiLmxlbmd0aFwiPT09dGhpcy5nZXRLZXkoKXx8XCIua2V5c1wiPT09dGhpcy5nZXRLZXkoKSl0aHJvd1wiRmlyZWJhc2UudHJhbnNhY3Rpb24gZmFpbGVkOiBcIit0aGlzLmdldEtleSgpK1wiIGlzIGEgcmVhZC1vbmx5IG9iamVjdC5cIjtcInVuZGVmaW5lZFwiPT09dHlwZW9mIGMmJihjPSEwKTt2YXIgZD1uZXcgaGI7aGEoYikmJmpiKGQucmEpO0ZoKHRoaXMudSx0aGlzLnBhdGgsYSxmdW5jdGlvbihhLGMsaCl7YT9cbmQucmVqZWN0KGEpOmQucmVzb2x2ZShuZXcgcGIoYyxoKSk7aGEoYikmJmIoYSxjLGgpfSxjKTtyZXR1cm4gZC5yYX07Zy5rZz1mdW5jdGlvbihhLGIpe3goXCJGaXJlYmFzZS5zZXRQcmlvcml0eVwiLDEsMixhcmd1bWVudHMubGVuZ3RoKTttZihcIkZpcmViYXNlLnNldFByaW9yaXR5XCIsdGhpcy5wYXRoKTtoZihcIkZpcmViYXNlLnNldFByaW9yaXR5XCIsMSxhKTtBKFwiRmlyZWJhc2Uuc2V0UHJpb3JpdHlcIiwyLGIsITApO3ZhciBjPW5ldyBoYjt0aGlzLnUuSmIodGhpcy5wYXRoLm4oXCIucHJpb3JpdHlcIiksYSxudWxsLGliKGMsYikpO3JldHVybiBjLnJhfTtcbmcucHVzaD1mdW5jdGlvbihhLGIpe3goXCJGaXJlYmFzZS5wdXNoXCIsMCwyLGFyZ3VtZW50cy5sZW5ndGgpO21mKFwiRmlyZWJhc2UucHVzaFwiLHRoaXMucGF0aCk7ZGYoXCJGaXJlYmFzZS5wdXNoXCIsYSx0aGlzLnBhdGgsITApO0EoXCJGaXJlYmFzZS5wdXNoXCIsMixiLCEwKTt2YXIgYz16aCh0aGlzLnUpLGQ9dWYoYyksYz10aGlzLm4oZCk7aWYobnVsbCE9YSl7dmFyIGU9dGhpcyxmPWMuc2V0KGEsYikudGhlbihmdW5jdGlvbigpe3JldHVybiBlLm4oZCl9KTtjLnRoZW49cShmLnRoZW4sZik7Y1tcImNhdGNoXCJdPXEoZi50aGVuLGYsdm9pZCAwKTtoYShiKSYmamIoZil9cmV0dXJuIGN9O2cuaWI9ZnVuY3Rpb24oKXttZihcIkZpcmViYXNlLm9uRGlzY29ubmVjdFwiLHRoaXMucGF0aCk7cmV0dXJuIG5ldyBWKHRoaXMudSx0aGlzLnBhdGgpfTtVLnByb3RvdHlwZS5jaGlsZD1VLnByb3RvdHlwZS5uO1UucHJvdG90eXBlLnNldD1VLnByb3RvdHlwZS5zZXQ7VS5wcm90b3R5cGUudXBkYXRlPVUucHJvdG90eXBlLnVwZGF0ZTtcblUucHJvdG90eXBlLnNldFdpdGhQcmlvcml0eT1VLnByb3RvdHlwZS5KYjtVLnByb3RvdHlwZS5yZW1vdmU9VS5wcm90b3R5cGUucmVtb3ZlO1UucHJvdG90eXBlLnRyYW5zYWN0aW9uPVUucHJvdG90eXBlLnRyYW5zYWN0aW9uO1UucHJvdG90eXBlLnNldFByaW9yaXR5PVUucHJvdG90eXBlLmtnO1UucHJvdG90eXBlLnB1c2g9VS5wcm90b3R5cGUucHVzaDtVLnByb3RvdHlwZS5vbkRpc2Nvbm5lY3Q9VS5wcm90b3R5cGUuaWI7TGMoVS5wcm90b3R5cGUsXCJkYXRhYmFzZVwiLFUucHJvdG90eXBlLkdmKTtMYyhVLnByb3RvdHlwZSxcImtleVwiLFUucHJvdG90eXBlLmdldEtleSk7TGMoVS5wcm90b3R5cGUsXCJwYXJlbnRcIixVLnByb3RvdHlwZS5nZXRQYXJlbnQpO0xjKFUucHJvdG90eXBlLFwicm9vdFwiLFUucHJvdG90eXBlLk9mKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGZpcmViYXNlKXRocm93IEVycm9yKFwiQ2Fubm90IGluc3RhbGwgRmlyZWJhc2UgRGF0YWJhc2UgLSBiZSBzdXJlIHRvIGxvYWQgZmlyZWJhc2UtYXBwLmpzIGZpcnN0LlwiKTtcbnRyeXtmaXJlYmFzZS5JTlRFUk5BTC5yZWdpc3RlclNlcnZpY2UoXCJkYXRhYmFzZVwiLGZ1bmN0aW9uKGEpe3ZhciBiPVllLlZiKCksYz1hLm9wdGlvbnMuZGF0YWJhc2VVUkw7bihjKXx8QWMoXCJDYW4ndCBkZXRlcm1pbmUgRmlyZWJhc2UgRGF0YWJhc2UgVVJMLiAgQmUgc3VyZSB0byBpbmNsdWRlIGRhdGFiYXNlVVJMIG9wdGlvbiB3aGVuIGNhbGxpbmcgZmlyZWJhc2UuaW50aWFsaXplQXBwKCkuXCIpO3ZhciBkPUJjKGMpLGM9ZC5qYztYZShcIkludmFsaWQgRmlyZWJhc2UgRGF0YWJhc2UgVVJMXCIsZCk7ZC5wYXRoLmUoKXx8QWMoXCJEYXRhYmFzZSBVUkwgbXVzdCBwb2ludCB0byB0aGUgcm9vdCBvZiBhIEZpcmViYXNlIERhdGFiYXNlIChub3QgaW5jbHVkaW5nIGEgY2hpbGQgcGF0aCkuXCIpOyhkPXcoYi5sYixhLm5hbWUpKSYmQWMoXCJGSVJFQkFTRSBJTlRFUk5BTCBFUlJPUjogRGF0YWJhc2UgaW5pdGlhbGl6ZWQgbXVsdGlwbGUgdGltZXMuXCIpO2Q9bmV3IFRlKGMsYi53ZixhKTtiLmxiW2EubmFtZV09XG5kO3JldHVybiBkLllhfSx7UmVmZXJlbmNlOlUsUXVlcnk6WCxEYXRhYmFzZTpTZSxlbmFibGVMb2dnaW5nOnhjLElOVEVSTkFMOlksVEVTVF9BQ0NFU1M6WixTZXJ2ZXJWYWx1ZTpWZX0pfWNhdGNoKE9oKXtBYyhcIkZhaWxlZCB0byByZWdpc3RlciB0aGUgRmlyZWJhc2UgRGF0YWJhc2UgU2VydmljZSAoXCIrT2grXCIpXCIpfTt9KSgpO1xuXG59KS5jYWxsKGdsb2JhbCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZpcmViYXNlLmRhdGFiYXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpcmViYXNlL2RhdGFiYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiAgRmlyZWJhc2UgbGlicmFyaWVzIGZvciBicm93c2VyIC0gbnBtIHBhY2thZ2UuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICBmaXJlYmFzZSA9IHJlcXVpcmUoJ2ZpcmViYXNlJyk7XG4gKi9cbnZhciBmaXJlYmFzZSA9IHJlcXVpcmUoJy4vYXBwJyk7XG5yZXF1aXJlKCcuL2F1dGgnKTtcbnJlcXVpcmUoJy4vZGF0YWJhc2UnKTtcbnJlcXVpcmUoJy4vc3RvcmFnZScpO1xucmVxdWlyZSgnLi9tZXNzYWdpbmcnKTtcbm1vZHVsZS5leHBvcnRzID0gZmlyZWJhc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmlyZWJhc2UvZmlyZWJhc2UtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBmaXJlYmFzZSA9IHJlcXVpcmUoJy4vYXBwJyk7XG4oZnVuY3Rpb24oKXtcbi8qISBAbGljZW5zZSBGaXJlYmFzZSB2My42LjVcbiAgICBCdWlsZDogMy42LjUtcmMuMVxuICAgIFRlcm1zOiBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vdGVybXMvICovXG4oZnVuY3Rpb24oKXt2YXIgZj1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoKXt9Yy5wcm90b3R5cGU9Yi5wcm90b3R5cGU7YS5wcm90b3R5cGU9bmV3IGM7Zm9yKHZhciBkIGluIGIpaWYoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMpe3ZhciBlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYixkKTtlJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxkLGUpfWVsc2UgYVtkXT1iW2RdfSxnPXRoaXMsaD1mdW5jdGlvbihhKXt2YXIgYj10eXBlb2YgYTtpZihcIm9iamVjdFwiPT1iKWlmKGEpe2lmKGEgaW5zdGFuY2VvZiBBcnJheSlyZXR1cm5cImFycmF5XCI7aWYoYSBpbnN0YW5jZW9mIE9iamVjdClyZXR1cm4gYjt2YXIgYz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSk7aWYoXCJbb2JqZWN0IFdpbmRvd11cIj09YylyZXR1cm5cIm9iamVjdFwiO2lmKFwiW29iamVjdCBBcnJheV1cIj09Y3x8XCJudW1iZXJcIj09dHlwZW9mIGEubGVuZ3RoJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5zcGxpY2UmJlwidW5kZWZpbmVkXCIhPVxudHlwZW9mIGEucHJvcGVydHlJc0VudW1lcmFibGUmJiFhLnByb3BlcnR5SXNFbnVtZXJhYmxlKFwic3BsaWNlXCIpKXJldHVyblwiYXJyYXlcIjtpZihcIltvYmplY3QgRnVuY3Rpb25dXCI9PWN8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmNhbGwmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnByb3BlcnR5SXNFbnVtZXJhYmxlJiYhYS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcImNhbGxcIikpcmV0dXJuXCJmdW5jdGlvblwifWVsc2UgcmV0dXJuXCJudWxsXCI7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PWImJlwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmNhbGwpcmV0dXJuXCJvYmplY3RcIjtyZXR1cm4gYn0saz1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoKXt9Yy5wcm90b3R5cGU9Yi5wcm90b3R5cGU7YS5CPWIucHJvdG90eXBlO2EucHJvdG90eXBlPW5ldyBjO2EudT1mdW5jdGlvbihhLGMsbil7Zm9yKHZhciBkPUFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMiksZT0yO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspZFtlLTJdPWFyZ3VtZW50c1tlXTtcbnJldHVybiBiLnByb3RvdHlwZVtjXS5hcHBseShhLGQpfX07dmFyIG09e30scD0obVtcIm9ubHktYXZhaWxhYmxlLWluLXdpbmRvd1wiXT1cIlRoaXMgbWV0aG9kIGlzIGF2YWlsYWJsZSBpbiBhIFdpbmRvdyBjb250ZXh0LlwiLG1bXCJvbmx5LWF2YWlsYWJsZS1pbi1zd1wiXT1cIlRoaXMgbWV0aG9kIGlzIGF2YWlsYWJsZSBpbiBhIHNlcnZpY2Ugd29ya2VyIGNvbnRleHQuXCIsbVtcInNob3VsZC1iZS1vdmVycmlkZW5cIl09XCJUaGlzIG1ldGhvZCBzaG91bGQgYmUgb3ZlcnJpZGVuIGJ5IGV4dGVuZGVkIGNsYXNzZXMuXCIsbVtcImJhZC1zZW5kZXItaWRcIl09XCJQbGVhc2UgZW5zdXJlIHRoYXQgJ21lc3NhZ2luZ1NlbmRlcklkJyBpcyBzZXQgY29ycmVjdGx5IGluIHRoZSBvcHRpb25zIHBhc3NlZCBpbnRvIGZpcmViYXNlLmluaXRpYWxpemVBcHAoKS5cIixtW1wicGVybWlzc2lvbi1kZWZhdWx0XCJdPVwiVGhlIHJlcXVpcmVkIHBlcm1pc3Npb25zIHdlcmUgbm90IGdyYW50ZWQgYW5kIGRpc21pc3NlZCBpbnN0ZWFkLlwiLG1bXCJwZXJtaXNzaW9uLWJsb2NrZWRcIl09XCJUaGUgcmVxdWlyZWQgcGVybWlzc2lvbnMgd2VyZSBub3QgZ3JhbnRlZCBhbmQgYmxvY2tlZCBpbnN0ZWFkLlwiLFxubVtcInVuc3VwcG9ydGVkLWJyb3dzZXJcIl09XCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHRoZSBBUEkncyByZXF1aXJlZCB0byB1c2UgdGhlIGZpcmViYXNlIFNESy5cIixtW1wibm90aWZpY2F0aW9ucy1ibG9ja2VkXCJdPVwiTm90aWZpY2F0aW9ucyBoYXZlIGJlZW4gYmxvY2tlZC5cIixtW1wiZmFpbGVkLXNlcnZpY2V3b3JrZXItcmVnaXN0cmF0aW9uXCJdPVwiV2UgYXJlIHVuYWJsZSB0byByZWdpc3RlciB0aGUgZGVmYXVsdCBzZXJ2aWNlIHdvcmtlci4geyRicm93c2VyRXJyb3JNZXNzYWdlfVwiLG1bXCJzdy1yZWdpc3RyYXRpb24tZXhwZWN0ZWRcIl09XCJBIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiB3YXMgdGhlIGV4cGVjdGVkIGlucHV0LlwiLG1bXCJnZXQtc3Vic2NyaXB0aW9uLWZhaWxlZFwiXT1cIlRoZXJlIHdhcyBhbiBlcnJvciB3aGVuIHRyeWluZyB0byBnZXQgYW55IGV4aXN0aW5nIFB1c2ggU3Vic2NyaXB0aW9ucy5cIixtW1wiaW52YWxpZC1zYXZlZC10b2tlblwiXT1cIlVuYWJsZSB0byBhY2Nlc3MgZGV0YWlscyBvZiB0aGUgc2F2ZWQgdG9rZW4uXCIsXG5tW1wic3ctcmVnLXJlZHVuZGFudFwiXT1cIlRoZSBzZXJ2aWNlIHdvcmtlciBiZWluZyB1c2VkIGZvciBwdXNoIHdhcyBtYWRlIHJlZHVuZGFudC5cIixtW1widG9rZW4tc3Vic2NyaWJlLWZhaWxlZFwiXT1cIkEgcHJvYmxlbSBvY2N1cmVkIHdoaWxlIHN1YnNjcmliaW5nIHRoZSB1c2VyIHRvIEZDTTogeyRtZXNzYWdlfVwiLG1bXCJ0b2tlbi1zdWJzY3JpYmUtbm8tdG9rZW5cIl09XCJGQ00gcmV0dXJuZWQgbm8gdG9rZW4gd2hlbiBzdWJzY3JpYmluZyB0aGUgdXNlciB0byBwdXNoLlwiLG1bXCJ0b2tlbi1zdWJzY3JpYmUtbm8tcHVzaC1zZXRcIl09XCJGQ00gcmV0dXJuZWQgYW4gaW52YWxpZCByZXNwb25zZSB3aGVuIGdldHRpbmcgYW4gRkNNIHRva2VuLlwiLG1bXCJ1c2Utc3ctYmVmb3JlLWdldC10b2tlblwiXT1cIllvdSBtdXN0IGNhbGwgdXNlU2VydmljZVdvcmtlcigpIGJlZm9yZSBjYWxsaW5nIGdldFRva2VuKCkgdG8gZW5zdXJlIHlvdXIgc2VydmljZSB3b3JrZXIgaXMgdXNlZC5cIixtW1wiaW52YWxpZC1kZWxldGUtdG9rZW5cIl09XG5cIllvdSBtdXN0IHBhc3MgYSB2YWxpZCB0b2tlbiBpbnRvIGRlbGV0ZVRva2VuKCksIGkuZS4gdGhlIHRva2VuIGZyb20gZ2V0VG9rZW4oKS5cIixtW1wiZGVsZXRlLXRva2VuLW5vdC1mb3VuZFwiXT1cIlRoZSBkZWxldGlvbiBhdHRlbXB0IGZvciB0b2tlbiBjb3VsZCBub3QgYmUgcGVyZm9ybWVkIGFzIHRoZSB0b2tlbiB3YXMgbm90IGZvdW5kLlwiLG1bXCJiZy1oYW5kbGVyLWZ1bmN0aW9uLWV4cGVjdGVkXCJdPVwiVGhlIGlucHV0IHRvIHNldEJhY2tncm91bmRNZXNzYWdlSGFuZGxlcigpIG11c3QgYmUgYSBmdW5jdGlvbi5cIixtW1wibm8td2luZG93LWNsaWVudC10by1tc2dcIl09XCJBbiBhdHRlbXB0IHdhcyBtYWRlIHRvIG1lc3NhZ2UgYSBub24tZXhpc3RhbnQgd2luZG93IGNsaWVudC5cIixtW1widW5hYmxlLXRvLXJlc3Vic2NyaWJlXCJdPVwiVGhlcmUgd2FzIGFuIGVycm9yIHdoaWxlIHJlLXN1YnNjcmliaW5nIHRoZSBGQ00gdG9rZW4gZm9yIHB1c2ggbWVzc2FnaW5nLiBXaWxsIGhhdmUgdG8gcmVzdWJzY3JpYmUgdGhlIHVzZXIgb24gbmV4dCB2aXNpdC4geyRtZXNzYWdlfVwiLFxubVtcIm5vLWZjbS10b2tlbi1mb3ItcmVzdWJzY3JpYmVcIl09XCJDb3VsZCBub3QgZmluZCBhbiBGQ00gdG9rZW4gYW5kIGFzIGEgcmVzdWx0LCB1bmFibGUgdG8gcmVzdWJzY3JpYmUuIFdpbGwgaGF2ZSB0byByZXN1YnNjcmliZSB0aGUgdXNlciBvbiBuZXh0IHZpc2l0LlwiLG1bXCJmYWlsZWQtdG8tZGVsZXRlLXRva2VuXCJdPVwiVW5hYmxlIHRvIGRlbGV0ZSB0aGUgY3VycmVudGx5IHNhdmVkIHRva2VuLlwiLG1bXCJuby1zdy1pbi1yZWdcIl09XCJFdmVuIHRob3VnaCB0aGUgc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsLCB0aGVyZSB3YXMgYSBwcm9ibGVtIGFjY2Vzc2luZyB0aGUgc2VydmljZSB3b3JrZXIgaXRzZWxmLlwiLG1bXCJpbmNvcnJlY3QtZ2NtLXNlbmRlci1pZFwiXT1cIlBsZWFzZSBjaGFuZ2UgeW91ciB3ZWIgYXBwIG1hbmlmZXN0J3MgJ2djbV9zZW5kZXJfaWQnIHZhbHVlIHRvICcxMDM5NTM4MDA1MDcnIHRvIHVzZSBGaXJlYmFzZSBtZXNzYWdpbmcuXCIsbSk7dmFyIHE9e3VzZXJWaXNpYmxlT25seTohMCxhcHBsaWNhdGlvblNlcnZlcktleTpuZXcgVWludDhBcnJheShbNCw1MSwxNDgsMjQ3LDIyMywxNjEsMjM1LDE3NywyMjAsMywxNjIsOTQsMjEsMTEzLDIxOSw3MiwyMTEsNDYsMjM3LDIzNywxNzgsNTIsMjE5LDE4Myw3MSw1OCwxMiwxNDMsMTk2LDIwNCwyMjUsMTExLDYwLDE0MCwxMzIsMjIzLDE3MSwxODIsMTAyLDYyLDI0MiwxMiwyMTIsMTM5LDI1NCwyMjcsMjQ5LDExOCw0NywyMCwyOCw5OSw4LDEwNiwxMTEsNDUsMTc3LDI2LDE0OSwxNzYsMjA2LDU1LDE5MiwxNTYsMTEwXSl9O3ZhciByPWZ1bmN0aW9uKGEsYil7dmFyIGM9e307cmV0dXJuIGNbXCJmaXJlYmFzZS1tZXNzYWdpbmctbXNnLXR5cGVcIl09YSxjW1wiZmlyZWJhc2UtbWVzc2FnaW5nLW1zZy1kYXRhXCJdPWIsY307dmFyIHU9ZnVuY3Rpb24oYSl7aWYoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcyx1KTtlbHNle3ZhciBiPUVycm9yKCkuc3RhY2s7YiYmKHRoaXMuc3RhY2s9Yil9YSYmKHRoaXMubWVzc2FnZT1TdHJpbmcoYSkpfTtrKHUsRXJyb3IpO3ZhciB2PWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWEuc3BsaXQoXCIlc1wiKSxkPVwiXCIsZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7ZS5sZW5ndGgmJjE8Yy5sZW5ndGg7KWQrPWMuc2hpZnQoKStlLnNoaWZ0KCk7cmV0dXJuIGQrYy5qb2luKFwiJXNcIil9O3ZhciB3PWZ1bmN0aW9uKGEsYil7Yi51bnNoaWZ0KGEpO3UuY2FsbCh0aGlzLHYuYXBwbHkobnVsbCxiKSk7Yi5zaGlmdCgpfTtrKHcsdSk7dmFyIHg9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhKXt2YXIgZD1cIkFzc2VydGlvbiBmYWlsZWRcIjtpZihiKXZhciBkPWQrKFwiOiBcIitiKSxlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKTt0aHJvdyBuZXcgdyhcIlwiK2QsZXx8W10pO319O3ZhciB5PW51bGw7dmFyIEE9ZnVuY3Rpb24oYSl7YT1uZXcgVWludDhBcnJheShhKTt2YXIgYj1oKGEpO3goXCJhcnJheVwiPT1ifHxcIm9iamVjdFwiPT1iJiZcIm51bWJlclwiPT10eXBlb2YgYS5sZW5ndGgsXCJlbmNvZGVCeXRlQXJyYXkgdGFrZXMgYW4gYXJyYXkgYXMgYSBwYXJhbWV0ZXJcIik7aWYoIXkpZm9yKHk9e30sYj0wOzY1PmI7YisrKXlbYl09XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLmNoYXJBdChiKTtmb3IodmFyIGI9eSxjPVtdLGQ9MDtkPGEubGVuZ3RoO2QrPTMpe3ZhciBlPWFbZF0sbj1kKzE8YS5sZW5ndGgsbD1uP2FbZCsxXTowLHo9ZCsyPGEubGVuZ3RoLHQ9ej9hW2QrMl06MCxNPWU+PjIsZT0oZSYzKTw8NHxsPj40LGw9KGwmMTUpPDwyfHQ+PjYsdD10JjYzO3p8fCh0PTY0LG58fChsPTY0KSk7Yy5wdXNoKGJbTV0sYltlXSxiW2xdLGJbdF0pfXJldHVybiBjLmpvaW4oXCJcIikucmVwbGFjZSgvXFwrL2csXCItXCIpLnJlcGxhY2UoL1xcLy9nLFxuXCJfXCIpLnJlcGxhY2UoLz0rJC8sXCJcIil9O3ZhciBCPW5ldyBmaXJlYmFzZS5JTlRFUk5BTC5FcnJvckZhY3RvcnkoXCJtZXNzYWdpbmdcIixcIk1lc3NhZ2luZ1wiLHApLEM9ZnVuY3Rpb24oKXt0aGlzLmE9bnVsbH0sRD1mdW5jdGlvbihhKXtpZihhLmEpcmV0dXJuIGEuYTthLmE9bmV3IFByb21pc2UoZnVuY3Rpb24oYSxjKXt2YXIgYj1nLmluZGV4ZWREQi5vcGVuKFwiZmNtX3Rva2VuX2RldGFpbHNfZGJcIiwxKTtiLm9uZXJyb3I9ZnVuY3Rpb24oYSl7YyhhLnRhcmdldC5lcnJvcil9O2Iub25zdWNjZXNzPWZ1bmN0aW9uKGIpe2EoYi50YXJnZXQucmVzdWx0KX07Yi5vbnVwZ3JhZGVuZWVkZWQ9ZnVuY3Rpb24oYSl7YT1hLnRhcmdldC5yZXN1bHQuY3JlYXRlT2JqZWN0U3RvcmUoXCJmY21fdG9rZW5fb2JqZWN0X1N0b3JlXCIse2tleVBhdGg6XCJzd1Njb3BlXCJ9KTthLmNyZWF0ZUluZGV4KFwiZmNtU2VuZGVySWRcIixcImZjbVNlbmRlcklkXCIse3VuaXF1ZTohMX0pO2EuY3JlYXRlSW5kZXgoXCJmY21Ub2tlblwiLFwiZmNtVG9rZW5cIix7dW5pcXVlOiEwfSl9fSk7XG5yZXR1cm4gYS5hfSxFPWZ1bmN0aW9uKGEpe2EuYT9hLmEudGhlbihmdW5jdGlvbihiKXtiLmNsb3NlKCk7YS5hPW51bGx9KTpQcm9taXNlLnJlc29sdmUoKX0sRj1mdW5jdGlvbihhLGIpe3JldHVybiBEKGEpLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGMsZSl7dmFyIGQ9YS50cmFuc2FjdGlvbihbXCJmY21fdG9rZW5fb2JqZWN0X1N0b3JlXCJdKS5vYmplY3RTdG9yZShcImZjbV90b2tlbl9vYmplY3RfU3RvcmVcIikuaW5kZXgoXCJmY21Ub2tlblwiKS5nZXQoYik7ZC5vbmVycm9yPWZ1bmN0aW9uKGEpe2UoYS50YXJnZXQuZXJyb3IpfTtkLm9uc3VjY2Vzcz1mdW5jdGlvbihhKXtjKGEudGFyZ2V0LnJlc3VsdCl9fSl9KX0sRz1mdW5jdGlvbihhLGIpe3JldHVybiBEKGEpLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGMsZSl7dmFyIGQ9W10sbD1hLnRyYW5zYWN0aW9uKFtcImZjbV90b2tlbl9vYmplY3RfU3RvcmVcIl0pLm9iamVjdFN0b3JlKFwiZmNtX3Rva2VuX29iamVjdF9TdG9yZVwiKS5vcGVuQ3Vyc29yKCk7XG5sLm9uZXJyb3I9ZnVuY3Rpb24oYSl7ZShhLnRhcmdldC5lcnJvcil9O2wub25zdWNjZXNzPWZ1bmN0aW9uKGEpeyhhPWEudGFyZ2V0LnJlc3VsdCk/KGEudmFsdWUuZmNtU2VuZGVySWQ9PT1iJiZkLnB1c2goYS52YWx1ZSksYS5jb250aW51ZSgpKTpjKGQpfX0pfSl9LEg9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPUEoYi5nZXRLZXkoXCJwMjU2ZGhcIikpLGU9QShiLmdldEtleShcImF1dGhcIikpO2E9XCJhdXRob3JpemVkX2VudGl0eT1cIithK1wiJlwiKyhcImVuZHBvaW50PVwiK2IuZW5kcG9pbnQrXCImXCIpKyhcImVuY3J5cHRpb25fa2V5PVwiK2QrXCImXCIpKyhcImVuY3J5cHRpb25fYXV0aD1cIitlKTtjJiYoYSs9XCImcHVzaFNldD1cIitjKTtjPW5ldyBIZWFkZXJzO2MuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7cmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9mY20uZ29vZ2xlYXBpcy5jb20vZmNtL2Nvbm5lY3Qvc3Vic2NyaWJlXCIse21ldGhvZDpcIlBPU1RcIixcbmhlYWRlcnM6Yyxib2R5OmF9KS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBhLmpzb24oKX0pLnRoZW4oZnVuY3Rpb24oYSl7aWYoYS5lcnJvcil0aHJvdyBCLmNyZWF0ZShcInRva2VuLXN1YnNjcmliZS1mYWlsZWRcIix7bWVzc2FnZTphLmVycm9yLm1lc3NhZ2V9KTtpZighYS50b2tlbil0aHJvdyBCLmNyZWF0ZShcInRva2VuLXN1YnNjcmliZS1uby10b2tlblwiKTtpZighYS5wdXNoU2V0KXRocm93IEIuY3JlYXRlKFwidG9rZW4tc3Vic2NyaWJlLW5vLXB1c2gtc2V0XCIpO3JldHVybnt0b2tlbjphLnRva2VuLHB1c2hTZXQ6YS5wdXNoU2V0fX0pfSxJPWZ1bmN0aW9uKGEsYixjLGQsZSxuKXt2YXIgbD17c3dTY29wZTpjLnNjb3BlLGVuZHBvaW50OmQuZW5kcG9pbnQsYXV0aDpBKGQuZ2V0S2V5KFwiYXV0aFwiKSkscDI1NmRoOkEoZC5nZXRLZXkoXCJwMjU2ZGhcIikpLGZjbVRva2VuOmUsZmNtUHVzaFNldDpuLGZjbVNlbmRlcklkOmJ9O3JldHVybiBEKGEpLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGIsXG5jKXt2YXIgZD1hLnRyYW5zYWN0aW9uKFtcImZjbV90b2tlbl9vYmplY3RfU3RvcmVcIl0sXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJmY21fdG9rZW5fb2JqZWN0X1N0b3JlXCIpLnB1dChsKTtkLm9uZXJyb3I9ZnVuY3Rpb24oYSl7YyhhLnRhcmdldC5lcnJvcil9O2Qub25zdWNjZXNzPWZ1bmN0aW9uKCl7YigpfX0pfSl9O1xuQy5wcm90b3R5cGUuaT1mdW5jdGlvbihhLGIpe3JldHVybiBiIGluc3RhbmNlb2YgU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbj9cInN0cmluZ1wiIT09dHlwZW9mIGF8fDA9PT1hLmxlbmd0aD9Qcm9taXNlLnJlamVjdChCLmNyZWF0ZShcImJhZC1zZW5kZXItaWRcIikpOkcodGhpcyxhKS50aGVuKGZ1bmN0aW9uKGMpe2lmKDAhPT1jLmxlbmd0aCl7dmFyIGQ9Yy5maW5kSW5kZXgoZnVuY3Rpb24oYyl7cmV0dXJuIGIuc2NvcGU9PT1jLnN3U2NvcGUmJmE9PT1jLmZjbVNlbmRlcklkfSk7aWYoLTEhPT1kKXJldHVybiBjW2RdfX0pLnRoZW4oZnVuY3Rpb24oYSl7aWYoYSlyZXR1cm4gYi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKS5jYXRjaChmdW5jdGlvbigpe3Rocm93IEIuY3JlYXRlKFwiZ2V0LXN1YnNjcmlwdGlvbi1mYWlsZWRcIik7fSkudGhlbihmdW5jdGlvbihiKXt2YXIgYztpZihjPWIpYz1iLmVuZHBvaW50PT09YS5lbmRwb2ludCYmQShiLmdldEtleShcImF1dGhcIikpPT09YS5hdXRoJiZcbkEoYi5nZXRLZXkoXCJwMjU2ZGhcIikpPT09YS5wMjU2ZGg7aWYoYylyZXR1cm4gYS5mY21Ub2tlbn0pfSk6UHJvbWlzZS5yZWplY3QoQi5jcmVhdGUoXCJzdy1yZWdpc3RyYXRpb24tZXhwZWN0ZWRcIikpfTtDLnByb3RvdHlwZS5nZXRTYXZlZFRva2VuPUMucHJvdG90eXBlLmk7XG5DLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm5cInN0cmluZ1wiIT09dHlwZW9mIGF8fDA9PT1hLmxlbmd0aD9Qcm9taXNlLnJlamVjdChCLmNyZWF0ZShcImJhZC1zZW5kZXItaWRcIikpOmIgaW5zdGFuY2VvZiBTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uP2IucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gYT9hOmIucHVzaE1hbmFnZXIuc3Vic2NyaWJlKHEpfSkudGhlbihmdW5jdGlvbihkKXtyZXR1cm4gSChhLGQpLnRoZW4oZnVuY3Rpb24oZSl7cmV0dXJuIEkoYyxhLGIsZCxlLnRva2VuLGUucHVzaFNldCkudGhlbihmdW5jdGlvbigpe3JldHVybiBlLnRva2VufSl9KX0pOlByb21pc2UucmVqZWN0KEIuY3JlYXRlKFwic3ctcmVnaXN0cmF0aW9uLWV4cGVjdGVkXCIpKX07Qy5wcm90b3R5cGUuY3JlYXRlVG9rZW49Qy5wcm90b3R5cGUuaDtcbkMucHJvdG90eXBlLmRlbGV0ZVRva2VuPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuXCJzdHJpbmdcIiE9PXR5cGVvZiBhfHwwPT09YS5sZW5ndGg/UHJvbWlzZS5yZWplY3QoQi5jcmVhdGUoXCJpbnZhbGlkLWRlbGV0ZS10b2tlblwiKSk6Rih0aGlzLGEpLnRoZW4oZnVuY3Rpb24oYSl7aWYoIWEpdGhyb3cgQi5jcmVhdGUoXCJkZWxldGUtdG9rZW4tbm90LWZvdW5kXCIpO3JldHVybiBEKGIpLnRoZW4oZnVuY3Rpb24oYil7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGMsZCl7dmFyIGU9Yi50cmFuc2FjdGlvbihbXCJmY21fdG9rZW5fb2JqZWN0X1N0b3JlXCJdLFwicmVhZHdyaXRlXCIpLm9iamVjdFN0b3JlKFwiZmNtX3Rva2VuX29iamVjdF9TdG9yZVwiKS5kZWxldGUoYS5zd1Njb3BlKTtlLm9uZXJyb3I9ZnVuY3Rpb24oYSl7ZChhLnRhcmdldC5lcnJvcil9O2Uub25zdWNjZXNzPWZ1bmN0aW9uKGIpezA9PT1iLnRhcmdldC5yZXN1bHQ/ZChCLmNyZWF0ZShcImZhaWxlZC10by1kZWxldGUtdG9rZW5cIikpOlxuYyhhKX19KX0pfSl9O3ZhciBKPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7dGhpcy5hPW5ldyBmaXJlYmFzZS5JTlRFUk5BTC5FcnJvckZhY3RvcnkoXCJtZXNzYWdpbmdcIixcIk1lc3NhZ2luZ1wiLHApO2lmKCFhLm9wdGlvbnMubWVzc2FnaW5nU2VuZGVySWR8fFwic3RyaW5nXCIhPT10eXBlb2YgYS5vcHRpb25zLm1lc3NhZ2luZ1NlbmRlcklkKXRocm93IHRoaXMuYS5jcmVhdGUoXCJiYWQtc2VuZGVyLWlkXCIpO3RoaXMubD1hLm9wdGlvbnMubWVzc2FnaW5nU2VuZGVySWQ7dGhpcy5jPW5ldyBDO3RoaXMuYXBwPWE7dGhpcy5JTlRFUk5BTD17fTt0aGlzLklOVEVSTkFMLmRlbGV0ZT1mdW5jdGlvbigpe3JldHVybiBiLmRlbGV0ZX19O1xuSi5wcm90b3R5cGUuZ2V0VG9rZW49ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGI9Tm90aWZpY2F0aW9uLnBlcm1pc3Npb247cmV0dXJuXCJncmFudGVkXCIhPT1iP1wiZGVuaWVkXCI9PT1iP1Byb21pc2UucmVqZWN0KHRoaXMuYS5jcmVhdGUoXCJub3RpZmljYXRpb25zLWJsb2NrZWRcIikpOlByb21pc2UucmVzb2x2ZShudWxsKTp0aGlzLmYoKS50aGVuKGZ1bmN0aW9uKGIpe3JldHVybiBhLmMuaShhLmwsYikudGhlbihmdW5jdGlvbihjKXtyZXR1cm4gYz9jOmEuYy5oKGEubCxiKX0pfSl9O0oucHJvdG90eXBlLmdldFRva2VuPUoucHJvdG90eXBlLmdldFRva2VuO0oucHJvdG90eXBlLmRlbGV0ZVRva2VuPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIHRoaXMuYy5kZWxldGVUb2tlbihhKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGIuZigpfSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gYT9hLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpOm51bGx9KS50aGVuKGZ1bmN0aW9uKGEpe2lmKGEpcmV0dXJuIGEudW5zdWJzY3JpYmUoKX0pfTtcbkoucHJvdG90eXBlLmRlbGV0ZVRva2VuPUoucHJvdG90eXBlLmRlbGV0ZVRva2VuO0oucHJvdG90eXBlLmY9ZnVuY3Rpb24oKXt0aHJvdyB0aGlzLmEuY3JlYXRlKFwic2hvdWxkLWJlLW92ZXJyaWRlblwiKTt9O0oucHJvdG90eXBlLnJlcXVlc3RQZXJtaXNzaW9uPWZ1bmN0aW9uKCl7dGhyb3cgdGhpcy5hLmNyZWF0ZShcIm9ubHktYXZhaWxhYmxlLWluLXdpbmRvd1wiKTt9O0oucHJvdG90eXBlLnVzZVNlcnZpY2VXb3JrZXI9ZnVuY3Rpb24oKXt0aHJvdyB0aGlzLmEuY3JlYXRlKFwib25seS1hdmFpbGFibGUtaW4td2luZG93XCIpO307Si5wcm90b3R5cGUudXNlU2VydmljZVdvcmtlcj1KLnByb3RvdHlwZS51c2VTZXJ2aWNlV29ya2VyO0oucHJvdG90eXBlLm9uTWVzc2FnZT1mdW5jdGlvbigpe3Rocm93IHRoaXMuYS5jcmVhdGUoXCJvbmx5LWF2YWlsYWJsZS1pbi13aW5kb3dcIik7fTtKLnByb3RvdHlwZS5vbk1lc3NhZ2U9Si5wcm90b3R5cGUub25NZXNzYWdlO1xuSi5wcm90b3R5cGUub25Ub2tlblJlZnJlc2g9ZnVuY3Rpb24oKXt0aHJvdyB0aGlzLmEuY3JlYXRlKFwib25seS1hdmFpbGFibGUtaW4td2luZG93XCIpO307Si5wcm90b3R5cGUub25Ub2tlblJlZnJlc2g9Si5wcm90b3R5cGUub25Ub2tlblJlZnJlc2g7Si5wcm90b3R5cGUuc2V0QmFja2dyb3VuZE1lc3NhZ2VIYW5kbGVyPWZ1bmN0aW9uKCl7dGhyb3cgdGhpcy5hLmNyZWF0ZShcIm9ubHktYXZhaWxhYmxlLWluLXN3XCIpO307Si5wcm90b3R5cGUuc2V0QmFja2dyb3VuZE1lc3NhZ2VIYW5kbGVyPUoucHJvdG90eXBlLnNldEJhY2tncm91bmRNZXNzYWdlSGFuZGxlcjtKLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24oKXtFKHRoaXMuYyl9O3ZhciBLPXNlbGYsUD1mdW5jdGlvbihhKXtKLmNhbGwodGhpcyxhKTt2YXIgYj10aGlzO3RoaXMuYT1uZXcgZmlyZWJhc2UuSU5URVJOQUwuRXJyb3JGYWN0b3J5KFwibWVzc2FnaW5nXCIsXCJNZXNzYWdpbmdcIixwKTtLLmFkZEV2ZW50TGlzdGVuZXIoXCJwdXNoXCIsZnVuY3Rpb24oYSl7cmV0dXJuIEwoYixhKX0sITEpO0suYWRkRXZlbnRMaXN0ZW5lcihcInB1c2hzdWJzY3JpcHRpb25jaGFuZ2VcIixmdW5jdGlvbihhKXtyZXR1cm4gTihiLGEpfSwhMSk7Sy5hZGRFdmVudExpc3RlbmVyKFwibm90aWZpY2F0aW9uY2xpY2tcIixmdW5jdGlvbihhKXtyZXR1cm4gTyhiLGEpfSwhMSk7dGhpcy5iPW51bGx9O2YoUCxKKTtcbnZhciBMPWZ1bmN0aW9uKGEsYil7dmFyIGM7dHJ5e2M9Yi5kYXRhLmpzb24oKX1jYXRjaChlKXtyZXR1cm59dmFyIGQ9USgpLnRoZW4oZnVuY3Rpb24oYil7aWYoYil7aWYoYy5ub3RpZmljYXRpb258fGEuYilyZXR1cm4gUihhLGMpfWVsc2V7aWYoKGI9YykmJlwib2JqZWN0XCI9PT10eXBlb2YgYi5ub3RpZmljYXRpb24pe3ZhciBkPU9iamVjdC5hc3NpZ24oe30sYi5ub3RpZmljYXRpb24pLGU9e307ZC5kYXRhPShlLkZDTV9NU0c9YixlKTtiPWR9ZWxzZSBiPXZvaWQgMDtpZihiKXJldHVybiBLLnJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKGIudGl0bGV8fFwiXCIsYik7aWYoYS5iKXJldHVybiBhLmIoYyl9fSk7Yi53YWl0VW50aWwoZCl9LE49ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmdldFRva2VuKCkudGhlbihmdW5jdGlvbihiKXtpZighYil0aHJvdyBhLmEuY3JlYXRlKFwibm8tZmNtLXRva2VuLWZvci1yZXN1YnNjcmliZVwiKTt2YXIgYz1hLmM7cmV0dXJuIEYoYyxiKS50aGVuKGZ1bmN0aW9uKGIpe2lmKCFiKXRocm93IGEuYS5jcmVhdGUoXCJpbnZhbGlkLXNhdmVkLXRva2VuXCIpO1xucmV0dXJuIEsucmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZShxKS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBIKGIudyxhLGIudil9KS5jYXRjaChmdW5jdGlvbihkKXtyZXR1cm4gYy5kZWxldGVUb2tlbihiLkEpLnRoZW4oZnVuY3Rpb24oKXt0aHJvdyBhLmEuY3JlYXRlKFwidW5hYmxlLXRvLXJlc3Vic2NyaWJlXCIse21lc3NhZ2U6ZH0pO30pfSl9KX0pO2Iud2FpdFVudGlsKGMpfSxPPWZ1bmN0aW9uKGEsYil7aWYoYi5ub3RpZmljYXRpb24mJmIubm90aWZpY2F0aW9uLmRhdGEmJmIubm90aWZpY2F0aW9uLmRhdGEuRkNNX01TRyl7Yi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtiLm5vdGlmaWNhdGlvbi5jbG9zZSgpO3ZhciBjPWIubm90aWZpY2F0aW9uLmRhdGEuRkNNX01TRyxkPWMubm90aWZpY2F0aW9uLmNsaWNrX2FjdGlvbjtpZihkKXt2YXIgZT1TKGQpLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIGE/YTpLLmNsaWVudHMub3BlbldpbmRvdyhkKX0pLnRoZW4oZnVuY3Rpb24oYil7aWYoYilyZXR1cm4gZGVsZXRlIGMubm90aWZpY2F0aW9uLFxuVChhLGIscihcIm5vdGlmaWNhdGlvbi1jbGlja2VkXCIsYykpfSk7Yi53YWl0VW50aWwoZSl9fX07UC5wcm90b3R5cGUuc2V0QmFja2dyb3VuZE1lc3NhZ2VIYW5kbGVyPWZ1bmN0aW9uKGEpe2lmKGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhKXRocm93IHRoaXMuYS5jcmVhdGUoXCJiZy1oYW5kbGVyLWZ1bmN0aW9uLWV4cGVjdGVkXCIpO3RoaXMuYj1hfTtQLnByb3RvdHlwZS5zZXRCYWNrZ3JvdW5kTWVzc2FnZUhhbmRsZXI9UC5wcm90b3R5cGUuc2V0QmFja2dyb3VuZE1lc3NhZ2VIYW5kbGVyO1xudmFyIFM9ZnVuY3Rpb24oYSl7dmFyIGI9KG5ldyBVUkwoYSkpLmhyZWY7cmV0dXJuIEsuY2xpZW50cy5tYXRjaEFsbCh7dHlwZTpcIndpbmRvd1wiLGluY2x1ZGVVbmNvbnRyb2xsZWQ6ITB9KS50aGVuKGZ1bmN0aW9uKGEpe2Zvcih2YXIgYz1udWxsLGU9MDtlPGEubGVuZ3RoO2UrKylpZigobmV3IFVSTChhW2VdLnVybCkpLmhyZWY9PT1iKXtjPWFbZV07YnJlYWt9aWYoYylyZXR1cm4gYy5mb2N1cygpLGN9KX0sVD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGQsZSl7aWYoIWIpcmV0dXJuIGUoYS5hLmNyZWF0ZShcIm5vLXdpbmRvdy1jbGllbnQtdG8tbXNnXCIpKTtiLnBvc3RNZXNzYWdlKGMpO2QoKX0pfSxRPWZ1bmN0aW9uKCl7cmV0dXJuIEsuY2xpZW50cy5tYXRjaEFsbCh7dHlwZTpcIndpbmRvd1wiLGluY2x1ZGVVbmNvbnRyb2xsZWQ6ITB9KS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBhLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuXCJ2aXNpYmxlXCI9PT1cbmEudmlzaWJpbGl0eVN0YXRlfSl9KX0sUj1mdW5jdGlvbihhLGIpe3JldHVybiBLLmNsaWVudHMubWF0Y2hBbGwoe3R5cGU6XCJ3aW5kb3dcIixpbmNsdWRlVW5jb250cm9sbGVkOiEwfSkudGhlbihmdW5jdGlvbihjKXt2YXIgZD1yKFwicHVzaC1tc2ctcmVjZWl2ZWRcIixiKTtyZXR1cm4gUHJvbWlzZS5hbGwoYy5tYXAoZnVuY3Rpb24oYil7cmV0dXJuIFQoYSxiLGQpfSkpfSl9O1AucHJvdG90eXBlLmY9ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEsucmVnaXN0cmF0aW9uKX07dmFyIFY9ZnVuY3Rpb24oYSl7Si5jYWxsKHRoaXMsYSk7dmFyIGI9dGhpczt0aGlzLmo9bnVsbDt0aGlzLm09ZmlyZWJhc2UuSU5URVJOQUwuY3JlYXRlU3Vic2NyaWJlKGZ1bmN0aW9uKGEpe2Iuaj1hfSk7dGhpcy5zPW51bGw7dGhpcy5vPWZpcmViYXNlLklOVEVSTkFMLmNyZWF0ZVN1YnNjcmliZShmdW5jdGlvbihhKXtiLnM9YX0pO1UodGhpcyl9O2YoVixKKTtcblYucHJvdG90eXBlLmdldFRva2VuPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm5cInNlcnZpY2VXb3JrZXJcImluIG5hdmlnYXRvciYmXCJQdXNoTWFuYWdlclwiaW4gd2luZG93JiZcIk5vdGlmaWNhdGlvblwiaW4gd2luZG93JiZTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShcInNob3dOb3RpZmljYXRpb25cIikmJlB1c2hTdWJzY3JpcHRpb24ucHJvdG90eXBlLmhhc093blByb3BlcnR5KFwiZ2V0S2V5XCIpP1codGhpcykudGhlbihmdW5jdGlvbigpe3JldHVybiBKLnByb3RvdHlwZS5nZXRUb2tlbi5jYWxsKGEpfSk6UHJvbWlzZS5yZWplY3QodGhpcy5hLmNyZWF0ZShcInVuc3VwcG9ydGVkLWJyb3dzZXJcIikpfTtWLnByb3RvdHlwZS5nZXRUb2tlbj1WLnByb3RvdHlwZS5nZXRUb2tlbjtcbnZhciBXPWZ1bmN0aW9uKGEpe2lmKGEuZylyZXR1cm4gYS5nO3ZhciBiPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPVwibWFuaWZlc3RcIl0nKTtiP2EuZz1mZXRjaChiLmhyZWYpLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIGEuanNvbigpfSkuY2F0Y2goZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCl9KS50aGVuKGZ1bmN0aW9uKGIpe2lmKGImJmIuZ2NtX3NlbmRlcl9pZCYmXCIxMDM5NTM4MDA1MDdcIiE9PWIuZ2NtX3NlbmRlcl9pZCl0aHJvdyBhLmEuY3JlYXRlKFwiaW5jb3JyZWN0LWdjbS1zZW5kZXItaWRcIik7fSk6YS5nPVByb21pc2UucmVzb2x2ZSgpO3JldHVybiBhLmd9O1xuVi5wcm90b3R5cGUucmVxdWVzdFBlcm1pc3Npb249ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3JldHVyblwiZ3JhbnRlZFwiPT09Tm90aWZpY2F0aW9uLnBlcm1pc3Npb24/UHJvbWlzZS5yZXNvbHZlKCk6bmV3IFByb21pc2UoZnVuY3Rpb24oYixjKXt2YXIgZD1mdW5jdGlvbihkKXtyZXR1cm5cImdyYW50ZWRcIj09PWQ/YigpOlwiZGVuaWVkXCI9PT1kP2MoYS5hLmNyZWF0ZShcInBlcm1pc3Npb24tYmxvY2tlZFwiKSk6YyhhLmEuY3JlYXRlKFwicGVybWlzc2lvbi1kZWZhdWx0XCIpKX0sZT1Ob3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oZnVuY3Rpb24oYSl7ZXx8ZChhKX0pO2UmJmUudGhlbihkKX0pfTtWLnByb3RvdHlwZS5yZXF1ZXN0UGVybWlzc2lvbj1WLnByb3RvdHlwZS5yZXF1ZXN0UGVybWlzc2lvbjtcblYucHJvdG90eXBlLnVzZVNlcnZpY2VXb3JrZXI9ZnVuY3Rpb24oYSl7aWYoIShhIGluc3RhbmNlb2YgU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbikpdGhyb3cgdGhpcy5hLmNyZWF0ZShcInN3LXJlZ2lzdHJhdGlvbi1leHBlY3RlZFwiKTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIHRoaXMuYil0aHJvdyB0aGlzLmEuY3JlYXRlKFwidXNlLXN3LWJlZm9yZS1nZXQtdG9rZW5cIik7dGhpcy5iPWF9O1YucHJvdG90eXBlLnVzZVNlcnZpY2VXb3JrZXI9Vi5wcm90b3R5cGUudXNlU2VydmljZVdvcmtlcjtWLnByb3RvdHlwZS5vbk1lc3NhZ2U9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm0oYSxiLGMpfTtWLnByb3RvdHlwZS5vbk1lc3NhZ2U9Vi5wcm90b3R5cGUub25NZXNzYWdlO1YucHJvdG90eXBlLm9uVG9rZW5SZWZyZXNoPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vKGEsYixjKX07Vi5wcm90b3R5cGUub25Ub2tlblJlZnJlc2g9Vi5wcm90b3R5cGUub25Ub2tlblJlZnJlc2g7XG52YXIgWD1mdW5jdGlvbihhLGIpe3ZhciBjPWIuaW5zdGFsbGluZ3x8Yi53YWl0aW5nfHxiLmFjdGl2ZTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZCxlKXtpZihjKWlmKFwiYWN0aXZhdGVkXCI9PT1jLnN0YXRlKWQoYik7ZWxzZSBpZihcInJlZHVuZGFudFwiPT09Yy5zdGF0ZSllKGEuYS5jcmVhdGUoXCJzdy1yZWctcmVkdW5kYW50XCIpKTtlbHNle3ZhciBuPWZ1bmN0aW9uKCl7aWYoXCJhY3RpdmF0ZWRcIj09PWMuc3RhdGUpZChiKTtlbHNlIGlmKFwicmVkdW5kYW50XCI9PT1jLnN0YXRlKWUoYS5hLmNyZWF0ZShcInN3LXJlZy1yZWR1bmRhbnRcIikpO2Vsc2UgcmV0dXJuO2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0YXRlY2hhbmdlXCIsbil9O2MuYWRkRXZlbnRMaXN0ZW5lcihcInN0YXRlY2hhbmdlXCIsbil9ZWxzZSBlKGEuYS5jcmVhdGUoXCJuby1zdy1pbi1yZWdcIikpfSl9O1xuVi5wcm90b3R5cGUuZj1mdW5jdGlvbigpe3ZhciBhPXRoaXM7aWYodGhpcy5iKXJldHVybiBYKHRoaXMsdGhpcy5iKTt0aGlzLmI9bnVsbDtyZXR1cm4gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCIvZmlyZWJhc2UtbWVzc2FnaW5nLXN3LmpzXCIse3Njb3BlOlwiL2ZpcmViYXNlLWNsb3VkLW1lc3NhZ2luZy1wdXNoLXNjb3BlXCJ9KS5jYXRjaChmdW5jdGlvbihiKXt0aHJvdyBhLmEuY3JlYXRlKFwiZmFpbGVkLXNlcnZpY2V3b3JrZXItcmVnaXN0cmF0aW9uXCIse2Jyb3dzZXJFcnJvck1lc3NhZ2U6Yi5tZXNzYWdlfSk7fSkudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gWChhLGIpLnRoZW4oZnVuY3Rpb24oKXthLmI9YjtiLnVwZGF0ZSgpO3JldHVybiBifSl9KX07XG52YXIgVT1mdW5jdGlvbihhKXtcInNlcnZpY2VXb3JrZXJcImluIG5hdmlnYXRvciYmbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixmdW5jdGlvbihiKXtpZihiLmRhdGEmJmIuZGF0YVtcImZpcmViYXNlLW1lc3NhZ2luZy1tc2ctdHlwZVwiXSlzd2l0Y2goYj1iLmRhdGEsYltcImZpcmViYXNlLW1lc3NhZ2luZy1tc2ctdHlwZVwiXSl7Y2FzZSBcInB1c2gtbXNnLXJlY2VpdmVkXCI6Y2FzZSBcIm5vdGlmaWNhdGlvbi1jbGlja2VkXCI6YS5qLm5leHQoYltcImZpcmViYXNlLW1lc3NhZ2luZy1tc2ctZGF0YVwiXSl9fSwhMSl9O2lmKCEoZmlyZWJhc2UmJmZpcmViYXNlLklOVEVSTkFMJiZmaXJlYmFzZS5JTlRFUk5BTC5yZWdpc3RlclNlcnZpY2UpKXRocm93IEVycm9yKFwiQ2Fubm90IGluc3RhbGwgRmlyZWJhc2UgTWVzc2FnaW5nIC0gYmUgc3VyZSB0byBsb2FkIGZpcmViYXNlLWFwcC5qcyBmaXJzdC5cIik7ZmlyZWJhc2UuSU5URVJOQUwucmVnaXN0ZXJTZXJ2aWNlKFwibWVzc2FnaW5nXCIsZnVuY3Rpb24oYSl7cmV0dXJuIHNlbGYmJlwiU2VydmljZVdvcmtlckdsb2JhbFNjb3BlXCJpbiBzZWxmP25ldyBQKGEpOm5ldyBWKGEpfSx7TWVzc2FnaW5nOlZ9KTt9KS5jYWxsKHRoaXMpO1xufSkuY2FsbChnbG9iYWwpO1xubW9kdWxlLmV4cG9ydHMgPSBmaXJlYmFzZS5tZXNzYWdpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmlyZWJhc2UvbWVzc2FnaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGZpcmViYXNlID0gcmVxdWlyZSgnLi9hcHAnKTtcbihmdW5jdGlvbigpe1xuLyohIEBsaWNlbnNlIEZpcmViYXNlIHYzLjYuNVxuICAgIEJ1aWxkOiAzLjYuNS1yYy4xXG4gICAgVGVybXM6IGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS90ZXJtcy8gKi9cbihmdW5jdGlvbigpe3ZhciBrLGw9dGhpcyxtPWZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDAhPT1hfSxhYT1mdW5jdGlvbihhKXt2YXIgYj10eXBlb2YgYTtpZihcIm9iamVjdFwiPT1iKWlmKGEpe2lmKGEgaW5zdGFuY2VvZiBBcnJheSlyZXR1cm5cImFycmF5XCI7aWYoYSBpbnN0YW5jZW9mIE9iamVjdClyZXR1cm4gYjt2YXIgYz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSk7aWYoXCJbb2JqZWN0IFdpbmRvd11cIj09YylyZXR1cm5cIm9iamVjdFwiO2lmKFwiW29iamVjdCBBcnJheV1cIj09Y3x8XCJudW1iZXJcIj09dHlwZW9mIGEubGVuZ3RoJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5zcGxpY2UmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnByb3BlcnR5SXNFbnVtZXJhYmxlJiYhYS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcInNwbGljZVwiKSlyZXR1cm5cImFycmF5XCI7aWYoXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT1jfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5jYWxsJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5wcm9wZXJ0eUlzRW51bWVyYWJsZSYmXG4hYS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcImNhbGxcIikpcmV0dXJuXCJmdW5jdGlvblwifWVsc2UgcmV0dXJuXCJudWxsXCI7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PWImJlwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmNhbGwpcmV0dXJuXCJvYmplY3RcIjtyZXR1cm4gYn07dmFyIHA9ZnVuY3Rpb24oYSxiKXtyZXR1cm4tMSE9PWEuaW5kZXhPZihiKX07dmFyIGJhPWZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKCl7enx8KHo9ITAsYi5hcHBseShudWxsLGFyZ3VtZW50cykpfWZ1bmN0aW9uIGUoYil7bj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bj1udWxsO2EoZiwyPT09Qyl9LGIpfWZ1bmN0aW9uIGYoYSxiKXtpZigheilpZihhKWQuYXBwbHkobnVsbCxhcmd1bWVudHMpO2Vsc2UgaWYoMj09PUN8fEIpZC5hcHBseShudWxsLGFyZ3VtZW50cyk7ZWxzZXs2ND5oJiYoaCo9Mik7dmFyIGM7MT09PUM/KEM9MixjPTApOmM9MUUzKihoK01hdGgucmFuZG9tKCkpO2UoYyl9fWZ1bmN0aW9uIGcoYSl7SGF8fChIYT0hMCx6fHwobnVsbCE9PW4/KGF8fChDPTIpLGNsZWFyVGltZW91dChuKSxlKDApKTphfHwoQz0xKSkpfXZhciBoPTEsbj1udWxsLEI9ITEsQz0wLHo9ITEsSGE9ITE7ZSgwKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Qj0hMDtnKCEwKX0sYyk7cmV0dXJuIGd9O3ZhciBxPVwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb21cIjt2YXIgcj1mdW5jdGlvbihhLGIpe3RoaXMuY29kZT1cInN0b3JhZ2UvXCIrYTt0aGlzLm1lc3NhZ2U9XCJGaXJlYmFzZSBTdG9yYWdlOiBcIitiO3RoaXMuc2VydmVyUmVzcG9uc2U9bnVsbDt0aGlzLm5hbWU9XCJGaXJlYmFzZUVycm9yXCJ9OyhmdW5jdGlvbigpe3ZhciBhPUVycm9yO2Z1bmN0aW9uIGIoKXt9Yi5wcm90b3R5cGU9YS5wcm90b3R5cGU7ci5iPWEucHJvdG90eXBlO3IucHJvdG90eXBlPW5ldyBiO3IuYT1mdW5jdGlvbihiLGQsZSl7Zm9yKHZhciBjPUFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMiksZz0yO2c8YXJndW1lbnRzLmxlbmd0aDtnKyspY1tnLTJdPWFyZ3VtZW50c1tnXTtyZXR1cm4gYS5wcm90b3R5cGVbZF0uYXBwbHkoYixjKX19KSgpO1xudmFyIGNhPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKFwidW5rbm93blwiLFwiQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCwgcGxlYXNlIGNoZWNrIHRoZSBlcnJvciBwYXlsb2FkIGZvciBzZXJ2ZXIgcmVzcG9uc2UuXCIpfSxkYT1mdW5jdGlvbigpe3JldHVybiBuZXcgcihcImNhbmNlbGVkXCIsXCJVc2VyIGNhbmNlbGVkIHRoZSB1cGxvYWQvZG93bmxvYWQuXCIpfSxlYT1mdW5jdGlvbigpe3JldHVybiBuZXcgcihcImNhbm5vdC1zbGljZS1ibG9iXCIsXCJDYW5ub3Qgc2xpY2UgYmxvYiBmb3IgdXBsb2FkLiBQbGVhc2UgcmV0cnkgdGhlIHVwbG9hZC5cIil9LGZhPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbmV3IHIoXCJpbnZhbGlkLWFyZ3VtZW50XCIsXCJJbnZhbGlkIGFyZ3VtZW50IGluIGBcIitiK1wiYCBhdCBpbmRleCBcIithK1wiOiBcIitjKX0sZ2E9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIoXCJhcHAtZGVsZXRlZFwiLFwiVGhlIEZpcmViYXNlIGFwcCB3YXMgZGVsZXRlZC5cIil9LHQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IHIoXCJpbnZhbGlkLWZvcm1hdFwiLFxuXCJTdHJpbmcgZG9lcyBub3QgbWF0Y2ggZm9ybWF0ICdcIithK1wiJzogXCIrYil9LHU9ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IHIoXCJpbnRlcm5hbC1lcnJvclwiLFwiSW50ZXJuYWwgZXJyb3I6IFwiK2EpO307dmFyIHY9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMgaW4gYSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSxjKSYmYihjLGFbY10pfSxoYT1mdW5jdGlvbihhKXt2YXIgYj17fTt2KGEsZnVuY3Rpb24oYSxkKXtiW2FdPWR9KTtyZXR1cm4gYn07dmFyIGlhPWZ1bmN0aW9uKGEsYil7Yj1iLnNwbGl0KFwiL1wiKS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIDA8YS5sZW5ndGh9KS5qb2luKFwiL1wiKTtyZXR1cm4gMD09PWEubGVuZ3RoP2I6YStcIi9cIitifSxqYT1mdW5jdGlvbihhKXt2YXIgYj1hLmxhc3RJbmRleE9mKFwiL1wiLGEubGVuZ3RoLTIpO3JldHVybi0xPT09Yj9hOmEuc2xpY2UoYisxKX07dmFyIGthPWZ1bmN0aW9uKGEpe2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgZmlyZWJhc2UpcmV0dXJuIG5ldyBmaXJlYmFzZS5Qcm9taXNlKGEpO3Rocm93IEVycm9yKFwiRXJyb3IgaW4gRmlyZWJhc2UgU3RvcmFnZSAtIGJlIHN1cmUgdG8gbG9hZCBmaXJlYmFzZS1hcHAuanMgZmlyc3QuXCIpO307dmFyIHc9ZnVuY3Rpb24oYSxiLGMsZCl7dGhpcy5oPWE7dGhpcy5iPXt9O3RoaXMubWV0aG9kPWI7dGhpcy5oZWFkZXJzPXt9O3RoaXMuYm9keT1udWxsO3RoaXMuaj1jO3RoaXMubD10aGlzLmE9bnVsbDt0aGlzLmM9WzIwMF07dGhpcy5nPVtdO3RoaXMudGltZW91dD1kO3RoaXMuZj0hMH07dmFyIGxhPXtTVEFURV9DSEFOR0VEOlwic3RhdGVfY2hhbmdlZFwifSx4PXtSVU5OSU5HOlwicnVubmluZ1wiLFBBVVNFRDpcInBhdXNlZFwiLFNVQ0NFU1M6XCJzdWNjZXNzXCIsQ0FOQ0VMRUQ6XCJjYW5jZWxlZFwiLEVSUk9SOlwiZXJyb3JcIn0sbWE9ZnVuY3Rpb24oYSl7c3dpdGNoKGEpe2Nhc2UgXCJydW5uaW5nXCI6Y2FzZSBcInBhdXNpbmdcIjpjYXNlIFwiY2FuY2VsaW5nXCI6cmV0dXJuXCJydW5uaW5nXCI7Y2FzZSBcInBhdXNlZFwiOnJldHVyblwicGF1c2VkXCI7Y2FzZSBcInN1Y2Nlc3NcIjpyZXR1cm5cInN1Y2Nlc3NcIjtjYXNlIFwiY2FuY2VsZWRcIjpyZXR1cm5cImNhbmNlbGVkXCI7Y2FzZSBcImVycm9yXCI6cmV0dXJuXCJlcnJvclwiO2RlZmF1bHQ6cmV0dXJuXCJlcnJvclwifX07dmFyIHk9ZnVuY3Rpb24oYSl7cmV0dXJuIG0oYSkmJm51bGwhPT1hfSxuYT1mdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGF8fGEgaW5zdGFuY2VvZiBTdHJpbmd9LG9hPWZ1bmN0aW9uKCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBCbG9ifTt2YXIgcWE9ZnVuY3Rpb24oYSxiKXt2YXIgYz1wYTtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGMsYSk/Y1thXTpjW2FdPWIoYSl9O3ZhciByYT1TdHJpbmcucHJvdG90eXBlLnRyaW0/ZnVuY3Rpb24oYSl7cmV0dXJuIGEudHJpbSgpfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC9eW1xcc1xceGEwXSt8W1xcc1xceGEwXSskL2csXCJcIil9LHNhPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE8Yj8tMTphPmI/MTowfTt2YXIgQT1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYj1bXTtBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShiLGFyZ3VtZW50cyk7ZmlyZWJhc2UuUHJvbWlzZS5yZXNvbHZlKCEwKS50aGVuKGZ1bmN0aW9uKCl7YS5hcHBseShudWxsLGIpfSl9fTt2YXIgRD1mdW5jdGlvbihhLGIpe3RoaXMuYnVja2V0PWE7dGhpcy5wYXRoPWJ9LHRhPWZ1bmN0aW9uKGEpe3ZhciBiPWVuY29kZVVSSUNvbXBvbmVudDtyZXR1cm5cIi9iL1wiK2IoYS5idWNrZXQpK1wiL28vXCIrYihhLnBhdGgpfSx1YT1mdW5jdGlvbihhKXtmb3IodmFyIGI9bnVsbCxjPVt7SzovXmdzOlxcL1xcLyhbQS1aYS16MC05LlxcLV0rKShcXC8oLiopKT8kL2ksRzp7YnVja2V0OjEscGF0aDozfSxKOmZ1bmN0aW9uKGEpe1wiL1wiPT09YS5wYXRoLmNoYXJBdChhLnBhdGgubGVuZ3RoLTEpJiYoYS5wYXRoPWEucGF0aC5zbGljZSgwLC0xKSl9fSx7SzovXmh0dHBzPzpcXC9cXC9maXJlYmFzZXN0b3JhZ2VcXC5nb29nbGVhcGlzXFwuY29tXFwvdltBLVphLXowLTlfXStcXC9iXFwvKFtBLVphLXowLTkuXFwtXSspXFwvbyhcXC8oW14/I10qKS4qKT8kL2ksRzp7YnVja2V0OjEscGF0aDozfSxKOmZ1bmN0aW9uKGEpe2EucGF0aD1kZWNvZGVVUklDb21wb25lbnQoYS5wYXRoKX19XSxkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPVxuY1tkXSxmPWUuSy5leGVjKGEpO2lmKGYpe2I9ZltlLkcuYnVja2V0XTsoZj1mW2UuRy5wYXRoXSl8fChmPVwiXCIpO2I9bmV3IEQoYixmKTtlLkooYik7YnJlYWt9fWlmKG51bGw9PWIpdGhyb3cgbmV3IHIoXCJpbnZhbGlkLXVybFwiLFwiSW52YWxpZCBVUkwgJ1wiK2ErXCInLlwiKTtyZXR1cm4gYn07dmFyIHZhPWZ1bmN0aW9uKGEsYixjKXtcImZ1bmN0aW9uXCI9PWFhKGEpfHx5KGIpfHx5KGMpPyh0aGlzLmM9YSx0aGlzLmE9Ynx8bnVsbCx0aGlzLmI9Y3x8bnVsbCk6KHRoaXMuYz1hLm5leHR8fG51bGwsdGhpcy5hPWEuZXJyb3J8fG51bGwsdGhpcy5iPWEuY29tcGxldGV8fG51bGwpfTt2YXIgRT17UkFXOlwicmF3XCIsQkFTRTY0OlwiYmFzZTY0XCIsQkFTRTY0VVJMOlwiYmFzZTY0dXJsXCIsREFUQV9VUkw6XCJkYXRhX3VybFwifSx3YT1mdW5jdGlvbihhKXtzd2l0Y2goYSl7Y2FzZSBcInJhd1wiOmNhc2UgXCJiYXNlNjRcIjpjYXNlIFwiYmFzZTY0dXJsXCI6Y2FzZSBcImRhdGFfdXJsXCI6YnJlYWs7ZGVmYXVsdDp0aHJvd1wiRXhwZWN0ZWQgb25lIG9mIHRoZSBldmVudCB0eXBlczogW3JhdywgYmFzZTY0LCBiYXNlNjR1cmwsIGRhdGFfdXJsXS5cIjt9fSx4YT1mdW5jdGlvbihhLGIpe3RoaXMuYj1hO3RoaXMuYT1ifHxudWxsfSxCYT1mdW5jdGlvbihhLGIpe3N3aXRjaChhKXtjYXNlIFwicmF3XCI6cmV0dXJuIG5ldyB4YSh5YShiKSk7Y2FzZSBcImJhc2U2NFwiOmNhc2UgXCJiYXNlNjR1cmxcIjpyZXR1cm4gbmV3IHhhKHphKGEsYikpO2Nhc2UgXCJkYXRhX3VybFwiOmE9bmV3IEFhKGIpO3ZhciBjO2lmKGEuYSljPXphKFwiYmFzZTY0XCIsYS5jKTtlbHNle3RyeXtjPWRlY29kZVVSSUNvbXBvbmVudChhLmMpfWNhdGNoKGQpe3Rocm93IHQoXCJkYXRhX3VybFwiLFxuXCJNYWxmb3JtZWQgZGF0YSBVUkwuXCIpO31jPXlhKGMpfXJldHVybiBuZXcgeGEoYywobmV3IEFhKGIpKS5iKX10aHJvdyBjYSgpO30seWE9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YS5jaGFyQ29kZUF0KGMpO2lmKDEyNz49ZCliLnB1c2goZCk7ZWxzZSBpZigyMDQ3Pj1kKWIucHVzaCgxOTJ8ZD4+NiwxMjh8ZCY2Myk7ZWxzZSBpZig1NTI5Nj09KGQmNjQ1MTIpKWlmKGM8YS5sZW5ndGgtMSYmNTYzMjA9PShhLmNoYXJDb2RlQXQoYysxKSY2NDUxMikpe3ZhciBlPWEuY2hhckNvZGVBdCgrK2MpLGQ9NjU1MzZ8KGQmMTAyMyk8PDEwfGUmMTAyMztiLnB1c2goMjQwfGQ+PjE4LDEyOHxkPj4xMiY2MywxMjh8ZD4+NiY2MywxMjh8ZCY2Myl9ZWxzZSBiLnB1c2goMjM5LDE5MSwxODkpO2Vsc2UgNTYzMjA9PShkJjY0NTEyKT9iLnB1c2goMjM5LDE5MSwxODkpOmIucHVzaCgyMjR8ZD4+MTIsMTI4fGQ+PjYmNjMsMTI4fGQmNjMpfXJldHVybiBuZXcgVWludDhBcnJheShiKX0sXG56YT1mdW5jdGlvbihhLGIpe3N3aXRjaChhKXtjYXNlIFwiYmFzZTY0XCI6dmFyIGM9LTEhPT1iLmluZGV4T2YoXCItXCIpLGQ9LTEhPT1iLmluZGV4T2YoXCJfXCIpO2lmKGN8fGQpdGhyb3cgdChhLFwiSW52YWxpZCBjaGFyYWN0ZXIgJ1wiKyhjP1wiLVwiOlwiX1wiKStcIicgZm91bmQ6IGlzIGl0IGJhc2U2NHVybCBlbmNvZGVkP1wiKTticmVhaztjYXNlIFwiYmFzZTY0dXJsXCI6Yz0tMSE9PWIuaW5kZXhPZihcIitcIik7ZD0tMSE9PWIuaW5kZXhPZihcIi9cIik7aWYoY3x8ZCl0aHJvdyB0KGEsXCJJbnZhbGlkIGNoYXJhY3RlciAnXCIrKGM/XCIrXCI6XCIvXCIpK1wiJyBmb3VuZDogaXMgaXQgYmFzZTY0IGVuY29kZWQ/XCIpO2I9Yi5yZXBsYWNlKC8tL2csXCIrXCIpLnJlcGxhY2UoL18vZyxcIi9cIil9dmFyIGU7dHJ5e2U9YXRvYihiKX1jYXRjaChmKXt0aHJvdyB0KGEsXCJJbnZhbGlkIGNoYXJhY3RlciBmb3VuZFwiKTt9YT1uZXcgVWludDhBcnJheShlLmxlbmd0aCk7Zm9yKGI9MDtiPGUubGVuZ3RoO2IrKylhW2JdPWUuY2hhckNvZGVBdChiKTtcbnJldHVybiBhfSxBYT1mdW5jdGlvbihhKXt2YXIgYj1hLm1hdGNoKC9eZGF0YTooW14sXSspPywvKTtpZihudWxsPT09Yil0aHJvdyB0KFwiZGF0YV91cmxcIixcIk11c3QgYmUgZm9ybWF0dGVkICdkYXRhOls8bWVkaWF0eXBlPl1bO2Jhc2U2NF0sPGRhdGE+XCIpO2I9YlsxXXx8bnVsbDt0aGlzLmE9ITE7dGhpcy5iPW51bGw7aWYobnVsbCE9Yil7dmFyIGM9Yi5sZW5ndGgtNzt0aGlzLmI9KHRoaXMuYT0wPD1jJiZiLmluZGV4T2YoXCI7YmFzZTY0XCIsYyk9PWMpP2Iuc3Vic3RyaW5nKDAsYi5sZW5ndGgtNyk6Yn10aGlzLmM9YS5zdWJzdHJpbmcoYS5pbmRleE9mKFwiLFwiKSsxKX07dmFyIENhPWZ1bmN0aW9uKGEpe3ZhciBiPWVuY29kZVVSSUNvbXBvbmVudCxjPVwiP1wiO3YoYSxmdW5jdGlvbihhLGUpe2E9YihhKStcIj1cIitiKGUpO2M9YythK1wiJlwifSk7cmV0dXJuIGM9Yy5zbGljZSgwLC0xKX07dmFyIERhPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczt0aGlzLmE9bmV3IFhNTEh0dHBSZXF1ZXN0O3RoaXMuYz0wO3RoaXMuZj1rYShmdW5jdGlvbihiKXthLmEuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsZnVuY3Rpb24oKXthLmM9MjtiKGEpfSk7YS5hLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGZ1bmN0aW9uKCl7YS5jPTE7YihhKX0pO2EuYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7YihhKX0pfSk7dGhpcy5iPSExfSxFYT1mdW5jdGlvbihhLGIsYyxkLGUpe2lmKGEuYil0aHJvdyB1KFwiY2Fubm90IC5zZW5kKCkgbW9yZSB0aGFuIG9uY2VcIik7YS5iPSEwO2EuYS5vcGVuKGMsYiwhMCk7eShlKSYmdihlLGZ1bmN0aW9uKGIsYyl7YS5hLnNldFJlcXVlc3RIZWFkZXIoYixjLnRvU3RyaW5nKCkpfSk7eShkKT9hLmEuc2VuZChkKTphLmEuc2VuZCgpO3JldHVybiBhLmZ9LEZhPWZ1bmN0aW9uKGEpe2lmKCFhLmIpdGhyb3cgdShcImNhbm5vdCAuZ2V0RXJyb3JDb2RlKCkgYmVmb3JlIHNlbmRpbmdcIik7XG5yZXR1cm4gYS5jfSxGPWZ1bmN0aW9uKGEpe2lmKCFhLmIpdGhyb3cgdShcImNhbm5vdCAuZ2V0U3RhdHVzKCkgYmVmb3JlIHNlbmRpbmdcIik7dHJ5e3JldHVybiBhLmEuc3RhdHVzfWNhdGNoKGIpe3JldHVybi0xfX0sR2E9ZnVuY3Rpb24oYSl7aWYoIWEuYil0aHJvdyB1KFwiY2Fubm90IC5nZXRSZXNwb25zZVRleHQoKSBiZWZvcmUgc2VuZGluZ1wiKTtyZXR1cm4gYS5hLnJlc3BvbnNlVGV4dH07RGEucHJvdG90eXBlLmFib3J0PWZ1bmN0aW9uKCl7dGhpcy5hLmFib3J0KCl9O3ZhciBHPWZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmI9YTt0aGlzLmg9Yjt0aGlzLmY9Yzt0aGlzLmE9ZDt0aGlzLmc9ZTt0aGlzLmM9Zn07az1HLnByb3RvdHlwZTtrLlY9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ifTtrLnFhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaH07ay5uYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmZ9O2suaWE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hfTtrLlc9ZnVuY3Rpb24oKXtpZih5KHRoaXMuYSkpe3ZhciBhPXRoaXMuYS5kb3dubG9hZFVSTHM7cmV0dXJuIHkoYSkmJnkoYVswXSk/YVswXTpudWxsfXJldHVybiBudWxsfTtrLnBhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ307ay5sYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmN9O3ZhciBIO2E6e3ZhciBJYT1sLm5hdmlnYXRvcjtpZihJYSl7dmFyIEphPUlhLnVzZXJBZ2VudDtpZihKYSl7SD1KYTticmVhayBhfX1IPVwiXCJ9O3ZhciBMYT1mdW5jdGlvbihhLGIsYyxkLGUsZixnLGgsbixCLEMpe3RoaXMuQz1hO3RoaXMuQT1iO3RoaXMudj1jO3RoaXMubz1kO3RoaXMuQj1lLnNsaWNlKCk7dGhpcy5tPWYuc2xpY2UoKTt0aGlzLmo9dGhpcy5sPXRoaXMuYz10aGlzLmI9bnVsbDt0aGlzLmY9dGhpcy5nPSExO3RoaXMucz1nO3RoaXMuaD1oO3RoaXMuRD1DO3RoaXMudz1uO3ZhciB6PXRoaXM7dGhpcy51PWthKGZ1bmN0aW9uKGEsYil7ei5sPWE7ei5qPWI7S2Eoeil9KX0sTWE9ZnVuY3Rpb24oYSxiLGMpe3RoaXMuYj1hO3RoaXMuYz1iO3RoaXMuYT0hIWN9LEthPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSxiKXtiP2EoITEsbmV3IE1hKCExLG51bGwsITApKTooYj1uZXcgRGEsYi5hLndpdGhDcmVkZW50aWFscz1kLkQsZC5iPWIsRWEoYixkLkMsZC5BLGQubyxkLnYpLnRoZW4oZnVuY3Rpb24oYil7ZC5iPW51bGw7dmFyIGM9MD09PUZhKGIpLGU9RihiKTtpZighKGM9IWMpKXZhciBjPXAoWzQwOCw0MjldLGUpLFxuZj1wKGQubSxlKSxjPTUwMDw9ZSYmNjAwPmV8fGN8fGY7Yz8oYj0yPT09RmEoYiksYSghMSxuZXcgTWEoITEsbnVsbCxiKSkpOmEoITAsbmV3IE1hKHAoZC5CLGUpLGIpKX0pKX1mdW5jdGlvbiBjKGEsYil7dmFyIGM9ZC5sO2E9ZC5qO3ZhciBlPWIuYztpZihiLmIpdHJ5e3ZhciBmPWQucyhlLEdhKGUpKTttKGYpP2MoZik6YygpfWNhdGNoKEIpe2EoQil9ZWxzZSBudWxsIT09ZT8oYj1jYSgpLGY9R2EoZSksYi5zZXJ2ZXJSZXNwb25zZT1mLGQuaD9hKGQuaChlLGIpKTphKGIpKTooYj1iLmE/ZC5mP2dhKCk6ZGEoKTpuZXcgcihcInJldHJ5LWxpbWl0LWV4Y2VlZGVkXCIsXCJNYXggcmV0cnkgdGltZSBmb3Igb3BlcmF0aW9uIGV4Y2VlZGVkLCBwbGVhc2UgdHJ5IGFnYWluLlwiKSxhKGIpKX12YXIgZD1hO2EuZz9jKDAsbmV3IE1hKCExLG51bGwsITApKTphLmM9YmEoYixjLGEudyl9O0xhLnByb3RvdHlwZS5hPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudX07XG5MYS5wcm90b3R5cGUuY2FuY2VsPWZ1bmN0aW9uKGEpe3RoaXMuZz0hMDt0aGlzLmY9YXx8ITE7bnVsbCE9PXRoaXMuYyYmKDAsdGhpcy5jKSghMSk7bnVsbCE9PXRoaXMuYiYmdGhpcy5iLmFib3J0KCl9O3ZhciBOYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9Q2EoYS5iKSxkPWEuaCtkLGU9YS5oZWFkZXJzP2hhKGEuaGVhZGVycyk6e307bnVsbCE9PWImJjA8Yi5sZW5ndGgmJihlLkF1dGhvcml6YXRpb249XCJGaXJlYmFzZSBcIitiKTtlW1wiWC1GaXJlYmFzZS1TdG9yYWdlLVZlcnNpb25cIl09XCJ3ZWJqcy9cIisoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBmaXJlYmFzZT9maXJlYmFzZS5TREtfVkVSU0lPTjpcIkFwcE1hbmFnZXJcIik7cmV0dXJuIG5ldyBMYShkLGEubWV0aG9kLGUsYS5ib2R5LGEuYyxhLmcsYS5qLGEuYSxhLnRpbWVvdXQsMCxjKX07dmFyIE9hPWZ1bmN0aW9uKCl7fTt2YXIgUGE9ZnVuY3Rpb24oYSl7dGhpcy5iPWZpcmViYXNlLlByb21pc2UucmVqZWN0KGEpfTtQYS5wcm90b3R5cGUuYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmJ9O1BhLnByb3RvdHlwZS5jYW5jZWw9ZnVuY3Rpb24oKXt9O3ZhciBRYT1mdW5jdGlvbigpe3RoaXMuYT17fTt0aGlzLmI9TnVtYmVyLk1JTl9TQUZFX0lOVEVHRVJ9LFJhPWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYygpe2RlbGV0ZSBlLmFbZF19dmFyIGQ9YS5iO2EuYisrO2EuYVtkXT1iO3ZhciBlPWE7Yi5hKCkudGhlbihjLGMpfSxTYT1mdW5jdGlvbihhKXt2KGEuYSxmdW5jdGlvbihhLGMpe2MmJmMuY2FuY2VsKCEwKX0pO2EuYT17fX07dmFyIFRhPWZ1bmN0aW9uKGEsYixjLGQsZSl7dGhpcy5hPWE7dGhpcy5nPW51bGw7aWYobnVsbCE9PXRoaXMuYSYmKGE9dGhpcy5hLm9wdGlvbnMseShhKSkpe2E9YS5zdG9yYWdlQnVja2V0fHxudWxsO2lmKG51bGw9PWEpYT1udWxsO2Vsc2V7dmFyIGY9bnVsbDt0cnl7Zj11YShhKX1jYXRjaChnKXt9aWYobnVsbCE9PWYpe2lmKFwiXCIhPT1mLnBhdGgpdGhyb3cgbmV3IHIoXCJpbnZhbGlkLWRlZmF1bHQtYnVja2V0XCIsXCJJbnZhbGlkIGRlZmF1bHQgYnVja2V0ICdcIithK1wiJy5cIik7YT1mLmJ1Y2tldH19dGhpcy5nPWF9dGhpcy5vPWI7dGhpcy5tPWM7dGhpcy5qPWU7dGhpcy5sPWQ7dGhpcy5jPTEyRTQ7dGhpcy5iPTZFNDt0aGlzLmg9bmV3IFFhO3RoaXMuZj0hMX0sVWE9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPT1hLmEmJnkoYS5hLklOVEVSTkFMKSYmeShhLmEuSU5URVJOQUwuZ2V0VG9rZW4pP2EuYS5JTlRFUk5BTC5nZXRUb2tlbigpLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSk/XG5hLmFjY2Vzc1Rva2VuOm51bGx9LGZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9KTpmaXJlYmFzZS5Qcm9taXNlLnJlc29sdmUobnVsbCl9O1RhLnByb3RvdHlwZS5idWNrZXQ9ZnVuY3Rpb24oKXtpZih0aGlzLmYpdGhyb3cgZ2EoKTtyZXR1cm4gdGhpcy5nfTt2YXIgST1mdW5jdGlvbihhLGIsYyl7aWYoYS5mKXJldHVybiBuZXcgUGEoZ2EoKSk7Yj1hLm0oYixjLG51bGw9PT1hLmEsYS5qKTtSYShhLmgsYik7cmV0dXJuIGJ9O3ZhciBWYT0tMSE9SC5pbmRleE9mKFwiT3BlcmFcIiksV2E9LTEhPUguaW5kZXhPZihcIlRyaWRlbnRcIil8fC0xIT1ILmluZGV4T2YoXCJNU0lFXCIpLFhhPS0xIT1ILmluZGV4T2YoXCJFZGdlXCIpLFlhPS0xIT1ILmluZGV4T2YoXCJHZWNrb1wiKSYmISgtMSE9SC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJ3ZWJraXRcIikmJi0xPT1ILmluZGV4T2YoXCJFZGdlXCIpKSYmISgtMSE9SC5pbmRleE9mKFwiVHJpZGVudFwiKXx8LTEhPUguaW5kZXhPZihcIk1TSUVcIikpJiYtMT09SC5pbmRleE9mKFwiRWRnZVwiKSxaYT0tMSE9SC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJ3ZWJraXRcIikmJi0xPT1ILmluZGV4T2YoXCJFZGdlXCIpLCRhO1xuYTp7dmFyIGFiPVwiXCIsYmI9ZnVuY3Rpb24oKXt2YXIgYT1IO2lmKFlhKXJldHVybi9ydlxcOihbXlxcKTtdKykoXFwpfDspLy5leGVjKGEpO2lmKFhhKXJldHVybi9FZGdlXFwvKFtcXGRcXC5dKykvLmV4ZWMoYSk7aWYoV2EpcmV0dXJuL1xcYig/Ok1TSUV8cnYpWzogXShbXlxcKTtdKykoXFwpfDspLy5leGVjKGEpO2lmKFphKXJldHVybi9XZWJLaXRcXC8oXFxTKykvLmV4ZWMoYSk7aWYoVmEpcmV0dXJuLyg/OlZlcnNpb24pWyBcXC9dPyhcXFMrKS8uZXhlYyhhKX0oKTtiYiYmKGFiPWJiP2JiWzFdOlwiXCIpO2lmKFdhKXt2YXIgY2IsZGI9bC5kb2N1bWVudDtjYj1kYj9kYi5kb2N1bWVudE1vZGU6dm9pZCAwO2lmKG51bGwhPWNiJiZjYj5wYXJzZUZsb2F0KGFiKSl7JGE9U3RyaW5nKGNiKTticmVhayBhfX0kYT1hYn1cbnZhciBlYj0kYSxwYT17fSxmYj1mdW5jdGlvbihhKXtyZXR1cm4gcWEoYSxmdW5jdGlvbigpe2Zvcih2YXIgYj0wLGM9cmEoU3RyaW5nKGViKSkuc3BsaXQoXCIuXCIpLGQ9cmEoU3RyaW5nKGEpKS5zcGxpdChcIi5cIiksZT1NYXRoLm1heChjLmxlbmd0aCxkLmxlbmd0aCksZj0wOzA9PWImJmY8ZTtmKyspe3ZhciBnPWNbZl18fFwiXCIsaD1kW2ZdfHxcIlwiO2Rve2c9LyhcXGQqKShcXEQqKSguKikvLmV4ZWMoZyl8fFtcIlwiLFwiXCIsXCJcIixcIlwiXTtoPS8oXFxkKikoXFxEKikoLiopLy5leGVjKGgpfHxbXCJcIixcIlwiLFwiXCIsXCJcIl07aWYoMD09Z1swXS5sZW5ndGgmJjA9PWhbMF0ubGVuZ3RoKWJyZWFrO2I9c2EoMD09Z1sxXS5sZW5ndGg/MDpwYXJzZUludChnWzFdLDEwKSwwPT1oWzFdLmxlbmd0aD8wOnBhcnNlSW50KGhbMV0sMTApKXx8c2EoMD09Z1syXS5sZW5ndGgsMD09aFsyXS5sZW5ndGgpfHxzYShnWzJdLGhbMl0pO2c9Z1szXTtoPWhbM119d2hpbGUoMD09Yil9cmV0dXJuIDA8PWJ9KX07dmFyIGdiPWZ1bmN0aW9uKGEpe3ZhciBiPWwuQmxvYkJ1aWxkZXJ8fGwuV2ViS2l0QmxvYkJ1aWxkZXI7aWYobShiKSl7Zm9yKHZhciBiPW5ldyBiLGM9MDtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIuYXBwZW5kKGFyZ3VtZW50c1tjXSk7cmV0dXJuIGIuZ2V0QmxvYigpfWI9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtjPWwuQmxvYkJ1aWxkZXJ8fGwuV2ViS2l0QmxvYkJ1aWxkZXI7aWYobShjKSl7Zm9yKHZhciBjPW5ldyBjLGQ9MDtkPGIubGVuZ3RoO2QrKyljLmFwcGVuZChiW2RdLHZvaWQgMCk7Yj1jLmdldEJsb2Iodm9pZCAwKX1lbHNlIGlmKG0obC5CbG9iKSliPW5ldyBCbG9iKGIse30pO2Vsc2UgdGhyb3cgRXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgY3JlYXRpbmcgQmxvYnNcIik7cmV0dXJuIGJ9LGhiPWZ1bmN0aW9uKGEsYixjKXttKGMpfHwoYz1hLnNpemUpO3JldHVybiBhLndlYmtpdFNsaWNlP2Eud2Via2l0U2xpY2UoYixcbmMpOmEubW96U2xpY2U/YS5tb3pTbGljZShiLGMpOmEuc2xpY2U/WWEmJiFmYihcIjEzLjBcIil8fFphJiYhZmIoXCI1MzcuMVwiKT8oMD5iJiYoYis9YS5zaXplKSwwPmImJihiPTApLDA+YyYmKGMrPWEuc2l6ZSksYzxiJiYoYz1iKSxhLnNsaWNlKGIsYy1iKSk6YS5zbGljZShiLGMpOm51bGx9O3ZhciBpYj1mdW5jdGlvbihhLGIpe3JldHVybiBifSxKPWZ1bmN0aW9uKGEsYixjLGQpe3RoaXMuYz1hO3RoaXMuYj1ifHxhO3RoaXMud3JpdGFibGU9ISFjO3RoaXMuYT1kfHxpYn0samI9bnVsbCxrYj1mdW5jdGlvbigpe2lmKGpiKXJldHVybiBqYjt2YXIgYT1bXTthLnB1c2gobmV3IEooXCJidWNrZXRcIikpO2EucHVzaChuZXcgSihcImdlbmVyYXRpb25cIikpO2EucHVzaChuZXcgSihcIm1ldGFnZW5lcmF0aW9uXCIpKTthLnB1c2gobmV3IEooXCJuYW1lXCIsXCJmdWxsUGF0aFwiLCEwKSk7dmFyIGI9bmV3IEooXCJuYW1lXCIpO2IuYT1mdW5jdGlvbihhLGIpe3JldHVybiFuYShiKXx8Mj5iLmxlbmd0aD9iOmphKGIpfTthLnB1c2goYik7Yj1uZXcgSihcInNpemVcIik7Yi5hPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHkoYik/K2I6Yn07YS5wdXNoKGIpO2EucHVzaChuZXcgSihcInRpbWVDcmVhdGVkXCIpKTthLnB1c2gobmV3IEooXCJ1cGRhdGVkXCIpKTthLnB1c2gobmV3IEooXCJtZDVIYXNoXCIsbnVsbCwhMCkpO1xuYS5wdXNoKG5ldyBKKFwiY2FjaGVDb250cm9sXCIsbnVsbCwhMCkpO2EucHVzaChuZXcgSihcImNvbnRlbnREaXNwb3NpdGlvblwiLG51bGwsITApKTthLnB1c2gobmV3IEooXCJjb250ZW50RW5jb2RpbmdcIixudWxsLCEwKSk7YS5wdXNoKG5ldyBKKFwiY29udGVudExhbmd1YWdlXCIsbnVsbCwhMCkpO2EucHVzaChuZXcgSihcImNvbnRlbnRUeXBlXCIsbnVsbCwhMCkpO2EucHVzaChuZXcgSihcIm1ldGFkYXRhXCIsXCJjdXN0b21NZXRhZGF0YVwiLCEwKSk7YS5wdXNoKG5ldyBKKFwiZG93bmxvYWRUb2tlbnNcIixcImRvd25sb2FkVVJMc1wiLCExLGZ1bmN0aW9uKGEsYil7aWYoIShuYShiKSYmMDxiLmxlbmd0aCkpcmV0dXJuW107dmFyIGM9ZW5jb2RlVVJJQ29tcG9uZW50O3JldHVybiBiLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24oYil7dmFyIGQ9YS5mdWxsUGF0aCxkPVwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjBcIisoXCIvYi9cIitjKGEuYnVja2V0KStcIi9vL1wiK2MoZCkpO2I9Q2Eoe2FsdDpcIm1lZGlhXCIsXG50b2tlbjpifSk7cmV0dXJuIGQrYn0pfSkpO3JldHVybiBqYj1hfSxsYj1mdW5jdGlvbihhLGIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwicmVmXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBiLm8oYixuZXcgRChhLmJ1Y2tldCxhLmZ1bGxQYXRoKSl9fSl9LG1iPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPXt9LGQ9Yi5sZW5ndGgsZT0wO2U8ZDtlKyspe3ZhciBmPWJbZV07Zi53cml0YWJsZSYmKGNbZi5jXT1hW2YuYl0pfXJldHVybiBKU09OLnN0cmluZ2lmeShjKX0sbmI9ZnVuY3Rpb24oYSl7aWYoIWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSl0aHJvd1wiRXhwZWN0ZWQgTWV0YWRhdGEgb2JqZWN0LlwiO2Zvcih2YXIgYiBpbiBhKXt2YXIgYz1hW2JdO2lmKFwiY3VzdG9tTWV0YWRhdGFcIj09PWIpe2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYyl0aHJvd1wiRXhwZWN0ZWQgb2JqZWN0IGZvciAnY3VzdG9tTWV0YWRhdGEnIG1hcHBpbmcuXCI7fWVsc2UgaWYobnVsbCE9YyYmXCJvYmplY3RcIj09PXR5cGVvZiBjKXRocm93XCJNYXBwaW5nIGZvciAnXCIrXG5iK1wiJyBjYW5ub3QgYmUgYW4gb2JqZWN0LlwiO319O3ZhciBLPWZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9Yi5sZW5ndGgsZT1iLmxlbmd0aCxmPTA7ZjxiLmxlbmd0aDtmKyspaWYoYltmXS5iKXtkPWY7YnJlYWt9aWYoIShkPD1jLmxlbmd0aCYmYy5sZW5ndGg8PWUpKXRocm93IGQ9PT1lPyhiPWQsZD0xPT09ZD9cImFyZ3VtZW50XCI6XCJhcmd1bWVudHNcIik6KGI9XCJiZXR3ZWVuIFwiK2QrXCIgYW5kIFwiK2UsZD1cImFyZ3VtZW50c1wiKSxuZXcgcihcImludmFsaWQtYXJndW1lbnQtY291bnRcIixcIkludmFsaWQgYXJndW1lbnQgY291bnQgaW4gYFwiK2ErXCJgOiBFeHBlY3RlZCBcIitiK1wiIFwiK2QrXCIsIHJlY2VpdmVkIFwiK2MubGVuZ3RoK1wiLlwiKTtmb3IoZj0wO2Y8Yy5sZW5ndGg7ZisrKXRyeXtiW2ZdLmEoY1tmXSl9Y2F0Y2goZyl7aWYoZyBpbnN0YW5jZW9mIEVycm9yKXRocm93IGZhKGYsYSxnLm1lc3NhZ2UpO3Rocm93IGZhKGYsYSxnKTt9fSxMPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpczt0aGlzLmE9ZnVuY3Rpb24oYil7Yy5iJiYhbShiKXx8YShiKX07XG50aGlzLmI9ISFifSxvYj1mdW5jdGlvbihhLGIpe3JldHVybiBmdW5jdGlvbihjKXthKGMpO2IoYyl9fSxNPWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXtpZighKFwic3RyaW5nXCI9PT10eXBlb2YgYXx8YSBpbnN0YW5jZW9mIFN0cmluZykpdGhyb3dcIkV4cGVjdGVkIHN0cmluZy5cIjt9dmFyIGQ7YT9kPW9iKGMsYSk6ZD1jO3JldHVybiBuZXcgTChkLGIpfSxwYj1mdW5jdGlvbigpe3JldHVybiBuZXcgTChmdW5jdGlvbihhKXtpZighKGEgaW5zdGFuY2VvZiBVaW50OEFycmF5fHxhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXJ8fG9hKCkmJmEgaW5zdGFuY2VvZiBCbG9iKSl0aHJvd1wiRXhwZWN0ZWQgQmxvYiBvciBGaWxlLlwiO30pfSxxYj1mdW5jdGlvbigpe3JldHVybiBuZXcgTChmdW5jdGlvbihhKXtpZighKChcIm51bWJlclwiPT09dHlwZW9mIGF8fGEgaW5zdGFuY2VvZiBOdW1iZXIpJiYwPD1hKSl0aHJvd1wiRXhwZWN0ZWQgYSBudW1iZXIgMCBvciBncmVhdGVyLlwiO30pfSxyYj1mdW5jdGlvbihhLFxuYil7cmV0dXJuIG5ldyBMKGZ1bmN0aW9uKGIpe2lmKCEobnVsbD09PWJ8fHkoYikmJmIgaW5zdGFuY2VvZiBPYmplY3QpKXRocm93XCJFeHBlY3RlZCBhbiBPYmplY3QuXCI7eShhKSYmYShiKX0sYil9LE49ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEwoZnVuY3Rpb24oYSl7aWYobnVsbCE9PWEmJlwiZnVuY3Rpb25cIiE9YWEoYSkpdGhyb3dcIkV4cGVjdGVkIGEgRnVuY3Rpb24uXCI7fSwhMCl9O3ZhciBPPWZ1bmN0aW9uKGEsYil7b2EoKSYmYSBpbnN0YW5jZW9mIEJsb2I/KHRoaXMuaT1hLGI9YS5zaXplLGE9YS50eXBlKTooYSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyPyhiP3RoaXMuaT1uZXcgVWludDhBcnJheShhKToodGhpcy5pPW5ldyBVaW50OEFycmF5KGEuYnl0ZUxlbmd0aCksdGhpcy5pLnNldChuZXcgVWludDhBcnJheShhKSkpLGI9dGhpcy5pLmxlbmd0aCk6KGI/dGhpcy5pPWE6KHRoaXMuaT1uZXcgVWludDhBcnJheShhLmxlbmd0aCksdGhpcy5pLnNldChhKSksYj1hLmxlbmd0aCksYT1cIlwiKTt0aGlzLmE9Yjt0aGlzLmI9YX07Ty5wcm90b3R5cGUudHlwZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmJ9O1xuTy5wcm90b3R5cGUuc2xpY2U9ZnVuY3Rpb24oYSxiKXtpZihvYSgpJiZ0aGlzLmkgaW5zdGFuY2VvZiBCbG9iKXJldHVybiBhPWhiKHRoaXMuaSxhLGIpLG51bGw9PT1hP251bGw6bmV3IE8oYSk7YT1uZXcgVWludDhBcnJheSh0aGlzLmkuYnVmZmVyLGEsYi1hKTtyZXR1cm4gbmV3IE8oYSwhMCl9O1xudmFyIHNiPWZ1bmN0aW9uKGEpe3ZhciBiPVtdO0FycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGIsYXJndW1lbnRzKTtpZihvYSgpKXJldHVybiBiPWIubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgTz9hLmk6YX0pLG5ldyBPKGdiLmFwcGx5KG51bGwsYikpO3ZhciBiPWIubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBuYShhKT9CYShcInJhd1wiLGEpLmIuYnVmZmVyOmEuaS5idWZmZXJ9KSxjPTA7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2MrPWEuYnl0ZUxlbmd0aH0pO3ZhciBkPW5ldyBVaW50OEFycmF5KGMpLGU9MDtiLmZvckVhY2goZnVuY3Rpb24oYSl7YT1uZXcgVWludDhBcnJheShhKTtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKylkW2UrK109YVtiXX0pO3JldHVybiBuZXcgTyhkLCEwKX07dmFyIFA9ZnVuY3Rpb24oYSl7aWYoIWEpdGhyb3cgY2EoKTt9LHRiPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGZ1bmN0aW9uKGMsZCl7dmFyIGU7YTp7dHJ5e2U9SlNPTi5wYXJzZShkKX1jYXRjaChoKXtlPW51bGw7YnJlYWsgYX1jPXR5cGVvZiBlO2U9XCJvYmplY3RcIj09YyYmbnVsbCE9ZXx8XCJmdW5jdGlvblwiPT1jP2U6bnVsbH1pZihudWxsPT09ZSllPW51bGw7ZWxzZXtjPXt0eXBlOlwiZmlsZVwifTtkPWIubGVuZ3RoO2Zvcih2YXIgZj0wO2Y8ZDtmKyspe3ZhciBnPWJbZl07Y1tnLmJdPWcuYShjLGVbZy5jXSl9bGIoYyxhKTtlPWN9UChudWxsIT09ZSk7cmV0dXJuIGV9fSxRPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe2I9NDAxPT09RihiKT9uZXcgcihcInVuYXV0aGVudGljYXRlZFwiLFwiVXNlciBpcyBub3QgYXV0aGVudGljYXRlZCwgcGxlYXNlIGF1dGhlbnRpY2F0ZSB1c2luZyBGaXJlYmFzZSBBdXRoZW50aWNhdGlvbiBhbmQgdHJ5IGFnYWluLlwiKTo0MDI9PT1GKGIpP1xubmV3IHIoXCJxdW90YS1leGNlZWRlZFwiLFwiUXVvdGEgZm9yIGJ1Y2tldCAnXCIrYS5idWNrZXQrXCInIGV4Y2VlZGVkLCBwbGVhc2UgdmlldyBxdW90YSBvbiBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vcHJpY2luZy8uXCIpOjQwMz09PUYoYik/bmV3IHIoXCJ1bmF1dGhvcml6ZWRcIixcIlVzZXIgZG9lcyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyAnXCIrYS5wYXRoK1wiJy5cIik6YztiLnNlcnZlclJlc3BvbnNlPWMuc2VydmVyUmVzcG9uc2U7cmV0dXJuIGJ9fSx1Yj1mdW5jdGlvbihhKXt2YXIgYj1RKGEpO3JldHVybiBmdW5jdGlvbihjLGQpe3ZhciBlPWIoYyxkKTs0MDQ9PT1GKGMpJiYoZT1uZXcgcihcIm9iamVjdC1ub3QtZm91bmRcIixcIk9iamVjdCAnXCIrYS5wYXRoK1wiJyBkb2VzIG5vdCBleGlzdC5cIikpO2Uuc2VydmVyUmVzcG9uc2U9ZC5zZXJ2ZXJSZXNwb25zZTtyZXR1cm4gZX19LHZiPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10YShiKTthPW5ldyB3KHErXCIvdjBcIitkLFwiR0VUXCIsXG50YihhLGMpLGEuYyk7YS5hPXViKGIpO3JldHVybiBhfSx3Yj1mdW5jdGlvbihhLGIpe3ZhciBjPXRhKGIpO2E9bmV3IHcocStcIi92MFwiK2MsXCJERUxFVEVcIixmdW5jdGlvbigpe30sYS5jKTthLmM9WzIwMCwyMDRdO2EuYT11YihiKTtyZXR1cm4gYX0seGI9ZnVuY3Rpb24oYSxiLGMpe2M9Yz9oYShjKTp7fTtjLmZ1bGxQYXRoPWEucGF0aDtjLnNpemU9Yi5hO2MuY29udGVudFR5cGV8fChhPWImJmIudHlwZSgpfHxcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLGMuY29udGVudFR5cGU9YSk7cmV0dXJuIGN9LHliPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9XCIvYi9cIitlbmNvZGVVUklDb21wb25lbnQoYi5idWNrZXQpK1wiL29cIixnPXtcIlgtR29vZy1VcGxvYWQtUHJvdG9jb2xcIjpcIm11bHRpcGFydFwifSxoO2g9XCJcIjtmb3IodmFyIG49MDsyPm47bisrKWgrPU1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zbGljZSgyKTtnW1wiQ29udGVudC1UeXBlXCJdPVwibXVsdGlwYXJ0L3JlbGF0ZWQ7IGJvdW5kYXJ5PVwiK1xuaDtlPXhiKGIsZCxlKTtuPW1iKGUsYyk7ZD1zYihcIi0tXCIraCtcIlxcclxcbkNvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFxcclxcblxcclxcblwiK24rXCJcXHJcXG4tLVwiK2grXCJcXHJcXG5Db250ZW50LVR5cGU6IFwiK2UuY29udGVudFR5cGUrXCJcXHJcXG5cXHJcXG5cIixkLFwiXFxyXFxuLS1cIitoK1wiLS1cIik7aWYobnVsbD09PWQpdGhyb3cgZWEoKTthPW5ldyB3KHErXCIvdjBcIitmLFwiUE9TVFwiLHRiKGEsYyksYS5iKTthLmI9e25hbWU6ZS5mdWxsUGF0aH07YS5oZWFkZXJzPWc7YS5ib2R5PWQuaTthLmE9UShiKTtyZXR1cm4gYX0semI9ZnVuY3Rpb24oYSxiLGMsZCl7dGhpcy5hPWE7dGhpcy5iPWI7dGhpcy5jPSEhYzt0aGlzLmY9ZHx8bnVsbH0sQWI9ZnVuY3Rpb24oYSxiKXt2YXIgYzt0cnl7Yz1hLmEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJYLUdvb2ctVXBsb2FkLVN0YXR1c1wiKX1jYXRjaChkKXtQKCExKX1QKHAoYnx8W1wiYWN0aXZlXCJdLGMpKTtyZXR1cm4gY30sQmI9ZnVuY3Rpb24oYSxcbmIsYyxkLGUpe3ZhciBmPVwiL2IvXCIrZW5jb2RlVVJJQ29tcG9uZW50KGIuYnVja2V0KStcIi9vXCIsZz14YihiLGQsZSk7ZT17bmFtZTpnLmZ1bGxQYXRofTtmPXErXCIvdjBcIitmO2Q9e1wiWC1Hb29nLVVwbG9hZC1Qcm90b2NvbFwiOlwicmVzdW1hYmxlXCIsXCJYLUdvb2ctVXBsb2FkLUNvbW1hbmRcIjpcInN0YXJ0XCIsXCJYLUdvb2ctVXBsb2FkLUhlYWRlci1Db250ZW50LUxlbmd0aFwiOmQuYSxcIlgtR29vZy1VcGxvYWQtSGVhZGVyLUNvbnRlbnQtVHlwZVwiOmcuY29udGVudFR5cGUsXCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIn07Yz1tYihnLGMpO2E9bmV3IHcoZixcIlBPU1RcIixmdW5jdGlvbihhKXtBYihhKTt2YXIgYjt0cnl7Yj1hLmEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJYLUdvb2ctVXBsb2FkLVVSTFwiKX1jYXRjaChCKXtQKCExKX1QKG5hKGIpKTtyZXR1cm4gYn0sYS5iKTthLmI9ZTthLmhlYWRlcnM9ZDthLmJvZHk9YzthLmE9UShiKTtyZXR1cm4gYX0sQ2I9XG5mdW5jdGlvbihhLGIsYyxkKXthPW5ldyB3KGMsXCJQT1NUXCIsZnVuY3Rpb24oYSl7dmFyIGI9QWIoYSxbXCJhY3RpdmVcIixcImZpbmFsXCJdKSxjO3RyeXtjPWEuYS5nZXRSZXNwb25zZUhlYWRlcihcIlgtR29vZy1VcGxvYWQtU2l6ZS1SZWNlaXZlZFwiKX1jYXRjaChoKXtQKCExKX1hPWM7aXNGaW5pdGUoYSkmJihhPVN0cmluZyhhKSk7YT1cInN0cmluZ1wiPT10eXBlb2YgYT8vXlxccyotPzB4L2kudGVzdChhKT9wYXJzZUludChhLDE2KTpwYXJzZUludChhLDEwKTpOYU47UCghaXNOYU4oYSkpO3JldHVybiBuZXcgemIoYSxkLmEsXCJmaW5hbFwiPT09Yil9LGEuYik7YS5oZWFkZXJzPXtcIlgtR29vZy1VcGxvYWQtQ29tbWFuZFwiOlwicXVlcnlcIn07YS5hPVEoYik7YS5mPSExO3JldHVybiBhfSxEYj1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD1uZXcgemIoMCwwKTtnPyhoLmE9Zy5hLGguYj1nLmIpOihoLmE9MCxoLmI9ZC5hKTtpZihkLmEhPT1oLmIpdGhyb3cgbmV3IHIoXCJzZXJ2ZXItZmlsZS13cm9uZy1zaXplXCIsXG5cIlNlcnZlciByZWNvcmRlZCBpbmNvcnJlY3QgdXBsb2FkIGZpbGUgc2l6ZSwgcGxlYXNlIHJldHJ5IHRoZSB1cGxvYWQuXCIpO3ZhciBuPWc9aC5iLWguYTswPGUmJihuPU1hdGgubWluKG4sZSkpO3ZhciBCPWguYTtlPXtcIlgtR29vZy1VcGxvYWQtQ29tbWFuZFwiOm49PT1nP1widXBsb2FkLCBmaW5hbGl6ZVwiOlwidXBsb2FkXCIsXCJYLUdvb2ctVXBsb2FkLU9mZnNldFwiOmguYX07Zz1kLnNsaWNlKEIsQituKTtpZihudWxsPT09Zyl0aHJvdyBlYSgpO2M9bmV3IHcoYyxcIlBPU1RcIixmdW5jdGlvbihhLGMpe3ZhciBlPUFiKGEsW1wiYWN0aXZlXCIsXCJmaW5hbFwiXSksZz1oLmErbixDPWQuYSx6O1wiZmluYWxcIj09PWU/ej10YihiLGYpKGEsYyk6ej1udWxsO3JldHVybiBuZXcgemIoZyxDLFwiZmluYWxcIj09PWUseil9LGIuYik7Yy5oZWFkZXJzPWU7Yy5ib2R5PWcuaTtjLmw9bnVsbDtjLmE9UShhKTtjLmY9ITE7cmV0dXJuIGN9O3ZhciBUPWZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLkw9YTt0aGlzLmM9Yjt0aGlzLmw9Yzt0aGlzLmY9ZTt0aGlzLmg9Znx8bnVsbDt0aGlzLnM9ZDt0aGlzLm09MDt0aGlzLkQ9dGhpcy51PSExO3RoaXMuQj1bXTt0aGlzLlM9MjYyMTQ0PHRoaXMuZi5hO3RoaXMuYj1cInJ1bm5pbmdcIjt0aGlzLmE9dGhpcy52PXRoaXMuZz1udWxsO3RoaXMuaj0xO3ZhciBnPXRoaXM7dGhpcy5GPWZ1bmN0aW9uKGEpe2cuYT1udWxsO2cuaj0xO1wic3RvcmFnZS9jYW5jZWxlZFwiPT09YS5jb2RlPyhnLnU9ITAsUihnKSk6KGcuZz1hLFMoZyxcImVycm9yXCIpKX07dGhpcy5QPWZ1bmN0aW9uKGEpe2cuYT1udWxsO1wic3RvcmFnZS9jYW5jZWxlZFwiPT09YS5jb2RlP1IoZyk6KGcuZz1hLFMoZyxcImVycm9yXCIpKX07dGhpcy5BPXRoaXMubz1udWxsO3RoaXMuQz1rYShmdW5jdGlvbihhLGIpe2cubz1hO2cuQT1iO0ViKGcpfSk7dGhpcy5DLnRoZW4obnVsbCxmdW5jdGlvbigpe30pfSxFYj1mdW5jdGlvbihhKXtcInJ1bm5pbmdcIj09PVxuYS5iJiZudWxsPT09YS5hJiYoYS5TP251bGw9PT1hLnY/RmIoYSk6YS51P0diKGEpOmEuRD9IYihhKTpJYihhKTpKYihhKSl9LFU9ZnVuY3Rpb24oYSxiKXtVYShhLmMpLnRoZW4oZnVuY3Rpb24oYyl7c3dpdGNoKGEuYil7Y2FzZSBcInJ1bm5pbmdcIjpiKGMpO2JyZWFrO2Nhc2UgXCJjYW5jZWxpbmdcIjpTKGEsXCJjYW5jZWxlZFwiKTticmVhaztjYXNlIFwicGF1c2luZ1wiOlMoYSxcInBhdXNlZFwiKX19KX0sRmI9ZnVuY3Rpb24oYSl7VShhLGZ1bmN0aW9uKGIpe3ZhciBjPUJiKGEuYyxhLmwsYS5zLGEuZixhLmgpO2EuYT1JKGEuYyxjLGIpO2EuYS5hKCkudGhlbihmdW5jdGlvbihiKXthLmE9bnVsbDthLnY9YjthLnU9ITE7UihhKX0sdGhpcy5GKX0pfSxHYj1mdW5jdGlvbihhKXt2YXIgYj1hLnY7VShhLGZ1bmN0aW9uKGMpe3ZhciBkPUNiKGEuYyxhLmwsYixhLmYpO2EuYT1JKGEuYyxkLGMpO2EuYS5hKCkudGhlbihmdW5jdGlvbihiKXthLmE9bnVsbDtLYihhLGIuYSk7YS51PSExO2IuYyYmKGEuRD1cbiEwKTtSKGEpfSxhLkYpfSl9LEliPWZ1bmN0aW9uKGEpe3ZhciBiPTI2MjE0NCphLmosYz1uZXcgemIoYS5tLGEuZi5hKSxkPWEudjtVKGEsZnVuY3Rpb24oZSl7dmFyIGY7dHJ5e2Y9RGIoYS5sLGEuYyxkLGEuZixiLGEucyxjKX1jYXRjaChnKXthLmc9ZztTKGEsXCJlcnJvclwiKTtyZXR1cm59YS5hPUkoYS5jLGYsZSk7YS5hLmEoKS50aGVuKGZ1bmN0aW9uKGIpezMzNTU0NDMyPjI2MjE0NCphLmomJihhLmoqPTIpO2EuYT1udWxsO0tiKGEsYi5hKTtiLmM/KGEuaD1iLmYsUyhhLFwic3VjY2Vzc1wiKSk6UihhKX0sYS5GKX0pfSxIYj1mdW5jdGlvbihhKXtVKGEsZnVuY3Rpb24oYil7dmFyIGM9dmIoYS5jLGEubCxhLnMpO2EuYT1JKGEuYyxjLGIpO2EuYS5hKCkudGhlbihmdW5jdGlvbihiKXthLmE9bnVsbDthLmg9YjtTKGEsXCJzdWNjZXNzXCIpfSxhLlApfSl9LEpiPWZ1bmN0aW9uKGEpe1UoYSxmdW5jdGlvbihiKXt2YXIgYz15YihhLmMsYS5sLGEucyxhLmYsYS5oKTthLmE9SShhLmMsYyxcbmIpO2EuYS5hKCkudGhlbihmdW5jdGlvbihiKXthLmE9bnVsbDthLmg9YjtLYihhLGEuZi5hKTtTKGEsXCJzdWNjZXNzXCIpfSxhLkYpfSl9LEtiPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5tO2EubT1iO2EubT5jJiZWKGEpfSxTPWZ1bmN0aW9uKGEsYil7aWYoYS5iIT09Yilzd2l0Y2goYil7Y2FzZSBcImNhbmNlbGluZ1wiOmEuYj1iO251bGwhPT1hLmEmJmEuYS5jYW5jZWwoKTticmVhaztjYXNlIFwicGF1c2luZ1wiOmEuYj1iO251bGwhPT1hLmEmJmEuYS5jYW5jZWwoKTticmVhaztjYXNlIFwicnVubmluZ1wiOnZhciBjPVwicGF1c2VkXCI9PT1hLmI7YS5iPWI7YyYmKFYoYSksRWIoYSkpO2JyZWFrO2Nhc2UgXCJwYXVzZWRcIjphLmI9YjtWKGEpO2JyZWFrO2Nhc2UgXCJjYW5jZWxlZFwiOmEuZz1kYSgpO2EuYj1iO1YoYSk7YnJlYWs7Y2FzZSBcImVycm9yXCI6YS5iPWI7VihhKTticmVhaztjYXNlIFwic3VjY2Vzc1wiOmEuYj1iLFYoYSl9fSxSPWZ1bmN0aW9uKGEpe3N3aXRjaChhLmIpe2Nhc2UgXCJwYXVzaW5nXCI6UyhhLFxuXCJwYXVzZWRcIik7YnJlYWs7Y2FzZSBcImNhbmNlbGluZ1wiOlMoYSxcImNhbmNlbGVkXCIpO2JyZWFrO2Nhc2UgXCJydW5uaW5nXCI6RWIoYSl9fTtULnByb3RvdHlwZS53PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBHKHRoaXMubSx0aGlzLmYuYSxtYSh0aGlzLmIpLHRoaXMuaCx0aGlzLHRoaXMuTCl9O1xuVC5wcm90b3R5cGUuTT1mdW5jdGlvbihhLGIsYyxkKXtmdW5jdGlvbiBlKGEpe3RyeXtnKGEpO3JldHVybn1jYXRjaCh6KXt9dHJ5e2lmKGgoYSksIShtKGEubmV4dCl8fG0oYS5lcnJvcil8fG0oYS5jb21wbGV0ZSkpKXRocm93XCJcIjt9Y2F0Y2goeil7dGhyb3dcIkV4cGVjdGVkIGEgZnVuY3Rpb24gb3IgYW4gT2JqZWN0IHdpdGggb25lIG9mIGBuZXh0YCwgYGVycm9yYCwgYGNvbXBsZXRlYCBwcm9wZXJ0aWVzLlwiO319ZnVuY3Rpb24gZihhKXtyZXR1cm4gZnVuY3Rpb24oYixjLGQpe251bGwhPT1hJiZLKFwib25cIixhLGFyZ3VtZW50cyk7dmFyIGU9bmV3IHZhKGIsYyxkKTtMYihuLGUpO3JldHVybiBmdW5jdGlvbigpe3ZhciBhPW4uQixiPWEuaW5kZXhPZihlKTstMSE9PWImJmEuc3BsaWNlKGIsMSl9fX12YXIgZz1OKCkuYSxoPXJiKG51bGwsITApLmE7SyhcIm9uXCIsW00oZnVuY3Rpb24oKXtpZihcInN0YXRlX2NoYW5nZWRcIiE9PWEpdGhyb3dcIkV4cGVjdGVkIG9uZSBvZiB0aGUgZXZlbnQgdHlwZXM6IFtzdGF0ZV9jaGFuZ2VkXS5cIjtcbn0pLHJiKGUsITApLE4oKSxOKCldLGFyZ3VtZW50cyk7dmFyIG49dGhpcyxCPVtyYihmdW5jdGlvbihhKXtpZihudWxsPT09YSl0aHJvd1wiRXhwZWN0ZWQgYSBmdW5jdGlvbiBvciBhbiBPYmplY3Qgd2l0aCBvbmUgb2YgYG5leHRgLCBgZXJyb3JgLCBgY29tcGxldGVgIHByb3BlcnRpZXMuXCI7ZShhKX0pLE4oKSxOKCldO3JldHVybiBtKGIpfHxtKGMpfHxtKGQpP2YobnVsbCkoYixjLGQpOmYoQil9O1QucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5DLnRoZW4oYSxiKX07XG52YXIgTGI9ZnVuY3Rpb24oYSxiKXthLkIucHVzaChiKTtNYihhLGIpfSxWPWZ1bmN0aW9uKGEpe05iKGEpO0FycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEuQikuZm9yRWFjaChmdW5jdGlvbihiKXtNYihhLGIpfSl9LE5iPWZ1bmN0aW9uKGEpe2lmKG51bGwhPT1hLm8pe3ZhciBiPSEwO3N3aXRjaChtYShhLmIpKXtjYXNlIFwic3VjY2Vzc1wiOkEoYS5vLmJpbmQobnVsbCxhLncoKSkpKCk7YnJlYWs7Y2FzZSBcImNhbmNlbGVkXCI6Y2FzZSBcImVycm9yXCI6QShhLkEuYmluZChudWxsLGEuZykpKCk7YnJlYWs7ZGVmYXVsdDpiPSExfWImJihhLm89bnVsbCxhLkE9bnVsbCl9fSxNYj1mdW5jdGlvbihhLGIpe3N3aXRjaChtYShhLmIpKXtjYXNlIFwicnVubmluZ1wiOmNhc2UgXCJwYXVzZWRcIjpudWxsIT09Yi5jJiZBKGIuYy5iaW5kKGIsYS53KCkpKSgpO2JyZWFrO2Nhc2UgXCJzdWNjZXNzXCI6bnVsbCE9PWIuYiYmQShiLmIuYmluZChiKSkoKTticmVhaztjYXNlIFwiY2FuY2VsZWRcIjpjYXNlIFwiZXJyb3JcIjpudWxsIT09XG5iLmEmJkEoYi5hLmJpbmQoYixhLmcpKSgpO2JyZWFrO2RlZmF1bHQ6bnVsbCE9PWIuYSYmQShiLmEuYmluZChiLGEuZykpKCl9fTtULnByb3RvdHlwZS5PPWZ1bmN0aW9uKCl7SyhcInJlc3VtZVwiLFtdLGFyZ3VtZW50cyk7dmFyIGE9XCJwYXVzZWRcIj09PXRoaXMuYnx8XCJwYXVzaW5nXCI9PT10aGlzLmI7YSYmUyh0aGlzLFwicnVubmluZ1wiKTtyZXR1cm4gYX07VC5wcm90b3R5cGUuTj1mdW5jdGlvbigpe0soXCJwYXVzZVwiLFtdLGFyZ3VtZW50cyk7dmFyIGE9XCJydW5uaW5nXCI9PT10aGlzLmI7YSYmUyh0aGlzLFwicGF1c2luZ1wiKTtyZXR1cm4gYX07VC5wcm90b3R5cGUuY2FuY2VsPWZ1bmN0aW9uKCl7SyhcImNhbmNlbFwiLFtdLGFyZ3VtZW50cyk7dmFyIGE9XCJydW5uaW5nXCI9PT10aGlzLmJ8fFwicGF1c2luZ1wiPT09dGhpcy5iO2EmJlModGhpcyxcImNhbmNlbGluZ1wiKTtyZXR1cm4gYX07dmFyIFc9ZnVuY3Rpb24oYSxiKXt0aGlzLmI9YTtpZihiKXRoaXMuYT1iIGluc3RhbmNlb2YgRD9iOnVhKGIpO2Vsc2UgaWYoYT1hLmJ1Y2tldCgpLG51bGwhPT1hKXRoaXMuYT1uZXcgRChhLFwiXCIpO2Vsc2UgdGhyb3cgbmV3IHIoXCJuby1kZWZhdWx0LWJ1Y2tldFwiLFwiTm8gZGVmYXVsdCBidWNrZXQgZm91bmQuIERpZCB5b3Ugc2V0IHRoZSAnc3RvcmFnZUJ1Y2tldCcgcHJvcGVydHkgd2hlbiBpbml0aWFsaXppbmcgdGhlIGFwcD9cIik7fTtXLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe0soXCJ0b1N0cmluZ1wiLFtdLGFyZ3VtZW50cyk7cmV0dXJuXCJnczovL1wiK3RoaXMuYS5idWNrZXQrXCIvXCIrdGhpcy5hLnBhdGh9O3ZhciBPYj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgVyhhLGIpfTtrPVcucHJvdG90eXBlO1xuay5IPWZ1bmN0aW9uKGEpe0soXCJjaGlsZFwiLFtNKCldLGFyZ3VtZW50cyk7dmFyIGI9aWEodGhpcy5hLnBhdGgsYSk7cmV0dXJuIE9iKHRoaXMuYixuZXcgRCh0aGlzLmEuYnVja2V0LGIpKX07ay5rYT1mdW5jdGlvbigpe3ZhciBhO2E9dGhpcy5hLnBhdGg7aWYoMD09YS5sZW5ndGgpYT1udWxsO2Vsc2V7dmFyIGI9YS5sYXN0SW5kZXhPZihcIi9cIik7YT0tMT09PWI/XCJcIjphLnNsaWNlKDAsYil9cmV0dXJuIG51bGw9PT1hP251bGw6T2IodGhpcy5iLG5ldyBEKHRoaXMuYS5idWNrZXQsYSkpfTtrLm1hPWZ1bmN0aW9uKCl7cmV0dXJuIE9iKHRoaXMuYixuZXcgRCh0aGlzLmEuYnVja2V0LFwiXCIpKX07ay5VPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYS5idWNrZXR9O2suZmE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hLnBhdGh9O2suamE9ZnVuY3Rpb24oKXtyZXR1cm4gamEodGhpcy5hLnBhdGgpfTtrLm9hPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYi5sfTtcbmsuWj1mdW5jdGlvbihhLGIpe0soXCJwdXRcIixbcGIoKSxuZXcgTChuYiwhMCldLGFyZ3VtZW50cyk7WCh0aGlzLFwicHV0XCIpO3JldHVybiBuZXcgVCh0aGlzLHRoaXMuYix0aGlzLmEsa2IoKSxuZXcgTyhhKSxiKX07ay4kPWZ1bmN0aW9uKGEsYixjKXtLKFwicHV0U3RyaW5nXCIsW00oKSxNKHdhLCEwKSxuZXcgTChuYiwhMCldLGFyZ3VtZW50cyk7WCh0aGlzLFwicHV0U3RyaW5nXCIpO3ZhciBkPUJhKHkoYik/YjpcInJhd1wiLGEpLGU9Yz9oYShjKTp7fTsheShlLmNvbnRlbnRUeXBlKSYmeShkLmEpJiYoZS5jb250ZW50VHlwZT1kLmEpO3JldHVybiBuZXcgVCh0aGlzLHRoaXMuYix0aGlzLmEsa2IoKSxuZXcgTyhkLmIsITApLGUpfTtrLlg9ZnVuY3Rpb24oKXtLKFwiZGVsZXRlXCIsW10sYXJndW1lbnRzKTtYKHRoaXMsXCJkZWxldGVcIik7dmFyIGE9dGhpcztyZXR1cm4gVWEodGhpcy5iKS50aGVuKGZ1bmN0aW9uKGIpe3ZhciBjPXdiKGEuYixhLmEpO3JldHVybiBJKGEuYixjLGIpLmEoKX0pfTtcbmsuST1mdW5jdGlvbigpe0soXCJnZXRNZXRhZGF0YVwiLFtdLGFyZ3VtZW50cyk7WCh0aGlzLFwiZ2V0TWV0YWRhdGFcIik7dmFyIGE9dGhpcztyZXR1cm4gVWEodGhpcy5iKS50aGVuKGZ1bmN0aW9uKGIpe3ZhciBjPXZiKGEuYixhLmEsa2IoKSk7cmV0dXJuIEkoYS5iLGMsYikuYSgpfSl9O2suYWE9ZnVuY3Rpb24oYSl7SyhcInVwZGF0ZU1ldGFkYXRhXCIsW25ldyBMKG5iLHZvaWQgMCldLGFyZ3VtZW50cyk7WCh0aGlzLFwidXBkYXRlTWV0YWRhdGFcIik7dmFyIGI9dGhpcztyZXR1cm4gVWEodGhpcy5iKS50aGVuKGZ1bmN0aW9uKGMpe3ZhciBkPWIuYixlPWIuYSxmPWEsZz1rYigpLGg9dGEoZSksaD1xK1wiL3YwXCIraCxmPW1iKGYsZyksZD1uZXcgdyhoLFwiUEFUQ0hcIix0YihkLGcpLGQuYyk7ZC5oZWFkZXJzPXtcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwifTtkLmJvZHk9ZjtkLmE9dWIoZSk7cmV0dXJuIEkoYi5iLGQsYykuYSgpfSl9O1xuay5ZPWZ1bmN0aW9uKCl7SyhcImdldERvd25sb2FkVVJMXCIsW10sYXJndW1lbnRzKTtYKHRoaXMsXCJnZXREb3dubG9hZFVSTFwiKTtyZXR1cm4gdGhpcy5JKCkudGhlbihmdW5jdGlvbihhKXthPWEuZG93bmxvYWRVUkxzWzBdO2lmKHkoYSkpcmV0dXJuIGE7dGhyb3cgbmV3IHIoXCJuby1kb3dubG9hZC11cmxcIixcIlRoZSBnaXZlbiBmaWxlIGRvZXMgbm90IGhhdmUgYW55IGRvd25sb2FkIFVSTHMuXCIpO30pfTt2YXIgWD1mdW5jdGlvbihhLGIpe2lmKFwiXCI9PT1hLmEucGF0aCl0aHJvdyBuZXcgcihcImludmFsaWQtcm9vdC1vcGVyYXRpb25cIixcIlRoZSBvcGVyYXRpb24gJ1wiK2IrXCInIGNhbm5vdCBiZSBwZXJmb3JtZWQgb24gYSByb290IHJlZmVyZW5jZSwgY3JlYXRlIGEgbm9uLXJvb3QgcmVmZXJlbmNlIHVzaW5nIGNoaWxkLCBzdWNoIGFzIC5jaGlsZCgnZmlsZS5wbmcnKS5cIik7fTt2YXIgWT1mdW5jdGlvbihhLGIpe3RoaXMuYT1uZXcgVGEoYSxmdW5jdGlvbihhLGIpe3JldHVybiBuZXcgVyhhLGIpfSxOYSx0aGlzLHkoYik/YjpuZXcgT2EpO3RoaXMuYj1hO3RoaXMuYz1uZXcgUGIodGhpcyl9O2s9WS5wcm90b3R5cGU7ay5iYT1mdW5jdGlvbihhKXtLKFwicmVmXCIsW00oZnVuY3Rpb24oYSl7aWYoL15bQS1aYS16XSs6XFwvXFwvLy50ZXN0KGEpKXRocm93XCJFeHBlY3RlZCBjaGlsZCBwYXRoIGJ1dCBnb3QgYSBVUkwsIHVzZSByZWZGcm9tVVJMIGluc3RlYWQuXCI7fSwhMCldLGFyZ3VtZW50cyk7dmFyIGI9bmV3IFcodGhpcy5hKTtyZXR1cm4gbShhKT9iLkgoYSk6Yn07XG5rLmNhPWZ1bmN0aW9uKGEpe0soXCJyZWZGcm9tVVJMXCIsW00oZnVuY3Rpb24oYSl7aWYoIS9eW0EtWmEtel0rOlxcL1xcLy8udGVzdChhKSl0aHJvd1wiRXhwZWN0ZWQgZnVsbCBVUkwgYnV0IGdvdCBhIGNoaWxkIHBhdGgsIHVzZSByZWYgaW5zdGVhZC5cIjt0cnl7dWEoYSl9Y2F0Y2goYyl7dGhyb3dcIkV4cGVjdGVkIHZhbGlkIGZ1bGwgVVJMIGJ1dCBnb3QgYW4gaW52YWxpZCBvbmUuXCI7fX0sITEpXSxhcmd1bWVudHMpO3JldHVybiBuZXcgVyh0aGlzLmEsYSl9O2suaGE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hLmJ9O2suZWE9ZnVuY3Rpb24oYSl7SyhcInNldE1heFVwbG9hZFJldHJ5VGltZVwiLFtxYigpXSxhcmd1bWVudHMpO3RoaXMuYS5iPWF9O2suZ2E9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hLmN9O2suZGE9ZnVuY3Rpb24oYSl7SyhcInNldE1heE9wZXJhdGlvblJldHJ5VGltZVwiLFtxYigpXSxhcmd1bWVudHMpO3RoaXMuYS5jPWF9O2suVD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmJ9O1xuay5SPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY307dmFyIFBiPWZ1bmN0aW9uKGEpe3RoaXMuYT1hfTtQYi5wcm90b3R5cGUuYj1mdW5jdGlvbigpe3ZhciBhPXRoaXMuYS5hO2EuZj0hMDthLmE9bnVsbDtTYShhLmgpfTt2YXIgWj1mdW5jdGlvbihhLGIsYyl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7Z2V0OmN9KX07Vy5wcm90b3R5cGUudG9TdHJpbmc9Vy5wcm90b3R5cGUudG9TdHJpbmc7Vy5wcm90b3R5cGUuY2hpbGQ9Vy5wcm90b3R5cGUuSDtXLnByb3RvdHlwZS5wdXQ9Vy5wcm90b3R5cGUuWjtXLnByb3RvdHlwZS5wdXRTdHJpbmc9Vy5wcm90b3R5cGUuJDtXLnByb3RvdHlwZVtcImRlbGV0ZVwiXT1XLnByb3RvdHlwZS5YO1cucHJvdG90eXBlLmdldE1ldGFkYXRhPVcucHJvdG90eXBlLkk7Vy5wcm90b3R5cGUudXBkYXRlTWV0YWRhdGE9Vy5wcm90b3R5cGUuYWE7Vy5wcm90b3R5cGUuZ2V0RG93bmxvYWRVUkw9Vy5wcm90b3R5cGUuWTtaKFcucHJvdG90eXBlLFwicGFyZW50XCIsVy5wcm90b3R5cGUua2EpO1ooVy5wcm90b3R5cGUsXCJyb290XCIsVy5wcm90b3R5cGUubWEpO1ooVy5wcm90b3R5cGUsXCJidWNrZXRcIixXLnByb3RvdHlwZS5VKTtaKFcucHJvdG90eXBlLFwiZnVsbFBhdGhcIixXLnByb3RvdHlwZS5mYSk7XG5aKFcucHJvdG90eXBlLFwibmFtZVwiLFcucHJvdG90eXBlLmphKTtaKFcucHJvdG90eXBlLFwic3RvcmFnZVwiLFcucHJvdG90eXBlLm9hKTtZLnByb3RvdHlwZS5yZWY9WS5wcm90b3R5cGUuYmE7WS5wcm90b3R5cGUucmVmRnJvbVVSTD1ZLnByb3RvdHlwZS5jYTtaKFkucHJvdG90eXBlLFwibWF4T3BlcmF0aW9uUmV0cnlUaW1lXCIsWS5wcm90b3R5cGUuZ2EpO1kucHJvdG90eXBlLnNldE1heE9wZXJhdGlvblJldHJ5VGltZT1ZLnByb3RvdHlwZS5kYTtaKFkucHJvdG90eXBlLFwibWF4VXBsb2FkUmV0cnlUaW1lXCIsWS5wcm90b3R5cGUuaGEpO1kucHJvdG90eXBlLnNldE1heFVwbG9hZFJldHJ5VGltZT1ZLnByb3RvdHlwZS5lYTtaKFkucHJvdG90eXBlLFwiYXBwXCIsWS5wcm90b3R5cGUuVCk7WihZLnByb3RvdHlwZSxcIklOVEVSTkFMXCIsWS5wcm90b3R5cGUuUik7UGIucHJvdG90eXBlW1wiZGVsZXRlXCJdPVBiLnByb3RvdHlwZS5iO1kucHJvdG90eXBlLmNhcGlfPWZ1bmN0aW9uKGEpe3E9YX07XG5ULnByb3RvdHlwZS5vbj1ULnByb3RvdHlwZS5NO1QucHJvdG90eXBlLnJlc3VtZT1ULnByb3RvdHlwZS5PO1QucHJvdG90eXBlLnBhdXNlPVQucHJvdG90eXBlLk47VC5wcm90b3R5cGUuY2FuY2VsPVQucHJvdG90eXBlLmNhbmNlbDtaKFQucHJvdG90eXBlLFwic25hcHNob3RcIixULnByb3RvdHlwZS53KTtaKEcucHJvdG90eXBlLFwiYnl0ZXNUcmFuc2ZlcnJlZFwiLEcucHJvdG90eXBlLlYpO1ooRy5wcm90b3R5cGUsXCJ0b3RhbEJ5dGVzXCIsRy5wcm90b3R5cGUucWEpO1ooRy5wcm90b3R5cGUsXCJzdGF0ZVwiLEcucHJvdG90eXBlLm5hKTtaKEcucHJvdG90eXBlLFwibWV0YWRhdGFcIixHLnByb3RvdHlwZS5pYSk7WihHLnByb3RvdHlwZSxcImRvd25sb2FkVVJMXCIsRy5wcm90b3R5cGUuVyk7WihHLnByb3RvdHlwZSxcInRhc2tcIixHLnByb3RvdHlwZS5wYSk7WihHLnByb3RvdHlwZSxcInJlZlwiLEcucHJvdG90eXBlLmxhKTtsYS5TVEFURV9DSEFOR0VEPVwic3RhdGVfY2hhbmdlZFwiO1xueC5SVU5OSU5HPVwicnVubmluZ1wiO3guUEFVU0VEPVwicGF1c2VkXCI7eC5TVUNDRVNTPVwic3VjY2Vzc1wiO3guQ0FOQ0VMRUQ9XCJjYW5jZWxlZFwiO3guRVJST1I9XCJlcnJvclwiO0UuUkFXPVwicmF3XCI7RS5CQVNFNjQ9XCJiYXNlNjRcIjtFLkJBU0U2NFVSTD1cImJhc2U2NHVybFwiO0UuREFUQV9VUkw9XCJkYXRhX3VybFwiOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7cmV0dXJuIG5ldyBZKGEpfXZhciBiPXtUYXNrU3RhdGU6eCxUYXNrRXZlbnQ6bGEsU3RyaW5nRm9ybWF0OkUsU3RvcmFnZTpZLFJlZmVyZW5jZTpXfTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGZpcmViYXNlKWZpcmViYXNlLklOVEVSTkFMLnJlZ2lzdGVyU2VydmljZShcInN0b3JhZ2VcIixhLGIpO2Vsc2UgdGhyb3cgRXJyb3IoXCJDYW5ub3QgaW5zdGFsbCBGaXJlYmFzZSBTdG9yYWdlIC0gYmUgc3VyZSB0byBsb2FkIGZpcmViYXNlLWFwcC5qcyBmaXJzdC5cIik7fSkoKTt9KS5jYWxsKHRoaXMpO1xufSkuY2FsbChnbG9iYWwpO1xubW9kdWxlLmV4cG9ydHMgPSBmaXJlYmFzZS5zdG9yYWdlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpcmViYXNlL3N0b3JhZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDE5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnQgVGV4IGZyb20gJy4vVGV4J1xyXG5leHBvcnQgVGV4TWFya3VwIGZyb20gJy4vVGV4TWFya3VwJ1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvTWF0aEpheC9pbmRleC5qcyIsImltcG9ydCB7IHJlZ2lzdGVyVXNlciBhcyByZWdpc3Rlck5ld1VzZXIsIHNpZ25vdXQsIHNpZ25pbiB9IGZyb20gJ2hlbHBlcnMvYXV0aCdcclxuaW1wb3J0IHsgc2F2ZVVzZXIgfSBmcm9tICdoZWxwZXJzL2FwaSdcclxuaW1wb3J0IHsgZm9ybWF0VXNlckRldGFpbHMgfSBmcm9tICdoZWxwZXJzL2Zvcm1hdCdcclxuaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSAnY29uZmlnL2NvbnN0YW50cydcclxuaW1wb3J0IHsgZmV0Y2hVc2VyIH0gZnJvbSAnaGVscGVycy9hcGknXHJcblxyXG5jb25zdCBGRVRDSElOR19VU0VSID0gJ0ZFVENISU5HX1VTRVInXHJcbmNvbnN0IEZFVENISU5HX1VTRVJfU1VDQ0VTUyA9ICdGRVRDSElOR19VU0VSX1NVQ0NFU1MnXHJcbmNvbnN0IEZFVENISU5HX1VTRVJfRkFJTFVSRSA9ICdGRVRDSElOR19VU0VSX0ZBSUxVUkUnXHJcbmNvbnN0IEFVVEhfVVNFUiA9ICdBVVRIX1VTRVInXHJcbmNvbnN0IFVOQVVUSF9VU0VSID0gJ1VOQVVUSF9VU0VSJ1xyXG5cclxuY29uc3QgZmV0Y2hpbmdVc2VyID0gKCkgPT4gKHtcclxuXHR0eXBlOiBGRVRDSElOR19VU0VSLFxyXG59KVxyXG5cclxuY29uc3QgZmV0Y2hpbmdVc2VyU3VjY2VzcyA9ICh1c2VyKSA9PiAoe1xyXG5cdHR5cGU6IEZFVENISU5HX1VTRVJfU1VDQ0VTUyxcclxuXHR1c2VyLFxyXG59KVxyXG5cclxuY29uc3QgZmV0Y2hpbmdVc2VyRmFpbHVyZSA9IChlcnJvcikgPT4ge1xyXG5cdGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcblx0cmV0dXJuIHsgXHJcblx0XHR0eXBlOiBGRVRDSElOR19VU0VSX0ZBSUxVUkUsXHJcblx0XHRlcnJvcjogJ0Vycm9yIEZldGNoaW5nIFVzZXInLFxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgYXV0aFVzZXIgPSAodWlkKSA9Pih7XHJcblx0dHlwZTogQVVUSF9VU0VSLFxyXG5cdHVpZCxcclxufSlcclxuXHJcbmNvbnN0IHVuYXV0aFVzZXIgPSAoKSA9Pih7XHJcblx0dHlwZTogVU5BVVRIX1VTRVIsXHJcbn0pXHJcblxyXG5cclxuXHJcbi8vIFRodW5rc1xyXG5cclxuLypcclxuXHREZXRhaWxzIGNvbWUgZGlyZWN0bHkgZnJvbSBmb3JtIGNvbXBvbmVudCwgZWFjaCBrZXkgdmFsdWUgcGFpciBpcyBhbiBpbnB1dCBvbiB0aGUgZm9ybVxyXG4qL1xyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyID0gKGRldGFpbHMpID0+IChkaXNwYXRjaCkgPT4ge1xyXG5cdGRpc3BhdGNoKGZldGNoaW5nVXNlcigpKVxyXG5cdFxyXG5cdHJldHVybiByZWdpc3Rlck5ld1VzZXIoZGV0YWlscy5lbWFpbCwgZGV0YWlscy5wYXNzd29yZClcclxuXHRcdC50aGVuKHVpZCA9PiBzYXZlVXNlcihmb3JtYXRVc2VyRGV0YWlscyh7IC4uLmRldGFpbHMsIHVpZCB9KSkpXHJcblx0XHQudGhlbih1c2VyID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goZmV0Y2hpbmdVc2VyU3VjY2Vzcyh1c2VyKSlcclxuXHRcdFx0ZGlzcGF0Y2goYXV0aFVzZXIodXNlci51aWQpKVxyXG5cdFx0fSlcclxuXHRcdC5jYXRjaChlcnJvciA9PiBkaXNwYXRjaChmZXRjaGluZ1VzZXJGYWlsdXJlKGVycm9yKSkpXHJcbn1cclxuXHJcbi8vIEtlZXBzIHRoZSBjbGllbnQgYXBwJ3MgYXV0aCBzdGF0ZSBpbiBzeW5jIHdpdGggZmlyZWJhc2VcclxuZXhwb3J0IGNvbnN0IGNoZWNrQXV0aCA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG5cdHJldHVybiBmaXJlYmFzZUF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlciA9PiB7XHJcblx0XHRpZiAodXNlcikge1xyXG5cdFx0XHRjb25zdCB1aWQgPSB1c2VyLnVpZFxyXG5cdFx0XHRkaXNwYXRjaChmZXRjaGluZ1VzZXIoKSlcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBmZXRjaFVzZXIodXNlci51aWQpXHJcblx0XHRcdFx0LnRoZW4odXNlciA9PiB7XHJcblx0XHRcdFx0XHRkaXNwYXRjaChmZXRjaGluZ1VzZXJTdWNjZXNzKHVzZXIpKVxyXG5cdFx0XHRcdFx0ZGlzcGF0Y2goYXV0aFVzZXIodXNlci5pbmZvLnVpZCkpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goZXJyb3IgPT4gZGlzcGF0Y2goZmV0Y2hpbmdVc2VyRmFpbHVyZShlcnJvcikpKVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaWdub3V0VXNlciA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG5cdHJldHVybiBzaWdub3V0KClcclxuXHRcdC50aGVuKCgpID0+IGRpc3BhdGNoKHVuYXV0aFVzZXIoKSkpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaWduaW5Vc2VyID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcblx0ZGlzcGF0Y2goZmV0Y2hpbmdVc2VyKCkpXHJcblx0XHJcblx0cmV0dXJuIHNpZ25pbihlbWFpbCwgcGFzc3dvcmQpXHJcblx0XHQudGhlbih1c2VyID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goZmV0Y2hpbmdVc2VyU3VjY2Vzcyh1c2VyKSlcclxuXHRcdFx0ZGlzcGF0Y2goYXV0aFVzZXIodXNlci5pbmZvLnVpZCkpXHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGVycm9yID0+IGRpc3BhdGNoKGZldGNoaW5nVXNlckZhaWx1cmUoZXJyb3IpKSlcclxufVxyXG5cclxuLy8gUmVkdWNlcnNcclxuY29uc3QgaW5pdGlhbFVzZXJzU3RhdGUgPSB7XHJcblx0aXNGZXRjaGluZzogZmFsc2UsXHJcblx0ZXJyb3I6ICcnLFxyXG5cdGF1dGhlZElkOiBudWxsLFxyXG5cdGlzQXV0aGVkOiBmYWxzZSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlcnMoc3RhdGUgPSBpbml0aWFsVXNlcnNTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEZFVENISU5HX1VTRVI6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0aXNGZXRjaGluZzogdHJ1ZSxcclxuXHRcdFx0XHRlcnJvcjogJycsXHJcblx0XHRcdH1cclxuXHRcdGNhc2UgRkVUQ0hJTkdfVVNFUl9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGlzRmV0Y2hpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGVycm9yOiAnJyxcclxuXHRcdFx0XHRbYWN0aW9uLnVzZXIuaW5mby51aWRdOiB1c2VyKHN0YXRlW2FjdGlvbi51c2VyLmluZm8udWlkXSwgYWN0aW9uKSxcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBGRVRDSElOR19VU0VSX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0aXNGZXRjaGluZzogZmFsc2UsXHJcblx0XHRcdFx0ZXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBBVVRIX1VTRVI6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YXV0aGVkSWQ6IGFjdGlvbi51aWQsXHJcblx0XHRcdFx0aXNBdXRoZWQ6IHRydWUsXHJcblx0XHRcdH1cclxuXHRcdGNhc2UgVU5BVVRIX1VTRVI6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YXV0aGVkSWQ6IG51bGwsXHJcblx0XHRcdFx0aXNBdXRoZWQ6IGZhbHNlLFxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxVc2VyU3RhdGUgPSB7XHJcblx0aW5mbzoge30sXHJcblx0YWRtaW46IGZhbHNlLFxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VyKHN0YXRlID0gaW5pdGlhbFVzZXJTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEZFVENISU5HX1VTRVJfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi5hY3Rpb24udXNlcixcclxuXHRcdFx0fVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JlZHV4L21vZHVsZXMvdXNlcnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJOEFBQUNVQ0FNQUFBQ2RySXI1QUFBQjlWQk1WRVgvLy8vWTVPNnN5TngxcWNvMWpidjErUHFUdWRQKy92NEFBQUFBaExiRDErVlBsOERzOGZiaTR1SmpvTVUxTlRXNDBPR0VzYzdPM3VtZ3dkakR3OFBpNi9MMTlmV2dvS0RzN096WTJOak96czVqWTJPVGs1TlBUMDkxZFhXc3JLeisvdmVFaElUOS92NEFQVlQrL3Z2Ky92cTR1TGpsdkl6bCt2Mysvdk5wZlpyc3QzUHMvdjVwaGJ6UCsvNFJiN2VybTM4UlQ2TFBrRWZkL2Y3ZG9sc0FYYXpsL3Y0QU1aRGxyR2YrKzlPV1BqNklpSWpwL2Y1Z2tjUHcvdjdkb2x3b2ZjSCsvdno5OE5IcTA2eVhZRE9LTVdOR1Jwejk4dHVEaXBXODROLys5OHBQbk5XemZVYjUvdjdZL1A3My92N1c0Zkw4Mkp3dWlzcTB2dUQrL3VxOGRqNm40UGdnT0lMNi92N3d3WUl2aTdrdlNWbVd5K3p0L2Y0QVdud0FjWnM0UVhXbjJQRGJ5OVk2TTJIMHk0emxzNS8rL3ZiKy92bXo1Zm4rL2VqWXBtaDl3ZXZzL2Y3eTRjL2hwMkwrL3V3ekRCRkduTXVtajFlOWtwdDl3ZXpCZlQ4TVJweWNSa0hZL1B2MC92NzQvZDJDd2V3b2Q3eW5XRWZncXFMdnZJcTk4UHlFdjhXbDJQU3BwTTFHVjN5MmlsT3M1ZlA5NEtjNmtNNVlFV2orL05iMi92NmMyUGFpM1BkaEVUald4WlJnUVdkWEVUcjk1S3dnYUs3NTRjZGdvTktzaWwzOTRhZisvdjJRTVZmKys4Lzk2Ylp3TG5ad3QrVzNjRXEzN1B2OTdMeDN2T2gzTG5EKy9lYisvZU95NlBxeWFFcFJGUEZvQUFBRm8wbEVRVlI0MnUzYlZYZmpPaEFBWU11eU5DT3o0OFJwa25KMzl6SXpNek16TXpNek16UHovWjMzb1cyMllGdGpTSzYzeDNyYXM5MzZmSlpHNE5Hc1laUnFRR3JHMUZycjJRYzk5ejc0K1BzdnZ2SVF3RXd6UExzZWVlZlo1MTk3Q2FDZk5HUzgzdnZnM1ZkZkJ4Z05HdUw1OExrMzNub0JBQmNhNG5uc21iZmZCQmpnVWtNODl6MzY4c01BZlF5U1puaDIzM00vQU13aGRwdmhPZk9xNndHR2lEaHFndWVFRTA4NUdRQ1c1bkFXdmVhc3p3c0p3bURZcFAwQ0c3Wi83U3VlRXEzMXRKN1cwM3BhejVxbmpvZTBudGJUZW5hOHAyZWIzRmZyemVkeDJQdmZQRzRZV2NyaXNkbGhqSzB3eHBnWmMwc3BIcnJUOXdqYlYxWms5N2FObDJ0TFMvbWhtS3JIbFpZbE81bngwNUdXa214cUhsY3FaMnNINE5idWN4Um5VL0VJcVJ5Yk1MOFlWOUtkdk1lMkxKczQzMjNITWlmc0VWekZncnorQ0ZQNTdpUTl6SEpZb2ZXdzU2ZjJaazJlVUVXaTRQb3NwSW9uNVpIS0xMRmYyRXFLaVhpa3NrdnRYOHp5eFFRODBtSWw5OU5lTVpCQjVQVEs3dS9lVFRjV0FSbTB3ZXFVUFc5NFFiZG55WG85dHJKTG4zK0NMZ0FyTU1zSW5wNzJjYWg5b1U1OUh1SHdzdWRETHhqSG4xdWJKN0pFU1k4WGRPbnZSUFYwQ0gyTjJiR3p2Z3lwc0I2UGNLTFM1L21OT2ZMWUVyVjRUTXJJanoyTFo1MS85dW1uYm82ZHRmY2lUbnFOUjVBT01XUFBlUmRmZDhIbHk1dGpaenpIM0JvOGt0VE5ZOC9WMTF4MENRQUF6QVRiYm53Y1dkMUQ2NTY5bmd2UHVYYjFENG1Yc2dpNWxUMG1MUXJIbml2T3ZSUUF3SnRQKzFla0RzcjNPTFNGZnQyemVOcVZsNlhGenRxQmp2SnlSdjdhNHhieVFGYnNyQTYrc2l0NnBGOG1uNUI0V1kvakZUMVdXTnpqOVhPNlcxVHlVSWRyb3ljamRsWWJZY0R5UERGeHVEWjRadkk0RUVXVlBINWMzRFBNL1dTeUtubklweWpVeDg3YUx1OVc4REJxK0t4N2NtT0grSVpHWHZJQUNubjBIUEROQ2g2VEYvTU1odnF6WmxUQkU4a2lIbDNzRUY4eHg4UE5BaDdDWUFHQTZkQThTYmVhWjRiR0FhWlMvbktZYlBGNHMwRy93bTdoQllnbkRhRzBad0ZuOTlaN0djUCtDTlByaVJReEpibUVpT2lWOThBSWNhN2ZYUzNTTXpDenFSV3N1NjJvN0orTitna0FHRERvejZXL0hyVi9GaEN6Q3JaSS9aTUVHUFFIeVlaNEhpN05sMXE4WUhHL0F3OC9aUDgrenRPR0s5MHpPOS9kTnQrVGN2UHI5ei8vK2Z2ZlA1Yko5enVkMVA0QitQN3JiNy82N1BOUHFxNC91dzQ2NHFqRm93ODdtT3pKWGcrLysrS2JqelRyb2Y1NGVjQ1J4eHk3Ky9qakRxM0I4K01QSDJ2M0w3OTJEODg4VVgzNTZkTTZUK3BnVnhzdkp5c0VIbmpxeVNmdXZDWGYwMVBhNjc2ZmZ2N3RyMTkvSWNlenlGaEN6cmpoOWp2dXZ1dm1aYzM1VUovdFg1M3Y1UHRUcHYvQXlQTnc2b0dENnRGSFpLNG5kR3IyRUQ0UThqeUVBQ3JrY1FrZkNFWU42UVNxaC9DNWsrK0puVm85dnF6b2NZbGJQTlkyWEpyOEQ0OXE5RWhLYitkN2lFbElra2VRenIrYWZDWXRDVW55MEhKL0dnK3RnNURVUGFUUEZWMCtuSktlSjNtSUNYcWRwME9aWWtpWlhMU3ZKKzE5Q25kcThYQmlia3ZyY1FuanJ2ZUUxSThWbzQ1SGFUMDlpNXBxSTl4WGNtMGs2anpDcDJZaUtSN2grQlU5OU90SzB2Mnk5c0phNDRucDE3bTArM2RieVFvZVd4V29jcUhWSjJoQW1QKzdSZXFTaVBVYitTQ3MwTGZsUFBtUHpmRklWYXhxaTF6LzA4bXBVOG4waUVnVnJKQ2kxMGYxbk15YUd5eitLOVU5SUtLTWNyWXNqNmw0NFlLMlF2VitZVVpGVzZxSCthcEV3Vit4K2tNM1NuM2xGSThyRlM5VDdWdTBYcFE1U3ZhMEhqZTFqSE1TSGdEYlVkek85WFNpc3BweTljYWRTRzB1OE4zb1lmRjI3NFE5QUc3b0t4V1pUR3oyc0RDeWxCTlhxY2d1WGEvdTJ0SlJ5dUtSYVpxM21xWVpjVWNwSjZwWUhsNnRubCt3MEpTYzg5czQ1NUVaTWdHVlcvdi9IVnBQNjJrOXJhZjF0SjdXMDNwYXp3NzNqQWFZOVBjMHg5TkhEREJwam1jR0VXZWJGRDhqeEVHVFBGMmNhOVQ4bXFsdnVPcVo3OEdlWm5tbzVWclQ4aXcwYkgyR25ldjVEKyswU1JnSW05SzhBQUFBQUVsRlRrU3VRbUNDXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvQ29vcmRpbmF0ZUdlb21ldHJ5L0NpcmNsZXNFbGxpcHNlc0FuZEh5cGVyYm9sYXMvQ2lyY2xlQXRPcmlnaW4ucG5nXG4vLyBtb2R1bGUgaWQgPSAzMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJ2NvbmZpZy9yb3V0ZXMnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXHJcbmltcG9ydCAqIGFzIHJlZHVjZXJzIGZyb20gJ3JlZHV4L21vZHVsZXMnXHJcblxyXG5pbXBvcnQgJ3N0eWxlcy9zdHlsZXMuc2NzcydcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSwgY29tcG9zZShcclxuXHRhcHBseU1pZGRsZXdhcmUodGh1bmspLFxyXG5cdHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbiA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpIDogKGYpID0+IGZcclxuKSlcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuXHRcdHtyb3V0ZXN9XHJcblx0PC9Qcm92aWRlcj4sXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpXHJcbilcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qc3giLCJ2YXIgZmlyZWJhc2UgPSAoZnVuY3Rpb24oKXtcbi8qISBAbGljZW5zZSBGaXJlYmFzZSB2My42LjVcbiAgICBCdWlsZDogMy42LjUtcmMuMVxuICAgIFRlcm1zOiBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vdGVybXMvICovXG52YXIgZmlyZWJhc2UgPSBudWxsOyAoZnVuY3Rpb24oKSB7IHZhciBhYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oYSxiLGMpe2lmKGMuZ2V0fHxjLnNldCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRVMzIGRvZXMgbm90IHN1cHBvcnQgZ2V0dGVycyBhbmQgc2V0dGVycy5cIik7YSE9QXJyYXkucHJvdG90eXBlJiZhIT1PYmplY3QucHJvdG90eXBlJiYoYVtiXT1jLnZhbHVlKX0saD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3c9PT10aGlzP3RoaXM6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmbnVsbCE9Z2xvYmFsP2dsb2JhbDp0aGlzLGw9ZnVuY3Rpb24oKXtsPWZ1bmN0aW9uKCl7fTtoLlN5bWJvbHx8KGguU3ltYm9sPWJhKX0sY2E9MCxiYT1mdW5jdGlvbihhKXtyZXR1cm5cImpzY29tcF9zeW1ib2xfXCIrKGF8fFwiXCIpK2NhKyt9LG49ZnVuY3Rpb24oKXtsKCk7dmFyIGE9aC5TeW1ib2wuaXRlcmF0b3I7YXx8KGE9aC5TeW1ib2wuaXRlcmF0b3I9XG5oLlN5bWJvbChcIml0ZXJhdG9yXCIpKTtcImZ1bmN0aW9uXCIhPXR5cGVvZiBBcnJheS5wcm90b3R5cGVbYV0mJmFhKEFycmF5LnByb3RvdHlwZSxhLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gbSh0aGlzKX19KTtuPWZ1bmN0aW9uKCl7fX0sbT1mdW5jdGlvbihhKXt2YXIgYj0wO3JldHVybiBkYShmdW5jdGlvbigpe3JldHVybiBiPGEubGVuZ3RoP3tkb25lOiExLHZhbHVlOmFbYisrXX06e2RvbmU6ITB9fSl9LGRhPWZ1bmN0aW9uKGEpe24oKTthPXtuZXh0OmF9O2FbaC5TeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3JldHVybiBhfSxxPXRoaXMscj1mdW5jdGlvbigpe30sdD1mdW5jdGlvbihhKXt2YXIgYj10eXBlb2YgYTtpZihcIm9iamVjdFwiPT1iKWlmKGEpe2lmKGEgaW5zdGFuY2VvZiBBcnJheSlyZXR1cm5cImFycmF5XCI7aWYoYSBpbnN0YW5jZW9mIE9iamVjdClyZXR1cm4gYjt2YXIgYz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSk7XG5pZihcIltvYmplY3QgV2luZG93XVwiPT1jKXJldHVyblwib2JqZWN0XCI7aWYoXCJbb2JqZWN0IEFycmF5XVwiPT1jfHxcIm51bWJlclwiPT10eXBlb2YgYS5sZW5ndGgmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnNwbGljZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucHJvcGVydHlJc0VudW1lcmFibGUmJiFhLnByb3BlcnR5SXNFbnVtZXJhYmxlKFwic3BsaWNlXCIpKXJldHVyblwiYXJyYXlcIjtpZihcIltvYmplY3QgRnVuY3Rpb25dXCI9PWN8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmNhbGwmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnByb3BlcnR5SXNFbnVtZXJhYmxlJiYhYS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcImNhbGxcIikpcmV0dXJuXCJmdW5jdGlvblwifWVsc2UgcmV0dXJuXCJudWxsXCI7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PWImJlwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmNhbGwpcmV0dXJuXCJvYmplY3RcIjtyZXR1cm4gYn0sdj1mdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXQoYSl9LGVhPWZ1bmN0aW9uKGEsXG5iLGMpe3JldHVybiBhLmNhbGwuYXBwbHkoYS5iaW5kLGFyZ3VtZW50cyl9LGZhPWZ1bmN0aW9uKGEsYixjKXtpZighYSl0aHJvdyBFcnJvcigpO2lmKDI8YXJndW1lbnRzLmxlbmd0aCl7dmFyIGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7QXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYyxkKTtyZXR1cm4gYS5hcHBseShiLGMpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fSx3PWZ1bmN0aW9uKGEsYixjKXt3PUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kJiYtMSE9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQudG9TdHJpbmcoKS5pbmRleE9mKFwibmF0aXZlIGNvZGVcIik/ZWE6ZmE7cmV0dXJuIHcuYXBwbHkobnVsbCxhcmd1bWVudHMpfSx4PWZ1bmN0aW9uKGEsYil7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLFxuMSk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGI9Yy5zbGljZSgpO2IucHVzaC5hcHBseShiLGFyZ3VtZW50cyk7cmV0dXJuIGEuYXBwbHkodGhpcyxiKX19LHk9ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKCl7fWMucHJvdG90eXBlPWIucHJvdG90eXBlO2EuYmE9Yi5wcm90b3R5cGU7YS5wcm90b3R5cGU9bmV3IGM7YS5wcm90b3R5cGUuY29uc3RydWN0b3I9YTthLmFhPWZ1bmN0aW9uKGEsYyxmKXtmb3IodmFyIGQ9QXJyYXkoYXJndW1lbnRzLmxlbmd0aC0yKSxlPTI7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKylkW2UtMl09YXJndW1lbnRzW2VdO3JldHVybiBiLnByb3RvdHlwZVtjXS5hcHBseShhLGQpfX07dmFyIHo7ej1cInVuZGVmaW5lZFwiIT09dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBzZWxmP3NlbGY6Z2xvYmFsO2Z1bmN0aW9uIF9fZXh0ZW5kcyhhLGIpe2Z1bmN0aW9uIGMoKXt0aGlzLmNvbnN0cnVjdG9yPWF9Zm9yKHZhciBkIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShkKSYmKGFbZF09YltkXSk7YS5wcm90b3R5cGU9bnVsbD09PWI/T2JqZWN0LmNyZWF0ZShiKTooYy5wcm90b3R5cGU9Yi5wcm90b3R5cGUsbmV3IGMpfVxuZnVuY3Rpb24gX19kZWNvcmF0ZShhLGIsYyxkKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoLGY9Mz5lP2I6bnVsbD09PWQ/ZD1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGIsYyk6ZCxnO2c9ei5SZWZsZWN0O2lmKFwib2JqZWN0XCI9PT10eXBlb2YgZyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZGVjb3JhdGUpZj1nLmRlY29yYXRlKGEsYixjLGQpO2Vsc2UgZm9yKHZhciBrPWEubGVuZ3RoLTE7MDw9aztrLS0paWYoZz1hW2tdKWY9KDM+ZT9nKGYpOjM8ZT9nKGIsYyxmKTpnKGIsYykpfHxmO3JldHVybiAzPGUmJmYmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShiLGMsZiksZn1mdW5jdGlvbiBfX21ldGFkYXRhKGEsYil7dmFyIGM9ei5SZWZsZWN0O2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMubWV0YWRhdGEpcmV0dXJuIGMubWV0YWRhdGEoYSxiKX1cbnZhciBfX3BhcmFtPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGZ1bmN0aW9uKGMsZCl7YihjLGQsYSl9fSxfX2F3YWl0ZXI9ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIG5ldyAoY3x8KGM9UHJvbWlzZSkpKGZ1bmN0aW9uKGUsZil7ZnVuY3Rpb24gZyhhKXt0cnl7cChkLm5leHQoYSkpfWNhdGNoKHUpe2YodSl9fWZ1bmN0aW9uIGsoYSl7dHJ5e3AoZC50aHJvdyhhKSl9Y2F0Y2godSl7Zih1KX19ZnVuY3Rpb24gcChhKXthLmRvbmU/ZShhLnZhbHVlKToobmV3IGMoZnVuY3Rpb24oYil7YihhLnZhbHVlKX0pKS50aGVuKGcsayl9cCgoZD1kLmFwcGx5KGEsYikpLm5leHQoKSl9KX07XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB6Lk0mJnouTXx8KHouX19leHRlbmRzPV9fZXh0ZW5kcyx6Ll9fZGVjb3JhdGU9X19kZWNvcmF0ZSx6Ll9fbWV0YWRhdGE9X19tZXRhZGF0YSx6Ll9fcGFyYW09X19wYXJhbSx6Ll9fYXdhaXRlcj1fX2F3YWl0ZXIpO3ZhciBBPWZ1bmN0aW9uKGEpe2lmKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKUVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsQSk7ZWxzZXt2YXIgYj1FcnJvcigpLnN0YWNrO2ImJih0aGlzLnN0YWNrPWIpfWEmJih0aGlzLm1lc3NhZ2U9U3RyaW5nKGEpKX07eShBLEVycm9yKTtBLnByb3RvdHlwZS5uYW1lPVwiQ3VzdG9tRXJyb3JcIjt2YXIgZ2E9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9YS5zcGxpdChcIiVzXCIpLGQ9XCJcIixlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtlLmxlbmd0aCYmMTxjLmxlbmd0aDspZCs9Yy5zaGlmdCgpK2Uuc2hpZnQoKTtyZXR1cm4gZCtjLmpvaW4oXCIlc1wiKX07dmFyIEI9ZnVuY3Rpb24oYSxiKXtiLnVuc2hpZnQoYSk7QS5jYWxsKHRoaXMsZ2EuYXBwbHkobnVsbCxiKSk7Yi5zaGlmdCgpfTt5KEIsQSk7Qi5wcm90b3R5cGUubmFtZT1cIkFzc2VydGlvbkVycm9yXCI7dmFyIGhhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPVwiQXNzZXJ0aW9uIGZhaWxlZFwiO2lmKGMpdmFyIGU9ZSsoXCI6IFwiK2MpLGY9ZDtlbHNlIGEmJihlKz1cIjogXCIrYSxmPWIpO3Rocm93IG5ldyBCKFwiXCIrZSxmfHxbXSk7fSxDPWZ1bmN0aW9uKGEsYixjKXthfHxoYShcIlwiLG51bGwsYixBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMikpfSxEPWZ1bmN0aW9uKGEsYixjKXt2KGEpfHxoYShcIkV4cGVjdGVkIGZ1bmN0aW9uIGJ1dCBnb3QgJXM6ICVzLlwiLFt0KGEpLGFdLGIsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpKX07dmFyIEU9ZnVuY3Rpb24oYSxiLGMpe3RoaXMuVD1jO3RoaXMuTj1hO3RoaXMuVT1iO3RoaXMucz0wO3RoaXMubz1udWxsfTtFLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oKXt2YXIgYTswPHRoaXMucz8odGhpcy5zLS0sYT10aGlzLm8sdGhpcy5vPWEubmV4dCxhLm5leHQ9bnVsbCk6YT10aGlzLk4oKTtyZXR1cm4gYX07RS5wcm90b3R5cGUucHV0PWZ1bmN0aW9uKGEpe3RoaXMuVShhKTt0aGlzLnM8dGhpcy5UJiYodGhpcy5zKyssYS5uZXh0PXRoaXMubyx0aGlzLm89YSl9O3ZhciBGO2E6e3ZhciBpYT1xLm5hdmlnYXRvcjtpZihpYSl7dmFyIGphPWlhLnVzZXJBZ2VudDtpZihqYSl7Rj1qYTticmVhayBhfX1GPVwiXCJ9O3ZhciBrYT1mdW5jdGlvbihhKXtxLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBhO30sMCl9LEcsbGE9ZnVuY3Rpb24oKXt2YXIgYT1xLk1lc3NhZ2VDaGFubmVsO1widW5kZWZpbmVkXCI9PT10eXBlb2YgYSYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy5wb3N0TWVzc2FnZSYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXImJi0xPT1GLmluZGV4T2YoXCJQcmVzdG9cIikmJihhPWZ1bmN0aW9uKCl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklGUkFNRVwiKTthLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7YS5zcmM9XCJcIjtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYSk7dmFyIGI9YS5jb250ZW50V2luZG93LGE9Yi5kb2N1bWVudDthLm9wZW4oKTthLndyaXRlKFwiXCIpO2EuY2xvc2UoKTt2YXIgYz1cImNhbGxJbW1lZGlhdGVcIitNYXRoLnJhbmRvbSgpLGQ9XCJmaWxlOlwiPT1iLmxvY2F0aW9uLnByb3RvY29sP1wiKlwiOmIubG9jYXRpb24ucHJvdG9jb2wrXG5cIi8vXCIrYi5sb2NhdGlvbi5ob3N0LGE9dyhmdW5jdGlvbihhKXtpZigoXCIqXCI9PWR8fGEub3JpZ2luPT1kKSYmYS5kYXRhPT1jKXRoaXMucG9ydDEub25tZXNzYWdlKCl9LHRoaXMpO2IuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhLCExKTt0aGlzLnBvcnQxPXt9O3RoaXMucG9ydDI9e3Bvc3RNZXNzYWdlOmZ1bmN0aW9uKCl7Yi5wb3N0TWVzc2FnZShjLGQpfX19KTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGEmJi0xPT1GLmluZGV4T2YoXCJUcmlkZW50XCIpJiYtMT09Ri5pbmRleE9mKFwiTVNJRVwiKSl7dmFyIGI9bmV3IGEsYz17fSxkPWM7Yi5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtpZih2b2lkIDAhPT1jLm5leHQpe2M9Yy5uZXh0O3ZhciBhPWMuRztjLkc9bnVsbDthKCl9fTtyZXR1cm4gZnVuY3Rpb24oYSl7ZC5uZXh0PXtHOmF9O2Q9ZC5uZXh0O2IucG9ydDIucG9zdE1lc3NhZ2UoMCl9fXJldHVyblwidW5kZWZpbmVkXCIhPT10eXBlb2YgZG9jdW1lbnQmJlwib25yZWFkeXN0YXRlY2hhbmdlXCJpblxuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNDUklQVFwiKT9mdW5jdGlvbihhKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU0NSSVBUXCIpO2Iub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7Yi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbDtiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYik7Yj1udWxsO2EoKTthPW51bGx9O2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChiKX06ZnVuY3Rpb24oYSl7cS5zZXRUaW1lb3V0KGEsMCl9fTt2YXIgSD1mdW5jdGlvbigpe3RoaXMudj10aGlzLmY9bnVsbH0sbWE9bmV3IEUoZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEl9LGZ1bmN0aW9uKGEpe2EucmVzZXQoKX0sMTAwKTtILnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz1tYS5nZXQoKTtjLnNldChhLGIpO3RoaXMudj90aGlzLnYubmV4dD1jOihDKCF0aGlzLmYpLHRoaXMuZj1jKTt0aGlzLnY9Y307SC5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKCl7dmFyIGE9bnVsbDt0aGlzLmYmJihhPXRoaXMuZix0aGlzLmY9dGhpcy5mLm5leHQsdGhpcy5mfHwodGhpcy52PW51bGwpLGEubmV4dD1udWxsKTtyZXR1cm4gYX07dmFyIEk9ZnVuY3Rpb24oKXt0aGlzLm5leHQ9dGhpcy5zY29wZT10aGlzLkI9bnVsbH07SS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGEsYil7dGhpcy5CPWE7dGhpcy5zY29wZT1iO3RoaXMubmV4dD1udWxsfTtcbkkucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5uZXh0PXRoaXMuc2NvcGU9dGhpcy5CPW51bGx9O3ZhciBNPWZ1bmN0aW9uKGEsYil7Snx8bmEoKTtMfHwoSigpLEw9ITApO29hLmFkZChhLGIpfSxKLG5hPWZ1bmN0aW9uKCl7aWYoLTEhPVN0cmluZyhxLlByb21pc2UpLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpKXt2YXIgYT1xLlByb21pc2UucmVzb2x2ZSh2b2lkIDApO0o9ZnVuY3Rpb24oKXthLnRoZW4ocGEpfX1lbHNlIEo9ZnVuY3Rpb24oKXt2YXIgYT1wYTshdihxLnNldEltbWVkaWF0ZSl8fHEuV2luZG93JiZxLldpbmRvdy5wcm90b3R5cGUmJi0xPT1GLmluZGV4T2YoXCJFZGdlXCIpJiZxLldpbmRvdy5wcm90b3R5cGUuc2V0SW1tZWRpYXRlPT1xLnNldEltbWVkaWF0ZT8oR3x8KEc9bGEoKSksRyhhKSk6cS5zZXRJbW1lZGlhdGUoYSl9fSxMPSExLG9hPW5ldyBILHBhPWZ1bmN0aW9uKCl7Zm9yKHZhciBhO2E9b2EucmVtb3ZlKCk7KXt0cnl7YS5CLmNhbGwoYS5zY29wZSl9Y2F0Y2goYil7a2EoYil9bWEucHV0KGEpfUw9ITF9O3ZhciBPPWZ1bmN0aW9uKGEsYil7dGhpcy5iPTA7dGhpcy5MPXZvaWQgMDt0aGlzLmo9dGhpcy5nPXRoaXMudT1udWxsO3RoaXMubT10aGlzLkE9ITE7aWYoYSE9cil0cnl7dmFyIGM9dGhpczthLmNhbGwoYixmdW5jdGlvbihhKXtOKGMsMixhKX0sZnVuY3Rpb24oYSl7dHJ5e2lmKGEgaW5zdGFuY2VvZiBFcnJvcil0aHJvdyBhO3Rocm93IEVycm9yKFwiUHJvbWlzZSByZWplY3RlZC5cIik7fWNhdGNoKGUpe31OKGMsMyxhKX0pfWNhdGNoKGQpe04odGhpcywzLGQpfX0scWE9ZnVuY3Rpb24oKXt0aGlzLm5leHQ9dGhpcy5jb250ZXh0PXRoaXMuaD10aGlzLmM9dGhpcy5jaGlsZD1udWxsO3RoaXMudz0hMX07cWEucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5jb250ZXh0PXRoaXMuaD10aGlzLmM9dGhpcy5jaGlsZD1udWxsO3RoaXMudz0hMX07XG52YXIgcmE9bmV3IEUoZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHFhfSxmdW5jdGlvbihhKXthLnJlc2V0KCl9LDEwMCksc2E9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXJhLmdldCgpO2QuYz1hO2QuaD1iO2QuY29udGV4dD1jO3JldHVybiBkfSx1YT1mdW5jdGlvbihhLGIsYyl7dGEoYSxiLGMsbnVsbCl8fE0oeChiLGEpKX07Ty5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihhLGIsYyl7bnVsbCE9YSYmRChhLFwib3B0X29uRnVsZmlsbGVkIHNob3VsZCBiZSBhIGZ1bmN0aW9uLlwiKTtudWxsIT1iJiZEKGIsXCJvcHRfb25SZWplY3RlZCBzaG91bGQgYmUgYSBmdW5jdGlvbi4gRGlkIHlvdSBwYXNzIG9wdF9jb250ZXh0IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgaW5zdGVhZCBvZiB0aGUgdGhpcmQ/XCIpO3JldHVybiB2YSh0aGlzLHYoYSk/YTpudWxsLHYoYik/YjpudWxsLGMpfTtPLnByb3RvdHlwZS50aGVuPU8ucHJvdG90eXBlLnRoZW47Ty5wcm90b3R5cGUuJGdvb2dfVGhlbmFibGU9ITA7XG5PLnByb3RvdHlwZS5YPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHZhKHRoaXMsbnVsbCxhLGIpfTt2YXIgeGE9ZnVuY3Rpb24oYSxiKXthLmd8fDIhPWEuYiYmMyE9YS5ifHx3YShhKTtDKG51bGwhPWIuYyk7YS5qP2Euai5uZXh0PWI6YS5nPWI7YS5qPWJ9LHZhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXNhKG51bGwsbnVsbCxudWxsKTtlLmNoaWxkPW5ldyBPKGZ1bmN0aW9uKGEsZyl7ZS5jPWI/ZnVuY3Rpb24oYyl7dHJ5e3ZhciBlPWIuY2FsbChkLGMpO2EoZSl9Y2F0Y2goSyl7ZyhLKX19OmE7ZS5oPWM/ZnVuY3Rpb24oYil7dHJ5e3ZhciBlPWMuY2FsbChkLGIpO2EoZSl9Y2F0Y2goSyl7ZyhLKX19Omd9KTtlLmNoaWxkLnU9YTt4YShhLGUpO3JldHVybiBlLmNoaWxkfTtPLnByb3RvdHlwZS5ZPWZ1bmN0aW9uKGEpe0MoMT09dGhpcy5iKTt0aGlzLmI9MDtOKHRoaXMsMixhKX07Ty5wcm90b3R5cGUuWj1mdW5jdGlvbihhKXtDKDE9PXRoaXMuYik7dGhpcy5iPTA7Tih0aGlzLDMsYSl9O1xudmFyIE49ZnVuY3Rpb24oYSxiLGMpezA9PWEuYiYmKGE9PT1jJiYoYj0zLGM9bmV3IFR5cGVFcnJvcihcIlByb21pc2UgY2Fubm90IHJlc29sdmUgdG8gaXRzZWxmXCIpKSxhLmI9MSx0YShjLGEuWSxhLlosYSl8fChhLkw9YyxhLmI9YixhLnU9bnVsbCx3YShhKSwzIT1ifHx5YShhLGMpKSl9LHRhPWZ1bmN0aW9uKGEsYixjLGQpe2lmKGEgaW5zdGFuY2VvZiBPKXJldHVybiBudWxsIT1iJiZEKGIsXCJvcHRfb25GdWxmaWxsZWQgc2hvdWxkIGJlIGEgZnVuY3Rpb24uXCIpLG51bGwhPWMmJkQoYyxcIm9wdF9vblJlamVjdGVkIHNob3VsZCBiZSBhIGZ1bmN0aW9uLiBEaWQgeW91IHBhc3Mgb3B0X2NvbnRleHQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCBpbnN0ZWFkIG9mIHRoZSB0aGlyZD9cIikseGEoYSxzYShifHxyLGN8fG51bGwsZCkpLCEwO3ZhciBlO2lmKGEpdHJ5e2U9ISFhLiRnb29nX1RoZW5hYmxlfWNhdGNoKGcpe2U9ITF9ZWxzZSBlPSExO2lmKGUpcmV0dXJuIGEudGhlbihiLGMsZCksXG4hMDtlPXR5cGVvZiBhO2lmKFwib2JqZWN0XCI9PWUmJm51bGwhPWF8fFwiZnVuY3Rpb25cIj09ZSl0cnl7dmFyIGY9YS50aGVuO2lmKHYoZikpcmV0dXJuIHphKGEsZixiLGMsZCksITB9Y2F0Y2goZyl7cmV0dXJuIGMuY2FsbChkLGcpLCEwfXJldHVybiExfSx6YT1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPSExLGc9ZnVuY3Rpb24oYSl7Znx8KGY9ITAsYy5jYWxsKGUsYSkpfSxrPWZ1bmN0aW9uKGEpe2Z8fChmPSEwLGQuY2FsbChlLGEpKX07dHJ5e2IuY2FsbChhLGcsayl9Y2F0Y2gocCl7ayhwKX19LHdhPWZ1bmN0aW9uKGEpe2EuQXx8KGEuQT0hMCxNKGEuUCxhKSl9LEFhPWZ1bmN0aW9uKGEpe3ZhciBiPW51bGw7YS5nJiYoYj1hLmcsYS5nPWIubmV4dCxiLm5leHQ9bnVsbCk7YS5nfHwoYS5qPW51bGwpO251bGwhPWImJkMobnVsbCE9Yi5jKTtyZXR1cm4gYn07XG5PLnByb3RvdHlwZS5QPWZ1bmN0aW9uKCl7Zm9yKHZhciBhO2E9QWEodGhpcyk7KXt2YXIgYj10aGlzLmIsYz10aGlzLkw7aWYoMz09YiYmYS5oJiYhYS53KXt2YXIgZDtmb3IoZD10aGlzO2QmJmQubTtkPWQudSlkLm09ITF9aWYoYS5jaGlsZClhLmNoaWxkLnU9bnVsbCxCYShhLGIsYyk7ZWxzZSB0cnl7YS53P2EuYy5jYWxsKGEuY29udGV4dCk6QmEoYSxiLGMpfWNhdGNoKGUpe0NhLmNhbGwobnVsbCxlKX1yYS5wdXQoYSl9dGhpcy5BPSExfTt2YXIgQmE9ZnVuY3Rpb24oYSxiLGMpezI9PWI/YS5jLmNhbGwoYS5jb250ZXh0LGMpOmEuaCYmYS5oLmNhbGwoYS5jb250ZXh0LGMpfSx5YT1mdW5jdGlvbihhLGIpe2EubT0hMDtNKGZ1bmN0aW9uKCl7YS5tJiZDYS5jYWxsKG51bGwsYil9KX0sQ2E9a2E7ZnVuY3Rpb24gUChhLGIpe2lmKCEoYiBpbnN0YW5jZW9mIE9iamVjdCkpcmV0dXJuIGI7c3dpdGNoKGIuY29uc3RydWN0b3Ipe2Nhc2UgRGF0ZTpyZXR1cm4gbmV3IERhdGUoYi5nZXRUaW1lKCkpO2Nhc2UgT2JqZWN0OnZvaWQgMD09PWEmJihhPXt9KTticmVhaztjYXNlIEFycmF5OmE9W107YnJlYWs7ZGVmYXVsdDpyZXR1cm4gYn1mb3IodmFyIGMgaW4gYiliLmhhc093blByb3BlcnR5KGMpJiYoYVtjXT1QKGFbY10sYltjXSkpO3JldHVybiBhfTtPLmFsbD1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IE8oZnVuY3Rpb24oYixjKXt2YXIgZD1hLmxlbmd0aCxlPVtdO2lmKGQpZm9yKHZhciBmPWZ1bmN0aW9uKGEsYyl7ZC0tO2VbYV09YzswPT1kJiZiKGUpfSxnPWZ1bmN0aW9uKGEpe2MoYSl9LGs9MCxwO2s8YS5sZW5ndGg7aysrKXA9YVtrXSx1YShwLHgoZixrKSxnKTtlbHNlIGIoZSl9KX07Ty5yZXNvbHZlPWZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiBPKXJldHVybiBhO3ZhciBiPW5ldyBPKHIpO04oYiwyLGEpO3JldHVybiBifTtPLnJlamVjdD1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IE8oZnVuY3Rpb24oYixjKXtjKGEpfSl9O08ucHJvdG90eXBlW1wiY2F0Y2hcIl09Ty5wcm90b3R5cGUuWDt2YXIgUT1PO1widW5kZWZpbmVkXCIhPT10eXBlb2YgUHJvbWlzZSYmKFE9UHJvbWlzZSk7dmFyIERhPVE7ZnVuY3Rpb24gRWEoYSxiKXthPW5ldyBSKGEsYik7cmV0dXJuIGEuc3Vic2NyaWJlLmJpbmQoYSl9dmFyIFI9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3RoaXMuYT1bXTt0aGlzLks9MDt0aGlzLnRhc2s9RGEucmVzb2x2ZSgpO3RoaXMubD0hMTt0aGlzLkQ9Yjt0aGlzLnRhc2sudGhlbihmdW5jdGlvbigpe2EoYyl9KS5jYXRjaChmdW5jdGlvbihhKXtjLmVycm9yKGEpfSl9O1IucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24oYSl7Uyh0aGlzLGZ1bmN0aW9uKGIpe2IubmV4dChhKX0pfTtSLnByb3RvdHlwZS5lcnJvcj1mdW5jdGlvbihhKXtTKHRoaXMsZnVuY3Rpb24oYil7Yi5lcnJvcihhKX0pO3RoaXMuY2xvc2UoYSl9O1IucHJvdG90eXBlLmNvbXBsZXRlPWZ1bmN0aW9uKCl7Uyh0aGlzLGZ1bmN0aW9uKGEpe2EuY29tcGxldGUoKX0pO3RoaXMuY2xvc2UoKX07XG5SLnByb3RvdHlwZS5zdWJzY3JpYmU9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMsZTtpZih2b2lkIDA9PT1hJiZ2b2lkIDA9PT1iJiZ2b2lkIDA9PT1jKXRocm93IEVycm9yKFwiTWlzc2luZyBPYnNlcnZlci5cIik7ZT1GYShhKT9hOntuZXh0OmEsZXJyb3I6Yixjb21wbGV0ZTpjfTt2b2lkIDA9PT1lLm5leHQmJihlLm5leHQ9VCk7dm9pZCAwPT09ZS5lcnJvciYmKGUuZXJyb3I9VCk7dm9pZCAwPT09ZS5jb21wbGV0ZSYmKGUuY29tcGxldGU9VCk7YT10aGlzLiQuYmluZCh0aGlzLHRoaXMuYS5sZW5ndGgpO3RoaXMubCYmdGhpcy50YXNrLnRoZW4oZnVuY3Rpb24oKXt0cnl7ZC5IP2UuZXJyb3IoZC5IKTplLmNvbXBsZXRlKCl9Y2F0Y2goZil7fX0pO3RoaXMuYS5wdXNoKGUpO3JldHVybiBhfTtcblIucHJvdG90eXBlLiQ9ZnVuY3Rpb24oYSl7dm9pZCAwIT09dGhpcy5hJiZ2b2lkIDAhPT10aGlzLmFbYV0mJihkZWxldGUgdGhpcy5hW2FdLC0tdGhpcy5LLDA9PT10aGlzLksmJnZvaWQgMCE9PXRoaXMuRCYmdGhpcy5EKHRoaXMpKX07dmFyIFM9ZnVuY3Rpb24oYSxiKXtpZighYS5sKWZvcih2YXIgYz0wO2M8YS5hLmxlbmd0aDtjKyspR2EoYSxjLGIpfSxHYT1mdW5jdGlvbihhLGIsYyl7YS50YXNrLnRoZW4oZnVuY3Rpb24oKXtpZih2b2lkIDAhPT1hLmEmJnZvaWQgMCE9PWEuYVtiXSl0cnl7YyhhLmFbYl0pfWNhdGNoKGQpe1widW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSYmY29uc29sZS5lcnJvciYmY29uc29sZS5lcnJvcihkKX19KX07Ui5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczt0aGlzLmx8fCh0aGlzLmw9ITAsdm9pZCAwIT09YSYmKHRoaXMuSD1hKSx0aGlzLnRhc2sudGhlbihmdW5jdGlvbigpe2IuYT12b2lkIDA7Yi5EPXZvaWQgMH0pKX07XG5mdW5jdGlvbiBGYShhKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGF8fG51bGw9PT1hKXJldHVybiExO3ZhciBiO2I9W1wibmV4dFwiLFwiZXJyb3JcIixcImNvbXBsZXRlXCJdO24oKTt2YXIgYz1iW1N5bWJvbC5pdGVyYXRvcl07Yj1jP2MuY2FsbChiKTptKGIpO2ZvcihjPWIubmV4dCgpOyFjLmRvbmU7Yz1iLm5leHQoKSlpZihjPWMudmFsdWUsYyBpbiBhJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYVtjXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBUKCl7fTt2YXIgSGE9RXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UsVj1mdW5jdGlvbihhLGIpe3RoaXMuY29kZT1hO3RoaXMubWVzc2FnZT1iO2lmKEhhKUhhKHRoaXMsVS5wcm90b3R5cGUuY3JlYXRlKTtlbHNle3ZhciBjPUVycm9yLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt0aGlzLm5hbWU9XCJGaXJlYmFzZUVycm9yXCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJzdGFja1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYy5zdGFja319KX19O1YucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtWLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1WO1YucHJvdG90eXBlLm5hbWU9XCJGaXJlYmFzZUVycm9yXCI7dmFyIFU9ZnVuY3Rpb24oYSxiLGMpe3RoaXMuVj1hO3RoaXMuVz1iO3RoaXMuTz1jO3RoaXMucGF0dGVybj0vXFx7XFwkKFtefV0rKX0vZ307XG5VLnByb3RvdHlwZS5jcmVhdGU9ZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj17fSk7dmFyIGM9dGhpcy5PW2FdO2E9dGhpcy5WK1wiL1wiK2E7dmFyIGM9dm9pZCAwPT09Yz9cIkVycm9yXCI6Yy5yZXBsYWNlKHRoaXMucGF0dGVybixmdW5jdGlvbihhLGMpe2E9YltjXTtyZXR1cm4gdm9pZCAwIT09YT9hLnRvU3RyaW5nKCk6XCI8XCIrYytcIj8+XCJ9KSxjPXRoaXMuVytcIjogXCIrYytcIiAoXCIrYStcIikuXCIsYz1uZXcgVihhLGMpLGQ7Zm9yKGQgaW4gYiliLmhhc093blByb3BlcnR5KGQpJiZcIl9cIiE9PWQuc2xpY2UoLTEpJiYoY1tkXT1iW2RdKTtyZXR1cm4gY307dmFyIFc9USxYPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzO3RoaXMuST1jO3RoaXMuSj0hMTt0aGlzLmk9e307dGhpcy5DPWI7dGhpcy5GPVAodm9pZCAwLGEpO2E9XCJzZXJ2aWNlQWNjb3VudFwiaW4gdGhpcy5GOyhcImNyZWRlbnRpYWxcImluIHRoaXMuRnx8YSkmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSYmY29uc29sZS5sb2coXCJUaGUgJ1wiKyhhP1wic2VydmljZUFjY291bnRcIjpcImNyZWRlbnRpYWxcIikrXCInIHByb3BlcnR5IHNwZWNpZmllZCBpbiB0aGUgZmlyc3QgYXJndW1lbnQgdG8gaW5pdGlhbGl6ZUFwcCgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uLiBZb3Ugc2hvdWxkIGluc3RlYWQgdXNlIHRoZSAnZmlyZWJhc2UtYWRtaW4nIHBhY2thZ2UuIFNlZSBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9hZG1pbi9zZXR1cCBmb3IgZGV0YWlscyBvbiBob3cgdG8gZ2V0IHN0YXJ0ZWQuXCIpO09iamVjdC5rZXlzKGMuSU5URVJOQUwuZmFjdG9yaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPVxuYy5JTlRFUk5BTC51c2VBc1NlcnZpY2UoZCxhKTtudWxsIT09YiYmKGI9ZC5TLmJpbmQoZCxiKSxkW2FdPWIpfSl9O1gucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbigpe3ZhciBhPXRoaXM7cmV0dXJuKG5ldyBXKGZ1bmN0aW9uKGIpe1koYSk7YigpfSkpLnRoZW4oZnVuY3Rpb24oKXthLkkuSU5URVJOQUwucmVtb3ZlQXBwKGEuQyk7cmV0dXJuIFcuYWxsKE9iamVjdC5rZXlzKGEuaSkubWFwKGZ1bmN0aW9uKGIpe3JldHVybiBhLmlbYl0uSU5URVJOQUwuZGVsZXRlKCl9KSl9KS50aGVuKGZ1bmN0aW9uKCl7YS5KPSEwO2EuaT17fX0pfTtYLnByb3RvdHlwZS5TPWZ1bmN0aW9uKGEpe1kodGhpcyk7dm9pZCAwPT09dGhpcy5pW2FdJiYodGhpcy5pW2FdPXRoaXMuSS5JTlRFUk5BTC5mYWN0b3JpZXNbYV0odGhpcyx0aGlzLlIuYmluZCh0aGlzKSkpO3JldHVybiB0aGlzLmlbYV19O1gucHJvdG90eXBlLlI9ZnVuY3Rpb24oYSl7UCh0aGlzLGEpfTtcbnZhciBZPWZ1bmN0aW9uKGEpe2EuSiYmWihJYShcImRlbGV0ZWRcIix7bmFtZTphLkN9KSl9O2guT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoWC5wcm90b3R5cGUse25hbWU6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe1kodGhpcyk7cmV0dXJuIHRoaXMuQ319LG9wdGlvbnM6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe1kodGhpcyk7cmV0dXJuIHRoaXMuRn19fSk7WC5wcm90b3R5cGUubmFtZSYmWC5wcm90b3R5cGUub3B0aW9uc3x8WC5wcm90b3R5cGUuZGVsZXRlfHxjb25zb2xlLmxvZyhcImRjXCIpO1xuZnVuY3Rpb24gSmEoKXtmdW5jdGlvbiBhKGEpe2E9YXx8XCJbREVGQVVMVF1cIjt2YXIgYj1kW2FdO3ZvaWQgMD09PWImJlooXCJub0FwcFwiLHtuYW1lOmF9KTtyZXR1cm4gYn1mdW5jdGlvbiBiKGEsYil7T2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihkKXtkPWMoYSxkKTtpZihudWxsIT09ZCYmZltkXSlmW2RdKGIsYSl9KX1mdW5jdGlvbiBjKGEsYil7aWYoXCJzZXJ2ZXJBdXRoXCI9PT1iKXJldHVybiBudWxsO3ZhciBjPWI7YT1hLm9wdGlvbnM7XCJhdXRoXCI9PT1iJiYoYS5zZXJ2aWNlQWNjb3VudHx8YS5jcmVkZW50aWFsKSYmKGM9XCJzZXJ2ZXJBdXRoXCIsXCJzZXJ2ZXJBdXRoXCJpbiBlfHxaKFwic2VydmVyQXV0aE1pc3NpbmdcIikpO3JldHVybiBjfXZhciBkPXt9LGU9e30sZj17fSxnPXtfX2VzTW9kdWxlOiEwLGluaXRpYWxpemVBcHA6ZnVuY3Rpb24oYSxjKXt2b2lkIDA9PT1jP2M9XCJbREVGQVVMVF1cIjpcInN0cmluZ1wiPT09dHlwZW9mIGMmJlwiXCIhPT1jfHxaKFwiYmFkLWFwcC1uYW1lXCIsXG57bmFtZTpjK1wiXCJ9KTt2b2lkIDAhPT1kW2NdJiZaKFwiZHVwQXBwXCIse25hbWU6Y30pO2E9bmV3IFgoYSxjLGcpO2RbY109YTtiKGEsXCJjcmVhdGVcIik7dm9pZCAwIT1hLklOVEVSTkFMJiZ2b2lkIDAhPWEuSU5URVJOQUwuZ2V0VG9rZW58fFAoYSx7SU5URVJOQUw6e2dldFRva2VuOmZ1bmN0aW9uKCl7cmV0dXJuIFcucmVzb2x2ZShudWxsKX0sYWRkQXV0aFRva2VuTGlzdGVuZXI6ZnVuY3Rpb24oKXt9LHJlbW92ZUF1dGhUb2tlbkxpc3RlbmVyOmZ1bmN0aW9uKCl7fX19KTtyZXR1cm4gYX0sYXBwOmEsYXBwczpudWxsLFByb21pc2U6VyxTREtfVkVSU0lPTjpcIjAuMC4wXCIsSU5URVJOQUw6e3JlZ2lzdGVyU2VydmljZTpmdW5jdGlvbihiLGMsZCx1KXtlW2JdJiZaKFwiZHVwU2VydmljZVwiLHtuYW1lOmJ9KTtlW2JdPWM7dSYmKGZbYl09dSk7Yz1mdW5jdGlvbihjKXt2b2lkIDA9PT1jJiYoYz1hKCkpO3JldHVybiBjW2JdKCl9O3ZvaWQgMCE9PWQmJlAoYyxkKTtyZXR1cm4gZ1tiXT1jfSxjcmVhdGVGaXJlYmFzZU5hbWVzcGFjZTpKYSxcbmV4dGVuZE5hbWVzcGFjZTpmdW5jdGlvbihhKXtQKGcsYSl9LGNyZWF0ZVN1YnNjcmliZTpFYSxFcnJvckZhY3Rvcnk6VSxyZW1vdmVBcHA6ZnVuY3Rpb24oYSl7YihkW2FdLFwiZGVsZXRlXCIpO2RlbGV0ZSBkW2FdfSxmYWN0b3JpZXM6ZSx1c2VBc1NlcnZpY2U6YyxQcm9taXNlOk8sZGVlcEV4dGVuZDpQfX07Z1tcImRlZmF1bHRcIl09ZztPYmplY3QuZGVmaW5lUHJvcGVydHkoZyxcImFwcHNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKGQpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gZFthXX0pfX0pO2EuQXBwPVg7cmV0dXJuIGd9ZnVuY3Rpb24gWihhLGIpe3Rocm93IEVycm9yKElhKGEsYikpO31cbmZ1bmN0aW9uIElhKGEsYil7Yj1ifHx7fTtiPXtub0FwcDpcIk5vIEZpcmViYXNlIEFwcCAnXCIrYi5uYW1lK1wiJyBoYXMgYmVlbiBjcmVhdGVkIC0gY2FsbCBGaXJlYmFzZSBBcHAuaW5pdGlhbGl6ZUFwcCgpLlwiLFwiYmFkLWFwcC1uYW1lXCI6XCJJbGxlZ2FsIEFwcCBuYW1lOiAnXCIrYi5uYW1lK1wiJy5cIixkdXBBcHA6XCJGaXJlYmFzZSBBcHAgbmFtZWQgJ1wiK2IubmFtZStcIicgYWxyZWFkeSBleGlzdHMuXCIsZGVsZXRlZDpcIkZpcmViYXNlIEFwcCBuYW1lZCAnXCIrYi5uYW1lK1wiJyBhbHJlYWR5IGRlbGV0ZWQuXCIsZHVwU2VydmljZTpcIkZpcmViYXNlIFNlcnZpY2UgbmFtZWQgJ1wiK2IubmFtZStcIicgYWxyZWFkeSByZWdpc3RlcmVkLlwiLHNlcnZlckF1dGhNaXNzaW5nOlwiSW5pdGlhbGl6aW5nIHRoZSBGaXJlYmFzZSBTREsgd2l0aCBhIHNlcnZpY2UgYWNjb3VudCBpcyBvbmx5IGFsbG93ZWQgaW4gYSBOb2RlLmpzIGVudmlyb25tZW50LiBPbiBjbGllbnQgZGV2aWNlcywgeW91IHNob3VsZCBpbnN0ZWFkIGluaXRpYWxpemUgdGhlIFNESyB3aXRoIGFuIGFwaSBrZXkgYW5kIGF1dGggZG9tYWluLlwifVthXTtcbnJldHVybiB2b2lkIDA9PT1iP1wiQXBwbGljYXRpb24gRXJyb3I6IChcIithK1wiKVwiOmJ9O1widW5kZWZpbmVkXCIhPT10eXBlb2YgZmlyZWJhc2UmJihmaXJlYmFzZT1KYSgpKTsgfSkuY2FsbCh0aGlzKTtcbmZpcmViYXNlLlNES19WRVJTSU9OID0gXCIzLjYuNVwiO1xucmV0dXJuIGZpcmViYXNlO30pLmNhbGwoZ2xvYmFsKTtcbm1vZHVsZS5leHBvcnRzID0gZmlyZWJhc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmlyZWJhc2UvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnQgSG9tZSBmcm9tICcuL0hvbWUvSG9tZSdcclxuZXhwb3J0IFN1YlRvcGljIGZyb20gJy4vU3ViVG9waWMvU3ViVG9waWMnXHJcbmV4cG9ydCBUb3BpYyBmcm9tICcuL1RvcGljL1RvcGljJ1xyXG5leHBvcnQgQ29udGVudHMgZnJvbSAnLi9Db250ZW50cy9Db250ZW50cydcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L2luZGV4LmpzIiwiZXhwb3J0IHsgUXVlc3Rpb24sIERlc2NyaXB0aW9uLCBQYXJ0IH0gZnJvbSAnLi9xdWVzdGlvbi8nXHJcbmV4cG9ydCBOb3RlIGZyb20gJy4vTm90ZS9Ob3RlJ1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9tYXJrdXAvd29ya3NoZWV0L2luZGV4LmpzIiwiaW1wb3J0IHsgcmVmIH0gZnJvbSAnY29uZmlnL2NvbnN0YW50cydcclxuXHJcbi8vIFVTRVJcclxuXHJcbi8vIFNhdmVzIHVzZXIgdG8gZGF0YWJhc2VcclxuLy8gVXNlciBzaG91bGQgYmUgdGhlIGZ1bGwgdXNlciBkZXRhaWxzXHJcbi8vIFVzZXIgYWxyZWFkeSBoYXMgYSB1aWQgZnJvbSB0aGUgcmVnaXN0ZXJcclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVVc2VyKHVzZXIpIHtcclxuXHRyZXR1cm4gcmVmLmNoaWxkKGB1c2Vycy8ke3VzZXIuaW5mby51aWR9YCkuc2V0KHVzZXIpXHJcblx0XHQvLyByZXR1cm4gcHJvbWlzZSByZXNvbHZlZCB3aXRoIHVzZXIgZm9yIGNoYWluaW5nXHJcblx0XHQudGhlbigoKSA9PiB1c2VyKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hVc2VyKHVpZCkge1xyXG5cdHJldHVybiByZWYuY2hpbGQoYHVzZXJzLyR7dWlkfWApLm9uY2UoJ3ZhbHVlJylcclxuXHRcdC50aGVuKHNuYXBzaG90ID0+IHNuYXBzaG90LnZhbCgpKVxyXG59XHJcblxyXG5cclxuLy8gTEVTU09OIEhJU1RPUllcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJzTGVzc29uSGlzdG9yeSh1aWQpIHtcclxuXHRyZXR1cm4gcmVmLmNoaWxkKGB1c2Vyc0xlc3Nvbkhpc3RvcnkvJHt1aWR9YCkub25jZSgndmFsdWUnKVxyXG5cdFx0LnRoZW4oc25hcHNob3QgPT4gc25hcHNob3QudmFsKCkpXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2hlbHBlcnMvYXBpLmpzIiwiZXhwb3J0IEFkbWluIGZyb20gJy4vQWRtaW4vQWRtaW4nXHJcbmV4cG9ydCBBZG1pbk5hdiBmcm9tICcuL0FkbWluTmF2L0FkbWluTmF2J1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9hZG1pbi9pbmRleC5qcyIsImV4cG9ydCBNYWluIGZyb20gJy4vTWFpbi9NYWluJ1xyXG5leHBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24vTmF2aWdhdGlvbidcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2luZGV4LmpzIiwiZXhwb3J0IFByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlL1Byb2ZpbGUnXHJcbmV4cG9ydCBQcm9maWxlTmF2IGZyb20gJy4vUHJvZmlsZU5hdi9Qcm9maWxlTmF2J1xyXG5leHBvcnQgTGVzc29uSGlzdG9yeSBmcm9tICcuL0xlc3Nvbkhpc3RvcnkvTGVzc29uSGlzdG9yeSdcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9pbmRleC5qcyIsImltcG9ydCB7IGZldGNoVXNlcnNMZXNzb25IaXN0b3J5IGFzIGFwaUZldGNoVXNlcnNMZXNzb25IaXN0b3J5IH0gZnJvbSAnaGVscGVycy9hcGknXHJcblxyXG5jb25zdCBGRVRDSElOR19VU0VSU19MRVNTT05fSElTVE9SWSA9ICdGRVRDSElOR19VU0VSU19MRVNTT05fSElTVE9SWSdcclxuY29uc3QgRkVUQ0hJTkdfVVNFUlNfTEVTU09OX0hJU1RPUllfU1VDQ0VTUyA9ICdGRVRDSElOR19VU0VSU19MRVNTT05fSElTVE9SWV9TVUNDRVNTJ1xyXG5jb25zdCBGRVRDSElOR19VU0VSU19MRVNTT05fSElTVE9SWV9GQUlMVVJFID0gJ0ZFVENISU5HX1VTRVJTX0xFU1NPTl9ISVNUT1JZX0ZBSUxVUkUnXHJcblxyXG5jb25zdCBmZXRjaGluZ1VzZXJzTGVzc29uSGlzdG9yeT0gKCkgPT4gKHtcclxuXHR0eXBlOiBGRVRDSElOR19VU0VSU19MRVNTT05fSElTVE9SWSxcclxufSlcclxuXHJcbmNvbnN0IGZldGNoaW5nVXNlcnNMZXNzb25IaXN0b3J5U3VjY2VzcyA9ICh1aWQsIGxlc3Nvbkhpc3RvcnkpID0+ICh7XHJcblx0dHlwZTogRkVUQ0hJTkdfVVNFUlNfTEVTU09OX0hJU1RPUllfU1VDQ0VTUyxcclxuXHRsZXNzb25IaXN0b3J5LFxyXG5cdHVpZCxcclxufSlcclxuXHJcbmNvbnN0IGZldGNoaW5nVXNlcnNMZXNzb25IaXN0b3J5RmFpbHVyZSA9IChlcnJvcikgPT4ge1xyXG5cdGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IEZFVENISU5HX1VTRVJTX0xFU1NPTl9ISVNUT1JZX0ZBSUxVUkUsXHJcblx0fVx0XHJcbn1cclxuXHJcbi8vIFRIVU5LU1xyXG4vL1RPRE8gTU9WRSBUSElTIFNPTUVXSEVSRT8gVVRJTCBGVU5DVElPTlxyXG5mdW5jdGlvbiBsZXNzb25IaXN0b3J5QXJyYXkob2JqKSB7XHJcblx0cmV0dXJuIE9iamVjdC5rZXlzKG9iailcclxuXHRcdC5zb3J0KChhLGIpID0+IG9ialtiXS50aW1lc3RhbXAgLSBvYmpbYV0udGltZXN0YW1wKVxyXG5cdFx0Lm1hcChrZXkgPT4gb2JqW2tleV0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzTGVzc29uSGlzdG9yeSA9ICh1aWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG5cdGRpc3BhdGNoKGZldGNoaW5nVXNlcnNMZXNzb25IaXN0b3J5KCkpXHJcblx0XHJcblx0cmV0dXJuIGFwaUZldGNoVXNlcnNMZXNzb25IaXN0b3J5KHVpZClcclxuXHRcdC50aGVuKGxlc3Nvbkhpc3RvcnkgPT4gbGVzc29uSGlzdG9yeUFycmF5KGxlc3Nvbkhpc3RvcnkpKVxyXG5cdFx0LnRoZW4oaGlzdG9yeUFycmF5ID0+IGRpc3BhdGNoKGZldGNoaW5nVXNlcnNMZXNzb25IaXN0b3J5U3VjY2Vzcyh1aWQsIGhpc3RvcnlBcnJheSkpKVxyXG5cdFx0LmNhdGNoKGVycm9yID0+IGRpc3BhdGNoKGZldGNoaW5nVXNlcnNMZXNzb25IaXN0b3J5RmFpbHVyZShlcnJvcikpKVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJFRFVDRVJTXHJcbmNvbnN0IGluaXRpYWxVc2Vyc0xlc3Nvbkhpc3RvcnlTdGF0ZSA9IHtcclxuXHRpc0ZldGNoaW5nOiBmYWxzZSxcclxuXHRlcnJvcjogJycsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJzTGVzc29uSGlzdG9yeShzdGF0ZSA9IGluaXRpYWxVc2Vyc0xlc3Nvbkhpc3RvcnlTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEZFVENISU5HX1VTRVJTX0xFU1NPTl9ISVNUT1JZOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGlzRmV0Y2hpbmc6IHRydWUsXHJcblx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHR9XHRcdFxyXG5cdFx0Y2FzZSBGRVRDSElOR19VU0VSU19MRVNTT05fSElTVE9SWV9GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGlzRmV0Y2hpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGVycm9yOiBhY3Rpb24uZXJyb3IsXHJcblx0XHRcdH1cclxuXHRcdGNhc2UgRkVUQ0hJTkdfVVNFUlNfTEVTU09OX0hJU1RPUllfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRpc0ZldGNoaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRlcnJvcjogJycsXHJcblx0XHRcdFx0W2FjdGlvbi51aWRdOiBsZXNzb25IaXN0b3J5KHN0YXRlW2FjdGlvbi51aWRdLCBhY3Rpb24pLFxyXG5cdFx0XHR9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxMZXNzb25IaXN0b3J5U3RhdGUgPSB7XHJcblx0aGlzdG9yeToge30sXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxlc3Nvbkhpc3Rvcnkoc3RhdGUgPSBpbml0aWFsTGVzc29uSGlzdG9yeVN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgRkVUQ0hJTkdfVVNFUlNfTEVTU09OX0hJU1RPUllfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRoaXN0b3J5OiBhY3Rpb24ubGVzc29uSGlzdG9yeSxcclxuXHRcdFx0fVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZWR1eC9tb2R1bGVzL3VzZXJzTGVzc29uSGlzdG9yeS5qcyIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSdcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9ICcvbWF0aCdcclxuZXhwb3J0IGNvbnN0IFdPUktTSEVFVFNfVVJMID0gJ3dvcmtzaGVldHMnXHJcblxyXG5jb25zdCBhcHBDb25maWcgPSB7XHJcblx0YXBpS2V5OiBcIkFJemFTeUFDeXBING8yVEZDbi1vTmRiS1FjaHRGOEF5UUhVTm5WNFwiLFxyXG5cdGF1dGhEb21haW46IFwibWF0aHNpdGUtZTkyNzMuZmlyZWJhc2VhcHAuY29tXCIsXHJcblx0ZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9tYXRoc2l0ZS1lOTI3My5maXJlYmFzZWlvLmNvbVwiLFxyXG5cdHN0b3JhZ2VCdWNrZXQ6IFwibWF0aHNpdGUtZTkyNzMuYXBwc3BvdC5jb21cIixcclxuXHRtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDk2ODAyMTI5ODc2XCJcclxufVxyXG5cclxuY29uc3QgZGV2Q29uZmlnID0ge1xyXG5cdGFwaUtleTogXCJBSXphU3lBNUpnQk9id1RKODZlb0Z2RnlEVk9QYzBKbERyOXdCWllcIixcclxuXHRhdXRoRG9tYWluOiBcIm1hdGhzaXRlZGV2LmZpcmViYXNlYXBwLmNvbVwiLFxyXG5cdGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vbWF0aHNpdGVkZXYuZmlyZWJhc2Vpby5jb21cIixcclxuXHRzdG9yYWdlQnVja2V0OiBcIm1hdGhzaXRlZGV2LmFwcHNwb3QuY29tXCIsXHJcblx0bWVzc2FnaW5nU2VuZGVySWQ6IFwiMTAzNjcyNTE4NTA5MVwiXHJcbn1cclxuXHJcbmZpcmViYXNlLmluaXRpYWxpemVBcHAoZGV2Q29uZmlnKVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKClcclxuZXhwb3J0IGNvbnN0IGZpcmViYXNlQXV0aCA9IGZpcmViYXNlLmF1dGhcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbmZpZy9jb25zdGFudHMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7OztBQWZBO0FBa0JBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQUFBO0FBREE7QUFDQTtBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFFQTtBQURBO0FBSUE7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFJQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTs7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQURBO0FBU0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU9BOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUZBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQWpCQTtBQURBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQURBO0FBSUE7Ozs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUZBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBRkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBekJBO0FBREE7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBOzs7QUFJQTtBQUNBO0FBRUE7QUFEQTtBQUlBOzs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFzQ0E7QUFRQTtBQUNBO0FBbERBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFGQTtBQURBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBREE7QUFJQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBREE7QUFTQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBT0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUExQ0E7QUFGQTtBQURBO0FBQ0E7QUFtREE7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQVBBO0FBUkE7QUFtQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRUE7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFQQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBZEE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQTlEQTtBQXJDQTtBQURBO0FBQ0E7QUE2SEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQVZBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFiQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUpBO0FBRkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFKQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBYkE7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBaEJBO0FBd0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4SkE7QUFEQTtBQUNBO0FBOEpBOzs7Ozs7Ozs7Ozs7OztBQ25LQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFQQTtBQURBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBRkE7QUFEQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUZBO0FBSkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUxBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQVJBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBM0lBO0FBREE7QUFDQTtBQWtKQTs7Ozs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQXBIQTtBQVRBO0FBRkE7QUFEQTtBQUNBO0FBNElBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEpBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBR0E7QUFDQTs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFUQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFLQTtBQUtBO0FBQ0E7QUFmQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7OztBQ1RBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BOzs7Ozs7O0FDZkE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tHQTtBQUNBO0FBbkdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVZBO0FBQ0E7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQWVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUhBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVEE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBakNBO0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBUEE7QUFTQTs7Ozs7OztBQ3ZKQTs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7O0FBQUE7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNNQTtBQU1BO0FBUUE7QUFDQTtBQXRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMrQ0E7QUFDQTtBQWpEQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBUEE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBckJBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFQQTtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9