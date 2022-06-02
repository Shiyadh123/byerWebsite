// import
var express = require('express');

var app = express();

var PORT = 3000;

//app.get('/', function(req, res) {
    //res.status(200).send('Hello world');
//});
// static files
app.use(express.static('public'))


//set views
app.set('views','./views')
app.set('view engine','ejs')


app.get('',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/index',(req,res)=>{
    res.render('index')
})

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});