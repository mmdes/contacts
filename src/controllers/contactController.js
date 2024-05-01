const Contact = require('../models/ContactModel')

exports.index = function (req, res) {
    res.render('contact', {
        contact: {}
    });
}

exports.register = async function (req, res) {
    try {
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
        req.session.save(() => res.redirect(`/contact/index/${contact.contact._id}`));
        return;

    } catch (e) {
        console.error(e)
        return res.render('404');
    }
};

exports.editIndex = async function (req, res) {
    if (!req.params.id) return res.render('404');
    const contact = await Contact.searchById(req.params.id);
    if (!contact) return res.render('404');

    res.render('contact', { contact });
};

exports.edit = async function (req, res) {
    try {
        if (!req.params.id) return res.render('404');
        const contact = new Contact(req.body);
        await contact.edit(req.params.id);

        if (contact.errors.length > 0) {
            req.flash('errors', contact.errors);
            req.session.save(() => res.redirect(`/contact/index/${contact.contact._id}`));
            return;
        }

        req.flash('success', 'Contact successfully edited.');
        req.session.save(() => res.redirect(`/contact/index/${contact.contact._id}`));
        return;
    } catch (e) {
        console.log(e);
        res.render('404');
    }
};