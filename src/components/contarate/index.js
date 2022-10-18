import { useState } from "react";
import { ContarAte } from "../../services";
import './style.css';


const ContarAteOutro = props =>{
    const [inicio, setInicio] = useState(0);
    const [fim, setFim] = useState(0);
    const [res, setRes] = useState('');

    const Contar = _=>{
        setRes(ContarAte(inicio, fim));
    }
    return(
        <div className='modal container al-center jc-center'>
            <div className='overlay' onClick={props.close} id="close-contar" />
            <section className='content acai container-column relative'>
                <div onClick={props.close} id="close-acai" className="close" />
                <div>
                    <label >Inicio: </label>
                    <input type="number" value={inicio} onChange={e => setInicio(e.target.value)} />
                </div>
                <div>
                    <label >Fim: </label>
                    <input type="number" value={fim} onChange={e => setFim(e.target.value)} />
                </div>
                <button onClick={Contar}>Contar</button>
                <textarea className="text" value={res} disabled></textarea>
            </section>
        </div>

    );
}

export default ContarAteOutro;