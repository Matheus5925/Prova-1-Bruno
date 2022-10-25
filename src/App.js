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
import Ingressos from './components/ingressos';
import Ganhosgastos from './components/gastos';
import ContarAteOutro from './components/contarate';
import DesenharLinha from './components/linha';
import DesenharRetangulo from './components/retangulo';
import CalcularCafe from './components/cafe';
import MediaTurma from './components/MediaSala';

function App() {
  const [viewAcai, setViewAcai] = useState(false);
  const [viewVerSig, setViewVerSig] = useState(false);
  const [viewGramas, setViewGramas] = useState(false);
  const [viewSalario, setViewSalario] = useState(false);
  const [viewParadas, setViewParadas] = useState(false);
  const [viewFebre, setViewFebre] = useState(false);
  const [viewIngressos, setViewIngressos] = useState(false);
  const [viewGanhosGastos,setViewGanhosGastos ] = useState(false);
  const [viewContar, setContar] = useState(false);
  const [viewLinha, setViewLinha] = useState(false);
  const [viewRetangulo, setViewRetangulo] = useState(false);
  const [viewCafe, setViewCafe] = useState(false);
  const [viewMedia, setViewMedia] = useState(false);

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
    else if (id === 'open-salario')
      setViewSalario(true);
    else if (id === 'close-salario')
      setViewSalario(false);
    else if (id === 'close-paradas')
      setViewParadas(false);
    else if (id === 'open-paradas')
      setViewParadas(true)
    else if (id === 'close-febre')
      setViewFebre(false);
    else if (id === 'open-febre')
      setViewFebre(true);
    else if (id === 'open-ingressos')
      setViewIngressos(true)
    else if (id === 'close-ingressos')
      setViewIngressos(false);
    else if(id === 'close-ganhos-gastos')
      setViewGanhosGastos(false);
    else if(id === 'open-ganhos-gastos')
      setViewGanhosGastos(true);
    else if (id === 'close-contar')
      setContar(false);
    else if (id === 'open-contar')
      setContar(true);
    else if (id === 'close-linha')
      setViewLinha(false);
    else if (id === 'open-linha')
      setViewLinha(true)
    else if (id === 'close-retangulo')
      setViewRetangulo(false);
    else if (id === 'open-retangulo')
      setViewRetangulo(true)
      else if (id === 'close-cafe')
      setViewCafe(false);
    else if (id === 'open-cafe')
      setViewCafe(true);
    else if(id === 'open-media')
      setViewMedia(true);
    else if(id === 'close-media')
      setViewMedia(false);
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
      {viewIngressos && (<Ingressos close={e => click(e)}/>)}
      {viewGanhosGastos && (<Ganhosgastos close={e => click(e)}/>)}
      {viewContar && (<ContarAteOutro close={e => click(e)}/>)}
      {viewLinha && (<DesenharLinha close={e => click(e)}/>)}
      {viewRetangulo && (<DesenharRetangulo close={e => click(e)} />)}
      {viewCafe && (<CalcularCafe close={e => click(e)}/>)}
      {viewMedia&& (<MediaTurma close={e => click(e)}/>)}

      <div className='app__provas'>
        <button onClick={click} id='open-acai'>Ver Açai</button>
        <button onClick={click} id='open-signo'>Ver Signo</button>
        <button onClick={click} id='open-gramas'>Ver Gramas</button>
        <button onClick={click} id='open-salario'> Ver Salario </button>
        <button onClick={click} id='open-paradas'> Ver Paradas </button>
        <button onClick={click} id='open-febre'> Ver Febre </button>
        <button onClick={click} id='open-ingressos'>Ver Total Ingressos</button>
        <button onClick={click} id='open-ganhos-gastos'>Ver Total Gastos</button>
        <button onClick={click} id='open-contar'>Ver Contar</button>
        <button onClick={click} id='open-linha'>Ver Desenhar Linha</button>
        <button onClick={click} id='open-retangulo'>Ver Desenhar retangulo</button>
        <button onClick={click} id='open-cafe'>Ver Calcular Café</button>
        <button onClick={click} id='open-media'>Ver Media Turma</button>
      </div>
    </div>
  );
}

export default App;
