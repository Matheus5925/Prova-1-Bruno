import { useState } from 'react';
import { ConstruirLinha } from '../../services';
import './style.css';

const DesenharLinha = props =>{
    const [quantidade, setQuantidade] = useState(0);
    const [res, setRes] = useState('');

    const Desenha = _ =>{
        setRes(ConstruirLinha(quantidade));
    }

    return(
        <div className='modal container al-center jc-center'>
            <div className='overlay' onClick={props.close} id="close-linha" />
            <section className='content acai container-column relative'>
            <div onClick={props.close} id="close-linha" className="close" />
                <div>
                    <h1>Desenhar Linha</h1>
                </div>
                <div className="inputs-salario">
                    <label> Tamanho: </label>
                    <input type="number" value={quantidade} onChange = {e => setQuantidade(e.target.value)} />
                </div>
                <button onClick={Desenha}> Desenhar </button>
                <p>{res}</p>
            </section>
        </div>
    );
}

export default DesenharLinha;