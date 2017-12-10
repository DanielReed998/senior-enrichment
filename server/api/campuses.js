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
    console.log('hit campus id route!')
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
    const campusId = req.params.id;
    Campus.findById(campusId)
    .then(campus => {
        campus.update(req.body);
    })
    .then(() => {
        console.log('record successfully updated.')
    })
    .catch(next);
})

router.delete('/:id', (req ,res, next) => {
    const campusId = req.params.id;
    Campus.findById(campusId)
    .then(campus => {
        campus.destroy();
    })
    .then(() => {
        console.log('record successfully destroyed.')
    })
    .catch(next);
})

module.exports = router;
