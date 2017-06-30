const TrackContoller = require('../controllers/track.controller');

module.exports = (app)=>{
  app.get('/api/tracks', TrackContoller.getTracks);
  // app.get('/api/tracks/')
}
