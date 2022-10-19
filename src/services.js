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

export const TotalCompra = (inteiras, meias, diaSemana, nacional) => {
	if (typeof inteiras !== 'number' || typeof meias !== 'number' || typeof diaSemana !== 'string' || typeof nacional !== 'boolean' || inteiras < 0 || meias < 0)
		throw new Error('credênciais inválidas');
    diaSemana = diaSemana.toLowerCase();
	if (nacional)
		return inteiras * 5.0 + meias * 5.0;
	else if (diaSemana === 'quarta-feira')
		return inteiras * 14.25 + meias * 14.25;
	else
		return inteiras * 28.50 + meias * 14.25;
};

export const GanhosGastos = (ganhos, gastos) =>{
    let msg = '';
    let calculo = ((gastos/ganhos) * 100 )
	if(gastos > ganhos)
		msg = 'Orçamento comprometido! Hora de rever seus gastos';
	else if ( calculo >= 81 && calculo  <= 100)
		msg = 'Cuidado seu orçamento pode ficar comprometido';
	else if ( calculo >= 51 && calculo <= 80)
		msg = 'Atenção! Melhor conter seus gastos';
	else if (calculo >= 21 && calculo <= 50)
		msg = 'Muito bem, seus gastos não ultrapassam metade dos ganhos!';
	else if ( calculo >= 0 && calculo <= 20)
		msg = 'Parabéns, está gerenciando bem seu orçamentos';

    return msg;
}

export const ContarAte = (inicio, fim) =>{
    inicio = Number(inicio);
    fim = Number(fim);

    if(inicio > fim || isNaN(inicio) || isNaN(fim))
        return 'Valores inválidos';
    var values = '';
    for (let i = inicio; i <= fim; i++) {
        values += `${i}\r\n`;
    }
    return values;
}

export const ConstruirLinha = qtd =>{
    qtd = Number(qtd);
    if(qtd <= 0 || isNaN(qtd))
        return 'Quantidade inválida';

    let linha = '';
    for (let i = 0; i < qtd; i++) {
        linha += '* ';         
    }
    return linha;
}

export const retangulo = (base, altura) => {
    try {
        base = Number(base)
        altura = Number(altura)
        if (isNaN(base) || isNaN(altura) || base < 0 || altura < 0 || base % 1 !== 0 || altura % 1 !== 0)
            throw new Error('Credenciais Invalidas')
        let resp = ''
        let linha = 0
        for (let i = 0; i < base; i++) {
            resp+='* '
            if (i === base - 1 && linha < altura) {
                resp+='\r\n'
                linha++
                if (linha !== altura)
                    i = -1
            }
        }
        return resp
    } catch (err) {
        console.log(err)
    }
}

export const calcularCafe = (n, l, d) => {
    try {
        n = Number(n)
        l = Number(l)
        d = Number(d)
        if (isNaN(n) || isNaN(l) || isNaN(d) || n < 1 || l < 1 || d < 1 || n % 1 !== 0 || l % 1 !== 0 || d % 1 !== 0)
            throw new Error('Credenciais Invalidas')
        const min = n * d
        let r = l * 1000 >= min ? 1 : Math.ceil(min / (l * 1000))
        return l * r
    } catch (err) {
        console.log(err.message)
    }
}