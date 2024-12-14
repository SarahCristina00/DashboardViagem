import React from "react";

export type ViagensProps = {
    origem: string;
    destino: string;
    saida: string;
    chegada: string;
};

function Viagens({viagens}: {viagens:ViagensProps[]}){
    return(
        <div className="viagens">
            <h1>Viagens</h1>
            {exibeViagens(viagens)}
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
            <div>Origem:{viagem.origem}</div>
            <div>Destino: {viagem.destino}</div>
            <div>Horário de saída: {viagem.saida}</div>
            <div>Horário de Chegada: {viagem.chegada}</div>
        </div>
    ));
}

export default Viagens;