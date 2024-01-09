require('dotenv').config()
const express = require('express')
const path = require('path');
const app = express();
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web.js');
const connection = require('./config/database.js')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);
// comfig static file 

app.use('/', webRouter)

app.listen(process.env.PORT || 8080);