import React from "react";
import './Viagens.css';

export type ViagensProps = {
    origem: string;
    destino: string;
    saida: string;
    chegada: string;
    data: string;
};

function Viagens({viagens}: {viagens:ViagensProps[]}){
    return(
        <div className="viagens">
            <h1>Viagens</h1>
            <div className="todasViagens">
                {exibeViagens(viagens)}
            </div>
        </div>
    );
}

export function salvarViagem(setViagens: React.Dispatch<React.SetStateAction<ViagensProps[]>>, novaViagem: ViagensProps){
    setViagens((viagensAnt: ViagensProps[]) => {
        const todasViagens = [];
        for (let i = 0; i < viagensAnt.length; i++) {
            todasViagens.push(viagensAnt[i]);
        }

        todasViagens.push(novaViagem);

        return todasViagens;
    });
}

export function exibeViagens(viagens: ViagensProps[]){
    return viagens.map((viagem,index)=>(
        <div className="viagem" key={index}>
            <p>Origem: {viagem.origem}</p>
            <p>Destino: {viagem.destino}</p>
            <p>Horário de saída: {viagem.saida}</p>
            <p>Horário de Chegada: {viagem.chegada}</p>
            <p>Data de viagem: {viagem.data}</p>
        </div>
    ));
}

export default Viagens;