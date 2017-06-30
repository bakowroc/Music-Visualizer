
const TrackModel = require('../models/track.model');

module.exports = {

  getTracks: (req, res) =>{


    TrackModel.find({}, (err, tracks) =>{
            if(err){
              res.json({status: false, error: "error"})
              return;
            }
            res.json({
              status: true,
              track: tracks
            });
          }

    );

    // TrackModel.find().exec(function(err, tracks) {
    //   console.log(tracks);
    // });

    //
    // TrackModel.findOne({ 'name': 'Song1' }, function (err, track) {
    //   if (err) return err;
    //   console.log('%s', track.link);
    // });


  }


}
