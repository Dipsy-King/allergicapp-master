const express =  require("express"),
mongoose  = require("mongoose"),
bodyParser = require("body-parser"),
port = process.env.PORT || 3000;

var indexRoutes = require("./routes/index.js");
var authRoutes = require("./routes/auth.js")

//inicializar o servidor
const app = express();

//Binds and listens for connections on the specified host and port
//returns an http.Server object 
app.listen(port, function() {
    console.log("Server 3000 Started!");
});

app.use(indexRoutes);
app.use(authRoutes);

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');


app.get("*", (req, res) => {
    res.send("Error 404")
});