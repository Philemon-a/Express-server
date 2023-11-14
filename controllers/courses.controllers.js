const model = require('../models/courses.models');



function postCourses(req, res) {
  try {
    if (!req.body.course) {
      return res.status(400).json({
        error: 'Missing course name'
      });
    }
  
    const newCourse = {
      name: req.body.course,
      id: 100+ model.length,
    };
    model.push(newCourse);
  
    res.status(200).json(newCourse);
  } catch (error) {
    console.log('Server crashed')
    return res.json({
        error: 'Server is down'
    })
  }
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