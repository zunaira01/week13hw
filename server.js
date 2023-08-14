// app.js

const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Good Morning, Courtney!'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

















// const express = require("express");

// const app = ("express");

// const greet =  require('./Components/Greet.js');




// app.get('/', (req, res) => {
//     res.send('Welcome to our website!');
// });


// app.get("/greet/", (req, res) => {
//   res.send(greet);
// });

//  app.get("/greet/:indexOfGreetArray", (req, res) => {
//     res.send(greet[req.params.indexOfGreetArray]);
//   });

// app.listen(3000, () => {
//   console.log("Listening on port 3000");
// });







