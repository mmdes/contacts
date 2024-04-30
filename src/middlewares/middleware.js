exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
 };

exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.render('404.ejs');
    }
    next();
};

exports.loginRequired = (req, res, next) => {
    console.log('PASSOU PELO MIDDLEWARE loginRequired')
    console.log('IMPRIMINDO SESSION.USER', req.session.user)
    if(!req.session.user){
        req.flash('errors','You need to be logged in.')
        req.session.save(() => res.redirect('/'));
        return;
    }
    next();
 };
