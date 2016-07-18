var mongoose = require('mongoose');
var States = mongoose.model('States');

  //GET - Return all Users in the DB
  exports.findAllStates = function(req, res) {
  	console.log(States);
  	States.find(function(err, states) {
  		console.log(states);
  		if(!err) {
  			res.send(states);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a User with specified ID
  exports.findStatesById = function(req, res) {
      States.findById(req.params.id,function(err, states) {
      if(!err) {
        res.send(states);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  //POST - Insert a new User in the DB
  exports.addStates = function(req, res) {
    console.log('POST');
    console.log(req.body);

    try
    {
      var states = new States({
        Code: req.body.Code,
        Name: req.body.Name,
        InfoControl: 
        [{
          UserCreated: req.body.InfoControl.UserCreated,
          userModified: req.body.InfoControl.userModified,
          DateCreated: req.body.InfoControl.DateCreated,
          DateModified: req.body.InfoControl.DateModified
        }]
      });

      states.save(function(err) {
        if(!err) {
          console.log('Ticket Type "'+ req.body.Name +'" Created Succefull');
        } else {
          console.log('ERROR: ' + err);
        }
      });

      res.send(states);
    }
    catch(error)
    {
      console.log(error);
    }
    
  };

  //PUT - Update a User already exists
  exports.updateStates = function(req, res)
  {
    States.findById(req.params.id, function(err, states) {
      states.Code= req.body.Code,
      states.Name= req.body.Name,
      states.InfoControl= req.body.InfoControl

      states.save(function(err) {
        if(!err) 
        {
          console.log('Ticket type "'+ req.body.Name +'" Updated Succefull');
        }
        else
        {
          console.log('ERROR: ' + err);
        }

        res.send(states);
      });
    });
  };

  //DELETE - Delete a User with specified ID
  exports.deleteStates = function(req, res) {
    States.findById(req.params.id, function(err, states) {
      states.remove(function(err) {
        if(!err) {
      console.log('Ticket Type with Id "'+ req.params.id +'" Removed Succefull');
        } else {
      console.log('ERROR: ' + err);
        }
      })
    });
  }