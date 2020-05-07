const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// DB Config
const db_dev = require("./database/keys").db_dev;

// Connect to MongoDB
mongoose
    .connect(
        db_dev,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Cors
app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "https://cryptic-springs-10908.herokuapp.com"
        ],
        methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
        credentials: true //allow setting of cookies
    })
);

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./database/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000   ;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
