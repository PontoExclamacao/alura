import React from 'react';
import Logo from  '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from '../components/ButtonLink';
// import Button from '../components/ButtonLink';
import { Link } from 'react-router-dom';


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="WbFlix Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
              Novo vídeo
            </Button>

            {/* <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink> */}

            {/* <Button as="a" className="ButtonLink" href="/">
                Novo vídeo

            </Button> */}


        </nav>
               
        
    );

}
    export default Menu; 