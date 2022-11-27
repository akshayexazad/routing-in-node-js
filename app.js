// let http = require('http');
const express = require('express')
const app = express();
const Bodyparser=require('body-parser');
const bodyParser = require('body-parser');

// let route = require('./router')
app.use(bodyParser.urlencoded({extended:false}))

app.use('/my-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"> <input type= "text" name="title"> <input type= "text" name="title"><button type="submit">Add Product</button></form>')
});
app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')

})
app.use('/',(req,res,next)=>{
    res.send('<h1>hello from Express js i am in another middlewarw</h1>')
});

app.listen(5001);

// let server = http.createServer(app);
// server.listen(5001),()=>{
//     console.log("http://localhost5001")
// };
