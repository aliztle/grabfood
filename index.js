const express = require('express');
const restaurantRouter = require('./routes/restaurant');
const indexRouter = require('./routes/index');
const hbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;
//creat server
const app = express();

//Template engine 
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended:false}))

//use Router
app.use('/api',restaurantRouter);
app.use('/',indexRouter);

//Middleware
app.use(express.static(path.join(__dirname,'public')));

app.listen(
    PORT,
    () => {
      console.log(`Listening to port ${PORT}`);
    }
  );
  