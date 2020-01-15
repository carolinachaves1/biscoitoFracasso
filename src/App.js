import React, { Component } from 'react';
import './estilo.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {

            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['O UNIVERSO NÃO TÁ NEM AÍ PARA VOCÊ', 
                        'PARECE QUE ESTÁ RUIM, MAS VAI PIORAR', 
                        'SÓ DARÁ ERRADO SE VOCÊ TENTAR',
                    'DERROTA SEM LUTA É FRACASSO SEM GLÓRIA',
                        'PEQUENAS BATALHAS, GRANDES DERROTAS',
                        'DIAS DE LUTA. DIAS DE DERROTA',
                        'O ESFORÇO DE HOJE É O FRACASSO DE AMANHÃ',
                    'O CAMINHO É LONGO, MAS A DERROTA É CERTA',
                'VAI. E SE DER MEDO, VOLTA',
                'A HORA CERTA PARA DESISTIR É AGORA',
                'O NÃO VOCÊ JÁ TEM. BUSQUE A HUMILHAÇÃO',
                'NUNCA DEIXE NINGUEM DIZER QUE VOCÊ NÃO CONSEGUE. DIGA VOCÊ MESMO: EU NÃO CONSIGO!',
                'UM DIA VOCÊ PERDE. NO OUTRO VOCÊ NÃO GANHA.',
                'EXPECTATIVA É A MÃE DA MERDA.',
                'A VIDA É UMA ETERNA DERROTA'
                
            
            ];


    }

    quebraBiscoito(){
        let state = this.state;

        let numAleatorio = Math.floor(Math.random() * this.frases.length);

        state.textoFrase = this.frases[numAleatorio];
        this.setState(state);

    }


    render(){
        return(
            <div className="container">
                <img src={require('./assets/biscoito.png')} className="img"/>
                <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito} id="btn"/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>

            </div>


        );
    } 
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>

            </div>

        )

    }


}



export default App;