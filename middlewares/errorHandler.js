const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(err.status || 5000).json({error: err.mesage || 'Error en el servidor'});
};

module.exports = errorHandler;

