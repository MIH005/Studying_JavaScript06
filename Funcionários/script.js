var funcionarios = [];

function cadastrarFuncionarios() {
    for (var i = 0; i < 20; i++) {
        var matricula = prompt("Digite a matrícula:");
        var nome = prompt("Digite o nome:");
        var salario = parseFloat(prompt("Digite o salário:"));
        funcionarios.push({ matricula, nome, salario });
    }
    funcionarios.sort(function(a, b) {
        return a.matricula.localeCompare(b.matricula);
    });
}

function pesquisarFuncionario() {
    var matriculaBusca = prompt("Digite a matrícula para pesquisar:");
    for (var i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].matricula === matriculaBusca) {
            alert(`Matrícula: ${funcionarios[i].matricula}, Nome: ${funcionarios[i].nome}, Salário: R$${funcionarios[i].salario}`);
            return;
        }
    }
    alert("Funcionário não encontrado.");
}

function apresentarSalariosAcima() {
    funcionarios.filter(function(func) {
        return func.salario > 1000;
    }).forEach(function(func) {
        alert(`Matrícula: ${func.matricula}, Nome: ${func.nome}, Salário: R$${func.salario}`);
    });
}

function apresentarSalariosAbaixo() {
    funcionarios.filter(function(func) {
        return func.salario < 1000;
    }).forEach(function(func) {
        alert(`Matrícula: ${func.matricula}, Nome: ${func.nome}, Salário: R$${func.salario}`);
    });
}

function apresentarSalariosIguais() {
    funcionarios.filter(function(func) {
        return func.salario === 1000;
    }).forEach(function(func) {
        alert(`Matrícula: ${func.matricula}, Nome: ${func.nome}, Salário: R$${func.salario}`);
    });
}

function menuFuncionarios() {
    var opcao;
    do {
        opcao = prompt("1. Cadastrar\n2. Pesquisar\n3. Acima de R$1000\n4. Abaixo de R$1000\n5. Iguais a R$1000\n6. Sair");
        switch(opcao) {
            case '1':
                cadastrarFuncionarios();
                break;
            case '2':
                pesquisarFuncionario();
                break;
            case '3':
                apresentarSalariosAcima();
                break;
            case '4':
                apresentarSalariosAbaixo();
                break;
            case '5':
                apresentarSalariosIguais();
                break;
            case '6':
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida.");
        }
    } while (opcao !== '6');
}

menuFuncionarios();
