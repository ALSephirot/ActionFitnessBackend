var mongoose = require('mongoose');
var Products = mongoose.model('Products');

  //GET - Return all Products in the DB
  exports.findAllProducts = function(req, res) {
  	console.log(Products);
  	Products.find(function(err, products) {
  		console.log(products);
  		if(!err) {
  			res.send(products);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a products with specified ID
  exports.findproductsById = function(req, res) {
      Products.findById(req.params.id,function(err, products) {
      if(!err) {
        res.send(products);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  //GET - Return a products with specified City
  exports.findproductsByCiudad = function (req, res) {
      Products.find({City:req.params.City}, function (err, products) {
          if (!err) {
              res.send(products);
          } else {
              console.log('ERROR: ' + err);
          }
      });
  };

  //GET - Return a products with specified City
  exports.findproductsByCiudadByCatego = function (req, res) {
      Products.find({ City: req.params.City, Category: req.params.Category }, function (err, products) {
          if (!err) {
              res.send(products);
          } else {
              console.log('ERROR: ' + err);
          }
      });
  };

  //POST - Insert a new products in the DB
  exports.addproducts = function(req, res) {
    console.log('POST');
    console.log(req.body);

    try
    {
        var products = new Products({
            Code: req.body.Code,
            Name: req.body.Name,
            Description: req.body.Description,
            UnitValue: req.body.UnitValue,
            City: req.body.City,
            Category: req.body.Category,
            InfoControl:req.body.InfoControl
      });

      products.save(function(err) {
        if(!err) {
          console.log('products "'+ req.body.BasicInfo.Name +'" Created Succefull');
        } else {
          console.log('ERROR: ' + err);
        }
      });

      res.send(products);
    }
    catch(error)
    {
      console.log(error);
    }
    
  };

  //PUT - Update a products already exists
  exports.updateproducts = function(req, res)
  {
    Products.findById(req.params.id, function(err, products) {
        products.Code= req.body.Code,
        products.Name= req.body.Name,
        products.Description= req.body.Description,
        products.UnitValue= req.body.UnitValue,
        products.City = req.body.City,
        products.Category = req.body.Category,
        products.InfoControl=req.body.InfoControl

      products.save(function(err) {
        if(!err) 
        {
          console.log('products "'+ req.body.Name +'" Updated Succefull');
        }
        else
        {
          console.log('ERROR: ' + err);
        }

        res.send(products);
      });
    });
  };

  //DELETE - Delete a products with specified ID
  exports.deleteproducts = function(req, res) {
    Products.findById(req.params.id, function(err, products) {
      products.remove(function(err) {
        if(!err) {
      console.log('products with Id "'+ req.params.id +'" Removed Succefull');
        } else {
      console.log('ERROR: ' + err);
        }
      })
    });
  }