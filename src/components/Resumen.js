import React from 'react';
import styled from '@emotion/styled';
import {primeraMayuscula}from './helper';

const ContenedorResumen = styled.div`
    padding:1rem;
    text-align:center;
    background-color:#00838f;
    color:#fff;
    margin-top:1rem;

`;

const Resumen = ({data}) => {

    // extraer los datos
    const{marca, ano, plan} = data;
    if(marca ==='' || ano==='' || plan==='') return null;
    return (
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca:{primeraMayuscula(marca)}</li>
                <li>Plan:{primeraMayuscula(plan)}</li>
                <li>Ano del auto:{primeraMayuscula(ano)}</li>
            </ul>
        </ContenedorResumen> 
        
     );
}
 
export default Resumen;