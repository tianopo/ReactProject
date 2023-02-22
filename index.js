var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var lista = this.props.lista;
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "h1",
          { className: "titulo" },
          "Adicione Tarefas Para Fazer"
        ),
        React.createElement("input", { className: "atividade", value: this.props.inputValue,
          onChange: this.props.handleInputChange }),
        React.createElement(
          "button",
          { className: "remover", onClick: this.props.handleAdicionar },
          "Adicionar"
        ),
        React.createElement(
          "h3",
          null,
          "N\xFAmero total de tarefas ",
          lista.length
        ),
        React.createElement(
          "ul",
          null,
          lista.map(function (item, index) {
            return React.createElement(
              "li",
              { className: "lista", key: index },
              React.createElement("input", { type: "checkbox", checked: item.completed,
                onChange: function onChange() {
                  return _this2.props.handleMensagem(index);
                } }),
              React.createElement(
                "span",
                { className: "lista--palavras", style: { textDecoration: item.completed ? 'line-through' : 'none' } },
                item.task
              ),
              React.createElement(
                "button",
                { className: "remover", onClick: function onClick() {
                    return _this2.props.handleRemover(index);
                  } },
                "Remover"
              )
            );
          })
        )
      );
    }
  }]);

  return List;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.state = { lista: [], inputValue: "", mensagem: true };
    _this3.handleAdicionar = _this3.handleAdicionar.bind(_this3);
    _this3.handleRemover = _this3.handleRemover.bind(_this3);
    _this3.handleInputChange = _this3.handleInputChange.bind(_this3);
    _this3.handleMensagem = _this3.handleMensagem.bind(_this3);
    return _this3;
  }

  _createClass(App, [{
    key: "handleAdicionar",
    value: function handleAdicionar() {
      this.setState(function (prevState) {
        return {
          lista: [].concat(_toConsumableArray(prevState.lista), [{ task: prevState.inputValue, completed: false }])
        };
      });
    }
  }, {
    key: "handleRemover",
    value: function handleRemover(index) {
      this.setState(function (prevState) {
        return {
          lista: prevState.lista.filter(function (item, i) {
            return i !== index;
          })
        };
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState({ inputValue: event.target.value });
    }
  }, {
    key: "handleMensagem",
    value: function handleMensagem(index) {
      this.setState(function (prevState) {
        return {
          lista: prevState.lista.map(function (item, i) {
            if (i === index) {
              return Object.assign({}, item, { completed: !item.completed });
            }
            return item;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(List, { lista: this.state.lista, handleAdicionar: this.handleAdicionar,
          handleRemover: this.handleRemover, handleInputChange: this.handleInputChange,
          handleMensagem: this.handleMensagem })
      );
    }
  }]);

  return App;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));