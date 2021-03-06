(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types'], factory) :
	(global.ReactJSONFetch = factory(global.React,global.PropTypes));
}(this, (function (React,PropTypes) { 'use strict';

React = React && 'default' in React ? React['default'] : React;
PropTypes = PropTypes && 'default' in PropTypes ? PropTypes['default'] : PropTypes;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var ReactJSONFetch = function (_React$Component) {
  inherits(ReactJSONFetch, _React$Component);

  function ReactJSONFetch() {
    classCallCheck(this, ReactJSONFetch);

    var _this = possibleConstructorReturn(this, (ReactJSONFetch.__proto__ || Object.getPrototypeOf(ReactJSONFetch)).call(this));

    _this.state = {};
    return _this;
  }

  createClass(ReactJSONFetch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var status = {};

      if (!this.props.url) return;

      fetch(this.props.url, this.props.init).then(function (response) {
        status = {
          ok: response.ok,
          status: response.status,
          statusText: response.statusText,
          url: response.url
        };

        return response;
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        return _this2.setState({ status: status, json: json });
      }).catch(function (error) {
        return _this2.setState({ status: status });
      });
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        status: this.state.status,
        json: this.state.json
      };
    }
  }, {
    key: "render",
    value: function render() {
      return React.Children.only(this.props.children(this.state));
    }
  }]);
  return ReactJSONFetch;
}(React.Component);

ReactJSONFetch.defaultProps = {
  url: "",
  init: {}
};
ReactJSONFetch.childContextTypes = {
  status: PropTypes.object,
  json: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

return ReactJSONFetch;

})));
