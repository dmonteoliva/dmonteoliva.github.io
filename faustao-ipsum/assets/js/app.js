(function () {
    let fraseInicial = "Lorem ipsum do Domingão do Faustão!"

    let frases = [
        "Ô loco, meu, brincadeira!",
        "Brincadeira, meu!",
        "Excepteur sint occaecat cupidatat... Orra, bicho, essa fera fala até em latim!",
        "Essa fera aí, tanto no pessoal como no profissional.",
        "Você está no arquivo confidencial! ",
        "Se vira nos trinta!",
        "Logo após os reclames do plim-plim.",
        "Agora mais do que nunca.",
        "Dica número um: é um país da Europa.",
        "Erroooooooooou!",
        "E agora pra desligar essa merda aí, meu?",
        "Vamos mostrar agora a invenção de Marcolino Pereira, o grande filósofo do Cascais!",
        "Pra você que tá aí sentindo-se mais abandonado que picanha na sexta-feira santa...",
        "Tá pegando fogo, bicho! Chama o bombeiro lá! Para apagar você chama o corpo de bombeiros!",
        "Olha o que faz a maldita manguaça, bicho!",
        "E agora às dezenove horas e doze minutos...",
        "Est ullamcorper eget nulla facilisi etiam dignissim diam.",
        "Integer vitae justo eget magna.",
        "Cum sociis natoque penatibus et magnis dis.",
        "É, minha senhora... A senhora tá aí, né, sentada no sofá... Há quanto tempo o fantástico do seu marido não entra no ar, né."
    ];

    let frasesPorParagrafo = 7;

    let gerarFrases = function () {
        let tempFrases = frases.slice();
        let quantidadeDeParagrafos = parseInt(document.querySelector("#quantidadeDeParagrafos").value);

        let resultado = `<p>${fraseInicial} `;

        for (let i = 0; i < quantidadeDeParagrafos; i++) {
            if (i > 0)
                resultado += "<p>"
            for (let j = 0; j < frasesPorParagrafo; j++) {
                if (tempFrases.length == 0)
                    tempFrases = frases.slice();
                let numeroAleatorio = obterNumeroAleatorio(tempFrases.length);
                resultado += `${tempFrases[numeroAleatorio]} `;
                tempFrases.splice(numeroAleatorio, 1);
            }

            if (i != quantidadeDeParagrafos - 1)
                resultado += "</p>";
        }
        return resultado;
    };

    let obterNumeroAleatorio = function (quantidadeMaxima) {
        return Math.ceil(Math.random() * (quantidadeMaxima - 1));
    };

    let button = document.querySelector("#se-vira-nos-30");

    let preencherTela = function () {
        var resultado = document.querySelector("#resultado");
        resultado.innerHTML = gerarFrases();
    }


    let quantidadeDeImagens = 7;

    document.addEventListener("DOMContentLoaded", () => document.querySelector("header").style.backgroundImage = `url('assets/backgrounds/${obterNumeroAleatorio(quantidadeDeImagens)}.png')`);

    button.addEventListener("click", preencherTela);

    preencherTela();
})();