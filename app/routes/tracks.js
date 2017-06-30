const TrackController = require('../controllers/track.controller');

module.exports = function(app){

    app.get('/api/tracks', TrackController.getTracks)

}
