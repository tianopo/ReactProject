import React from 'react';
import style from '../public/teste.module.css';

class List extends React.Component {
    render() {
      const lista = this.props.lista;
      if(lista.length < 10){
              return (
        <div className={style.container}>
            <h1 className={style.titulo}>Adicione Tarefas Para Fazer</h1>
            <input className={style.atividade} value={this.props.inputValue} 
                onChange={this.props.handleInputChange} />

            <button className={style.remover} onClick={this.props.handleAdicionar}>Adicionar</button>

            <h3>Número total de tarefas {lista.length}</h3>
            <ul>
                {lista.map((item, index) => (
                <li className={style.lista} key={index}>
                    <input type="checkbox" checked={item.completed} 
                        onChange={() => this.props.handleMensagem(index)} />
                    <span className={style.lista__palavras} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                        {item.task}</span>
                    <button className={style.remover} onClick={() => this.props.handleRemover(index)}>Remover</button>
                </li>
                ))}
            </ul>
        </div>
        );
      }else{
        return (
          <div className={style.container}>
            <h1 className={style.titulo}>Adicione Tarefas Para Fazer</h1>
            <input className={style.atividade} value={this.props.inputValue} 
                onChange={this.props.handleInputChange} />

            <span className={style.descricao}>Máximo de 10 tarefas apenas</span>

            <h3>Número total de tarefas {lista.length}</h3>
            <ul>
                {lista.map((item, index) => (
                <li className={style.lista} key={index}>
                    <input type="checkbox" checked={item.completed} 
                        onChange={() => this.props.handleMensagem(index)} />
                    <span className={style.lista__palavras} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                        {item.task}</span>
                    <button className={style.remover} onClick={() => this.props.handleRemover(index)}>Remover</button>
                </li>
                ))}
            </ul>
        </div>
        )
      }

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
  
export default App;
