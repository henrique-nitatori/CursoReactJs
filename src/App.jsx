import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import NumeroAleatorio from './components/basicos/NumeroAleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import DesafioRepeticao from './components/repeticao/DesafioRepeticao';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/InderetaPai.jsx'
import Input from './components/formulario/Input.jsx'
import Contador from './components/contador/Contador.jsx'
import MegaSena from './components/DesafioMegasena/DesafioMegaSena.jsx'

import './App.css';

export default _ => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#12 Contador" color="#991">
                    <MegaSena  />
                </Card>
                <Card titulo="#12 Contador" color="#144">
                        <Contador numeroInicial={10} />
                </Card>
                <Card titulo="#11 Componente controlado" color="#099">
                        <Input />
                </Card>
                <Card titulo="#10 Comunicacao indireta" color="#704">
                        <IndiretaPai />
                </Card>
                <Card titulo="#9 Comunicacao direta" color="#958">
                        <DiretaPai />
                </Card>
                <Card titulo="#8 Renderizacao condicional" color="#192">
                        <ParOuImpar numero={11} />
                        <UsuarioInfo usuario={{ nome: 'Henrique' }} />
                        <UsuarioInfo usuario={{ email: 'Henrique@hotmail.com' }} />

                </Card>
                <Card titulo="#7 Desafio Repeticao" color="#975">
                        <DesafioRepeticao />
                </Card>
                <Card titulo="#6 Lista Alunos" color="#989">
                        <ListaAlunos />
                </Card>
                <Card titulo="#5 Component com filho" color="#484">
                    <Familia sobrenome="Silva"> 
                        <FamiliaMembro nome="Joao" />
                        <FamiliaMembro nome="Maria" />
                        <FamiliaMembro nome="Jose" />
                    </Familia>
                </Card>
                <Card titulo="#4 Desafio Aleatorio" color="#080">
                    <NumeroAleatorio
                        min={1}
                        max={10} />
                </Card>
                <Card titulo="#3 Fragmento" color="#800">
                    <Fragmento />
                </Card>
                <Card titulo="#2 Com Parametro" color="#058">
                    <ComParametro
                        titulo="Situacao do aluno"
                        aluno="Henrique" nota={9.3} />
                </Card>
                <Card titulo="#1 Primeiro Componente" color="#985">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}