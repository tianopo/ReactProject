(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4369)}])},4369:function(e,a,s){"use strict";s.r(a);var t=s(5893),n=s(7294),i=s(9179),l=s.n(i);class h extends n.Component{render(){let e=this.props.lista;return e.length<10?(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsx)("h1",{className:l().titulo,children:"Adicione Tarefas Para Fazer"}),(0,t.jsx)("input",{className:l().atividade,value:this.props.inputValue,onChange:this.props.handleInputChange}),(0,t.jsx)("button",{className:l().remover,onClick:this.props.handleAdicionar,children:"Adicionar"}),(0,t.jsxs)("h3",{children:["N\xfamero total de tarefas ",e.length]}),(0,t.jsx)("ul",{children:e.map((e,a)=>(0,t.jsxs)("li",{className:l().lista,children:[(0,t.jsx)("input",{type:"checkbox",checked:e.completed,onChange:()=>this.props.handleMensagem(a)}),(0,t.jsx)("span",{className:l().lista__palavras,style:{textDecoration:e.completed?"line-through":"none"},children:e.task}),(0,t.jsx)("button",{className:l().remover,onClick:()=>this.props.handleRemover(a),children:"Remover"})]},a))})]}):(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsx)("h1",{className:l().titulo,children:"Adicione Tarefas Para Fazer"}),(0,t.jsx)("input",{className:l().atividade,value:this.props.inputValue,onChange:this.props.handleInputChange}),(0,t.jsx)("span",{className:l().descricao,children:"M\xe1ximo de 10 tarefas apenas"}),(0,t.jsxs)("h3",{children:["N\xfamero total de tarefas ",e.length]}),(0,t.jsx)("ul",{children:e.map((e,a)=>(0,t.jsxs)("li",{className:l().lista,children:[(0,t.jsx)("input",{type:"checkbox",checked:e.completed,onChange:()=>this.props.handleMensagem(a)}),(0,t.jsx)("span",{className:l().lista__palavras,style:{textDecoration:e.completed?"line-through":"none"},children:e.task}),(0,t.jsx)("button",{className:l().remover,onClick:()=>this.props.handleRemover(a),children:"Remover"})]},a))})]})}}class r extends n.Component{handleAdicionar(){this.setState(e=>({lista:[...e.lista,{task:e.inputValue,completed:!1}]}))}handleRemover(e){this.setState(a=>({lista:a.lista.filter((a,s)=>s!==e)}))}handleInputChange(e){this.setState({inputValue:e.target.value})}handleMensagem(e){this.setState(a=>({lista:a.lista.map((a,s)=>s===e?{...a,completed:!a.completed}:a)}))}render(){return(0,t.jsx)("div",{children:(0,t.jsx)(h,{lista:this.state.lista,handleAdicionar:this.handleAdicionar,handleRemover:this.handleRemover,handleInputChange:this.handleInputChange,handleMensagem:this.handleMensagem})})}constructor(e){super(e),this.state={lista:[],inputValue:"",mensagem:!0},this.handleAdicionar=this.handleAdicionar.bind(this),this.handleRemover=this.handleRemover.bind(this),this.handleInputChange=this.handleInputChange.bind(this),this.handleMensagem=this.handleMensagem.bind(this)}}a.default=r},9179:function(e){e.exports={titulo:"teste_titulo__6XXbQ",lista:"teste_lista__ZSDsH",lista__palavras:"teste_lista__palavras__VrJAt",container:"teste_container__0zXXb",descricao:"teste_descricao__KtlJY",remover:"teste_remover__yueZO"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);