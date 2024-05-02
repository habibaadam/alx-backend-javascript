const express = require('express');
app = express();

port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
})

module.exports = app;
