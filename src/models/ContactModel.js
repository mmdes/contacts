const mongoose = require('mongoose');
const validator = require('validator');
const { ModuleFilenameHelpers } = require('webpack');

const ContactSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    surname: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    phoneNumber: { type: String, required: false, default: '' },
    createdIn: { type: Date, default: Date.now },
});

const ContactModel = mongoose.model('Contact', ContactSchema);


// utilizando funções construtoras desta vez 
function Contact(body) {
    this.body = body;
    this.errors = [];
    this.contact = null;

    Contact.prototype.register = async function () {
        this.validate();
        
        if(this.errors.length > 0) return;
        this.contact = await ContactModel.create(this.body);
        
    };

    Contact.prototype.validate = function () {
        this.cleanUP();
        if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('This email is not valid.');
        if (!this.body.email && !this.body.phoneNumber) this.errors.push('You should input either an email or a phone number.');
    };

    Contact.prototype.cleanUP = function () {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
        this.body = {
            name: this.body.name,
            surname: this.body.surname,
            email: this.body.email,
            phoneNumber: this.body.phoneNumber,
        }
    };
}


module.exports = Contact;