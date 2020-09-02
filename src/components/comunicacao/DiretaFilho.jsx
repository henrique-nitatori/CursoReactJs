import React from 'react'

export default props => {
    return (
        <div>
            <span>{ props.nome } </span>
            <strong><span>{ props.idade } </span></strong>
            <span>{ props.nerd ? 'Verdadeiro' : 'Falso' }</span>
        </div>
    )
}