exports = module.exports = function(app, mongoose) {
  var StatesSchema = new mongoose.Schema({
    Code: String,
    Name: String,
    InfoControl: 
    [{
      UserCreated: String,
      userModified: String,
      DateCreated: Date,
      DateModified: Date
    }]
  });

  mongoose.model('States', StatesSchema);
};