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

function App() {
  const [viewAcai, setViewAcai] = useState(false);
  const [viewVerSig, setViewVerSig] = useState(false);
  const [viewGramas, setViewGramas] = useState(false);

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
  }

  return (
    <div className="app wh100 container-column">
      <h1>Provenhas do Bruno</h1>
      {viewAcai && (<CalcularAcai close={e => click(e)} />)}
      {viewVerSig && (<VerSignolibras close={e => click(e)} />)}
      {viewGramas && (<Gramas close={e => click(e)} />)}
      <div className='app__provas'>
        <button onClick={click} id='open-acai'>Ver Açai</button>
        <button onClick={click} id='open-signo'>Ver Signo</button>
        <button onClick={click} id='open-gramas'>Ver Gramas</button>
      </div>
    </div>
  );
}

export default App;
