const {catchAsyncErrors} = require("../middlewares/catchAsyncErrors");
const Student = require("../models/studentModel");
const ErrorHandler = require("../utils/ErrorHandler");
const { v4: uuidv4 } = require('uuid');

exports.resume = catchAsyncErrors(async (req, res, next)=>{
    const {resume} = await Student.findById(req.id).exec();
    res.json({message:"Secure Resume Page",resume});
});

exports.addeducation = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.education.push({...req.body ,id:uuidv4()});
    await student.save();
    res.json({message:"Education Added"});
});

exports.editeducation = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const eduIndex = student.resume.education.findIndex(
        (i) => i.id === req.params.eduid
    );
    student.resume.education[eduIndex] = {
        ...student.resume.education[eduIndex],
         ...req.body,
    };
    await student.save();
    res.json({message:"Education Updated"});
});

exports.deleteeducation = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const filterededu = student.resume.education.filter(
        (i) => i.id !== req.params.eduid
    );
    student.resume.education = filterededu;
    await student.save();
    res.json({message:"Education Deleted"});
});

exports.addjob = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.jobs.push({...req.body ,id:uuidv4()});
    await student.save();
    res.json({message:"Job Added"});
});

exports.editjob = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const jobIndex = student.resume.jobs.findIndex(
        (i) => i.id === req.params.jobid
    );
    student.resume.jobs[jobIndex] = {
        ...student.resume.jobs[jobIndex],
         ...req.body,
    };
    await student.save();
    res.json({message:"Job Updated"});
});

exports.deletejob = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const filteredjob = student.resume.jobs.filter(
        (i) => i.id !== req.params.jobid
    );
    student.resume.jobs = filteredjob;
    await student.save();
    res.json({message:"Job Deleted"});
});

exports.addinternship = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.internships.push({...req.body ,id:uuidv4()});
    await student.save();
    res.json({message:"Internship Added"});
});

exports.editinternship = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const internIndex = student.resume.internships.findIndex(
        (i) => i.id === req.params.internid
    );
    student.resume.internships[internIndex] = {
        ...student.resume.internships[internIndex],
         ...req.body,
    };
    await student.save();
    res.json({message:"Internship Updated"});
});

exports.deleteinternship = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const filteredintern = student.resume.internships.filter(
        (i) => i.id !== req.params.internid
    );
    student.resume.internships = filteredintern;
    await student.save();
    res.json({message:"Internship Deleted"});
});

exports.addresponsibility = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.responsibilities.push({...req.body ,id:uuidv4()});
    await student.save();
    res.json({message:"Responsibilities Added"});
});

exports.editresponsibility = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const respIndex = student.resume.responsibilities.findIndex(
        (i) => i.id === req.params.respid
    );
    student.resume.responsibilities[respIndex] = {
        ...student.resume.responsibilities[respIndex],
         ...req.body,
    };
    await student.save();
    res.json({message:"Responsibilities Updated"});
});

exports.deleteresponsibility = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const filteredresp = student.resume.responsibilities.filter(
        (i) => i.id !== req.params.respid
    );
    student.resume.responsibilities = filteredresp;
    await student.save();
    res.json({message:"Responsibilities Deleted"});
});

exports.addcourses = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.courses.push({...req.body ,id:uuidv4()});
    await student.save();
    res.json({message:"Courses Added"});
});

exports.editcourses = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const courIndex = student.resume.courses.findIndex(
        (i) => i.id === req.params.courid
    );
    student.resume.courses[courIndex] = {
        ...student.resume.courses[courIndex],
         ...req.body,
    };
    await student.save();
    res.json({message:"Courses Updated"});
});

exports.deletecourses = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const filteredcour = student.resume.courses.filter(
        (i) => i.id !== req.params.courid
    );
    student.resume.courses = filteredcour;
    await student.save();
    res.json({message:"Courses Deleted"});
});

exports.addprojects = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.projects.push({...req.body ,id:uuidv4()});
    await student.save();
    res.json({message:"Projects Added"});
});

exports.editprojects = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const proIndex = student.resume.projects.findIndex(
        (i) => i.id === req.params.proid
    );
    student.resume.projects[proIndex] = {
        ...student.resume.projects[proIndex],
         ...req.body,
    };
    await student.save();
    res.json({message:"Projects Updated"});
});

exports.deleteprojects = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const filteredpro = student.resume.projects.filter(
        (i) => i.id !== req.params.proid
    );
    student.resume.projects = filteredpro;
    await student.save();
    res.json({message:"Projects Deleted"});
});

exports.addskills = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.skills.push({...req.body ,id:uuidv4()});
    await student.save();
    res.json({message:"Skills Added"});
});

exports.editskills = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const skilIndex = student.resume.skills.findIndex(
        (i) => i.id === req.params.skilid
    );
    student.resume.skills[skilIndex] = {
        ...student.resume.skills[skilIndex],
         ...req.body,
    };
    await student.save();
    res.json({message:"Skills Updated"});
});

exports.deleteskills = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const filteredskil = student.resume.skills.filter(
        (i) => i.id !== req.params.skilid
    );
    student.resume.skills = filteredskil;
    await student.save();
    res.json({message:"Skills Deleted"});
});

exports.addaccomplishments = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.accomplishments.push({...req.body ,id:uuidv4()});
    await student.save();
    res.json({message:"Accomplishments Added"});
});

exports.editaccomplishments = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const accIndex = student.resume.accomplishments.findIndex(
        (i) => i.id === req.params.accid
    );
    student.resume.accomplishments[accIndex] = {
        ...student.resume.accomplishments[accIndex],
         ...req.body,
    };
    await student.save();
    res.json({message:"Accomplishments Updated"});
});

exports.deleteaccomplishments = catchAsyncErrors(async (req, res, next)=>{
    const student = await Student.findById(req.id).exec();
    const filteredacc = student.resume.accomplishments.filter(
        (i) => i.id !== req.params.accid
    );
    student.resume.accomplishments = filteredacc;
    await student.save();
    res.json({message:"Accomplishments Deleted"});
});






