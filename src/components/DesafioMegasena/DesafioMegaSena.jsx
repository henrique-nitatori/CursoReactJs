import React, {useState} from 'react'

export default props => {

    function gerarNumeroNaoContido(min, max, array) {
       const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
       return array.includes(aleatorio) ? 
            gerarNumeroNaoContido(min, max, array) :
            aleatorio;
    }
    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero ]
            }, [])
            .sort((n1,n2) =>  n1 - n2)
        return numeros
    } 
    const [qtde,  setqtde] = useState(props.qtde || 6);
    const numerosInicias = gerarNumeros(qtde);
    const [qtdNumeros,  setqtdNumeros] = useState(numerosInicias);

    return (
        <div>
            <h2>Mega</h2>
            <p>{qtdNumeros.join(' ')}</p>
            <div>
                <label>Quantidade de numeros</label>
                <input type="number" value={qtde} 
                    onChange={e => setqtde(+e.target.value)}/>
            </div>
            <button onClick={_ => setqtdNumeros(gerarNumeros(qtde))}>
                Gerar numeros
            </button>
        </div>
    )
}