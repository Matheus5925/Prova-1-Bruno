import { useState } from "react";
import {GanhosGastos } from '../../services.js'

const Ganhosgastos = props =>{
    const [ganhos, setGanhos] = useState(0);
    const [gastos, setGastos] = useState(0);
    const [res, setRes] = useState('');

    const calcular = _ =>{
        setRes(GanhosGastos(ganhos, gastos));
    }

    return(
        <div className='modal container al-center jc-center'>
            <div className='overlay' onClick={props.close} id="close-ganhos-gastos" />
            <section className='content acai container-column relative'>
                <div onClick={props.close} id="close-gramas" className="close" />
                    <div>
                        <label> Ganhos: </label>
                        <input type="number" value={ganhos} onChange={e => setGanhos(e.target.value)}/>
                    </div>
                    <div>
                        <label> Gastos: </label>
                        <input type="number" value={gastos} onChange={e => setGastos(e.target.value)}/>
                    </div>
                    <button onClick={calcular}> Calcular </button>
                    {res}
            </section>
        </div>
    );
};

export default Ganhosgastos;