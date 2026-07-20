import Student from "../model/student.Schema.js"




export const students = async (req,res) => {
    try{
        const studentsData = await Student.find()
        // res.send(studentsData)
        res.render('students',{studentsData})
    }
    catch(error){
        res.send(error.message)
    }
}


export const showStudent = async (req,res) => {
    try{
        const student = await Student.findById(req.params.id)
        res.render('student',{student})
    }
    catch(error){
        res.send(error.message)
    }
}



export const addStudentsPage = async (req,res) => {
    try{
        res.render('addStudentsPage',{message:null})
    }
    catch(error){
        res.send(error.message)
    }
}


export const addStudents = async (req,res) => {
    try{
        const studentData = await Student.create(req.body)
        res.render('addStudentsPage',{message:"Student Added Successfully"})
    }
    catch(error){
        res.send(error.message)
    }
}