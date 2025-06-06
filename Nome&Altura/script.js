var pessoas = [];

function cadastrarPessoas() {
    for (var i = 0; i < 15; i++) {
        var nome = prompt("Digite o nome:");
        var altura = parseFloat(prompt("Digite a altura:"));
        pessoas.push({ nome, altura });
    }
}

function apresentarMenoresOuIguais() {
    pessoas.filter(function(pessoa) {
        return pessoa.altura <= 1.5;
    }).forEach(function(pessoa) {
        alert(`Nome: ${pessoa.nome}, Altura: ${pessoa.altura}`);
    });
}

function apresentarMaioresQue() {
    pessoas.filter(function(pessoa) {
        return pessoa.altura > 1.5;
    }).forEach(function(pessoa) {
        alert(`Nome: ${pessoa.nome}, Altura: ${pessoa.altura}`);
    });
}

function apresentarEntre() {
    pessoas.filter(function(pessoa) {
        return pessoa.altura > 1.5 && pessoa.altura < 2.0;
    }).forEach(function(pessoa) {
        alert(`Nome: ${pessoa.nome}, Altura: ${pessoa.altura}`);
    });
}

function calcularMediaAlturas() {
    var media = pessoas.reduce(function(acc, pessoa) {
        return acc + pessoa.altura;
    }, 0) / pessoas.length;
    alert(`Média das alturas: ${media.toFixed(2)}m`);
}

function menuPessoas() {
    var opcao;
    do {
        opcao = prompt("1. Cadastrar\n2. Menores ou iguais a 1.5m\n3. Maiores que 1.5m\n4. Entre 1.5m e 2.0m\n5. Média das alturas\n6. Sair");
        switch(opcao) {
            case '1':
                cadastrarPessoas();
                break;
            case '2':
                apresentarMenoresOuIguais();
                break;
            case '3':
                apresentarMaioresQue();
                break;
            case '4':
                apresentarEntre();
                break;
            case '5':
                calcularMediaAlturas();
                break;
            case '6':
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida.");
        }
    } while (opcao !== '6');
}

menuPessoas();