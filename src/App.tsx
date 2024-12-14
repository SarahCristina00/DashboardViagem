import { useState } from 'react';
import './App.css';
import Boas from './Boas';
import Data from './Calendario';
import Viagens, {ViagensProps} from './Viagens';

function App() {
  const [viagens, atualizaViagens] = useState<ViagensProps[]>([]);
  
  const salvarViagem = (novaViagem: ViagensProps) => {
    atualizaViagens((viagensAnt) => [...viagensAnt, novaViagem]);
  };
  
  return(
    <>
      <Boas salvarViagem={salvarViagem}/>
      <Data/>
      <Viagens viagens={viagens} />
      </>
  )
}

export default App
