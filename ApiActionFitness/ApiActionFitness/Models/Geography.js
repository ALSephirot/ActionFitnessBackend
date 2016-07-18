exports = module.exports = function(app, mongoose) {
  var GeographySchema = new mongoose.Schema({
    CodeCity: String,
    NameCity: String,
    CodeStateProvince: String,
    NameStateProvince: String,
    CodeCountry: String,
    nameCountry: String,
    Type: String,
    InfoControl: 
    [{
      UserCreated: String,
      userModified: String,
      DateCreated: Date,
      DateModified: Date
    }]

  });

  mongoose.model('Geography', GeographySchema);
};