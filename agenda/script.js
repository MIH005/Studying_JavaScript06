var agenda = [];

function cadastrarAgenda() {
    for (var i = 0; i < 10; i++) {
        var nome = prompt("Digite o nome:");
        var endereco = prompt("Digite o endereço:");
        var telefone = prompt("Digite o telefone:");
        agenda.push({ nome, endereco, telefone });
    }
}

function pesquisarAgenda() {
    var nomeBusca = prompt("Digite o nome para pesquisar:");
    for (var i = 0; i < agenda.length; i++) {
        if (agenda[i].nome === nomeBusca) {
            alert(`Nome: ${agenda[i].nome}, Endereço: ${agenda[i].endereco}, Telefone: ${agenda[i].telefone}`);
            return;
        }
    }
    alert("Registro não encontrado.");
}

function ordenarAgenda() {
    agenda.sort(function(a, b) {
        return a.nome.localeCompare(b.nome);
    });
}

function apresentarAgenda() {
    agenda.forEach(function(registro) {
        alert(`Nome: ${registro.nome}, Endereço: ${registro.endereco}, Telefone: ${registro.telefone}`);
    });
}

function menuAgenda() {
    var opcao;
    do {
        opcao = prompt("1. Cadastrar\n2. Pesquisar\n3. Ordenar\n4. Apresentar\n5. Sair");
        switch(opcao) {
            case '1':
                cadastrarAgenda();
                break;
            case '2':
                pesquisarAgenda();
                break;
            case '3':
                ordenarAgenda();
                break;
            case '4':
                apresentarAgenda();
                break;
            case '5':
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida.");
        }
    } while (opcao !== '5');
}

menuAgenda();
