import React, {useState} from 'react';
import './Adicionar.css';
import Viagem from './Viagens';

function Adicionar(){
    const[adicionarViagem, adiconaViagem] = useState(false);
    
    const click =() =>{
        adiconaViagem(true);
    };

    return(
        <>
        {!adicionarViagem &&(
            <button className="adicionar" onClick={click}>Adicionar</button>
        )}
        {adicionarViagem && 
            <Viagem origem="jf" destino="rio" saida="09:24" chegada="13:25" />
        }
        </>  
    );
}

export default Adicionar