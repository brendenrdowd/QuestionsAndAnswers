var mongoose = require("mongoose"),
    User = mongoose.model('User');
    Question = mongoose.model('Question');
    Answer = mongoose.model('Answer');

module.exports = {
    //login functions
    login: function (req, res) {
        User.find({ name: req.body.name }, function (err, users) { //what is users?
            // console.log("in controller", req.body)
            if (users.length < 1) {
                User.create({ name: req.body.name }, function (err, user) {
                    // console.log("user:", user)
                    req.session.user = user;
                    return res.json({ user: user })
                })
            } else {
                req.session.user = users[0];
                // console.log("existing user:", req.session.user)
                return res.json({ user: req.session.user })
            }
        })
    },
    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/');
    },
    checkSess: function (req, res) {
        if (req.session.user == undefined) {
            // console.log("check session:", req.session.user)
            return res.json({ user: null })
        }
        return res.json({ user: req.session.user })
    },
    //question functions
    newQuestion: function(req,res){
        // console.log("NQ controller:", req.session.user._id)
        User.findOne({_id:req.session.user._id}, function(err,user){
            console.log("question:", req.body)
            Question.create({content:req.body.content, desc:req.body.desc, _user:user._id}, function(err,question){
                // console.log("user object:",user)
                user._question.push(question._id);
                user.save()
                return res.json({question:question})
            })
        })
    },
    newAnwer: function(req,res){
        Question.findOne({_id:req.params.id}, function(err, question){
            console.log("question");
            Answer.create({content:req.body.content, details:req.body.details, _question:question._id}, function(err,answer){
                Question._quote.push(quote._id);
                Question.save();
            })
        })
    },
    like: function(req,res){
        Answer.findOneAndUpdate({_id:req.body.params},{ $inc: { Likes: 1 } }, function(err,answer){
            console.log("answer")
            return res.redirect('/dash')
        })
    },
    allQuestions: function(req,res){
        Question.find({}, function(err,question){
            // console.log("in controller:", question)
            res.json(question)
        })
    },
    allAnswers: function(req, res){ //need to bug check if time
        console.log("where")
        Question.findOne({_id:req.params.id}).populate('_answer').exec(function(err,question){
            console.log("in controllerA", question)
            res.json(question)
        })
    },
    findQuestion: function(req,res){
        Question.findOne({_id:req.params.id},function(err,question){
            console.log("in controllerQ", question)
            res.json(question)
        })
    }
}