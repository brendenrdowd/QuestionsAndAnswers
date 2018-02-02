var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    AnswerSchema = new Schema({
        content: String,
        details: String,
        likes: Number,
        _question:[{type:Schema.Types.ObjectId,ref:'Question'}]
    }, { timestamps: true, usePushEach: true })
mongoose.model('Answer', AnswerSchema);