const TrackController = require('../controllers/track.controller');

module.exports = (app)=>{
  app.get('/api/tracks', TrackController.getTracks);
}
