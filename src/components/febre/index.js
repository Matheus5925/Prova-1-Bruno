import { useState } from "react";
import { VerificarTemperatura } from "../../services";


const CardFebre = props =>{
    const [temperatura, setTemperatura] = useState(0);
    const [res, setRes] = useState('');

    const CalcularFebre = _ =>{
        temperatura.replace(',', '.');
        setRes(VerificarTemperatura(temperatura));
    }

    return(
        <div className='modal container al-center jc-center'>
        <div className='overlay' onClick={props.close} id="close-febre" />
        <section className='content acai container-column relative'>
        <div onClick={props.close} id="close-acai" className="close" />
            <div>
                <h1>Medir Febre</h1>
            </div>
            <div className="inputs-salario">
                <label> Temperatura: </label>
                <input type="number" value={temperatura} onChange = {e => setTemperatura(e.target.value)} />
            </div>
            <button onClick={CalcularFebre}> Medir </button>
            <p>{res}</p>
        </section>
    </div>    
    );
};

export default CardFebre;