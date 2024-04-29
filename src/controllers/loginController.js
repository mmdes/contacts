const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
};

exports.register = async function(req, res) {
    try {
      const login = new Login(req.body);
      await login.register();
  
      if(login.errors.length > 0) {

        console.log('Entrou aqui e esse é o valor do login.errors:')
        console.log(login.errors)
        req.flash('errors', login.errors);
        req.session.save(function() {
          return res.redirect('/login/index');
        });
        return;
      }
  
    } catch(e) {
      console.log(e);
      return res.render('404');
    }
  };