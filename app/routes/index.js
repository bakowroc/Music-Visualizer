<<<<<<< HEAD
const IndexController = require('../controllers/index.controller');

module.exports = function(app){

    app.get('/', IndexController)

=======

const IndexController = require('../controllers/index.controller');


module.exports = function(app){
  app.get('/', IndexController);
>>>>>>> b0e410a647699f5f08b7bdf8a98d578ad354c911
}
