require('dotenv').config();
var express = require('express');
var app = express();
var chalk = require('chalk');
var Routes = require('./routes/');

app.set('view engine', 'ejs');

Routes(app);

app.listen(process.env.PORT);
console.log(chalk.cyanBright.bold('Listening On Port', process.env.PORT));