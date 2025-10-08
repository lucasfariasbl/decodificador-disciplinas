const inputCodigo = document.querySelector('#codigoInserido');
const botaoDecodificar = document.querySelector('#botaoDecodificador')
const resultadoDecodificado = document.querySelector('#resultadoDecodificado')

botaoDecodificar.addEventListener('click', () => {
    const codigo = inputCodigo.value.trim().toLowerCase();

    const resposta = decodificador(codigo);

    resultadoDecodificado.textContent = resposta;

    if (resposta.startsWith('Erro')) {
        resultadoDecodificado.className = 'erro';
    
    } else {
        resultadoDecodificado.className = 'sucesso';
    }
});

function decodificador (codigo) {
    if (codigo.length !== 4) {
        return 'Erro: O código inserido não tem a quantidade de caracteres permitida'
    }

    let dia = '';
    let turno = '';
    let horario = '';

    switch (codigo[0]) {
        case '2':
            dia = 'Segunda-Feira';
            break;
        case '3':
            dia = 'Terça-Feira';
            break;
        case '4':
            dia = 'Quarta-Feira';
            break;
        case '5':
            dia = 'Quinta-Feira';
            break;
        case '6':
            dia = 'Sexta-Feira';
            break;
        default:
            return 'Erro: Código inserido incorretamente (Verifique se o primeiro caractere está entre 2 e 6)';
    }

    switch (codigo[1]) {
        case 'm':
            turno = 'Manhã';
            break;
        case 't':
            turno = 'Tarde';
            break;
        default:
            return 'Erro: Segundo caractere inserido incorretamente (Deve ser "t" ou "m")'
    }

    if (codigo[2] == 2 && codigo[3] == 3) {
        if (turno === "Manhã") {
            horario = "08:00 às 10:00"
        
        } else {
            horario = "14:00 às 16:00"
        }
    } 

    else if (codigo[2] == 4 && codigo[3] == 5) {
         if (turno === "Manhã") {
            horario = "10:00 às 12:00"
        
        } else {
            horario = "16:00 às 18:00"
        }
    
    } else {
        return 'Erro: O código inserido está incorreto (Últimos caracteres devem ser 23 ou 45)'
    }

    return `Sua aula é na ${dia}, de ${turno}, das ${horario}`
}