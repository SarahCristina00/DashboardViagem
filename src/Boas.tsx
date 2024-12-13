import { BsSuitcaseFill } from "react-icons/bs"; //icone de mala
import Pesq from "./Pesquisar";
import Adicionar from "./Adicionar";
import "./Boas.css";


function Boas(){
    return(
        <div className="boasVindas">
            <h1><BsSuitcaseFill className="icone"/>Dashboard</h1>
            <p>Bem vinde, Agnes!</p>
            <Pesq/>
            <Adicionar/>
        </div>
    )
}

export default Boas