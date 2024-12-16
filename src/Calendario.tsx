import React, {useState} from "react";
import './Calendario.css';

const Data: React.FC = () => {
    const feriados = [
      { data: "01/01", nome: "Ano Novo", mes:1 },
      { data: "12/02", nome: "Carnaval", mes:2 },
      { data: "13/02", nome: "Carnaval", mes:2 },
      { data: "29/03", nome: "Paixão de Cristo", mes:3 },
      { data: "21/04", nome: "Tiradentes", mes:4 },
      { data : "01/05", nome: "Dia do Trabalhador", mes:5},
      { data : "30/05", nome: "Corpus Christi", mes:5},
      { data: "07/09", nome: "Independência do Brasil",mes:9 },
      { data: "12/10", nome: "Nossa Senhora Aparecida",mes:10 },
      { data: "02/11", nome: "Finados" , mes:11},
      { data: "15/11", nome: "Proclamação da República" , mes:11},
      {data: "20/11", nome:"Consciencia Negra",mes:11},
      { data: "25/12", nome: "Natal" , mes:12},
    ];
  
    const [mesSelecionado, setMesSelecionado] = useState<number | null>(null);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const dataSelecionada = event.target.value; // Formato "YYYY-MM"
      const mes = parseInt(dataSelecionada.split("-")[1],10); // Extrai o mês
      setMesSelecionado(mes);
    };
    const feriadosDoMes = feriados.filter((feriado) => feriado.mes === mesSelecionado);
    return (
        <div className="calendario-container">
      <div className="calendario-main">
        <h1>Calendário de Feriados</h1>
        <div className="calendario-input">
          <input type="date" onChange={handleDateChange} />
        </div>
      </div>
      <div className="calendario-sidebar">
        <h2>Feriados</h2>
        {mesSelecionado === null ? ( <p>Verificar os feriados do mês.</p>  ) : feriadosDoMes.length > 0 ? (
          <ul>
            {feriadosDoMes.map((feriado, index) => (
              <li key={index}>
                <strong>{feriado.data}</strong> - {feriado.nome}
              </li>
            ))}
          </ul>
        ) : ( <p>Não há feriados neste mês.</p> 
          )}
      </div>
    </div>
  );
  };

export default Data