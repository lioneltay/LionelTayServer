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
					type: 'password',
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
					type: 'password',
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
					type: 'password',
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
					' but with more restrictions since the input ',
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
					'A function ',
					_react2.default.createElement(_MathJax.Tex, { t: 'f(x)' }),
					' has an inverse function, ',
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
				'For each of the following functions find the inverse ',
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
				'For each of the following functions find the inverse ',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjdhY2ZhMmY4M2JiMzQwYmZkYjBkLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb25maWcvcm91dGVzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL3JlZHV4L21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL01hdGhKYXgvVGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL01hdGhKYXgvVGV4TWFya3VwLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTWFpbi9NYWluLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWRtaW4vQWRtaW5OYXYvQWRtaW5OYXYuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9hZG1pbi9BZG1pbi9BZG1pbi5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2F1dGgvU2lnbmluL1NpZ25pbi5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2F1dGgvU2lnbm91dC9TaWdub3V0LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYXV0aC9TaWdudXAvU2lnbnVwLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYXV0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbWFya3VwL3dvcmtzaGVldC9Ob3RlL05vdGUuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9tYXJrdXAvd29ya3NoZWV0L3F1ZXN0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9MZXNzb25IaXN0b3J5L0xlc3Nvbkhpc3RvcnkuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9wcm9maWxlL1Byb2ZpbGVOYXYvUHJvZmlsZU5hdi5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZS9Qcm9maWxlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L0NvbnRlbnRzL0NvbnRlbnRzLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L0hvbWUvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3dvcmtzaGVldC9TdWJUb3BpYy9TdWJUb3BpYy5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3dvcmtzaGVldC9Ub3BpYy9Ub3BpYy5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvQ29vcmRpbmF0ZUdlb21ldHJ5L0NpcmNsZXNFbGxpcHNlc0FuZEh5cGVyYm9sYXMvQ2lyY2xlc0VsbGlwc2VzQW5kSHlwZXJib2xhcy5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvQ29vcmRpbmF0ZUdlb21ldHJ5L2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL0Z1bmN0aW9ucy9BYnNvbHV0ZVZhbHVlRnVuY3Rpb25zL0Fic29sdXRlVmFsdWVGdW5jdGlvbnMuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL0Z1bmN0aW9ucy9Db21wb3NpdGVGdW5jdGlvbnMvQ29tcG9zaXRlRnVuY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9GdW5jdGlvbnMvSW52ZXJzZUZ1bmN0aW9ucy9JbnZlcnNlRnVuY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9GdW5jdGlvbnMvUmVjaXByb2NhbEZ1bmN0aW9ucy9SZWNpcHJvY2FsRnVuY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9GdW5jdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvU2V0cy9TZXRCdWlsZGVyL1NldEJ1aWxkZXIuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL1NldHMvU2V0Tm90YXRpb24vU2V0Tm90YXRpb24uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL1NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb25maWcvcm91dGVzL3dvcmtzaGVldHMuanN4Iiwid2VicGFjazovLy9zcmMvaGVscGVycy9hdXRoLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXJrdXAvd29ya3NoZWV0L05vdGUvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFya3VwL3dvcmtzaGVldC9xdWVzdGlvbi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2ZpcmViYXNlL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXJlYmFzZS9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpcmViYXNlL2ZpcmViYXNlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXJlYmFzZS9tZXNzYWdpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXJlYmFzZS9zdG9yYWdlLmpzIiwid2VicGFjazovLy9zcmMvTWF0aEpheC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL3JlZHV4L21vZHVsZXMvdXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9Db29yZGluYXRlR2VvbWV0cnkvQ2lyY2xlc0VsbGlwc2VzQW5kSHlwZXJib2xhcy9DaXJjbGVBdE9yaWdpbi5wbmciLCJ3ZWJwYWNrOi8vL3NyYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9maXJlYmFzZS9hcHAuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3dvcmtzaGVldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbWFya3VwL3dvcmtzaGVldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvYXBpLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9hZG1pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3Byb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9yZWR1eC9tb2R1bGVzL3VzZXJzTGVzc29uSGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbmZpZy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tICdjb25maWcvY29uc3RhbnRzJ1xyXG5cclxuaW1wb3J0IHdvcmtzaGVldFJvdXRlcyBmcm9tICcuL3dvcmtzaGVldHMnXHJcblxyXG5pbXBvcnQgeyBNYWluIH0gZnJvbSAnY29tcG9uZW50cydcclxuLy8gVGhlIGhvbWUgcGFnZSBpcyBjdXJyZW50bHkgdGhlIHdvcmtzaGVldCBwYWdlLCBjYW4gZWFzaWx5IGJlIGNoYW5nZWRcclxuaW1wb3J0IHsgSG9tZSB9IGZyb20gJ2NvbXBvbmVudHMvd29ya3NoZWV0J1xyXG5cclxuaW1wb3J0IHtcclxuXHRQcm9maWxlLFxyXG5cdExlc3Nvbkhpc3RvcnksXHJcbn0gZnJvbSAnY29tcG9uZW50cy9wcm9maWxlLydcclxuXHJcbmltcG9ydCB7XHJcblx0U2lnbnVwLFxyXG5cdFNpZ25pbixcclxuXHRTaWdub3V0LFxyXG59IGZyb20gJ2NvbXBvbmVudHMvYXV0aCdcclxuXHJcbmltcG9ydCB7XHJcblx0QWRtaW4sXHJcbn0gZnJvbSAnY29tcG9uZW50cy9hZG1pbidcclxuXHJcbmNvbnN0IHJvdXRlcyA9IChcclxuXHQ8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cclxuXHRcdDxSb3V0ZSBwYXRoPXtCQVNFX1VSTH0gY29tcG9uZW50PXtNYWlufT5cclxuXHRcdFx0PEluZGV4Um91dGUgY29tcG9uZW50PXtIb21lfSAvPlxyXG5cdFx0XHRcclxuXHRcdFx0PFJvdXRlIHBhdGg9J2FkbWluJyBjb21wb25lbnQ9e0FkbWlufSAvPlxyXG5cdFx0XHRcclxuXHRcdFx0PFJvdXRlIHBhdGg9J3NpZ251cCcgY29tcG9uZW50PXtTaWdudXB9IC8+XHJcblx0XHRcdDxSb3V0ZSBwYXRoPSdzaWduaW4nIGNvbXBvbmVudD17U2lnbmlufSAvPlxyXG5cdFx0XHQ8Um91dGUgcGF0aD0nc2lnbm91dCcgY29tcG9uZW50PXtTaWdub3V0fSAvPlxyXG5cdFx0XHRcclxuXHRcdFx0PFJvdXRlIHBhdGg9J3Byb2ZpbGUvOnVpZCcgY29tcG9uZW50PXtQcm9maWxlfT5cclxuXHRcdFx0XHQ8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0xlc3Nvbkhpc3Rvcnl9IC8+XHJcblx0XHRcdFx0PFJvdXRlIHBhdGg9J2xlc3Nvbmhpc3RvcnknIGNvbXBvbmVudD17TGVzc29uSGlzdG9yeX0gY293cz0nbW9vJy8+XHJcblx0XHRcdDwvUm91dGU+XHJcblx0XHRcdFxyXG5cdFx0XHR7d29ya3NoZWV0Um91dGVzfVxyXG5cdFx0XHRcclxuXHRcdDwvUm91dGU+XHJcblx0PC9Sb3V0ZXI+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29uZmlnL3JvdXRlcy9pbmRleC5qc3giLCJleHBvcnQgdXNlcnMgZnJvbSAnLi91c2VycydcclxuZXhwb3J0IHVzZXJzTGVzc29uSGlzdG9yeSBmcm9tICcuL3VzZXJzTGVzc29uSGlzdG9yeSdcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JlZHV4L21vZHVsZXMvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY2xhc3MgVGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdE1hdGhKYXguSHViLlF1ZXVlKFtcIlR5cGVzZXRcIixNYXRoSmF4Lkh1Yl0pXHJcblx0fVxyXG5cdFxyXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuXHRcdE1hdGhKYXguSHViLlF1ZXVlKFtcIlR5cGVzZXRcIixNYXRoSmF4Lkh1Yl0pXHJcblx0fVxyXG5cdFxyXG5cdGdldE1hcmt1cCgpIHtcclxuXHRcdGlmICh0aGlzLnByb3BzLnQpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRfX2h0bWw6IGAkJHt0aGlzLnByb3BzLnR9JGAsXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0X19odG1sOiBgJCR7dGhpcy5wcm9wcy5jaGlsZHJlbn0kYCxcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHNwYW5cclxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17dGhpcy5nZXRNYXJrdXAoKX1cclxuXHRcdFx0Lz5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvTWF0aEpheC9UZXguanN4IiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jbGFzcyBUZXhNYXJrdXAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0TWF0aEpheC5IdWIuUXVldWUoW1wiVHlwZXNldFwiLE1hdGhKYXguSHViXSlcclxuXHR9XHJcblx0XHJcblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG5cdFx0TWF0aEpheC5IdWIuUXVldWUoW1wiVHlwZXNldFwiLE1hdGhKYXguSHViXSlcclxuXHR9XHJcblx0XHJcblx0Z2V0TWFya3VwKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0X19odG1sOiB0aGlzLnByb3BzLmNoaWxkcmVuLFxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLmdldE1hcmt1cCgpLl9faHRtbClcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxzcGFuXHJcblx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3RoaXMuZ2V0TWFya3VwKCl9XHJcblx0XHRcdC8+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXhNYXJrdXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL01hdGhKYXgvVGV4TWFya3VwLmpzeCIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnY29tcG9uZW50cydcclxuaW1wb3J0IHsgTWFpbiB9IGZyb20gJ2NvbXBvbmVudHMnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgY2hlY2tBdXRoIH0gZnJvbSAncmVkdXgvbW9kdWxlcy91c2VycydcclxuXHJcbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5wcm9wcy5jaGVja0F1dGgoKVxyXG5cdH1cclxuXHRcclxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcblx0XHQvLyByZS1yb3V0ZSBiYXNlZCBvbiBhdXRoIHN0YXR1c1xyXG5cdH1cclxuXHRcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nTWFpbic+XHJcblx0XHRcdFx0PE5hdmlnYXRpb24gLz5cclxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5NYWluQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuXHRpc0F1dGhlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdGlzQXV0aGVkOiBzdGF0ZS51c2Vycy5pc0F1dGhlZCxcclxuXHRhdXRoZWRJZDogc3RhdGUudXNlcnMuYXV0aGVkSWQsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG5cdG1hcFN0YXRlVG9Qcm9wcyxcclxuXHR7IGNoZWNrQXV0aCB9LFxyXG4pKE1haW5Db250YWluZXIpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL01haW4vTWFpbi5qc3giLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCAnLi9zdHlsZXMuc2NzcydcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tICdjb25maWcvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBzaWdub3V0VXNlciB9IGZyb20gJ3JlZHV4L21vZHVsZXMvdXNlcnMnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmNvbnN0IExlZnRMaW5rcyA9ICh7IGFkbWluIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PHVsPlxyXG5cdFx0XHQ8bGk+PExpbmsgdG89e0JBU0VfVVJMfT5Ib21lPC9MaW5rPjwvbGk+XHJcblx0XHRcdHsgYWRtaW4gPyA8bGk+PExpbmsgdG89e2Ake0JBU0VfVVJMfS9hZG1pbmB9PkFETUlOPC9MaW5rPjwvbGk+IDogbnVsbCB9XHJcblx0XHQ8L3VsPlxyXG5cdClcclxufVxyXG5cclxuY29uc3QgUmlnaHRMaW5rcyA9ICh7IGlzQXV0aGVkLCBhdXRoZWRJZCB9KSA9PiB7XHJcblx0aWYgKGlzQXV0aGVkKSB7XHJcblx0XHRpZiAoIWF1dGhlZElkKSBjb25zb2xlLndhcm4oJ0Vycm9yOiBObyBBdXRoZWQgSWQnKVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHVsPlxyXG5cdFx0XHRcdDxsaT48TGluayB0bz17YCR7QkFTRV9VUkx9L3Byb2ZpbGUvJHthdXRoZWRJZH1gfT5Qcm9maWxlPC9MaW5rPjwvbGk+XHJcblx0XHRcdFx0PGxpPjxMaW5rIHRvPXtgJHtCQVNFX1VSTH0vc2lnbm91dGB9PkxvZ291dDwvTGluaz48L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0KVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0PGxpPjxMaW5rIHRvPXtgJHtCQVNFX1VSTH0vc2lnbmluYH0+TG9naW48L0xpbms+PC9saT5cclxuXHRcdFx0XHQ8bGk+PExpbmsgdG89e2Ake0JBU0VfVVJMfS9zaWdudXBgfT5TaWduIFVwPC9MaW5rPjwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gKHsgaXNBdXRoZWQsIGF1dGhlZElkLCBhZG1pbiB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxuYXYgY2xhc3NOYW1lPSdOYXZpZ2F0aW9uJz5cclxuXHRcdFx0PExlZnRMaW5rcyBcclxuXHRcdFx0XHRhZG1pbj17YWRtaW59XHJcblx0XHRcdC8+XHJcblx0XHRcdDxSaWdodExpbmtzIFxyXG5cdFx0XHRcdGlzQXV0aGVkPXtpc0F1dGhlZH1cclxuXHRcdFx0XHRhdXRoZWRJZD17YXV0aGVkSWR9XHJcblx0XHRcdC8+XHJcblx0XHQ8L25hdj5cclxuXHQpXHJcbn1cclxuXHJcbk5hdmlnYXRpb24ucHJvcFR5cGVzID0ge1xyXG5cdGlzQXV0aGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyB1c2VycyB9KSA9PiAoe1xyXG5cdGlzQXV0aGVkOiB1c2Vycy5pc0F1dGhlZCxcclxuXHRhdXRoZWRJZDogdXNlcnMuYXV0aGVkSWQsXHJcblx0YWRtaW46IHVzZXJzLmF1dGhlZElkID8gdXNlcnNbdXNlcnMuYXV0aGVkSWRdLmFkbWluIDogZmFsc2UsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG5cdG1hcFN0YXRlVG9Qcm9wcyxcclxuKShOYXZpZ2F0aW9uKVxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzeCIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gJ2NvbmZpZy9jb25zdGFudHMnXHJcblxyXG5jbGFzcyBBZG1pbk5hdiBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PG5hdj5cclxuXHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHQ8bGk+PExpbms+QURNSU48L0xpbms+PC9saT5cclxuXHRcdFx0XHRcdDxsaT48TGluaz5MZXNzb24gSGlzdG9yeTwvTGluaz48L2xpPlxyXG5cdFx0XHRcdFx0PGxpPjxMaW5rPkRldGFpbHM8L0xpbms+PC9saT5cclxuXHRcdFx0XHRcdDxsaT48TGluaz5SZXN1bHRzPC9MaW5rPjwvbGk+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5OYXZcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvYWRtaW4vQWRtaW5OYXYvQWRtaW5OYXYuanN4IiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFkbWluTmF2IH0gZnJvbSAnY29tcG9uZW50cy9hZG1pbidcclxuXHJcbmNsYXNzIEFkbWluQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxBZG1pbk5hdlxyXG5cdFx0XHRcdFx0cGFyYW1zPXt0aGlzLnByb3BzLnBhcmFtc31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluQ29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2FkbWluL0FkbWluL0FkbWluLmpzeCIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzaWduaW5Vc2VyIH0gZnJvbSAncmVkdXgvbW9kdWxlcy91c2VycydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tICdjb25maWcvY29uc3RhbnRzJ1xyXG5cclxuY29uc3QgTG9naW4gPSAocHJvcHMpID0+IHtcclxuXHRsZXQgcGFzc3dvcmQgPSAnJ1xyXG5cdGxldCBlbWFpbCA9ICcnXHJcblx0XHJcblx0ZnVuY3Rpb24gb25TdWJtaXQoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRwcm9wcy5vblN1Ym1pdChlbWFpbCwgcGFzc3dvcmQpXHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHQ8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiIFxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGVtYWlsID0gZS50YXJnZXQudmFsdWV9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBcclxuXHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCIgXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gcGFzc3dvcmQgPSBlLnRhcmdldC52YWx1ZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4td2FybmluZycgdHlwZT1cImJ1dHRvblwiPkNhbmNlbDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbkxvZ2luLnByb3BUeXBlcyA9IHtcclxuXHRvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuY2xhc3MgTG9naW5Db250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdG9uU3VibWl0KGVtYWlsLCBwYXNzd29yZCkge1xyXG5cdFx0dGhpcy5wcm9wcy5zaWduaW5Vc2VyKGVtYWlsLCBwYXNzd29yZClcclxuXHRcdFx0LnRoZW4oKCkgPT4gYnJvd3Nlckhpc3RvcnkucHVzaChCQVNFX1VSTCkpXHJcblx0fVxyXG5cdFxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxMb2dpbiBcclxuXHRcdFx0XHRvblN1Ym1pdD17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxyXG5cdFx0XHQvPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuTG9naW5Db250YWluZXIucHJvcFR5cGVzID0ge1xyXG5cdHNpZ25pblVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcblx0bnVsbCxcclxuXHR7IHNpZ25pblVzZXIgfSxcclxuKShMb2dpbkNvbnRhaW5lcilcclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvYXV0aC9TaWduaW4vU2lnbmluLmpzeCIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNpZ25vdXRVc2VyIH0gZnJvbSAncmVkdXgvbW9kdWxlcy91c2VycydcclxuXHJcbmNsYXNzIFNpZ25vdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5wcm9wcy5zaWdub3V0VXNlcigpXHJcblx0fVxyXG5cdFxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0U3VjY2VzZnVsbHkgTG9nZ2VkIE91dC4gQ29tZSBiYWNrIHNvb24hXHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuU2lnbm91dC5wcm9wVHlwZXMgPSB7XHJcblx0c2lnbm91dFVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcblx0bnVsbCxcclxuXHR7IHNpZ25vdXRVc2VyIH0sXHJcbikoU2lnbm91dClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvYXV0aC9TaWdub3V0L1NpZ25vdXQuanN4IiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgcmVnaXN0ZXJVc2VyIH0gZnJvbSAncmVkdXgvbW9kdWxlcy91c2VycydcclxuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSAnY29uZmlnL2NvbnN0YW50cydcclxuXHJcbmNvbnN0IFNpZ251cCA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IGRldGFpbHMgPSB7XHJcblx0XHRlbWFpbDogJycsXHJcblx0XHRwYXNzd29yZDogJycsXHJcblx0XHRwYXNzd29yZENvbmZpcm06ICcnLFxyXG5cdH1cdFxyXG5cdFxyXG5cdGZ1bmN0aW9uIHN1Ym1pdChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdHByb3BzLm9uU3VibWl0KGRldGFpbHMpXHJcblx0XHRcdC50aGVuKCgpID0+IGJyb3dzZXJIaXN0b3J5LnB1c2goQkFTRV9VUkwpKVxyXG5cdFx0XHQuY2F0Y2goZXJyb3IgPT4gY29uc29sZS53YXJuKGVycm9yKSlcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQnPlxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17c3VibWl0fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHQ8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiIFxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGRldGFpbHMuZW1haWwgPSBlLnRhcmdldC52YWx1ZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0PGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIiBcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBkZXRhaWxzLnBhc3N3b3JkID0gZS50YXJnZXQudmFsdWV9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdDxsYWJlbD5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIiBcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBkZXRhaWxzLnBhc3N3b3JkQ29uZmlybSA9IGUudGFyZ2V0LnZhbHVlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgdHlwZT1cInN1Ym1pdFwiPlJlZ2lzdGVyPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi13YXJuaW5nJyB0eXBlPVwiYnV0dG9uXCI+Q2FuY2VsPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuU2lnbnVwLnByb3BUeXBlcyA9IHtcclxuXHQvLyBTaG91bGQgYmUgYXN5bmNocm9ub3VzZSBhbmQgcmV0dXJuIGEgcHJvbWlzZVxyXG5cdG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jbGFzcyBTaWdudXBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdG9uU3VibWl0KGRldGFpbHMpIHtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLnJlZ2lzdGVyVXNlcihkZXRhaWxzKVxyXG5cdH1cclxuXHRcclxuXHR2YWxpZGF0ZSgpIHtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8U2lnbnVwXHJcblx0XHRcdFx0b25TdWJtaXQ9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cclxuXHRcdFx0Lz5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcblNpZ251cENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcblx0cmVnaXN0ZXJVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoKSA9PiAoe1xyXG5cdFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuXHRtYXBTdGF0ZVRvUHJvcHMsXHJcblx0eyByZWdpc3RlclVzZXIgfVxyXG4pKFNpZ251cENvbnRhaW5lcilcclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2F1dGgvU2lnbnVwL1NpZ251cC5qc3giLCJleHBvcnQgU2lnbnVwIGZyb20gJy4vU2lnbnVwL1NpZ251cCdcclxuZXhwb3J0IFNpZ25pbiBmcm9tICcuL1NpZ25pbi9TaWduaW4nXHJcbmV4cG9ydCBTaWdub3V0IGZyb20gJy4vU2lnbm91dC9TaWdub3V0J1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9hdXRoL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnXHJcblxyXG5jb25zdCBOb3RlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPSdOb3RlJz5cclxuXHRcdHtjaGlsZHJlbn1cclxuXHQ8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9tYXJrdXAvd29ya3NoZWV0L05vdGUvTm90ZS5qc3giLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi9zdHlsZXMuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBRdWVzdGlvbih7IGNoaWxkcmVuLCBudW1iZXIsIHBhcnRzUGVyUm93IH0pIHtcclxuXHRjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pXHJcblx0Y29uc3QgZGVzY3JpcHRpb24gPSBjaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkLnR5cGUubmFtZSA9PT0gJ0Rlc2NyaXB0aW9uJylcclxuXHRjb25zdCBwYXJ0cyA9IGNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC50eXBlLm5hbWUgPT09ICdQYXJ0JylcclxuXHRjb25zdCBoYXNQYXJ0cyA9IHBhcnRzLmxlbmd0aCA+IDBcclxuXHRcclxuXHRmdW5jdGlvbiBwYXJ0VG9Db21wKHBhcnQsIGluZGV4KSB7XHJcblx0XHRjb25zdCB3aWR0aCA9IE1hdGguZmxvb3IoMTIvcGFydHNQZXJSb3cpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGNvbC14cy0ke3dpZHRofSBjb2wtc20tJHt3aWR0aH0gY29sLW1kLSR7d2lkdGh9IGNvbC1sZy0ke3dpZHRofWB9IGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdDxQYXJ0IHsuLi5wYXJ0LnByb3BzfSBudW1iZXI9e1N0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyBpbmRleCl9IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCBRdWVzdGlvbic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMSc+e251bWJlcn08L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTExJz5cclxuXHRcdFx0XHRcdHtkZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRcdGhhc1BhcnRzXHJcblx0XHRcdFx0XHRcdD8gPGRpdiBjbGFzc05hbWU9J3JvdyBhdXRvLWNsZWFyJz5cclxuXHRcdFx0XHRcdFx0XHR7cGFydHMubWFwKHBhcnRUb0NvbXApfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0OiBudWxsIFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuUXVlc3Rpb24uZGVmYXVsdFByb3BzID0ge1xyXG5cdHBhcnRzUGVyUm93OiAxLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVzY3JpcHRpb24oeyBjaGlsZHJlbiB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgRGVzY3JpcHRpb24nPntcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMic+e2NoaWxkcmVufTwvZGl2Pn1cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcnQoeyBjaGlsZHJlbiwgbnVtYmVyIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3JvdyBQYXJ0Jz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xJz57bnVtYmVyfTwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTExJz57Y2hpbGRyZW59PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcblBhcnQucHJvcFR5cGVzID0ge1xyXG5cdG51bWJlcjogUHJvcFR5cGVzLnN0cmluZyxcclxufVxyXG5cclxuXHJcbi8qXHJcblx0PGgyPlF1ZXN0aW9uczwvaDI+XHJcblx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCBxdWVzdGlvbic+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xJz4xPC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTEnPlRoaXMgaXMgYSBxdWVzdGlvbiB3aXRoIE5PIHBhcnRzPC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCBxdWVzdGlvbic+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xJz4xPC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTEnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMic+VGhpcyBpcyBhIHF1ZXN0aW9uIHdpdGggcGFydHM8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtNCc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgeCc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xIHknPmEpPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMSB4Jz5QYXJ0IGE8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtNCc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgeCc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xIHknPmEpPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMSB4Jz5QYXJ0IGE8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtNCc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgeCc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xIHknPmEpPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMSB4Jz5QYXJ0IGE8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuKi9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvbWFya3VwL3dvcmtzaGVldC9xdWVzdGlvbi9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBmZXRjaFVzZXJzTGVzc29uSGlzdG9yeSB9IGZyb20gJ3JlZHV4L21vZHVsZXMvdXNlcnNMZXNzb25IaXN0b3J5J1xyXG5cclxuY29uc3QgTGVzc29uID0gKHsgbGVzc29uIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdj57bGVzc29uLnRpbWVzdGFtcH08L2Rpdj5cclxuXHRcdFx0PGRpdj57bGVzc29uLnJlY29yZC50ZXh0fTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5MZXNzb24ucHJvcFR5cGVzID0ge1xyXG5cdGxlc3NvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jb25zdCBMZXNzb25IaXN0b3J5ID0gKHsgbGVzc29uSGlzdG9yeSB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdHtsZXNzb25IaXN0b3J5Lm1hcCgobGVzc29uLCBpbmRleCkgPT4gPExlc3NvbiBrZXk9e2luZGV4fSBsZXNzb249e2xlc3Nvbn0gLz4pfVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5jbGFzcyBMZXNzb25IaXN0b3J5Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMucHJvcHMuZmV0Y2hVc2Vyc0xlc3Nvbkhpc3RvcnkodGhpcy5wcm9wcy5wYXJhbXMudWlkKVxyXG5cdFx0XHQudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coJ2hpJywgZGF0YSkpXHJcblx0XHRjb25zb2xlLmxvZygnY293cycsIHRoaXMucHJvcHMpXHJcblx0fVxyXG5cdFxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxMZXNzb25IaXN0b3J5IFxyXG5cdFx0XHRcdGxlc3Nvbkhpc3Rvcnk9e3RoaXMucHJvcHMubGVzc29uSGlzdG9yeX1cclxuXHRcdFx0Lz5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbkxlc3Nvbkhpc3RvcnlDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG5cdGxlc3Nvbkhpc3Rvcnk6IFByb3BUeXBlcy5hcnJheSxcclxuXHRmZXRjaFVzZXJzTGVzc29uSGlzdG9yeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4gKHtcclxuXHRsZXNzb25IaXN0b3J5OiBzdGF0ZS51c2Vyc0xlc3Nvbkhpc3RvcnlbcHJvcHMucGFyYW1zLnVpZF1cclxuXHRcdD8gc3RhdGUudXNlcnNMZXNzb25IaXN0b3J5W3Byb3BzLnBhcmFtcy51aWRdLmhpc3RvcnlcclxuXHRcdDogW10sXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG5cdG1hcFN0YXRlVG9Qcm9wcyxcclxuXHR7IGZldGNoVXNlcnNMZXNzb25IaXN0b3J5IH0sXHJcbikoTGVzc29uSGlzdG9yeUNvbnRhaW5lcilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9MZXNzb25IaXN0b3J5L0xlc3Nvbkhpc3RvcnkuanN4IiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSAnY29uZmlnL2NvbnN0YW50cydcclxuXHJcbmNsYXNzIFByb2ZpbGVOYXYgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxuYXY+XHJcblx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0PGxpPjxMaW5rPkJvb2ttYXJrczwvTGluaz48L2xpPlxyXG5cdFx0XHRcdFx0PGxpPjxMaW5rIHRvPXtgJHtCQVNFX1VSTH0vcHJvZmlsZS8ke3RoaXMucHJvcHMucGFyYW1zLnVpZH0vbGVzc29uaGlzdG9yeWB9Pkxlc3NvbiBIaXN0b3J5PC9MaW5rPjwvbGk+XHJcblx0XHRcdFx0XHQ8bGk+PExpbms+RGV0YWlsczwvTGluaz48L2xpPlxyXG5cdFx0XHRcdFx0PGxpPjxMaW5rPlJlc3VsdHM8L0xpbms+PC9saT5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9uYXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlTmF2XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZU5hdi9Qcm9maWxlTmF2LmpzeCIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQcm9maWxlTmF2IH0gZnJvbSAnY29tcG9uZW50cy9wcm9maWxlJ1xyXG5cclxuY2xhc3MgUHJvZmlsZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8UHJvZmlsZU5hdlxyXG5cdFx0XHRcdFx0cGFyYW1zPXt0aGlzLnByb3BzLnBhcmFtc31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVDb250YWluZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9Qcm9maWxlL1Byb2ZpbGUuanN4IiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUb3BpYywgU3ViVG9waWMgfSBmcm9tICdjb21wb25lbnRzL3dvcmtzaGVldCdcclxuXHJcbmNvbnN0IENvbnRlbnRzID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cdGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbilcclxuXHRjaGlsZHJlbiA9IGNoaWxkcmVuLm1hcCgodG9waWMsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PHRvcGljLnR5cGUgXHJcblx0XHRcdFx0XHRcdFx0XHR7Li4udG9waWMucHJvcHN9XHJcblx0XHRcdFx0XHRcdFx0XHR0b3BpY051bT17KGluZGV4ICsgMSl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KSlcclxuXHRcclxuXHRjb25zdCByb3dzID0gY2hpbGRyZW4ucmVkdWNlKChyb3dzLCB0b3BpYywgaW5kZXgsIGNoaWxkcmVuKSA9PiB7XHJcblx0XHRpZiAoaW5kZXggJSAyID09PSAwKSB7XHJcblx0XHRcdHJvd3MucHVzaCgoXHJcblx0XHRcdFx0PGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTYnPlxyXG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW5baW5kZXhdfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTYnPlxyXG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW5baW5kZXggKyAxXX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpKVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJvd3NcclxuXHR9LCBbXSlcclxuXHRcclxuXHQvLyBSZW5kZXJlZCBDb21wb25lbnRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J0NvbnRlbnRzIGNvbnRhaW5lci1mbHVpZCc+XHJcblx0XHRcdHtyb3dzfVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50c1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvQ29udGVudHMvQ29udGVudHMuanN4IiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUb3BpYywgU3ViVG9waWMsIENvbnRlbnRzIH0gZnJvbSAnY29tcG9uZW50cy93b3Jrc2hlZXQnXHJcbmltcG9ydCB7IEJBU0VfVVJMLCBXT1JLU0hFRVRTX1VSTCB9IGZyb20gJ2NvbmZpZy9jb25zdGFudHMnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPSdIb21lJz5cclxuXHRcdDxoMT5Db250ZW50cyAtIFdvcmtzaGVldHMvTm90ZXM8L2gxPlxyXG5cdFx0PENvbnRlbnRzPlxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nU2V0cyc+XHJcblx0XHRcdFx0PFN1YlRvcGljIG5hbWU9J1NldCBOb3RhdGlvbiBbVE9ET10nIHBhdGg9e2Ake0JBU0VfVVJMfS8ke1dPUktTSEVFVFNfVVJMfS9TZXRzL1NldE5vdGF0aW9uYH0vPlxyXG5cdFx0XHRcdDxTdWJUb3BpYyBuYW1lPSdTZXQgQnVpbGRlciBOb3RhdGlvbiBbVE9ET10nIHBhdGg9e2Ake0JBU0VfVVJMfS8ke1dPUktTSEVFVFNfVVJMfS9TZXRzL1NldEJ1aWxkZXJgfS8+XHJcblx0XHRcdDwvVG9waWM+XHJcblx0XHRcdFxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nRnVuY3Rpb25zJz5cclxuXHRcdFx0XHQ8U3ViVG9waWMgbmFtZT0nQ29tcG9zaXRlIEZ1bmN0aW9ucycgcGF0aD17YCR7QkFTRV9VUkx9LyR7V09SS1NIRUVUU19VUkx9L0Z1bmN0aW9ucy9Db21wb3NpdGVGdW5jdGlvbnNgfS8+XHJcblx0XHRcdFx0PFN1YlRvcGljIG5hbWU9J0ludmVyc2UgRnVuY3Rpb25zJyBwYXRoPXtgJHtCQVNFX1VSTH0vJHtXT1JLU0hFRVRTX1VSTH0vRnVuY3Rpb25zL0ludmVyc2VGdW5jdGlvbnNgfS8+XHRcdFx0XHRcclxuXHRcdFx0XHQ8U3ViVG9waWMgbmFtZT0nQWJzb2x1dGUgVmFsdWUgRnVuY3Rpb25zIFtUT0RPXScgcGF0aD17YCR7QkFTRV9VUkx9LyR7V09SS1NIRUVUU19VUkx9L0Z1bmN0aW9ucy9BYnNvbHV0ZVZhbHVlRnVuY3Rpb25zYH0vPlxyXG5cdFx0XHRcdDxTdWJUb3BpYyBuYW1lPSdSZWNpcHJvY2FsIEZ1bmN0aW9ucyBbVE9ET10nIHBhdGg9e2Ake0JBU0VfVVJMfS8ke1dPUktTSEVFVFNfVVJMfS9GdW5jdGlvbnMvUmVjaXByb2NhbEZ1bmN0aW9uc2B9Lz5cclxuXHRcdFx0PC9Ub3BpYz5cclxuXHRcdFx0XHJcblx0XHRcdDxUb3BpYyBuYW1lPSdDb29yZGluYXRlIEdlb21ldHJ5Jz5cclxuXHRcdFx0XHQ8U3ViVG9waWMgbmFtZT0nQ2lyY2xlcywgRWxsaXBzZXMgYW5kIEh5cGVyYm9sYXMgW1RPRE9dJyBwYXRoPXtgJHtCQVNFX1VSTH0vJHtXT1JLU0hFRVRTX1VSTH0vQ29vcmRpbmF0ZUdlb21ldHJ5L0NpcmNsZXNFbGxpcHNlc0FuZEh5cGVyYm9sYXNgfS8+XHJcblx0XHRcdDwvVG9waWM+XHJcblx0XHRcdFxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nVHJpZ29ub21ldHJ5IGFuZCBDaXJjdWxhciBGdW5jdGlvbnMnPjwvVG9waWM+XHJcblx0XHRcdFxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nVmVjdG9ycyc+PC9Ub3BpYz5cclxuXHRcdFx0PFRvcGljIG5hbWU9J0NvbXBsZXggTnVtYmVycyc+PC9Ub3BpYz5cclxuXHRcdFx0XHJcblx0XHRcdDxUb3BpYyBuYW1lPSdLaW5lbWF0aWNzJz48L1RvcGljPlxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nRGlmZmVyZW50aWFsIENhbGN1bHVzJz48L1RvcGljPlxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nSW50ZWdyYWwgQ2FsY3VsdXMgW09MRCBOT1RFU10nPlxyXG5cdFx0XHRcdDxTdWJUb3BpYyBuYW1lPSdJbnRyb2R1Y3Rpb24gYW5kIE5vdGF0aW9uJyBwYXRoPXsnaHR0cHM6Ly93d3cub3ZlcmxlYWYuY29tL3JlYWQvbWprY2Rqd252d3ZiJ30gZXh0ZXJuYWw9e3RydWV9IC8+XHJcblx0XHRcdFx0PFN1YlRvcGljIG5hbWU9J1N1YnN0aXR1dGlvbicgcGF0aD17J2h0dHBzOi8vd3d3Lm92ZXJsZWFmLmNvbS9yZWFkL21qa2Nkandudnd2Yid9IGV4dGVybmFsPXt0cnVlfSAvPlxyXG5cdFx0XHRcdDxTdWJUb3BpYyBuYW1lPSdJbnRlZ3JhdGlvbiBieSBQYXJ0cycgcGF0aD17J2h0dHBzOi8vd3d3Lm92ZXJsZWFmLmNvbS9yZWFkL21qa2Nkandudnd2Yid9IGV4dGVybmFsPXt0cnVlfSAvPlxyXG5cdFx0XHRcdDxTdWJUb3BpYyBuYW1lPSdSZXZlcnNlIFF1b3RpZW50IFJ1bGUuIE5vIScgcGF0aD17J2h0dHBzOi8vd3d3Lm92ZXJsZWFmLmNvbS9yZWFkL21qa2Nkandudnd2Yid9IGV4dGVybmFsPXt0cnVlfSAvPlxyXG5cdFx0XHRcdDxTdWJUb3BpYyBuYW1lPSdVc2luZyBUcmlnb25vbWV0cmljIElkZW50aXRpZXMnIHBhdGg9eydodHRwczovL3d3dy5vdmVybGVhZi5jb20vcmVhZC9tamtjZGp3bnZ3dmInfSBleHRlcm5hbD17dHJ1ZX0gLz5cclxuXHRcdFx0XHQ8U3ViVG9waWMgbmFtZT0nUGFydGlhbCBGcmFjdGlvbnMnIHBhdGg9eydodHRwczovL3d3dy5vdmVybGVhZi5jb20vcmVhZC9tamtjZGp3bnZ3dmInfSBleHRlcm5hbD17dHJ1ZX0gLz5cclxuXHRcdFx0XHQ8U3ViVG9waWMgbmFtZT0nQXJlYXMgVW5kZXIgQ3VydmVzJyBwYXRoPXsnaHR0cHM6Ly93d3cub3ZlcmxlYWYuY29tL3JlYWQvbWprY2Rqd252d3ZiJ30gZXh0ZXJuYWw9e3RydWV9IC8+XHJcblx0XHRcdFx0PFN1YlRvcGljIG5hbWU9J0FyZWFzIEJldHdlZW4gQ3VydmVzJyBwYXRoPXsnaHR0cHM6Ly93d3cub3ZlcmxlYWYuY29tL3JlYWQvbWprY2Rqd252d3ZiJ30gZXh0ZXJuYWw9e3RydWV9IC8+XHJcblx0XHRcdFx0PFN1YlRvcGljIG5hbWU9J1ZvbHVtZXMgb2YgU29saWRzIG9mIFJldm9sdXRpb25zJyBwYXRoPXsnaHR0cHM6Ly93d3cub3ZlcmxlYWYuY29tL3JlYWQvbWprY2Rqd252d3ZiJ30gZXh0ZXJuYWw9e3RydWV9IC8+XHJcblx0XHRcdFx0PFN1YlRvcGljIG5hbWU9J0FyZWEgQXBwcm94aW1hdGlvbiwgSW50cm9kdWN0aW9uIHRvIFJpZW1hbiBJbnRlZ3JhdGlvbicgcGF0aD17J2h0dHBzOi8vd3d3Lm92ZXJsZWFmLmNvbS9yZWFkL21qa2Nkandudnd2Yid9IGV4dGVybmFsPXt0cnVlfSAvPlxyXG5cdFx0XHQ8L1RvcGljPlxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nRGlmZmVyZW50aWFsIEVxdWF0aW9ucyc+PC9Ub3BpYz5cdFx0XHRcclxuXHRcdFx0PFRvcGljIG5hbWU9J01lY2hhbmljcyc+PC9Ub3BpYz5cclxuXHRcdFx0PFRvcGljIG5hbWU9J1ZlY3RvciBDYWxjdWx1cyc+PC9Ub3BpYz5cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQ8VG9waWMgbmFtZT0nUHJvYmFiaWxpdHknPjwvVG9waWM+XHJcblx0XHRcdDxUb3BpYyBuYW1lPSdTdGF0aXN0aWNzJz48L1RvcGljPlxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHQ8L0NvbnRlbnRzPlxyXG5cdDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvSG9tZS9Ib21lLmpzeCIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tICdjb25maWcvY29uc3RhbnRzJ1xyXG5cclxuY29uc3QgU3ViVG9waWMgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBpbnRlcm5hbHMgPSBbXHJcblx0XHRwcm9wcy5leHRlcm5hbFxyXG5cdFx0XHRcdD8gPGRpdiBrZXk9ezB9PjxhIGhyZWY9e3Byb3BzLnBhdGh9Pntwcm9wcy50b3BpY051bX08L2E+PC9kaXY+XHJcblx0XHQ6IDxkaXYga2V5PXswfT48TGluayB0bz17cHJvcHMucGF0aH0+e3Byb3BzLnRvcGljTnVtfTwvTGluaz48L2Rpdj4sXHJcblx0XHRwcm9wcy5leHRlcm5hbFxyXG5cdFx0XHQ/IDxkaXYga2V5PXsxfT48YSBocmVmPXtwcm9wcy5wYXRofT57cHJvcHMubmFtZX08L2E+PC9kaXY+XHJcblx0XHRcdDogPGRpdiBrZXk9ezF9PjxMaW5rIHRvPXtwcm9wcy5wYXRofT57cHJvcHMubmFtZX08L0xpbms+PC9kaXY+LFx0XHRcclxuXHRdXHJcblx0XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdTdWJUb3BpYyc+XHJcblx0XHRcdHtpbnRlcm5hbHN9XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcblN1YlRvcGljLmRlZmF1bHRQcm9wcyA9IHtcclxuXHRleHRlcm5hbDogZmFsc2UsXHJcblx0cGF0aDogQkFTRV9VUkwsXHJcblx0dG9waWNOdW06ICdlcnJvcicsXHJcbn1cclxuXHJcblN1YlRvcGljLnByb3BUeXBlcyA9IHtcclxuXHRleHRlcm5hbDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuXHRwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0bmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdHRvcGljTnVtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1YlRvcGljXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3dvcmtzaGVldC9TdWJUb3BpYy9TdWJUb3BpYy5qc3giLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFN1YlRvcGljIH0gZnJvbSAnY29tcG9uZW50cy93b3Jrc2hlZXQnXHJcblxyXG5jb25zdCBUb3BpYyA9ICh7IG5hbWUsIHRvcGljTnVtLCBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVxyXG5cdGxldCBrZXkgPSAwXHJcblx0Y29uc3Qgc3VidG9waWNzID0gY2hpbGRyZW4ubWFwKChzdWJ0b3BpYywgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTdWJUb3BpYyBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnN1YnRvcGljLnByb3BzfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG9waWNOdW09e2Ake3RvcGljTnVtfS4ke2luZGV4fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdUb3BpYyc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiIC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuXHRcdFx0XHRcdDxoMj57YCR7dG9waWNOdW19IC0gJHtuYW1lfWB9PC9oMj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0wXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tM1wiIC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxyXG5cdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHR7c3VidG9waWNzfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0wXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcGljXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3dvcmtzaGVldC9Ub3BpYy9Ub3BpYy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRleCBhcyBUIH0gZnJvbSAnTWF0aEpheCdcclxuaW1wb3J0IHsgUXVlc3Rpb24sIERlc2NyaXB0aW9uLCBQYXJ0LCBOb3RlIH0gZnJvbSAnY29tcG9uZW50cy9tYXJrdXAvd29ya3NoZWV0J1xyXG5pbXBvcnQgY2lyY2xlQXRPcmlnaW4gZnJvbSAnLi9DaXJjbGVBdE9yaWdpbi5wbmcnXHJcblxyXG5jb25zdCBDaXJjbGVzRWxsaXBzZXNBbmRIeXBlcmJvbGFzID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPSdNYXRoTWFya3VwJz5cclxuXHRcdDxoMT5DaXJjbGVzLCBFbGxpcHNlcyBhbmQgSHlwZXJib2xhczwvaDE+XHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0PGgyPkNpcmNsZXM8L2gyPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRDb25zaWRlciBhIGNpcmNsZSBhcm91bmQgdGhlIG9yaWdpbiwgaXQgaGFzIGEgY29uc3RhbnQgcmFkaXVzLiBUaGUgZGlzdGFuY2UgZnJvbSBhIHBvaW50IHRvIHRoZSBvcmlnaW4gaXMgPFQgdD0nXFxzcXJ0e3heMiArIHleMn0nIC8+LiBTbyBpZiBvdXIgY2lyY2xlIGhhcyBjb25zdGFudCByYWRpdXMgJHIkLCB0aGVuIHRoZSBlcXVhdGlvbiBvZiB0aGUgY2lyY2xlIG11c3QgYmUgPFQ+e2ByID0gXFxcXHNxcnR7eF4yICsgeV4yfWB9PC9UPiBvciA8VD57YHJeMiA9IHheMiArIHleMmB9PC9UPi5cdFx0XHRcdFxyXG5cdFx0XHRcdDxpbWcgY2xhc3NOYW1lPSdoY2VudGVyIGltZy1yZXNwb25zaXZlJyBzcmM9e2NpcmNsZUF0T3JpZ2lufSBhbHQ9XCJDaXJjbGVBdE9yaWdpblwiIC8+XHJcblx0XHRcdDwvcD5cclxuXHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdFRoZSBnZW5lcmFsIGVxdWF0aW9uIG9mIGEgY2lyY2xlIG9mIHJhZGl1cyA8VD57J3InfTwvVD4gYW5kIGNlbnRlciA8VD57YChhLGIpYH08L1Q+IGlzIHRoZW4gPFQ+eydyXjIgPSAoeC1hKV4yICsgKHktYileMid9PC9UPiBhcyB3ZSBjYW4gc2ltcGx5IHRyYW5zbGF0ZSBhIGNpcmNsZSBjZW50ZXJlZCBhdCB0aGUgb3JpZ2luLlxyXG5cdFx0XHQ8L3A+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcclxuXHRcdDxzZWN0aW9uPlxyXG5cdFx0XHQ8aDI+RWxsaXBzZXM8L2gyPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRMZXQncyByZXdyaXRlIG91ciBjaXJjbGUgZXF1YXRpb24gYXMgPFQ+e2AxID0gXFxcXGZyYWN7eF4yfXtyXjJ9ICsgXFxcXGZyYWN7eV4yfXtyXjJ9YH08L1Q+LiBJbiB0aGlzIGZvcm0gd2UgY2FuIHNlZSB3aHkgdGhlIDxUPnsneCd9PC9UPiBhbmQgPFQ+eyd5J308L1Q+IGludGVyY2VwdHMgYXJlIDxUPnsnXFxcXHBtIHInfTwvVD4gYXMgd2hlbiBlaXRoZXIgPFQ+eyd4J308L1Q+IG9yIDxUPnsneSd9PC9UPiBhcmUgPFQ+eycwJ308L1Q+LCB0aGUgb3RoZXIgbXVzdCBiZSA8VD57J3InfTwvVD4gaW4gb3JkZXIgdG8gZXF1YWwgPFQ+eycxJ308L1Q+LlxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdFxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRXZSBhbHNvIHNlZSB0aGF0IDxUPnsneCd9PC9UPiBhbmQgPFQ+eyd5J308L1Q+IGFyZSBpbnZlcnNlbHkgcmVsYXRlZCBhcyB3aGVuIGVpdGhlciA8VD57J3gnfTwvVD4gb3IgPFQ+eyd5J308L1Q+IGluY3JlYXNlIHRoZSBvdGhlciBtdXN0IGRlY3JlYXNlLCBhbmQgdmljZSB2ZXJzYSwgY29uc2lzdGVudCB3aXRoIHRoZSBzaGFwZSBvZiBhIGNpcmNsZS4gS2VlcGluZyB0aGlzIGluIG1pbmQsIHRoZXJlIGlzIG5vIHJlYXNvbiB0aGF0IGJvdGggZGVub21pbmF0b3JzIGhhdmUgdG8gYmUgdGhlIHNhbWUuIFxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdFxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRDb25zaWRlciA8VD57YDEgPSBcXFxcZnJhY3t4XjJ9e2FeMn0gKyBcXFxcZnJhY3t5XjJ9e2JeMn1gfTwvVD4uIFVzaW5nIHRoZSBzYW1lIGxvZ2ljIGFzIGJlZm9yZSwgdGhlIDxUPnsneCd9PC9UPiBpbnRlcmNlcHQgbXVzdCBiZSA8VD57J1xcXFxwbSBhJ308L1Q+IGFuZCB0aGUgPFQ+eyd5J308L1Q+IGludGVyY2VwdCBtdXN0IGJlIDxUPnsnXFxcXHBtIGInfTwvVD4uIFdlIGFsc28gbWFpbnRhaW4gdGhlIGludmVyc2UgcmVsYXRpb24gYmV0d2VlbiA8VD57J3gnfTwvVD4gYW5kIDxUPnsneSd9PC9UPiBzbyB3ZSBlbmQgdXAgd2l0aCBhICdjaXJjbGUnIHRoYXQgbWF5IG5vdCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyB3aWR0aCwgaWUsIGFuIGVsbGlwc2UuXHJcblx0XHRcdDwvcD5cclxuXHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdFRoZSBnZW5lcmFsIGVxdWF0aW9uIG9mIGFuIGVsbGlwc2UgY2VudGVyZWQgYXQgPFQ+e2AoaCxrKWB9PC9UPiBpcyB0aGVuIDxUPnsnMSA9IFxcXFxmcmFjeyh4LWgpXjJ9e2FeMn0gKyBcXFxcZnJhY3soeS1rKV4yfXtiXjJ9J308L1Q+IGFzIHdlIGNhbiBzaW1wbHkgdHJhbnNsYXRlIGFuIGVsbGlwc2UgY2VudGVyZWQgYXQgdGhlIG9yaWdpbi5cclxuXHRcdFx0PC9wPlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0PGgyPkh5cGVyYm9sYXM8L2gyPlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFxyXG5cdFx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezN9IG51bWJlcj0nMSc+XHJcblx0XHRcdFx0PERlc2NyaXB0aW9uPlRoaXMgaXMgYSBxdWVzdGlvbiB3aXRob3V0IHBhcnRzPC9EZXNjcmlwdGlvbj5cclxuXHRcdFx0PC9RdWVzdGlvbj5cclxuXHRcdFx0XHJcblx0XHRcdDxRdWVzdGlvbiBwYXJ0c1BlclJvdz17M30gbnVtYmVyPScyJz5cclxuXHRcdFx0XHQ8RGVzY3JpcHRpb24+VGhpcyBpcyBhIHF1ZXN0aW9uIHdpdGggcGFydHM8L0Rlc2NyaXB0aW9uPlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYSc+PFQgdD0nZih4KSA9IFxcZnJhY3t4ICsgMX17eCArIDN9Jy8+PC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYSc+PFQgdD0nZih4KSA9IFxcZnJhY3t4ICsgMX17eCArIDN9Jy8+PC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYSc+PFQgdD0nZih4KSA9IFxcZnJhY3t4ICsgMX17eCArIDN9Jy8+PC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYSc+PFQgdD0nZih4KSA9IFxcZnJhY3t4ICsgMX17eCArIDN9Jy8+PC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYSc+PFQgdD0nZih4KSA9IFxcZnJhY3t4ICsgMX17eCArIDN9Jy8+PC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYic+UGFydCBiPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHQ8L1F1ZXN0aW9uPlxyXG5cdFx0XHRcclxuXHRcdFx0PE5vdGU+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFNvbWUgTm90ZXMgPFQgdD0nZiA6ICgyLFxcaW5mdHkpIFxccmlnaHRhcnJvdyBcXG1hdGhiYntSfSwgZih4KSA9IFxcc3FydHsyeCArIDN9Jy8+IGFuZCBzb21lIGNvd3NcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9Ob3RlPlxyXG5cdFx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezR9IG51bWJlcj0nMyc+XHJcblx0XHRcdFx0PERlc2NyaXB0aW9uPlRoaXMgaXMgYSBxdWVzdGlvbiB3aXRoIHBhcnRzPC9EZXNjcmlwdGlvbj5cclxuXHRcdFx0XHQ8UGFydCBudW1iZXI9J2InPlBhcnQgYjwvUGFydD5cclxuXHRcdFx0XHQ8UGFydCBudW1iZXI9J2EnPlxyXG5cdFx0XHRcdFx0PGRpdj5mZ2RmZ2RmZ2RmZzwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj5jb3dzIGdvIG1vbyBtb28gZmdkZmdkZmdkZmcgZGZnIGRmPC9kaXY+XHJcblx0XHRcdFx0PC9QYXJ0Plx0XHRcdFx0XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdjJz5QYXJ0IGM8L1BhcnQ+XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdkJz5QYXJ0IGQ8L1BhcnQ+XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdkJz5QYXJ0IGQ8L1BhcnQ+XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdkJz5QYXJ0IGQ8L1BhcnQ+XHJcblx0XHRcdDwvUXVlc3Rpb24+XHJcblx0XHRcdFxyXG5cdFx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezN9IG51bWJlcj0nNCc+XHJcblx0XHRcdFx0PERlc2NyaXB0aW9uPklmIDxUIHQ9J2YgOiAoMixcXGluZnR5KSBcXHJpZ2h0YXJyb3cgXFxtYXRoYmJ7Un0sIGYoeCkgPSBcXHNxcnR7MnggKyAzfScvPiwgdGhlbiB0aGUgaW52ZXJzZSBmdW5jdGlvbiBpczwvRGVzY3JpcHRpb24+XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdhJz5mZ2hmZ2hmZ2hmZ2ggZmdoIGZnaCBmZ2ggZ2doZmdoZmcgZmdoZmdoIGZnaCBmZyBmZyBhPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYic+UGFydCBiPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+UGFydCBjPC9QYXJ0PlxyXG5cdFx0XHQ8L1F1ZXN0aW9uPlxyXG5cdFx0XHRcclxuXHRcdFx0PFF1ZXN0aW9uIHBhcnRzUGVyUm93PXszfSBudW1iZXI9JzUnPlxyXG5cdFx0XHRcdDxEZXNjcmlwdGlvbj5UaGlzIGlzIGEgcXVlc3Rpb24gd2l0aCBwYXJ0czwvRGVzY3JpcHRpb24+XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdhJz5QYXJ0IGE8L1BhcnQ+XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdiJz5QYXJ0IGI8L1BhcnQ+XHJcblx0XHRcdFx0PFBhcnQgbnVtYmVyPSdjJz5QYXJ0IGM8L1BhcnQ+XHJcblx0XHRcdDwvUXVlc3Rpb24+XHJcblx0XHRcdFxyXG5cdFx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezN9IG51bWJlcj0nNic+XHJcblx0XHRcdFx0PERlc2NyaXB0aW9uPlRoaXMgaXMgYSBxdWVzdGlvbiB3aXRoIHBhcnRzPC9EZXNjcmlwdGlvbj5cclxuXHRcdFx0XHQ8UGFydCBudW1iZXI9J2EnPlBhcnQgYTwvUGFydD5cclxuXHRcdFx0XHQ8UGFydCBudW1iZXI9J2InPlBhcnQgYjwvUGFydD5cclxuXHRcdFx0XHQ8UGFydCBudW1iZXI9J2MnPlBhcnQgYzwvUGFydD5cclxuXHRcdFx0PC9RdWVzdGlvbj5cclxuXHRcdFx0XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdDwvZGl2PlxyXG4pXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaXJjbGVzRWxsaXBzZXNBbmRIeXBlcmJvbGFzXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL0Nvb3JkaW5hdGVHZW9tZXRyeS9DaXJjbGVzRWxsaXBzZXNBbmRIeXBlcmJvbGFzL0NpcmNsZXNFbGxpcHNlc0FuZEh5cGVyYm9sYXMuanN4IiwiZXhwb3J0IENpcmNsZXNFbGxpcHNlc0FuZEh5cGVyYm9sYXMgZnJvbSAnLi9DaXJjbGVzRWxsaXBzZXNBbmRIeXBlcmJvbGFzL0NpcmNsZXNFbGxpcHNlc0FuZEh5cGVyYm9sYXMnXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvQ29vcmRpbmF0ZUdlb21ldHJ5L2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUZXgsIFRleE1hcmt1cCB9IGZyb20gJ01hdGhKYXgnXHJcblxyXG5jb25zdCBBYnNvbHV0ZVZhbHVlRnVuY3Rpb25zID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPSdNYXRoTWFya3VwJz5cclxuXHRcdDxoMT5BYnNvbHV0ZSBWYWx1ZSBGdW5jdGlvbnM8L2gxPlxyXG5cdDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYnNvbHV0ZVZhbHVlRnVuY3Rpb25zXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvRnVuY3Rpb25zL0Fic29sdXRlVmFsdWVGdW5jdGlvbnMvQWJzb2x1dGVWYWx1ZUZ1bmN0aW9ucy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRleCBhcyBUIH0gZnJvbSAnTWF0aEpheCdcclxuaW1wb3J0IHsgUXVlc3Rpb24sIERlc2NyaXB0aW9uLCBQYXJ0LCBOb3RlIH0gZnJvbSAnY29tcG9uZW50cy9tYXJrdXAvd29ya3NoZWV0J1xyXG5cclxuY29uc3QgQ29tcG9zaXRlRnVuY3Rpb25zID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPSdNYXRoTWFya3VwJz5cclxuXHRcdDxoMT5Db21wb3NpdGUgRnVuY3Rpb25zPC9oMT5cclxuXHRcdFxyXG5cdFx0PGgyPlF1ZXN0aW9uczwvaDI+XHJcblx0XHRcclxuXHRcdDxOb3RlPlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdEdpdmVuIHR3byBmdW5jdGlvbnMgPFQgdD0nZicvPiBhbmQgPFQgdD0nZycvPiwgdGhlIGNvbXBvc2l0aW9uIDxUIHQ9J2ggPSBmIFxcY2lyYyBnJy8+IGlzIGRlZmluZWQgYXMgPFQgdD0naCh4KSA9IGYoZyh4KSknLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXY+PHN0cm9uZz5FeGFtcGxlOjwvc3Ryb25nPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2PklmIDxUIHQ9J2YoeCkgPSAyeCcvPiwgPFQgdD0nZyh4KSA9IHheMicvPiBhbmQgPFQgdD0naCA9IGYgXFxjaXJjIGcnLz4sIHRoZW4sIDxUIHQ9J2goeCkgPSBmKGcoeCkpID0gZih4XjIpID0gMnheMicvPjwvZGl2PlxyXG5cdFx0PC9Ob3RlPlxyXG5cdFx0XHJcblx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezN9IG51bWJlcj0nMSc+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5Bc3N1bWluZyB0aGF0IDxUIHQ9J2ggPSBmIFxcY2lyYyBnJy8+IGV4aXN0cywgZmluZCB0aGUgcnVsZSBvZiA8VCB0PSdoJy8+PC9EZXNjcmlwdGlvbj5cclxuXHRcdFx0PFBhcnQ+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdmKHgpID0gMnggKyAxJy8+PC9kaXY+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdnKHgpID0gM3gnLz48L2Rpdj5cclxuXHRcdFx0PC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2YoeCkgPSAyeCAtIDEnLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2coeCkgPSB4XjIgKyAxJy8+PC9kaXY+XHJcblx0XHRcdDwvUGFydD5cclxuXHRcdFx0PFBhcnQ+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdmKHgpID0geF4yICsgM3gnLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2coeCkgPSAyeCArIDMnLz48L2Rpdj5cclxuXHRcdFx0PC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PE5vdGU+XHJcblx0XHRcdDxkaXY+R2l2ZW4gdHdvIGZ1bmN0aW9ucyA8VCB0PSdmJy8+IGFuZCA8VCB0PSdnJy8+LCB0aGUgY29tcG9zaXRpb24gPFQgdD0naCA9IGYgXFxjaXJjIGcnLz4gZXhpc3RzIGlmIDxUIHQ9J1xcdGV4dHtyYW5nZX0oZykgXFxzdWJzZXRlcSBcXHRleHR7ZG9tYWlufShmKScvPi48L2Rpdj5cclxuXHRcdFx0PGRpdj5UaGlzIG1lYW5zIHRoYXQgd2hhdCBjb21lcyBvdXQgb2YgdGhlIGlubmVyIGZ1bmN0aW9uICg8VCB0PSdnJy8+KSBtdXN0IGJlIGEgdmFsaWQgaW5wdXQgb2YgdGhlIG91dGVyIGZ1bmN0aW9uLjwvZGl2PlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0PGRpdj5Zb3UgbWF5IGltYWdpbmUgYW4gYXNzZW1ibHkgbGluZS4uLjwvZGl2PlxyXG5cdFx0XHQ8ZGl2Pldvb2QgPFQgdD0nXFx1bmRlcnNldHtcXHRleHR7VGFibGUgRmFjdG9yeX19e1xccmlnaHRhcnJvd30nLz4gVGFibGUgPFQgdD0nXFx1bmRlcnNldHtcXHRleHR7VGFibGUgUGFpbnRlcn19e1xccmlnaHRhcnJvd30nLz4gUGFpbnRlZCBUYWJsZTwvZGl2PlxyXG5cdFx0XHQ8ZGl2Pldvb2QgPFQgdD0nXFx1bmRlcnNldHtcXHRleHR7V29vZCBDaGlwcGVyfX17XFxyaWdodGFycm93fScvPiBXb29kIENoaXBzIDxUIHQ9J1xcdW5kZXJzZXR7XFx0ZXh0e1RhYmxlIFBhaW50ZXJ9fXtcXHJpZ2h0YXJyb3d9Jy8+ID8/PzwvZGl2PlxyXG5cdFx0PC9Ob3RlPlxyXG5cdFx0XHJcblx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezJ9IG51bWJlcj0nMic+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0RmluZCB0aGUgZG9tYWluIGFuZCByYW5nZSBvZiA8VCB0PSdmJy8+IGFuZCA8VCB0PSdnJy8+IHRoZW4gZGV0ZXJtaW5lIGlmIDxUIHQ9J2YoZyh4KSknLz4gb3IgPFQgdD0nZyhmKHgpKScvPiBleGlzdCwgYW5kIGlmIHNvLCBmaW5kIHRoZWlyIHJ1bGVzLlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQoPGVtPk5vdGU6PC9lbT4gSWYgYSBkb21haW4gaXMgbm90IHN0YXRlZCwgd2UgdXNlIHRoZSBpbXBsaWVkL21heGltYWwgZG9tYWluLCBoZW5jZSB0aGUgbmFtZSkuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0PlxyXG5cdFx0XHRcdDxkaXY+PFQgdD0nZih4KSA9IFxcZnJhY3sxfXt4XjJ9Jy8+PC9kaXY+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdnKHgpID0geF4yICsgMScvPjwvZGl2PlxyXG5cdFx0XHQ8L1BhcnQ+XHJcblx0XHRcdDxQYXJ0PlxyXG5cdFx0XHRcdDxkaXY+PFQgdD0nZih4KSA9IFxcc3FydHszIC0geH0nLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2coeCkgPSB4XjInLz48L2Rpdj5cclxuXHRcdFx0PC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PE5vdGU+XHJcblx0XHRcdDxkaXY+SWYgPFQgdD0naCh4KSA9IGYoZyh4KSknLz4gZXhpc3RzIHRoZW46PC9kaXY+XHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8VCB0PSdcXHRleHR7ZG9tYWlufShoKSA9IFxcdGV4dHtkb21haW59KGcpJy8+IGFzIGFueSBpbnB1dCB0byA8VCB0PSdoJy8+IG11c3QgYmUgYW4gJ2lucHV0LWFibGUnIGluIDxUIHQ9J2cnLz4uXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8VCB0PSdcXHRleHR7cmFuZ2V9KGgpIFxcc3Vic2V0ZXEgXFx0ZXh0e3JhbmdlfShmKScvPiBzaW5jZSB3aGF0IGNvbWVzIG91dCBvZiA8VCB0PSdoJy8+IGlzIHdoYXQgY29tZXMgb3V0IG9mIDxUIHQ9J2YnLz4gYnV0IHdpdGggbW9yZSByZXN0cmljdGlvbnMgc2luY2UgdGhlIGlucHV0IDxUIHQ9J2YnLz4gaXMgcmVzdHJpY3RlZCB0byB0aGUgcmFuZ2Ugb2YgPFQgdD0nZycvPi5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9Ob3RlPlxyXG5cdFx0XHJcblx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezJ9IG51bWJlcj0nMyc+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0RmluZCA8VCB0PSdmKGcoeCkpJy8+IGFuZCBzdGF0ZSBpdHMgcnVsZSwgZG9tYWluIGFuZCByYW5nZS5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0KDxlbT5Ob3RlOjwvZW0+IFlvdSBtYXkgcmV1c2UgYW5zd2VycyBmcm9tIHRoZSBwcmV2aW91cyBxdWVzdGlvbikuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0PlxyXG5cdFx0XHRcdDxkaXY+PFQgdD0nZih4KSA9IFxcZnJhY3sxfXt4XjJ9Jy8+PC9kaXY+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdnKHgpID0geF4yICsgMScvPjwvZGl2PlxyXG5cdFx0XHQ8L1BhcnQ+XHJcblx0XHRcdDxQYXJ0PlxyXG5cdFx0XHRcdDxkaXY+PFQgdD0nZih4KSA9IFxcc3FydHszIC0geH0nLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2coeCkgPSB4XjInLz48L2Rpdj5cclxuXHRcdFx0PC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PE5vdGU+XHJcblx0XHRcdFN1cHBvc2Ugd2Ugd2FudCB0byBmaW5kIDxUIHQ9J2goeCkgPSBmKGcoeCkpJy8+LiBJZiA8VCB0PSdcXHRleHR7cmFuZ2V9KGcpIFxcbm90XFxzdWJzZXRlcSBcXHRleHR7ZG9tYWlufShmKScvPiB0aGVuIHdlIGtub3cgdGhhdCA8VCB0PSdoJy8+IGRvZXMgbm90IGV4aXN0LiBJbnN0ZWFkIHdlIGNhbiBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gPFQgdD0nZ14qJy8+IGJ5IHJlc3RyaWN0aW5nIHRoZSBkb21haW4gb2YgPFQgdD0nZycvPiwgd2hpY2ggaW4gdHVybiB3aWxsIHJlc3RyaWN0IHRoZSByYW5nZSwgc3VjaCB0aGF0IGhvcGVmdWxseSA8VCB0PSdcXHRleHR7cmFuZ2V9KGcqKSBcXHN1YnNldGVxIFxcdGV4dHtkb21haW59KGYpJy8+IHNvICB0aGF0IDxUIHQ9J2heKih4KSA9IGYoZ14qKHgpKScvPiBleGlzdHMgaW5zdGVhZC5cclxuXHRcdDwvTm90ZT5cclxuXHRcdFxyXG5cdFx0PFF1ZXN0aW9uIHBhcnRzUGVyUm93PXsyfSBudW1iZXI9JzQnPlxyXG5cdFx0XHQ8RGVzY3JpcHRpb24+XHJcblx0XHRcdFx0QXR0ZW1wdCB0byBmaW5kIDxUIHQ9J2goeCkgPSBmKGcoeCkpJy8+LCBpZiBuZWNlc3NhcnkgY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIDxUIHQ9J2deKicvPiBieSByZXN0cmljdGluZyB0aGUgZG9tYWluIG9mIDxUIHQ9J2cnLz4gYW5kIGZpbmQgPFQgdD0naF4qKHgpID0gZihnXiooeCkpJy8+IGluc3RlYWQuIE90aGVyd2lzZSwgc3RhdGUgd2h5IDxUIHQ9J2gnLz4gYW5kIDxUIHQ9J2heKicvPiBkbyBub3QgZXhpc3QuXHJcblx0XHRcdDwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0PlxyXG5cdFx0XHRcdDxkaXY+PFQgdD0nZih4KSA9ICh4LTEpXjInLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2coeCkgPSBcXHNxcnR7OSAtIHh9Jy8+PC9kaXY+XHJcblx0XHRcdDwvUGFydD5cclxuXHRcdFx0PFBhcnQ+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdmKHgpID0gXFxzcXJ0e3ggLSAxfScvPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+PFQgdD0nZyh4KSA9IC1cXGxlZnR8eFxccmlnaHR8Jy8+PC9kaXY+XHJcblx0XHRcdDwvUGFydD5cclxuXHRcdFx0PFBhcnQ+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdmOiAoLVxcaW5mdHksIDUpIFxccmlnaHRhcnJvdyBcXG1hdGhiYntSfSwgZih4KSA9IHgnLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2coeCkgPSB4XjIgKyAxJy8+PC9kaXY+XHJcblx0XHRcdDwvUGFydD5cclxuXHRcdFx0PFBhcnQ+XHJcblx0XHRcdFx0PGRpdj48VCB0PSdmOiAoLVxcaW5mdHksIDUpIFxccmlnaHRhcnJvdyBcXG1hdGhiYntSfSwgZih4KSA9IHheezc3NH0gLSBzaW4oeCknLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PjxUIHQ9J2coeCkgPSB4XjIgKyAxJy8+PC9kaXY+XHJcblx0XHRcdFx0PGRpdj4oPGVtPkhpbnQ6PC9lbT4gcmVmZXIgdG8gcHJldmlvdXMgcGFydCwgd2hhdCBkbyB5b3UgcmVhbGx5IGNhcmUgYWJvdXQgPFQgdD0nZicvPj8pPC9kaXY+XHJcblx0XHRcdDwvUGFydD5cclxuXHRcdDwvUXVlc3Rpb24+XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0PGgyPkFzc2lnbm1lbnQ8L2gyPlxyXG5cdFx0XHJcblx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezJ9IG51bWJlcj0nMSc+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5cclxuXHRcdFx0XHRJZiA8VCB0PSdmKHgpID0gKHgrMykoeC0yKScvPiBhbmQgPFQgdD0nZyh4KSA9IHheMicvPiBkZXRlcm1pbmUgd2hldGhlciA8VCB0PSdmKGcoeCkpJy8+IGFuZCA8VCB0PSdnKGYoeCkpJy8+IGV4aXN0LiBJZiB0aGV5IGRvLCBmaW5kIHRoZSBydWxlIGZvciB0aGUgY29tcG9zaXRlIGZ1bmN0aW9uIGFuZCBzdGF0ZSBpdHMgZG9tYWluIGFuZCByYW5nZS5cclxuXHRcdFx0PC9EZXNjcmlwdGlvbj5cclxuXHRcdDwvUXVlc3Rpb24+XHJcblx0XHRcclxuXHRcdDxRdWVzdGlvbiBudW1iZXI9JzInPlxyXG5cdFx0XHQ8RGVzY3JpcHRpb24+TGV0IDxUIHQ9J2YoeCkgPSB4XjInLz4gYW5kIDxUIHQ9J2coeCkgPSBcXHNxcnR7eH0nLz4uPC9EZXNjcmlwdGlvbj5cclxuXHRcdFx0PFBhcnQ+RGV0ZXJtaW5lIGlmIDxUIHQ9J2YoZyh4KSknLz4gZXhpc3RzLiBJZiBzbyBzdGF0ZSBpdHMgcnVsZSwgZG9tYWluIGFuZCByYW5nZTwvUGFydD5cclxuXHRcdFx0PFBhcnQ+RGV0ZXJtaW5lIGlmIDxUIHQ9J2coZih4KSknLz4gZXhpc3RzLiBJZiBzbyBzdGF0ZSBpdHMgcnVsZSwgZG9tYWluIGFuZCByYW5nZTwvUGFydD5cclxuXHRcdFx0PFBhcnQ+QXJlIDxUIHQ9J2YoZyh4KSknLz4gYW5kIDxUIHQ9J2coZih4KSknLz4gZXF1YWw/PC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5JcyBpdCBwb3NzaWJsZSB0byByZXN0cmljdCB0aGUgZG9tYWluIG9mIDxUIHQ9J2YnLz4gc28gdGhhdCA8VCB0PSdmKGcoeCkpJy8+IGFuZCA8VCB0PSdnKGYoeCkpJy8+IGVxdWFsPyBJZiBzbyBmaW5kIGEgZG9tYWluIHJlc3RyaWN0ZWQgZnVuY3Rpb24gPFQgdD0nZl4qJy8+IGZyb20gPFQgdD0nZicvPiBzdWNoIHRoYXQgPFQgdD0nZl4qKGcoeCkpID0gZyhmXiooeCkpJy8+PC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PFF1ZXN0aW9uIG51bWJlcj0nMyc+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5cclxuXHRcdFx0XHRGb3IgdGhlIGZ1bmN0aW9ucywgPFQgdD0nZjogXFxtYXRoYmJ7Un0gXFxyaWdodGFycm93IFxcbWF0aGJie1J9LCBmKHgpID0geF4yICsgMicvPiBhbmQgPFQgdD0nZzogWzYsIFxcaW5mdHkpIFxccmlnaHRhcnJvdyBcXG1hdGhiYntSfSAsZyh4KSA9IFxcc3FydHt4LTZ9Jy8+XHJcblx0XHRcdDwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0PlNob3cgdGhhdCA8VCB0PSdmKGcoeCkpJy8+IGV4aXN0cy48L1BhcnQ+XHJcblx0XHRcdDxQYXJ0PkZpbmQgdGhlIHJ1bGUgb2YgPFQgdD0nZihnKHgpKScvPiBhbmQgc3RhdGUgaXRzIGRvbWFpbiBhbmQgcmFuZ2UuPC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5TaG93IHRoYXQgPFQgdD0nZyhmKHgpKScvPiBkb2VzIG5vdCBleGlzdC48L1BhcnQ+XHJcblx0XHRcdDxQYXJ0PlJlc3RyaWN0IHRoZSBkb21haW4gb2YgPFQgdD0nZicvPiB0byBvYnRhaW4gYSBmdW5jdGlvbiA8VCB0PSdmXionLz4gc3VjaCB0aGF0IDxUIHQ9J2coZl4qKHgpKScvPiBleGlzdHMuPC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5GaW5kIDxUIHQ9J2coZl4qKHgpKScvPiBhbmQgc3RhdGUgaXRzIGRvbWFpbiBhbmQgcmFuZ2UuPC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PFF1ZXN0aW9uIG51bWJlcj0nNCc+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5cclxuXHRcdFx0XHRJZiA8VCB0PSdmOiAoLVxcaW5mdHksIDNdIFxccmlnaHRhcnJvdyBcXG1hdGhiYntSfSwgZih4KSA9IHheMiArIGsnLz4gYW5kIDxUIHQ9J2c6IFs2LCBcXGluZnR5KSBcXHJpZ2h0YXJyb3cgXFxtYXRoYmJ7Un0gLGcoeCkgPSAtXFxzcXJ0e3gtNn0gKyBrJy8+XHJcblx0XHRcdDwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0PkZpbmQgdGhlIHJhbmdlcyBvZiA8VCB0PSdmJy8+IGFuZCA8VCB0PSdnJy8+PC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5GaW5kIHRoZSBzZXQgb2YgdmFsdWVzIG9mIDxUIHQ9J2snLz4gc3VjaCB0aGF0IGJvdGggPFQgdD0nZihnKHgpKScvPiBhbmQgPFQgdD0nZyhmKHgpKScvPiBleGlzdC48L1BhcnQ+XHJcblx0XHQ8L1F1ZXN0aW9uPlxyXG5cdFx0XHJcblx0XHRcclxuXHRcdDxoMj5FeHRyYTwvaDI+XHJcblx0XHRcclxuXHRcdFxyXG5cdDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb3NpdGVGdW5jdGlvbnNcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9GdW5jdGlvbnMvQ29tcG9zaXRlRnVuY3Rpb25zL0NvbXBvc2l0ZUZ1bmN0aW9ucy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRleCBhcyBUIH0gZnJvbSAnTWF0aEpheCdcclxuaW1wb3J0IHsgUXVlc3Rpb24sIERlc2NyaXB0aW9uLCBQYXJ0LCBOb3RlIH0gZnJvbSAnY29tcG9uZW50cy9tYXJrdXAvd29ya3NoZWV0J1xyXG5cclxuY29uc3QgSW52ZXJzZUZ1bmN0aW9ucyA9ICgpID0+IChcclxuXHQ8ZGl2IGNsYXNzTmFtZT0nTWF0aE1hcmt1cCc+XHJcblx0XHQ8aDE+SW52ZXJzZSBGdW5jdGlvbnM8L2gxPlxyXG5cdFx0XHJcblx0XHQ8aDI+UXVlc3Rpb25zPC9oMj5cclxuXHRcdFxyXG5cdFx0PE5vdGU+XHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRBIGZ1bmN0aW9uIDxUIHQ9J2YoeCknLz4gaGFzIGFuIGludmVyc2UgZnVuY3Rpb24sIDxUIHQ9J2Zeey0xfSh4KScvPiwgaWYgYW5kIG9ubHkgaWYgaXQgaXMgb25lLXRvLW9uZS5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdEEgZnVuY3Rpb24gYW5kIGl0cyBpbnZlcnNlIGFyZSByZWxhdGVkIGdlb21ldHJpY2FsbHkgYnkgYSByZWZsZWN0IGFsb25nIHRoZSBsaW5lIDxUIHQ9J3kgPSB4Jy8+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRBcyBhIHJlc3VsdCwgPFQgdD0nXFx0ZXh0e2RvbWFpbn0oZikgPSBcXHRleHR7cmFuZ2V9KGZeey0xfSknLz4gYW5kIDxUIHQ9J1xcdGV4dHtyYW5nZX0oZikgPSBcXHRleHR7ZG9tYWlufShmXnstMX0pJy8+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvTm90ZT5cclxuXHRcdFxyXG5cdFx0PFF1ZXN0aW9uIHBhcnRzUGVyUm93PXsyfSBudW1iZXI9ezF9PlxyXG5cdFx0XHQ8RGVzY3JpcHRpb24+XHJcblx0XHRcdFx0Rm9yIGVhY2ggb2YgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnMgZmluZCB0aGUgaW52ZXJzZSA8VCB0PSdmXnstMX0nLz4gYW5kIHNrZXRjaCBib3RoIDxUIHQ9J2YnLz4gYW5kIDxUIHQ9J2Zeey0xfScvPi5cclxuXHRcdFx0XHQ8ZGl2Pig8ZW0+Q29udGVtcGxhdGU6PC9lbT4gSG93IGRvZXMgdGhlIGludmVyc2UgY2hhbmdlIHdoZW4geW91IHRyYW5zZm9ybSB0aGUgb3JpZ2luYWwgZnVuY3Rpb24/KTwvZGl2PlxyXG5cdFx0XHQ8L0Rlc2NyaXB0aW9uPlxyXG5cdFx0XHQ8UGFydCBudW1iZXI9J2EnPjxUIHQ9J2YoeCkgPSB4Jy8+PC9QYXJ0PlxyXG5cdFx0XHQ8UGFydCBudW1iZXI9J2InPjxUIHQ9J2YoeCkgPSAyeCcvPjwvUGFydD5cclxuXHRcdFx0PFBhcnQgbnVtYmVyPSdjJz48VCB0PSdmKHgpID0geCArIDEnLz48L1BhcnQ+XHJcblx0XHRcdDxQYXJ0IG51bWJlcj0nYyc+PFQgdD0nZih4KSA9ICh4LTEpXjMgKyAyJy8+PC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PE5vdGU+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdElmIGEgZnVuY3Rpb24sIDxUIHQ9J2YnLz4sIGhhcyBhbiBpbnZlcnNlLCA8VCB0PSdmXnstMX0nLz4sIHRoZW4sXHJcblx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0PGxpPjxUIHQ9JyhmIFxcY2lyYyBmXnstMX0pKHgpID0geCcvPiBmb3IgYWxsIDxUIHQ9J3ggXFxpbiBcXHRleHR7ZG9tYWlufShmXnstMX0pJy8+PC9saT5cclxuXHRcdFx0XHRcdDxsaT48VCB0PScoZl57LTF9IFxcY2lyYyBmKSh4KSA9IHgnLz4gZm9yIGFsbCA8VCB0PSd4IFxcaW4gXFx0ZXh0e2RvbWFpbn0oZiknLz48L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvcD5cclxuXHRcdDwvTm90ZT5cclxuXHRcdFxyXG5cdFx0PFF1ZXN0aW9uIHBhcnRzUGVyUm93PXsyfSBudW1iZXI9ezJ9PlxyXG5cdFx0XHQ8RGVzY3JpcHRpb24+XHJcblx0XHRcdFx0Rm9yIGVhY2ggb2YgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnMgZmluZCB0aGUgaW52ZXJzZSA8VCB0PSdmXnstMX0nLz4sIGFuZCBza2V0Y2ggYm90aCA8VCB0PSdmJy8+IGFuZCA8VCB0PSdmXnstMX0nLz4uIEFsc28gd3JpdGUgZG93biB0aGUgZG9tYWluIGFuZCByYW5nZXMgb2YgZWFjaCBmdW5jdGlvbiBhbmQgaXRzIGludmVyc2UuXHJcblx0XHRcdDwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0IG51bWJlcj0nYSc+PFQgdD0nZih4KSA9IFxcc3FydHt4fScvPjwvUGFydD5cclxuXHRcdFx0PFBhcnQgbnVtYmVyPSdiJz48VCB0PSdmOiBbMCwgXFxpbmZ0eSksIGYoeCkgPSB4XjInLz48L1BhcnQ+XHJcblx0XHQ8L1F1ZXN0aW9uPlxyXG5cdFx0XHJcblx0XHQ8Tm90ZT5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0QW55IGdyYXBoIG9mIGEgcmVsYXRpb24gbWF5IGJlIGludmVydGVkIGJ5IGEgcmVmbGVjdGlvbiBhbG9uZyB0aGUgbGluZSA8VCB0PSd5ID0geCcvPi4gSWYgdGhlIG9yaWdpbmFsIHJlbGF0aW9uIGlzIG5vdCBbeF0tdG8tW3ldIHRoZW4gdGhlIGludmVyc2Ugd2lsbCBiZSBbeV0tdG8tW3hdLlxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdFNvbWUga2V5IHBvaW50cyB0byBub3RlOlxyXG5cdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdDxsaT5BIG9uZS10by1tYW55IDxzdHJvbmc+ZnVuY3Rpb248L3N0cm9uZz4gaGFzIGEgbWFueS10by1vbmUgaW52ZXJzZSA8c3Ryb25nPnJlbGF0aW9uPC9zdHJvbmc+PC9saT5cclxuXHRcdFx0XHRcdDxsaT5BIG1hbnktdG8tb25lIDxzdHJvbmc+cmVsYXRpb248L3N0cm9uZz4gaGFzIGEgbWFueS10by1vbmUgaW52ZXJzZSA8c3Ryb25nPmZ1bmN0aW9uPC9zdHJvbmc+PC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L3A+XHJcblx0XHQ8L05vdGU+XHJcblx0XHRcclxuXHRcdDxRdWVzdGlvbiBwYXJ0c1BlclJvdz17Mn0gbnVtYmVyPXszfT5cclxuXHRcdFx0PERlc2NyaXB0aW9uPlxyXG5cdFx0XHRcdEZvciBlYWNoIG9mIHRoZSBmb2xsb3dpbmcgPHN0cm9uZz5yZWxhdGlvbnM8L3N0cm9uZz4gZmluZCB0aGUgaW52ZXJzZSA8VCB0PSdmXnstMX0nLz4sIGFuZCBza2V0Y2ggYm90aCA8VCB0PSdmJy8+IGFuZCA8VCB0PSdmXnstMX0nLz4uIEFsc28gd3JpdGUgZG93biB0aGUgW3hdLXRvLVt5XSByZWxhdGlvbnNoaXAgb2YgZWFjaCByZWxhdGlvbiBhbmQgaXRzIGludmVyc2UuXHJcblx0XHRcdFx0PGRpdj4oPGVtPk5vdGU6PC9lbT4gRnVuY3Rpb25zIGFyZSByZWxhdGlvbnMuKTwvZGl2PlxyXG5cdFx0XHQ8L0Rlc2NyaXB0aW9uPlxyXG5cdFx0XHQ8UGFydCBudW1iZXI9J2EnPjxUIHQ9J2YoeCkgPSBcXHNxcnR7eH0nLz48L1BhcnQ+XHJcblx0XHRcdDxQYXJ0IG51bWJlcj0nYic+PFQgdD0nZih4KSA9IHheMicvPjwvUGFydD5cclxuXHRcdDwvUXVlc3Rpb24+XHJcblx0XHRcclxuXHRcdDxOb3RlPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRXZSBjb3VsZCBmaW5kIHRoZSBpbnRlcnNlY3Rpb24gb2YgYSBmdW5jdGlvbiwgPFQgdD0nZicvPiwgYW5kIGl0cyBpbnZlcnNlLCA8VCB0PSdmXnstMX0nLz4ganVzdCBsaWtlIHdlIHdvdWxkIHdpdGggYW55IG90aGVyIGZ1bmN0aW9ucyBieSBzb2x2aW5nIDxUIHQ9J2YoeCkgPSBmXnstMX0oeCknLz4uXHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0SG93ZXZlciwgd2UgY2FuIHVzZSB0aGUgcHJvcGVydHkgdGhhdCBhIGZ1bmN0aW9uIGFuZCBpdHMgaW52ZXJzZSBhcmUgcmVsYXRlZCBieSBhIHJlZmxlY3Rpb24gYWxvbmcgPFQgdD0neSA9IHgnLz4gdG8gc2VlIHRoYXQgd2Ugb25seSBuZWVkIHRvIHNvbHZlIGVpdGhlciA8VCB0PSdmKHgpID0geCcvPiBvclx0PFQgdD0nZl57LTF9KHgpID0geCcvPi5cclxuXHRcdFx0PC9wPlxyXG5cdFx0PC9Ob3RlPlxyXG5cdFx0XHJcblx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezF9IG51bWJlcj17M30+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5cclxuXHRcdFx0XHRGb3IgZWFjaCBvZiB0aGUgZm9sbG93aW5nIDxzdHJvbmc+cmVsYXRpb25zPC9zdHJvbmc+IGZpbmQgdGhlIHBvaW50cyBvZiBpbnRlcnNlY3Rpb24gd2l0aCBpdHMgaW52ZXJzZSBmaXJzdGx5IGJ5IHNvbHZpbmcgPFQgdD0nZih4KSA9IGZeey0xfSh4KScvPiwgdGhlbiBieSBzb2x2aW5nIGVpdGhlciA8VCB0PSdmKHgpID0geCcvPiBvclx0PFQgdD0nZl57LTF9KHgpID0geCcvPi5cclxuXHRcdFx0PC9EZXNjcmlwdGlvbj5cclxuXHRcdFx0PFBhcnQgbnVtYmVyPSdhJz48VCB0PSdmKHgpID0gMnggKyAxJy8+PC9QYXJ0PlxyXG5cdFx0XHQ8UGFydCBudW1iZXI9J2InPlxyXG5cdFx0XHRcdDxkaXY+PFQgdD0nZih4KSA9IHheMicvPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+KDxlbT5Ob3RlOjwvZW0+IFRoaXMgaXMgYSBvbmUtdG8tbWFueSBmdW5jdGlvbiBzbyBpdHMgaW52ZXJzZSBpcyBhIG1hbnktdG8tb25lIHJlbGF0aW9uLiBZb3UgbWF5IHdhbnQgdG8gd3JpdGUgdGhlIHJlbGF0aW9uIGFzIHR3byBzZXBhcmF0ZSBmdW5jdGlvbnMgd2hlbiBzb2x2aW5nIDxUIHQ9J2YoeCkgPSBmXnstMX0oeCknLz4uKTwvZGl2PlxyXG5cdFx0XHQ8L1BhcnQ+XHJcblx0XHQ8L1F1ZXN0aW9uPlxyXG5cdFx0XHJcblx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezJ9IG51bWJlcj17NH0+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5cclxuXHRcdFx0XHRGb3IgZWFjaCBvZiB0aGUgZm9sbG93aW5nIDxzdHJvbmc+ZnVuY3Rpb25zPC9zdHJvbmc+IGZpbmQgdGhlIHBvaW50cyBvZiBpbnRlcnNlY3Rpb24gd2l0aCBpdHMgaW52ZXJzZSBieSBzb2x2aW5nIGVpdGhlciA8VCB0PSdmKHgpID0geCcvPiBvciA8VCB0PSdmXnstMX0oeCkgPSB4Jy8+LlxyXG5cdFx0XHQ8L0Rlc2NyaXB0aW9uPlxyXG5cdFx0XHQ8UGFydCBudW1iZXI9J2EnPjxUIHQ9J2YoeCkgPSB4XjIgKyA1eCArIDQnLz48L1BhcnQ+XHJcblx0XHRcdDxQYXJ0IG51bWJlcj0nYic+PGRpdj48VCB0PSdmKHgpID0gXFxzcXJ0e3h9Jy8+PC9kaXY+PC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PGgyPkFzc2lnbm1lbnQ8L2gyPlxyXG5cdFx0XHJcblx0XHQ8UXVlc3Rpb24gcGFydHNQZXJSb3c9ezN9IG51bWJlcj0nMSc+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5EZXRlcm1pbmUgdGhlIFt4XS10by1beV0gcmVsYXRpb25zaGlwcyBvZiB0aGUgZm9sbG93aW5nIHJlbGF0aW9ucy48L0Rlc2NyaXB0aW9uPlxyXG5cdFx0XHQ8UGFydD48VCB0PScyeCsxJy8+PC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD48VCB0PSd4XjInLz48L1BhcnQ+XHJcblx0XHRcdDxQYXJ0PjxUIHQ9J3heMiArIDN4ICsgNycvPjwvUGFydD5cclxuXHRcdFx0PFBhcnQ+PFQgdD0nXFxmcmFjezF9e3h9Jy8+PC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD48VCB0PSdcXGZyYWN7MX17eF4yfScvPjwvUGFydD5cclxuXHRcdFx0PFBhcnQ+PFQgdD0nXFxzaW4oeCknLz48L1BhcnQ+XHJcblx0XHRcdDxQYXJ0PlxyXG5cdFx0XHRcdDxkaXY+PFQgdD0neF4yICsgeV4yID0gMScvPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+KDxlbT5IaW50OjwvZW0+IFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiB0byBhIHBvaW50IDxUIHQ9Jyh4LHkpJy8+PyBDYW4geW91IGdyYXBoIHRoaXMgcmVsYXRpb24/KTwvZGl2PlxyXG5cdFx0XHQ8L1BhcnQ+XHJcblx0XHQ8L1F1ZXN0aW9uPlxyXG5cdFx0XHJcblx0XHQ8UXVlc3Rpb24gbnVtYmVyPScyJz5cclxuXHRcdFx0PERlc2NyaXB0aW9uPkxldCA8VCB0PSdmOiBbYSxcXGluZnR5KSBcXHJpZ2h0YXJyb3cgXFxtYXRoYmJ7Un0sIGYoeCkgPSB4XjIgLSA2eCArIDknLz48L0Rlc2NyaXB0aW9uPlxyXG5cdFx0XHQ8UGFydD5GaW5kIHRoZSBzbWFsbGVzdCB2YWx1ZSBvZiA8VCB0PSdhJy8+IHN1Y2ggdGhhdCA8VCB0PSdmXnstMX0oeCknLz4gZXhpc3RzLjwvUGFydD5cclxuXHRcdFx0PFBhcnQ+RmluZCA8VCB0PSdmXnstMX0oeCknLz4uPC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PFF1ZXN0aW9uIG51bWJlcj0nMyc+XHJcblx0XHRcdDxEZXNjcmlwdGlvbj5MZXQgPFQgdD0nZih4KSA9IFxcZnJhY3t4ICsgNH17M3ggLSAxfScvPjwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0PlNob3cgdGhhdCA8VCB0PSdmIFxcY2lyYyBmJy8+IGlzIGRlZmluZWQuPC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5GaW5kIDxUIHQ9J2YgXFxjaXJjIGYnLz4uPC9QYXJ0PlxyXG5cdFx0XHQ8UGFydD5cclxuXHRcdFx0XHQ8ZGl2PldyaXRlIGRvd24gPFQgdD0nZl57LTF9KHgpJy8+LjwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+PGVtPk1vYml1cyBUcmFuc2Zvcm08L2VtPjwvZGl2PlxyXG5cdFx0XHQ8L1BhcnQ+XHJcblx0XHQ8L1F1ZXN0aW9uPlxyXG5cdFx0XHJcblx0XHQ8UXVlc3Rpb24gbnVtYmVyPSc0Jz5cclxuXHRcdFx0PERlc2NyaXB0aW9uPkxldCA8VCB0PSdmOiBbMiwgXFxpbmZ0eSkgXFxyaWdodGFycm93IFxcbWF0aGJie1J9LCBmKHgpID0gXFxzcXJ0e3ggLSAyfScvPjwvRGVzY3JpcHRpb24+XHJcblx0XHRcdDxQYXJ0PkZpbmQgPFQgdD0nZl57LTF9KHgpJy8+LjwvUGFydD5cclxuXHRcdFx0PFBhcnQ+R3JhcGggPFQgdD0nZl57LTF9KHgpJy8+LjwvUGFydD5cclxuXHRcdFx0PFBhcnQ+RmluZCA8VCB0PSdoKHgpID0gZl57LTF9KGYoXFxmcmFje3grM317Mn0pKScvPiBhbmQgc3RhdGUgaXRzIG1heGltYWwgZG9tYWluLjwvUGFydD5cclxuXHRcdFx0PFBhcnQ+SXMgPFQgdD0nZl57LTF9KHgpJy8+IG9kZCwgZXZlbiwgb3IgbmVpdGhlcj88L1BhcnQ+XHJcblx0XHRcdDxQYXJ0PkZpbmQgPFQgdD0nZl57LTF9KC1mKFxcZnJhY3t4KzN9ezJ9KSknLz4uPC9QYXJ0PlxyXG5cdFx0PC9RdWVzdGlvbj5cclxuXHRcdFxyXG5cdFx0PGgyPkV4dHJhPC9oMj5cclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHQ8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52ZXJzZUZ1bmN0aW9uc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL0Z1bmN0aW9ucy9JbnZlcnNlRnVuY3Rpb25zL0ludmVyc2VGdW5jdGlvbnMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUZXgsIFRleE1hcmt1cCB9IGZyb20gJ01hdGhKYXgnXHJcblxyXG5jb25zdCBSZWNpcHJvY2FsRnVuY3Rpb25zID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPSdNYXRoTWFya3VwJz5cclxuXHRcdDxoMT5SZWNpcHJvY2FsIEZ1bmN0aW9uczwvaDE+XHJcblx0PC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY2lwcm9jYWxGdW5jdGlvbnNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9GdW5jdGlvbnMvUmVjaXByb2NhbEZ1bmN0aW9ucy9SZWNpcHJvY2FsRnVuY3Rpb25zLmpzeCIsImV4cG9ydCBBYnNvbHV0ZVZhbHVlRnVuY3Rpb25zIGZyb20gJy4vQWJzb2x1dGVWYWx1ZUZ1bmN0aW9ucy9BYnNvbHV0ZVZhbHVlRnVuY3Rpb25zJ1xyXG5leHBvcnQgUmVjaXByb2NhbEZ1bmN0aW9ucyBmcm9tICcuL1JlY2lwcm9jYWxGdW5jdGlvbnMvUmVjaXByb2NhbEZ1bmN0aW9ucydcclxuZXhwb3J0IENvbXBvc2l0ZUZ1bmN0aW9ucyBmcm9tICcuL0NvbXBvc2l0ZUZ1bmN0aW9ucy9Db21wb3NpdGVGdW5jdGlvbnMnXHJcbmV4cG9ydCBJbnZlcnNlRnVuY3Rpb25zIGZyb20gJy4vSW52ZXJzZUZ1bmN0aW9ucy9JbnZlcnNlRnVuY3Rpb25zJ1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL0Z1bmN0aW9ucy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVGV4IGFzIFQsIFRleE1hcmt1cCB9IGZyb20gJ01hdGhKYXgnXHJcblxyXG5jb25zdCBTZXRCdWlsZGVyID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPSdNYXRoTWFya3VwJz5cclxuXHRcdDxoMT5TZXQgQnVpbGRlciBOb3RhdGlvbjwvaDE+XHJcblx0XHQ8cD5TZXQgYnVpbGRlciBub3RhdGlvbiBpcyBhIHdheSBvZiBjb21wYWN0bHkgZGVzY3JpYmluZyBhIHNldDwvcD5cclxuXHRcdDxoMj5RdWVzdGlvbnM8L2gyPlxyXG5cdFx0XHJcblx0PC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldEJ1aWxkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9TZXRzL1NldEJ1aWxkZXIvU2V0QnVpbGRlci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRleCBhcyBULCBUZXhNYXJrdXAgfSBmcm9tICdNYXRoSmF4J1xyXG5cclxuY29uc3QgU2V0Tm90YXRpb24gPSAoKSA9PiAoXHJcblx0PGRpdiBjbGFzc05hbWU9J01hdGhNYXJrdXAnPlxyXG5cdFx0PGgxPlNldCBOb3RhdGlvbjwvaDE+XHJcblx0XHQ8dGFibGU+XHJcblx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8dGg+TmFtZTwvdGg+XHJcblx0XHRcdFx0XHQ8dGg+U3ltYm9sPC90aD5cclxuXHRcdFx0XHRcdDx0aD5NZWFuaW5nPC90aD5cclxuXHRcdFx0XHRcdDx0aD5FeGFtcGxlPC90aD5cclxuXHRcdFx0XHQ8L3RyPlx0XHRcclxuXHRcdFx0PC90aGVhZD5cclxuXHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0ZD5TZXQ8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J1xce1xcfScgLz48L3RkPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZD5hIGNvbGxlY3Rpb24gb2YgZWxlbWVudHM8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J1xcezEsMiwzLDRcXH0nIC8+PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0ZD5VbmlvbjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nQSBcXGN1cCBCJyAvPjwvdGQ+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHRkPmVsZW1lbnRzIGluIGVpdGhlciA8VCB0PSdBJyAvPiBvciA8VCB0PSdCJyAvPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7MSwyLDNcXH0gXFxjdXAgXFx7NCw1LDZcXH0gPSBcXHsxLDIsMyw0LDUsNlxcfScgLz48L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPkludGVyc2VjdDwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nQSBcXGNhcCBCJyAvPjwvdGQ+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHRkPmVsZW1lbnRzIGluIGJvdGggPFQgdD0nQScgLz4gYW5kIDxUIHQ9J0InIC8+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdcXHsxLDIsM1xcfSBcXGNhcCBcXHsyLDMsNFxcfSA9IFxcezIsM1xcfScgLz48L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPlN1YnNldDwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nQSBcXGNhcCBCJyAvPjwvdGQ+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHRkPmVsZW1lbnRzIGluIGJvdGggPFQgdD0nQScgLz4gYW5kIDxUIHQ9J0InIC8+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdcXHsxLDIsM1xcfSBcXGNhcCBcXHsyLDMsNFxcfSA9IFxcezIsM1xcfScgLz48L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPlByb3BlciBTdWJzZXQ8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J0EgXFxjYXAgQicgLz48L3RkPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZD5lbGVtZW50cyBpbiBib3RoIDxUIHQ9J0EnIC8+IGFuZCA8VCB0PSdCJyAvPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7MSwyLDNcXH0gXFxjYXAgXFx7MiwzLDRcXH0gPSBcXHsyLDNcXH0nIC8+PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0ZD5Ob3QgYSBTdWJzZXQ8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J0EgXFxjYXAgQicgLz48L3RkPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZD5lbGVtZW50cyBpbiBib3RoIDxUIHQ9J0EnIC8+IGFuZCA8VCB0PSdCJyAvPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7MSwyLDNcXH0gXFxjYXAgXFx7MiwzLDRcXH0gPSBcXHsyLDNcXH0nIC8+PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0ZD5TdXBlcnNldDwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nQSBcXGNhcCBCJyAvPjwvdGQ+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHRkPmVsZW1lbnRzIGluIGJvdGggPFQgdD0nQScgLz4gYW5kIDxUIHQ9J0InIC8+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdcXHsxLDIsM1xcfSBcXGNhcCBcXHsyLDMsNFxcfSA9IFxcezIsM1xcfScgLz48L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPlByb3BlciBTdXBlcnNldDwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nQSBcXGNhcCBCJyAvPjwvdGQ+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHRkPmVsZW1lbnRzIGluIGJvdGggPFQgdD0nQScgLz4gYW5kIDxUIHQ9J0InIC8+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdcXHsxLDIsM1xcfSBcXGNhcCBcXHsyLDMsNFxcfSA9IFxcezIsM1xcfScgLz48L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPk5vdCBhIFN1cGVyc2V0PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdBIFxcY2FwIEInIC8+PC90ZD5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dGQ+ZWxlbWVudHMgaW4gYm90aCA8VCB0PSdBJyAvPiBhbmQgPFQgdD0nQicgLz48L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J1xcezEsMiwzXFx9IFxcY2FwIFxcezIsMyw0XFx9ID0gXFx7MiwzXFx9JyAvPjwvdGQ+XHJcblx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8dGQ+RWxlbWVudCBvZiAoaW4pPC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdBIFxcY2FwIEInIC8+PC90ZD5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dGQ+ZWxlbWVudHMgaW4gYm90aCA8VCB0PSdBJyAvPiBhbmQgPFQgdD0nQicgLz48L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J1xcezEsMiwzXFx9IFxcY2FwIFxcezIsMyw0XFx9ID0gXFx7MiwzXFx9JyAvPjwvdGQ+XHJcblx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8dGQ+Tm90IGFuIGVsZW1lbnQgb2Y8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J0EgXFxjYXAgQicgLz48L3RkPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZD5lbGVtZW50cyBpbiBib3RoIDxUIHQ9J0EnIC8+IGFuZCA8VCB0PSdCJyAvPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7MSwyLDNcXH0gXFxjYXAgXFx7MiwzLDRcXH0gPSBcXHsyLDNcXH0nIC8+PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0ZD5Db21wbGVtZW50PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdBIFxcY2FwIEInIC8+PC90ZD5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dGQ+ZWxlbWVudHMgaW4gYm90aCA8VCB0PSdBJyAvPiBhbmQgPFQgdD0nQicgLz48L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J1xcezEsMiwzXFx9IFxcY2FwIFxcezIsMyw0XFx9ID0gXFx7MiwzXFx9JyAvPjwvdGQ+XHJcblx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8dGQ+RXhjbHVzaW9uPC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdBIFxcY2FwIEInIC8+PC90ZD5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dGQ+ZWxlbWVudHMgaW4gYm90aCA8VCB0PSdBJyAvPiBhbmQgPFQgdD0nQicgLz48L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J1xcezEsMiwzXFx9IFxcY2FwIFxcezIsMyw0XFx9ID0gXFx7MiwzXFx9JyAvPjwvdGQ+XHJcblx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8dGQ+RW1wdHkgU2V0PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdBIFxcY2FwIEInIC8+PC90ZD5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dGQ+ZWxlbWVudHMgaW4gYm90aCA8VCB0PSdBJyAvPiBhbmQgPFQgdD0nQicgLz48L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J1xcezEsMiwzXFx9IFxcY2FwIFxcezIsMyw0XFx9ID0gXFx7MiwzXFx9JyAvPjwvdGQ+XHJcblx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8dGQ+RXF1YWxpdHk8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J0EgXFxjYXAgQicgLz48L3RkPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZD5lbGVtZW50cyBpbiBib3RoIDxUIHQ9J0EnIC8+IGFuZCA8VCB0PSdCJyAvPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7MSwyLDNcXH0gXFxjYXAgXFx7MiwzLDRcXH0gPSBcXHsyLDNcXH0nIC8+PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0ZD5OYXR1cmFsIE51bWJlcnM8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J0EgXFxjYXAgQicgLz48L3RkPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZD5lbGVtZW50cyBpbiBib3RoIDxUIHQ9J0EnIC8+IGFuZCA8VCB0PSdCJyAvPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7MSwyLDNcXH0gXFxjYXAgXFx7MiwzLDRcXH0gPSBcXHsyLDNcXH0nIC8+PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0ZD5JbnRlZ2VyczwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nQSBcXGNhcCBCJyAvPjwvdGQ+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHRkPmVsZW1lbnRzIGluIGJvdGggPFQgdD0nQScgLz4gYW5kIDxUIHQ9J0InIC8+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48VCB0PSdcXHsxLDIsM1xcfSBcXGNhcCBcXHsyLDMsNFxcfSA9IFxcezIsM1xcfScgLz48L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPlJhdGlvbmFsIE51bWJlcnM8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J0EgXFxjYXAgQicgLz48L3RkPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZD5lbGVtZW50cyBpbiBib3RoIDxUIHQ9J0EnIC8+IGFuZCA8VCB0PSdCJyAvPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7MSwyLDNcXH0gXFxjYXAgXFx7MiwzLDRcXH0gPSBcXHsyLDNcXH0nIC8+PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0ZD5SZWFsIE51bWJlcnM8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J0EgXFxjYXAgQicgLz48L3RkPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZD5lbGVtZW50cyBpbiBib3RoIDxUIHQ9J0EnIC8+IGFuZCA8VCB0PSdCJyAvPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7MSwyLDNcXH0gXFxjYXAgXFx7MiwzLDRcXH0gPSBcXHsyLDNcXH0nIC8+PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDx0ZD5Db21wbGV4IE51bWJlcnM8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPjxUIHQ9J0EgXFxjYXAgQicgLz48L3RkPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZD5lbGVtZW50cyBpbiBib3RoIDxUIHQ9J0EnIC8+IGFuZCA8VCB0PSdCJyAvPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PFQgdD0nXFx7MSwyLDNcXH0gXFxjYXAgXFx7MiwzLDRcXH0gPSBcXHsyLDNcXH0nIC8+PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L3Rib2R5PlxyXG5cdFx0PC90YWJsZT5cclxuXHQ8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0Tm90YXRpb25cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvd29ya3NoZWV0L3RvcGljcy9TZXRzL1NldE5vdGF0aW9uL1NldE5vdGF0aW9uLmpzeCIsImV4cG9ydCBTZXROb3RhdGlvbiBmcm9tICcuL1NldE5vdGF0aW9uL1NldE5vdGF0aW9uJ1xyXG5leHBvcnQgU2V0QnVpbGRlciBmcm9tICcuL1NldEJ1aWxkZXIvU2V0QnVpbGRlcidcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL1NldHMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQgeyBXT1JLU0hFRVRTX1VSTCB9IGZyb20gJ2NvbmZpZy9jb25zdGFudHMnXHJcblxyXG5pbXBvcnQge1xyXG5cdEFic29sdXRlVmFsdWVGdW5jdGlvbnMsXHJcblx0UmVjaXByb2NhbEZ1bmN0aW9ucyxcclxuXHRDb21wb3NpdGVGdW5jdGlvbnMsXHJcblx0SW52ZXJzZUZ1bmN0aW9ucyxcclxufSBmcm9tICdjb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvRnVuY3Rpb25zJ1xyXG5cclxuaW1wb3J0IHsgXHJcblx0Q2lyY2xlc0VsbGlwc2VzQW5kSHlwZXJib2xhcyxcclxufSBmcm9tICdjb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvQ29vcmRpbmF0ZUdlb21ldHJ5J1xyXG5cclxuaW1wb3J0IHsgXHJcblx0U2V0Tm90YXRpb24sXHJcblx0U2V0QnVpbGRlcixcclxufSBmcm9tICdjb21wb25lbnRzL3dvcmtzaGVldC90b3BpY3MvU2V0cydcclxuXHJcbmNvbnN0IHdvcmtzaGVldFJvdXRlcyA9IChcclxuXHQ8Um91dGUgcGF0aD17V09SS1NIRUVUU19VUkx9PlxyXG5cdFx0PFJvdXRlIHBhdGg9J1NldHMvU2V0Tm90YXRpb24nIGNvbXBvbmVudD17U2V0Tm90YXRpb259IC8+XHRcclxuXHRcdDxSb3V0ZSBwYXRoPSdTZXRzL1NldEJ1aWxkZXInIGNvbXBvbmVudD17U2V0QnVpbGRlcn0gLz5cdFxyXG5cclxuXHRcdDxSb3V0ZSBwYXRoPSdGdW5jdGlvbnMvQWJzb2x1dGVWYWx1ZUZ1bmN0aW9ucycgY29tcG9uZW50PXtBYnNvbHV0ZVZhbHVlRnVuY3Rpb25zfSAvPlx0XHJcblx0XHQ8Um91dGUgcGF0aD0nRnVuY3Rpb25zL1JlY2lwcm9jYWxGdW5jdGlvbnMnIGNvbXBvbmVudD17UmVjaXByb2NhbEZ1bmN0aW9uc30gLz5cclxuXHRcdDxSb3V0ZSBwYXRoPSdGdW5jdGlvbnMvQ29tcG9zaXRlRnVuY3Rpb25zJyBjb21wb25lbnQ9e0NvbXBvc2l0ZUZ1bmN0aW9uc30gLz5cclxuXHRcdDxSb3V0ZSBwYXRoPSdGdW5jdGlvbnMvSW52ZXJzZUZ1bmN0aW9ucycgY29tcG9uZW50PXtJbnZlcnNlRnVuY3Rpb25zfSAvPlxyXG5cclxuXHRcdDxSb3V0ZSBwYXRoPSdDb29yZGluYXRlR2VvbWV0cnkvQ2lyY2xlc0VsbGlwc2VzQW5kSHlwZXJib2xhcycgY29tcG9uZW50PXtDaXJjbGVzRWxsaXBzZXNBbmRIeXBlcmJvbGFzfSAvPlx0XHJcblx0PC9Sb3V0ZT5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd29ya3NoZWV0Um91dGVzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb25maWcvcm91dGVzL3dvcmtzaGVldHMuanN4IiwiaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSAnY29uZmlnL2NvbnN0YW50cydcclxuaW1wb3J0IHsgZmV0Y2hVc2VyIH0gZnJvbSAnaGVscGVycy9hcGknXHJcblxyXG4vLyBSZWdpc3RlciB1c2VyIGluIGRhdGFiYXNlIHVzaW5nIGZpcmViYXNlLCByZXR1cm5zIHByb21pc2UgZm9yIGNoYWluaW5nXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclVzZXIoZW1haWwsIHBhc3N3b3JkKSB7XHJcblx0cmV0dXJuIGZpcmViYXNlQXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcblx0XHQudGhlbigoeyB1aWQgfSkgPT4gdWlkKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbm91dCgpIHtcclxuXHRyZXR1cm4gZmlyZWJhc2VBdXRoKCkuc2lnbk91dCgpXHJcblx0XHQuY2F0Y2goZXJyb3IgPT4gY29uc29sZS53YXJuKGVycm9yKSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25pbihlbWFpbCwgcGFzc3dvcmQpIHtcclxuXHRyZXR1cm4gZmlyZWJhc2VBdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG5cdFx0LnRoZW4oKHsgdWlkIH0pID0+IGZldGNoVXNlcih1aWQpKVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9oZWxwZXJzL2F1dGguanMiLCJmdW5jdGlvbiB2YWxPck51bGwodmFsKSB7XHJcblx0cmV0dXJuIHZhbCA/IHZhbCA6IG51bGxcclxufVxyXG5cclxuLypcclxuXHRUYWtlcyBkZXRhaWxzIGZyb20gZm9ybSBzaW5nbGUgbGF5ZXIga2V5LXZhbHVlIHBhaXJzIGFuZCBmb3JtYXRzIGludG8gYSB1c2VyIG9iamVjdFxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXNlckRldGFpbHMoZGV0YWlscykge1xyXG5cdHJldHVybiB7XHJcblx0XHRpbmZvOiB7XHJcblx0XHRcdHVpZDogdmFsT3JOdWxsKGRldGFpbHMudWlkKSxcclxuXHRcdFx0bmFtZTogdmFsT3JOdWxsKGRldGFpbHMubmFtZSksXHJcblx0XHRcdGVtYWlsOiB2YWxPck51bGwoZGV0YWlscy5lbWFpbCksXHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9oZWxwZXJzL2Zvcm1hdC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL3N0eWxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL21hcmt1cC93b3Jrc2hlZXQvTm90ZS9zdHlsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTczXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9tYXJrdXAvd29ya3NoZWV0L3F1ZXN0aW9uL3N0eWxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGZpcmViYXNlID0gcmVxdWlyZSgnLi9hcHAnKTtcbihmdW5jdGlvbigpe1xuLyohIEBsaWNlbnNlIEZpcmViYXNlIHYzLjYuNVxuICAgIEJ1aWxkOiAzLjYuNS1yYy4xXG4gICAgVGVybXM6IGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS90ZXJtcy8gKi9cbihmdW5jdGlvbigpe3ZhciBoLGFhPWFhfHx7fSxsPXRoaXMsYmE9ZnVuY3Rpb24oKXt9LG09ZnVuY3Rpb24oYSl7dmFyIGI9dHlwZW9mIGE7aWYoXCJvYmplY3RcIj09YilpZihhKXtpZihhIGluc3RhbmNlb2YgQXJyYXkpcmV0dXJuXCJhcnJheVwiO2lmKGEgaW5zdGFuY2VvZiBPYmplY3QpcmV0dXJuIGI7dmFyIGM9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpO2lmKFwiW29iamVjdCBXaW5kb3ddXCI9PWMpcmV0dXJuXCJvYmplY3RcIjtpZihcIltvYmplY3QgQXJyYXldXCI9PWN8fFwibnVtYmVyXCI9PXR5cGVvZiBhLmxlbmd0aCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuc3BsaWNlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5wcm9wZXJ0eUlzRW51bWVyYWJsZSYmIWEucHJvcGVydHlJc0VudW1lcmFibGUoXCJzcGxpY2VcIikpcmV0dXJuXCJhcnJheVwiO2lmKFwiW29iamVjdCBGdW5jdGlvbl1cIj09Y3x8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuY2FsbCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucHJvcGVydHlJc0VudW1lcmFibGUmJlxuIWEucHJvcGVydHlJc0VudW1lcmFibGUoXCJjYWxsXCIpKXJldHVyblwiZnVuY3Rpb25cIn1lbHNlIHJldHVyblwibnVsbFwiO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT1iJiZcInVuZGVmaW5lZFwiPT10eXBlb2YgYS5jYWxsKXJldHVyblwib2JqZWN0XCI7cmV0dXJuIGJ9LGNhPWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YX0sZGE9ZnVuY3Rpb24oYSl7cmV0dXJuXCJhcnJheVwiPT1tKGEpfSxlYT1mdW5jdGlvbihhKXt2YXIgYj1tKGEpO3JldHVyblwiYXJyYXlcIj09Ynx8XCJvYmplY3RcIj09YiYmXCJudW1iZXJcIj09dHlwZW9mIGEubGVuZ3RofSxwPWZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBhfSxmYT1mdW5jdGlvbihhKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgYX0scT1mdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PW0oYSl9LGdhPWZ1bmN0aW9uKGEpe3ZhciBiPXR5cGVvZiBhO3JldHVyblwib2JqZWN0XCI9PWImJm51bGwhPWF8fFwiZnVuY3Rpb25cIj09Yn0saGE9ZnVuY3Rpb24oYSxiLFxuYyl7cmV0dXJuIGEuY2FsbC5hcHBseShhLmJpbmQsYXJndW1lbnRzKX0saWE9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhKXRocm93IEVycm9yKCk7aWYoMjxhcmd1bWVudHMubGVuZ3RoKXt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMik7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShjLGQpO3JldHVybiBhLmFwcGx5KGIsYyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19LHI9ZnVuY3Rpb24oYSxiLGMpe3I9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQmJi0xIT1GdW5jdGlvbi5wcm90b3R5cGUuYmluZC50b1N0cmluZygpLmluZGV4T2YoXCJuYXRpdmUgY29kZVwiKT9oYTppYTtyZXR1cm4gci5hcHBseShudWxsLGFyZ3VtZW50cyl9LGphPWZ1bmN0aW9uKGEsYil7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLFxuMSk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGI9Yy5zbGljZSgpO2IucHVzaC5hcHBseShiLGFyZ3VtZW50cyk7cmV0dXJuIGEuYXBwbHkodGhpcyxiKX19LGthPURhdGUubm93fHxmdW5jdGlvbigpe3JldHVybituZXcgRGF0ZX0sdD1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoKXt9Yy5wcm90b3R5cGU9Yi5wcm90b3R5cGU7YS5oZD1iLnByb3RvdHlwZTthLnByb3RvdHlwZT1uZXcgYzthLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hO2EuQmY9ZnVuY3Rpb24oYSxjLGYpe2Zvcih2YXIgZD1BcnJheShhcmd1bWVudHMubGVuZ3RoLTIpLGU9MjtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKWRbZS0yXT1hcmd1bWVudHNbZV07cmV0dXJuIGIucHJvdG90eXBlW2NdLmFwcGx5KGEsZCl9fTt2YXIgdT1mdW5jdGlvbihhKXtpZihFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSlFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLHUpO2Vsc2V7dmFyIGI9RXJyb3IoKS5zdGFjaztiJiYodGhpcy5zdGFjaz1iKX1hJiYodGhpcy5tZXNzYWdlPVN0cmluZyhhKSl9O3QodSxFcnJvcik7dS5wcm90b3R5cGUubmFtZT1cIkN1c3RvbUVycm9yXCI7dmFyIGxhPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWEuc3BsaXQoXCIlc1wiKSxkPVwiXCIsZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7ZS5sZW5ndGgmJjE8Yy5sZW5ndGg7KWQrPWMuc2hpZnQoKStlLnNoaWZ0KCk7cmV0dXJuIGQrYy5qb2luKFwiJXNcIil9LG1hPVN0cmluZy5wcm90b3R5cGUudHJpbT9mdW5jdGlvbihhKXtyZXR1cm4gYS50cmltKCl9OmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoL15bXFxzXFx4YTBdK3xbXFxzXFx4YTBdKyQvZyxcIlwiKX0sbmE9LyYvZyxvYT0vPC9nLHBhPS8+L2cscWE9L1wiL2cscmE9LycvZyxzYT0vXFx4MDAvZyx0YT0vW1xceDAwJjw+XCInXS8sdj1mdW5jdGlvbihhLGIpe3JldHVybi0xIT1hLmluZGV4T2YoYil9LHVhPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE8Yj8tMTphPmI/MTowfTt2YXIgdmE9ZnVuY3Rpb24oYSxiKXtiLnVuc2hpZnQoYSk7dS5jYWxsKHRoaXMsbGEuYXBwbHkobnVsbCxiKSk7Yi5zaGlmdCgpfTt0KHZhLHUpO3ZhLnByb3RvdHlwZS5uYW1lPVwiQXNzZXJ0aW9uRXJyb3JcIjtcbnZhciB3YT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1cIkFzc2VydGlvbiBmYWlsZWRcIjtpZihjKXZhciBlPWUrKFwiOiBcIitjKSxmPWQ7ZWxzZSBhJiYoZSs9XCI6IFwiK2EsZj1iKTt0aHJvdyBuZXcgdmEoXCJcIitlLGZ8fFtdKTt9LHc9ZnVuY3Rpb24oYSxiLGMpe2F8fHdhKFwiXCIsbnVsbCxiLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKSl9LHhhPWZ1bmN0aW9uKGEsYil7dGhyb3cgbmV3IHZhKFwiRmFpbHVyZVwiKyhhP1wiOiBcIithOlwiXCIpLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk7fSx5YT1mdW5jdGlvbihhLGIsYyl7ZmEoYSl8fHdhKFwiRXhwZWN0ZWQgbnVtYmVyIGJ1dCBnb3QgJXM6ICVzLlwiLFttKGEpLGFdLGIsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpKTtyZXR1cm4gYX0semE9ZnVuY3Rpb24oYSxiLGMpe3AoYSl8fHdhKFwiRXhwZWN0ZWQgc3RyaW5nIGJ1dCBnb3QgJXM6ICVzLlwiLFttKGEpLGFdLGIsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLFxuMikpfSxBYT1mdW5jdGlvbihhLGIsYyl7cShhKXx8d2EoXCJFeHBlY3RlZCBmdW5jdGlvbiBidXQgZ290ICVzOiAlcy5cIixbbShhKSxhXSxiLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKSl9O3ZhciBCYT1BcnJheS5wcm90b3R5cGUuaW5kZXhPZj9mdW5jdGlvbihhLGIsYyl7dyhudWxsIT1hLmxlbmd0aCk7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYSxiLGMpfTpmdW5jdGlvbihhLGIsYyl7Yz1udWxsPT1jPzA6MD5jP01hdGgubWF4KDAsYS5sZW5ndGgrYyk6YztpZihwKGEpKXJldHVybiBwKGIpJiYxPT1iLmxlbmd0aD9hLmluZGV4T2YoYixjKTotMTtmb3IoO2M8YS5sZW5ndGg7YysrKWlmKGMgaW4gYSYmYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LHg9QXJyYXkucHJvdG90eXBlLmZvckVhY2g/ZnVuY3Rpb24oYSxiLGMpe3cobnVsbCE9YS5sZW5ndGgpO0FycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYSxiLGMpfTpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWEubGVuZ3RoLGU9cChhKT9hLnNwbGl0KFwiXCIpOmEsZj0wO2Y8ZDtmKyspZiBpbiBlJiZiLmNhbGwoYyxlW2ZdLGYsYSl9LENhPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPXAoYSk/XG5hLnNwbGl0KFwiXCIpOmEsZD1hLmxlbmd0aC0xOzA8PWQ7LS1kKWQgaW4gYyYmYi5jYWxsKHZvaWQgMCxjW2RdLGQsYSl9LERhPUFycmF5LnByb3RvdHlwZS5tYXA/ZnVuY3Rpb24oYSxiLGMpe3cobnVsbCE9YS5sZW5ndGgpO3JldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYSxiLGMpfTpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWEubGVuZ3RoLGU9QXJyYXkoZCksZj1wKGEpP2Euc3BsaXQoXCJcIik6YSxnPTA7ZzxkO2crKylnIGluIGYmJihlW2ddPWIuY2FsbChjLGZbZ10sZyxhKSk7cmV0dXJuIGV9LEVhPUFycmF5LnByb3RvdHlwZS5zb21lP2Z1bmN0aW9uKGEsYixjKXt3KG51bGwhPWEubGVuZ3RoKTtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChhLGIsYyl9OmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YS5sZW5ndGgsZT1wKGEpP2Euc3BsaXQoXCJcIik6YSxmPTA7ZjxkO2YrKylpZihmIGluIGUmJmIuY2FsbChjLGVbZl0sZixhKSlyZXR1cm4hMDtyZXR1cm4hMX0sXG5HYT1mdW5jdGlvbihhKXt2YXIgYjthOntiPUZhO2Zvcih2YXIgYz1hLmxlbmd0aCxkPXAoYSk/YS5zcGxpdChcIlwiKTphLGU9MDtlPGM7ZSsrKWlmKGUgaW4gZCYmYi5jYWxsKHZvaWQgMCxkW2VdLGUsYSkpe2I9ZTticmVhayBhfWI9LTF9cmV0dXJuIDA+Yj9udWxsOnAoYSk/YS5jaGFyQXQoYik6YVtiXX0sSGE9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gMDw9QmEoYSxiKX0sSmE9ZnVuY3Rpb24oYSxiKXtiPUJhKGEsYik7dmFyIGM7KGM9MDw9YikmJklhKGEsYik7cmV0dXJuIGN9LElhPWZ1bmN0aW9uKGEsYil7dyhudWxsIT1hLmxlbmd0aCk7cmV0dXJuIDE9PUFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhLGIsMSkubGVuZ3RofSxLYT1mdW5jdGlvbihhLGIpe3ZhciBjPTA7Q2EoYSxmdW5jdGlvbihkLGUpe2IuY2FsbCh2b2lkIDAsZCxlLGEpJiZJYShhLGUpJiZjKyt9KX0sTGE9ZnVuY3Rpb24oYSl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoQXJyYXkucHJvdG90eXBlLFxuYXJndW1lbnRzKX0sTWE9ZnVuY3Rpb24oYSl7dmFyIGI9YS5sZW5ndGg7aWYoMDxiKXtmb3IodmFyIGM9QXJyYXkoYiksZD0wO2Q8YjtkKyspY1tkXT1hW2RdO3JldHVybiBjfXJldHVybltdfTt2YXIgTmE9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMgaW4gYSliLmNhbGwodm9pZCAwLGFbY10sYyxhKX0sT2E9ZnVuY3Rpb24oYSl7dmFyIGI9W10sYz0wLGQ7Zm9yKGQgaW4gYSliW2MrK109YVtkXTtyZXR1cm4gYn0sUGE9ZnVuY3Rpb24oYSl7dmFyIGI9W10sYz0wLGQ7Zm9yKGQgaW4gYSliW2MrK109ZDtyZXR1cm4gYn0sUWE9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9LFJhPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjIGluIGEpaWYoIShjIGluIGIpfHxhW2NdIT09YltjXSlyZXR1cm4hMTtmb3IoYyBpbiBiKWlmKCEoYyBpbiBhKSlyZXR1cm4hMTtyZXR1cm4hMH0sU2E9ZnVuY3Rpb24oYSl7dmFyIGI9e30sYztmb3IoYyBpbiBhKWJbY109YVtjXTtyZXR1cm4gYn0sVGE9XCJjb25zdHJ1Y3RvciBoYXNPd25Qcm9wZXJ0eSBpc1Byb3RvdHlwZU9mIHByb3BlcnR5SXNFbnVtZXJhYmxlIHRvTG9jYWxlU3RyaW5nIHRvU3RyaW5nIHZhbHVlT2ZcIi5zcGxpdChcIiBcIiksXG5VYT1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkLGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXtkPWFyZ3VtZW50c1tlXTtmb3IoYyBpbiBkKWFbY109ZFtjXTtmb3IodmFyIGY9MDtmPFRhLmxlbmd0aDtmKyspYz1UYVtmXSxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZCxjKSYmKGFbY109ZFtjXSl9fTt2YXIgVmE7YTp7dmFyIFhhPWwubmF2aWdhdG9yO2lmKFhhKXt2YXIgWWE9WGEudXNlckFnZW50O2lmKFlhKXtWYT1ZYTticmVhayBhfX1WYT1cIlwifXZhciB6PWZ1bmN0aW9uKGEpe3JldHVybiB2KFZhLGEpfTt2YXIgWmE9ZnVuY3Rpb24oYSl7WmFbXCIgXCJdKGEpO3JldHVybiBhfTtaYVtcIiBcIl09YmE7dmFyIGFiPWZ1bmN0aW9uKGEsYil7dmFyIGM9JGE7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjLGEpP2NbYV06Y1thXT1iKGEpfTt2YXIgYmI9eihcIk9wZXJhXCIpLEE9eihcIlRyaWRlbnRcIil8fHooXCJNU0lFXCIpLGNiPXooXCJFZGdlXCIpLGRiPWNifHxBLGViPXooXCJHZWNrb1wiKSYmISh2KFZhLnRvTG93ZXJDYXNlKCksXCJ3ZWJraXRcIikmJiF6KFwiRWRnZVwiKSkmJiEoeihcIlRyaWRlbnRcIil8fHooXCJNU0lFXCIpKSYmIXooXCJFZGdlXCIpLGZiPXYoVmEudG9Mb3dlckNhc2UoKSxcIndlYmtpdFwiKSYmIXooXCJFZGdlXCIpLGdiPWZ1bmN0aW9uKCl7dmFyIGE9bC5kb2N1bWVudDtyZXR1cm4gYT9hLmRvY3VtZW50TW9kZTp2b2lkIDB9LGhiO1xuYTp7dmFyIGliPVwiXCIsamI9ZnVuY3Rpb24oKXt2YXIgYT1WYTtpZihlYilyZXR1cm4vcnZcXDooW15cXCk7XSspKFxcKXw7KS8uZXhlYyhhKTtpZihjYilyZXR1cm4vRWRnZVxcLyhbXFxkXFwuXSspLy5leGVjKGEpO2lmKEEpcmV0dXJuL1xcYig/Ok1TSUV8cnYpWzogXShbXlxcKTtdKykoXFwpfDspLy5leGVjKGEpO2lmKGZiKXJldHVybi9XZWJLaXRcXC8oXFxTKykvLmV4ZWMoYSk7aWYoYmIpcmV0dXJuLyg/OlZlcnNpb24pWyBcXC9dPyhcXFMrKS8uZXhlYyhhKX0oKTtqYiYmKGliPWpiP2piWzFdOlwiXCIpO2lmKEEpe3ZhciBrYj1nYigpO2lmKG51bGwhPWtiJiZrYj5wYXJzZUZsb2F0KGliKSl7aGI9U3RyaW5nKGtiKTticmVhayBhfX1oYj1pYn1cbnZhciBsYj1oYiwkYT17fSxCPWZ1bmN0aW9uKGEpe3JldHVybiBhYihhLGZ1bmN0aW9uKCl7Zm9yKHZhciBiPTAsYz1tYShTdHJpbmcobGIpKS5zcGxpdChcIi5cIiksZD1tYShTdHJpbmcoYSkpLnNwbGl0KFwiLlwiKSxlPU1hdGgubWF4KGMubGVuZ3RoLGQubGVuZ3RoKSxmPTA7MD09YiYmZjxlO2YrKyl7dmFyIGc9Y1tmXXx8XCJcIixrPWRbZl18fFwiXCI7ZG97Zz0vKFxcZCopKFxcRCopKC4qKS8uZXhlYyhnKXx8W1wiXCIsXCJcIixcIlwiLFwiXCJdO2s9LyhcXGQqKShcXEQqKSguKikvLmV4ZWMoayl8fFtcIlwiLFwiXCIsXCJcIixcIlwiXTtpZigwPT1nWzBdLmxlbmd0aCYmMD09a1swXS5sZW5ndGgpYnJlYWs7Yj11YSgwPT1nWzFdLmxlbmd0aD8wOnBhcnNlSW50KGdbMV0sMTApLDA9PWtbMV0ubGVuZ3RoPzA6cGFyc2VJbnQoa1sxXSwxMCkpfHx1YSgwPT1nWzJdLmxlbmd0aCwwPT1rWzJdLmxlbmd0aCl8fHVhKGdbMl0sa1syXSk7Zz1nWzNdO2s9a1szXX13aGlsZSgwPT1iKX1yZXR1cm4gMDw9Yn0pfSxtYjt2YXIgbmI9bC5kb2N1bWVudDtcbm1iPW5iJiZBP2diKCl8fChcIkNTUzFDb21wYXRcIj09bmIuY29tcGF0TW9kZT9wYXJzZUludChsYiwxMCk6NSk6dm9pZCAwO3ZhciBvYj1mdW5jdGlvbihhKXtyZXR1cm4gRGEoYSxmdW5jdGlvbihhKXthPWEudG9TdHJpbmcoMTYpO3JldHVybiAxPGEubGVuZ3RoP2E6XCIwXCIrYX0pLmpvaW4oXCJcIil9O3ZhciBwYj1udWxsLHFiPW51bGwsc2I9ZnVuY3Rpb24oYSl7dmFyIGI9XCJcIjtyYihhLGZ1bmN0aW9uKGEpe2IrPVN0cmluZy5mcm9tQ2hhckNvZGUoYSl9KTtyZXR1cm4gYn0scmI9ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGIpe2Zvcig7ZDxhLmxlbmd0aDspe3ZhciBjPWEuY2hhckF0KGQrKyksZT1xYltjXTtpZihudWxsIT1lKXJldHVybiBlO2lmKCEvXltcXHNcXHhhMF0qJC8udGVzdChjKSl0aHJvdyBFcnJvcihcIlVua25vd24gYmFzZTY0IGVuY29kaW5nIGF0IGNoYXI6IFwiK2MpO31yZXR1cm4gYn10YigpO2Zvcih2YXIgZD0wOzspe3ZhciBlPWMoLTEpLGY9YygwKSxnPWMoNjQpLGs9Yyg2NCk7aWYoNjQ9PT1rJiYtMT09PWUpYnJlYWs7YihlPDwyfGY+PjQpOzY0IT1nJiYoYihmPDw0JjI0MHxnPj4yKSw2NCE9ayYmYihnPDw2JjE5MnxrKSl9fSx0Yj1mdW5jdGlvbigpe2lmKCFwYil7cGI9e307cWI9e307Zm9yKHZhciBhPTA7NjU+YTthKyspcGJbYV09XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLmNoYXJBdChhKSxcbnFiW3BiW2FdXT1hLDYyPD1hJiYocWJbXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OS1fLlwiLmNoYXJBdChhKV09YSl9fTt2YXIgdWI9ZnVuY3Rpb24oKXt0aGlzLnlhPS0xfTt2YXIgeGI9ZnVuY3Rpb24oYSxiKXt0aGlzLnlhPTY0O3RoaXMuUWI9bC5VaW50OEFycmF5P25ldyBVaW50OEFycmF5KHRoaXMueWEpOkFycmF5KHRoaXMueWEpO3RoaXMudmM9dGhpcy5WYT0wO3RoaXMuaD1bXTt0aGlzLlllPWE7dGhpcy5CZD1iO3RoaXMueGY9bC5JbnQzMkFycmF5P25ldyBJbnQzMkFycmF5KDY0KTpBcnJheSg2NCk7dm9pZCAwIT09dmJ8fCh2Yj1sLkludDMyQXJyYXk/bmV3IEludDMyQXJyYXkod2IpOndiKTt0aGlzLnJlc2V0KCl9LHZiO3QoeGIsdWIpO2Zvcih2YXIgeWI9W10semI9MDs2Mz56Yjt6YisrKXliW3piXT0wO3ZhciBBYj1MYSgxMjgseWIpO3hiLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMudmM9dGhpcy5WYT0wO3RoaXMuaD1sLkludDMyQXJyYXk/bmV3IEludDMyQXJyYXkodGhpcy5CZCk6TWEodGhpcy5CZCl9O1xudmFyIEJiPWZ1bmN0aW9uKGEpe3ZhciBiPWEuUWI7dyhiLmxlbmd0aD09YS55YSk7Zm9yKHZhciBjPWEueGYsZD0wLGU9MDtlPGIubGVuZ3RoOyljW2QrK109YltlXTw8MjR8YltlKzFdPDwxNnxiW2UrMl08PDh8YltlKzNdLGU9NCpkO2ZvcihiPTE2OzY0PmI7YisrKXt2YXIgZT1jW2ItMTVdfDAsZD1jW2ItMl18MCxmPShjW2ItMTZdfDApKygoZT4+Pjd8ZTw8MjUpXihlPj4+MTh8ZTw8MTQpXmU+Pj4zKXwwLGc9KGNbYi03XXwwKSsoKGQ+Pj4xN3xkPDwxNSleKGQ+Pj4xOXxkPDwxMyleZD4+PjEwKXwwO2NbYl09ZitnfDB9Zm9yKHZhciBkPWEuaFswXXwwLGU9YS5oWzFdfDAsaz1hLmhbMl18MCxuPWEuaFszXXwwLHk9YS5oWzRdfDAsRWI9YS5oWzVdfDAsV2E9YS5oWzZdfDAsZj1hLmhbN118MCxiPTA7NjQ+YjtiKyspdmFyIG9lPSgoZD4+PjJ8ZDw8MzApXihkPj4+MTN8ZDw8MTkpXihkPj4+MjJ8ZDw8MTApKSsoZCZlXmQma15lJmspfDAsZz15JkViXn55JldhLGY9ZisoKHk+Pj42fFxueTw8MjYpXih5Pj4+MTF8eTw8MjEpXih5Pj4+MjV8eTw8NykpfDAsZz1nKyh2YltiXXwwKXwwLGc9ZisoZysoY1tiXXwwKXwwKXwwLGY9V2EsV2E9RWIsRWI9eSx5PW4rZ3wwLG49ayxrPWUsZT1kLGQ9ZytvZXwwO2EuaFswXT1hLmhbMF0rZHwwO2EuaFsxXT1hLmhbMV0rZXwwO2EuaFsyXT1hLmhbMl0ra3wwO2EuaFszXT1hLmhbM10rbnwwO2EuaFs0XT1hLmhbNF0reXwwO2EuaFs1XT1hLmhbNV0rRWJ8MDthLmhbNl09YS5oWzZdK1dhfDA7YS5oWzddPWEuaFs3XStmfDB9O1xueGIucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPWEubGVuZ3RoKTt2YXIgYz0wLGQ9dGhpcy5WYTtpZihwKGEpKWZvcig7YzxiOyl0aGlzLlFiW2QrK109YS5jaGFyQ29kZUF0KGMrKyksZD09dGhpcy55YSYmKEJiKHRoaXMpLGQ9MCk7ZWxzZSBpZihlYShhKSlmb3IoO2M8Yjspe3ZhciBlPWFbYysrXTtpZighKFwibnVtYmVyXCI9PXR5cGVvZiBlJiYwPD1lJiYyNTU+PWUmJmU9PShlfDApKSl0aHJvdyBFcnJvcihcIm1lc3NhZ2UgbXVzdCBiZSBhIGJ5dGUgYXJyYXlcIik7dGhpcy5RYltkKytdPWU7ZD09dGhpcy55YSYmKEJiKHRoaXMpLGQ9MCl9ZWxzZSB0aHJvdyBFcnJvcihcIm1lc3NhZ2UgbXVzdCBiZSBzdHJpbmcgb3IgYXJyYXlcIik7dGhpcy5WYT1kO3RoaXMudmMrPWJ9O1xueGIucHJvdG90eXBlLmRpZ2VzdD1mdW5jdGlvbigpe3ZhciBhPVtdLGI9OCp0aGlzLnZjOzU2PnRoaXMuVmE/dGhpcy51cGRhdGUoQWIsNTYtdGhpcy5WYSk6dGhpcy51cGRhdGUoQWIsdGhpcy55YS0odGhpcy5WYS01NikpO2Zvcih2YXIgYz02Mzs1Njw9YztjLS0pdGhpcy5RYltjXT1iJjI1NSxiLz0yNTY7QmIodGhpcyk7Zm9yKGM9Yj0wO2M8dGhpcy5ZZTtjKyspZm9yKHZhciBkPTI0OzA8PWQ7ZC09OClhW2IrK109dGhpcy5oW2NdPj5kJjI1NTtyZXR1cm4gYX07XG52YXIgd2I9WzExMTYzNTI0MDgsMTg5OTQ0NzQ0MSwzMDQ5MzIzNDcxLDM5MjEwMDk1NzMsOTYxOTg3MTYzLDE1MDg5NzA5OTMsMjQ1MzYzNTc0OCwyODcwNzYzMjIxLDM2MjQzODEwODAsMzEwNTk4NDAxLDYwNzIyNTI3OCwxNDI2ODgxOTg3LDE5MjUwNzgzODgsMjE2MjA3ODIwNiwyNjE0ODg4MTAzLDMyNDgyMjI1ODAsMzgzNTM5MDQwMSw0MDIyMjI0Nzc0LDI2NDM0NzA3OCw2MDQ4MDc2MjgsNzcwMjU1OTgzLDEyNDkxNTAxMjIsMTU1NTA4MTY5MiwxOTk2MDY0OTg2LDI1NTQyMjA4ODIsMjgyMTgzNDM0OSwyOTUyOTk2ODA4LDMyMTAzMTM2NzEsMzMzNjU3MTg5MSwzNTg0NTI4NzExLDExMzkyNjk5MywzMzgyNDE4OTUsNjY2MzA3MjA1LDc3MzUyOTkxMiwxMjk0NzU3MzcyLDEzOTYxODIyOTEsMTY5NTE4MzcwMCwxOTg2NjYxMDUxLDIxNzcwMjYzNTAsMjQ1Njk1NjAzNywyNzMwNDg1OTIxLDI4MjAzMDI0MTEsMzI1OTczMDgwMCwzMzQ1NzY0NzcxLDM1MTYwNjU4MTcsMzYwMDM1MjgwNCxcbjQwOTQ1NzE5MDksMjc1NDIzMzQ0LDQzMDIyNzczNCw1MDY5NDg2MTYsNjU5MDYwNTU2LDg4Mzk5Nzg3Nyw5NTgxMzk1NzEsMTMyMjgyMjIxOCwxNTM3MDAyMDYzLDE3NDc4NzM3NzksMTk1NTU2MjIyMiwyMDI0MTA0ODE1LDIyMjc3MzA0NTIsMjM2MTg1MjQyNCwyNDI4NDM2NDc0LDI3NTY3MzQxODcsMzIwNDAzMTQ3OSwzMzI5MzI1Mjk4XTt2YXIgRGI9ZnVuY3Rpb24oKXt4Yi5jYWxsKHRoaXMsOCxDYil9O3QoRGIseGIpO3ZhciBDYj1bMTc3OTAzMzcwMywzMTQ0MTM0Mjc3LDEwMTM5MDQyNDIsMjc3MzQ4MDc2MiwxMzU5ODkzMTE5LDI2MDA4MjI5MjQsNTI4NzM0NjM1LDE1NDE0NTkyMjVdO3ZhciBGYj0hQXx8OTw9TnVtYmVyKG1iKSxHYj1BJiYhQihcIjlcIik7IWZifHxCKFwiNTI4XCIpO2ViJiZCKFwiMS45YlwiKXx8QSYmQihcIjhcIil8fGJiJiZCKFwiOS41XCIpfHxmYiYmQihcIjUyOFwiKTtlYiYmIUIoXCI4XCIpfHxBJiZCKFwiOVwiKTt2YXIgSGI9ZnVuY3Rpb24oKXt0aGlzLkFhPXRoaXMuQWE7dGhpcy5nYz10aGlzLmdjfTtIYi5wcm90b3R5cGUuQWE9ITE7SGIucHJvdG90eXBlLmlzRGlzcG9zZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5BYX07SGIucHJvdG90eXBlLlJhPWZ1bmN0aW9uKCl7aWYodGhpcy5nYylmb3IoO3RoaXMuZ2MubGVuZ3RoOyl0aGlzLmdjLnNoaWZ0KCkoKX07dmFyIEliPWZ1bmN0aW9uKGEsYil7dGhpcy50eXBlPWE7dGhpcy5jdXJyZW50VGFyZ2V0PXRoaXMudGFyZ2V0PWI7dGhpcy5kZWZhdWx0UHJldmVudGVkPXRoaXMuJGE9ITE7dGhpcy5NZD0hMH07SWIucHJvdG90eXBlLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7dGhpcy5kZWZhdWx0UHJldmVudGVkPSEwO3RoaXMuTWQ9ITF9O3ZhciBKYj1mdW5jdGlvbihhLGIpe0liLmNhbGwodGhpcyxhP2EudHlwZTpcIlwiKTt0aGlzLnJlbGF0ZWRUYXJnZXQ9dGhpcy5jdXJyZW50VGFyZ2V0PXRoaXMudGFyZ2V0PW51bGw7dGhpcy5jaGFyQ29kZT10aGlzLmtleUNvZGU9dGhpcy5idXR0b249dGhpcy5zY3JlZW5ZPXRoaXMuc2NyZWVuWD10aGlzLmNsaWVudFk9dGhpcy5jbGllbnRYPXRoaXMub2Zmc2V0WT10aGlzLm9mZnNldFg9MDt0aGlzLm1ldGFLZXk9dGhpcy5zaGlmdEtleT10aGlzLmFsdEtleT10aGlzLmN0cmxLZXk9ITE7dGhpcy5xYj10aGlzLnN0YXRlPW51bGw7YSYmdGhpcy5pbml0KGEsYil9O3QoSmIsSWIpO1xuSmIucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLnR5cGU9YS50eXBlLGQ9YS5jaGFuZ2VkVG91Y2hlcz9hLmNoYW5nZWRUb3VjaGVzWzBdOm51bGw7dGhpcy50YXJnZXQ9YS50YXJnZXR8fGEuc3JjRWxlbWVudDt0aGlzLmN1cnJlbnRUYXJnZXQ9YjtpZihiPWEucmVsYXRlZFRhcmdldCl7aWYoZWIpe3ZhciBlO2E6e3RyeXtaYShiLm5vZGVOYW1lKTtlPSEwO2JyZWFrIGF9Y2F0Y2goZil7fWU9ITF9ZXx8KGI9bnVsbCl9fWVsc2VcIm1vdXNlb3ZlclwiPT1jP2I9YS5mcm9tRWxlbWVudDpcIm1vdXNlb3V0XCI9PWMmJihiPWEudG9FbGVtZW50KTt0aGlzLnJlbGF0ZWRUYXJnZXQ9YjtudWxsPT09ZD8odGhpcy5vZmZzZXRYPWZifHx2b2lkIDAhPT1hLm9mZnNldFg/YS5vZmZzZXRYOmEubGF5ZXJYLHRoaXMub2Zmc2V0WT1mYnx8dm9pZCAwIT09YS5vZmZzZXRZP2Eub2Zmc2V0WTphLmxheWVyWSx0aGlzLmNsaWVudFg9dm9pZCAwIT09YS5jbGllbnRYP2EuY2xpZW50WDpcbmEucGFnZVgsdGhpcy5jbGllbnRZPXZvaWQgMCE9PWEuY2xpZW50WT9hLmNsaWVudFk6YS5wYWdlWSx0aGlzLnNjcmVlblg9YS5zY3JlZW5YfHwwLHRoaXMuc2NyZWVuWT1hLnNjcmVlbll8fDApOih0aGlzLmNsaWVudFg9dm9pZCAwIT09ZC5jbGllbnRYP2QuY2xpZW50WDpkLnBhZ2VYLHRoaXMuY2xpZW50WT12b2lkIDAhPT1kLmNsaWVudFk/ZC5jbGllbnRZOmQucGFnZVksdGhpcy5zY3JlZW5YPWQuc2NyZWVuWHx8MCx0aGlzLnNjcmVlblk9ZC5zY3JlZW5ZfHwwKTt0aGlzLmJ1dHRvbj1hLmJ1dHRvbjt0aGlzLmtleUNvZGU9YS5rZXlDb2RlfHwwO3RoaXMuY2hhckNvZGU9YS5jaGFyQ29kZXx8KFwia2V5cHJlc3NcIj09Yz9hLmtleUNvZGU6MCk7dGhpcy5jdHJsS2V5PWEuY3RybEtleTt0aGlzLmFsdEtleT1hLmFsdEtleTt0aGlzLnNoaWZ0S2V5PWEuc2hpZnRLZXk7dGhpcy5tZXRhS2V5PWEubWV0YUtleTt0aGlzLnN0YXRlPWEuc3RhdGU7dGhpcy5xYj1hO2EuZGVmYXVsdFByZXZlbnRlZCYmXG50aGlzLnByZXZlbnREZWZhdWx0KCl9O0piLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe0piLmhkLnByZXZlbnREZWZhdWx0LmNhbGwodGhpcyk7dmFyIGE9dGhpcy5xYjtpZihhLnByZXZlbnREZWZhdWx0KWEucHJldmVudERlZmF1bHQoKTtlbHNlIGlmKGEucmV0dXJuVmFsdWU9ITEsR2IpdHJ5e2lmKGEuY3RybEtleXx8MTEyPD1hLmtleUNvZGUmJjEyMz49YS5rZXlDb2RlKWEua2V5Q29kZT0tMX1jYXRjaChiKXt9fTtKYi5wcm90b3R5cGUuQWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5xYn07dmFyIEtiPVwiY2xvc3VyZV9saXN0ZW5hYmxlX1wiKygxRTYqTWF0aC5yYW5kb20oKXwwKSxMYj0wO3ZhciBNYj1mdW5jdGlvbihhLGIsYyxkLGUpe3RoaXMubGlzdGVuZXI9YTt0aGlzLmxjPW51bGw7dGhpcy5zcmM9Yjt0aGlzLnR5cGU9Yzt0aGlzLmNhcHR1cmU9ISFkO3RoaXMuWWI9ZTt0aGlzLmtleT0rK0xiO3RoaXMuZ2I9dGhpcy5QYj0hMX0sTmI9ZnVuY3Rpb24oYSl7YS5nYj0hMDthLmxpc3RlbmVyPW51bGw7YS5sYz1udWxsO2Euc3JjPW51bGw7YS5ZYj1udWxsfTt2YXIgT2I9ZnVuY3Rpb24oYSl7dGhpcy5zcmM9YTt0aGlzLkM9e307dGhpcy5MYj0wfTtPYi5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9YS50b1N0cmluZygpO2E9dGhpcy5DW2ZdO2F8fChhPXRoaXMuQ1tmXT1bXSx0aGlzLkxiKyspO3ZhciBnPVBiKGEsYixkLGUpOy0xPGc/KGI9YVtnXSxjfHwoYi5QYj0hMSkpOihiPW5ldyBNYihiLHRoaXMuc3JjLGYsISFkLGUpLGIuUGI9YyxhLnB1c2goYikpO3JldHVybiBifTtPYi5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKGEsYixjLGQpe2E9YS50b1N0cmluZygpO2lmKCEoYSBpbiB0aGlzLkMpKXJldHVybiExO3ZhciBlPXRoaXMuQ1thXTtiPVBiKGUsYixjLGQpO3JldHVybi0xPGI/KE5iKGVbYl0pLElhKGUsYiksMD09ZS5sZW5ndGgmJihkZWxldGUgdGhpcy5DW2FdLHRoaXMuTGItLSksITApOiExfTtcbnZhciBRYj1mdW5jdGlvbihhLGIpe3ZhciBjPWIudHlwZTtjIGluIGEuQyYmSmEoYS5DW2NdLGIpJiYoTmIoYiksMD09YS5DW2NdLmxlbmd0aCYmKGRlbGV0ZSBhLkNbY10sYS5MYi0tKSl9O09iLnByb3RvdHlwZS5LYz1mdW5jdGlvbihhLGIsYyxkKXthPXRoaXMuQ1thLnRvU3RyaW5nKCldO3ZhciBlPS0xO2EmJihlPVBiKGEsYixjLGQpKTtyZXR1cm4tMTxlP2FbZV06bnVsbH07dmFyIFBiPWZ1bmN0aW9uKGEsYixjLGQpe2Zvcih2YXIgZT0wO2U8YS5sZW5ndGg7KytlKXt2YXIgZj1hW2VdO2lmKCFmLmdiJiZmLmxpc3RlbmVyPT1iJiZmLmNhcHR1cmU9PSEhYyYmZi5ZYj09ZClyZXR1cm4gZX1yZXR1cm4tMX07dmFyIFJiPVwiY2xvc3VyZV9sbV9cIisoMUU2Kk1hdGgucmFuZG9tKCl8MCksU2I9e30sVGI9MCxVYj1mdW5jdGlvbihhLGIsYyxkLGUpe2lmKGRhKGIpKWZvcih2YXIgZj0wO2Y8Yi5sZW5ndGg7ZisrKVViKGEsYltmXSxjLGQsZSk7ZWxzZSBjPVZiKGMpLGEmJmFbS2JdP2EubGlzdGVuKGIsYyxkLGUpOldiKGEsYixjLCExLGQsZSl9LFdiPWZ1bmN0aW9uKGEsYixjLGQsZSxmKXtpZighYil0aHJvdyBFcnJvcihcIkludmFsaWQgZXZlbnQgdHlwZVwiKTt2YXIgZz0hIWUsaz1YYihhKTtrfHwoYVtSYl09az1uZXcgT2IoYSkpO2M9ay5hZGQoYixjLGQsZSxmKTtpZighYy5sYyl7ZD1ZYigpO2MubGM9ZDtkLnNyYz1hO2QubGlzdGVuZXI9YztpZihhLmFkZEV2ZW50TGlzdGVuZXIpYS5hZGRFdmVudExpc3RlbmVyKGIudG9TdHJpbmcoKSxkLGcpO2Vsc2UgaWYoYS5hdHRhY2hFdmVudClhLmF0dGFjaEV2ZW50KFpiKGIudG9TdHJpbmcoKSksZCk7ZWxzZSB0aHJvdyBFcnJvcihcImFkZEV2ZW50TGlzdGVuZXIgYW5kIGF0dGFjaEV2ZW50IGFyZSB1bmF2YWlsYWJsZS5cIik7XG5UYisrfX0sWWI9ZnVuY3Rpb24oKXt2YXIgYT0kYixiPUZiP2Z1bmN0aW9uKGMpe3JldHVybiBhLmNhbGwoYi5zcmMsYi5saXN0ZW5lcixjKX06ZnVuY3Rpb24oYyl7Yz1hLmNhbGwoYi5zcmMsYi5saXN0ZW5lcixjKTtpZighYylyZXR1cm4gY307cmV0dXJuIGJ9LGFjPWZ1bmN0aW9uKGEsYixjLGQsZSl7aWYoZGEoYikpZm9yKHZhciBmPTA7ZjxiLmxlbmd0aDtmKyspYWMoYSxiW2ZdLGMsZCxlKTtlbHNlIGM9VmIoYyksYSYmYVtLYl0/YmMoYSxiLGMsZCxlKTpXYihhLGIsYywhMCxkLGUpfSxjYz1mdW5jdGlvbihhLGIsYyxkLGUpe2lmKGRhKGIpKWZvcih2YXIgZj0wO2Y8Yi5sZW5ndGg7ZisrKWNjKGEsYltmXSxjLGQsZSk7ZWxzZSBjPVZiKGMpLGEmJmFbS2JdP2EuYWEucmVtb3ZlKFN0cmluZyhiKSxjLGQsZSk6YSYmKGE9WGIoYSkpJiYoYj1hLktjKGIsYywhIWQsZSkpJiZkYyhiKX0sZGM9ZnVuY3Rpb24oYSl7aWYoIWZhKGEpJiZhJiYhYS5nYil7dmFyIGI9YS5zcmM7aWYoYiYmXG5iW0tiXSlRYihiLmFhLGEpO2Vsc2V7dmFyIGM9YS50eXBlLGQ9YS5sYztiLnJlbW92ZUV2ZW50TGlzdGVuZXI/Yi5yZW1vdmVFdmVudExpc3RlbmVyKGMsZCxhLmNhcHR1cmUpOmIuZGV0YWNoRXZlbnQmJmIuZGV0YWNoRXZlbnQoWmIoYyksZCk7VGItLTsoYz1YYihiKSk/KFFiKGMsYSksMD09Yy5MYiYmKGMuc3JjPW51bGwsYltSYl09bnVsbCkpOk5iKGEpfX19LFpiPWZ1bmN0aW9uKGEpe3JldHVybiBhIGluIFNiP1NiW2FdOlNiW2FdPVwib25cIithfSxmYz1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT0hMDtpZihhPVhiKGEpKWlmKGI9YS5DW2IudG9TdHJpbmcoKV0pZm9yKGI9Yi5jb25jYXQoKSxhPTA7YTxiLmxlbmd0aDthKyspe3ZhciBmPWJbYV07ZiYmZi5jYXB0dXJlPT1jJiYhZi5nYiYmKGY9ZWMoZixkKSxlPWUmJiExIT09Zil9cmV0dXJuIGV9LGVjPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5saXN0ZW5lcixkPWEuWWJ8fGEuc3JjO2EuUGImJmRjKGEpO3JldHVybiBjLmNhbGwoZCxcbmIpfSwkYj1mdW5jdGlvbihhLGIpe2lmKGEuZ2IpcmV0dXJuITA7aWYoIUZiKXtpZighYilhOntiPVtcIndpbmRvd1wiLFwiZXZlbnRcIl07Zm9yKHZhciBjPWwsZDtkPWIuc2hpZnQoKTspaWYobnVsbCE9Y1tkXSljPWNbZF07ZWxzZXtiPW51bGw7YnJlYWsgYX1iPWN9ZD1iO2I9bmV3IEpiKGQsdGhpcyk7Yz0hMDtpZighKDA+ZC5rZXlDb2RlfHx2b2lkIDAhPWQucmV0dXJuVmFsdWUpKXthOnt2YXIgZT0hMTtpZigwPT1kLmtleUNvZGUpdHJ5e2Qua2V5Q29kZT0tMTticmVhayBhfWNhdGNoKGcpe2U9ITB9aWYoZXx8dm9pZCAwPT1kLnJldHVyblZhbHVlKWQucmV0dXJuVmFsdWU9ITB9ZD1bXTtmb3IoZT1iLmN1cnJlbnRUYXJnZXQ7ZTtlPWUucGFyZW50Tm9kZSlkLnB1c2goZSk7YT1hLnR5cGU7Zm9yKGU9ZC5sZW5ndGgtMTshYi4kYSYmMDw9ZTtlLS0pe2IuY3VycmVudFRhcmdldD1kW2VdO3ZhciBmPWZjKGRbZV0sYSwhMCxiKSxjPWMmJmZ9Zm9yKGU9MDshYi4kYSYmZTxkLmxlbmd0aDtlKyspYi5jdXJyZW50VGFyZ2V0PVxuZFtlXSxmPWZjKGRbZV0sYSwhMSxiKSxjPWMmJmZ9cmV0dXJuIGN9cmV0dXJuIGVjKGEsbmV3IEpiKGIsdGhpcykpfSxYYj1mdW5jdGlvbihhKXthPWFbUmJdO3JldHVybiBhIGluc3RhbmNlb2YgT2I/YTpudWxsfSxnYz1cIl9fY2xvc3VyZV9ldmVudHNfZm5fXCIrKDFFOSpNYXRoLnJhbmRvbSgpPj4+MCksVmI9ZnVuY3Rpb24oYSl7dyhhLFwiTGlzdGVuZXIgY2FuIG5vdCBiZSBudWxsLlwiKTtpZihxKGEpKXJldHVybiBhO3coYS5oYW5kbGVFdmVudCxcIkFuIG9iamVjdCBsaXN0ZW5lciBtdXN0IGhhdmUgaGFuZGxlRXZlbnQgbWV0aG9kLlwiKTthW2djXXx8KGFbZ2NdPWZ1bmN0aW9uKGIpe3JldHVybiBhLmhhbmRsZUV2ZW50KGIpfSk7cmV0dXJuIGFbZ2NdfTt2YXIgaGM9L15bK2EtekEtWjAtOV8uISMkJSYnKlxcLz0/XmB7fH1+LV0rQChbYS16QS1aMC05LV0rXFwuKStbYS16QS1aMC05XXsyLDYzfSQvO3ZhciBqYz1mdW5jdGlvbigpe3RoaXMuc2M9XCJcIjt0aGlzLmdlPWljfTtqYy5wcm90b3R5cGUuYmM9ITA7amMucHJvdG90eXBlLldiPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2N9O2pjLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiQ29uc3R7XCIrdGhpcy5zYytcIn1cIn07dmFyIGtjPWZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiBqYyYmYS5jb25zdHJ1Y3Rvcj09PWpjJiZhLmdlPT09aWMpcmV0dXJuIGEuc2M7eGEoXCJleHBlY3RlZCBvYmplY3Qgb2YgdHlwZSBDb25zdCwgZ290ICdcIithK1wiJ1wiKTtyZXR1cm5cInR5cGVfZXJyb3I6Q29uc3RcIn0saWM9e30sbGM9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IGpjO2Iuc2M9YTtyZXR1cm4gYn07bGMoXCJcIik7dmFyIG5jPWZ1bmN0aW9uKCl7dGhpcy5tYT1cIlwiO3RoaXMuZmU9bWN9O25jLnByb3RvdHlwZS5iYz0hMDtuYy5wcm90b3R5cGUuV2I9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYX07bmMucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJTYWZlVXJse1wiK3RoaXMubWErXCJ9XCJ9O1xudmFyIG9jPWZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiBuYyYmYS5jb25zdHJ1Y3Rvcj09PW5jJiZhLmZlPT09bWMpcmV0dXJuIGEubWE7eGEoXCJleHBlY3RlZCBvYmplY3Qgb2YgdHlwZSBTYWZlVXJsLCBnb3QgJ1wiK2ErXCInIG9mIHR5cGUgXCIrbShhKSk7cmV0dXJuXCJ0eXBlX2Vycm9yOlNhZmVVcmxcIn0scGM9L14oPzooPzpodHRwcz98bWFpbHRvfGZ0cCk6fFteJjovPyNdKig/OlsvPyNdfCQpKS9pLHJjPWZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiBuYylyZXR1cm4gYTthPWEuYmM/YS5XYigpOlN0cmluZyhhKTtwYy50ZXN0KGEpfHwoYT1cImFib3V0OmludmFsaWQjekNsb3N1cmV6XCIpO3JldHVybiBxYyhhKX0sbWM9e30scWM9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IG5jO2IubWE9YTtyZXR1cm4gYn07cWMoXCJhYm91dDpibGFua1wiKTt2YXIgc2M9ZnVuY3Rpb24oYSl7cmV0dXJuL15cXHMqJC8udGVzdChhKT8hMTovXltcXF0sOnt9XFxzXFx1MjAyOFxcdTIwMjldKiQvLnRlc3QoYS5yZXBsYWNlKC9cXFxcW1wiXFxcXFxcL2JmbnJ0dV0vZyxcIkBcIikucmVwbGFjZSgvKD86XCJbXlwiXFxcXFxcblxcclxcdTIwMjhcXHUyMDI5XFx4MDAtXFx4MDhcXHgwYS1cXHgxZl0qXCJ8dHJ1ZXxmYWxzZXxudWxsfC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/KVtcXHNcXHUyMDI4XFx1MjAyOV0qKD89OnwsfF18fXwkKS9nLFwiXVwiKS5yZXBsYWNlKC8oPzpefDp8LCkoPzpbXFxzXFx1MjAyOFxcdTIwMjldKlxcWykrL2csXCJcIikpfSx0Yz1mdW5jdGlvbihhKXthPVN0cmluZyhhKTtpZihzYyhhKSl0cnl7cmV0dXJuIGV2YWwoXCIoXCIrYStcIilcIil9Y2F0Y2goYil7fXRocm93IEVycm9yKFwiSW52YWxpZCBKU09OIHN0cmluZzogXCIrYSk7fSx3Yz1mdW5jdGlvbihhKXt2YXIgYj1bXTt1YyhuZXcgdmMsYSxiKTtyZXR1cm4gYi5qb2luKFwiXCIpfSx2Yz1mdW5jdGlvbigpe3RoaXMubmM9dm9pZCAwfSxcbnVjPWZ1bmN0aW9uKGEsYixjKXtpZihudWxsPT1iKWMucHVzaChcIm51bGxcIik7ZWxzZXtpZihcIm9iamVjdFwiPT10eXBlb2YgYil7aWYoZGEoYikpe3ZhciBkPWI7Yj1kLmxlbmd0aDtjLnB1c2goXCJbXCIpO2Zvcih2YXIgZT1cIlwiLGY9MDtmPGI7ZisrKWMucHVzaChlKSxlPWRbZl0sdWMoYSxhLm5jP2EubmMuY2FsbChkLFN0cmluZyhmKSxlKTplLGMpLGU9XCIsXCI7Yy5wdXNoKFwiXVwiKTtyZXR1cm59aWYoYiBpbnN0YW5jZW9mIFN0cmluZ3x8YiBpbnN0YW5jZW9mIE51bWJlcnx8YiBpbnN0YW5jZW9mIEJvb2xlYW4pYj1iLnZhbHVlT2YoKTtlbHNle2MucHVzaChcIntcIik7Zj1cIlwiO2ZvcihkIGluIGIpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsZCkmJihlPWJbZF0sXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmKGMucHVzaChmKSx4YyhkLGMpLGMucHVzaChcIjpcIiksdWMoYSxhLm5jP2EubmMuY2FsbChiLGQsZSk6ZSxjKSxmPVwiLFwiKSk7Yy5wdXNoKFwifVwiKTtyZXR1cm59fXN3aXRjaCh0eXBlb2YgYil7Y2FzZSBcInN0cmluZ1wiOnhjKGIsXG5jKTticmVhaztjYXNlIFwibnVtYmVyXCI6Yy5wdXNoKGlzRmluaXRlKGIpJiYhaXNOYU4oYik/U3RyaW5nKGIpOlwibnVsbFwiKTticmVhaztjYXNlIFwiYm9vbGVhblwiOmMucHVzaChTdHJpbmcoYikpO2JyZWFrO2Nhc2UgXCJmdW5jdGlvblwiOmMucHVzaChcIm51bGxcIik7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcihcIlVua25vd24gdHlwZTogXCIrdHlwZW9mIGIpO319fSx5Yz17J1wiJzonXFxcXFwiJyxcIlxcXFxcIjpcIlxcXFxcXFxcXCIsXCIvXCI6XCJcXFxcL1wiLFwiXFxiXCI6XCJcXFxcYlwiLFwiXFxmXCI6XCJcXFxcZlwiLFwiXFxuXCI6XCJcXFxcblwiLFwiXFxyXCI6XCJcXFxcclwiLFwiXFx0XCI6XCJcXFxcdFwiLFwiXFx4MEJcIjpcIlxcXFx1MDAwYlwifSx6Yz0vXFx1ZmZmZi8udGVzdChcIlxcdWZmZmZcIik/L1tcXFxcXFxcIlxceDAwLVxceDFmXFx4N2YtXFx1ZmZmZl0vZzovW1xcXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHhmZl0vZyx4Yz1mdW5jdGlvbihhLGIpe2IucHVzaCgnXCInLGEucmVwbGFjZSh6YyxmdW5jdGlvbihhKXt2YXIgYj15Y1thXTtifHwoYj1cIlxcXFx1XCIrKGEuY2hhckNvZGVBdCgwKXw2NTUzNikudG9TdHJpbmcoMTYpLnN1YnN0cigxKSxcbnljW2FdPWIpO3JldHVybiBifSksJ1wiJyl9O3ZhciBBYz1mdW5jdGlvbigpe307QWMucHJvdG90eXBlLmxkPW51bGw7dmFyIEJjPWZ1bmN0aW9uKGEpe3JldHVybiBhLmxkfHwoYS5sZD1hLlBjKCkpfTt2YXIgQ2MsRGM9ZnVuY3Rpb24oKXt9O3QoRGMsQWMpO0RjLnByb3RvdHlwZS5SYj1mdW5jdGlvbigpe3ZhciBhPUVjKHRoaXMpO3JldHVybiBhP25ldyBBY3RpdmVYT2JqZWN0KGEpOm5ldyBYTUxIdHRwUmVxdWVzdH07RGMucHJvdG90eXBlLlBjPWZ1bmN0aW9uKCl7dmFyIGE9e307RWModGhpcykmJihhWzBdPSEwLGFbMV09ITApO3JldHVybiBhfTtcbnZhciBFYz1mdW5jdGlvbihhKXtpZighYS5BZCYmXCJ1bmRlZmluZWRcIj09dHlwZW9mIFhNTEh0dHBSZXF1ZXN0JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgQWN0aXZlWE9iamVjdCl7Zm9yKHZhciBiPVtcIk1TWE1MMi5YTUxIVFRQLjYuMFwiLFwiTVNYTUwyLlhNTEhUVFAuMy4wXCIsXCJNU1hNTDIuWE1MSFRUUFwiLFwiTWljcm9zb2Z0LlhNTEhUVFBcIl0sYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1iW2NdO3RyeXtyZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoZCksYS5BZD1kfWNhdGNoKGUpe319dGhyb3cgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIEFjdGl2ZVhPYmplY3QuIEFjdGl2ZVggbWlnaHQgYmUgZGlzYWJsZWQsIG9yIE1TWE1MIG1pZ2h0IG5vdCBiZSBpbnN0YWxsZWRcIik7fXJldHVybiBhLkFkfTtDYz1uZXcgRGM7dmFyIEZjPWZ1bmN0aW9uKCl7fTt0KEZjLEFjKTtGYy5wcm90b3R5cGUuUmI9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgWE1MSHR0cFJlcXVlc3Q7aWYoXCJ3aXRoQ3JlZGVudGlhbHNcImluIGEpcmV0dXJuIGE7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFhEb21haW5SZXF1ZXN0KXJldHVybiBuZXcgR2M7dGhyb3cgRXJyb3IoXCJVbnN1cHBvcnRlZCBicm93c2VyXCIpO307RmMucHJvdG90eXBlLlBjPWZ1bmN0aW9uKCl7cmV0dXJue319O1xudmFyIEdjPWZ1bmN0aW9uKCl7dGhpcy5wYT1uZXcgWERvbWFpblJlcXVlc3Q7dGhpcy5yZWFkeVN0YXRlPTA7dGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbDt0aGlzLnJlc3BvbnNlVGV4dD1cIlwiO3RoaXMuc3RhdHVzPS0xO3RoaXMuc3RhdHVzVGV4dD10aGlzLnJlc3BvbnNlWE1MPW51bGw7dGhpcy5wYS5vbmxvYWQ9cih0aGlzLkRlLHRoaXMpO3RoaXMucGEub25lcnJvcj1yKHRoaXMueGQsdGhpcyk7dGhpcy5wYS5vbnByb2dyZXNzPXIodGhpcy5FZSx0aGlzKTt0aGlzLnBhLm9udGltZW91dD1yKHRoaXMuRmUsdGhpcyl9O2g9R2MucHJvdG90eXBlO2gub3Blbj1mdW5jdGlvbihhLGIsYyl7aWYobnVsbCE9YyYmIWMpdGhyb3cgRXJyb3IoXCJPbmx5IGFzeW5jIHJlcXVlc3RzIGFyZSBzdXBwb3J0ZWQuXCIpO3RoaXMucGEub3BlbihhLGIpfTtcbmguc2VuZD1mdW5jdGlvbihhKXtpZihhKWlmKFwic3RyaW5nXCI9PXR5cGVvZiBhKXRoaXMucGEuc2VuZChhKTtlbHNlIHRocm93IEVycm9yKFwiT25seSBzdHJpbmcgZGF0YSBpcyBzdXBwb3J0ZWRcIik7ZWxzZSB0aGlzLnBhLnNlbmQoKX07aC5hYm9ydD1mdW5jdGlvbigpe3RoaXMucGEuYWJvcnQoKX07aC5zZXRSZXF1ZXN0SGVhZGVyPWZ1bmN0aW9uKCl7fTtoLkRlPWZ1bmN0aW9uKCl7dGhpcy5zdGF0dXM9MjAwO3RoaXMucmVzcG9uc2VUZXh0PXRoaXMucGEucmVzcG9uc2VUZXh0O0hjKHRoaXMsNCl9O2gueGQ9ZnVuY3Rpb24oKXt0aGlzLnN0YXR1cz01MDA7dGhpcy5yZXNwb25zZVRleHQ9XCJcIjtIYyh0aGlzLDQpfTtoLkZlPWZ1bmN0aW9uKCl7dGhpcy54ZCgpfTtoLkVlPWZ1bmN0aW9uKCl7dGhpcy5zdGF0dXM9MjAwO0hjKHRoaXMsMSl9O3ZhciBIYz1mdW5jdGlvbihhLGIpe2EucmVhZHlTdGF0ZT1iO2lmKGEub25yZWFkeXN0YXRlY2hhbmdlKWEub25yZWFkeXN0YXRlY2hhbmdlKCl9O3ZhciBKYz1mdW5jdGlvbigpe3RoaXMuamM9XCJcIjt0aGlzLmhlPUljfTtKYy5wcm90b3R5cGUuYmM9ITA7SmMucHJvdG90eXBlLldiPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuamN9O0pjLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiVHJ1c3RlZFJlc291cmNlVXJse1wiK3RoaXMuamMrXCJ9XCJ9O3ZhciBJYz17fTt2YXIgTGM9ZnVuY3Rpb24oKXt0aGlzLm1hPVwiXCI7dGhpcy5lZT1LY307TGMucHJvdG90eXBlLmJjPSEwO0xjLnByb3RvdHlwZS5XYj1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hfTtMYy5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIlNhZmVIdG1se1wiK3RoaXMubWErXCJ9XCJ9O3ZhciBNYz1mdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgTGMmJmEuY29uc3RydWN0b3I9PT1MYyYmYS5lZT09PUtjKXJldHVybiBhLm1hO3hhKFwiZXhwZWN0ZWQgb2JqZWN0IG9mIHR5cGUgU2FmZUh0bWwsIGdvdCAnXCIrYStcIicgb2YgdHlwZSBcIittKGEpKTtyZXR1cm5cInR5cGVfZXJyb3I6U2FmZUh0bWxcIn0sS2M9e307TGMucHJvdG90eXBlLk1lPWZ1bmN0aW9uKGEpe3RoaXMubWE9YTtyZXR1cm4gdGhpc307IWViJiYhQXx8QSYmOTw9TnVtYmVyKG1iKXx8ZWImJkIoXCIxLjkuMVwiKTtBJiZCKFwiOVwiKTt2YXIgT2M9ZnVuY3Rpb24oYSxiKXtOYShiLGZ1bmN0aW9uKGIsZCl7XCJzdHlsZVwiPT1kP2Euc3R5bGUuY3NzVGV4dD1iOlwiY2xhc3NcIj09ZD9hLmNsYXNzTmFtZT1iOlwiZm9yXCI9PWQ/YS5odG1sRm9yPWI6TmMuaGFzT3duUHJvcGVydHkoZCk/YS5zZXRBdHRyaWJ1dGUoTmNbZF0sYik6MD09ZC5sYXN0SW5kZXhPZihcImFyaWEtXCIsMCl8fDA9PWQubGFzdEluZGV4T2YoXCJkYXRhLVwiLDApP2Euc2V0QXR0cmlidXRlKGQsYik6YVtkXT1ifSl9LE5jPXtjZWxscGFkZGluZzpcImNlbGxQYWRkaW5nXCIsY2VsbHNwYWNpbmc6XCJjZWxsU3BhY2luZ1wiLGNvbHNwYW46XCJjb2xTcGFuXCIsZnJhbWVib3JkZXI6XCJmcmFtZUJvcmRlclwiLGhlaWdodDpcImhlaWdodFwiLG1heGxlbmd0aDpcIm1heExlbmd0aFwiLG5vbmNlOlwibm9uY2VcIixyb2xlOlwicm9sZVwiLHJvd3NwYW46XCJyb3dTcGFuXCIsdHlwZTpcInR5cGVcIix1c2VtYXA6XCJ1c2VNYXBcIix2YWxpZ246XCJ2QWxpZ25cIix3aWR0aDpcIndpZHRoXCJ9O3ZhciBQYz1mdW5jdGlvbihhLGIsYyl7dGhpcy5RZT1jO3RoaXMub2U9YTt0aGlzLmRmPWI7dGhpcy5mYz0wO3RoaXMuWmI9bnVsbH07UGMucHJvdG90eXBlLmdldD1mdW5jdGlvbigpe3ZhciBhOzA8dGhpcy5mYz8odGhpcy5mYy0tLGE9dGhpcy5aYix0aGlzLlpiPWEubmV4dCxhLm5leHQ9bnVsbCk6YT10aGlzLm9lKCk7cmV0dXJuIGF9O1BjLnByb3RvdHlwZS5wdXQ9ZnVuY3Rpb24oYSl7dGhpcy5kZihhKTt0aGlzLmZjPHRoaXMuUWUmJih0aGlzLmZjKyssYS5uZXh0PXRoaXMuWmIsdGhpcy5aYj1hKX07dmFyIFFjPWZ1bmN0aW9uKGEpe2wuc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGE7fSwwKX0sUmMsU2M9ZnVuY3Rpb24oKXt2YXIgYT1sLk1lc3NhZ2VDaGFubmVsO1widW5kZWZpbmVkXCI9PT10eXBlb2YgYSYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy5wb3N0TWVzc2FnZSYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXImJiF6KFwiUHJlc3RvXCIpJiYoYT1mdW5jdGlvbigpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJRlJBTUVcIik7YS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO2Euc3JjPVwiXCI7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGEpO3ZhciBiPWEuY29udGVudFdpbmRvdyxhPWIuZG9jdW1lbnQ7YS5vcGVuKCk7YS53cml0ZShcIlwiKTthLmNsb3NlKCk7dmFyIGM9XCJjYWxsSW1tZWRpYXRlXCIrTWF0aC5yYW5kb20oKSxkPVwiZmlsZTpcIj09Yi5sb2NhdGlvbi5wcm90b2NvbD9cIipcIjpiLmxvY2F0aW9uLnByb3RvY29sK1wiLy9cIitiLmxvY2F0aW9uLmhvc3QsXG5hPXIoZnVuY3Rpb24oYSl7aWYoKFwiKlwiPT1kfHxhLm9yaWdpbj09ZCkmJmEuZGF0YT09Yyl0aGlzLnBvcnQxLm9ubWVzc2FnZSgpfSx0aGlzKTtiLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYSwhMSk7dGhpcy5wb3J0MT17fTt0aGlzLnBvcnQyPXtwb3N0TWVzc2FnZTpmdW5jdGlvbigpe2IucG9zdE1lc3NhZ2UoYyxkKX19fSk7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhJiYheihcIlRyaWRlbnRcIikmJiF6KFwiTVNJRVwiKSl7dmFyIGI9bmV3IGEsYz17fSxkPWM7Yi5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtpZih2b2lkIDAhPT1jLm5leHQpe2M9Yy5uZXh0O3ZhciBhPWMub2Q7Yy5vZD1udWxsO2EoKX19O3JldHVybiBmdW5jdGlvbihhKXtkLm5leHQ9e29kOmF9O2Q9ZC5uZXh0O2IucG9ydDIucG9zdE1lc3NhZ2UoMCl9fXJldHVyblwidW5kZWZpbmVkXCIhPT10eXBlb2YgZG9jdW1lbnQmJlwib25yZWFkeXN0YXRlY2hhbmdlXCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU0NSSVBUXCIpP1xuZnVuY3Rpb24oYSl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNDUklQVFwiKTtiLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2Iub25yZWFkeXN0YXRlY2hhbmdlPW51bGw7Yi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpO2I9bnVsbDthKCk7YT1udWxsfTtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYil9OmZ1bmN0aW9uKGEpe2wuc2V0VGltZW91dChhLDApfX07dmFyIFRjPWZ1bmN0aW9uKCl7dGhpcy55Yz10aGlzLkxhPW51bGx9LFZjPW5ldyBQYyhmdW5jdGlvbigpe3JldHVybiBuZXcgVWN9LGZ1bmN0aW9uKGEpe2EucmVzZXQoKX0sMTAwKTtUYy5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGEsYil7dmFyIGM9VmMuZ2V0KCk7Yy5zZXQoYSxiKTt0aGlzLnljP3RoaXMueWMubmV4dD1jOih3KCF0aGlzLkxhKSx0aGlzLkxhPWMpO3RoaXMueWM9Y307VGMucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe3ZhciBhPW51bGw7dGhpcy5MYSYmKGE9dGhpcy5MYSx0aGlzLkxhPXRoaXMuTGEubmV4dCx0aGlzLkxhfHwodGhpcy55Yz1udWxsKSxhLm5leHQ9bnVsbCk7cmV0dXJuIGF9O3ZhciBVYz1mdW5jdGlvbigpe3RoaXMubmV4dD10aGlzLnNjb3BlPXRoaXMuSmM9bnVsbH07VWMucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGIpe3RoaXMuSmM9YTt0aGlzLnNjb3BlPWI7dGhpcy5uZXh0PW51bGx9O1xuVWMucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5uZXh0PXRoaXMuc2NvcGU9dGhpcy5KYz1udWxsfTt2YXIgJGM9ZnVuY3Rpb24oYSxiKXtXY3x8WGMoKTtZY3x8KFdjKCksWWM9ITApO1pjLmFkZChhLGIpfSxXYyxYYz1mdW5jdGlvbigpe2lmKC0xIT1TdHJpbmcobC5Qcm9taXNlKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSl7dmFyIGE9bC5Qcm9taXNlLnJlc29sdmUodm9pZCAwKTtXYz1mdW5jdGlvbigpe2EudGhlbihhZCl9fWVsc2UgV2M9ZnVuY3Rpb24oKXt2YXIgYT1hZDshcShsLnNldEltbWVkaWF0ZSl8fGwuV2luZG93JiZsLldpbmRvdy5wcm90b3R5cGUmJiF6KFwiRWRnZVwiKSYmbC5XaW5kb3cucHJvdG90eXBlLnNldEltbWVkaWF0ZT09bC5zZXRJbW1lZGlhdGU/KFJjfHwoUmM9U2MoKSksUmMoYSkpOmwuc2V0SW1tZWRpYXRlKGEpfX0sWWM9ITEsWmM9bmV3IFRjLGFkPWZ1bmN0aW9uKCl7Zm9yKHZhciBhO2E9WmMucmVtb3ZlKCk7KXt0cnl7YS5KYy5jYWxsKGEuc2NvcGUpfWNhdGNoKGIpe1FjKGIpfVZjLnB1dChhKX1ZYz0hMX07dmFyIGJkPWZ1bmN0aW9uKGEpe2EucHJvdG90eXBlLnRoZW49YS5wcm90b3R5cGUudGhlbjthLnByb3RvdHlwZS4kZ29vZ19UaGVuYWJsZT0hMH0sY2Q9ZnVuY3Rpb24oYSl7aWYoIWEpcmV0dXJuITE7dHJ5e3JldHVybiEhYS4kZ29vZ19UaGVuYWJsZX1jYXRjaChiKXtyZXR1cm4hMX19O3ZhciBDPWZ1bmN0aW9uKGEsYil7dGhpcy5NPTA7dGhpcy5uYT12b2lkIDA7dGhpcy5QYT10aGlzLmphPXRoaXMucz1udWxsO3RoaXMuWGI9dGhpcy5JYz0hMTtpZihhIT1iYSl0cnl7dmFyIGM9dGhpczthLmNhbGwoYixmdW5jdGlvbihhKXtkZChjLDIsYSl9LGZ1bmN0aW9uKGEpe2lmKCEoYSBpbnN0YW5jZW9mIGVkKSl0cnl7aWYoYSBpbnN0YW5jZW9mIEVycm9yKXRocm93IGE7dGhyb3cgRXJyb3IoXCJQcm9taXNlIHJlamVjdGVkLlwiKTt9Y2F0Y2goZSl7fWRkKGMsMyxhKX0pfWNhdGNoKGQpe2RkKHRoaXMsMyxkKX19LGZkPWZ1bmN0aW9uKCl7dGhpcy5uZXh0PXRoaXMuY29udGV4dD10aGlzLlhhPXRoaXMuRmE9dGhpcy5jaGlsZD1udWxsO3RoaXMub2I9ITF9O2ZkLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMuY29udGV4dD10aGlzLlhhPXRoaXMuRmE9dGhpcy5jaGlsZD1udWxsO3RoaXMub2I9ITF9O1xudmFyIGdkPW5ldyBQYyhmdW5jdGlvbigpe3JldHVybiBuZXcgZmR9LGZ1bmN0aW9uKGEpe2EucmVzZXQoKX0sMTAwKSxoZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9Z2QuZ2V0KCk7ZC5GYT1hO2QuWGE9YjtkLmNvbnRleHQ9YztyZXR1cm4gZH0sRD1mdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgQylyZXR1cm4gYTt2YXIgYj1uZXcgQyhiYSk7ZGQoYiwyLGEpO3JldHVybiBifSxFPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgQyhmdW5jdGlvbihiLGMpe2MoYSl9KX0samQ9ZnVuY3Rpb24oYSxiLGMpe2lkKGEsYixjLG51bGwpfHwkYyhqYShiLGEpKX0sa2Q9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBDKGZ1bmN0aW9uKGIpe3ZhciBjPWEubGVuZ3RoLGQ9W107aWYoYylmb3IodmFyIGU9ZnVuY3Rpb24oYSxlLGYpe2MtLTtkW2FdPWU/e3llOiEwLHZhbHVlOmZ9Ont5ZTohMSxyZWFzb246Zn07MD09YyYmYihkKX0sZj0wLGc7ZjxhLmxlbmd0aDtmKyspZz1hW2ZdLGpkKGcsamEoZSxmLCEwKSxcbmphKGUsZiwhMSkpO2Vsc2UgYihkKX0pfTtDLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGEsYixjKXtudWxsIT1hJiZBYShhLFwib3B0X29uRnVsZmlsbGVkIHNob3VsZCBiZSBhIGZ1bmN0aW9uLlwiKTtudWxsIT1iJiZBYShiLFwib3B0X29uUmVqZWN0ZWQgc2hvdWxkIGJlIGEgZnVuY3Rpb24uIERpZCB5b3UgcGFzcyBvcHRfY29udGV4dCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IGluc3RlYWQgb2YgdGhlIHRoaXJkP1wiKTtyZXR1cm4gbGQodGhpcyxxKGEpP2E6bnVsbCxxKGIpP2I6bnVsbCxjKX07YmQoQyk7dmFyIG5kPWZ1bmN0aW9uKGEsYil7Yj1oZChiLGIsdm9pZCAwKTtiLm9iPSEwO21kKGEsYik7cmV0dXJuIGF9O0MucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbGQodGhpcyxudWxsLGEsYil9O0MucHJvdG90eXBlLmNhbmNlbD1mdW5jdGlvbihhKXswPT10aGlzLk0mJiRjKGZ1bmN0aW9uKCl7dmFyIGI9bmV3IGVkKGEpO29kKHRoaXMsYil9LHRoaXMpfTtcbnZhciBvZD1mdW5jdGlvbihhLGIpe2lmKDA9PWEuTSlpZihhLnMpe3ZhciBjPWEucztpZihjLmphKXtmb3IodmFyIGQ9MCxlPW51bGwsZj1udWxsLGc9Yy5qYTtnJiYoZy5vYnx8KGQrKyxnLmNoaWxkPT1hJiYoZT1nKSwhKGUmJjE8ZCkpKTtnPWcubmV4dCllfHwoZj1nKTtlJiYoMD09Yy5NJiYxPT1kP29kKGMsYik6KGY/KGQ9Zix3KGMuamEpLHcobnVsbCE9ZCksZC5uZXh0PT1jLlBhJiYoYy5QYT1kKSxkLm5leHQ9ZC5uZXh0Lm5leHQpOnBkKGMpLHFkKGMsZSwzLGIpKSl9YS5zPW51bGx9ZWxzZSBkZChhLDMsYil9LG1kPWZ1bmN0aW9uKGEsYil7YS5qYXx8MiE9YS5NJiYzIT1hLk18fHJkKGEpO3cobnVsbCE9Yi5GYSk7YS5QYT9hLlBhLm5leHQ9YjphLmphPWI7YS5QYT1ifSxsZD1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1oZChudWxsLG51bGwsbnVsbCk7ZS5jaGlsZD1uZXcgQyhmdW5jdGlvbihhLGcpe2UuRmE9Yj9mdW5jdGlvbihjKXt0cnl7dmFyIGU9Yi5jYWxsKGQsYyk7YShlKX1jYXRjaCh5KXtnKHkpfX06XG5hO2UuWGE9Yz9mdW5jdGlvbihiKXt0cnl7dmFyIGU9Yy5jYWxsKGQsYik7dm9pZCAwPT09ZSYmYiBpbnN0YW5jZW9mIGVkP2coYik6YShlKX1jYXRjaCh5KXtnKHkpfX06Z30pO2UuY2hpbGQucz1hO21kKGEsZSk7cmV0dXJuIGUuY2hpbGR9O0MucHJvdG90eXBlLnFmPWZ1bmN0aW9uKGEpe3coMT09dGhpcy5NKTt0aGlzLk09MDtkZCh0aGlzLDIsYSl9O0MucHJvdG90eXBlLnJmPWZ1bmN0aW9uKGEpe3coMT09dGhpcy5NKTt0aGlzLk09MDtkZCh0aGlzLDMsYSl9O1xudmFyIGRkPWZ1bmN0aW9uKGEsYixjKXswPT1hLk0mJihhPT09YyYmKGI9MyxjPW5ldyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbm5vdCByZXNvbHZlIHRvIGl0c2VsZlwiKSksYS5NPTEsaWQoYyxhLnFmLGEucmYsYSl8fChhLm5hPWMsYS5NPWIsYS5zPW51bGwscmQoYSksMyE9Ynx8YyBpbnN0YW5jZW9mIGVkfHxzZChhLGMpKSl9LGlkPWZ1bmN0aW9uKGEsYixjLGQpe2lmKGEgaW5zdGFuY2VvZiBDKXJldHVybiBudWxsIT1iJiZBYShiLFwib3B0X29uRnVsZmlsbGVkIHNob3VsZCBiZSBhIGZ1bmN0aW9uLlwiKSxudWxsIT1jJiZBYShjLFwib3B0X29uUmVqZWN0ZWQgc2hvdWxkIGJlIGEgZnVuY3Rpb24uIERpZCB5b3UgcGFzcyBvcHRfY29udGV4dCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IGluc3RlYWQgb2YgdGhlIHRoaXJkP1wiKSxtZChhLGhkKGJ8fGJhLGN8fG51bGwsZCkpLCEwO2lmKGNkKGEpKXJldHVybiBhLnRoZW4oYixjLGQpLCEwO2lmKGdhKGEpKXRyeXt2YXIgZT1hLnRoZW47aWYocShlKSlyZXR1cm4gdGQoYSxcbmUsYixjLGQpLCEwfWNhdGNoKGYpe3JldHVybiBjLmNhbGwoZCxmKSwhMH1yZXR1cm4hMX0sdGQ9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj0hMSxnPWZ1bmN0aW9uKGEpe2Z8fChmPSEwLGMuY2FsbChlLGEpKX0saz1mdW5jdGlvbihhKXtmfHwoZj0hMCxkLmNhbGwoZSxhKSl9O3RyeXtiLmNhbGwoYSxnLGspfWNhdGNoKG4pe2sobil9fSxyZD1mdW5jdGlvbihhKXthLkljfHwoYS5JYz0hMCwkYyhhLnRlLGEpKX0scGQ9ZnVuY3Rpb24oYSl7dmFyIGI9bnVsbDthLmphJiYoYj1hLmphLGEuamE9Yi5uZXh0LGIubmV4dD1udWxsKTthLmphfHwoYS5QYT1udWxsKTtudWxsIT1iJiZ3KG51bGwhPWIuRmEpO3JldHVybiBifTtDLnByb3RvdHlwZS50ZT1mdW5jdGlvbigpe2Zvcih2YXIgYTthPXBkKHRoaXMpOylxZCh0aGlzLGEsdGhpcy5NLHRoaXMubmEpO3RoaXMuSWM9ITF9O1xudmFyIHFkPWZ1bmN0aW9uKGEsYixjLGQpe2lmKDM9PWMmJmIuWGEmJiFiLm9iKWZvcig7YSYmYS5YYjthPWEucylhLlhiPSExO2lmKGIuY2hpbGQpYi5jaGlsZC5zPW51bGwsdWQoYixjLGQpO2Vsc2UgdHJ5e2Iub2I/Yi5GYS5jYWxsKGIuY29udGV4dCk6dWQoYixjLGQpfWNhdGNoKGUpe3ZkLmNhbGwobnVsbCxlKX1nZC5wdXQoYil9LHVkPWZ1bmN0aW9uKGEsYixjKXsyPT1iP2EuRmEuY2FsbChhLmNvbnRleHQsYyk6YS5YYSYmYS5YYS5jYWxsKGEuY29udGV4dCxjKX0sc2Q9ZnVuY3Rpb24oYSxiKXthLlhiPSEwOyRjKGZ1bmN0aW9uKCl7YS5YYiYmdmQuY2FsbChudWxsLGIpfSl9LHZkPVFjLGVkPWZ1bmN0aW9uKGEpe3UuY2FsbCh0aGlzLGEpfTt0KGVkLHUpO2VkLnByb3RvdHlwZS5uYW1lPVwiY2FuY2VsXCI7LypcbiBQb3J0aW9ucyBvZiB0aGlzIGNvZGUgYXJlIGZyb20gTW9jaGlLaXQsIHJlY2VpdmVkIGJ5XG4gVGhlIENsb3N1cmUgQXV0aG9ycyB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIEFsbCBvdGhlciBjb2RlIGlzIENvcHlyaWdodFxuIDIwMDUtMjAwOSBUaGUgQ2xvc3VyZSBBdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKi9cbnZhciB3ZD1mdW5jdGlvbihhLGIpe3RoaXMucGM9W107dGhpcy5HZD1hO3RoaXMucmQ9Ynx8bnVsbDt0aGlzLnNiPXRoaXMuVGE9ITE7dGhpcy5uYT12b2lkIDA7dGhpcy5mZD10aGlzLmtkPXRoaXMuRGM9ITE7dGhpcy53Yz0wO3RoaXMucz1udWxsO3RoaXMuRWM9MH07d2QucHJvdG90eXBlLmNhbmNlbD1mdW5jdGlvbihhKXtpZih0aGlzLlRhKXRoaXMubmEgaW5zdGFuY2VvZiB3ZCYmdGhpcy5uYS5jYW5jZWwoKTtlbHNle2lmKHRoaXMucyl7dmFyIGI9dGhpcy5zO2RlbGV0ZSB0aGlzLnM7YT9iLmNhbmNlbChhKTooYi5FYy0tLDA+PWIuRWMmJmIuY2FuY2VsKCkpfXRoaXMuR2Q/dGhpcy5HZC5jYWxsKHRoaXMucmQsdGhpcyk6dGhpcy5mZD0hMDt0aGlzLlRhfHx4ZCh0aGlzLG5ldyB5ZCl9fTt3ZC5wcm90b3R5cGUucGQ9ZnVuY3Rpb24oYSxiKXt0aGlzLkRjPSExO3pkKHRoaXMsYSxiKX07XG52YXIgemQ9ZnVuY3Rpb24oYSxiLGMpe2EuVGE9ITA7YS5uYT1jO2Euc2I9IWI7QWQoYSl9LENkPWZ1bmN0aW9uKGEpe2lmKGEuVGEpe2lmKCFhLmZkKXRocm93IG5ldyBCZDthLmZkPSExfX07d2QucHJvdG90eXBlLmNhbGxiYWNrPWZ1bmN0aW9uKGEpe0NkKHRoaXMpO0RkKGEpO3pkKHRoaXMsITAsYSl9O1xudmFyIHhkPWZ1bmN0aW9uKGEsYil7Q2QoYSk7RGQoYik7emQoYSwhMSxiKX0sRGQ9ZnVuY3Rpb24oYSl7dyghKGEgaW5zdGFuY2VvZiB3ZCksXCJBbiBleGVjdXRpb24gc2VxdWVuY2UgbWF5IG5vdCBiZSBpbml0aWF0ZWQgd2l0aCBhIGJsb2NraW5nIERlZmVycmVkLlwiKX0sSGQ9ZnVuY3Rpb24oYSl7dmFyIGI9RWQoXCJodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9jbGllbnQuanM/b25sb2FkPVwiK0ZkKTtHZChiLG51bGwsYSx2b2lkIDApfSxHZD1mdW5jdGlvbihhLGIsYyxkKXt3KCFhLmtkLFwiQmxvY2tpbmcgRGVmZXJyZWRzIGNhbiBub3QgYmUgcmUtdXNlZFwiKTthLnBjLnB1c2goW2IsYyxkXSk7YS5UYSYmQWQoYSl9O3dkLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9bmV3IEMoZnVuY3Rpb24oYSxiKXtkPWE7ZT1ifSk7R2QodGhpcyxkLGZ1bmN0aW9uKGEpe2EgaW5zdGFuY2VvZiB5ZD9mLmNhbmNlbCgpOmUoYSl9KTtyZXR1cm4gZi50aGVuKGEsYixjKX07XG5iZCh3ZCk7XG52YXIgSWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIEVhKGEucGMsZnVuY3Rpb24oYSl7cmV0dXJuIHEoYVsxXSl9KX0sQWQ9ZnVuY3Rpb24oYSl7aWYoYS53YyYmYS5UYSYmSWQoYSkpe3ZhciBiPWEud2MsYz1KZFtiXTtjJiYobC5jbGVhclRpbWVvdXQoYy50YiksZGVsZXRlIEpkW2JdKTthLndjPTB9YS5zJiYoYS5zLkVjLS0sZGVsZXRlIGEucyk7Zm9yKHZhciBiPWEubmEsZD1jPSExO2EucGMubGVuZ3RoJiYhYS5EYzspe3ZhciBlPWEucGMuc2hpZnQoKSxmPWVbMF0sZz1lWzFdLGU9ZVsyXTtpZihmPWEuc2I/ZzpmKXRyeXt2YXIgaz1mLmNhbGwoZXx8YS5yZCxiKTt2b2lkIDAhPT1rJiYoYS5zYj1hLnNiJiYoaz09Ynx8ayBpbnN0YW5jZW9mIEVycm9yKSxhLm5hPWI9ayk7aWYoY2QoYil8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBsLlByb21pc2UmJmIgaW5zdGFuY2VvZiBsLlByb21pc2UpZD0hMCxhLkRjPSEwfWNhdGNoKG4pe2I9bixhLnNiPSEwLElkKGEpfHwoYz0hMCl9fWEubmE9YjtkJiZcbihrPXIoYS5wZCxhLCEwKSxkPXIoYS5wZCxhLCExKSxiIGluc3RhbmNlb2Ygd2Q/KEdkKGIsayxkKSxiLmtkPSEwKTpiLnRoZW4oayxkKSk7YyYmKGI9bmV3IEtkKGIpLEpkW2IudGJdPWIsYS53Yz1iLnRiKX0sQmQ9ZnVuY3Rpb24oKXt1LmNhbGwodGhpcyl9O3QoQmQsdSk7QmQucHJvdG90eXBlLm1lc3NhZ2U9XCJEZWZlcnJlZCBoYXMgYWxyZWFkeSBmaXJlZFwiO0JkLnByb3RvdHlwZS5uYW1lPVwiQWxyZWFkeUNhbGxlZEVycm9yXCI7dmFyIHlkPWZ1bmN0aW9uKCl7dS5jYWxsKHRoaXMpfTt0KHlkLHUpO3lkLnByb3RvdHlwZS5tZXNzYWdlPVwiRGVmZXJyZWQgd2FzIGNhbmNlbGVkXCI7eWQucHJvdG90eXBlLm5hbWU9XCJDYW5jZWxlZEVycm9yXCI7dmFyIEtkPWZ1bmN0aW9uKGEpe3RoaXMudGI9bC5zZXRUaW1lb3V0KHIodGhpcy5wZix0aGlzKSwwKTt0aGlzLk89YX07XG5LZC5wcm90b3R5cGUucGY9ZnVuY3Rpb24oKXt3KEpkW3RoaXMudGJdLFwiQ2Fubm90IHRocm93IGFuIGVycm9yIHRoYXQgaXMgbm90IHNjaGVkdWxlZC5cIik7ZGVsZXRlIEpkW3RoaXMudGJdO3Rocm93IHRoaXMuTzt9O3ZhciBKZD17fTt2YXIgRWQ9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IEpjO2IuamM9YTtyZXR1cm4gTGQoYil9LExkPWZ1bmN0aW9uKGEpe3ZhciBiPXt9LGM9Yi5kb2N1bWVudHx8ZG9jdW1lbnQsZDthIGluc3RhbmNlb2YgSmMmJmEuY29uc3RydWN0b3I9PT1KYyYmYS5oZT09PUljP2Q9YS5qYzooeGEoXCJleHBlY3RlZCBvYmplY3Qgb2YgdHlwZSBUcnVzdGVkUmVzb3VyY2VVcmwsIGdvdCAnXCIrYStcIicgb2YgdHlwZSBcIittKGEpKSxkPVwidHlwZV9lcnJvcjpUcnVzdGVkUmVzb3VyY2VVcmxcIik7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNDUklQVFwiKTthPXtOZDplLEtiOnZvaWQgMH07dmFyIGY9bmV3IHdkKE1kLGEpLGc9bnVsbCxrPW51bGwhPWIudGltZW91dD9iLnRpbWVvdXQ6NUUzOzA8ayYmKGc9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtOZChlLCEwKTt4ZChmLG5ldyBPZCgxLFwiVGltZW91dCByZWFjaGVkIGZvciBsb2FkaW5nIHNjcmlwdCBcIitkKSl9LGspLGEuS2I9Zyk7ZS5vbmxvYWQ9XG5lLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2UucmVhZHlTdGF0ZSYmXCJsb2FkZWRcIiE9ZS5yZWFkeVN0YXRlJiZcImNvbXBsZXRlXCIhPWUucmVhZHlTdGF0ZXx8KE5kKGUsYi5DZnx8ITEsZyksZi5jYWxsYmFjayhudWxsKSl9O2Uub25lcnJvcj1mdW5jdGlvbigpe05kKGUsITAsZyk7eGQoZixuZXcgT2QoMCxcIkVycm9yIHdoaWxlIGxvYWRpbmcgc2NyaXB0IFwiK2QpKX07YT1iLmF0dHJpYnV0ZXN8fHt9O1VhKGEse3R5cGU6XCJ0ZXh0L2phdmFzY3JpcHRcIixjaGFyc2V0OlwiVVRGLThcIixzcmM6ZH0pO09jKGUsYSk7UGQoYykuYXBwZW5kQ2hpbGQoZSk7cmV0dXJuIGZ9LFBkPWZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybihiPShhfHxkb2N1bWVudCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJIRUFEXCIpKSYmMCE9Yi5sZW5ndGg/YlswXTphLmRvY3VtZW50RWxlbWVudH0sTWQ9ZnVuY3Rpb24oKXtpZih0aGlzJiZ0aGlzLk5kKXt2YXIgYT10aGlzLk5kO2EmJlwiU0NSSVBUXCI9PWEudGFnTmFtZSYmXG5OZChhLCEwLHRoaXMuS2IpfX0sTmQ9ZnVuY3Rpb24oYSxiLGMpe251bGwhPWMmJmwuY2xlYXJUaW1lb3V0KGMpO2Eub25sb2FkPWJhO2Eub25lcnJvcj1iYTthLm9ucmVhZHlzdGF0ZWNoYW5nZT1iYTtiJiZ3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe2EmJmEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpfSwwKX0sT2Q9ZnVuY3Rpb24oYSxiKXt2YXIgYz1cIkpzbG9hZGVyIGVycm9yIChjb2RlICNcIithK1wiKVwiO2ImJihjKz1cIjogXCIrYik7dS5jYWxsKHRoaXMsYyk7dGhpcy5jb2RlPWF9O3QoT2QsdSk7dmFyIFFkPWZ1bmN0aW9uKCl7SGIuY2FsbCh0aGlzKTt0aGlzLmFhPW5ldyBPYih0aGlzKTt0aGlzLmtlPXRoaXM7dGhpcy5WYz1udWxsfTt0KFFkLEhiKTtRZC5wcm90b3R5cGVbS2JdPSEwO2g9UWQucHJvdG90eXBlO2guYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyxkKXtVYih0aGlzLGEsYixjLGQpfTtoLnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oYSxiLGMsZCl7Y2ModGhpcyxhLGIsYyxkKX07XG5oLmRpc3BhdGNoRXZlbnQ9ZnVuY3Rpb24oYSl7UmQodGhpcyk7dmFyIGIsYz10aGlzLlZjO2lmKGMpe2I9W107Zm9yKHZhciBkPTE7YztjPWMuVmMpYi5wdXNoKGMpLHcoMUUzPisrZCxcImluZmluaXRlIGxvb3BcIil9Yz10aGlzLmtlO2Q9YS50eXBlfHxhO2lmKHAoYSkpYT1uZXcgSWIoYSxjKTtlbHNlIGlmKGEgaW5zdGFuY2VvZiBJYilhLnRhcmdldD1hLnRhcmdldHx8YztlbHNle3ZhciBlPWE7YT1uZXcgSWIoZCxjKTtVYShhLGUpfXZhciBlPSEwLGY7aWYoYilmb3IodmFyIGc9Yi5sZW5ndGgtMTshYS4kYSYmMDw9ZztnLS0pZj1hLmN1cnJlbnRUYXJnZXQ9YltnXSxlPVNkKGYsZCwhMCxhKSYmZTthLiRhfHwoZj1hLmN1cnJlbnRUYXJnZXQ9YyxlPVNkKGYsZCwhMCxhKSYmZSxhLiRhfHwoZT1TZChmLGQsITEsYSkmJmUpKTtpZihiKWZvcihnPTA7IWEuJGEmJmc8Yi5sZW5ndGg7ZysrKWY9YS5jdXJyZW50VGFyZ2V0PWJbZ10sZT1TZChmLGQsITEsYSkmJmU7cmV0dXJuIGV9O1xuaC5SYT1mdW5jdGlvbigpe1FkLmhkLlJhLmNhbGwodGhpcyk7aWYodGhpcy5hYSl7dmFyIGE9dGhpcy5hYSxiPTAsYztmb3IoYyBpbiBhLkMpe2Zvcih2YXIgZD1hLkNbY10sZT0wO2U8ZC5sZW5ndGg7ZSsrKSsrYixOYihkW2VdKTtkZWxldGUgYS5DW2NdO2EuTGItLX19dGhpcy5WYz1udWxsfTtoLmxpc3Rlbj1mdW5jdGlvbihhLGIsYyxkKXtSZCh0aGlzKTtyZXR1cm4gdGhpcy5hYS5hZGQoU3RyaW5nKGEpLGIsITEsYyxkKX07XG52YXIgYmM9ZnVuY3Rpb24oYSxiLGMsZCxlKXthLmFhLmFkZChTdHJpbmcoYiksYywhMCxkLGUpfSxTZD1mdW5jdGlvbihhLGIsYyxkKXtiPWEuYWEuQ1tTdHJpbmcoYildO2lmKCFiKXJldHVybiEwO2I9Yi5jb25jYXQoKTtmb3IodmFyIGU9ITAsZj0wO2Y8Yi5sZW5ndGg7KytmKXt2YXIgZz1iW2ZdO2lmKGcmJiFnLmdiJiZnLmNhcHR1cmU9PWMpe3ZhciBrPWcubGlzdGVuZXIsbj1nLllifHxnLnNyYztnLlBiJiZRYihhLmFhLGcpO2U9ITEhPT1rLmNhbGwobixkKSYmZX19cmV0dXJuIGUmJjAhPWQuTWR9O1FkLnByb3RvdHlwZS5LYz1mdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5hYS5LYyhTdHJpbmcoYSksYixjLGQpfTt2YXIgUmQ9ZnVuY3Rpb24oYSl7dyhhLmFhLFwiRXZlbnQgdGFyZ2V0IGlzIG5vdCBpbml0aWFsaXplZC4gRGlkIHlvdSBjYWxsIHRoZSBzdXBlcmNsYXNzIChnb29nLmV2ZW50cy5FdmVudFRhcmdldCkgY29uc3RydWN0b3I/XCIpfTt2YXIgVGQ9XCJTdG9wSXRlcmF0aW9uXCJpbiBsP2wuU3RvcEl0ZXJhdGlvbjp7bWVzc2FnZTpcIlN0b3BJdGVyYXRpb25cIixzdGFjazpcIlwifSxVZD1mdW5jdGlvbigpe307VWQucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24oKXt0aHJvdyBUZDt9O1VkLnByb3RvdHlwZS5qZT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTt2YXIgVmQ9ZnVuY3Rpb24oYSxiKXt0aGlzLmJhPXt9O3RoaXMudz1bXTt0aGlzLm5iPXRoaXMubz0wO3ZhciBjPWFyZ3VtZW50cy5sZW5ndGg7aWYoMTxjKXtpZihjJTIpdGhyb3cgRXJyb3IoXCJVbmV2ZW4gbnVtYmVyIG9mIGFyZ3VtZW50c1wiKTtmb3IodmFyIGQ9MDtkPGM7ZCs9Mil0aGlzLnNldChhcmd1bWVudHNbZF0sYXJndW1lbnRzW2QrMV0pfWVsc2UgYSYmdGhpcy5hZGRBbGwoYSl9O1ZkLnByb3RvdHlwZS5ZPWZ1bmN0aW9uKCl7V2QodGhpcyk7Zm9yKHZhciBhPVtdLGI9MDtiPHRoaXMudy5sZW5ndGg7YisrKWEucHVzaCh0aGlzLmJhW3RoaXMud1tiXV0pO3JldHVybiBhfTtWZC5wcm90b3R5cGUua2E9ZnVuY3Rpb24oKXtXZCh0aGlzKTtyZXR1cm4gdGhpcy53LmNvbmNhdCgpfTtWZC5wcm90b3R5cGUucGI9ZnVuY3Rpb24oYSl7cmV0dXJuIFhkKHRoaXMuYmEsYSl9O1xuVmQucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbihhKXtyZXR1cm4gWGQodGhpcy5iYSxhKT8oZGVsZXRlIHRoaXMuYmFbYV0sdGhpcy5vLS0sdGhpcy5uYisrLHRoaXMudy5sZW5ndGg+Mip0aGlzLm8mJldkKHRoaXMpLCEwKTohMX07dmFyIFdkPWZ1bmN0aW9uKGEpe2lmKGEubyE9YS53Lmxlbmd0aCl7Zm9yKHZhciBiPTAsYz0wO2I8YS53Lmxlbmd0aDspe3ZhciBkPWEud1tiXTtYZChhLmJhLGQpJiYoYS53W2MrK109ZCk7YisrfWEudy5sZW5ndGg9Y31pZihhLm8hPWEudy5sZW5ndGgpe2Zvcih2YXIgZT17fSxjPWI9MDtiPGEudy5sZW5ndGg7KWQ9YS53W2JdLFhkKGUsZCl8fChhLndbYysrXT1kLGVbZF09MSksYisrO2Eudy5sZW5ndGg9Y319O2g9VmQucHJvdG90eXBlO2guZ2V0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFhkKHRoaXMuYmEsYSk/dGhpcy5iYVthXTpifTtcbmguc2V0PWZ1bmN0aW9uKGEsYil7WGQodGhpcy5iYSxhKXx8KHRoaXMubysrLHRoaXMudy5wdXNoKGEpLHRoaXMubmIrKyk7dGhpcy5iYVthXT1ifTtoLmFkZEFsbD1mdW5jdGlvbihhKXt2YXIgYjthIGluc3RhbmNlb2YgVmQ/KGI9YS5rYSgpLGE9YS5ZKCkpOihiPVBhKGEpLGE9T2EoYSkpO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuc2V0KGJbY10sYVtjXSl9O2guZm9yRWFjaD1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz10aGlzLmthKCksZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdLGY9dGhpcy5nZXQoZSk7YS5jYWxsKGIsZixlLHRoaXMpfX07aC5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBuZXcgVmQodGhpcyl9O1xuaC5qZT1mdW5jdGlvbihhKXtXZCh0aGlzKTt2YXIgYj0wLGM9dGhpcy5uYixkPXRoaXMsZT1uZXcgVWQ7ZS5uZXh0PWZ1bmN0aW9uKCl7aWYoYyE9ZC5uYil0aHJvdyBFcnJvcihcIlRoZSBtYXAgaGFzIGNoYW5nZWQgc2luY2UgdGhlIGl0ZXJhdG9yIHdhcyBjcmVhdGVkXCIpO2lmKGI+PWQudy5sZW5ndGgpdGhyb3cgVGQ7dmFyIGU9ZC53W2IrK107cmV0dXJuIGE/ZTpkLmJhW2VdfTtyZXR1cm4gZX07dmFyIFhkPWZ1bmN0aW9uKGEsYil7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLGIpfTt2YXIgWWQ9ZnVuY3Rpb24oYSl7aWYoYS5ZJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLlkpcmV0dXJuIGEuWSgpO2lmKHAoYSkpcmV0dXJuIGEuc3BsaXQoXCJcIik7aWYoZWEoYSkpe2Zvcih2YXIgYj1bXSxjPWEubGVuZ3RoLGQ9MDtkPGM7ZCsrKWIucHVzaChhW2RdKTtyZXR1cm4gYn1yZXR1cm4gT2EoYSl9LFpkPWZ1bmN0aW9uKGEpe2lmKGEua2EmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEua2EpcmV0dXJuIGEua2EoKTtpZighYS5ZfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBhLlkpe2lmKGVhKGEpfHxwKGEpKXt2YXIgYj1bXTthPWEubGVuZ3RoO2Zvcih2YXIgYz0wO2M8YTtjKyspYi5wdXNoKGMpO3JldHVybiBifXJldHVybiBQYShhKX19LCRkPWZ1bmN0aW9uKGEsYil7aWYoYS5mb3JFYWNoJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLmZvckVhY2gpYS5mb3JFYWNoKGIsdm9pZCAwKTtlbHNlIGlmKGVhKGEpfHxwKGEpKXgoYSxiLHZvaWQgMCk7ZWxzZSBmb3IodmFyIGM9WmQoYSksZD1ZZChhKSxlPVxuZC5sZW5ndGgsZj0wO2Y8ZTtmKyspYi5jYWxsKHZvaWQgMCxkW2ZdLGMmJmNbZl0sYSl9O3ZhciBhZT1mdW5jdGlvbihhLGIsYyxkLGUpe3RoaXMucmVzZXQoYSxiLGMsZCxlKX07YWUucHJvdG90eXBlLnRkPW51bGw7dmFyIGJlPTA7YWUucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKGEsYixjLGQsZSl7XCJudW1iZXJcIj09dHlwZW9mIGV8fGJlKys7ZHx8a2EoKTt0aGlzLnhiPWE7dGhpcy5WZT1iO2RlbGV0ZSB0aGlzLnRkfTthZS5wcm90b3R5cGUuUWQ9ZnVuY3Rpb24oYSl7dGhpcy54Yj1hfTt2YXIgY2U9ZnVuY3Rpb24oYSl7dGhpcy5XZT1hO3RoaXMueWQ9dGhpcy5GYz10aGlzLnhiPXRoaXMucz1udWxsfSxkZT1mdW5jdGlvbihhLGIpe3RoaXMubmFtZT1hO3RoaXMudmFsdWU9Yn07ZGUucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubmFtZX07dmFyIGVlPW5ldyBkZShcIlNFVkVSRVwiLDFFMyksZmU9bmV3IGRlKFwiQ09ORklHXCIsNzAwKSxnZT1uZXcgZGUoXCJGSU5FXCIsNTAwKTtjZS5wcm90b3R5cGUuZ2V0UGFyZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc307Y2UucHJvdG90eXBlLlFkPWZ1bmN0aW9uKGEpe3RoaXMueGI9YX07dmFyIGhlPWZ1bmN0aW9uKGEpe2lmKGEueGIpcmV0dXJuIGEueGI7aWYoYS5zKXJldHVybiBoZShhLnMpO3hhKFwiUm9vdCBsb2dnZXIgaGFzIG5vIGxldmVsIHNldC5cIik7cmV0dXJuIG51bGx9O1xuY2UucHJvdG90eXBlLmxvZz1mdW5jdGlvbihhLGIsYyl7aWYoYS52YWx1ZT49aGUodGhpcykudmFsdWUpZm9yKHEoYikmJihiPWIoKSksYT1uZXcgYWUoYSxTdHJpbmcoYiksdGhpcy5XZSksYyYmKGEudGQ9YyksYz1cImxvZzpcIithLlZlLGwuY29uc29sZSYmKGwuY29uc29sZS50aW1lU3RhbXA/bC5jb25zb2xlLnRpbWVTdGFtcChjKTpsLmNvbnNvbGUubWFya1RpbWVsaW5lJiZsLmNvbnNvbGUubWFya1RpbWVsaW5lKGMpKSxsLm1zV3JpdGVQcm9maWxlck1hcmsmJmwubXNXcml0ZVByb2ZpbGVyTWFyayhjKSxjPXRoaXM7Yzspe3ZhciBkPWMsZT1hO2lmKGQueWQpZm9yKHZhciBmPTA7Yj1kLnlkW2ZdO2YrKyliKGUpO2M9Yy5nZXRQYXJlbnQoKX19O1xudmFyIGllPXt9LGplPW51bGwsa2U9ZnVuY3Rpb24oYSl7amV8fChqZT1uZXcgY2UoXCJcIiksaWVbXCJcIl09amUsamUuUWQoZmUpKTt2YXIgYjtpZighKGI9aWVbYV0pKXtiPW5ldyBjZShhKTt2YXIgYz1hLmxhc3RJbmRleE9mKFwiLlwiKSxkPWEuc3Vic3RyKGMrMSksYz1rZShhLnN1YnN0cigwLGMpKTtjLkZjfHwoYy5GYz17fSk7Yy5GY1tkXT1iO2Iucz1jO2llW2FdPWJ9cmV0dXJuIGJ9O3ZhciBGPWZ1bmN0aW9uKGEsYil7YSYmYS5sb2coZ2UsYix2b2lkIDApfTt2YXIgbGU9ZnVuY3Rpb24oYSxiLGMpe2lmKHEoYSkpYyYmKGE9cihhLGMpKTtlbHNlIGlmKGEmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEuaGFuZGxlRXZlbnQpYT1yKGEuaGFuZGxlRXZlbnQsYSk7ZWxzZSB0aHJvdyBFcnJvcihcIkludmFsaWQgbGlzdGVuZXIgYXJndW1lbnRcIik7cmV0dXJuIDIxNDc0ODM2NDc8TnVtYmVyKGIpPy0xOmwuc2V0VGltZW91dChhLGJ8fDApfSxtZT1mdW5jdGlvbihhKXt2YXIgYj1udWxsO3JldHVybihuZXcgQyhmdW5jdGlvbihjLGQpe2I9bGUoZnVuY3Rpb24oKXtjKHZvaWQgMCl9LGEpOy0xPT1iJiZkKEVycm9yKFwiRmFpbGVkIHRvIHNjaGVkdWxlIHRpbWVyLlwiKSl9KSkuYyhmdW5jdGlvbihhKXtsLmNsZWFyVGltZW91dChiKTt0aHJvdyBhO30pfTt2YXIgbmU9L14oPzooW146Lz8jLl0rKTopPyg/OlxcL1xcLyg/OihbXi8/I10qKUApPyhbXi8jP10qPykoPzo6KFswLTldKykpPyg/PVsvIz9dfCQpKT8oW14/I10rKT8oPzpcXD8oW14jXSopKT8oPzojKFtcXHNcXFNdKikpPyQvLHBlPWZ1bmN0aW9uKGEsYil7aWYoYSl7YT1hLnNwbGl0KFwiJlwiKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXS5pbmRleE9mKFwiPVwiKSxlLGY9bnVsbDswPD1kPyhlPWFbY10uc3Vic3RyaW5nKDAsZCksZj1hW2NdLnN1YnN0cmluZyhkKzEpKTplPWFbY107YihlLGY/ZGVjb2RlVVJJQ29tcG9uZW50KGYucmVwbGFjZSgvXFwrL2csXCIgXCIpKTpcIlwiKX19fTt2YXIgRz1mdW5jdGlvbihhKXtRZC5jYWxsKHRoaXMpO3RoaXMuaGVhZGVycz1uZXcgVmQ7dGhpcy5BYz1hfHxudWxsO3RoaXMucWE9ITE7dGhpcy56Yz10aGlzLmI9bnVsbDt0aGlzLndiPXRoaXMuRWQ9dGhpcy5lYz1cIlwiO3RoaXMuQ2E9dGhpcy5OYz10aGlzLmNjPXRoaXMuSGM9ITE7dGhpcy5rYj0wO3RoaXMudWM9bnVsbDt0aGlzLkxkPVwiXCI7dGhpcy54Yz10aGlzLmJmPXRoaXMuYWU9ITF9O3QoRyxRZCk7dmFyIHFlPUcucHJvdG90eXBlLHJlPWtlKFwiZ29vZy5uZXQuWGhySW9cIik7cWUuVT1yZTt2YXIgc2U9L15odHRwcz8kL2ksdGU9W1wiUE9TVFwiLFwiUFVUXCJdO1xuRy5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbihhLGIsYyxkKXtpZih0aGlzLmIpdGhyb3cgRXJyb3IoXCJbZ29vZy5uZXQuWGhySW9dIE9iamVjdCBpcyBhY3RpdmUgd2l0aCBhbm90aGVyIHJlcXVlc3Q9XCIrdGhpcy5lYytcIjsgbmV3VXJpPVwiK2EpO2I9Yj9iLnRvVXBwZXJDYXNlKCk6XCJHRVRcIjt0aGlzLmVjPWE7dGhpcy53Yj1cIlwiO3RoaXMuRWQ9Yjt0aGlzLkhjPSExO3RoaXMucWE9ITA7dGhpcy5iPXRoaXMuQWM/dGhpcy5BYy5SYigpOkNjLlJiKCk7dGhpcy56Yz10aGlzLkFjP0JjKHRoaXMuQWMpOkJjKENjKTt0aGlzLmIub25yZWFkeXN0YXRlY2hhbmdlPXIodGhpcy5JZCx0aGlzKTt0aGlzLmJmJiZcIm9ucHJvZ3Jlc3NcImluIHRoaXMuYiYmKHRoaXMuYi5vbnByb2dyZXNzPXIoZnVuY3Rpb24oYSl7dGhpcy5IZChhLCEwKX0sdGhpcyksdGhpcy5iLnVwbG9hZCYmKHRoaXMuYi51cGxvYWQub25wcm9ncmVzcz1yKHRoaXMuSGQsdGhpcykpKTt0cnl7Rih0aGlzLlUsdWUodGhpcyxcIk9wZW5pbmcgWGhyXCIpKSxcbnRoaXMuTmM9ITAsdGhpcy5iLm9wZW4oYixTdHJpbmcoYSksITApLHRoaXMuTmM9ITF9Y2F0Y2goZil7Rih0aGlzLlUsdWUodGhpcyxcIkVycm9yIG9wZW5pbmcgWGhyOiBcIitmLm1lc3NhZ2UpKTt0aGlzLk8oNSxmKTtyZXR1cm59YT1jfHxcIlwiO3ZhciBlPXRoaXMuaGVhZGVycy5jbG9uZSgpO2QmJiRkKGQsZnVuY3Rpb24oYSxiKXtlLnNldChiLGEpfSk7ZD1HYShlLmthKCkpO2M9bC5Gb3JtRGF0YSYmYSBpbnN0YW5jZW9mIGwuRm9ybURhdGE7IUhhKHRlLGIpfHxkfHxjfHxlLnNldChcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLThcIik7ZS5mb3JFYWNoKGZ1bmN0aW9uKGEsYil7dGhpcy5iLnNldFJlcXVlc3RIZWFkZXIoYixhKX0sdGhpcyk7dGhpcy5MZCYmKHRoaXMuYi5yZXNwb25zZVR5cGU9dGhpcy5MZCk7XCJ3aXRoQ3JlZGVudGlhbHNcImluIHRoaXMuYiYmdGhpcy5iLndpdGhDcmVkZW50aWFscyE9PXRoaXMuYWUmJih0aGlzLmIud2l0aENyZWRlbnRpYWxzPVxudGhpcy5hZSk7dHJ5e3ZlKHRoaXMpLDA8dGhpcy5rYiYmKHRoaXMueGM9d2UodGhpcy5iKSxGKHRoaXMuVSx1ZSh0aGlzLFwiV2lsbCBhYm9ydCBhZnRlciBcIit0aGlzLmtiK1wibXMgaWYgaW5jb21wbGV0ZSwgeGhyMiBcIit0aGlzLnhjKSksdGhpcy54Yz8odGhpcy5iLnRpbWVvdXQ9dGhpcy5rYix0aGlzLmIub250aW1lb3V0PXIodGhpcy5LYix0aGlzKSk6dGhpcy51Yz1sZSh0aGlzLktiLHRoaXMua2IsdGhpcykpLEYodGhpcy5VLHVlKHRoaXMsXCJTZW5kaW5nIHJlcXVlc3RcIikpLHRoaXMuY2M9ITAsdGhpcy5iLnNlbmQoYSksdGhpcy5jYz0hMX1jYXRjaChmKXtGKHRoaXMuVSx1ZSh0aGlzLFwiU2VuZCBlcnJvcjogXCIrZi5tZXNzYWdlKSksdGhpcy5PKDUsZil9fTt2YXIgd2U9ZnVuY3Rpb24oYSl7cmV0dXJuIEEmJkIoOSkmJmZhKGEudGltZW91dCkmJnZvaWQgMCE9PWEub250aW1lb3V0fSxGYT1mdW5jdGlvbihhKXtyZXR1cm5cImNvbnRlbnQtdHlwZVwiPT1hLnRvTG93ZXJDYXNlKCl9O1xuRy5wcm90b3R5cGUuS2I9ZnVuY3Rpb24oKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgYWEmJnRoaXMuYiYmKHRoaXMud2I9XCJUaW1lZCBvdXQgYWZ0ZXIgXCIrdGhpcy5rYitcIm1zLCBhYm9ydGluZ1wiLEYodGhpcy5VLHVlKHRoaXMsdGhpcy53YikpLHRoaXMuZGlzcGF0Y2hFdmVudChcInRpbWVvdXRcIiksdGhpcy5hYm9ydCg4KSl9O0cucHJvdG90eXBlLk89ZnVuY3Rpb24oYSxiKXt0aGlzLnFhPSExO3RoaXMuYiYmKHRoaXMuQ2E9ITAsdGhpcy5iLmFib3J0KCksdGhpcy5DYT0hMSk7dGhpcy53Yj1iO3hlKHRoaXMpO3llKHRoaXMpfTt2YXIgeGU9ZnVuY3Rpb24oYSl7YS5IY3x8KGEuSGM9ITAsYS5kaXNwYXRjaEV2ZW50KFwiY29tcGxldGVcIiksYS5kaXNwYXRjaEV2ZW50KFwiZXJyb3JcIikpfTtcbkcucHJvdG90eXBlLmFib3J0PWZ1bmN0aW9uKCl7dGhpcy5iJiZ0aGlzLnFhJiYoRih0aGlzLlUsdWUodGhpcyxcIkFib3J0aW5nXCIpKSx0aGlzLnFhPSExLHRoaXMuQ2E9ITAsdGhpcy5iLmFib3J0KCksdGhpcy5DYT0hMSx0aGlzLmRpc3BhdGNoRXZlbnQoXCJjb21wbGV0ZVwiKSx0aGlzLmRpc3BhdGNoRXZlbnQoXCJhYm9ydFwiKSx5ZSh0aGlzKSl9O0cucHJvdG90eXBlLlJhPWZ1bmN0aW9uKCl7dGhpcy5iJiYodGhpcy5xYSYmKHRoaXMucWE9ITEsdGhpcy5DYT0hMCx0aGlzLmIuYWJvcnQoKSx0aGlzLkNhPSExKSx5ZSh0aGlzLCEwKSk7Ry5oZC5SYS5jYWxsKHRoaXMpfTtHLnByb3RvdHlwZS5JZD1mdW5jdGlvbigpe3RoaXMuaXNEaXNwb3NlZCgpfHwodGhpcy5OY3x8dGhpcy5jY3x8dGhpcy5DYT96ZSh0aGlzKTp0aGlzLiRlKCkpfTtHLnByb3RvdHlwZS4kZT1mdW5jdGlvbigpe3plKHRoaXMpfTtcbnZhciB6ZT1mdW5jdGlvbihhKXtpZihhLnFhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYWEpaWYoYS56Y1sxXSYmND09QWUoYSkmJjI9PUJlKGEpKUYoYS5VLHVlKGEsXCJMb2NhbCByZXF1ZXN0IGVycm9yIGRldGVjdGVkIGFuZCBpZ25vcmVkXCIpKTtlbHNlIGlmKGEuY2MmJjQ9PUFlKGEpKWxlKGEuSWQsMCxhKTtlbHNlIGlmKGEuZGlzcGF0Y2hFdmVudChcInJlYWR5c3RhdGVjaGFuZ2VcIiksND09QWUoYSkpe0YoYS5VLHVlKGEsXCJSZXF1ZXN0IGNvbXBsZXRlXCIpKTthLnFhPSExO3RyeXt2YXIgYj1CZShhKSxjO2E6c3dpdGNoKGIpe2Nhc2UgMjAwOmNhc2UgMjAxOmNhc2UgMjAyOmNhc2UgMjA0OmNhc2UgMjA2OmNhc2UgMzA0OmNhc2UgMTIyMzpjPSEwO2JyZWFrIGE7ZGVmYXVsdDpjPSExfXZhciBkO2lmKCEoZD1jKSl7dmFyIGU7aWYoZT0wPT09Yil7dmFyIGY9U3RyaW5nKGEuZWMpLm1hdGNoKG5lKVsxXXx8bnVsbDtpZighZiYmbC5zZWxmJiZsLnNlbGYubG9jYXRpb24pdmFyIGc9bC5zZWxmLmxvY2F0aW9uLnByb3RvY29sLFxuZj1nLnN1YnN0cigwLGcubGVuZ3RoLTEpO2U9IXNlLnRlc3QoZj9mLnRvTG93ZXJDYXNlKCk6XCJcIil9ZD1lfWlmKGQpYS5kaXNwYXRjaEV2ZW50KFwiY29tcGxldGVcIiksYS5kaXNwYXRjaEV2ZW50KFwic3VjY2Vzc1wiKTtlbHNle3ZhciBrO3RyeXtrPTI8QWUoYSk/YS5iLnN0YXR1c1RleHQ6XCJcIn1jYXRjaChuKXtGKGEuVSxcIkNhbiBub3QgZ2V0IHN0YXR1czogXCIrbi5tZXNzYWdlKSxrPVwiXCJ9YS53Yj1rK1wiIFtcIitCZShhKStcIl1cIjt4ZShhKX19ZmluYWxseXt5ZShhKX19fTtHLnByb3RvdHlwZS5IZD1mdW5jdGlvbihhLGIpe3coXCJwcm9ncmVzc1wiPT09YS50eXBlLFwiZ29vZy5uZXQuRXZlbnRUeXBlLlBST0dSRVNTIGlzIG9mIHRoZSBzYW1lIHR5cGUgYXMgcmF3IFhIUiBwcm9ncmVzcy5cIik7dGhpcy5kaXNwYXRjaEV2ZW50KENlKGEsXCJwcm9ncmVzc1wiKSk7dGhpcy5kaXNwYXRjaEV2ZW50KENlKGEsYj9cImRvd25sb2FkcHJvZ3Jlc3NcIjpcInVwbG9hZHByb2dyZXNzXCIpKX07XG52YXIgQ2U9ZnVuY3Rpb24oYSxiKXtyZXR1cm57dHlwZTpiLGxlbmd0aENvbXB1dGFibGU6YS5sZW5ndGhDb21wdXRhYmxlLGxvYWRlZDphLmxvYWRlZCx0b3RhbDphLnRvdGFsfX0seWU9ZnVuY3Rpb24oYSxiKXtpZihhLmIpe3ZlKGEpO3ZhciBjPWEuYixkPWEuemNbMF0/YmE6bnVsbDthLmI9bnVsbDthLnpjPW51bGw7Ynx8YS5kaXNwYXRjaEV2ZW50KFwicmVhZHlcIik7dHJ5e2Mub25yZWFkeXN0YXRlY2hhbmdlPWR9Y2F0Y2goZSl7KGE9YS5VKSYmYS5sb2coZWUsXCJQcm9ibGVtIGVuY291bnRlcmVkIHJlc2V0dGluZyBvbnJlYWR5c3RhdGVjaGFuZ2U6IFwiK2UubWVzc2FnZSx2b2lkIDApfX19LHZlPWZ1bmN0aW9uKGEpe2EuYiYmYS54YyYmKGEuYi5vbnRpbWVvdXQ9bnVsbCk7ZmEoYS51YykmJihsLmNsZWFyVGltZW91dChhLnVjKSxhLnVjPW51bGwpfSxBZT1mdW5jdGlvbihhKXtyZXR1cm4gYS5iP2EuYi5yZWFkeVN0YXRlOjB9LEJlPWZ1bmN0aW9uKGEpe3RyeXtyZXR1cm4gMjxBZShhKT9cbmEuYi5zdGF0dXM6LTF9Y2F0Y2goYil7cmV0dXJuLTF9fSxEZT1mdW5jdGlvbihhKXt0cnl7cmV0dXJuIGEuYj9hLmIucmVzcG9uc2VUZXh0OlwiXCJ9Y2F0Y2goYil7cmV0dXJuIEYoYS5VLFwiQ2FuIG5vdCBnZXQgcmVzcG9uc2VUZXh0OiBcIitiLm1lc3NhZ2UpLFwiXCJ9fSx1ZT1mdW5jdGlvbihhLGIpe3JldHVybiBiK1wiIFtcIithLkVkK1wiIFwiK2EuZWMrXCIgXCIrQmUoYSkrXCJdXCJ9O3ZhciBFZT1mdW5jdGlvbihhLGIpe3RoaXMuJD10aGlzLkphPXRoaXMuZGE9XCJcIjt0aGlzLlphPW51bGw7dGhpcy5CYT10aGlzLnNhPVwiXCI7dGhpcy5SPXRoaXMuUGU9ITE7dmFyIGM7YSBpbnN0YW5jZW9mIEVlPyh0aGlzLlI9dm9pZCAwIT09Yj9iOmEuUixGZSh0aGlzLGEuZGEpLGM9YS5KYSxIKHRoaXMpLHRoaXMuSmE9YyxHZSh0aGlzLGEuJCksSGUodGhpcyxhLlphKSxJZSh0aGlzLGEuc2EpLEplKHRoaXMsYS5XLmNsb25lKCkpLGE9YS5CYSxIKHRoaXMpLHRoaXMuQmE9YSk6YSYmKGM9U3RyaW5nKGEpLm1hdGNoKG5lKSk/KHRoaXMuUj0hIWIsRmUodGhpcyxjWzFdfHxcIlwiLCEwKSxhPWNbMl18fFwiXCIsSCh0aGlzKSx0aGlzLkphPUtlKGEpLEdlKHRoaXMsY1szXXx8XCJcIiwhMCksSGUodGhpcyxjWzRdKSxJZSh0aGlzLGNbNV18fFwiXCIsITApLEplKHRoaXMsY1s2XXx8XCJcIiwhMCksYT1jWzddfHxcIlwiLEgodGhpcyksdGhpcy5CYT1LZShhKSk6KHRoaXMuUj0hIWIsdGhpcy5XPW5ldyBJKG51bGwsXG4wLHRoaXMuUikpfTtFZS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXt2YXIgYT1bXSxiPXRoaXMuZGE7YiYmYS5wdXNoKExlKGIsTWUsITApLFwiOlwiKTt2YXIgYz10aGlzLiQ7aWYoY3x8XCJmaWxlXCI9PWIpYS5wdXNoKFwiLy9cIiksKGI9dGhpcy5KYSkmJmEucHVzaChMZShiLE1lLCEwKSxcIkBcIiksYS5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoYykpLnJlcGxhY2UoLyUyNShbMC05YS1mQS1GXXsyfSkvZyxcIiUkMVwiKSksYz10aGlzLlphLG51bGwhPWMmJmEucHVzaChcIjpcIixTdHJpbmcoYykpO2lmKGM9dGhpcy5zYSl0aGlzLiQmJlwiL1wiIT1jLmNoYXJBdCgwKSYmYS5wdXNoKFwiL1wiKSxhLnB1c2goTGUoYyxcIi9cIj09Yy5jaGFyQXQoMCk/TmU6T2UsITApKTsoYz10aGlzLlcudG9TdHJpbmcoKSkmJmEucHVzaChcIj9cIixjKTsoYz10aGlzLkJhKSYmYS5wdXNoKFwiI1wiLExlKGMsUGUpKTtyZXR1cm4gYS5qb2luKFwiXCIpfTtcbkVlLnByb3RvdHlwZS5yZXNvbHZlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuY2xvbmUoKSxjPSEhYS5kYTtjP0ZlKGIsYS5kYSk6Yz0hIWEuSmE7aWYoYyl7dmFyIGQ9YS5KYTtIKGIpO2IuSmE9ZH1lbHNlIGM9ISFhLiQ7Yz9HZShiLGEuJCk6Yz1udWxsIT1hLlphO2Q9YS5zYTtpZihjKUhlKGIsYS5aYSk7ZWxzZSBpZihjPSEhYS5zYSl7aWYoXCIvXCIhPWQuY2hhckF0KDApKWlmKHRoaXMuJCYmIXRoaXMuc2EpZD1cIi9cIitkO2Vsc2V7dmFyIGU9Yi5zYS5sYXN0SW5kZXhPZihcIi9cIik7LTEhPWUmJihkPWIuc2Euc3Vic3RyKDAsZSsxKStkKX1lPWQ7aWYoXCIuLlwiPT1lfHxcIi5cIj09ZSlkPVwiXCI7ZWxzZSBpZih2KGUsXCIuL1wiKXx8dihlLFwiLy5cIikpe2Zvcih2YXIgZD0wPT1lLmxhc3RJbmRleE9mKFwiL1wiLDApLGU9ZS5zcGxpdChcIi9cIiksZj1bXSxnPTA7ZzxlLmxlbmd0aDspe3ZhciBrPWVbZysrXTtcIi5cIj09az9kJiZnPT1lLmxlbmd0aCYmZi5wdXNoKFwiXCIpOlwiLi5cIj09az8oKDE8Zi5sZW5ndGh8fFxuMT09Zi5sZW5ndGgmJlwiXCIhPWZbMF0pJiZmLnBvcCgpLGQmJmc9PWUubGVuZ3RoJiZmLnB1c2goXCJcIikpOihmLnB1c2goayksZD0hMCl9ZD1mLmpvaW4oXCIvXCIpfWVsc2UgZD1lfWM/SWUoYixkKTpjPVwiXCIhPT1hLlcudG9TdHJpbmcoKTtjP0plKGIsYS5XLmNsb25lKCkpOmM9ISFhLkJhO2MmJihhPWEuQmEsSChiKSxiLkJhPWEpO3JldHVybiBifTtFZS5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEVlKHRoaXMpfTtcbnZhciBGZT1mdW5jdGlvbihhLGIsYyl7SChhKTthLmRhPWM/S2UoYiwhMCk6YjthLmRhJiYoYS5kYT1hLmRhLnJlcGxhY2UoLzokLyxcIlwiKSl9LEdlPWZ1bmN0aW9uKGEsYixjKXtIKGEpO2EuJD1jP0tlKGIsITApOmJ9LEhlPWZ1bmN0aW9uKGEsYil7SChhKTtpZihiKXtiPU51bWJlcihiKTtpZihpc05hTihiKXx8MD5iKXRocm93IEVycm9yKFwiQmFkIHBvcnQgbnVtYmVyIFwiK2IpO2EuWmE9Yn1lbHNlIGEuWmE9bnVsbH0sSWU9ZnVuY3Rpb24oYSxiLGMpe0goYSk7YS5zYT1jP0tlKGIsITApOmJ9LEplPWZ1bmN0aW9uKGEsYixjKXtIKGEpO2IgaW5zdGFuY2VvZiBJPyhhLlc9YixhLlcuZWQoYS5SKSk6KGN8fChiPUxlKGIsUWUpKSxhLlc9bmV3IEkoYiwwLGEuUikpfSxKPWZ1bmN0aW9uKGEsYixjKXtIKGEpO2EuVy5zZXQoYixjKX0sUmU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5XLmdldChiKX0sU2U9ZnVuY3Rpb24oYSxiKXtIKGEpO2EuVy5yZW1vdmUoYil9LEg9ZnVuY3Rpb24oYSl7aWYoYS5QZSl0aHJvdyBFcnJvcihcIlRyaWVkIHRvIG1vZGlmeSBhIHJlYWQtb25seSBVcmlcIik7XG59O0VlLnByb3RvdHlwZS5lZD1mdW5jdGlvbihhKXt0aGlzLlI9YTt0aGlzLlcmJnRoaXMuVy5lZChhKTtyZXR1cm4gdGhpc307XG52YXIgVGU9ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBFZT9hLmNsb25lKCk6bmV3IEVlKGEsdm9pZCAwKX0sVWU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1uZXcgRWUobnVsbCx2b2lkIDApO0ZlKGMsXCJodHRwc1wiKTthJiZHZShjLGEpO2ImJkllKGMsYik7cmV0dXJuIGN9LEtlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE/Yj9kZWNvZGVVUkkoYS5yZXBsYWNlKC8lMjUvZyxcIiUyNTI1XCIpKTpkZWNvZGVVUklDb21wb25lbnQoYSk6XCJcIn0sTGU9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBwKGEpPyhhPWVuY29kZVVSSShhKS5yZXBsYWNlKGIsVmUpLGMmJihhPWEucmVwbGFjZSgvJTI1KFswLTlhLWZBLUZdezJ9KS9nLFwiJSQxXCIpKSxhKTpudWxsfSxWZT1mdW5jdGlvbihhKXthPWEuY2hhckNvZGVBdCgwKTtyZXR1cm5cIiVcIisoYT4+NCYxNSkudG9TdHJpbmcoMTYpKyhhJjE1KS50b1N0cmluZygxNil9LE1lPS9bI1xcL1xcP0BdL2csT2U9L1tcXCNcXD86XS9nLE5lPS9bXFwjXFw/XS9nLFFlPS9bXFwjXFw/QF0vZyxcblBlPS8jL2csST1mdW5jdGlvbihhLGIsYyl7dGhpcy5vPXRoaXMubD1udWxsO3RoaXMuTj1hfHxudWxsO3RoaXMuUj0hIWN9LFdlPWZ1bmN0aW9uKGEpe2EubHx8KGEubD1uZXcgVmQsYS5vPTAsYS5OJiZwZShhLk4sZnVuY3Rpb24oYixjKXthLmFkZChkZWNvZGVVUklDb21wb25lbnQoYi5yZXBsYWNlKC9cXCsvZyxcIiBcIikpLGMpfSkpfSxZZT1mdW5jdGlvbihhKXt2YXIgYj1aZChhKTtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgYil0aHJvdyBFcnJvcihcIktleXMgYXJlIHVuZGVmaW5lZFwiKTt2YXIgYz1uZXcgSShudWxsLDAsdm9pZCAwKTthPVlkKGEpO2Zvcih2YXIgZD0wO2Q8Yi5sZW5ndGg7ZCsrKXt2YXIgZT1iW2RdLGY9YVtkXTtkYShmKT9YZShjLGUsZik6Yy5hZGQoZSxmKX1yZXR1cm4gY307aD1JLnByb3RvdHlwZTtcbmguYWRkPWZ1bmN0aW9uKGEsYil7V2UodGhpcyk7dGhpcy5OPW51bGw7YT10aGlzLlAoYSk7dmFyIGM9dGhpcy5sLmdldChhKTtjfHx0aGlzLmwuc2V0KGEsYz1bXSk7Yy5wdXNoKGIpO3RoaXMubz15YSh0aGlzLm8pKzE7cmV0dXJuIHRoaXN9O2gucmVtb3ZlPWZ1bmN0aW9uKGEpe1dlKHRoaXMpO2E9dGhpcy5QKGEpO3JldHVybiB0aGlzLmwucGIoYSk/KHRoaXMuTj1udWxsLHRoaXMubz15YSh0aGlzLm8pLXRoaXMubC5nZXQoYSkubGVuZ3RoLHRoaXMubC5yZW1vdmUoYSkpOiExfTtoLnBiPWZ1bmN0aW9uKGEpe1dlKHRoaXMpO2E9dGhpcy5QKGEpO3JldHVybiB0aGlzLmwucGIoYSl9O2gua2E9ZnVuY3Rpb24oKXtXZSh0aGlzKTtmb3IodmFyIGE9dGhpcy5sLlkoKSxiPXRoaXMubC5rYSgpLGM9W10sZD0wO2Q8Yi5sZW5ndGg7ZCsrKWZvcih2YXIgZT1hW2RdLGY9MDtmPGUubGVuZ3RoO2YrKyljLnB1c2goYltkXSk7cmV0dXJuIGN9O1xuaC5ZPWZ1bmN0aW9uKGEpe1dlKHRoaXMpO3ZhciBiPVtdO2lmKHAoYSkpdGhpcy5wYihhKSYmKGI9TGEoYix0aGlzLmwuZ2V0KHRoaXMuUChhKSkpKTtlbHNle2E9dGhpcy5sLlkoKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyliPUxhKGIsYVtjXSl9cmV0dXJuIGJ9O2guc2V0PWZ1bmN0aW9uKGEsYil7V2UodGhpcyk7dGhpcy5OPW51bGw7YT10aGlzLlAoYSk7dGhpcy5wYihhKSYmKHRoaXMubz15YSh0aGlzLm8pLXRoaXMubC5nZXQoYSkubGVuZ3RoKTt0aGlzLmwuc2V0KGEsW2JdKTt0aGlzLm89eWEodGhpcy5vKSsxO3JldHVybiB0aGlzfTtoLmdldD1mdW5jdGlvbihhLGIpe2E9YT90aGlzLlkoYSk6W107cmV0dXJuIDA8YS5sZW5ndGg/U3RyaW5nKGFbMF0pOmJ9O3ZhciBYZT1mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmUoYik7MDxjLmxlbmd0aCYmKGEuTj1udWxsLGEubC5zZXQoYS5QKGIpLE1hKGMpKSxhLm89eWEoYS5vKStjLmxlbmd0aCl9O1xuSS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtpZih0aGlzLk4pcmV0dXJuIHRoaXMuTjtpZighdGhpcy5sKXJldHVyblwiXCI7Zm9yKHZhciBhPVtdLGI9dGhpcy5sLmthKCksYz0wO2M8Yi5sZW5ndGg7YysrKWZvcih2YXIgZD1iW2NdLGU9ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhkKSksZD10aGlzLlkoZCksZj0wO2Y8ZC5sZW5ndGg7ZisrKXt2YXIgZz1lO1wiXCIhPT1kW2ZdJiYoZys9XCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhkW2ZdKSkpO2EucHVzaChnKX1yZXR1cm4gdGhpcy5OPWEuam9pbihcIiZcIil9O0kucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IEk7YS5OPXRoaXMuTjt0aGlzLmwmJihhLmw9dGhpcy5sLmNsb25lKCksYS5vPXRoaXMubyk7cmV0dXJuIGF9O0kucHJvdG90eXBlLlA9ZnVuY3Rpb24oYSl7YT1TdHJpbmcoYSk7dGhpcy5SJiYoYT1hLnRvTG93ZXJDYXNlKCkpO3JldHVybiBhfTtcbkkucHJvdG90eXBlLmVkPWZ1bmN0aW9uKGEpe2EmJiF0aGlzLlImJihXZSh0aGlzKSx0aGlzLk49bnVsbCx0aGlzLmwuZm9yRWFjaChmdW5jdGlvbihhLGMpe3ZhciBiPWMudG9Mb3dlckNhc2UoKTtjIT1iJiYodGhpcy5yZW1vdmUoYyksWGUodGhpcyxiLGEpKX0sdGhpcykpO3RoaXMuUj1hfTt2YXIgWmU9ZnVuY3Rpb24oKXt2YXIgYT1LKCk7cmV0dXJuIEEmJiEhbWImJjExPT1tYnx8L0VkZ2VcXC9cXGQrLy50ZXN0KGEpfSwkZT1mdW5jdGlvbigpe3JldHVybiBsLndpbmRvdyYmbC53aW5kb3cubG9jYXRpb24uaHJlZnx8XCJcIn0sYWY9ZnVuY3Rpb24oYSxiKXtiPWJ8fGwud2luZG93O3ZhciBjPVwiYWJvdXQ6YmxhbmtcIjthJiYoYz1vYyhyYyhhKSkpO2IubG9jYXRpb24uaHJlZj1jfSxiZj1mdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQ7Zm9yKGQgaW4gYSlkIGluIGI/dHlwZW9mIGFbZF0hPXR5cGVvZiBiW2RdP2MucHVzaChkKTpkYShhW2RdKT9SYShhW2RdLGJbZF0pfHxjLnB1c2goZCk6XCJvYmplY3RcIj09dHlwZW9mIGFbZF0mJm51bGwhPWFbZF0mJm51bGwhPWJbZF0/MDxiZihhW2RdLGJbZF0pLmxlbmd0aCYmYy5wdXNoKGQpOmFbZF0hPT1iW2RdJiZjLnB1c2goZCk6Yy5wdXNoKGQpO2ZvcihkIGluIGIpZCBpbiBhfHxjLnB1c2goZCk7cmV0dXJuIGN9LGRmPWZ1bmN0aW9uKCl7dmFyIGE7XG5hPUsoKTthPVwiQ2hyb21lXCIhPWNmKGEpP251bGw6KGE9YS5tYXRjaCgvXFxzQ2hyb21lXFwvKFxcZCspL2kpKSYmMj09YS5sZW5ndGg/cGFyc2VJbnQoYVsxXSwxMCk6bnVsbDtyZXR1cm4gYSYmMzA+YT8hMTohQXx8IW1ifHw5PG1ifSxlZj1mdW5jdGlvbihhKXthPShhfHxLKCkpLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGEubWF0Y2goL2FuZHJvaWQvKXx8YS5tYXRjaCgvd2Vib3MvKXx8YS5tYXRjaCgvaXBob25lfGlwYWR8aXBvZC8pfHxhLm1hdGNoKC9ibGFja2JlcnJ5Lyl8fGEubWF0Y2goL3dpbmRvd3MgcGhvbmUvKXx8YS5tYXRjaCgvaWVtb2JpbGUvKT8hMDohMX0sZmY9ZnVuY3Rpb24oYSl7YT1hfHxsLndpbmRvdzt0cnl7YS5jbG9zZSgpfWNhdGNoKGIpe319LGdmPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1NYXRoLmZsb29yKDFFOSpNYXRoLnJhbmRvbSgpKS50b1N0cmluZygpO2I9Ynx8NTAwO2M9Y3x8NjAwO3ZhciBlPSh3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0LWMpLzIsZj0od2luZG93LnNjcmVlbi5hdmFpbFdpZHRoLVxuYikvMjtiPXt3aWR0aDpiLGhlaWdodDpjLHRvcDowPGU/ZTowLGxlZnQ6MDxmP2Y6MCxsb2NhdGlvbjohMCxyZXNpemFibGU6ITAsc3RhdHVzYmFyOiEwLHRvb2xiYXI6ITF9O2M9SygpLnRvTG93ZXJDYXNlKCk7ZCYmKGIudGFyZ2V0PWQsdihjLFwiY3Jpb3MvXCIpJiYoYi50YXJnZXQ9XCJfYmxhbmtcIikpO1wiRmlyZWZveFwiPT1jZihLKCkpJiYoYT1hfHxcImh0dHA6Ly9sb2NhbGhvc3RcIixiLnNjcm9sbGJhcnM9ITApO3ZhciBnO2M9YXx8XCJhYm91dDpibGFua1wiOyhkPWIpfHwoZD17fSk7YT13aW5kb3c7Yj1jIGluc3RhbmNlb2YgbmM/YzpyYyhcInVuZGVmaW5lZFwiIT10eXBlb2YgYy5ocmVmP2MuaHJlZjpTdHJpbmcoYykpO2M9ZC50YXJnZXR8fGMudGFyZ2V0O2U9W107Zm9yKGcgaW4gZClzd2l0Y2goZyl7Y2FzZSBcIndpZHRoXCI6Y2FzZSBcImhlaWdodFwiOmNhc2UgXCJ0b3BcIjpjYXNlIFwibGVmdFwiOmUucHVzaChnK1wiPVwiK2RbZ10pO2JyZWFrO2Nhc2UgXCJ0YXJnZXRcIjpjYXNlIFwibm9yZWZlcnJlclwiOmJyZWFrO1xuZGVmYXVsdDplLnB1c2goZytcIj1cIisoZFtnXT8xOjApKX1nPWUuam9pbihcIixcIik7KHooXCJpUGhvbmVcIikmJiF6KFwiaVBvZFwiKSYmIXooXCJpUGFkXCIpfHx6KFwiaVBhZFwiKXx8eihcImlQb2RcIikpJiZhLm5hdmlnYXRvciYmYS5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSYmYyYmXCJfc2VsZlwiIT1jPyhnPWEuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkFcIiksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEhUTUxBbmNob3JFbGVtZW50JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgTG9jYXRpb24mJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBFbGVtZW50JiYoZT1nJiYoZyBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50fHwhKGcgaW5zdGFuY2VvZiBMb2NhdGlvbnx8ZyBpbnN0YW5jZW9mIEVsZW1lbnQpKSxmPWdhKGcpP2cuY29uc3RydWN0b3IuZGlzcGxheU5hbWV8fGcuY29uc3RydWN0b3IubmFtZXx8T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGcpOnZvaWQgMD09PWc/XCJ1bmRlZmluZWRcIjpudWxsPT09Zz9cIm51bGxcIjpcbnR5cGVvZiBnLHcoZSxcIkFyZ3VtZW50IGlzIG5vdCBhIEhUTUxBbmNob3JFbGVtZW50IChvciBhIG5vbi1FbGVtZW50IG1vY2spOyBnb3Q6ICVzXCIsZikpLGI9YiBpbnN0YW5jZW9mIG5jP2I6cmMoYiksZy5ocmVmPW9jKGIpLGcuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsYyksZC5ub3JlZmVycmVyJiZnLnNldEF0dHJpYnV0ZShcInJlbFwiLFwibm9yZWZlcnJlclwiKSxkPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudFwiKSxkLmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCxhLDEpLGcuZGlzcGF0Y2hFdmVudChkKSxnPXt9KTpkLm5vcmVmZXJyZXI/KGc9YS5vcGVuKFwiXCIsYyxnKSxkPW9jKGIpLGcmJihkYiYmdihkLFwiO1wiKSYmKGQ9XCInXCIrZC5yZXBsYWNlKC8nL2csXCIlMjdcIikrXCInXCIpLGcub3BlbmVyPW51bGwsYT1sYyhcImIvMTIwMTQ0MTIsIG1ldGEgdGFnIHdpdGggc2FuaXRpemVkIFVSTFwiKSx0YS50ZXN0KGQpJiYoLTEhPWQuaW5kZXhPZihcIiZcIikmJihkPWQucmVwbGFjZShuYSxcblwiJmFtcDtcIikpLC0xIT1kLmluZGV4T2YoXCI8XCIpJiYoZD1kLnJlcGxhY2Uob2EsXCImbHQ7XCIpKSwtMSE9ZC5pbmRleE9mKFwiPlwiKSYmKGQ9ZC5yZXBsYWNlKHBhLFwiJmd0O1wiKSksLTEhPWQuaW5kZXhPZignXCInKSYmKGQ9ZC5yZXBsYWNlKHFhLFwiJnF1b3Q7XCIpKSwtMSE9ZC5pbmRleE9mKFwiJ1wiKSYmKGQ9ZC5yZXBsYWNlKHJhLFwiJiMzOTtcIikpLC0xIT1kLmluZGV4T2YoXCJcXHgwMFwiKSYmKGQ9ZC5yZXBsYWNlKHNhLFwiJiMwO1wiKSkpLGQ9JzxNRVRBIEhUVFAtRVFVSVY9XCJyZWZyZXNoXCIgY29udGVudD1cIjA7IHVybD0nK2QrJ1wiPicsemEoa2MoYSksXCJtdXN0IHByb3ZpZGUganVzdGlmaWNhdGlvblwiKSx3KCEvXltcXHNcXHhhMF0qJC8udGVzdChrYyhhKSksXCJtdXN0IHByb3ZpZGUgbm9uLWVtcHR5IGp1c3RpZmljYXRpb25cIiksZy5kb2N1bWVudC53cml0ZShNYygobmV3IExjKS5NZShkKSkpLGcuZG9jdW1lbnQuY2xvc2UoKSkpOmc9YS5vcGVuKG9jKGIpLGMsZyk7aWYoZyl0cnl7Zy5mb2N1cygpfWNhdGNoKGspe31yZXR1cm4gZ30sXG5oZj1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IEMoZnVuY3Rpb24oYil7dmFyIGM9ZnVuY3Rpb24oKXttZSgyRTMpLnRoZW4oZnVuY3Rpb24oKXtpZighYXx8YS5jbG9zZWQpYigpO2Vsc2UgcmV0dXJuIGMoKX0pfTtyZXR1cm4gYygpfSl9LGpmPS9eXFxkezEsM31cXC5cXGR7MSwzfVxcLlxcZHsxLDN9XFwuXFxkezEsM30kLyxrZj1mdW5jdGlvbigpe3ZhciBhPW51bGw7cmV0dXJuKG5ldyBDKGZ1bmN0aW9uKGIpe1wiY29tcGxldGVcIj09bC5kb2N1bWVudC5yZWFkeVN0YXRlP2IoKTooYT1mdW5jdGlvbigpe2IoKX0sYWMod2luZG93LFwibG9hZFwiLGEpKX0pKS5jKGZ1bmN0aW9uKGIpe2NjKHdpbmRvdyxcImxvYWRcIixhKTt0aHJvdyBiO30pfSxtZj1mdW5jdGlvbigpe3JldHVybiBsZih2b2lkIDApP2tmKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBuZXcgQyhmdW5jdGlvbihhLGIpe3ZhciBjPWwuZG9jdW1lbnQsZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YihFcnJvcihcIkNvcmRvdmEgZnJhbWV3b3JrIGlzIG5vdCByZWFkeS5cIikpfSxcbjFFMyk7Yy5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlcmVhZHlcIixmdW5jdGlvbigpe2NsZWFyVGltZW91dChkKTthKCl9LCExKX0pfSk6RShFcnJvcihcIkNvcmRvdmEgbXVzdCBydW4gaW4gYW4gQW5kcm9pZCBvciBpT1MgZmlsZSBzY2hlbWUuXCIpKX0sbGY9ZnVuY3Rpb24oYSl7YT1hfHxLKCk7cmV0dXJuIShcImZpbGU6XCIhPT1uZigpfHwhYS50b0xvd2VyQ2FzZSgpLm1hdGNoKC9pcGhvbmV8aXBhZHxpcG9kfGFuZHJvaWQvKSl9LEw9ZnVuY3Rpb24oKXtyZXR1cm4gZmlyZWJhc2UuSU5URVJOQUwuaGFzT3duUHJvcGVydHkoXCJyZWFjdE5hdGl2ZVwiKT9cIlJlYWN0TmF0aXZlXCI6bC5oYXNPd25Qcm9wZXJ0eShcInByb2Nlc3NcIik/XCJOb2RlXCI6XCJCcm93c2VyXCJ9LG9mPWZ1bmN0aW9uKCl7dmFyIGE9TCgpO3JldHVyblwiUmVhY3ROYXRpdmVcIj09PWF8fFwiTm9kZVwiPT09YX0sY2Y9ZnVuY3Rpb24oYSl7dmFyIGI9YS50b0xvd2VyQ2FzZSgpO2lmKHYoYixcIm9wZXJhL1wiKXx8dihiLFwib3ByL1wiKXx8dihiLFxuXCJvcGlvcy9cIikpcmV0dXJuXCJPcGVyYVwiO2lmKHYoYixcImllbW9iaWxlXCIpKXJldHVyblwiSUVNb2JpbGVcIjtpZih2KGIsXCJtc2llXCIpfHx2KGIsXCJ0cmlkZW50L1wiKSlyZXR1cm5cIklFXCI7aWYodihiLFwiZWRnZS9cIikpcmV0dXJuXCJFZGdlXCI7aWYodihiLFwiZmlyZWZveC9cIikpcmV0dXJuXCJGaXJlZm94XCI7aWYodihiLFwic2lsay9cIikpcmV0dXJuXCJTaWxrXCI7aWYodihiLFwiYmxhY2tiZXJyeVwiKSlyZXR1cm5cIkJsYWNrYmVycnlcIjtpZih2KGIsXCJ3ZWJvc1wiKSlyZXR1cm5cIldlYm9zXCI7aWYoIXYoYixcInNhZmFyaS9cIil8fHYoYixcImNocm9tZS9cIil8fHYoYixcImNyaW9zL1wiKXx8dihiLFwiYW5kcm9pZFwiKSlpZighdihiLFwiY2hyb21lL1wiKSYmIXYoYixcImNyaW9zL1wiKXx8dihiLFwiZWRnZS9cIikpe2lmKHYoYixcImFuZHJvaWRcIikpcmV0dXJuXCJBbmRyb2lkXCI7aWYoKGE9YS5tYXRjaCgvKFthLXpBLVpcXGRcXC5dKylcXC9bYS16QS1aXFxkXFwuXSokLykpJiYyPT1hLmxlbmd0aClyZXR1cm4gYVsxXX1lbHNlIHJldHVyblwiQ2hyb21lXCI7XG5lbHNlIHJldHVyblwiU2FmYXJpXCI7cmV0dXJuXCJPdGhlclwifSxwZj1mdW5jdGlvbihhKXt2YXIgYj1MKCk7cmV0dXJuKFwiQnJvd3NlclwiPT09Yj9jZihLKCkpOmIpK1wiL0pzQ29yZS9cIithfSxLPWZ1bmN0aW9uKCl7cmV0dXJuIGwubmF2aWdhdG9yJiZsLm5hdmlnYXRvci51c2VyQWdlbnR8fFwiXCJ9LE09ZnVuY3Rpb24oYSxiKXthPWEuc3BsaXQoXCIuXCIpO2I9Ynx8bDtmb3IodmFyIGM9MDtjPGEubGVuZ3RoJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmbnVsbCE9YjtjKyspYj1iW2FbY11dO2MhPWEubGVuZ3RoJiYoYj12b2lkIDApO3JldHVybiBifSxyZj1mdW5jdGlvbigpe3ZhciBhO2lmKGE9KFwiaHR0cDpcIj09PW5mKCl8fFwiaHR0cHM6XCI9PT1uZigpfHxsZigpJiYhMSkmJiFvZigpKWE6e3RyeXt2YXIgYj1sLmxvY2FsU3RvcmFnZSxjPXFmKCk7aWYoYil7Yi5zZXRJdGVtKGMsXCIxXCIpO2IucmVtb3ZlSXRlbShjKTthPVplKCk/ISFsLmluZGV4ZWREQjohMDticmVhayBhfX1jYXRjaChkKXt9YT0hMX1yZXR1cm4gYX0sXG5uZj1mdW5jdGlvbigpe3JldHVybiBsLmxvY2F0aW9uJiZsLmxvY2F0aW9uLnByb3RvY29sfHxudWxsfSxzZj1mdW5jdGlvbihhKXthPWF8fEsoKTtyZXR1cm4gZWYoYSl8fFwiRmlyZWZveFwiPT1jZihhKT8hMTohMH0sdGY9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhP251bGw6d2MoYSl9LHVmPWZ1bmN0aW9uKGEpe3ZhciBiPXt9LGM7Zm9yKGMgaW4gYSlhLmhhc093blByb3BlcnR5KGMpJiZudWxsIT09YVtjXSYmdm9pZCAwIT09YVtjXSYmKGJbY109YVtjXSk7cmV0dXJuIGJ9LHZmPWZ1bmN0aW9uKGEpe2lmKG51bGwhPT1hKXt2YXIgYjt0cnl7Yj10YyhhKX1jYXRjaChjKXt0cnl7Yj1KU09OLnBhcnNlKGEpfWNhdGNoKGQpe3Rocm93IGM7fX1yZXR1cm4gYn19LHFmPWZ1bmN0aW9uKGEpe3JldHVybiBhP2E6XCJcIitNYXRoLmZsb29yKDFFOSpNYXRoLnJhbmRvbSgpKS50b1N0cmluZygpfSx3Zj1mdW5jdGlvbihhKXthPWF8fEsoKTtyZXR1cm5cIlNhZmFyaVwiPT1cbmNmKGEpfHxhLnRvTG93ZXJDYXNlKCkubWF0Y2goL2lwaG9uZXxpcGFkfGlwb2QvKT8hMTohMH0seGY9ZnVuY3Rpb24oKXt2YXIgYT1sLl9fX2pzbDtpZihhJiZhLkgpZm9yKHZhciBiIGluIGEuSClpZihhLkhbYl0ucj1hLkhbYl0ucnx8W10sYS5IW2JdLkw9YS5IW2JdLkx8fFtdLGEuSFtiXS5yPWEuSFtiXS5MLmNvbmNhdCgpLGEuQ1ApZm9yKHZhciBjPTA7YzxhLkNQLmxlbmd0aDtjKyspYS5DUFtjXT1udWxsfSx5Zj1mdW5jdGlvbigpe3JldHVybiBsLm5hdmlnYXRvciYmXCJib29sZWFuXCI9PT10eXBlb2YgbC5uYXZpZ2F0b3Iub25MaW5lP2wubmF2aWdhdG9yLm9uTGluZTohMH0semY9ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYT5iKXRocm93IEVycm9yKFwiU2hvcnQgZGVsYXkgc2hvdWxkIGJlIGxlc3MgdGhhbiBsb25nIGRlbGF5IVwiKTt0aGlzLmxmPWE7dGhpcy5VZT1iO2E9Y3x8SygpO2Q9ZHx8TCgpO3RoaXMuT2U9ZWYoYSl8fFwiUmVhY3ROYXRpdmVcIj09PWR9O1xuemYucHJvdG90eXBlLmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzLk9lP3RoaXMuVWU6dGhpcy5sZn07dmFyIEFmO3RyeXt2YXIgQmY9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KEJmLFwiYWJjZFwiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZToxfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KEJmLFwiYWJjZFwiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZToyfSk7QWY9Mj09QmYuYWJjZH1jYXRjaChhKXtBZj0hMX1cbnZhciBOPWZ1bmN0aW9uKGEsYixjKXtBZj9PYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZTpjfSk6YVtiXT1jfSxDZj1mdW5jdGlvbihhLGIpe2lmKGIpZm9yKHZhciBjIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShjKSYmTihhLGMsYltjXSl9LERmPWZ1bmN0aW9uKGEpe3ZhciBiPXt9LGM7Zm9yKGMgaW4gYSlhLmhhc093blByb3BlcnR5KGMpJiYoYltjXT1hW2NdKTtyZXR1cm4gYn0sRWY9ZnVuY3Rpb24oYSxiKXtpZighYnx8IWIubGVuZ3RoKXJldHVybiEwO2lmKCFhKXJldHVybiExO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1hW2JbY11dO2lmKHZvaWQgMD09PWR8fG51bGw9PT1kfHxcIlwiPT09ZClyZXR1cm4hMX1yZXR1cm4hMH0sRmY9ZnVuY3Rpb24oYSl7dmFyIGI9YTtpZihcIm9iamVjdFwiPT10eXBlb2YgYSYmbnVsbCE9YSl7dmFyIGI9XCJsZW5ndGhcImluIGE/W106e30sYztmb3IoYyBpbiBhKU4oYixjLFxuRmYoYVtjXSkpfXJldHVybiBifTt2YXIgR2Y9W1wiY2xpZW50X2lkXCIsXCJyZXNwb25zZV90eXBlXCIsXCJzY29wZVwiLFwicmVkaXJlY3RfdXJpXCIsXCJzdGF0ZVwiXSxIZj17YmU6e0JiOjUwMCxBYjo2MDAscHJvdmlkZXJJZDpcImZhY2Vib29rLmNvbVwiLG9jOkdmfSxjZTp7QmI6NTAwLEFiOjYyMCxwcm92aWRlcklkOlwiZ2l0aHViLmNvbVwiLG9jOkdmfSxkZTp7QmI6NTE1LEFiOjY4MCxwcm92aWRlcklkOlwiZ29vZ2xlLmNvbVwiLG9jOkdmfSxpZTp7QmI6NDg1LEFiOjcwNSxwcm92aWRlcklkOlwidHdpdHRlci5jb21cIixvYzpcIm9hdXRoX2NvbnN1bWVyX2tleSBvYXV0aF9ub25jZSBvYXV0aF9zaWduYXR1cmUgb2F1dGhfc2lnbmF0dXJlX21ldGhvZCBvYXV0aF90aW1lc3RhbXAgb2F1dGhfdG9rZW4gb2F1dGhfdmVyc2lvblwiLnNwbGl0KFwiIFwiKX19LElmPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYiBpbiBIZilpZihIZltiXS5wcm92aWRlcklkPT1hKXJldHVybiBIZltiXTtyZXR1cm4gbnVsbH0sSmY9ZnVuY3Rpb24oYSl7cmV0dXJuKGE9SWYoYSkpJiZcbmEub2N8fFtdfTt2YXIgTz1mdW5jdGlvbihhLGIpe3RoaXMuY29kZT1cImF1dGgvXCIrYTt0aGlzLm1lc3NhZ2U9Ynx8S2ZbYV18fFwiXCJ9O3QoTyxFcnJvcik7Ty5wcm90b3R5cGUuRD1mdW5jdGlvbigpe3JldHVybntuYW1lOnRoaXMuY29kZSxjb2RlOnRoaXMuY29kZSxtZXNzYWdlOnRoaXMubWVzc2FnZX19O1xudmFyIExmPWZ1bmN0aW9uKGEpe3ZhciBiPWEmJihhLm5hbWV8fGEuY29kZSk7cmV0dXJuIGI/bmV3IE8oYi5zdWJzdHJpbmcoNSksYS5tZXNzYWdlKTpudWxsfSxLZj17XCJhcmd1bWVudC1lcnJvclwiOlwiXCIsXCJhcHAtbm90LWF1dGhvcml6ZWRcIjpcIlRoaXMgYXBwLCBpZGVudGlmaWVkIGJ5IHRoZSBkb21haW4gd2hlcmUgaXQncyBob3N0ZWQsIGlzIG5vdCBhdXRob3JpemVkIHRvIHVzZSBGaXJlYmFzZSBBdXRoZW50aWNhdGlvbiB3aXRoIHRoZSBwcm92aWRlZCBBUEkga2V5LiBSZXZpZXcgeW91ciBrZXkgY29uZmlndXJhdGlvbiBpbiB0aGUgR29vZ2xlIEFQSSBjb25zb2xlLlwiLFwiYXBwLW5vdC1pbnN0YWxsZWRcIjpcIlRoZSByZXF1ZXN0ZWQgbW9iaWxlIGFwcGxpY2F0aW9uIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGlkZW50aWZpZXIgKEFuZHJvaWQgcGFja2FnZSBuYW1lIG9yIGlPUyBidW5kbGUgSUQpIHByb3ZpZGVkIGlzIG5vdCBpbnN0YWxsZWQgb24gdGhpcyBkZXZpY2UuXCIsXCJjb3Jkb3ZhLW5vdC1yZWFkeVwiOlwiQ29yZG92YSBmcmFtZXdvcmsgaXMgbm90IHJlYWR5LlwiLFxuXCJjb3JzLXVuc3VwcG9ydGVkXCI6XCJUaGlzIGJyb3dzZXIgaXMgbm90IHN1cHBvcnRlZC5cIixcImNyZWRlbnRpYWwtYWxyZWFkeS1pbi11c2VcIjpcIlRoaXMgY3JlZGVudGlhbCBpcyBhbHJlYWR5IGFzc29jaWF0ZWQgd2l0aCBhIGRpZmZlcmVudCB1c2VyIGFjY291bnQuXCIsXCJjdXN0b20tdG9rZW4tbWlzbWF0Y2hcIjpcIlRoZSBjdXN0b20gdG9rZW4gY29ycmVzcG9uZHMgdG8gYSBkaWZmZXJlbnQgYXVkaWVuY2UuXCIsXCJyZXF1aXJlcy1yZWNlbnQtbG9naW5cIjpcIlRoaXMgb3BlcmF0aW9uIGlzIHNlbnNpdGl2ZSBhbmQgcmVxdWlyZXMgcmVjZW50IGF1dGhlbnRpY2F0aW9uLiBMb2cgaW4gYWdhaW4gYmVmb3JlIHJldHJ5aW5nIHRoaXMgcmVxdWVzdC5cIixcImR5bmFtaWMtbGluay1ub3QtYWN0aXZhdGVkXCI6XCJQbGVhc2UgYWN0aXZhdGUgRHluYW1pYyBMaW5rcyBpbiB0aGUgRmlyZWJhc2UgQ29uc29sZSBhbmQgYWdyZWUgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zLlwiLFwiZW1haWwtYWxyZWFkeS1pbi11c2VcIjpcIlRoZSBlbWFpbCBhZGRyZXNzIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYWNjb3VudC5cIixcblwiZXhwaXJlZC1hY3Rpb24tY29kZVwiOlwiVGhlIGFjdGlvbiBjb2RlIGhhcyBleHBpcmVkLiBcIixcImNhbmNlbGxlZC1wb3B1cC1yZXF1ZXN0XCI6XCJUaGlzIG9wZXJhdGlvbiBoYXMgYmVlbiBjYW5jZWxsZWQgZHVlIHRvIGFub3RoZXIgY29uZmxpY3RpbmcgcG9wdXAgYmVpbmcgb3BlbmVkLlwiLFwiaW50ZXJuYWwtZXJyb3JcIjpcIkFuIGludGVybmFsIGVycm9yIGhhcyBvY2N1cnJlZC5cIixcImludmFsaWQtdXNlci10b2tlblwiOlwiVGhlIHVzZXIncyBjcmVkZW50aWFsIGlzIG5vIGxvbmdlciB2YWxpZC4gVGhlIHVzZXIgbXVzdCBzaWduIGluIGFnYWluLlwiLFwiaW52YWxpZC1hdXRoLWV2ZW50XCI6XCJBbiBpbnRlcm5hbCBlcnJvciBoYXMgb2NjdXJyZWQuXCIsXCJpbnZhbGlkLWNvcmRvdmEtY29uZmlndXJhdGlvblwiOlwiVGhlIGZvbGxvd2luZyBDb3Jkb3ZhIHBsdWdpbnMgbXVzdCBiZSBpbnN0YWxsZWQgdG8gZW5hYmxlIE9BdXRoIHNpZ24taW46IGNvcmRvdmEtcGx1Z2luLWJ1aWxkaW5mbywgY29yZG92YS11bml2ZXJzYWwtbGlua3MtcGx1Z2luLCBjb3Jkb3ZhLXBsdWdpbi1icm93c2VydGFiLCBjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXIgYW5kIGNvcmRvdmEtcGx1Z2luLWN1c3RvbXVybHNjaGVtZS5cIixcblwiaW52YWxpZC1jdXN0b20tdG9rZW5cIjpcIlRoZSBjdXN0b20gdG9rZW4gZm9ybWF0IGlzIGluY29ycmVjdC4gUGxlYXNlIGNoZWNrIHRoZSBkb2N1bWVudGF0aW9uLlwiLFwiaW52YWxpZC1lbWFpbFwiOlwiVGhlIGVtYWlsIGFkZHJlc3MgaXMgYmFkbHkgZm9ybWF0dGVkLlwiLFwiaW52YWxpZC1hcGkta2V5XCI6XCJZb3VyIEFQSSBrZXkgaXMgaW52YWxpZCwgcGxlYXNlIGNoZWNrIHlvdSBoYXZlIGNvcGllZCBpdCBjb3JyZWN0bHkuXCIsXCJpbnZhbGlkLWNyZWRlbnRpYWxcIjpcIlRoZSBzdXBwbGllZCBhdXRoIGNyZWRlbnRpYWwgaXMgbWFsZm9ybWVkIG9yIGhhcyBleHBpcmVkLlwiLFwiaW52YWxpZC1tZXNzYWdlLXBheWxvYWRcIjpcIlRoZSBlbWFpbCB0ZW1wbGF0ZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgYWN0aW9uIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyBpbiBpdHMgbWVzc2FnZS4gUGxlYXNlIGZpeCBieSBnb2luZyB0byB0aGUgQXV0aCBlbWFpbCB0ZW1wbGF0ZXMgc2VjdGlvbiBpbiB0aGUgRmlyZWJhc2UgQ29uc29sZS5cIixcblwiaW52YWxpZC1vYXV0aC1wcm92aWRlclwiOlwiRW1haWxBdXRoUHJvdmlkZXIgaXMgbm90IHN1cHBvcnRlZCBmb3IgdGhpcyBvcGVyYXRpb24uIFRoaXMgb3BlcmF0aW9uIG9ubHkgc3VwcG9ydHMgT0F1dGggcHJvdmlkZXJzLlwiLFwidW5hdXRob3JpemVkLWRvbWFpblwiOlwiVGhpcyBkb21haW4gaXMgbm90IGF1dGhvcml6ZWQgZm9yIE9BdXRoIG9wZXJhdGlvbnMgZm9yIHlvdXIgRmlyZWJhc2UgcHJvamVjdC4gRWRpdCB0aGUgbGlzdCBvZiBhdXRob3JpemVkIGRvbWFpbnMgZnJvbSB0aGUgRmlyZWJhc2UgY29uc29sZS5cIixcImludmFsaWQtYWN0aW9uLWNvZGVcIjpcIlRoZSBhY3Rpb24gY29kZSBpcyBpbnZhbGlkLiBUaGlzIGNhbiBoYXBwZW4gaWYgdGhlIGNvZGUgaXMgbWFsZm9ybWVkLCBleHBpcmVkLCBvciBoYXMgYWxyZWFkeSBiZWVuIHVzZWQuXCIsXCJ3cm9uZy1wYXNzd29yZFwiOlwiVGhlIHBhc3N3b3JkIGlzIGludmFsaWQgb3IgdGhlIHVzZXIgZG9lcyBub3QgaGF2ZSBhIHBhc3N3b3JkLlwiLFxuXCJpbnZhbGlkLXJlY2lwaWVudC1lbWFpbFwiOlwiVGhlIGVtYWlsIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBhY3Rpb24gZmFpbGVkIHRvIHNlbmQgYXMgdGhlIHByb3ZpZGVkIHJlY2lwaWVudCBlbWFpbCBhZGRyZXNzIGlzIGludmFsaWQuXCIsXCJpbnZhbGlkLXNlbmRlclwiOlwiVGhlIGVtYWlsIHRlbXBsYXRlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBhY3Rpb24gY29udGFpbnMgYW4gaW52YWxpZCBzZW5kZXIgZW1haWwgb3IgbmFtZS4gUGxlYXNlIGZpeCBieSBnb2luZyB0byB0aGUgQXV0aCBlbWFpbCB0ZW1wbGF0ZXMgc2VjdGlvbiBpbiB0aGUgRmlyZWJhc2UgQ29uc29sZS5cIixcIm1pc3NpbmctaWZyYW1lLXN0YXJ0XCI6XCJBbiBpbnRlcm5hbCBlcnJvciBoYXMgb2NjdXJyZWQuXCIsXCJhdXRoLWRvbWFpbi1jb25maWctcmVxdWlyZWRcIjpcIkJlIHN1cmUgdG8gaW5jbHVkZSBhdXRoRG9tYWluIHdoZW4gY2FsbGluZyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKCksIGJ5IGZvbGxvd2luZyB0aGUgaW5zdHJ1Y3Rpb25zIGluIHRoZSBGaXJlYmFzZSBjb25zb2xlLlwiLFxuXCJhcHAtZGVsZXRlZFwiOlwiVGhpcyBpbnN0YW5jZSBvZiBGaXJlYmFzZUFwcCBoYXMgYmVlbiBkZWxldGVkLlwiLFwiYWNjb3VudC1leGlzdHMtd2l0aC1kaWZmZXJlbnQtY3JlZGVudGlhbFwiOlwiQW4gYWNjb3VudCBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoZSBzYW1lIGVtYWlsIGFkZHJlc3MgYnV0IGRpZmZlcmVudCBzaWduLWluIGNyZWRlbnRpYWxzLiBTaWduIGluIHVzaW5nIGEgcHJvdmlkZXIgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZW1haWwgYWRkcmVzcy5cIixcIm5ldHdvcmstcmVxdWVzdC1mYWlsZWRcIjpcIkEgbmV0d29yayBlcnJvciAoc3VjaCBhcyB0aW1lb3V0LCBpbnRlcnJ1cHRlZCBjb25uZWN0aW9uIG9yIHVucmVhY2hhYmxlIGhvc3QpIGhhcyBvY2N1cnJlZC5cIixcIm5vLWF1dGgtZXZlbnRcIjpcIkFuIGludGVybmFsIGVycm9yIGhhcyBvY2N1cnJlZC5cIixcIm5vLXN1Y2gtcHJvdmlkZXJcIjpcIlVzZXIgd2FzIG5vdCBsaW5rZWQgdG8gYW4gYWNjb3VudCB3aXRoIHRoZSBnaXZlbiBwcm92aWRlci5cIixcblwib3BlcmF0aW9uLW5vdC1hbGxvd2VkXCI6XCJUaGUgZ2l2ZW4gc2lnbi1pbiBwcm92aWRlciBpcyBkaXNhYmxlZCBmb3IgdGhpcyBGaXJlYmFzZSBwcm9qZWN0LiBFbmFibGUgaXQgaW4gdGhlIEZpcmViYXNlIGNvbnNvbGUsIHVuZGVyIHRoZSBzaWduLWluIG1ldGhvZCB0YWIgb2YgdGhlIEF1dGggc2VjdGlvbi5cIixcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIjonVGhpcyBvcGVyYXRpb24gaXMgbm90IHN1cHBvcnRlZCBpbiB0aGUgZW52aXJvbm1lbnQgdGhpcyBhcHBsaWNhdGlvbiBpcyBydW5uaW5nIG9uLiBcImxvY2F0aW9uLnByb3RvY29sXCIgbXVzdCBiZSBodHRwIG9yIGh0dHBzIGFuZCB3ZWIgc3RvcmFnZSBtdXN0IGJlIGVuYWJsZWQuJyxcInBvcHVwLWJsb2NrZWRcIjpcIlVuYWJsZSB0byBlc3RhYmxpc2ggYSBjb25uZWN0aW9uIHdpdGggdGhlIHBvcHVwLiBJdCBtYXkgaGF2ZSBiZWVuIGJsb2NrZWQgYnkgdGhlIGJyb3dzZXIuXCIsXCJwb3B1cC1jbG9zZWQtYnktdXNlclwiOlwiVGhlIHBvcHVwIGhhcyBiZWVuIGNsb3NlZCBieSB0aGUgdXNlciBiZWZvcmUgZmluYWxpemluZyB0aGUgb3BlcmF0aW9uLlwiLFxuXCJwcm92aWRlci1hbHJlYWR5LWxpbmtlZFwiOlwiVXNlciBjYW4gb25seSBiZSBsaW5rZWQgdG8gb25lIGlkZW50aXR5IGZvciB0aGUgZ2l2ZW4gcHJvdmlkZXIuXCIsXCJyZWRpcmVjdC1jYW5jZWxsZWQtYnktdXNlclwiOlwiVGhlIHJlZGlyZWN0IG9wZXJhdGlvbiBoYXMgYmVlbiBjYW5jZWxsZWQgYnkgdGhlIHVzZXIgYmVmb3JlIGZpbmFsaXppbmcuXCIsXCJyZWRpcmVjdC1vcGVyYXRpb24tcGVuZGluZ1wiOlwiQSByZWRpcmVjdCBzaWduLWluIG9wZXJhdGlvbiBpcyBhbHJlYWR5IHBlbmRpbmcuXCIsdGltZW91dDpcIlRoZSBvcGVyYXRpb24gaGFzIHRpbWVkIG91dC5cIixcInVzZXItdG9rZW4tZXhwaXJlZFwiOlwiVGhlIHVzZXIncyBjcmVkZW50aWFsIGlzIG5vIGxvbmdlciB2YWxpZC4gVGhlIHVzZXIgbXVzdCBzaWduIGluIGFnYWluLlwiLFwidG9vLW1hbnktcmVxdWVzdHNcIjpcIldlIGhhdmUgYmxvY2tlZCBhbGwgcmVxdWVzdHMgZnJvbSB0aGlzIGRldmljZSBkdWUgdG8gdW51c3VhbCBhY3Rpdml0eS4gVHJ5IGFnYWluIGxhdGVyLlwiLFxuXCJ1c2VyLWNhbmNlbGxlZFwiOlwiVXNlciBkaWQgbm90IGdyYW50IHlvdXIgYXBwbGljYXRpb24gdGhlIHBlcm1pc3Npb25zIGl0IHJlcXVlc3RlZC5cIixcInVzZXItbm90LWZvdW5kXCI6XCJUaGVyZSBpcyBubyB1c2VyIHJlY29yZCBjb3JyZXNwb25kaW5nIHRvIHRoaXMgaWRlbnRpZmllci4gVGhlIHVzZXIgbWF5IGhhdmUgYmVlbiBkZWxldGVkLlwiLFwidXNlci1kaXNhYmxlZFwiOlwiVGhlIHVzZXIgYWNjb3VudCBoYXMgYmVlbiBkaXNhYmxlZCBieSBhbiBhZG1pbmlzdHJhdG9yLlwiLFwidXNlci1taXNtYXRjaFwiOlwiVGhlIHN1cHBsaWVkIGNyZWRlbnRpYWxzIGRvIG5vdCBjb3JyZXNwb25kIHRvIHRoZSBwcmV2aW91c2x5IHNpZ25lZCBpbiB1c2VyLlwiLFwidXNlci1zaWduZWQtb3V0XCI6XCJcIixcIndlYWstcGFzc3dvcmRcIjpcIlRoZSBwYXNzd29yZCBtdXN0IGJlIDYgY2hhcmFjdGVycyBsb25nIG9yIG1vcmUuXCIsXCJ3ZWItc3RvcmFnZS11bnN1cHBvcnRlZFwiOlwiVGhpcyBicm93c2VyIGlzIG5vdCBzdXBwb3J0ZWQgb3IgM3JkIHBhcnR5IGNvb2tpZXMgYW5kIGRhdGEgbWF5IGJlIGRpc2FibGVkLlwifTt2YXIgUD1mdW5jdGlvbihhLGIsYyxkLGUpe3RoaXMuZ2E9YTt0aGlzLkY9Ynx8bnVsbDt0aGlzLm1iPWN8fG51bGw7dGhpcy5kZD1kfHxudWxsO3RoaXMuTz1lfHxudWxsO2lmKHRoaXMubWJ8fHRoaXMuTyl7aWYodGhpcy5tYiYmdGhpcy5PKXRocm93IG5ldyBPKFwiaW52YWxpZC1hdXRoLWV2ZW50XCIpO2lmKHRoaXMubWImJiF0aGlzLmRkKXRocm93IG5ldyBPKFwiaW52YWxpZC1hdXRoLWV2ZW50XCIpO31lbHNlIHRocm93IG5ldyBPKFwiaW52YWxpZC1hdXRoLWV2ZW50XCIpO307UC5wcm90b3R5cGUuVmI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kZH07UC5wcm90b3R5cGUuZ2V0RXJyb3I9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5PfTtQLnByb3RvdHlwZS5EPWZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6dGhpcy5nYSxldmVudElkOnRoaXMuRix1cmxSZXNwb25zZTp0aGlzLm1iLHNlc3Npb25JZDp0aGlzLmRkLGVycm9yOnRoaXMuTyYmdGhpcy5PLkQoKX19O1xudmFyIE1mPWZ1bmN0aW9uKGEpe2E9YXx8e307cmV0dXJuIGEudHlwZT9uZXcgUChhLnR5cGUsYS5ldmVudElkLGEudXJsUmVzcG9uc2UsYS5zZXNzaW9uSWQsYS5lcnJvciYmTGYoYS5lcnJvcikpOm51bGx9O3ZhciBOZj1mdW5jdGlvbihhKXt2YXIgYj1cInVuYXV0aG9yaXplZC1kb21haW5cIixjPXZvaWQgMCxkPVRlKGEpO2E9ZC4kO2Q9ZC5kYTtcImh0dHBcIiE9ZCYmXCJodHRwc1wiIT1kP2I9XCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCI6Yz1sYShcIlRoaXMgZG9tYWluICglcykgaXMgbm90IGF1dGhvcml6ZWQgdG8gcnVuIHRoaXMgb3BlcmF0aW9uLiBBZGQgaXQgdG8gdGhlIE9BdXRoIHJlZGlyZWN0IGRvbWFpbnMgbGlzdCBpbiB0aGUgRmlyZWJhc2UgY29uc29sZSAtPiBBdXRoIHNlY3Rpb24gLT4gU2lnbiBpbiBtZXRob2QgdGFiLlwiLGEpO08uY2FsbCh0aGlzLGIsYyl9O3QoTmYsTyk7dmFyIE9mPWZ1bmN0aW9uKGEpe3RoaXMuVGU9YS5zdWI7a2EoKTt0aGlzLlNiPWEuZW1haWx8fG51bGx9O3ZhciBQZj1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT17fTtnYShjKT9lPWM6YiYmcChjKSYmcChkKT9lPXtvYXV0aFRva2VuOmMsb2F1dGhUb2tlblNlY3JldDpkfTohYiYmcChjKSYmKGU9e2FjY2Vzc1Rva2VuOmN9KTtpZihifHwhZS5pZFRva2VuJiYhZS5hY2Nlc3NUb2tlbilpZihiJiZlLm9hdXRoVG9rZW4mJmUub2F1dGhUb2tlblNlY3JldClOKHRoaXMsXCJhY2Nlc3NUb2tlblwiLGUub2F1dGhUb2tlbiksTih0aGlzLFwic2VjcmV0XCIsZS5vYXV0aFRva2VuU2VjcmV0KTtlbHNle2lmKGIpdGhyb3cgbmV3IE8oXCJhcmd1bWVudC1lcnJvclwiLFwiY3JlZGVudGlhbCBmYWlsZWQ6IGV4cGVjdGVkIDIgYXJndW1lbnRzICh0aGUgT0F1dGggYWNjZXNzIHRva2VuIGFuZCBzZWNyZXQpLlwiKTt0aHJvdyBuZXcgTyhcImFyZ3VtZW50LWVycm9yXCIsXCJjcmVkZW50aWFsIGZhaWxlZDogZXhwZWN0ZWQgMSBhcmd1bWVudCAodGhlIE9BdXRoIGFjY2VzcyB0b2tlbikuXCIpO31lbHNlIGUuaWRUb2tlbiYmTih0aGlzLFxuXCJpZFRva2VuXCIsZS5pZFRva2VuKSxlLmFjY2Vzc1Rva2VuJiZOKHRoaXMsXCJhY2Nlc3NUb2tlblwiLGUuYWNjZXNzVG9rZW4pO04odGhpcyxcInByb3ZpZGVyXCIsYSl9O1BmLnByb3RvdHlwZS5VYj1mdW5jdGlvbihhKXtyZXR1cm4gUWYoYSxSZih0aGlzKSl9O1BmLnByb3RvdHlwZS5GZD1mdW5jdGlvbihhLGIpe3ZhciBjPVJmKHRoaXMpO2MuaWRUb2tlbj1iO3JldHVybiBTZihhLGMpfTt2YXIgUmY9ZnVuY3Rpb24oYSl7dmFyIGI9e307YS5pZFRva2VuJiYoYi5pZF90b2tlbj1hLmlkVG9rZW4pO2EuYWNjZXNzVG9rZW4mJihiLmFjY2Vzc190b2tlbj1hLmFjY2Vzc1Rva2VuKTthLnNlY3JldCYmKGIub2F1dGhfdG9rZW5fc2VjcmV0PWEuc2VjcmV0KTtiLnByb3ZpZGVySWQ9YS5wcm92aWRlcjtyZXR1cm57cG9zdEJvZHk6WWUoYikudG9TdHJpbmcoKSxyZXF1ZXN0VXJpOnJmKCk/JGUoKTpcImh0dHA6Ly9sb2NhbGhvc3RcIn19O1xuUGYucHJvdG90eXBlLkQ9ZnVuY3Rpb24oKXt2YXIgYT17cHJvdmlkZXI6dGhpcy5wcm92aWRlcn07dGhpcy5pZFRva2VuJiYoYS5vYXV0aElkVG9rZW49dGhpcy5pZFRva2VuKTt0aGlzLmFjY2Vzc1Rva2VuJiYoYS5vYXV0aEFjY2Vzc1Rva2VuPXRoaXMuYWNjZXNzVG9rZW4pO3RoaXMuc2VjcmV0JiYoYS5vYXV0aFRva2VuU2VjcmV0PXRoaXMuc2VjcmV0KTtyZXR1cm4gYX07XG52YXIgVGY9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPSEhYixlPWN8fFtdO2I9ZnVuY3Rpb24oKXtDZih0aGlzLHtwcm92aWRlcklkOmEsaXNPQXV0aFByb3ZpZGVyOiEwfSk7dGhpcy5jZD1bXTt0aGlzLnFkPXt9O1wiZ29vZ2xlLmNvbVwiPT1hJiZ0aGlzLmFkZFNjb3BlKFwicHJvZmlsZVwiKX07ZHx8KGIucHJvdG90eXBlLmFkZFNjb3BlPWZ1bmN0aW9uKGEpe0hhKHRoaXMuY2QsYSl8fHRoaXMuY2QucHVzaChhKX0pO2IucHJvdG90eXBlLnNldEN1c3RvbVBhcmFtZXRlcnM9ZnVuY3Rpb24oYSl7dGhpcy5xZD1TYShhKX07Yi5wcm90b3R5cGUuQmU9ZnVuY3Rpb24oKXt2YXIgYT11Zih0aGlzLnFkKSxiO2ZvcihiIGluIGEpYVtiXT1hW2JdLnRvU3RyaW5nKCk7YT1TYShhKTtmb3IoYj0wO2I8ZS5sZW5ndGg7YisrKXt2YXIgYz1lW2JdO2MgaW4gYSYmZGVsZXRlIGFbY119cmV0dXJuIGF9O2IucHJvdG90eXBlLkNlPWZ1bmN0aW9uKCl7cmV0dXJuIE1hKHRoaXMuY2QpfTtiLmNyZWRlbnRpYWw9XG5mdW5jdGlvbihiLGMpe3JldHVybiBuZXcgUGYoYSxkLGIsYyl9O0NmKGIse1BST1ZJREVSX0lEOmF9KTtyZXR1cm4gYn0sVWY9VGYoXCJmYWNlYm9vay5jb21cIiwhMSxKZihcImZhY2Vib29rLmNvbVwiKSk7VWYucHJvdG90eXBlLmFkZFNjb3BlPVVmLnByb3RvdHlwZS5hZGRTY29wZXx8dm9pZCAwO3ZhciBWZj1UZihcImdpdGh1Yi5jb21cIiwhMSxKZihcImdpdGh1Yi5jb21cIikpO1ZmLnByb3RvdHlwZS5hZGRTY29wZT1WZi5wcm90b3R5cGUuYWRkU2NvcGV8fHZvaWQgMDt2YXIgV2Y9VGYoXCJnb29nbGUuY29tXCIsITEsSmYoXCJnb29nbGUuY29tXCIpKTtXZi5wcm90b3R5cGUuYWRkU2NvcGU9V2YucHJvdG90eXBlLmFkZFNjb3BlfHx2b2lkIDA7XG5XZi5jcmVkZW50aWFsPWZ1bmN0aW9uKGEsYil7aWYoIWEmJiFiKXRocm93IG5ldyBPKFwiYXJndW1lbnQtZXJyb3JcIixcImNyZWRlbnRpYWwgZmFpbGVkOiBtdXN0IHByb3ZpZGUgdGhlIElEIHRva2VuIGFuZC9vciB0aGUgYWNjZXNzIHRva2VuLlwiKTtyZXR1cm4gbmV3IFBmKFwiZ29vZ2xlLmNvbVwiLCExLGdhKGEpP2E6e2lkVG9rZW46YXx8bnVsbCxhY2Nlc3NUb2tlbjpifHxudWxsfSl9O3ZhciBYZj1UZihcInR3aXR0ZXIuY29tXCIsITAsSmYoXCJ0d2l0dGVyLmNvbVwiKSksWWY9ZnVuY3Rpb24oYSxiKXt0aGlzLlNiPWE7dGhpcy5XYz1iO04odGhpcyxcInByb3ZpZGVyXCIsXCJwYXNzd29yZFwiKX07WWYucHJvdG90eXBlLlViPWZ1bmN0aW9uKGEpe3JldHVybiBRKGEsWmYse2VtYWlsOnRoaXMuU2IscGFzc3dvcmQ6dGhpcy5XY30pfTtZZi5wcm90b3R5cGUuRmQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUShhLCRmLHtpZFRva2VuOmIsZW1haWw6dGhpcy5TYixwYXNzd29yZDp0aGlzLldjfSl9O1xuWWYucHJvdG90eXBlLkQ9ZnVuY3Rpb24oKXtyZXR1cm57ZW1haWw6dGhpcy5TYixwYXNzd29yZDp0aGlzLldjfX07dmFyIGFnPWZ1bmN0aW9uKCl7Q2YodGhpcyx7cHJvdmlkZXJJZDpcInBhc3N3b3JkXCIsaXNPQXV0aFByb3ZpZGVyOiExfSl9O0NmKGFnLHtQUk9WSURFUl9JRDpcInBhc3N3b3JkXCJ9KTtcbnZhciBiZz17QWY6YWcsYmU6VWYsZGU6V2YsY2U6VmYsaWU6WGZ9LGNnPWZ1bmN0aW9uKGEpe3ZhciBiPWEmJmEucHJvdmlkZXJJZDtpZighYilyZXR1cm4gbnVsbDt2YXIgYz1hJiZhLm9hdXRoQWNjZXNzVG9rZW4sZD1hJiZhLm9hdXRoVG9rZW5TZWNyZXQ7YT1hJiZhLm9hdXRoSWRUb2tlbjtmb3IodmFyIGUgaW4gYmcpaWYoYmdbZV0uUFJPVklERVJfSUQ9PWIpdHJ5e3JldHVybiBiZ1tlXS5jcmVkZW50aWFsKHthY2Nlc3NUb2tlbjpjLGlkVG9rZW46YSxvYXV0aFRva2VuOmMsb2F1dGhUb2tlblNlY3JldDpkfSl9Y2F0Y2goZil7YnJlYWt9cmV0dXJuIG51bGx9LGRnPWZ1bmN0aW9uKGEpe2lmKCFhLmlzT0F1dGhQcm92aWRlcil0aHJvdyBuZXcgTyhcImludmFsaWQtb2F1dGgtcHJvdmlkZXJcIik7fTt2YXIgZWc9ZnVuY3Rpb24oYSxiLGMsZCl7Ty5jYWxsKHRoaXMsYSxkKTtOKHRoaXMsXCJlbWFpbFwiLGIpO04odGhpcyxcImNyZWRlbnRpYWxcIixjKX07dChlZyxPKTtlZy5wcm90b3R5cGUuRD1mdW5jdGlvbigpe3ZhciBhPXtjb2RlOnRoaXMuY29kZSxtZXNzYWdlOnRoaXMubWVzc2FnZSxlbWFpbDp0aGlzLmVtYWlsfSxiPXRoaXMuY3JlZGVudGlhbCYmdGhpcy5jcmVkZW50aWFsLkQoKTtiJiYoVWEoYSxiKSxhLnByb3ZpZGVySWQ9Yi5wcm92aWRlcixkZWxldGUgYS5wcm92aWRlcik7cmV0dXJuIGF9O3ZhciBmZz1mdW5jdGlvbihhKXtpZihhLmNvZGUpe3ZhciBiPWEuY29kZXx8XCJcIjswPT1iLmluZGV4T2YoXCJhdXRoL1wiKSYmKGI9Yi5zdWJzdHJpbmcoNSkpO3JldHVybiBhLmVtYWlsP25ldyBlZyhiLGEuZW1haWwsY2coYSksYS5tZXNzYWdlKTpuZXcgTyhiLGEubWVzc2FnZXx8dm9pZCAwKX1yZXR1cm4gbnVsbH07dmFyIGdnPWZ1bmN0aW9uKGEpe3RoaXMuemY9YX07dChnZyxBYyk7Z2cucHJvdG90eXBlLlJiPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0aGlzLnpmfTtnZy5wcm90b3R5cGUuUGM9ZnVuY3Rpb24oKXtyZXR1cm57fX07XG52YXIgUj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ7ZD1cIk5vZGVcIj09TCgpO2Q9bC5YTUxIdHRwUmVxdWVzdHx8ZCYmZmlyZWJhc2UuSU5URVJOQUwubm9kZSYmZmlyZWJhc2UuSU5URVJOQUwubm9kZS5YTUxIdHRwUmVxdWVzdDtpZighZCl0aHJvdyBuZXcgTyhcImludGVybmFsLWVycm9yXCIsXCJUaGUgWE1MSHR0cFJlcXVlc3QgY29tcGF0aWJpbGl0eSBsaWJyYXJ5IHdhcyBub3QgZm91bmQuXCIpO3RoaXMuaj1hO2E9Ynx8e307dGhpcy5nZj1hLnNlY3VyZVRva2VuRW5kcG9pbnR8fFwiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGVhcGlzLmNvbS92MS90b2tlblwiO3RoaXMuaGY9YS5zZWN1cmVUb2tlblRpbWVvdXR8fGhnO3RoaXMuT2Q9U2EoYS5zZWN1cmVUb2tlbkhlYWRlcnN8fGlnKTt0aGlzLndlPWEuZmlyZWJhc2VFbmRwb2ludHx8XCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9pZGVudGl0eXRvb2xraXQvdjMvcmVseWluZ3BhcnR5L1wiO3RoaXMueGU9YS5maXJlYmFzZVRpbWVvdXR8fFxuamc7dGhpcy52ZD1TYShhLmZpcmViYXNlSGVhZGVyc3x8a2cpO2MmJih0aGlzLnZkW1wiWC1DbGllbnQtVmVyc2lvblwiXT1jLHRoaXMuT2RbXCJYLUNsaWVudC1WZXJzaW9uXCJdPWMpO3RoaXMubmU9bmV3IEZjO3RoaXMueWY9bmV3IGdnKGQpfSxsZyxoZz1uZXcgemYoMUU0LDNFNCksaWc9e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIn0samc9bmV3IHpmKDFFNCwzRTQpLGtnPXtcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwifSxuZz1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt5ZigpPyhkZigpP2E9cihhLmtmLGEpOihsZ3x8KGxnPW5ldyBDKGZ1bmN0aW9uKGEsYil7bWcoYSxiKX0pKSxhPXIoYS5qZixhKSksYShiLGMsZCxlLGYsZykpOmMmJmMobnVsbCl9O1xuUi5wcm90b3R5cGUua2Y9ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3ZhciBnPVwiTm9kZVwiPT1MKCksaz1vZigpP2c/bmV3IEcodGhpcy55Zik6bmV3IEc6bmV3IEcodGhpcy5uZSksbjtmJiYoay5rYj1NYXRoLm1heCgwLGYpLG49c2V0VGltZW91dChmdW5jdGlvbigpe2suZGlzcGF0Y2hFdmVudChcInRpbWVvdXRcIil9LGYpKTtrLmxpc3RlbihcImNvbXBsZXRlXCIsZnVuY3Rpb24oKXtuJiZjbGVhclRpbWVvdXQobik7dmFyIGE9bnVsbDt0cnl7dmFyIGM7Yz10aGlzLmI/dGModGhpcy5iLnJlc3BvbnNlVGV4dCk6dm9pZCAwO2E9Y3x8bnVsbH1jYXRjaChXYSl7dHJ5e2E9SlNPTi5wYXJzZShEZSh0aGlzKSl8fG51bGx9Y2F0Y2gob2Upe2E9bnVsbH19YiYmYihhKX0pO2JjKGssXCJyZWFkeVwiLGZ1bmN0aW9uKCl7biYmY2xlYXJUaW1lb3V0KG4pO3RoaXMuQWF8fCh0aGlzLkFhPSEwLHRoaXMuUmEoKSl9KTtiYyhrLFwidGltZW91dFwiLGZ1bmN0aW9uKCl7biYmY2xlYXJUaW1lb3V0KG4pO3RoaXMuQWF8fFxuKHRoaXMuQWE9ITAsdGhpcy5SYSgpKTtiJiZiKG51bGwpfSk7ay5zZW5kKGEsYyxkLGUpfTt2YXIgRmQ9XCJfX2ZjYlwiK01hdGguZmxvb3IoMUU2Kk1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKCksbWc9ZnVuY3Rpb24oYSxiKXsoKHdpbmRvdy5nYXBpfHx7fSkuY2xpZW50fHx7fSkucmVxdWVzdD9hKCk6KGxbRmRdPWZ1bmN0aW9uKCl7KCh3aW5kb3cuZ2FwaXx8e30pLmNsaWVudHx8e30pLnJlcXVlc3Q/YSgpOmIoRXJyb3IoXCJDT1JTX1VOU1VQUE9SVEVEXCIpKX0sSGQoZnVuY3Rpb24oKXtiKEVycm9yKFwiQ09SU19VTlNVUFBPUlRFRFwiKSl9KSl9O1xuUi5wcm90b3R5cGUuamY9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj10aGlzO2xnLnRoZW4oZnVuY3Rpb24oKXt3aW5kb3cuZ2FwaS5jbGllbnQuc2V0QXBpS2V5KGYuaik7dmFyIGc9d2luZG93LmdhcGkuYXV0aC5nZXRUb2tlbigpO3dpbmRvdy5nYXBpLmF1dGguc2V0VG9rZW4obnVsbCk7d2luZG93LmdhcGkuY2xpZW50LnJlcXVlc3Qoe3BhdGg6YSxtZXRob2Q6Yyxib2R5OmQsaGVhZGVyczplLGF1dGhUeXBlOlwibm9uZVwiLGNhbGxiYWNrOmZ1bmN0aW9uKGEpe3dpbmRvdy5nYXBpLmF1dGguc2V0VG9rZW4oZyk7YiYmYihhKX19KX0pLmMoZnVuY3Rpb24oYSl7YiYmYih7ZXJyb3I6e21lc3NhZ2U6YSYmYS5tZXNzYWdlfHxcIkNPUlNfVU5TVVBQT1JURURcIn19KX0pfTtcbnZhciBwZz1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgQyhmdW5jdGlvbihjLGQpe1wicmVmcmVzaF90b2tlblwiPT1iLmdyYW50X3R5cGUmJmIucmVmcmVzaF90b2tlbnx8XCJhdXRob3JpemF0aW9uX2NvZGVcIj09Yi5ncmFudF90eXBlJiZiLmNvZGU/bmcoYSxhLmdmK1wiP2tleT1cIitlbmNvZGVVUklDb21wb25lbnQoYS5qKSxmdW5jdGlvbihhKXthP2EuZXJyb3I/ZChvZyhhKSk6YS5hY2Nlc3NfdG9rZW4mJmEucmVmcmVzaF90b2tlbj9jKGEpOmQobmV3IE8oXCJpbnRlcm5hbC1lcnJvclwiKSk6ZChuZXcgTyhcIm5ldHdvcmstcmVxdWVzdC1mYWlsZWRcIikpfSxcIlBPU1RcIixZZShiKS50b1N0cmluZygpLGEuT2QsYS5oZi5nZXQoKSk6ZChuZXcgTyhcImludGVybmFsLWVycm9yXCIpKX0pfSxxZz1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVRlKGEud2UrYik7SihmLFwia2V5XCIsYS5qKTtlJiZKKGYsXCJjYlwiLGthKCkudG9TdHJpbmcoKSk7dmFyIGc9XCJHRVRcIj09YztpZihnKWZvcih2YXIgayBpbiBkKWQuaGFzT3duUHJvcGVydHkoaykmJlxuSihmLGssZFtrXSk7cmV0dXJuIG5ldyBDKGZ1bmN0aW9uKGIsZSl7bmcoYSxmLnRvU3RyaW5nKCksZnVuY3Rpb24oYSl7YT9hLmVycm9yP2Uob2coYSkpOmIoYSk6ZShuZXcgTyhcIm5ldHdvcmstcmVxdWVzdC1mYWlsZWRcIikpfSxjLGc/dm9pZCAwOndjKHVmKGQpKSxhLnZkLGEueGUuZ2V0KCkpfSl9LHJnPWZ1bmN0aW9uKGEpe2lmKCFoYy50ZXN0KGEuZW1haWwpKXRocm93IG5ldyBPKFwiaW52YWxpZC1lbWFpbFwiKTt9LHNnPWZ1bmN0aW9uKGEpe1wiZW1haWxcImluIGEmJnJnKGEpfSx1Zz1mdW5jdGlvbihhLGIpe3ZhciBjPXJmKCk/JGUoKTpcImh0dHA6Ly9sb2NhbGhvc3RcIjtyZXR1cm4gUShhLHRnLHtpZGVudGlmaWVyOmIsY29udGludWVVcmk6Y30pLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIGEuYWxsUHJvdmlkZXJzfHxbXX0pfSx3Zz1mdW5jdGlvbihhKXtyZXR1cm4gUShhLHZnLHt9KS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBhLmF1dGhvcml6ZWREb21haW5zfHxbXX0pfSx4Zz1cbmZ1bmN0aW9uKGEpe2lmKCFhLmlkVG9rZW4pdGhyb3cgbmV3IE8oXCJpbnRlcm5hbC1lcnJvclwiKTt9O1IucHJvdG90eXBlLnNpZ25JbkFub255bW91c2x5PWZ1bmN0aW9uKCl7cmV0dXJuIFEodGhpcyx5Zyx7fSl9O1IucHJvdG90eXBlLnVwZGF0ZUVtYWlsPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFEodGhpcyx6Zyx7aWRUb2tlbjphLGVtYWlsOmJ9KX07Ui5wcm90b3R5cGUudXBkYXRlUGFzc3dvcmQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUSh0aGlzLCRmLHtpZFRva2VuOmEscGFzc3dvcmQ6Yn0pfTt2YXIgQWc9e2Rpc3BsYXlOYW1lOlwiRElTUExBWV9OQU1FXCIscGhvdG9Vcmw6XCJQSE9UT19VUkxcIn07XG5SLnByb3RvdHlwZS51cGRhdGVQcm9maWxlPWZ1bmN0aW9uKGEsYil7dmFyIGM9e2lkVG9rZW46YX0sZD1bXTtOYShBZyxmdW5jdGlvbihhLGYpe3ZhciBlPWJbZl07bnVsbD09PWU/ZC5wdXNoKGEpOmYgaW4gYiYmKGNbZl09ZSl9KTtkLmxlbmd0aCYmKGMuZGVsZXRlQXR0cmlidXRlPWQpO3JldHVybiBRKHRoaXMsemcsYyl9O1IucHJvdG90eXBlLnNlbmRQYXNzd29yZFJlc2V0RW1haWw9ZnVuY3Rpb24oYSl7cmV0dXJuIFEodGhpcyxCZyx7cmVxdWVzdFR5cGU6XCJQQVNTV09SRF9SRVNFVFwiLGVtYWlsOmF9KX07Ui5wcm90b3R5cGUuc2VuZEVtYWlsVmVyaWZpY2F0aW9uPWZ1bmN0aW9uKGEpe3JldHVybiBRKHRoaXMsQ2cse3JlcXVlc3RUeXBlOlwiVkVSSUZZX0VNQUlMXCIsaWRUb2tlbjphfSl9O1xudmFyIEVnPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUShhLERnLHtpZFRva2VuOmIsZGVsZXRlUHJvdmlkZXI6Y30pfSxGZz1mdW5jdGlvbihhKXtpZighYS5yZXF1ZXN0VXJpfHwhYS5zZXNzaW9uSWQmJiFhLnBvc3RCb2R5KXRocm93IG5ldyBPKFwiaW50ZXJuYWwtZXJyb3JcIik7fSxHZz1mdW5jdGlvbihhKXt2YXIgYj1udWxsO2EubmVlZENvbmZpcm1hdGlvbj8oYS5jb2RlPVwiYWNjb3VudC1leGlzdHMtd2l0aC1kaWZmZXJlbnQtY3JlZGVudGlhbFwiLGI9ZmcoYSkpOlwiRkVERVJBVEVEX1VTRVJfSURfQUxSRUFEWV9MSU5LRURcIj09YS5lcnJvck1lc3NhZ2U/KGEuY29kZT1cImNyZWRlbnRpYWwtYWxyZWFkeS1pbi11c2VcIixiPWZnKGEpKTpcIkVNQUlMX0VYSVNUU1wiPT1hLmVycm9yTWVzc2FnZSYmKGEuY29kZT1cImVtYWlsLWFscmVhZHktaW4tdXNlXCIsYj1mZyhhKSk7aWYoYil0aHJvdyBiO2lmKCFhLmlkVG9rZW4pdGhyb3cgbmV3IE8oXCJpbnRlcm5hbC1lcnJvclwiKTt9LFFmPWZ1bmN0aW9uKGEsXG5iKXtiLnJldHVybklkcENyZWRlbnRpYWw9ITA7cmV0dXJuIFEoYSxIZyxiKX0sU2Y9ZnVuY3Rpb24oYSxiKXtiLnJldHVybklkcENyZWRlbnRpYWw9ITA7cmV0dXJuIFEoYSxJZyxiKX0sSmc9ZnVuY3Rpb24oYSl7aWYoIWEub29iQ29kZSl0aHJvdyBuZXcgTyhcImludmFsaWQtYWN0aW9uLWNvZGVcIik7fTtSLnByb3RvdHlwZS5jb25maXJtUGFzc3dvcmRSZXNldD1mdW5jdGlvbihhLGIpe3JldHVybiBRKHRoaXMsS2cse29vYkNvZGU6YSxuZXdQYXNzd29yZDpifSl9O1IucHJvdG90eXBlLmNoZWNrQWN0aW9uQ29kZT1mdW5jdGlvbihhKXtyZXR1cm4gUSh0aGlzLExnLHtvb2JDb2RlOmF9KX07Ui5wcm90b3R5cGUuYXBwbHlBY3Rpb25Db2RlPWZ1bmN0aW9uKGEpe3JldHVybiBRKHRoaXMsTWcse29vYkNvZGU6YX0pfTtcbnZhciBNZz17ZW5kcG9pbnQ6XCJzZXRBY2NvdW50SW5mb1wiLEs6SmcsaWI6XCJlbWFpbFwifSxMZz17ZW5kcG9pbnQ6XCJyZXNldFBhc3N3b3JkXCIsSzpKZyx2YTpmdW5jdGlvbihhKXtpZighYS5lbWFpbHx8IWEucmVxdWVzdFR5cGUpdGhyb3cgbmV3IE8oXCJpbnRlcm5hbC1lcnJvclwiKTt9fSxOZz17ZW5kcG9pbnQ6XCJzaWdudXBOZXdVc2VyXCIsSzpmdW5jdGlvbihhKXtyZyhhKTtpZighYS5wYXNzd29yZCl0aHJvdyBuZXcgTyhcIndlYWstcGFzc3dvcmRcIik7fSx2YTp4Zyx3YTohMH0sdGc9e2VuZHBvaW50OlwiY3JlYXRlQXV0aFVyaVwifSxPZz17ZW5kcG9pbnQ6XCJkZWxldGVBY2NvdW50XCIsaGI6W1wiaWRUb2tlblwiXX0sRGc9e2VuZHBvaW50Olwic2V0QWNjb3VudEluZm9cIixoYjpbXCJpZFRva2VuXCIsXCJkZWxldGVQcm92aWRlclwiXSxLOmZ1bmN0aW9uKGEpe2lmKCFkYShhLmRlbGV0ZVByb3ZpZGVyKSl0aHJvdyBuZXcgTyhcImludGVybmFsLWVycm9yXCIpO319LFBnPXtlbmRwb2ludDpcImdldEFjY291bnRJbmZvXCJ9LFxuQ2c9e2VuZHBvaW50OlwiZ2V0T29iQ29uZmlybWF0aW9uQ29kZVwiLGhiOltcImlkVG9rZW5cIixcInJlcXVlc3RUeXBlXCJdLEs6ZnVuY3Rpb24oYSl7aWYoXCJWRVJJRllfRU1BSUxcIiE9YS5yZXF1ZXN0VHlwZSl0aHJvdyBuZXcgTyhcImludGVybmFsLWVycm9yXCIpO30saWI6XCJlbWFpbFwifSxCZz17ZW5kcG9pbnQ6XCJnZXRPb2JDb25maXJtYXRpb25Db2RlXCIsaGI6W1wicmVxdWVzdFR5cGVcIl0sSzpmdW5jdGlvbihhKXtpZihcIlBBU1NXT1JEX1JFU0VUXCIhPWEucmVxdWVzdFR5cGUpdGhyb3cgbmV3IE8oXCJpbnRlcm5hbC1lcnJvclwiKTtyZyhhKX0saWI6XCJlbWFpbFwifSx2Zz17bWU6ITAsZW5kcG9pbnQ6XCJnZXRQcm9qZWN0Q29uZmlnXCIsSWU6XCJHRVRcIn0sS2c9e2VuZHBvaW50OlwicmVzZXRQYXNzd29yZFwiLEs6SmcsaWI6XCJlbWFpbFwifSx6Zz17ZW5kcG9pbnQ6XCJzZXRBY2NvdW50SW5mb1wiLGhiOltcImlkVG9rZW5cIl0sSzpzZyx3YTohMH0sJGY9e2VuZHBvaW50Olwic2V0QWNjb3VudEluZm9cIixoYjpbXCJpZFRva2VuXCJdLFxuSzpmdW5jdGlvbihhKXtzZyhhKTtpZighYS5wYXNzd29yZCl0aHJvdyBuZXcgTyhcIndlYWstcGFzc3dvcmRcIik7fSx2YTp4Zyx3YTohMH0seWc9e2VuZHBvaW50Olwic2lnbnVwTmV3VXNlclwiLHZhOnhnLHdhOiEwfSxIZz17ZW5kcG9pbnQ6XCJ2ZXJpZnlBc3NlcnRpb25cIixLOkZnLHZhOkdnLHdhOiEwfSxJZz17ZW5kcG9pbnQ6XCJ2ZXJpZnlBc3NlcnRpb25cIixLOmZ1bmN0aW9uKGEpe0ZnKGEpO2lmKCFhLmlkVG9rZW4pdGhyb3cgbmV3IE8oXCJpbnRlcm5hbC1lcnJvclwiKTt9LHZhOkdnLHdhOiEwfSxRZz17ZW5kcG9pbnQ6XCJ2ZXJpZnlDdXN0b21Ub2tlblwiLEs6ZnVuY3Rpb24oYSl7aWYoIWEudG9rZW4pdGhyb3cgbmV3IE8oXCJpbnZhbGlkLWN1c3RvbS10b2tlblwiKTt9LHZhOnhnLHdhOiEwfSxaZj17ZW5kcG9pbnQ6XCJ2ZXJpZnlQYXNzd29yZFwiLEs6ZnVuY3Rpb24oYSl7cmcoYSk7aWYoIWEucGFzc3dvcmQpdGhyb3cgbmV3IE8oXCJ3cm9uZy1wYXNzd29yZFwiKTt9LHZhOnhnLHdhOiEwfSxRPVxuZnVuY3Rpb24oYSxiLGMpe2lmKCFFZihjLGIuaGIpKXJldHVybiBFKG5ldyBPKFwiaW50ZXJuYWwtZXJyb3JcIikpO3ZhciBkPWIuSWV8fFwiUE9TVFwiLGU7cmV0dXJuIEQoYykudGhlbihiLkspLnRoZW4oZnVuY3Rpb24oKXtiLndhJiYoYy5yZXR1cm5TZWN1cmVUb2tlbj0hMCk7cmV0dXJuIHFnKGEsYi5lbmRwb2ludCxkLGMsYi5tZXx8ITEpfSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gZT1hfSkudGhlbihiLnZhKS50aGVuKGZ1bmN0aW9uKCl7aWYoIWIuaWIpcmV0dXJuIGU7aWYoIShiLmliIGluIGUpKXRocm93IG5ldyBPKFwiaW50ZXJuYWwtZXJyb3JcIik7cmV0dXJuIGVbYi5pYl19KX0sb2c9ZnVuY3Rpb24oYSl7dmFyIGIsYztjPShhLmVycm9yJiZhLmVycm9yLmVycm9ycyYmYS5lcnJvci5lcnJvcnNbMF18fHt9KS5yZWFzb258fFwiXCI7dmFyIGQ9e2tleUludmFsaWQ6XCJpbnZhbGlkLWFwaS1rZXlcIixpcFJlZmVyZXJCbG9ja2VkOlwiYXBwLW5vdC1hdXRob3JpemVkXCJ9O2lmKGM9ZFtjXT9cbm5ldyBPKGRbY10pOm51bGwpcmV0dXJuIGM7Yz1hLmVycm9yJiZhLmVycm9yLm1lc3NhZ2V8fFwiXCI7ZD17SU5WQUxJRF9DVVNUT01fVE9LRU46XCJpbnZhbGlkLWN1c3RvbS10b2tlblwiLENSRURFTlRJQUxfTUlTTUFUQ0g6XCJjdXN0b20tdG9rZW4tbWlzbWF0Y2hcIixNSVNTSU5HX0NVU1RPTV9UT0tFTjpcImludGVybmFsLWVycm9yXCIsSU5WQUxJRF9JREVOVElGSUVSOlwiaW52YWxpZC1lbWFpbFwiLE1JU1NJTkdfQ09OVElOVUVfVVJJOlwiaW50ZXJuYWwtZXJyb3JcIixJTlZBTElEX0VNQUlMOlwiaW52YWxpZC1lbWFpbFwiLElOVkFMSURfUEFTU1dPUkQ6XCJ3cm9uZy1wYXNzd29yZFwiLFVTRVJfRElTQUJMRUQ6XCJ1c2VyLWRpc2FibGVkXCIsTUlTU0lOR19QQVNTV09SRDpcImludGVybmFsLWVycm9yXCIsRU1BSUxfRVhJU1RTOlwiZW1haWwtYWxyZWFkeS1pbi11c2VcIixQQVNTV09SRF9MT0dJTl9ESVNBQkxFRDpcIm9wZXJhdGlvbi1ub3QtYWxsb3dlZFwiLElOVkFMSURfSURQX1JFU1BPTlNFOlwiaW52YWxpZC1jcmVkZW50aWFsXCIsXG5GRURFUkFURURfVVNFUl9JRF9BTFJFQURZX0xJTktFRDpcImNyZWRlbnRpYWwtYWxyZWFkeS1pbi11c2VcIixJTlZBTElEX01FU1NBR0VfUEFZTE9BRDpcImludmFsaWQtbWVzc2FnZS1wYXlsb2FkXCIsSU5WQUxJRF9SRUNJUElFTlRfRU1BSUw6XCJpbnZhbGlkLXJlY2lwaWVudC1lbWFpbFwiLElOVkFMSURfU0VOREVSOlwiaW52YWxpZC1zZW5kZXJcIixFTUFJTF9OT1RfRk9VTkQ6XCJ1c2VyLW5vdC1mb3VuZFwiLEVYUElSRURfT09CX0NPREU6XCJleHBpcmVkLWFjdGlvbi1jb2RlXCIsSU5WQUxJRF9PT0JfQ09ERTpcImludmFsaWQtYWN0aW9uLWNvZGVcIixNSVNTSU5HX09PQl9DT0RFOlwiaW50ZXJuYWwtZXJyb3JcIixDUkVERU5USUFMX1RPT19PTERfTE9HSU5fQUdBSU46XCJyZXF1aXJlcy1yZWNlbnQtbG9naW5cIixJTlZBTElEX0lEX1RPS0VOOlwiaW52YWxpZC11c2VyLXRva2VuXCIsVE9LRU5fRVhQSVJFRDpcInVzZXItdG9rZW4tZXhwaXJlZFwiLFVTRVJfTk9UX0ZPVU5EOlwidXNlci10b2tlbi1leHBpcmVkXCIsXG5DT1JTX1VOU1VQUE9SVEVEOlwiY29ycy11bnN1cHBvcnRlZFwiLERZTkFNSUNfTElOS19OT1RfQUNUSVZBVEVEOlwiZHluYW1pYy1saW5rLW5vdC1hY3RpdmF0ZWRcIixUT09fTUFOWV9BVFRFTVBUU19UUllfTEFURVI6XCJ0b28tbWFueS1yZXF1ZXN0c1wiLFdFQUtfUEFTU1dPUkQ6XCJ3ZWFrLXBhc3N3b3JkXCIsT1BFUkFUSU9OX05PVF9BTExPV0VEOlwib3BlcmF0aW9uLW5vdC1hbGxvd2VkXCIsVVNFUl9DQU5DRUxMRUQ6XCJ1c2VyLWNhbmNlbGxlZFwifTtiPShiPWMubWF0Y2goL15bXlxcc10rXFxzKjpcXHMqKC4qKSQvKSkmJjE8Yi5sZW5ndGg/YlsxXTp2b2lkIDA7Zm9yKHZhciBlIGluIGQpaWYoMD09PWMuaW5kZXhPZihlKSlyZXR1cm4gbmV3IE8oZFtlXSxiKTshYiYmYSYmKGI9dGYoYSkpO3JldHVybiBuZXcgTyhcImludGVybmFsLWVycm9yXCIsYil9O3ZhciBSZz1mdW5jdGlvbihhKXt0aGlzLlY9YX07UmcucHJvdG90eXBlLnZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuVn07UmcucHJvdG90eXBlLlJkPWZ1bmN0aW9uKGEpe3RoaXMuVi5zdHlsZT1hO3JldHVybiB0aGlzfTt2YXIgU2c9ZnVuY3Rpb24oYSl7dGhpcy5WPWF8fHt9fTtTZy5wcm90b3R5cGUudmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5WfTtTZy5wcm90b3R5cGUuUmQ9ZnVuY3Rpb24oYSl7dGhpcy5WLnN0eWxlPWE7cmV0dXJuIHRoaXN9O3ZhciBVZz1mdW5jdGlvbihhKXt0aGlzLndmPWE7dGhpcy5hYz1udWxsO3RoaXMuVWM9VGcodGhpcyl9LFZnPWZ1bmN0aW9uKGEpe3ZhciBiPW5ldyBTZztiLlYud2hlcmU9ZG9jdW1lbnQuYm9keTtiLlYudXJsPWEud2Y7Yi5WLm1lc3NhZ2VIYW5kbGVyc0ZpbHRlcj1NKFwiZ2FwaS5pZnJhbWVzLkNST1NTX09SSUdJTl9JRlJBTUVTX0ZJTFRFUlwiKTtiLlYuYXR0cmlidXRlcz1iLlYuYXR0cmlidXRlc3x8e307KG5ldyBSZyhiLlYuYXR0cmlidXRlcykpLlJkKHtwb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiLTEwMHB4XCIsd2lkdGg6XCIxcHhcIixoZWlnaHQ6XCIxcHhcIn0pO2IuVi5kb250Y2xlYXI9ITA7cmV0dXJuIGJ9LFRnPWZ1bmN0aW9uKGEpe3JldHVybiBXZygpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEMoZnVuY3Rpb24oYixjKXtNKFwiZ2FwaS5pZnJhbWVzLmdldENvbnRleHRcIikoKS5vcGVuKFZnKGEpLnZhbHVlKCksZnVuY3Rpb24oZCl7YS5hYz1kO2EuYWMucmVzdHlsZSh7c2V0SGlkZU9uTGVhdmU6ITF9KTtcbnZhciBlPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtjKEVycm9yKFwiTmV0d29yayBFcnJvclwiKSl9LFhnLmdldCgpKSxmPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGUpO2IoKX07ZC5waW5nKGYpLnRoZW4oZixmdW5jdGlvbigpe2MoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKX0pfSl9KX0pfTtVZy5wcm90b3R5cGUuc2VuZE1lc3NhZ2U9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gdGhpcy5VYy50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBDKGZ1bmN0aW9uKGMpe2IuYWMuc2VuZChhLnR5cGUsYSxjLE0oXCJnYXBpLmlmcmFtZXMuQ1JPU1NfT1JJR0lOX0lGUkFNRVNfRklMVEVSXCIpKX0pfSl9O1xudmFyIFlnPWZ1bmN0aW9uKGEsYil7YS5VYy50aGVuKGZ1bmN0aW9uKCl7YS5hYy5yZWdpc3RlcihcImF1dGhFdmVudFwiLGIsTShcImdhcGkuaWZyYW1lcy5DUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVJcIikpfSl9LFpnPW5ldyB6ZigzRTMsMTVFMyksWGc9bmV3IHpmKDVFMywxNUUzKSxXZz1mdW5jdGlvbigpe3JldHVybiBuZXcgQyhmdW5jdGlvbihhLGIpe2lmKHlmKCkpe3ZhciBjPWZ1bmN0aW9uKCl7eGYoKTtNKFwiZ2FwaS5sb2FkXCIpKFwiZ2FwaS5pZnJhbWVzXCIse2NhbGxiYWNrOmEsb250aW1lb3V0OmZ1bmN0aW9uKCl7eGYoKTtiKEVycm9yKFwiTmV0d29yayBFcnJvclwiKSl9LHRpbWVvdXQ6WmcuZ2V0KCl9KX07aWYoTShcImdhcGkuaWZyYW1lcy5JZnJhbWVcIikpYSgpO2Vsc2UgaWYoTShcImdhcGkubG9hZFwiKSljKCk7ZWxzZXt2YXIgZD1cIl9faWZyYW1lZmNiXCIrTWF0aC5mbG9vcigxRTYqTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoKTtsW2RdPWZ1bmN0aW9uKCl7TShcImdhcGkubG9hZFwiKT9cbmMoKTpiKEVycm9yKFwiTmV0d29yayBFcnJvclwiKSl9O0QoRWQoXCJodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanM/b25sb2FkPVwiK2QpKS5jKGZ1bmN0aW9uKCl7YihFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpfSl9fWVsc2UgYihFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpfSl9O3ZhciAkZz1mdW5jdGlvbihhLGIsYyl7dGhpcy52PWE7dGhpcy5qPWI7dGhpcy5CPWM7dGhpcy5LYT1udWxsO3RoaXMuTWI9VWUodGhpcy52LFwiL19fL2F1dGgvaWZyYW1lXCIpO0oodGhpcy5NYixcImFwaUtleVwiLHRoaXMuaik7Sih0aGlzLk1iLFwiYXBwTmFtZVwiLHRoaXMuQil9OyRnLnByb3RvdHlwZS5zZXRWZXJzaW9uPWZ1bmN0aW9uKGEpe3RoaXMuS2E9YTtyZXR1cm4gdGhpc307JGcucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7dGhpcy5LYT9KKHRoaXMuTWIsXCJ2XCIsdGhpcy5LYSk6U2UodGhpcy5NYixcInZcIik7cmV0dXJuIHRoaXMuTWIudG9TdHJpbmcoKX07dmFyIGFoPWZ1bmN0aW9uKGEsYixjLGQsZSl7dGhpcy52PWE7dGhpcy5qPWI7dGhpcy5CPWM7dGhpcy5sZT1kO3RoaXMuS2E9dGhpcy5GPXRoaXMuYWQ9bnVsbDt0aGlzLmtjPWV9O2FoLnByb3RvdHlwZS5zZXRWZXJzaW9uPWZ1bmN0aW9uKGEpe3RoaXMuS2E9YTtyZXR1cm4gdGhpc307XG5haC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXt2YXIgYT1VZSh0aGlzLnYsXCIvX18vYXV0aC9oYW5kbGVyXCIpO0ooYSxcImFwaUtleVwiLHRoaXMuaik7SihhLFwiYXBwTmFtZVwiLHRoaXMuQik7SihhLFwiYXV0aFR5cGVcIix0aGlzLmxlKTtpZih0aGlzLmtjLmlzT0F1dGhQcm92aWRlcil7SihhLFwicHJvdmlkZXJJZFwiLHRoaXMua2MucHJvdmlkZXJJZCk7dmFyIGI9dGhpcy5rYy5DZSgpO2ImJmIubGVuZ3RoJiZKKGEsXCJzY29wZXNcIixiLmpvaW4oXCIsXCIpKTtiPXRoaXMua2MuQmUoKTtRYShiKXx8SihhLFwiY3VzdG9tUGFyYW1ldGVyc1wiLHRmKGIpKX10aGlzLmFkP0ooYSxcInJlZGlyZWN0VXJsXCIsdGhpcy5hZCk6U2UoYSxcInJlZGlyZWN0VXJsXCIpO3RoaXMuRj9KKGEsXCJldmVudElkXCIsdGhpcy5GKTpTZShhLFwiZXZlbnRJZFwiKTt0aGlzLkthP0ooYSxcInZcIix0aGlzLkthKTpTZShhLFwidlwiKTtpZih0aGlzLk5iKWZvcih2YXIgYyBpbiB0aGlzLk5iKXRoaXMuTmIuaGFzT3duUHJvcGVydHkoYykmJlxuIVJlKGEsYykmJkooYSxjLHRoaXMuTmJbY10pO3JldHVybiBhLnRvU3RyaW5nKCl9O1xudmFyIGJoPWZ1bmN0aW9uKGEsYixjLGQpe3RoaXMudj1hO3RoaXMuaj1iO3RoaXMuQj1jO3RoaXMuemU9KHRoaXMuemE9ZHx8bnVsbCk/cGYodGhpcy56YSk6bnVsbDtkPXRoaXMuemE7dGhpcy5KZT0obmV3ICRnKGEsYixjKSkuc2V0VmVyc2lvbihkKS50b1N0cmluZygpO3RoaXMuaWE9W107dGhpcy5nPW5ldyBSKGIsbnVsbCx0aGlzLnplKTt0aGlzLmRjPXRoaXMucmE9bnVsbH0sY2g9ZnVuY3Rpb24oYSl7dmFyIGI9JGUoKTtyZXR1cm4gd2coYSkudGhlbihmdW5jdGlvbihhKXthOntmb3IodmFyIGM9VGUoYiksZT1jLmRhLGM9Yy4kLGY9MDtmPGEubGVuZ3RoO2YrKyl7dmFyIGc7dmFyIGs9YVtmXTtnPWM7dmFyIG49ZTswPT1rLmluZGV4T2YoXCJjaHJvbWUtZXh0ZW5zaW9uOi8vXCIpP2c9VGUoaykuJD09ZyYmXCJjaHJvbWUtZXh0ZW5zaW9uXCI9PW46XCJodHRwXCIhPW4mJlwiaHR0cHNcIiE9bj9nPSExOmpmLnRlc3Qoayk/Zz1nPT1rOihrPWsuc3BsaXQoXCIuXCIpLmpvaW4oXCJcXFxcLlwiKSxnPShuZXcgUmVnRXhwKFwiXiguK1xcXFwuXCIrXG5rK1wifFwiK2srXCIpJFwiLFwiaVwiKSkudGVzdChnKSk7aWYoZyl7YT0hMDticmVhayBhfX1hPSExfWlmKCFhKXRocm93IG5ldyBOZigkZSgpKTt9KX07aD1iaC5wcm90b3R5cGU7aC52Yj1mdW5jdGlvbigpe2lmKHRoaXMuZGMpcmV0dXJuIHRoaXMuZGM7dmFyIGE9dGhpcztyZXR1cm4gdGhpcy5kYz1rZigpLnRoZW4oZnVuY3Rpb24oKXthLiRiPW5ldyBVZyhhLkplKTtkaChhKX0pfTtoLkhiPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1uZXcgTyhcInBvcHVwLWNsb3NlZC1ieS11c2VyXCIpLGU9bmV3IE8oXCJ3ZWItc3RvcmFnZS11bnN1cHBvcnRlZFwiKSxmPXRoaXMsZz0hMTtyZXR1cm4gdGhpcy5EYSgpLnRoZW4oZnVuY3Rpb24oKXtlaChmKS50aGVuKGZ1bmN0aW9uKGMpe2N8fChhJiZmZihhKSxiKGUpLGc9ITApfSl9KS5jKGZ1bmN0aW9uKCl7fSkudGhlbihmdW5jdGlvbigpe2lmKCFnKXJldHVybiBoZihhKX0pLnRoZW4oZnVuY3Rpb24oKXtpZighZylyZXR1cm4gbWUoYykudGhlbihmdW5jdGlvbigpe2IoZCl9KX0pfTtcbmguU2Q9ZnVuY3Rpb24oKXt2YXIgYT1LKCk7cmV0dXJuIXNmKGEpJiYhd2YoYSl9O2guemQ9ZnVuY3Rpb24oKXtyZXR1cm4hMX07aC5DYj1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXtpZighYSlyZXR1cm4gRShuZXcgTyhcInBvcHVwLWJsb2NrZWRcIikpO2lmKGcpcmV0dXJuIHRoaXMuRGEoKS5jKGZ1bmN0aW9uKGIpe2ZmKGEpO2UoYil9KSxkKCksRCgpO3RoaXMucmF8fCh0aGlzLnJhPWNoKHRoaXMuZykpO3ZhciBrPXRoaXM7cmV0dXJuIHRoaXMucmEudGhlbihmdW5jdGlvbigpe3ZhciBiPWsuRGEoKS5jKGZ1bmN0aW9uKGIpe2ZmKGEpO2UoYik7dGhyb3cgYjt9KTtkKCk7cmV0dXJuIGJ9KS50aGVuKGZ1bmN0aW9uKCl7ZGcoYyk7dmFyIGQ9Zmgoay52LGsuaixrLkIsYixjLG51bGwsZixrLnphKTthZihkLGEpfSkuYyhmdW5jdGlvbihhKXtcImF1dGgvbmV0d29yay1yZXF1ZXN0LWZhaWxlZFwiPT1hLmNvZGUmJihrLnJhPW51bGwpO3Rocm93IGE7fSl9O1xuaC5EYj1mdW5jdGlvbihhLGIsYyl7dGhpcy5yYXx8KHRoaXMucmE9Y2godGhpcy5nKSk7dmFyIGQ9dGhpcztyZXR1cm4gdGhpcy5yYS50aGVuKGZ1bmN0aW9uKCl7ZGcoYik7dmFyIGU9ZmgoZC52LGQuaixkLkIsYSxiLCRlKCksYyxkLnphKTthZihlKX0pfTtoLkRhPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm4gdGhpcy52YigpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS4kYi5VY30pLmMoZnVuY3Rpb24oKXthLnJhPW51bGw7dGhyb3cgbmV3IE8oXCJuZXR3b3JrLXJlcXVlc3QtZmFpbGVkXCIpO30pfTtoLldkPWZ1bmN0aW9uKCl7cmV0dXJuITB9O1xudmFyIGZoPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcsayxuKXthPW5ldyBhaChhLGIsYyxkLGUpO2EuYWQ9ZjthLkY9ZztmPWEuc2V0VmVyc2lvbihrKTtmLk5iPVNhKG58fG51bGwpO3JldHVybiBmLnRvU3RyaW5nKCl9LGRoPWZ1bmN0aW9uKGEpe2lmKCFhLiRiKXRocm93IEVycm9yKFwiSWZjSGFuZGxlciBtdXN0IGJlIGluaXRpYWxpemVkIVwiKTtZZyhhLiRiLGZ1bmN0aW9uKGIpe3ZhciBjPXt9O2lmKGImJmIuYXV0aEV2ZW50KXt2YXIgZD0hMTtiPU1mKGIuYXV0aEV2ZW50KTtmb3IoYz0wO2M8YS5pYS5sZW5ndGg7YysrKWQ9YS5pYVtjXShiKXx8ZDtjPXt9O2Muc3RhdHVzPWQ/XCJBQ0tcIjpcIkVSUk9SXCI7cmV0dXJuIEQoYyl9Yy5zdGF0dXM9XCJFUlJPUlwiO3JldHVybiBEKGMpfSl9LGVoPWZ1bmN0aW9uKGEpe3ZhciBiPXt0eXBlOlwid2ViU3RvcmFnZVN1cHBvcnRcIn07cmV0dXJuIGEudmIoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGEuJGIuc2VuZE1lc3NhZ2UoYil9KS50aGVuKGZ1bmN0aW9uKGEpe2lmKGEmJlxuYS5sZW5ndGgmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgYVswXS53ZWJTdG9yYWdlU3VwcG9ydClyZXR1cm4gYVswXS53ZWJTdG9yYWdlU3VwcG9ydDt0aHJvdyBFcnJvcigpO30pfTtiaC5wcm90b3R5cGUuTWE9ZnVuY3Rpb24oYSl7dGhpcy5pYS5wdXNoKGEpfTtiaC5wcm90b3R5cGUuR2I9ZnVuY3Rpb24oYSl7S2EodGhpcy5pYSxmdW5jdGlvbihiKXtyZXR1cm4gYj09YX0pfTt2YXIgZ2g9ZnVuY3Rpb24oYSl7dGhpcy5BPWF8fGZpcmViYXNlLklOVEVSTkFMLnJlYWN0TmF0aXZlJiZmaXJlYmFzZS5JTlRFUk5BTC5yZWFjdE5hdGl2ZS5Bc3luY1N0b3JhZ2U7aWYoIXRoaXMuQSl0aHJvdyBuZXcgTyhcImludGVybmFsLWVycm9yXCIsXCJUaGUgUmVhY3QgTmF0aXZlIGNvbXBhdGliaWxpdHkgbGlicmFyeSB3YXMgbm90IGZvdW5kLlwiKTt9O2g9Z2gucHJvdG90eXBlO2guZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBEKHRoaXMuQS5nZXRJdGVtKGEpKS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBhJiZ2ZihhKX0pfTtoLnNldD1mdW5jdGlvbihhLGIpe3JldHVybiBEKHRoaXMuQS5zZXRJdGVtKGEsdGYoYikpKX07aC5yZW1vdmU9ZnVuY3Rpb24oYSl7cmV0dXJuIEQodGhpcy5BLnJlbW92ZUl0ZW0oYSkpfTtoLk5hPWZ1bmN0aW9uKCl7fTtoLmZiPWZ1bmN0aW9uKCl7fTt2YXIgaGg9ZnVuY3Rpb24oKXt0aGlzLkE9e319O2g9aGgucHJvdG90eXBlO2guZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBEKHRoaXMuQVthXSl9O2guc2V0PWZ1bmN0aW9uKGEsYil7dGhpcy5BW2FdPWI7cmV0dXJuIEQoKX07aC5yZW1vdmU9ZnVuY3Rpb24oYSl7ZGVsZXRlIHRoaXMuQVthXTtyZXR1cm4gRCgpfTtoLk5hPWZ1bmN0aW9uKCl7fTtoLmZiPWZ1bmN0aW9uKCl7fTt2YXIgamg9ZnVuY3Rpb24oKXtpZighaWgoKSl7aWYoXCJOb2RlXCI9PUwoKSl0aHJvdyBuZXcgTyhcImludGVybmFsLWVycm9yXCIsXCJUaGUgTG9jYWxTdG9yYWdlIGNvbXBhdGliaWxpdHkgbGlicmFyeSB3YXMgbm90IGZvdW5kLlwiKTt0aHJvdyBuZXcgTyhcIndlYi1zdG9yYWdlLXVuc3VwcG9ydGVkXCIpO310aGlzLkE9bC5sb2NhbFN0b3JhZ2V8fGZpcmViYXNlLklOVEVSTkFMLm5vZGUubG9jYWxTdG9yYWdlfSxpaD1mdW5jdGlvbigpe3ZhciBhPVwiTm9kZVwiPT1MKCksYT1sLmxvY2FsU3RvcmFnZXx8YSYmZmlyZWJhc2UuSU5URVJOQUwubm9kZSYmZmlyZWJhc2UuSU5URVJOQUwubm9kZS5sb2NhbFN0b3JhZ2U7aWYoIWEpcmV0dXJuITE7dHJ5e3JldHVybiBhLnNldEl0ZW0oXCJfX3Nha1wiLFwiMVwiKSxhLnJlbW92ZUl0ZW0oXCJfX3Nha1wiKSwhMH1jYXRjaChiKXtyZXR1cm4hMX19O2g9amgucHJvdG90eXBlO1xuaC5nZXQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gRCgpLnRoZW4oZnVuY3Rpb24oKXt2YXIgYz1iLkEuZ2V0SXRlbShhKTtyZXR1cm4gdmYoYyl9KX07aC5zZXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBEKCkudGhlbihmdW5jdGlvbigpe3ZhciBkPXRmKGIpO251bGw9PT1kP2MucmVtb3ZlKGEpOmMuQS5zZXRJdGVtKGEsZCl9KX07aC5yZW1vdmU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gRCgpLnRoZW4oZnVuY3Rpb24oKXtiLkEucmVtb3ZlSXRlbShhKX0pfTtoLk5hPWZ1bmN0aW9uKGEpe2wud2luZG93JiZVYihsLndpbmRvdyxcInN0b3JhZ2VcIixhKX07aC5mYj1mdW5jdGlvbihhKXtsLndpbmRvdyYmY2MobC53aW5kb3csXCJzdG9yYWdlXCIsYSl9O3ZhciBraD1mdW5jdGlvbigpe3RoaXMuQT17fX07aD1raC5wcm90b3R5cGU7aC5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gRChudWxsKX07aC5zZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gRCgpfTtoLnJlbW92ZT1mdW5jdGlvbigpe3JldHVybiBEKCl9O2guTmE9ZnVuY3Rpb24oKXt9O2guZmI9ZnVuY3Rpb24oKXt9O3ZhciBtaD1mdW5jdGlvbigpe2lmKCFsaCgpKXtpZihcIk5vZGVcIj09TCgpKXRocm93IG5ldyBPKFwiaW50ZXJuYWwtZXJyb3JcIixcIlRoZSBTZXNzaW9uU3RvcmFnZSBjb21wYXRpYmlsaXR5IGxpYnJhcnkgd2FzIG5vdCBmb3VuZC5cIik7dGhyb3cgbmV3IE8oXCJ3ZWItc3RvcmFnZS11bnN1cHBvcnRlZFwiKTt9dGhpcy5BPWwuc2Vzc2lvblN0b3JhZ2V8fGZpcmViYXNlLklOVEVSTkFMLm5vZGUuc2Vzc2lvblN0b3JhZ2V9LGxoPWZ1bmN0aW9uKCl7dmFyIGE9XCJOb2RlXCI9PUwoKSxhPWwuc2Vzc2lvblN0b3JhZ2V8fGEmJmZpcmViYXNlLklOVEVSTkFMLm5vZGUmJmZpcmViYXNlLklOVEVSTkFMLm5vZGUuc2Vzc2lvblN0b3JhZ2U7aWYoIWEpcmV0dXJuITE7dHJ5e3JldHVybiBhLnNldEl0ZW0oXCJfX3Nha1wiLFwiMVwiKSxhLnJlbW92ZUl0ZW0oXCJfX3Nha1wiKSwhMH1jYXRjaChiKXtyZXR1cm4hMX19O2g9bWgucHJvdG90eXBlO1xuaC5nZXQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gRCgpLnRoZW4oZnVuY3Rpb24oKXt2YXIgYz1iLkEuZ2V0SXRlbShhKTtyZXR1cm4gdmYoYyl9KX07aC5zZXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBEKCkudGhlbihmdW5jdGlvbigpe3ZhciBkPXRmKGIpO251bGw9PT1kP2MucmVtb3ZlKGEpOmMuQS5zZXRJdGVtKGEsZCl9KX07aC5yZW1vdmU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gRCgpLnRoZW4oZnVuY3Rpb24oKXtiLkEucmVtb3ZlSXRlbShhKX0pfTtoLk5hPWZ1bmN0aW9uKCl7fTtoLmZiPWZ1bmN0aW9uKCl7fTt2YXIgbmg9ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe2lmKCF3aW5kb3cuaW5kZXhlZERCKXRocm93IG5ldyBPKFwid2ViLXN0b3JhZ2UtdW5zdXBwb3J0ZWRcIik7dGhpcy5wZT1hO3RoaXMuVGM9Yjt0aGlzLkdjPWM7dGhpcy4kZD1kO3RoaXMubmI9ZTt0aGlzLlQ9e307dGhpcy5JYj1bXTt0aGlzLnliPTA7dGhpcy5LZT1mfHxsLmluZGV4ZWREQn0sb2gscGg9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBDKGZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5LZS5vcGVuKGEucGUsYS5uYik7ZC5vbmVycm9yPWZ1bmN0aW9uKGEpe2MoRXJyb3IoYS50YXJnZXQuZXJyb3JDb2RlKSl9O2Qub251cGdyYWRlbmVlZGVkPWZ1bmN0aW9uKGIpe2I9Yi50YXJnZXQucmVzdWx0O3RyeXtiLmNyZWF0ZU9iamVjdFN0b3JlKGEuVGMse2tleVBhdGg6YS5HY30pfWNhdGNoKGYpe2MoZil9fTtkLm9uc3VjY2Vzcz1mdW5jdGlvbihhKXtiKGEudGFyZ2V0LnJlc3VsdCl9fSl9LHFoPWZ1bmN0aW9uKGEpe2EuQ2R8fChhLkNkPVxucGgoYSkpO3JldHVybiBhLkNkfSxyaD1mdW5jdGlvbihhLGIpe3JldHVybiBiLm9iamVjdFN0b3JlKGEuVGMpfSxzaD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGIudHJhbnNhY3Rpb24oW2EuVGNdLGM/XCJyZWFkd3JpdGVcIjpcInJlYWRvbmx5XCIpfSx0aD1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IEMoZnVuY3Rpb24oYixjKXthLm9uc3VjY2Vzcz1mdW5jdGlvbihhKXthJiZhLnRhcmdldD9iKGEudGFyZ2V0LnJlc3VsdCk6YigpfTthLm9uZXJyb3I9ZnVuY3Rpb24oYSl7YyhFcnJvcihhLnRhcmdldC5lcnJvckNvZGUpKX19KX07aD1uaC5wcm90b3R5cGU7XG5oLnNldD1mdW5jdGlvbihhLGIpe3ZhciBjPSExLGQsZT10aGlzO3JldHVybiBuZChxaCh0aGlzKS50aGVuKGZ1bmN0aW9uKGIpe2Q9YjtiPXJoKGUsc2goZSxkLCEwKSk7cmV0dXJuIHRoKGIuZ2V0KGEpKX0pLnRoZW4oZnVuY3Rpb24oZil7dmFyIGc9cmgoZSxzaChlLGQsITApKTtpZihmKXJldHVybiBmLnZhbHVlPWIsdGgoZy5wdXQoZikpO2UueWIrKztjPSEwO2Y9e307ZltlLkdjXT1hO2ZbZS4kZF09YjtyZXR1cm4gdGgoZy5hZGQoZikpfSkudGhlbihmdW5jdGlvbigpe2UuVFthXT1ifSksZnVuY3Rpb24oKXtjJiZlLnliLS19KX07aC5nZXQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gcWgodGhpcykudGhlbihmdW5jdGlvbihjKXtyZXR1cm4gdGgocmgoYixzaChiLGMsITEpKS5nZXQoYSkpfSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gYSYmYS52YWx1ZX0pfTtcbmgucmVtb3ZlPWZ1bmN0aW9uKGEpe3ZhciBiPSExLGM9dGhpcztyZXR1cm4gbmQocWgodGhpcykudGhlbihmdW5jdGlvbihkKXtiPSEwO2MueWIrKztyZXR1cm4gdGgocmgoYyxzaChjLGQsITApKVtcImRlbGV0ZVwiXShhKSl9KS50aGVuKGZ1bmN0aW9uKCl7ZGVsZXRlIGMuVFthXX0pLGZ1bmN0aW9uKCl7YiYmYy55Yi0tfSl9O1xuaC5uZj1mdW5jdGlvbigpe3ZhciBhPXRoaXM7cmV0dXJuIHFoKHRoaXMpLnRoZW4oZnVuY3Rpb24oYil7dmFyIGM9cmgoYSxzaChhLGIsITEpKTtyZXR1cm4gYy5nZXRBbGw/dGgoYy5nZXRBbGwoKSk6bmV3IEMoZnVuY3Rpb24oYSxiKXt2YXIgZD1bXSxlPWMub3BlbkN1cnNvcigpO2Uub25zdWNjZXNzPWZ1bmN0aW9uKGIpeyhiPWIudGFyZ2V0LnJlc3VsdCk/KGQucHVzaChiLnZhbHVlKSxiW1wiY29udGludWVcIl0oKSk6YShkKX07ZS5vbmVycm9yPWZ1bmN0aW9uKGEpe2IoRXJyb3IoYS50YXJnZXQuZXJyb3JDb2RlKSl9fSl9KS50aGVuKGZ1bmN0aW9uKGIpe3ZhciBjPXt9LGQ9W107aWYoMD09YS55Yil7Zm9yKGQ9MDtkPGIubGVuZ3RoO2QrKyljW2JbZF1bYS5HY11dPWJbZF1bYS4kZF07ZD1iZihhLlQsYyk7YS5UPWN9cmV0dXJuIGR9KX07aC5OYT1mdW5jdGlvbihhKXswPT10aGlzLkliLmxlbmd0aCYmdGhpcy5nZCgpO3RoaXMuSWIucHVzaChhKX07XG5oLmZiPWZ1bmN0aW9uKGEpe0thKHRoaXMuSWIsZnVuY3Rpb24oYil7cmV0dXJuIGI9PWF9KTswPT10aGlzLkliLmxlbmd0aCYmdGhpcy5yYygpfTtoLmdkPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczt0aGlzLnJjKCk7dmFyIGI9ZnVuY3Rpb24oKXthLlhjPW1lKDgwMCkudGhlbihyKGEubmYsYSkpLnRoZW4oZnVuY3Rpb24oYil7MDxiLmxlbmd0aCYmeChhLkliLGZ1bmN0aW9uKGEpe2EoYil9KX0pLnRoZW4oYikuYyhmdW5jdGlvbihhKXtcIlNUT1BfRVZFTlRcIiE9YS5tZXNzYWdlJiZiKCl9KTtyZXR1cm4gYS5YY307YigpfTtoLnJjPWZ1bmN0aW9uKCl7dGhpcy5YYyYmdGhpcy5YYy5jYW5jZWwoXCJTVE9QX0VWRU5UXCIpfTt2YXIgeGg9ZnVuY3Rpb24oKXt0aGlzLnNkPXtCcm93c2VyOnVoLE5vZGU6dmgsUmVhY3ROYXRpdmU6d2h9W0woKV19LHloLHVoPXtJOmpoLGpkOm1ofSx2aD17STpqaCxqZDptaH0sd2g9e0k6Z2gsamQ6a2h9O3ZhciB6aD1mdW5jdGlvbihhKXt2YXIgYj17fSxjPWEuZW1haWwsZD1hLm5ld0VtYWlsO2E9YS5yZXF1ZXN0VHlwZTtpZighY3x8IWEpdGhyb3cgRXJyb3IoXCJJbnZhbGlkIHByb3ZpZGVyIHVzZXIgaW5mbyFcIik7Yi5mcm9tRW1haWw9ZHx8bnVsbDtiLmVtYWlsPWM7Tih0aGlzLFwib3BlcmF0aW9uXCIsYSk7Tih0aGlzLFwiZGF0YVwiLEZmKGIpKX07dmFyIEFoPVwiRmlyc3QgU2Vjb25kIFRoaXJkIEZvdXJ0aCBGaWZ0aCBTaXh0aCBTZXZlbnRoIEVpZ2h0aCBOaW50aFwiLnNwbGl0KFwiIFwiKSxTPWZ1bmN0aW9uKGEsYil7cmV0dXJue25hbWU6YXx8XCJcIixmYTpcImEgdmFsaWQgc3RyaW5nXCIsb3B0aW9uYWw6ISFiLGhhOnB9fSxUPWZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmF8fFwiXCIsZmE6XCJhIHZhbGlkIG9iamVjdFwiLG9wdGlvbmFsOiExLGhhOmdhfX0sQmg9ZnVuY3Rpb24oYSxiKXtyZXR1cm57bmFtZTphfHxcIlwiLGZhOlwiYSBmdW5jdGlvblwiLG9wdGlvbmFsOiEhYixoYTpxfX0sQ2g9ZnVuY3Rpb24oKXtyZXR1cm57bmFtZTpcIlwiLGZhOlwibnVsbFwiLG9wdGlvbmFsOiExLGhhOmNhfX0sRGg9ZnVuY3Rpb24oKXtyZXR1cm57bmFtZTpcImNyZWRlbnRpYWxcIixmYTpcImEgdmFsaWQgY3JlZGVudGlhbFwiLG9wdGlvbmFsOiExLGhhOmZ1bmN0aW9uKGEpe3JldHVybiEoIWF8fCFhLlViKX19fSxFaD1mdW5jdGlvbigpe3JldHVybntuYW1lOlwiYXV0aFByb3ZpZGVyXCIsXG5mYTpcImEgdmFsaWQgQXV0aCBwcm92aWRlclwiLG9wdGlvbmFsOiExLGhhOmZ1bmN0aW9uKGEpe3JldHVybiEhKGEmJmEucHJvdmlkZXJJZCYmYS5oYXNPd25Qcm9wZXJ0eSYmYS5oYXNPd25Qcm9wZXJ0eShcImlzT0F1dGhQcm92aWRlclwiKSl9fX0sRmg9ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJue25hbWU6Y3x8XCJcIixmYTphLmZhK1wiIG9yIFwiK2IuZmEsb3B0aW9uYWw6ISFkLGhhOmZ1bmN0aW9uKGMpe3JldHVybiBhLmhhKGMpfHxiLmhhKGMpfX19O3ZhciBIaD1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYyBpbiBiKXt2YXIgZD1iW2NdLm5hbWU7YVtkXT1HaChkLGFbY10sYltjXS5hKX19LFU9ZnVuY3Rpb24oYSxiLGMsZCl7YVtiXT1HaChiLGMsZCl9LEdoPWZ1bmN0aW9uKGEsYixjKXtpZighYylyZXR1cm4gYjt2YXIgZD1JaChhKTthPWZ1bmN0aW9uKCl7dmFyIGE9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxlO2E6e2U9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSk7dmFyIGs7az0wO2Zvcih2YXIgbj0hMSx5PTA7eTxjLmxlbmd0aDt5KyspaWYoY1t5XS5vcHRpb25hbCluPSEwO2Vsc2V7aWYobil0aHJvdyBuZXcgTyhcImludGVybmFsLWVycm9yXCIsXCJBcmd1bWVudCB2YWxpZGF0b3IgZW5jb3VudGVyZWQgYSByZXF1aXJlZCBhcmd1bWVudCBhZnRlciBhbiBvcHRpb25hbCBhcmd1bWVudC5cIik7aysrfW49Yy5sZW5ndGg7aWYoZS5sZW5ndGg8a3x8bjxlLmxlbmd0aCllPVwiRXhwZWN0ZWQgXCIrKGs9PW4/MT09XG5rP1wiMSBhcmd1bWVudFwiOmsrXCIgYXJndW1lbnRzXCI6aytcIi1cIituK1wiIGFyZ3VtZW50c1wiKStcIiBidXQgZ290IFwiK2UubGVuZ3RoK1wiLlwiO2Vsc2V7Zm9yKGs9MDtrPGUubGVuZ3RoO2srKylpZihuPWNba10ub3B0aW9uYWwmJnZvaWQgMD09PWVba10sIWNba10uaGEoZVtrXSkmJiFuKXtlPWNba107aWYoMD5rfHxrPj1BaC5sZW5ndGgpdGhyb3cgbmV3IE8oXCJpbnRlcm5hbC1lcnJvclwiLFwiQXJndW1lbnQgdmFsaWRhdG9yIHJlY2VpdmVkIGFuIHVuc3VwcG9ydGVkIG51bWJlciBvZiBhcmd1bWVudHMuXCIpO2U9QWhba10rXCIgYXJndW1lbnQgXCIrKGUubmFtZT8nXCInK2UubmFtZSsnXCIgJzpcIlwiKStcIm11c3QgYmUgXCIrZS5mYStcIi5cIjticmVhayBhfWU9bnVsbH19aWYoZSl0aHJvdyBuZXcgTyhcImFyZ3VtZW50LWVycm9yXCIsZCtcIiBmYWlsZWQ6IFwiK2UpO3JldHVybiBiLmFwcGx5KHRoaXMsYSl9O2Zvcih2YXIgZSBpbiBiKWFbZV09YltlXTtmb3IoZSBpbiBiLnByb3RvdHlwZSlhLnByb3RvdHlwZVtlXT1cbmIucHJvdG90eXBlW2VdO3JldHVybiBhfSxJaD1mdW5jdGlvbihhKXthPWEuc3BsaXQoXCIuXCIpO3JldHVybiBhW2EubGVuZ3RoLTFdfTt2YXIgSmg9ZnVuY3Rpb24oYSxiLGMsZCl7dGhpcy5YZT1hO3RoaXMuUGQ9Yjt0aGlzLmVmPWM7dGhpcy5qYj1kO3RoaXMuUz17fTt5aHx8KHloPW5ldyB4aCk7YT15aDt0cnl7dmFyIGU7WmUoKT8ob2h8fChvaD1uZXcgbmgoXCJmaXJlYmFzZUxvY2FsU3RvcmFnZURiXCIsXCJmaXJlYmFzZUxvY2FsU3RvcmFnZVwiLFwiZmJhc2Vfa2V5XCIsXCJ2YWx1ZVwiLDEpKSxlPW9oKTplPW5ldyBhLnNkLkk7dGhpcy5ZYT1lfWNhdGNoKGYpe3RoaXMuWWE9bmV3IGhoLHRoaXMuamI9ITB9dHJ5e3RoaXMudGM9bmV3IGEuc2QuamR9Y2F0Y2goZil7dGhpcy50Yz1uZXcgaGh9dGhpcy5UZD1yKHRoaXMuVWQsdGhpcyk7dGhpcy5UPXt9fSxLaCxMaD1mdW5jdGlvbigpe0tofHwoS2g9bmV3IEpoKFwiZmlyZWJhc2VcIixcIjpcIiwhd2YoSygpKSYmbC53aW5kb3cmJmwud2luZG93IT1sLndpbmRvdy50b3A/ITA6ITEsc2YoKSkpO3JldHVybiBLaH07aD1KaC5wcm90b3R5cGU7XG5oLlA9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5YZSt0aGlzLlBkK2EubmFtZSsoYj90aGlzLlBkK2I6XCJcIil9O2guZ2V0PWZ1bmN0aW9uKGEsYil7cmV0dXJuKGEuST90aGlzLllhOnRoaXMudGMpLmdldCh0aGlzLlAoYSxiKSl9O2gucmVtb3ZlPWZ1bmN0aW9uKGEsYil7Yj10aGlzLlAoYSxiKTthLkkmJiF0aGlzLmpiJiYodGhpcy5UW2JdPW51bGwpO3JldHVybihhLkk/dGhpcy5ZYTp0aGlzLnRjKS5yZW1vdmUoYil9O2guc2V0PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLlAoYSxjKSxlPXRoaXMsZj1hLkk/dGhpcy5ZYTp0aGlzLnRjO3JldHVybiBmLnNldChkLGIpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZi5nZXQoZCl9KS50aGVuKGZ1bmN0aW9uKGIpe2EuSSYmIXRoaXMuamImJihlLlRbZF09Yil9KX07XG5oLmFkZExpc3RlbmVyPWZ1bmN0aW9uKGEsYixjKXthPXRoaXMuUChhLGIpO3RoaXMuamJ8fCh0aGlzLlRbYV09bC5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShhKSk7UWEodGhpcy5TKSYmdGhpcy5nZCgpO3RoaXMuU1thXXx8KHRoaXMuU1thXT1bXSk7dGhpcy5TW2FdLnB1c2goYyl9O2gucmVtb3ZlTGlzdGVuZXI9ZnVuY3Rpb24oYSxiLGMpe2E9dGhpcy5QKGEsYik7dGhpcy5TW2FdJiYoS2EodGhpcy5TW2FdLGZ1bmN0aW9uKGEpe3JldHVybiBhPT1jfSksMD09dGhpcy5TW2FdLmxlbmd0aCYmZGVsZXRlIHRoaXMuU1thXSk7UWEodGhpcy5TKSYmdGhpcy5yYygpfTtoLmdkPWZ1bmN0aW9uKCl7dGhpcy5ZYS5OYSh0aGlzLlRkKTt0aGlzLmpifHxNaCh0aGlzKX07XG52YXIgTWg9ZnVuY3Rpb24oYSl7TmgoYSk7YS5TYz1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2Zvcih2YXIgYiBpbiBhLlMpe3ZhciBjPWwubG9jYWxTdG9yYWdlLmdldEl0ZW0oYik7YyE9YS5UW2JdJiYoYS5UW2JdPWMsYz1uZXcgSmIoe3R5cGU6XCJzdG9yYWdlXCIsa2V5OmIsdGFyZ2V0OndpbmRvdyxvbGRWYWx1ZTphLlRbYl0sbmV3VmFsdWU6Y30pLGEuVWQoYykpfX0sMUUzKX0sTmg9ZnVuY3Rpb24oYSl7YS5TYyYmKGNsZWFySW50ZXJ2YWwoYS5TYyksYS5TYz1udWxsKX07SmgucHJvdG90eXBlLnJjPWZ1bmN0aW9uKCl7dGhpcy5ZYS5mYih0aGlzLlRkKTt0aGlzLmpifHxOaCh0aGlzKX07XG5KaC5wcm90b3R5cGUuVWQ9ZnVuY3Rpb24oYSl7aWYoYSYmYS5BZSl7dmFyIGI9YS5xYi5rZXk7aWYodGhpcy5lZil7dmFyIGM9bC5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShiKTthPWEucWIubmV3VmFsdWU7YSE9YyYmKGE/bC5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShiLGEpOmF8fGwubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYikpfXRoaXMuVFtiXT1sLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGIpO3RoaXMubWQoYil9ZWxzZSB4KGEscih0aGlzLm1kLHRoaXMpKX07SmgucHJvdG90eXBlLm1kPWZ1bmN0aW9uKGEpe3RoaXMuU1thXSYmeCh0aGlzLlNbYV0sZnVuY3Rpb24oYSl7YSgpfSl9O3ZhciBPaD1mdW5jdGlvbihhLGIpe3RoaXMudT1hO3RoaXMuaT1ifHxMaCgpfSxQaD17bmFtZTpcImF1dGhFdmVudFwiLEk6ITB9LFFoPWZ1bmN0aW9uKGEpe3JldHVybiBhLmkuZ2V0KFBoLGEudSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gTWYoYSl9KX07T2gucHJvdG90eXBlLk1hPWZ1bmN0aW9uKGEpe3RoaXMuaS5hZGRMaXN0ZW5lcihQaCx0aGlzLnUsYSl9O09oLnByb3RvdHlwZS5HYj1mdW5jdGlvbihhKXt0aGlzLmkucmVtb3ZlTGlzdGVuZXIoUGgsdGhpcy51LGEpfTt2YXIgUmg9ZnVuY3Rpb24oYSl7dGhpcy5pPWF8fExoKCl9LFNoPXtuYW1lOlwic2Vzc2lvbklkXCIsSTohMX07UmgucHJvdG90eXBlLlZiPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmkuZ2V0KFNoLGEpfTt2YXIgVGg9ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMudj1hO3RoaXMuaj1iO3RoaXMuQj1jO3RoaXMuemE9ZHx8bnVsbDt0aGlzLlZkPWIrXCI6XCIrYzt0aGlzLmZmPW5ldyBSaDt0aGlzLndkPW5ldyBPaCh0aGlzLlZkKTt0aGlzLk9jPW51bGw7dGhpcy5pYT1bXTt0aGlzLk5lPWV8fDUwMDt0aGlzLmNmPWZ8fDJFMzt0aGlzLnViPXRoaXMuaGM9bnVsbH0sVWg9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBPKFwiaW52YWxpZC1jb3Jkb3ZhLWNvbmZpZ3VyYXRpb25cIixhKX07XG5UaC5wcm90b3R5cGUuRGE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5RYz90aGlzLlFjOnRoaXMuUWM9bWYoKS50aGVuKGZ1bmN0aW9uKCl7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIE0oXCJ1bml2ZXJzYWxMaW5rcy5zdWJzY3JpYmVcIixsKSl0aHJvdyBVaChcImNvcmRvdmEtdW5pdmVyc2FsLWxpbmtzLXBsdWdpbiBpcyBub3QgaW5zdGFsbGVkXCIpO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgTShcIkJ1aWxkSW5mby5wYWNrYWdlTmFtZVwiLGwpKXRocm93IFVoKFwiY29yZG92YS1wbHVnaW4tYnVpbGRpbmZvIGlzIG5vdCBpbnN0YWxsZWRcIik7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIE0oXCJjb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYi5vcGVuVXJsXCIsbCkpdGhyb3cgVWgoXCJjb3Jkb3ZhLXBsdWdpbi1icm93c2VydGFiIGlzIG5vdCBpbnN0YWxsZWRcIik7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIE0oXCJjb3Jkb3ZhLkluQXBwQnJvd3Nlci5vcGVuXCIsbCkpdGhyb3cgVWgoXCJjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXIgaXMgbm90IGluc3RhbGxlZFwiKTtcbn0sZnVuY3Rpb24oKXt0aHJvdyBuZXcgTyhcImNvcmRvdmEtbm90LXJlYWR5XCIpO30pfTt2YXIgVmg9ZnVuY3Rpb24oKXtmb3IodmFyIGE9MjAsYj1bXTswPGE7KWIucHVzaChcIjEyMzQ1Njc4OTBhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCIuY2hhckF0KE1hdGguZmxvb3IoNjIqTWF0aC5yYW5kb20oKSkpKSxhLS07cmV0dXJuIGIuam9pbihcIlwiKX0sV2g9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IERiO2IudXBkYXRlKGEpO3JldHVybiBvYihiLmRpZ2VzdCgpKX07aD1UaC5wcm90b3R5cGU7aC5IYj1mdW5jdGlvbihhLGIpe2IobmV3IE8oXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpKTtyZXR1cm4gRCgpfTtoLkNiPWZ1bmN0aW9uKCl7cmV0dXJuIEUobmV3IE8oXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpKX07aC5XZD1mdW5jdGlvbigpe3JldHVybiExfTtoLlNkPWZ1bmN0aW9uKCl7cmV0dXJuITB9O1xuaC56ZD1mdW5jdGlvbigpe3JldHVybiEwfTtcbmguRGI9ZnVuY3Rpb24oYSxiLGMpe2lmKHRoaXMuaGMpcmV0dXJuIEUobmV3IE8oXCJyZWRpcmVjdC1vcGVyYXRpb24tcGVuZGluZ1wiKSk7dmFyIGQ9dGhpcyxlPWwuZG9jdW1lbnQsZj1udWxsLGc9bnVsbCxrPW51bGwsbj1udWxsO3JldHVybiB0aGlzLmhjPW5kKEQoKS50aGVuKGZ1bmN0aW9uKCl7ZGcoYik7cmV0dXJuIFhoKGQpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBZaChkLGEsYixjKX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4obmV3IEMoZnVuY3Rpb24oYSxiKXtnPWZ1bmN0aW9uKCl7dmFyIGI9TShcImNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLmNsb3NlXCIsbCk7YSgpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiJiZiKCk7ZC51YiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGQudWIuY2xvc2UmJihkLnViLmNsb3NlKCksZC51Yj1udWxsKTtyZXR1cm4hMX07ZC5NYShnKTtrPWZ1bmN0aW9uKCl7Znx8KGY9bWUoZC5jZikudGhlbihmdW5jdGlvbigpe2IobmV3IE8oXCJyZWRpcmVjdC1jYW5jZWxsZWQtYnktdXNlclwiKSl9KSl9O249XG5mdW5jdGlvbigpe3ZhciBhPWwuZG9jdW1lbnQ7KGEmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgYS52aXNpYmlsaXR5U3RhdGU/XCJ2aXNpYmxlXCI9PWEudmlzaWJpbGl0eVN0YXRlOjEpJiZrKCl9O2UuYWRkRXZlbnRMaXN0ZW5lcihcInJlc3VtZVwiLGssITEpO0soKS50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hbmRyb2lkLyl8fGUuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixuLCExKX0pKS5jKGZ1bmN0aW9uKGEpe3JldHVybiBaaChkKS50aGVuKGZ1bmN0aW9uKCl7dGhyb3cgYTt9KX0pfSksZnVuY3Rpb24oKXtrJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXN1bWVcIixrLCExKTtuJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsbiwhMSk7ZiYmZi5jYW5jZWwoKTtnJiZkLkdiKGcpO2QuaGM9bnVsbH0pfTtcbnZhciBZaD1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1WaCgpLGY9bmV3IFAoYixkLG51bGwsZSxuZXcgTyhcIm5vLWF1dGgtZXZlbnRcIikpLGc9TShcIkJ1aWxkSW5mby5wYWNrYWdlTmFtZVwiLGwpO2lmKFwic3RyaW5nXCIhPT10eXBlb2YgZyl0aHJvdyBuZXcgTyhcImludmFsaWQtY29yZG92YS1jb25maWd1cmF0aW9uXCIpO3ZhciBrPU0oXCJCdWlsZEluZm8uZGlzcGxheU5hbWVcIixsKSxuPXt9O2lmKEsoKS50b0xvd2VyQ2FzZSgpLm1hdGNoKC9pcGhvbmV8aXBhZHxpcG9kLykpbi5pYmk9ZztlbHNlIGlmKEsoKS50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hbmRyb2lkLykpbi5hcG49ZztlbHNlIHJldHVybiBFKG5ldyBPKFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiKSk7ayYmKG4uYXBwRGlzcGxheU5hbWU9ayk7ZT1XaChlKTtuLnNlc3Npb25JZD1lO3ZhciB5PWZoKGEudixhLmosYS5CLGIsYyxudWxsLGQsYS56YSxuKTtyZXR1cm4gYS5EYSgpLnRoZW4oZnVuY3Rpb24oKXt2YXIgYj1cbmEuVmQ7cmV0dXJuIGEuZmYuaS5zZXQoUGgsZi5EKCksYil9KS50aGVuKGZ1bmN0aW9uKCl7dmFyIGI9TShcImNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLmlzQXZhaWxhYmxlXCIsbCk7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGIpdGhyb3cgbmV3IE8oXCJpbnZhbGlkLWNvcmRvdmEtY29uZmlndXJhdGlvblwiKTt2YXIgYz1udWxsO2IoZnVuY3Rpb24oYil7aWYoYil7Yz1NKFwiY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWIub3BlblVybFwiLGwpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjKXRocm93IG5ldyBPKFwiaW52YWxpZC1jb3Jkb3ZhLWNvbmZpZ3VyYXRpb25cIik7Yyh5KX1lbHNle2M9TShcImNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW5cIixsKTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgYyl0aHJvdyBuZXcgTyhcImludmFsaWQtY29yZG92YS1jb25maWd1cmF0aW9uXCIpO2I9Yzt2YXIgZDtkPUsoKTtkPSEoIWQubWF0Y2goLyhpUGFkfGlQaG9uZXxpUG9kKS4qT1MgN19cXGQvaSkmJiFkLm1hdGNoKC8oaVBhZHxpUGhvbmV8aVBvZCkuKk9TIDhfXFxkL2kpKTtcbmEudWI9Yih5LGQ/XCJfYmxhbmtcIjpcIl9zeXN0ZW1cIixcImxvY2F0aW9uPXllc1wiKX19KX0pfSwkaD1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2M8YS5pYS5sZW5ndGg7YysrKXRyeXthLmlhW2NdKGIpfWNhdGNoKGQpe319LFhoPWZ1bmN0aW9uKGEpe2EuT2N8fChhLk9jPWEuRGEoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBDKGZ1bmN0aW9uKGIpe3ZhciBjPWZ1bmN0aW9uKGQpe2IoZCk7YS5HYihjKTtyZXR1cm4hMX07YS5NYShjKTthaShhKX0pfSkpO3JldHVybiBhLk9jfSxaaD1mdW5jdGlvbihhKXt2YXIgYj1udWxsO3JldHVybiBRaChhLndkKS50aGVuKGZ1bmN0aW9uKGMpe2I9YztjPWEud2Q7cmV0dXJuIGMuaS5yZW1vdmUoUGgsYy51KX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYn0pfSxhaT1mdW5jdGlvbihhKXt2YXIgYj1NKFwidW5pdmVyc2FsTGlua3Muc3Vic2NyaWJlXCIsbCk7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGIpdGhyb3cgbmV3IE8oXCJpbnZhbGlkLWNvcmRvdmEtY29uZmlndXJhdGlvblwiKTtcbnZhciBjPW5ldyBQKFwidW5rbm93blwiLG51bGwsbnVsbCxudWxsLG5ldyBPKFwibm8tYXV0aC1ldmVudFwiKSksZD0hMSxlPW1lKGEuTmUpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gWmgoYSkudGhlbihmdW5jdGlvbigpe2R8fCRoKGEsYyl9KX0pLGY9ZnVuY3Rpb24oYil7ZD0hMDtlJiZlLmNhbmNlbCgpO1poKGEpLnRoZW4oZnVuY3Rpb24oZCl7dmFyIGU9YztpZihkJiZiJiZiLnVybCl7dmFyIGU9bnVsbCxmO2Y9Yi51cmw7dmFyIGc9VGUoZiksaz1SZShnLFwibGlua1wiKSxuPVJlKFRlKGspLFwibGlua1wiKSxnPVJlKGcsXCJkZWVwX2xpbmtfaWRcIik7Zj1SZShUZShnKSxcImxpbmtcIil8fGd8fG58fGt8fGY7LTEhPWYuaW5kZXhPZihcIi9fXy9hdXRoL2NhbGxiYWNrXCIpJiYoZT1UZShmKSxlPXZmKFJlKGUsXCJlcnJvclwiKXx8bnVsbCksZT0oZT1cIm9iamVjdFwiPT09dHlwZW9mIGU/TGYoZSk6bnVsbCk/bmV3IFAoZC5nYSxkLkYsbnVsbCxudWxsLGUpOm5ldyBQKGQuZ2EsZC5GLGYsZC5WYigpKSk7ZT1cbmV8fGN9JGgoYSxlKX0pfSxnPWwuaGFuZGxlT3BlblVSTDtsLmhhbmRsZU9wZW5VUkw9ZnVuY3Rpb24oYSl7MD09YS5pbmRleE9mKE0oXCJCdWlsZEluZm8ucGFja2FnZU5hbWVcIixsKStcIjovL1wiKSYmZih7dXJsOmF9KTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyl0cnl7ZyhhKX1jYXRjaChuKXtjb25zb2xlLmVycm9yKG4pfX07YihudWxsLGYpfTtUaC5wcm90b3R5cGUuTWE9ZnVuY3Rpb24oYSl7dGhpcy5pYS5wdXNoKGEpO1hoKHRoaXMpLmMoZnVuY3Rpb24oKXt9KX07VGgucHJvdG90eXBlLkdiPWZ1bmN0aW9uKGEpe0thKHRoaXMuaWEsZnVuY3Rpb24oYil7cmV0dXJuIGI9PWF9KX07dmFyIGJpPWZ1bmN0aW9uKGEpe3RoaXMudT1hO3RoaXMuaT1MaCgpfSxjaT17bmFtZTpcInBlbmRpbmdSZWRpcmVjdFwiLEk6ITF9LGRpPWZ1bmN0aW9uKGEpe3JldHVybiBhLmkuc2V0KGNpLFwicGVuZGluZ1wiLGEudSl9LGVpPWZ1bmN0aW9uKGEpe3JldHVybiBhLmkucmVtb3ZlKGNpLGEudSl9LGZpPWZ1bmN0aW9uKGEpe3JldHVybiBhLmkuZ2V0KGNpLGEudSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm5cInBlbmRpbmdcIj09YX0pfTt2YXIgVj1mdW5jdGlvbihhLGIsYyl7dGhpcy52PWE7dGhpcy5qPWI7dGhpcy5CPWM7dGhpcy5KYj1bXTt0aGlzLldhPSExO3RoaXMuQ2M9cih0aGlzLk1jLHRoaXMpO3RoaXMuYWI9bmV3IGdpKHRoaXMpO3RoaXMuSmQ9bmV3IGhpKHRoaXMpO3RoaXMuemI9bmV3IGJpKHRoaXMuaitcIjpcIit0aGlzLkIpO3RoaXMubGI9e307dGhpcy5sYi51bmtub3duPXRoaXMuYWI7dGhpcy5sYi5zaWduSW5WaWFSZWRpcmVjdD10aGlzLmFiO3RoaXMubGIubGlua1ZpYVJlZGlyZWN0PXRoaXMuYWI7dGhpcy5sYi5zaWduSW5WaWFQb3B1cD10aGlzLkpkO3RoaXMubGIubGlua1ZpYVBvcHVwPXRoaXMuSmQ7dGhpcy5HPWlpKHRoaXMudix0aGlzLmosdGhpcy5CKX0saWk9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZpcmViYXNlLlNES19WRVJTSU9OfHxudWxsO3JldHVybiBsZigpP25ldyBUaChhLGIsYyxkKTpuZXcgYmgoYSxiLGMsZCl9O1xuVi5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLldhPSExO3RoaXMuRy5HYih0aGlzLkNjKTt0aGlzLkc9aWkodGhpcy52LHRoaXMuaix0aGlzLkIpfTtWLnByb3RvdHlwZS52Yj1mdW5jdGlvbigpe3ZhciBhPXRoaXM7dGhpcy5XYXx8KHRoaXMuV2E9ITAsdGhpcy5HLk1hKHRoaXMuQ2MpKTt2YXIgYj10aGlzLkc7cmV0dXJuIHRoaXMuRy5EYSgpLmMoZnVuY3Rpb24oYyl7YS5HPT1iJiZhLnJlc2V0KCk7dGhyb3cgYzt9KX07dmFyIGxpPWZ1bmN0aW9uKGEpe2EuRy5TZCgpJiZhLnZiKCkuYyhmdW5jdGlvbihiKXt2YXIgYz1uZXcgUChcInVua25vd25cIixudWxsLG51bGwsbnVsbCxuZXcgTyhcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIikpO2ppKGIpJiZhLk1jKGMpfSk7YS5HLnpkKCl8fGtpKGEuYWIpfTtcblYucHJvdG90eXBlLnN1YnNjcmliZT1mdW5jdGlvbihhKXtIYSh0aGlzLkpiLGEpfHx0aGlzLkpiLnB1c2goYSk7aWYoIXRoaXMuV2Epe3ZhciBiPXRoaXM7ZmkodGhpcy56YikudGhlbihmdW5jdGlvbihhKXthP2VpKGIuemIpLnRoZW4oZnVuY3Rpb24oKXtiLnZiKCkuYyhmdW5jdGlvbihhKXt2YXIgYz1uZXcgUChcInVua25vd25cIixudWxsLG51bGwsbnVsbCxuZXcgTyhcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIikpO2ppKGEpJiZiLk1jKGMpfSl9KTpsaShiKX0pLmMoZnVuY3Rpb24oKXtsaShiKX0pfX07Vi5wcm90b3R5cGUudW5zdWJzY3JpYmU9ZnVuY3Rpb24oYSl7S2EodGhpcy5KYixmdW5jdGlvbihiKXtyZXR1cm4gYj09YX0pfTtcblYucHJvdG90eXBlLk1jPWZ1bmN0aW9uKGEpe2lmKCFhKXRocm93IG5ldyBPKFwiaW52YWxpZC1hdXRoLWV2ZW50XCIpO2Zvcih2YXIgYj0hMSxjPTA7Yzx0aGlzLkpiLmxlbmd0aDtjKyspe3ZhciBkPXRoaXMuSmJbY107aWYoZC5uZChhLmdhLGEuRikpeyhiPXRoaXMubGJbYS5nYV0pJiZiLktkKGEsZCk7Yj0hMDticmVha319a2kodGhpcy5hYik7cmV0dXJuIGJ9O3ZhciBtaT1uZXcgemYoMkUzLDFFNCksbmk9bmV3IHpmKDFFNCwzRTQpO1YucHJvdG90eXBlLmdldFJlZGlyZWN0UmVzdWx0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYWIuZ2V0UmVkaXJlY3RSZXN1bHQoKX07Vi5wcm90b3R5cGUuQ2I9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj10aGlzO3JldHVybiB0aGlzLkcuQ2IoYSxiLGMsZnVuY3Rpb24oKXtmLldhfHwoZi5XYT0hMCxmLkcuTWEoZi5DYykpfSxmdW5jdGlvbigpe2YucmVzZXQoKX0sZCxlKX07XG52YXIgamk9ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJlwiYXV0aC9jb3Jkb3ZhLW5vdC1yZWFkeVwiPT1hLmNvZGU/ITA6ITF9O1YucHJvdG90eXBlLkRiPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLGU7cmV0dXJuIGRpKHRoaXMuemIpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZC5HLkRiKGEsYixjKS5jKGZ1bmN0aW9uKGEpe2lmKGppKGEpKXRocm93IG5ldyBPKFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiKTtlPWE7cmV0dXJuIGVpKGQuemIpLnRoZW4oZnVuY3Rpb24oKXt0aHJvdyBlO30pfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBkLkcuV2QoKT9uZXcgQyhmdW5jdGlvbigpe30pOmVpKGQuemIpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZC5nZXRSZWRpcmVjdFJlc3VsdCgpfSkudGhlbihmdW5jdGlvbigpe30pLmMoZnVuY3Rpb24oKXt9KX0pfSl9O1xuVi5wcm90b3R5cGUuSGI9ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuRy5IYihjLGZ1bmN0aW9uKGMpe2EuSWEoYixudWxsLGMsZCl9LG1pLmdldCgpKX07dmFyIG9pPXt9LHBpPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iK1wiOlwiK2M7b2lbZF18fChvaVtkXT1uZXcgVihhLGIsYykpO3JldHVybiBvaVtkXX0sZ2k9ZnVuY3Rpb24oYSl7dGhpcy5pPWE7dGhpcy5lYj1udWxsO3RoaXMuRmI9W107dGhpcy5FYj1bXTt0aGlzLmJiPW51bGw7dGhpcy4kYz0hMX07Z2kucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5lYj1udWxsO3RoaXMuYmImJih0aGlzLmJiLmNhbmNlbCgpLHRoaXMuYmI9bnVsbCl9O1xuZ2kucHJvdG90eXBlLktkPWZ1bmN0aW9uKGEsYil7aWYoIWEpcmV0dXJuIEUobmV3IE8oXCJpbnZhbGlkLWF1dGgtZXZlbnRcIikpO3RoaXMucmVzZXQoKTt0aGlzLiRjPSEwO3ZhciBjPWEuZ2EsZD1hLkYsZT1hLmdldEVycm9yKCkmJlwiYXV0aC93ZWItc3RvcmFnZS11bnN1cHBvcnRlZFwiPT1hLmdldEVycm9yKCkuY29kZSxmPWEuZ2V0RXJyb3IoKSYmXCJhdXRoL29wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIj09YS5nZXRFcnJvcigpLmNvZGU7XCJ1bmtub3duXCIhPWN8fGV8fGY/YT1hLk8/dGhpcy5ZYyhhLGIpOmIucmIoYyxkKT90aGlzLlpjKGEsYik6RShuZXcgTyhcImludmFsaWQtYXV0aC1ldmVudFwiKSk6KHFpKHRoaXMsITEsbnVsbCxudWxsKSxhPUQoKSk7cmV0dXJuIGF9O3ZhciBraT1mdW5jdGlvbihhKXthLiRjfHwoYS4kYz0hMCxxaShhLCExLG51bGwsbnVsbCkpfTtcbmdpLnByb3RvdHlwZS5ZYz1mdW5jdGlvbihhKXtxaSh0aGlzLCEwLG51bGwsYS5nZXRFcnJvcigpKTtyZXR1cm4gRCgpfTtnaS5wcm90b3R5cGUuWmM9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9YS5nYTtiPWIucmIoZCxhLkYpO3ZhciBlPWEubWI7YT1hLlZiKCk7dmFyIGY9XCJzaWduSW5WaWFSZWRpcmVjdFwiPT1kfHxcImxpbmtWaWFSZWRpcmVjdFwiPT1kO3JldHVybiBiKGUsYSkudGhlbihmdW5jdGlvbihhKXtxaShjLGYsYSxudWxsKX0pLmMoZnVuY3Rpb24oYSl7cWkoYyxmLG51bGwsYSl9KX07XG52YXIgcmk9ZnVuY3Rpb24oYSxiKXthLmViPWZ1bmN0aW9uKCl7cmV0dXJuIEUoYil9O2lmKGEuRWIubGVuZ3RoKWZvcih2YXIgYz0wO2M8YS5FYi5sZW5ndGg7YysrKWEuRWJbY10oYil9LHNpPWZ1bmN0aW9uKGEsYil7YS5lYj1mdW5jdGlvbigpe3JldHVybiBEKGIpfTtpZihhLkZiLmxlbmd0aClmb3IodmFyIGM9MDtjPGEuRmIubGVuZ3RoO2MrKylhLkZiW2NdKGIpfSxxaT1mdW5jdGlvbihhLGIsYyxkKXtiP2Q/cmkoYSxkKTpzaShhLGMpOnNpKGEse3VzZXI6bnVsbH0pO2EuRmI9W107YS5FYj1bXX07Z2kucHJvdG90eXBlLmdldFJlZGlyZWN0UmVzdWx0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm4gbmV3IEMoZnVuY3Rpb24oYixjKXthLmViP2EuZWIoKS50aGVuKGIsYyk6KGEuRmIucHVzaChiKSxhLkViLnB1c2goYyksdGkoYSkpfSl9O1xudmFyIHRpPWZ1bmN0aW9uKGEpe3ZhciBiPW5ldyBPKFwidGltZW91dFwiKTthLmJiJiZhLmJiLmNhbmNlbCgpO2EuYmI9bWUobmkuZ2V0KCkpLnRoZW4oZnVuY3Rpb24oKXthLmVifHxxaShhLCEwLG51bGwsYil9KX0saGk9ZnVuY3Rpb24oYSl7dGhpcy5pPWF9O2hpLnByb3RvdHlwZS5LZD1mdW5jdGlvbihhLGIpe2lmKCFhKXJldHVybiBFKG5ldyBPKFwiaW52YWxpZC1hdXRoLWV2ZW50XCIpKTt2YXIgYz1hLmdhLGQ9YS5GO3JldHVybiBhLk8/dGhpcy5ZYyhhLGIpOmIucmIoYyxkKT90aGlzLlpjKGEsYik6RShuZXcgTyhcImludmFsaWQtYXV0aC1ldmVudFwiKSl9O2hpLnByb3RvdHlwZS5ZYz1mdW5jdGlvbihhLGIpe2IuSWEoYS5nYSxudWxsLGEuZ2V0RXJyb3IoKSxhLkYpO3JldHVybiBEKCl9O1xuaGkucHJvdG90eXBlLlpjPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5GLGQ9YS5nYSxlPWIucmIoZCxjKSxmPWEubWI7YT1hLlZiKCk7cmV0dXJuIGUoZixhKS50aGVuKGZ1bmN0aW9uKGEpe2IuSWEoZCxhLG51bGwsYyl9KS5jKGZ1bmN0aW9uKGEpe2IuSWEoZCxudWxsLGEsYyl9KX07dmFyIHVpPWZ1bmN0aW9uKGEpe3RoaXMuZz1hO3RoaXMueGE9dGhpcy5YPW51bGw7dGhpcy5TYT0wfTt1aS5wcm90b3R5cGUuRD1mdW5jdGlvbigpe3JldHVybnthcGlLZXk6dGhpcy5nLmoscmVmcmVzaFRva2VuOnRoaXMuWCxhY2Nlc3NUb2tlbjp0aGlzLnhhLGV4cGlyYXRpb25UaW1lOnRoaXMuU2F9fTtcbnZhciB3aT1mdW5jdGlvbihhLGIpe3ZhciBjPWIuaWRUb2tlbixkPWIucmVmcmVzaFRva2VuO2I9dmkoYi5leHBpcmVzSW4pO2EueGE9YzthLlNhPWI7YS5YPWR9LHZpPWZ1bmN0aW9uKGEpe3JldHVybiBrYSgpKzFFMypwYXJzZUludChhLDEwKX0seGk9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gcGcoYS5nLGIpLnRoZW4oZnVuY3Rpb24oYil7YS54YT1iLmFjY2Vzc190b2tlbjthLlNhPXZpKGIuZXhwaXJlc19pbik7YS5YPWIucmVmcmVzaF90b2tlbjtyZXR1cm57YWNjZXNzVG9rZW46YS54YSxleHBpcmF0aW9uVGltZTphLlNhLHJlZnJlc2hUb2tlbjphLlh9fSkuYyhmdW5jdGlvbihiKXtcImF1dGgvdXNlci10b2tlbi1leHBpcmVkXCI9PWIuY29kZSYmKGEuWD1udWxsKTt0aHJvdyBiO30pfSx5aT1mdW5jdGlvbihhKXtyZXR1cm4hKCFhLnhhfHxhLlgpfTtcbnVpLnByb3RvdHlwZS5nZXRUb2tlbj1mdW5jdGlvbihhKXthPSEhYTtyZXR1cm4geWkodGhpcyk/RShuZXcgTyhcInVzZXItdG9rZW4tZXhwaXJlZFwiKSk6YXx8IXRoaXMueGF8fGthKCk+dGhpcy5TYS0zRTQ/dGhpcy5YP3hpKHRoaXMse2dyYW50X3R5cGU6XCJyZWZyZXNoX3Rva2VuXCIscmVmcmVzaF90b2tlbjp0aGlzLlh9KTpEKG51bGwpOkQoe2FjY2Vzc1Rva2VuOnRoaXMueGEsZXhwaXJhdGlvblRpbWU6dGhpcy5TYSxyZWZyZXNoVG9rZW46dGhpcy5YfSl9O3ZhciB6aT1mdW5jdGlvbihhLGIsYyxkLGUpe0NmKHRoaXMse3VpZDphLGRpc3BsYXlOYW1lOmR8fG51bGwscGhvdG9VUkw6ZXx8bnVsbCxlbWFpbDpjfHxudWxsLHByb3ZpZGVySWQ6Yn0pfSxBaT1mdW5jdGlvbihhLGIpe0liLmNhbGwodGhpcyxhKTtmb3IodmFyIGMgaW4gYil0aGlzW2NdPWJbY119O3QoQWksSWIpO1xudmFyIFc9ZnVuY3Rpb24oYSxiLGMpe3RoaXMuWj1bXTt0aGlzLmo9YS5hcGlLZXk7dGhpcy5CPWEuYXBwTmFtZTt0aGlzLnY9YS5hdXRoRG9tYWlufHxudWxsO2E9ZmlyZWJhc2UuU0RLX1ZFUlNJT04/cGYoZmlyZWJhc2UuU0RLX1ZFUlNJT04pOm51bGw7dGhpcy5nPW5ldyBSKHRoaXMuaixudWxsLGEpO3RoaXMuZWE9bmV3IHVpKHRoaXMuZyk7QmkodGhpcyxiLmlkVG9rZW4pO3dpKHRoaXMuZWEsYik7Tih0aGlzLFwicmVmcmVzaFRva2VuXCIsdGhpcy5lYS5YKTtDaSh0aGlzLGN8fHt9KTtRZC5jYWxsKHRoaXMpO3RoaXMuaWM9ITE7dGhpcy52JiZyZigpJiYodGhpcy5tPXBpKHRoaXMudix0aGlzLmosdGhpcy5CKSk7dGhpcy5xYz1bXTt0aGlzLkJjPUQoKX07dChXLFFkKTtcblcucHJvdG90eXBlLnRhPWZ1bmN0aW9uKGEsYil7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpLGQ9dGhpcztyZXR1cm4gdGhpcy5CYz10aGlzLkJjLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShkLGMpfSxmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGQsYyl9KX07XG52YXIgQmk9ZnVuY3Rpb24oYSxiKXthLkRkPWI7TihhLFwiX2xhdFwiLGIpfSxEaT1mdW5jdGlvbihhLGIpe0thKGEucWMsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PWJ9KX0sRWk9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGEucWMubGVuZ3RoO2MrKyliLnB1c2goYS5xY1tjXShhKSk7cmV0dXJuIGtkKGIpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYX0pfSxGaT1mdW5jdGlvbihhKXthLm0mJiFhLmljJiYoYS5pYz0hMCxhLm0uc3Vic2NyaWJlKGEpKX0sQ2k9ZnVuY3Rpb24oYSxiKXtDZihhLHt1aWQ6Yi51aWQsZGlzcGxheU5hbWU6Yi5kaXNwbGF5TmFtZXx8bnVsbCxwaG90b1VSTDpiLnBob3RvVVJMfHxudWxsLGVtYWlsOmIuZW1haWx8fG51bGwsZW1haWxWZXJpZmllZDpiLmVtYWlsVmVyaWZpZWR8fCExLGlzQW5vbnltb3VzOmIuaXNBbm9ueW1vdXN8fCExLHByb3ZpZGVyRGF0YTpbXX0pfTtOKFcucHJvdG90eXBlLFwicHJvdmlkZXJJZFwiLFwiZmlyZWJhc2VcIik7XG52YXIgR2k9ZnVuY3Rpb24oKXt9LEhpPWZ1bmN0aW9uKGEpe3JldHVybiBEKCkudGhlbihmdW5jdGlvbigpe2lmKGEucmUpdGhyb3cgbmV3IE8oXCJhcHAtZGVsZXRlZFwiKTt9KX0sSWk9ZnVuY3Rpb24oYSl7cmV0dXJuIERhKGEucHJvdmlkZXJEYXRhLGZ1bmN0aW9uKGEpe3JldHVybiBhLnByb3ZpZGVySWR9KX0sS2k9ZnVuY3Rpb24oYSxiKXtiJiYoSmkoYSxiLnByb3ZpZGVySWQpLGEucHJvdmlkZXJEYXRhLnB1c2goYikpfSxKaT1mdW5jdGlvbihhLGIpe0thKGEucHJvdmlkZXJEYXRhLGZ1bmN0aW9uKGEpe3JldHVybiBhLnByb3ZpZGVySWQ9PWJ9KX0sTGk9ZnVuY3Rpb24oYSxiLGMpeyhcInVpZFwiIT1ifHxjKSYmYS5oYXNPd25Qcm9wZXJ0eShiKSYmTihhLGIsYyl9O1xuVy5wcm90b3R5cGUuY29weT1mdW5jdGlvbihhKXt2YXIgYj10aGlzO2IhPWEmJihDZih0aGlzLHt1aWQ6YS51aWQsZGlzcGxheU5hbWU6YS5kaXNwbGF5TmFtZSxwaG90b1VSTDphLnBob3RvVVJMLGVtYWlsOmEuZW1haWwsZW1haWxWZXJpZmllZDphLmVtYWlsVmVyaWZpZWQsaXNBbm9ueW1vdXM6YS5pc0Fub255bW91cyxwcm92aWRlckRhdGE6W119KSx4KGEucHJvdmlkZXJEYXRhLGZ1bmN0aW9uKGEpe0tpKGIsYSl9KSx0aGlzLmVhPWEuZWEsTih0aGlzLFwicmVmcmVzaFRva2VuXCIsdGhpcy5lYS5YKSl9O1cucHJvdG90eXBlLnJlbG9hZD1mdW5jdGlvbigpe3ZhciBhPXRoaXM7cmV0dXJuIEhpKHRoaXMpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gTWkoYSkudGhlbihmdW5jdGlvbigpe3JldHVybiBFaShhKX0pLnRoZW4oR2kpfSl9O1xudmFyIE1pPWZ1bmN0aW9uKGEpe3JldHVybiBhLmdldFRva2VuKCkudGhlbihmdW5jdGlvbihiKXt2YXIgYz1hLmlzQW5vbnltb3VzO3JldHVybiBOaShhLGIpLnRoZW4oZnVuY3Rpb24oKXtjfHxMaShhLFwiaXNBbm9ueW1vdXNcIiwhMSk7cmV0dXJuIGJ9KS5jKGZ1bmN0aW9uKGIpe1wiYXV0aC91c2VyLXRva2VuLWV4cGlyZWRcIj09Yi5jb2RlJiYoYS5kaXNwYXRjaEV2ZW50KG5ldyBBaShcInVzZXJEZWxldGVkXCIpKSxPaShhKSk7dGhyb3cgYjt9KX0pfTtcblcucHJvdG90eXBlLmdldFRva2VuPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz15aSh0aGlzLmVhKTtyZXR1cm4gSGkodGhpcykudGhlbihmdW5jdGlvbigpe3JldHVybiBiLmVhLmdldFRva2VuKGEpfSkudGhlbihmdW5jdGlvbihhKXtpZighYSl0aHJvdyBuZXcgTyhcImludGVybmFsLWVycm9yXCIpO2EuYWNjZXNzVG9rZW4hPWIuRGQmJihCaShiLGEuYWNjZXNzVG9rZW4pLGIuRWEoKSk7TGkoYixcInJlZnJlc2hUb2tlblwiLGEucmVmcmVzaFRva2VuKTtyZXR1cm4gYS5hY2Nlc3NUb2tlbn0pLmMoZnVuY3Rpb24oYSl7aWYoXCJhdXRoL3VzZXItdG9rZW4tZXhwaXJlZFwiPT1hLmNvZGUmJiFjKXJldHVybiBFaShiKS50aGVuKGZ1bmN0aW9uKCl7TGkoYixcInJlZnJlc2hUb2tlblwiLG51bGwpO3Rocm93IGE7fSk7dGhyb3cgYTt9KX07XG52YXIgUGk9ZnVuY3Rpb24oYSxiKXtiLmlkVG9rZW4mJmEuRGQhPWIuaWRUb2tlbiYmKHdpKGEuZWEsYiksYS5FYSgpLEJpKGEsYi5pZFRva2VuKSxMaShhLFwicmVmcmVzaFRva2VuXCIsYS5lYS5YKSl9O1cucHJvdG90eXBlLkVhPWZ1bmN0aW9uKCl7dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBBaShcInRva2VuQ2hhbmdlZFwiKSl9O3ZhciBOaT1mdW5jdGlvbihhLGIpe3JldHVybiBRKGEuZyxQZyx7aWRUb2tlbjpifSkudGhlbihyKGEuYWYsYSkpfTtcblcucHJvdG90eXBlLmFmPWZ1bmN0aW9uKGEpe2E9YS51c2VycztpZighYXx8IWEubGVuZ3RoKXRocm93IG5ldyBPKFwiaW50ZXJuYWwtZXJyb3JcIik7YT1hWzBdO0NpKHRoaXMse3VpZDphLmxvY2FsSWQsZGlzcGxheU5hbWU6YS5kaXNwbGF5TmFtZSxwaG90b1VSTDphLnBob3RvVXJsLGVtYWlsOmEuZW1haWwsZW1haWxWZXJpZmllZDohIWEuZW1haWxWZXJpZmllZH0pO2Zvcih2YXIgYj1RaShhKSxjPTA7YzxiLmxlbmd0aDtjKyspS2kodGhpcyxiW2NdKTtMaSh0aGlzLFwiaXNBbm9ueW1vdXNcIiwhKHRoaXMuZW1haWwmJmEucGFzc3dvcmRIYXNoKSYmISh0aGlzLnByb3ZpZGVyRGF0YSYmdGhpcy5wcm92aWRlckRhdGEubGVuZ3RoKSl9O1xudmFyIFFpPWZ1bmN0aW9uKGEpe3JldHVybihhPWEucHJvdmlkZXJVc2VySW5mbykmJmEubGVuZ3RoP0RhKGEsZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyB6aShhLnJhd0lkLGEucHJvdmlkZXJJZCxhLmVtYWlsLGEuZGlzcGxheU5hbWUsYS5waG90b1VybCl9KTpbXX07Vy5wcm90b3R5cGUucmVhdXRoZW50aWNhdGU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gdGhpcy5mKGEuVWIodGhpcy5nKS50aGVuKGZ1bmN0aW9uKGEpe3ZhciBjO2E6e3ZhciBlPWEuaWRUb2tlbi5zcGxpdChcIi5cIik7aWYoMz09ZS5sZW5ndGgpe2Zvcih2YXIgZT1lWzFdLGY9KDQtZS5sZW5ndGglNCklNCxnPTA7ZzxmO2crKyllKz1cIi5cIjt0cnl7dmFyIGs9dGMoc2IoZSkpO2lmKGsuc3ViJiZrLmlzcyYmay5hdWQmJmsuZXhwKXtjPW5ldyBPZihrKTticmVhayBhfX1jYXRjaChuKXt9fWM9bnVsbH1pZighY3x8Yi51aWQhPWMuVGUpdGhyb3cgbmV3IE8oXCJ1c2VyLW1pc21hdGNoXCIpO1BpKGIsYSk7cmV0dXJuIGIucmVsb2FkKCl9KSl9O1xudmFyIFJpPWZ1bmN0aW9uKGEsYil7cmV0dXJuIE1pKGEpLnRoZW4oZnVuY3Rpb24oKXtpZihIYShJaShhKSxiKSlyZXR1cm4gRWkoYSkudGhlbihmdW5jdGlvbigpe3Rocm93IG5ldyBPKFwicHJvdmlkZXItYWxyZWFkeS1saW5rZWRcIik7fSl9KX07aD1XLnByb3RvdHlwZTtoLlJlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIHRoaXMuZihSaSh0aGlzLGEucHJvdmlkZXIpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYi5nZXRUb2tlbigpfSkudGhlbihmdW5jdGlvbihjKXtyZXR1cm4gYS5GZChiLmcsYyl9KS50aGVuKHIodGhpcy51ZCx0aGlzKSkpfTtoLmxpbms9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudGEodGhpcy5SZSxhKX07aC51ZD1mdW5jdGlvbihhKXtQaSh0aGlzLGEpO3ZhciBiPXRoaXM7cmV0dXJuIHRoaXMucmVsb2FkKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBifSl9O1xuaC50Zj1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiB0aGlzLmYodGhpcy5nZXRUb2tlbigpLnRoZW4oZnVuY3Rpb24oYyl7cmV0dXJuIGIuZy51cGRhdGVFbWFpbChjLGEpfSkudGhlbihmdW5jdGlvbihhKXtQaShiLGEpO3JldHVybiBiLnJlbG9hZCgpfSkpfTtoLnVwZGF0ZUVtYWlsPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnRhKHRoaXMudGYsYSl9O2gudWY9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gdGhpcy5mKHRoaXMuZ2V0VG9rZW4oKS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiBiLmcudXBkYXRlUGFzc3dvcmQoYyxhKX0pLnRoZW4oZnVuY3Rpb24oYSl7UGkoYixhKTtyZXR1cm4gYi5yZWxvYWQoKX0pKX07aC51cGRhdGVQYXNzd29yZD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy50YSh0aGlzLnVmLGEpfTtcbmgudmY9ZnVuY3Rpb24oYSl7aWYodm9pZCAwPT09YS5kaXNwbGF5TmFtZSYmdm9pZCAwPT09YS5waG90b1VSTClyZXR1cm4gSGkodGhpcyk7dmFyIGI9dGhpcztyZXR1cm4gdGhpcy5mKHRoaXMuZ2V0VG9rZW4oKS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiBiLmcudXBkYXRlUHJvZmlsZShjLHtkaXNwbGF5TmFtZTphLmRpc3BsYXlOYW1lLHBob3RvVXJsOmEucGhvdG9VUkx9KX0pLnRoZW4oZnVuY3Rpb24oYSl7UGkoYixhKTtMaShiLFwiZGlzcGxheU5hbWVcIixhLmRpc3BsYXlOYW1lfHxudWxsKTtMaShiLFwicGhvdG9VUkxcIixhLnBob3RvVXJsfHxudWxsKTtyZXR1cm4gRWkoYil9KS50aGVuKEdpKSl9O2gudXBkYXRlUHJvZmlsZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy50YSh0aGlzLnZmLGEpfTtcbmguc2Y9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gdGhpcy5mKE1pKHRoaXMpLnRoZW4oZnVuY3Rpb24oYyl7cmV0dXJuIEhhKElpKGIpLGEpP0VnKGIuZyxjLFthXSkudGhlbihmdW5jdGlvbihhKXt2YXIgYz17fTt4KGEucHJvdmlkZXJVc2VySW5mb3x8W10sZnVuY3Rpb24oYSl7Y1thLnByb3ZpZGVySWRdPSEwfSk7eChJaShiKSxmdW5jdGlvbihhKXtjW2FdfHxKaShiLGEpfSk7cmV0dXJuIEVpKGIpfSk6RWkoYikudGhlbihmdW5jdGlvbigpe3Rocm93IG5ldyBPKFwibm8tc3VjaC1wcm92aWRlclwiKTt9KX0pKX07aC51bmxpbms9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudGEodGhpcy5zZixhKX07aC5xZT1mdW5jdGlvbigpe3ZhciBhPXRoaXM7cmV0dXJuIHRoaXMuZih0aGlzLmdldFRva2VuKCkudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gUShhLmcsT2cse2lkVG9rZW46Yn0pfSkudGhlbihmdW5jdGlvbigpe2EuZGlzcGF0Y2hFdmVudChuZXcgQWkoXCJ1c2VyRGVsZXRlZFwiKSl9KSkudGhlbihmdW5jdGlvbigpe09pKGEpfSl9O1xuaFtcImRlbGV0ZVwiXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRhKHRoaXMucWUpfTtoLm5kPWZ1bmN0aW9uKGEsYil7cmV0dXJuXCJsaW5rVmlhUG9wdXBcIj09YSYmKHRoaXMubGF8fG51bGwpPT1iJiZ0aGlzLmNhfHxcImxpbmtWaWFSZWRpcmVjdFwiPT1hJiYodGhpcy5tY3x8bnVsbCk9PWI/ITA6ITF9O2guSWE9ZnVuY3Rpb24oYSxiLGMsZCl7XCJsaW5rVmlhUG9wdXBcIj09YSYmZD09KHRoaXMubGF8fG51bGwpJiYoYyYmdGhpcy5HYT90aGlzLkdhKGMpOmImJiFjJiZ0aGlzLmNhJiZ0aGlzLmNhKGIpLHRoaXMuSiYmKHRoaXMuSi5jYW5jZWwoKSx0aGlzLko9bnVsbCksZGVsZXRlIHRoaXMuY2EsZGVsZXRlIHRoaXMuR2EpfTtoLnJiPWZ1bmN0aW9uKGEsYil7cmV0dXJuXCJsaW5rVmlhUG9wdXBcIj09YSYmYj09KHRoaXMubGF8fG51bGwpfHxcImxpbmtWaWFSZWRpcmVjdFwiPT1hJiYodGhpcy5tY3x8bnVsbCk9PWI/cih0aGlzLnVlLHRoaXMpOm51bGx9O1xuaC5UYj1mdW5jdGlvbigpe3JldHVybiBxZih0aGlzLnVpZCtcIjo6OlwiKX07XG52YXIgVGk9ZnVuY3Rpb24oYSxiKXtpZighcmYoKSlyZXR1cm4gRShuZXcgTyhcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIikpO3ZhciBjPUlmKGIucHJvdmlkZXJJZCksZD1hLlRiKCksZT1udWxsOyFzZigpJiZhLnYmJmIuaXNPQXV0aFByb3ZpZGVyJiYoZT1maChhLnYsYS5qLGEuQixcImxpbmtWaWFQb3B1cFwiLGIsbnVsbCxkLGZpcmViYXNlLlNES19WRVJTSU9OfHxudWxsKSk7dmFyIGY9Z2YoZSxjJiZjLkJiLGMmJmMuQWIpLGM9UmkoYSxiLnByb3ZpZGVySWQpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gRWkoYSl9KS50aGVuKGZ1bmN0aW9uKCl7U2koYSk7cmV0dXJuIGEuZ2V0VG9rZW4oKX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS5tLkNiKGYsXCJsaW5rVmlhUG9wdXBcIixiLGQsISFlKX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEMoZnVuY3Rpb24oYixjKXthLklhKFwibGlua1ZpYVBvcHVwXCIsbnVsbCxuZXcgTyhcImNhbmNlbGxlZC1wb3B1cC1yZXF1ZXN0XCIpLFxuYS5sYXx8bnVsbCk7YS5jYT1iO2EuR2E9YzthLmxhPWQ7YS5KPWEubS5IYihhLFwibGlua1ZpYVBvcHVwXCIsZixkKX0pfSkudGhlbihmdW5jdGlvbihhKXtmJiZmZihmKTtyZXR1cm4gYX0pLmMoZnVuY3Rpb24oYSl7ZiYmZmYoZik7dGhyb3cgYTt9KTtyZXR1cm4gYS5mKGMpfTtXLnByb3RvdHlwZS5saW5rV2l0aFBvcHVwPWZ1bmN0aW9uKGEpe3ZhciBiPVRpKHRoaXMsYSk7cmV0dXJuIHRoaXMudGEoZnVuY3Rpb24oKXtyZXR1cm4gYn0pfTtcblcucHJvdG90eXBlLlNlPWZ1bmN0aW9uKGEpe2lmKCFyZigpKXJldHVybiBFKG5ldyBPKFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiKSk7dmFyIGI9dGhpcyxjPW51bGwsZD10aGlzLlRiKCksZT1SaSh0aGlzLGEucHJvdmlkZXJJZCkudGhlbihmdW5jdGlvbigpe1NpKGIpO3JldHVybiBiLmdldFRva2VuKCl9KS50aGVuKGZ1bmN0aW9uKCl7Yi5tYz1kO3JldHVybiBFaShiKX0pLnRoZW4oZnVuY3Rpb24oYSl7Yi5IYSYmKGE9Yi5IYSxhPWEuaS5zZXQoVWksYi5EKCksYS51KSk7cmV0dXJuIGF9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGIubS5EYihcImxpbmtWaWFSZWRpcmVjdFwiLGEsZCl9KS5jKGZ1bmN0aW9uKGEpe2M9YTtpZihiLkhhKXJldHVybiBWaShiLkhhKTt0aHJvdyBjO30pLnRoZW4oZnVuY3Rpb24oKXtpZihjKXRocm93IGM7fSk7cmV0dXJuIHRoaXMuZihlKX07XG5XLnByb3RvdHlwZS5saW5rV2l0aFJlZGlyZWN0PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnRhKHRoaXMuU2UsYSl9O3ZhciBTaT1mdW5jdGlvbihhKXtpZighYS5tfHwhYS5pYyl7aWYoYS5tJiYhYS5pYyl0aHJvdyBuZXcgTyhcImludGVybmFsLWVycm9yXCIpO3Rocm93IG5ldyBPKFwiYXV0aC1kb21haW4tY29uZmlnLXJlcXVpcmVkXCIpO319O1cucHJvdG90eXBlLnVlPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpczt0aGlzLkomJih0aGlzLkouY2FuY2VsKCksdGhpcy5KPW51bGwpO3ZhciBkPW51bGwsZT10aGlzLmdldFRva2VuKCkudGhlbihmdW5jdGlvbihkKXtyZXR1cm4gU2YoYy5nLHtyZXF1ZXN0VXJpOmEsc2Vzc2lvbklkOmIsaWRUb2tlbjpkfSl9KS50aGVuKGZ1bmN0aW9uKGEpe2Q9Y2coYSk7cmV0dXJuIGMudWQoYSl9KS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybnt1c2VyOmEsY3JlZGVudGlhbDpkfX0pO3JldHVybiB0aGlzLmYoZSl9O1xuVy5wcm90b3R5cGUuc2VuZEVtYWlsVmVyaWZpY2F0aW9uPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm4gdGhpcy5mKHRoaXMuZ2V0VG9rZW4oKS50aGVuKGZ1bmN0aW9uKGIpe3JldHVybiBhLmcuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKGIpfSkudGhlbihmdW5jdGlvbihiKXtpZihhLmVtYWlsIT1iKXJldHVybiBhLnJlbG9hZCgpfSkudGhlbihmdW5jdGlvbigpe30pKX07dmFyIE9pPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wO2I8YS5aLmxlbmd0aDtiKyspYS5aW2JdLmNhbmNlbChcImFwcC1kZWxldGVkXCIpO2EuWj1bXTthLnJlPSEwO04oYSxcInJlZnJlc2hUb2tlblwiLG51bGwpO2EubSYmYS5tLnVuc3Vic2NyaWJlKGEpfTtXLnByb3RvdHlwZS5mPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7dGhpcy5aLnB1c2goYSk7bmQoYSxmdW5jdGlvbigpe0phKGIuWixhKX0pO3JldHVybiBhfTtXLnByb3RvdHlwZS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5EKCl9O1xuVy5wcm90b3R5cGUuRD1mdW5jdGlvbigpe3ZhciBhPXt1aWQ6dGhpcy51aWQsZGlzcGxheU5hbWU6dGhpcy5kaXNwbGF5TmFtZSxwaG90b1VSTDp0aGlzLnBob3RvVVJMLGVtYWlsOnRoaXMuZW1haWwsZW1haWxWZXJpZmllZDp0aGlzLmVtYWlsVmVyaWZpZWQsaXNBbm9ueW1vdXM6dGhpcy5pc0Fub255bW91cyxwcm92aWRlckRhdGE6W10sYXBpS2V5OnRoaXMuaixhcHBOYW1lOnRoaXMuQixhdXRoRG9tYWluOnRoaXMudixzdHNUb2tlbk1hbmFnZXI6dGhpcy5lYS5EKCkscmVkaXJlY3RFdmVudElkOnRoaXMubWN8fG51bGx9O3godGhpcy5wcm92aWRlckRhdGEsZnVuY3Rpb24oYil7YS5wcm92aWRlckRhdGEucHVzaChEZihiKSl9KTtyZXR1cm4gYX07XG52YXIgV2k9ZnVuY3Rpb24oYSl7aWYoIWEuYXBpS2V5KXJldHVybiBudWxsO3ZhciBiPXthcGlLZXk6YS5hcGlLZXksYXV0aERvbWFpbjphLmF1dGhEb21haW4sYXBwTmFtZTphLmFwcE5hbWV9LGM9e307aWYoYS5zdHNUb2tlbk1hbmFnZXImJmEuc3RzVG9rZW5NYW5hZ2VyLmFjY2Vzc1Rva2VuJiZhLnN0c1Rva2VuTWFuYWdlci5leHBpcmF0aW9uVGltZSljLmlkVG9rZW49YS5zdHNUb2tlbk1hbmFnZXIuYWNjZXNzVG9rZW4sYy5yZWZyZXNoVG9rZW49YS5zdHNUb2tlbk1hbmFnZXIucmVmcmVzaFRva2VufHxudWxsLGMuZXhwaXJlc0luPShhLnN0c1Rva2VuTWFuYWdlci5leHBpcmF0aW9uVGltZS1rYSgpKS8xRTM7ZWxzZSByZXR1cm4gbnVsbDt2YXIgZD1uZXcgVyhiLGMsYSk7YS5wcm92aWRlckRhdGEmJngoYS5wcm92aWRlckRhdGEsZnVuY3Rpb24oYSl7aWYoYSl7dmFyIGI9e307Q2YoYixhKTtLaShkLGIpfX0pO2EucmVkaXJlY3RFdmVudElkJiYoZC5tYz1hLnJlZGlyZWN0RXZlbnRJZCk7XG5yZXR1cm4gZH0sWGk9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPW5ldyBXKGEsYik7YyYmKGQuSGE9Yyk7cmV0dXJuIGQucmVsb2FkKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBkfSl9O3ZhciBZaT1mdW5jdGlvbihhKXt0aGlzLnU9YTt0aGlzLmk9TGgoKX0sVWk9e25hbWU6XCJyZWRpcmVjdFVzZXJcIixJOiExfSxWaT1mdW5jdGlvbihhKXtyZXR1cm4gYS5pLnJlbW92ZShVaSxhLnUpfSxaaT1mdW5jdGlvbihhLGIpe3JldHVybiBhLmkuZ2V0KFVpLGEudSkudGhlbihmdW5jdGlvbihhKXthJiZiJiYoYS5hdXRoRG9tYWluPWIpO3JldHVybiBXaShhfHx7fSl9KX07dmFyICRpPWZ1bmN0aW9uKGEpe3RoaXMudT1hO3RoaXMuaT1MaCgpfSxhaj17bmFtZTpcImF1dGhVc2VyXCIsSTohMH0sYmo9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5pLnNldChhaixiLkQoKSxhLnUpfSxjaj1mdW5jdGlvbihhKXtyZXR1cm4gYS5pLnJlbW92ZShhaixhLnUpfSxkaj1mdW5jdGlvbihhLGIpe3JldHVybiBhLmkuZ2V0KGFqLGEudSkudGhlbihmdW5jdGlvbihhKXthJiZiJiYoYS5hdXRoRG9tYWluPWIpO3JldHVybiBXaShhfHx7fSl9KX07dmFyIFk9ZnVuY3Rpb24oYSl7dGhpcy5RYT0hMTtOKHRoaXMsXCJhcHBcIixhKTtpZihYKHRoaXMpLm9wdGlvbnMmJlgodGhpcykub3B0aW9ucy5hcGlLZXkpYT1maXJlYmFzZS5TREtfVkVSU0lPTj9wZihmaXJlYmFzZS5TREtfVkVSU0lPTik6bnVsbCx0aGlzLmc9bmV3IFIoWCh0aGlzKS5vcHRpb25zJiZYKHRoaXMpLm9wdGlvbnMuYXBpS2V5LG51bGwsYSk7ZWxzZSB0aHJvdyBuZXcgTyhcImludmFsaWQtYXBpLWtleVwiKTt0aGlzLlo9W107dGhpcy5PYT1bXTt0aGlzLlplPWZpcmViYXNlLklOVEVSTkFMLmNyZWF0ZVN1YnNjcmliZShyKHRoaXMuTGUsdGhpcykpO2VqKHRoaXMsbnVsbCk7dGhpcy5vYT1uZXcgJGkoWCh0aGlzKS5vcHRpb25zLmFwaUtleStcIjpcIitYKHRoaXMpLm5hbWUpO3RoaXMuY2I9bmV3IFlpKFgodGhpcykub3B0aW9ucy5hcGlLZXkrXCI6XCIrWCh0aGlzKS5uYW1lKTt0aGlzLk9iPXRoaXMuZihmaih0aGlzKSk7dGhpcy51YT10aGlzLmYoZ2oodGhpcykpO3RoaXMuUmM9XG4hMTt0aGlzLkxjPXIodGhpcy5tZix0aGlzKTt0aGlzLllkPXIodGhpcy5VYSx0aGlzKTt0aGlzLlpkPXIodGhpcy5IZSx0aGlzKTt0aGlzLlhkPXIodGhpcy5HZSx0aGlzKTtoaih0aGlzKTt0aGlzLklOVEVSTkFMPXt9O3RoaXMuSU5URVJOQUxbXCJkZWxldGVcIl09cih0aGlzW1wiZGVsZXRlXCJdLHRoaXMpfTtZLnByb3RvdHlwZS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm57YXBpS2V5OlgodGhpcykub3B0aW9ucy5hcGlLZXksYXV0aERvbWFpbjpYKHRoaXMpLm9wdGlvbnMuYXV0aERvbWFpbixhcHBOYW1lOlgodGhpcykubmFtZSxjdXJyZW50VXNlcjpaKHRoaXMpJiZaKHRoaXMpLkQoKX19O1xudmFyIGlqPWZ1bmN0aW9uKGEpe3JldHVybiBhLnNlfHxFKG5ldyBPKFwiYXV0aC1kb21haW4tY29uZmlnLXJlcXVpcmVkXCIpKX0saGo9ZnVuY3Rpb24oYSl7dmFyIGI9WChhKS5vcHRpb25zLmF1dGhEb21haW4sYz1YKGEpLm9wdGlvbnMuYXBpS2V5O2ImJnJmKCkmJihhLnNlPWEuT2IudGhlbihmdW5jdGlvbigpe2lmKCFhLlFhKXJldHVybiBhLm09cGkoYixjLFgoYSkubmFtZSksYS5tLnN1YnNjcmliZShhKSxaKGEpJiZGaShaKGEpKSxhLmJkJiYoRmkoYS5iZCksYS5iZD1udWxsKSxhLm19KSl9O2g9WS5wcm90b3R5cGU7aC5uZD1mdW5jdGlvbihhLGIpe3N3aXRjaChhKXtjYXNlIFwidW5rbm93blwiOmNhc2UgXCJzaWduSW5WaWFSZWRpcmVjdFwiOnJldHVybiEwO2Nhc2UgXCJzaWduSW5WaWFQb3B1cFwiOnJldHVybiB0aGlzLmxhPT1iJiYhIXRoaXMuY2E7ZGVmYXVsdDpyZXR1cm4hMX19O1xuaC5JYT1mdW5jdGlvbihhLGIsYyxkKXtcInNpZ25JblZpYVBvcHVwXCI9PWEmJnRoaXMubGE9PWQmJihjJiZ0aGlzLkdhP3RoaXMuR2EoYyk6YiYmIWMmJnRoaXMuY2EmJnRoaXMuY2EoYiksdGhpcy5KJiYodGhpcy5KLmNhbmNlbCgpLHRoaXMuSj1udWxsKSxkZWxldGUgdGhpcy5jYSxkZWxldGUgdGhpcy5HYSl9O2gucmI9ZnVuY3Rpb24oYSxiKXtyZXR1cm5cInNpZ25JblZpYVJlZGlyZWN0XCI9PWF8fFwic2lnbkluVmlhUG9wdXBcIj09YSYmdGhpcy5sYT09YiYmdGhpcy5jYT9yKHRoaXMudmUsdGhpcyk6bnVsbH07XG5oLnZlPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpczthPXtyZXF1ZXN0VXJpOmEsc2Vzc2lvbklkOmJ9O3RoaXMuSiYmKHRoaXMuSi5jYW5jZWwoKSx0aGlzLko9bnVsbCk7dmFyIGQ9bnVsbCxlPVFmKGMuZyxhKS50aGVuKGZ1bmN0aW9uKGEpe2Q9Y2coYSk7cmV0dXJuIGF9KTthPWMuT2IudGhlbihmdW5jdGlvbigpe3JldHVybiBlfSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gamooYyxhKX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm57dXNlcjpaKGMpLGNyZWRlbnRpYWw6ZH19KTtyZXR1cm4gdGhpcy5mKGEpfTtoLlRiPWZ1bmN0aW9uKCl7cmV0dXJuIHFmKCl9O1xuaC5zaWduSW5XaXRoUG9wdXA9ZnVuY3Rpb24oYSl7aWYoIXJmKCkpcmV0dXJuIEUobmV3IE8oXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpKTt2YXIgYj10aGlzLGM9SWYoYS5wcm92aWRlcklkKSxkPXRoaXMuVGIoKSxlPW51bGw7IXNmKCkmJlgodGhpcykub3B0aW9ucy5hdXRoRG9tYWluJiZhLmlzT0F1dGhQcm92aWRlciYmKGU9ZmgoWCh0aGlzKS5vcHRpb25zLmF1dGhEb21haW4sWCh0aGlzKS5vcHRpb25zLmFwaUtleSxYKHRoaXMpLm5hbWUsXCJzaWduSW5WaWFQb3B1cFwiLGEsbnVsbCxkLGZpcmViYXNlLlNES19WRVJTSU9OfHxudWxsKSk7dmFyIGY9Z2YoZSxjJiZjLkJiLGMmJmMuQWIpLGM9aWoodGhpcykudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gYi5DYihmLFwic2lnbkluVmlhUG9wdXBcIixhLGQsISFlKX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEMoZnVuY3Rpb24oYSxjKXtiLklhKFwic2lnbkluVmlhUG9wdXBcIixudWxsLG5ldyBPKFwiY2FuY2VsbGVkLXBvcHVwLXJlcXVlc3RcIiksXG5iLmxhKTtiLmNhPWE7Yi5HYT1jO2IubGE9ZDtiLko9Yi5tLkhiKGIsXCJzaWduSW5WaWFQb3B1cFwiLGYsZCl9KX0pLnRoZW4oZnVuY3Rpb24oYSl7ZiYmZmYoZik7cmV0dXJuIGF9KS5jKGZ1bmN0aW9uKGEpe2YmJmZmKGYpO3Rocm93IGE7fSk7cmV0dXJuIHRoaXMuZihjKX07aC5zaWduSW5XaXRoUmVkaXJlY3Q9ZnVuY3Rpb24oYSl7aWYoIXJmKCkpcmV0dXJuIEUobmV3IE8oXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpKTt2YXIgYj10aGlzLGM9aWoodGhpcykudGhlbihmdW5jdGlvbigpe3JldHVybiBiLm0uRGIoXCJzaWduSW5WaWFSZWRpcmVjdFwiLGEpfSk7cmV0dXJuIHRoaXMuZihjKX07XG5oLmdldFJlZGlyZWN0UmVzdWx0PWZ1bmN0aW9uKCl7aWYoIXJmKCkpcmV0dXJuIEUobmV3IE8oXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpKTt2YXIgYT10aGlzLGI9aWoodGhpcykudGhlbihmdW5jdGlvbigpe3JldHVybiBhLm0uZ2V0UmVkaXJlY3RSZXN1bHQoKX0pO3JldHVybiB0aGlzLmYoYil9O1xudmFyIGpqPWZ1bmN0aW9uKGEsYil7dmFyIGM9e307Yy5hcGlLZXk9WChhKS5vcHRpb25zLmFwaUtleTtjLmF1dGhEb21haW49WChhKS5vcHRpb25zLmF1dGhEb21haW47Yy5hcHBOYW1lPVgoYSkubmFtZTtyZXR1cm4gYS5PYi50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIFhpKGMsYixhLmNiKX0pLnRoZW4oZnVuY3Rpb24oYil7aWYoWihhKSYmYi51aWQ9PVooYSkudWlkKXJldHVybiBaKGEpLmNvcHkoYiksYS5VYShiKTtlaihhLGIpO0ZpKGIpO3JldHVybiBhLlVhKGIpfSkudGhlbihmdW5jdGlvbigpe2EuRWEoKX0pfSxlaj1mdW5jdGlvbihhLGIpe1ooYSkmJihEaShaKGEpLGEuWWQpLGNjKFooYSksXCJ0b2tlbkNoYW5nZWRcIixhLlpkKSxjYyhaKGEpLFwidXNlckRlbGV0ZWRcIixhLlhkKSk7YiYmKGIucWMucHVzaChhLllkKSxVYihiLFwidG9rZW5DaGFuZ2VkXCIsYS5aZCksVWIoYixcInVzZXJEZWxldGVkXCIsYS5YZCkpO04oYSxcImN1cnJlbnRVc2VyXCIsYil9O1xuWS5wcm90b3R5cGUuc2lnbk91dD1mdW5jdGlvbigpe3ZhciBhPXRoaXMsYj10aGlzLnVhLnRoZW4oZnVuY3Rpb24oKXtpZighWihhKSlyZXR1cm4gRCgpO2VqKGEsbnVsbCk7cmV0dXJuIGNqKGEub2EpLnRoZW4oZnVuY3Rpb24oKXthLkVhKCl9KX0pO3JldHVybiB0aGlzLmYoYil9O1xudmFyIGtqPWZ1bmN0aW9uKGEpe3ZhciBiPVppKGEuY2IsWChhKS5vcHRpb25zLmF1dGhEb21haW4pLnRoZW4oZnVuY3Rpb24oYil7aWYoYS5iZD1iKWIuSGE9YS5jYjtyZXR1cm4gVmkoYS5jYil9KTtyZXR1cm4gYS5mKGIpfSxmaj1mdW5jdGlvbihhKXt2YXIgYj1YKGEpLm9wdGlvbnMuYXV0aERvbWFpbixjPWtqKGEpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZGooYS5vYSxiKX0pLnRoZW4oZnVuY3Rpb24oYil7cmV0dXJuIGI/KGIuSGE9YS5jYixiLnJlbG9hZCgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYmooYS5vYSxiKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGJ9KX0pLmMoZnVuY3Rpb24oYyl7cmV0dXJuXCJhdXRoL25ldHdvcmstcmVxdWVzdC1mYWlsZWRcIj09Yy5jb2RlP2I6Y2ooYS5vYSl9KSk6bnVsbH0pLnRoZW4oZnVuY3Rpb24oYil7ZWooYSxifHxudWxsKX0pO3JldHVybiBhLmYoYyl9LGdqPWZ1bmN0aW9uKGEpe3JldHVybiBhLk9iLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS5nZXRSZWRpcmVjdFJlc3VsdCgpfSkuYyhmdW5jdGlvbigpe30pLnRoZW4oZnVuY3Rpb24oKXtpZighYS5RYSlyZXR1cm4gYS5MYygpfSkuYyhmdW5jdGlvbigpe30pLnRoZW4oZnVuY3Rpb24oKXtpZighYS5RYSl7YS5SYz1cbiEwO3ZhciBiPWEub2E7Yi5pLmFkZExpc3RlbmVyKGFqLGIudSxhLkxjKX19KX07WS5wcm90b3R5cGUubWY9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3JldHVybiBkaih0aGlzLm9hLFgodGhpcykub3B0aW9ucy5hdXRoRG9tYWluKS50aGVuKGZ1bmN0aW9uKGIpe2lmKCFhLlFhKXt2YXIgYztpZihjPVooYSkmJmIpe2M9WihhKS51aWQ7dmFyIGQ9Yi51aWQ7Yz12b2lkIDA9PT1jfHxudWxsPT09Y3x8XCJcIj09PWN8fHZvaWQgMD09PWR8fG51bGw9PT1kfHxcIlwiPT09ZD8hMTpjPT1kfWlmKGMpcmV0dXJuIFooYSkuY29weShiKSxaKGEpLmdldFRva2VuKCk7aWYoWihhKXx8YillaihhLGIpLGImJihGaShiKSxiLkhhPWEuY2IpLGEubSYmYS5tLnN1YnNjcmliZShhKSxhLkVhKCl9fSl9O1kucHJvdG90eXBlLlVhPWZ1bmN0aW9uKGEpe3JldHVybiBiaih0aGlzLm9hLGEpfTtZLnByb3RvdHlwZS5IZT1mdW5jdGlvbigpe3RoaXMuRWEoKTt0aGlzLlVhKFoodGhpcykpfTtcblkucHJvdG90eXBlLkdlPWZ1bmN0aW9uKCl7dGhpcy5zaWduT3V0KCl9O3ZhciBsaj1mdW5jdGlvbihhLGIpe3JldHVybiBhLmYoYi50aGVuKGZ1bmN0aW9uKGIpe3JldHVybiBqaihhLGIpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBaKGEpfSkpfTtoPVkucHJvdG90eXBlO2guTGU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczt0aGlzLmFkZEF1dGhUb2tlbkxpc3RlbmVyKGZ1bmN0aW9uKCl7YS5uZXh0KFooYikpfSl9O2gub25BdXRoU3RhdGVDaGFuZ2VkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzO3RoaXMuUmMmJmZpcmViYXNlLlByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKXtxKGEpP2EoWihkKSk6cShhLm5leHQpJiZhLm5leHQoWihkKSl9KTtyZXR1cm4gdGhpcy5aZShhLGIsYyl9O1xuaC5nZXRUb2tlbj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9dGhpcy51YS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIFooYik/WihiKS5nZXRUb2tlbihhKS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybnthY2Nlc3NUb2tlbjphfX0pOm51bGx9KTtyZXR1cm4gdGhpcy5mKGMpfTtoLnNpZ25JbldpdGhDdXN0b21Ub2tlbj1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiB0aGlzLnVhLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbGooYixRKGIuZyxRZyx7dG9rZW46YX0pKX0pLnRoZW4oZnVuY3Rpb24oYSl7TGkoYSxcImlzQW5vbnltb3VzXCIsITEpO3JldHVybiBiLlVhKGEpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBaKGIpfSl9O2guc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiB0aGlzLnVhLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbGooYyxRKGMuZyxaZix7ZW1haWw6YSxwYXNzd29yZDpifSkpfSl9O1xuaC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiB0aGlzLnVhLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbGooYyxRKGMuZyxOZyx7ZW1haWw6YSxwYXNzd29yZDpifSkpfSl9O2guc2lnbkluV2l0aENyZWRlbnRpYWw9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gdGhpcy51YS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGxqKGIsYS5VYihiLmcpKX0pfTtoLnNpZ25JbkFub255bW91c2x5PWZ1bmN0aW9uKCl7dmFyIGE9Wih0aGlzKSxiPXRoaXM7cmV0dXJuIGEmJmEuaXNBbm9ueW1vdXM/RChhKTp0aGlzLnVhLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbGooYixiLmcuc2lnbkluQW5vbnltb3VzbHkoKSl9KS50aGVuKGZ1bmN0aW9uKGEpe0xpKGEsXCJpc0Fub255bW91c1wiLCEwKTtyZXR1cm4gYi5VYShhKX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gWihiKX0pfTtcbnZhciBYPWZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcH0sWj1mdW5jdGlvbihhKXtyZXR1cm4gYS5jdXJyZW50VXNlcn07aD1ZLnByb3RvdHlwZTtoLkVhPWZ1bmN0aW9uKCl7aWYodGhpcy5SYylmb3IodmFyIGE9MDthPHRoaXMuT2EubGVuZ3RoO2ErKylpZih0aGlzLk9hW2FdKXRoaXMuT2FbYV0oWih0aGlzKSYmWih0aGlzKS5fbGF0fHxudWxsKX07aC5hZGRBdXRoVG9rZW5MaXN0ZW5lcj1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3RoaXMuT2EucHVzaChhKTt0aGlzLmYodGhpcy51YS50aGVuKGZ1bmN0aW9uKCl7Yi5RYXx8SGEoYi5PYSxhKSYmYShaKGIpJiZaKGIpLl9sYXR8fG51bGwpfSkpfTtoLnJlbW92ZUF1dGhUb2tlbkxpc3RlbmVyPWZ1bmN0aW9uKGEpe0thKHRoaXMuT2EsZnVuY3Rpb24oYil7cmV0dXJuIGI9PWF9KX07XG5oW1wiZGVsZXRlXCJdPWZ1bmN0aW9uKCl7dGhpcy5RYT0hMDtmb3IodmFyIGE9MDthPHRoaXMuWi5sZW5ndGg7YSsrKXRoaXMuWlthXS5jYW5jZWwoXCJhcHAtZGVsZXRlZFwiKTt0aGlzLlo9W107dGhpcy5vYSYmKGE9dGhpcy5vYSxhLmkucmVtb3ZlTGlzdGVuZXIoYWosYS51LHRoaXMuTGMpKTt0aGlzLm0mJnRoaXMubS51bnN1YnNjcmliZSh0aGlzKTtyZXR1cm4gZmlyZWJhc2UuUHJvbWlzZS5yZXNvbHZlKCl9O2guZj1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3RoaXMuWi5wdXNoKGEpO25kKGEsZnVuY3Rpb24oKXtKYShiLlosYSl9KTtyZXR1cm4gYX07aC5mZXRjaFByb3ZpZGVyc0ZvckVtYWlsPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmYodWcodGhpcy5nLGEpKX07aC52ZXJpZnlQYXNzd29yZFJlc2V0Q29kZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5jaGVja0FjdGlvbkNvZGUoYSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gYS5kYXRhLmVtYWlsfSl9O1xuaC5jb25maXJtUGFzc3dvcmRSZXNldD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmYodGhpcy5nLmNvbmZpcm1QYXNzd29yZFJlc2V0KGEsYikudGhlbihmdW5jdGlvbigpe30pKX07aC5jaGVja0FjdGlvbkNvZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZih0aGlzLmcuY2hlY2tBY3Rpb25Db2RlKGEpLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyB6aChhKX0pKX07aC5hcHBseUFjdGlvbkNvZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZih0aGlzLmcuYXBwbHlBY3Rpb25Db2RlKGEpLnRoZW4oZnVuY3Rpb24oKXt9KSl9O2guc2VuZFBhc3N3b3JkUmVzZXRFbWFpbD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5mKHRoaXMuZy5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGEpLnRoZW4oZnVuY3Rpb24oKXt9KSl9O0hoKFkucHJvdG90eXBlLHthcHBseUFjdGlvbkNvZGU6e25hbWU6XCJhcHBseUFjdGlvbkNvZGVcIixhOltTKFwiY29kZVwiKV19LGNoZWNrQWN0aW9uQ29kZTp7bmFtZTpcImNoZWNrQWN0aW9uQ29kZVwiLGE6W1MoXCJjb2RlXCIpXX0sY29uZmlybVBhc3N3b3JkUmVzZXQ6e25hbWU6XCJjb25maXJtUGFzc3dvcmRSZXNldFwiLGE6W1MoXCJjb2RlXCIpLFMoXCJuZXdQYXNzd29yZFwiKV19LGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZDp7bmFtZTpcImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZFwiLGE6W1MoXCJlbWFpbFwiKSxTKFwicGFzc3dvcmRcIildfSxmZXRjaFByb3ZpZGVyc0ZvckVtYWlsOntuYW1lOlwiZmV0Y2hQcm92aWRlcnNGb3JFbWFpbFwiLGE6W1MoXCJlbWFpbFwiKV19LGdldFJlZGlyZWN0UmVzdWx0OntuYW1lOlwiZ2V0UmVkaXJlY3RSZXN1bHRcIixhOltdfSxvbkF1dGhTdGF0ZUNoYW5nZWQ6e25hbWU6XCJvbkF1dGhTdGF0ZUNoYW5nZWRcIixhOltGaChUKCksQmgoKSxcIm5leHRPck9ic2VydmVyXCIpLFxuQmgoXCJvcHRfZXJyb3JcIiwhMCksQmgoXCJvcHRfY29tcGxldGVkXCIsITApXX0sc2VuZFBhc3N3b3JkUmVzZXRFbWFpbDp7bmFtZTpcInNlbmRQYXNzd29yZFJlc2V0RW1haWxcIixhOltTKFwiZW1haWxcIildfSxzaWduSW5Bbm9ueW1vdXNseTp7bmFtZTpcInNpZ25JbkFub255bW91c2x5XCIsYTpbXX0sc2lnbkluV2l0aENyZWRlbnRpYWw6e25hbWU6XCJzaWduSW5XaXRoQ3JlZGVudGlhbFwiLGE6W0RoKCldfSxzaWduSW5XaXRoQ3VzdG9tVG9rZW46e25hbWU6XCJzaWduSW5XaXRoQ3VzdG9tVG9rZW5cIixhOltTKFwidG9rZW5cIildfSxzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZDp7bmFtZTpcInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkXCIsYTpbUyhcImVtYWlsXCIpLFMoXCJwYXNzd29yZFwiKV19LHNpZ25JbldpdGhQb3B1cDp7bmFtZTpcInNpZ25JbldpdGhQb3B1cFwiLGE6W0VoKCldfSxzaWduSW5XaXRoUmVkaXJlY3Q6e25hbWU6XCJzaWduSW5XaXRoUmVkaXJlY3RcIixhOltFaCgpXX0sc2lnbk91dDp7bmFtZTpcInNpZ25PdXRcIixcbmE6W119LHRvSlNPTjp7bmFtZTpcInRvSlNPTlwiLGE6W1MobnVsbCwhMCldfSx2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZTp7bmFtZTpcInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlXCIsYTpbUyhcImNvZGVcIildfX0pO1xuSGgoVy5wcm90b3R5cGUse1wiZGVsZXRlXCI6e25hbWU6XCJkZWxldGVcIixhOltdfSxnZXRUb2tlbjp7bmFtZTpcImdldFRva2VuXCIsYTpbe25hbWU6XCJvcHRfZm9yY2VSZWZyZXNoXCIsZmE6XCJhIGJvb2xlYW5cIixvcHRpb25hbDohMCxoYTpmdW5jdGlvbihhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGF9fV19LGxpbms6e25hbWU6XCJsaW5rXCIsYTpbRGgoKV19LGxpbmtXaXRoUG9wdXA6e25hbWU6XCJsaW5rV2l0aFBvcHVwXCIsYTpbRWgoKV19LGxpbmtXaXRoUmVkaXJlY3Q6e25hbWU6XCJsaW5rV2l0aFJlZGlyZWN0XCIsYTpbRWgoKV19LHJlYXV0aGVudGljYXRlOntuYW1lOlwicmVhdXRoZW50aWNhdGVcIixhOltEaCgpXX0scmVsb2FkOntuYW1lOlwicmVsb2FkXCIsYTpbXX0sc2VuZEVtYWlsVmVyaWZpY2F0aW9uOntuYW1lOlwic2VuZEVtYWlsVmVyaWZpY2F0aW9uXCIsYTpbXX0sdG9KU09OOntuYW1lOlwidG9KU09OXCIsYTpbUyhudWxsLCEwKV19LHVubGluazp7bmFtZTpcInVubGlua1wiLGE6W1MoXCJwcm92aWRlclwiKV19LFxudXBkYXRlRW1haWw6e25hbWU6XCJ1cGRhdGVFbWFpbFwiLGE6W1MoXCJlbWFpbFwiKV19LHVwZGF0ZVBhc3N3b3JkOntuYW1lOlwidXBkYXRlUGFzc3dvcmRcIixhOltTKFwicGFzc3dvcmRcIildfSx1cGRhdGVQcm9maWxlOntuYW1lOlwidXBkYXRlUHJvZmlsZVwiLGE6W1QoXCJwcm9maWxlXCIpXX19KTtIaChDLnByb3RvdHlwZSx7Yzp7bmFtZTpcImNhdGNoXCJ9LHRoZW46e25hbWU6XCJ0aGVuXCJ9fSk7VShhZyxcImNyZWRlbnRpYWxcIixmdW5jdGlvbihhLGIpe3JldHVybiBuZXcgWWYoYSxiKX0sW1MoXCJlbWFpbFwiKSxTKFwicGFzc3dvcmRcIildKTtIaChVZi5wcm90b3R5cGUse2FkZFNjb3BlOntuYW1lOlwiYWRkU2NvcGVcIixhOltTKFwic2NvcGVcIildfSxzZXRDdXN0b21QYXJhbWV0ZXJzOntuYW1lOlwic2V0Q3VzdG9tUGFyYW1ldGVyc1wiLGE6W1QoXCJjdXN0b21PQXV0aFBhcmFtZXRlcnNcIildfX0pO1UoVWYsXCJjcmVkZW50aWFsXCIsVWYuY3JlZGVudGlhbCxbRmgoUygpLFQoKSxcInRva2VuXCIpXSk7XG5IaChWZi5wcm90b3R5cGUse2FkZFNjb3BlOntuYW1lOlwiYWRkU2NvcGVcIixhOltTKFwic2NvcGVcIildfSxzZXRDdXN0b21QYXJhbWV0ZXJzOntuYW1lOlwic2V0Q3VzdG9tUGFyYW1ldGVyc1wiLGE6W1QoXCJjdXN0b21PQXV0aFBhcmFtZXRlcnNcIildfX0pO1UoVmYsXCJjcmVkZW50aWFsXCIsVmYuY3JlZGVudGlhbCxbRmgoUygpLFQoKSxcInRva2VuXCIpXSk7SGgoV2YucHJvdG90eXBlLHthZGRTY29wZTp7bmFtZTpcImFkZFNjb3BlXCIsYTpbUyhcInNjb3BlXCIpXX0sc2V0Q3VzdG9tUGFyYW1ldGVyczp7bmFtZTpcInNldEN1c3RvbVBhcmFtZXRlcnNcIixhOltUKFwiY3VzdG9tT0F1dGhQYXJhbWV0ZXJzXCIpXX19KTtVKFdmLFwiY3JlZGVudGlhbFwiLFdmLmNyZWRlbnRpYWwsW0ZoKFMoKSxGaChUKCksQ2goKSksXCJpZFRva2VuXCIpLEZoKFMoKSxDaCgpLFwiYWNjZXNzVG9rZW5cIiwhMCldKTtIaChYZi5wcm90b3R5cGUse3NldEN1c3RvbVBhcmFtZXRlcnM6e25hbWU6XCJzZXRDdXN0b21QYXJhbWV0ZXJzXCIsYTpbVChcImN1c3RvbU9BdXRoUGFyYW1ldGVyc1wiKV19fSk7XG5VKFhmLFwiY3JlZGVudGlhbFwiLFhmLmNyZWRlbnRpYWwsW0ZoKFMoKSxUKCksXCJ0b2tlblwiKSxTKFwic2VjcmV0XCIsITApXSk7XG4oZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGZpcmViYXNlJiZmaXJlYmFzZS5JTlRFUk5BTCYmZmlyZWJhc2UuSU5URVJOQUwucmVnaXN0ZXJTZXJ2aWNlKXt2YXIgYT17QXV0aDpZLEVycm9yOk99O1UoYSxcIkVtYWlsQXV0aFByb3ZpZGVyXCIsYWcsW10pO1UoYSxcIkZhY2Vib29rQXV0aFByb3ZpZGVyXCIsVWYsW10pO1UoYSxcIkdpdGh1YkF1dGhQcm92aWRlclwiLFZmLFtdKTtVKGEsXCJHb29nbGVBdXRoUHJvdmlkZXJcIixXZixbXSk7VShhLFwiVHdpdHRlckF1dGhQcm92aWRlclwiLFhmLFtdKTtmaXJlYmFzZS5JTlRFUk5BTC5yZWdpc3RlclNlcnZpY2UoXCJhdXRoXCIsZnVuY3Rpb24oYSxjKXthPW5ldyBZKGEpO2Moe0lOVEVSTkFMOntnZXRUb2tlbjpyKGEuZ2V0VG9rZW4sYSksYWRkQXV0aFRva2VuTGlzdGVuZXI6cihhLmFkZEF1dGhUb2tlbkxpc3RlbmVyLGEpLHJlbW92ZUF1dGhUb2tlbkxpc3RlbmVyOnIoYS5yZW1vdmVBdXRoVG9rZW5MaXN0ZW5lcixhKX19KTtyZXR1cm4gYX0sXG5hLGZ1bmN0aW9uKGEsYyl7aWYoXCJjcmVhdGVcIj09PWEpdHJ5e2MuYXV0aCgpfWNhdGNoKGQpe319KTtmaXJlYmFzZS5JTlRFUk5BTC5leHRlbmROYW1lc3BhY2Uoe1VzZXI6V30pfWVsc2UgdGhyb3cgRXJyb3IoXCJDYW5ub3QgZmluZCB0aGUgZmlyZWJhc2UgbmFtZXNwYWNlOyBiZSBzdXJlIHRvIGluY2x1ZGUgZmlyZWJhc2UtYXBwLmpzIGJlZm9yZSB0aGlzIGxpYnJhcnkuXCIpO30pKCk7fSkuY2FsbCh0aGlzKTtcbn0pLmNhbGwoZ2xvYmFsKTtcbm1vZHVsZS5leHBvcnRzID0gZmlyZWJhc2UuYXV0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9maXJlYmFzZS9hdXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxODlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGZpcmViYXNlID0gcmVxdWlyZSgnLi9hcHAnKTtcbihmdW5jdGlvbigpe1xuLyohIEBsaWNlbnNlIEZpcmViYXNlIHYzLjYuNVxuICAgIEJ1aWxkOiAzLjYuNS1yYy4xXG4gICAgVGVybXM6IGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS90ZXJtcy9cblxuICAgIC0tLVxuXG4gICAgdHlwZWRhcnJheS5qc1xuICAgIENvcHlyaWdodCAoYykgMjAxMCwgTGluZGVuIFJlc2VhcmNoLCBJbmMuXG5cbiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gICAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICAgIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAgICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gICAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gICAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gICAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gICAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gICAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gICAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gICAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICAgIFRIRSBTT0ZUV0FSRS4gKi9cbihmdW5jdGlvbigpIHt2YXIgZyxhYT10aGlzO2Z1bmN0aW9uIG4oYSl7cmV0dXJuIHZvaWQgMCE9PWF9ZnVuY3Rpb24gYmEoKXt9ZnVuY3Rpb24gY2EoYSl7YS5WYj1mdW5jdGlvbigpe3JldHVybiBhLlllP2EuWWU6YS5ZZT1uZXcgYX19XG5mdW5jdGlvbiBkYShhKXt2YXIgYj10eXBlb2YgYTtpZihcIm9iamVjdFwiPT1iKWlmKGEpe2lmKGEgaW5zdGFuY2VvZiBBcnJheSlyZXR1cm5cImFycmF5XCI7aWYoYSBpbnN0YW5jZW9mIE9iamVjdClyZXR1cm4gYjt2YXIgYz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSk7aWYoXCJbb2JqZWN0IFdpbmRvd11cIj09YylyZXR1cm5cIm9iamVjdFwiO2lmKFwiW29iamVjdCBBcnJheV1cIj09Y3x8XCJudW1iZXJcIj09dHlwZW9mIGEubGVuZ3RoJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5zcGxpY2UmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnByb3BlcnR5SXNFbnVtZXJhYmxlJiYhYS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcInNwbGljZVwiKSlyZXR1cm5cImFycmF5XCI7aWYoXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT1jfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5jYWxsJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5wcm9wZXJ0eUlzRW51bWVyYWJsZSYmIWEucHJvcGVydHlJc0VudW1lcmFibGUoXCJjYWxsXCIpKXJldHVyblwiZnVuY3Rpb25cIn1lbHNlIHJldHVyblwibnVsbFwiO1xuZWxzZSBpZihcImZ1bmN0aW9uXCI9PWImJlwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmNhbGwpcmV0dXJuXCJvYmplY3RcIjtyZXR1cm4gYn1mdW5jdGlvbiBlYShhKXtyZXR1cm5cImFycmF5XCI9PWRhKGEpfWZ1bmN0aW9uIGZhKGEpe3ZhciBiPWRhKGEpO3JldHVyblwiYXJyYXlcIj09Ynx8XCJvYmplY3RcIj09YiYmXCJudW1iZXJcIj09dHlwZW9mIGEubGVuZ3RofWZ1bmN0aW9uIHAoYSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGF9ZnVuY3Rpb24gZ2EoYSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGF9ZnVuY3Rpb24gaGEoYSl7cmV0dXJuXCJmdW5jdGlvblwiPT1kYShhKX1mdW5jdGlvbiBpYShhKXt2YXIgYj10eXBlb2YgYTtyZXR1cm5cIm9iamVjdFwiPT1iJiZudWxsIT1hfHxcImZ1bmN0aW9uXCI9PWJ9ZnVuY3Rpb24gamEoYSxiLGMpe3JldHVybiBhLmNhbGwuYXBwbHkoYS5iaW5kLGFyZ3VtZW50cyl9XG5mdW5jdGlvbiBrYShhLGIsYyl7aWYoIWEpdGhyb3cgRXJyb3IoKTtpZigyPGFyZ3VtZW50cy5sZW5ndGgpe3ZhciBkPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO0FycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGMsZCk7cmV0dXJuIGEuYXBwbHkoYixjKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX1mdW5jdGlvbiBxKGEsYixjKXtxPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kJiYtMSE9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQudG9TdHJpbmcoKS5pbmRleE9mKFwibmF0aXZlIGNvZGVcIik/amE6a2E7cmV0dXJuIHEuYXBwbHkobnVsbCxhcmd1bWVudHMpfVxuZnVuY3Rpb24gbGEoYSxiKXtmdW5jdGlvbiBjKCl7fWMucHJvdG90eXBlPWIucHJvdG90eXBlO2Eud2c9Yi5wcm90b3R5cGU7YS5wcm90b3R5cGU9bmV3IGM7YS5wcm90b3R5cGUuY29uc3RydWN0b3I9YTthLnNnPWZ1bmN0aW9uKGEsYyxmKXtmb3IodmFyIGg9QXJyYXkoYXJndW1lbnRzLmxlbmd0aC0yKSxrPTI7azxhcmd1bWVudHMubGVuZ3RoO2srKyloW2stMl09YXJndW1lbnRzW2tdO3JldHVybiBiLnByb3RvdHlwZVtjXS5hcHBseShhLGgpfX07ZnVuY3Rpb24gbWEoKXt0aGlzLldhPS0xfTtmdW5jdGlvbiBuYSgpe3RoaXMuV2E9LTE7dGhpcy5XYT02NDt0aGlzLk09W107dGhpcy5WZD1bXTt0aGlzLkFmPVtdO3RoaXMuemQ9W107dGhpcy56ZFswXT0xMjg7Zm9yKHZhciBhPTE7YTx0aGlzLldhOysrYSl0aGlzLnpkW2FdPTA7dGhpcy5QZD10aGlzLiRiPTA7dGhpcy5yZXNldCgpfWxhKG5hLG1hKTtuYS5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLk1bMF09MTczMjU4NDE5Mzt0aGlzLk1bMV09NDAyMzIzMzQxNzt0aGlzLk1bMl09MjU2MjM4MzEwMjt0aGlzLk1bM109MjcxNzMzODc4O3RoaXMuTVs0XT0zMjg1Mzc3NTIwO3RoaXMuUGQ9dGhpcy4kYj0wfTtcbmZ1bmN0aW9uIG9hKGEsYixjKXtjfHwoYz0wKTt2YXIgZD1hLkFmO2lmKHAoYikpZm9yKHZhciBlPTA7MTY+ZTtlKyspZFtlXT1iLmNoYXJDb2RlQXQoYyk8PDI0fGIuY2hhckNvZGVBdChjKzEpPDwxNnxiLmNoYXJDb2RlQXQoYysyKTw8OHxiLmNoYXJDb2RlQXQoYyszKSxjKz00O2Vsc2UgZm9yKGU9MDsxNj5lO2UrKylkW2VdPWJbY108PDI0fGJbYysxXTw8MTZ8YltjKzJdPDw4fGJbYyszXSxjKz00O2ZvcihlPTE2OzgwPmU7ZSsrKXt2YXIgZj1kW2UtM11eZFtlLThdXmRbZS0xNF1eZFtlLTE2XTtkW2VdPShmPDwxfGY+Pj4zMSkmNDI5NDk2NzI5NX1iPWEuTVswXTtjPWEuTVsxXTtmb3IodmFyIGg9YS5NWzJdLGs9YS5NWzNdLGw9YS5NWzRdLG0sZT0wOzgwPmU7ZSsrKTQwPmU/MjA+ZT8oZj1rXmMmKGheayksbT0xNTE4NTAwMjQ5KTooZj1jXmheayxtPTE4NTk3NzUzOTMpOjYwPmU/KGY9YyZofGsmKGN8aCksbT0yNDAwOTU5NzA4KTooZj1jXmheayxtPTMzOTU0Njk3ODIpLGY9KGI8PFxuNXxiPj4+MjcpK2YrbCttK2RbZV0mNDI5NDk2NzI5NSxsPWssaz1oLGg9KGM8PDMwfGM+Pj4yKSY0Mjk0OTY3Mjk1LGM9YixiPWY7YS5NWzBdPWEuTVswXStiJjQyOTQ5NjcyOTU7YS5NWzFdPWEuTVsxXStjJjQyOTQ5NjcyOTU7YS5NWzJdPWEuTVsyXStoJjQyOTQ5NjcyOTU7YS5NWzNdPWEuTVszXStrJjQyOTQ5NjcyOTU7YS5NWzRdPWEuTVs0XStsJjQyOTQ5NjcyOTV9XG5uYS5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9YSl7bihiKXx8KGI9YS5sZW5ndGgpO2Zvcih2YXIgYz1iLXRoaXMuV2EsZD0wLGU9dGhpcy5WZCxmPXRoaXMuJGI7ZDxiOyl7aWYoMD09Zilmb3IoO2Q8PWM7KW9hKHRoaXMsYSxkKSxkKz10aGlzLldhO2lmKHAoYSkpZm9yKDtkPGI7KXtpZihlW2ZdPWEuY2hhckNvZGVBdChkKSwrK2YsKytkLGY9PXRoaXMuV2Epe29hKHRoaXMsZSk7Zj0wO2JyZWFrfX1lbHNlIGZvcig7ZDxiOylpZihlW2ZdPWFbZF0sKytmLCsrZCxmPT10aGlzLldhKXtvYSh0aGlzLGUpO2Y9MDticmVha319dGhpcy4kYj1mO3RoaXMuUGQrPWJ9fTtmdW5jdGlvbiByKGEsYil7Zm9yKHZhciBjIGluIGEpYi5jYWxsKHZvaWQgMCxhW2NdLGMsYSl9ZnVuY3Rpb24gcGEoYSxiKXt2YXIgYz17fSxkO2ZvcihkIGluIGEpY1tkXT1iLmNhbGwodm9pZCAwLGFbZF0sZCxhKTtyZXR1cm4gY31mdW5jdGlvbiBxYShhLGIpe2Zvcih2YXIgYyBpbiBhKWlmKCFiLmNhbGwodm9pZCAwLGFbY10sYyxhKSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiByYShhKXt2YXIgYj0wLGM7Zm9yKGMgaW4gYSliKys7cmV0dXJuIGJ9ZnVuY3Rpb24gc2EoYSl7Zm9yKHZhciBiIGluIGEpcmV0dXJuIGJ9ZnVuY3Rpb24gdGEoYSl7dmFyIGI9W10sYz0wLGQ7Zm9yKGQgaW4gYSliW2MrK109YVtkXTtyZXR1cm4gYn1mdW5jdGlvbiB1YShhKXt2YXIgYj1bXSxjPTAsZDtmb3IoZCBpbiBhKWJbYysrXT1kO3JldHVybiBifWZ1bmN0aW9uIHZhKGEsYil7Zm9yKHZhciBjIGluIGEpaWYoYVtjXT09YilyZXR1cm4hMDtyZXR1cm4hMX1cbmZ1bmN0aW9uIHdhKGEsYixjKXtmb3IodmFyIGQgaW4gYSlpZihiLmNhbGwoYyxhW2RdLGQsYSkpcmV0dXJuIGR9ZnVuY3Rpb24geGEoYSxiKXt2YXIgYz13YShhLGIsdm9pZCAwKTtyZXR1cm4gYyYmYVtjXX1mdW5jdGlvbiB5YShhKXtmb3IodmFyIGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiB6YShhKXt2YXIgYj17fSxjO2ZvcihjIGluIGEpYltjXT1hW2NdO3JldHVybiBifTtmdW5jdGlvbiBBYShhKXthPVN0cmluZyhhKTtpZigvXlxccyokLy50ZXN0KGEpPzA6L15bXFxdLDp7fVxcc1xcdTIwMjhcXHUyMDI5XSokLy50ZXN0KGEucmVwbGFjZSgvXFxcXFtcIlxcXFxcXC9iZm5ydHVdL2csXCJAXCIpLnJlcGxhY2UoL1wiW15cIlxcXFxcXG5cXHJcXHUyMDI4XFx1MjAyOVxceDAwLVxceDA4XFx4MGEtXFx4MWZdKlwifHRydWV8ZmFsc2V8bnVsbHwtP1xcZCsoPzpcXC5cXGQqKT8oPzpbZUVdWytcXC1dP1xcZCspPy9nLFwiXVwiKS5yZXBsYWNlKC8oPzpefDp8LCkoPzpbXFxzXFx1MjAyOFxcdTIwMjldKlxcWykrL2csXCJcIikpKXRyeXtyZXR1cm4gZXZhbChcIihcIithK1wiKVwiKX1jYXRjaChiKXt9dGhyb3cgRXJyb3IoXCJJbnZhbGlkIEpTT04gc3RyaW5nOiBcIithKTt9ZnVuY3Rpb24gQmEoKXt0aGlzLkZkPXZvaWQgMH1cbmZ1bmN0aW9uIENhKGEsYixjKXtzd2l0Y2godHlwZW9mIGIpe2Nhc2UgXCJzdHJpbmdcIjpEYShiLGMpO2JyZWFrO2Nhc2UgXCJudW1iZXJcIjpjLnB1c2goaXNGaW5pdGUoYikmJiFpc05hTihiKT9iOlwibnVsbFwiKTticmVhaztjYXNlIFwiYm9vbGVhblwiOmMucHVzaChiKTticmVhaztjYXNlIFwidW5kZWZpbmVkXCI6Yy5wdXNoKFwibnVsbFwiKTticmVhaztjYXNlIFwib2JqZWN0XCI6aWYobnVsbD09Yil7Yy5wdXNoKFwibnVsbFwiKTticmVha31pZihlYShiKSl7dmFyIGQ9Yi5sZW5ndGg7Yy5wdXNoKFwiW1wiKTtmb3IodmFyIGU9XCJcIixmPTA7ZjxkO2YrKyljLnB1c2goZSksZT1iW2ZdLENhKGEsYS5GZD9hLkZkLmNhbGwoYixTdHJpbmcoZiksZSk6ZSxjKSxlPVwiLFwiO2MucHVzaChcIl1cIik7YnJlYWt9Yy5wdXNoKFwie1wiKTtkPVwiXCI7Zm9yKGYgaW4gYilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYixmKSYmKGU9YltmXSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiYoYy5wdXNoKGQpLERhKGYsYyksXG5jLnB1c2goXCI6XCIpLENhKGEsYS5GZD9hLkZkLmNhbGwoYixmLGUpOmUsYyksZD1cIixcIikpO2MucHVzaChcIn1cIik7YnJlYWs7Y2FzZSBcImZ1bmN0aW9uXCI6YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcihcIlVua25vd24gdHlwZTogXCIrdHlwZW9mIGIpO319dmFyIEVhPXsnXCInOidcXFxcXCInLFwiXFxcXFwiOlwiXFxcXFxcXFxcIixcIi9cIjpcIlxcXFwvXCIsXCJcXGJcIjpcIlxcXFxiXCIsXCJcXGZcIjpcIlxcXFxmXCIsXCJcXG5cIjpcIlxcXFxuXCIsXCJcXHJcIjpcIlxcXFxyXCIsXCJcXHRcIjpcIlxcXFx0XCIsXCJcXHgwQlwiOlwiXFxcXHUwMDBiXCJ9LEZhPS9cXHVmZmZmLy50ZXN0KFwiXFx1ZmZmZlwiKT8vW1xcXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHVmZmZmXS9nOi9bXFxcXFxcXCJcXHgwMC1cXHgxZlxceDdmLVxceGZmXS9nO1xuZnVuY3Rpb24gRGEoYSxiKXtiLnB1c2goJ1wiJyxhLnJlcGxhY2UoRmEsZnVuY3Rpb24oYSl7aWYoYSBpbiBFYSlyZXR1cm4gRWFbYV07dmFyIGI9YS5jaGFyQ29kZUF0KDApLGU9XCJcXFxcdVwiOzE2PmI/ZSs9XCIwMDBcIjoyNTY+Yj9lKz1cIjAwXCI6NDA5Nj5iJiYoZSs9XCIwXCIpO3JldHVybiBFYVthXT1lK2IudG9TdHJpbmcoMTYpfSksJ1wiJyl9O3ZhciB0O2E6e3ZhciBHYT1hYS5uYXZpZ2F0b3I7aWYoR2Epe3ZhciBIYT1HYS51c2VyQWdlbnQ7aWYoSGEpe3Q9SGE7YnJlYWsgYX19dD1cIlwifTt2YXIgdj1BcnJheS5wcm90b3R5cGUsSWE9di5pbmRleE9mP2Z1bmN0aW9uKGEsYixjKXtyZXR1cm4gdi5pbmRleE9mLmNhbGwoYSxiLGMpfTpmdW5jdGlvbihhLGIsYyl7Yz1udWxsPT1jPzA6MD5jP01hdGgubWF4KDAsYS5sZW5ndGgrYyk6YztpZihwKGEpKXJldHVybiBwKGIpJiYxPT1iLmxlbmd0aD9hLmluZGV4T2YoYixjKTotMTtmb3IoO2M8YS5sZW5ndGg7YysrKWlmKGMgaW4gYSYmYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LEphPXYuZm9yRWFjaD9mdW5jdGlvbihhLGIsYyl7di5mb3JFYWNoLmNhbGwoYSxiLGMpfTpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWEubGVuZ3RoLGU9cChhKT9hLnNwbGl0KFwiXCIpOmEsZj0wO2Y8ZDtmKyspZiBpbiBlJiZiLmNhbGwoYyxlW2ZdLGYsYSl9LEthPXYuZmlsdGVyP2Z1bmN0aW9uKGEsYixjKXtyZXR1cm4gdi5maWx0ZXIuY2FsbChhLGIsYyl9OmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YS5sZW5ndGgsZT1bXSxmPTAsaD1wKGEpP1xuYS5zcGxpdChcIlwiKTphLGs9MDtrPGQ7aysrKWlmKGsgaW4gaCl7dmFyIGw9aFtrXTtiLmNhbGwoYyxsLGssYSkmJihlW2YrK109bCl9cmV0dXJuIGV9LExhPXYubWFwP2Z1bmN0aW9uKGEsYixjKXtyZXR1cm4gdi5tYXAuY2FsbChhLGIsYyl9OmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YS5sZW5ndGgsZT1BcnJheShkKSxmPXAoYSk/YS5zcGxpdChcIlwiKTphLGg9MDtoPGQ7aCsrKWggaW4gZiYmKGVbaF09Yi5jYWxsKGMsZltoXSxoLGEpKTtyZXR1cm4gZX0sTWE9di5yZWR1Y2U/ZnVuY3Rpb24oYSxiLGMsZCl7Zm9yKHZhciBlPVtdLGY9MSxoPWFyZ3VtZW50cy5sZW5ndGg7ZjxoO2YrKyllLnB1c2goYXJndW1lbnRzW2ZdKTtkJiYoZVswXT1xKGIsZCkpO3JldHVybiB2LnJlZHVjZS5hcHBseShhLGUpfTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1jO0phKGEsZnVuY3Rpb24oYyxoKXtlPWIuY2FsbChkLGUsYyxoLGEpfSk7cmV0dXJuIGV9LE5hPXYuZXZlcnk/ZnVuY3Rpb24oYSxiLFxuYyl7cmV0dXJuIHYuZXZlcnkuY2FsbChhLGIsYyl9OmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YS5sZW5ndGgsZT1wKGEpP2Euc3BsaXQoXCJcIik6YSxmPTA7ZjxkO2YrKylpZihmIGluIGUmJiFiLmNhbGwoYyxlW2ZdLGYsYSkpcmV0dXJuITE7cmV0dXJuITB9O2Z1bmN0aW9uIE9hKGEsYil7dmFyIGM9UGEoYSxiLHZvaWQgMCk7cmV0dXJuIDA+Yz9udWxsOnAoYSk/YS5jaGFyQXQoYyk6YVtjXX1mdW5jdGlvbiBQYShhLGIsYyl7Zm9yKHZhciBkPWEubGVuZ3RoLGU9cChhKT9hLnNwbGl0KFwiXCIpOmEsZj0wO2Y8ZDtmKyspaWYoZiBpbiBlJiZiLmNhbGwoYyxlW2ZdLGYsYSkpcmV0dXJuIGY7cmV0dXJuLTF9ZnVuY3Rpb24gUWEoYSxiKXt2YXIgYz1JYShhLGIpOzA8PWMmJnYuc3BsaWNlLmNhbGwoYSxjLDEpfWZ1bmN0aW9uIFJhKGEsYixjKXtyZXR1cm4gMj49YXJndW1lbnRzLmxlbmd0aD92LnNsaWNlLmNhbGwoYSxiKTp2LnNsaWNlLmNhbGwoYSxiLGMpfVxuZnVuY3Rpb24gU2EoYSxiKXthLnNvcnQoYnx8VGEpfWZ1bmN0aW9uIFRhKGEsYil7cmV0dXJuIGE+Yj8xOmE8Yj8tMTowfTt2YXIgVWE9LTEhPXQuaW5kZXhPZihcIk9wZXJhXCIpfHwtMSE9dC5pbmRleE9mKFwiT1BSXCIpLFZhPS0xIT10LmluZGV4T2YoXCJUcmlkZW50XCIpfHwtMSE9dC5pbmRleE9mKFwiTVNJRVwiKSxXYT0tMSE9dC5pbmRleE9mKFwiR2Vja29cIikmJi0xPT10LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIndlYmtpdFwiKSYmISgtMSE9dC5pbmRleE9mKFwiVHJpZGVudFwiKXx8LTEhPXQuaW5kZXhPZihcIk1TSUVcIikpLFhhPS0xIT10LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIndlYmtpdFwiKTtcbihmdW5jdGlvbigpe3ZhciBhPVwiXCIsYjtpZihVYSYmYWEub3BlcmEpcmV0dXJuIGE9YWEub3BlcmEudmVyc2lvbixoYShhKT9hKCk6YTtXYT9iPS9ydlxcOihbXlxcKTtdKykoXFwpfDspLzpWYT9iPS9cXGIoPzpNU0lFfHJ2KVs6IF0oW15cXCk7XSspKFxcKXw7KS86WGEmJihiPS9XZWJLaXRcXC8oXFxTKykvKTtiJiYoYT0oYT1iLmV4ZWModCkpP2FbMV06XCJcIik7cmV0dXJuIFZhJiYoYj0oYj1hYS5kb2N1bWVudCk/Yi5kb2N1bWVudE1vZGU6dm9pZCAwLGI+cGFyc2VGbG9hdChhKSk/U3RyaW5nKGIpOmF9KSgpO3ZhciBZYT1udWxsLFphPW51bGwsJGE9bnVsbDtmdW5jdGlvbiBhYihhLGIpe2lmKCFmYShhKSl0aHJvdyBFcnJvcihcImVuY29kZUJ5dGVBcnJheSB0YWtlcyBhbiBhcnJheSBhcyBhIHBhcmFtZXRlclwiKTtiYigpO2Zvcih2YXIgYz1iP1phOllhLGQ9W10sZT0wO2U8YS5sZW5ndGg7ZSs9Myl7dmFyIGY9YVtlXSxoPWUrMTxhLmxlbmd0aCxrPWg/YVtlKzFdOjAsbD1lKzI8YS5sZW5ndGgsbT1sP2FbZSsyXTowLHU9Zj4+MixmPShmJjMpPDw0fGs+PjQsaz0oayYxNSk8PDJ8bT4+NixtPW0mNjM7bHx8KG09NjQsaHx8KGs9NjQpKTtkLnB1c2goY1t1XSxjW2ZdLGNba10sY1ttXSl9cmV0dXJuIGQuam9pbihcIlwiKX1cbmZ1bmN0aW9uIGJiKCl7aWYoIVlhKXtZYT17fTtaYT17fTskYT17fTtmb3IodmFyIGE9MDs2NT5hO2ErKylZYVthXT1cIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCIuY2hhckF0KGEpLFphW2FdPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODktXy5cIi5jaGFyQXQoYSksJGFbWmFbYV1dPWEsNjI8PWEmJigkYVtcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCIuY2hhckF0KGEpXT1hKX19O2Z1bmN0aW9uIGNiKGEsYil7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLGIpfWZ1bmN0aW9uIHcoYSxiKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSxiKSlyZXR1cm4gYVtiXX1mdW5jdGlvbiBkYihhLGIpe2Zvcih2YXIgYyBpbiBhKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLGMpJiZiKGMsYVtjXSl9O2Z1bmN0aW9uIHgoYSxiLGMsZCl7dmFyIGU7ZDxiP2U9XCJhdCBsZWFzdCBcIitiOmQ+YyYmKGU9MD09PWM/XCJub25lXCI6XCJubyBtb3JlIHRoYW4gXCIrYyk7aWYoZSl0aHJvdyBFcnJvcihhK1wiIGZhaWxlZDogV2FzIGNhbGxlZCB3aXRoIFwiK2QrKDE9PT1kP1wiIGFyZ3VtZW50LlwiOlwiIGFyZ3VtZW50cy5cIikrXCIgRXhwZWN0cyBcIitlK1wiLlwiKTt9ZnVuY3Rpb24geShhLGIsYyl7dmFyIGQ9XCJcIjtzd2l0Y2goYil7Y2FzZSAxOmQ9Yz9cImZpcnN0XCI6XCJGaXJzdFwiO2JyZWFrO2Nhc2UgMjpkPWM/XCJzZWNvbmRcIjpcIlNlY29uZFwiO2JyZWFrO2Nhc2UgMzpkPWM/XCJ0aGlyZFwiOlwiVGhpcmRcIjticmVhaztjYXNlIDQ6ZD1jP1wiZm91cnRoXCI6XCJGb3VydGhcIjticmVhaztkZWZhdWx0OnRocm93IEVycm9yKFwiZXJyb3JQcmVmaXggY2FsbGVkIHdpdGggYXJndW1lbnROdW1iZXIgPiA0LiAgTmVlZCB0byB1cGRhdGUgaXQ/XCIpO31yZXR1cm4gYT1hK1wiIGZhaWxlZDogXCIrKGQrXCIgYXJndW1lbnQgXCIpfVxuZnVuY3Rpb24gQShhLGIsYyxkKXtpZigoIWR8fG4oYykpJiYhaGEoYykpdGhyb3cgRXJyb3IoeShhLGIsZCkrXCJtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXCIpO31mdW5jdGlvbiBlYihhLGIsYyl7aWYobihjKSYmKCFpYShjKXx8bnVsbD09PWMpKXRocm93IEVycm9yKHkoYSxiLCEwKStcIm11c3QgYmUgYSB2YWxpZCBjb250ZXh0IG9iamVjdC5cIik7fTtmdW5jdGlvbiBmYihhKXt2YXIgYj1bXTtkYihhLGZ1bmN0aW9uKGEsZCl7ZWEoZCk/SmEoZCxmdW5jdGlvbihkKXtiLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChkKSl9KTpiLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChkKSl9KTtyZXR1cm4gYi5sZW5ndGg/XCImXCIrYi5qb2luKFwiJlwiKTpcIlwifTt2YXIgZ2I9ZmlyZWJhc2UuUHJvbWlzZTtmdW5jdGlvbiBoYigpe3ZhciBhPXRoaXM7dGhpcy5yZWplY3Q9dGhpcy5yZXNvbHZlPW51bGw7dGhpcy5yYT1uZXcgZ2IoZnVuY3Rpb24oYixjKXthLnJlc29sdmU9YjthLnJlamVjdD1jfSl9ZnVuY3Rpb24gaWIoYSxiKXtyZXR1cm4gZnVuY3Rpb24oYyxkKXtjP2EucmVqZWN0KGMpOmEucmVzb2x2ZShkKTtoYShiKSYmKGpiKGEucmEpLDE9PT1iLmxlbmd0aD9iKGMpOmIoYyxkKSl9fWZ1bmN0aW9uIGpiKGEpe2EudGhlbih2b2lkIDAsYmEpfTtmdW5jdGlvbiBrYihhLGIpe2lmKCFhKXRocm93IGxiKGIpO31mdW5jdGlvbiBsYihhKXtyZXR1cm4gRXJyb3IoXCJGaXJlYmFzZSBEYXRhYmFzZSAoXCIrZmlyZWJhc2UuU0RLX1ZFUlNJT04rXCIpIElOVEVSTkFMIEFTU0VSVCBGQUlMRUQ6IFwiK2EpfTtmdW5jdGlvbiBtYihhKXtmb3IodmFyIGI9W10sYz0wLGQ9MDtkPGEubGVuZ3RoO2QrKyl7dmFyIGU9YS5jaGFyQ29kZUF0KGQpOzU1Mjk2PD1lJiY1NjMxOT49ZSYmKGUtPTU1Mjk2LGQrKyxrYihkPGEubGVuZ3RoLFwiU3Vycm9nYXRlIHBhaXIgbWlzc2luZyB0cmFpbCBzdXJyb2dhdGUuXCIpLGU9NjU1MzYrKGU8PDEwKSsoYS5jaGFyQ29kZUF0KGQpLTU2MzIwKSk7MTI4PmU/YltjKytdPWU6KDIwNDg+ZT9iW2MrK109ZT4+NnwxOTI6KDY1NTM2PmU/YltjKytdPWU+PjEyfDIyNDooYltjKytdPWU+PjE4fDI0MCxiW2MrK109ZT4+MTImNjN8MTI4KSxiW2MrK109ZT4+NiY2M3wxMjgpLGJbYysrXT1lJjYzfDEyOCl9cmV0dXJuIGJ9ZnVuY3Rpb24gbmIoYSl7Zm9yKHZhciBiPTAsYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hLmNoYXJDb2RlQXQoYyk7MTI4PmQ/YisrOjIwNDg+ZD9iKz0yOjU1Mjk2PD1kJiY1NjMxOT49ZD8oYis9NCxjKyspOmIrPTN9cmV0dXJuIGJ9O2Z1bmN0aW9uIG9iKGEpe3JldHVyblwidW5kZWZpbmVkXCIhPT10eXBlb2YgSlNPTiYmbihKU09OLnBhcnNlKT9KU09OLnBhcnNlKGEpOkFhKGEpfWZ1bmN0aW9uIEIoYSl7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBKU09OJiZuKEpTT04uc3RyaW5naWZ5KSlhPUpTT04uc3RyaW5naWZ5KGEpO2Vsc2V7dmFyIGI9W107Q2EobmV3IEJhLGEsYik7YT1iLmpvaW4oXCJcIil9cmV0dXJuIGF9O2Z1bmN0aW9uIHBiKGEsYil7dGhpcy5jb21taXR0ZWQ9YTt0aGlzLnNuYXBzaG90PWJ9O2Z1bmN0aW9uIHFiKCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3aW5kb3cmJiEhKHdpbmRvdy5jb3Jkb3ZhfHx3aW5kb3cucGhvbmVnYXB8fHdpbmRvdy5QaG9uZUdhcCkmJi9pb3N8aXBob25lfGlwb2R8aXBhZHxhbmRyb2lkfGJsYWNrYmVycnl8aWVtb2JpbGUvaS50ZXN0KFwidW5kZWZpbmVkXCIhPT10eXBlb2YgbmF2aWdhdG9yJiZcInN0cmluZ1wiPT09dHlwZW9mIG5hdmlnYXRvci51c2VyQWdlbnQ/bmF2aWdhdG9yLnVzZXJBZ2VudDpcIlwiKX07ZnVuY3Rpb24gcmIoYSl7dGhpcy5yZT1hO3RoaXMuQmQ9W107dGhpcy5RYj0wO3RoaXMuWGQ9LTE7dGhpcy5GYj1udWxsfWZ1bmN0aW9uIHNiKGEsYixjKXthLlhkPWI7YS5GYj1jO2EuWGQ8YS5RYiYmKGEuRmIoKSxhLkZiPW51bGwpfWZ1bmN0aW9uIHRiKGEsYixjKXtmb3IoYS5CZFtiXT1jO2EuQmRbYS5RYl07KXt2YXIgZD1hLkJkW2EuUWJdO2RlbGV0ZSBhLkJkW2EuUWJdO2Zvcih2YXIgZT0wO2U8ZC5sZW5ndGg7KytlKWlmKGRbZV0pe3ZhciBmPWE7dWIoZnVuY3Rpb24oKXtmLnJlKGRbZV0pfSl9aWYoYS5RYj09PWEuWGQpe2EuRmImJihjbGVhclRpbWVvdXQoYS5GYiksYS5GYigpLGEuRmI9bnVsbCk7YnJlYWt9YS5RYisrfX07ZnVuY3Rpb24gdmIoKXt0aGlzLnBjPXt9fXZiLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSxiKXtudWxsPT1iP2RlbGV0ZSB0aGlzLnBjW2FdOnRoaXMucGNbYV09Yn07dmIucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gY2IodGhpcy5wYyxhKT90aGlzLnBjW2FdOm51bGx9O3ZiLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oYSl7ZGVsZXRlIHRoaXMucGNbYV19O3ZiLnByb3RvdHlwZS5aZT0hMDtmdW5jdGlvbiB3YihhKXt0aGlzLnVjPWE7dGhpcy5DZD1cImZpcmViYXNlOlwifWc9d2IucHJvdG90eXBlO2cuc2V0PWZ1bmN0aW9uKGEsYil7bnVsbD09Yj90aGlzLnVjLnJlbW92ZUl0ZW0odGhpcy5DZCthKTp0aGlzLnVjLnNldEl0ZW0odGhpcy5DZCthLEIoYikpfTtnLmdldD1mdW5jdGlvbihhKXthPXRoaXMudWMuZ2V0SXRlbSh0aGlzLkNkK2EpO3JldHVybiBudWxsPT1hP251bGw6b2IoYSl9O2cucmVtb3ZlPWZ1bmN0aW9uKGEpe3RoaXMudWMucmVtb3ZlSXRlbSh0aGlzLkNkK2EpfTtnLlplPSExO2cudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy51Yy50b1N0cmluZygpfTtmdW5jdGlvbiB4YihhKXt0cnl7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3aW5kb3cmJlwidW5kZWZpbmVkXCIhPT10eXBlb2Ygd2luZG93W2FdKXt2YXIgYj13aW5kb3dbYV07Yi5zZXRJdGVtKFwiZmlyZWJhc2U6c2VudGluZWxcIixcImNhY2hlXCIpO2IucmVtb3ZlSXRlbShcImZpcmViYXNlOnNlbnRpbmVsXCIpO3JldHVybiBuZXcgd2IoYil9fWNhdGNoKGMpe31yZXR1cm4gbmV3IHZifXZhciB5Yj14YihcImxvY2FsU3RvcmFnZVwiKSx6Yj14YihcInNlc3Npb25TdG9yYWdlXCIpO2Z1bmN0aW9uIEFiKGEsYixjKXt0aGlzLnR5cGU9QmI7dGhpcy5zb3VyY2U9YTt0aGlzLnBhdGg9Yjt0aGlzLkdhPWN9QWIucHJvdG90eXBlLk1jPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnBhdGguZSgpP25ldyBBYih0aGlzLnNvdXJjZSxDLHRoaXMuR2EuUShhKSk6bmV3IEFiKHRoaXMuc291cmNlLEQodGhpcy5wYXRoKSx0aGlzLkdhKX07QWIucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJPcGVyYXRpb24oXCIrdGhpcy5wYXRoK1wiOiBcIit0aGlzLnNvdXJjZS50b1N0cmluZygpK1wiIG92ZXJ3cml0ZTogXCIrdGhpcy5HYS50b1N0cmluZygpK1wiKVwifTtmdW5jdGlvbiBDYihhLGIpe3RoaXMudHlwZT1EYjt0aGlzLnNvdXJjZT1hO3RoaXMucGF0aD1ifUNiLnByb3RvdHlwZS5NYz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhdGguZSgpP25ldyBDYih0aGlzLnNvdXJjZSxDKTpuZXcgQ2IodGhpcy5zb3VyY2UsRCh0aGlzLnBhdGgpKX07Q2IucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJPcGVyYXRpb24oXCIrdGhpcy5wYXRoK1wiOiBcIit0aGlzLnNvdXJjZS50b1N0cmluZygpK1wiIGxpc3Rlbl9jb21wbGV0ZSlcIn07ZnVuY3Rpb24gRWIoYSl7dGhpcy5vYz1hfUViLnByb3RvdHlwZS5nZXRUb2tlbj1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vYy5JTlRFUk5BTC5nZXRUb2tlbihhKS50aGVuKG51bGwsZnVuY3Rpb24oYSl7cmV0dXJuIGEmJlwiYXV0aC90b2tlbi1ub3QtaW5pdGlhbGl6ZWRcIj09PWEuY29kZT8oRShcIkdvdCBhdXRoL3Rva2VuLW5vdC1pbml0aWFsaXplZCBlcnJvci4gIFRyZWF0aW5nIGFzIG51bGwgdG9rZW4uXCIpLG51bGwpOlByb21pc2UucmVqZWN0KGEpfSl9O2Z1bmN0aW9uIEZiKGEsYil7YS5vYy5JTlRFUk5BTC5hZGRBdXRoVG9rZW5MaXN0ZW5lcihiKX07ZnVuY3Rpb24gR2IoKXt0aGlzLkpkPUd9R2IucHJvdG90eXBlLmo9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuSmQuUChhKX07R2IucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuSmQudG9TdHJpbmcoKX07ZnVuY3Rpb24gSGIoYSxiLGMsZCxlKXt0aGlzLmhvc3Q9YS50b0xvd2VyQ2FzZSgpO3RoaXMuZG9tYWluPXRoaXMuaG9zdC5zdWJzdHIodGhpcy5ob3N0LmluZGV4T2YoXCIuXCIpKzEpO3RoaXMuU2M9Yjt0aGlzLm5lPWM7dGhpcy5xZz1kO3RoaXMuZ2Y9ZXx8XCJcIjt0aGlzLiRhPXliLmdldChcImhvc3Q6XCIrYSl8fHRoaXMuaG9zdH1mdW5jdGlvbiBJYihhLGIpe2IhPT1hLiRhJiYoYS4kYT1iLFwicy1cIj09PWEuJGEuc3Vic3RyKDAsMikmJnliLnNldChcImhvc3Q6XCIrYS5ob3N0LGEuJGEpKX1cbmZ1bmN0aW9uIEpiKGEsYixjKXtIKFwic3RyaW5nXCI9PT10eXBlb2YgYixcInR5cGVvZiB0eXBlIG11c3QgPT0gc3RyaW5nXCIpO0goXCJvYmplY3RcIj09PXR5cGVvZiBjLFwidHlwZW9mIHBhcmFtcyBtdXN0ID09IG9iamVjdFwiKTtpZihcIndlYnNvY2tldFwiPT09YiliPShhLlNjP1wid3NzOi8vXCI6XCJ3czovL1wiKSthLiRhK1wiLy53cz9cIjtlbHNlIGlmKFwibG9uZ19wb2xsaW5nXCI9PT1iKWI9KGEuU2M/XCJodHRwczovL1wiOlwiaHR0cDovL1wiKSthLiRhK1wiLy5scD9cIjtlbHNlIHRocm93IEVycm9yKFwiVW5rbm93biBjb25uZWN0aW9uIHR5cGU6IFwiK2IpO2EuaG9zdCE9PWEuJGEmJihjLm5zPWEubmUpO3ZhciBkPVtdO3IoYyxmdW5jdGlvbihhLGIpe2QucHVzaChiK1wiPVwiK2EpfSk7cmV0dXJuIGIrZC5qb2luKFwiJlwiKX1cbkhiLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3ZhciBhPSh0aGlzLlNjP1wiaHR0cHM6Ly9cIjpcImh0dHA6Ly9cIikrdGhpcy5ob3N0O3RoaXMuZ2YmJihhKz1cIjxcIit0aGlzLmdmK1wiPlwiKTtyZXR1cm4gYX07ZnVuY3Rpb24gS2IoKXt0aGlzLnRjPXt9fWZ1bmN0aW9uIExiKGEsYixjKXtuKGMpfHwoYz0xKTtjYihhLnRjLGIpfHwoYS50Y1tiXT0wKTthLnRjW2JdKz1jfUtiLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gemEodGhpcy50Yyl9O2Z1bmN0aW9uIE1iKGEpe3RoaXMuRWY9YTt0aGlzLnJkPW51bGx9TWIucHJvdG90eXBlLmdldD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuRWYuZ2V0KCksYj16YShhKTtpZih0aGlzLnJkKWZvcih2YXIgYyBpbiB0aGlzLnJkKWJbY10tPXRoaXMucmRbY107dGhpcy5yZD1hO3JldHVybiBifTtmdW5jdGlvbiBOYigpe3RoaXMudmI9W119ZnVuY3Rpb24gT2IoYSxiKXtmb3IodmFyIGM9bnVsbCxkPTA7ZDxiLmxlbmd0aDtkKyspe3ZhciBlPWJbZF0sZj1lLlliKCk7bnVsbD09PWN8fGYuWihjLlliKCkpfHwoYS52Yi5wdXNoKGMpLGM9bnVsbCk7bnVsbD09PWMmJihjPW5ldyBQYihmKSk7Yy5hZGQoZSl9YyYmYS52Yi5wdXNoKGMpfWZ1bmN0aW9uIFFiKGEsYixjKXtPYihhLGMpO1JiKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGEuWihiKX0pfWZ1bmN0aW9uIFNiKGEsYixjKXtPYihhLGMpO1JiKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGEuY29udGFpbnMoYil8fGIuY29udGFpbnMoYSl9KX1cbmZ1bmN0aW9uIFJiKGEsYil7Zm9yKHZhciBjPSEwLGQ9MDtkPGEudmIubGVuZ3RoO2QrKyl7dmFyIGU9YS52YltkXTtpZihlKWlmKGU9ZS5ZYigpLGIoZSkpe2Zvcih2YXIgZT1hLnZiW2RdLGY9MDtmPGUuamQubGVuZ3RoO2YrKyl7dmFyIGg9ZS5qZFtmXTtpZihudWxsIT09aCl7ZS5qZFtmXT1udWxsO3ZhciBrPWguVGIoKTtUYiYmRShcImV2ZW50OiBcIitoLnRvU3RyaW5nKCkpO3ViKGspfX1hLnZiW2RdPW51bGx9ZWxzZSBjPSExfWMmJihhLnZiPVtdKX1mdW5jdGlvbiBQYihhKXt0aGlzLnFhPWE7dGhpcy5qZD1bXX1QYi5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGEpe3RoaXMuamQucHVzaChhKX07UGIucHJvdG90eXBlLlliPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucWF9O2Z1bmN0aW9uIFViKGEsYixjLGQpe3RoaXMuJGQ9Yjt0aGlzLk1kPWM7dGhpcy5EZD1kO3RoaXMuaGQ9YX1VYi5wcm90b3R5cGUuWWI9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLk1kLndiKCk7cmV0dXJuXCJ2YWx1ZVwiPT09dGhpcy5oZD9hLnBhdGg6YS5nZXRQYXJlbnQoKS5wYXRofTtVYi5wcm90b3R5cGUuZWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oZH07VWIucHJvdG90eXBlLlRiPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuVGIodGhpcyl9O1ViLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLlliKCkudG9TdHJpbmcoKStcIjpcIit0aGlzLmhkK1wiOlwiK0IodGhpcy5NZC5RZSgpKX07ZnVuY3Rpb24gVmIoYSxiLGMpe3RoaXMuJGQ9YTt0aGlzLmVycm9yPWI7dGhpcy5wYXRoPWN9VmIucHJvdG90eXBlLlliPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGF0aH07VmIucHJvdG90eXBlLmVlPWZ1bmN0aW9uKCl7cmV0dXJuXCJjYW5jZWxcIn07XG5WYi5wcm90b3R5cGUuVGI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5UYih0aGlzKX07VmIucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGF0aC50b1N0cmluZygpK1wiOmNhbmNlbFwifTtmdW5jdGlvbiBXYigpe31XYi5wcm90b3R5cGUuVGU9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH07V2IucHJvdG90eXBlLmRlPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9O3ZhciBYYj1uZXcgV2I7ZnVuY3Rpb24gWWIoYSxiLGMpe3RoaXMueGY9YTt0aGlzLkthPWI7dGhpcy55ZD1jfVliLnByb3RvdHlwZS5UZT1mdW5jdGlvbihhKXt2YXIgYj10aGlzLkthLk47aWYoWmIoYixhKSlyZXR1cm4gYi5qKCkuUShhKTtiPW51bGwhPXRoaXMueWQ/bmV3ICRiKHRoaXMueWQsITAsITEpOnRoaXMuS2EudygpO3JldHVybiB0aGlzLnhmLnFjKGEsYil9O1liLnByb3RvdHlwZS5kZT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9bnVsbCE9dGhpcy55ZD90aGlzLnlkOmFjKHRoaXMuS2EpO2E9dGhpcy54Zi5XZChkLGIsMSxjLGEpO3JldHVybiAwPT09YS5sZW5ndGg/bnVsbDphWzBdfTtmdW5jdGlvbiBJKGEsYixjLGQpe3RoaXMudHlwZT1hO3RoaXMuSmE9Yjt0aGlzLlhhPWM7dGhpcy5vZT1kO3RoaXMuRGQ9dm9pZCAwfWZ1bmN0aW9uIGJjKGEpe3JldHVybiBuZXcgSShjYyxhKX12YXIgY2M9XCJ2YWx1ZVwiO2Z1bmN0aW9uICRiKGEsYixjKXt0aGlzLkE9YTt0aGlzLmRhPWI7dGhpcy5TYj1jfWZ1bmN0aW9uIGRjKGEpe3JldHVybiBhLmRhfWZ1bmN0aW9uIGVjKGEpe3JldHVybiBhLlNifWZ1bmN0aW9uIGZjKGEsYil7cmV0dXJuIGIuZSgpP2EuZGEmJiFhLlNiOlpiKGEsSihiKSl9ZnVuY3Rpb24gWmIoYSxiKXtyZXR1cm4gYS5kYSYmIWEuU2J8fGEuQS5EYShiKX0kYi5wcm90b3R5cGUuaj1mdW5jdGlvbigpe3JldHVybiB0aGlzLkF9O2Z1bmN0aW9uIGdjKGEsYil7cmV0dXJuIGhjKGEubmFtZSxiLm5hbWUpfWZ1bmN0aW9uIGljKGEsYil7cmV0dXJuIGhjKGEsYil9O2Z1bmN0aW9uIEsoYSxiKXt0aGlzLm5hbWU9YTt0aGlzLlI9Yn1mdW5jdGlvbiBqYyhhLGIpe3JldHVybiBuZXcgSyhhLGIpfTtmdW5jdGlvbiBrYyhhLGIpe3JldHVybiBhJiZcIm9iamVjdFwiPT09dHlwZW9mIGE/KEgoXCIuc3ZcImluIGEsXCJVbmV4cGVjdGVkIGxlYWYgbm9kZSBvciBwcmlvcml0eSBjb250ZW50c1wiKSxiW2FbXCIuc3ZcIl1dKTphfWZ1bmN0aW9uIGxjKGEsYil7dmFyIGM9bmV3IG1jO25jKGEsbmV3IEwoXCJcIiksZnVuY3Rpb24oYSxlKXtvYyhjLGEscGMoZSxiKSl9KTtyZXR1cm4gY31mdW5jdGlvbiBwYyhhLGIpe3ZhciBjPWEuQygpLkgoKSxjPWtjKGMsYiksZDtpZihhLkooKSl7dmFyIGU9a2MoYS5DYSgpLGIpO3JldHVybiBlIT09YS5DYSgpfHxjIT09YS5DKCkuSCgpP25ldyBxYyhlLE0oYykpOmF9ZD1hO2MhPT1hLkMoKS5IKCkmJihkPWQuZmEobmV3IHFjKGMpKSk7YS5PKE4sZnVuY3Rpb24oYSxjKXt2YXIgZT1wYyhjLGIpO2UhPT1jJiYoZD1kLlQoYSxlKSl9KTtyZXR1cm4gZH07dmFyIHJjPWZ1bmN0aW9uKCl7dmFyIGE9MTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYSsrfX0oKSxIPWtiLHNjPWxiO1xuZnVuY3Rpb24gdGMoYSl7dHJ5e3ZhciBiO2JiKCk7Zm9yKHZhciBjPSRhLGQ9W10sZT0wO2U8YS5sZW5ndGg7KXt2YXIgZj1jW2EuY2hhckF0KGUrKyldLGg9ZTxhLmxlbmd0aD9jW2EuY2hhckF0KGUpXTowOysrZTt2YXIgaz1lPGEubGVuZ3RoP2NbYS5jaGFyQXQoZSldOjY0OysrZTt2YXIgbD1lPGEubGVuZ3RoP2NbYS5jaGFyQXQoZSldOjY0OysrZTtpZihudWxsPT1mfHxudWxsPT1ofHxudWxsPT1rfHxudWxsPT1sKXRocm93IEVycm9yKCk7ZC5wdXNoKGY8PDJ8aD4+NCk7NjQhPWsmJihkLnB1c2goaDw8NCYyNDB8az4+MiksNjQhPWwmJmQucHVzaChrPDw2JjE5MnxsKSl9aWYoODE5Mj5kLmxlbmd0aCliPVN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxkKTtlbHNle2E9XCJcIjtmb3IoYz0wO2M8ZC5sZW5ndGg7Yys9ODE5MilhKz1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsUmEoZCxjLGMrODE5MikpO2I9YX1yZXR1cm4gYn1jYXRjaChtKXtFKFwiYmFzZTY0RGVjb2RlIGZhaWxlZDogXCIsXG5tKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiB1YyhhKXt2YXIgYj1tYihhKTthPW5ldyBuYTthLnVwZGF0ZShiKTt2YXIgYj1bXSxjPTgqYS5QZDs1Nj5hLiRiP2EudXBkYXRlKGEuemQsNTYtYS4kYik6YS51cGRhdGUoYS56ZCxhLldhLShhLiRiLTU2KSk7Zm9yKHZhciBkPWEuV2EtMTs1Njw9ZDtkLS0pYS5WZFtkXT1jJjI1NSxjLz0yNTY7b2EoYSxhLlZkKTtmb3IoZD1jPTA7NT5kO2QrKylmb3IodmFyIGU9MjQ7MDw9ZTtlLT04KWJbY109YS5NW2RdPj5lJjI1NSwrK2M7cmV0dXJuIGFiKGIpfWZ1bmN0aW9uIHZjKGEpe2Zvcih2YXIgYj1cIlwiLGM9MDtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWI9ZmEoYXJndW1lbnRzW2NdKT9iK3ZjLmFwcGx5KG51bGwsYXJndW1lbnRzW2NdKTpcIm9iamVjdFwiPT09dHlwZW9mIGFyZ3VtZW50c1tjXT9iK0IoYXJndW1lbnRzW2NdKTpiK2FyZ3VtZW50c1tjXSxiKz1cIiBcIjtyZXR1cm4gYn12YXIgVGI9bnVsbCx3Yz0hMDtcbmZ1bmN0aW9uIHhjKGEsYil7a2IoIWJ8fCEwPT09YXx8ITE9PT1hLFwiQ2FuJ3QgdHVybiBvbiBjdXN0b20gbG9nZ2VycyBwZXJzaXN0ZW50bHkuXCIpOyEwPT09YT8oXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlJiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGNvbnNvbGUubG9nP1RiPXEoY29uc29sZS5sb2csY29uc29sZSk6XCJvYmplY3RcIj09PXR5cGVvZiBjb25zb2xlLmxvZyYmKFRiPWZ1bmN0aW9uKGEpe2NvbnNvbGUubG9nKGEpfSkpLGImJnpiLnNldChcImxvZ2dpbmdfZW5hYmxlZFwiLCEwKSk6aGEoYSk/VGI9YTooVGI9bnVsbCx6Yi5yZW1vdmUoXCJsb2dnaW5nX2VuYWJsZWRcIikpfWZ1bmN0aW9uIEUoYSl7ITA9PT13YyYmKHdjPSExLG51bGw9PT1UYiYmITA9PT16Yi5nZXQoXCJsb2dnaW5nX2VuYWJsZWRcIikmJnhjKCEwKSk7aWYoVGIpe3ZhciBiPXZjLmFwcGx5KG51bGwsYXJndW1lbnRzKTtUYihiKX19XG5mdW5jdGlvbiB5YyhhKXtyZXR1cm4gZnVuY3Rpb24oKXtFKGEsYXJndW1lbnRzKX19ZnVuY3Rpb24gemMoYSl7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlKXt2YXIgYj1cIkZJUkVCQVNFIElOVEVSTkFMIEVSUk9SOiBcIit2Yy5hcHBseShudWxsLGFyZ3VtZW50cyk7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlLmVycm9yP2NvbnNvbGUuZXJyb3IoYik6Y29uc29sZS5sb2coYil9fWZ1bmN0aW9uIEFjKGEpe3ZhciBiPXZjLmFwcGx5KG51bGwsYXJndW1lbnRzKTt0aHJvdyBFcnJvcihcIkZJUkVCQVNFIEZBVEFMIEVSUk9SOiBcIitiKTt9ZnVuY3Rpb24gTyhhKXtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGNvbnNvbGUpe3ZhciBiPVwiRklSRUJBU0UgV0FSTklORzogXCIrdmMuYXBwbHkobnVsbCxhcmd1bWVudHMpO1widW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZS53YXJuP2NvbnNvbGUud2FybihiKTpjb25zb2xlLmxvZyhiKX19XG5mdW5jdGlvbiBCYyhhKXt2YXIgYixjLGQsZSxmLGg9YTtmPWM9YT1iPVwiXCI7ZD0hMDtlPVwiaHR0cHNcIjtpZihwKGgpKXt2YXIgaz1oLmluZGV4T2YoXCIvL1wiKTswPD1rJiYoZT1oLnN1YnN0cmluZygwLGstMSksaD1oLnN1YnN0cmluZyhrKzIpKTtrPWguaW5kZXhPZihcIi9cIik7LTE9PT1rJiYoaz1oLmxlbmd0aCk7Yj1oLnN1YnN0cmluZygwLGspO2Y9XCJcIjtoPWguc3Vic3RyaW5nKGspLnNwbGl0KFwiL1wiKTtmb3Ioaz0wO2s8aC5sZW5ndGg7aysrKWlmKDA8aFtrXS5sZW5ndGgpe3ZhciBsPWhba107dHJ5e2w9ZGVjb2RlVVJJQ29tcG9uZW50KGwucmVwbGFjZSgvXFwrL2csXCIgXCIpKX1jYXRjaChtKXt9Zis9XCIvXCIrbH1oPWIuc3BsaXQoXCIuXCIpOzM9PT1oLmxlbmd0aD8oYT1oWzFdLGM9aFswXS50b0xvd2VyQ2FzZSgpKToyPT09aC5sZW5ndGgmJihhPWhbMF0pO2s9Yi5pbmRleE9mKFwiOlwiKTswPD1rJiYoZD1cImh0dHBzXCI9PT1lfHxcIndzc1wiPT09ZSl9XCJmaXJlYmFzZVwiPT09YSYmQWMoYitcIiBpcyBubyBsb25nZXIgc3VwcG9ydGVkLiBQbGVhc2UgdXNlIDxZT1VSIEZJUkVCQVNFPi5maXJlYmFzZWlvLmNvbSBpbnN0ZWFkXCIpO1xuYyYmXCJ1bmRlZmluZWRcIiE9Y3x8QWMoXCJDYW5ub3QgcGFyc2UgRmlyZWJhc2UgdXJsLiBQbGVhc2UgdXNlIGh0dHBzOi8vPFlPVVIgRklSRUJBU0U+LmZpcmViYXNlaW8uY29tXCIpO2R8fFwidW5kZWZpbmVkXCIhPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cubG9jYXRpb24mJndpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCYmLTEhPT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBzOlwiKSYmTyhcIkluc2VjdXJlIEZpcmViYXNlIGFjY2VzcyBmcm9tIGEgc2VjdXJlIHBhZ2UuIFBsZWFzZSB1c2UgaHR0cHMgaW4gY2FsbHMgdG8gbmV3IEZpcmViYXNlKCkuXCIpO3JldHVybntqYzpuZXcgSGIoYixkLGMsXCJ3c1wiPT09ZXx8XCJ3c3NcIj09PWUpLHBhdGg6bmV3IEwoZil9fWZ1bmN0aW9uIENjKGEpe3JldHVybiBnYShhKSYmKGEhPWF8fGE9PU51bWJlci5QT1NJVElWRV9JTkZJTklUWXx8YT09TnVtYmVyLk5FR0FUSVZFX0lORklOSVRZKX1cbmZ1bmN0aW9uIERjKGEpe2lmKFwiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUpYSgpO2Vsc2V7dmFyIGI9ITEsYz1mdW5jdGlvbigpe2RvY3VtZW50LmJvZHk/Ynx8KGI9ITAsYSgpKTpzZXRUaW1lb3V0KGMsTWF0aC5mbG9vcigxMCkpfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyPyhkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGMsITEpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGMsITEpKTpkb2N1bWVudC5hdHRhY2hFdmVudCYmKGRvY3VtZW50LmF0dGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsZnVuY3Rpb24oKXtcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlJiZjKCl9KSx3aW5kb3cuYXR0YWNoRXZlbnQoXCJvbmxvYWRcIixjKSl9fVxuZnVuY3Rpb24gaGMoYSxiKXtpZihhPT09YilyZXR1cm4gMDtpZihcIltNSU5fTkFNRV1cIj09PWF8fFwiW01BWF9OQU1FXVwiPT09YilyZXR1cm4tMTtpZihcIltNSU5fTkFNRV1cIj09PWJ8fFwiW01BWF9OQU1FXVwiPT09YSlyZXR1cm4gMTt2YXIgYz1FYyhhKSxkPUVjKGIpO3JldHVybiBudWxsIT09Yz9udWxsIT09ZD8wPT1jLWQ/YS5sZW5ndGgtYi5sZW5ndGg6Yy1kOi0xOm51bGwhPT1kPzE6YTxiPy0xOjF9ZnVuY3Rpb24gRmMoYSxiKXtpZihiJiZhIGluIGIpcmV0dXJuIGJbYV07dGhyb3cgRXJyb3IoXCJNaXNzaW5nIHJlcXVpcmVkIGtleSAoXCIrYStcIikgaW4gb2JqZWN0OiBcIitCKGIpKTt9XG5mdW5jdGlvbiBHYyhhKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGF8fG51bGw9PT1hKXJldHVybiBCKGEpO3ZhciBiPVtdLGM7Zm9yKGMgaW4gYSliLnB1c2goYyk7Yi5zb3J0KCk7Yz1cIntcIjtmb3IodmFyIGQ9MDtkPGIubGVuZ3RoO2QrKykwIT09ZCYmKGMrPVwiLFwiKSxjKz1CKGJbZF0pLGMrPVwiOlwiLGMrPUdjKGFbYltkXV0pO3JldHVybiBjK1wifVwifWZ1bmN0aW9uIEhjKGEsYil7aWYoYS5sZW5ndGg8PWIpcmV0dXJuW2FdO2Zvcih2YXIgYz1bXSxkPTA7ZDxhLmxlbmd0aDtkKz1iKWQrYj5hP2MucHVzaChhLnN1YnN0cmluZyhkLGEubGVuZ3RoKSk6Yy5wdXNoKGEuc3Vic3RyaW5nKGQsZCtiKSk7cmV0dXJuIGN9ZnVuY3Rpb24gSWMoYSxiKXtpZihlYShhKSlmb3IodmFyIGM9MDtjPGEubGVuZ3RoOysrYyliKGMsYVtjXSk7ZWxzZSByKGEsYil9XG5mdW5jdGlvbiBKYyhhKXtIKCFDYyhhKSxcIkludmFsaWQgSlNPTiBudW1iZXJcIik7dmFyIGIsYyxkLGU7MD09PWE/KGQ9Yz0wLGI9LUluZmluaXR5PT09MS9hPzE6MCk6KGI9MD5hLGE9TWF0aC5hYnMoYSksYT49TWF0aC5wb3coMiwtMTAyMik/KGQ9TWF0aC5taW4oTWF0aC5mbG9vcihNYXRoLmxvZyhhKS9NYXRoLkxOMiksMTAyMyksYz1kKzEwMjMsZD1NYXRoLnJvdW5kKGEqTWF0aC5wb3coMiw1Mi1kKS1NYXRoLnBvdygyLDUyKSkpOihjPTAsZD1NYXRoLnJvdW5kKGEvTWF0aC5wb3coMiwtMTA3NCkpKSk7ZT1bXTtmb3IoYT01MjthOy0tYSllLnB1c2goZCUyPzE6MCksZD1NYXRoLmZsb29yKGQvMik7Zm9yKGE9MTE7YTstLWEpZS5wdXNoKGMlMj8xOjApLGM9TWF0aC5mbG9vcihjLzIpO2UucHVzaChiPzE6MCk7ZS5yZXZlcnNlKCk7Yj1lLmpvaW4oXCJcIik7Yz1cIlwiO2ZvcihhPTA7NjQ+YTthKz04KWQ9cGFyc2VJbnQoYi5zdWJzdHIoYSw4KSwyKS50b1N0cmluZygxNiksMT09PWQubGVuZ3RoJiZcbihkPVwiMFwiK2QpLGMrPWQ7cmV0dXJuIGMudG9Mb3dlckNhc2UoKX12YXIgS2M9L14tP1xcZHsxLDEwfSQvO2Z1bmN0aW9uIEVjKGEpe3JldHVybiBLYy50ZXN0KGEpJiYoYT1OdW1iZXIoYSksLTIxNDc0ODM2NDg8PWEmJjIxNDc0ODM2NDc+PWEpP2E6bnVsbH1mdW5jdGlvbiB1YihhKXt0cnl7YSgpfWNhdGNoKGIpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtPKFwiRXhjZXB0aW9uIHdhcyB0aHJvd24gYnkgdXNlciBjYWxsYmFjay5cIixiLnN0YWNrfHxcIlwiKTt0aHJvdyBiO30sTWF0aC5mbG9vcigwKSl9fWZ1bmN0aW9uIExjKGEsYixjKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtnZXQ6Y30pfWZ1bmN0aW9uIE1jKGEsYil7dmFyIGM9c2V0VGltZW91dChhLGIpO1wib2JqZWN0XCI9PT10eXBlb2YgYyYmYy51bnJlZiYmYy51bnJlZigpO3JldHVybiBjfTtmdW5jdGlvbiBOYyhhKXt2YXIgYj17fSxjPXt9LGQ9e30sZT1cIlwiO3RyeXt2YXIgZj1hLnNwbGl0KFwiLlwiKSxiPW9iKHRjKGZbMF0pfHxcIlwiKSxjPW9iKHRjKGZbMV0pfHxcIlwiKSxlPWZbMl0sZD1jLmR8fHt9O2RlbGV0ZSBjLmR9Y2F0Y2goaCl7fXJldHVybnt0ZzpiLEllOmMsZGF0YTpkLG1nOmV9fWZ1bmN0aW9uIE9jKGEpe2E9TmMoYSk7dmFyIGI9YS5JZTtyZXR1cm4hIWEubWcmJiEhYiYmXCJvYmplY3RcIj09PXR5cGVvZiBiJiZiLmhhc093blByb3BlcnR5KFwiaWF0XCIpfWZ1bmN0aW9uIFBjKGEpe2E9TmMoYSkuSWU7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiYhMD09PXcoYSxcImFkbWluXCIpfTtmdW5jdGlvbiBRYyhhLGIsYyl7dGhpcy5mPXljKFwicDpyZXN0OlwiKTt0aGlzLkw9YTt0aGlzLkdiPWI7dGhpcy4kYz1jO3RoaXMuJD17fX1mdW5jdGlvbiBSYyhhLGIpe2lmKG4oYikpcmV0dXJuXCJ0YWckXCIrYjtIKFNjKGEubSksXCJzaG91bGQgaGF2ZSBhIHRhZyBpZiBpdCdzIG5vdCBhIGRlZmF1bHQgcXVlcnkuXCIpO3JldHVybiBhLnBhdGgudG9TdHJpbmcoKX1nPVFjLnByb3RvdHlwZTtcbmcuJGU9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9YS5wYXRoLnRvU3RyaW5nKCk7dGhpcy5mKFwiTGlzdGVuIGNhbGxlZCBmb3IgXCIrZStcIiBcIithLmphKCkpO3ZhciBmPVJjKGEsYyksaD17fTt0aGlzLiRbZl09aDthPVRjKGEubSk7dmFyIGs9dGhpcztVYyh0aGlzLGUrXCIuanNvblwiLGEsZnVuY3Rpb24oYSxiKXt2YXIgdT1iOzQwND09PWEmJihhPXU9bnVsbCk7bnVsbD09PWEmJmsuR2IoZSx1LCExLGMpO3coay4kLGYpPT09aCYmZChhPzQwMT09YT9cInBlcm1pc3Npb25fZGVuaWVkXCI6XCJyZXN0X2Vycm9yOlwiK2E6XCJva1wiLG51bGwpfSl9O2cudWY9ZnVuY3Rpb24oYSxiKXt2YXIgYz1SYyhhLGIpO2RlbGV0ZSB0aGlzLiRbY119O2cua2Y9ZnVuY3Rpb24oKXt9O2cucGU9ZnVuY3Rpb24oKXt9O2cuY2Y9ZnVuY3Rpb24oKXt9O2cueGQ9ZnVuY3Rpb24oKXt9O2cucHV0PWZ1bmN0aW9uKCl7fTtnLmFmPWZ1bmN0aW9uKCl7fTtnLndlPWZ1bmN0aW9uKCl7fTtcbmZ1bmN0aW9uIFVjKGEsYixjLGQpe2M9Y3x8e307Yy5mb3JtYXQ9XCJleHBvcnRcIjthLiRjLmdldFRva2VuKCExKS50aGVuKGZ1bmN0aW9uKGUpeyhlPWUmJmUuYWNjZXNzVG9rZW4pJiYoYy5hdXRoPWUpO3ZhciBmPShhLkwuU2M/XCJodHRwczovL1wiOlwiaHR0cDovL1wiKSthLkwuaG9zdCtiK1wiP1wiK2ZiKGMpO2EuZihcIlNlbmRpbmcgUkVTVCByZXF1ZXN0IGZvciBcIitmKTt2YXIgaD1uZXcgWE1MSHR0cFJlcXVlc3Q7aC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZihkJiY0PT09aC5yZWFkeVN0YXRlKXthLmYoXCJSRVNUIFJlc3BvbnNlIGZvciBcIitmK1wiIHJlY2VpdmVkLiBzdGF0dXM6XCIsaC5zdGF0dXMsXCJyZXNwb25zZTpcIixoLnJlc3BvbnNlVGV4dCk7dmFyIGI9bnVsbDtpZigyMDA8PWguc3RhdHVzJiYzMDA+aC5zdGF0dXMpe3RyeXtiPW9iKGgucmVzcG9uc2VUZXh0KX1jYXRjaChjKXtPKFwiRmFpbGVkIHRvIHBhcnNlIEpTT04gcmVzcG9uc2UgZm9yIFwiK2YrXCI6IFwiK2gucmVzcG9uc2VUZXh0KX1kKG51bGwsXG5iKX1lbHNlIDQwMSE9PWguc3RhdHVzJiY0MDQhPT1oLnN0YXR1cyYmTyhcIkdvdCB1bnN1Y2Nlc3NmdWwgUkVTVCByZXNwb25zZSBmb3IgXCIrZitcIiBTdGF0dXM6IFwiK2guc3RhdHVzKSxkKGguc3RhdHVzKTtkPW51bGx9fTtoLm9wZW4oXCJHRVRcIixmLCEwKTtoLnNlbmQoKX0pfTtmdW5jdGlvbiBWYyhhLGIsYyl7dGhpcy50eXBlPVdjO3RoaXMuc291cmNlPWE7dGhpcy5wYXRoPWI7dGhpcy5jaGlsZHJlbj1jfVZjLnByb3RvdHlwZS5NYz1mdW5jdGlvbihhKXtpZih0aGlzLnBhdGguZSgpKXJldHVybiBhPXRoaXMuY2hpbGRyZW4uc3VidHJlZShuZXcgTChhKSksYS5lKCk/bnVsbDphLnZhbHVlP25ldyBBYih0aGlzLnNvdXJjZSxDLGEudmFsdWUpOm5ldyBWYyh0aGlzLnNvdXJjZSxDLGEpO0goSih0aGlzLnBhdGgpPT09YSxcIkNhbid0IGdldCBhIG1lcmdlIGZvciBhIGNoaWxkIG5vdCBvbiB0aGUgcGF0aCBvZiB0aGUgb3BlcmF0aW9uXCIpO3JldHVybiBuZXcgVmModGhpcy5zb3VyY2UsRCh0aGlzLnBhdGgpLHRoaXMuY2hpbGRyZW4pfTtWYy5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIk9wZXJhdGlvbihcIit0aGlzLnBhdGgrXCI6IFwiK3RoaXMuc291cmNlLnRvU3RyaW5nKCkrXCIgbWVyZ2U6IFwiK3RoaXMuY2hpbGRyZW4udG9TdHJpbmcoKStcIilcIn07ZnVuY3Rpb24gWGMoYSxiKXt0aGlzLnJmPXt9O3RoaXMuVmM9bmV3IE1iKGEpO3RoaXMudmE9Yjt2YXIgYz0xRTQrMkU0Kk1hdGgucmFuZG9tKCk7TWMocSh0aGlzLmxmLHRoaXMpLE1hdGguZmxvb3IoYykpfVhjLnByb3RvdHlwZS5sZj1mdW5jdGlvbigpe3ZhciBhPXRoaXMuVmMuZ2V0KCksYj17fSxjPSExLGQ7Zm9yKGQgaW4gYSkwPGFbZF0mJmNiKHRoaXMucmYsZCkmJihiW2RdPWFbZF0sYz0hMCk7YyYmdGhpcy52YS53ZShiKTtNYyhxKHRoaXMubGYsdGhpcyksTWF0aC5mbG9vcig2RTUqTWF0aC5yYW5kb20oKSkpfTt2YXIgWWM9e30sWmM9e307ZnVuY3Rpb24gJGMoYSl7YT1hLnRvU3RyaW5nKCk7WWNbYV18fChZY1thXT1uZXcgS2IpO3JldHVybiBZY1thXX1mdW5jdGlvbiBhZChhLGIpe3ZhciBjPWEudG9TdHJpbmcoKTtaY1tjXXx8KFpjW2NdPWIoKSk7cmV0dXJuIFpjW2NdfTt2YXIgYmQ9bnVsbDtcInVuZGVmaW5lZFwiIT09dHlwZW9mIE1veldlYlNvY2tldD9iZD1Nb3pXZWJTb2NrZXQ6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBXZWJTb2NrZXQmJihiZD1XZWJTb2NrZXQpO2Z1bmN0aW9uIGNkKGEsYixjLGQpe3RoaXMuWWQ9YTt0aGlzLmY9eWModGhpcy5ZZCk7dGhpcy5mcmFtZXM9dGhpcy56Yz1udWxsO3RoaXMucGI9dGhpcy5xYj10aGlzLkRlPTA7dGhpcy5WYT0kYyhiKTthPXt2OlwiNVwifTtcInVuZGVmaW5lZFwiIT09dHlwZW9mIGxvY2F0aW9uJiZsb2NhdGlvbi5ocmVmJiYtMSE9PWxvY2F0aW9uLmhyZWYuaW5kZXhPZihcImZpcmViYXNlaW8uY29tXCIpJiYoYS5yPVwiZlwiKTtjJiYoYS5zPWMpO2QmJihhLmxzPWQpO3RoaXMuSmU9SmIoYixcIndlYnNvY2tldFwiLGEpfXZhciBkZDtcbmNkLnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKGEsYil7dGhpcy5pYj1iO3RoaXMuWGY9YTt0aGlzLmYoXCJXZWJzb2NrZXQgY29ubmVjdGluZyB0byBcIit0aGlzLkplKTt0aGlzLndjPSExO3liLnNldChcInByZXZpb3VzX3dlYnNvY2tldF9mYWlsdXJlXCIsITApO3RyeXt0aGlzLklhPW5ldyBiZCh0aGlzLkplKX1jYXRjaChjKXt0aGlzLmYoXCJFcnJvciBpbnN0YW50aWF0aW5nIFdlYlNvY2tldC5cIik7dmFyIGQ9Yy5tZXNzYWdlfHxjLmRhdGE7ZCYmdGhpcy5mKGQpO3RoaXMuYmIoKTtyZXR1cm59dmFyIGU9dGhpczt0aGlzLklhLm9ub3Blbj1mdW5jdGlvbigpe2UuZihcIldlYnNvY2tldCBjb25uZWN0ZWQuXCIpO2Uud2M9ITB9O3RoaXMuSWEub25jbG9zZT1mdW5jdGlvbigpe2UuZihcIldlYnNvY2tldCBjb25uZWN0aW9uIHdhcyBkaXNjb25uZWN0ZWQuXCIpO2UuSWE9bnVsbDtlLmJiKCl9O3RoaXMuSWEub25tZXNzYWdlPWZ1bmN0aW9uKGEpe2lmKG51bGwhPT1lLklhKWlmKGE9YS5kYXRhLGUucGIrPVxuYS5sZW5ndGgsTGIoZS5WYSxcImJ5dGVzX3JlY2VpdmVkXCIsYS5sZW5ndGgpLGVkKGUpLG51bGwhPT1lLmZyYW1lcylmZChlLGEpO2Vsc2V7YTp7SChudWxsPT09ZS5mcmFtZXMsXCJXZSBhbHJlYWR5IGhhdmUgYSBmcmFtZSBidWZmZXJcIik7aWYoNj49YS5sZW5ndGgpe3ZhciBiPU51bWJlcihhKTtpZighaXNOYU4oYikpe2UuRGU9YjtlLmZyYW1lcz1bXTthPW51bGw7YnJlYWsgYX19ZS5EZT0xO2UuZnJhbWVzPVtdfW51bGwhPT1hJiZmZChlLGEpfX07dGhpcy5JYS5vbmVycm9yPWZ1bmN0aW9uKGEpe2UuZihcIldlYlNvY2tldCBlcnJvci4gIENsb3NpbmcgY29ubmVjdGlvbi5cIik7KGE9YS5tZXNzYWdlfHxhLmRhdGEpJiZlLmYoYSk7ZS5iYigpfX07Y2QucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7fTtcbmNkLmlzQXZhaWxhYmxlPWZ1bmN0aW9uKCl7dmFyIGE9ITE7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBuYXZpZ2F0b3ImJm5hdmlnYXRvci51c2VyQWdlbnQpe3ZhciBiPW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQgKFswLTldezAsfVxcLlswLTldezAsfSkvKTtiJiYxPGIubGVuZ3RoJiY0LjQ+cGFyc2VGbG9hdChiWzFdKSYmKGE9ITApfXJldHVybiFhJiZudWxsIT09YmQmJiFkZH07Y2QucmVzcG9uc2VzUmVxdWlyZWRUb0JlSGVhbHRoeT0yO2NkLmhlYWx0aHlUaW1lb3V0PTNFNDtnPWNkLnByb3RvdHlwZTtnLnNkPWZ1bmN0aW9uKCl7eWIucmVtb3ZlKFwicHJldmlvdXNfd2Vic29ja2V0X2ZhaWx1cmVcIil9O2Z1bmN0aW9uIGZkKGEsYil7YS5mcmFtZXMucHVzaChiKTtpZihhLmZyYW1lcy5sZW5ndGg9PWEuRGUpe3ZhciBjPWEuZnJhbWVzLmpvaW4oXCJcIik7YS5mcmFtZXM9bnVsbDtjPW9iKGMpO2EuWGYoYyl9fVxuZy5zZW5kPWZ1bmN0aW9uKGEpe2VkKHRoaXMpO2E9QihhKTt0aGlzLnFiKz1hLmxlbmd0aDtMYih0aGlzLlZhLFwiYnl0ZXNfc2VudFwiLGEubGVuZ3RoKTthPUhjKGEsMTYzODQpOzE8YS5sZW5ndGgmJmdkKHRoaXMsU3RyaW5nKGEubGVuZ3RoKSk7Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspZ2QodGhpcyxhW2JdKX07Zy5UYz1mdW5jdGlvbigpe3RoaXMuQWI9ITA7dGhpcy56YyYmKGNsZWFySW50ZXJ2YWwodGhpcy56YyksdGhpcy56Yz1udWxsKTt0aGlzLklhJiYodGhpcy5JYS5jbG9zZSgpLHRoaXMuSWE9bnVsbCl9O2cuYmI9ZnVuY3Rpb24oKXt0aGlzLkFifHwodGhpcy5mKFwiV2ViU29ja2V0IGlzIGNsb3NpbmcgaXRzZWxmXCIpLHRoaXMuVGMoKSx0aGlzLmliJiYodGhpcy5pYih0aGlzLndjKSx0aGlzLmliPW51bGwpKX07Zy5jbG9zZT1mdW5jdGlvbigpe3RoaXMuQWJ8fCh0aGlzLmYoXCJXZWJTb2NrZXQgaXMgYmVpbmcgY2xvc2VkXCIpLHRoaXMuVGMoKSl9O1xuZnVuY3Rpb24gZWQoYSl7Y2xlYXJJbnRlcnZhbChhLnpjKTthLnpjPXNldEludGVydmFsKGZ1bmN0aW9uKCl7YS5JYSYmZ2QoYSxcIjBcIik7ZWQoYSl9LE1hdGguZmxvb3IoNDVFMykpfWZ1bmN0aW9uIGdkKGEsYil7dHJ5e2EuSWEuc2VuZChiKX1jYXRjaChjKXthLmYoXCJFeGNlcHRpb24gdGhyb3duIGZyb20gV2ViU29ja2V0LnNlbmQoKTpcIixjLm1lc3NhZ2V8fGMuZGF0YSxcIkNsb3NpbmcgY29ubmVjdGlvbi5cIiksc2V0VGltZW91dChxKGEuYmIsYSksMCl9fTtmdW5jdGlvbiBoZCgpe3RoaXMuZmI9e319XG5mdW5jdGlvbiBqZChhLGIpe3ZhciBjPWIudHlwZSxkPWIuWGE7SChcImNoaWxkX2FkZGVkXCI9PWN8fFwiY2hpbGRfY2hhbmdlZFwiPT1jfHxcImNoaWxkX3JlbW92ZWRcIj09YyxcIk9ubHkgY2hpbGQgY2hhbmdlcyBzdXBwb3J0ZWQgZm9yIHRyYWNraW5nXCIpO0goXCIucHJpb3JpdHlcIiE9PWQsXCJPbmx5IG5vbi1wcmlvcml0eSBjaGlsZCBjaGFuZ2VzIGNhbiBiZSB0cmFja2VkLlwiKTt2YXIgZT13KGEuZmIsZCk7aWYoZSl7dmFyIGY9ZS50eXBlO2lmKFwiY2hpbGRfYWRkZWRcIj09YyYmXCJjaGlsZF9yZW1vdmVkXCI9PWYpYS5mYltkXT1uZXcgSShcImNoaWxkX2NoYW5nZWRcIixiLkphLGQsZS5KYSk7ZWxzZSBpZihcImNoaWxkX3JlbW92ZWRcIj09YyYmXCJjaGlsZF9hZGRlZFwiPT1mKWRlbGV0ZSBhLmZiW2RdO2Vsc2UgaWYoXCJjaGlsZF9yZW1vdmVkXCI9PWMmJlwiY2hpbGRfY2hhbmdlZFwiPT1mKWEuZmJbZF09bmV3IEkoXCJjaGlsZF9yZW1vdmVkXCIsZS5vZSxkKTtlbHNlIGlmKFwiY2hpbGRfY2hhbmdlZFwiPT1jJiZcblwiY2hpbGRfYWRkZWRcIj09ZilhLmZiW2RdPW5ldyBJKFwiY2hpbGRfYWRkZWRcIixiLkphLGQpO2Vsc2UgaWYoXCJjaGlsZF9jaGFuZ2VkXCI9PWMmJlwiY2hpbGRfY2hhbmdlZFwiPT1mKWEuZmJbZF09bmV3IEkoXCJjaGlsZF9jaGFuZ2VkXCIsYi5KYSxkLGUub2UpO2Vsc2UgdGhyb3cgc2MoXCJJbGxlZ2FsIGNvbWJpbmF0aW9uIG9mIGNoYW5nZXM6IFwiK2IrXCIgb2NjdXJyZWQgYWZ0ZXIgXCIrZSk7fWVsc2UgYS5mYltkXT1ifTtmdW5jdGlvbiBrZChhKXt0aGlzLlY9YTt0aGlzLmc9YS5tLmd9ZnVuY3Rpb24gbGQoYSxiLGMsZCl7dmFyIGU9W10sZj1bXTtKYShiLGZ1bmN0aW9uKGIpe1wiY2hpbGRfY2hhbmdlZFwiPT09Yi50eXBlJiZhLmcubmQoYi5vZSxiLkphKSYmZi5wdXNoKG5ldyBJKFwiY2hpbGRfbW92ZWRcIixiLkphLGIuWGEpKX0pO21kKGEsZSxcImNoaWxkX3JlbW92ZWRcIixiLGQsYyk7bWQoYSxlLFwiY2hpbGRfYWRkZWRcIixiLGQsYyk7bWQoYSxlLFwiY2hpbGRfbW92ZWRcIixmLGQsYyk7bWQoYSxlLFwiY2hpbGRfY2hhbmdlZFwiLGIsZCxjKTttZChhLGUsY2MsYixkLGMpO3JldHVybiBlfWZ1bmN0aW9uIG1kKGEsYixjLGQsZSxmKXtkPUthKGQsZnVuY3Rpb24oYSl7cmV0dXJuIGEudHlwZT09PWN9KTtTYShkLHEoYS5GZixhKSk7SmEoZCxmdW5jdGlvbihjKXt2YXIgZD1uZChhLGMsZik7SmEoZSxmdW5jdGlvbihlKXtlLm5mKGMudHlwZSkmJmIucHVzaChlLmNyZWF0ZUV2ZW50KGQsYS5WKSl9KX0pfVxuZnVuY3Rpb24gbmQoYSxiLGMpe1widmFsdWVcIiE9PWIudHlwZSYmXCJjaGlsZF9yZW1vdmVkXCIhPT1iLnR5cGUmJihiLkRkPWMuVmUoYi5YYSxiLkphLGEuZykpO3JldHVybiBifWtkLnByb3RvdHlwZS5GZj1mdW5jdGlvbihhLGIpe2lmKG51bGw9PWEuWGF8fG51bGw9PWIuWGEpdGhyb3cgc2MoXCJTaG91bGQgb25seSBjb21wYXJlIGNoaWxkXyBldmVudHMuXCIpO3JldHVybiB0aGlzLmcuY29tcGFyZShuZXcgSyhhLlhhLGEuSmEpLG5ldyBLKGIuWGEsYi5KYSkpfTtmdW5jdGlvbiBvZChhLGIpe3RoaXMuU2Q9YTt0aGlzLkRmPWJ9ZnVuY3Rpb24gcGQoYSl7dGhpcy5VPWF9XG5wZC5wcm90b3R5cGUuZWI9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9bmV3IGhkLGY7aWYoYi50eXBlPT09QmIpYi5zb3VyY2UuY2U/Yz1xZCh0aGlzLGEsYi5wYXRoLGIuR2EsYyxkLGUpOihIKGIuc291cmNlLlNlLFwiVW5rbm93biBzb3VyY2UuXCIpLGY9Yi5zb3VyY2UuQ2V8fGVjKGEudygpKSYmIWIucGF0aC5lKCksYz1yZCh0aGlzLGEsYi5wYXRoLGIuR2EsYyxkLGYsZSkpO2Vsc2UgaWYoYi50eXBlPT09V2MpYi5zb3VyY2UuY2U/Yz1zZCh0aGlzLGEsYi5wYXRoLGIuY2hpbGRyZW4sYyxkLGUpOihIKGIuc291cmNlLlNlLFwiVW5rbm93biBzb3VyY2UuXCIpLGY9Yi5zb3VyY2UuQ2V8fGVjKGEudygpKSxjPXRkKHRoaXMsYSxiLnBhdGgsYi5jaGlsZHJlbixjLGQsZixlKSk7ZWxzZSBpZihiLnR5cGU9PT11ZClpZihiLklkKWlmKGI9Yi5wYXRoLG51bGwhPWMubGMoYikpYz1hO2Vsc2V7Zj1uZXcgWWIoYyxhLGQpO2Q9YS5OLmooKTtpZihiLmUoKXx8XCIucHJpb3JpdHlcIj09PUooYikpZGMoYS53KCkpP1xuYj1jLkFhKGFjKGEpKTooYj1hLncoKS5qKCksSChiIGluc3RhbmNlb2YgUCxcInNlcnZlckNoaWxkcmVuIHdvdWxkIGJlIGNvbXBsZXRlIGlmIGxlYWYgbm9kZVwiKSxiPWMucmMoYikpLGI9dGhpcy5VLnlhKGQsYixlKTtlbHNle3ZhciBoPUooYiksaz1jLnFjKGgsYS53KCkpO251bGw9PWsmJlpiKGEudygpLGgpJiYoaz1kLlEoaCkpO2I9bnVsbCE9az90aGlzLlUuRihkLGgsayxEKGIpLGYsZSk6YS5OLmooKS5EYShoKT90aGlzLlUuRihkLGgsRyxEKGIpLGYsZSk6ZDtiLmUoKSYmZGMoYS53KCkpJiYoZD1jLkFhKGFjKGEpKSxkLkooKSYmKGI9dGhpcy5VLnlhKGIsZCxlKSkpfWQ9ZGMoYS53KCkpfHxudWxsIT1jLmxjKEMpO2M9dmQoYSxiLGQsdGhpcy5VLk5hKCkpfWVsc2UgYz13ZCh0aGlzLGEsYi5wYXRoLGIuT2IsYyxkLGUpO2Vsc2UgaWYoYi50eXBlPT09RGIpZD1iLnBhdGgsYj1hLncoKSxmPWIuaigpLGg9Yi5kYXx8ZC5lKCksYz14ZCh0aGlzLG5ldyB5ZChhLk4sbmV3ICRiKGYsXG5oLGIuU2IpKSxkLGMsWGIsZSk7ZWxzZSB0aHJvdyBzYyhcIlVua25vd24gb3BlcmF0aW9uIHR5cGU6IFwiK2IudHlwZSk7ZT10YShlLmZiKTtkPWM7Yj1kLk47Yi5kYSYmKGY9Yi5qKCkuSigpfHxiLmooKS5lKCksaD16ZChhKSwoMDxlLmxlbmd0aHx8IWEuTi5kYXx8ZiYmIWIuaigpLlooaCl8fCFiLmooKS5DKCkuWihoLkMoKSkpJiZlLnB1c2goYmMoemQoZCkpKSk7cmV0dXJuIG5ldyBvZChjLGUpfTtcbmZ1bmN0aW9uIHhkKGEsYixjLGQsZSxmKXt2YXIgaD1iLk47aWYobnVsbCE9ZC5sYyhjKSlyZXR1cm4gYjt2YXIgaztpZihjLmUoKSlIKGRjKGIudygpKSxcIklmIGNoYW5nZSBwYXRoIGlzIGVtcHR5LCB3ZSBtdXN0IGhhdmUgY29tcGxldGUgc2VydmVyIGRhdGFcIiksZWMoYi53KCkpPyhlPWFjKGIpLGQ9ZC5yYyhlIGluc3RhbmNlb2YgUD9lOkcpKTpkPWQuQWEoYWMoYikpLGY9YS5VLnlhKGIuTi5qKCksZCxmKTtlbHNle3ZhciBsPUooYyk7aWYoXCIucHJpb3JpdHlcIj09bClIKDE9PUFkKGMpLFwiQ2FuJ3QgaGF2ZSBhIHByaW9yaXR5IHdpdGggYWRkaXRpb25hbCBwYXRoIGNvbXBvbmVudHNcIiksZj1oLmooKSxrPWIudygpLmooKSxkPWQuYWQoYyxmLGspLGY9bnVsbCE9ZD9hLlUuZmEoZixkKTpoLmooKTtlbHNle3ZhciBtPUQoYyk7WmIoaCxsKT8oaz1iLncoKS5qKCksZD1kLmFkKGMsaC5qKCksayksZD1udWxsIT1kP2guaigpLlEobCkuRihtLGQpOmguaigpLlEobCkpOmQ9ZC5xYyhsLFxuYi53KCkpO2Y9bnVsbCE9ZD9hLlUuRihoLmooKSxsLGQsbSxlLGYpOmguaigpfX1yZXR1cm4gdmQoYixmLGguZGF8fGMuZSgpLGEuVS5OYSgpKX1mdW5jdGlvbiByZChhLGIsYyxkLGUsZixoLGspe3ZhciBsPWIudygpO2g9aD9hLlU6YS5VLlViKCk7aWYoYy5lKCkpZD1oLnlhKGwuaigpLGQsbnVsbCk7ZWxzZSBpZihoLk5hKCkmJiFsLlNiKWQ9bC5qKCkuRihjLGQpLGQ9aC55YShsLmooKSxkLG51bGwpO2Vsc2V7dmFyIG09SihjKTtpZighZmMobCxjKSYmMTxBZChjKSlyZXR1cm4gYjt2YXIgdT1EKGMpO2Q9bC5qKCkuUShtKS5GKHUsZCk7ZD1cIi5wcmlvcml0eVwiPT1tP2guZmEobC5qKCksZCk6aC5GKGwuaigpLG0sZCx1LFhiLG51bGwpfWw9bC5kYXx8Yy5lKCk7Yj1uZXcgeWQoYi5OLG5ldyAkYihkLGwsaC5OYSgpKSk7cmV0dXJuIHhkKGEsYixjLGUsbmV3IFliKGUsYixmKSxrKX1cbmZ1bmN0aW9uIHFkKGEsYixjLGQsZSxmLGgpe3ZhciBrPWIuTjtlPW5ldyBZYihlLGIsZik7aWYoYy5lKCkpaD1hLlUueWEoYi5OLmooKSxkLGgpLGE9dmQoYixoLCEwLGEuVS5OYSgpKTtlbHNlIGlmKGY9SihjKSxcIi5wcmlvcml0eVwiPT09ZiloPWEuVS5mYShiLk4uaigpLGQpLGE9dmQoYixoLGsuZGEsay5TYik7ZWxzZXtjPUQoYyk7dmFyIGw9ay5qKCkuUShmKTtpZighYy5lKCkpe3ZhciBtPWUuVGUoZik7ZD1udWxsIT1tP1wiLnByaW9yaXR5XCI9PT1CZChjKSYmbS5QKGMucGFyZW50KCkpLmUoKT9tOm0uRihjLGQpOkd9bC5aKGQpP2E9YjooaD1hLlUuRihrLmooKSxmLGQsYyxlLGgpLGE9dmQoYixoLGsuZGEsYS5VLk5hKCkpKX1yZXR1cm4gYX1cbmZ1bmN0aW9uIHNkKGEsYixjLGQsZSxmLGgpe3ZhciBrPWI7Q2QoZCxmdW5jdGlvbihkLG0pe3ZhciB1PWMubihkKTtaYihiLk4sSih1KSkmJihrPXFkKGEsayx1LG0sZSxmLGgpKX0pO0NkKGQsZnVuY3Rpb24oZCxtKXt2YXIgdT1jLm4oZCk7WmIoYi5OLEoodSkpfHwoaz1xZChhLGssdSxtLGUsZixoKSl9KTtyZXR1cm4ga31mdW5jdGlvbiBEZChhLGIpe0NkKGIsZnVuY3Rpb24oYixkKXthPWEuRihiLGQpfSk7cmV0dXJuIGF9XG5mdW5jdGlvbiB0ZChhLGIsYyxkLGUsZixoLGspe2lmKGIudygpLmooKS5lKCkmJiFkYyhiLncoKSkpcmV0dXJuIGI7dmFyIGw9YjtjPWMuZSgpP2Q6RWQoUSxjLGQpO3ZhciBtPWIudygpLmooKTtjLmNoaWxkcmVuLmhhKGZ1bmN0aW9uKGMsZCl7aWYobS5EYShjKSl7dmFyIEY9Yi53KCkuaigpLlEoYyksRj1EZChGLGQpO2w9cmQoYSxsLG5ldyBMKGMpLEYsZSxmLGgsayl9fSk7Yy5jaGlsZHJlbi5oYShmdW5jdGlvbihjLGQpe3ZhciBGPSFaYihiLncoKSxjKSYmbnVsbD09ZC52YWx1ZTttLkRhKGMpfHxGfHwoRj1iLncoKS5qKCkuUShjKSxGPURkKEYsZCksbD1yZChhLGwsbmV3IEwoYyksRixlLGYsaCxrKSl9KTtyZXR1cm4gbH1cbmZ1bmN0aW9uIHdkKGEsYixjLGQsZSxmLGgpe2lmKG51bGwhPWUubGMoYykpcmV0dXJuIGI7dmFyIGs9ZWMoYi53KCkpLGw9Yi53KCk7aWYobnVsbCE9ZC52YWx1ZSl7aWYoYy5lKCkmJmwuZGF8fGZjKGwsYykpcmV0dXJuIHJkKGEsYixjLGwuaigpLlAoYyksZSxmLGssaCk7aWYoYy5lKCkpe3ZhciBtPVE7bC5qKCkuTyhGZCxmdW5jdGlvbihhLGIpe209bS5zZXQobmV3IEwoYSksYil9KTtyZXR1cm4gdGQoYSxiLGMsbSxlLGYsayxoKX1yZXR1cm4gYn1tPVE7Q2QoZCxmdW5jdGlvbihhKXt2YXIgYj1jLm4oYSk7ZmMobCxiKSYmKG09bS5zZXQoYSxsLmooKS5QKGIpKSl9KTtyZXR1cm4gdGQoYSxiLGMsbSxlLGYsayxoKX07ZnVuY3Rpb24gR2QoYSl7dGhpcy5nPWF9Zz1HZC5wcm90b3R5cGU7Zy5GPWZ1bmN0aW9uKGEsYixjLGQsZSxmKXtIKGEueWModGhpcy5nKSxcIkEgbm9kZSBtdXN0IGJlIGluZGV4ZWQgaWYgb25seSBhIGNoaWxkIGlzIHVwZGF0ZWRcIik7ZT1hLlEoYik7aWYoZS5QKGQpLlooYy5QKGQpKSYmZS5lKCk9PWMuZSgpKXJldHVybiBhO251bGwhPWYmJihjLmUoKT9hLkRhKGIpP2pkKGYsbmV3IEkoXCJjaGlsZF9yZW1vdmVkXCIsZSxiKSk6SChhLkooKSxcIkEgY2hpbGQgcmVtb3ZlIHdpdGhvdXQgYW4gb2xkIGNoaWxkIG9ubHkgbWFrZXMgc2Vuc2Ugb24gYSBsZWFmIG5vZGVcIik6ZS5lKCk/amQoZixuZXcgSShcImNoaWxkX2FkZGVkXCIsYyxiKSk6amQoZixuZXcgSShcImNoaWxkX2NoYW5nZWRcIixjLGIsZSkpKTtyZXR1cm4gYS5KKCkmJmMuZSgpP2E6YS5UKGIsYykubmIodGhpcy5nKX07XG5nLnlhPWZ1bmN0aW9uKGEsYixjKXtudWxsIT1jJiYoYS5KKCl8fGEuTyhOLGZ1bmN0aW9uKGEsZSl7Yi5EYShhKXx8amQoYyxuZXcgSShcImNoaWxkX3JlbW92ZWRcIixlLGEpKX0pLGIuSigpfHxiLk8oTixmdW5jdGlvbihiLGUpe2lmKGEuRGEoYikpe3ZhciBmPWEuUShiKTtmLlooZSl8fGpkKGMsbmV3IEkoXCJjaGlsZF9jaGFuZ2VkXCIsZSxiLGYpKX1lbHNlIGpkKGMsbmV3IEkoXCJjaGlsZF9hZGRlZFwiLGUsYikpfSkpO3JldHVybiBiLm5iKHRoaXMuZyl9O2cuZmE9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5lKCk/RzphLmZhKGIpfTtnLk5hPWZ1bmN0aW9uKCl7cmV0dXJuITF9O2cuVWI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307ZnVuY3Rpb24gSGQoYSl7dGhpcy5mZT1uZXcgR2QoYS5nKTt0aGlzLmc9YS5nO3ZhciBiO2Eua2E/KGI9SWQoYSksYj1hLmcuRWMoSmQoYSksYikpOmI9YS5nLkhjKCk7dGhpcy5VYz1iO2EubmE/KGI9S2QoYSksYT1hLmcuRWMoTGQoYSksYikpOmE9YS5nLkZjKCk7dGhpcy52Yz1hfWc9SGQucHJvdG90eXBlO2cubWF0Y2hlcz1mdW5jdGlvbihhKXtyZXR1cm4gMD49dGhpcy5nLmNvbXBhcmUodGhpcy5VYyxhKSYmMD49dGhpcy5nLmNvbXBhcmUoYSx0aGlzLnZjKX07Zy5GPWZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLm1hdGNoZXMobmV3IEsoYixjKSl8fChjPUcpO3JldHVybiB0aGlzLmZlLkYoYSxiLGMsZCxlLGYpfTtcbmcueWE9ZnVuY3Rpb24oYSxiLGMpe2IuSigpJiYoYj1HKTt2YXIgZD1iLm5iKHRoaXMuZyksZD1kLmZhKEcpLGU9dGhpcztiLk8oTixmdW5jdGlvbihhLGIpe2UubWF0Y2hlcyhuZXcgSyhhLGIpKXx8KGQ9ZC5UKGEsRykpfSk7cmV0dXJuIHRoaXMuZmUueWEoYSxkLGMpfTtnLmZhPWZ1bmN0aW9uKGEpe3JldHVybiBhfTtnLk5hPWZ1bmN0aW9uKCl7cmV0dXJuITB9O2cuVWI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5mZX07ZnVuY3Rpb24gTWQoYSl7dGhpcy5zYT1uZXcgSGQoYSk7dGhpcy5nPWEuZztIKGEueGEsXCJPbmx5IHZhbGlkIGlmIGxpbWl0IGhhcyBiZWVuIHNldFwiKTt0aGlzLm9hPWEub2E7dGhpcy5JYj0hTmQoYSl9Zz1NZC5wcm90b3R5cGU7Zy5GPWZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLnNhLm1hdGNoZXMobmV3IEsoYixjKSl8fChjPUcpO3JldHVybiBhLlEoYikuWihjKT9hOmEuRWIoKTx0aGlzLm9hP3RoaXMuc2EuVWIoKS5GKGEsYixjLGQsZSxmKTpPZCh0aGlzLGEsYixjLGUsZil9O1xuZy55YT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ7aWYoYi5KKCl8fGIuZSgpKWQ9Ry5uYih0aGlzLmcpO2Vsc2UgaWYoMip0aGlzLm9hPGIuRWIoKSYmYi55Yyh0aGlzLmcpKXtkPUcubmIodGhpcy5nKTtiPXRoaXMuSWI/Yi5aYih0aGlzLnNhLnZjLHRoaXMuZyk6Yi5YYih0aGlzLnNhLlVjLHRoaXMuZyk7Zm9yKHZhciBlPTA7MDxiLlBhLmxlbmd0aCYmZTx0aGlzLm9hOyl7dmFyIGY9UihiKSxoO2lmKGg9dGhpcy5JYj8wPj10aGlzLmcuY29tcGFyZSh0aGlzLnNhLlVjLGYpOjA+PXRoaXMuZy5jb21wYXJlKGYsdGhpcy5zYS52YykpZD1kLlQoZi5uYW1lLGYuUiksZSsrO2Vsc2UgYnJlYWt9fWVsc2V7ZD1iLm5iKHRoaXMuZyk7ZD1kLmZhKEcpO3ZhciBrLGwsbTtpZih0aGlzLkliKXtiPWQuV2UodGhpcy5nKTtrPXRoaXMuc2EudmM7bD10aGlzLnNhLlVjO3ZhciB1PVBkKHRoaXMuZyk7bT1mdW5jdGlvbihhLGIpe3JldHVybiB1KGIsYSl9fWVsc2UgYj1kLldiKHRoaXMuZyksaz10aGlzLnNhLlVjLFxubD10aGlzLnNhLnZjLG09UGQodGhpcy5nKTtmb3IodmFyIGU9MCx6PSExOzA8Yi5QYS5sZW5ndGg7KWY9UihiKSwheiYmMD49bShrLGYpJiYoej0hMCksKGg9eiYmZTx0aGlzLm9hJiYwPj1tKGYsbCkpP2UrKzpkPWQuVChmLm5hbWUsRyl9cmV0dXJuIHRoaXMuc2EuVWIoKS55YShhLGQsYyl9O2cuZmE9ZnVuY3Rpb24oYSl7cmV0dXJuIGF9O2cuTmE9ZnVuY3Rpb24oKXtyZXR1cm4hMH07Zy5VYj1mdW5jdGlvbigpe3JldHVybiB0aGlzLnNhLlViKCl9O1xuZnVuY3Rpb24gT2QoYSxiLGMsZCxlLGYpe3ZhciBoO2lmKGEuSWIpe3ZhciBrPVBkKGEuZyk7aD1mdW5jdGlvbihhLGIpe3JldHVybiBrKGIsYSl9fWVsc2UgaD1QZChhLmcpO0goYi5FYigpPT1hLm9hLFwiXCIpO3ZhciBsPW5ldyBLKGMsZCksbT1hLkliP1FkKGIsYS5nKTpSZChiLGEuZyksdT1hLnNhLm1hdGNoZXMobCk7aWYoYi5EYShjKSl7Zm9yKHZhciB6PWIuUShjKSxtPWUuZGUoYS5nLG0sYS5JYik7bnVsbCE9bSYmKG0ubmFtZT09Y3x8Yi5EYShtLm5hbWUpKTspbT1lLmRlKGEuZyxtLGEuSWIpO2U9bnVsbD09bT8xOmgobSxsKTtpZih1JiYhZC5lKCkmJjA8PWUpcmV0dXJuIG51bGwhPWYmJmpkKGYsbmV3IEkoXCJjaGlsZF9jaGFuZ2VkXCIsZCxjLHopKSxiLlQoYyxkKTtudWxsIT1mJiZqZChmLG5ldyBJKFwiY2hpbGRfcmVtb3ZlZFwiLHosYykpO2I9Yi5UKGMsRyk7cmV0dXJuIG51bGwhPW0mJmEuc2EubWF0Y2hlcyhtKT8obnVsbCE9ZiYmamQoZixuZXcgSShcImNoaWxkX2FkZGVkXCIsXG5tLlIsbS5uYW1lKSksYi5UKG0ubmFtZSxtLlIpKTpifXJldHVybiBkLmUoKT9iOnUmJjA8PWgobSxsKT8obnVsbCE9ZiYmKGpkKGYsbmV3IEkoXCJjaGlsZF9yZW1vdmVkXCIsbS5SLG0ubmFtZSkpLGpkKGYsbmV3IEkoXCJjaGlsZF9hZGRlZFwiLGQsYykpKSxiLlQoYyxkKS5UKG0ubmFtZSxHKSk6Yn07ZnVuY3Rpb24gcWMoYSxiKXt0aGlzLkI9YTtIKG4odGhpcy5CKSYmbnVsbCE9PXRoaXMuQixcIkxlYWZOb2RlIHNob3VsZG4ndCBiZSBjcmVhdGVkIHdpdGggbnVsbC91bmRlZmluZWQgdmFsdWUuXCIpO3RoaXMuYWE9Ynx8RztTZCh0aGlzLmFhKTt0aGlzLkRiPW51bGx9dmFyIFRkPVtcIm9iamVjdFwiLFwiYm9vbGVhblwiLFwibnVtYmVyXCIsXCJzdHJpbmdcIl07Zz1xYy5wcm90b3R5cGU7Zy5KPWZ1bmN0aW9uKCl7cmV0dXJuITB9O2cuQz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmFhfTtnLmZhPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgcWModGhpcy5CLGEpfTtnLlE9ZnVuY3Rpb24oYSl7cmV0dXJuXCIucHJpb3JpdHlcIj09PWE/dGhpcy5hYTpHfTtnLlA9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZSgpP3RoaXM6XCIucHJpb3JpdHlcIj09PUooYSk/dGhpcy5hYTpHfTtnLkRhPWZ1bmN0aW9uKCl7cmV0dXJuITF9O2cuVmU9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH07XG5nLlQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm5cIi5wcmlvcml0eVwiPT09YT90aGlzLmZhKGIpOmIuZSgpJiZcIi5wcmlvcml0eVwiIT09YT90aGlzOkcuVChhLGIpLmZhKHRoaXMuYWEpfTtnLkY9ZnVuY3Rpb24oYSxiKXt2YXIgYz1KKGEpO2lmKG51bGw9PT1jKXJldHVybiBiO2lmKGIuZSgpJiZcIi5wcmlvcml0eVwiIT09YylyZXR1cm4gdGhpcztIKFwiLnByaW9yaXR5XCIhPT1jfHwxPT09QWQoYSksXCIucHJpb3JpdHkgbXVzdCBiZSB0aGUgbGFzdCB0b2tlbiBpbiBhIHBhdGhcIik7cmV0dXJuIHRoaXMuVChjLEcuRihEKGEpLGIpKX07Zy5lPWZ1bmN0aW9uKCl7cmV0dXJuITF9O2cuRWI9ZnVuY3Rpb24oKXtyZXR1cm4gMH07Zy5PPWZ1bmN0aW9uKCl7cmV0dXJuITF9O2cuSD1mdW5jdGlvbihhKXtyZXR1cm4gYSYmIXRoaXMuQygpLmUoKT97XCIudmFsdWVcIjp0aGlzLkNhKCksXCIucHJpb3JpdHlcIjp0aGlzLkMoKS5IKCl9OnRoaXMuQ2EoKX07XG5nLmhhc2g9ZnVuY3Rpb24oKXtpZihudWxsPT09dGhpcy5EYil7dmFyIGE9XCJcIjt0aGlzLmFhLmUoKXx8KGErPVwicHJpb3JpdHk6XCIrVWQodGhpcy5hYS5IKCkpK1wiOlwiKTt2YXIgYj10eXBlb2YgdGhpcy5CLGE9YSsoYitcIjpcIiksYT1cIm51bWJlclwiPT09Yj9hK0pjKHRoaXMuQik6YSt0aGlzLkI7dGhpcy5EYj11YyhhKX1yZXR1cm4gdGhpcy5EYn07Zy5DYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLkJ9O2cuc2M9ZnVuY3Rpb24oYSl7aWYoYT09PUcpcmV0dXJuIDE7aWYoYSBpbnN0YW5jZW9mIFApcmV0dXJuLTE7SChhLkooKSxcIlVua25vd24gbm9kZSB0eXBlXCIpO3ZhciBiPXR5cGVvZiBhLkIsYz10eXBlb2YgdGhpcy5CLGQ9SWEoVGQsYiksZT1JYShUZCxjKTtIKDA8PWQsXCJVbmtub3duIGxlYWYgdHlwZTogXCIrYik7SCgwPD1lLFwiVW5rbm93biBsZWFmIHR5cGU6IFwiK2MpO3JldHVybiBkPT09ZT9cIm9iamVjdFwiPT09Yz8wOnRoaXMuQjxhLkI/LTE6dGhpcy5CPT09YS5CPzA6MTplLWR9O1xuZy5uYj1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtnLnljPWZ1bmN0aW9uKCl7cmV0dXJuITB9O2cuWj1mdW5jdGlvbihhKXtyZXR1cm4gYT09PXRoaXM/ITA6YS5KKCk/dGhpcy5CPT09YS5CJiZ0aGlzLmFhLlooYS5hYSk6ITF9O2cudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gQih0aGlzLkgoITApKX07ZnVuY3Rpb24gVmQoKXt9dmFyIFdkPXt9O2Z1bmN0aW9uIFBkKGEpe3JldHVybiBxKGEuY29tcGFyZSxhKX1WZC5wcm90b3R5cGUubmQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gMCE9PXRoaXMuY29tcGFyZShuZXcgSyhcIltNSU5fTkFNRV1cIixhKSxuZXcgSyhcIltNSU5fTkFNRV1cIixiKSl9O1ZkLnByb3RvdHlwZS5IYz1mdW5jdGlvbigpe3JldHVybiBYZH07ZnVuY3Rpb24gWWQoYSl7SCghYS5lKCkmJlwiLnByaW9yaXR5XCIhPT1KKGEpLFwiQ2FuJ3QgY3JlYXRlIFBhdGhJbmRleCB3aXRoIGVtcHR5IHBhdGggb3IgLnByaW9yaXR5IGtleVwiKTt0aGlzLmJjPWF9bGEoWWQsVmQpO2c9WWQucHJvdG90eXBlO2cueGM9ZnVuY3Rpb24oYSl7cmV0dXJuIWEuUCh0aGlzLmJjKS5lKCl9O2cuY29tcGFyZT1mdW5jdGlvbihhLGIpe3ZhciBjPWEuUi5QKHRoaXMuYmMpLGQ9Yi5SLlAodGhpcy5iYyksYz1jLnNjKGQpO3JldHVybiAwPT09Yz9oYyhhLm5hbWUsYi5uYW1lKTpjfTtcbmcuRWM9ZnVuY3Rpb24oYSxiKXt2YXIgYz1NKGEpLGM9Ry5GKHRoaXMuYmMsYyk7cmV0dXJuIG5ldyBLKGIsYyl9O2cuRmM9ZnVuY3Rpb24oKXt2YXIgYT1HLkYodGhpcy5iYyxaZCk7cmV0dXJuIG5ldyBLKFwiW01BWF9OQU1FXVwiLGEpfTtnLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYmMuc2xpY2UoKS5qb2luKFwiL1wiKX07ZnVuY3Rpb24gJGQoKXt9bGEoJGQsVmQpO2c9JGQucHJvdG90eXBlO2cuY29tcGFyZT1mdW5jdGlvbihhLGIpe3ZhciBjPWEuUi5DKCksZD1iLlIuQygpLGM9Yy5zYyhkKTtyZXR1cm4gMD09PWM/aGMoYS5uYW1lLGIubmFtZSk6Y307Zy54Yz1mdW5jdGlvbihhKXtyZXR1cm4hYS5DKCkuZSgpfTtnLm5kPWZ1bmN0aW9uKGEsYil7cmV0dXJuIWEuQygpLlooYi5DKCkpfTtnLkhjPWZ1bmN0aW9uKCl7cmV0dXJuIFhkfTtnLkZjPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBLKFwiW01BWF9OQU1FXVwiLG5ldyBxYyhcIltQUklPUklUWS1QT1NUXVwiLFpkKSl9O1xuZy5FYz1mdW5jdGlvbihhLGIpe3ZhciBjPU0oYSk7cmV0dXJuIG5ldyBLKGIsbmV3IHFjKFwiW1BSSU9SSVRZLVBPU1RdXCIsYykpfTtnLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCIucHJpb3JpdHlcIn07dmFyIE49bmV3ICRkO2Z1bmN0aW9uIGFlKCl7fWxhKGFlLFZkKTtnPWFlLnByb3RvdHlwZTtnLmNvbXBhcmU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gaGMoYS5uYW1lLGIubmFtZSl9O2cueGM9ZnVuY3Rpb24oKXt0aHJvdyBzYyhcIktleUluZGV4LmlzRGVmaW5lZE9uIG5vdCBleHBlY3RlZCB0byBiZSBjYWxsZWQuXCIpO307Zy5uZD1mdW5jdGlvbigpe3JldHVybiExfTtnLkhjPWZ1bmN0aW9uKCl7cmV0dXJuIFhkfTtnLkZjPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBLKFwiW01BWF9OQU1FXVwiLEcpfTtnLkVjPWZ1bmN0aW9uKGEpe0gocChhKSxcIktleUluZGV4IGluZGV4VmFsdWUgbXVzdCBhbHdheXMgYmUgYSBzdHJpbmcuXCIpO3JldHVybiBuZXcgSyhhLEcpfTtnLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCIua2V5XCJ9O1xudmFyIEZkPW5ldyBhZTtmdW5jdGlvbiBiZSgpe31sYShiZSxWZCk7Zz1iZS5wcm90b3R5cGU7Zy5jb21wYXJlPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5SLnNjKGIuUik7cmV0dXJuIDA9PT1jP2hjKGEubmFtZSxiLm5hbWUpOmN9O2cueGM9ZnVuY3Rpb24oKXtyZXR1cm4hMH07Zy5uZD1mdW5jdGlvbihhLGIpe3JldHVybiFhLlooYil9O2cuSGM9ZnVuY3Rpb24oKXtyZXR1cm4gWGR9O2cuRmM9ZnVuY3Rpb24oKXtyZXR1cm4gY2V9O2cuRWM9ZnVuY3Rpb24oYSxiKXt2YXIgYz1NKGEpO3JldHVybiBuZXcgSyhiLGMpfTtnLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCIudmFsdWVcIn07dmFyIGRlPW5ldyBiZTtmdW5jdGlvbiBlZSgpe3RoaXMuUmI9dGhpcy5uYT10aGlzLktiPXRoaXMua2E9dGhpcy54YT0hMTt0aGlzLm9hPTA7dGhpcy5tYj1cIlwiO3RoaXMuZGM9bnVsbDt0aGlzLnpiPVwiXCI7dGhpcy5hYz1udWxsO3RoaXMueGI9XCJcIjt0aGlzLmc9Tn12YXIgZmU9bmV3IGVlO2Z1bmN0aW9uIE5kKGEpe3JldHVyblwiXCI9PT1hLm1iP2Eua2E6XCJsXCI9PT1hLm1ifWZ1bmN0aW9uIEpkKGEpe0goYS5rYSxcIk9ubHkgdmFsaWQgaWYgc3RhcnQgaGFzIGJlZW4gc2V0XCIpO3JldHVybiBhLmRjfWZ1bmN0aW9uIElkKGEpe0goYS5rYSxcIk9ubHkgdmFsaWQgaWYgc3RhcnQgaGFzIGJlZW4gc2V0XCIpO3JldHVybiBhLktiP2EuemI6XCJbTUlOX05BTUVdXCJ9ZnVuY3Rpb24gTGQoYSl7SChhLm5hLFwiT25seSB2YWxpZCBpZiBlbmQgaGFzIGJlZW4gc2V0XCIpO3JldHVybiBhLmFjfVxuZnVuY3Rpb24gS2QoYSl7SChhLm5hLFwiT25seSB2YWxpZCBpZiBlbmQgaGFzIGJlZW4gc2V0XCIpO3JldHVybiBhLlJiP2EueGI6XCJbTUFYX05BTUVdXCJ9ZnVuY3Rpb24gZ2UoYSl7dmFyIGI9bmV3IGVlO2IueGE9YS54YTtiLm9hPWEub2E7Yi5rYT1hLmthO2IuZGM9YS5kYztiLktiPWEuS2I7Yi56Yj1hLnpiO2IubmE9YS5uYTtiLmFjPWEuYWM7Yi5SYj1hLlJiO2IueGI9YS54YjtiLmc9YS5nO2IubWI9YS5tYjtyZXR1cm4gYn1nPWVlLnByb3RvdHlwZTtnLmxlPWZ1bmN0aW9uKGEpe3ZhciBiPWdlKHRoaXMpO2IueGE9ITA7Yi5vYT1hO2IubWI9XCJsXCI7cmV0dXJuIGJ9O2cubWU9ZnVuY3Rpb24oYSl7dmFyIGI9Z2UodGhpcyk7Yi54YT0hMDtiLm9hPWE7Yi5tYj1cInJcIjtyZXR1cm4gYn07Zy5OZD1mdW5jdGlvbihhLGIpe3ZhciBjPWdlKHRoaXMpO2Mua2E9ITA7bihhKXx8KGE9bnVsbCk7Yy5kYz1hO251bGwhPWI/KGMuS2I9ITAsYy56Yj1iKTooYy5LYj0hMSxjLnpiPVwiXCIpO3JldHVybiBjfTtcbmcuZ2Q9ZnVuY3Rpb24oYSxiKXt2YXIgYz1nZSh0aGlzKTtjLm5hPSEwO24oYSl8fChhPW51bGwpO2MuYWM9YTtuKGIpPyhjLlJiPSEwLGMueGI9Yik6KGMudmc9ITEsYy54Yj1cIlwiKTtyZXR1cm4gY307ZnVuY3Rpb24gaGUoYSxiKXt2YXIgYz1nZShhKTtjLmc9YjtyZXR1cm4gY31mdW5jdGlvbiBpZShhKXt2YXIgYj17fTthLmthJiYoYi5zcD1hLmRjLGEuS2ImJihiLnNuPWEuemIpKTthLm5hJiYoYi5lcD1hLmFjLGEuUmImJihiLmVuPWEueGIpKTtpZihhLnhhKXtiLmw9YS5vYTt2YXIgYz1hLm1iO1wiXCI9PT1jJiYoYz1OZChhKT9cImxcIjpcInJcIik7Yi52Zj1jfWEuZyE9PU4mJihiLmk9YS5nLnRvU3RyaW5nKCkpO3JldHVybiBifWZ1bmN0aW9uIFMoYSl7cmV0dXJuIShhLmthfHxhLm5hfHxhLnhhKX1mdW5jdGlvbiBTYyhhKXtyZXR1cm4gUyhhKSYmYS5nPT1OfVxuZnVuY3Rpb24gVGMoYSl7dmFyIGI9e307aWYoU2MoYSkpcmV0dXJuIGI7dmFyIGM7YS5nPT09Tj9jPVwiJHByaW9yaXR5XCI6YS5nPT09ZGU/Yz1cIiR2YWx1ZVwiOmEuZz09PUZkP2M9XCIka2V5XCI6KEgoYS5nIGluc3RhbmNlb2YgWWQsXCJVbnJlY29nbml6ZWQgaW5kZXggdHlwZSFcIiksYz1hLmcudG9TdHJpbmcoKSk7Yi5vcmRlckJ5PUIoYyk7YS5rYSYmKGIuc3RhcnRBdD1CKGEuZGMpLGEuS2ImJihiLnN0YXJ0QXQrPVwiLFwiK0IoYS56YikpKTthLm5hJiYoYi5lbmRBdD1CKGEuYWMpLGEuUmImJihiLmVuZEF0Kz1cIixcIitCKGEueGIpKSk7YS54YSYmKE5kKGEpP2IubGltaXRUb0ZpcnN0PWEub2E6Yi5saW1pdFRvTGFzdD1hLm9hKTtyZXR1cm4gYn1nLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIEIoaWUodGhpcykpfTtmdW5jdGlvbiBqZShhLGIpe3RoaXMub2Q9YTt0aGlzLmNjPWJ9amUucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXt2YXIgYj13KHRoaXMub2QsYSk7aWYoIWIpdGhyb3cgRXJyb3IoXCJObyBpbmRleCBkZWZpbmVkIGZvciBcIithKTtyZXR1cm4gYj09PVdkP251bGw6Yn07ZnVuY3Rpb24ga2UoYSxiLGMpe3ZhciBkPXBhKGEub2QsZnVuY3Rpb24oZCxmKXt2YXIgaD13KGEuY2MsZik7SChoLFwiTWlzc2luZyBpbmRleCBpbXBsZW1lbnRhdGlvbiBmb3IgXCIrZik7aWYoZD09PVdkKXtpZihoLnhjKGIuUikpe2Zvcih2YXIgaz1bXSxsPWMuV2IoamMpLG09UihsKTttOyltLm5hbWUhPWIubmFtZSYmay5wdXNoKG0pLG09UihsKTtrLnB1c2goYik7cmV0dXJuIGxlKGssUGQoaCkpfXJldHVybiBXZH1oPWMuZ2V0KGIubmFtZSk7az1kO2gmJihrPWsucmVtb3ZlKG5ldyBLKGIubmFtZSxoKSkpO3JldHVybiBrLk9hKGIsYi5SKX0pO3JldHVybiBuZXcgamUoZCxhLmNjKX1cbmZ1bmN0aW9uIG1lKGEsYixjKXt2YXIgZD1wYShhLm9kLGZ1bmN0aW9uKGEpe2lmKGE9PT1XZClyZXR1cm4gYTt2YXIgZD1jLmdldChiLm5hbWUpO3JldHVybiBkP2EucmVtb3ZlKG5ldyBLKGIubmFtZSxkKSk6YX0pO3JldHVybiBuZXcgamUoZCxhLmNjKX12YXIgbmU9bmV3IGplKHtcIi5wcmlvcml0eVwiOldkfSx7XCIucHJpb3JpdHlcIjpOfSk7ZnVuY3Rpb24gb2UoKXt0aGlzLnNldD17fX1nPW9lLnByb3RvdHlwZTtnLmFkZD1mdW5jdGlvbihhLGIpe3RoaXMuc2V0W2FdPW51bGwhPT1iP2I6ITB9O2cuY29udGFpbnM9ZnVuY3Rpb24oYSl7cmV0dXJuIGNiKHRoaXMuc2V0LGEpfTtnLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5jb250YWlucyhhKT90aGlzLnNldFthXTp2b2lkIDB9O2cucmVtb3ZlPWZ1bmN0aW9uKGEpe2RlbGV0ZSB0aGlzLnNldFthXX07Zy5jbGVhcj1mdW5jdGlvbigpe3RoaXMuc2V0PXt9fTtnLmU9ZnVuY3Rpb24oKXtyZXR1cm4geWEodGhpcy5zZXQpfTtnLmNvdW50PWZ1bmN0aW9uKCl7cmV0dXJuIHJhKHRoaXMuc2V0KX07ZnVuY3Rpb24gcGUoYSxiKXtyKGEuc2V0LGZ1bmN0aW9uKGEsZCl7YihkLGEpfSl9Zy5rZXlzPWZ1bmN0aW9uKCl7dmFyIGE9W107cih0aGlzLnNldCxmdW5jdGlvbihiLGMpe2EucHVzaChjKX0pO3JldHVybiBhfTtmdW5jdGlvbiBxZShhLGIsYyxkKXt0aGlzLllkPWE7dGhpcy5mPXljKGEpO3RoaXMuamM9Yjt0aGlzLnBiPXRoaXMucWI9MDt0aGlzLlZhPSRjKGIpO3RoaXMudGY9Yzt0aGlzLndjPSExO3RoaXMuQ2I9ZDt0aGlzLlljPWZ1bmN0aW9uKGEpe3JldHVybiBKYihiLFwibG9uZ19wb2xsaW5nXCIsYSl9fXZhciByZSxzZTtcbnFlLnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKGEsYil7dGhpcy5NZT0wO3RoaXMuaWE9Yjt0aGlzLmJmPW5ldyByYihhKTt0aGlzLkFiPSExO3ZhciBjPXRoaXM7dGhpcy5zYj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yy5mKFwiVGltZWQgb3V0IHRyeWluZyB0byBjb25uZWN0LlwiKTtjLmJiKCk7Yy5zYj1udWxsfSxNYXRoLmZsb29yKDNFNCkpO0RjKGZ1bmN0aW9uKCl7aWYoIWMuQWIpe2MuVGE9bmV3IHRlKGZ1bmN0aW9uKGEsYixkLGssbCl7dWUoYyxhcmd1bWVudHMpO2lmKGMuVGEpaWYoYy5zYiYmKGNsZWFyVGltZW91dChjLnNiKSxjLnNiPW51bGwpLGMud2M9ITAsXCJzdGFydFwiPT1hKWMuaWQ9YixjLmZmPWQ7ZWxzZSBpZihcImNsb3NlXCI9PT1hKWI/KGMuVGEuS2Q9ITEsc2IoYy5iZixiLGZ1bmN0aW9uKCl7Yy5iYigpfSkpOmMuYmIoKTtlbHNlIHRocm93IEVycm9yKFwiVW5yZWNvZ25pemVkIGNvbW1hbmQgcmVjZWl2ZWQ6IFwiK2EpO30sZnVuY3Rpb24oYSxiKXt1ZShjLGFyZ3VtZW50cyk7XG50YihjLmJmLGEsYil9LGZ1bmN0aW9uKCl7Yy5iYigpfSxjLlljKTt2YXIgYT17c3RhcnQ6XCJ0XCJ9O2Euc2VyPU1hdGguZmxvb3IoMUU4Kk1hdGgucmFuZG9tKCkpO2MuVGEuUWQmJihhLmNiPWMuVGEuUWQpO2Eudj1cIjVcIjtjLnRmJiYoYS5zPWMudGYpO2MuQ2ImJihhLmxzPWMuQ2IpO1widW5kZWZpbmVkXCIhPT10eXBlb2YgbG9jYXRpb24mJmxvY2F0aW9uLmhyZWYmJi0xIT09bG9jYXRpb24uaHJlZi5pbmRleE9mKFwiZmlyZWJhc2Vpby5jb21cIikmJihhLnI9XCJmXCIpO2E9Yy5ZYyhhKTtjLmYoXCJDb25uZWN0aW5nIHZpYSBsb25nLXBvbGwgdG8gXCIrYSk7dmUoYy5UYSxhLGZ1bmN0aW9uKCl7fSl9fSl9O1xucWUucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5UYSxiPXRoaXMuZmY7YS5WZj10aGlzLmlkO2EuV2Y9Yjtmb3IoYS5VZD0hMDt3ZShhKTspO2E9dGhpcy5pZDtiPXRoaXMuZmY7dGhpcy5mYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO3ZhciBjPXtkZnJhbWU6XCJ0XCJ9O2MuaWQ9YTtjLnB3PWI7dGhpcy5mYy5zcmM9dGhpcy5ZYyhjKTt0aGlzLmZjLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmZjKX07XG5xZS5pc0F2YWlsYWJsZT1mdW5jdGlvbigpe3JldHVybiByZXx8IXNlJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIGRvY3VtZW50JiZudWxsIT1kb2N1bWVudC5jcmVhdGVFbGVtZW50JiYhKFwib2JqZWN0XCI9PT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuY2hyb21lJiZ3aW5kb3cuY2hyb21lLmV4dGVuc2lvbiYmIS9eY2hyb21lLy50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ocmVmKSkmJiEoXCJvYmplY3RcIj09PXR5cGVvZiBXaW5kb3dzJiZcIm9iamVjdFwiPT09dHlwZW9mIFdpbmRvd3MucmcpJiYhMH07Zz1xZS5wcm90b3R5cGU7Zy5zZD1mdW5jdGlvbigpe307Zy5UYz1mdW5jdGlvbigpe3RoaXMuQWI9ITA7dGhpcy5UYSYmKHRoaXMuVGEuY2xvc2UoKSx0aGlzLlRhPW51bGwpO3RoaXMuZmMmJihkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZmMpLHRoaXMuZmM9bnVsbCk7dGhpcy5zYiYmKGNsZWFyVGltZW91dCh0aGlzLnNiKSx0aGlzLnNiPW51bGwpfTtcbmcuYmI9ZnVuY3Rpb24oKXt0aGlzLkFifHwodGhpcy5mKFwiTG9uZ3BvbGwgaXMgY2xvc2luZyBpdHNlbGZcIiksdGhpcy5UYygpLHRoaXMuaWEmJih0aGlzLmlhKHRoaXMud2MpLHRoaXMuaWE9bnVsbCkpfTtnLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5BYnx8KHRoaXMuZihcIkxvbmdwb2xsIGlzIGJlaW5nIGNsb3NlZC5cIiksdGhpcy5UYygpKX07Zy5zZW5kPWZ1bmN0aW9uKGEpe2E9QihhKTt0aGlzLnFiKz1hLmxlbmd0aDtMYih0aGlzLlZhLFwiYnl0ZXNfc2VudFwiLGEubGVuZ3RoKTthPW1iKGEpO2E9YWIoYSwhMCk7YT1IYyhhLDE4NDApO2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz10aGlzLlRhO2MuUWMucHVzaCh7amc6dGhpcy5NZSxwZzphLmxlbmd0aCxPZTphW2JdfSk7Yy5VZCYmd2UoYyk7dGhpcy5NZSsrfX07ZnVuY3Rpb24gdWUoYSxiKXt2YXIgYz1CKGIpLmxlbmd0aDthLnBiKz1jO0xiKGEuVmEsXCJieXRlc19yZWNlaXZlZFwiLGMpfVxuZnVuY3Rpb24gdGUoYSxiLGMsZCl7dGhpcy5ZYz1kO3RoaXMuaWI9Yzt0aGlzLnRlPW5ldyBvZTt0aGlzLlFjPVtdO3RoaXMuWmQ9TWF0aC5mbG9vcigxRTgqTWF0aC5yYW5kb20oKSk7dGhpcy5LZD0hMDt0aGlzLlFkPXJjKCk7d2luZG93W1wicExQQ29tbWFuZFwiK3RoaXMuUWRdPWE7d2luZG93W1wicFJUTFBDQlwiK3RoaXMuUWRdPWI7YT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO2Euc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtpZihkb2N1bWVudC5ib2R5KXtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO3RyeXthLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnR8fEUoXCJObyBJRSBkb21haW4gc2V0dGluZyByZXF1aXJlZFwiKX1jYXRjaChlKXthLnNyYz1cImphdmFzY3JpcHQ6dm9pZCgoZnVuY3Rpb24oKXtkb2N1bWVudC5vcGVuKCk7ZG9jdW1lbnQuZG9tYWluPSdcIitkb2N1bWVudC5kb21haW4rXCInO2RvY3VtZW50LmNsb3NlKCk7fSkoKSlcIn19ZWxzZSB0aHJvd1wiRG9jdW1lbnQgYm9keSBoYXMgbm90IGluaXRpYWxpemVkLiBXYWl0IHRvIGluaXRpYWxpemUgRmlyZWJhc2UgdW50aWwgYWZ0ZXIgdGhlIGRvY3VtZW50IGlzIHJlYWR5LlwiO1xuYS5jb250ZW50RG9jdW1lbnQ/YS5nYj1hLmNvbnRlbnREb2N1bWVudDphLmNvbnRlbnRXaW5kb3c/YS5nYj1hLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ6YS5kb2N1bWVudCYmKGEuZ2I9YS5kb2N1bWVudCk7dGhpcy5FYT1hO2E9XCJcIjt0aGlzLkVhLnNyYyYmXCJqYXZhc2NyaXB0OlwiPT09dGhpcy5FYS5zcmMuc3Vic3RyKDAsMTEpJiYoYT0nPHNjcmlwdD5kb2N1bWVudC5kb21haW49XCInK2RvY3VtZW50LmRvbWFpbisnXCI7XFx4M2Mvc2NyaXB0PicpO2E9XCI8aHRtbD48Ym9keT5cIithK1wiPC9ib2R5PjwvaHRtbD5cIjt0cnl7dGhpcy5FYS5nYi5vcGVuKCksdGhpcy5FYS5nYi53cml0ZShhKSx0aGlzLkVhLmdiLmNsb3NlKCl9Y2F0Y2goZil7RShcImZyYW1lIHdyaXRpbmcgZXhjZXB0aW9uXCIpLGYuc3RhY2smJkUoZi5zdGFjayksRShmKX19XG50ZS5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLlVkPSExO2lmKHRoaXMuRWEpe3RoaXMuRWEuZ2IuYm9keS5pbm5lckhUTUw9XCJcIjt2YXIgYT10aGlzO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtudWxsIT09YS5FYSYmKGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYS5FYSksYS5FYT1udWxsKX0sTWF0aC5mbG9vcigwKSl9dmFyIGI9dGhpcy5pYjtiJiYodGhpcy5pYj1udWxsLGIoKSl9O1xuZnVuY3Rpb24gd2UoYSl7aWYoYS5VZCYmYS5LZCYmYS50ZS5jb3VudCgpPCgwPGEuUWMubGVuZ3RoPzI6MSkpe2EuWmQrKzt2YXIgYj17fTtiLmlkPWEuVmY7Yi5wdz1hLldmO2Iuc2VyPWEuWmQ7Zm9yKHZhciBiPWEuWWMoYiksYz1cIlwiLGQ9MDswPGEuUWMubGVuZ3RoOylpZigxODcwPj1hLlFjWzBdLk9lLmxlbmd0aCszMCtjLmxlbmd0aCl7dmFyIGU9YS5RYy5zaGlmdCgpLGM9YytcIiZzZWdcIitkK1wiPVwiK2UuamcrXCImdHNcIitkK1wiPVwiK2UucGcrXCImZFwiK2QrXCI9XCIrZS5PZTtkKyt9ZWxzZSBicmVhazt4ZShhLGIrYyxhLlpkKTtyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiB4ZShhLGIsYyl7ZnVuY3Rpb24gZCgpe2EudGUucmVtb3ZlKGMpO3dlKGEpfWEudGUuYWRkKGMsMSk7dmFyIGU9c2V0VGltZW91dChkLE1hdGguZmxvb3IoMjVFMykpO3ZlKGEsYixmdW5jdGlvbigpe2NsZWFyVGltZW91dChlKTtkKCl9KX1cbmZ1bmN0aW9uIHZlKGEsYixjKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHJ5e2lmKGEuS2Qpe3ZhciBkPWEuRWEuZ2IuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtkLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjtkLmFzeW5jPSEwO2Quc3JjPWI7ZC5vbmxvYWQ9ZC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXt2YXIgYT1kLnJlYWR5U3RhdGU7YSYmXCJsb2FkZWRcIiE9PWEmJlwiY29tcGxldGVcIiE9PWF8fChkLm9ubG9hZD1kLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLGQucGFyZW50Tm9kZSYmZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpLGMoKSl9O2Qub25lcnJvcj1mdW5jdGlvbigpe0UoXCJMb25nLXBvbGwgc2NyaXB0IGZhaWxlZCB0byBsb2FkOiBcIitiKTthLktkPSExO2EuY2xvc2UoKX07YS5FYS5nYi5ib2R5LmFwcGVuZENoaWxkKGQpfX1jYXRjaChlKXt9fSxNYXRoLmZsb29yKDEpKX07ZnVuY3Rpb24geWUoYSl7emUodGhpcyxhKX12YXIgQWU9W3FlLGNkXTtmdW5jdGlvbiB6ZShhLGIpe3ZhciBjPWNkJiZjZC5pc0F2YWlsYWJsZSgpLGQ9YyYmISh5Yi5aZXx8ITA9PT15Yi5nZXQoXCJwcmV2aW91c193ZWJzb2NrZXRfZmFpbHVyZVwiKSk7Yi5xZyYmKGN8fE8oXCJ3c3M6Ly8gVVJMIHVzZWQsIGJ1dCBicm93c2VyIGlzbid0IGtub3duIHRvIHN1cHBvcnQgd2Vic29ja2V0cy4gIFRyeWluZyBhbnl3YXkuXCIpLGQ9ITApO2lmKGQpYS5XYz1bY2RdO2Vsc2V7dmFyIGU9YS5XYz1bXTtJYyhBZSxmdW5jdGlvbihhLGIpe2ImJmIuaXNBdmFpbGFibGUoKSYmZS5wdXNoKGIpfSl9fWZ1bmN0aW9uIEJlKGEpe2lmKDA8YS5XYy5sZW5ndGgpcmV0dXJuIGEuV2NbMF07dGhyb3cgRXJyb3IoXCJObyB0cmFuc3BvcnRzIGF2YWlsYWJsZVwiKTt9O2Z1bmN0aW9uIENlKGEsYixjLGQsZSxmLGgpe3RoaXMuaWQ9YTt0aGlzLmY9eWMoXCJjOlwiK3RoaXMuaWQrXCI6XCIpO3RoaXMucmU9Yzt0aGlzLkxjPWQ7dGhpcy5pYT1lO3RoaXMucWU9Zjt0aGlzLkw9Yjt0aGlzLkFkPVtdO3RoaXMuS2U9MDt0aGlzLnNmPW5ldyB5ZShiKTt0aGlzLlVhPTA7dGhpcy5DYj1oO3RoaXMuZihcIkNvbm5lY3Rpb24gY3JlYXRlZFwiKTtEZSh0aGlzKX1cbmZ1bmN0aW9uIERlKGEpe3ZhciBiPUJlKGEuc2YpO2EuST1uZXcgYihcImM6XCIrYS5pZCtcIjpcIithLktlKyssYS5MLHZvaWQgMCxhLkNiKTthLnZlPWIucmVzcG9uc2VzUmVxdWlyZWRUb0JlSGVhbHRoeXx8MDt2YXIgYz1FZShhLGEuSSksZD1GZShhLGEuSSk7YS5YYz1hLkk7YS5SYz1hLkk7YS5EPW51bGw7YS5CYj0hMTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YS5JJiZhLkkub3BlbihjLGQpfSxNYXRoLmZsb29yKDApKTtiPWIuaGVhbHRoeVRpbWVvdXR8fDA7MDxiJiYoYS5tZD1NYyhmdW5jdGlvbigpe2EubWQ9bnVsbDthLkJifHwoYS5JJiYxMDI0MDA8YS5JLnBiPyhhLmYoXCJDb25uZWN0aW9uIGV4Y2VlZGVkIGhlYWx0aHkgdGltZW91dCBidXQgaGFzIHJlY2VpdmVkIFwiK2EuSS5wYitcIiBieXRlcy4gIE1hcmtpbmcgY29ubmVjdGlvbiBoZWFsdGh5LlwiKSxhLkJiPSEwLGEuSS5zZCgpKTphLkkmJjEwMjQwPGEuSS5xYj9hLmYoXCJDb25uZWN0aW9uIGV4Y2VlZGVkIGhlYWx0aHkgdGltZW91dCBidXQgaGFzIHNlbnQgXCIrXG5hLkkucWIrXCIgYnl0ZXMuICBMZWF2aW5nIGNvbm5lY3Rpb24gYWxpdmUuXCIpOihhLmYoXCJDbG9zaW5nIHVuaGVhbHRoeSBjb25uZWN0aW9uIGFmdGVyIHRpbWVvdXQuXCIpLGEuY2xvc2UoKSkpfSxNYXRoLmZsb29yKGIpKSl9ZnVuY3Rpb24gRmUoYSxiKXtyZXR1cm4gZnVuY3Rpb24oYyl7Yj09PWEuST8oYS5JPW51bGwsY3x8MCE9PWEuVWE/MT09PWEuVWEmJmEuZihcIlJlYWx0aW1lIGNvbm5lY3Rpb24gbG9zdC5cIik6KGEuZihcIlJlYWx0aW1lIGNvbm5lY3Rpb24gZmFpbGVkLlwiKSxcInMtXCI9PT1hLkwuJGEuc3Vic3RyKDAsMikmJih5Yi5yZW1vdmUoXCJob3N0OlwiK2EuTC5ob3N0KSxhLkwuJGE9YS5MLmhvc3QpKSxhLmNsb3NlKCkpOmI9PT1hLkQ/KGEuZihcIlNlY29uZGFyeSBjb25uZWN0aW9uIGxvc3QuXCIpLGM9YS5ELGEuRD1udWxsLGEuWGMhPT1jJiZhLlJjIT09Y3x8YS5jbG9zZSgpKTphLmYoXCJjbG9zaW5nIGFuIG9sZCBjb25uZWN0aW9uXCIpfX1cbmZ1bmN0aW9uIEVlKGEsYil7cmV0dXJuIGZ1bmN0aW9uKGMpe2lmKDIhPWEuVWEpaWYoYj09PWEuUmMpe3ZhciBkPUZjKFwidFwiLGMpO2M9RmMoXCJkXCIsYyk7aWYoXCJjXCI9PWQpe2lmKGQ9RmMoXCJ0XCIsYyksXCJkXCJpbiBjKWlmKGM9Yy5kLFwiaFwiPT09ZCl7dmFyIGQ9Yy50cyxlPWMudixmPWMuaDthLnFmPWMucztJYihhLkwsZik7MD09YS5VYSYmKGEuSS5zdGFydCgpLEdlKGEsYS5JLGQpLFwiNVwiIT09ZSYmTyhcIlByb3RvY29sIHZlcnNpb24gbWlzbWF0Y2ggZGV0ZWN0ZWRcIiksYz1hLnNmLChjPTE8Yy5XYy5sZW5ndGg/Yy5XY1sxXTpudWxsKSYmSGUoYSxjKSl9ZWxzZSBpZihcIm5cIj09PWQpe2EuZihcInJlY3ZkIGVuZCB0cmFuc21pc3Npb24gb24gcHJpbWFyeVwiKTthLlJjPWEuRDtmb3IoYz0wO2M8YS5BZC5sZW5ndGg7KytjKWEud2QoYS5BZFtjXSk7YS5BZD1bXTtJZShhKX1lbHNlXCJzXCI9PT1kPyhhLmYoXCJDb25uZWN0aW9uIHNodXRkb3duIGNvbW1hbmQgcmVjZWl2ZWQuIFNodXR0aW5nIGRvd24uLi5cIiksXG5hLnFlJiYoYS5xZShjKSxhLnFlPW51bGwpLGEuaWE9bnVsbCxhLmNsb3NlKCkpOlwiclwiPT09ZD8oYS5mKFwiUmVzZXQgcGFja2V0IHJlY2VpdmVkLiAgTmV3IGhvc3Q6IFwiK2MpLEliKGEuTCxjKSwxPT09YS5VYT9hLmNsb3NlKCk6KEplKGEpLERlKGEpKSk6XCJlXCI9PT1kP3pjKFwiU2VydmVyIEVycm9yOiBcIitjKTpcIm9cIj09PWQ/KGEuZihcImdvdCBwb25nIG9uIHByaW1hcnkuXCIpLEtlKGEpLExlKGEpKTp6YyhcIlVua25vd24gY29udHJvbCBwYWNrZXQgY29tbWFuZDogXCIrZCl9ZWxzZVwiZFwiPT1kJiZhLndkKGMpfWVsc2UgaWYoYj09PWEuRClpZihkPUZjKFwidFwiLGMpLGM9RmMoXCJkXCIsYyksXCJjXCI9PWQpXCJ0XCJpbiBjJiYoYz1jLnQsXCJhXCI9PT1jP01lKGEpOlwiclwiPT09Yz8oYS5mKFwiR290IGEgcmVzZXQgb24gc2Vjb25kYXJ5LCBjbG9zaW5nIGl0XCIpLGEuRC5jbG9zZSgpLGEuWGMhPT1hLkQmJmEuUmMhPT1hLkR8fGEuY2xvc2UoKSk6XCJvXCI9PT1jJiYoYS5mKFwiZ290IHBvbmcgb24gc2Vjb25kYXJ5LlwiKSxcbmEucGYtLSxNZShhKSkpO2Vsc2UgaWYoXCJkXCI9PWQpYS5BZC5wdXNoKGMpO2Vsc2UgdGhyb3cgRXJyb3IoXCJVbmtub3duIHByb3RvY29sIGxheWVyOiBcIitkKTtlbHNlIGEuZihcIm1lc3NhZ2Ugb24gb2xkIGNvbm5lY3Rpb25cIil9fUNlLnByb3RvdHlwZS51YT1mdW5jdGlvbihhKXtOZSh0aGlzLHt0OlwiZFwiLGQ6YX0pfTtmdW5jdGlvbiBJZShhKXthLlhjPT09YS5EJiZhLlJjPT09YS5EJiYoYS5mKFwiY2xlYW5pbmcgdXAgYW5kIHByb21vdGluZyBhIGNvbm5lY3Rpb246IFwiK2EuRC5ZZCksYS5JPWEuRCxhLkQ9bnVsbCl9XG5mdW5jdGlvbiBNZShhKXswPj1hLnBmPyhhLmYoXCJTZWNvbmRhcnkgY29ubmVjdGlvbiBpcyBoZWFsdGh5LlwiKSxhLkJiPSEwLGEuRC5zZCgpLGEuRC5zdGFydCgpLGEuZihcInNlbmRpbmcgY2xpZW50IGFjayBvbiBzZWNvbmRhcnlcIiksYS5ELnNlbmQoe3Q6XCJjXCIsZDp7dDpcImFcIixkOnt9fX0pLGEuZihcIkVuZGluZyB0cmFuc21pc3Npb24gb24gcHJpbWFyeVwiKSxhLkkuc2VuZCh7dDpcImNcIixkOnt0OlwiblwiLGQ6e319fSksYS5YYz1hLkQsSWUoYSkpOihhLmYoXCJzZW5kaW5nIHBpbmcgb24gc2Vjb25kYXJ5LlwiKSxhLkQuc2VuZCh7dDpcImNcIixkOnt0OlwicFwiLGQ6e319fSkpfUNlLnByb3RvdHlwZS53ZD1mdW5jdGlvbihhKXtLZSh0aGlzKTt0aGlzLnJlKGEpfTtmdW5jdGlvbiBLZShhKXthLkJifHwoYS52ZS0tLDA+PWEudmUmJihhLmYoXCJQcmltYXJ5IGNvbm5lY3Rpb24gaXMgaGVhbHRoeS5cIiksYS5CYj0hMCxhLkkuc2QoKSkpfVxuZnVuY3Rpb24gSGUoYSxiKXthLkQ9bmV3IGIoXCJjOlwiK2EuaWQrXCI6XCIrYS5LZSsrLGEuTCxhLnFmKTthLnBmPWIucmVzcG9uc2VzUmVxdWlyZWRUb0JlSGVhbHRoeXx8MDthLkQub3BlbihFZShhLGEuRCksRmUoYSxhLkQpKTtNYyhmdW5jdGlvbigpe2EuRCYmKGEuZihcIlRpbWVkIG91dCB0cnlpbmcgdG8gdXBncmFkZS5cIiksYS5ELmNsb3NlKCkpfSxNYXRoLmZsb29yKDZFNCkpfWZ1bmN0aW9uIEdlKGEsYixjKXthLmYoXCJSZWFsdGltZSBjb25uZWN0aW9uIGVzdGFibGlzaGVkLlwiKTthLkk9YjthLlVhPTE7YS5MYyYmKGEuTGMoYyxhLnFmKSxhLkxjPW51bGwpOzA9PT1hLnZlPyhhLmYoXCJQcmltYXJ5IGNvbm5lY3Rpb24gaXMgaGVhbHRoeS5cIiksYS5CYj0hMCk6TWMoZnVuY3Rpb24oKXtMZShhKX0sTWF0aC5mbG9vcig1RTMpKX1cbmZ1bmN0aW9uIExlKGEpe2EuQmJ8fDEhPT1hLlVhfHwoYS5mKFwic2VuZGluZyBwaW5nIG9uIHByaW1hcnkuXCIpLE5lKGEse3Q6XCJjXCIsZDp7dDpcInBcIixkOnt9fX0pKX1mdW5jdGlvbiBOZShhLGIpe2lmKDEhPT1hLlVhKXRocm93XCJDb25uZWN0aW9uIGlzIG5vdCBjb25uZWN0ZWRcIjthLlhjLnNlbmQoYil9Q2UucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7MiE9PXRoaXMuVWEmJih0aGlzLmYoXCJDbG9zaW5nIHJlYWx0aW1lIGNvbm5lY3Rpb24uXCIpLHRoaXMuVWE9MixKZSh0aGlzKSx0aGlzLmlhJiYodGhpcy5pYSgpLHRoaXMuaWE9bnVsbCkpfTtmdW5jdGlvbiBKZShhKXthLmYoXCJTaHV0dGluZyBkb3duIGFsbCBjb25uZWN0aW9uc1wiKTthLkkmJihhLkkuY2xvc2UoKSxhLkk9bnVsbCk7YS5EJiYoYS5ELmNsb3NlKCksYS5EPW51bGwpO2EubWQmJihjbGVhclRpbWVvdXQoYS5tZCksYS5tZD1udWxsKX07ZnVuY3Rpb24gTChhLGIpe2lmKDE9PWFyZ3VtZW50cy5sZW5ndGgpe3RoaXMubz1hLnNwbGl0KFwiL1wiKTtmb3IodmFyIGM9MCxkPTA7ZDx0aGlzLm8ubGVuZ3RoO2QrKykwPHRoaXMub1tkXS5sZW5ndGgmJih0aGlzLm9bY109dGhpcy5vW2RdLGMrKyk7dGhpcy5vLmxlbmd0aD1jO3RoaXMuWT0wfWVsc2UgdGhpcy5vPWEsdGhpcy5ZPWJ9ZnVuY3Rpb24gVChhLGIpe3ZhciBjPUooYSk7aWYobnVsbD09PWMpcmV0dXJuIGI7aWYoYz09PUooYikpcmV0dXJuIFQoRChhKSxEKGIpKTt0aHJvdyBFcnJvcihcIklOVEVSTkFMIEVSUk9SOiBpbm5lclBhdGggKFwiK2IrXCIpIGlzIG5vdCB3aXRoaW4gb3V0ZXJQYXRoIChcIithK1wiKVwiKTt9XG5mdW5jdGlvbiBPZShhLGIpe2Zvcih2YXIgYz1hLnNsaWNlKCksZD1iLnNsaWNlKCksZT0wO2U8Yy5sZW5ndGgmJmU8ZC5sZW5ndGg7ZSsrKXt2YXIgZj1oYyhjW2VdLGRbZV0pO2lmKDAhPT1mKXJldHVybiBmfXJldHVybiBjLmxlbmd0aD09PWQubGVuZ3RoPzA6Yy5sZW5ndGg8ZC5sZW5ndGg/LTE6MX1mdW5jdGlvbiBKKGEpe3JldHVybiBhLlk+PWEuby5sZW5ndGg/bnVsbDphLm9bYS5ZXX1mdW5jdGlvbiBBZChhKXtyZXR1cm4gYS5vLmxlbmd0aC1hLll9ZnVuY3Rpb24gRChhKXt2YXIgYj1hLlk7YjxhLm8ubGVuZ3RoJiZiKys7cmV0dXJuIG5ldyBMKGEubyxiKX1mdW5jdGlvbiBCZChhKXtyZXR1cm4gYS5ZPGEuby5sZW5ndGg/YS5vW2Euby5sZW5ndGgtMV06bnVsbH1nPUwucHJvdG90eXBlO1xuZy50b1N0cmluZz1mdW5jdGlvbigpe2Zvcih2YXIgYT1cIlwiLGI9dGhpcy5ZO2I8dGhpcy5vLmxlbmd0aDtiKyspXCJcIiE9PXRoaXMub1tiXSYmKGErPVwiL1wiK3RoaXMub1tiXSk7cmV0dXJuIGF8fFwiL1wifTtnLnNsaWNlPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm8uc2xpY2UodGhpcy5ZKyhhfHwwKSl9O2cucGFyZW50PWZ1bmN0aW9uKCl7aWYodGhpcy5ZPj10aGlzLm8ubGVuZ3RoKXJldHVybiBudWxsO2Zvcih2YXIgYT1bXSxiPXRoaXMuWTtiPHRoaXMuby5sZW5ndGgtMTtiKyspYS5wdXNoKHRoaXMub1tiXSk7cmV0dXJuIG5ldyBMKGEsMCl9O1xuZy5uPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1bXSxjPXRoaXMuWTtjPHRoaXMuby5sZW5ndGg7YysrKWIucHVzaCh0aGlzLm9bY10pO2lmKGEgaW5zdGFuY2VvZiBMKWZvcihjPWEuWTtjPGEuby5sZW5ndGg7YysrKWIucHVzaChhLm9bY10pO2Vsc2UgZm9yKGE9YS5zcGxpdChcIi9cIiksYz0wO2M8YS5sZW5ndGg7YysrKTA8YVtjXS5sZW5ndGgmJmIucHVzaChhW2NdKTtyZXR1cm4gbmV3IEwoYiwwKX07Zy5lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuWT49dGhpcy5vLmxlbmd0aH07Zy5aPWZ1bmN0aW9uKGEpe2lmKEFkKHRoaXMpIT09QWQoYSkpcmV0dXJuITE7Zm9yKHZhciBiPXRoaXMuWSxjPWEuWTtiPD10aGlzLm8ubGVuZ3RoO2IrKyxjKyspaWYodGhpcy5vW2JdIT09YS5vW2NdKXJldHVybiExO3JldHVybiEwfTtcbmcuY29udGFpbnM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5ZLGM9YS5ZO2lmKEFkKHRoaXMpPkFkKGEpKXJldHVybiExO2Zvcig7Yjx0aGlzLm8ubGVuZ3RoOyl7aWYodGhpcy5vW2JdIT09YS5vW2NdKXJldHVybiExOysrYjsrK2N9cmV0dXJuITB9O3ZhciBDPW5ldyBMKFwiXCIpO2Z1bmN0aW9uIFBlKGEsYil7dGhpcy5RYT1hLnNsaWNlKCk7dGhpcy5IYT1NYXRoLm1heCgxLHRoaXMuUWEubGVuZ3RoKTt0aGlzLlBlPWI7Zm9yKHZhciBjPTA7Yzx0aGlzLlFhLmxlbmd0aDtjKyspdGhpcy5IYSs9bmIodGhpcy5RYVtjXSk7UWUodGhpcyl9UGUucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oYSl7MDx0aGlzLlFhLmxlbmd0aCYmKHRoaXMuSGErPTEpO3RoaXMuUWEucHVzaChhKTt0aGlzLkhhKz1uYihhKTtRZSh0aGlzKX07UGUucHJvdG90eXBlLnBvcD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuUWEucG9wKCk7dGhpcy5IYS09bmIoYSk7MDx0aGlzLlFhLmxlbmd0aCYmLS10aGlzLkhhfTtcbmZ1bmN0aW9uIFFlKGEpe2lmKDc2ODxhLkhhKXRocm93IEVycm9yKGEuUGUrXCJoYXMgYSBrZXkgcGF0aCBsb25nZXIgdGhhbiA3NjggYnl0ZXMgKFwiK2EuSGErXCIpLlwiKTtpZigzMjxhLlFhLmxlbmd0aCl0aHJvdyBFcnJvcihhLlBlK1wicGF0aCBzcGVjaWZpZWQgZXhjZWVkcyB0aGUgbWF4aW11bSBkZXB0aCB0aGF0IGNhbiBiZSB3cml0dGVuICgzMikgb3Igb2JqZWN0IGNvbnRhaW5zIGEgY3ljbGUgXCIrUmUoYSkpO31mdW5jdGlvbiBSZShhKXtyZXR1cm4gMD09YS5RYS5sZW5ndGg/XCJcIjpcImluIHByb3BlcnR5ICdcIithLlFhLmpvaW4oXCIuXCIpK1wiJ1wifTtmdW5jdGlvbiBTZShhKXthIGluc3RhbmNlb2YgVGV8fEFjKFwiRG9uJ3QgY2FsbCBuZXcgRGF0YWJhc2UoKSBkaXJlY3RseSAtIHBsZWFzZSB1c2UgZmlyZWJhc2UuZGF0YWJhc2UoKS5cIik7dGhpcy50YT1hO3RoaXMuYmE9bmV3IFUoYSxDKTt0aGlzLklOVEVSTkFMPW5ldyBVZSh0aGlzKX12YXIgVmU9e1RJTUVTVEFNUDp7XCIuc3ZcIjpcInRpbWVzdGFtcFwifX07Zz1TZS5wcm90b3R5cGU7Zy5hcHA9bnVsbDtnLmpmPWZ1bmN0aW9uKGEpe1dlKHRoaXMsXCJyZWZcIik7eChcImRhdGFiYXNlLnJlZlwiLDAsMSxhcmd1bWVudHMubGVuZ3RoKTtyZXR1cm4gbihhKT90aGlzLmJhLm4oYSk6dGhpcy5iYX07XG5nLmdnPWZ1bmN0aW9uKGEpe1dlKHRoaXMsXCJkYXRhYmFzZS5yZWZGcm9tVVJMXCIpO3goXCJkYXRhYmFzZS5yZWZGcm9tVVJMXCIsMSwxLGFyZ3VtZW50cy5sZW5ndGgpO3ZhciBiPUJjKGEpO1hlKFwiZGF0YWJhc2UucmVmRnJvbVVSTFwiLGIpO3ZhciBjPWIuamM7Yy5ob3N0IT09dGhpcy50YS5MLmhvc3QmJkFjKFwiZGF0YWJhc2UucmVmRnJvbVVSTDogSG9zdCBuYW1lIGRvZXMgbm90IG1hdGNoIHRoZSBjdXJyZW50IGRhdGFiYXNlOiAoZm91bmQgXCIrYy5ob3N0K1wiIGJ1dCBleHBlY3RlZCBcIit0aGlzLnRhLkwuaG9zdCtcIilcIik7cmV0dXJuIHRoaXMuamYoYi5wYXRoLnRvU3RyaW5nKCkpfTtmdW5jdGlvbiBXZShhLGIpe251bGw9PT1hLnRhJiZBYyhcIkNhbm5vdCBjYWxsIFwiK2IrXCIgb24gYSBkZWxldGVkIGRhdGFiYXNlLlwiKX1nLlBmPWZ1bmN0aW9uKCl7eChcImRhdGFiYXNlLmdvT2ZmbGluZVwiLDAsMCxhcmd1bWVudHMubGVuZ3RoKTtXZSh0aGlzLFwiZ29PZmZsaW5lXCIpO3RoaXMudGEuYWIoKX07XG5nLlFmPWZ1bmN0aW9uKCl7eChcImRhdGFiYXNlLmdvT25saW5lXCIsMCwwLGFyZ3VtZW50cy5sZW5ndGgpO1dlKHRoaXMsXCJnb09ubGluZVwiKTt0aGlzLnRhLmtjKCl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShTZS5wcm90b3R5cGUsXCJhcHBcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGEuYXBwfX0pO2Z1bmN0aW9uIFVlKGEpe3RoaXMuWWE9YX1VZS5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKCl7V2UodGhpcy5ZYSxcImRlbGV0ZVwiKTt2YXIgYT1ZZS5WYigpLGI9dGhpcy5ZYS50YTt3KGEubGIsYi5hcHAubmFtZSkhPT1iJiZBYyhcIkRhdGFiYXNlIFwiK2IuYXBwLm5hbWUrXCIgaGFzIGFscmVhZHkgYmVlbiBkZWxldGVkLlwiKTtiLmFiKCk7ZGVsZXRlIGEubGJbYi5hcHAubmFtZV07dGhpcy5ZYS50YT1udWxsO3RoaXMuWWEuYmE9bnVsbDt0aGlzLllhPXRoaXMuWWEuSU5URVJOQUw9bnVsbDtyZXR1cm4gZmlyZWJhc2UuUHJvbWlzZS5yZXNvbHZlKCl9O1xuU2UucHJvdG90eXBlLnJlZj1TZS5wcm90b3R5cGUuamY7U2UucHJvdG90eXBlLnJlZkZyb21VUkw9U2UucHJvdG90eXBlLmdnO1NlLnByb3RvdHlwZS5nb09ubGluZT1TZS5wcm90b3R5cGUuUWY7U2UucHJvdG90eXBlLmdvT2ZmbGluZT1TZS5wcm90b3R5cGUuUGY7VWUucHJvdG90eXBlW1wiZGVsZXRlXCJdPVVlLnByb3RvdHlwZS5kZWxldGU7ZnVuY3Rpb24gbWMoKXt0aGlzLms9dGhpcy5CPW51bGx9bWMucHJvdG90eXBlLmZpbmQ9ZnVuY3Rpb24oYSl7aWYobnVsbCE9dGhpcy5CKXJldHVybiB0aGlzLkIuUChhKTtpZihhLmUoKXx8bnVsbD09dGhpcy5rKXJldHVybiBudWxsO3ZhciBiPUooYSk7YT1EKGEpO3JldHVybiB0aGlzLmsuY29udGFpbnMoYik/dGhpcy5rLmdldChiKS5maW5kKGEpOm51bGx9O2Z1bmN0aW9uIG9jKGEsYixjKXtpZihiLmUoKSlhLkI9YyxhLms9bnVsbDtlbHNlIGlmKG51bGwhPT1hLkIpYS5CPWEuQi5GKGIsYyk7ZWxzZXtudWxsPT1hLmsmJihhLms9bmV3IG9lKTt2YXIgZD1KKGIpO2Euay5jb250YWlucyhkKXx8YS5rLmFkZChkLG5ldyBtYyk7YT1hLmsuZ2V0KGQpO2I9RChiKTtvYyhhLGIsYyl9fVxuZnVuY3Rpb24gWmUoYSxiKXtpZihiLmUoKSlyZXR1cm4gYS5CPW51bGwsYS5rPW51bGwsITA7aWYobnVsbCE9PWEuQil7aWYoYS5CLkooKSlyZXR1cm4hMTt2YXIgYz1hLkI7YS5CPW51bGw7Yy5PKE4sZnVuY3Rpb24oYixjKXtvYyhhLG5ldyBMKGIpLGMpfSk7cmV0dXJuIFplKGEsYil9cmV0dXJuIG51bGwhPT1hLms/KGM9SihiKSxiPUQoYiksYS5rLmNvbnRhaW5zKGMpJiZaZShhLmsuZ2V0KGMpLGIpJiZhLmsucmVtb3ZlKGMpLGEuay5lKCk/KGEuaz1udWxsLCEwKTohMSk6ITB9ZnVuY3Rpb24gbmMoYSxiLGMpe251bGwhPT1hLkI/YyhiLGEuQik6YS5PKGZ1bmN0aW9uKGEsZSl7dmFyIGY9bmV3IEwoYi50b1N0cmluZygpK1wiL1wiK2EpO25jKGUsZixjKX0pfW1jLnByb3RvdHlwZS5PPWZ1bmN0aW9uKGEpe251bGwhPT10aGlzLmsmJnBlKHRoaXMuayxmdW5jdGlvbihiLGMpe2EoYixjKX0pfTt2YXIgJGU9L1tcXFtcXF0uIyRcXC9cXHUwMDAwLVxcdTAwMUZcXHUwMDdGXS8sYWY9L1tcXFtcXF0uIyRcXHUwMDAwLVxcdTAwMUZcXHUwMDdGXS87ZnVuY3Rpb24gYmYoYSl7cmV0dXJuIHAoYSkmJjAhPT1hLmxlbmd0aCYmISRlLnRlc3QoYSl9ZnVuY3Rpb24gY2YoYSl7cmV0dXJuIG51bGw9PT1hfHxwKGEpfHxnYShhKSYmIUNjKGEpfHxpYShhKSYmY2IoYSxcIi5zdlwiKX1mdW5jdGlvbiBkZihhLGIsYyxkKXtkJiYhbihiKXx8ZWYoeShhLDEsZCksYixjKX1cbmZ1bmN0aW9uIGVmKGEsYixjKXtjIGluc3RhbmNlb2YgTCYmKGM9bmV3IFBlKGMsYSkpO2lmKCFuKGIpKXRocm93IEVycm9yKGErXCJjb250YWlucyB1bmRlZmluZWQgXCIrUmUoYykpO2lmKGhhKGIpKXRocm93IEVycm9yKGErXCJjb250YWlucyBhIGZ1bmN0aW9uIFwiK1JlKGMpK1wiIHdpdGggY29udGVudHM6IFwiK2IudG9TdHJpbmcoKSk7aWYoQ2MoYikpdGhyb3cgRXJyb3IoYStcImNvbnRhaW5zIFwiK2IudG9TdHJpbmcoKStcIiBcIitSZShjKSk7aWYocChiKSYmYi5sZW5ndGg+MTA0ODU3NjAvMyYmMTA0ODU3NjA8bmIoYikpdGhyb3cgRXJyb3IoYStcImNvbnRhaW5zIGEgc3RyaW5nIGdyZWF0ZXIgdGhhbiAxMDQ4NTc2MCB1dGY4IGJ5dGVzIFwiK1JlKGMpK1wiICgnXCIrYi5zdWJzdHJpbmcoMCw1MCkrXCIuLi4nKVwiKTtpZihpYShiKSl7dmFyIGQ9ITEsZT0hMTtkYihiLGZ1bmN0aW9uKGIsaCl7aWYoXCIudmFsdWVcIj09PWIpZD0hMDtlbHNlIGlmKFwiLnByaW9yaXR5XCIhPT1iJiZcIi5zdlwiIT09YiYmKGU9XG4hMCwhYmYoYikpKXRocm93IEVycm9yKGErXCIgY29udGFpbnMgYW4gaW52YWxpZCBrZXkgKFwiK2IrXCIpIFwiK1JlKGMpKycuICBLZXlzIG11c3QgYmUgbm9uLWVtcHR5IHN0cmluZ3MgYW5kIGNhblxcJ3QgY29udGFpbiBcIi5cIiwgXCIjXCIsIFwiJFwiLCBcIi9cIiwgXCJbXCIsIG9yIFwiXVwiJyk7Yy5wdXNoKGIpO2VmKGEsaCxjKTtjLnBvcCgpfSk7aWYoZCYmZSl0aHJvdyBFcnJvcihhKycgY29udGFpbnMgXCIudmFsdWVcIiBjaGlsZCAnK1JlKGMpK1wiIGluIGFkZGl0aW9uIHRvIGFjdHVhbCBjaGlsZHJlbi5cIik7fX1cbmZ1bmN0aW9uIGZmKGEsYil7dmFyIGMsZDtmb3IoYz0wO2M8Yi5sZW5ndGg7YysrKXtkPWJbY107Zm9yKHZhciBlPWQuc2xpY2UoKSxmPTA7ZjxlLmxlbmd0aDtmKyspaWYoKFwiLnByaW9yaXR5XCIhPT1lW2ZdfHxmIT09ZS5sZW5ndGgtMSkmJiFiZihlW2ZdKSl0aHJvdyBFcnJvcihhK1wiY29udGFpbnMgYW4gaW52YWxpZCBrZXkgKFwiK2VbZl0rXCIpIGluIHBhdGggXCIrZC50b1N0cmluZygpKycuIEtleXMgbXVzdCBiZSBub24tZW1wdHkgc3RyaW5ncyBhbmQgY2FuXFwndCBjb250YWluIFwiLlwiLCBcIiNcIiwgXCIkXCIsIFwiL1wiLCBcIltcIiwgb3IgXCJdXCInKTt9Yi5zb3J0KE9lKTtlPW51bGw7Zm9yKGM9MDtjPGIubGVuZ3RoO2MrKyl7ZD1iW2NdO2lmKG51bGwhPT1lJiZlLmNvbnRhaW5zKGQpKXRocm93IEVycm9yKGErXCJjb250YWlucyBhIHBhdGggXCIrZS50b1N0cmluZygpK1wiIHRoYXQgaXMgYW5jZXN0b3Igb2YgYW5vdGhlciBwYXRoIFwiK2QudG9TdHJpbmcoKSk7ZT1kfX1cbmZ1bmN0aW9uIGdmKGEsYixjKXt2YXIgZD15KGEsMSwhMSk7aWYoIWlhKGIpfHxlYShiKSl0aHJvdyBFcnJvcihkK1wiIG11c3QgYmUgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGNoaWxkcmVuIHRvIHJlcGxhY2UuXCIpO3ZhciBlPVtdO2RiKGIsZnVuY3Rpb24oYSxiKXt2YXIgaz1uZXcgTChhKTtlZihkLGIsYy5uKGspKTtpZihcIi5wcmlvcml0eVwiPT09QmQoaykmJiFjZihiKSl0aHJvdyBFcnJvcihkK1wiY29udGFpbnMgYW4gaW52YWxpZCB2YWx1ZSBmb3IgJ1wiK2sudG9TdHJpbmcoKStcIicsIHdoaWNoIG11c3QgYmUgYSB2YWxpZCBGaXJlYmFzZSBwcmlvcml0eSAoYSBzdHJpbmcsIGZpbml0ZSBudW1iZXIsIHNlcnZlciB2YWx1ZSwgb3IgbnVsbCkuXCIpO2UucHVzaChrKX0pO2ZmKGQsZSl9XG5mdW5jdGlvbiBoZihhLGIsYyl7aWYoQ2MoYykpdGhyb3cgRXJyb3IoeShhLGIsITEpK1wiaXMgXCIrYy50b1N0cmluZygpK1wiLCBidXQgbXVzdCBiZSBhIHZhbGlkIEZpcmViYXNlIHByaW9yaXR5IChhIHN0cmluZywgZmluaXRlIG51bWJlciwgc2VydmVyIHZhbHVlLCBvciBudWxsKS5cIik7aWYoIWNmKGMpKXRocm93IEVycm9yKHkoYSxiLCExKStcIm11c3QgYmUgYSB2YWxpZCBGaXJlYmFzZSBwcmlvcml0eSAoYSBzdHJpbmcsIGZpbml0ZSBudW1iZXIsIHNlcnZlciB2YWx1ZSwgb3IgbnVsbCkuXCIpO31cbmZ1bmN0aW9uIGpmKGEsYixjKXtpZighY3x8bihiKSlzd2l0Y2goYil7Y2FzZSBcInZhbHVlXCI6Y2FzZSBcImNoaWxkX2FkZGVkXCI6Y2FzZSBcImNoaWxkX3JlbW92ZWRcIjpjYXNlIFwiY2hpbGRfY2hhbmdlZFwiOmNhc2UgXCJjaGlsZF9tb3ZlZFwiOmJyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoeShhLDEsYykrJ211c3QgYmUgYSB2YWxpZCBldmVudCB0eXBlOiBcInZhbHVlXCIsIFwiY2hpbGRfYWRkZWRcIiwgXCJjaGlsZF9yZW1vdmVkXCIsIFwiY2hpbGRfY2hhbmdlZFwiLCBvciBcImNoaWxkX21vdmVkXCIuJyk7fX1mdW5jdGlvbiBrZihhLGIpe2lmKG4oYikmJiFiZihiKSl0aHJvdyBFcnJvcih5KGEsMiwhMCkrJ3dhcyBhbiBpbnZhbGlkIGtleTogXCInK2IrJ1wiLiAgRmlyZWJhc2Uga2V5cyBtdXN0IGJlIG5vbi1lbXB0eSBzdHJpbmdzIGFuZCBjYW5cXCd0IGNvbnRhaW4gXCIuXCIsIFwiI1wiLCBcIiRcIiwgXCIvXCIsIFwiW1wiLCBvciBcIl1cIikuJyk7fVxuZnVuY3Rpb24gbGYoYSxiKXtpZighcChiKXx8MD09PWIubGVuZ3RofHxhZi50ZXN0KGIpKXRocm93IEVycm9yKHkoYSwxLCExKSsnd2FzIGFuIGludmFsaWQgcGF0aDogXCInK2IrJ1wiLiBQYXRocyBtdXN0IGJlIG5vbi1lbXB0eSBzdHJpbmdzIGFuZCBjYW5cXCd0IGNvbnRhaW4gXCIuXCIsIFwiI1wiLCBcIiRcIiwgXCJbXCIsIG9yIFwiXVwiJyk7fWZ1bmN0aW9uIG1mKGEsYil7aWYoXCIuaW5mb1wiPT09SihiKSl0aHJvdyBFcnJvcihhK1wiIGZhaWxlZDogQ2FuJ3QgbW9kaWZ5IGRhdGEgdW5kZXIgLy5pbmZvL1wiKTt9XG5mdW5jdGlvbiBYZShhLGIpe3ZhciBjPWIucGF0aC50b1N0cmluZygpLGQ7IShkPSFwKGIuamMuaG9zdCl8fDA9PT1iLmpjLmhvc3QubGVuZ3RofHwhYmYoYi5qYy5uZSkpJiYoZD0wIT09Yy5sZW5ndGgpJiYoYyYmKGM9Yy5yZXBsYWNlKC9eXFwvKlxcLmluZm8oXFwvfCQpLyxcIi9cIikpLGQ9IShwKGMpJiYwIT09Yy5sZW5ndGgmJiFhZi50ZXN0KGMpKSk7aWYoZCl0aHJvdyBFcnJvcih5KGEsMSwhMSkrJ211c3QgYmUgYSB2YWxpZCBmaXJlYmFzZSBVUkwgYW5kIHRoZSBwYXRoIGNhblxcJ3QgY29udGFpbiBcIi5cIiwgXCIjXCIsIFwiJFwiLCBcIltcIiwgb3IgXCJdXCIuJyk7fTtmdW5jdGlvbiBWKGEsYil7dGhpcy50YT1hO3RoaXMucWE9Yn1WLnByb3RvdHlwZS5jYW5jZWw9ZnVuY3Rpb24oYSl7eChcIkZpcmViYXNlLm9uRGlzY29ubmVjdCgpLmNhbmNlbFwiLDAsMSxhcmd1bWVudHMubGVuZ3RoKTtBKFwiRmlyZWJhc2Uub25EaXNjb25uZWN0KCkuY2FuY2VsXCIsMSxhLCEwKTt2YXIgYj1uZXcgaGI7dGhpcy50YS54ZCh0aGlzLnFhLGliKGIsYSkpO3JldHVybiBiLnJhfTtWLnByb3RvdHlwZS5jYW5jZWw9Vi5wcm90b3R5cGUuY2FuY2VsO1YucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbihhKXt4KFwiRmlyZWJhc2Uub25EaXNjb25uZWN0KCkucmVtb3ZlXCIsMCwxLGFyZ3VtZW50cy5sZW5ndGgpO21mKFwiRmlyZWJhc2Uub25EaXNjb25uZWN0KCkucmVtb3ZlXCIsdGhpcy5xYSk7QShcIkZpcmViYXNlLm9uRGlzY29ubmVjdCgpLnJlbW92ZVwiLDEsYSwhMCk7dmFyIGI9bmV3IGhiO25mKHRoaXMudGEsdGhpcy5xYSxudWxsLGliKGIsYSkpO3JldHVybiBiLnJhfTtcblYucHJvdG90eXBlLnJlbW92ZT1WLnByb3RvdHlwZS5yZW1vdmU7Vi5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGEsYil7eChcIkZpcmViYXNlLm9uRGlzY29ubmVjdCgpLnNldFwiLDEsMixhcmd1bWVudHMubGVuZ3RoKTttZihcIkZpcmViYXNlLm9uRGlzY29ubmVjdCgpLnNldFwiLHRoaXMucWEpO2RmKFwiRmlyZWJhc2Uub25EaXNjb25uZWN0KCkuc2V0XCIsYSx0aGlzLnFhLCExKTtBKFwiRmlyZWJhc2Uub25EaXNjb25uZWN0KCkuc2V0XCIsMixiLCEwKTt2YXIgYz1uZXcgaGI7bmYodGhpcy50YSx0aGlzLnFhLGEsaWIoYyxiKSk7cmV0dXJuIGMucmF9O1YucHJvdG90eXBlLnNldD1WLnByb3RvdHlwZS5zZXQ7XG5WLnByb3RvdHlwZS5KYj1mdW5jdGlvbihhLGIsYyl7eChcIkZpcmViYXNlLm9uRGlzY29ubmVjdCgpLnNldFdpdGhQcmlvcml0eVwiLDIsMyxhcmd1bWVudHMubGVuZ3RoKTttZihcIkZpcmViYXNlLm9uRGlzY29ubmVjdCgpLnNldFdpdGhQcmlvcml0eVwiLHRoaXMucWEpO2RmKFwiRmlyZWJhc2Uub25EaXNjb25uZWN0KCkuc2V0V2l0aFByaW9yaXR5XCIsYSx0aGlzLnFhLCExKTtoZihcIkZpcmViYXNlLm9uRGlzY29ubmVjdCgpLnNldFdpdGhQcmlvcml0eVwiLDIsYik7QShcIkZpcmViYXNlLm9uRGlzY29ubmVjdCgpLnNldFdpdGhQcmlvcml0eVwiLDMsYywhMCk7dmFyIGQ9bmV3IGhiO29mKHRoaXMudGEsdGhpcy5xYSxhLGIsaWIoZCxjKSk7cmV0dXJuIGQucmF9O1YucHJvdG90eXBlLnNldFdpdGhQcmlvcml0eT1WLnByb3RvdHlwZS5KYjtcblYucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbihhLGIpe3goXCJGaXJlYmFzZS5vbkRpc2Nvbm5lY3QoKS51cGRhdGVcIiwxLDIsYXJndW1lbnRzLmxlbmd0aCk7bWYoXCJGaXJlYmFzZS5vbkRpc2Nvbm5lY3QoKS51cGRhdGVcIix0aGlzLnFhKTtpZihlYShhKSl7Zm9yKHZhciBjPXt9LGQ9MDtkPGEubGVuZ3RoOysrZCljW1wiXCIrZF09YVtkXTthPWM7TyhcIlBhc3NpbmcgYW4gQXJyYXkgdG8gRmlyZWJhc2Uub25EaXNjb25uZWN0KCkudXBkYXRlKCkgaXMgZGVwcmVjYXRlZC4gVXNlIHNldCgpIGlmIHlvdSB3YW50IHRvIG92ZXJ3cml0ZSB0aGUgZXhpc3RpbmcgZGF0YSwgb3IgYW4gT2JqZWN0IHdpdGggaW50ZWdlciBrZXlzIGlmIHlvdSByZWFsbHkgZG8gd2FudCB0byBvbmx5IHVwZGF0ZSBzb21lIG9mIHRoZSBjaGlsZHJlbi5cIil9Z2YoXCJGaXJlYmFzZS5vbkRpc2Nvbm5lY3QoKS51cGRhdGVcIixhLHRoaXMucWEpO0EoXCJGaXJlYmFzZS5vbkRpc2Nvbm5lY3QoKS51cGRhdGVcIiwyLGIsITApO1xuYz1uZXcgaGI7cGYodGhpcy50YSx0aGlzLnFhLGEsaWIoYyxiKSk7cmV0dXJuIGMucmF9O1YucHJvdG90eXBlLnVwZGF0ZT1WLnByb3RvdHlwZS51cGRhdGU7ZnVuY3Rpb24gcWYoYSl7SChlYShhKSYmMDxhLmxlbmd0aCxcIlJlcXVpcmVzIGEgbm9uLWVtcHR5IGFycmF5XCIpO3RoaXMuQmY9YTt0aGlzLkRjPXt9fXFmLnByb3RvdHlwZS5FZT1mdW5jdGlvbihhLGIpe3ZhciBjO2M9dGhpcy5EY1thXXx8W107dmFyIGQ9Yy5sZW5ndGg7aWYoMDxkKXtmb3IodmFyIGU9QXJyYXkoZCksZj0wO2Y8ZDtmKyspZVtmXT1jW2ZdO2M9ZX1lbHNlIGM9W107Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrKyljW2RdLkhlLmFwcGx5KGNbZF0uTWEsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKX07cWYucHJvdG90eXBlLmdjPWZ1bmN0aW9uKGEsYixjKXtyZih0aGlzLGEpO3RoaXMuRGNbYV09dGhpcy5EY1thXXx8W107dGhpcy5EY1thXS5wdXNoKHtIZTpiLE1hOmN9KTsoYT10aGlzLlVlKGEpKSYmYi5hcHBseShjLGEpfTtcbnFmLnByb3RvdHlwZS5JYz1mdW5jdGlvbihhLGIsYyl7cmYodGhpcyxhKTthPXRoaXMuRGNbYV18fFtdO2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGg7ZCsrKWlmKGFbZF0uSGU9PT1iJiYoIWN8fGM9PT1hW2RdLk1hKSl7YS5zcGxpY2UoZCwxKTticmVha319O2Z1bmN0aW9uIHJmKGEsYil7SChPYShhLkJmLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Yn0pLFwiVW5rbm93biBldmVudDogXCIrYil9O2Z1bmN0aW9uIHNmKCl7cWYuY2FsbCh0aGlzLFtcIm9ubGluZVwiXSk7dGhpcy5oYz0hMDtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIHdpbmRvdyYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciYmIXFiKCkpe3ZhciBhPXRoaXM7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIixmdW5jdGlvbigpe2EuaGN8fChhLmhjPSEwLGEuRWUoXCJvbmxpbmVcIiwhMCkpfSwhMSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsZnVuY3Rpb24oKXthLmhjJiYoYS5oYz0hMSxhLkVlKFwib25saW5lXCIsITEpKX0sITEpfX1sYShzZixxZik7c2YucHJvdG90eXBlLlVlPWZ1bmN0aW9uKGEpe0goXCJvbmxpbmVcIj09PWEsXCJVbmtub3duIGV2ZW50IHR5cGU6IFwiK2EpO3JldHVyblt0aGlzLmhjXX07Y2Eoc2YpO2Z1bmN0aW9uIHRmKCl7cWYuY2FsbCh0aGlzLFtcInZpc2libGVcIl0pO3ZhciBhLGI7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudCYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyJiYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudC5oaWRkZW4/KGI9XCJ2aXNpYmlsaXR5Y2hhbmdlXCIsYT1cImhpZGRlblwiKTpcInVuZGVmaW5lZFwiIT09dHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbj8oYj1cIm1venZpc2liaWxpdHljaGFuZ2VcIixhPVwibW96SGlkZGVuXCIpOlwidW5kZWZpbmVkXCIhPT10eXBlb2YgZG9jdW1lbnQubXNIaWRkZW4/KGI9XCJtc3Zpc2liaWxpdHljaGFuZ2VcIixhPVwibXNIaWRkZW5cIik6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4mJihiPVwid2Via2l0dmlzaWJpbGl0eWNoYW5nZVwiLGE9XCJ3ZWJraXRIaWRkZW5cIikpO3RoaXMuTWI9ITA7aWYoYil7dmFyIGM9dGhpcztkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGIsXG5mdW5jdGlvbigpe3ZhciBiPSFkb2N1bWVudFthXTtiIT09Yy5NYiYmKGMuTWI9YixjLkVlKFwidmlzaWJsZVwiLGIpKX0sITEpfX1sYSh0ZixxZik7dGYucHJvdG90eXBlLlVlPWZ1bmN0aW9uKGEpe0goXCJ2aXNpYmxlXCI9PT1hLFwiVW5rbm93biBldmVudCB0eXBlOiBcIithKTtyZXR1cm5bdGhpcy5NYl19O2NhKHRmKTt2YXIgdWY9ZnVuY3Rpb24oKXt2YXIgYT0wLGI9W107cmV0dXJuIGZ1bmN0aW9uKGMpe3ZhciBkPWM9PT1hO2E9Yztmb3IodmFyIGU9QXJyYXkoOCksZj03OzA8PWY7Zi0tKWVbZl09XCItMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaX2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCIuY2hhckF0KGMlNjQpLGM9TWF0aC5mbG9vcihjLzY0KTtIKDA9PT1jLFwiQ2Fubm90IHB1c2ggYXQgdGltZSA9PSAwXCIpO2M9ZS5qb2luKFwiXCIpO2lmKGQpe2ZvcihmPTExOzA8PWYmJjYzPT09YltmXTtmLS0pYltmXT0wO2JbZl0rK31lbHNlIGZvcihmPTA7MTI+ZjtmKyspYltmXT1NYXRoLmZsb29yKDY0Kk1hdGgucmFuZG9tKCkpO2ZvcihmPTA7MTI+ZjtmKyspYys9XCItMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaX2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCIuY2hhckF0KGJbZl0pO0goMjA9PT1jLmxlbmd0aCxcIm5leHRQdXNoSWQ6IExlbmd0aCBzaG91bGQgYmUgMjAuXCIpO1xucmV0dXJuIGN9fSgpO2Z1bmN0aW9uIHZmKGEsYil7dGhpcy5MYT1hO3RoaXMuYmE9Yj9iOndmfWc9dmYucHJvdG90eXBlO2cuT2E9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IHZmKHRoaXMuTGEsdGhpcy5iYS5PYShhLGIsdGhpcy5MYSkuWChudWxsLG51bGwsITEsbnVsbCxudWxsKSl9O2cucmVtb3ZlPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgdmYodGhpcy5MYSx0aGlzLmJhLnJlbW92ZShhLHRoaXMuTGEpLlgobnVsbCxudWxsLCExLG51bGwsbnVsbCkpfTtnLmdldD1mdW5jdGlvbihhKXtmb3IodmFyIGIsYz10aGlzLmJhOyFjLmUoKTspe2I9dGhpcy5MYShhLGMua2V5KTtpZigwPT09YilyZXR1cm4gYy52YWx1ZTswPmI/Yz1jLmxlZnQ6MDxiJiYoYz1jLnJpZ2h0KX1yZXR1cm4gbnVsbH07XG5mdW5jdGlvbiB4ZihhLGIpe2Zvcih2YXIgYyxkPWEuYmEsZT1udWxsOyFkLmUoKTspe2M9YS5MYShiLGQua2V5KTtpZigwPT09Yyl7aWYoZC5sZWZ0LmUoKSlyZXR1cm4gZT9lLmtleTpudWxsO2ZvcihkPWQubGVmdDshZC5yaWdodC5lKCk7KWQ9ZC5yaWdodDtyZXR1cm4gZC5rZXl9MD5jP2Q9ZC5sZWZ0OjA8YyYmKGU9ZCxkPWQucmlnaHQpfXRocm93IEVycm9yKFwiQXR0ZW1wdGVkIHRvIGZpbmQgcHJlZGVjZXNzb3Iga2V5IGZvciBhIG5vbmV4aXN0ZW50IGtleS4gIFdoYXQgZ2l2ZXM/XCIpO31nLmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5iYS5lKCl9O2cuY291bnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5iYS5jb3VudCgpfTtnLkdjPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYmEuR2MoKX07Zy5lYz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmJhLmVjKCl9O2cuaGE9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYmEuaGEoYSl9O1xuZy5XYj1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IHlmKHRoaXMuYmEsbnVsbCx0aGlzLkxhLCExLGEpfTtnLlhiPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyB5Zih0aGlzLmJhLGEsdGhpcy5MYSwhMSxiKX07Zy5aYj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgeWYodGhpcy5iYSxhLHRoaXMuTGEsITAsYil9O2cuV2U9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyB5Zih0aGlzLmJhLG51bGwsdGhpcy5MYSwhMCxhKX07ZnVuY3Rpb24geWYoYSxiLGMsZCxlKXt0aGlzLkhkPWV8fG51bGw7dGhpcy5qZT1kO3RoaXMuUGE9W107Zm9yKGU9MTshYS5lKCk7KWlmKGU9Yj9jKGEua2V5LGIpOjEsZCYmKGUqPS0xKSwwPmUpYT10aGlzLmplP2EubGVmdDphLnJpZ2h0O2Vsc2UgaWYoMD09PWUpe3RoaXMuUGEucHVzaChhKTticmVha31lbHNlIHRoaXMuUGEucHVzaChhKSxhPXRoaXMuamU/YS5yaWdodDphLmxlZnR9XG5mdW5jdGlvbiBSKGEpe2lmKDA9PT1hLlBhLmxlbmd0aClyZXR1cm4gbnVsbDt2YXIgYj1hLlBhLnBvcCgpLGM7Yz1hLkhkP2EuSGQoYi5rZXksYi52YWx1ZSk6e2tleTpiLmtleSx2YWx1ZTpiLnZhbHVlfTtpZihhLmplKWZvcihiPWIubGVmdDshYi5lKCk7KWEuUGEucHVzaChiKSxiPWIucmlnaHQ7ZWxzZSBmb3IoYj1iLnJpZ2h0OyFiLmUoKTspYS5QYS5wdXNoKGIpLGI9Yi5sZWZ0O3JldHVybiBjfWZ1bmN0aW9uIHpmKGEpe2lmKDA9PT1hLlBhLmxlbmd0aClyZXR1cm4gbnVsbDt2YXIgYjtiPWEuUGE7Yj1iW2IubGVuZ3RoLTFdO3JldHVybiBhLkhkP2EuSGQoYi5rZXksYi52YWx1ZSk6e2tleTpiLmtleSx2YWx1ZTpiLnZhbHVlfX1mdW5jdGlvbiBBZihhLGIsYyxkLGUpe3RoaXMua2V5PWE7dGhpcy52YWx1ZT1iO3RoaXMuY29sb3I9bnVsbCE9Yz9jOiEwO3RoaXMubGVmdD1udWxsIT1kP2Q6d2Y7dGhpcy5yaWdodD1udWxsIT1lP2U6d2Z9Zz1BZi5wcm90b3R5cGU7XG5nLlg9ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gbmV3IEFmKG51bGwhPWE/YTp0aGlzLmtleSxudWxsIT1iP2I6dGhpcy52YWx1ZSxudWxsIT1jP2M6dGhpcy5jb2xvcixudWxsIT1kP2Q6dGhpcy5sZWZ0LG51bGwhPWU/ZTp0aGlzLnJpZ2h0KX07Zy5jb3VudD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmxlZnQuY291bnQoKSsxK3RoaXMucmlnaHQuY291bnQoKX07Zy5lPWZ1bmN0aW9uKCl7cmV0dXJuITF9O2cuaGE9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubGVmdC5oYShhKXx8YSh0aGlzLmtleSx0aGlzLnZhbHVlKXx8dGhpcy5yaWdodC5oYShhKX07ZnVuY3Rpb24gQmYoYSl7cmV0dXJuIGEubGVmdC5lKCk/YTpCZihhLmxlZnQpfWcuR2M9ZnVuY3Rpb24oKXtyZXR1cm4gQmYodGhpcykua2V5fTtnLmVjPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmlnaHQuZSgpP3RoaXMua2V5OnRoaXMucmlnaHQuZWMoKX07XG5nLk9hPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlO2U9dGhpcztkPWMoYSxlLmtleSk7ZT0wPmQ/ZS5YKG51bGwsbnVsbCxudWxsLGUubGVmdC5PYShhLGIsYyksbnVsbCk6MD09PWQ/ZS5YKG51bGwsYixudWxsLG51bGwsbnVsbCk6ZS5YKG51bGwsbnVsbCxudWxsLG51bGwsZS5yaWdodC5PYShhLGIsYykpO3JldHVybiBDZihlKX07ZnVuY3Rpb24gRGYoYSl7aWYoYS5sZWZ0LmUoKSlyZXR1cm4gd2Y7YS5sZWZ0LmVhKCl8fGEubGVmdC5sZWZ0LmVhKCl8fChhPUVmKGEpKTthPWEuWChudWxsLG51bGwsbnVsbCxEZihhLmxlZnQpLG51bGwpO3JldHVybiBDZihhKX1cbmcucmVtb3ZlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZDtjPXRoaXM7aWYoMD5iKGEsYy5rZXkpKWMubGVmdC5lKCl8fGMubGVmdC5lYSgpfHxjLmxlZnQubGVmdC5lYSgpfHwoYz1FZihjKSksYz1jLlgobnVsbCxudWxsLG51bGwsYy5sZWZ0LnJlbW92ZShhLGIpLG51bGwpO2Vsc2V7Yy5sZWZ0LmVhKCkmJihjPUZmKGMpKTtjLnJpZ2h0LmUoKXx8Yy5yaWdodC5lYSgpfHxjLnJpZ2h0LmxlZnQuZWEoKXx8KGM9R2YoYyksYy5sZWZ0LmxlZnQuZWEoKSYmKGM9RmYoYyksYz1HZihjKSkpO2lmKDA9PT1iKGEsYy5rZXkpKXtpZihjLnJpZ2h0LmUoKSlyZXR1cm4gd2Y7ZD1CZihjLnJpZ2h0KTtjPWMuWChkLmtleSxkLnZhbHVlLG51bGwsbnVsbCxEZihjLnJpZ2h0KSl9Yz1jLlgobnVsbCxudWxsLG51bGwsbnVsbCxjLnJpZ2h0LnJlbW92ZShhLGIpKX1yZXR1cm4gQ2YoYyl9O2cuZWE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb2xvcn07XG5mdW5jdGlvbiBDZihhKXthLnJpZ2h0LmVhKCkmJiFhLmxlZnQuZWEoKSYmKGE9SGYoYSkpO2EubGVmdC5lYSgpJiZhLmxlZnQubGVmdC5lYSgpJiYoYT1GZihhKSk7YS5sZWZ0LmVhKCkmJmEucmlnaHQuZWEoKSYmKGE9R2YoYSkpO3JldHVybiBhfWZ1bmN0aW9uIEVmKGEpe2E9R2YoYSk7YS5yaWdodC5sZWZ0LmVhKCkmJihhPWEuWChudWxsLG51bGwsbnVsbCxudWxsLEZmKGEucmlnaHQpKSxhPUhmKGEpLGE9R2YoYSkpO3JldHVybiBhfWZ1bmN0aW9uIEhmKGEpe3JldHVybiBhLnJpZ2h0LlgobnVsbCxudWxsLGEuY29sb3IsYS5YKG51bGwsbnVsbCwhMCxudWxsLGEucmlnaHQubGVmdCksbnVsbCl9ZnVuY3Rpb24gRmYoYSl7cmV0dXJuIGEubGVmdC5YKG51bGwsbnVsbCxhLmNvbG9yLG51bGwsYS5YKG51bGwsbnVsbCwhMCxhLmxlZnQucmlnaHQsbnVsbCkpfVxuZnVuY3Rpb24gR2YoYSl7cmV0dXJuIGEuWChudWxsLG51bGwsIWEuY29sb3IsYS5sZWZ0LlgobnVsbCxudWxsLCFhLmxlZnQuY29sb3IsbnVsbCxudWxsKSxhLnJpZ2h0LlgobnVsbCxudWxsLCFhLnJpZ2h0LmNvbG9yLG51bGwsbnVsbCkpfWZ1bmN0aW9uIElmKCl7fWc9SWYucHJvdG90eXBlO2cuWD1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtnLk9hPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBBZihhLGIsbnVsbCl9O2cucmVtb3ZlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O2cuY291bnQ9ZnVuY3Rpb24oKXtyZXR1cm4gMH07Zy5lPWZ1bmN0aW9uKCl7cmV0dXJuITB9O2cuaGE9ZnVuY3Rpb24oKXtyZXR1cm4hMX07Zy5HYz1mdW5jdGlvbigpe3JldHVybiBudWxsfTtnLmVjPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9O2cuZWE9ZnVuY3Rpb24oKXtyZXR1cm4hMX07dmFyIHdmPW5ldyBJZjtmdW5jdGlvbiBQKGEsYixjKXt0aGlzLms9YTsodGhpcy5hYT1iKSYmU2QodGhpcy5hYSk7YS5lKCkmJkgoIXRoaXMuYWF8fHRoaXMuYWEuZSgpLFwiQW4gZW1wdHkgbm9kZSBjYW5ub3QgaGF2ZSBhIHByaW9yaXR5XCIpO3RoaXMueWI9Yzt0aGlzLkRiPW51bGx9Zz1QLnByb3RvdHlwZTtnLko9ZnVuY3Rpb24oKXtyZXR1cm4hMX07Zy5DPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYWF8fEd9O2cuZmE9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuay5lKCk/dGhpczpuZXcgUCh0aGlzLmssYSx0aGlzLnliKX07Zy5RPWZ1bmN0aW9uKGEpe2lmKFwiLnByaW9yaXR5XCI9PT1hKXJldHVybiB0aGlzLkMoKTthPXRoaXMuay5nZXQoYSk7cmV0dXJuIG51bGw9PT1hP0c6YX07Zy5QPWZ1bmN0aW9uKGEpe3ZhciBiPUooYSk7cmV0dXJuIG51bGw9PT1iP3RoaXM6dGhpcy5RKGIpLlAoRChhKSl9O2cuRGE9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPT10aGlzLmsuZ2V0KGEpfTtcbmcuVD1mdW5jdGlvbihhLGIpe0goYixcIldlIHNob3VsZCBhbHdheXMgYmUgcGFzc2luZyBzbmFwc2hvdCBub2Rlc1wiKTtpZihcIi5wcmlvcml0eVwiPT09YSlyZXR1cm4gdGhpcy5mYShiKTt2YXIgYz1uZXcgSyhhLGIpLGQsZTtiLmUoKT8oZD10aGlzLmsucmVtb3ZlKGEpLGM9bWUodGhpcy55YixjLHRoaXMuaykpOihkPXRoaXMuay5PYShhLGIpLGM9a2UodGhpcy55YixjLHRoaXMuaykpO2U9ZC5lKCk/Rzp0aGlzLmFhO3JldHVybiBuZXcgUChkLGUsYyl9O2cuRj1mdW5jdGlvbihhLGIpe3ZhciBjPUooYSk7aWYobnVsbD09PWMpcmV0dXJuIGI7SChcIi5wcmlvcml0eVwiIT09SihhKXx8MT09PUFkKGEpLFwiLnByaW9yaXR5IG11c3QgYmUgdGhlIGxhc3QgdG9rZW4gaW4gYSBwYXRoXCIpO3ZhciBkPXRoaXMuUShjKS5GKEQoYSksYik7cmV0dXJuIHRoaXMuVChjLGQpfTtnLmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5rLmUoKX07Zy5FYj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmsuY291bnQoKX07XG52YXIgSmY9L14oMHxbMS05XVxcZCopJC87Zz1QLnByb3RvdHlwZTtnLkg9ZnVuY3Rpb24oYSl7aWYodGhpcy5lKCkpcmV0dXJuIG51bGw7dmFyIGI9e30sYz0wLGQ9MCxlPSEwO3RoaXMuTyhOLGZ1bmN0aW9uKGYsaCl7YltmXT1oLkgoYSk7YysrO2UmJkpmLnRlc3QoZik/ZD1NYXRoLm1heChkLE51bWJlcihmKSk6ZT0hMX0pO2lmKCFhJiZlJiZkPDIqYyl7dmFyIGY9W10saDtmb3IoaCBpbiBiKWZbaF09YltoXTtyZXR1cm4gZn1hJiYhdGhpcy5DKCkuZSgpJiYoYltcIi5wcmlvcml0eVwiXT10aGlzLkMoKS5IKCkpO3JldHVybiBifTtnLmhhc2g9ZnVuY3Rpb24oKXtpZihudWxsPT09dGhpcy5EYil7dmFyIGE9XCJcIjt0aGlzLkMoKS5lKCl8fChhKz1cInByaW9yaXR5OlwiK1VkKHRoaXMuQygpLkgoKSkrXCI6XCIpO3RoaXMuTyhOLGZ1bmN0aW9uKGIsYyl7dmFyIGQ9Yy5oYXNoKCk7XCJcIiE9PWQmJihhKz1cIjpcIitiK1wiOlwiK2QpfSk7dGhpcy5EYj1cIlwiPT09YT9cIlwiOnVjKGEpfXJldHVybiB0aGlzLkRifTtcbmcuVmU9ZnVuY3Rpb24oYSxiLGMpe3JldHVybihjPUtmKHRoaXMsYykpPyhhPXhmKGMsbmV3IEsoYSxiKSkpP2EubmFtZTpudWxsOnhmKHRoaXMuayxhKX07ZnVuY3Rpb24gUWQoYSxiKXt2YXIgYztjPShjPUtmKGEsYikpPyhjPWMuR2MoKSkmJmMubmFtZTphLmsuR2MoKTtyZXR1cm4gYz9uZXcgSyhjLGEuay5nZXQoYykpOm51bGx9ZnVuY3Rpb24gUmQoYSxiKXt2YXIgYztjPShjPUtmKGEsYikpPyhjPWMuZWMoKSkmJmMubmFtZTphLmsuZWMoKTtyZXR1cm4gYz9uZXcgSyhjLGEuay5nZXQoYykpOm51bGx9Zy5PPWZ1bmN0aW9uKGEsYil7dmFyIGM9S2YodGhpcyxhKTtyZXR1cm4gYz9jLmhhKGZ1bmN0aW9uKGEpe3JldHVybiBiKGEubmFtZSxhLlIpfSk6dGhpcy5rLmhhKGIpfTtnLldiPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlhiKGEuSGMoKSxhKX07XG5nLlhiPWZ1bmN0aW9uKGEsYil7dmFyIGM9S2YodGhpcyxiKTtpZihjKXJldHVybiBjLlhiKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KTtmb3IodmFyIGM9dGhpcy5rLlhiKGEubmFtZSxqYyksZD16ZihjKTtudWxsIT1kJiYwPmIuY29tcGFyZShkLGEpOylSKGMpLGQ9emYoYyk7cmV0dXJuIGN9O2cuV2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuWmIoYS5GYygpLGEpfTtnLlpiPWZ1bmN0aW9uKGEsYil7dmFyIGM9S2YodGhpcyxiKTtpZihjKXJldHVybiBjLlpiKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KTtmb3IodmFyIGM9dGhpcy5rLlpiKGEubmFtZSxqYyksZD16ZihjKTtudWxsIT1kJiYwPGIuY29tcGFyZShkLGEpOylSKGMpLGQ9emYoYyk7cmV0dXJuIGN9O2cuc2M9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZSgpP2EuZSgpPzA6LTE6YS5KKCl8fGEuZSgpPzE6YT09PVpkPy0xOjB9O1xuZy5uYj1mdW5jdGlvbihhKXtpZihhPT09RmR8fHZhKHRoaXMueWIuY2MsYS50b1N0cmluZygpKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnliLGM9dGhpcy5rO0goYSE9PUZkLFwiS2V5SW5kZXggYWx3YXlzIGV4aXN0cyBhbmQgaXNuJ3QgbWVhbnQgdG8gYmUgYWRkZWQgdG8gdGhlIEluZGV4TWFwLlwiKTtmb3IodmFyIGQ9W10sZT0hMSxjPWMuV2IoamMpLGY9UihjKTtmOyllPWV8fGEueGMoZi5SKSxkLnB1c2goZiksZj1SKGMpO2Q9ZT9sZShkLFBkKGEpKTpXZDtlPWEudG9TdHJpbmcoKTtjPXphKGIuY2MpO2NbZV09YTthPXphKGIub2QpO2FbZV09ZDtyZXR1cm4gbmV3IFAodGhpcy5rLHRoaXMuYWEsbmV3IGplKGEsYykpfTtnLnljPWZ1bmN0aW9uKGEpe3JldHVybiBhPT09RmR8fHZhKHRoaXMueWIuY2MsYS50b1N0cmluZygpKX07XG5nLlo9ZnVuY3Rpb24oYSl7aWYoYT09PXRoaXMpcmV0dXJuITA7aWYoYS5KKCkpcmV0dXJuITE7aWYodGhpcy5DKCkuWihhLkMoKSkmJnRoaXMuay5jb3VudCgpPT09YS5rLmNvdW50KCkpe3ZhciBiPXRoaXMuV2IoTik7YT1hLldiKE4pO2Zvcih2YXIgYz1SKGIpLGQ9UihhKTtjJiZkOyl7aWYoYy5uYW1lIT09ZC5uYW1lfHwhYy5SLlooZC5SKSlyZXR1cm4hMTtjPVIoYik7ZD1SKGEpfXJldHVybiBudWxsPT09YyYmbnVsbD09PWR9cmV0dXJuITF9O2Z1bmN0aW9uIEtmKGEsYil7cmV0dXJuIGI9PT1GZD9udWxsOmEueWIuZ2V0KGIudG9TdHJpbmcoKSl9Zy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBCKHRoaXMuSCghMCkpfTtmdW5jdGlvbiBNKGEsYil7aWYobnVsbD09PWEpcmV0dXJuIEc7dmFyIGM9bnVsbDtcIm9iamVjdFwiPT09dHlwZW9mIGEmJlwiLnByaW9yaXR5XCJpbiBhP2M9YVtcIi5wcmlvcml0eVwiXTpcInVuZGVmaW5lZFwiIT09dHlwZW9mIGImJihjPWIpO0gobnVsbD09PWN8fFwic3RyaW5nXCI9PT10eXBlb2YgY3x8XCJudW1iZXJcIj09PXR5cGVvZiBjfHxcIm9iamVjdFwiPT09dHlwZW9mIGMmJlwiLnN2XCJpbiBjLFwiSW52YWxpZCBwcmlvcml0eSB0eXBlIGZvdW5kOiBcIit0eXBlb2YgYyk7XCJvYmplY3RcIj09PXR5cGVvZiBhJiZcIi52YWx1ZVwiaW4gYSYmbnVsbCE9PWFbXCIudmFsdWVcIl0mJihhPWFbXCIudmFsdWVcIl0pO2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYXx8XCIuc3ZcImluIGEpcmV0dXJuIG5ldyBxYyhhLE0oYykpO2lmKGEgaW5zdGFuY2VvZiBBcnJheSl7dmFyIGQ9RyxlPWE7cihlLGZ1bmN0aW9uKGEsYil7aWYoY2IoZSxiKSYmXCIuXCIhPT1iLnN1YnN0cmluZygwLDEpKXt2YXIgYz1NKGEpO2lmKGMuSigpfHwhYy5lKCkpZD1cbmQuVChiLGMpfX0pO3JldHVybiBkLmZhKE0oYykpfXZhciBmPVtdLGg9ITEsaz1hO2RiKGssZnVuY3Rpb24oYSl7aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBhfHxcIi5cIiE9PWEuc3Vic3RyaW5nKDAsMSkpe3ZhciBiPU0oa1thXSk7Yi5lKCl8fChoPWh8fCFiLkMoKS5lKCksZi5wdXNoKG5ldyBLKGEsYikpKX19KTtpZigwPT1mLmxlbmd0aClyZXR1cm4gRzt2YXIgbD1sZShmLGdjLGZ1bmN0aW9uKGEpe3JldHVybiBhLm5hbWV9LGljKTtpZihoKXt2YXIgbT1sZShmLFBkKE4pKTtyZXR1cm4gbmV3IFAobCxNKGMpLG5ldyBqZSh7XCIucHJpb3JpdHlcIjptfSx7XCIucHJpb3JpdHlcIjpOfSkpfXJldHVybiBuZXcgUChsLE0oYyksbmUpfXZhciBMZj1NYXRoLmxvZygyKTtcbmZ1bmN0aW9uIE1mKGEpe3RoaXMuY291bnQ9cGFyc2VJbnQoTWF0aC5sb2coYSsxKS9MZiwxMCk7dGhpcy5OZT10aGlzLmNvdW50LTE7dGhpcy5DZj1hKzEmcGFyc2VJbnQoQXJyYXkodGhpcy5jb3VudCsxKS5qb2luKFwiMVwiKSwyKX1mdW5jdGlvbiBOZihhKXt2YXIgYj0hKGEuQ2YmMTw8YS5OZSk7YS5OZS0tO3JldHVybiBifVxuZnVuY3Rpb24gbGUoYSxiLGMsZCl7ZnVuY3Rpb24gZShiLGQpe3ZhciBmPWQtYjtpZigwPT1mKXJldHVybiBudWxsO2lmKDE9PWYpe3ZhciBtPWFbYl0sdT1jP2MobSk6bTtyZXR1cm4gbmV3IEFmKHUsbS5SLCExLG51bGwsbnVsbCl9dmFyIG09cGFyc2VJbnQoZi8yLDEwKStiLGY9ZShiLG0pLHo9ZShtKzEsZCksbT1hW21dLHU9Yz9jKG0pOm07cmV0dXJuIG5ldyBBZih1LG0uUiwhMSxmLHopfWEuc29ydChiKTt2YXIgZj1mdW5jdGlvbihiKXtmdW5jdGlvbiBkKGIsaCl7dmFyIGs9dS1iLHo9dTt1LT1iO3ZhciB6PWUoaysxLHopLGs9YVtrXSxGPWM/YyhrKTprLHo9bmV3IEFmKEYsay5SLGgsbnVsbCx6KTtmP2YubGVmdD16Om09ejtmPXp9Zm9yKHZhciBmPW51bGwsbT1udWxsLHU9YS5sZW5ndGgsej0wO3o8Yi5jb3VudDsrK3ope3ZhciBGPU5mKGIpLGlkPU1hdGgucG93KDIsYi5jb3VudC0oeisxKSk7Rj9kKGlkLCExKTooZChpZCwhMSksZChpZCwhMCkpfXJldHVybiBtfShuZXcgTWYoYS5sZW5ndGgpKTtcbnJldHVybiBudWxsIT09Zj9uZXcgdmYoZHx8YixmKTpuZXcgdmYoZHx8Yil9ZnVuY3Rpb24gVWQoYSl7cmV0dXJuXCJudW1iZXJcIj09PXR5cGVvZiBhP1wibnVtYmVyOlwiK0pjKGEpOlwic3RyaW5nOlwiK2F9ZnVuY3Rpb24gU2QoYSl7aWYoYS5KKCkpe3ZhciBiPWEuSCgpO0goXCJzdHJpbmdcIj09PXR5cGVvZiBifHxcIm51bWJlclwiPT09dHlwZW9mIGJ8fFwib2JqZWN0XCI9PT10eXBlb2YgYiYmY2IoYixcIi5zdlwiKSxcIlByaW9yaXR5IG11c3QgYmUgYSBzdHJpbmcgb3IgbnVtYmVyLlwiKX1lbHNlIEgoYT09PVpkfHxhLmUoKSxcInByaW9yaXR5IG9mIHVuZXhwZWN0ZWQgdHlwZS5cIik7SChhPT09WmR8fGEuQygpLmUoKSxcIlByaW9yaXR5IG5vZGVzIGNhbid0IGhhdmUgYSBwcmlvcml0eSBvZiB0aGVpciBvd24uXCIpfXZhciBHPW5ldyBQKG5ldyB2ZihpYyksbnVsbCxuZSk7ZnVuY3Rpb24gT2YoKXtQLmNhbGwodGhpcyxuZXcgdmYoaWMpLEcsbmUpfWxhKE9mLFApO2c9T2YucHJvdG90eXBlO1xuZy5zYz1mdW5jdGlvbihhKXtyZXR1cm4gYT09PXRoaXM/MDoxfTtnLlo9ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT10aGlzfTtnLkM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307Zy5RPWZ1bmN0aW9uKCl7cmV0dXJuIEd9O2cuZT1mdW5jdGlvbigpe3JldHVybiExfTt2YXIgWmQ9bmV3IE9mLFhkPW5ldyBLKFwiW01JTl9OQU1FXVwiLEcpLGNlPW5ldyBLKFwiW01BWF9OQU1FXVwiLFpkKTtmdW5jdGlvbiBXKGEsYixjKXt0aGlzLkE9YTt0aGlzLlY9Yjt0aGlzLmc9Y31XLnByb3RvdHlwZS5IPWZ1bmN0aW9uKCl7eChcIkZpcmViYXNlLkRhdGFTbmFwc2hvdC52YWxcIiwwLDAsYXJndW1lbnRzLmxlbmd0aCk7cmV0dXJuIHRoaXMuQS5IKCl9O1cucHJvdG90eXBlLnZhbD1XLnByb3RvdHlwZS5IO1cucHJvdG90eXBlLlFlPWZ1bmN0aW9uKCl7eChcIkZpcmViYXNlLkRhdGFTbmFwc2hvdC5leHBvcnRWYWxcIiwwLDAsYXJndW1lbnRzLmxlbmd0aCk7cmV0dXJuIHRoaXMuQS5IKCEwKX07Vy5wcm90b3R5cGUuZXhwb3J0VmFsPVcucHJvdG90eXBlLlFlO1cucHJvdG90eXBlLkxmPWZ1bmN0aW9uKCl7eChcIkZpcmViYXNlLkRhdGFTbmFwc2hvdC5leGlzdHNcIiwwLDAsYXJndW1lbnRzLmxlbmd0aCk7cmV0dXJuIXRoaXMuQS5lKCl9O1cucHJvdG90eXBlLmV4aXN0cz1XLnByb3RvdHlwZS5MZjtcblcucHJvdG90eXBlLm49ZnVuY3Rpb24oYSl7eChcIkZpcmViYXNlLkRhdGFTbmFwc2hvdC5jaGlsZFwiLDAsMSxhcmd1bWVudHMubGVuZ3RoKTtnYShhKSYmKGE9U3RyaW5nKGEpKTtsZihcIkZpcmViYXNlLkRhdGFTbmFwc2hvdC5jaGlsZFwiLGEpO3ZhciBiPW5ldyBMKGEpLGM9dGhpcy5WLm4oYik7cmV0dXJuIG5ldyBXKHRoaXMuQS5QKGIpLGMsTil9O1cucHJvdG90eXBlLmNoaWxkPVcucHJvdG90eXBlLm47Vy5wcm90b3R5cGUuRGE9ZnVuY3Rpb24oYSl7eChcIkZpcmViYXNlLkRhdGFTbmFwc2hvdC5oYXNDaGlsZFwiLDEsMSxhcmd1bWVudHMubGVuZ3RoKTtsZihcIkZpcmViYXNlLkRhdGFTbmFwc2hvdC5oYXNDaGlsZFwiLGEpO3ZhciBiPW5ldyBMKGEpO3JldHVybiF0aGlzLkEuUChiKS5lKCl9O1cucHJvdG90eXBlLmhhc0NoaWxkPVcucHJvdG90eXBlLkRhO1xuVy5wcm90b3R5cGUuQz1mdW5jdGlvbigpe3goXCJGaXJlYmFzZS5EYXRhU25hcHNob3QuZ2V0UHJpb3JpdHlcIiwwLDAsYXJndW1lbnRzLmxlbmd0aCk7cmV0dXJuIHRoaXMuQS5DKCkuSCgpfTtXLnByb3RvdHlwZS5nZXRQcmlvcml0eT1XLnByb3RvdHlwZS5DO1cucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24oYSl7eChcIkZpcmViYXNlLkRhdGFTbmFwc2hvdC5mb3JFYWNoXCIsMSwxLGFyZ3VtZW50cy5sZW5ndGgpO0EoXCJGaXJlYmFzZS5EYXRhU25hcHNob3QuZm9yRWFjaFwiLDEsYSwhMSk7aWYodGhpcy5BLkooKSlyZXR1cm4hMTt2YXIgYj10aGlzO3JldHVybiEhdGhpcy5BLk8odGhpcy5nLGZ1bmN0aW9uKGMsZCl7cmV0dXJuIGEobmV3IFcoZCxiLlYubihjKSxOKSl9KX07Vy5wcm90b3R5cGUuZm9yRWFjaD1XLnByb3RvdHlwZS5mb3JFYWNoO1xuVy5wcm90b3R5cGUua2Q9ZnVuY3Rpb24oKXt4KFwiRmlyZWJhc2UuRGF0YVNuYXBzaG90Lmhhc0NoaWxkcmVuXCIsMCwwLGFyZ3VtZW50cy5sZW5ndGgpO3JldHVybiB0aGlzLkEuSigpPyExOiF0aGlzLkEuZSgpfTtXLnByb3RvdHlwZS5oYXNDaGlsZHJlbj1XLnByb3RvdHlwZS5rZDtXLnByb3RvdHlwZS5nZXRLZXk9ZnVuY3Rpb24oKXt4KFwiRmlyZWJhc2UuRGF0YVNuYXBzaG90LmtleVwiLDAsMCxhcmd1bWVudHMubGVuZ3RoKTtyZXR1cm4gdGhpcy5WLmdldEtleSgpfTtMYyhXLnByb3RvdHlwZSxcImtleVwiLFcucHJvdG90eXBlLmdldEtleSk7Vy5wcm90b3R5cGUuRWI9ZnVuY3Rpb24oKXt4KFwiRmlyZWJhc2UuRGF0YVNuYXBzaG90Lm51bUNoaWxkcmVuXCIsMCwwLGFyZ3VtZW50cy5sZW5ndGgpO3JldHVybiB0aGlzLkEuRWIoKX07Vy5wcm90b3R5cGUubnVtQ2hpbGRyZW49Vy5wcm90b3R5cGUuRWI7XG5XLnByb3RvdHlwZS53Yj1mdW5jdGlvbigpe3goXCJGaXJlYmFzZS5EYXRhU25hcHNob3QucmVmXCIsMCwwLGFyZ3VtZW50cy5sZW5ndGgpO3JldHVybiB0aGlzLlZ9O0xjKFcucHJvdG90eXBlLFwicmVmXCIsVy5wcm90b3R5cGUud2IpO2Z1bmN0aW9uIHlkKGEsYil7dGhpcy5OPWE7dGhpcy5MZD1ifWZ1bmN0aW9uIHZkKGEsYixjLGQpe3JldHVybiBuZXcgeWQobmV3ICRiKGIsYyxkKSxhLkxkKX1mdW5jdGlvbiB6ZChhKXtyZXR1cm4gYS5OLmRhP2EuTi5qKCk6bnVsbH15ZC5wcm90b3R5cGUudz1mdW5jdGlvbigpe3JldHVybiB0aGlzLkxkfTtmdW5jdGlvbiBhYyhhKXtyZXR1cm4gYS5MZC5kYT9hLkxkLmooKTpudWxsfTtmdW5jdGlvbiBQZihhLGIpe3RoaXMuVj1hO3ZhciBjPWEubSxkPW5ldyBHZChjLmcpLGM9UyhjKT9uZXcgR2QoYy5nKTpjLnhhP25ldyBNZChjKTpuZXcgSGQoYyk7dGhpcy5oZj1uZXcgcGQoYyk7dmFyIGU9Yi53KCksZj1iLk4saD1kLnlhKEcsZS5qKCksbnVsbCksaz1jLnlhKEcsZi5qKCksbnVsbCk7dGhpcy5LYT1uZXcgeWQobmV3ICRiKGssZi5kYSxjLk5hKCkpLG5ldyAkYihoLGUuZGEsZC5OYSgpKSk7dGhpcy5aYT1bXTt0aGlzLkpmPW5ldyBrZChhKX1mdW5jdGlvbiBRZihhKXtyZXR1cm4gYS5WfWc9UGYucHJvdG90eXBlO2cudz1mdW5jdGlvbigpe3JldHVybiB0aGlzLkthLncoKS5qKCl9O2cuaGI9ZnVuY3Rpb24oYSl7dmFyIGI9YWModGhpcy5LYSk7cmV0dXJuIGImJihTKHRoaXMuVi5tKXx8IWEuZSgpJiYhYi5RKEooYSkpLmUoKSk/Yi5QKGEpOm51bGx9O2cuZT1mdW5jdGlvbigpe3JldHVybiAwPT09dGhpcy5aYS5sZW5ndGh9O2cuTmI9ZnVuY3Rpb24oYSl7dGhpcy5aYS5wdXNoKGEpfTtcbmcua2I9ZnVuY3Rpb24oYSxiKXt2YXIgYz1bXTtpZihiKXtIKG51bGw9PWEsXCJBIGNhbmNlbCBzaG91bGQgY2FuY2VsIGFsbCBldmVudCByZWdpc3RyYXRpb25zLlwiKTt2YXIgZD10aGlzLlYucGF0aDtKYSh0aGlzLlphLGZ1bmN0aW9uKGEpeyhhPWEuTGUoYixkKSkmJmMucHVzaChhKX0pfWlmKGEpe2Zvcih2YXIgZT1bXSxmPTA7Zjx0aGlzLlphLmxlbmd0aDsrK2Ype3ZhciBoPXRoaXMuWmFbZl07aWYoIWgubWF0Y2hlcyhhKSllLnB1c2goaCk7ZWxzZSBpZihhLlhlKCkpe2U9ZS5jb25jYXQodGhpcy5aYS5zbGljZShmKzEpKTticmVha319dGhpcy5aYT1lfWVsc2UgdGhpcy5aYT1bXTtyZXR1cm4gY307XG5nLmViPWZ1bmN0aW9uKGEsYixjKXthLnR5cGU9PT1XYyYmbnVsbCE9PWEuc291cmNlLkhiJiYoSChhYyh0aGlzLkthKSxcIldlIHNob3VsZCBhbHdheXMgaGF2ZSBhIGZ1bGwgY2FjaGUgYmVmb3JlIGhhbmRsaW5nIG1lcmdlc1wiKSxIKHpkKHRoaXMuS2EpLFwiTWlzc2luZyBldmVudCBjYWNoZSwgZXZlbiB0aG91Z2ggd2UgaGF2ZSBhIHNlcnZlciBjYWNoZVwiKSk7dmFyIGQ9dGhpcy5LYTthPXRoaXMuaGYuZWIoZCxhLGIsYyk7Yj10aGlzLmhmO2M9YS5TZDtIKGMuTi5qKCkueWMoYi5VLmcpLFwiRXZlbnQgc25hcCBub3QgaW5kZXhlZFwiKTtIKGMudygpLmooKS55YyhiLlUuZyksXCJTZXJ2ZXIgc25hcCBub3QgaW5kZXhlZFwiKTtIKGRjKGEuU2QudygpKXx8IWRjKGQudygpKSxcIk9uY2UgYSBzZXJ2ZXIgc25hcCBpcyBjb21wbGV0ZSwgaXQgc2hvdWxkIG5ldmVyIGdvIGJhY2tcIik7dGhpcy5LYT1hLlNkO3JldHVybiBSZih0aGlzLGEuRGYsYS5TZC5OLmooKSxudWxsKX07XG5mdW5jdGlvbiBTZihhLGIpe3ZhciBjPWEuS2EuTixkPVtdO2MuaigpLkooKXx8Yy5qKCkuTyhOLGZ1bmN0aW9uKGEsYil7ZC5wdXNoKG5ldyBJKFwiY2hpbGRfYWRkZWRcIixiLGEpKX0pO2MuZGEmJmQucHVzaChiYyhjLmooKSkpO3JldHVybiBSZihhLGQsYy5qKCksYil9ZnVuY3Rpb24gUmYoYSxiLGMsZCl7cmV0dXJuIGxkKGEuSmYsYixjLGQ/W2RdOmEuWmEpfTtmdW5jdGlvbiBUZihhLGIsYyl7dGhpcy5QYj1hO3RoaXMucmI9Yjt0aGlzLnRiPWN8fG51bGx9Zz1UZi5wcm90b3R5cGU7Zy5uZj1mdW5jdGlvbihhKXtyZXR1cm5cInZhbHVlXCI9PT1hfTtnLmNyZWF0ZUV2ZW50PWZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5tLmc7cmV0dXJuIG5ldyBVYihcInZhbHVlXCIsdGhpcyxuZXcgVyhhLkphLGIud2IoKSxjKSl9O2cuVGI9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy50YjtpZihcImNhbmNlbFwiPT09YS5lZSgpKXtIKHRoaXMucmIsXCJSYWlzaW5nIGEgY2FuY2VsIGV2ZW50IG9uIGEgbGlzdGVuZXIgd2l0aCBubyBjYW5jZWwgY2FsbGJhY2tcIik7dmFyIGM9dGhpcy5yYjtyZXR1cm4gZnVuY3Rpb24oKXtjLmNhbGwoYixhLmVycm9yKX19dmFyIGQ9dGhpcy5QYjtyZXR1cm4gZnVuY3Rpb24oKXtkLmNhbGwoYixhLk1kKX19O2cuTGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5yYj9uZXcgVmIodGhpcyxhLGIpOm51bGx9O1xuZy5tYXRjaGVzPWZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgVGY/YS5QYiYmdGhpcy5QYj9hLlBiPT09dGhpcy5QYiYmYS50Yj09PXRoaXMudGI6ITA6ITF9O2cuWGU9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9PXRoaXMuUGJ9O2Z1bmN0aW9uIFVmKGEsYixjKXt0aGlzLmdhPWE7dGhpcy5yYj1iO3RoaXMudGI9Y31nPVVmLnByb3RvdHlwZTtnLm5mPWZ1bmN0aW9uKGEpe2E9XCJjaGlsZHJlbl9hZGRlZFwiPT09YT9cImNoaWxkX2FkZGVkXCI6YTtyZXR1cm4oXCJjaGlsZHJlbl9yZW1vdmVkXCI9PT1hP1wiY2hpbGRfcmVtb3ZlZFwiOmEpaW4gdGhpcy5nYX07Zy5MZT1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnJiP25ldyBWYih0aGlzLGEsYik6bnVsbH07XG5nLmNyZWF0ZUV2ZW50PWZ1bmN0aW9uKGEsYil7SChudWxsIT1hLlhhLFwiQ2hpbGQgZXZlbnRzIHNob3VsZCBoYXZlIGEgY2hpbGROYW1lLlwiKTt2YXIgYz1iLndiKCkubihhLlhhKTtyZXR1cm4gbmV3IFViKGEudHlwZSx0aGlzLG5ldyBXKGEuSmEsYyxiLm0uZyksYS5EZCl9O2cuVGI9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy50YjtpZihcImNhbmNlbFwiPT09YS5lZSgpKXtIKHRoaXMucmIsXCJSYWlzaW5nIGEgY2FuY2VsIGV2ZW50IG9uIGEgbGlzdGVuZXIgd2l0aCBubyBjYW5jZWwgY2FsbGJhY2tcIik7dmFyIGM9dGhpcy5yYjtyZXR1cm4gZnVuY3Rpb24oKXtjLmNhbGwoYixhLmVycm9yKX19dmFyIGQ9dGhpcy5nYVthLmhkXTtyZXR1cm4gZnVuY3Rpb24oKXtkLmNhbGwoYixhLk1kLGEuRGQpfX07XG5nLm1hdGNoZXM9ZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIFVmKXtpZighdGhpcy5nYXx8IWEuZ2EpcmV0dXJuITA7aWYodGhpcy50Yj09PWEudGIpe3ZhciBiPXJhKGEuZ2EpO2lmKGI9PT1yYSh0aGlzLmdhKSl7aWYoMT09PWIpe3ZhciBiPXNhKGEuZ2EpLGM9c2EodGhpcy5nYSk7cmV0dXJuIGM9PT1iJiYoIWEuZ2FbYl18fCF0aGlzLmdhW2NdfHxhLmdhW2JdPT09dGhpcy5nYVtjXSl9cmV0dXJuIHFhKHRoaXMuZ2EsZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5nYVtjXT09PWJ9KX19fXJldHVybiExfTtnLlhlPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGwhPT10aGlzLmdhfTtmdW5jdGlvbiBYKGEsYixjLGQpe3RoaXMudT1hO3RoaXMucGF0aD1iO3RoaXMubT1jO3RoaXMuTmM9ZH1cbmZ1bmN0aW9uIFZmKGEpe3ZhciBiPW51bGwsYz1udWxsO2Eua2EmJihiPUpkKGEpKTthLm5hJiYoYz1MZChhKSk7aWYoYS5nPT09RmQpe2lmKGEua2Epe2lmKFwiW01JTl9OQU1FXVwiIT1JZChhKSl0aHJvdyBFcnJvcihcIlF1ZXJ5OiBXaGVuIG9yZGVyaW5nIGJ5IGtleSwgeW91IG1heSBvbmx5IHBhc3Mgb25lIGFyZ3VtZW50IHRvIHN0YXJ0QXQoKSwgZW5kQXQoKSwgb3IgZXF1YWxUbygpLlwiKTtpZihcInN0cmluZ1wiIT09dHlwZW9mIGIpdGhyb3cgRXJyb3IoXCJRdWVyeTogV2hlbiBvcmRlcmluZyBieSBrZXksIHRoZSBhcmd1bWVudCBwYXNzZWQgdG8gc3RhcnRBdCgpLCBlbmRBdCgpLG9yIGVxdWFsVG8oKSBtdXN0IGJlIGEgc3RyaW5nLlwiKTt9aWYoYS5uYSl7aWYoXCJbTUFYX05BTUVdXCIhPUtkKGEpKXRocm93IEVycm9yKFwiUXVlcnk6IFdoZW4gb3JkZXJpbmcgYnkga2V5LCB5b3UgbWF5IG9ubHkgcGFzcyBvbmUgYXJndW1lbnQgdG8gc3RhcnRBdCgpLCBlbmRBdCgpLCBvciBlcXVhbFRvKCkuXCIpO2lmKFwic3RyaW5nXCIhPT1cbnR5cGVvZiBjKXRocm93IEVycm9yKFwiUXVlcnk6IFdoZW4gb3JkZXJpbmcgYnkga2V5LCB0aGUgYXJndW1lbnQgcGFzc2VkIHRvIHN0YXJ0QXQoKSwgZW5kQXQoKSxvciBlcXVhbFRvKCkgbXVzdCBiZSBhIHN0cmluZy5cIik7fX1lbHNlIGlmKGEuZz09PU4pe2lmKG51bGwhPWImJiFjZihiKXx8bnVsbCE9YyYmIWNmKGMpKXRocm93IEVycm9yKFwiUXVlcnk6IFdoZW4gb3JkZXJpbmcgYnkgcHJpb3JpdHksIHRoZSBmaXJzdCBhcmd1bWVudCBwYXNzZWQgdG8gc3RhcnRBdCgpLCBlbmRBdCgpLCBvciBlcXVhbFRvKCkgbXVzdCBiZSBhIHZhbGlkIHByaW9yaXR5IHZhbHVlIChudWxsLCBhIG51bWJlciwgb3IgYSBzdHJpbmcpLlwiKTt9ZWxzZSBpZihIKGEuZyBpbnN0YW5jZW9mIFlkfHxhLmc9PT1kZSxcInVua25vd24gaW5kZXggdHlwZS5cIiksbnVsbCE9YiYmXCJvYmplY3RcIj09PXR5cGVvZiBifHxudWxsIT1jJiZcIm9iamVjdFwiPT09dHlwZW9mIGMpdGhyb3cgRXJyb3IoXCJRdWVyeTogRmlyc3QgYXJndW1lbnQgcGFzc2VkIHRvIHN0YXJ0QXQoKSwgZW5kQXQoKSwgb3IgZXF1YWxUbygpIGNhbm5vdCBiZSBhbiBvYmplY3QuXCIpO1xufWZ1bmN0aW9uIFdmKGEpe2lmKGEua2EmJmEubmEmJmEueGEmJighYS54YXx8XCJcIj09PWEubWIpKXRocm93IEVycm9yKFwiUXVlcnk6IENhbid0IGNvbWJpbmUgc3RhcnRBdCgpLCBlbmRBdCgpLCBhbmQgbGltaXQoKS4gVXNlIGxpbWl0VG9GaXJzdCgpIG9yIGxpbWl0VG9MYXN0KCkgaW5zdGVhZC5cIik7fWZ1bmN0aW9uIFhmKGEsYil7aWYoITA9PT1hLk5jKXRocm93IEVycm9yKGIrXCI6IFlvdSBjYW4ndCBjb21iaW5lIG11bHRpcGxlIG9yZGVyQnkgY2FsbHMuXCIpO31nPVgucHJvdG90eXBlO2cud2I9ZnVuY3Rpb24oKXt4KFwiUXVlcnkucmVmXCIsMCwwLGFyZ3VtZW50cy5sZW5ndGgpO3JldHVybiBuZXcgVSh0aGlzLnUsdGhpcy5wYXRoKX07XG5nLmdjPWZ1bmN0aW9uKGEsYixjLGQpe3goXCJRdWVyeS5vblwiLDIsNCxhcmd1bWVudHMubGVuZ3RoKTtqZihcIlF1ZXJ5Lm9uXCIsYSwhMSk7QShcIlF1ZXJ5Lm9uXCIsMixiLCExKTt2YXIgZT1ZZihcIlF1ZXJ5Lm9uXCIsYyxkKTtpZihcInZhbHVlXCI9PT1hKVpmKHRoaXMudSx0aGlzLG5ldyBUZihiLGUuY2FuY2VsfHxudWxsLGUuTWF8fG51bGwpKTtlbHNle3ZhciBmPXt9O2ZbYV09YjtaZih0aGlzLnUsdGhpcyxuZXcgVWYoZixlLmNhbmNlbCxlLk1hKSl9cmV0dXJuIGJ9O1xuZy5JYz1mdW5jdGlvbihhLGIsYyl7eChcIlF1ZXJ5Lm9mZlwiLDAsMyxhcmd1bWVudHMubGVuZ3RoKTtqZihcIlF1ZXJ5Lm9mZlwiLGEsITApO0EoXCJRdWVyeS5vZmZcIiwyLGIsITApO2ViKFwiUXVlcnkub2ZmXCIsMyxjKTt2YXIgZD1udWxsLGU9bnVsbDtcInZhbHVlXCI9PT1hP2Q9bmV3IFRmKGJ8fG51bGwsbnVsbCxjfHxudWxsKTphJiYoYiYmKGU9e30sZVthXT1iKSxkPW5ldyBVZihlLG51bGwsY3x8bnVsbCkpO2U9dGhpcy51O2Q9XCIuaW5mb1wiPT09Sih0aGlzLnBhdGgpP2UucGQua2IodGhpcyxkKTplLksua2IodGhpcyxkKTtRYihlLmNhLHRoaXMucGF0aCxkKX07XG5nLiRmPWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhrKXtmJiYoZj0hMSxlLkljKGEsYyksYiYmYi5jYWxsKGQuTWEsayksaC5yZXNvbHZlKGspKX14KFwiUXVlcnkub25jZVwiLDEsNCxhcmd1bWVudHMubGVuZ3RoKTtqZihcIlF1ZXJ5Lm9uY2VcIixhLCExKTtBKFwiUXVlcnkub25jZVwiLDIsYiwhMCk7dmFyIGQ9WWYoXCJRdWVyeS5vbmNlXCIsYXJndW1lbnRzWzJdLGFyZ3VtZW50c1szXSksZT10aGlzLGY9ITAsaD1uZXcgaGI7amIoaC5yYSk7dGhpcy5nYyhhLGMsZnVuY3Rpb24oYil7ZS5JYyhhLGMpO2QuY2FuY2VsJiZkLmNhbmNlbC5jYWxsKGQuTWEsYik7aC5yZWplY3QoYil9KTtyZXR1cm4gaC5yYX07XG5nLmxlPWZ1bmN0aW9uKGEpe3goXCJRdWVyeS5saW1pdFRvRmlyc3RcIiwxLDEsYXJndW1lbnRzLmxlbmd0aCk7aWYoIWdhKGEpfHxNYXRoLmZsb29yKGEpIT09YXx8MD49YSl0aHJvdyBFcnJvcihcIlF1ZXJ5LmxpbWl0VG9GaXJzdDogRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuXCIpO2lmKHRoaXMubS54YSl0aHJvdyBFcnJvcihcIlF1ZXJ5LmxpbWl0VG9GaXJzdDogTGltaXQgd2FzIGFscmVhZHkgc2V0IChieSBhbm90aGVyIGNhbGwgdG8gbGltaXQsIGxpbWl0VG9GaXJzdCwgb3IgbGltaXRUb0xhc3QpLlwiKTtyZXR1cm4gbmV3IFgodGhpcy51LHRoaXMucGF0aCx0aGlzLm0ubGUoYSksdGhpcy5OYyl9O1xuZy5tZT1mdW5jdGlvbihhKXt4KFwiUXVlcnkubGltaXRUb0xhc3RcIiwxLDEsYXJndW1lbnRzLmxlbmd0aCk7aWYoIWdhKGEpfHxNYXRoLmZsb29yKGEpIT09YXx8MD49YSl0aHJvdyBFcnJvcihcIlF1ZXJ5LmxpbWl0VG9MYXN0OiBGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5cIik7aWYodGhpcy5tLnhhKXRocm93IEVycm9yKFwiUXVlcnkubGltaXRUb0xhc3Q6IExpbWl0IHdhcyBhbHJlYWR5IHNldCAoYnkgYW5vdGhlciBjYWxsIHRvIGxpbWl0LCBsaW1pdFRvRmlyc3QsIG9yIGxpbWl0VG9MYXN0KS5cIik7cmV0dXJuIG5ldyBYKHRoaXMudSx0aGlzLnBhdGgsdGhpcy5tLm1lKGEpLHRoaXMuTmMpfTtcbmcuYWc9ZnVuY3Rpb24oYSl7eChcIlF1ZXJ5Lm9yZGVyQnlDaGlsZFwiLDEsMSxhcmd1bWVudHMubGVuZ3RoKTtpZihcIiRrZXlcIj09PWEpdGhyb3cgRXJyb3IoJ1F1ZXJ5Lm9yZGVyQnlDaGlsZDogXCIka2V5XCIgaXMgaW52YWxpZC4gIFVzZSBRdWVyeS5vcmRlckJ5S2V5KCkgaW5zdGVhZC4nKTtpZihcIiRwcmlvcml0eVwiPT09YSl0aHJvdyBFcnJvcignUXVlcnkub3JkZXJCeUNoaWxkOiBcIiRwcmlvcml0eVwiIGlzIGludmFsaWQuICBVc2UgUXVlcnkub3JkZXJCeVByaW9yaXR5KCkgaW5zdGVhZC4nKTtpZihcIiR2YWx1ZVwiPT09YSl0aHJvdyBFcnJvcignUXVlcnkub3JkZXJCeUNoaWxkOiBcIiR2YWx1ZVwiIGlzIGludmFsaWQuICBVc2UgUXVlcnkub3JkZXJCeVZhbHVlKCkgaW5zdGVhZC4nKTtsZihcIlF1ZXJ5Lm9yZGVyQnlDaGlsZFwiLGEpO1hmKHRoaXMsXCJRdWVyeS5vcmRlckJ5Q2hpbGRcIik7dmFyIGI9bmV3IEwoYSk7aWYoYi5lKCkpdGhyb3cgRXJyb3IoXCJRdWVyeS5vcmRlckJ5Q2hpbGQ6IGNhbm5vdCBwYXNzIGluIGVtcHR5IHBhdGguICBVc2UgUXVlcnkub3JkZXJCeVZhbHVlKCkgaW5zdGVhZC5cIik7XG5iPW5ldyBZZChiKTtiPWhlKHRoaXMubSxiKTtWZihiKTtyZXR1cm4gbmV3IFgodGhpcy51LHRoaXMucGF0aCxiLCEwKX07Zy5iZz1mdW5jdGlvbigpe3goXCJRdWVyeS5vcmRlckJ5S2V5XCIsMCwwLGFyZ3VtZW50cy5sZW5ndGgpO1hmKHRoaXMsXCJRdWVyeS5vcmRlckJ5S2V5XCIpO3ZhciBhPWhlKHRoaXMubSxGZCk7VmYoYSk7cmV0dXJuIG5ldyBYKHRoaXMudSx0aGlzLnBhdGgsYSwhMCl9O2cuY2c9ZnVuY3Rpb24oKXt4KFwiUXVlcnkub3JkZXJCeVByaW9yaXR5XCIsMCwwLGFyZ3VtZW50cy5sZW5ndGgpO1hmKHRoaXMsXCJRdWVyeS5vcmRlckJ5UHJpb3JpdHlcIik7dmFyIGE9aGUodGhpcy5tLE4pO1ZmKGEpO3JldHVybiBuZXcgWCh0aGlzLnUsdGhpcy5wYXRoLGEsITApfTtcbmcuZGc9ZnVuY3Rpb24oKXt4KFwiUXVlcnkub3JkZXJCeVZhbHVlXCIsMCwwLGFyZ3VtZW50cy5sZW5ndGgpO1hmKHRoaXMsXCJRdWVyeS5vcmRlckJ5VmFsdWVcIik7dmFyIGE9aGUodGhpcy5tLGRlKTtWZihhKTtyZXR1cm4gbmV3IFgodGhpcy51LHRoaXMucGF0aCxhLCEwKX07Zy5OZD1mdW5jdGlvbihhLGIpe3goXCJRdWVyeS5zdGFydEF0XCIsMCwyLGFyZ3VtZW50cy5sZW5ndGgpO2RmKFwiUXVlcnkuc3RhcnRBdFwiLGEsdGhpcy5wYXRoLCEwKTtrZihcIlF1ZXJ5LnN0YXJ0QXRcIixiKTt2YXIgYz10aGlzLm0uTmQoYSxiKTtXZihjKTtWZihjKTtpZih0aGlzLm0ua2EpdGhyb3cgRXJyb3IoXCJRdWVyeS5zdGFydEF0OiBTdGFydGluZyBwb2ludCB3YXMgYWxyZWFkeSBzZXQgKGJ5IGFub3RoZXIgY2FsbCB0byBzdGFydEF0IG9yIGVxdWFsVG8pLlwiKTtuKGEpfHwoYj1hPW51bGwpO3JldHVybiBuZXcgWCh0aGlzLnUsdGhpcy5wYXRoLGMsdGhpcy5OYyl9O1xuZy5nZD1mdW5jdGlvbihhLGIpe3goXCJRdWVyeS5lbmRBdFwiLDAsMixhcmd1bWVudHMubGVuZ3RoKTtkZihcIlF1ZXJ5LmVuZEF0XCIsYSx0aGlzLnBhdGgsITApO2tmKFwiUXVlcnkuZW5kQXRcIixiKTt2YXIgYz10aGlzLm0uZ2QoYSxiKTtXZihjKTtWZihjKTtpZih0aGlzLm0ubmEpdGhyb3cgRXJyb3IoXCJRdWVyeS5lbmRBdDogRW5kaW5nIHBvaW50IHdhcyBhbHJlYWR5IHNldCAoYnkgYW5vdGhlciBjYWxsIHRvIGVuZEF0IG9yIGVxdWFsVG8pLlwiKTtyZXR1cm4gbmV3IFgodGhpcy51LHRoaXMucGF0aCxjLHRoaXMuTmMpfTtcbmcuSWY9ZnVuY3Rpb24oYSxiKXt4KFwiUXVlcnkuZXF1YWxUb1wiLDEsMixhcmd1bWVudHMubGVuZ3RoKTtkZihcIlF1ZXJ5LmVxdWFsVG9cIixhLHRoaXMucGF0aCwhMSk7a2YoXCJRdWVyeS5lcXVhbFRvXCIsYik7aWYodGhpcy5tLmthKXRocm93IEVycm9yKFwiUXVlcnkuZXF1YWxUbzogU3RhcnRpbmcgcG9pbnQgd2FzIGFscmVhZHkgc2V0IChieSBhbm90aGVyIGNhbGwgdG8gZW5kQXQgb3IgZXF1YWxUbykuXCIpO2lmKHRoaXMubS5uYSl0aHJvdyBFcnJvcihcIlF1ZXJ5LmVxdWFsVG86IEVuZGluZyBwb2ludCB3YXMgYWxyZWFkeSBzZXQgKGJ5IGFub3RoZXIgY2FsbCB0byBlbmRBdCBvciBlcXVhbFRvKS5cIik7cmV0dXJuIHRoaXMuTmQoYSxiKS5nZChhLGIpfTtcbmcudG9TdHJpbmc9ZnVuY3Rpb24oKXt4KFwiUXVlcnkudG9TdHJpbmdcIiwwLDAsYXJndW1lbnRzLmxlbmd0aCk7Zm9yKHZhciBhPXRoaXMucGF0aCxiPVwiXCIsYz1hLlk7YzxhLm8ubGVuZ3RoO2MrKylcIlwiIT09YS5vW2NdJiYoYis9XCIvXCIrZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhhLm9bY10pKSk7cmV0dXJuIHRoaXMudS50b1N0cmluZygpKyhifHxcIi9cIil9O2cuamE9ZnVuY3Rpb24oKXt2YXIgYT1HYyhpZSh0aGlzLm0pKTtyZXR1cm5cInt9XCI9PT1hP1wiZGVmYXVsdFwiOmF9O1xuZy5pc0VxdWFsPWZ1bmN0aW9uKGEpe3goXCJRdWVyeS5pc0VxdWFsXCIsMSwxLGFyZ3VtZW50cy5sZW5ndGgpO2lmKCEoYSBpbnN0YW5jZW9mIFgpKXRocm93IEVycm9yKFwiUXVlcnkuaXNFcXVhbCBmYWlsZWQ6IEZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgZmlyZWJhc2UuZGF0YWJhc2UuUXVlcnkuXCIpO3ZhciBiPXRoaXMudT09PWEudSxjPXRoaXMucGF0aC5aKGEucGF0aCksZD10aGlzLmphKCk9PT1hLmphKCk7cmV0dXJuIGImJmMmJmR9O1xuZnVuY3Rpb24gWWYoYSxiLGMpe3ZhciBkPXtjYW5jZWw6bnVsbCxNYTpudWxsfTtpZihiJiZjKWQuY2FuY2VsPWIsQShhLDMsZC5jYW5jZWwsITApLGQuTWE9YyxlYihhLDQsZC5NYSk7ZWxzZSBpZihiKWlmKFwib2JqZWN0XCI9PT10eXBlb2YgYiYmbnVsbCE9PWIpZC5NYT1iO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpZC5jYW5jZWw9YjtlbHNlIHRocm93IEVycm9yKHkoYSwzLCEwKStcIiBtdXN0IGVpdGhlciBiZSBhIGNhbmNlbCBjYWxsYmFjayBvciBhIGNvbnRleHQgb2JqZWN0LlwiKTtyZXR1cm4gZH1YLnByb3RvdHlwZS5vbj1YLnByb3RvdHlwZS5nYztYLnByb3RvdHlwZS5vZmY9WC5wcm90b3R5cGUuSWM7WC5wcm90b3R5cGUub25jZT1YLnByb3RvdHlwZS4kZjtYLnByb3RvdHlwZS5saW1pdFRvRmlyc3Q9WC5wcm90b3R5cGUubGU7WC5wcm90b3R5cGUubGltaXRUb0xhc3Q9WC5wcm90b3R5cGUubWU7WC5wcm90b3R5cGUub3JkZXJCeUNoaWxkPVgucHJvdG90eXBlLmFnO1xuWC5wcm90b3R5cGUub3JkZXJCeUtleT1YLnByb3RvdHlwZS5iZztYLnByb3RvdHlwZS5vcmRlckJ5UHJpb3JpdHk9WC5wcm90b3R5cGUuY2c7WC5wcm90b3R5cGUub3JkZXJCeVZhbHVlPVgucHJvdG90eXBlLmRnO1gucHJvdG90eXBlLnN0YXJ0QXQ9WC5wcm90b3R5cGUuTmQ7WC5wcm90b3R5cGUuZW5kQXQ9WC5wcm90b3R5cGUuZ2Q7WC5wcm90b3R5cGUuZXF1YWxUbz1YLnByb3RvdHlwZS5JZjtYLnByb3RvdHlwZS50b1N0cmluZz1YLnByb3RvdHlwZS50b1N0cmluZztYLnByb3RvdHlwZS5pc0VxdWFsPVgucHJvdG90eXBlLmlzRXF1YWw7TGMoWC5wcm90b3R5cGUsXCJyZWZcIixYLnByb3RvdHlwZS53Yik7ZnVuY3Rpb24gJGYoYSxiKXt0aGlzLnZhbHVlPWE7dGhpcy5jaGlsZHJlbj1ifHxhZ312YXIgYWc9bmV3IHZmKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1iPzA6YTxiPy0xOjF9KTtmdW5jdGlvbiBiZyhhKXt2YXIgYj1RO3IoYSxmdW5jdGlvbihhLGQpe2I9Yi5zZXQobmV3IEwoZCksYSl9KTtyZXR1cm4gYn1nPSRmLnByb3RvdHlwZTtnLmU9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09PXRoaXMudmFsdWUmJnRoaXMuY2hpbGRyZW4uZSgpfTtmdW5jdGlvbiBjZyhhLGIsYyl7aWYobnVsbCE9YS52YWx1ZSYmYyhhLnZhbHVlKSlyZXR1cm57cGF0aDpDLHZhbHVlOmEudmFsdWV9O2lmKGIuZSgpKXJldHVybiBudWxsO3ZhciBkPUooYik7YT1hLmNoaWxkcmVuLmdldChkKTtyZXR1cm4gbnVsbCE9PWE/KGI9Y2coYSxEKGIpLGMpLG51bGwhPWI/e3BhdGg6KG5ldyBMKGQpKS5uKGIucGF0aCksdmFsdWU6Yi52YWx1ZX06bnVsbCk6bnVsbH1cbmZ1bmN0aW9uIGRnKGEsYil7cmV0dXJuIGNnKGEsYixmdW5jdGlvbigpe3JldHVybiEwfSl9Zy5zdWJ0cmVlPWZ1bmN0aW9uKGEpe2lmKGEuZSgpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuY2hpbGRyZW4uZ2V0KEooYSkpO3JldHVybiBudWxsIT09Yj9iLnN1YnRyZWUoRChhKSk6UX07Zy5zZXQ9ZnVuY3Rpb24oYSxiKXtpZihhLmUoKSlyZXR1cm4gbmV3ICRmKGIsdGhpcy5jaGlsZHJlbik7dmFyIGM9SihhKSxkPSh0aGlzLmNoaWxkcmVuLmdldChjKXx8USkuc2V0KEQoYSksYiksYz10aGlzLmNoaWxkcmVuLk9hKGMsZCk7cmV0dXJuIG5ldyAkZih0aGlzLnZhbHVlLGMpfTtcbmcucmVtb3ZlPWZ1bmN0aW9uKGEpe2lmKGEuZSgpKXJldHVybiB0aGlzLmNoaWxkcmVuLmUoKT9ROm5ldyAkZihudWxsLHRoaXMuY2hpbGRyZW4pO3ZhciBiPUooYSksYz10aGlzLmNoaWxkcmVuLmdldChiKTtyZXR1cm4gYz8oYT1jLnJlbW92ZShEKGEpKSxiPWEuZSgpP3RoaXMuY2hpbGRyZW4ucmVtb3ZlKGIpOnRoaXMuY2hpbGRyZW4uT2EoYixhKSxudWxsPT09dGhpcy52YWx1ZSYmYi5lKCk/UTpuZXcgJGYodGhpcy52YWx1ZSxiKSk6dGhpc307Zy5nZXQ9ZnVuY3Rpb24oYSl7aWYoYS5lKCkpcmV0dXJuIHRoaXMudmFsdWU7dmFyIGI9dGhpcy5jaGlsZHJlbi5nZXQoSihhKSk7cmV0dXJuIGI/Yi5nZXQoRChhKSk6bnVsbH07XG5mdW5jdGlvbiBFZChhLGIsYyl7aWYoYi5lKCkpcmV0dXJuIGM7dmFyIGQ9SihiKTtiPUVkKGEuY2hpbGRyZW4uZ2V0KGQpfHxRLEQoYiksYyk7ZD1iLmUoKT9hLmNoaWxkcmVuLnJlbW92ZShkKTphLmNoaWxkcmVuLk9hKGQsYik7cmV0dXJuIG5ldyAkZihhLnZhbHVlLGQpfWZ1bmN0aW9uIGVnKGEsYil7cmV0dXJuIGZnKGEsQyxiKX1mdW5jdGlvbiBmZyhhLGIsYyl7dmFyIGQ9e307YS5jaGlsZHJlbi5oYShmdW5jdGlvbihhLGYpe2RbYV09ZmcoZixiLm4oYSksYyl9KTtyZXR1cm4gYyhiLGEudmFsdWUsZCl9ZnVuY3Rpb24gZ2coYSxiLGMpe3JldHVybiBoZyhhLGIsQyxjKX1mdW5jdGlvbiBoZyhhLGIsYyxkKXt2YXIgZT1hLnZhbHVlP2QoYyxhLnZhbHVlKTohMTtpZihlKXJldHVybiBlO2lmKGIuZSgpKXJldHVybiBudWxsO2U9SihiKTtyZXR1cm4oYT1hLmNoaWxkcmVuLmdldChlKSk/aGcoYSxEKGIpLGMubihlKSxkKTpudWxsfVxuZnVuY3Rpb24gaWcoYSxiLGMpe2pnKGEsYixDLGMpfWZ1bmN0aW9uIGpnKGEsYixjLGQpe2lmKGIuZSgpKXJldHVybiBhO2EudmFsdWUmJmQoYyxhLnZhbHVlKTt2YXIgZT1KKGIpO3JldHVybihhPWEuY2hpbGRyZW4uZ2V0KGUpKT9qZyhhLEQoYiksYy5uKGUpLGQpOlF9ZnVuY3Rpb24gQ2QoYSxiKXtrZyhhLEMsYil9ZnVuY3Rpb24ga2coYSxiLGMpe2EuY2hpbGRyZW4uaGEoZnVuY3Rpb24oYSxlKXtrZyhlLGIubihhKSxjKX0pO2EudmFsdWUmJmMoYixhLnZhbHVlKX1mdW5jdGlvbiBsZyhhLGIpe2EuY2hpbGRyZW4uaGEoZnVuY3Rpb24oYSxkKXtkLnZhbHVlJiZiKGEsZC52YWx1ZSl9KX12YXIgUT1uZXcgJGYobnVsbCk7JGYucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7dmFyIGE9e307Q2QodGhpcyxmdW5jdGlvbihiLGMpe2FbYi50b1N0cmluZygpXT1jLnRvU3RyaW5nKCl9KTtyZXR1cm4gQihhKX07ZnVuY3Rpb24gbWcoYSxiLGMpe3RoaXMudHlwZT11ZDt0aGlzLnNvdXJjZT1uZzt0aGlzLnBhdGg9YTt0aGlzLk9iPWI7dGhpcy5JZD1jfW1nLnByb3RvdHlwZS5NYz1mdW5jdGlvbihhKXtpZih0aGlzLnBhdGguZSgpKXtpZihudWxsIT10aGlzLk9iLnZhbHVlKXJldHVybiBIKHRoaXMuT2IuY2hpbGRyZW4uZSgpLFwiYWZmZWN0ZWRUcmVlIHNob3VsZCBub3QgaGF2ZSBvdmVybGFwcGluZyBhZmZlY3RlZCBwYXRocy5cIiksdGhpczthPXRoaXMuT2Iuc3VidHJlZShuZXcgTChhKSk7cmV0dXJuIG5ldyBtZyhDLGEsdGhpcy5JZCl9SChKKHRoaXMucGF0aCk9PT1hLFwib3BlcmF0aW9uRm9yQ2hpbGQgY2FsbGVkIGZvciB1bnJlbGF0ZWQgY2hpbGQuXCIpO3JldHVybiBuZXcgbWcoRCh0aGlzLnBhdGgpLHRoaXMuT2IsdGhpcy5JZCl9O1xubWcucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJPcGVyYXRpb24oXCIrdGhpcy5wYXRoK1wiOiBcIit0aGlzLnNvdXJjZS50b1N0cmluZygpK1wiIGFjayB3cml0ZSByZXZlcnQ9XCIrdGhpcy5JZCtcIiBhZmZlY3RlZFRyZWU9XCIrdGhpcy5PYitcIilcIn07dmFyIEJiPTAsV2M9MSx1ZD0yLERiPTM7ZnVuY3Rpb24gb2coYSxiLGMsZCl7dGhpcy5jZT1hO3RoaXMuU2U9Yjt0aGlzLkhiPWM7dGhpcy5DZT1kO0goIWR8fGIsXCJUYWdnZWQgcXVlcmllcyBtdXN0IGJlIGZyb20gc2VydmVyLlwiKX12YXIgbmc9bmV3IG9nKCEwLCExLG51bGwsITEpLHBnPW5ldyBvZyghMSwhMCxudWxsLCExKTtvZy5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jZT9cInVzZXJcIjp0aGlzLkNlP1wic2VydmVyKHF1ZXJ5SUQ9XCIrdGhpcy5IYitcIilcIjpcInNlcnZlclwifTtmdW5jdGlvbiBxZyhhKXt0aGlzLlc9YX12YXIgcmc9bmV3IHFnKG5ldyAkZihudWxsKSk7ZnVuY3Rpb24gc2coYSxiLGMpe2lmKGIuZSgpKXJldHVybiBuZXcgcWcobmV3ICRmKGMpKTt2YXIgZD1kZyhhLlcsYik7aWYobnVsbCE9ZCl7dmFyIGU9ZC5wYXRoLGQ9ZC52YWx1ZTtiPVQoZSxiKTtkPWQuRihiLGMpO3JldHVybiBuZXcgcWcoYS5XLnNldChlLGQpKX1hPUVkKGEuVyxiLG5ldyAkZihjKSk7cmV0dXJuIG5ldyBxZyhhKX1mdW5jdGlvbiB0ZyhhLGIsYyl7dmFyIGQ9YTtkYihjLGZ1bmN0aW9uKGEsYyl7ZD1zZyhkLGIubihhKSxjKX0pO3JldHVybiBkfXFnLnByb3RvdHlwZS5FZD1mdW5jdGlvbihhKXtpZihhLmUoKSlyZXR1cm4gcmc7YT1FZCh0aGlzLlcsYSxRKTtyZXR1cm4gbmV3IHFnKGEpfTtmdW5jdGlvbiB1ZyhhLGIpe3ZhciBjPWRnKGEuVyxiKTtyZXR1cm4gbnVsbCE9Yz9hLlcuZ2V0KGMucGF0aCkuUChUKGMucGF0aCxiKSk6bnVsbH1cbmZ1bmN0aW9uIHZnKGEpe3ZhciBiPVtdLGM9YS5XLnZhbHVlO251bGwhPWM/Yy5KKCl8fGMuTyhOLGZ1bmN0aW9uKGEsYyl7Yi5wdXNoKG5ldyBLKGEsYykpfSk6YS5XLmNoaWxkcmVuLmhhKGZ1bmN0aW9uKGEsYyl7bnVsbCE9Yy52YWx1ZSYmYi5wdXNoKG5ldyBLKGEsYy52YWx1ZSkpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gd2coYSxiKXtpZihiLmUoKSlyZXR1cm4gYTt2YXIgYz11ZyhhLGIpO3JldHVybiBudWxsIT1jP25ldyBxZyhuZXcgJGYoYykpOm5ldyBxZyhhLlcuc3VidHJlZShiKSl9cWcucHJvdG90eXBlLmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5XLmUoKX07cWcucHJvdG90eXBlLmFwcGx5PWZ1bmN0aW9uKGEpe3JldHVybiB4ZyhDLHRoaXMuVyxhKX07XG5mdW5jdGlvbiB4ZyhhLGIsYyl7aWYobnVsbCE9Yi52YWx1ZSlyZXR1cm4gYy5GKGEsYi52YWx1ZSk7dmFyIGQ9bnVsbDtiLmNoaWxkcmVuLmhhKGZ1bmN0aW9uKGIsZil7XCIucHJpb3JpdHlcIj09PWI/KEgobnVsbCE9PWYudmFsdWUsXCJQcmlvcml0eSB3cml0ZXMgbXVzdCBhbHdheXMgYmUgbGVhZiBub2Rlc1wiKSxkPWYudmFsdWUpOmM9eGcoYS5uKGIpLGYsYyl9KTtjLlAoYSkuZSgpfHxudWxsPT09ZHx8KGM9Yy5GKGEubihcIi5wcmlvcml0eVwiKSxkKSk7cmV0dXJuIGN9O2Z1bmN0aW9uIHlnKCl7dGhpcy56YT17fX1nPXlnLnByb3RvdHlwZTtnLmU9ZnVuY3Rpb24oKXtyZXR1cm4geWEodGhpcy56YSl9O2cuZWI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEuc291cmNlLkhiO2lmKG51bGwhPT1kKXJldHVybiBkPXcodGhpcy56YSxkKSxIKG51bGwhPWQsXCJTeW5jVHJlZSBnYXZlIHVzIGFuIG9wIGZvciBhbiBpbnZhbGlkIHF1ZXJ5LlwiKSxkLmViKGEsYixjKTt2YXIgZT1bXTtyKHRoaXMuemEsZnVuY3Rpb24oZCl7ZT1lLmNvbmNhdChkLmViKGEsYixjKSl9KTtyZXR1cm4gZX07Zy5OYj1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPWEuamEoKSxoPXcodGhpcy56YSxmKTtpZighaCl7dmFyIGg9Yy5BYShlP2Q6bnVsbCksaz0hMTtoP2s9ITA6KGg9ZCBpbnN0YW5jZW9mIFA/Yy5yYyhkKTpHLGs9ITEpO2g9bmV3IFBmKGEsbmV3IHlkKG5ldyAkYihoLGssITEpLG5ldyAkYihkLGUsITEpKSk7dGhpcy56YVtmXT1ofWguTmIoYik7cmV0dXJuIFNmKGgsYil9O1xuZy5rYj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YS5qYSgpLGU9W10sZj1bXSxoPW51bGwhPXpnKHRoaXMpO2lmKFwiZGVmYXVsdFwiPT09ZCl7dmFyIGs9dGhpcztyKHRoaXMuemEsZnVuY3Rpb24oYSxkKXtmPWYuY29uY2F0KGEua2IoYixjKSk7YS5lKCkmJihkZWxldGUgay56YVtkXSxTKGEuVi5tKXx8ZS5wdXNoKGEuVikpfSl9ZWxzZXt2YXIgbD13KHRoaXMuemEsZCk7bCYmKGY9Zi5jb25jYXQobC5rYihiLGMpKSxsLmUoKSYmKGRlbGV0ZSB0aGlzLnphW2RdLFMobC5WLm0pfHxlLnB1c2gobC5WKSkpfWgmJm51bGw9PXpnKHRoaXMpJiZlLnB1c2gobmV3IFUoYS51LGEucGF0aCkpO3JldHVybntoZzplLEtmOmZ9fTtmdW5jdGlvbiBBZyhhKXtyZXR1cm4gS2EodGEoYS56YSksZnVuY3Rpb24oYSl7cmV0dXJuIVMoYS5WLm0pfSl9Zy5oYj1mdW5jdGlvbihhKXt2YXIgYj1udWxsO3IodGhpcy56YSxmdW5jdGlvbihjKXtiPWJ8fGMuaGIoYSl9KTtyZXR1cm4gYn07XG5mdW5jdGlvbiBCZyhhLGIpe2lmKFMoYi5tKSlyZXR1cm4gemcoYSk7dmFyIGM9Yi5qYSgpO3JldHVybiB3KGEuemEsYyl9ZnVuY3Rpb24gemcoYSl7cmV0dXJuIHhhKGEuemEsZnVuY3Rpb24oYSl7cmV0dXJuIFMoYS5WLm0pfSl8fG51bGx9O2Z1bmN0aW9uIENnKCl7dGhpcy5TPXJnO3RoaXMubGE9W107dGhpcy5CYz0tMX1mdW5jdGlvbiBEZyhhLGIpe2Zvcih2YXIgYz0wO2M8YS5sYS5sZW5ndGg7YysrKXt2YXIgZD1hLmxhW2NdO2lmKGQuWmM9PT1iKXJldHVybiBkfXJldHVybiBudWxsfWc9Q2cucHJvdG90eXBlO1xuZy5FZD1mdW5jdGlvbihhKXt2YXIgYj1QYSh0aGlzLmxhLGZ1bmN0aW9uKGIpe3JldHVybiBiLlpjPT09YX0pO0goMDw9YixcInJlbW92ZVdyaXRlIGNhbGxlZCB3aXRoIG5vbmV4aXN0ZW50IHdyaXRlSWQuXCIpO3ZhciBjPXRoaXMubGFbYl07dGhpcy5sYS5zcGxpY2UoYiwxKTtmb3IodmFyIGQ9Yy52aXNpYmxlLGU9ITEsZj10aGlzLmxhLmxlbmd0aC0xO2QmJjA8PWY7KXt2YXIgaD10aGlzLmxhW2ZdO2gudmlzaWJsZSYmKGY+PWImJkVnKGgsYy5wYXRoKT9kPSExOmMucGF0aC5jb250YWlucyhoLnBhdGgpJiYoZT0hMCkpO2YtLX1pZihkKXtpZihlKXRoaXMuUz1GZyh0aGlzLmxhLEdnLEMpLHRoaXMuQmM9MDx0aGlzLmxhLmxlbmd0aD90aGlzLmxhW3RoaXMubGEubGVuZ3RoLTFdLlpjOi0xO2Vsc2UgaWYoYy5HYSl0aGlzLlM9dGhpcy5TLkVkKGMucGF0aCk7ZWxzZXt2YXIgaz10aGlzO3IoYy5jaGlsZHJlbixmdW5jdGlvbihhLGIpe2suUz1rLlMuRWQoYy5wYXRoLm4oYikpfSl9cmV0dXJuITB9cmV0dXJuITF9O1xuZy5BYT1mdW5jdGlvbihhLGIsYyxkKXtpZihjfHxkKXt2YXIgZT13Zyh0aGlzLlMsYSk7cmV0dXJuIWQmJmUuZSgpP2I6ZHx8bnVsbCE9Ynx8bnVsbCE9dWcoZSxDKT8oZT1GZyh0aGlzLmxhLGZ1bmN0aW9uKGIpe3JldHVybihiLnZpc2libGV8fGQpJiYoIWN8fCEoMDw9SWEoYyxiLlpjKSkpJiYoYi5wYXRoLmNvbnRhaW5zKGEpfHxhLmNvbnRhaW5zKGIucGF0aCkpfSxhKSxiPWJ8fEcsZS5hcHBseShiKSk6bnVsbH1lPXVnKHRoaXMuUyxhKTtpZihudWxsIT1lKXJldHVybiBlO2U9d2codGhpcy5TLGEpO3JldHVybiBlLmUoKT9iOm51bGwhPWJ8fG51bGwhPXVnKGUsQyk/KGI9Ynx8RyxlLmFwcGx5KGIpKTpudWxsfTtcbmcucmM9ZnVuY3Rpb24oYSxiKXt2YXIgYz1HLGQ9dWcodGhpcy5TLGEpO2lmKGQpZC5KKCl8fGQuTyhOLGZ1bmN0aW9uKGEsYil7Yz1jLlQoYSxiKX0pO2Vsc2UgaWYoYil7dmFyIGU9d2codGhpcy5TLGEpO2IuTyhOLGZ1bmN0aW9uKGEsYil7dmFyIGQ9d2coZSxuZXcgTChhKSkuYXBwbHkoYik7Yz1jLlQoYSxkKX0pO0phKHZnKGUpLGZ1bmN0aW9uKGEpe2M9Yy5UKGEubmFtZSxhLlIpfSl9ZWxzZSBlPXdnKHRoaXMuUyxhKSxKYSh2ZyhlKSxmdW5jdGlvbihhKXtjPWMuVChhLm5hbWUsYS5SKX0pO3JldHVybiBjfTtnLmFkPWZ1bmN0aW9uKGEsYixjLGQpe0goY3x8ZCxcIkVpdGhlciBleGlzdGluZ0V2ZW50U25hcCBvciBleGlzdGluZ1NlcnZlclNuYXAgbXVzdCBleGlzdFwiKTthPWEubihiKTtpZihudWxsIT11Zyh0aGlzLlMsYSkpcmV0dXJuIG51bGw7YT13Zyh0aGlzLlMsYSk7cmV0dXJuIGEuZSgpP2QuUChiKTphLmFwcGx5KGQuUChiKSl9O1xuZy5xYz1mdW5jdGlvbihhLGIsYyl7YT1hLm4oYik7dmFyIGQ9dWcodGhpcy5TLGEpO3JldHVybiBudWxsIT1kP2Q6WmIoYyxiKT93Zyh0aGlzLlMsYSkuYXBwbHkoYy5qKCkuUShiKSk6bnVsbH07Zy5sYz1mdW5jdGlvbihhKXtyZXR1cm4gdWcodGhpcy5TLGEpfTtnLldkPWZ1bmN0aW9uKGEsYixjLGQsZSxmKXt2YXIgaDthPXdnKHRoaXMuUyxhKTtoPXVnKGEsQyk7aWYobnVsbD09aClpZihudWxsIT1iKWg9YS5hcHBseShiKTtlbHNlIHJldHVybltdO2g9aC5uYihmKTtpZihoLmUoKXx8aC5KKCkpcmV0dXJuW107Yj1bXTthPVBkKGYpO2U9ZT9oLlpiKGMsZik6aC5YYihjLGYpO2ZvcihmPVIoZSk7ZiYmYi5sZW5ndGg8ZDspMCE9PWEoZixjKSYmYi5wdXNoKGYpLGY9UihlKTtyZXR1cm4gYn07XG5mdW5jdGlvbiBFZyhhLGIpe3JldHVybiBhLkdhP2EucGF0aC5jb250YWlucyhiKTohIXdhKGEuY2hpbGRyZW4sZnVuY3Rpb24oYyxkKXtyZXR1cm4gYS5wYXRoLm4oZCkuY29udGFpbnMoYil9KX1mdW5jdGlvbiBHZyhhKXtyZXR1cm4gYS52aXNpYmxlfVxuZnVuY3Rpb24gRmcoYSxiLGMpe2Zvcih2YXIgZD1yZyxlPTA7ZTxhLmxlbmd0aDsrK2Upe3ZhciBmPWFbZV07aWYoYihmKSl7dmFyIGg9Zi5wYXRoO2lmKGYuR2EpYy5jb250YWlucyhoKT8oaD1UKGMsaCksZD1zZyhkLGgsZi5HYSkpOmguY29udGFpbnMoYykmJihoPVQoaCxjKSxkPXNnKGQsQyxmLkdhLlAoaCkpKTtlbHNlIGlmKGYuY2hpbGRyZW4paWYoYy5jb250YWlucyhoKSloPVQoYyxoKSxkPXRnKGQsaCxmLmNoaWxkcmVuKTtlbHNle2lmKGguY29udGFpbnMoYykpaWYoaD1UKGgsYyksaC5lKCkpZD10ZyhkLEMsZi5jaGlsZHJlbik7ZWxzZSBpZihmPXcoZi5jaGlsZHJlbixKKGgpKSlmPWYuUChEKGgpKSxkPXNnKGQsQyxmKX1lbHNlIHRocm93IHNjKFwiV3JpdGVSZWNvcmQgc2hvdWxkIGhhdmUgLnNuYXAgb3IgLmNoaWxkcmVuXCIpO319cmV0dXJuIGR9ZnVuY3Rpb24gSGcoYSxiKXt0aGlzLkxiPWE7dGhpcy5XPWJ9Zz1IZy5wcm90b3R5cGU7XG5nLkFhPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5XLkFhKHRoaXMuTGIsYSxiLGMpfTtnLnJjPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlcucmModGhpcy5MYixhKX07Zy5hZD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMuVy5hZCh0aGlzLkxiLGEsYixjKX07Zy5sYz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5XLmxjKHRoaXMuTGIubihhKSl9O2cuV2Q9ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gdGhpcy5XLldkKHRoaXMuTGIsYSxiLGMsZCxlKX07Zy5xYz1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLlcucWModGhpcy5MYixhLGIpfTtnLm49ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBIZyh0aGlzLkxiLm4oYSksdGhpcy5XKX07ZnVuY3Rpb24gSWcoKXt0aGlzLmNoaWxkcmVuPXt9O3RoaXMuYmQ9MDt0aGlzLnZhbHVlPW51bGx9ZnVuY3Rpb24gSmcoYSxiLGMpe3RoaXMudWQ9YT9hOlwiXCI7dGhpcy5QYz1iP2I6bnVsbDt0aGlzLkE9Yz9jOm5ldyBJZ31mdW5jdGlvbiBLZyhhLGIpe2Zvcih2YXIgYz1iIGluc3RhbmNlb2YgTD9iOm5ldyBMKGIpLGQ9YSxlO251bGwhPT0oZT1KKGMpKTspZD1uZXcgSmcoZSxkLHcoZC5BLmNoaWxkcmVuLGUpfHxuZXcgSWcpLGM9RChjKTtyZXR1cm4gZH1nPUpnLnByb3RvdHlwZTtnLkNhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuQS52YWx1ZX07ZnVuY3Rpb24gTGcoYSxiKXtIKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgYixcIkNhbm5vdCBzZXQgdmFsdWUgdG8gdW5kZWZpbmVkXCIpO2EuQS52YWx1ZT1iO01nKGEpfWcuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLkEudmFsdWU9bnVsbDt0aGlzLkEuY2hpbGRyZW49e307dGhpcy5BLmJkPTA7TWcodGhpcyl9O1xuZy5rZD1mdW5jdGlvbigpe3JldHVybiAwPHRoaXMuQS5iZH07Zy5lPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PT10aGlzLkNhKCkmJiF0aGlzLmtkKCl9O2cuTz1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3IodGhpcy5BLmNoaWxkcmVuLGZ1bmN0aW9uKGMsZCl7YShuZXcgSmcoZCxiLGMpKX0pfTtmdW5jdGlvbiBOZyhhLGIsYyxkKXtjJiYhZCYmYihhKTthLk8oZnVuY3Rpb24oYSl7TmcoYSxiLCEwLGQpfSk7YyYmZCYmYihhKX1mdW5jdGlvbiBPZyhhLGIpe2Zvcih2YXIgYz1hLnBhcmVudCgpO251bGwhPT1jJiYhYihjKTspYz1jLnBhcmVudCgpfWcucGF0aD1mdW5jdGlvbigpe3JldHVybiBuZXcgTChudWxsPT09dGhpcy5QYz90aGlzLnVkOnRoaXMuUGMucGF0aCgpK1wiL1wiK3RoaXMudWQpfTtnLm5hbWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy51ZH07Zy5wYXJlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5QY307XG5mdW5jdGlvbiBNZyhhKXtpZihudWxsIT09YS5QYyl7dmFyIGI9YS5QYyxjPWEudWQsZD1hLmUoKSxlPWNiKGIuQS5jaGlsZHJlbixjKTtkJiZlPyhkZWxldGUgYi5BLmNoaWxkcmVuW2NdLGIuQS5iZC0tLE1nKGIpKTpkfHxlfHwoYi5BLmNoaWxkcmVuW2NdPWEuQSxiLkEuYmQrKyxNZyhiKSl9fTtmdW5jdGlvbiBQZyhhLGIsYyxkLGUsZil7dGhpcy5pZD1RZysrO3RoaXMuZj15YyhcInA6XCIrdGhpcy5pZCtcIjpcIik7dGhpcy5xZD17fTt0aGlzLiQ9e307dGhpcy5wYT1bXTt0aGlzLk9jPTA7dGhpcy5LYz1bXTt0aGlzLm1hPSExO3RoaXMuU2E9MUUzO3RoaXMudGQ9M0U1O3RoaXMuR2I9Yjt0aGlzLkpjPWM7dGhpcy5zZT1kO3RoaXMuTD1hO3RoaXMub2I9dGhpcy5GYT10aGlzLkNiPXRoaXMueGU9bnVsbDt0aGlzLiRjPWU7dGhpcy5iZT0hMTt0aGlzLmllPTA7aWYoZil0aHJvdyBFcnJvcihcIkF1dGggb3ZlcnJpZGUgc3BlY2lmaWVkIGluIG9wdGlvbnMsIGJ1dCBub3Qgc3VwcG9ydGVkIG9uIG5vbiBOb2RlLmpzIHBsYXRmb3Jtc1wiKTt0aGlzLkdlPWZ8fG51bGw7dGhpcy51Yj1udWxsO3RoaXMuTWI9ITE7dGhpcy5HZD17fTt0aGlzLmlnPTA7dGhpcy5SZT0hMDt0aGlzLkFjPXRoaXMua2U9bnVsbDtSZyh0aGlzLDApO3RmLlZiKCkuZ2MoXCJ2aXNpYmxlXCIsdGhpcy5aZix0aGlzKTstMT09PVxuYS5ob3N0LmluZGV4T2YoXCJmYmxvY2FsXCIpJiZzZi5WYigpLmdjKFwib25saW5lXCIsdGhpcy5ZZix0aGlzKX12YXIgUWc9MCxTZz0wO2c9UGcucHJvdG90eXBlO2cudWE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPSsrdGhpcy5pZzthPXtyOmQsYTphLGI6Yn07dGhpcy5mKEIoYSkpO0godGhpcy5tYSxcInNlbmRSZXF1ZXN0IGNhbGwgd2hlbiB3ZSdyZSBub3QgY29ubmVjdGVkIG5vdCBhbGxvd2VkLlwiKTt0aGlzLkZhLnVhKGEpO2MmJih0aGlzLkdkW2RdPWMpfTtcbmcuJGU9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9YS5qYSgpLGY9YS5wYXRoLnRvU3RyaW5nKCk7dGhpcy5mKFwiTGlzdGVuIGNhbGxlZCBmb3IgXCIrZitcIiBcIitlKTt0aGlzLiRbZl09dGhpcy4kW2ZdfHx7fTtIKFNjKGEubSl8fCFTKGEubSksXCJsaXN0ZW4oKSBjYWxsZWQgZm9yIG5vbi1kZWZhdWx0IGJ1dCBjb21wbGV0ZSBxdWVyeVwiKTtIKCF0aGlzLiRbZl1bZV0sXCJsaXN0ZW4oKSBjYWxsZWQgdHdpY2UgZm9yIHNhbWUgcGF0aC9xdWVyeUlkLlwiKTthPXtHOmQsbGQ6YixlZzphLHRhZzpjfTt0aGlzLiRbZl1bZV09YTt0aGlzLm1hJiZUZyh0aGlzLGEpfTtcbmZ1bmN0aW9uIFRnKGEsYil7dmFyIGM9Yi5lZyxkPWMucGF0aC50b1N0cmluZygpLGU9Yy5qYSgpO2EuZihcIkxpc3RlbiBvbiBcIitkK1wiIGZvciBcIitlKTt2YXIgZj17cDpkfTtiLnRhZyYmKGYucT1pZShjLm0pLGYudD1iLnRhZyk7Zi5oPWIubGQoKTthLnVhKFwicVwiLGYsZnVuY3Rpb24oZil7dmFyIGs9Zi5kLGw9Zi5zO2lmKGsmJlwib2JqZWN0XCI9PT10eXBlb2YgayYmY2IoayxcIndcIikpe3ZhciBtPXcoayxcIndcIik7ZWEobSkmJjA8PUlhKG0sXCJub19pbmRleFwiKSYmTyhcIlVzaW5nIGFuIHVuc3BlY2lmaWVkIGluZGV4LiBDb25zaWRlciBhZGRpbmcgXCIrKCdcIi5pbmRleE9uXCI6IFwiJytjLm0uZy50b1N0cmluZygpKydcIicpK1wiIGF0IFwiK2MucGF0aC50b1N0cmluZygpK1wiIHRvIHlvdXIgc2VjdXJpdHkgcnVsZXMgZm9yIGJldHRlciBwZXJmb3JtYW5jZVwiKX0oYS4kW2RdJiZhLiRbZF1bZV0pPT09YiYmKGEuZihcImxpc3RlbiByZXNwb25zZVwiLGYpLFwib2tcIiE9PWwmJlVnKGEsZCxlKSxiLkcmJmIuRyhsLFxuaykpfSl9Zy5rZj1mdW5jdGlvbihhKXt0aGlzLm9iPWE7dGhpcy5mKFwiQXV0aCB0b2tlbiByZWZyZXNoZWRcIik7dGhpcy5vYj9WZyh0aGlzKTp0aGlzLm1hJiZ0aGlzLnVhKFwidW5hdXRoXCIse30sZnVuY3Rpb24oKXt9KTtpZihhJiY0MD09PWEubGVuZ3RofHxQYyhhKSl0aGlzLmYoXCJBZG1pbiBhdXRoIGNyZWRlbnRpYWwgZGV0ZWN0ZWQuICBSZWR1Y2luZyBtYXggcmVjb25uZWN0IHRpbWUuXCIpLHRoaXMudGQ9M0U0fTtmdW5jdGlvbiBWZyhhKXtpZihhLm1hJiZhLm9iKXt2YXIgYj1hLm9iLGM9T2MoYik/XCJhdXRoXCI6XCJnYXV0aFwiLGQ9e2NyZWQ6Yn07YS5HZSYmKGQuYXV0aHZhcj1hLkdlKTthLnVhKGMsZCxmdW5jdGlvbihjKXt2YXIgZD1jLnM7Yz1jLmR8fFwiZXJyb3JcIjthLm9iPT09YiYmKFwib2tcIj09PWQ/YS5pZT0wOldnKGEsZCxjKSl9KX19XG5nLnVmPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5wYXRoLnRvU3RyaW5nKCksZD1hLmphKCk7dGhpcy5mKFwiVW5saXN0ZW4gY2FsbGVkIGZvciBcIitjK1wiIFwiK2QpO0goU2MoYS5tKXx8IVMoYS5tKSxcInVubGlzdGVuKCkgY2FsbGVkIGZvciBub24tZGVmYXVsdCBidXQgY29tcGxldGUgcXVlcnlcIik7aWYoVWcodGhpcyxjLGQpJiZ0aGlzLm1hKXt2YXIgZT1pZShhLm0pO3RoaXMuZihcIlVubGlzdGVuIG9uIFwiK2MrXCIgZm9yIFwiK2QpO2M9e3A6Y307YiYmKGMucT1lLGMudD1iKTt0aGlzLnVhKFwiblwiLGMpfX07Zy5wZT1mdW5jdGlvbihhLGIsYyl7dGhpcy5tYT9YZyh0aGlzLFwib1wiLGEsYixjKTp0aGlzLktjLnB1c2goe3VlOmEsYWN0aW9uOlwib1wiLGRhdGE6YixHOmN9KX07Zy5jZj1mdW5jdGlvbihhLGIsYyl7dGhpcy5tYT9YZyh0aGlzLFwib21cIixhLGIsYyk6dGhpcy5LYy5wdXNoKHt1ZTphLGFjdGlvbjpcIm9tXCIsZGF0YTpiLEc6Y30pfTtcbmcueGQ9ZnVuY3Rpb24oYSxiKXt0aGlzLm1hP1hnKHRoaXMsXCJvY1wiLGEsbnVsbCxiKTp0aGlzLktjLnB1c2goe3VlOmEsYWN0aW9uOlwib2NcIixkYXRhOm51bGwsRzpifSl9O2Z1bmN0aW9uIFhnKGEsYixjLGQsZSl7Yz17cDpjLGQ6ZH07YS5mKFwib25EaXNjb25uZWN0IFwiK2IsYyk7YS51YShiLGMsZnVuY3Rpb24oYSl7ZSYmc2V0VGltZW91dChmdW5jdGlvbigpe2UoYS5zLGEuZCl9LE1hdGguZmxvb3IoMCkpfSl9Zy5wdXQ9ZnVuY3Rpb24oYSxiLGMsZCl7WWcodGhpcyxcInBcIixhLGIsYyxkKX07Zy5hZj1mdW5jdGlvbihhLGIsYyxkKXtZZyh0aGlzLFwibVwiLGEsYixjLGQpfTtmdW5jdGlvbiBZZyhhLGIsYyxkLGUsZil7ZD17cDpjLGQ6ZH07bihmKSYmKGQuaD1mKTthLnBhLnB1c2goe2FjdGlvbjpiLG1mOmQsRzplfSk7YS5PYysrO2I9YS5wYS5sZW5ndGgtMTthLm1hP1pnKGEsYik6YS5mKFwiQnVmZmVyaW5nIHB1dDogXCIrYyl9XG5mdW5jdGlvbiBaZyhhLGIpe3ZhciBjPWEucGFbYl0uYWN0aW9uLGQ9YS5wYVtiXS5tZixlPWEucGFbYl0uRzthLnBhW2JdLmZnPWEubWE7YS51YShjLGQsZnVuY3Rpb24oZCl7YS5mKGMrXCIgcmVzcG9uc2VcIixkKTtkZWxldGUgYS5wYVtiXTthLk9jLS07MD09PWEuT2MmJihhLnBhPVtdKTtlJiZlKGQucyxkLmQpfSl9Zy53ZT1mdW5jdGlvbihhKXt0aGlzLm1hJiYoYT17YzphfSx0aGlzLmYoXCJyZXBvcnRTdGF0c1wiLGEpLHRoaXMudWEoXCJzXCIsYSxmdW5jdGlvbihhKXtcIm9rXCIhPT1hLnMmJnRoaXMuZihcInJlcG9ydFN0YXRzXCIsXCJFcnJvciBzZW5kaW5nIHN0YXRzOiBcIithLmQpfSkpfTtcbmcud2Q9ZnVuY3Rpb24oYSl7aWYoXCJyXCJpbiBhKXt0aGlzLmYoXCJmcm9tIHNlcnZlcjogXCIrQihhKSk7dmFyIGI9YS5yLGM9dGhpcy5HZFtiXTtjJiYoZGVsZXRlIHRoaXMuR2RbYl0sYyhhLmIpKX1lbHNle2lmKFwiZXJyb3JcImluIGEpdGhyb3dcIkEgc2VydmVyLXNpZGUgZXJyb3IgaGFzIG9jY3VycmVkOiBcIithLmVycm9yO1wiYVwiaW4gYSYmKGI9YS5hLGE9YS5iLHRoaXMuZihcImhhbmRsZVNlcnZlck1lc3NhZ2VcIixiLGEpLFwiZFwiPT09Yj90aGlzLkdiKGEucCxhLmQsITEsYS50KTpcIm1cIj09PWI/dGhpcy5HYihhLnAsYS5kLCEwLGEudCk6XCJjXCI9PT1iPyRnKHRoaXMsYS5wLGEucSk6XCJhY1wiPT09Yj9XZyh0aGlzLGEucyxhLmQpOlwic2RcIj09PWI/dGhpcy54ZT90aGlzLnhlKGEpOlwibXNnXCJpbiBhJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIGNvbnNvbGUmJmNvbnNvbGUubG9nKFwiRklSRUJBU0U6IFwiK2EubXNnLnJlcGxhY2UoXCJcXG5cIixcIlxcbkZJUkVCQVNFOiBcIikpOnpjKFwiVW5yZWNvZ25pemVkIGFjdGlvbiByZWNlaXZlZCBmcm9tIHNlcnZlcjogXCIrXG5CKGIpK1wiXFxuQXJlIHlvdSB1c2luZyB0aGUgbGF0ZXN0IGNsaWVudD9cIikpfX07Zy5MYz1mdW5jdGlvbihhLGIpe3RoaXMuZihcImNvbm5lY3Rpb24gcmVhZHlcIik7dGhpcy5tYT0hMDt0aGlzLkFjPShuZXcgRGF0ZSkuZ2V0VGltZSgpO3RoaXMuc2Uoe3NlcnZlclRpbWVPZmZzZXQ6YS0obmV3IERhdGUpLmdldFRpbWUoKX0pO3RoaXMuQ2I9YjtpZih0aGlzLlJlKXt2YXIgYz17fTtjW1wic2RrLmpzLlwiK2ZpcmViYXNlLlNES19WRVJTSU9OLnJlcGxhY2UoL1xcLi9nLFwiLVwiKV09MTtxYigpP2NbXCJmcmFtZXdvcmsuY29yZG92YVwiXT0xOlwib2JqZWN0XCI9PT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmKGNbXCJmcmFtZXdvcmsucmVhY3RuYXRpdmVcIl09MSk7dGhpcy53ZShjKX1haCh0aGlzKTt0aGlzLlJlPSExO3RoaXMuSmMoITApfTtcbmZ1bmN0aW9uIFJnKGEsYil7SCghYS5GYSxcIlNjaGVkdWxpbmcgYSBjb25uZWN0IHdoZW4gd2UncmUgYWxyZWFkeSBjb25uZWN0ZWQvaW5nP1wiKTthLnViJiZjbGVhclRpbWVvdXQoYS51Yik7YS51Yj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YS51Yj1udWxsO2JoKGEpfSxNYXRoLmZsb29yKGIpKX1nLlpmPWZ1bmN0aW9uKGEpe2EmJiF0aGlzLk1iJiZ0aGlzLlNhPT09dGhpcy50ZCYmKHRoaXMuZihcIldpbmRvdyBiZWNhbWUgdmlzaWJsZS4gIFJlZHVjaW5nIGRlbGF5LlwiKSx0aGlzLlNhPTFFMyx0aGlzLkZhfHxSZyh0aGlzLDApKTt0aGlzLk1iPWF9O2cuWWY9ZnVuY3Rpb24oYSl7YT8odGhpcy5mKFwiQnJvd3NlciB3ZW50IG9ubGluZS5cIiksdGhpcy5TYT0xRTMsdGhpcy5GYXx8UmcodGhpcywwKSk6KHRoaXMuZihcIkJyb3dzZXIgd2VudCBvZmZsaW5lLiAgS2lsbGluZyBjb25uZWN0aW9uLlwiKSx0aGlzLkZhJiZ0aGlzLkZhLmNsb3NlKCkpfTtcbmcuZGY9ZnVuY3Rpb24oKXt0aGlzLmYoXCJkYXRhIGNsaWVudCBkaXNjb25uZWN0ZWRcIik7dGhpcy5tYT0hMTt0aGlzLkZhPW51bGw7Zm9yKHZhciBhPTA7YTx0aGlzLnBhLmxlbmd0aDthKyspe3ZhciBiPXRoaXMucGFbYV07YiYmXCJoXCJpbiBiLm1mJiZiLmZnJiYoYi5HJiZiLkcoXCJkaXNjb25uZWN0XCIpLGRlbGV0ZSB0aGlzLnBhW2FdLHRoaXMuT2MtLSl9MD09PXRoaXMuT2MmJih0aGlzLnBhPVtdKTt0aGlzLkdkPXt9O2NoKHRoaXMpJiYodGhpcy5NYj90aGlzLkFjJiYoM0U0PChuZXcgRGF0ZSkuZ2V0VGltZSgpLXRoaXMuQWMmJih0aGlzLlNhPTFFMyksdGhpcy5BYz1udWxsKToodGhpcy5mKFwiV2luZG93IGlzbid0IHZpc2libGUuICBEZWxheWluZyByZWNvbm5lY3QuXCIpLHRoaXMuU2E9dGhpcy50ZCx0aGlzLmtlPShuZXcgRGF0ZSkuZ2V0VGltZSgpKSxhPU1hdGgubWF4KDAsdGhpcy5TYS0oKG5ldyBEYXRlKS5nZXRUaW1lKCktdGhpcy5rZSkpLGEqPU1hdGgucmFuZG9tKCksdGhpcy5mKFwiVHJ5aW5nIHRvIHJlY29ubmVjdCBpbiBcIitcbmErXCJtc1wiKSxSZyh0aGlzLGEpLHRoaXMuU2E9TWF0aC5taW4odGhpcy50ZCwxLjMqdGhpcy5TYSkpO3RoaXMuSmMoITEpfTtcbmZ1bmN0aW9uIGJoKGEpe2lmKGNoKGEpKXthLmYoXCJNYWtpbmcgYSBjb25uZWN0aW9uIGF0dGVtcHRcIik7YS5rZT0obmV3IERhdGUpLmdldFRpbWUoKTthLkFjPW51bGw7dmFyIGI9cShhLndkLGEpLGM9cShhLkxjLGEpLGQ9cShhLmRmLGEpLGU9YS5pZCtcIjpcIitTZysrLGY9YS5DYixoPSExLGs9bnVsbCxsPWZ1bmN0aW9uKCl7az9rLmNsb3NlKCk6KGg9ITAsZCgpKX07YS5GYT17Y2xvc2U6bCx1YTpmdW5jdGlvbihhKXtIKGssXCJzZW5kUmVxdWVzdCBjYWxsIHdoZW4gd2UncmUgbm90IGNvbm5lY3RlZCBub3QgYWxsb3dlZC5cIik7ay51YShhKX19O3ZhciBtPWEuYmU7YS5iZT0hMTthLiRjLmdldFRva2VuKG0pLnRoZW4oZnVuY3Rpb24obCl7aD9FKFwiZ2V0VG9rZW4oKSBjb21wbGV0ZWQgYnV0IHdhcyBjYW5jZWxlZFwiKTooRShcImdldFRva2VuKCkgY29tcGxldGVkLiBDcmVhdGluZyBjb25uZWN0aW9uLlwiKSxhLm9iPWwmJmwuYWNjZXNzVG9rZW4saz1uZXcgQ2UoZSxhLkwsYixjLGQsZnVuY3Rpb24oYil7TyhiK1xuXCIgKFwiK2EuTC50b1N0cmluZygpK1wiKVwiKTthLmFiKFwic2VydmVyX2tpbGxcIil9LGYpKX0pLnRoZW4obnVsbCxmdW5jdGlvbihiKXthLmYoXCJGYWlsZWQgdG8gZ2V0IHRva2VuOiBcIitiKTtofHxsKCl9KX19Zy5hYj1mdW5jdGlvbihhKXtFKFwiSW50ZXJydXB0aW5nIGNvbm5lY3Rpb24gZm9yIHJlYXNvbjogXCIrYSk7dGhpcy5xZFthXT0hMDt0aGlzLkZhP3RoaXMuRmEuY2xvc2UoKToodGhpcy51YiYmKGNsZWFyVGltZW91dCh0aGlzLnViKSx0aGlzLnViPW51bGwpLHRoaXMubWEmJnRoaXMuZGYoKSl9O2cua2M9ZnVuY3Rpb24oYSl7RShcIlJlc3VtaW5nIGNvbm5lY3Rpb24gZm9yIHJlYXNvbjogXCIrYSk7ZGVsZXRlIHRoaXMucWRbYV07eWEodGhpcy5xZCkmJih0aGlzLlNhPTFFMyx0aGlzLkZhfHxSZyh0aGlzLDApKX07XG5mdW5jdGlvbiAkZyhhLGIsYyl7Yz1jP0xhKGMsZnVuY3Rpb24oYSl7cmV0dXJuIEdjKGEpfSkuam9pbihcIiRcIik6XCJkZWZhdWx0XCI7KGE9VWcoYSxiLGMpKSYmYS5HJiZhLkcoXCJwZXJtaXNzaW9uX2RlbmllZFwiKX1mdW5jdGlvbiBVZyhhLGIsYyl7Yj0obmV3IEwoYikpLnRvU3RyaW5nKCk7dmFyIGQ7bihhLiRbYl0pPyhkPWEuJFtiXVtjXSxkZWxldGUgYS4kW2JdW2NdLDA9PT1yYShhLiRbYl0pJiZkZWxldGUgYS4kW2JdKTpkPXZvaWQgMDtyZXR1cm4gZH1cbmZ1bmN0aW9uIFdnKGEsYixjKXtFKFwiQXV0aCB0b2tlbiByZXZva2VkOiBcIitiK1wiL1wiK2MpO2Eub2I9bnVsbDthLmJlPSEwO2EuRmEuY2xvc2UoKTtcImludmFsaWRfdG9rZW5cIj09PWImJihhLmllKyssMzw9YS5pZSYmKGEuU2E9M0U0LGE9YS4kYyxiPSdQcm92aWRlZCBhdXRoZW50aWNhdGlvbiBjcmVkZW50aWFscyBmb3IgdGhlIGFwcCBuYW1lZCBcIicrYS5vYy5uYW1lKydcIiBhcmUgaW52YWxpZC4gVGhpcyB1c3VhbGx5IGluZGljYXRlcyB5b3VyIGFwcCB3YXMgbm90IGluaXRpYWxpemVkIGNvcnJlY3RseS4gJyxiPVwiY3JlZGVudGlhbFwiaW4gYS5vYy5vcHRpb25zP2IrJ01ha2Ugc3VyZSB0aGUgXCJjcmVkZW50aWFsXCIgcHJvcGVydHkgcHJvdmlkZWQgdG8gaW5pdGlhbGl6ZUFwcCgpIGlzIGF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoZSBzcGVjaWZpZWQgXCJkYXRhYmFzZVVSTFwiIGFuZCBpcyBmcm9tIHRoZSBjb3JyZWN0IHByb2plY3QuJzpcInNlcnZpY2VBY2NvdW50XCJpbiBhLm9jLm9wdGlvbnM/XG5iKydNYWtlIHN1cmUgdGhlIFwic2VydmljZUFjY291bnRcIiBwcm9wZXJ0eSBwcm92aWRlZCB0byBpbml0aWFsaXplQXBwKCkgaXMgYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhlIHNwZWNpZmllZCBcImRhdGFiYXNlVVJMXCIgYW5kIGlzIGZyb20gdGhlIGNvcnJlY3QgcHJvamVjdC4nOmIrJ01ha2Ugc3VyZSB0aGUgXCJhcGlLZXlcIiBhbmQgXCJkYXRhYmFzZVVSTFwiIHByb3BlcnRpZXMgcHJvdmlkZWQgdG8gaW5pdGlhbGl6ZUFwcCgpIG1hdGNoIHRoZSB2YWx1ZXMgcHJvdmlkZWQgZm9yIHlvdXIgYXBwIGF0IGh0dHBzOi8vY29uc29sZS5maXJlYmFzZS5nb29nbGUuY29tLy4nLE8oYikpKX1cbmZ1bmN0aW9uIGFoKGEpe1ZnKGEpO3IoYS4kLGZ1bmN0aW9uKGIpe3IoYixmdW5jdGlvbihiKXtUZyhhLGIpfSl9KTtmb3IodmFyIGI9MDtiPGEucGEubGVuZ3RoO2IrKylhLnBhW2JdJiZaZyhhLGIpO2Zvcig7YS5LYy5sZW5ndGg7KWI9YS5LYy5zaGlmdCgpLFhnKGEsYi5hY3Rpb24sYi51ZSxiLmRhdGEsYi5HKX1mdW5jdGlvbiBjaChhKXt2YXIgYjtiPXNmLlZiKCkuaGM7cmV0dXJuIHlhKGEucWQpJiZifTt2YXIgWT17TWY6ZnVuY3Rpb24oKXtyZT1kZD0hMH19O1kuZm9yY2VMb25nUG9sbGluZz1ZLk1mO1kuTmY9ZnVuY3Rpb24oKXtzZT0hMH07WS5mb3JjZVdlYlNvY2tldHM9WS5OZjtZLlRmPWZ1bmN0aW9uKCl7cmV0dXJuIGNkLmlzQXZhaWxhYmxlKCl9O1kuaXNXZWJTb2NrZXRzQXZhaWxhYmxlPVkuVGY7WS5sZz1mdW5jdGlvbihhLGIpe2EudS5SYS54ZT1ifTtZLnNldFNlY3VyaXR5RGVidWdDYWxsYmFjaz1ZLmxnO1kuemU9ZnVuY3Rpb24oYSxiKXthLnUuemUoYil9O1kuc3RhdHM9WS56ZTtZLkFlPWZ1bmN0aW9uKGEsYil7YS51LkFlKGIpfTtZLnN0YXRzSW5jcmVtZW50Q291bnRlcj1ZLkFlO1kuZmQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGEudS5mZH07WS5kYXRhVXBkYXRlQ291bnQ9WS5mZDtZLlNmPWZ1bmN0aW9uKGEsYil7YS51LmhlPWJ9O1kuaW50ZXJjZXB0U2VydmVyRGF0YT1ZLlNmO2Z1bmN0aW9uIGRoKGEpe3RoaXMud2E9UTt0aGlzLmpiPW5ldyBDZzt0aGlzLkJlPXt9O3RoaXMuaWM9e307dGhpcy5DYz1hfWZ1bmN0aW9uIGVoKGEsYixjLGQsZSl7dmFyIGY9YS5qYixoPWU7SChkPmYuQmMsXCJTdGFja2luZyBhbiBvbGRlciB3cml0ZSBvbiB0b3Agb2YgbmV3ZXIgb25lc1wiKTtuKGgpfHwoaD0hMCk7Zi5sYS5wdXNoKHtwYXRoOmIsR2E6YyxaYzpkLHZpc2libGU6aH0pO2gmJihmLlM9c2coZi5TLGIsYykpO2YuQmM9ZDtyZXR1cm4gZT9maChhLG5ldyBBYihuZyxiLGMpKTpbXX1mdW5jdGlvbiBnaChhLGIsYyxkKXt2YXIgZT1hLmpiO0goZD5lLkJjLFwiU3RhY2tpbmcgYW4gb2xkZXIgbWVyZ2Ugb24gdG9wIG9mIG5ld2VyIG9uZXNcIik7ZS5sYS5wdXNoKHtwYXRoOmIsY2hpbGRyZW46YyxaYzpkLHZpc2libGU6ITB9KTtlLlM9dGcoZS5TLGIsYyk7ZS5CYz1kO2M9YmcoYyk7cmV0dXJuIGZoKGEsbmV3IFZjKG5nLGIsYykpfVxuZnVuY3Rpb24gaGgoYSxiLGMpe2M9Y3x8ITE7dmFyIGQ9RGcoYS5qYixiKTtpZihhLmpiLkVkKGIpKXt2YXIgZT1RO251bGwhPWQuR2E/ZT1lLnNldChDLCEwKTpkYihkLmNoaWxkcmVuLGZ1bmN0aW9uKGEsYil7ZT1lLnNldChuZXcgTChhKSxiKX0pO3JldHVybiBmaChhLG5ldyBtZyhkLnBhdGgsZSxjKSl9cmV0dXJuW119ZnVuY3Rpb24gaWgoYSxiLGMpe2M9YmcoYyk7cmV0dXJuIGZoKGEsbmV3IFZjKHBnLGIsYykpfWZ1bmN0aW9uIGpoKGEsYixjLGQpe2Q9a2goYSxkKTtpZihudWxsIT1kKXt2YXIgZT1saChkKTtkPWUucGF0aDtlPWUuSGI7Yj1UKGQsYik7Yz1uZXcgQWIobmV3IG9nKCExLCEwLGUsITApLGIsYyk7cmV0dXJuIG1oKGEsZCxjKX1yZXR1cm5bXX1cbmZ1bmN0aW9uIG5oKGEsYixjLGQpe2lmKGQ9a2goYSxkKSl7dmFyIGU9bGgoZCk7ZD1lLnBhdGg7ZT1lLkhiO2I9VChkLGIpO2M9YmcoYyk7Yz1uZXcgVmMobmV3IG9nKCExLCEwLGUsITApLGIsYyk7cmV0dXJuIG1oKGEsZCxjKX1yZXR1cm5bXX1cbmRoLnByb3RvdHlwZS5OYj1mdW5jdGlvbihhLGIpe3ZhciBjPWEucGF0aCxkPW51bGwsZT0hMTtpZyh0aGlzLndhLGMsZnVuY3Rpb24oYSxiKXt2YXIgZj1UKGEsYyk7ZD1kfHxiLmhiKGYpO2U9ZXx8bnVsbCE9emcoYil9KTt2YXIgZj10aGlzLndhLmdldChjKTtmPyhlPWV8fG51bGwhPXpnKGYpLGQ9ZHx8Zi5oYihDKSk6KGY9bmV3IHlnLHRoaXMud2E9dGhpcy53YS5zZXQoYyxmKSk7dmFyIGg7bnVsbCE9ZD9oPSEwOihoPSExLGQ9RyxsZyh0aGlzLndhLnN1YnRyZWUoYyksZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmhiKEMpO2MmJihkPWQuVChhLGMpKX0pKTt2YXIgaz1udWxsIT1CZyhmLGEpO2lmKCFrJiYhUyhhLm0pKXt2YXIgbD1vaChhKTtIKCEobCBpbiB0aGlzLmljKSxcIlZpZXcgZG9lcyBub3QgZXhpc3QsIGJ1dCB3ZSBoYXZlIGEgdGFnXCIpO3ZhciBtPXBoKys7dGhpcy5pY1tsXT1tO3RoaXMuQmVbXCJfXCIrbV09bH1oPWYuTmIoYSxiLG5ldyBIZyhjLHRoaXMuamIpLGQsaCk7a3x8XG5lfHwoZj1CZyhmLGEpLGg9aC5jb25jYXQocWgodGhpcyxhLGYpKSk7cmV0dXJuIGh9O1xuZGgucHJvdG90eXBlLmtiPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hLnBhdGgsZT10aGlzLndhLmdldChkKSxmPVtdO2lmKGUmJihcImRlZmF1bHRcIj09PWEuamEoKXx8bnVsbCE9QmcoZSxhKSkpe2Y9ZS5rYihhLGIsYyk7ZS5lKCkmJih0aGlzLndhPXRoaXMud2EucmVtb3ZlKGQpKTtlPWYuaGc7Zj1mLktmO2I9LTEhPT1QYShlLGZ1bmN0aW9uKGEpe3JldHVybiBTKGEubSl9KTt2YXIgaD1nZyh0aGlzLndhLGQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbCE9emcoYil9KTtpZihiJiYhaCYmKGQ9dGhpcy53YS5zdWJ0cmVlKGQpLCFkLmUoKSkpZm9yKHZhciBkPXJoKGQpLGs9MDtrPGQubGVuZ3RoOysrayl7dmFyIGw9ZFtrXSxtPWwuVixsPXNoKHRoaXMsbCk7dGhpcy5DYy55ZSh0aChtKSx1aCh0aGlzLG0pLGwubGQsbC5HKX1pZighaCYmMDxlLmxlbmd0aCYmIWMpaWYoYil0aGlzLkNjLk9kKHRoKGEpLG51bGwpO2Vsc2V7dmFyIHU9dGhpcztKYShlLGZ1bmN0aW9uKGEpe2EuamEoKTtcbnZhciBiPXUuaWNbb2goYSldO3UuQ2MuT2QodGgoYSksYil9KX12aCh0aGlzLGUpfXJldHVybiBmfTtkaC5wcm90b3R5cGUuQWE9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmpiLGQ9Z2codGhpcy53YSxhLGZ1bmN0aW9uKGIsYyl7dmFyIGQ9VChiLGEpO2lmKGQ9Yy5oYihkKSlyZXR1cm4gZH0pO3JldHVybiBjLkFhKGEsZCxiLCEwKX07ZnVuY3Rpb24gcmgoYSl7cmV0dXJuIGVnKGEsZnVuY3Rpb24oYSxjLGQpe2lmKGMmJm51bGwhPXpnKGMpKXJldHVyblt6ZyhjKV07dmFyIGU9W107YyYmKGU9QWcoYykpO3IoZCxmdW5jdGlvbihhKXtlPWUuY29uY2F0KGEpfSk7cmV0dXJuIGV9KX1mdW5jdGlvbiB2aChhLGIpe2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7KytjKXt2YXIgZD1iW2NdO2lmKCFTKGQubSkpe3ZhciBkPW9oKGQpLGU9YS5pY1tkXTtkZWxldGUgYS5pY1tkXTtkZWxldGUgYS5CZVtcIl9cIitlXX19fVxuZnVuY3Rpb24gdGgoYSl7cmV0dXJuIFMoYS5tKSYmIVNjKGEubSk/YS53YigpOmF9ZnVuY3Rpb24gcWgoYSxiLGMpe3ZhciBkPWIucGF0aCxlPXVoKGEsYik7Yz1zaChhLGMpO2I9YS5DYy55ZSh0aChiKSxlLGMubGQsYy5HKTtkPWEud2Euc3VidHJlZShkKTtpZihlKUgobnVsbD09emcoZC52YWx1ZSksXCJJZiB3ZSdyZSBhZGRpbmcgYSBxdWVyeSwgaXQgc2hvdWxkbid0IGJlIHNoYWRvd2VkXCIpO2Vsc2UgZm9yKGU9ZWcoZCxmdW5jdGlvbihhLGIsYyl7aWYoIWEuZSgpJiZiJiZudWxsIT16ZyhiKSlyZXR1cm5bUWYoemcoYikpXTt2YXIgZD1bXTtiJiYoZD1kLmNvbmNhdChMYShBZyhiKSxmdW5jdGlvbihhKXtyZXR1cm4gYS5WfSkpKTtyKGMsZnVuY3Rpb24oYSl7ZD1kLmNvbmNhdChhKX0pO3JldHVybiBkfSksZD0wO2Q8ZS5sZW5ndGg7KytkKWM9ZVtkXSxhLkNjLk9kKHRoKGMpLHVoKGEsYykpO3JldHVybiBifVxuZnVuY3Rpb24gc2goYSxiKXt2YXIgYz1iLlYsZD11aChhLGMpO3JldHVybntsZDpmdW5jdGlvbigpe3JldHVybihiLncoKXx8RykuaGFzaCgpfSxHOmZ1bmN0aW9uKGIpe2lmKFwib2tcIj09PWIpe2lmKGQpe3ZhciBmPWMucGF0aDtpZihiPWtoKGEsZCkpe3ZhciBoPWxoKGIpO2I9aC5wYXRoO2g9aC5IYjtmPVQoYixmKTtmPW5ldyBDYihuZXcgb2coITEsITAsaCwhMCksZik7Yj1taChhLGIsZil9ZWxzZSBiPVtdfWVsc2UgYj1maChhLG5ldyBDYihwZyxjLnBhdGgpKTtyZXR1cm4gYn1mPVwiVW5rbm93biBFcnJvclwiO1widG9vX2JpZ1wiPT09Yj9mPVwiVGhlIGRhdGEgcmVxdWVzdGVkIGV4Y2VlZHMgdGhlIG1heGltdW0gc2l6ZSB0aGF0IGNhbiBiZSBhY2Nlc3NlZCB3aXRoIGEgc2luZ2xlIHJlcXVlc3QuXCI6XCJwZXJtaXNzaW9uX2RlbmllZFwiPT1iP2Y9XCJDbGllbnQgZG9lc24ndCBoYXZlIHBlcm1pc3Npb24gdG8gYWNjZXNzIHRoZSBkZXNpcmVkIGRhdGEuXCI6XCJ1bmF2YWlsYWJsZVwiPT1iJiZcbihmPVwiVGhlIHNlcnZpY2UgaXMgdW5hdmFpbGFibGVcIik7Zj1FcnJvcihiK1wiIGF0IFwiK2MucGF0aC50b1N0cmluZygpK1wiOiBcIitmKTtmLmNvZGU9Yi50b1VwcGVyQ2FzZSgpO3JldHVybiBhLmtiKGMsbnVsbCxmKX19fWZ1bmN0aW9uIG9oKGEpe3JldHVybiBhLnBhdGgudG9TdHJpbmcoKStcIiRcIithLmphKCl9ZnVuY3Rpb24gbGgoYSl7dmFyIGI9YS5pbmRleE9mKFwiJFwiKTtIKC0xIT09YiYmYjxhLmxlbmd0aC0xLFwiQmFkIHF1ZXJ5S2V5LlwiKTtyZXR1cm57SGI6YS5zdWJzdHIoYisxKSxwYXRoOm5ldyBMKGEuc3Vic3RyKDAsYikpfX1mdW5jdGlvbiBraChhLGIpe3ZhciBjPWEuQmUsZD1cIl9cIitiO3JldHVybiBkIGluIGM/Y1tkXTp2b2lkIDB9ZnVuY3Rpb24gdWgoYSxiKXt2YXIgYz1vaChiKTtyZXR1cm4gdyhhLmljLGMpfXZhciBwaD0xO1xuZnVuY3Rpb24gbWgoYSxiLGMpe3ZhciBkPWEud2EuZ2V0KGIpO0goZCxcIk1pc3Npbmcgc3luYyBwb2ludCBmb3IgcXVlcnkgdGFnIHRoYXQgd2UncmUgdHJhY2tpbmdcIik7cmV0dXJuIGQuZWIoYyxuZXcgSGcoYixhLmpiKSxudWxsKX1mdW5jdGlvbiBmaChhLGIpe3JldHVybiB3aChhLGIsYS53YSxudWxsLG5ldyBIZyhDLGEuamIpKX1mdW5jdGlvbiB3aChhLGIsYyxkLGUpe2lmKGIucGF0aC5lKCkpcmV0dXJuIHhoKGEsYixjLGQsZSk7dmFyIGY9Yy5nZXQoQyk7bnVsbD09ZCYmbnVsbCE9ZiYmKGQ9Zi5oYihDKSk7dmFyIGg9W10saz1KKGIucGF0aCksbD1iLk1jKGspO2lmKChjPWMuY2hpbGRyZW4uZ2V0KGspKSYmbCl2YXIgbT1kP2QuUShrKTpudWxsLGs9ZS5uKGspLGg9aC5jb25jYXQod2goYSxsLGMsbSxrKSk7ZiYmKGg9aC5jb25jYXQoZi5lYihiLGUsZCkpKTtyZXR1cm4gaH1cbmZ1bmN0aW9uIHhoKGEsYixjLGQsZSl7dmFyIGY9Yy5nZXQoQyk7bnVsbD09ZCYmbnVsbCE9ZiYmKGQ9Zi5oYihDKSk7dmFyIGg9W107Yy5jaGlsZHJlbi5oYShmdW5jdGlvbihjLGYpe3ZhciBtPWQ/ZC5RKGMpOm51bGwsdT1lLm4oYyksej1iLk1jKGMpO3omJihoPWguY29uY2F0KHhoKGEseixmLG0sdSkpKX0pO2YmJihoPWguY29uY2F0KGYuZWIoYixlLGQpKSk7cmV0dXJuIGh9O2Z1bmN0aW9uIFRlKGEsYixjKXt0aGlzLmFwcD1jO3ZhciBkPW5ldyBFYihjKTt0aGlzLkw9YTt0aGlzLlZhPSRjKGEpO3RoaXMuVmM9bnVsbDt0aGlzLmNhPW5ldyBOYjt0aGlzLnZkPTE7dGhpcy5SYT1udWxsO2lmKGJ8fDA8PShcIm9iamVjdFwiPT09dHlwZW9mIHdpbmRvdyYmd2luZG93Lm5hdmlnYXRvciYmd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnR8fFwiXCIpLnNlYXJjaCgvZ29vZ2xlYm90fGdvb2dsZSB3ZWJtYXN0ZXIgdG9vbHN8YmluZ2JvdHx5YWhvbyEgc2x1cnB8YmFpZHVzcGlkZXJ8eWFuZGV4Ym90fGR1Y2tkdWNrYm90L2kpKXRoaXMudmE9bmV3IFFjKHRoaXMuTCxxKHRoaXMuR2IsdGhpcyksZCksc2V0VGltZW91dChxKHRoaXMuSmMsdGhpcywhMCksMCk7ZWxzZXtiPWMub3B0aW9ucy5kYXRhYmFzZUF1dGhWYXJpYWJsZU92ZXJyaWRlfHxudWxsO2lmKG51bGwhPT1iKXtpZihcIm9iamVjdFwiIT09ZGEoYikpdGhyb3cgRXJyb3IoXCJPbmx5IG9iamVjdHMgYXJlIHN1cHBvcnRlZCBmb3Igb3B0aW9uIGRhdGFiYXNlQXV0aFZhcmlhYmxlT3ZlcnJpZGVcIik7XG50cnl7QihiKX1jYXRjaChlKXt0aHJvdyBFcnJvcihcIkludmFsaWQgYXV0aE92ZXJyaWRlIHByb3ZpZGVkOiBcIitlKTt9fXRoaXMudmE9dGhpcy5SYT1uZXcgUGcodGhpcy5MLHEodGhpcy5HYix0aGlzKSxxKHRoaXMuSmMsdGhpcykscSh0aGlzLnNlLHRoaXMpLGQsYil9dmFyIGY9dGhpcztGYihkLGZ1bmN0aW9uKGEpe2YudmEua2YoYSl9KTt0aGlzLm9nPWFkKGEscShmdW5jdGlvbigpe3JldHVybiBuZXcgWGModGhpcy5WYSx0aGlzLnZhKX0sdGhpcykpO3RoaXMubWM9bmV3IEpnO3RoaXMuZ2U9bmV3IEdiO3RoaXMucGQ9bmV3IGRoKHt5ZTpmdW5jdGlvbihhLGIsYyxkKXtiPVtdO2M9Zi5nZS5qKGEucGF0aCk7Yy5lKCl8fChiPWZoKGYucGQsbmV3IEFiKHBnLGEucGF0aCxjKSksc2V0VGltZW91dChmdW5jdGlvbigpe2QoXCJva1wiKX0sMCkpO3JldHVybiBifSxPZDpiYX0pO3loKHRoaXMsXCJjb25uZWN0ZWRcIiwhMSk7dGhpcy5pYT1uZXcgbWM7dGhpcy5ZYT1uZXcgU2UodGhpcyk7dGhpcy5mZD1cbjA7dGhpcy5oZT1udWxsO3RoaXMuSz1uZXcgZGgoe3llOmZ1bmN0aW9uKGEsYixjLGQpe2YudmEuJGUoYSxjLGIsZnVuY3Rpb24oYixjKXt2YXIgZT1kKGIsYyk7U2IoZi5jYSxhLnBhdGgsZSl9KTtyZXR1cm5bXX0sT2Q6ZnVuY3Rpb24oYSxiKXtmLnZhLnVmKGEsYil9fSl9Zz1UZS5wcm90b3R5cGU7Zy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybih0aGlzLkwuU2M/XCJodHRwczovL1wiOlwiaHR0cDovL1wiKSt0aGlzLkwuaG9zdH07Zy5uYW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuTC5uZX07ZnVuY3Rpb24gemgoYSl7YT1hLmdlLmoobmV3IEwoXCIuaW5mby9zZXJ2ZXJUaW1lT2Zmc2V0XCIpKS5IKCl8fDA7cmV0dXJuKG5ldyBEYXRlKS5nZXRUaW1lKCkrYX1mdW5jdGlvbiBBaChhKXthPWE9e3RpbWVzdGFtcDp6aChhKX07YS50aW1lc3RhbXA9YS50aW1lc3RhbXB8fChuZXcgRGF0ZSkuZ2V0VGltZSgpO3JldHVybiBhfVxuZy5HYj1mdW5jdGlvbihhLGIsYyxkKXt0aGlzLmZkKys7dmFyIGU9bmV3IEwoYSk7Yj10aGlzLmhlP3RoaXMuaGUoYSxiKTpiO2E9W107ZD9jPyhiPXBhKGIsZnVuY3Rpb24oYSl7cmV0dXJuIE0oYSl9KSxhPW5oKHRoaXMuSyxlLGIsZCkpOihiPU0oYiksYT1qaCh0aGlzLkssZSxiLGQpKTpjPyhkPXBhKGIsZnVuY3Rpb24oYSl7cmV0dXJuIE0oYSl9KSxhPWloKHRoaXMuSyxlLGQpKTooZD1NKGIpLGE9ZmgodGhpcy5LLG5ldyBBYihwZyxlLGQpKSk7ZD1lOzA8YS5sZW5ndGgmJihkPUJoKHRoaXMsZSkpO1NiKHRoaXMuY2EsZCxhKX07Zy5KYz1mdW5jdGlvbihhKXt5aCh0aGlzLFwiY29ubmVjdGVkXCIsYSk7ITE9PT1hJiZDaCh0aGlzKX07Zy5zZT1mdW5jdGlvbihhKXt2YXIgYj10aGlzO0ljKGEsZnVuY3Rpb24oYSxkKXt5aChiLGQsYSl9KX07XG5mdW5jdGlvbiB5aChhLGIsYyl7Yj1uZXcgTChcIi8uaW5mby9cIitiKTtjPU0oYyk7dmFyIGQ9YS5nZTtkLkpkPWQuSmQuRihiLGMpO2M9ZmgoYS5wZCxuZXcgQWIocGcsYixjKSk7U2IoYS5jYSxiLGMpfWcuSmI9ZnVuY3Rpb24oYSxiLGMsZCl7dGhpcy5mKFwic2V0XCIse3BhdGg6YS50b1N0cmluZygpLHZhbHVlOmIsdWc6Y30pO3ZhciBlPUFoKHRoaXMpO2I9TShiLGMpO3ZhciBlPXBjKGIsZSksZj10aGlzLnZkKyssZT1laCh0aGlzLkssYSxlLGYsITApO09iKHRoaXMuY2EsZSk7dmFyIGg9dGhpczt0aGlzLnZhLnB1dChhLnRvU3RyaW5nKCksYi5IKCEwKSxmdW5jdGlvbihiLGMpe3ZhciBlPVwib2tcIj09PWI7ZXx8TyhcInNldCBhdCBcIithK1wiIGZhaWxlZDogXCIrYik7ZT1oaChoLkssZiwhZSk7U2IoaC5jYSxhLGUpO0RoKGQsYixjKX0pO2U9RWgodGhpcyxhKTtCaCh0aGlzLGUpO1NiKHRoaXMuY2EsZSxbXSl9O1xuZy51cGRhdGU9ZnVuY3Rpb24oYSxiLGMpe3RoaXMuZihcInVwZGF0ZVwiLHtwYXRoOmEudG9TdHJpbmcoKSx2YWx1ZTpifSk7dmFyIGQ9ITAsZT1BaCh0aGlzKSxmPXt9O3IoYixmdW5jdGlvbihhLGIpe2Q9ITE7dmFyIGM9TShhKTtmW2JdPXBjKGMsZSl9KTtpZihkKUUoXCJ1cGRhdGUoKSBjYWxsZWQgd2l0aCBlbXB0eSBkYXRhLiAgRG9uJ3QgZG8gYW55dGhpbmcuXCIpLERoKGMsXCJva1wiKTtlbHNle3ZhciBoPXRoaXMudmQrKyxrPWdoKHRoaXMuSyxhLGYsaCk7T2IodGhpcy5jYSxrKTt2YXIgbD10aGlzO3RoaXMudmEuYWYoYS50b1N0cmluZygpLGIsZnVuY3Rpb24oYixkKXt2YXIgZT1cIm9rXCI9PT1iO2V8fE8oXCJ1cGRhdGUgYXQgXCIrYStcIiBmYWlsZWQ6IFwiK2IpO3ZhciBlPWhoKGwuSyxoLCFlKSxmPWE7MDxlLmxlbmd0aCYmKGY9QmgobCxhKSk7U2IobC5jYSxmLGUpO0RoKGMsYixkKX0pO3IoYixmdW5jdGlvbihiLGMpe3ZhciBkPUVoKGwsYS5uKGMpKTtCaChsLGQpfSk7U2IodGhpcy5jYSxcbmEsW10pfX07ZnVuY3Rpb24gQ2goYSl7YS5mKFwib25EaXNjb25uZWN0RXZlbnRzXCIpO3ZhciBiPUFoKGEpLGM9W107bmMobGMoYS5pYSxiKSxDLGZ1bmN0aW9uKGIsZSl7Yz1jLmNvbmNhdChmaChhLkssbmV3IEFiKHBnLGIsZSkpKTt2YXIgZj1FaChhLGIpO0JoKGEsZil9KTthLmlhPW5ldyBtYztTYihhLmNhLEMsYyl9Zy54ZD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7dGhpcy52YS54ZChhLnRvU3RyaW5nKCksZnVuY3Rpb24oZCxlKXtcIm9rXCI9PT1kJiZaZShjLmlhLGEpO0RoKGIsZCxlKX0pfTtmdW5jdGlvbiBuZihhLGIsYyxkKXt2YXIgZT1NKGMpO2EudmEucGUoYi50b1N0cmluZygpLGUuSCghMCksZnVuY3Rpb24oYyxoKXtcIm9rXCI9PT1jJiZvYyhhLmlhLGIsZSk7RGgoZCxjLGgpfSl9XG5mdW5jdGlvbiBvZihhLGIsYyxkLGUpe3ZhciBmPU0oYyxkKTthLnZhLnBlKGIudG9TdHJpbmcoKSxmLkgoITApLGZ1bmN0aW9uKGMsZCl7XCJva1wiPT09YyYmb2MoYS5pYSxiLGYpO0RoKGUsYyxkKX0pfWZ1bmN0aW9uIHBmKGEsYixjLGQpe3ZhciBlPSEwLGY7Zm9yKGYgaW4gYyllPSExO2U/KEUoXCJvbkRpc2Nvbm5lY3QoKS51cGRhdGUoKSBjYWxsZWQgd2l0aCBlbXB0eSBkYXRhLiAgRG9uJ3QgZG8gYW55dGhpbmcuXCIpLERoKGQsXCJva1wiKSk6YS52YS5jZihiLnRvU3RyaW5nKCksYyxmdW5jdGlvbihlLGYpe2lmKFwib2tcIj09PWUpZm9yKHZhciBsIGluIGMpe3ZhciBtPU0oY1tsXSk7b2MoYS5pYSxiLm4obCksbSl9RGgoZCxlLGYpfSl9ZnVuY3Rpb24gWmYoYSxiLGMpe2M9XCIuaW5mb1wiPT09SihiLnBhdGgpP2EucGQuTmIoYixjKTphLksuTmIoYixjKTtRYihhLmNhLGIucGF0aCxjKX1nLmFiPWZ1bmN0aW9uKCl7dGhpcy5SYSYmdGhpcy5SYS5hYihcInJlcG9faW50ZXJydXB0XCIpfTtcbmcua2M9ZnVuY3Rpb24oKXt0aGlzLlJhJiZ0aGlzLlJhLmtjKFwicmVwb19pbnRlcnJ1cHRcIil9O2cuemU9ZnVuY3Rpb24oYSl7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlKXthPyh0aGlzLlZjfHwodGhpcy5WYz1uZXcgTWIodGhpcy5WYSkpLGE9dGhpcy5WYy5nZXQoKSk6YT10aGlzLlZhLmdldCgpO3ZhciBiPU1hKHVhKGEpLGZ1bmN0aW9uKGEsYil7cmV0dXJuIE1hdGgubWF4KGIubGVuZ3RoLGEpfSwwKSxjO2ZvcihjIGluIGEpe2Zvcih2YXIgZD1hW2NdLGU9Yy5sZW5ndGg7ZTxiKzI7ZSsrKWMrPVwiIFwiO2NvbnNvbGUubG9nKGMrZCl9fX07Zy5BZT1mdW5jdGlvbihhKXtMYih0aGlzLlZhLGEpO3RoaXMub2cucmZbYV09ITB9O2cuZj1mdW5jdGlvbihhKXt2YXIgYj1cIlwiO3RoaXMuUmEmJihiPXRoaXMuUmEuaWQrXCI6XCIpO0UoYixhcmd1bWVudHMpfTtcbmZ1bmN0aW9uIERoKGEsYixjKXthJiZ1YihmdW5jdGlvbigpe2lmKFwib2tcIj09YilhKG51bGwpO2Vsc2V7dmFyIGQ9KGJ8fFwiZXJyb3JcIikudG9VcHBlckNhc2UoKSxlPWQ7YyYmKGUrPVwiOiBcIitjKTtlPUVycm9yKGUpO2UuY29kZT1kO2EoZSl9fSl9O2Z1bmN0aW9uIEZoKGEsYixjLGQsZSl7ZnVuY3Rpb24gZigpe31hLmYoXCJ0cmFuc2FjdGlvbiBvbiBcIitiKTt2YXIgaD1uZXcgVShhLGIpO2guZ2MoXCJ2YWx1ZVwiLGYpO2M9e3BhdGg6Yix1cGRhdGU6YyxHOmQsc3RhdHVzOm51bGwsZWY6cmMoKSxGZTplLG9mOjAsUmQ6ZnVuY3Rpb24oKXtoLkljKFwidmFsdWVcIixmKX0sVGQ6bnVsbCxCYTpudWxsLGNkOm51bGwsZGQ6bnVsbCxlZDpudWxsfTtkPWEuSy5BYShiLHZvaWQgMCl8fEc7Yy5jZD1kO2Q9Yy51cGRhdGUoZC5IKCkpO2lmKG4oZCkpe2VmKFwidHJhbnNhY3Rpb24gZmFpbGVkOiBEYXRhIHJldHVybmVkIFwiLGQsYy5wYXRoKTtjLnN0YXR1cz0xO2U9S2coYS5tYyxiKTt2YXIgaz1lLkNhKCl8fFtdO2sucHVzaChjKTtMZyhlLGspO1wib2JqZWN0XCI9PT10eXBlb2YgZCYmbnVsbCE9PWQmJmNiKGQsXCIucHJpb3JpdHlcIik/KGs9dyhkLFwiLnByaW9yaXR5XCIpLEgoY2YoayksXCJJbnZhbGlkIHByaW9yaXR5IHJldHVybmVkIGJ5IHRyYW5zYWN0aW9uLiBQcmlvcml0eSBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nLCBmaW5pdGUgbnVtYmVyLCBzZXJ2ZXIgdmFsdWUsIG9yIG51bGwuXCIpKTpcbms9KGEuSy5BYShiKXx8RykuQygpLkgoKTtlPUFoKGEpO2Q9TShkLGspO2U9cGMoZCxlKTtjLmRkPWQ7Yy5lZD1lO2MuQmE9YS52ZCsrO2M9ZWgoYS5LLGIsZSxjLkJhLGMuRmUpO1NiKGEuY2EsYixjKTtHaChhKX1lbHNlIGMuUmQoKSxjLmRkPW51bGwsYy5lZD1udWxsLGMuRyYmKGE9bmV3IFcoYy5jZCxuZXcgVShhLGMucGF0aCksTiksYy5HKG51bGwsITEsYSkpfWZ1bmN0aW9uIEdoKGEsYil7dmFyIGM9Ynx8YS5tYztifHxIaChhLGMpO2lmKG51bGwhPT1jLkNhKCkpe3ZhciBkPUloKGEsYyk7SCgwPGQubGVuZ3RoLFwiU2VuZGluZyB6ZXJvIGxlbmd0aCB0cmFuc2FjdGlvbiBxdWV1ZVwiKTtOYShkLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5zdGF0dXN9KSYmSmgoYSxjLnBhdGgoKSxkKX1lbHNlIGMua2QoKSYmYy5PKGZ1bmN0aW9uKGIpe0doKGEsYil9KX1cbmZ1bmN0aW9uIEpoKGEsYixjKXtmb3IodmFyIGQ9TGEoYyxmdW5jdGlvbihhKXtyZXR1cm4gYS5CYX0pLGU9YS5LLkFhKGIsZCl8fEcsZD1lLGU9ZS5oYXNoKCksZj0wO2Y8Yy5sZW5ndGg7ZisrKXt2YXIgaD1jW2ZdO0goMT09PWguc3RhdHVzLFwidHJ5VG9TZW5kVHJhbnNhY3Rpb25RdWV1ZV86IGl0ZW1zIGluIHF1ZXVlIHNob3VsZCBhbGwgYmUgcnVuLlwiKTtoLnN0YXR1cz0yO2gub2YrKzt2YXIgaz1UKGIsaC5wYXRoKSxkPWQuRihrLGguZGQpfWQ9ZC5IKCEwKTthLnZhLnB1dChiLnRvU3RyaW5nKCksZCxmdW5jdGlvbihkKXthLmYoXCJ0cmFuc2FjdGlvbiBwdXQgcmVzcG9uc2VcIix7cGF0aDpiLnRvU3RyaW5nKCksc3RhdHVzOmR9KTt2YXIgZT1bXTtpZihcIm9rXCI9PT1kKXtkPVtdO2ZvcihmPTA7ZjxjLmxlbmd0aDtmKyspe2NbZl0uc3RhdHVzPTM7ZT1lLmNvbmNhdChoaChhLkssY1tmXS5CYSkpO2lmKGNbZl0uRyl7dmFyIGg9Y1tmXS5lZCxrPW5ldyBVKGEsY1tmXS5wYXRoKTtkLnB1c2gocShjW2ZdLkcsXG5udWxsLG51bGwsITAsbmV3IFcoaCxrLE4pKSl9Y1tmXS5SZCgpfUhoKGEsS2coYS5tYyxiKSk7R2goYSk7U2IoYS5jYSxiLGUpO2ZvcihmPTA7ZjxkLmxlbmd0aDtmKyspdWIoZFtmXSl9ZWxzZXtpZihcImRhdGFzdGFsZVwiPT09ZClmb3IoZj0wO2Y8Yy5sZW5ndGg7ZisrKWNbZl0uc3RhdHVzPTQ9PT1jW2ZdLnN0YXR1cz81OjE7ZWxzZSBmb3IoTyhcInRyYW5zYWN0aW9uIGF0IFwiK2IudG9TdHJpbmcoKStcIiBmYWlsZWQ6IFwiK2QpLGY9MDtmPGMubGVuZ3RoO2YrKyljW2ZdLnN0YXR1cz01LGNbZl0uVGQ9ZDtCaChhLGIpfX0sZSl9ZnVuY3Rpb24gQmgoYSxiKXt2YXIgYz1LaChhLGIpLGQ9Yy5wYXRoKCksYz1JaChhLGMpO0xoKGEsYyxkKTtyZXR1cm4gZH1cbmZ1bmN0aW9uIExoKGEsYixjKXtpZigwIT09Yi5sZW5ndGgpe2Zvcih2YXIgZD1bXSxlPVtdLGY9S2EoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEuc3RhdHVzfSksZj1MYShmLGZ1bmN0aW9uKGEpe3JldHVybiBhLkJhfSksaD0wO2g8Yi5sZW5ndGg7aCsrKXt2YXIgaz1iW2hdLGw9VChjLGsucGF0aCksbT0hMSx1O0gobnVsbCE9PWwsXCJyZXJ1blRyYW5zYWN0aW9uc1VuZGVyTm9kZV86IHJlbGF0aXZlUGF0aCBzaG91bGQgbm90IGJlIG51bGwuXCIpO2lmKDU9PT1rLnN0YXR1cyltPSEwLHU9ay5UZCxlPWUuY29uY2F0KGhoKGEuSyxrLkJhLCEwKSk7ZWxzZSBpZigxPT09ay5zdGF0dXMpaWYoMjU8PWsub2YpbT0hMCx1PVwibWF4cmV0cnlcIixlPWUuY29uY2F0KGhoKGEuSyxrLkJhLCEwKSk7ZWxzZXt2YXIgej1hLksuQWEoay5wYXRoLGYpfHxHO2suY2Q9ejt2YXIgRj1iW2hdLnVwZGF0ZSh6LkgoKSk7bihGKT8oZWYoXCJ0cmFuc2FjdGlvbiBmYWlsZWQ6IERhdGEgcmV0dXJuZWQgXCIsRixcbmsucGF0aCksbD1NKEYpLFwib2JqZWN0XCI9PT10eXBlb2YgRiYmbnVsbCE9RiYmY2IoRixcIi5wcmlvcml0eVwiKXx8KGw9bC5mYSh6LkMoKSkpLHo9ay5CYSxGPUFoKGEpLEY9cGMobCxGKSxrLmRkPWwsay5lZD1GLGsuQmE9YS52ZCsrLFFhKGYseiksZT1lLmNvbmNhdChlaChhLkssay5wYXRoLEYsay5CYSxrLkZlKSksZT1lLmNvbmNhdChoaChhLksseiwhMCkpKToobT0hMCx1PVwibm9kYXRhXCIsZT1lLmNvbmNhdChoaChhLkssay5CYSwhMCkpKX1TYihhLmNhLGMsZSk7ZT1bXTttJiYoYltoXS5zdGF0dXM9MyxzZXRUaW1lb3V0KGJbaF0uUmQsTWF0aC5mbG9vcigwKSksYltoXS5HJiYoXCJub2RhdGFcIj09PXU/KGs9bmV3IFUoYSxiW2hdLnBhdGgpLGQucHVzaChxKGJbaF0uRyxudWxsLG51bGwsITEsbmV3IFcoYltoXS5jZCxrLE4pKSkpOmQucHVzaChxKGJbaF0uRyxudWxsLEVycm9yKHUpLCExLG51bGwpKSkpfUhoKGEsYS5tYyk7Zm9yKGg9MDtoPGQubGVuZ3RoO2grKyl1YihkW2hdKTtHaChhKX19XG5mdW5jdGlvbiBLaChhLGIpe2Zvcih2YXIgYyxkPWEubWM7bnVsbCE9PShjPUooYikpJiZudWxsPT09ZC5DYSgpOylkPUtnKGQsYyksYj1EKGIpO3JldHVybiBkfWZ1bmN0aW9uIEloKGEsYil7dmFyIGM9W107TWgoYSxiLGMpO2Muc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBhLmVmLWIuZWZ9KTtyZXR1cm4gY31mdW5jdGlvbiBNaChhLGIsYyl7dmFyIGQ9Yi5DYSgpO2lmKG51bGwhPT1kKWZvcih2YXIgZT0wO2U8ZC5sZW5ndGg7ZSsrKWMucHVzaChkW2VdKTtiLk8oZnVuY3Rpb24oYil7TWgoYSxiLGMpfSl9ZnVuY3Rpb24gSGgoYSxiKXt2YXIgYz1iLkNhKCk7aWYoYyl7Zm9yKHZhciBkPTAsZT0wO2U8Yy5sZW5ndGg7ZSsrKTMhPT1jW2VdLnN0YXR1cyYmKGNbZF09Y1tlXSxkKyspO2MubGVuZ3RoPWQ7TGcoYiwwPGMubGVuZ3RoP2M6bnVsbCl9Yi5PKGZ1bmN0aW9uKGIpe0hoKGEsYil9KX1cbmZ1bmN0aW9uIEVoKGEsYil7dmFyIGM9S2goYSxiKS5wYXRoKCksZD1LZyhhLm1jLGIpO09nKGQsZnVuY3Rpb24oYil7TmgoYSxiKX0pO05oKGEsZCk7TmcoZCxmdW5jdGlvbihiKXtOaChhLGIpfSk7cmV0dXJuIGN9XG5mdW5jdGlvbiBOaChhLGIpe3ZhciBjPWIuQ2EoKTtpZihudWxsIT09Yyl7Zm9yKHZhciBkPVtdLGU9W10sZj0tMSxoPTA7aDxjLmxlbmd0aDtoKyspNCE9PWNbaF0uc3RhdHVzJiYoMj09PWNbaF0uc3RhdHVzPyhIKGY9PT1oLTEsXCJBbGwgU0VOVCBpdGVtcyBzaG91bGQgYmUgYXQgYmVnaW5uaW5nIG9mIHF1ZXVlLlwiKSxmPWgsY1toXS5zdGF0dXM9NCxjW2hdLlRkPVwic2V0XCIpOihIKDE9PT1jW2hdLnN0YXR1cyxcIlVuZXhwZWN0ZWQgdHJhbnNhY3Rpb24gc3RhdHVzIGluIGFib3J0XCIpLGNbaF0uUmQoKSxlPWUuY29uY2F0KGhoKGEuSyxjW2hdLkJhLCEwKSksY1toXS5HJiZkLnB1c2gocShjW2hdLkcsbnVsbCxFcnJvcihcInNldFwiKSwhMSxudWxsKSkpKTstMT09PWY/TGcoYixudWxsKTpjLmxlbmd0aD1mKzE7U2IoYS5jYSxiLnBhdGgoKSxlKTtmb3IoaD0wO2g8ZC5sZW5ndGg7aCsrKXViKGRbaF0pfX07ZnVuY3Rpb24gWWUoKXt0aGlzLmxiPXt9O3RoaXMud2Y9ITF9WWUucHJvdG90eXBlLmFiPWZ1bmN0aW9uKCl7Zm9yKHZhciBhIGluIHRoaXMubGIpdGhpcy5sYlthXS5hYigpfTtZZS5wcm90b3R5cGUua2M9ZnVuY3Rpb24oKXtmb3IodmFyIGEgaW4gdGhpcy5sYil0aGlzLmxiW2FdLmtjKCl9O1llLnByb3RvdHlwZS5hZT1mdW5jdGlvbihhKXt0aGlzLndmPWF9O2NhKFllKTtZZS5wcm90b3R5cGUuaW50ZXJydXB0PVllLnByb3RvdHlwZS5hYjtZZS5wcm90b3R5cGUucmVzdW1lPVllLnByb3RvdHlwZS5rYzt2YXIgWj17fTtaLm5jPVBnO1ouRGF0YUNvbm5lY3Rpb249Wi5uYztQZy5wcm90b3R5cGUubmc9ZnVuY3Rpb24oYSxiKXt0aGlzLnVhKFwicVwiLHtwOmF9LGIpfTtaLm5jLnByb3RvdHlwZS5zaW1wbGVMaXN0ZW49Wi5uYy5wcm90b3R5cGUubmc7UGcucHJvdG90eXBlLkhmPWZ1bmN0aW9uKGEsYil7dGhpcy51YShcImVjaG9cIix7ZDphfSxiKX07Wi5uYy5wcm90b3R5cGUuZWNobz1aLm5jLnByb3RvdHlwZS5IZjtQZy5wcm90b3R5cGUuaW50ZXJydXB0PVBnLnByb3RvdHlwZS5hYjtaLnpmPUNlO1ouUmVhbFRpbWVDb25uZWN0aW9uPVouemY7Q2UucHJvdG90eXBlLnNlbmRSZXF1ZXN0PUNlLnByb3RvdHlwZS51YTtDZS5wcm90b3R5cGUuY2xvc2U9Q2UucHJvdG90eXBlLmNsb3NlO1xuWi5SZj1mdW5jdGlvbihhKXt2YXIgYj1QZy5wcm90b3R5cGUucHV0O1BnLnByb3RvdHlwZS5wdXQ9ZnVuY3Rpb24oYyxkLGUsZil7bihmKSYmKGY9YSgpKTtiLmNhbGwodGhpcyxjLGQsZSxmKX07cmV0dXJuIGZ1bmN0aW9uKCl7UGcucHJvdG90eXBlLnB1dD1ifX07Wi5oaWphY2tIYXNoPVouUmY7Wi55Zj1IYjtaLkNvbm5lY3Rpb25UYXJnZXQ9Wi55ZjtaLmphPWZ1bmN0aW9uKGEpe3JldHVybiBhLmphKCl9O1oucXVlcnlJZGVudGlmaWVyPVouamE7Wi5VZj1mdW5jdGlvbihhKXtyZXR1cm4gYS51LlJhLiR9O1oubGlzdGVucz1aLlVmO1ouYWU9ZnVuY3Rpb24oYSl7WWUuVmIoKS5hZShhKX07Wi5mb3JjZVJlc3RDbGllbnQ9Wi5hZTtaLkNvbnRleHQ9WWU7ZnVuY3Rpb24gVShhLGIpe2lmKCEoYSBpbnN0YW5jZW9mIFRlKSl0aHJvdyBFcnJvcihcIm5ldyBGaXJlYmFzZSgpIG5vIGxvbmdlciBzdXBwb3J0ZWQgLSB1c2UgYXBwLmRhdGFiYXNlKCkuXCIpO1guY2FsbCh0aGlzLGEsYixmZSwhMSk7dGhpcy50aGVuPXZvaWQgMDt0aGlzW1wiY2F0Y2hcIl09dm9pZCAwfWxhKFUsWCk7Zz1VLnByb3RvdHlwZTtnLmdldEtleT1mdW5jdGlvbigpe3goXCJGaXJlYmFzZS5rZXlcIiwwLDAsYXJndW1lbnRzLmxlbmd0aCk7cmV0dXJuIHRoaXMucGF0aC5lKCk/bnVsbDpCZCh0aGlzLnBhdGgpfTtcbmcubj1mdW5jdGlvbihhKXt4KFwiRmlyZWJhc2UuY2hpbGRcIiwxLDEsYXJndW1lbnRzLmxlbmd0aCk7aWYoZ2EoYSkpYT1TdHJpbmcoYSk7ZWxzZSBpZighKGEgaW5zdGFuY2VvZiBMKSlpZihudWxsPT09Sih0aGlzLnBhdGgpKXt2YXIgYj1hO2ImJihiPWIucmVwbGFjZSgvXlxcLypcXC5pbmZvKFxcL3wkKS8sXCIvXCIpKTtsZihcIkZpcmViYXNlLmNoaWxkXCIsYil9ZWxzZSBsZihcIkZpcmViYXNlLmNoaWxkXCIsYSk7cmV0dXJuIG5ldyBVKHRoaXMudSx0aGlzLnBhdGgubihhKSl9O2cuZ2V0UGFyZW50PWZ1bmN0aW9uKCl7eChcIkZpcmViYXNlLnBhcmVudFwiLDAsMCxhcmd1bWVudHMubGVuZ3RoKTt2YXIgYT10aGlzLnBhdGgucGFyZW50KCk7cmV0dXJuIG51bGw9PT1hP251bGw6bmV3IFUodGhpcy51LGEpfTtcbmcuT2Y9ZnVuY3Rpb24oKXt4KFwiRmlyZWJhc2UucmVmXCIsMCwwLGFyZ3VtZW50cy5sZW5ndGgpO2Zvcih2YXIgYT10aGlzO251bGwhPT1hLmdldFBhcmVudCgpOylhPWEuZ2V0UGFyZW50KCk7cmV0dXJuIGF9O2cuR2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy51LllhfTtnLnNldD1mdW5jdGlvbihhLGIpe3goXCJGaXJlYmFzZS5zZXRcIiwxLDIsYXJndW1lbnRzLmxlbmd0aCk7bWYoXCJGaXJlYmFzZS5zZXRcIix0aGlzLnBhdGgpO2RmKFwiRmlyZWJhc2Uuc2V0XCIsYSx0aGlzLnBhdGgsITEpO0EoXCJGaXJlYmFzZS5zZXRcIiwyLGIsITApO3ZhciBjPW5ldyBoYjt0aGlzLnUuSmIodGhpcy5wYXRoLGEsbnVsbCxpYihjLGIpKTtyZXR1cm4gYy5yYX07XG5nLnVwZGF0ZT1mdW5jdGlvbihhLGIpe3goXCJGaXJlYmFzZS51cGRhdGVcIiwxLDIsYXJndW1lbnRzLmxlbmd0aCk7bWYoXCJGaXJlYmFzZS51cGRhdGVcIix0aGlzLnBhdGgpO2lmKGVhKGEpKXtmb3IodmFyIGM9e30sZD0wO2Q8YS5sZW5ndGg7KytkKWNbXCJcIitkXT1hW2RdO2E9YztPKFwiUGFzc2luZyBhbiBBcnJheSB0byBGaXJlYmFzZS51cGRhdGUoKSBpcyBkZXByZWNhdGVkLiBVc2Ugc2V0KCkgaWYgeW91IHdhbnQgdG8gb3ZlcndyaXRlIHRoZSBleGlzdGluZyBkYXRhLCBvciBhbiBPYmplY3Qgd2l0aCBpbnRlZ2VyIGtleXMgaWYgeW91IHJlYWxseSBkbyB3YW50IHRvIG9ubHkgdXBkYXRlIHNvbWUgb2YgdGhlIGNoaWxkcmVuLlwiKX1nZihcIkZpcmViYXNlLnVwZGF0ZVwiLGEsdGhpcy5wYXRoKTtBKFwiRmlyZWJhc2UudXBkYXRlXCIsMixiLCEwKTtjPW5ldyBoYjt0aGlzLnUudXBkYXRlKHRoaXMucGF0aCxhLGliKGMsYikpO3JldHVybiBjLnJhfTtcbmcuSmI9ZnVuY3Rpb24oYSxiLGMpe3goXCJGaXJlYmFzZS5zZXRXaXRoUHJpb3JpdHlcIiwyLDMsYXJndW1lbnRzLmxlbmd0aCk7bWYoXCJGaXJlYmFzZS5zZXRXaXRoUHJpb3JpdHlcIix0aGlzLnBhdGgpO2RmKFwiRmlyZWJhc2Uuc2V0V2l0aFByaW9yaXR5XCIsYSx0aGlzLnBhdGgsITEpO2hmKFwiRmlyZWJhc2Uuc2V0V2l0aFByaW9yaXR5XCIsMixiKTtBKFwiRmlyZWJhc2Uuc2V0V2l0aFByaW9yaXR5XCIsMyxjLCEwKTtpZihcIi5sZW5ndGhcIj09PXRoaXMuZ2V0S2V5KCl8fFwiLmtleXNcIj09PXRoaXMuZ2V0S2V5KCkpdGhyb3dcIkZpcmViYXNlLnNldFdpdGhQcmlvcml0eSBmYWlsZWQ6IFwiK3RoaXMuZ2V0S2V5KCkrXCIgaXMgYSByZWFkLW9ubHkgb2JqZWN0LlwiO3ZhciBkPW5ldyBoYjt0aGlzLnUuSmIodGhpcy5wYXRoLGEsYixpYihkLGMpKTtyZXR1cm4gZC5yYX07XG5nLnJlbW92ZT1mdW5jdGlvbihhKXt4KFwiRmlyZWJhc2UucmVtb3ZlXCIsMCwxLGFyZ3VtZW50cy5sZW5ndGgpO21mKFwiRmlyZWJhc2UucmVtb3ZlXCIsdGhpcy5wYXRoKTtBKFwiRmlyZWJhc2UucmVtb3ZlXCIsMSxhLCEwKTtyZXR1cm4gdGhpcy5zZXQobnVsbCxhKX07XG5nLnRyYW5zYWN0aW9uPWZ1bmN0aW9uKGEsYixjKXt4KFwiRmlyZWJhc2UudHJhbnNhY3Rpb25cIiwxLDMsYXJndW1lbnRzLmxlbmd0aCk7bWYoXCJGaXJlYmFzZS50cmFuc2FjdGlvblwiLHRoaXMucGF0aCk7QShcIkZpcmViYXNlLnRyYW5zYWN0aW9uXCIsMSxhLCExKTtBKFwiRmlyZWJhc2UudHJhbnNhY3Rpb25cIiwyLGIsITApO2lmKG4oYykmJlwiYm9vbGVhblwiIT10eXBlb2YgYyl0aHJvdyBFcnJvcih5KFwiRmlyZWJhc2UudHJhbnNhY3Rpb25cIiwzLCEwKStcIm11c3QgYmUgYSBib29sZWFuLlwiKTtpZihcIi5sZW5ndGhcIj09PXRoaXMuZ2V0S2V5KCl8fFwiLmtleXNcIj09PXRoaXMuZ2V0S2V5KCkpdGhyb3dcIkZpcmViYXNlLnRyYW5zYWN0aW9uIGZhaWxlZDogXCIrdGhpcy5nZXRLZXkoKStcIiBpcyBhIHJlYWQtb25seSBvYmplY3QuXCI7XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBjJiYoYz0hMCk7dmFyIGQ9bmV3IGhiO2hhKGIpJiZqYihkLnJhKTtGaCh0aGlzLnUsdGhpcy5wYXRoLGEsZnVuY3Rpb24oYSxjLGgpe2E/XG5kLnJlamVjdChhKTpkLnJlc29sdmUobmV3IHBiKGMsaCkpO2hhKGIpJiZiKGEsYyxoKX0sYyk7cmV0dXJuIGQucmF9O2cua2c9ZnVuY3Rpb24oYSxiKXt4KFwiRmlyZWJhc2Uuc2V0UHJpb3JpdHlcIiwxLDIsYXJndW1lbnRzLmxlbmd0aCk7bWYoXCJGaXJlYmFzZS5zZXRQcmlvcml0eVwiLHRoaXMucGF0aCk7aGYoXCJGaXJlYmFzZS5zZXRQcmlvcml0eVwiLDEsYSk7QShcIkZpcmViYXNlLnNldFByaW9yaXR5XCIsMixiLCEwKTt2YXIgYz1uZXcgaGI7dGhpcy51LkpiKHRoaXMucGF0aC5uKFwiLnByaW9yaXR5XCIpLGEsbnVsbCxpYihjLGIpKTtyZXR1cm4gYy5yYX07XG5nLnB1c2g9ZnVuY3Rpb24oYSxiKXt4KFwiRmlyZWJhc2UucHVzaFwiLDAsMixhcmd1bWVudHMubGVuZ3RoKTttZihcIkZpcmViYXNlLnB1c2hcIix0aGlzLnBhdGgpO2RmKFwiRmlyZWJhc2UucHVzaFwiLGEsdGhpcy5wYXRoLCEwKTtBKFwiRmlyZWJhc2UucHVzaFwiLDIsYiwhMCk7dmFyIGM9emgodGhpcy51KSxkPXVmKGMpLGM9dGhpcy5uKGQpO2lmKG51bGwhPWEpe3ZhciBlPXRoaXMsZj1jLnNldChhLGIpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZS5uKGQpfSk7Yy50aGVuPXEoZi50aGVuLGYpO2NbXCJjYXRjaFwiXT1xKGYudGhlbixmLHZvaWQgMCk7aGEoYikmJmpiKGYpfXJldHVybiBjfTtnLmliPWZ1bmN0aW9uKCl7bWYoXCJGaXJlYmFzZS5vbkRpc2Nvbm5lY3RcIix0aGlzLnBhdGgpO3JldHVybiBuZXcgVih0aGlzLnUsdGhpcy5wYXRoKX07VS5wcm90b3R5cGUuY2hpbGQ9VS5wcm90b3R5cGUubjtVLnByb3RvdHlwZS5zZXQ9VS5wcm90b3R5cGUuc2V0O1UucHJvdG90eXBlLnVwZGF0ZT1VLnByb3RvdHlwZS51cGRhdGU7XG5VLnByb3RvdHlwZS5zZXRXaXRoUHJpb3JpdHk9VS5wcm90b3R5cGUuSmI7VS5wcm90b3R5cGUucmVtb3ZlPVUucHJvdG90eXBlLnJlbW92ZTtVLnByb3RvdHlwZS50cmFuc2FjdGlvbj1VLnByb3RvdHlwZS50cmFuc2FjdGlvbjtVLnByb3RvdHlwZS5zZXRQcmlvcml0eT1VLnByb3RvdHlwZS5rZztVLnByb3RvdHlwZS5wdXNoPVUucHJvdG90eXBlLnB1c2g7VS5wcm90b3R5cGUub25EaXNjb25uZWN0PVUucHJvdG90eXBlLmliO0xjKFUucHJvdG90eXBlLFwiZGF0YWJhc2VcIixVLnByb3RvdHlwZS5HZik7TGMoVS5wcm90b3R5cGUsXCJrZXlcIixVLnByb3RvdHlwZS5nZXRLZXkpO0xjKFUucHJvdG90eXBlLFwicGFyZW50XCIsVS5wcm90b3R5cGUuZ2V0UGFyZW50KTtMYyhVLnByb3RvdHlwZSxcInJvb3RcIixVLnByb3RvdHlwZS5PZik7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBmaXJlYmFzZSl0aHJvdyBFcnJvcihcIkNhbm5vdCBpbnN0YWxsIEZpcmViYXNlIERhdGFiYXNlIC0gYmUgc3VyZSB0byBsb2FkIGZpcmViYXNlLWFwcC5qcyBmaXJzdC5cIik7XG50cnl7ZmlyZWJhc2UuSU5URVJOQUwucmVnaXN0ZXJTZXJ2aWNlKFwiZGF0YWJhc2VcIixmdW5jdGlvbihhKXt2YXIgYj1ZZS5WYigpLGM9YS5vcHRpb25zLmRhdGFiYXNlVVJMO24oYyl8fEFjKFwiQ2FuJ3QgZGV0ZXJtaW5lIEZpcmViYXNlIERhdGFiYXNlIFVSTC4gIEJlIHN1cmUgdG8gaW5jbHVkZSBkYXRhYmFzZVVSTCBvcHRpb24gd2hlbiBjYWxsaW5nIGZpcmViYXNlLmludGlhbGl6ZUFwcCgpLlwiKTt2YXIgZD1CYyhjKSxjPWQuamM7WGUoXCJJbnZhbGlkIEZpcmViYXNlIERhdGFiYXNlIFVSTFwiLGQpO2QucGF0aC5lKCl8fEFjKFwiRGF0YWJhc2UgVVJMIG11c3QgcG9pbnQgdG8gdGhlIHJvb3Qgb2YgYSBGaXJlYmFzZSBEYXRhYmFzZSAobm90IGluY2x1ZGluZyBhIGNoaWxkIHBhdGgpLlwiKTsoZD13KGIubGIsYS5uYW1lKSkmJkFjKFwiRklSRUJBU0UgSU5URVJOQUwgRVJST1I6IERhdGFiYXNlIGluaXRpYWxpemVkIG11bHRpcGxlIHRpbWVzLlwiKTtkPW5ldyBUZShjLGIud2YsYSk7Yi5sYlthLm5hbWVdPVxuZDtyZXR1cm4gZC5ZYX0se1JlZmVyZW5jZTpVLFF1ZXJ5OlgsRGF0YWJhc2U6U2UsZW5hYmxlTG9nZ2luZzp4YyxJTlRFUk5BTDpZLFRFU1RfQUNDRVNTOlosU2VydmVyVmFsdWU6VmV9KX1jYXRjaChPaCl7QWMoXCJGYWlsZWQgdG8gcmVnaXN0ZXIgdGhlIEZpcmViYXNlIERhdGFiYXNlIFNlcnZpY2UgKFwiK09oK1wiKVwiKX07fSkoKTtcblxufSkuY2FsbChnbG9iYWwpO1xubW9kdWxlLmV4cG9ydHMgPSBmaXJlYmFzZS5kYXRhYmFzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9maXJlYmFzZS9kYXRhYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogIEZpcmViYXNlIGxpYnJhcmllcyBmb3IgYnJvd3NlciAtIG5wbSBwYWNrYWdlLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqICAgZmlyZWJhc2UgPSByZXF1aXJlKCdmaXJlYmFzZScpO1xuICovXG52YXIgZmlyZWJhc2UgPSByZXF1aXJlKCcuL2FwcCcpO1xucmVxdWlyZSgnLi9hdXRoJyk7XG5yZXF1aXJlKCcuL2RhdGFiYXNlJyk7XG5yZXF1aXJlKCcuL3N0b3JhZ2UnKTtcbnJlcXVpcmUoJy4vbWVzc2FnaW5nJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZpcmViYXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpcmViYXNlL2ZpcmViYXNlLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZmlyZWJhc2UgPSByZXF1aXJlKCcuL2FwcCcpO1xuKGZ1bmN0aW9uKCl7XG4vKiEgQGxpY2Vuc2UgRmlyZWJhc2UgdjMuNi41XG4gICAgQnVpbGQ6IDMuNi41LXJjLjFcbiAgICBUZXJtczogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL3Rlcm1zLyAqL1xuKGZ1bmN0aW9uKCl7dmFyIGY9ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKCl7fWMucHJvdG90eXBlPWIucHJvdG90eXBlO2EucHJvdG90eXBlPW5ldyBjO2Zvcih2YXIgZCBpbiBiKWlmKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKXt2YXIgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGIsZCk7ZSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsZCxlKX1lbHNlIGFbZF09YltkXX0sZz10aGlzLGg9ZnVuY3Rpb24oYSl7dmFyIGI9dHlwZW9mIGE7aWYoXCJvYmplY3RcIj09YilpZihhKXtpZihhIGluc3RhbmNlb2YgQXJyYXkpcmV0dXJuXCJhcnJheVwiO2lmKGEgaW5zdGFuY2VvZiBPYmplY3QpcmV0dXJuIGI7dmFyIGM9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpO2lmKFwiW29iamVjdCBXaW5kb3ddXCI9PWMpcmV0dXJuXCJvYmplY3RcIjtpZihcIltvYmplY3QgQXJyYXldXCI9PWN8fFwibnVtYmVyXCI9PXR5cGVvZiBhLmxlbmd0aCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuc3BsaWNlJiZcInVuZGVmaW5lZFwiIT1cbnR5cGVvZiBhLnByb3BlcnR5SXNFbnVtZXJhYmxlJiYhYS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcInNwbGljZVwiKSlyZXR1cm5cImFycmF5XCI7aWYoXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT1jfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5jYWxsJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5wcm9wZXJ0eUlzRW51bWVyYWJsZSYmIWEucHJvcGVydHlJc0VudW1lcmFibGUoXCJjYWxsXCIpKXJldHVyblwiZnVuY3Rpb25cIn1lbHNlIHJldHVyblwibnVsbFwiO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT1iJiZcInVuZGVmaW5lZFwiPT10eXBlb2YgYS5jYWxsKXJldHVyblwib2JqZWN0XCI7cmV0dXJuIGJ9LGs9ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKCl7fWMucHJvdG90eXBlPWIucHJvdG90eXBlO2EuQj1iLnByb3RvdHlwZTthLnByb3RvdHlwZT1uZXcgYzthLnU9ZnVuY3Rpb24oYSxjLG4pe2Zvcih2YXIgZD1BcnJheShhcmd1bWVudHMubGVuZ3RoLTIpLGU9MjtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKWRbZS0yXT1hcmd1bWVudHNbZV07XG5yZXR1cm4gYi5wcm90b3R5cGVbY10uYXBwbHkoYSxkKX19O3ZhciBtPXt9LHA9KG1bXCJvbmx5LWF2YWlsYWJsZS1pbi13aW5kb3dcIl09XCJUaGlzIG1ldGhvZCBpcyBhdmFpbGFibGUgaW4gYSBXaW5kb3cgY29udGV4dC5cIixtW1wib25seS1hdmFpbGFibGUtaW4tc3dcIl09XCJUaGlzIG1ldGhvZCBpcyBhdmFpbGFibGUgaW4gYSBzZXJ2aWNlIHdvcmtlciBjb250ZXh0LlwiLG1bXCJzaG91bGQtYmUtb3ZlcnJpZGVuXCJdPVwiVGhpcyBtZXRob2Qgc2hvdWxkIGJlIG92ZXJyaWRlbiBieSBleHRlbmRlZCBjbGFzc2VzLlwiLG1bXCJiYWQtc2VuZGVyLWlkXCJdPVwiUGxlYXNlIGVuc3VyZSB0aGF0ICdtZXNzYWdpbmdTZW5kZXJJZCcgaXMgc2V0IGNvcnJlY3RseSBpbiB0aGUgb3B0aW9ucyBwYXNzZWQgaW50byBmaXJlYmFzZS5pbml0aWFsaXplQXBwKCkuXCIsbVtcInBlcm1pc3Npb24tZGVmYXVsdFwiXT1cIlRoZSByZXF1aXJlZCBwZXJtaXNzaW9ucyB3ZXJlIG5vdCBncmFudGVkIGFuZCBkaXNtaXNzZWQgaW5zdGVhZC5cIixtW1wicGVybWlzc2lvbi1ibG9ja2VkXCJdPVwiVGhlIHJlcXVpcmVkIHBlcm1pc3Npb25zIHdlcmUgbm90IGdyYW50ZWQgYW5kIGJsb2NrZWQgaW5zdGVhZC5cIixcbm1bXCJ1bnN1cHBvcnRlZC1icm93c2VyXCJdPVwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgQVBJJ3MgcmVxdWlyZWQgdG8gdXNlIHRoZSBmaXJlYmFzZSBTREsuXCIsbVtcIm5vdGlmaWNhdGlvbnMtYmxvY2tlZFwiXT1cIk5vdGlmaWNhdGlvbnMgaGF2ZSBiZWVuIGJsb2NrZWQuXCIsbVtcImZhaWxlZC1zZXJ2aWNld29ya2VyLXJlZ2lzdHJhdGlvblwiXT1cIldlIGFyZSB1bmFibGUgdG8gcmVnaXN0ZXIgdGhlIGRlZmF1bHQgc2VydmljZSB3b3JrZXIuIHskYnJvd3NlckVycm9yTWVzc2FnZX1cIixtW1wic3ctcmVnaXN0cmF0aW9uLWV4cGVjdGVkXCJdPVwiQSBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gd2FzIHRoZSBleHBlY3RlZCBpbnB1dC5cIixtW1wiZ2V0LXN1YnNjcmlwdGlvbi1mYWlsZWRcIl09XCJUaGVyZSB3YXMgYW4gZXJyb3Igd2hlbiB0cnlpbmcgdG8gZ2V0IGFueSBleGlzdGluZyBQdXNoIFN1YnNjcmlwdGlvbnMuXCIsbVtcImludmFsaWQtc2F2ZWQtdG9rZW5cIl09XCJVbmFibGUgdG8gYWNjZXNzIGRldGFpbHMgb2YgdGhlIHNhdmVkIHRva2VuLlwiLFxubVtcInN3LXJlZy1yZWR1bmRhbnRcIl09XCJUaGUgc2VydmljZSB3b3JrZXIgYmVpbmcgdXNlZCBmb3IgcHVzaCB3YXMgbWFkZSByZWR1bmRhbnQuXCIsbVtcInRva2VuLXN1YnNjcmliZS1mYWlsZWRcIl09XCJBIHByb2JsZW0gb2NjdXJlZCB3aGlsZSBzdWJzY3JpYmluZyB0aGUgdXNlciB0byBGQ006IHskbWVzc2FnZX1cIixtW1widG9rZW4tc3Vic2NyaWJlLW5vLXRva2VuXCJdPVwiRkNNIHJldHVybmVkIG5vIHRva2VuIHdoZW4gc3Vic2NyaWJpbmcgdGhlIHVzZXIgdG8gcHVzaC5cIixtW1widG9rZW4tc3Vic2NyaWJlLW5vLXB1c2gtc2V0XCJdPVwiRkNNIHJldHVybmVkIGFuIGludmFsaWQgcmVzcG9uc2Ugd2hlbiBnZXR0aW5nIGFuIEZDTSB0b2tlbi5cIixtW1widXNlLXN3LWJlZm9yZS1nZXQtdG9rZW5cIl09XCJZb3UgbXVzdCBjYWxsIHVzZVNlcnZpY2VXb3JrZXIoKSBiZWZvcmUgY2FsbGluZyBnZXRUb2tlbigpIHRvIGVuc3VyZSB5b3VyIHNlcnZpY2Ugd29ya2VyIGlzIHVzZWQuXCIsbVtcImludmFsaWQtZGVsZXRlLXRva2VuXCJdPVxuXCJZb3UgbXVzdCBwYXNzIGEgdmFsaWQgdG9rZW4gaW50byBkZWxldGVUb2tlbigpLCBpLmUuIHRoZSB0b2tlbiBmcm9tIGdldFRva2VuKCkuXCIsbVtcImRlbGV0ZS10b2tlbi1ub3QtZm91bmRcIl09XCJUaGUgZGVsZXRpb24gYXR0ZW1wdCBmb3IgdG9rZW4gY291bGQgbm90IGJlIHBlcmZvcm1lZCBhcyB0aGUgdG9rZW4gd2FzIG5vdCBmb3VuZC5cIixtW1wiYmctaGFuZGxlci1mdW5jdGlvbi1leHBlY3RlZFwiXT1cIlRoZSBpbnB1dCB0byBzZXRCYWNrZ3JvdW5kTWVzc2FnZUhhbmRsZXIoKSBtdXN0IGJlIGEgZnVuY3Rpb24uXCIsbVtcIm5vLXdpbmRvdy1jbGllbnQtdG8tbXNnXCJdPVwiQW4gYXR0ZW1wdCB3YXMgbWFkZSB0byBtZXNzYWdlIGEgbm9uLWV4aXN0YW50IHdpbmRvdyBjbGllbnQuXCIsbVtcInVuYWJsZS10by1yZXN1YnNjcmliZVwiXT1cIlRoZXJlIHdhcyBhbiBlcnJvciB3aGlsZSByZS1zdWJzY3JpYmluZyB0aGUgRkNNIHRva2VuIGZvciBwdXNoIG1lc3NhZ2luZy4gV2lsbCBoYXZlIHRvIHJlc3Vic2NyaWJlIHRoZSB1c2VyIG9uIG5leHQgdmlzaXQuIHskbWVzc2FnZX1cIixcbm1bXCJuby1mY20tdG9rZW4tZm9yLXJlc3Vic2NyaWJlXCJdPVwiQ291bGQgbm90IGZpbmQgYW4gRkNNIHRva2VuIGFuZCBhcyBhIHJlc3VsdCwgdW5hYmxlIHRvIHJlc3Vic2NyaWJlLiBXaWxsIGhhdmUgdG8gcmVzdWJzY3JpYmUgdGhlIHVzZXIgb24gbmV4dCB2aXNpdC5cIixtW1wiZmFpbGVkLXRvLWRlbGV0ZS10b2tlblwiXT1cIlVuYWJsZSB0byBkZWxldGUgdGhlIGN1cnJlbnRseSBzYXZlZCB0b2tlbi5cIixtW1wibm8tc3ctaW4tcmVnXCJdPVwiRXZlbiB0aG91Z2ggdGhlIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bCwgdGhlcmUgd2FzIGEgcHJvYmxlbSBhY2Nlc3NpbmcgdGhlIHNlcnZpY2Ugd29ya2VyIGl0c2VsZi5cIixtW1wiaW5jb3JyZWN0LWdjbS1zZW5kZXItaWRcIl09XCJQbGVhc2UgY2hhbmdlIHlvdXIgd2ViIGFwcCBtYW5pZmVzdCdzICdnY21fc2VuZGVyX2lkJyB2YWx1ZSB0byAnMTAzOTUzODAwNTA3JyB0byB1c2UgRmlyZWJhc2UgbWVzc2FnaW5nLlwiLG0pO3ZhciBxPXt1c2VyVmlzaWJsZU9ubHk6ITAsYXBwbGljYXRpb25TZXJ2ZXJLZXk6bmV3IFVpbnQ4QXJyYXkoWzQsNTEsMTQ4LDI0NywyMjMsMTYxLDIzNSwxNzcsMjIwLDMsMTYyLDk0LDIxLDExMywyMTksNzIsMjExLDQ2LDIzNywyMzcsMTc4LDUyLDIxOSwxODMsNzEsNTgsMTIsMTQzLDE5NiwyMDQsMjI1LDExMSw2MCwxNDAsMTMyLDIyMywxNzEsMTgyLDEwMiw2MiwyNDIsMTIsMjEyLDEzOSwyNTQsMjI3LDI0OSwxMTgsNDcsMjAsMjgsOTksOCwxMDYsMTExLDQ1LDE3NywyNiwxNDksMTc2LDIwNiw1NSwxOTIsMTU2LDExMF0pfTt2YXIgcj1mdW5jdGlvbihhLGIpe3ZhciBjPXt9O3JldHVybiBjW1wiZmlyZWJhc2UtbWVzc2FnaW5nLW1zZy10eXBlXCJdPWEsY1tcImZpcmViYXNlLW1lc3NhZ2luZy1tc2ctZGF0YVwiXT1iLGN9O3ZhciB1PWZ1bmN0aW9uKGEpe2lmKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKUVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsdSk7ZWxzZXt2YXIgYj1FcnJvcigpLnN0YWNrO2ImJih0aGlzLnN0YWNrPWIpfWEmJih0aGlzLm1lc3NhZ2U9U3RyaW5nKGEpKX07ayh1LEVycm9yKTt2YXIgdj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1hLnNwbGl0KFwiJXNcIiksZD1cIlwiLGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO2UubGVuZ3RoJiYxPGMubGVuZ3RoOylkKz1jLnNoaWZ0KCkrZS5zaGlmdCgpO3JldHVybiBkK2Muam9pbihcIiVzXCIpfTt2YXIgdz1mdW5jdGlvbihhLGIpe2IudW5zaGlmdChhKTt1LmNhbGwodGhpcyx2LmFwcGx5KG51bGwsYikpO2Iuc2hpZnQoKX07ayh3LHUpO3ZhciB4PWZ1bmN0aW9uKGEsYixjKXtpZighYSl7dmFyIGQ9XCJBc3NlcnRpb24gZmFpbGVkXCI7aWYoYil2YXIgZD1kKyhcIjogXCIrYiksZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMik7dGhyb3cgbmV3IHcoXCJcIitkLGV8fFtdKTt9fTt2YXIgeT1udWxsO3ZhciBBPWZ1bmN0aW9uKGEpe2E9bmV3IFVpbnQ4QXJyYXkoYSk7dmFyIGI9aChhKTt4KFwiYXJyYXlcIj09Ynx8XCJvYmplY3RcIj09YiYmXCJudW1iZXJcIj09dHlwZW9mIGEubGVuZ3RoLFwiZW5jb2RlQnl0ZUFycmF5IHRha2VzIGFuIGFycmF5IGFzIGEgcGFyYW1ldGVyXCIpO2lmKCF5KWZvcih5PXt9LGI9MDs2NT5iO2IrKyl5W2JdPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIi5jaGFyQXQoYik7Zm9yKHZhciBiPXksYz1bXSxkPTA7ZDxhLmxlbmd0aDtkKz0zKXt2YXIgZT1hW2RdLG49ZCsxPGEubGVuZ3RoLGw9bj9hW2QrMV06MCx6PWQrMjxhLmxlbmd0aCx0PXo/YVtkKzJdOjAsTT1lPj4yLGU9KGUmMyk8PDR8bD4+NCxsPShsJjE1KTw8Mnx0Pj42LHQ9dCY2Mzt6fHwodD02NCxufHwobD02NCkpO2MucHVzaChiW01dLGJbZV0sYltsXSxiW3RdKX1yZXR1cm4gYy5qb2luKFwiXCIpLnJlcGxhY2UoL1xcKy9nLFwiLVwiKS5yZXBsYWNlKC9cXC8vZyxcblwiX1wiKS5yZXBsYWNlKC89KyQvLFwiXCIpfTt2YXIgQj1uZXcgZmlyZWJhc2UuSU5URVJOQUwuRXJyb3JGYWN0b3J5KFwibWVzc2FnaW5nXCIsXCJNZXNzYWdpbmdcIixwKSxDPWZ1bmN0aW9uKCl7dGhpcy5hPW51bGx9LEQ9ZnVuY3Rpb24oYSl7aWYoYS5hKXJldHVybiBhLmE7YS5hPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYyl7dmFyIGI9Zy5pbmRleGVkREIub3BlbihcImZjbV90b2tlbl9kZXRhaWxzX2RiXCIsMSk7Yi5vbmVycm9yPWZ1bmN0aW9uKGEpe2MoYS50YXJnZXQuZXJyb3IpfTtiLm9uc3VjY2Vzcz1mdW5jdGlvbihiKXthKGIudGFyZ2V0LnJlc3VsdCl9O2Iub251cGdyYWRlbmVlZGVkPWZ1bmN0aW9uKGEpe2E9YS50YXJnZXQucmVzdWx0LmNyZWF0ZU9iamVjdFN0b3JlKFwiZmNtX3Rva2VuX29iamVjdF9TdG9yZVwiLHtrZXlQYXRoOlwic3dTY29wZVwifSk7YS5jcmVhdGVJbmRleChcImZjbVNlbmRlcklkXCIsXCJmY21TZW5kZXJJZFwiLHt1bmlxdWU6ITF9KTthLmNyZWF0ZUluZGV4KFwiZmNtVG9rZW5cIixcImZjbVRva2VuXCIse3VuaXF1ZTohMH0pfX0pO1xucmV0dXJuIGEuYX0sRT1mdW5jdGlvbihhKXthLmE/YS5hLnRoZW4oZnVuY3Rpb24oYil7Yi5jbG9zZSgpO2EuYT1udWxsfSk6UHJvbWlzZS5yZXNvbHZlKCl9LEY9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gRChhKS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihjLGUpe3ZhciBkPWEudHJhbnNhY3Rpb24oW1wiZmNtX3Rva2VuX29iamVjdF9TdG9yZVwiXSkub2JqZWN0U3RvcmUoXCJmY21fdG9rZW5fb2JqZWN0X1N0b3JlXCIpLmluZGV4KFwiZmNtVG9rZW5cIikuZ2V0KGIpO2Qub25lcnJvcj1mdW5jdGlvbihhKXtlKGEudGFyZ2V0LmVycm9yKX07ZC5vbnN1Y2Nlc3M9ZnVuY3Rpb24oYSl7YyhhLnRhcmdldC5yZXN1bHQpfX0pfSl9LEc9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gRChhKS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihjLGUpe3ZhciBkPVtdLGw9YS50cmFuc2FjdGlvbihbXCJmY21fdG9rZW5fb2JqZWN0X1N0b3JlXCJdKS5vYmplY3RTdG9yZShcImZjbV90b2tlbl9vYmplY3RfU3RvcmVcIikub3BlbkN1cnNvcigpO1xubC5vbmVycm9yPWZ1bmN0aW9uKGEpe2UoYS50YXJnZXQuZXJyb3IpfTtsLm9uc3VjY2Vzcz1mdW5jdGlvbihhKXsoYT1hLnRhcmdldC5yZXN1bHQpPyhhLnZhbHVlLmZjbVNlbmRlcklkPT09YiYmZC5wdXNoKGEudmFsdWUpLGEuY29udGludWUoKSk6YyhkKX19KX0pfSxIPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1BKGIuZ2V0S2V5KFwicDI1NmRoXCIpKSxlPUEoYi5nZXRLZXkoXCJhdXRoXCIpKTthPVwiYXV0aG9yaXplZF9lbnRpdHk9XCIrYStcIiZcIisoXCJlbmRwb2ludD1cIitiLmVuZHBvaW50K1wiJlwiKSsoXCJlbmNyeXB0aW9uX2tleT1cIitkK1wiJlwiKSsoXCJlbmNyeXB0aW9uX2F1dGg9XCIrZSk7YyYmKGErPVwiJnB1c2hTZXQ9XCIrYyk7Yz1uZXcgSGVhZGVycztjLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO3JldHVybiBmZXRjaChcImh0dHBzOi8vZmNtLmdvb2dsZWFwaXMuY29tL2ZjbS9jb25uZWN0L3N1YnNjcmliZVwiLHttZXRob2Q6XCJQT1NUXCIsXG5oZWFkZXJzOmMsYm9keTphfSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gYS5qc29uKCl9KS50aGVuKGZ1bmN0aW9uKGEpe2lmKGEuZXJyb3IpdGhyb3cgQi5jcmVhdGUoXCJ0b2tlbi1zdWJzY3JpYmUtZmFpbGVkXCIse21lc3NhZ2U6YS5lcnJvci5tZXNzYWdlfSk7aWYoIWEudG9rZW4pdGhyb3cgQi5jcmVhdGUoXCJ0b2tlbi1zdWJzY3JpYmUtbm8tdG9rZW5cIik7aWYoIWEucHVzaFNldCl0aHJvdyBCLmNyZWF0ZShcInRva2VuLXN1YnNjcmliZS1uby1wdXNoLXNldFwiKTtyZXR1cm57dG9rZW46YS50b2tlbixwdXNoU2V0OmEucHVzaFNldH19KX0sST1mdW5jdGlvbihhLGIsYyxkLGUsbil7dmFyIGw9e3N3U2NvcGU6Yy5zY29wZSxlbmRwb2ludDpkLmVuZHBvaW50LGF1dGg6QShkLmdldEtleShcImF1dGhcIikpLHAyNTZkaDpBKGQuZ2V0S2V5KFwicDI1NmRoXCIpKSxmY21Ub2tlbjplLGZjbVB1c2hTZXQ6bixmY21TZW5kZXJJZDpifTtyZXR1cm4gRChhKS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihiLFxuYyl7dmFyIGQ9YS50cmFuc2FjdGlvbihbXCJmY21fdG9rZW5fb2JqZWN0X1N0b3JlXCJdLFwicmVhZHdyaXRlXCIpLm9iamVjdFN0b3JlKFwiZmNtX3Rva2VuX29iamVjdF9TdG9yZVwiKS5wdXQobCk7ZC5vbmVycm9yPWZ1bmN0aW9uKGEpe2MoYS50YXJnZXQuZXJyb3IpfTtkLm9uc3VjY2Vzcz1mdW5jdGlvbigpe2IoKX19KX0pfTtcbkMucHJvdG90eXBlLmk9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYiBpbnN0YW5jZW9mIFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24/XCJzdHJpbmdcIiE9PXR5cGVvZiBhfHwwPT09YS5sZW5ndGg/UHJvbWlzZS5yZWplY3QoQi5jcmVhdGUoXCJiYWQtc2VuZGVyLWlkXCIpKTpHKHRoaXMsYSkudGhlbihmdW5jdGlvbihjKXtpZigwIT09Yy5sZW5ndGgpe3ZhciBkPWMuZmluZEluZGV4KGZ1bmN0aW9uKGMpe3JldHVybiBiLnNjb3BlPT09Yy5zd1Njb3BlJiZhPT09Yy5mY21TZW5kZXJJZH0pO2lmKC0xIT09ZClyZXR1cm4gY1tkXX19KS50aGVuKGZ1bmN0aW9uKGEpe2lmKGEpcmV0dXJuIGIucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCkuY2F0Y2goZnVuY3Rpb24oKXt0aHJvdyBCLmNyZWF0ZShcImdldC1zdWJzY3JpcHRpb24tZmFpbGVkXCIpO30pLnRoZW4oZnVuY3Rpb24oYil7dmFyIGM7aWYoYz1iKWM9Yi5lbmRwb2ludD09PWEuZW5kcG9pbnQmJkEoYi5nZXRLZXkoXCJhdXRoXCIpKT09PWEuYXV0aCYmXG5BKGIuZ2V0S2V5KFwicDI1NmRoXCIpKT09PWEucDI1NmRoO2lmKGMpcmV0dXJuIGEuZmNtVG9rZW59KX0pOlByb21pc2UucmVqZWN0KEIuY3JlYXRlKFwic3ctcmVnaXN0cmF0aW9uLWV4cGVjdGVkXCIpKX07Qy5wcm90b3R5cGUuZ2V0U2F2ZWRUb2tlbj1DLnByb3RvdHlwZS5pO1xuQy5wcm90b3R5cGUuaD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuXCJzdHJpbmdcIiE9PXR5cGVvZiBhfHwwPT09YS5sZW5ndGg/UHJvbWlzZS5yZWplY3QoQi5jcmVhdGUoXCJiYWQtc2VuZGVyLWlkXCIpKTpiIGluc3RhbmNlb2YgU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbj9iLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIGE/YTpiLnB1c2hNYW5hZ2VyLnN1YnNjcmliZShxKX0pLnRoZW4oZnVuY3Rpb24oZCl7cmV0dXJuIEgoYSxkKS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBJKGMsYSxiLGQsZS50b2tlbixlLnB1c2hTZXQpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZS50b2tlbn0pfSl9KTpQcm9taXNlLnJlamVjdChCLmNyZWF0ZShcInN3LXJlZ2lzdHJhdGlvbi1leHBlY3RlZFwiKSl9O0MucHJvdG90eXBlLmNyZWF0ZVRva2VuPUMucHJvdG90eXBlLmg7XG5DLnByb3RvdHlwZS5kZWxldGVUb2tlbj1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVyblwic3RyaW5nXCIhPT10eXBlb2YgYXx8MD09PWEubGVuZ3RoP1Byb21pc2UucmVqZWN0KEIuY3JlYXRlKFwiaW52YWxpZC1kZWxldGUtdG9rZW5cIikpOkYodGhpcyxhKS50aGVuKGZ1bmN0aW9uKGEpe2lmKCFhKXRocm93IEIuY3JlYXRlKFwiZGVsZXRlLXRva2VuLW5vdC1mb3VuZFwiKTtyZXR1cm4gRChiKS50aGVuKGZ1bmN0aW9uKGIpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihjLGQpe3ZhciBlPWIudHJhbnNhY3Rpb24oW1wiZmNtX3Rva2VuX29iamVjdF9TdG9yZVwiXSxcInJlYWR3cml0ZVwiKS5vYmplY3RTdG9yZShcImZjbV90b2tlbl9vYmplY3RfU3RvcmVcIikuZGVsZXRlKGEuc3dTY29wZSk7ZS5vbmVycm9yPWZ1bmN0aW9uKGEpe2QoYS50YXJnZXQuZXJyb3IpfTtlLm9uc3VjY2Vzcz1mdW5jdGlvbihiKXswPT09Yi50YXJnZXQucmVzdWx0P2QoQi5jcmVhdGUoXCJmYWlsZWQtdG8tZGVsZXRlLXRva2VuXCIpKTpcbmMoYSl9fSl9KX0pfTt2YXIgSj1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3RoaXMuYT1uZXcgZmlyZWJhc2UuSU5URVJOQUwuRXJyb3JGYWN0b3J5KFwibWVzc2FnaW5nXCIsXCJNZXNzYWdpbmdcIixwKTtpZighYS5vcHRpb25zLm1lc3NhZ2luZ1NlbmRlcklkfHxcInN0cmluZ1wiIT09dHlwZW9mIGEub3B0aW9ucy5tZXNzYWdpbmdTZW5kZXJJZCl0aHJvdyB0aGlzLmEuY3JlYXRlKFwiYmFkLXNlbmRlci1pZFwiKTt0aGlzLmw9YS5vcHRpb25zLm1lc3NhZ2luZ1NlbmRlcklkO3RoaXMuYz1uZXcgQzt0aGlzLmFwcD1hO3RoaXMuSU5URVJOQUw9e307dGhpcy5JTlRFUk5BTC5kZWxldGU9ZnVuY3Rpb24oKXtyZXR1cm4gYi5kZWxldGV9fTtcbkoucHJvdG90eXBlLmdldFRva2VuPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPU5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uO3JldHVyblwiZ3JhbnRlZFwiIT09Yj9cImRlbmllZFwiPT09Yj9Qcm9taXNlLnJlamVjdCh0aGlzLmEuY3JlYXRlKFwibm90aWZpY2F0aW9ucy1ibG9ja2VkXCIpKTpQcm9taXNlLnJlc29sdmUobnVsbCk6dGhpcy5mKCkudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gYS5jLmkoYS5sLGIpLnRoZW4oZnVuY3Rpb24oYyl7cmV0dXJuIGM/YzphLmMuaChhLmwsYil9KX0pfTtKLnByb3RvdHlwZS5nZXRUb2tlbj1KLnByb3RvdHlwZS5nZXRUb2tlbjtKLnByb3RvdHlwZS5kZWxldGVUb2tlbj1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiB0aGlzLmMuZGVsZXRlVG9rZW4oYSkudGhlbihmdW5jdGlvbigpe3JldHVybiBiLmYoKX0pLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIGE/YS5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKTpudWxsfSkudGhlbihmdW5jdGlvbihhKXtpZihhKXJldHVybiBhLnVuc3Vic2NyaWJlKCl9KX07XG5KLnByb3RvdHlwZS5kZWxldGVUb2tlbj1KLnByb3RvdHlwZS5kZWxldGVUb2tlbjtKLnByb3RvdHlwZS5mPWZ1bmN0aW9uKCl7dGhyb3cgdGhpcy5hLmNyZWF0ZShcInNob3VsZC1iZS1vdmVycmlkZW5cIik7fTtKLnByb3RvdHlwZS5yZXF1ZXN0UGVybWlzc2lvbj1mdW5jdGlvbigpe3Rocm93IHRoaXMuYS5jcmVhdGUoXCJvbmx5LWF2YWlsYWJsZS1pbi13aW5kb3dcIik7fTtKLnByb3RvdHlwZS51c2VTZXJ2aWNlV29ya2VyPWZ1bmN0aW9uKCl7dGhyb3cgdGhpcy5hLmNyZWF0ZShcIm9ubHktYXZhaWxhYmxlLWluLXdpbmRvd1wiKTt9O0oucHJvdG90eXBlLnVzZVNlcnZpY2VXb3JrZXI9Si5wcm90b3R5cGUudXNlU2VydmljZVdvcmtlcjtKLnByb3RvdHlwZS5vbk1lc3NhZ2U9ZnVuY3Rpb24oKXt0aHJvdyB0aGlzLmEuY3JlYXRlKFwib25seS1hdmFpbGFibGUtaW4td2luZG93XCIpO307Si5wcm90b3R5cGUub25NZXNzYWdlPUoucHJvdG90eXBlLm9uTWVzc2FnZTtcbkoucHJvdG90eXBlLm9uVG9rZW5SZWZyZXNoPWZ1bmN0aW9uKCl7dGhyb3cgdGhpcy5hLmNyZWF0ZShcIm9ubHktYXZhaWxhYmxlLWluLXdpbmRvd1wiKTt9O0oucHJvdG90eXBlLm9uVG9rZW5SZWZyZXNoPUoucHJvdG90eXBlLm9uVG9rZW5SZWZyZXNoO0oucHJvdG90eXBlLnNldEJhY2tncm91bmRNZXNzYWdlSGFuZGxlcj1mdW5jdGlvbigpe3Rocm93IHRoaXMuYS5jcmVhdGUoXCJvbmx5LWF2YWlsYWJsZS1pbi1zd1wiKTt9O0oucHJvdG90eXBlLnNldEJhY2tncm91bmRNZXNzYWdlSGFuZGxlcj1KLnByb3RvdHlwZS5zZXRCYWNrZ3JvdW5kTWVzc2FnZUhhbmRsZXI7Si5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKCl7RSh0aGlzLmMpfTt2YXIgSz1zZWxmLFA9ZnVuY3Rpb24oYSl7Si5jYWxsKHRoaXMsYSk7dmFyIGI9dGhpczt0aGlzLmE9bmV3IGZpcmViYXNlLklOVEVSTkFMLkVycm9yRmFjdG9yeShcIm1lc3NhZ2luZ1wiLFwiTWVzc2FnaW5nXCIscCk7Sy5hZGRFdmVudExpc3RlbmVyKFwicHVzaFwiLGZ1bmN0aW9uKGEpe3JldHVybiBMKGIsYSl9LCExKTtLLmFkZEV2ZW50TGlzdGVuZXIoXCJwdXNoc3Vic2NyaXB0aW9uY2hhbmdlXCIsZnVuY3Rpb24oYSl7cmV0dXJuIE4oYixhKX0sITEpO0suYWRkRXZlbnRMaXN0ZW5lcihcIm5vdGlmaWNhdGlvbmNsaWNrXCIsZnVuY3Rpb24oYSl7cmV0dXJuIE8oYixhKX0sITEpO3RoaXMuYj1udWxsfTtmKFAsSik7XG52YXIgTD1mdW5jdGlvbihhLGIpe3ZhciBjO3RyeXtjPWIuZGF0YS5qc29uKCl9Y2F0Y2goZSl7cmV0dXJufXZhciBkPVEoKS50aGVuKGZ1bmN0aW9uKGIpe2lmKGIpe2lmKGMubm90aWZpY2F0aW9ufHxhLmIpcmV0dXJuIFIoYSxjKX1lbHNle2lmKChiPWMpJiZcIm9iamVjdFwiPT09dHlwZW9mIGIubm90aWZpY2F0aW9uKXt2YXIgZD1PYmplY3QuYXNzaWduKHt9LGIubm90aWZpY2F0aW9uKSxlPXt9O2QuZGF0YT0oZS5GQ01fTVNHPWIsZSk7Yj1kfWVsc2UgYj12b2lkIDA7aWYoYilyZXR1cm4gSy5yZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbihiLnRpdGxlfHxcIlwiLGIpO2lmKGEuYilyZXR1cm4gYS5iKGMpfX0pO2Iud2FpdFVudGlsKGQpfSxOPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5nZXRUb2tlbigpLnRoZW4oZnVuY3Rpb24oYil7aWYoIWIpdGhyb3cgYS5hLmNyZWF0ZShcIm5vLWZjbS10b2tlbi1mb3ItcmVzdWJzY3JpYmVcIik7dmFyIGM9YS5jO3JldHVybiBGKGMsYikudGhlbihmdW5jdGlvbihiKXtpZighYil0aHJvdyBhLmEuY3JlYXRlKFwiaW52YWxpZC1zYXZlZC10b2tlblwiKTtcbnJldHVybiBLLnJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5zdWJzY3JpYmUocSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gSChiLncsYSxiLnYpfSkuY2F0Y2goZnVuY3Rpb24oZCl7cmV0dXJuIGMuZGVsZXRlVG9rZW4oYi5BKS50aGVuKGZ1bmN0aW9uKCl7dGhyb3cgYS5hLmNyZWF0ZShcInVuYWJsZS10by1yZXN1YnNjcmliZVwiLHttZXNzYWdlOmR9KTt9KX0pfSl9KTtiLndhaXRVbnRpbChjKX0sTz1mdW5jdGlvbihhLGIpe2lmKGIubm90aWZpY2F0aW9uJiZiLm5vdGlmaWNhdGlvbi5kYXRhJiZiLm5vdGlmaWNhdGlvbi5kYXRhLkZDTV9NU0cpe2Iuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7Yi5ub3RpZmljYXRpb24uY2xvc2UoKTt2YXIgYz1iLm5vdGlmaWNhdGlvbi5kYXRhLkZDTV9NU0csZD1jLm5vdGlmaWNhdGlvbi5jbGlja19hY3Rpb247aWYoZCl7dmFyIGU9UyhkKS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBhP2E6Sy5jbGllbnRzLm9wZW5XaW5kb3coZCl9KS50aGVuKGZ1bmN0aW9uKGIpe2lmKGIpcmV0dXJuIGRlbGV0ZSBjLm5vdGlmaWNhdGlvbixcblQoYSxiLHIoXCJub3RpZmljYXRpb24tY2xpY2tlZFwiLGMpKX0pO2Iud2FpdFVudGlsKGUpfX19O1AucHJvdG90eXBlLnNldEJhY2tncm91bmRNZXNzYWdlSGFuZGxlcj1mdW5jdGlvbihhKXtpZihhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSl0aHJvdyB0aGlzLmEuY3JlYXRlKFwiYmctaGFuZGxlci1mdW5jdGlvbi1leHBlY3RlZFwiKTt0aGlzLmI9YX07UC5wcm90b3R5cGUuc2V0QmFja2dyb3VuZE1lc3NhZ2VIYW5kbGVyPVAucHJvdG90eXBlLnNldEJhY2tncm91bmRNZXNzYWdlSGFuZGxlcjtcbnZhciBTPWZ1bmN0aW9uKGEpe3ZhciBiPShuZXcgVVJMKGEpKS5ocmVmO3JldHVybiBLLmNsaWVudHMubWF0Y2hBbGwoe3R5cGU6XCJ3aW5kb3dcIixpbmNsdWRlVW5jb250cm9sbGVkOiEwfSkudGhlbihmdW5jdGlvbihhKXtmb3IodmFyIGM9bnVsbCxlPTA7ZTxhLmxlbmd0aDtlKyspaWYoKG5ldyBVUkwoYVtlXS51cmwpKS5ocmVmPT09Yil7Yz1hW2VdO2JyZWFrfWlmKGMpcmV0dXJuIGMuZm9jdXMoKSxjfSl9LFQ9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihkLGUpe2lmKCFiKXJldHVybiBlKGEuYS5jcmVhdGUoXCJuby13aW5kb3ctY2xpZW50LXRvLW1zZ1wiKSk7Yi5wb3N0TWVzc2FnZShjKTtkKCl9KX0sUT1mdW5jdGlvbigpe3JldHVybiBLLmNsaWVudHMubWF0Y2hBbGwoe3R5cGU6XCJ3aW5kb3dcIixpbmNsdWRlVW5jb250cm9sbGVkOiEwfSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gYS5zb21lKGZ1bmN0aW9uKGEpe3JldHVyblwidmlzaWJsZVwiPT09XG5hLnZpc2liaWxpdHlTdGF0ZX0pfSl9LFI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSy5jbGllbnRzLm1hdGNoQWxsKHt0eXBlOlwid2luZG93XCIsaW5jbHVkZVVuY29udHJvbGxlZDohMH0pLnRoZW4oZnVuY3Rpb24oYyl7dmFyIGQ9cihcInB1c2gtbXNnLXJlY2VpdmVkXCIsYik7cmV0dXJuIFByb21pc2UuYWxsKGMubWFwKGZ1bmN0aW9uKGIpe3JldHVybiBUKGEsYixkKX0pKX0pfTtQLnByb3RvdHlwZS5mPWZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShLLnJlZ2lzdHJhdGlvbil9O3ZhciBWPWZ1bmN0aW9uKGEpe0ouY2FsbCh0aGlzLGEpO3ZhciBiPXRoaXM7dGhpcy5qPW51bGw7dGhpcy5tPWZpcmViYXNlLklOVEVSTkFMLmNyZWF0ZVN1YnNjcmliZShmdW5jdGlvbihhKXtiLmo9YX0pO3RoaXMucz1udWxsO3RoaXMubz1maXJlYmFzZS5JTlRFUk5BTC5jcmVhdGVTdWJzY3JpYmUoZnVuY3Rpb24oYSl7Yi5zPWF9KTtVKHRoaXMpfTtmKFYsSik7XG5WLnByb3RvdHlwZS5nZXRUb2tlbj1mdW5jdGlvbigpe3ZhciBhPXRoaXM7cmV0dXJuXCJzZXJ2aWNlV29ya2VyXCJpbiBuYXZpZ2F0b3ImJlwiUHVzaE1hbmFnZXJcImluIHdpbmRvdyYmXCJOb3RpZmljYXRpb25cImluIHdpbmRvdyYmU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoXCJzaG93Tm90aWZpY2F0aW9uXCIpJiZQdXNoU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShcImdldEtleVwiKT9XKHRoaXMpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gSi5wcm90b3R5cGUuZ2V0VG9rZW4uY2FsbChhKX0pOlByb21pc2UucmVqZWN0KHRoaXMuYS5jcmVhdGUoXCJ1bnN1cHBvcnRlZC1icm93c2VyXCIpKX07Vi5wcm90b3R5cGUuZ2V0VG9rZW49Vi5wcm90b3R5cGUuZ2V0VG9rZW47XG52YXIgVz1mdW5jdGlvbihhKXtpZihhLmcpcmV0dXJuIGEuZzt2YXIgYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1cIm1hbmlmZXN0XCJdJyk7Yj9hLmc9ZmV0Y2goYi5ocmVmKS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBhLmpzb24oKX0pLmNhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfSkudGhlbihmdW5jdGlvbihiKXtpZihiJiZiLmdjbV9zZW5kZXJfaWQmJlwiMTAzOTUzODAwNTA3XCIhPT1iLmdjbV9zZW5kZXJfaWQpdGhyb3cgYS5hLmNyZWF0ZShcImluY29ycmVjdC1nY20tc2VuZGVyLWlkXCIpO30pOmEuZz1Qcm9taXNlLnJlc29sdmUoKTtyZXR1cm4gYS5nfTtcblYucHJvdG90eXBlLnJlcXVlc3RQZXJtaXNzaW9uPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm5cImdyYW50ZWRcIj09PU5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uP1Byb21pc2UucmVzb2x2ZSgpOm5ldyBQcm9taXNlKGZ1bmN0aW9uKGIsYyl7dmFyIGQ9ZnVuY3Rpb24oZCl7cmV0dXJuXCJncmFudGVkXCI9PT1kP2IoKTpcImRlbmllZFwiPT09ZD9jKGEuYS5jcmVhdGUoXCJwZXJtaXNzaW9uLWJsb2NrZWRcIikpOmMoYS5hLmNyZWF0ZShcInBlcm1pc3Npb24tZGVmYXVsdFwiKSl9LGU9Tm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKGZ1bmN0aW9uKGEpe2V8fGQoYSl9KTtlJiZlLnRoZW4oZCl9KX07Vi5wcm90b3R5cGUucmVxdWVzdFBlcm1pc3Npb249Vi5wcm90b3R5cGUucmVxdWVzdFBlcm1pc3Npb247XG5WLnByb3RvdHlwZS51c2VTZXJ2aWNlV29ya2VyPWZ1bmN0aW9uKGEpe2lmKCEoYSBpbnN0YW5jZW9mIFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24pKXRocm93IHRoaXMuYS5jcmVhdGUoXCJzdy1yZWdpc3RyYXRpb24tZXhwZWN0ZWRcIik7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB0aGlzLmIpdGhyb3cgdGhpcy5hLmNyZWF0ZShcInVzZS1zdy1iZWZvcmUtZ2V0LXRva2VuXCIpO3RoaXMuYj1hfTtWLnByb3RvdHlwZS51c2VTZXJ2aWNlV29ya2VyPVYucHJvdG90eXBlLnVzZVNlcnZpY2VXb3JrZXI7Vi5wcm90b3R5cGUub25NZXNzYWdlPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5tKGEsYixjKX07Vi5wcm90b3R5cGUub25NZXNzYWdlPVYucHJvdG90eXBlLm9uTWVzc2FnZTtWLnByb3RvdHlwZS5vblRva2VuUmVmcmVzaD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMubyhhLGIsYyl9O1YucHJvdG90eXBlLm9uVG9rZW5SZWZyZXNoPVYucHJvdG90eXBlLm9uVG9rZW5SZWZyZXNoO1xudmFyIFg9ZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmluc3RhbGxpbmd8fGIud2FpdGluZ3x8Yi5hY3RpdmU7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGQsZSl7aWYoYylpZihcImFjdGl2YXRlZFwiPT09Yy5zdGF0ZSlkKGIpO2Vsc2UgaWYoXCJyZWR1bmRhbnRcIj09PWMuc3RhdGUpZShhLmEuY3JlYXRlKFwic3ctcmVnLXJlZHVuZGFudFwiKSk7ZWxzZXt2YXIgbj1mdW5jdGlvbigpe2lmKFwiYWN0aXZhdGVkXCI9PT1jLnN0YXRlKWQoYik7ZWxzZSBpZihcInJlZHVuZGFudFwiPT09Yy5zdGF0ZSllKGEuYS5jcmVhdGUoXCJzdy1yZWctcmVkdW5kYW50XCIpKTtlbHNlIHJldHVybjtjLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdGF0ZWNoYW5nZVwiLG4pfTtjLmFkZEV2ZW50TGlzdGVuZXIoXCJzdGF0ZWNoYW5nZVwiLG4pfWVsc2UgZShhLmEuY3JlYXRlKFwibm8tc3ctaW4tcmVnXCIpKX0pfTtcblYucHJvdG90eXBlLmY9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2lmKHRoaXMuYilyZXR1cm4gWCh0aGlzLHRoaXMuYik7dGhpcy5iPW51bGw7cmV0dXJuIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwiL2ZpcmViYXNlLW1lc3NhZ2luZy1zdy5qc1wiLHtzY29wZTpcIi9maXJlYmFzZS1jbG91ZC1tZXNzYWdpbmctcHVzaC1zY29wZVwifSkuY2F0Y2goZnVuY3Rpb24oYil7dGhyb3cgYS5hLmNyZWF0ZShcImZhaWxlZC1zZXJ2aWNld29ya2VyLXJlZ2lzdHJhdGlvblwiLHticm93c2VyRXJyb3JNZXNzYWdlOmIubWVzc2FnZX0pO30pLnRoZW4oZnVuY3Rpb24oYil7cmV0dXJuIFgoYSxiKS50aGVuKGZ1bmN0aW9uKCl7YS5iPWI7Yi51cGRhdGUoKTtyZXR1cm4gYn0pfSl9O1xudmFyIFU9ZnVuY3Rpb24oYSl7XCJzZXJ2aWNlV29ya2VyXCJpbiBuYXZpZ2F0b3ImJm5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZnVuY3Rpb24oYil7aWYoYi5kYXRhJiZiLmRhdGFbXCJmaXJlYmFzZS1tZXNzYWdpbmctbXNnLXR5cGVcIl0pc3dpdGNoKGI9Yi5kYXRhLGJbXCJmaXJlYmFzZS1tZXNzYWdpbmctbXNnLXR5cGVcIl0pe2Nhc2UgXCJwdXNoLW1zZy1yZWNlaXZlZFwiOmNhc2UgXCJub3RpZmljYXRpb24tY2xpY2tlZFwiOmEuai5uZXh0KGJbXCJmaXJlYmFzZS1tZXNzYWdpbmctbXNnLWRhdGFcIl0pfX0sITEpfTtpZighKGZpcmViYXNlJiZmaXJlYmFzZS5JTlRFUk5BTCYmZmlyZWJhc2UuSU5URVJOQUwucmVnaXN0ZXJTZXJ2aWNlKSl0aHJvdyBFcnJvcihcIkNhbm5vdCBpbnN0YWxsIEZpcmViYXNlIE1lc3NhZ2luZyAtIGJlIHN1cmUgdG8gbG9hZCBmaXJlYmFzZS1hcHAuanMgZmlyc3QuXCIpO2ZpcmViYXNlLklOVEVSTkFMLnJlZ2lzdGVyU2VydmljZShcIm1lc3NhZ2luZ1wiLGZ1bmN0aW9uKGEpe3JldHVybiBzZWxmJiZcIlNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZVwiaW4gc2VsZj9uZXcgUChhKTpuZXcgVihhKX0se01lc3NhZ2luZzpWfSk7fSkuY2FsbCh0aGlzKTtcbn0pLmNhbGwoZ2xvYmFsKTtcbm1vZHVsZS5leHBvcnRzID0gZmlyZWJhc2UubWVzc2FnaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpcmViYXNlL21lc3NhZ2luZy5qc1xuLy8gbW9kdWxlIGlkID0gMTkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBmaXJlYmFzZSA9IHJlcXVpcmUoJy4vYXBwJyk7XG4oZnVuY3Rpb24oKXtcbi8qISBAbGljZW5zZSBGaXJlYmFzZSB2My42LjVcbiAgICBCdWlsZDogMy42LjUtcmMuMVxuICAgIFRlcm1zOiBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vdGVybXMvICovXG4oZnVuY3Rpb24oKXt2YXIgayxsPXRoaXMsbT1mdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwIT09YX0sYWE9ZnVuY3Rpb24oYSl7dmFyIGI9dHlwZW9mIGE7aWYoXCJvYmplY3RcIj09YilpZihhKXtpZihhIGluc3RhbmNlb2YgQXJyYXkpcmV0dXJuXCJhcnJheVwiO2lmKGEgaW5zdGFuY2VvZiBPYmplY3QpcmV0dXJuIGI7dmFyIGM9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpO2lmKFwiW29iamVjdCBXaW5kb3ddXCI9PWMpcmV0dXJuXCJvYmplY3RcIjtpZihcIltvYmplY3QgQXJyYXldXCI9PWN8fFwibnVtYmVyXCI9PXR5cGVvZiBhLmxlbmd0aCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuc3BsaWNlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5wcm9wZXJ0eUlzRW51bWVyYWJsZSYmIWEucHJvcGVydHlJc0VudW1lcmFibGUoXCJzcGxpY2VcIikpcmV0dXJuXCJhcnJheVwiO2lmKFwiW29iamVjdCBGdW5jdGlvbl1cIj09Y3x8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuY2FsbCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucHJvcGVydHlJc0VudW1lcmFibGUmJlxuIWEucHJvcGVydHlJc0VudW1lcmFibGUoXCJjYWxsXCIpKXJldHVyblwiZnVuY3Rpb25cIn1lbHNlIHJldHVyblwibnVsbFwiO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT1iJiZcInVuZGVmaW5lZFwiPT10eXBlb2YgYS5jYWxsKXJldHVyblwib2JqZWN0XCI7cmV0dXJuIGJ9O3ZhciBwPWZ1bmN0aW9uKGEsYil7cmV0dXJuLTEhPT1hLmluZGV4T2YoYil9O3ZhciBiYT1mdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZCgpe3p8fCh6PSEwLGIuYXBwbHkobnVsbCxhcmd1bWVudHMpKX1mdW5jdGlvbiBlKGIpe249c2V0VGltZW91dChmdW5jdGlvbigpe249bnVsbDthKGYsMj09PUMpfSxiKX1mdW5jdGlvbiBmKGEsYil7aWYoIXopaWYoYSlkLmFwcGx5KG51bGwsYXJndW1lbnRzKTtlbHNlIGlmKDI9PT1DfHxCKWQuYXBwbHkobnVsbCxhcmd1bWVudHMpO2Vsc2V7NjQ+aCYmKGgqPTIpO3ZhciBjOzE9PT1DPyhDPTIsYz0wKTpjPTFFMyooaCtNYXRoLnJhbmRvbSgpKTtlKGMpfX1mdW5jdGlvbiBnKGEpe0hhfHwoSGE9ITAsenx8KG51bGwhPT1uPyhhfHwoQz0yKSxjbGVhclRpbWVvdXQobiksZSgwKSk6YXx8KEM9MSkpKX12YXIgaD0xLG49bnVsbCxCPSExLEM9MCx6PSExLEhhPSExO2UoMCk7c2V0VGltZW91dChmdW5jdGlvbigpe0I9ITA7ZyghMCl9LGMpO3JldHVybiBnfTt2YXIgcT1cImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tXCI7dmFyIHI9ZnVuY3Rpb24oYSxiKXt0aGlzLmNvZGU9XCJzdG9yYWdlL1wiK2E7dGhpcy5tZXNzYWdlPVwiRmlyZWJhc2UgU3RvcmFnZTogXCIrYjt0aGlzLnNlcnZlclJlc3BvbnNlPW51bGw7dGhpcy5uYW1lPVwiRmlyZWJhc2VFcnJvclwifTsoZnVuY3Rpb24oKXt2YXIgYT1FcnJvcjtmdW5jdGlvbiBiKCl7fWIucHJvdG90eXBlPWEucHJvdG90eXBlO3IuYj1hLnByb3RvdHlwZTtyLnByb3RvdHlwZT1uZXcgYjtyLmE9ZnVuY3Rpb24oYixkLGUpe2Zvcih2YXIgYz1BcnJheShhcmd1bWVudHMubGVuZ3RoLTIpLGc9MjtnPGFyZ3VtZW50cy5sZW5ndGg7ZysrKWNbZy0yXT1hcmd1bWVudHNbZ107cmV0dXJuIGEucHJvdG90eXBlW2RdLmFwcGx5KGIsYyl9fSkoKTtcbnZhciBjYT1mdW5jdGlvbigpe3JldHVybiBuZXcgcihcInVua25vd25cIixcIkFuIHVua25vd24gZXJyb3Igb2NjdXJyZWQsIHBsZWFzZSBjaGVjayB0aGUgZXJyb3IgcGF5bG9hZCBmb3Igc2VydmVyIHJlc3BvbnNlLlwiKX0sZGE9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIoXCJjYW5jZWxlZFwiLFwiVXNlciBjYW5jZWxlZCB0aGUgdXBsb2FkL2Rvd25sb2FkLlwiKX0sZWE9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIoXCJjYW5ub3Qtc2xpY2UtYmxvYlwiLFwiQ2Fubm90IHNsaWNlIGJsb2IgZm9yIHVwbG9hZC4gUGxlYXNlIHJldHJ5IHRoZSB1cGxvYWQuXCIpfSxmYT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIG5ldyByKFwiaW52YWxpZC1hcmd1bWVudFwiLFwiSW52YWxpZCBhcmd1bWVudCBpbiBgXCIrYitcImAgYXQgaW5kZXggXCIrYStcIjogXCIrYyl9LGdhPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKFwiYXBwLWRlbGV0ZWRcIixcIlRoZSBGaXJlYmFzZSBhcHAgd2FzIGRlbGV0ZWQuXCIpfSx0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyByKFwiaW52YWxpZC1mb3JtYXRcIixcblwiU3RyaW5nIGRvZXMgbm90IG1hdGNoIGZvcm1hdCAnXCIrYStcIic6IFwiK2IpfSx1PWZ1bmN0aW9uKGEpe3Rocm93IG5ldyByKFwiaW50ZXJuYWwtZXJyb3JcIixcIkludGVybmFsIGVycm9yOiBcIithKTt9O3ZhciB2PWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjIGluIGEpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsYykmJmIoYyxhW2NdKX0saGE9ZnVuY3Rpb24oYSl7dmFyIGI9e307dihhLGZ1bmN0aW9uKGEsZCl7YlthXT1kfSk7cmV0dXJuIGJ9O3ZhciBpYT1mdW5jdGlvbihhLGIpe2I9Yi5zcGxpdChcIi9cIikuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiAwPGEubGVuZ3RofSkuam9pbihcIi9cIik7cmV0dXJuIDA9PT1hLmxlbmd0aD9iOmErXCIvXCIrYn0samE9ZnVuY3Rpb24oYSl7dmFyIGI9YS5sYXN0SW5kZXhPZihcIi9cIixhLmxlbmd0aC0yKTtyZXR1cm4tMT09PWI/YTphLnNsaWNlKGIrMSl9O3ZhciBrYT1mdW5jdGlvbihhKXtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGZpcmViYXNlKXJldHVybiBuZXcgZmlyZWJhc2UuUHJvbWlzZShhKTt0aHJvdyBFcnJvcihcIkVycm9yIGluIEZpcmViYXNlIFN0b3JhZ2UgLSBiZSBzdXJlIHRvIGxvYWQgZmlyZWJhc2UtYXBwLmpzIGZpcnN0LlwiKTt9O3ZhciB3PWZ1bmN0aW9uKGEsYixjLGQpe3RoaXMuaD1hO3RoaXMuYj17fTt0aGlzLm1ldGhvZD1iO3RoaXMuaGVhZGVycz17fTt0aGlzLmJvZHk9bnVsbDt0aGlzLmo9Yzt0aGlzLmw9dGhpcy5hPW51bGw7dGhpcy5jPVsyMDBdO3RoaXMuZz1bXTt0aGlzLnRpbWVvdXQ9ZDt0aGlzLmY9ITB9O3ZhciBsYT17U1RBVEVfQ0hBTkdFRDpcInN0YXRlX2NoYW5nZWRcIn0seD17UlVOTklORzpcInJ1bm5pbmdcIixQQVVTRUQ6XCJwYXVzZWRcIixTVUNDRVNTOlwic3VjY2Vzc1wiLENBTkNFTEVEOlwiY2FuY2VsZWRcIixFUlJPUjpcImVycm9yXCJ9LG1hPWZ1bmN0aW9uKGEpe3N3aXRjaChhKXtjYXNlIFwicnVubmluZ1wiOmNhc2UgXCJwYXVzaW5nXCI6Y2FzZSBcImNhbmNlbGluZ1wiOnJldHVyblwicnVubmluZ1wiO2Nhc2UgXCJwYXVzZWRcIjpyZXR1cm5cInBhdXNlZFwiO2Nhc2UgXCJzdWNjZXNzXCI6cmV0dXJuXCJzdWNjZXNzXCI7Y2FzZSBcImNhbmNlbGVkXCI6cmV0dXJuXCJjYW5jZWxlZFwiO2Nhc2UgXCJlcnJvclwiOnJldHVyblwiZXJyb3JcIjtkZWZhdWx0OnJldHVyblwiZXJyb3JcIn19O3ZhciB5PWZ1bmN0aW9uKGEpe3JldHVybiBtKGEpJiZudWxsIT09YX0sbmE9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfHxhIGluc3RhbmNlb2YgU3RyaW5nfSxvYT1mdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCIhPT10eXBlb2YgQmxvYn07dmFyIHFhPWZ1bmN0aW9uKGEsYil7dmFyIGM9cGE7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjLGEpP2NbYV06Y1thXT1iKGEpfTt2YXIgcmE9U3RyaW5nLnByb3RvdHlwZS50cmltP2Z1bmN0aW9uKGEpe3JldHVybiBhLnRyaW0oKX06ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvXltcXHNcXHhhMF0rfFtcXHNcXHhhMF0rJC9nLFwiXCIpfSxzYT1mdW5jdGlvbihhLGIpe3JldHVybiBhPGI/LTE6YT5iPzE6MH07dmFyIEE9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGI9W107QXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYixhcmd1bWVudHMpO2ZpcmViYXNlLlByb21pc2UucmVzb2x2ZSghMCkudGhlbihmdW5jdGlvbigpe2EuYXBwbHkobnVsbCxiKX0pfX07dmFyIEQ9ZnVuY3Rpb24oYSxiKXt0aGlzLmJ1Y2tldD1hO3RoaXMucGF0aD1ifSx0YT1mdW5jdGlvbihhKXt2YXIgYj1lbmNvZGVVUklDb21wb25lbnQ7cmV0dXJuXCIvYi9cIitiKGEuYnVja2V0KStcIi9vL1wiK2IoYS5wYXRoKX0sdWE9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPW51bGwsYz1be0s6L15nczpcXC9cXC8oW0EtWmEtejAtOS5cXC1dKykoXFwvKC4qKSk/JC9pLEc6e2J1Y2tldDoxLHBhdGg6M30sSjpmdW5jdGlvbihhKXtcIi9cIj09PWEucGF0aC5jaGFyQXQoYS5wYXRoLmxlbmd0aC0xKSYmKGEucGF0aD1hLnBhdGguc2xpY2UoMCwtMSkpfX0se0s6L15odHRwcz86XFwvXFwvZmlyZWJhc2VzdG9yYWdlXFwuZ29vZ2xlYXBpc1xcLmNvbVxcL3ZbQS1aYS16MC05X10rXFwvYlxcLyhbQS1aYS16MC05LlxcLV0rKVxcL28oXFwvKFtePyNdKikuKik/JC9pLEc6e2J1Y2tldDoxLHBhdGg6M30sSjpmdW5jdGlvbihhKXthLnBhdGg9ZGVjb2RlVVJJQ29tcG9uZW50KGEucGF0aCl9fV0sZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1cbmNbZF0sZj1lLksuZXhlYyhhKTtpZihmKXtiPWZbZS5HLmJ1Y2tldF07KGY9ZltlLkcucGF0aF0pfHwoZj1cIlwiKTtiPW5ldyBEKGIsZik7ZS5KKGIpO2JyZWFrfX1pZihudWxsPT1iKXRocm93IG5ldyByKFwiaW52YWxpZC11cmxcIixcIkludmFsaWQgVVJMICdcIithK1wiJy5cIik7cmV0dXJuIGJ9O3ZhciB2YT1mdW5jdGlvbihhLGIsYyl7XCJmdW5jdGlvblwiPT1hYShhKXx8eShiKXx8eShjKT8odGhpcy5jPWEsdGhpcy5hPWJ8fG51bGwsdGhpcy5iPWN8fG51bGwpOih0aGlzLmM9YS5uZXh0fHxudWxsLHRoaXMuYT1hLmVycm9yfHxudWxsLHRoaXMuYj1hLmNvbXBsZXRlfHxudWxsKX07dmFyIEU9e1JBVzpcInJhd1wiLEJBU0U2NDpcImJhc2U2NFwiLEJBU0U2NFVSTDpcImJhc2U2NHVybFwiLERBVEFfVVJMOlwiZGF0YV91cmxcIn0sd2E9ZnVuY3Rpb24oYSl7c3dpdGNoKGEpe2Nhc2UgXCJyYXdcIjpjYXNlIFwiYmFzZTY0XCI6Y2FzZSBcImJhc2U2NHVybFwiOmNhc2UgXCJkYXRhX3VybFwiOmJyZWFrO2RlZmF1bHQ6dGhyb3dcIkV4cGVjdGVkIG9uZSBvZiB0aGUgZXZlbnQgdHlwZXM6IFtyYXcsIGJhc2U2NCwgYmFzZTY0dXJsLCBkYXRhX3VybF0uXCI7fX0seGE9ZnVuY3Rpb24oYSxiKXt0aGlzLmI9YTt0aGlzLmE9Ynx8bnVsbH0sQmE9ZnVuY3Rpb24oYSxiKXtzd2l0Y2goYSl7Y2FzZSBcInJhd1wiOnJldHVybiBuZXcgeGEoeWEoYikpO2Nhc2UgXCJiYXNlNjRcIjpjYXNlIFwiYmFzZTY0dXJsXCI6cmV0dXJuIG5ldyB4YSh6YShhLGIpKTtjYXNlIFwiZGF0YV91cmxcIjphPW5ldyBBYShiKTt2YXIgYztpZihhLmEpYz16YShcImJhc2U2NFwiLGEuYyk7ZWxzZXt0cnl7Yz1kZWNvZGVVUklDb21wb25lbnQoYS5jKX1jYXRjaChkKXt0aHJvdyB0KFwiZGF0YV91cmxcIixcblwiTWFsZm9ybWVkIGRhdGEgVVJMLlwiKTt9Yz15YShjKX1yZXR1cm4gbmV3IHhhKGMsKG5ldyBBYShiKSkuYil9dGhyb3cgY2EoKTt9LHlhPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1bXSxjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWEuY2hhckNvZGVBdChjKTtpZigxMjc+PWQpYi5wdXNoKGQpO2Vsc2UgaWYoMjA0Nz49ZCliLnB1c2goMTkyfGQ+PjYsMTI4fGQmNjMpO2Vsc2UgaWYoNTUyOTY9PShkJjY0NTEyKSlpZihjPGEubGVuZ3RoLTEmJjU2MzIwPT0oYS5jaGFyQ29kZUF0KGMrMSkmNjQ1MTIpKXt2YXIgZT1hLmNoYXJDb2RlQXQoKytjKSxkPTY1NTM2fChkJjEwMjMpPDwxMHxlJjEwMjM7Yi5wdXNoKDI0MHxkPj4xOCwxMjh8ZD4+MTImNjMsMTI4fGQ+PjYmNjMsMTI4fGQmNjMpfWVsc2UgYi5wdXNoKDIzOSwxOTEsMTg5KTtlbHNlIDU2MzIwPT0oZCY2NDUxMik/Yi5wdXNoKDIzOSwxOTEsMTg5KTpiLnB1c2goMjI0fGQ+PjEyLDEyOHxkPj42JjYzLDEyOHxkJjYzKX1yZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYil9LFxuemE9ZnVuY3Rpb24oYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImJhc2U2NFwiOnZhciBjPS0xIT09Yi5pbmRleE9mKFwiLVwiKSxkPS0xIT09Yi5pbmRleE9mKFwiX1wiKTtpZihjfHxkKXRocm93IHQoYSxcIkludmFsaWQgY2hhcmFjdGVyICdcIisoYz9cIi1cIjpcIl9cIikrXCInIGZvdW5kOiBpcyBpdCBiYXNlNjR1cmwgZW5jb2RlZD9cIik7YnJlYWs7Y2FzZSBcImJhc2U2NHVybFwiOmM9LTEhPT1iLmluZGV4T2YoXCIrXCIpO2Q9LTEhPT1iLmluZGV4T2YoXCIvXCIpO2lmKGN8fGQpdGhyb3cgdChhLFwiSW52YWxpZCBjaGFyYWN0ZXIgJ1wiKyhjP1wiK1wiOlwiL1wiKStcIicgZm91bmQ6IGlzIGl0IGJhc2U2NCBlbmNvZGVkP1wiKTtiPWIucmVwbGFjZSgvLS9nLFwiK1wiKS5yZXBsYWNlKC9fL2csXCIvXCIpfXZhciBlO3RyeXtlPWF0b2IoYil9Y2F0Y2goZil7dGhyb3cgdChhLFwiSW52YWxpZCBjaGFyYWN0ZXIgZm91bmRcIik7fWE9bmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpO2ZvcihiPTA7YjxlLmxlbmd0aDtiKyspYVtiXT1lLmNoYXJDb2RlQXQoYik7XG5yZXR1cm4gYX0sQWE9ZnVuY3Rpb24oYSl7dmFyIGI9YS5tYXRjaCgvXmRhdGE6KFteLF0rKT8sLyk7aWYobnVsbD09PWIpdGhyb3cgdChcImRhdGFfdXJsXCIsXCJNdXN0IGJlIGZvcm1hdHRlZCAnZGF0YTpbPG1lZGlhdHlwZT5dWztiYXNlNjRdLDxkYXRhPlwiKTtiPWJbMV18fG51bGw7dGhpcy5hPSExO3RoaXMuYj1udWxsO2lmKG51bGwhPWIpe3ZhciBjPWIubGVuZ3RoLTc7dGhpcy5iPSh0aGlzLmE9MDw9YyYmYi5pbmRleE9mKFwiO2Jhc2U2NFwiLGMpPT1jKT9iLnN1YnN0cmluZygwLGIubGVuZ3RoLTcpOmJ9dGhpcy5jPWEuc3Vic3RyaW5nKGEuaW5kZXhPZihcIixcIikrMSl9O3ZhciBDYT1mdW5jdGlvbihhKXt2YXIgYj1lbmNvZGVVUklDb21wb25lbnQsYz1cIj9cIjt2KGEsZnVuY3Rpb24oYSxlKXthPWIoYSkrXCI9XCIrYihlKTtjPWMrYStcIiZcIn0pO3JldHVybiBjPWMuc2xpY2UoMCwtMSl9O3ZhciBEYT1mdW5jdGlvbigpe3ZhciBhPXRoaXM7dGhpcy5hPW5ldyBYTUxIdHRwUmVxdWVzdDt0aGlzLmM9MDt0aGlzLmY9a2EoZnVuY3Rpb24oYil7YS5hLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLGZ1bmN0aW9uKCl7YS5jPTI7YihhKX0pO2EuYS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixmdW5jdGlvbigpe2EuYz0xO2IoYSl9KTthLmEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe2IoYSl9KX0pO3RoaXMuYj0hMX0sRWE9ZnVuY3Rpb24oYSxiLGMsZCxlKXtpZihhLmIpdGhyb3cgdShcImNhbm5vdCAuc2VuZCgpIG1vcmUgdGhhbiBvbmNlXCIpO2EuYj0hMDthLmEub3BlbihjLGIsITApO3koZSkmJnYoZSxmdW5jdGlvbihiLGMpe2EuYS5zZXRSZXF1ZXN0SGVhZGVyKGIsYy50b1N0cmluZygpKX0pO3koZCk/YS5hLnNlbmQoZCk6YS5hLnNlbmQoKTtyZXR1cm4gYS5mfSxGYT1mdW5jdGlvbihhKXtpZighYS5iKXRocm93IHUoXCJjYW5ub3QgLmdldEVycm9yQ29kZSgpIGJlZm9yZSBzZW5kaW5nXCIpO1xucmV0dXJuIGEuY30sRj1mdW5jdGlvbihhKXtpZighYS5iKXRocm93IHUoXCJjYW5ub3QgLmdldFN0YXR1cygpIGJlZm9yZSBzZW5kaW5nXCIpO3RyeXtyZXR1cm4gYS5hLnN0YXR1c31jYXRjaChiKXtyZXR1cm4tMX19LEdhPWZ1bmN0aW9uKGEpe2lmKCFhLmIpdGhyb3cgdShcImNhbm5vdCAuZ2V0UmVzcG9uc2VUZXh0KCkgYmVmb3JlIHNlbmRpbmdcIik7cmV0dXJuIGEuYS5yZXNwb25zZVRleHR9O0RhLnByb3RvdHlwZS5hYm9ydD1mdW5jdGlvbigpe3RoaXMuYS5hYm9ydCgpfTt2YXIgRz1mdW5jdGlvbihhLGIsYyxkLGUsZil7dGhpcy5iPWE7dGhpcy5oPWI7dGhpcy5mPWM7dGhpcy5hPWQ7dGhpcy5nPWU7dGhpcy5jPWZ9O2s9Ry5wcm90b3R5cGU7ay5WPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYn07ay5xYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmh9O2submE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5mfTtrLmlhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYX07ay5XPWZ1bmN0aW9uKCl7aWYoeSh0aGlzLmEpKXt2YXIgYT10aGlzLmEuZG93bmxvYWRVUkxzO3JldHVybiB5KGEpJiZ5KGFbMF0pP2FbMF06bnVsbH1yZXR1cm4gbnVsbH07ay5wYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmd9O2subGE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jfTt2YXIgSDthOnt2YXIgSWE9bC5uYXZpZ2F0b3I7aWYoSWEpe3ZhciBKYT1JYS51c2VyQWdlbnQ7aWYoSmEpe0g9SmE7YnJlYWsgYX19SD1cIlwifTt2YXIgTGE9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyxoLG4sQixDKXt0aGlzLkM9YTt0aGlzLkE9Yjt0aGlzLnY9Yzt0aGlzLm89ZDt0aGlzLkI9ZS5zbGljZSgpO3RoaXMubT1mLnNsaWNlKCk7dGhpcy5qPXRoaXMubD10aGlzLmM9dGhpcy5iPW51bGw7dGhpcy5mPXRoaXMuZz0hMTt0aGlzLnM9Zzt0aGlzLmg9aDt0aGlzLkQ9Qzt0aGlzLnc9bjt2YXIgej10aGlzO3RoaXMudT1rYShmdW5jdGlvbihhLGIpe3oubD1hO3ouaj1iO0thKHopfSl9LE1hPWZ1bmN0aW9uKGEsYixjKXt0aGlzLmI9YTt0aGlzLmM9Yjt0aGlzLmE9ISFjfSxLYT1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYil7Yj9hKCExLG5ldyBNYSghMSxudWxsLCEwKSk6KGI9bmV3IERhLGIuYS53aXRoQ3JlZGVudGlhbHM9ZC5ELGQuYj1iLEVhKGIsZC5DLGQuQSxkLm8sZC52KS50aGVuKGZ1bmN0aW9uKGIpe2QuYj1udWxsO3ZhciBjPTA9PT1GYShiKSxlPUYoYik7aWYoIShjPSFjKSl2YXIgYz1wKFs0MDgsNDI5XSxlKSxcbmY9cChkLm0sZSksYz01MDA8PWUmJjYwMD5lfHxjfHxmO2M/KGI9Mj09PUZhKGIpLGEoITEsbmV3IE1hKCExLG51bGwsYikpKTphKCEwLG5ldyBNYShwKGQuQixlKSxiKSl9KSl9ZnVuY3Rpb24gYyhhLGIpe3ZhciBjPWQubDthPWQuajt2YXIgZT1iLmM7aWYoYi5iKXRyeXt2YXIgZj1kLnMoZSxHYShlKSk7bShmKT9jKGYpOmMoKX1jYXRjaChCKXthKEIpfWVsc2UgbnVsbCE9PWU/KGI9Y2EoKSxmPUdhKGUpLGIuc2VydmVyUmVzcG9uc2U9ZixkLmg/YShkLmgoZSxiKSk6YShiKSk6KGI9Yi5hP2QuZj9nYSgpOmRhKCk6bmV3IHIoXCJyZXRyeS1saW1pdC1leGNlZWRlZFwiLFwiTWF4IHJldHJ5IHRpbWUgZm9yIG9wZXJhdGlvbiBleGNlZWRlZCwgcGxlYXNlIHRyeSBhZ2Fpbi5cIiksYShiKSl9dmFyIGQ9YTthLmc/YygwLG5ldyBNYSghMSxudWxsLCEwKSk6YS5jPWJhKGIsYyxhLncpfTtMYS5wcm90b3R5cGUuYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnV9O1xuTGEucHJvdG90eXBlLmNhbmNlbD1mdW5jdGlvbihhKXt0aGlzLmc9ITA7dGhpcy5mPWF8fCExO251bGwhPT10aGlzLmMmJigwLHRoaXMuYykoITEpO251bGwhPT10aGlzLmImJnRoaXMuYi5hYm9ydCgpfTt2YXIgTmE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPUNhKGEuYiksZD1hLmgrZCxlPWEuaGVhZGVycz9oYShhLmhlYWRlcnMpOnt9O251bGwhPT1iJiYwPGIubGVuZ3RoJiYoZS5BdXRob3JpemF0aW9uPVwiRmlyZWJhc2UgXCIrYik7ZVtcIlgtRmlyZWJhc2UtU3RvcmFnZS1WZXJzaW9uXCJdPVwid2VianMvXCIrKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgZmlyZWJhc2U/ZmlyZWJhc2UuU0RLX1ZFUlNJT046XCJBcHBNYW5hZ2VyXCIpO3JldHVybiBuZXcgTGEoZCxhLm1ldGhvZCxlLGEuYm9keSxhLmMsYS5nLGEuaixhLmEsYS50aW1lb3V0LDAsYyl9O3ZhciBPYT1mdW5jdGlvbigpe307dmFyIFBhPWZ1bmN0aW9uKGEpe3RoaXMuYj1maXJlYmFzZS5Qcm9taXNlLnJlamVjdChhKX07UGEucHJvdG90eXBlLmE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ifTtQYS5wcm90b3R5cGUuY2FuY2VsPWZ1bmN0aW9uKCl7fTt2YXIgUWE9ZnVuY3Rpb24oKXt0aGlzLmE9e307dGhpcy5iPU51bWJlci5NSU5fU0FGRV9JTlRFR0VSfSxSYT1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoKXtkZWxldGUgZS5hW2RdfXZhciBkPWEuYjthLmIrKzthLmFbZF09Yjt2YXIgZT1hO2IuYSgpLnRoZW4oYyxjKX0sU2E9ZnVuY3Rpb24oYSl7dihhLmEsZnVuY3Rpb24oYSxjKXtjJiZjLmNhbmNlbCghMCl9KTthLmE9e319O3ZhciBUYT1mdW5jdGlvbihhLGIsYyxkLGUpe3RoaXMuYT1hO3RoaXMuZz1udWxsO2lmKG51bGwhPT10aGlzLmEmJihhPXRoaXMuYS5vcHRpb25zLHkoYSkpKXthPWEuc3RvcmFnZUJ1Y2tldHx8bnVsbDtpZihudWxsPT1hKWE9bnVsbDtlbHNle3ZhciBmPW51bGw7dHJ5e2Y9dWEoYSl9Y2F0Y2goZyl7fWlmKG51bGwhPT1mKXtpZihcIlwiIT09Zi5wYXRoKXRocm93IG5ldyByKFwiaW52YWxpZC1kZWZhdWx0LWJ1Y2tldFwiLFwiSW52YWxpZCBkZWZhdWx0IGJ1Y2tldCAnXCIrYStcIicuXCIpO2E9Zi5idWNrZXR9fXRoaXMuZz1hfXRoaXMubz1iO3RoaXMubT1jO3RoaXMuaj1lO3RoaXMubD1kO3RoaXMuYz0xMkU0O3RoaXMuYj02RTQ7dGhpcy5oPW5ldyBRYTt0aGlzLmY9ITF9LFVhPWZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT09YS5hJiZ5KGEuYS5JTlRFUk5BTCkmJnkoYS5hLklOVEVSTkFMLmdldFRva2VuKT9hLmEuSU5URVJOQUwuZ2V0VG9rZW4oKS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiB5KGEpP1xuYS5hY2Nlc3NUb2tlbjpudWxsfSxmdW5jdGlvbigpe3JldHVybiBudWxsfSk6ZmlyZWJhc2UuUHJvbWlzZS5yZXNvbHZlKG51bGwpfTtUYS5wcm90b3R5cGUuYnVja2V0PWZ1bmN0aW9uKCl7aWYodGhpcy5mKXRocm93IGdhKCk7cmV0dXJuIHRoaXMuZ307dmFyIEk9ZnVuY3Rpb24oYSxiLGMpe2lmKGEuZilyZXR1cm4gbmV3IFBhKGdhKCkpO2I9YS5tKGIsYyxudWxsPT09YS5hLGEuaik7UmEoYS5oLGIpO3JldHVybiBifTt2YXIgVmE9LTEhPUguaW5kZXhPZihcIk9wZXJhXCIpLFdhPS0xIT1ILmluZGV4T2YoXCJUcmlkZW50XCIpfHwtMSE9SC5pbmRleE9mKFwiTVNJRVwiKSxYYT0tMSE9SC5pbmRleE9mKFwiRWRnZVwiKSxZYT0tMSE9SC5pbmRleE9mKFwiR2Vja29cIikmJiEoLTEhPUgudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwid2Via2l0XCIpJiYtMT09SC5pbmRleE9mKFwiRWRnZVwiKSkmJiEoLTEhPUguaW5kZXhPZihcIlRyaWRlbnRcIil8fC0xIT1ILmluZGV4T2YoXCJNU0lFXCIpKSYmLTE9PUguaW5kZXhPZihcIkVkZ2VcIiksWmE9LTEhPUgudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwid2Via2l0XCIpJiYtMT09SC5pbmRleE9mKFwiRWRnZVwiKSwkYTtcbmE6e3ZhciBhYj1cIlwiLGJiPWZ1bmN0aW9uKCl7dmFyIGE9SDtpZihZYSlyZXR1cm4vcnZcXDooW15cXCk7XSspKFxcKXw7KS8uZXhlYyhhKTtpZihYYSlyZXR1cm4vRWRnZVxcLyhbXFxkXFwuXSspLy5leGVjKGEpO2lmKFdhKXJldHVybi9cXGIoPzpNU0lFfHJ2KVs6IF0oW15cXCk7XSspKFxcKXw7KS8uZXhlYyhhKTtpZihaYSlyZXR1cm4vV2ViS2l0XFwvKFxcUyspLy5leGVjKGEpO2lmKFZhKXJldHVybi8oPzpWZXJzaW9uKVsgXFwvXT8oXFxTKykvLmV4ZWMoYSl9KCk7YmImJihhYj1iYj9iYlsxXTpcIlwiKTtpZihXYSl7dmFyIGNiLGRiPWwuZG9jdW1lbnQ7Y2I9ZGI/ZGIuZG9jdW1lbnRNb2RlOnZvaWQgMDtpZihudWxsIT1jYiYmY2I+cGFyc2VGbG9hdChhYikpeyRhPVN0cmluZyhjYik7YnJlYWsgYX19JGE9YWJ9XG52YXIgZWI9JGEscGE9e30sZmI9ZnVuY3Rpb24oYSl7cmV0dXJuIHFhKGEsZnVuY3Rpb24oKXtmb3IodmFyIGI9MCxjPXJhKFN0cmluZyhlYikpLnNwbGl0KFwiLlwiKSxkPXJhKFN0cmluZyhhKSkuc3BsaXQoXCIuXCIpLGU9TWF0aC5tYXgoYy5sZW5ndGgsZC5sZW5ndGgpLGY9MDswPT1iJiZmPGU7ZisrKXt2YXIgZz1jW2ZdfHxcIlwiLGg9ZFtmXXx8XCJcIjtkb3tnPS8oXFxkKikoXFxEKikoLiopLy5leGVjKGcpfHxbXCJcIixcIlwiLFwiXCIsXCJcIl07aD0vKFxcZCopKFxcRCopKC4qKS8uZXhlYyhoKXx8W1wiXCIsXCJcIixcIlwiLFwiXCJdO2lmKDA9PWdbMF0ubGVuZ3RoJiYwPT1oWzBdLmxlbmd0aClicmVhaztiPXNhKDA9PWdbMV0ubGVuZ3RoPzA6cGFyc2VJbnQoZ1sxXSwxMCksMD09aFsxXS5sZW5ndGg/MDpwYXJzZUludChoWzFdLDEwKSl8fHNhKDA9PWdbMl0ubGVuZ3RoLDA9PWhbMl0ubGVuZ3RoKXx8c2EoZ1syXSxoWzJdKTtnPWdbM107aD1oWzNdfXdoaWxlKDA9PWIpfXJldHVybiAwPD1ifSl9O3ZhciBnYj1mdW5jdGlvbihhKXt2YXIgYj1sLkJsb2JCdWlsZGVyfHxsLldlYktpdEJsb2JCdWlsZGVyO2lmKG0oYikpe2Zvcih2YXIgYj1uZXcgYixjPTA7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliLmFwcGVuZChhcmd1bWVudHNbY10pO3JldHVybiBiLmdldEJsb2IoKX1iPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7Yz1sLkJsb2JCdWlsZGVyfHxsLldlYktpdEJsb2JCdWlsZGVyO2lmKG0oYykpe2Zvcih2YXIgYz1uZXcgYyxkPTA7ZDxiLmxlbmd0aDtkKyspYy5hcHBlbmQoYltkXSx2b2lkIDApO2I9Yy5nZXRCbG9iKHZvaWQgMCl9ZWxzZSBpZihtKGwuQmxvYikpYj1uZXcgQmxvYihiLHt9KTtlbHNlIHRocm93IEVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IGNyZWF0aW5nIEJsb2JzXCIpO3JldHVybiBifSxoYj1mdW5jdGlvbihhLGIsYyl7bShjKXx8KGM9YS5zaXplKTtyZXR1cm4gYS53ZWJraXRTbGljZT9hLndlYmtpdFNsaWNlKGIsXG5jKTphLm1velNsaWNlP2EubW96U2xpY2UoYixjKTphLnNsaWNlP1lhJiYhZmIoXCIxMy4wXCIpfHxaYSYmIWZiKFwiNTM3LjFcIik/KDA+YiYmKGIrPWEuc2l6ZSksMD5iJiYoYj0wKSwwPmMmJihjKz1hLnNpemUpLGM8YiYmKGM9YiksYS5zbGljZShiLGMtYikpOmEuc2xpY2UoYixjKTpudWxsfTt2YXIgaWI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYn0sSj1mdW5jdGlvbihhLGIsYyxkKXt0aGlzLmM9YTt0aGlzLmI9Ynx8YTt0aGlzLndyaXRhYmxlPSEhYzt0aGlzLmE9ZHx8aWJ9LGpiPW51bGwsa2I9ZnVuY3Rpb24oKXtpZihqYilyZXR1cm4gamI7dmFyIGE9W107YS5wdXNoKG5ldyBKKFwiYnVja2V0XCIpKTthLnB1c2gobmV3IEooXCJnZW5lcmF0aW9uXCIpKTthLnB1c2gobmV3IEooXCJtZXRhZ2VuZXJhdGlvblwiKSk7YS5wdXNoKG5ldyBKKFwibmFtZVwiLFwiZnVsbFBhdGhcIiwhMCkpO3ZhciBiPW5ldyBKKFwibmFtZVwiKTtiLmE9ZnVuY3Rpb24oYSxiKXtyZXR1cm4hbmEoYil8fDI+Yi5sZW5ndGg/YjpqYShiKX07YS5wdXNoKGIpO2I9bmV3IEooXCJzaXplXCIpO2IuYT1mdW5jdGlvbihhLGIpe3JldHVybiB5KGIpPytiOmJ9O2EucHVzaChiKTthLnB1c2gobmV3IEooXCJ0aW1lQ3JlYXRlZFwiKSk7YS5wdXNoKG5ldyBKKFwidXBkYXRlZFwiKSk7YS5wdXNoKG5ldyBKKFwibWQ1SGFzaFwiLG51bGwsITApKTtcbmEucHVzaChuZXcgSihcImNhY2hlQ29udHJvbFwiLG51bGwsITApKTthLnB1c2gobmV3IEooXCJjb250ZW50RGlzcG9zaXRpb25cIixudWxsLCEwKSk7YS5wdXNoKG5ldyBKKFwiY29udGVudEVuY29kaW5nXCIsbnVsbCwhMCkpO2EucHVzaChuZXcgSihcImNvbnRlbnRMYW5ndWFnZVwiLG51bGwsITApKTthLnB1c2gobmV3IEooXCJjb250ZW50VHlwZVwiLG51bGwsITApKTthLnB1c2gobmV3IEooXCJtZXRhZGF0YVwiLFwiY3VzdG9tTWV0YWRhdGFcIiwhMCkpO2EucHVzaChuZXcgSihcImRvd25sb2FkVG9rZW5zXCIsXCJkb3dubG9hZFVSTHNcIiwhMSxmdW5jdGlvbihhLGIpe2lmKCEobmEoYikmJjA8Yi5sZW5ndGgpKXJldHVybltdO3ZhciBjPWVuY29kZVVSSUNvbXBvbmVudDtyZXR1cm4gYi5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uKGIpe3ZhciBkPWEuZnVsbFBhdGgsZD1cImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwXCIrKFwiL2IvXCIrYyhhLmJ1Y2tldCkrXCIvby9cIitjKGQpKTtiPUNhKHthbHQ6XCJtZWRpYVwiLFxudG9rZW46Yn0pO3JldHVybiBkK2J9KX0pKTtyZXR1cm4gamI9YX0sbGI9ZnVuY3Rpb24oYSxiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcInJlZlwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYi5vKGIsbmV3IEQoYS5idWNrZXQsYS5mdWxsUGF0aCkpfX0pfSxtYj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz17fSxkPWIubGVuZ3RoLGU9MDtlPGQ7ZSsrKXt2YXIgZj1iW2VdO2Yud3JpdGFibGUmJihjW2YuY109YVtmLmJdKX1yZXR1cm4gSlNPTi5zdHJpbmdpZnkoYyl9LG5iPWZ1bmN0aW9uKGEpe2lmKCFhfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpdGhyb3dcIkV4cGVjdGVkIE1ldGFkYXRhIG9iamVjdC5cIjtmb3IodmFyIGIgaW4gYSl7dmFyIGM9YVtiXTtpZihcImN1c3RvbU1ldGFkYXRhXCI9PT1iKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGMpdGhyb3dcIkV4cGVjdGVkIG9iamVjdCBmb3IgJ2N1c3RvbU1ldGFkYXRhJyBtYXBwaW5nLlwiO31lbHNlIGlmKG51bGwhPWMmJlwib2JqZWN0XCI9PT10eXBlb2YgYyl0aHJvd1wiTWFwcGluZyBmb3IgJ1wiK1xuYitcIicgY2Fubm90IGJlIGFuIG9iamVjdC5cIjt9fTt2YXIgSz1mdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWIubGVuZ3RoLGU9Yi5sZW5ndGgsZj0wO2Y8Yi5sZW5ndGg7ZisrKWlmKGJbZl0uYil7ZD1mO2JyZWFrfWlmKCEoZDw9Yy5sZW5ndGgmJmMubGVuZ3RoPD1lKSl0aHJvdyBkPT09ZT8oYj1kLGQ9MT09PWQ/XCJhcmd1bWVudFwiOlwiYXJndW1lbnRzXCIpOihiPVwiYmV0d2VlbiBcIitkK1wiIGFuZCBcIitlLGQ9XCJhcmd1bWVudHNcIiksbmV3IHIoXCJpbnZhbGlkLWFyZ3VtZW50LWNvdW50XCIsXCJJbnZhbGlkIGFyZ3VtZW50IGNvdW50IGluIGBcIithK1wiYDogRXhwZWN0ZWQgXCIrYitcIiBcIitkK1wiLCByZWNlaXZlZCBcIitjLmxlbmd0aCtcIi5cIik7Zm9yKGY9MDtmPGMubGVuZ3RoO2YrKyl0cnl7YltmXS5hKGNbZl0pfWNhdGNoKGcpe2lmKGcgaW5zdGFuY2VvZiBFcnJvcil0aHJvdyBmYShmLGEsZy5tZXNzYWdlKTt0aHJvdyBmYShmLGEsZyk7fX0sTD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7dGhpcy5hPWZ1bmN0aW9uKGIpe2MuYiYmIW0oYil8fGEoYil9O1xudGhpcy5iPSEhYn0sb2I9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZnVuY3Rpb24oYyl7YShjKTtiKGMpfX0sTT1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7aWYoIShcInN0cmluZ1wiPT09dHlwZW9mIGF8fGEgaW5zdGFuY2VvZiBTdHJpbmcpKXRocm93XCJFeHBlY3RlZCBzdHJpbmcuXCI7fXZhciBkO2E/ZD1vYihjLGEpOmQ9YztyZXR1cm4gbmV3IEwoZCxiKX0scGI9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEwoZnVuY3Rpb24oYSl7aWYoIShhIGluc3RhbmNlb2YgVWludDhBcnJheXx8YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyfHxvYSgpJiZhIGluc3RhbmNlb2YgQmxvYikpdGhyb3dcIkV4cGVjdGVkIEJsb2Igb3IgRmlsZS5cIjt9KX0scWI9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEwoZnVuY3Rpb24oYSl7aWYoISgoXCJudW1iZXJcIj09PXR5cGVvZiBhfHxhIGluc3RhbmNlb2YgTnVtYmVyKSYmMDw9YSkpdGhyb3dcIkV4cGVjdGVkIGEgbnVtYmVyIDAgb3IgZ3JlYXRlci5cIjt9KX0scmI9ZnVuY3Rpb24oYSxcbmIpe3JldHVybiBuZXcgTChmdW5jdGlvbihiKXtpZighKG51bGw9PT1ifHx5KGIpJiZiIGluc3RhbmNlb2YgT2JqZWN0KSl0aHJvd1wiRXhwZWN0ZWQgYW4gT2JqZWN0LlwiO3koYSkmJmEoYil9LGIpfSxOPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBMKGZ1bmN0aW9uKGEpe2lmKG51bGwhPT1hJiZcImZ1bmN0aW9uXCIhPWFhKGEpKXRocm93XCJFeHBlY3RlZCBhIEZ1bmN0aW9uLlwiO30sITApfTt2YXIgTz1mdW5jdGlvbihhLGIpe29hKCkmJmEgaW5zdGFuY2VvZiBCbG9iPyh0aGlzLmk9YSxiPWEuc2l6ZSxhPWEudHlwZSk6KGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcj8oYj90aGlzLmk9bmV3IFVpbnQ4QXJyYXkoYSk6KHRoaXMuaT1uZXcgVWludDhBcnJheShhLmJ5dGVMZW5ndGgpLHRoaXMuaS5zZXQobmV3IFVpbnQ4QXJyYXkoYSkpKSxiPXRoaXMuaS5sZW5ndGgpOihiP3RoaXMuaT1hOih0aGlzLmk9bmV3IFVpbnQ4QXJyYXkoYS5sZW5ndGgpLHRoaXMuaS5zZXQoYSkpLGI9YS5sZW5ndGgpLGE9XCJcIik7dGhpcy5hPWI7dGhpcy5iPWF9O08ucHJvdG90eXBlLnR5cGU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ifTtcbk8ucHJvdG90eXBlLnNsaWNlPWZ1bmN0aW9uKGEsYil7aWYob2EoKSYmdGhpcy5pIGluc3RhbmNlb2YgQmxvYilyZXR1cm4gYT1oYih0aGlzLmksYSxiKSxudWxsPT09YT9udWxsOm5ldyBPKGEpO2E9bmV3IFVpbnQ4QXJyYXkodGhpcy5pLmJ1ZmZlcixhLGItYSk7cmV0dXJuIG5ldyBPKGEsITApfTtcbnZhciBzYj1mdW5jdGlvbihhKXt2YXIgYj1bXTtBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShiLGFyZ3VtZW50cyk7aWYob2EoKSlyZXR1cm4gYj1iLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIE8/YS5pOmF9KSxuZXcgTyhnYi5hcHBseShudWxsLGIpKTt2YXIgYj1iLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gbmEoYSk/QmEoXCJyYXdcIixhKS5iLmJ1ZmZlcjphLmkuYnVmZmVyfSksYz0wO2IuZm9yRWFjaChmdW5jdGlvbihhKXtjKz1hLmJ5dGVMZW5ndGh9KTt2YXIgZD1uZXcgVWludDhBcnJheShjKSxlPTA7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2E9bmV3IFVpbnQ4QXJyYXkoYSk7Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspZFtlKytdPWFbYl19KTtyZXR1cm4gbmV3IE8oZCwhMCl9O3ZhciBQPWZ1bmN0aW9uKGEpe2lmKCFhKXRocm93IGNhKCk7fSx0Yj1mdW5jdGlvbihhLGIpe3JldHVybiBmdW5jdGlvbihjLGQpe3ZhciBlO2E6e3RyeXtlPUpTT04ucGFyc2UoZCl9Y2F0Y2goaCl7ZT1udWxsO2JyZWFrIGF9Yz10eXBlb2YgZTtlPVwib2JqZWN0XCI9PWMmJm51bGwhPWV8fFwiZnVuY3Rpb25cIj09Yz9lOm51bGx9aWYobnVsbD09PWUpZT1udWxsO2Vsc2V7Yz17dHlwZTpcImZpbGVcIn07ZD1iLmxlbmd0aDtmb3IodmFyIGY9MDtmPGQ7ZisrKXt2YXIgZz1iW2ZdO2NbZy5iXT1nLmEoYyxlW2cuY10pfWxiKGMsYSk7ZT1jfVAobnVsbCE9PWUpO3JldHVybiBlfX0sUT1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtiPTQwMT09PUYoYik/bmV3IHIoXCJ1bmF1dGhlbnRpY2F0ZWRcIixcIlVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWQsIHBsZWFzZSBhdXRoZW50aWNhdGUgdXNpbmcgRmlyZWJhc2UgQXV0aGVudGljYXRpb24gYW5kIHRyeSBhZ2Fpbi5cIik6NDAyPT09RihiKT9cbm5ldyByKFwicXVvdGEtZXhjZWVkZWRcIixcIlF1b3RhIGZvciBidWNrZXQgJ1wiK2EuYnVja2V0K1wiJyBleGNlZWRlZCwgcGxlYXNlIHZpZXcgcXVvdGEgb24gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL3ByaWNpbmcvLlwiKTo0MDM9PT1GKGIpP25ldyByKFwidW5hdXRob3JpemVkXCIsXCJVc2VyIGRvZXMgbm90IGhhdmUgcGVybWlzc2lvbiB0byBhY2Nlc3MgJ1wiK2EucGF0aCtcIicuXCIpOmM7Yi5zZXJ2ZXJSZXNwb25zZT1jLnNlcnZlclJlc3BvbnNlO3JldHVybiBifX0sdWI9ZnVuY3Rpb24oYSl7dmFyIGI9UShhKTtyZXR1cm4gZnVuY3Rpb24oYyxkKXt2YXIgZT1iKGMsZCk7NDA0PT09RihjKSYmKGU9bmV3IHIoXCJvYmplY3Qtbm90LWZvdW5kXCIsXCJPYmplY3QgJ1wiK2EucGF0aCtcIicgZG9lcyBub3QgZXhpc3QuXCIpKTtlLnNlcnZlclJlc3BvbnNlPWQuc2VydmVyUmVzcG9uc2U7cmV0dXJuIGV9fSx2Yj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGEoYik7YT1uZXcgdyhxK1wiL3YwXCIrZCxcIkdFVFwiLFxudGIoYSxjKSxhLmMpO2EuYT11YihiKTtyZXR1cm4gYX0sd2I9ZnVuY3Rpb24oYSxiKXt2YXIgYz10YShiKTthPW5ldyB3KHErXCIvdjBcIitjLFwiREVMRVRFXCIsZnVuY3Rpb24oKXt9LGEuYyk7YS5jPVsyMDAsMjA0XTthLmE9dWIoYik7cmV0dXJuIGF9LHhiPWZ1bmN0aW9uKGEsYixjKXtjPWM/aGEoYyk6e307Yy5mdWxsUGF0aD1hLnBhdGg7Yy5zaXplPWIuYTtjLmNvbnRlbnRUeXBlfHwoYT1iJiZiLnR5cGUoKXx8XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixjLmNvbnRlbnRUeXBlPWEpO3JldHVybiBjfSx5Yj1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVwiL2IvXCIrZW5jb2RlVVJJQ29tcG9uZW50KGIuYnVja2V0KStcIi9vXCIsZz17XCJYLUdvb2ctVXBsb2FkLVByb3RvY29sXCI6XCJtdWx0aXBhcnRcIn0saDtoPVwiXCI7Zm9yKHZhciBuPTA7Mj5uO24rKyloKz1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMik7Z1tcIkNvbnRlbnQtVHlwZVwiXT1cIm11bHRpcGFydC9yZWxhdGVkOyBib3VuZGFyeT1cIitcbmg7ZT14YihiLGQsZSk7bj1tYihlLGMpO2Q9c2IoXCItLVwiK2grXCJcXHJcXG5Db250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcXHJcXG5cXHJcXG5cIituK1wiXFxyXFxuLS1cIitoK1wiXFxyXFxuQ29udGVudC1UeXBlOiBcIitlLmNvbnRlbnRUeXBlK1wiXFxyXFxuXFxyXFxuXCIsZCxcIlxcclxcbi0tXCIraCtcIi0tXCIpO2lmKG51bGw9PT1kKXRocm93IGVhKCk7YT1uZXcgdyhxK1wiL3YwXCIrZixcIlBPU1RcIix0YihhLGMpLGEuYik7YS5iPXtuYW1lOmUuZnVsbFBhdGh9O2EuaGVhZGVycz1nO2EuYm9keT1kLmk7YS5hPVEoYik7cmV0dXJuIGF9LHpiPWZ1bmN0aW9uKGEsYixjLGQpe3RoaXMuYT1hO3RoaXMuYj1iO3RoaXMuYz0hIWM7dGhpcy5mPWR8fG51bGx9LEFiPWZ1bmN0aW9uKGEsYil7dmFyIGM7dHJ5e2M9YS5hLmdldFJlc3BvbnNlSGVhZGVyKFwiWC1Hb29nLVVwbG9hZC1TdGF0dXNcIil9Y2F0Y2goZCl7UCghMSl9UChwKGJ8fFtcImFjdGl2ZVwiXSxjKSk7cmV0dXJuIGN9LEJiPWZ1bmN0aW9uKGEsXG5iLGMsZCxlKXt2YXIgZj1cIi9iL1wiK2VuY29kZVVSSUNvbXBvbmVudChiLmJ1Y2tldCkrXCIvb1wiLGc9eGIoYixkLGUpO2U9e25hbWU6Zy5mdWxsUGF0aH07Zj1xK1wiL3YwXCIrZjtkPXtcIlgtR29vZy1VcGxvYWQtUHJvdG9jb2xcIjpcInJlc3VtYWJsZVwiLFwiWC1Hb29nLVVwbG9hZC1Db21tYW5kXCI6XCJzdGFydFwiLFwiWC1Hb29nLVVwbG9hZC1IZWFkZXItQ29udGVudC1MZW5ndGhcIjpkLmEsXCJYLUdvb2ctVXBsb2FkLUhlYWRlci1Db250ZW50LVR5cGVcIjpnLmNvbnRlbnRUeXBlLFwiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCJ9O2M9bWIoZyxjKTthPW5ldyB3KGYsXCJQT1NUXCIsZnVuY3Rpb24oYSl7QWIoYSk7dmFyIGI7dHJ5e2I9YS5hLmdldFJlc3BvbnNlSGVhZGVyKFwiWC1Hb29nLVVwbG9hZC1VUkxcIil9Y2F0Y2goQil7UCghMSl9UChuYShiKSk7cmV0dXJuIGJ9LGEuYik7YS5iPWU7YS5oZWFkZXJzPWQ7YS5ib2R5PWM7YS5hPVEoYik7cmV0dXJuIGF9LENiPVxuZnVuY3Rpb24oYSxiLGMsZCl7YT1uZXcgdyhjLFwiUE9TVFwiLGZ1bmN0aW9uKGEpe3ZhciBiPUFiKGEsW1wiYWN0aXZlXCIsXCJmaW5hbFwiXSksYzt0cnl7Yz1hLmEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJYLUdvb2ctVXBsb2FkLVNpemUtUmVjZWl2ZWRcIil9Y2F0Y2goaCl7UCghMSl9YT1jO2lzRmluaXRlKGEpJiYoYT1TdHJpbmcoYSkpO2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/L15cXHMqLT8weC9pLnRlc3QoYSk/cGFyc2VJbnQoYSwxNik6cGFyc2VJbnQoYSwxMCk6TmFOO1AoIWlzTmFOKGEpKTtyZXR1cm4gbmV3IHpiKGEsZC5hLFwiZmluYWxcIj09PWIpfSxhLmIpO2EuaGVhZGVycz17XCJYLUdvb2ctVXBsb2FkLUNvbW1hbmRcIjpcInF1ZXJ5XCJ9O2EuYT1RKGIpO2EuZj0hMTtyZXR1cm4gYX0sRGI9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9bmV3IHpiKDAsMCk7Zz8oaC5hPWcuYSxoLmI9Zy5iKTooaC5hPTAsaC5iPWQuYSk7aWYoZC5hIT09aC5iKXRocm93IG5ldyByKFwic2VydmVyLWZpbGUtd3Jvbmctc2l6ZVwiLFxuXCJTZXJ2ZXIgcmVjb3JkZWQgaW5jb3JyZWN0IHVwbG9hZCBmaWxlIHNpemUsIHBsZWFzZSByZXRyeSB0aGUgdXBsb2FkLlwiKTt2YXIgbj1nPWguYi1oLmE7MDxlJiYobj1NYXRoLm1pbihuLGUpKTt2YXIgQj1oLmE7ZT17XCJYLUdvb2ctVXBsb2FkLUNvbW1hbmRcIjpuPT09Zz9cInVwbG9hZCwgZmluYWxpemVcIjpcInVwbG9hZFwiLFwiWC1Hb29nLVVwbG9hZC1PZmZzZXRcIjpoLmF9O2c9ZC5zbGljZShCLEIrbik7aWYobnVsbD09PWcpdGhyb3cgZWEoKTtjPW5ldyB3KGMsXCJQT1NUXCIsZnVuY3Rpb24oYSxjKXt2YXIgZT1BYihhLFtcImFjdGl2ZVwiLFwiZmluYWxcIl0pLGc9aC5hK24sQz1kLmEsejtcImZpbmFsXCI9PT1lP3o9dGIoYixmKShhLGMpOno9bnVsbDtyZXR1cm4gbmV3IHpiKGcsQyxcImZpbmFsXCI9PT1lLHopfSxiLmIpO2MuaGVhZGVycz1lO2MuYm9keT1nLmk7Yy5sPW51bGw7Yy5hPVEoYSk7Yy5mPSExO3JldHVybiBjfTt2YXIgVD1mdW5jdGlvbihhLGIsYyxkLGUsZil7dGhpcy5MPWE7dGhpcy5jPWI7dGhpcy5sPWM7dGhpcy5mPWU7dGhpcy5oPWZ8fG51bGw7dGhpcy5zPWQ7dGhpcy5tPTA7dGhpcy5EPXRoaXMudT0hMTt0aGlzLkI9W107dGhpcy5TPTI2MjE0NDx0aGlzLmYuYTt0aGlzLmI9XCJydW5uaW5nXCI7dGhpcy5hPXRoaXMudj10aGlzLmc9bnVsbDt0aGlzLmo9MTt2YXIgZz10aGlzO3RoaXMuRj1mdW5jdGlvbihhKXtnLmE9bnVsbDtnLmo9MTtcInN0b3JhZ2UvY2FuY2VsZWRcIj09PWEuY29kZT8oZy51PSEwLFIoZykpOihnLmc9YSxTKGcsXCJlcnJvclwiKSl9O3RoaXMuUD1mdW5jdGlvbihhKXtnLmE9bnVsbDtcInN0b3JhZ2UvY2FuY2VsZWRcIj09PWEuY29kZT9SKGcpOihnLmc9YSxTKGcsXCJlcnJvclwiKSl9O3RoaXMuQT10aGlzLm89bnVsbDt0aGlzLkM9a2EoZnVuY3Rpb24oYSxiKXtnLm89YTtnLkE9YjtFYihnKX0pO3RoaXMuQy50aGVuKG51bGwsZnVuY3Rpb24oKXt9KX0sRWI9ZnVuY3Rpb24oYSl7XCJydW5uaW5nXCI9PT1cbmEuYiYmbnVsbD09PWEuYSYmKGEuUz9udWxsPT09YS52P0ZiKGEpOmEudT9HYihhKTphLkQ/SGIoYSk6SWIoYSk6SmIoYSkpfSxVPWZ1bmN0aW9uKGEsYil7VWEoYS5jKS50aGVuKGZ1bmN0aW9uKGMpe3N3aXRjaChhLmIpe2Nhc2UgXCJydW5uaW5nXCI6YihjKTticmVhaztjYXNlIFwiY2FuY2VsaW5nXCI6UyhhLFwiY2FuY2VsZWRcIik7YnJlYWs7Y2FzZSBcInBhdXNpbmdcIjpTKGEsXCJwYXVzZWRcIil9fSl9LEZiPWZ1bmN0aW9uKGEpe1UoYSxmdW5jdGlvbihiKXt2YXIgYz1CYihhLmMsYS5sLGEucyxhLmYsYS5oKTthLmE9SShhLmMsYyxiKTthLmEuYSgpLnRoZW4oZnVuY3Rpb24oYil7YS5hPW51bGw7YS52PWI7YS51PSExO1IoYSl9LHRoaXMuRil9KX0sR2I9ZnVuY3Rpb24oYSl7dmFyIGI9YS52O1UoYSxmdW5jdGlvbihjKXt2YXIgZD1DYihhLmMsYS5sLGIsYS5mKTthLmE9SShhLmMsZCxjKTthLmEuYSgpLnRoZW4oZnVuY3Rpb24oYil7YS5hPW51bGw7S2IoYSxiLmEpO2EudT0hMTtiLmMmJihhLkQ9XG4hMCk7UihhKX0sYS5GKX0pfSxJYj1mdW5jdGlvbihhKXt2YXIgYj0yNjIxNDQqYS5qLGM9bmV3IHpiKGEubSxhLmYuYSksZD1hLnY7VShhLGZ1bmN0aW9uKGUpe3ZhciBmO3RyeXtmPURiKGEubCxhLmMsZCxhLmYsYixhLnMsYyl9Y2F0Y2goZyl7YS5nPWc7UyhhLFwiZXJyb3JcIik7cmV0dXJufWEuYT1JKGEuYyxmLGUpO2EuYS5hKCkudGhlbihmdW5jdGlvbihiKXszMzU1NDQzMj4yNjIxNDQqYS5qJiYoYS5qKj0yKTthLmE9bnVsbDtLYihhLGIuYSk7Yi5jPyhhLmg9Yi5mLFMoYSxcInN1Y2Nlc3NcIikpOlIoYSl9LGEuRil9KX0sSGI9ZnVuY3Rpb24oYSl7VShhLGZ1bmN0aW9uKGIpe3ZhciBjPXZiKGEuYyxhLmwsYS5zKTthLmE9SShhLmMsYyxiKTthLmEuYSgpLnRoZW4oZnVuY3Rpb24oYil7YS5hPW51bGw7YS5oPWI7UyhhLFwic3VjY2Vzc1wiKX0sYS5QKX0pfSxKYj1mdW5jdGlvbihhKXtVKGEsZnVuY3Rpb24oYil7dmFyIGM9eWIoYS5jLGEubCxhLnMsYS5mLGEuaCk7YS5hPUkoYS5jLGMsXG5iKTthLmEuYSgpLnRoZW4oZnVuY3Rpb24oYil7YS5hPW51bGw7YS5oPWI7S2IoYSxhLmYuYSk7UyhhLFwic3VjY2Vzc1wiKX0sYS5GKX0pfSxLYj1mdW5jdGlvbihhLGIpe3ZhciBjPWEubTthLm09YjthLm0+YyYmVihhKX0sUz1mdW5jdGlvbihhLGIpe2lmKGEuYiE9PWIpc3dpdGNoKGIpe2Nhc2UgXCJjYW5jZWxpbmdcIjphLmI9YjtudWxsIT09YS5hJiZhLmEuY2FuY2VsKCk7YnJlYWs7Y2FzZSBcInBhdXNpbmdcIjphLmI9YjtudWxsIT09YS5hJiZhLmEuY2FuY2VsKCk7YnJlYWs7Y2FzZSBcInJ1bm5pbmdcIjp2YXIgYz1cInBhdXNlZFwiPT09YS5iO2EuYj1iO2MmJihWKGEpLEViKGEpKTticmVhaztjYXNlIFwicGF1c2VkXCI6YS5iPWI7VihhKTticmVhaztjYXNlIFwiY2FuY2VsZWRcIjphLmc9ZGEoKTthLmI9YjtWKGEpO2JyZWFrO2Nhc2UgXCJlcnJvclwiOmEuYj1iO1YoYSk7YnJlYWs7Y2FzZSBcInN1Y2Nlc3NcIjphLmI9YixWKGEpfX0sUj1mdW5jdGlvbihhKXtzd2l0Y2goYS5iKXtjYXNlIFwicGF1c2luZ1wiOlMoYSxcblwicGF1c2VkXCIpO2JyZWFrO2Nhc2UgXCJjYW5jZWxpbmdcIjpTKGEsXCJjYW5jZWxlZFwiKTticmVhaztjYXNlIFwicnVubmluZ1wiOkViKGEpfX07VC5wcm90b3R5cGUudz1mdW5jdGlvbigpe3JldHVybiBuZXcgRyh0aGlzLm0sdGhpcy5mLmEsbWEodGhpcy5iKSx0aGlzLmgsdGhpcyx0aGlzLkwpfTtcblQucHJvdG90eXBlLk09ZnVuY3Rpb24oYSxiLGMsZCl7ZnVuY3Rpb24gZShhKXt0cnl7ZyhhKTtyZXR1cm59Y2F0Y2goeil7fXRyeXtpZihoKGEpLCEobShhLm5leHQpfHxtKGEuZXJyb3IpfHxtKGEuY29tcGxldGUpKSl0aHJvd1wiXCI7fWNhdGNoKHope3Rocm93XCJFeHBlY3RlZCBhIGZ1bmN0aW9uIG9yIGFuIE9iamVjdCB3aXRoIG9uZSBvZiBgbmV4dGAsIGBlcnJvcmAsIGBjb21wbGV0ZWAgcHJvcGVydGllcy5cIjt9fWZ1bmN0aW9uIGYoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyxkKXtudWxsIT09YSYmSyhcIm9uXCIsYSxhcmd1bWVudHMpO3ZhciBlPW5ldyB2YShiLGMsZCk7TGIobixlKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYT1uLkIsYj1hLmluZGV4T2YoZSk7LTEhPT1iJiZhLnNwbGljZShiLDEpfX19dmFyIGc9TigpLmEsaD1yYihudWxsLCEwKS5hO0soXCJvblwiLFtNKGZ1bmN0aW9uKCl7aWYoXCJzdGF0ZV9jaGFuZ2VkXCIhPT1hKXRocm93XCJFeHBlY3RlZCBvbmUgb2YgdGhlIGV2ZW50IHR5cGVzOiBbc3RhdGVfY2hhbmdlZF0uXCI7XG59KSxyYihlLCEwKSxOKCksTigpXSxhcmd1bWVudHMpO3ZhciBuPXRoaXMsQj1bcmIoZnVuY3Rpb24oYSl7aWYobnVsbD09PWEpdGhyb3dcIkV4cGVjdGVkIGEgZnVuY3Rpb24gb3IgYW4gT2JqZWN0IHdpdGggb25lIG9mIGBuZXh0YCwgYGVycm9yYCwgYGNvbXBsZXRlYCBwcm9wZXJ0aWVzLlwiO2UoYSl9KSxOKCksTigpXTtyZXR1cm4gbShiKXx8bShjKXx8bShkKT9mKG51bGwpKGIsYyxkKTpmKEIpfTtULnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuQy50aGVuKGEsYil9O1xudmFyIExiPWZ1bmN0aW9uKGEsYil7YS5CLnB1c2goYik7TWIoYSxiKX0sVj1mdW5jdGlvbihhKXtOYihhKTtBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhLkIpLmZvckVhY2goZnVuY3Rpb24oYil7TWIoYSxiKX0pfSxOYj1mdW5jdGlvbihhKXtpZihudWxsIT09YS5vKXt2YXIgYj0hMDtzd2l0Y2gobWEoYS5iKSl7Y2FzZSBcInN1Y2Nlc3NcIjpBKGEuby5iaW5kKG51bGwsYS53KCkpKSgpO2JyZWFrO2Nhc2UgXCJjYW5jZWxlZFwiOmNhc2UgXCJlcnJvclwiOkEoYS5BLmJpbmQobnVsbCxhLmcpKSgpO2JyZWFrO2RlZmF1bHQ6Yj0hMX1iJiYoYS5vPW51bGwsYS5BPW51bGwpfX0sTWI9ZnVuY3Rpb24oYSxiKXtzd2l0Y2gobWEoYS5iKSl7Y2FzZSBcInJ1bm5pbmdcIjpjYXNlIFwicGF1c2VkXCI6bnVsbCE9PWIuYyYmQShiLmMuYmluZChiLGEudygpKSkoKTticmVhaztjYXNlIFwic3VjY2Vzc1wiOm51bGwhPT1iLmImJkEoYi5iLmJpbmQoYikpKCk7YnJlYWs7Y2FzZSBcImNhbmNlbGVkXCI6Y2FzZSBcImVycm9yXCI6bnVsbCE9PVxuYi5hJiZBKGIuYS5iaW5kKGIsYS5nKSkoKTticmVhaztkZWZhdWx0Om51bGwhPT1iLmEmJkEoYi5hLmJpbmQoYixhLmcpKSgpfX07VC5wcm90b3R5cGUuTz1mdW5jdGlvbigpe0soXCJyZXN1bWVcIixbXSxhcmd1bWVudHMpO3ZhciBhPVwicGF1c2VkXCI9PT10aGlzLmJ8fFwicGF1c2luZ1wiPT09dGhpcy5iO2EmJlModGhpcyxcInJ1bm5pbmdcIik7cmV0dXJuIGF9O1QucHJvdG90eXBlLk49ZnVuY3Rpb24oKXtLKFwicGF1c2VcIixbXSxhcmd1bWVudHMpO3ZhciBhPVwicnVubmluZ1wiPT09dGhpcy5iO2EmJlModGhpcyxcInBhdXNpbmdcIik7cmV0dXJuIGF9O1QucHJvdG90eXBlLmNhbmNlbD1mdW5jdGlvbigpe0soXCJjYW5jZWxcIixbXSxhcmd1bWVudHMpO3ZhciBhPVwicnVubmluZ1wiPT09dGhpcy5ifHxcInBhdXNpbmdcIj09PXRoaXMuYjthJiZTKHRoaXMsXCJjYW5jZWxpbmdcIik7cmV0dXJuIGF9O3ZhciBXPWZ1bmN0aW9uKGEsYil7dGhpcy5iPWE7aWYoYil0aGlzLmE9YiBpbnN0YW5jZW9mIEQ/Yjp1YShiKTtlbHNlIGlmKGE9YS5idWNrZXQoKSxudWxsIT09YSl0aGlzLmE9bmV3IEQoYSxcIlwiKTtlbHNlIHRocm93IG5ldyByKFwibm8tZGVmYXVsdC1idWNrZXRcIixcIk5vIGRlZmF1bHQgYnVja2V0IGZvdW5kLiBEaWQgeW91IHNldCB0aGUgJ3N0b3JhZ2VCdWNrZXQnIHByb3BlcnR5IHdoZW4gaW5pdGlhbGl6aW5nIHRoZSBhcHA/XCIpO307Vy5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtLKFwidG9TdHJpbmdcIixbXSxhcmd1bWVudHMpO3JldHVyblwiZ3M6Ly9cIit0aGlzLmEuYnVja2V0K1wiL1wiK3RoaXMuYS5wYXRofTt2YXIgT2I9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IFcoYSxiKX07az1XLnByb3RvdHlwZTtcbmsuSD1mdW5jdGlvbihhKXtLKFwiY2hpbGRcIixbTSgpXSxhcmd1bWVudHMpO3ZhciBiPWlhKHRoaXMuYS5wYXRoLGEpO3JldHVybiBPYih0aGlzLmIsbmV3IEQodGhpcy5hLmJ1Y2tldCxiKSl9O2sua2E9ZnVuY3Rpb24oKXt2YXIgYTthPXRoaXMuYS5wYXRoO2lmKDA9PWEubGVuZ3RoKWE9bnVsbDtlbHNle3ZhciBiPWEubGFzdEluZGV4T2YoXCIvXCIpO2E9LTE9PT1iP1wiXCI6YS5zbGljZSgwLGIpfXJldHVybiBudWxsPT09YT9udWxsOk9iKHRoaXMuYixuZXcgRCh0aGlzLmEuYnVja2V0LGEpKX07ay5tYT1mdW5jdGlvbigpe3JldHVybiBPYih0aGlzLmIsbmV3IEQodGhpcy5hLmJ1Y2tldCxcIlwiKSl9O2suVT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmEuYnVja2V0fTtrLmZhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYS5wYXRofTtrLmphPWZ1bmN0aW9uKCl7cmV0dXJuIGphKHRoaXMuYS5wYXRoKX07ay5vYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmIubH07XG5rLlo9ZnVuY3Rpb24oYSxiKXtLKFwicHV0XCIsW3BiKCksbmV3IEwobmIsITApXSxhcmd1bWVudHMpO1godGhpcyxcInB1dFwiKTtyZXR1cm4gbmV3IFQodGhpcyx0aGlzLmIsdGhpcy5hLGtiKCksbmV3IE8oYSksYil9O2suJD1mdW5jdGlvbihhLGIsYyl7SyhcInB1dFN0cmluZ1wiLFtNKCksTSh3YSwhMCksbmV3IEwobmIsITApXSxhcmd1bWVudHMpO1godGhpcyxcInB1dFN0cmluZ1wiKTt2YXIgZD1CYSh5KGIpP2I6XCJyYXdcIixhKSxlPWM/aGEoYyk6e307IXkoZS5jb250ZW50VHlwZSkmJnkoZC5hKSYmKGUuY29udGVudFR5cGU9ZC5hKTtyZXR1cm4gbmV3IFQodGhpcyx0aGlzLmIsdGhpcy5hLGtiKCksbmV3IE8oZC5iLCEwKSxlKX07ay5YPWZ1bmN0aW9uKCl7SyhcImRlbGV0ZVwiLFtdLGFyZ3VtZW50cyk7WCh0aGlzLFwiZGVsZXRlXCIpO3ZhciBhPXRoaXM7cmV0dXJuIFVhKHRoaXMuYikudGhlbihmdW5jdGlvbihiKXt2YXIgYz13YihhLmIsYS5hKTtyZXR1cm4gSShhLmIsYyxiKS5hKCl9KX07XG5rLkk9ZnVuY3Rpb24oKXtLKFwiZ2V0TWV0YWRhdGFcIixbXSxhcmd1bWVudHMpO1godGhpcyxcImdldE1ldGFkYXRhXCIpO3ZhciBhPXRoaXM7cmV0dXJuIFVhKHRoaXMuYikudGhlbihmdW5jdGlvbihiKXt2YXIgYz12YihhLmIsYS5hLGtiKCkpO3JldHVybiBJKGEuYixjLGIpLmEoKX0pfTtrLmFhPWZ1bmN0aW9uKGEpe0soXCJ1cGRhdGVNZXRhZGF0YVwiLFtuZXcgTChuYix2b2lkIDApXSxhcmd1bWVudHMpO1godGhpcyxcInVwZGF0ZU1ldGFkYXRhXCIpO3ZhciBiPXRoaXM7cmV0dXJuIFVhKHRoaXMuYikudGhlbihmdW5jdGlvbihjKXt2YXIgZD1iLmIsZT1iLmEsZj1hLGc9a2IoKSxoPXRhKGUpLGg9cStcIi92MFwiK2gsZj1tYihmLGcpLGQ9bmV3IHcoaCxcIlBBVENIXCIsdGIoZCxnKSxkLmMpO2QuaGVhZGVycz17XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIn07ZC5ib2R5PWY7ZC5hPXViKGUpO3JldHVybiBJKGIuYixkLGMpLmEoKX0pfTtcbmsuWT1mdW5jdGlvbigpe0soXCJnZXREb3dubG9hZFVSTFwiLFtdLGFyZ3VtZW50cyk7WCh0aGlzLFwiZ2V0RG93bmxvYWRVUkxcIik7cmV0dXJuIHRoaXMuSSgpLnRoZW4oZnVuY3Rpb24oYSl7YT1hLmRvd25sb2FkVVJMc1swXTtpZih5KGEpKXJldHVybiBhO3Rocm93IG5ldyByKFwibm8tZG93bmxvYWQtdXJsXCIsXCJUaGUgZ2l2ZW4gZmlsZSBkb2VzIG5vdCBoYXZlIGFueSBkb3dubG9hZCBVUkxzLlwiKTt9KX07dmFyIFg9ZnVuY3Rpb24oYSxiKXtpZihcIlwiPT09YS5hLnBhdGgpdGhyb3cgbmV3IHIoXCJpbnZhbGlkLXJvb3Qtb3BlcmF0aW9uXCIsXCJUaGUgb3BlcmF0aW9uICdcIitiK1wiJyBjYW5ub3QgYmUgcGVyZm9ybWVkIG9uIGEgcm9vdCByZWZlcmVuY2UsIGNyZWF0ZSBhIG5vbi1yb290IHJlZmVyZW5jZSB1c2luZyBjaGlsZCwgc3VjaCBhcyAuY2hpbGQoJ2ZpbGUucG5nJykuXCIpO307dmFyIFk9ZnVuY3Rpb24oYSxiKXt0aGlzLmE9bmV3IFRhKGEsZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IFcoYSxiKX0sTmEsdGhpcyx5KGIpP2I6bmV3IE9hKTt0aGlzLmI9YTt0aGlzLmM9bmV3IFBiKHRoaXMpfTtrPVkucHJvdG90eXBlO2suYmE9ZnVuY3Rpb24oYSl7SyhcInJlZlwiLFtNKGZ1bmN0aW9uKGEpe2lmKC9eW0EtWmEtel0rOlxcL1xcLy8udGVzdChhKSl0aHJvd1wiRXhwZWN0ZWQgY2hpbGQgcGF0aCBidXQgZ290IGEgVVJMLCB1c2UgcmVmRnJvbVVSTCBpbnN0ZWFkLlwiO30sITApXSxhcmd1bWVudHMpO3ZhciBiPW5ldyBXKHRoaXMuYSk7cmV0dXJuIG0oYSk/Yi5IKGEpOmJ9O1xuay5jYT1mdW5jdGlvbihhKXtLKFwicmVmRnJvbVVSTFwiLFtNKGZ1bmN0aW9uKGEpe2lmKCEvXltBLVphLXpdKzpcXC9cXC8vLnRlc3QoYSkpdGhyb3dcIkV4cGVjdGVkIGZ1bGwgVVJMIGJ1dCBnb3QgYSBjaGlsZCBwYXRoLCB1c2UgcmVmIGluc3RlYWQuXCI7dHJ5e3VhKGEpfWNhdGNoKGMpe3Rocm93XCJFeHBlY3RlZCB2YWxpZCBmdWxsIFVSTCBidXQgZ290IGFuIGludmFsaWQgb25lLlwiO319LCExKV0sYXJndW1lbnRzKTtyZXR1cm4gbmV3IFcodGhpcy5hLGEpfTtrLmhhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYS5ifTtrLmVhPWZ1bmN0aW9uKGEpe0soXCJzZXRNYXhVcGxvYWRSZXRyeVRpbWVcIixbcWIoKV0sYXJndW1lbnRzKTt0aGlzLmEuYj1hfTtrLmdhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYS5jfTtrLmRhPWZ1bmN0aW9uKGEpe0soXCJzZXRNYXhPcGVyYXRpb25SZXRyeVRpbWVcIixbcWIoKV0sYXJndW1lbnRzKTt0aGlzLmEuYz1hfTtrLlQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ifTtcbmsuUj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmN9O3ZhciBQYj1mdW5jdGlvbihhKXt0aGlzLmE9YX07UGIucHJvdG90eXBlLmI9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmEuYTthLmY9ITA7YS5hPW51bGw7U2EoYS5oKX07dmFyIFo9ZnVuY3Rpb24oYSxiLGMpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2dldDpjfSl9O1cucHJvdG90eXBlLnRvU3RyaW5nPVcucHJvdG90eXBlLnRvU3RyaW5nO1cucHJvdG90eXBlLmNoaWxkPVcucHJvdG90eXBlLkg7Vy5wcm90b3R5cGUucHV0PVcucHJvdG90eXBlLlo7Vy5wcm90b3R5cGUucHV0U3RyaW5nPVcucHJvdG90eXBlLiQ7Vy5wcm90b3R5cGVbXCJkZWxldGVcIl09Vy5wcm90b3R5cGUuWDtXLnByb3RvdHlwZS5nZXRNZXRhZGF0YT1XLnByb3RvdHlwZS5JO1cucHJvdG90eXBlLnVwZGF0ZU1ldGFkYXRhPVcucHJvdG90eXBlLmFhO1cucHJvdG90eXBlLmdldERvd25sb2FkVVJMPVcucHJvdG90eXBlLlk7WihXLnByb3RvdHlwZSxcInBhcmVudFwiLFcucHJvdG90eXBlLmthKTtaKFcucHJvdG90eXBlLFwicm9vdFwiLFcucHJvdG90eXBlLm1hKTtaKFcucHJvdG90eXBlLFwiYnVja2V0XCIsVy5wcm90b3R5cGUuVSk7WihXLnByb3RvdHlwZSxcImZ1bGxQYXRoXCIsVy5wcm90b3R5cGUuZmEpO1xuWihXLnByb3RvdHlwZSxcIm5hbWVcIixXLnByb3RvdHlwZS5qYSk7WihXLnByb3RvdHlwZSxcInN0b3JhZ2VcIixXLnByb3RvdHlwZS5vYSk7WS5wcm90b3R5cGUucmVmPVkucHJvdG90eXBlLmJhO1kucHJvdG90eXBlLnJlZkZyb21VUkw9WS5wcm90b3R5cGUuY2E7WihZLnByb3RvdHlwZSxcIm1heE9wZXJhdGlvblJldHJ5VGltZVwiLFkucHJvdG90eXBlLmdhKTtZLnByb3RvdHlwZS5zZXRNYXhPcGVyYXRpb25SZXRyeVRpbWU9WS5wcm90b3R5cGUuZGE7WihZLnByb3RvdHlwZSxcIm1heFVwbG9hZFJldHJ5VGltZVwiLFkucHJvdG90eXBlLmhhKTtZLnByb3RvdHlwZS5zZXRNYXhVcGxvYWRSZXRyeVRpbWU9WS5wcm90b3R5cGUuZWE7WihZLnByb3RvdHlwZSxcImFwcFwiLFkucHJvdG90eXBlLlQpO1ooWS5wcm90b3R5cGUsXCJJTlRFUk5BTFwiLFkucHJvdG90eXBlLlIpO1BiLnByb3RvdHlwZVtcImRlbGV0ZVwiXT1QYi5wcm90b3R5cGUuYjtZLnByb3RvdHlwZS5jYXBpXz1mdW5jdGlvbihhKXtxPWF9O1xuVC5wcm90b3R5cGUub249VC5wcm90b3R5cGUuTTtULnByb3RvdHlwZS5yZXN1bWU9VC5wcm90b3R5cGUuTztULnByb3RvdHlwZS5wYXVzZT1ULnByb3RvdHlwZS5OO1QucHJvdG90eXBlLmNhbmNlbD1ULnByb3RvdHlwZS5jYW5jZWw7WihULnByb3RvdHlwZSxcInNuYXBzaG90XCIsVC5wcm90b3R5cGUudyk7WihHLnByb3RvdHlwZSxcImJ5dGVzVHJhbnNmZXJyZWRcIixHLnByb3RvdHlwZS5WKTtaKEcucHJvdG90eXBlLFwidG90YWxCeXRlc1wiLEcucHJvdG90eXBlLnFhKTtaKEcucHJvdG90eXBlLFwic3RhdGVcIixHLnByb3RvdHlwZS5uYSk7WihHLnByb3RvdHlwZSxcIm1ldGFkYXRhXCIsRy5wcm90b3R5cGUuaWEpO1ooRy5wcm90b3R5cGUsXCJkb3dubG9hZFVSTFwiLEcucHJvdG90eXBlLlcpO1ooRy5wcm90b3R5cGUsXCJ0YXNrXCIsRy5wcm90b3R5cGUucGEpO1ooRy5wcm90b3R5cGUsXCJyZWZcIixHLnByb3RvdHlwZS5sYSk7bGEuU1RBVEVfQ0hBTkdFRD1cInN0YXRlX2NoYW5nZWRcIjtcbnguUlVOTklORz1cInJ1bm5pbmdcIjt4LlBBVVNFRD1cInBhdXNlZFwiO3guU1VDQ0VTUz1cInN1Y2Nlc3NcIjt4LkNBTkNFTEVEPVwiY2FuY2VsZWRcIjt4LkVSUk9SPVwiZXJyb3JcIjtFLlJBVz1cInJhd1wiO0UuQkFTRTY0PVwiYmFzZTY0XCI7RS5CQVNFNjRVUkw9XCJiYXNlNjR1cmxcIjtFLkRBVEFfVVJMPVwiZGF0YV91cmxcIjsoZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe3JldHVybiBuZXcgWShhKX12YXIgYj17VGFza1N0YXRlOngsVGFza0V2ZW50OmxhLFN0cmluZ0Zvcm1hdDpFLFN0b3JhZ2U6WSxSZWZlcmVuY2U6V307aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBmaXJlYmFzZSlmaXJlYmFzZS5JTlRFUk5BTC5yZWdpc3RlclNlcnZpY2UoXCJzdG9yYWdlXCIsYSxiKTtlbHNlIHRocm93IEVycm9yKFwiQ2Fubm90IGluc3RhbGwgRmlyZWJhc2UgU3RvcmFnZSAtIGJlIHN1cmUgdG8gbG9hZCBmaXJlYmFzZS1hcHAuanMgZmlyc3QuXCIpO30pKCk7fSkuY2FsbCh0aGlzKTtcbn0pLmNhbGwoZ2xvYmFsKTtcbm1vZHVsZS5leHBvcnRzID0gZmlyZWJhc2Uuc3RvcmFnZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9maXJlYmFzZS9zdG9yYWdlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0IFRleCBmcm9tICcuL1RleCdcclxuZXhwb3J0IFRleE1hcmt1cCBmcm9tICcuL1RleE1hcmt1cCdcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL01hdGhKYXgvaW5kZXguanMiLCJpbXBvcnQgeyByZWdpc3RlclVzZXIgYXMgcmVnaXN0ZXJOZXdVc2VyLCBzaWdub3V0LCBzaWduaW4gfSBmcm9tICdoZWxwZXJzL2F1dGgnXHJcbmltcG9ydCB7IHNhdmVVc2VyIH0gZnJvbSAnaGVscGVycy9hcGknXHJcbmltcG9ydCB7IGZvcm1hdFVzZXJEZXRhaWxzIH0gZnJvbSAnaGVscGVycy9mb3JtYXQnXHJcbmltcG9ydCB7IGZpcmViYXNlQXV0aCB9IGZyb20gJ2NvbmZpZy9jb25zdGFudHMnXHJcbmltcG9ydCB7IGZldGNoVXNlciB9IGZyb20gJ2hlbHBlcnMvYXBpJ1xyXG5cclxuY29uc3QgRkVUQ0hJTkdfVVNFUiA9ICdGRVRDSElOR19VU0VSJ1xyXG5jb25zdCBGRVRDSElOR19VU0VSX1NVQ0NFU1MgPSAnRkVUQ0hJTkdfVVNFUl9TVUNDRVNTJ1xyXG5jb25zdCBGRVRDSElOR19VU0VSX0ZBSUxVUkUgPSAnRkVUQ0hJTkdfVVNFUl9GQUlMVVJFJ1xyXG5jb25zdCBBVVRIX1VTRVIgPSAnQVVUSF9VU0VSJ1xyXG5jb25zdCBVTkFVVEhfVVNFUiA9ICdVTkFVVEhfVVNFUidcclxuXHJcbmNvbnN0IGZldGNoaW5nVXNlciA9ICgpID0+ICh7XHJcblx0dHlwZTogRkVUQ0hJTkdfVVNFUixcclxufSlcclxuXHJcbmNvbnN0IGZldGNoaW5nVXNlclN1Y2Nlc3MgPSAodXNlcikgPT4gKHtcclxuXHR0eXBlOiBGRVRDSElOR19VU0VSX1NVQ0NFU1MsXHJcblx0dXNlcixcclxufSlcclxuXHJcbmNvbnN0IGZldGNoaW5nVXNlckZhaWx1cmUgPSAoZXJyb3IpID0+IHtcclxuXHRjb25zb2xlLmVycm9yKGVycm9yKVxyXG5cdHJldHVybiB7IFxyXG5cdFx0dHlwZTogRkVUQ0hJTkdfVVNFUl9GQUlMVVJFLFxyXG5cdFx0ZXJyb3I6ICdFcnJvciBGZXRjaGluZyBVc2VyJyxcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGF1dGhVc2VyID0gKHVpZCkgPT4oe1xyXG5cdHR5cGU6IEFVVEhfVVNFUixcclxuXHR1aWQsXHJcbn0pXHJcblxyXG5jb25zdCB1bmF1dGhVc2VyID0gKCkgPT4oe1xyXG5cdHR5cGU6IFVOQVVUSF9VU0VSLFxyXG59KVxyXG5cclxuXHJcblxyXG4vLyBUaHVua3NcclxuXHJcbi8qXHJcblx0RGV0YWlscyBjb21lIGRpcmVjdGx5IGZyb20gZm9ybSBjb21wb25lbnQsIGVhY2gga2V5IHZhbHVlIHBhaXIgaXMgYW4gaW5wdXQgb24gdGhlIGZvcm1cclxuKi9cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9IChkZXRhaWxzKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuXHRkaXNwYXRjaChmZXRjaGluZ1VzZXIoKSlcclxuXHRcclxuXHRyZXR1cm4gcmVnaXN0ZXJOZXdVc2VyKGRldGFpbHMuZW1haWwsIGRldGFpbHMucGFzc3dvcmQpXHJcblx0XHQudGhlbih1aWQgPT4gc2F2ZVVzZXIoZm9ybWF0VXNlckRldGFpbHMoeyAuLi5kZXRhaWxzLCB1aWQgfSkpKVxyXG5cdFx0LnRoZW4odXNlciA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKGZldGNoaW5nVXNlclN1Y2Nlc3ModXNlcikpXHJcblx0XHRcdGRpc3BhdGNoKGF1dGhVc2VyKHVzZXIudWlkKSlcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goZXJyb3IgPT4gZGlzcGF0Y2goZmV0Y2hpbmdVc2VyRmFpbHVyZShlcnJvcikpKVxyXG59XHJcblxyXG4vLyBLZWVwcyB0aGUgY2xpZW50IGFwcCdzIGF1dGggc3RhdGUgaW4gc3luYyB3aXRoIGZpcmViYXNlXHJcbmV4cG9ydCBjb25zdCBjaGVja0F1dGggPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuXHRyZXR1cm4gZmlyZWJhc2VBdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXIgPT4ge1xyXG5cdFx0aWYgKHVzZXIpIHtcclxuXHRcdFx0Y29uc3QgdWlkID0gdXNlci51aWRcclxuXHRcdFx0ZGlzcGF0Y2goZmV0Y2hpbmdVc2VyKCkpXHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gZmV0Y2hVc2VyKHVzZXIudWlkKVxyXG5cdFx0XHRcdC50aGVuKHVzZXIgPT4ge1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2goZmV0Y2hpbmdVc2VyU3VjY2Vzcyh1c2VyKSlcclxuXHRcdFx0XHRcdGRpc3BhdGNoKGF1dGhVc2VyKHVzZXIuaW5mby51aWQpKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNhdGNoKGVycm9yID0+IGRpc3BhdGNoKGZldGNoaW5nVXNlckZhaWx1cmUoZXJyb3IpKSlcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbm91dFVzZXIgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuXHRyZXR1cm4gc2lnbm91dCgpXHJcblx0XHQudGhlbigoKSA9PiBkaXNwYXRjaCh1bmF1dGhVc2VyKCkpKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbmluVXNlciA9IChlbWFpbCwgcGFzc3dvcmQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG5cdGRpc3BhdGNoKGZldGNoaW5nVXNlcigpKVxyXG5cdFxyXG5cdHJldHVybiBzaWduaW4oZW1haWwsIHBhc3N3b3JkKVxyXG5cdFx0LnRoZW4odXNlciA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKGZldGNoaW5nVXNlclN1Y2Nlc3ModXNlcikpXHJcblx0XHRcdGRpc3BhdGNoKGF1dGhVc2VyKHVzZXIuaW5mby51aWQpKVxyXG5cdFx0fSlcclxuXHRcdC5jYXRjaChlcnJvciA9PiBkaXNwYXRjaChmZXRjaGluZ1VzZXJGYWlsdXJlKGVycm9yKSkpXHJcbn1cclxuXHJcbi8vIFJlZHVjZXJzXHJcbmNvbnN0IGluaXRpYWxVc2Vyc1N0YXRlID0ge1xyXG5cdGlzRmV0Y2hpbmc6IGZhbHNlLFxyXG5cdGVycm9yOiAnJyxcclxuXHRhdXRoZWRJZDogbnVsbCxcclxuXHRpc0F1dGhlZDogZmFsc2UsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJzKHN0YXRlID0gaW5pdGlhbFVzZXJzU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBGRVRDSElOR19VU0VSOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGlzRmV0Y2hpbmc6IHRydWUsXHJcblx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHR9XHJcblx0XHRjYXNlIEZFVENISU5HX1VTRVJfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRpc0ZldGNoaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRlcnJvcjogJycsXHJcblx0XHRcdFx0W2FjdGlvbi51c2VyLmluZm8udWlkXTogdXNlcihzdGF0ZVthY3Rpb24udXNlci5pbmZvLnVpZF0sIGFjdGlvbiksXHJcblx0XHRcdH1cclxuXHRcdGNhc2UgRkVUQ0hJTkdfVVNFUl9GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGlzRmV0Y2hpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGVycm9yOiBhY3Rpb24uZXJyb3IsXHJcblx0XHRcdH1cclxuXHRcdGNhc2UgQVVUSF9VU0VSOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGF1dGhlZElkOiBhY3Rpb24udWlkLFxyXG5cdFx0XHRcdGlzQXV0aGVkOiB0cnVlLFxyXG5cdFx0XHR9XHJcblx0XHRjYXNlIFVOQVVUSF9VU0VSOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGF1dGhlZElkOiBudWxsLFxyXG5cdFx0XHRcdGlzQXV0aGVkOiBmYWxzZSxcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsVXNlclN0YXRlID0ge1xyXG5cdGluZm86IHt9LFxyXG5cdGFkbWluOiBmYWxzZSxcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlcihzdGF0ZSA9IGluaXRpYWxVc2VyU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBGRVRDSElOR19VU0VSX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Li4uYWN0aW9uLnVzZXIsXHJcblx0XHRcdH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZWR1eC9tb2R1bGVzL3VzZXJzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSThBQUFDVUNBTUFBQUNkcklyNUFBQUI5VkJNVkVYLy8vL1k1TzZzeU54MXFjbzFqYnYxK1BxVHVkUCsvdjRBQUFBQWhMYkQxK1ZQbDhEczhmYmk0dUpqb01VMU5UVzQwT0dFc2M3TzN1bWd3ZGpEdzhQaTYvTDE5Zldnb0tEczdPelkyTmpPenM1alkyT1RrNU5QVDA5MWRYV3NyS3orL3ZlRWhJVDkvdjRBUFZUKy92disvdnE0dUxqbHZJemwrdjMrL3ZOcGZacnN0M1BzL3Y1cGhielArLzRSYjdlcm0zOFJUNkxQa0VmZC9mN2RvbHNBWGF6bC92NEFNWkRsckdmKys5T1dQajZJaUlqcC9mNWdrY1B3L3Y3ZG9sd29mY0grL3Z6OThOSHEwNnlYWURPS01XTkdScHo5OHR1RGlwVzg0Ti8rOThwUG5OV3pmVWI1L3Y3WS9QNzMvdjdXNGZMODJKd3Vpc3EwdnVEKy91cThkajZuNFBnZ09JTDYvdjd3d1lJdmk3a3ZTVm1XeSt6dC9mNEFXbndBY1pzNFFYV24yUERieTlZNk0ySDB5NHpsczUvKy92Yisvdm16NWZuKy9lallwbWg5d2V2cy9mN3k0Yy9ocDJMKy91d3pEQkZHbk11bWoxZTlrcHQ5d2V6QmZUOE1ScHljUmtIWS9QdjAvdjc0L2QyQ3dld29kN3luV0VmZ3FxTHZ2SXE5OFB5RXY4V2wyUFNwcE0xR1YzeTJpbE9zNWZQOTRLYzZrTTVZRVdqKy9OYjIvdjZjMlBhaTNQZGhFVGpXeFpSZ1FXZFhFVHI5NUt3Z2FLNzU0Y2Rnb05Lc2lsMzk0YWYrL3YyUU1WZisrOC85NmJad0xuWnd0K1czY0VxMzdQdjk3THgzdk9oM0xuRCsvZWIrL2VPeTZQcXlhRXBSRlBGb0FBQUZvMGxFUVZSNDJ1M2JWWGZqT2hBQVlNdXlOQ096NDhScGtuSjM5ekl6TXpNek16TXpNelB6L1ozM29XMjJZRnRqU0s2M3gzcmFzOTM2ZkpaRzROR3NZWlJxUUdyRzFGcnIyUWM5OXo3NCtQc3Z2dklRd0V3elBMc2VlZWZaNTE5N0NhQ2ZOR1M4M3Z2ZzNWZGZCeGdOR3VMNThMazMzbm9CQUJjYTRubnNtYmZmQkJqZ1VrTTg5ejM2OHNNQWZReVNabmgyMzNNL0FNd2hkcHZoT2ZPcTZ3R0dpRGhxZ3VlRUUwODVHUUNXNW5BV3ZlYXN6d3NKd21EWXBQMENHN1ovN1N1ZUVxMzF0SjdXMDNwYXo1cW5qb2UwbnRiVGVuYThwMmViM0ZmcnplZHgyUHZmUEc0WVdjcmlzZGxoakswd3hwZ1pjMHNwSHJyVDl3amJWMVprOTdhTmwydExTL21obUtySGxaWWxPNW54MDVHV2tteHFIbGNxWjJzSDROYnVjeFJuVS9FSXFSeWJNTDhZVjlLZHZNZTJMSnM0MzIzSE1pZnNFVnpGZ3J6K0NGUDU3aVE5ekhKWW9mV3c1NmYyWmsyZVVFV2k0UG9zcElvbjVaSEtMTEZmMkVxS2lYaWtza3Z0WDh6eXhRUTgwbUlsOTlOZU1aQkI1UFRLN3UvZVRUY1dBUm0wd2VxVVBXOTRRYmRueVhvOXRySkxuMytDTGdBck1Nc0lucDcyY2FoOW9VNTlIdUh3c3VkREx4akhuMXViSjdKRVNZOFhkT252UlBWMENIMk4yYkd6dmd5cHNCNlBjS0xTNS9tTk9mTFlFclY0VE1ySWp6MkxaNTEvOXVtbmJvNmR0ZmNpVG5xTlI1QU9NV1BQZVJkZmQ4SGx5NXRqWnp6SDNCbzhrdFROWTgvVjExeDBDUUFBekFUYmJud2NXZDFENjU2OW5ndlB1WGIxRDRtWHNnaTVsVDBtTFFySG5pdk92UlFBd0p0UCsxZWtEc3IzT0xTRmZ0MnplTnFWbDZYRnp0cUJqdkp5UnY3YTR4YnlRRmJzckE2K3NpdDZwRjhtbjVCNFdZL2pGVDFXV056ajlYTzZXMVR5VUlkcm95Y2pkbFliWWNEeVBERnh1RFo0WnZJNEVFV1ZQSDVjM0RQTS9XU3lLbm5JcHlqVXg4N2FMdTlXOERCcStLeDdjbU9IK0laR1h2SUFDbm4wSFBETkNoNlRGL01NaHZxelpsVEJFOGtpSGwzc0VGOHh4OFBOQWg3Q1lBR0E2ZEE4U2JlYVo0YkdBYVpTL25LWWJQRjRzMEcvd203aEJZZ25EYUcwWndGbjk5WjdHY1ArQ05QcmlSUXhKYm1FaU9pVjk4QUljYTdmWFMzU016Q3pxUldzdTYybzdKK04rZ2tBR0REb3o2Vy9IclYvRmhDekNyWkkvWk1FR1BRSHlZWjRIaTdObDFxOFlIRy9BdzgvWlA4K3p0T0dLOTB6TzkvZE50K1RjdlByOXovLytmdmZQNWJKOXp1ZDFQNEIrUDdyYjcvNjdQTlBxcTQvdXc0NjRxakZvdzg3bU96SlhnKy8rK0tianpUcm9mNTRlY0NSeHh5NysvampEcTNCOCtNUEgydjNMNzkyRDg4OFVYMzU2ZE02VCtwZ1Z4c3ZKeXNFSG5qcXlTZnV2Q1hmMDFQYTY3NmZmdjd0cjE5L0ljZXp5RmhDenJqaDlqdnV2dXZtWmMzNVVKL3RYNTN2NVB0VHB2L0F5UE53Nm9HRDZ0RkhaSzRuZEdyMkVENFE4anlFQUNya2NRa2ZDRVlONlFTcWgvQzVrKytKblZvOXZxem9jWWxiUE5ZMlhKcjhENDlxOUVoS2IrZDdpRWxJa2tlUXpyK2FmQ1l0Q1VueTBISi9HZyt0ZzVEVVBhVFBGVjArbkpLZUozbUlDWHFkcDBPWllraVpYTFN2SisxOUNuZHE4WEJpYmt2cmNRbmpydmVFMUk4Vm80NUhhVDA5aTVwcUk5eFhjbTBrNmp6Q3AyWWlLUjdoK0JVOTlPdEswdjJ5OXNKYTQ0bnAxN20wKzNkYnlRb2VXeFdvY3FIVkoyaEFtUCs3UmVxU2lQVWIrU0NzMExmbFBQbVB6ZkZJVmF4cWkxei8wOG1wVThuMGlFZ1ZySkNpMTBmMW5NeWFHeXorSzlVOUlLS01jcllzajZsNDRZSzJRdlYrWVVaRlc2cUgrYXBFd1YreCtrTTNTbjNsRkk4ckZTOVQ3VnUwWHBRNVN2YTBIamUxakhNU0hnRGJVZHpPOVhTaXNwcHk5Y2FkU0cwdThOM29ZZkYyNzRROUFHN29LeFdaVEd6MnNEQ3lsQk5YcWNndVhhL3UydEpSeXVLUmFacTNtcVlaY1VjcEo2cFlIbDZ0bmwrdzBKU2M4OXM0NTVFWk1nR1ZXL3YvSFZwUDYyazlyYWYxdEo3VzAzcGF6dzczakFhWTlQYzB4OU5IRERCcGptY0dFV2ViRkQ4anhFR1RQRjJjYTlUOG1xbHZ1T3FaNzhHZVpubW81VnJUOGl3MGJIMkduZXY1RCsrMFNSZ0ltOUs4QUFBQUFFbEZUa1N1UW1DQ1wiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy93b3Jrc2hlZXQvdG9waWNzL0Nvb3JkaW5hdGVHZW9tZXRyeS9DaXJjbGVzRWxsaXBzZXNBbmRIeXBlcmJvbGFzL0NpcmNsZUF0T3JpZ2luLnBuZ1xuLy8gbW9kdWxlIGlkID0gMzIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IHJvdXRlcyBmcm9tICdjb25maWcvcm91dGVzJ1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5pbXBvcnQgKiBhcyByZWR1Y2VycyBmcm9tICdyZWR1eC9tb2R1bGVzJ1xyXG5cclxuaW1wb3J0ICdzdHlsZXMvc3R5bGVzLnNjc3MnXHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2VycyksIGNvbXBvc2UoXHJcblx0YXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcclxuXHR3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gPyB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKSA6IChmKSA9PiBmXHJcbikpXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcblx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcblx0XHR7cm91dGVzfVxyXG5cdDwvUHJvdmlkZXI+LFxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKVxyXG4pXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanN4IiwidmFyIGZpcmViYXNlID0gKGZ1bmN0aW9uKCl7XG4vKiEgQGxpY2Vuc2UgRmlyZWJhc2UgdjMuNi41XG4gICAgQnVpbGQ6IDMuNi41LXJjLjFcbiAgICBUZXJtczogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL3Rlcm1zLyAqL1xudmFyIGZpcmViYXNlID0gbnVsbDsgKGZ1bmN0aW9uKCkgeyB2YXIgYWE9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnRpZXM/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKGEsYixjKXtpZihjLmdldHx8Yy5zZXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkVTMyBkb2VzIG5vdCBzdXBwb3J0IGdldHRlcnMgYW5kIHNldHRlcnMuXCIpO2EhPUFycmF5LnByb3RvdHlwZSYmYSE9T2JqZWN0LnByb3RvdHlwZSYmKGFbYl09Yy52YWx1ZSl9LGg9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93PT09dGhpcz90aGlzOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJm51bGwhPWdsb2JhbD9nbG9iYWw6dGhpcyxsPWZ1bmN0aW9uKCl7bD1mdW5jdGlvbigpe307aC5TeW1ib2x8fChoLlN5bWJvbD1iYSl9LGNhPTAsYmE9ZnVuY3Rpb24oYSl7cmV0dXJuXCJqc2NvbXBfc3ltYm9sX1wiKyhhfHxcIlwiKStjYSsrfSxuPWZ1bmN0aW9uKCl7bCgpO3ZhciBhPWguU3ltYm9sLml0ZXJhdG9yO2F8fChhPWguU3ltYm9sLml0ZXJhdG9yPVxuaC5TeW1ib2woXCJpdGVyYXRvclwiKSk7XCJmdW5jdGlvblwiIT10eXBlb2YgQXJyYXkucHJvdG90eXBlW2FdJiZhYShBcnJheS5wcm90b3R5cGUsYSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIG0odGhpcyl9fSk7bj1mdW5jdGlvbigpe319LG09ZnVuY3Rpb24oYSl7dmFyIGI9MDtyZXR1cm4gZGEoZnVuY3Rpb24oKXtyZXR1cm4gYjxhLmxlbmd0aD97ZG9uZTohMSx2YWx1ZTphW2IrK119Ontkb25lOiEwfX0pfSxkYT1mdW5jdGlvbihhKXtuKCk7YT17bmV4dDphfTthW2guU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtyZXR1cm4gYX0scT10aGlzLHI9ZnVuY3Rpb24oKXt9LHQ9ZnVuY3Rpb24oYSl7dmFyIGI9dHlwZW9mIGE7aWYoXCJvYmplY3RcIj09YilpZihhKXtpZihhIGluc3RhbmNlb2YgQXJyYXkpcmV0dXJuXCJhcnJheVwiO2lmKGEgaW5zdGFuY2VvZiBPYmplY3QpcmV0dXJuIGI7dmFyIGM9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpO1xuaWYoXCJbb2JqZWN0IFdpbmRvd11cIj09YylyZXR1cm5cIm9iamVjdFwiO2lmKFwiW29iamVjdCBBcnJheV1cIj09Y3x8XCJudW1iZXJcIj09dHlwZW9mIGEubGVuZ3RoJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5zcGxpY2UmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnByb3BlcnR5SXNFbnVtZXJhYmxlJiYhYS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcInNwbGljZVwiKSlyZXR1cm5cImFycmF5XCI7aWYoXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT1jfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5jYWxsJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5wcm9wZXJ0eUlzRW51bWVyYWJsZSYmIWEucHJvcGVydHlJc0VudW1lcmFibGUoXCJjYWxsXCIpKXJldHVyblwiZnVuY3Rpb25cIn1lbHNlIHJldHVyblwibnVsbFwiO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT1iJiZcInVuZGVmaW5lZFwiPT10eXBlb2YgYS5jYWxsKXJldHVyblwib2JqZWN0XCI7cmV0dXJuIGJ9LHY9ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT10KGEpfSxlYT1mdW5jdGlvbihhLFxuYixjKXtyZXR1cm4gYS5jYWxsLmFwcGx5KGEuYmluZCxhcmd1bWVudHMpfSxmYT1mdW5jdGlvbihhLGIsYyl7aWYoIWEpdGhyb3cgRXJyb3IoKTtpZigyPGFyZ3VtZW50cy5sZW5ndGgpe3ZhciBkPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO0FycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGMsZCk7cmV0dXJuIGEuYXBwbHkoYixjKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX0sdz1mdW5jdGlvbihhLGIsYyl7dz1GdW5jdGlvbi5wcm90b3R5cGUuYmluZCYmLTEhPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLnRvU3RyaW5nKCkuaW5kZXhPZihcIm5hdGl2ZSBjb2RlXCIpP2VhOmZhO3JldHVybiB3LmFwcGx5KG51bGwsYXJndW1lbnRzKX0seD1mdW5jdGlvbihhLGIpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyxcbjEpO3JldHVybiBmdW5jdGlvbigpe3ZhciBiPWMuc2xpY2UoKTtiLnB1c2guYXBwbHkoYixhcmd1bWVudHMpO3JldHVybiBhLmFwcGx5KHRoaXMsYil9fSx5PWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYygpe31jLnByb3RvdHlwZT1iLnByb3RvdHlwZTthLmJhPWIucHJvdG90eXBlO2EucHJvdG90eXBlPW5ldyBjO2EucHJvdG90eXBlLmNvbnN0cnVjdG9yPWE7YS5hYT1mdW5jdGlvbihhLGMsZil7Zm9yKHZhciBkPUFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMiksZT0yO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspZFtlLTJdPWFyZ3VtZW50c1tlXTtyZXR1cm4gYi5wcm90b3R5cGVbY10uYXBwbHkoYSxkKX19O3ZhciB6O3o9XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPT10eXBlb2Ygc2VsZj9zZWxmOmdsb2JhbDtmdW5jdGlvbiBfX2V4dGVuZHMoYSxiKXtmdW5jdGlvbiBjKCl7dGhpcy5jb25zdHJ1Y3Rvcj1hfWZvcih2YXIgZCBpbiBiKWIuaGFzT3duUHJvcGVydHkoZCkmJihhW2RdPWJbZF0pO2EucHJvdG90eXBlPW51bGw9PT1iP09iamVjdC5jcmVhdGUoYik6KGMucHJvdG90eXBlPWIucHJvdG90eXBlLG5ldyBjKX1cbmZ1bmN0aW9uIF9fZGVjb3JhdGUoYSxiLGMsZCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aCxmPTM+ZT9iOm51bGw9PT1kP2Q9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiLGMpOmQsZztnPXouUmVmbGVjdDtpZihcIm9iamVjdFwiPT09dHlwZW9mIGcmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmRlY29yYXRlKWY9Zy5kZWNvcmF0ZShhLGIsYyxkKTtlbHNlIGZvcih2YXIgaz1hLmxlbmd0aC0xOzA8PWs7ay0tKWlmKGc9YVtrXSlmPSgzPmU/ZyhmKTozPGU/ZyhiLGMsZik6ZyhiLGMpKXx8ZjtyZXR1cm4gMzxlJiZmJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYixjLGYpLGZ9ZnVuY3Rpb24gX19tZXRhZGF0YShhLGIpe3ZhciBjPXouUmVmbGVjdDtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLm1ldGFkYXRhKXJldHVybiBjLm1ldGFkYXRhKGEsYil9XG52YXIgX19wYXJhbT1mdW5jdGlvbihhLGIpe3JldHVybiBmdW5jdGlvbihjLGQpe2IoYyxkLGEpfX0sX19hd2FpdGVyPWZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBuZXcgKGN8fChjPVByb21pc2UpKShmdW5jdGlvbihlLGYpe2Z1bmN0aW9uIGcoYSl7dHJ5e3AoZC5uZXh0KGEpKX1jYXRjaCh1KXtmKHUpfX1mdW5jdGlvbiBrKGEpe3RyeXtwKGQudGhyb3coYSkpfWNhdGNoKHUpe2YodSl9fWZ1bmN0aW9uIHAoYSl7YS5kb25lP2UoYS52YWx1ZSk6KG5ldyBjKGZ1bmN0aW9uKGIpe2IoYS52YWx1ZSl9KSkudGhlbihnLGspfXAoKGQ9ZC5hcHBseShhLGIpKS5uZXh0KCkpfSl9O1widW5kZWZpbmVkXCIhPT10eXBlb2Ygei5NJiZ6Lk18fCh6Ll9fZXh0ZW5kcz1fX2V4dGVuZHMsei5fX2RlY29yYXRlPV9fZGVjb3JhdGUsei5fX21ldGFkYXRhPV9fbWV0YWRhdGEsei5fX3BhcmFtPV9fcGFyYW0sei5fX2F3YWl0ZXI9X19hd2FpdGVyKTt2YXIgQT1mdW5jdGlvbihhKXtpZihFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSlFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLEEpO2Vsc2V7dmFyIGI9RXJyb3IoKS5zdGFjaztiJiYodGhpcy5zdGFjaz1iKX1hJiYodGhpcy5tZXNzYWdlPVN0cmluZyhhKSl9O3koQSxFcnJvcik7QS5wcm90b3R5cGUubmFtZT1cIkN1c3RvbUVycm9yXCI7dmFyIGdhPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWEuc3BsaXQoXCIlc1wiKSxkPVwiXCIsZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7ZS5sZW5ndGgmJjE8Yy5sZW5ndGg7KWQrPWMuc2hpZnQoKStlLnNoaWZ0KCk7cmV0dXJuIGQrYy5qb2luKFwiJXNcIil9O3ZhciBCPWZ1bmN0aW9uKGEsYil7Yi51bnNoaWZ0KGEpO0EuY2FsbCh0aGlzLGdhLmFwcGx5KG51bGwsYikpO2Iuc2hpZnQoKX07eShCLEEpO0IucHJvdG90eXBlLm5hbWU9XCJBc3NlcnRpb25FcnJvclwiO3ZhciBoYT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1cIkFzc2VydGlvbiBmYWlsZWRcIjtpZihjKXZhciBlPWUrKFwiOiBcIitjKSxmPWQ7ZWxzZSBhJiYoZSs9XCI6IFwiK2EsZj1iKTt0aHJvdyBuZXcgQihcIlwiK2UsZnx8W10pO30sQz1mdW5jdGlvbihhLGIsYyl7YXx8aGEoXCJcIixudWxsLGIsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpKX0sRD1mdW5jdGlvbihhLGIsYyl7dihhKXx8aGEoXCJFeHBlY3RlZCBmdW5jdGlvbiBidXQgZ290ICVzOiAlcy5cIixbdChhKSxhXSxiLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKSl9O3ZhciBFPWZ1bmN0aW9uKGEsYixjKXt0aGlzLlQ9Yzt0aGlzLk49YTt0aGlzLlU9Yjt0aGlzLnM9MDt0aGlzLm89bnVsbH07RS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKCl7dmFyIGE7MDx0aGlzLnM/KHRoaXMucy0tLGE9dGhpcy5vLHRoaXMubz1hLm5leHQsYS5uZXh0PW51bGwpOmE9dGhpcy5OKCk7cmV0dXJuIGF9O0UucHJvdG90eXBlLnB1dD1mdW5jdGlvbihhKXt0aGlzLlUoYSk7dGhpcy5zPHRoaXMuVCYmKHRoaXMucysrLGEubmV4dD10aGlzLm8sdGhpcy5vPWEpfTt2YXIgRjthOnt2YXIgaWE9cS5uYXZpZ2F0b3I7aWYoaWEpe3ZhciBqYT1pYS51c2VyQWdlbnQ7aWYoamEpe0Y9amE7YnJlYWsgYX19Rj1cIlwifTt2YXIga2E9ZnVuY3Rpb24oYSl7cS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgYTt9LDApfSxHLGxhPWZ1bmN0aW9uKCl7dmFyIGE9cS5NZXNzYWdlQ2hhbm5lbDtcInVuZGVmaW5lZFwiPT09dHlwZW9mIGEmJlwidW5kZWZpbmVkXCIhPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cucG9zdE1lc3NhZ2UmJndpbmRvdy5hZGRFdmVudExpc3RlbmVyJiYtMT09Ri5pbmRleE9mKFwiUHJlc3RvXCIpJiYoYT1mdW5jdGlvbigpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJRlJBTUVcIik7YS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO2Euc3JjPVwiXCI7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGEpO3ZhciBiPWEuY29udGVudFdpbmRvdyxhPWIuZG9jdW1lbnQ7YS5vcGVuKCk7YS53cml0ZShcIlwiKTthLmNsb3NlKCk7dmFyIGM9XCJjYWxsSW1tZWRpYXRlXCIrTWF0aC5yYW5kb20oKSxkPVwiZmlsZTpcIj09Yi5sb2NhdGlvbi5wcm90b2NvbD9cIipcIjpiLmxvY2F0aW9uLnByb3RvY29sK1xuXCIvL1wiK2IubG9jYXRpb24uaG9zdCxhPXcoZnVuY3Rpb24oYSl7aWYoKFwiKlwiPT1kfHxhLm9yaWdpbj09ZCkmJmEuZGF0YT09Yyl0aGlzLnBvcnQxLm9ubWVzc2FnZSgpfSx0aGlzKTtiLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYSwhMSk7dGhpcy5wb3J0MT17fTt0aGlzLnBvcnQyPXtwb3N0TWVzc2FnZTpmdW5jdGlvbigpe2IucG9zdE1lc3NhZ2UoYyxkKX19fSk7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhJiYtMT09Ri5pbmRleE9mKFwiVHJpZGVudFwiKSYmLTE9PUYuaW5kZXhPZihcIk1TSUVcIikpe3ZhciBiPW5ldyBhLGM9e30sZD1jO2IucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKCl7aWYodm9pZCAwIT09Yy5uZXh0KXtjPWMubmV4dDt2YXIgYT1jLkc7Yy5HPW51bGw7YSgpfX07cmV0dXJuIGZ1bmN0aW9uKGEpe2QubmV4dD17RzphfTtkPWQubmV4dDtiLnBvcnQyLnBvc3RNZXNzYWdlKDApfX1yZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIGRvY3VtZW50JiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW5cbmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTQ1JJUFRcIik/ZnVuY3Rpb24oYSl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNDUklQVFwiKTtiLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2Iub25yZWFkeXN0YXRlY2hhbmdlPW51bGw7Yi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpO2I9bnVsbDthKCk7YT1udWxsfTtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYil9OmZ1bmN0aW9uKGEpe3Euc2V0VGltZW91dChhLDApfX07dmFyIEg9ZnVuY3Rpb24oKXt0aGlzLnY9dGhpcy5mPW51bGx9LG1hPW5ldyBFKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBJfSxmdW5jdGlvbihhKXthLnJlc2V0KCl9LDEwMCk7SC5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGEsYil7dmFyIGM9bWEuZ2V0KCk7Yy5zZXQoYSxiKTt0aGlzLnY/dGhpcy52Lm5leHQ9YzooQyghdGhpcy5mKSx0aGlzLmY9Yyk7dGhpcy52PWN9O0gucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe3ZhciBhPW51bGw7dGhpcy5mJiYoYT10aGlzLmYsdGhpcy5mPXRoaXMuZi5uZXh0LHRoaXMuZnx8KHRoaXMudj1udWxsKSxhLm5leHQ9bnVsbCk7cmV0dXJuIGF9O3ZhciBJPWZ1bmN0aW9uKCl7dGhpcy5uZXh0PXRoaXMuc2NvcGU9dGhpcy5CPW51bGx9O0kucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGIpe3RoaXMuQj1hO3RoaXMuc2NvcGU9Yjt0aGlzLm5leHQ9bnVsbH07XG5JLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMubmV4dD10aGlzLnNjb3BlPXRoaXMuQj1udWxsfTt2YXIgTT1mdW5jdGlvbihhLGIpe0p8fG5hKCk7THx8KEooKSxMPSEwKTtvYS5hZGQoYSxiKX0sSixuYT1mdW5jdGlvbigpe2lmKC0xIT1TdHJpbmcocS5Qcm9taXNlKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSl7dmFyIGE9cS5Qcm9taXNlLnJlc29sdmUodm9pZCAwKTtKPWZ1bmN0aW9uKCl7YS50aGVuKHBhKX19ZWxzZSBKPWZ1bmN0aW9uKCl7dmFyIGE9cGE7IXYocS5zZXRJbW1lZGlhdGUpfHxxLldpbmRvdyYmcS5XaW5kb3cucHJvdG90eXBlJiYtMT09Ri5pbmRleE9mKFwiRWRnZVwiKSYmcS5XaW5kb3cucHJvdG90eXBlLnNldEltbWVkaWF0ZT09cS5zZXRJbW1lZGlhdGU/KEd8fChHPWxhKCkpLEcoYSkpOnEuc2V0SW1tZWRpYXRlKGEpfX0sTD0hMSxvYT1uZXcgSCxwYT1mdW5jdGlvbigpe2Zvcih2YXIgYTthPW9hLnJlbW92ZSgpOyl7dHJ5e2EuQi5jYWxsKGEuc2NvcGUpfWNhdGNoKGIpe2thKGIpfW1hLnB1dChhKX1MPSExfTt2YXIgTz1mdW5jdGlvbihhLGIpe3RoaXMuYj0wO3RoaXMuTD12b2lkIDA7dGhpcy5qPXRoaXMuZz10aGlzLnU9bnVsbDt0aGlzLm09dGhpcy5BPSExO2lmKGEhPXIpdHJ5e3ZhciBjPXRoaXM7YS5jYWxsKGIsZnVuY3Rpb24oYSl7TihjLDIsYSl9LGZ1bmN0aW9uKGEpe3RyeXtpZihhIGluc3RhbmNlb2YgRXJyb3IpdGhyb3cgYTt0aHJvdyBFcnJvcihcIlByb21pc2UgcmVqZWN0ZWQuXCIpO31jYXRjaChlKXt9TihjLDMsYSl9KX1jYXRjaChkKXtOKHRoaXMsMyxkKX19LHFhPWZ1bmN0aW9uKCl7dGhpcy5uZXh0PXRoaXMuY29udGV4dD10aGlzLmg9dGhpcy5jPXRoaXMuY2hpbGQ9bnVsbDt0aGlzLnc9ITF9O3FhLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMuY29udGV4dD10aGlzLmg9dGhpcy5jPXRoaXMuY2hpbGQ9bnVsbDt0aGlzLnc9ITF9O1xudmFyIHJhPW5ldyBFKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBxYX0sZnVuY3Rpb24oYSl7YS5yZXNldCgpfSwxMDApLHNhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1yYS5nZXQoKTtkLmM9YTtkLmg9YjtkLmNvbnRleHQ9YztyZXR1cm4gZH0sdWE9ZnVuY3Rpb24oYSxiLGMpe3RhKGEsYixjLG51bGwpfHxNKHgoYixhKSl9O08ucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oYSxiLGMpe251bGwhPWEmJkQoYSxcIm9wdF9vbkZ1bGZpbGxlZCBzaG91bGQgYmUgYSBmdW5jdGlvbi5cIik7bnVsbCE9YiYmRChiLFwib3B0X29uUmVqZWN0ZWQgc2hvdWxkIGJlIGEgZnVuY3Rpb24uIERpZCB5b3UgcGFzcyBvcHRfY29udGV4dCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IGluc3RlYWQgb2YgdGhlIHRoaXJkP1wiKTtyZXR1cm4gdmEodGhpcyx2KGEpP2E6bnVsbCx2KGIpP2I6bnVsbCxjKX07Ty5wcm90b3R5cGUudGhlbj1PLnByb3RvdHlwZS50aGVuO08ucHJvdG90eXBlLiRnb29nX1RoZW5hYmxlPSEwO1xuTy5wcm90b3R5cGUuWD1mdW5jdGlvbihhLGIpe3JldHVybiB2YSh0aGlzLG51bGwsYSxiKX07dmFyIHhhPWZ1bmN0aW9uKGEsYil7YS5nfHwyIT1hLmImJjMhPWEuYnx8d2EoYSk7QyhudWxsIT1iLmMpO2Euaj9hLmoubmV4dD1iOmEuZz1iO2Euaj1ifSx2YT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1zYShudWxsLG51bGwsbnVsbCk7ZS5jaGlsZD1uZXcgTyhmdW5jdGlvbihhLGcpe2UuYz1iP2Z1bmN0aW9uKGMpe3RyeXt2YXIgZT1iLmNhbGwoZCxjKTthKGUpfWNhdGNoKEspe2coSyl9fTphO2UuaD1jP2Z1bmN0aW9uKGIpe3RyeXt2YXIgZT1jLmNhbGwoZCxiKTthKGUpfWNhdGNoKEspe2coSyl9fTpnfSk7ZS5jaGlsZC51PWE7eGEoYSxlKTtyZXR1cm4gZS5jaGlsZH07Ty5wcm90b3R5cGUuWT1mdW5jdGlvbihhKXtDKDE9PXRoaXMuYik7dGhpcy5iPTA7Tih0aGlzLDIsYSl9O08ucHJvdG90eXBlLlo9ZnVuY3Rpb24oYSl7QygxPT10aGlzLmIpO3RoaXMuYj0wO04odGhpcywzLGEpfTtcbnZhciBOPWZ1bmN0aW9uKGEsYixjKXswPT1hLmImJihhPT09YyYmKGI9MyxjPW5ldyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbm5vdCByZXNvbHZlIHRvIGl0c2VsZlwiKSksYS5iPTEsdGEoYyxhLlksYS5aLGEpfHwoYS5MPWMsYS5iPWIsYS51PW51bGwsd2EoYSksMyE9Ynx8eWEoYSxjKSkpfSx0YT1mdW5jdGlvbihhLGIsYyxkKXtpZihhIGluc3RhbmNlb2YgTylyZXR1cm4gbnVsbCE9YiYmRChiLFwib3B0X29uRnVsZmlsbGVkIHNob3VsZCBiZSBhIGZ1bmN0aW9uLlwiKSxudWxsIT1jJiZEKGMsXCJvcHRfb25SZWplY3RlZCBzaG91bGQgYmUgYSBmdW5jdGlvbi4gRGlkIHlvdSBwYXNzIG9wdF9jb250ZXh0IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgaW5zdGVhZCBvZiB0aGUgdGhpcmQ/XCIpLHhhKGEsc2EoYnx8cixjfHxudWxsLGQpKSwhMDt2YXIgZTtpZihhKXRyeXtlPSEhYS4kZ29vZ19UaGVuYWJsZX1jYXRjaChnKXtlPSExfWVsc2UgZT0hMTtpZihlKXJldHVybiBhLnRoZW4oYixjLGQpLFxuITA7ZT10eXBlb2YgYTtpZihcIm9iamVjdFwiPT1lJiZudWxsIT1hfHxcImZ1bmN0aW9uXCI9PWUpdHJ5e3ZhciBmPWEudGhlbjtpZih2KGYpKXJldHVybiB6YShhLGYsYixjLGQpLCEwfWNhdGNoKGcpe3JldHVybiBjLmNhbGwoZCxnKSwhMH1yZXR1cm4hMX0semE9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj0hMSxnPWZ1bmN0aW9uKGEpe2Z8fChmPSEwLGMuY2FsbChlLGEpKX0saz1mdW5jdGlvbihhKXtmfHwoZj0hMCxkLmNhbGwoZSxhKSl9O3RyeXtiLmNhbGwoYSxnLGspfWNhdGNoKHApe2socCl9fSx3YT1mdW5jdGlvbihhKXthLkF8fChhLkE9ITAsTShhLlAsYSkpfSxBYT1mdW5jdGlvbihhKXt2YXIgYj1udWxsO2EuZyYmKGI9YS5nLGEuZz1iLm5leHQsYi5uZXh0PW51bGwpO2EuZ3x8KGEuaj1udWxsKTtudWxsIT1iJiZDKG51bGwhPWIuYyk7cmV0dXJuIGJ9O1xuTy5wcm90b3R5cGUuUD1mdW5jdGlvbigpe2Zvcih2YXIgYTthPUFhKHRoaXMpOyl7dmFyIGI9dGhpcy5iLGM9dGhpcy5MO2lmKDM9PWImJmEuaCYmIWEudyl7dmFyIGQ7Zm9yKGQ9dGhpcztkJiZkLm07ZD1kLnUpZC5tPSExfWlmKGEuY2hpbGQpYS5jaGlsZC51PW51bGwsQmEoYSxiLGMpO2Vsc2UgdHJ5e2Eudz9hLmMuY2FsbChhLmNvbnRleHQpOkJhKGEsYixjKX1jYXRjaChlKXtDYS5jYWxsKG51bGwsZSl9cmEucHV0KGEpfXRoaXMuQT0hMX07dmFyIEJhPWZ1bmN0aW9uKGEsYixjKXsyPT1iP2EuYy5jYWxsKGEuY29udGV4dCxjKTphLmgmJmEuaC5jYWxsKGEuY29udGV4dCxjKX0seWE9ZnVuY3Rpb24oYSxiKXthLm09ITA7TShmdW5jdGlvbigpe2EubSYmQ2EuY2FsbChudWxsLGIpfSl9LENhPWthO2Z1bmN0aW9uIFAoYSxiKXtpZighKGIgaW5zdGFuY2VvZiBPYmplY3QpKXJldHVybiBiO3N3aXRjaChiLmNvbnN0cnVjdG9yKXtjYXNlIERhdGU6cmV0dXJuIG5ldyBEYXRlKGIuZ2V0VGltZSgpKTtjYXNlIE9iamVjdDp2b2lkIDA9PT1hJiYoYT17fSk7YnJlYWs7Y2FzZSBBcnJheTphPVtdO2JyZWFrO2RlZmF1bHQ6cmV0dXJuIGJ9Zm9yKHZhciBjIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShjKSYmKGFbY109UChhW2NdLGJbY10pKTtyZXR1cm4gYX07Ty5hbGw9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBPKGZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5sZW5ndGgsZT1bXTtpZihkKWZvcih2YXIgZj1mdW5jdGlvbihhLGMpe2QtLTtlW2FdPWM7MD09ZCYmYihlKX0sZz1mdW5jdGlvbihhKXtjKGEpfSxrPTAscDtrPGEubGVuZ3RoO2srKylwPWFba10sdWEocCx4KGYsayksZyk7ZWxzZSBiKGUpfSl9O08ucmVzb2x2ZT1mdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgTylyZXR1cm4gYTt2YXIgYj1uZXcgTyhyKTtOKGIsMixhKTtyZXR1cm4gYn07Ty5yZWplY3Q9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBPKGZ1bmN0aW9uKGIsYyl7YyhhKX0pfTtPLnByb3RvdHlwZVtcImNhdGNoXCJdPU8ucHJvdG90eXBlLlg7dmFyIFE9TztcInVuZGVmaW5lZFwiIT09dHlwZW9mIFByb21pc2UmJihRPVByb21pc2UpO3ZhciBEYT1RO2Z1bmN0aW9uIEVhKGEsYil7YT1uZXcgUihhLGIpO3JldHVybiBhLnN1YnNjcmliZS5iaW5kKGEpfXZhciBSPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpczt0aGlzLmE9W107dGhpcy5LPTA7dGhpcy50YXNrPURhLnJlc29sdmUoKTt0aGlzLmw9ITE7dGhpcy5EPWI7dGhpcy50YXNrLnRoZW4oZnVuY3Rpb24oKXthKGMpfSkuY2F0Y2goZnVuY3Rpb24oYSl7Yy5lcnJvcihhKX0pfTtSLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKGEpe1ModGhpcyxmdW5jdGlvbihiKXtiLm5leHQoYSl9KX07Ui5wcm90b3R5cGUuZXJyb3I9ZnVuY3Rpb24oYSl7Uyh0aGlzLGZ1bmN0aW9uKGIpe2IuZXJyb3IoYSl9KTt0aGlzLmNsb3NlKGEpfTtSLnByb3RvdHlwZS5jb21wbGV0ZT1mdW5jdGlvbigpe1ModGhpcyxmdW5jdGlvbihhKXthLmNvbXBsZXRlKCl9KTt0aGlzLmNsb3NlKCl9O1xuUi5wcm90b3R5cGUuc3Vic2NyaWJlPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLGU7aWYodm9pZCAwPT09YSYmdm9pZCAwPT09YiYmdm9pZCAwPT09Yyl0aHJvdyBFcnJvcihcIk1pc3NpbmcgT2JzZXJ2ZXIuXCIpO2U9RmEoYSk/YTp7bmV4dDphLGVycm9yOmIsY29tcGxldGU6Y307dm9pZCAwPT09ZS5uZXh0JiYoZS5uZXh0PVQpO3ZvaWQgMD09PWUuZXJyb3ImJihlLmVycm9yPVQpO3ZvaWQgMD09PWUuY29tcGxldGUmJihlLmNvbXBsZXRlPVQpO2E9dGhpcy4kLmJpbmQodGhpcyx0aGlzLmEubGVuZ3RoKTt0aGlzLmwmJnRoaXMudGFzay50aGVuKGZ1bmN0aW9uKCl7dHJ5e2QuSD9lLmVycm9yKGQuSCk6ZS5jb21wbGV0ZSgpfWNhdGNoKGYpe319KTt0aGlzLmEucHVzaChlKTtyZXR1cm4gYX07XG5SLnByb3RvdHlwZS4kPWZ1bmN0aW9uKGEpe3ZvaWQgMCE9PXRoaXMuYSYmdm9pZCAwIT09dGhpcy5hW2FdJiYoZGVsZXRlIHRoaXMuYVthXSwtLXRoaXMuSywwPT09dGhpcy5LJiZ2b2lkIDAhPT10aGlzLkQmJnRoaXMuRCh0aGlzKSl9O3ZhciBTPWZ1bmN0aW9uKGEsYil7aWYoIWEubClmb3IodmFyIGM9MDtjPGEuYS5sZW5ndGg7YysrKUdhKGEsYyxiKX0sR2E9ZnVuY3Rpb24oYSxiLGMpe2EudGFzay50aGVuKGZ1bmN0aW9uKCl7aWYodm9pZCAwIT09YS5hJiZ2b2lkIDAhPT1hLmFbYl0pdHJ5e2MoYS5hW2JdKX1jYXRjaChkKXtcInVuZGVmaW5lZFwiIT09dHlwZW9mIGNvbnNvbGUmJmNvbnNvbGUuZXJyb3ImJmNvbnNvbGUuZXJyb3IoZCl9fSl9O1IucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7dGhpcy5sfHwodGhpcy5sPSEwLHZvaWQgMCE9PWEmJih0aGlzLkg9YSksdGhpcy50YXNrLnRoZW4oZnVuY3Rpb24oKXtiLmE9dm9pZCAwO2IuRD12b2lkIDB9KSl9O1xuZnVuY3Rpb24gRmEoYSl7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhfHxudWxsPT09YSlyZXR1cm4hMTt2YXIgYjtiPVtcIm5leHRcIixcImVycm9yXCIsXCJjb21wbGV0ZVwiXTtuKCk7dmFyIGM9YltTeW1ib2wuaXRlcmF0b3JdO2I9Yz9jLmNhbGwoYik6bShiKTtmb3IoYz1iLm5leHQoKTshYy5kb25lO2M9Yi5uZXh0KCkpaWYoYz1jLnZhbHVlLGMgaW4gYSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGFbY10pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gVCgpe307dmFyIEhhPUVycm9yLmNhcHR1cmVTdGFja1RyYWNlLFY9ZnVuY3Rpb24oYSxiKXt0aGlzLmNvZGU9YTt0aGlzLm1lc3NhZ2U9YjtpZihIYSlIYSh0aGlzLFUucHJvdG90eXBlLmNyZWF0ZSk7ZWxzZXt2YXIgYz1FcnJvci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dGhpcy5uYW1lPVwiRmlyZWJhc2VFcnJvclwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic3RhY2tcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGMuc3RhY2t9fSl9fTtWLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7Vi5wcm90b3R5cGUuY29uc3RydWN0b3I9VjtWLnByb3RvdHlwZS5uYW1lPVwiRmlyZWJhc2VFcnJvclwiO3ZhciBVPWZ1bmN0aW9uKGEsYixjKXt0aGlzLlY9YTt0aGlzLlc9Yjt0aGlzLk89Yzt0aGlzLnBhdHRlcm49L1xce1xcJChbXn1dKyl9L2d9O1xuVS5wcm90b3R5cGUuY3JlYXRlPWZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9e30pO3ZhciBjPXRoaXMuT1thXTthPXRoaXMuVitcIi9cIithO3ZhciBjPXZvaWQgMD09PWM/XCJFcnJvclwiOmMucmVwbGFjZSh0aGlzLnBhdHRlcm4sZnVuY3Rpb24oYSxjKXthPWJbY107cmV0dXJuIHZvaWQgMCE9PWE/YS50b1N0cmluZygpOlwiPFwiK2MrXCI/PlwifSksYz10aGlzLlcrXCI6IFwiK2MrXCIgKFwiK2ErXCIpLlwiLGM9bmV3IFYoYSxjKSxkO2ZvcihkIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShkKSYmXCJfXCIhPT1kLnNsaWNlKC0xKSYmKGNbZF09YltkXSk7cmV0dXJuIGN9O3ZhciBXPVEsWD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpczt0aGlzLkk9Yzt0aGlzLko9ITE7dGhpcy5pPXt9O3RoaXMuQz1iO3RoaXMuRj1QKHZvaWQgMCxhKTthPVwic2VydmljZUFjY291bnRcImluIHRoaXMuRjsoXCJjcmVkZW50aWFsXCJpbiB0aGlzLkZ8fGEpJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIGNvbnNvbGUmJmNvbnNvbGUubG9nKFwiVGhlICdcIisoYT9cInNlcnZpY2VBY2NvdW50XCI6XCJjcmVkZW50aWFsXCIpK1wiJyBwcm9wZXJ0eSBzcGVjaWZpZWQgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IHRvIGluaXRpYWxpemVBcHAoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi4gWW91IHNob3VsZCBpbnN0ZWFkIHVzZSB0aGUgJ2ZpcmViYXNlLWFkbWluJyBwYWNrYWdlLiBTZWUgaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvYWRtaW4vc2V0dXAgZm9yIGRldGFpbHMgb24gaG93IHRvIGdldCBzdGFydGVkLlwiKTtPYmplY3Qua2V5cyhjLklOVEVSTkFMLmZhY3RvcmllcykuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1cbmMuSU5URVJOQUwudXNlQXNTZXJ2aWNlKGQsYSk7bnVsbCE9PWImJihiPWQuUy5iaW5kKGQsYiksZFthXT1iKX0pfTtYLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3JldHVybihuZXcgVyhmdW5jdGlvbihiKXtZKGEpO2IoKX0pKS50aGVuKGZ1bmN0aW9uKCl7YS5JLklOVEVSTkFMLnJlbW92ZUFwcChhLkMpO3JldHVybiBXLmFsbChPYmplY3Qua2V5cyhhLmkpLm1hcChmdW5jdGlvbihiKXtyZXR1cm4gYS5pW2JdLklOVEVSTkFMLmRlbGV0ZSgpfSkpfSkudGhlbihmdW5jdGlvbigpe2EuSj0hMDthLmk9e319KX07WC5wcm90b3R5cGUuUz1mdW5jdGlvbihhKXtZKHRoaXMpO3ZvaWQgMD09PXRoaXMuaVthXSYmKHRoaXMuaVthXT10aGlzLkkuSU5URVJOQUwuZmFjdG9yaWVzW2FdKHRoaXMsdGhpcy5SLmJpbmQodGhpcykpKTtyZXR1cm4gdGhpcy5pW2FdfTtYLnByb3RvdHlwZS5SPWZ1bmN0aW9uKGEpe1AodGhpcyxhKX07XG52YXIgWT1mdW5jdGlvbihhKXthLkomJlooSWEoXCJkZWxldGVkXCIse25hbWU6YS5DfSkpfTtoLk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFgucHJvdG90eXBlLHtuYW1lOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtZKHRoaXMpO3JldHVybiB0aGlzLkN9fSxvcHRpb25zOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtZKHRoaXMpO3JldHVybiB0aGlzLkZ9fX0pO1gucHJvdG90eXBlLm5hbWUmJlgucHJvdG90eXBlLm9wdGlvbnN8fFgucHJvdG90eXBlLmRlbGV0ZXx8Y29uc29sZS5sb2coXCJkY1wiKTtcbmZ1bmN0aW9uIEphKCl7ZnVuY3Rpb24gYShhKXthPWF8fFwiW0RFRkFVTFRdXCI7dmFyIGI9ZFthXTt2b2lkIDA9PT1iJiZaKFwibm9BcHBcIix7bmFtZTphfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gYihhLGIpe09iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24oZCl7ZD1jKGEsZCk7aWYobnVsbCE9PWQmJmZbZF0pZltkXShiLGEpfSl9ZnVuY3Rpb24gYyhhLGIpe2lmKFwic2VydmVyQXV0aFwiPT09YilyZXR1cm4gbnVsbDt2YXIgYz1iO2E9YS5vcHRpb25zO1wiYXV0aFwiPT09YiYmKGEuc2VydmljZUFjY291bnR8fGEuY3JlZGVudGlhbCkmJihjPVwic2VydmVyQXV0aFwiLFwic2VydmVyQXV0aFwiaW4gZXx8WihcInNlcnZlckF1dGhNaXNzaW5nXCIpKTtyZXR1cm4gY312YXIgZD17fSxlPXt9LGY9e30sZz17X19lc01vZHVsZTohMCxpbml0aWFsaXplQXBwOmZ1bmN0aW9uKGEsYyl7dm9pZCAwPT09Yz9jPVwiW0RFRkFVTFRdXCI6XCJzdHJpbmdcIj09PXR5cGVvZiBjJiZcIlwiIT09Y3x8WihcImJhZC1hcHAtbmFtZVwiLFxue25hbWU6YytcIlwifSk7dm9pZCAwIT09ZFtjXSYmWihcImR1cEFwcFwiLHtuYW1lOmN9KTthPW5ldyBYKGEsYyxnKTtkW2NdPWE7YihhLFwiY3JlYXRlXCIpO3ZvaWQgMCE9YS5JTlRFUk5BTCYmdm9pZCAwIT1hLklOVEVSTkFMLmdldFRva2VufHxQKGEse0lOVEVSTkFMOntnZXRUb2tlbjpmdW5jdGlvbigpe3JldHVybiBXLnJlc29sdmUobnVsbCl9LGFkZEF1dGhUb2tlbkxpc3RlbmVyOmZ1bmN0aW9uKCl7fSxyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lcjpmdW5jdGlvbigpe319fSk7cmV0dXJuIGF9LGFwcDphLGFwcHM6bnVsbCxQcm9taXNlOlcsU0RLX1ZFUlNJT046XCIwLjAuMFwiLElOVEVSTkFMOntyZWdpc3RlclNlcnZpY2U6ZnVuY3Rpb24oYixjLGQsdSl7ZVtiXSYmWihcImR1cFNlcnZpY2VcIix7bmFtZTpifSk7ZVtiXT1jO3UmJihmW2JdPXUpO2M9ZnVuY3Rpb24oYyl7dm9pZCAwPT09YyYmKGM9YSgpKTtyZXR1cm4gY1tiXSgpfTt2b2lkIDAhPT1kJiZQKGMsZCk7cmV0dXJuIGdbYl09Y30sY3JlYXRlRmlyZWJhc2VOYW1lc3BhY2U6SmEsXG5leHRlbmROYW1lc3BhY2U6ZnVuY3Rpb24oYSl7UChnLGEpfSxjcmVhdGVTdWJzY3JpYmU6RWEsRXJyb3JGYWN0b3J5OlUscmVtb3ZlQXBwOmZ1bmN0aW9uKGEpe2IoZFthXSxcImRlbGV0ZVwiKTtkZWxldGUgZFthXX0sZmFjdG9yaWVzOmUsdXNlQXNTZXJ2aWNlOmMsUHJvbWlzZTpPLGRlZXBFeHRlbmQ6UH19O2dbXCJkZWZhdWx0XCJdPWc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGcsXCJhcHBzXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyhkKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGRbYV19KX19KTthLkFwcD1YO3JldHVybiBnfWZ1bmN0aW9uIFooYSxiKXt0aHJvdyBFcnJvcihJYShhLGIpKTt9XG5mdW5jdGlvbiBJYShhLGIpe2I9Ynx8e307Yj17bm9BcHA6XCJObyBGaXJlYmFzZSBBcHAgJ1wiK2IubmFtZStcIicgaGFzIGJlZW4gY3JlYXRlZCAtIGNhbGwgRmlyZWJhc2UgQXBwLmluaXRpYWxpemVBcHAoKS5cIixcImJhZC1hcHAtbmFtZVwiOlwiSWxsZWdhbCBBcHAgbmFtZTogJ1wiK2IubmFtZStcIicuXCIsZHVwQXBwOlwiRmlyZWJhc2UgQXBwIG5hbWVkICdcIitiLm5hbWUrXCInIGFscmVhZHkgZXhpc3RzLlwiLGRlbGV0ZWQ6XCJGaXJlYmFzZSBBcHAgbmFtZWQgJ1wiK2IubmFtZStcIicgYWxyZWFkeSBkZWxldGVkLlwiLGR1cFNlcnZpY2U6XCJGaXJlYmFzZSBTZXJ2aWNlIG5hbWVkICdcIitiLm5hbWUrXCInIGFscmVhZHkgcmVnaXN0ZXJlZC5cIixzZXJ2ZXJBdXRoTWlzc2luZzpcIkluaXRpYWxpemluZyB0aGUgRmlyZWJhc2UgU0RLIHdpdGggYSBzZXJ2aWNlIGFjY291bnQgaXMgb25seSBhbGxvd2VkIGluIGEgTm9kZS5qcyBlbnZpcm9ubWVudC4gT24gY2xpZW50IGRldmljZXMsIHlvdSBzaG91bGQgaW5zdGVhZCBpbml0aWFsaXplIHRoZSBTREsgd2l0aCBhbiBhcGkga2V5IGFuZCBhdXRoIGRvbWFpbi5cIn1bYV07XG5yZXR1cm4gdm9pZCAwPT09Yj9cIkFwcGxpY2F0aW9uIEVycm9yOiAoXCIrYStcIilcIjpifTtcInVuZGVmaW5lZFwiIT09dHlwZW9mIGZpcmViYXNlJiYoZmlyZWJhc2U9SmEoKSk7IH0pLmNhbGwodGhpcyk7XG5maXJlYmFzZS5TREtfVkVSU0lPTiA9IFwiMy42LjVcIjtcbnJldHVybiBmaXJlYmFzZTt9KS5jYWxsKGdsb2JhbCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZpcmViYXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpcmViYXNlL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0IEhvbWUgZnJvbSAnLi9Ib21lL0hvbWUnXHJcbmV4cG9ydCBTdWJUb3BpYyBmcm9tICcuL1N1YlRvcGljL1N1YlRvcGljJ1xyXG5leHBvcnQgVG9waWMgZnJvbSAnLi9Ub3BpYy9Ub3BpYydcclxuZXhwb3J0IENvbnRlbnRzIGZyb20gJy4vQ29udGVudHMvQ29udGVudHMnXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3dvcmtzaGVldC9pbmRleC5qcyIsImV4cG9ydCB7IFF1ZXN0aW9uLCBEZXNjcmlwdGlvbiwgUGFydCB9IGZyb20gJy4vcXVlc3Rpb24vJ1xyXG5leHBvcnQgTm90ZSBmcm9tICcuL05vdGUvTm90ZSdcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvbWFya3VwL3dvcmtzaGVldC9pbmRleC5qcyIsImltcG9ydCB7IHJlZiB9IGZyb20gJ2NvbmZpZy9jb25zdGFudHMnXHJcblxyXG4vLyBVU0VSXHJcblxyXG4vLyBTYXZlcyB1c2VyIHRvIGRhdGFiYXNlXHJcbi8vIFVzZXIgc2hvdWxkIGJlIHRoZSBmdWxsIHVzZXIgZGV0YWlsc1xyXG4vLyBVc2VyIGFscmVhZHkgaGFzIGEgdWlkIGZyb20gdGhlIHJlZ2lzdGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlVXNlcih1c2VyKSB7XHJcblx0cmV0dXJuIHJlZi5jaGlsZChgdXNlcnMvJHt1c2VyLmluZm8udWlkfWApLnNldCh1c2VyKVxyXG5cdFx0Ly8gcmV0dXJuIHByb21pc2UgcmVzb2x2ZWQgd2l0aCB1c2VyIGZvciBjaGFpbmluZ1xyXG5cdFx0LnRoZW4oKCkgPT4gdXNlcilcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVXNlcih1aWQpIHtcclxuXHRyZXR1cm4gcmVmLmNoaWxkKGB1c2Vycy8ke3VpZH1gKS5vbmNlKCd2YWx1ZScpXHJcblx0XHQudGhlbihzbmFwc2hvdCA9PiBzbmFwc2hvdC52YWwoKSlcclxufVxyXG5cclxuXHJcbi8vIExFU1NPTiBISVNUT1JZXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hVc2Vyc0xlc3Nvbkhpc3RvcnkodWlkKSB7XHJcblx0cmV0dXJuIHJlZi5jaGlsZChgdXNlcnNMZXNzb25IaXN0b3J5LyR7dWlkfWApLm9uY2UoJ3ZhbHVlJylcclxuXHRcdC50aGVuKHNuYXBzaG90ID0+IHNuYXBzaG90LnZhbCgpKVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9oZWxwZXJzL2FwaS5qcyIsImV4cG9ydCBBZG1pbiBmcm9tICcuL0FkbWluL0FkbWluJ1xyXG5leHBvcnQgQWRtaW5OYXYgZnJvbSAnLi9BZG1pbk5hdi9BZG1pbk5hdidcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvYWRtaW4vaW5kZXguanMiLCJleHBvcnQgTWFpbiBmcm9tICcuL01haW4vTWFpbidcclxuZXhwb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uL05hdmlnYXRpb24nXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pbmRleC5qcyIsImV4cG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZS9Qcm9maWxlJ1xyXG5leHBvcnQgUHJvZmlsZU5hdiBmcm9tICcuL1Byb2ZpbGVOYXYvUHJvZmlsZU5hdidcclxuZXhwb3J0IExlc3Nvbkhpc3RvcnkgZnJvbSAnLi9MZXNzb25IaXN0b3J5L0xlc3Nvbkhpc3RvcnknXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3Byb2ZpbGUvaW5kZXguanMiLCJpbXBvcnQgeyBmZXRjaFVzZXJzTGVzc29uSGlzdG9yeSBhcyBhcGlGZXRjaFVzZXJzTGVzc29uSGlzdG9yeSB9IGZyb20gJ2hlbHBlcnMvYXBpJ1xyXG5cclxuY29uc3QgRkVUQ0hJTkdfVVNFUlNfTEVTU09OX0hJU1RPUlkgPSAnRkVUQ0hJTkdfVVNFUlNfTEVTU09OX0hJU1RPUlknXHJcbmNvbnN0IEZFVENISU5HX1VTRVJTX0xFU1NPTl9ISVNUT1JZX1NVQ0NFU1MgPSAnRkVUQ0hJTkdfVVNFUlNfTEVTU09OX0hJU1RPUllfU1VDQ0VTUydcclxuY29uc3QgRkVUQ0hJTkdfVVNFUlNfTEVTU09OX0hJU1RPUllfRkFJTFVSRSA9ICdGRVRDSElOR19VU0VSU19MRVNTT05fSElTVE9SWV9GQUlMVVJFJ1xyXG5cclxuY29uc3QgZmV0Y2hpbmdVc2Vyc0xlc3Nvbkhpc3Rvcnk9ICgpID0+ICh7XHJcblx0dHlwZTogRkVUQ0hJTkdfVVNFUlNfTEVTU09OX0hJU1RPUlksXHJcbn0pXHJcblxyXG5jb25zdCBmZXRjaGluZ1VzZXJzTGVzc29uSGlzdG9yeVN1Y2Nlc3MgPSAodWlkLCBsZXNzb25IaXN0b3J5KSA9PiAoe1xyXG5cdHR5cGU6IEZFVENISU5HX1VTRVJTX0xFU1NPTl9ISVNUT1JZX1NVQ0NFU1MsXHJcblx0bGVzc29uSGlzdG9yeSxcclxuXHR1aWQsXHJcbn0pXHJcblxyXG5jb25zdCBmZXRjaGluZ1VzZXJzTGVzc29uSGlzdG9yeUZhaWx1cmUgPSAoZXJyb3IpID0+IHtcclxuXHRjb25zb2xlLmVycm9yKGVycm9yKVxyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBGRVRDSElOR19VU0VSU19MRVNTT05fSElTVE9SWV9GQUlMVVJFLFxyXG5cdH1cdFxyXG59XHJcblxyXG4vLyBUSFVOS1NcclxuLy9UT0RPIE1PVkUgVEhJUyBTT01FV0hFUkU/IFVUSUwgRlVOQ1RJT05cclxuZnVuY3Rpb24gbGVzc29uSGlzdG9yeUFycmF5KG9iaikge1xyXG5cdHJldHVybiBPYmplY3Qua2V5cyhvYmopXHJcblx0XHQuc29ydCgoYSxiKSA9PiBvYmpbYl0udGltZXN0YW1wIC0gb2JqW2FdLnRpbWVzdGFtcClcclxuXHRcdC5tYXAoa2V5ID0+IG9ialtrZXldKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2Vyc0xlc3Nvbkhpc3RvcnkgPSAodWlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuXHRkaXNwYXRjaChmZXRjaGluZ1VzZXJzTGVzc29uSGlzdG9yeSgpKVxyXG5cdFxyXG5cdHJldHVybiBhcGlGZXRjaFVzZXJzTGVzc29uSGlzdG9yeSh1aWQpXHJcblx0XHQudGhlbihsZXNzb25IaXN0b3J5ID0+IGxlc3Nvbkhpc3RvcnlBcnJheShsZXNzb25IaXN0b3J5KSlcclxuXHRcdC50aGVuKGhpc3RvcnlBcnJheSA9PiBkaXNwYXRjaChmZXRjaGluZ1VzZXJzTGVzc29uSGlzdG9yeVN1Y2Nlc3ModWlkLCBoaXN0b3J5QXJyYXkpKSlcclxuXHRcdC5jYXRjaChlcnJvciA9PiBkaXNwYXRjaChmZXRjaGluZ1VzZXJzTGVzc29uSGlzdG9yeUZhaWx1cmUoZXJyb3IpKSlcclxufVxyXG5cclxuXHJcblxyXG4vLyBSRURVQ0VSU1xyXG5jb25zdCBpbml0aWFsVXNlcnNMZXNzb25IaXN0b3J5U3RhdGUgPSB7XHJcblx0aXNGZXRjaGluZzogZmFsc2UsXHJcblx0ZXJyb3I6ICcnLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2Vyc0xlc3Nvbkhpc3Rvcnkoc3RhdGUgPSBpbml0aWFsVXNlcnNMZXNzb25IaXN0b3J5U3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBGRVRDSElOR19VU0VSU19MRVNTT05fSElTVE9SWTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRpc0ZldGNoaW5nOiB0cnVlLFxyXG5cdFx0XHRcdGVycm9yOiAnJyxcclxuXHRcdFx0fVx0XHRcclxuXHRcdGNhc2UgRkVUQ0hJTkdfVVNFUlNfTEVTU09OX0hJU1RPUllfRkFJTFVSRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRpc0ZldGNoaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRlcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9XHJcblx0XHRjYXNlIEZFVENISU5HX1VTRVJTX0xFU1NPTl9ISVNUT1JZX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0aXNGZXRjaGluZzogZmFsc2UsXHJcblx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRcdFthY3Rpb24udWlkXTogbGVzc29uSGlzdG9yeShzdGF0ZVthY3Rpb24udWlkXSwgYWN0aW9uKSxcclxuXHRcdFx0fVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsTGVzc29uSGlzdG9yeVN0YXRlID0ge1xyXG5cdGhpc3Rvcnk6IHt9LFxyXG59XHJcblxyXG5mdW5jdGlvbiBsZXNzb25IaXN0b3J5KHN0YXRlID0gaW5pdGlhbExlc3Nvbkhpc3RvcnlTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEZFVENISU5HX1VTRVJTX0xFU1NPTl9ISVNUT1JZX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0aGlzdG9yeTogYWN0aW9uLmxlc3Nvbkhpc3RvcnksXHJcblx0XHRcdH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcmVkdXgvbW9kdWxlcy91c2Vyc0xlc3Nvbkhpc3RvcnkuanMiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnXHJcblxyXG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSAnL21hdGgnXHJcbmV4cG9ydCBjb25zdCBXT1JLU0hFRVRTX1VSTCA9ICd3b3Jrc2hlZXRzJ1xyXG5cclxuY29uc3QgYXBwQ29uZmlnID0ge1xyXG5cdGFwaUtleTogXCJBSXphU3lBQ3lwSDRvMlRGQ24tb05kYktRY2h0RjhBeVFIVU5uVjRcIixcclxuXHRhdXRoRG9tYWluOiBcIm1hdGhzaXRlLWU5MjczLmZpcmViYXNlYXBwLmNvbVwiLFxyXG5cdGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vbWF0aHNpdGUtZTkyNzMuZmlyZWJhc2Vpby5jb21cIixcclxuXHRzdG9yYWdlQnVja2V0OiBcIm1hdGhzaXRlLWU5MjczLmFwcHNwb3QuY29tXCIsXHJcblx0bWVzc2FnaW5nU2VuZGVySWQ6IFwiMTA5NjgwMjEyOTg3NlwiXHJcbn1cclxuXHJcbmNvbnN0IGRldkNvbmZpZyA9IHtcclxuXHRhcGlLZXk6IFwiQUl6YVN5QTVKZ0JPYndUSjg2ZW9GdkZ5RFZPUGMwSmxEcjl3QlpZXCIsXHJcblx0YXV0aERvbWFpbjogXCJtYXRoc2l0ZWRldi5maXJlYmFzZWFwcC5jb21cIixcclxuXHRkYXRhYmFzZVVSTDogXCJodHRwczovL21hdGhzaXRlZGV2LmZpcmViYXNlaW8uY29tXCIsXHJcblx0c3RvcmFnZUJ1Y2tldDogXCJtYXRoc2l0ZWRldi5hcHBzcG90LmNvbVwiLFxyXG5cdG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwMzY3MjUxODUwOTFcIlxyXG59XHJcblxyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGRldkNvbmZpZylcclxuXHJcbmV4cG9ydCBjb25zdCByZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpXHJcbmV4cG9ydCBjb25zdCBmaXJlYmFzZUF1dGggPSBmaXJlYmFzZS5hdXRoXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb25maWcvY29uc3RhbnRzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFLQTtBQUNBOzs7QUFmQTtBQWtCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFBQTtBQURBO0FBQ0E7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBRUE7QUFEQTtBQUlBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFEQTtBQVNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFPQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBRkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFqQkE7QUFEQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFEQTtBQUlBOzs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBRkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUZBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQXpCQTtBQURBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTs7O0FBSUE7QUFDQTtBQUVBO0FBREE7QUFJQTs7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBc0NBO0FBUUE7QUFDQTtBQWxEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBRkE7QUFEQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQURBO0FBSUE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQURBO0FBU0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU9BOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBMUNBO0FBRkE7QUFEQTtBQUNBO0FBbURBOzs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFQQTtBQVJBO0FBbUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUVBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBUEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQWRBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUE5REE7QUFyQ0E7QUFEQTtBQUNBO0FBNkhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSUE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFWQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFKQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBYkE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFKQTtBQUZBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBSkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQWJBO0FBbUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQWhCQTtBQXdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeEpBO0FBREE7QUFDQTtBQThKQTs7Ozs7Ozs7Ozs7Ozs7QUNuS0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBUEE7QUFEQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUZBO0FBREE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFGQTtBQUpBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFKQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFSQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUpBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTNJQTtBQURBO0FBQ0E7QUFrSkE7Ozs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFwSEE7QUFUQTtBQUZBO0FBREE7QUFDQTtBQTRJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hKQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUdBO0FBQ0E7OztBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVEE7QUFDQTtBQVlBOzs7Ozs7Ozs7Ozs7O0FDOUJBO0FBS0E7QUFLQTtBQUNBO0FBZkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTs7Ozs7OztBQ2ZBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDelFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNrR0E7QUFDQTtBQW5HQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFWQTtBQUNBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQ0E7QUFlQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVRBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQWpDQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVBBO0FBU0E7Ozs7Ozs7QUN2SkE7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7OztBQUFBOzs7Ozs7QUFBQTs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FDTUE7QUFNQTtBQVFBO0FBQ0E7QUF0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDK0NBO0FBQ0E7QUFqREE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVBBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQXJCQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBUEE7QUFTQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==