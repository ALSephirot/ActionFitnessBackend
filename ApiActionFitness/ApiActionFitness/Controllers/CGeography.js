var mongoose = require('mongoose');
var Geography = mongoose.model('Geography');

  //GET - Return all Users in the DB
  exports.findAllGeography = function(req, res) {
    console.log(Geography);
    Geography.find(function(err, geography) {
      console.log(geography);
      if(!err) {
        res.send(geography);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  //GET - Return all Users in the DB
  exports.findAllCities = function(req, res) {
  	console.log(Geography);
  	Geography.find({Type:"City"},function(err, geography) {
  		console.log(geography);
  		if(!err) {
  			res.send(geography);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  exports.findAllCountries = function(req, res) {
    console.log(Geography);
    Geography.find({Type:"Countries"},function(err, geography) {
      console.log(geography);
      if(!err) {
        res.send(geography);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  exports.findAllStateProvince = function(req, res) {
    console.log(Geography);
    Geography.find({Type:"StateProvince"},function(err, geography) {
      console.log(geography);
      if(!err) {
        res.send(geography);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  exports.findAllCountries = function(req, res) {
    console.log(Geography);
    Geography.find({Type:"Countries"},function(err, geography) {
      console.log(geography);
      if(!err) {
        res.send(geography);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  //GET - Return a User with specified ID
  exports.findGeographyById = function(req, res) {
      Geography.findById(req.params.id,function(err, geography) {
      if(!err) {
        res.send(geography);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  //GET - Return a User with specified UserName
  /*exports.findUserByNomUsu = function(req, res) {
    //TEvent.findById(req.param.id, function(err, guia) {
      TEvent.find({NomUsu:req.params.NomUsu},function(err, tevent) {
      console.log(req.params);
      if(!err) {
        res.send(tevent);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };*/

  //POST - Insert a new User in the DB
  exports.addGeography = function(req, res) {
    console.log('POST');
    console.log(req.body);

    try
    {
      var geography = new Geography({
        CodeCity: req.body.CodeCity,
        NameCity: req.body.NameCity,
        CodeStateProvince: req.body.CodeStateProvince,
        NameStateProvince: req.body.NameStateProvince,
        CodeCountry: req.body.CodeCountry,
        nameCountry: req.body.nameCountry,
        Type: req.body.Type,
        InfoControl: 
        [{
          UserCreated: req.body.InfoControl.UserCreated,
          userModified: req.body.InfoControl.userModified,
          DateCreated: req.body.InfoControl.DateCreated,
          DateModified: req.body.InfoControl.DateModified
        }]
      });

      geography.save(function(err) {
        if(!err) {
          console.log('Geography Created Succefull');
        } else {
          console.log('ERROR: ' + err);
        }
      });

      res.send(geography);
    }
    catch(error)
    {
      console.log(error);
    }
    
  };

  //PUT - Update a User already exists
  exports.updateGeography = function(req, res)
  {
    Geography.findById(req.params.id, function(err, geography) {
      geography.CodeCity = req.body.CodeCity,
      geography.NameCity = req.body.NameCity,
      geography.CodeStateProvince = req.body.CodeStateProvince,
      geography.NameStateProvince = req.body.NameStateProvince,
      geography.CodeCountry = req.body.CodeCountry,
      geography.nameCountry = req.body.nameCountry,
      geography.Type = req.body.Type,
      geography.InfoControl = req.body.InfoControl

      geography.save(function(err) {
        if(!err) 
        {
          console.log('Geography Updated Succefull');
        }
        else
        {
          console.log('ERROR: ' + err);
        }

        res.send(geography);
      });
    });
  };

  //DELETE - Delete a User with specified ID
  exports.deleteTEvent = function(req, res) {
    Geography.findById(req.params.id, function(err, geography) {
      geography.remove(function(err) {
        if(!err) {
      console.log('Geography Id "'+ req.params.id +'" Removed Succefull');
        } else {
      console.log('ERROR: ' + err);
        }
      });
    });
  };