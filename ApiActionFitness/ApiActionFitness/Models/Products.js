exports = module.exports = function(app, mongoose) {
  var ProductsSchema = new mongoose.Schema({
    Code: String,
    Name: String,
    Description: String,
    UnitValue: Number,
    City: String,
    Category: String,
    InfoControl: 
    [{
      UserCreated: String,
      userModified: String,
      DateCreated: Date,
      DateModified: Date
    }]
  });

  mongoose.model('Products', ProductsSchema);
};