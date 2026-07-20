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


export const showStudentPage = async (req,res) => {
    try{
        const studentData = await Student.findById(req.params.id)
        res.render('student',{studentData})
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


export const updateStudentsPage = async (req,res) => {
    try {
        const studentId = await Student.findById(req.params.id)
        res.render('updateStudent',{message:null,studentId})
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}

export const updateStudents = async (req,res) => {
    try {
        const studentId = await Student.findById(res.params.id)
        if(!studentId){
            res.render('updateStudent',{message:"This Student does not exsist"})
        }
        await Student.updateOne(req.body)
        res.render('updateStudent',{message:"Student Updated Successfully"})
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}