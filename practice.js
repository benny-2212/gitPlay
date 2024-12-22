const bodyParser = require('body-parser');
const express = require('express');
const PORT = 3005;

const app = express();
app.use(bodyParser.json());

let set = {};

app.post('/practice/upload', (req,res)=>{
    const {name, age} = req.body;
    if(!name || !age){
        res.json({
            message: "fill all fields"
        })
    }
    res.json({
        message: `successfully added ${name}`
    })
})

app.listen(PORT, ()=>{
    console.log(`listening at port ${PORT}`)
})