import React,{useState} from 'react';
import styled from '@emotion/styled';
import {calcularDiferencia, calcularMarca, obtenerPlan} from './helper'

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;

    label{
        flex:0 0 100px;
    }
    select{
        display:block;
        width:100%;
        padding:1rem;
        border: 1px solid #e1e1e1;
        -webkit-appearance:none;
    }
    input{
        margin: 0 1rem;
    }
`;
const Boton = styled.button`
        background-color: #00838F;
        font-size: 15px;
        width:100%;
        padding: 1rem;
        color:#fff;
        text-transform:uppercase;
        font-weight:bold;
        border:none;
        transition:background-color .3s ease;
        margin-top:2rem;

        &:hover{
            background-color:#26c6da;
            cursor: pointer;
        }
    `;
const Error = styled.div`
    background-color:red;
    color:white;
    padding:1rem;
    width:100%;
    text-align:center;
    margin-bottom:2rem;
`;
const Formulario = ({setResumen,setCargando}) => {
    const [data, setData] = useState({
        marca:"",
        ano:"",
        plan:""
    });
    //extract the value from the state
    const {marca, ano, plan} = data;
    
    // create a error
    const [error, setError] = useState(false);
    // read the data from the form and puts it on the state
    const obtenerInformacion = e =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    //when the user press submit
    const cotizarSeguro = e =>{
        e.preventDefault();
        if (marca.trim()===''|| plan.trim()===''||ano.trim==='') {
            setError(true);
            return;   
        }
        setError(false);
        // ano base
        let base = 2000;
        // obtener la diferencia de anos
        const diferencia = calcularDiferencia(ano);
        
        // por cada ano hay que restar el 3%
        base -= ((diferencia*3)*base)/100;
        
        // americano 15%
        // asiatico 5%
        // europeo 30%
        base = calcularMarca(marca) * base;

        // basico aumenta 20%
        // completo 50%
        const incrementoPlan = obtenerPlan(plan);
        base = parseFloat(incrementoPlan * base).toFixed(2);
        
        setCargando(true);
        setTimeout(() => {
            
            setCargando(false);
            setResumen({
                cotizacion: base,
                data
            });
        }, 3000);
        
    }
    return ( 
        <form
            onSubmit = {cotizarSeguro}
        >
            {error ? <Error>TODOS LOS CAMPOS SON OBLIGATORIOS</Error> :null}
            <Campo>
                <label>Marcas: </label>
                <select
                    name="marca"
                    value={marca}
                    onChange={obtenerInformacion}
                >
                    <option value="">--Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </select>
            </Campo>

            <Campo>
                <label>Ano: </label>
                <select
                    name="ano"
                    value={ano}
                    onChange={obtenerInformacion}
                >
                    <option value="">--Seleccione--</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </select>
            </Campo>
            <Campo>
                <label>Plan: </label>
                <input
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan ==="basico"}
                    onChange={obtenerInformacion}
                />Basico
                <input
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan ==="completo"}
                    onChange={obtenerInformacion}
                />Completo
            </Campo>
            <Boton type="submit">Cotizar</Boton>
        </form>
     );
}
 
export default Formulario;