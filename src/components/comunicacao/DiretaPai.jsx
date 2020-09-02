import React from 'react'
import DiretaFilho from './DiretaFilho';

export default props => {
    return (
        <div>
            <DiretaFilho nome="Joao" idade={17} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Roberto" idade={22} nerd={false}></DiretaFilho>

        </div>
    )
}