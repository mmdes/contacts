const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = []; // if there is any error here I can't register my user on the database
        this.user = null;
    }

    async register() {
        
        this.validate();

        if (this.errors.length > 0) return;

        try {
            this.user = await LoginModel.create(this.body);
        } catch (e) {
            console.log(e);
        }
    }

    validate() {
        this.cleanUP();

        //email must be valid
        if (!validator.isEmail(this.body.email)) this.errors.push('This email is not valid.');

        //password must be between 3 to 50 characters
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('Your password there must be from 3 to 50 characters.')
        }
    }

    cleanUP() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
        this.body = {
            email: this.body.email,
            password: this.body.password,
        }
    }
}


module.exports = Login;