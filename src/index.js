class List extends React.Component {
    render() {
      const lista = this.props.lista;
      return (
        <div className="container">
            <h1 className="titulo">Adicione Tarefas Para Fazer</h1>
            <input className="atividade" value={this.props.inputValue} 
                onChange={this.props.handleInputChange} />

            <button className="remover" onClick={this.props.handleAdicionar}>Adicionar</button>

            <h3>Número total de tarefas {lista.length}</h3>
            <ul>
                {lista.map((item, index) => (
                <li className="lista" key={index}>
                    <input type="checkbox" checked={item.completed} 
                        onChange={() => this.props.handleMensagem(index)} />
                    <span className="lista--palavras" style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                        {item.task}</span>
                    <button className="remover" onClick={() => this.props.handleRemover(index)}>Remover</button>
                </li>
                ))}
            </ul>
        </div>
        );
    }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lista: [], inputValue: "", mensagem: true };
    this.handleAdicionar = this.handleAdicionar.bind(this);
    this.handleRemover = this.handleRemover.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMensagem = this.handleMensagem.bind(this);
  }

  handleAdicionar() {
    this.setState((prevState) => ({
      lista: [
        ...prevState.lista,
        { task: prevState.inputValue, completed: false },
      ]
    }));
  }

  handleRemover(index) {
    this.setState((prevState) => ({
      lista: prevState.lista.filter((item, i) => i !== index),
    }));
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleMensagem(index) {
    this.setState((prevState) => ({
      lista: prevState.lista.map((item, i) => {
        if (i === index) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    }));
  }
  
    render() {
      return (
        <div>
          <List lista={this.state.lista} handleAdicionar={this.handleAdicionar}
            handleRemover={this.handleRemover} handleInputChange={this.handleInputChange}
            handleMensagem={this.handleMensagem} />
        </div>
        );
    }
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
