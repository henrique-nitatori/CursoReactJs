import React from 'react'

export default props => {
    return (
        <> 
            <label htmlFor="passoInput">Passo: </label>    
            <input type="number" name="" id="passoInput" value={props.passo} onChange={e => props.setPasso(+e.target.value)}/>
        </>
    );
}