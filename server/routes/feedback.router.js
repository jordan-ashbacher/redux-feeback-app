const express = require('express')
const router = express.Router()
const pool = require('../modules/pool')

// POST route
router.post('/', (req, res) => {
    const feedback = req.body

    const queryText = `
    INSERT INTO feedback (feeling, understanding, support, comments)
    VALUES ($1, $2, $3, $4)`

    pool
    .query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comment])
    .then((result) => {
        console.log('added feedback to database:', feedback)
        res.sendStatus(201)
    })
    .catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })
})

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM feedback ORDER BY date`

    pool
    .query(queryText)
    .then((result) => {
        res.send(result.rows)
    })
    .catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })
})

module.exports = router