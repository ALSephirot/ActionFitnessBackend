var mongoose = require('mongoose');
var TPayment = mongoose.model('PaymentType');

  //GET - Return all Users in the DB
  exports.findAllTPayment = function(req, res) {
  	console.log(TPayment);
  	TPayment.find(function(err, tpayment) {
  		console.log(tpayment);
  		if(!err) {
  			res.send(tpayment);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a User with specified ID
  exports.findTPaymentById = function(req, res) {
      TPayment.findById(req.params.id,function(err, tpayment) {
      if(!err) {
        res.send(tpayment);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  //POST - Insert a new User in the DB
  exports.addTPayment = function(req, res) {
    console.log('POST');
    console.log(req.body);

    try
    {
      var tpayment = new TPayment({
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

      tpayment.save(function(err) {
        if(!err) {
          console.log('Payment Type "'+ req.body.Name +'" Created Succefull');
        } else {
          console.log('ERROR: ' + err);
        }
      });

      res.send(tpayment);
    }
    catch(error)
    {
      console.log(error);
    }
    
  };

  //PUT - Update a User already exists
  exports.updateTPayment = function(req, res)
  {
    TPayment.findById(req.params.id, function(err, tpayment) {
      tpayment.Code= req.body.Code,
      tpayment.Name= req.body.Name,
      tpayment.InfoControl= req.body.InfoControl

      tpayment.save(function(err) {
        if(!err) 
        {
          console.log('Payment type "'+ req.body.Name +'" Updated Succefull');
        }
        else
        {
          console.log('ERROR: ' + err);
        }

        res.send(tpayment);
      });
    });
  };

  //DELETE - Delete a User with specified ID
  exports.deleteTPayment = function(req, res) {
    TPayment.findById(req.params.id, function(err, tpayment) {
      tpayment.remove(function(err) {
        if(!err) {
      console.log('Payment Type with Id "'+ req.params.id +'" Removed Succefull');
        } else {
      console.log('ERROR: ' + err);
        }
      })
    });
  }