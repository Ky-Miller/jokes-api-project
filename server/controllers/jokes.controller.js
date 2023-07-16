const Joke = require ('../models/jokes.model')

module.exports = {

    newJoke: (req,res)=> {
        Joke.create(req.body)
            .then(newJoke =>{
                res.json(newJoke)
            })
            .catch((err)=>{
                console.log(err)
            });
        },
            
    allJokes : (req,res) => {
        Joke.find()
            .then(jokes=>{
                res.json(jokes)
                console.log(jokes)
            })
            .catch((err)=>{
                console.log(err)
            });
    },
    
    oneJoke : (req,res) => {
        Joke.findOne( { _id: req.params.id } )
            .then(joke=>{
                res.json(joke)
            })
            .catch((err)=>{
                console.log(err)
            });
    },

    updateJoke : ( req,res ) =>{
        Joke.findOneAndUpdate( { _id: req.params.id }, req.body, {new: true} )
            .then(joke=>{
                res.json(joke)
            })
            .catch((err)=>{
                console.log(err)
            });
    },

    deleteJoke : (req,res) =>{
        Joke.deleteOne( { _id: req.params.id } )
            .then(joke=>{
                res.json(joke)
            })
            .catch((err)=>{
                console.log(err)
            });
    }
}