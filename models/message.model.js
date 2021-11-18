const { Schema, model } = require('mongoose')

const messageSchema = new Schema({
    author: {

        id: {
            type: String,
            trim: true,
            required: true
        },
        name: {
            type: String,
            trim: true,
            required: true
        },
        lastname: {
            type: String,
            trim: true,
            required: true
        },
        age: {
            type: Number,
            trim: true,
            required: true
        },
        alias: {
            type: String,
            trim: true,
            required: true
        },
        avatar: {
            type: String,
            trim: true,
            required: true
        }
    },
    text: {
        type: String,
        trim: true,
        required: true
    }
})

const messageModel = model('message', messageSchema)
module.exports = messageModel;