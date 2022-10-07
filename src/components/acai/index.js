import { useState } from 'react';
import { calcAcai } from '../../services';
import './style.css';

const CalcularAcai = props => {
    const [pequeno,setPequeno] = useState(0);
    const [medio, setMedio] = useState(0);
    const [grande, setGrande] = useState(0);
    const [desc,setDesc] = useState(0);
    const [res, setRes] = useState('');

    const Calcular = _ => {
        const resp = calcAcai(pequeno, medio, grande, desc)
        setRes(`Total à pagar é $${resp}`);
    }

    return(
        <div className='modal container al-center jc-center'>
            <div className='overlay' onClick={props.close} id="close-acai" />
            <section className='content acai container-column relative'>
                <div onClick={props.close} id="close-acai" className="close" />
                <h2>Calcular compra do Acaí</h2>
                <div className='acai__inputs-qtd container-column'>
                    <label>Quantidade Pequeno:</label>
                    <input type="number" value={pequeno} onChange={e => setPequeno(e.target.value)}/>
                </div>
                <div className='acai__inputs-qtd container-column'>
                    <label>Quantidade Médio:</label>
                    <input type="number" value={medio} onChange={e => setMedio(e.target.value)} />
                </div>
                <div className='acai__inputs-qtd container-column'>
                    <label>Quantidade Grande:</label>
                    <input type="number" value={grande} onChange={e => setGrande(e.target.value)}/>
                </div>
                <div className='acai__inputs-qtd container-column'>
                    <label>Desconto:</label>
                    <input type="number" value={desc} onChange={e => setDesc(e.target.value)}/>
                </div>
                <button className='calcular' onClick={_ => Calcular()}>Calcular</button>
                <div>
                    <p>{res}</p>
                </div>
            </section>
        </div>
    );
}

export default CalcularAcai;