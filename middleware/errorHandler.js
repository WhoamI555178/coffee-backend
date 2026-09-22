module.exports = function (err, req, res, next) {
    console.error("Помилка на сервері:", err.message);
    
    const status = err.status || 500;
    res.status(status).json({
        message: err.message || "Непередбачена помилка сервера"
    });
};