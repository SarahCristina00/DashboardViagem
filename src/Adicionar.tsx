import React, {useState} from 'react';
import './Adicionar.css';
import {salvarViagem, ViagensProps} from './Viagens';
//import Data from './Calendario';

function Adicionar({salvaViagem}:{salvaViagem: (novaViagem: ViagensProps)=> void}){
    //Estados
    const[viagem, adicionaViagem] = useState<ViagensProps>({
        origem: '',
        destino: '',
        saida: '',
        chegada: '',
        data:'',
    })

    const [botao,adicionando] = useState(false);

    //Funções
    const click =() =>{
        adicionando(true);
    }

    const informarViagem = (info: React.FormEvent) =>{
        info.preventDefault();
        salvaViagem(viagem);
        adicionando(false);
    }

    return(
        <>
        {!botao &&(
            <button className="adicionar" onClick={click}>Adicionar</button>
        )}
        {botao && (
            <form onSubmit={informarViagem}>
                <label>Origem: </label>
                <input
                    type='text'
                    value={viagem.origem}
                    onChange={(local)=>adicionaViagem({...viagem, origem:local.target.value})}
                />
                
                <label>Destino: </label>
                <input
                    type='text'
                    value={viagem.destino}
                    onChange={(local)=>adicionaViagem({...viagem, destino:local.target.value})}
                />

                <label>Horário de Saída: </label>
                <input
                    type='time'
                    value={viagem.saida}
                    onChange={(hora)=>adicionaViagem({...viagem, saida:hora.target.value})}
                />

                <label>Horário de Chegada: </label>
                <input
                    type='time'
                    value={viagem.chegada}
                    onChange={(hora)=>adicionaViagem({...viagem, chegada:hora.target.value})}
                />

                <label>Dia de Partida: </label>
                <input type="date" 
                value={viagem.data}
                onChange={(data)=>adicionaViagem({...viagem,data:data.target.value})}/>
                <button type='submit'>Salvar Viagem</button>
            </form>
        )}
        </>  
    );
}

export default Adicionar