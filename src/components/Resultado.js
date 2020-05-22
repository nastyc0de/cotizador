import React from 'react';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Mensaje = styled.p`
    background-color:rgb(127, 224, 237);
    margin-top:2rem;
    padding:1rem;
    text-align:center;
`;
const Resultadostyle = styled.div`
    color:#00838f;
    margin-top:1rem;
    padding:.5rem;
    border: 1px solid #26c6da;
    text-align:center;
    background-color:rgb(127, 224, 237);
    position:relative;
`;

const Cotizadorstyle = styled.p`
    color:#00838f;
    margin:0;
    padding:1rem;
    text-transform:uppercase;
`;

const Resultado = ({cotizacion}) => {
    
    return ( 
        (cotizacion === 0) 
            ? <Mensaje>Elige marca, ano y tipo de seguro</Mensaje>
            :   (
                    <Resultadostyle>
                        <TransitionGroup
                            component="p"
                            className="resultado"
                        >
                            <CSSTransition
                                classNames="resultado"
                                key={cotizacion}
                                timeout={{enter: 500, exit:500}}
                            >
                            <Cotizadorstyle>El total es: ${cotizacion}</Cotizadorstyle>
                            </CSSTransition>
                        </TransitionGroup>
                    </Resultadostyle>
                )  
            
     );
}
 
export default Resultado;