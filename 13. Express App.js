const express = require('express');
const App = express();
let Port = 2000;

App.get('/', (req, res) => {
  res.send('Hello World!')
})


App.get('/About', (req, res) => {
  res.send('About Page')
})

App.listen(Port, () => {
  console.log(`Example App Listening At http://localhost:${Port}`)
})



