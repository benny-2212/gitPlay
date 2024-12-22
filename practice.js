const bodyParser = require('body-parser');
const express = require('express');
const PORT = 3005;

const app = express();
app.use(bodyParser.json());

let set = {};

app.post('/practice/upload', (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.json({
            message: "fill all fields"
        });
    }
    set[name] = age;  // Store data in `set`
    res.json({
        message: `successfully added ${name}`
    });
});

app.get('/practice/receive', (req, res) => {
    res.json({
        message: set
    });
});

app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
});
