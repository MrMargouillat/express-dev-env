import express from "express"
import bodyParser from 'body-parser'


var app = express()

let port = process.env.PORT || 1000

app.set('views', __dirname + '/views')
    // app.engine('jade', require('jade').__express)
    // app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
        extended: true
    }))
    // app.use(require('./controllers'))

app.get("/", (req, res) => {
    res.send("I'm working")
})

app.listen(port, function() {
    console.log('Listening on port ' + port)
})