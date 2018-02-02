var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    UserSchema = new Schema({
        name: String,
        _question:[{type:Schema.Types.ObjectId,ref:'Question'}]
    },{timestamps:true, userPushEach:true});
mongoose.model('User', UserSchema);