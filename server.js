const express = require("express");
// NOTE: it must start with. if it's just a file, not an NPM package
const fruits =  require('./models/fruits.js');
const vegatables = require('./models/vegatables.js');



const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


app.get('/', (req, res) => {
    res.send('homepage of fruits and vegatables');
});
//Define routes
app.get("/fruits/", (req, res) => {
  // res.send(fruits);
  res.render('Index, {fruits: fruits}');
});

//Define routes
app.get("/vegatables", (req, res) => {
    res.send(vegatables);
  });
  
//Createa a SHOW route (show routes use a get request)
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  // res.send(fruits[req.params.indexOfFruitsArray]);
  res.render ('Show', {
  // inculde a second param that must be an object (req.params,indexOfFruitsArray)
  fruit: fruits[req.params.indexOfFruitsArray]
  });
});

 //Createa a SHOW route (show routes use a get request)
 app.get("/vegatables/:indexOfVegatablesArray", (req, res) => {
    res.send(vegatables[req.params.indexOfVegatablesArray]);
  });

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

