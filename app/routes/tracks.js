const TrackContoller = require('../controllers/track.controller');

module.exports = function(app){
  app.get('/api/tracks', TrackContoller.getTracks);
  // app.get('/api/tracks/')
}
