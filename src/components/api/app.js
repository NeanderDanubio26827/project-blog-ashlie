const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const insertPostRouter = require('./routes/insertPost');
const selectPostRouter = require('./routes/selectPost');
//const updatePostRouter = require('./routes/updatePost');
const selectURouter = require('./routes/selectU');

const app = express();
dotenv.config();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const corsOptions = {
  origin: "http://localhost:3000", // Origem permitida (URL do seu aplicativo React)
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204, // Some browsers may send an OPTIONS request before making a GET request. Use this status code to handle it.
};

// Configure o middleware com as opções personalizadas
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/insertPost', insertPostRouter);
app.use('/selectPost', selectPostRouter);
app.use('/selectU', selectURouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 4000; // Use a variável de ambiente PORT se estiver definida, caso contrário, use 4000 como valor padrão.

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

module.exports = app;
