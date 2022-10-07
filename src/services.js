export const calcAcai = (qtdPeq, qtdMed, qtdGra, desc) =>
    (Math.floor(qtdPeq) * 13.5 + Math.floor(qtdMed) * 15 + (Math.floor(qtdGra) * 17.5)) * ((100 - desc) / 100);

export const VerificarSigno = (mes, dia) => {
    mes = mes.toLowerCase();
    dia = dia.toLowerCase();
    if((mes === 'setembro' && dia >= 23 || mes === 'outubro' && dia <= 22) && dia < 32 && dia > 0)
        return true;
    return false;
}

export const TotalGramas = gramas => {
    gramas 
    if(gramas > 1000)
        return (gramas / 100) * 3;
    return (gramas / 100) * 3.5
};