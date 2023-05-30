const express = require("express");

const app = express();
const sass = require("node-sass-middleware");

app.set("view engine", "pug");
app.set('views', __dirname);
app.use('/public', express.static('dist'));

app.use(
  sass({
    // quiet: true
    src: __dirname, // Input SASS files
    dest: __dirname + "/public", // Output CSS
    debug: true // obvious
  })
);

const userNames = ["Sean", "George", "Roger", "Timothy", "Pierce", "Daniel"];
const bestMovie = "Casino Royale";
const licensedToKill = true;


app.get("/", (req, res) => {
  console.log('ssdsdsds index')
  res.render("index", {
    userNames,
    bestMovie,
    licensedToKill
  });
})

app.get("/login", (req, res) => {
  console.log("LOGIN!")
  res.render("pages/login/index");
});

app.listen(3000, () => {
  console.log("Server listening on 3000");
});