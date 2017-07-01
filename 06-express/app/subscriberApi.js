const express = require('express')
const router = express.Router()

let db = [
    {
        id: 1,
        name: "Carlos",
        email: "carlos@gmail.com"
    }, {
        id: 2,
        name: "Daniel",
        email: "daniel@gmail.com"
    }, {
        id: 3,
        name: "Drury",
        email: "drury@gmail.com"
    }, {
        id: 4,
        name: "teste",
        email: "teste@gmail.com"
    }
]

router.get('/', (req, res) => {
    res.json(db)
})

module.exports = router;