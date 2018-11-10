
//GET Website homepage
exports.get_homepage =  function (req, res) {
    res.render("index");
}; 


//GET About page
exports.get_aboutPage = function(req, res) {
    res.render("about");
}


//GET recipes page
exports.get_recipesPage = function(req, res) {
    res.render("recipes");
}

//GET contact page
exports.get_contactPage = function(req, res) {
    res.render("contacts");
}