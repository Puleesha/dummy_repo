const express = require('express');
const app = express();
const connectDB = require('./database/database.js');

const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path')
const credentials = require('./configuration/credentials.js');
const whiteList = require('./configuration/whiteList.js');

// app.use(express.static(path.join(__dirname, '../sdgp-roamceylon/build')));




const PORT=5009;
connectDB();
app.use(credentials);
app.use(cors(whiteList))

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());





app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',require('./routes/routes.js'));


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

