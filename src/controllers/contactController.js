const Contact = require('../models/ContactModel')

exports.index = function (req, res) {
    res.render('contact.ejs');
}

exports.register = async function (req, res) {
    try {
        console.log('ENTROU NO CONTACT.CONTROLLER')
        console.log('ESSE É O REQ.BODY:', req.body )
        const contact = new Contact(req.body);
        await contact.register();
        if (contact.errors.length > 0) {
            req.flash('errors', contact.errors)
            req.session.save(() => {
                res.redirect('/contact/index');
                return;
            });
            return;
        }

        req.flash('success', 'Your contact was successfully registered.')
        req.session.save(() => res.redirect('/contact/index'));
        return;

    } catch (e) {
        console.error(e)
        return res.render('404');
    }
};