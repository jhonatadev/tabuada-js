//Declação de uma função
function calculaTabuada(){

    //Obtendo do DOM o tbody da tabela
    let tabuada = document.querySelector("#tabuada tbody");
    //Obtendo o valor A do compo input number e convertendo em inteiro
    let valorA = parseInt(document.querySelector("#valorA").value);
    //Limpando o contéudo do tbody
    tabuada.innerHTML = '';
    //Criando um laço de repetição de 0 a 10
    for (let valorB = 0; valorB <= 10; valorB++) {
        //Calculando o resultado da linha atual
        let resultado = valorA * valorB;
        //Criando o template das colunas linha autal
        let template = `
                <td>${valorA}</td>
                <td>x</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${resultado}</td>
             `;
        //Criando o elemento tr
        let tr = document.createElement('tr');
        //Inserindo as colunas na tabela
        tr.innerHTML = template;
        //Inserindo a linha na tabela
        tabuada.append(tr);

    }//Fechando o for
}//Fechando a função

//Chamando a nossa função pela primeira vez
calculaTabuada();

//Adicionado o evento de alteração ao compo numero
document.querySelector("#valorA").addEventListener('change', e => {
    calculaTabuada();
})

