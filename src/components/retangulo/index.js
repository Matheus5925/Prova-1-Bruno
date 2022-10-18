import { useState } from "react";
import { retangulo } from "../../services";

const DesenharRetangulo = props =>{
    const[base, setBase] = useState(0);
    const[altura, setAltura] = useState(0);
    const [res, setRes] = useState('');

    const DesenharRetan = _  =>{
        setRes(retangulo(base, altura));
    }

    return(
        <div className='modal container al-center jc-center'>
            <div className='overlay' onClick={props.close} id="close-retangulo" />
            <section className='content acai container-column relative'>
                <div onClick={props.close} id="close-retangulo" className="close" />
                    <div>
                        <label> Base: </label>
                        <input type="number" value={base} onChange={e => setBase(e.target.value)}/>
                    </div>
                    <div>
                        <label> Altura: </label>
                        <input type="number" value={altura} onChange={e => setAltura(e.target.value)}/>
                    </div>
                    <button onClick={DesenharRetan}> Desenhar </button>
                    <textarea className="text" value={res} disabled></textarea>
            </section>
        </div>
    );

}

export default DesenharRetangulo;