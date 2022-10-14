import { useState } from "react";
import { TotalCompra } from "../../services";

const Ingressos = props => {
    const [inteiras, setInteiras] = useState(0)
    const [meias, setMeias] = useState(0)
    const [diaSemana, setDiaSemana] = useState('')
    const [nacional, setNacional] = useState(false)
    const [resp, setResp] = useState(0);

    const calcularTotal = _ => {
        const result = TotalCompra(Number(inteiras), Number(meias), diaSemana, nacional);
        setResp(result);
    }

    return (
        <div className='modal container al-center jc-center'>
            <div className='overlay' onClick={props.close} id="close-ingressos" />
            <section className='content container-column relative'>
                <div onClick={props.close} id="close-ingressos" className="close" />
                <input value={inteiras} onChange={e => setInteiras(e.target.value)} type="number" />
                <input value={meias} onChange={e => setMeias(e.target.value)} type="number" />
                <select onChange={e => setDiaSemana(e.target.value)} name="" id="">
                    <option value="segunda-feira" selected>segunda-feira</option>
                    <option value="terça-feira">terça-feira</option>
                    <option value="quarta-feira">quarta-feira</option>
                    <option value="quinta-feira">quinta-feira</option>
                    <option value="sexta-feira">sexta-feira</option>
                    <option value="sabado">sabado</option>
                    <option value="domingo">domingo</option>
                </select>
                <p>Nacional?</p>
                <div>
                    <input selected type="radio" name='nacional' id='nacional1' onClick={_ => setNacional(!nacional)} />
                    <label htmlFor="nacional1">Sim</label>
                </div>
                <button onClick={_ => calcularTotal()}>Calcular</button>
                <div>O total a se pagar pelos ingressos é R$ {resp}</div>
            </section>
        </div>
    )
}

export default Ingressos;