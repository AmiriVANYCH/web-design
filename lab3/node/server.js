const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cookieParser = require("cookie-parser");
const cors = require("cors");
  const sessions = require('express-session');

const host = '127.0.0.1'

var session;


const app = express();

var corsOptions = {
  origin: "http://ivan.zeleniak.net:8080"
};

app.use(cors(corsOptions));

app.use(express.json());  

app.use(express.urlencoded({ extended: true })); 


const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

app.use(cookieParser());

const db = require("./app/models");
db.sequelize.sync();


require("./app/routes/routes")(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
