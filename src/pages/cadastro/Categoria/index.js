import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField/Index';
import Button from '../../../components/Button';


function CadastroCategoria() { 

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategoria] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: valor dinamicanente
    })
  }

  function handlerChange(infoDoEvento) {
   // const { getAttribute, valoresIniciais } = infoDoEvento.target;
    setValue(
      infoDoEvento.target.getAttribute('name'),
      infoDoEvento.target.value,
    );
  }

  //    function funcaoHandler(){}
  // console.log('[nomDaCateoria]', nomeDaCategoria);

  useEffect(() => {
    if(window.location.href.includes('localhost')) {
      const URL_TOP = 'http://localhost:8080/categorias';
      fetch(URL_TOP)
        .then(async (returnserver) => {
          if(returnserver.ok) {
            const returnassync = await returnserver.json();
            setCategoria(returnassync);
            return;
          }
          throw new Error('Nao foi possivel pegar os dados');
        })
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria: {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infoDoEvento) {
        infoDoEvento.preventDefault();
        //console.log('Voce tentou enviar o form ne?');
        setCategoria([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais)
      }}> 

        <FormField          
              label= "Nome Da Categoria"
              type="text"
              name="nome"
              value={values.nome}
              onChange={handlerChange}
        />
         

       

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handlerChange}
        />



        {/* <div>
          <label>
            Descricao:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handlerChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handlerChange}
        />
        
        {/* <div>
                        <label>
                        Cor:
                        <input
                            type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handlerChange}
                            />
                        </label>

                    </div> */}

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
            return (
          <li key={`${categoria}${indice}`}>
            {categoria.nome} //titulo
          </li>
          )
            })}
      </ul>

      {/* <h1>Cadastro de Categoria</h1>

            <form>
                <div className="formField">
                    <label htmlFor="userEmail">
                        E-mail:
                    </label>
                    <input
                        type="text"
                        placeholder="email@example.com"
                        name="UserEmail"
                        id="userEmail"
                        />

                </div>
                <div className="formField">
                    <label htmlFor="userPassword"
                    Password>
                    </label>
                    <input
                     type="password"
                     placeholder="Your secrect password"
                     name="userPassword"
                     id="userPassword"
                     /> */}
                     
        <Link to="/">
            Ir para home
        </Link>

    </PageDefault>

  )
}

export default CadastroCategoria;
