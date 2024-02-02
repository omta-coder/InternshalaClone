const express = require("express");
const router = express.Router();

const {
    homepage,
    currentUser,
    studentsignup,
    studentsignin,
    studentsignout,
    studentsendmail,
    studentforgetlink,
    studentresetpassword,
    studentupdate,
    studentavatar,
    studentdelete,
    applyinternship,
    applyjob,
} = require("../controllers/indexController");
const { isAuthenticated } = require("../middlewares/auth");

//get /
router.get("/", homepage);

//get /student
router.post("/student", isAuthenticated, currentUser);

//post /student/signup
router.post("/student/signup",studentsignup);

//post /student/signin
router.post("/student/signin",studentsignin);

//get /student/signout
router.get("/student/signout", isAuthenticated, studentsignout);

//post /student/send-mail
router.post("/student/send-mail",  studentsendmail);

//get /student/forget-link/:studentid
router.get("/student/forget-link/:id",  studentforgetlink);

//post /student/reset-password/:studentid
router.post("/student/reset-password/:id",isAuthenticated, studentresetpassword);

//post /student/update/:studentid
router.post("/student/update/:id",isAuthenticated, studentupdate);

//post /student/avatar/:studentid
router.post("/student/avatar/:id",isAuthenticated, studentavatar);

// //post /student/delete/:studentid
// router.post("/student/delete/:studentid",isAuthenticated, studentdelete);


//-------------Apply Internship-----------------------

//post /student/apply/internship/:internshipid
router.post("/student/apply/internship/:internshipid",isAuthenticated, applyinternship);



//----------------Apply Job-----------------------

//post /student/apply/job/:jobid
router.post("/student/apply/job/:jobid",isAuthenticated, applyjob);



module.exports = router;