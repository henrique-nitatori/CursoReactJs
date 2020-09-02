import React from 'react'

import If from './if';

export default props => {
    const usuario = props.usuario || { }
    return (
        <div>
            <If test={usuario && usuario.nome}>
                <div>
                    Seja bem vindo <strong>{ props.usuario.nome }</strong>!
                </div>
            </If>
            <If test={!usuario || !usuario.nome}>
            <div>
                Seja bem vindo <strong>Desconhecido</strong>!
            </div>
        </If>
        </div>

        
    )
}