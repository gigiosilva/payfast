module.exports = function(app) {
    app.get('/pagamentos', function(req, res){
        console.log('Recebida requisiçao de teste.');
        var connection = app.infrastructure.connectionFactory();
        var pagamentosDao = new app.infrastructure.PagamentosDao(connection);

        pagamentosDao.lista(function(erro, resultado){
           res.json(resultado);
        });
    });

    app.post('/pagamentos/pagamento', function(req, res) {

        req.assert("forma_de_pagamento", "Forma de pagamento é obrigatório").notEmpty();
        req.assert("valor", "Valor é obrigatório e deve ser um decimal").notEmpty().isFloat();

        var erros = req.validationErrors();

        if(erros){
            console.log("Erros de validacao encontrados");
            res.status(400).send(erros);
            return;
        }

        var pagamento = req.body;
        console.log('processando uma requisicao de um novo pagamento');

        pagamento.status = 'criado';
        pagamento.data = new Date;

        var connection = app.infrastructure.connectionFactory();
        var pagamentosDao = new app.infrastructure.PagamentosDao(connection);

        pagamentosDao.salva(pagamento, function(erro, resultado){
            if(erro) {
                console.log('Erro ao inserir no banco:' + erro);
                res.status(500).send(erro);
            } else {
                console.log('pagamento criado!');
                res.status(201).json(pagamento);
            }
        });
    });
}