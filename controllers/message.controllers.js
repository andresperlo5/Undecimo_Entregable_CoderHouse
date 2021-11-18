const msgModel = require('../models/message.model')
const { normalize, schema, denormalize } = require('normalizr')
const util = require('util')

exports.CreateMessage = async (req, res) => {
    try {
        console.log('entro a CreateMessage')
        const newMsg = await msgModel(req.body)
        await newMsg.save()
        /* res.status(201).redirect('/api/productos-test') */
        res.send(newMsg)

    } catch (error) {
        console.log('error', error)
    }
}

exports.GetAllMessage = async (req, res) => {
    try {

        const allMessages = await msgModel.find().select('-_id -__v')

        const data = {
            id: '999',
            mensajes: [allMessages]
        }

        const SchemaAuthor = new schema.Entity('author')
        const SchemaText = new schema.Entity('text')

        const SchemaFinal = new schema.Entity('posts', {
            author: SchemaAuthor,
            text: SchemaText
        })

        const normalizrAuthor = normalize(data, SchemaFinal)

        function print(obj) {
            console.log(util.inspect(obj, false, 12, true))
        }

        console.log('original', Object.keys(data).length)
        console.log('normalizado', Object.keys(normalizrAuthor).length)

        let porcentaje = (Object.keys(normalizrAuthor).length / Object.keys(data).length) * 100
        console.log(`compresion de los mensajes al: ${porcentaje}%`)
        print(normalizrAuthor)

        console.log('dataRender', allMessages)

        res.render('home', { message: allMessages.reverse(), data: porcentaje })


    } catch (error) {
        console.log('error', error)
    }
}
