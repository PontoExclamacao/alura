import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Index';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/Categoria';



//mesmo que fazer direito (#Desafio pagina 404)
const Pagina404 = () => (<div>Pagina404
    
   </div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo}  />
      <Route path="/cadastro/categoria" component={CadastroCategoria}  />

      <Route  component={Pagina404}  />
      {/* <Route  component={paginaErro}  /> */}

    </Switch>
  </BrowserRouter>,
    document.getElementById('root')

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
 
);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
