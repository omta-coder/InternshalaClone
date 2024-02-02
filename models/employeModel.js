const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const employeModel = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true , "First Name is required"],
        minlength :[4,"First Name should be atleast 4 character long"],
    },
    lastname:{
        type:String,
        required:[true , "Last Name is required"],
        minlength :[4,"Last Name should be atleast 4 character long"],
    },
    contact:{
        type:String,
        required:[true , "Contact is required"],
        maxlength :[10,"Contact must not exceed 10 character"],
        minlength :[10,"Contact should be atleast 10 character long"],
    },
    email:{
        type:String,
        unique: true,
        required:[true , "Email is required"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        select:false,
        maxlength:[15,"Password should not exceed more than 15 characters"],
        minlength:[6,"Password should have atleast 6 characters"],
        // match:[],
    },
    resetPasswordToken : {
        type:String,
        default:"0",
    },
    organizationname:{
        type:String,
        required:[true , "organization Name is required"],
        minlength :[4,"organization Name should be atleast 4 character long"],
    },
    organizationlogo:{
        type:Object,
        default:{
            fileId:"",
            url:"https://plus.unsplash.com/premium_photo-1669653214121-60a9e4107271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
        }
    },
    internships:[
        {type:mongoose.Schema.Types.ObjectId, ref:"internship"}
    ],
    jobs:[{type:mongoose.Schema.Types.ObjectId, ref:"job"}],

},{timestamps:true});

employeModel.pre("save",function(){
    if(!this.isModified("password")){
        return;
    }
    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password,salt);
});

employeModel.methods.comparepassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

employeModel.methods.getjwttoken = function(){
    return jwt.sign({id:this.id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE,
    })
}

const Employe = mongoose.model("employe",employeModel);

module.exports = Employe;