import React from 'react';
import CupomDisplay from '../../components/CupomDisplay';
import CupomMap from '../../components/CupomDisplayMap'
import MenuSide from '../../components/MenuLateral';
import { RiAddCircleLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';

import './index.css';

const ListaCupons = () => {

    return(

        <div>

            <div id="btnAdd">
                <Link to="/AdicionarNovoCupom">
                    <RiAddCircleLine color="#fa4505" size="2.8em" titile="Adicionar Cupom"/>
                </Link>
            </div>

            <MenuSide />
            
            <div id="container">                
                <h1>Cupons</h1>

                {/* https://stackoverflow.com/questions/57261462/how-to-filter-json-data-from-api-and-setstate-in-react */}
                {/* SEARCH https://medium.com/crobyer/search-filter-with-react-js-88986c644ed5 */}

                <CupomMap />
            </div>

        </div>

    );

}

export default ListaCupons;