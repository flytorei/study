var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.locals.pretty = true;

app.set('view engine','jade');
app.set('views','./views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/form',function(req,res){
    res.render('form');
});

//get 방식
app.get('/form_receiver',function(req,res){
    var title = req.query.title;
    var description = req.query.description;
    res.send(title+','+description);
});

//post 방식
app.post('/form_receiver',function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    res.send(title+','+description);
});

app.get('/topic/:id',function(req,res){   //쿼리스트링 '/topic'  ${topics[req.query.id]}
    var topics = [
        'Javascript is....',
        'Nodejs is....',
        'Express is....'
    ];
    var output = `
    <a href="/topic?id=0">JavaScript</a></br>
    <a href="/topic?id=1">Node</a></br>
    <a href="/topic?id=2">Express</a></br><br>
    ${topics[req.params.id]}   
`
    res.send(output);
});

//시멘틱 url
app.get('/topic/:id/:mode',function(req,res){
    res.send(req.params.id+','+req.params.mode);
});

app.get('/template',function(req,res){
    res.render('temp',{time:Date(),title:'Jade'});
});
app.get('/',function(req,res){
    res.send('Hello home page');
});
app.get('/login',function(req,res){
    res.send('Login please');
});
app.listen(3000,function(){
   console.log('Conneted 3000 port!'); 
});

