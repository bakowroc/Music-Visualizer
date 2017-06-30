
const TrackModel = require('../models/track.model');

module.exports = {

  getTracks: (req, res) =>{


    TrackModel.find({}, (err, tracks) =>{
            if(err){
              res.json({status: false, error: "error"});
              return;
            }
            res.json({
              status: true,
              track: tracks
            });
          }
    );

  }


}
