import React, {Component} from 'react'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'
import './Contador.css'

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }
    incrementar = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    decrementar = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }
    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        }) 
    }

    render () {
        return (
            <div className="Contador">
                Contador
                <Display numero={this.state.numero}/>
                <div>
                    <PassoForm  passo={this.state.passo} setPasso={this.setPasso} />
                    <Botoes incrementar={this.incrementar} decrementar={this.decrementar}/>
                </div>
            </div>
        )
    }

}

export default Contador;