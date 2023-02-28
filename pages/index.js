import React, { useState } from 'react';
import style from '../public/teste.module.css';

function Logradouro(){
    const [endereco, setEndereco] = useState({});
  
    function manipulaEndereco(e){
  
      const cep = e.target.value;
      setEndereco({
        cep
      })
      if(cep && cep.length === 8){
        fetch(`https://viacep.com.br/ws/${cep}/json`)
          .then(res => res.json())
          .then(dados => {
            setEndereco(allowCep => {
              return{
                ...allowCep,
                rua: dados.logradouro,
                bairro: dados.bairro,
                cidade: dados.localidade,
                estado: dados.uf
              }
            })
          })
      }
    }
  
    return(
      <div className={style.container}>
        <input placeholder='CEP' className={style.atividade} onChange={manipulaEndereco} />
        <h2> CEP: {endereco.cep}</h2>
        <h2> endereço: {endereco.rua}</h2>
        <h2> bairro: {endereco.bairro}</h2>
        <h2> Cidade: {endereco.cidade}</h2>
        <h2> Estado: {endereco.estado}</h2>
      </div>
    );
  }
  
  export default Logradouro;