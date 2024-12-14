import './Calendario.css';

function Data(){

    return (
    <div className="Calendario">
    <h1>Calendário de Viagens</h1>
        <div className="Data">
            <label>Data Ida</label>
            <input type="date" />
            <br></br>
            <label>Data Volta</label>
            <input type="date" />
        </div>
    </div>
    )
}

export default Data