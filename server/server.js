const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.ATLAS_PORT;


require('./config/mongoose.config')


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const routeAttacher = require('./routes/joke.routes')
routeAttacher(app)


app.listen( port, () => console.log(`Listening on port: ${port}`) );