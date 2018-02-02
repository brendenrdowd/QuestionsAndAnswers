var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    QuestionSchema = new Schema({
        content: String,
        desc: String,
        _answer:[{type:Schema.Types.ObjectId, ref:'Answer'}],
        _user:[{type:Schema.Types.ObjectId, ref:'User'}]
    },{timestamps:true, userPushEach:true});
mongoose.model('Question', QuestionSchema);