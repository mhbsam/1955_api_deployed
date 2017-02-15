var people = require('../controllers/api.js');

module.exports = function(app){

    //      ****** display all  ******
    app.get('/', function(req, res) {
        people.display_all(req, res)
    })

    //      ****** adding a new person  ******
    app.get('/new/:name', function(req, res){
        people.add_one(req, res)
    })


    //  ****** Display infomration about one person  ******
    app.get('/:name', function(req, res) {
        people.display_one(req, res)
    })

    //  ****** Remove a person  ******
    app.get('/remove/:name', function(req, res) {
        people.remove_one(req, res)
    })

}
