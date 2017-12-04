function PagamentosDao(connection){
    this._connection = connection;
}

PagamentosDao.prototype.salva = function(pagamento, callback){
    console.log(pagamento)
    this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback);
}

PagamentosDao.prototype.lista = function(callback){
    this._connection.query('select * from pagamentos', callback);
}

PagamentosDao.prototype.buscaPorId = function(id, callback){
    this._connection.query('select * from pagamentos where id = ?', id, callback);
}

module.exports = () => {
    return PagamentosDao;
}