// obtener la diferencia de los anos
export function calcularDiferencia(year){
    return  new Date().getFullYear() - year;
}

// calcular el monto total a pagar segun el pais
export function calcularMarca(marca){
    let incremento;

    switch(marca){
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
    }
    return incremento;
}

// calcular el tipo de seguro
export function obtenerPlan(plan){
    return(plan ==='basico') ? 1.20 : 1.50;
}

// muestra la primera letra en mayuscula
export function primeraMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}