import { useState } from 'react';
import './App.css';

/* ~~ components ~~
/* 
/* acai
/* ver signos
*/
import CalcularAcai from './components/acai/index';
import VerSignolibras from './components/signo/index';
import Gramas from './components/gramas/index';
import CardSalario from './components/salario/index';
import CardParada from './components/paradas';
import CardFebre from './components/febre';

function App() {
  const [viewAcai, setViewAcai] = useState(false);
  const [viewVerSig, setViewVerSig] = useState(false);
  const [viewGramas, setViewGramas] = useState(false);
  const [viewSalario, setViewSalario] = useState(false);
  const [viewParadas, setViewParadas] = useState(false);
  const [viewFebre, setViewFebre] = useState(false);

  const click = e => {
    const id = e.target.id;
    if (id === 'close-acai')
      setViewAcai(false);
    else if (id === 'open-acai')
      setViewAcai(true);
    else if (id === 'close-signo')
      setViewVerSig(false);
    else if (id === 'open-signo')
      setViewVerSig(true);
    else if (id === 'close-gramas')
      setViewGramas(false);
    else if (id === 'open-gramas')
      setViewGramas(true);
    else if(id === 'open-salario')
      setViewSalario(true);
    else if(id === 'close-salario')
      setViewSalario(false);
    else if(id === 'close-paradas')
      setViewParadas(false);
    else if(id === 'open-paradas')
      setViewParadas(true)
    else if(id === 'close-febre')
      setViewFebre(false);
    else if(id === 'open-febre')
      setViewFebre(true);
  }

  return (
    <div className="app wh100 container-column">
      <h1>Provenhas do Bruno</h1>
      {viewAcai && (<CalcularAcai close={e => click(e)} />)}
      {viewVerSig && (<VerSignolibras close={e => click(e)} />)}
      {viewGramas && (<Gramas close={e => click(e)} />)}
      {viewSalario && (<CardSalario close={e => click(e)}/>)}
      {viewParadas && (<CardParada close={e => click(e)}/>)}
      {viewFebre && (<CardFebre close={e => click(e)}/>)}
      <div className='app__provas'>
        <button onClick={click} id='open-acai'>Ver Açai</button>
        <button onClick={click} id='open-signo'>Ver Signo</button>
        <button onClick={click} id='open-gramas'>Ver Gramas</button>
        <button onClick={click} id='open-salario'> Ver Salario </button>
        <button onClick={click} id='open-paradas'> Ver Paradas </button>
        <button onClick={click} id='open-febre'> Ver Febre </button>
      </div>
    </div>
  );
}

export default App;
