//Mongoose의 Schema는 MongoDB에 저장되는 document의 Data 구조
// 즉 필드 타입에 관한 정보를 JSON 형태로 정의한 것으로 RDBMS의 테이블 정의와 유사한 개념
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    password: String,
    username: String
});
//creatr Model
var User = mongoose.model("user", userSchema);

// const user = new User({
//     id: "jy",
//     password: "1234",
//     username: "김재연"
// });
//
// user.save(function (error, user) {
//     if(error) console.log("err");
//     console.log("save oK");
// });

module.exports = mongoose.model('user', userSchema);
