exports = module.exports = function(app, mongoose) {
  var TPaymentSchema = new mongoose.Schema({
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

  mongoose.model('PaymentType', TPaymentSchema);
};