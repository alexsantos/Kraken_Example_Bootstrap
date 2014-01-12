'use strict';


var IndexModel = require('../models/index');


module.exports = function (app) {

    var model = new IndexModel();


    app.get('/jumbotron', function (req, res) {
        
        res.render('jumbotron', model);
        
    });

};
