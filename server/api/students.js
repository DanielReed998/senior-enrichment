const router = require('express').Router();
const { Campus, Student } = require('../db/models');

router.get('/', (req, res, next) => {
    Student.findAll()
    .then(students => {
        res.json(students)
    })
    .catch(next);
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Student.findOne({
        where: {
            id: id
        }
    })
    .then(student => {
        res.json(student);
    })
})

router.post('/', (req, res, next) => {
    console.log('post request made!S')
    Student.create(req.body)
    .then(newStudent => {
        res.status(201).json(newStudent);
    })
    .catch(next);
})

router.put('/:id', (req, res, next) => {
    Student.findById(req.params.id)
    .then(student => {
        student.update(req.body)
    })
    .then(() => {
        res.send('student successfully updated');
    })
    .catch(next);
})

router.delete('/:id', (req ,res, next) => {
    req.student.destroy()
    .then(() => {
        res.send(200);
    })
})

module.exports = router;