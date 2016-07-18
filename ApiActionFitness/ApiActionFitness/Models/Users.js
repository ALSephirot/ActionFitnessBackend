exports = module.exports = function(app, mongoose) {
  var UsersSchema = new mongoose.Schema({
    BasicInfo : 
    {
    	Name: String,
    	LastName: String,
        IdPersonal: String,
        Telephone: String,
    	Age: Number,
    	DateBirth: Date
    },
    Credentials: 
    {
	    NomUsu: String,
	    PassWord: String
	},
	Geo: 
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
	Places:
    [{
        name: String,
        Direction: String,
        Barrio: String,
        geo: {
            Lat: String,
            Long: String
        }
    }],
	Payment:
    [{
    	Type: String,
    	CardNumber: Number,
    	Bank: String
    }],
	InfoControl: 
    [{
      UserCreated: String,
      userModified: String,
      DateCreated: Date,
      DateModified: Date
    }],
    IdCelular: String
  });

  mongoose.model('Users', UsersSchema);
};