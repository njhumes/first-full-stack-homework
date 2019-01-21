require('./db/db')
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const guitarController = require('./controller/guitarController');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use('/guitars', guitarController);



app.listen(3000, () => {
    console.log(`Server is on port 3000`)
})