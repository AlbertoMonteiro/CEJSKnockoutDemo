$.ajax("/Scripts/Components/Grid/Template.html", {
    async: false,
    success: function (html) {
        ko.components.register('grid', {
            viewModel: function (params) {
                this.colunas = Object.getOwnPropertyNames(params.items()[0]).map(function (item) {
                    return { valor: item, exibicao: item.charAt(0).toUpperCase() + item.slice(1) };
                });
                this.items = params.items;
            },
            template: html
        });
    }
});