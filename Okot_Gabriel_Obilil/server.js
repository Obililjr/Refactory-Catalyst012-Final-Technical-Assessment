const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


// For invalid routes
app.get('*', (req, res) => {
    res.send('404! Invalid server request bro.....!!!!');
  });

  //bootstrapping server
app.listen(3500, () => console.log('We are listening on port 3500!'));