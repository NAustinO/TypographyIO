const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000; 

app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
})


app.get('/error', (req, res) => {
  res.send('There was an error');
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  
})


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

module.exports = app;