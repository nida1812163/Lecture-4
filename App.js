var RouteMod=require('./RouteMod')
var express=require('express');
var Rbook=require('./Bookroute')
var app=express();

app.use('/books', Rbook)

app.use('/Students', RouteMod)

var server=app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})