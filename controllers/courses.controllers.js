const model = require('../models/courses.models');



function postCourses(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing course name'
    });
  }

  const newCourse = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newCourse);

  res.json(newCourse);
}

function getCourse (request, response){
    const courseId = +request.params.courseId;
    const course = model[courseId];
    if (course){
        response.json(course);
    } 
    else {
        response.status(404).json({
            error: "ocurse does not exist",
        })
    }

}

function getCourses (request, response){
    response.json(model);
};

module.exports = {
    postCourses,
    getCourse,
    getCourses
}