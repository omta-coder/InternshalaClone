const express = require("express");
const router = express.Router();

const {
    homepage,
    currentEmploye,
    employesignup,
    employesignin,
    employesignout,
    employesendmail,
    employeforgetlink,
    employeresetpassword,
    employeupdate,
    employeavatar,
    createinternship,
    readinternship,
    readsingleinternship,
    createjob,
    readjob,
    readsinglejob,
} = require("../controllers/employeController");
const { isAuthenticated } = require("../middlewares/auth");

//get /
router.get("/", homepage);

//get /employe
router.post("/current", isAuthenticated, currentEmploye);

//post /employe/signup
router.post("/signup",employesignup);

//post /employe/signin
router.post("/signin",employesignin);

//get /employe/signout
router.get("/signout", isAuthenticated, employesignout);

//post /employe/send-mail
router.post("/send-mail",  employesendmail);

//get /employe/forget-link/:employeid
router.get("/forget-link/:id",  employeforgetlink);

//post /employe/reset-password/:employeid
router.post("/reset-password/:id",isAuthenticated, employeresetpassword);

//post /employe/update/:employeid
router.post("/update/:id",isAuthenticated, employeupdate);

//post /employe/avatar/:employeid
router.post("/avatar/:id",isAuthenticated, employeavatar);


//-------------Internship---------

//post /employe/internship/create
router.post("/internship/create",isAuthenticated, createinternship);

//post /employe/internship/read
router.post("/internship/read",isAuthenticated, readinternship);

//post /employe/internship/read/:id
router.post("/internship/read/:id",isAuthenticated, readsingleinternship);


//-------------Job---------

//post /employe/job/create
router.post("/job/create",isAuthenticated, createjob);

//post /employe/job/read
router.post("/job/read",isAuthenticated, readjob);

//post /employe/job/read/:id
router.post("/job/read/:id",isAuthenticated, readsinglejob);









module.exports = router;