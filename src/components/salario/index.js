import { useState } from "react";
import { CalcularSalario } from "../../services";

const CardSalario = props =>{
    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [desc, setDesc] = useState(0)
    const [res, setRes] = useState(0);

    const ResultSalario = _ =>{
        setRes(CalcularSalario(salario, bonus, desc));
    }

    return(
        <div className='modal container al-center jc-center'>
            <div className='overlay' onClick={props.close} id="close-salario" />
            <section className='content acai container-column relative'>
            <div onClick={props.close} id="close-acai" className="close" />
                <div>
                    <h1>Calcular Salario líquido</h1>
                </div>

                <div className="inputs-salario">
                    <label> Salario: </label>
                    <input type="number" value={salario} onChange = {e => setSalario(e.target.value)} />
                </div>
                <div className="inputs-salario">
                    <label> Bônus: </label>
                    <input type="number" value={bonus} onChange = {e => setBonus(e.target.value)} />
                </div>
                <div className="inputs-salario">
                    <label> Desconto: </label>
                    <input type="number" value={desc} onChange = {e => setDesc(e.target.value)} />
                </div>
                <button onClick={ResultSalario}> Calcular </button>
                <p>{res}</p>
            </section>
        </div>    
    );
}

export default CardSalario;