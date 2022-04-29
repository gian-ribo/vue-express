const { Router } = require('express')

const router = Router()

router
	.get('/', (req, res) => {
    res.send('----> THIS IS A RESULT OF SERVER GET CALL <-----')
	})
	.post('/', (req, res) => {
		res.send('First POST API')
	})
	.put('/:id', (req, res) => {
		const { id } = req.params
		res.send('First PUT API wiht id ' + id)
	})
	.put('/:id', (req, res) => {
		const { id } = req.params
		res.send('First DELETE API wiht id ' + id)
	})

module.exports = router