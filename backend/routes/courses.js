const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

router.post("/create", async(req,res) => {

    try{
        const {name, videos} = req.body;
        if(!name || !videos || !videos.length){
            return res.status(400).json({ message: "Course name and videos are required!" });
        }

        const newCourse = new Course({name, videos});
        await newCourse.save();

        res.status(201).json({message: "Course created Successfully", course: newCourse});

    }
    catch(error){
        res.status(500).json({message: "error"})
    }
    
});

router.get('/all', async(req, res) => {
    try{
        const courses = await Course.find();
        res.status(200).json(courses);
    }

    catch(error){
        res.status(500).json({message: "error fetching courses"})
    }
})

module.exports = router;