exports = module.exports = function(app, mongoose) {
  var PlacesSchema = new mongoose.Schema({
    Code: String,
    Name: String,
    Geolocalization:
    {
      Lat: String,
      Long: String
    },
    Geography: 
    {
      Country: 
      {
        code: String, 
        name: String
      },
      City: 
      {
        code: String, 
        name: String
      },
      State: 
      {
        code: String, 
        name: String
      }
    },
    PlacesCount: Number,
    InfoControl: 
    [{
      UserCreated: String,
      userModified: String,
      DateCreated: Date,
      DateModified: Date
    }]
  });

  mongoose.model('Places', PlacesSchema);
};