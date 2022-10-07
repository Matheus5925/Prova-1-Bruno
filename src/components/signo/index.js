import { useState } from 'react';
import { VerificarSigno } from '../../services';
import './style.css';

const Signo = props =>{
    const [mes, setMes] = useState('');
    const [dia, setDia] = useState(0);
    const [res, setRes] = useState();

    const Verificar = _ =>{
        setRes(VerificarSigno(mes, dia));
    }

    return(
        <div className='modal container al-center jc-center'>
            <div className='overlay' onClick={props.close} id="close-signo" />
            <section className='content signo-page-principal container-column'>
                <div onClick={props.close} id="close-signo" className="close" />
                <h2>Verificar Signos</h2>
                <div className='input-mes-dia__signo container-column'>
                    <label> Mês do seu nascimento:</label>
                    <input type="text" value={mes.toLowerCase()} onChange={e => setMes(e.target.value)} />
                </div>
                <div className='input-mes-dia__signo container-column'>
                    <label> Dia do seu nascimento:</label>
                    <input type="text" value={dia} onChange={e => setDia(e.target.value)} />
                </div>
                <button onClick={Verificar}> Verificar </button>
                <div>
                    <p>{res === true ? 'Signo é Libras? Sim' : 'Signo é Libras? Não'}</p>
                </div>
            </section>
        </div>
    );
}

export default Signo;