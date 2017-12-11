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
        },
        include: {
            model: Campus,
            as: 'campus'
        }
    })
    .then(student => {
        res.json(student);
    })
})

router.post('/', (req, res, next) => {
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
        return student;
    })
    .then(updatedStudent => {
        res.send(updatedStudent);
    })
    .catch(next);
})

//for the reEnroll student feature:
// req should have the student's full name
// and new campus id on it.
router.put('/', (req, res, next) => {
    console.log(req.body.name);
    Student.findOne({
        where: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
    })
    .then(student => {
        student.update({
            campusId: req.body.campusId
        })
        return student
    })
    .then(updatedStudent => {
        res.json(updatedStudent);
    })
    .catch(next);
})

router.delete('/:id', (req ,res, next) => {
    Student.findById(req.params.id)
    .then(student => {
        student.destroy();
        return student;
    })
    .then(deletedStudent => {
        res.json(deletedStudent);
    })
    .catch(next);
})

module.exports = router;