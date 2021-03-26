var express=require('express')
var router=express.Router()

router.get('/', (req, res)=>{
    res.send('Welcome to my Home page')
})

router.get('/about', (req, res)=>{
    res.send('Welcome to the About page')
})



module.exports=router //all the seperate files outside this one can access the router