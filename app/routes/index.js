const IndexController = require('../controllers/index.controller');

module.exports = function(app){

    app.get('/', IndexController)

}
