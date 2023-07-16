const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.allJokes);
    app.get('/api/jokes/:id', JokeController.oneJoke);
    app.patch('/api/jokes/:id', JokeController.updateJoke);
    app.post('/api/jokes/new', JokeController.newJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}