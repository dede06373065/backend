const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./routes/color');

app.use(cors());
app.use(route);

app.listen(3002,()=>{
    console.log('port is 3002');
})
