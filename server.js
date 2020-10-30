// eduardo blanco 
//a01566271

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req, res) => {
  res.send('You are on the homepage');
});

app.listen(5000, () => {
  console.log('RUNNING ON SERVER 5000');
});

app.post('/post',(req, res) => {
    res.send(`Welcome: ${req.body.user}`);
  });

app.delete('/delete', function(req, res){
    res.send(JSON.stringify({
        delete: true
    }));
});
  
app.put("/put/:ID",(req, res) => {
    res.send(`Task ${req.params.ID} has been upated`);
  });