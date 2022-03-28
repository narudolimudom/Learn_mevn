console.log('fast');
const express = require('express')
const bodyParsor = require('body-parser')
const cors= require('cors')
const morgan = require('morgan')


const app = express()
app.use(morgan('combined'))
app.use(bodyParsor.json())
app.use(cors())


app.get('/status', (req, res) =>{

    res.send({message: 'hello wissssss'})
})

app.listen(process.env.PORT || 8000)