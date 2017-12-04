var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port: 3000,
    path: '/pagamentos/pagamento',
    method: 'POST',
    headers: {
        'Accept':'application/json',
        'Content-type': 'application/json'
    }
}

let client = http.request(configuracoes, function(res){
    res.on('data', function(body){
        console.log(body.status)
        //console.log(body.toString());
    })
})

var body = {
    forma_de_pagamento: 'payfast',
    valor: 10,
    moeda: "BRL2",
    descricao: "criando um pagamento"
};


client.end(JSON.stringify(body));