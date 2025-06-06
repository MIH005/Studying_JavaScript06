var alunos = [];

function cadastrarAlunos() {
    for (var i = 0; i < 20; i++) {
        var nome = prompt("Digite o nome do aluno:");
        var notas = [];
        for (var j = 0; j < 4; j++) {
            notas.push(parseFloat(prompt(`Digite a nota ${j + 1}:`)));
        }
        alunos.push({ nome, notas });
    }
    alunos.sort(function(a, b) {
        return a.nome.localeCompare(b.nome);
    });
}

function pesquisarAluno() {
    var nomeBusca = prompt("Digite o nome para pesquisar:");
    for (var i = 0; i < alunos.length; i++) {
        if (alunos[i].nome === nomeBusca) {
            var media = alunos[i].notas.reduce(function(acc, nota) {
                return acc + nota;
            }, 0) / alunos[i].notas.length;
            var status = media >= 5 ? "Aprovado" : "Reprovado";
            alert(`Nome: ${alunos[i].nome}, Média: ${media.toFixed(2)}, Status: ${status}`);
            return;
        }
    }
    alert("Aluno não encontrado.");
}

function apresentarAlunos() {
    alunos.forEach(function(aluno) {
        var media = aluno.notas.reduce(function(acc, nota) {
            return acc + nota;
        }, 0) / aluno.notas.length;
        var status = media >= 5 ? "Aprovado" : "Reprovado";
        alert(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}, Status: ${status}`);
    });
}

function menuAlunos() {
    var opcao;
    do {
        opcao = prompt("1. Cadastrar\n2. Pesquisar\n3. Apresentar\n4. Sair");
        switch(opcao) {
            case '1':
                cadastrarAlunos();
                break;
            case '2':
                pesquisarAluno();
                break;
            case '3':
                apresentarAlunos();
                break;
            case '4':
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida.");
        }
    } while (opcao !== '4');
}

menuAlunos();