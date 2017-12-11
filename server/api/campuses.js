const router = require('express').Router();
const { Campus, Student } = require('../db/models');

router.get('/', (req, res, next) => {
    Campus.findAll()
    .then(campuses => {
        res.json(campuses)
    })
    .catch(next);
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Campus.findOne({
        where: {
            id: id
        }, 
        include: {
            model: Student,
            as: 'students'
        }
    })
    .then(campus => {
        res.json(campus);
    })
    .catch(err => console.error(err));
})

router.post('/', (req, res, next) => {
    Campus.create(req.body)
    .then(newCampus => {
        res.status(201).json(newCampus);
    })
    .catch(next);
})

router.put('/:id', (req, res, next) => {
    Campus.findById(req.params.id)
    .then(campus => {
        campus.update(req.body);
        return campus;
    })
    .then(updatedCampus => {
        res.send(updatedCampus)
    })
    .catch(next);
})

router.delete('/:id', (req ,res, next) => {
    Campus.findById(req.params.id)
    .then(campus => {
        campus.destroy();
        return campus;
    })
    .then(deletedCampus => {
        res.json(deletedCampus);
    })
    .catch(next);
})

module.exports = router;

