import React from 'react'

import produtos from '../../data/produtos';
import './DesafioRepeticao.css'

export default props => {
    const listaProdutos = produtos.map(produto => {
        return (
            <tr key={produto.id} style={{backgroundColor: produto.id % 2 === 0 ? '#DCDCDC	': 'white'}}>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.valor}</td>
            </tr>
        )
    })

    return (
        <div className="Table-content">
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Descricao</th>
                    <th>Preco</th>
                </tr>
                {listaProdutos}
            </table>
        </div>
       
    )
}