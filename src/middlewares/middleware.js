// this is a global middleware...

// module.exports = (req, res, next) => {
//     res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
//     next();
// };

exports.outroMiddleware = (req, res, next) => {
    next();
};


exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404.ejs');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};