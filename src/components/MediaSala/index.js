import { useState } from "react";
import { Alunos } from "../../services.js";

const MediaTurma = props =>{
    const [qtdAlunos, setQtdAlunos] = useState(0);
    const [turma, setTurma] = useState(new Alunos(1));

    const AdicionarTurma = _ =>{
        let al = new Alunos(qtdAlunos);
        setTurma(al);
        console.log(al);
        const delay = input => new Promise(resolve => setTimeout(resolve, input));
        delay(3000).then(_ => console.log(turma))
    };

    return(
        <div className='modal container al-center jc-center'>
            <div className='overlay' onClick={props.close} id="close-media" />
            <section className='content acai container-column relative'>
                <div onClick={props.close} id="close-media" className="close" />
                <div>
                    <label>Quantidade de alunos:</label>
                    <input min='1' type="number" value={qtdAlunos} onChange={e => setQtdAlunos(e.target.value)}/>
                    <div>
                        <button onClick={_ => AdicionarTurma()}>Gerar turma</button>
                    </div>
                    {!turma && (
                        <div>
                            {_ => !turma.alunos ? turma.alunos.map((item, index)=> (
                                <div className="container">
                                    <label>Aluno{index}</label>
                                    <input type="text" value={item} min='0' max='10' onChange={e => {
                                        let object = turma;
                                        object.inserirMediaAluno(index, Number(e.target.value))
                                        setTurma(object)
                                    }}/>
                                </div>
                            )) : ''}
                        </div>
                    )}
                </div>
                <div>
                </div>
            </section>
        </div>
    );
}

export default MediaTurma;