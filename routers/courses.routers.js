const express = require('express');

const courseRouter = express.Router();


const {getCourses, postCourses, getCourse} = require('../controllers/courses.controllers');


courseRouter.get('/', getCourses);
courseRouter.post('/', postCourses);
courseRouter.get('/:courseId', getCourse);

module.exports = courseRouter;