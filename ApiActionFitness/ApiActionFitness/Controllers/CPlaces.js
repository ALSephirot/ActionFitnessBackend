var mongoose = require('mongoose');
var Places = mongoose.model('Places');

  //GET - Return all Places in the DB
  exports.findAllPlaces = function(req, res) {
  	console.log(Places);
  	Places.find(function(err, places) {
  		console.log(places);
  		if(!err) {
  			res.send(places);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a places with specified ID
  exports.findplacesById = function(req, res) {
      Places.findById(req.params.id,function(err, places) {
      if(!err) {
        res.send(places);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  //POST - Insert a new places in the DB
  exports.addplaces = function(req, res) {
    console.log('POST');
    console.log(req.body);

    try
    {
      var places = new Places({
        Code: req.body.Code,
        Name: req.body.Name,
        Geolocalization:
        {
          Lat: req.body.Geolocalization.Lat,
          Long: req.body.Geolocalization.Long
        },
        Geography: 
        {
          Country: 
          {
            code: req.body.Geography.Country.code, 
            name: req.body.Geography.Country.name
          },
          City: 
          {
            code: req.body.Geography.City.code, 
            name: req.body.Geography.City.name
          },
          State: 
          {
            code: req.body.Geography.State.code, 
            name: req.body.Geography.State.name
          }
        },
        PlacesCount: req.body.PlacesCount,
        InfoControl: req.body.InfoControl
      });

      places.save(function(err) {
        if(!err) {
          console.log('places "'+ req.body.BasicInfo.Name +'" Created Succefull');
        } else {
          console.log('ERROR: ' + err);
        }
      });

      res.send(places);
    }
    catch(error)
    {
      console.log(error);
    }
    
  };

  //PUT - Update a places already exists
  exports.updateplaces = function(req, res)
  {
    Places.findById(req.params.id, function(err, places) {

      places.Code= req.body.Code,
      places.Name= req.body.Name,
      places.Geolocalization.Lat= req.body.Geolocalization.Lat;
      places.Geolocalization.Long= req.body.Geolocalization.Long;
      places.Geography.Country.code= req.body.Geography.Country.code, 
      places.Geography.Country.name= req.body.Geography.Country.name
      places.Geography.City.code= req.body.Geography.City.code, 
      places.Geography.City.name= req.body.Geography.City.name
      places.Geography.State.code= req.body.Geography.State.code, 
      places.Geography.State.name= req.body.Geography.State.name
      places.PlacesCount= req.body.PlacesCount,
      places.InfoControl= req.body.InfoControl

      places.save(function(err) {
        if(!err) 
        {
          console.log('places "'+ req.body.Name +'" Updated Succefull');
        }
        else
        {
          console.log('ERROR: ' + err);
        }

        res.send(places);
      });
    });
  };

  //DELETE - Delete a places with specified ID
  exports.deleteplaces = function(req, res) {
    Places.findById(req.params.id, function(err, places) {
      places.remove(function(err) {
        if(!err) {
      console.log('places with Id "'+ req.params.id +'" Removed Succefull');
        } else {
      console.log('ERROR: ' + err);
        }
      })
    });
  }