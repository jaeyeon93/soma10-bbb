const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const todoSchema = new mongoose.Schema({
    title: {type: String, require: true},
    contents: {type: String},
    date: {
        type: Date,
        default: Date.now(),
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});

mongoose.model('Todo', todoSchema);
console.log('model name : ', mongoose.modelNames());
autoIncrement.initialize(mongoose.connection);
todoSchema.plugin(autoIncrement.plugin,
    {model: 'Todo', field: 'id', startAt: 1});
module.exports = mongoose.model('Todo');

// model method에 문자열과 스키마를 전달해서 모델을 생성한다. 실제 collection은 Todos로 자동변환된다.
