function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'c') {
            document.getElementById('resultado').value = ''
        }
        else if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        } 
        else if (valor === '=') {
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        } else if (valor === "ce") {
            document.getElementById('resultado').value =
            document.getElementById('resultado').value.slice(0,-1)
        }
    } else if (tipo === 'valor') {
        document.getElementById('resultado').value += valor
    }
}