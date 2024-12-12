import { BsSuitcaseFill } from "react-icons/bs"; //icone de mala
import "./Boas.css";


function Boas(){
    return(
        <div className="boasVindas">
            <BsSuitcaseFill className="icone"/>
            <p>Bem vinde, Agnes!</p>
            <button className="adicionar">Adicionar Viagem</button>
        </div>
    )
}

export default Boas