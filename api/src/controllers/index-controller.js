
  exports.get = function (req, res){
    res.status(200).send({
      title: 'TesteAPI',
      version: '1.0.0'
    });
}
