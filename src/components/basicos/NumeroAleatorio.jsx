import React from 'react'

export default props => {
    const numeroAleatorio = Math.random() * (props.max - props.min) + props.min;
    const numeroAleatorioInteiro = Math.ceil(numeroAleatorio);
    return (
        <div>
            <h2>Numero aleatorio</h2>
            <p><strong>Valor Minimo: </strong> {props.min}</p> 
            <p><strong>Valor Maximo: </strong> {props.max}</p> 
            <p><strong>Valor Sorteado: </strong> {numeroAleatorioInteiro}</p> 
        </div>
    )
}