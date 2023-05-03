const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const data = require('./data/data.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Dragon is running!')
})

app.get('/data',(req,res)=>{
    res.send(data);
})

app.get('/data/:id',(req,res)=>{
  const id = parseInt(req.params.id);
  console.log(id);
  const selectedChef = data.find(chef=>parseInt(chef.id) == id);
  res.send(selectedChef);
})

app.listen(port, () => {
  console.log(`Dragon API is running on port: ${port}`)
})