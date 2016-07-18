var mongoose = require('mongoose');
var Users = mongoose.model('Users');

  //GET - Return all Users in the DB
  exports.findAllUsers = function(req, res) {
  	console.log(Users);
  	Users.find(function(err, users) {
  		console.log(users);
  		if(!err) {
  			res.send(users);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a User with specified ID
  exports.findUserById = function(req, res) {
      Users.findById(req.params.id,function(err, user) {
      if(!err) {
        res.send(user);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  //GET - Return a User with specified UserName
  exports.findUserByNomUsu = function(req, res) {
    //Users.findById(req.param.id, function(err, guia) {
      Users.find({NomUsu:req.params.NomUsu},function(err, user) {
      console.log(req.params);
      if(!err) {
        res.send(user);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };
  
    //GET - Return a User with specified celular
  exports.findUserByCelular = function(req, res) {
    //Users.findById(req.param.id, function(err, guia) {
      Users.find({IdCelular:req.params.IdCel},function(err, user) {
      console.log(req.params);
      if(!err) {
        res.send(user);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  //POST - Insert a new User in the DB
  exports.addUser = function(req, res) {
    console.log('POST');
    console.log(req.body);

    try
    {
      var user = new Users({
        BasicInfo : 
        {
          Name: req.body.BasicInfo.Name,
          LastName: req.body.BasicInfo.LastName,
          IdPersonal: req.body.BasicInfo.IdPersonal,
          Telephone: req.body.BasicInfo.Telephone,
          Age: req.body.BasicInfo.Age,
          DateBirth: req.body.BasicInfo.DateBirth
        },
        Credentials: 
        {
          NomUsu: req.body.Credentials.NomUsu,
          PassWord: req.body.Credentials.PassWord
        },
        Geo: 
        {
          Country: 
          {
            code: req.body.Geo.Country.code, 
            name: req.body.Geo.Country.name
          },
          City: 
          {
            code: req.body.Geo.City.code, 
            name: req.body.Geo.City.name
          },
          State: 
          {
            code: req.body.Geo.State.code, 
            name: req.body.Geo.State.name
          }
        },
        Places: req.body.Places,
        Payment: req.body.Payment,
        InfoControl: req.body.InfoControl,
        IdCelular: req.body.IdCelular
      });

      user.save(function(err) {
        if(!err) {
          console.log('User "'+ req.body.BasicInfo.Name +'" Created Succefull');
        } else {
          console.log('ERROR: ' + err);
        }
      });

      res.send(user);
    }
    catch(error)
    {
      console.log(error);
    }
    
  };

  //PUT - Update a User already exists
  exports.updateUser = function(req, res)
  {
    Users.findById(req.params.id, function(err, user) {
      user.BasicInfo.Name = req.body.BasicInfo.Name,
      user.BasicInfo.LastName = req.body.BasicInfo.LastName,
      user.BasicInfo.Age = req.body.BasicInfo.Age,
      user.BasicInfo.DateBirth = req.body.BasicInfo.DateBirth
      user.Credentials.NomUsu = req.body.Credentials.NomUsu,
      user.Credentials.PassWord = req.body.Credentials.PassWord
      user.Geo.Country.code = req.body.Geo.Country.code, 
      user.Geo.Country.name = req.body.Geo.Country.name
      user.Geo.City.code = req.body.Geo.City.code, 
      user.Geo.City.name = req.body.Geo.City.name
      user.Geo.State.code = req.body.Geo.State.code, 
      user.Geo.State.name = req.body.Geo.State.name
      user.Payment = req.body.Payment,
      user.Places = req.body.Places,
      user.InfoControl = req.body.InfoControl,
      user.IdCelular = req.body.IdCelular

      user.save(function(err) {
        if(!err) 
        {
          console.log('User "'+ req.body.BasicInfo.Name +'" Updated Succefull');
        }
        else
        {
          console.log('ERROR: ' + err);
        }

        res.send(user);
      });
    });
  };

  //DELETE - Delete a User with specified ID
  exports.deleteUser = function(req, res) {
    Users.findById(req.params.id, function(err, user) {
      user.remove(function(err) {
        if(!err) {
      console.log('User with Id "'+ req.params.id +'" Removed Succefull');
        } else {
      console.log('ERROR: ' + err);
        }
      })
    });
  }