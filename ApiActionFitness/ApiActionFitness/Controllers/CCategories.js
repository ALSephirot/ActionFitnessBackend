var mongoose = require('mongoose');
var Categories = mongoose.model('Categories');

//GET - Return all Categories in the DB
exports.findAllCategories = function (req, res) {
    console.log(Categories);
    Categories.find(function (err, categories) {
        console.log(categories);
        if (!err) {
            res.send(categories);
        } else {
            console.log('ERROR: ' + err);
        }
    });
};

//GET - Return a categories with specified ID
exports.findcategoriesById = function (req, res) {
    Categories.findById(req.params.id, function (err, categories) {
        if (!err) {
            res.send(categories);
        } else {
            console.log('ERROR: ' + err);
        }
    });
};

//POST - Insert a new categories in the DB
exports.addcategories = function (req, res) {
    console.log('POST');
    console.log(req.body);

    try {
        var categories = new Categories({
            Code: req.body.Code,
            Name: req.body.Name,
            Description: req.body.Description,
            InfoControl: req.body.InfoControl
        });

        categories.save(function (err) {
            if (!err) {
                console.log('categories "' + req.body.BasicInfo.Name + '" Created Succefull');
            } else {
                console.log('ERROR: ' + err);
            }
        });

        res.send(categories);
    }
    catch (error) {
        console.log(error);
    }

};

//PUT - Update a categories already exists
exports.updatecategories = function (req, res) {
    Categories.findById(req.params.id, function (err, categories) {
        categories.Code = req.body.Code,
        categories.Name = req.body.Name,
        categories.Description = req.body.Description,
        categories.InfoControl = req.body.InfoControl

        categories.save(function (err) {
            if (!err) {
                console.log('categories "' + req.body.Name + '" Updated Succefull');
            }
            else {
                console.log('ERROR: ' + err);
            }

            res.send(categories);
        });
    });
};

//DELETE - Delete a categories with specified ID
exports.deletecategories = function (req, res) {
    Categories.findById(req.params.id, function (err, categories) {
        categories.remove(function (err) {
            if (!err) {
                console.log('categories with Id "' + req.params.id + '" Removed Succefull');
            } else {
                console.log('ERROR: ' + err);
            }
        })
    });
}