import { useState } from 'react';
import { TotalGramas } from '../../services';
import './styles.css';



const Gramas = props =>{
    const [gramas, setGramas] = useState(0);
    const [res, setRes] = useState('');

    const verificar = _ =>{
        setRes(TotalGramas(gramas))
    }

    return(
        <div className='modal container al-center jc-center'>
            <div className='overlay' onClick={props.close} id="close-gramas" />
            <section className='content acai container-column relative'>
                <div onClick={props.close} id="close-gramas" className="close" />
                <h2>Calcular Gramas</h2>
                <div>
                    <label>Quantas Gramas:</label>
                    <input type="number" value={gramas} onChange={e => setGramas(e.target.value)}/>
                </div>
                <button onClick={verificar}> Calcular </button>
                <div>
                    <p>{res}</p>
                </div>
            </section>
        </div>
    );
}

export default Gramas;