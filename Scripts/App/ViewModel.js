function PessoaViewModel(nome, idade) {
    this.nome = ko.observable(nome);
    this.idade = ko.observable(idade);
}

function ViewModel() {
    this.pessoas = ko.observableArray([new PessoaViewModel("Alberto", 24)]);
    this.pessoa = new PessoaViewModel();
    this.nomeFocado = ko.observable(false);

    this.totalPessoas = ko.computed(function () {
        return this.pessoas().length;
    }, this);

    this.adicionarPessoa = function () {
        this.pessoas.push(new PessoaViewModel(this.pessoa.nome(), this.pessoa.idade()));
        this.pessoa.nome("");
        this.pessoa.idade("");
        this.nomeFocado(true);
    };
}