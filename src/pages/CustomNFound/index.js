import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function paginaErro() {
    return (
        <PageDefault>
           <h1>Pagina nao encontrada</h1> 
           
            {/* <Link to={{ pathname: "https://imersaoreact.azurewebsites.net/flapy/"}} >
                Cadastrar Categoria 
            </Link> */}

            <Link to="/cadastro/categoria">
                Cadastrar Categoria 
            </Link>
        </PageDefault>

    )
}

export default paginaErro;