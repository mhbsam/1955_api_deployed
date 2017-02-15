var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports = {

    //displaying all the people on the localhost:8000
        display_all: function(req, res){
            People.find({}, function(err, peoplelist){
                if(err){
                    console.log("error has been found");
                }
                else{
                    // console.log(peoplelist);
                    res.json({peoplelist});
                }
            })
        },

    //adding a new person in "/new:name" route
        add_one:  function(req, res){
            console.log("POST DATA:", req.body);
            var person = new People ({name: req.params.name});
            person.save(function(err){
                if(err){
                    console.log("something is wrong!", err);
                }
                else{
                    console.log("a new person successfully added!");
                }
            })
            res.redirect('/');
        },

    // Display information about one person on "/:name" route
        display_one: function(req, res){
            People.findOne({name: req.params.name}, function(err, person){
                if(err){
                    console.log("error has been found");
                }
                else{
                    res.json({person});
                }
            })
        },

        // DRemove a person on "/remove/:name" route
            remove_one: function(req, res){
                People.remove({name: req.params.name}, function(err){
                    if(err){
                        console.log("error has been found");
                    }
                    else{
                        console.log('successfully removed:', req.params.name);
                        res.redirect('/');

                    }
                })
            },

}
