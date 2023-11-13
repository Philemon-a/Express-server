const express = require('express');

const courseRouter = require('./routers/courses.routers')

const app = express();

app.use(express.json());

const calTime= (req, res, next)=>{
    const start = Date.now();
    next();
    const finish = Date.now() - start;
    console.log(`${req.method} ${req.url} ${finish}ms`);
};

app.use(calTime);
app.use('/courses', courseRouter);


app.listen(4000, ()=>{
    console.log(` app running on port 4000`);
})