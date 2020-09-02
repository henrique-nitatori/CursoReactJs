import React, { useState } from 'react';
import './Input.css';

export default props => {
    const [valor, setValor] = useState('Inicial');

    function quandoMudar(event) {
        setValor(event.target.value)
    }

    return (
        <div className="Input" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center'
        }}>
            <h2>{valor}</h2>
            <input value={valor} onChange={ quandoMudar }/>
            <input value={valor} readOnly/>
        </div>
    )
}