const express = require('express');
const courseRouter = express.Router();
const courseController = require('../controllers/courses.controllers');


courseRouter.get('/', courseController.getCourses);
courseRouter.post('/', courseController.postCourses);
courseRouter.get('/:courseId', courseController.getCourse);

module.exports = courseRouter;