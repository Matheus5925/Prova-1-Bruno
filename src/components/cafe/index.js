import { useState } from 'react'
import { calcularCafe } from '../../services'
import './style.css'

const CalcularCafe = props => {
    const [alunos, setAlunos] = useState(1)
    const [litros, setLitros] = useState(1)
    const [mililitros, setMililitros] = useState(1)
    const [value, setValue] = useState(0)
    const calc = _ => {
        const resp = calcularCafe(alunos, litros, mililitros)
        setValue(resp)
    }
    return(
        <div className='modal container al-center jc-center'>
            <div className='overlay' onClick={props.close} id="close-cafe" />
            <section className='content container-column relative'>
                <div onClick={props.close} id="close-cafe" className="close" />
                <label htmlFor="">Informe a quantidade de alunos matriculados</label>
                <input value={alunos} onChange={e => setAlunos(e.target.value)} type="number" />
                <label htmlFor="">Informe a quantidade de litros minimos que podem ser feitos</label>
                <input value={litros} onChange={e => setLitros(e.target.value)} type="number" />
                <label htmlFor="">Informe quantos mililitros os alunos consome</label>
                <input value={mililitros} onChange={e => setMililitros(e.target.value)} type="number" />
                <button onClick={calc}>Calcular</button>
                <textarea className="text" value={value} disabled></textarea>
            </section>
        </div>
    )
}

export default CalcularCafe