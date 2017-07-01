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

router.get('/:id', (req, res) => {
    let subscriber = db.find(sub => sub.id == req.params.id)
    if (subscriber) {
        res.json(subscriber)
    } else {
        res.sendStatus(404)
    }
})

router.post('/', (req, res) => {
    let newSubscriber = {
        id: db.length + 1,
        name: req.body.name,
        email: req.body.email
    }

    db.push(newSubscriber);

    res.status(201).json(newSubscriber);
})

module.exports = router;