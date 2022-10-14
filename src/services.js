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
    if(gramas > 1000)
        return (gramas / 100) * 3;
    return (gramas / 100) * 3.5

};


export const CalcularSalario = (salario, bonus, desc) =>{

    if(isNaN(salario) || salario < 0 || isNaN(bonus) || bonus < 0 || isNaN(desc) || desc < 0)
        throw new Error('Valores informados inválidos!');

    salario = Number(salario);
    bonus = Number(bonus);
    desc = Number(desc);

    return (salario * ((100 + bonus) /100)) - desc; 
};

export const QuantidadeParadas  = (capac, consumo, dist) =>{
        if(capac < 0 || isNaN(capac) || consumo < 0 || isNaN(consumo) || dist < 0 || isNaN(dist))
            throw new Error('Valores inválidos');
        capac = Number(capac);
        consumo = Number(consumo);
        dist = Number(dist);

        let result = Math.ceil(dist/(capac * consumo));

        return result;
};

export const VerificarTemperatura  = temp =>{
        if(isNaN(temp) || temp < 0)
            throw new Error('Temperatura Inválida');
        
        if(temp >= 41)
            return 'Hipertemia';
        else if(temp >= 39.6 && temp < 41)
            return 'Febre Alta';
        else if(temp >= 37.6 && temp < 39.6)
            return 'Febre';
        else if(temp >= 36 && temp < 37.6)
            return 'Normal';
        else if(temp < 36);
            return 'Hipotermia';
}