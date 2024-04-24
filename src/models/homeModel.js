const mongoose = require('mongoose');
const { ModuleFilenameHelpers } = require('webpack');

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}


module.exports = Home;