import React from "react";

type ViagensProps = {
    origem: string;
    destino: string;
    saida: string;
    chegada: string;
};

function Viagem({origem, destino, saida, chegada}: ViagensProps){
    return(
        <div className="viagem">
            <div>Origem: {origem}</div>
            <div>Destino: {destino}</div>
            <div>Horário de partida: {saida}</div>
            <div>Horário de chegada: {chegada}</div>
        </div>
    );
}

export default Viagem;