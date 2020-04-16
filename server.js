// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').parse()
// }

const express = require('express')
const app = express()
const expressLayouts= require('express-ejs-layouts')
const mongoose = require('mongoose')


const Router = require('./routes/index')
 const key = require('./config/key')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))


mongoose.connect(key.MongoURI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log('MongoDB connected'))
.catch(err=>console.log('Error: ', err))
app.use('/', Router)

app.listen(process.env.PORT || 5000, console.log('Server started!!!'))