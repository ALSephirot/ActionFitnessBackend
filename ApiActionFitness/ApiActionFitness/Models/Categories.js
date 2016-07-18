exports = module.exports = function (app, mongoose) {
    var CategoriesSchema = new mongoose.Schema({
        Code: String,
        Name: String,
        Description: String,
        InfoControl:
        [{
            UserCreated: String,
            userModified: String,
            DateCreated: Date,
            DateModified: Date
        }]
    });

    mongoose.model('Categories', CategoriesSchema);
};