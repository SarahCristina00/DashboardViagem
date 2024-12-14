import { BsSuitcaseFill } from "react-icons/bs"; //icone de mala
import Adicionar from "./Adicionar";
import "./Boas.css";
import {ViagensProps} from "./Viagens";

interface BoasProps{
    salvarViagem: (novaViagem: ViagensProps) => void;
}


function Boas({salvarViagem}: BoasProps){
    return(
        <div className="boasVindas">
            <h1><BsSuitcaseFill className="icone"/>Dashboard</h1>
            <p>Bem vinde, Agnes!</p>
            <Adicionar salvaViagem={salvarViagem}/>
        </div>
    )
}

export default Boas