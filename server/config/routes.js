var main = require('../controllers/MainController.js');
var path = require("path");

module.exports = function(app){
    //login routes
    app.post('/login', function(req,res){
        main.login(req, res)
    })
    app.get('/logout', function(req,res){
        main.logout(req,res);
    })
    app.get('/sess', function(req,res){
        main.checkSess(req,res);
    })
    //question routes
    app.post('/newQuestion', function(req,res){
        main.newQuestion(req,res);
    })
    app.get('/showAll', function(req,res){
        main.allQuestions(req,res);
    })
    app.get('/showAllAnswers/:id', function(req,res){
        console.log("hitting route")
        main.allAnswers(req,res);
    })
    app.get('/question/:id', function(req,res){
        main.findQuestion(req,res);
    })
    app.get("/like/:id",function(req,res){
        main.like(req,res);
    })
    app.post("/newAnswer",function(req,res){
        main.newAnwer(req,res);
    })
    //catch
    app.all('**', function(req,res){
        res.sendFile(path.resolve('./client/dist/index.html'));
    })
} 