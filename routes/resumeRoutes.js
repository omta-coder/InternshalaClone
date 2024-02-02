const express = require("express");
const router = express.Router();
const {
    resume,
    addeducation,
    editeducation,
    deleteeducation,
    addjob,
    editjob,
    deletejob,
    addinternship,
    editinternship,
    deleteinternship,
    addresponsibility,
    editresponsibility,
    deleteresponsibility,
    addcourses,
    editcourses,
    deletecourses,
    addprojects,
    editprojects,
    deleteprojects,
    addskills,
    editskills,
    deleteskills,
    addaccomplishments,
    editaccomplishments,
    deleteaccomplishments,
} = require("../controllers/resumeController");
const { isAuthenticated } = require("../middlewares/auth");

//get /
router.get("/", isAuthenticated, resume);

//----------Education-----------

//post /
router.post("/add-edu", isAuthenticated, addeducation);

//post /
router.post("/edit-edu/:eduid", isAuthenticated, editeducation);

//post /
router.post("/delete-edu/:eduid", isAuthenticated, deleteeducation);

//-------------JObs---------------
//post /
router.post("/add-job", isAuthenticated, addjob);

//post /
router.post("/edit-job/:jobid", isAuthenticated, editjob);

//post /
router.post("/delete-job/:jobid", isAuthenticated, deletejob);

//-------------internships------------
router.post("/add-intern", isAuthenticated, addinternship);

//post /
router.post("/edit-intern/:internid", isAuthenticated, editinternship);

//post /
router.post("/delete-intern/:internid", isAuthenticated, deleteinternship);

//------------------responsibilities------------------
//post/
router.post("/add-resp", isAuthenticated, addresponsibility);

//post /
 router.post("/edit-resp/:respid", isAuthenticated, editresponsibility);

//post /
router.post("/delete-resp/:respid", isAuthenticated, deleteresponsibility);

//--------------courses-----------

//post/
router.post("/add-cour", isAuthenticated, addcourses);

//post /
router.post("/edit-cour/:courid", isAuthenticated, editcourses);

//post /
router.post("/delete-cour/:courid", isAuthenticated, deletecourses);

//-------------projects------------
//post/
router.post("/add-pro", isAuthenticated, addprojects);

//post /
router.post("/edit-pro/:proid", isAuthenticated, editprojects);

//post /
router.post("/delete-pro/:proid", isAuthenticated, deleteprojects);

//---------skills--------
//post/
router.post("/add-skil", isAuthenticated, addskills);

//post /
router.post("/edit-skil/:skilid", isAuthenticated, editskills);

//post /
router.post("/delete-skil/:skilid", isAuthenticated, deleteskills);

//-----------accomplishments------------
//post/
router.post("/add-acc", isAuthenticated, addaccomplishments);

//post /
router.post("/edit-acc/:accid", isAuthenticated, editaccomplishments);

//post /
router.post("/delete-acc/:accid", isAuthenticated, deleteaccomplishments);













module.exports = router;