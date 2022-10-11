import { useState } from "react";
import { QuantidadeParadas } from "../../services";


const CardParada = props =>{
    const [capacidade, setCapacidade] = useState(0);
    const [consumo, setConsumo] = useState(0);
    const [distancia, setDistancia] = useState(0);
    const [res, setRes] = useState(0);

    const CalcularParadas = _ =>{
        capacidade.replace(',', '.');
        consumo.replace(',', '.');
        distancia.replace(',', '.');

        setRes(QuantidadeParadas(capacidade, consumo, distancia));
    }

    return(
        <div className='modal container al-center jc-center'>
            <div className='overlay' onClick={props.close} id="close-paradas" />
            <section className='content acai container-column relative'>
            <div onClick={props.close} id="close-acai" className="close" />
            
                <div>
                    <h1>Calcular quantidade de paradas</h1>
                </div>

                <div className="inputs-salario">
                    <label> Capacidade: </label>
                    <input type="number" value={capacidade} onChange = {e => setCapacidade(e.target.value)} />
                </div>
                <div className="inputs-salario">
                    <label> Consumo: </label>
                    <input type="number" value={consumo} onChange = {e => setConsumo(e.target.value)} />
                </div>
                <div className="inputs-salario">
                    <label> Distancia: </label>
                    <input type="number" value={distancia} onChange = {e => setDistancia(e.target.value)} />
                </div>
                <button onClick={CalcularParadas}> Calcular </button>
                <p>{res}</p>
            </section>
        </div>    
    );
};

export default CardParada;