let express = require("express")

let app = express()

app.get("/", (req, res) => {
    res.send("Gofgfghgdfod")
})

app.listen(1000)