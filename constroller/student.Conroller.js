import Student from "../model/student.Schema.js"




export const students = async (req,res) => {
    try{
        const studentsData = await Student.find()
        res.send("request is working")
    }
    catch(error){
        res.send(error.message)
    }
}


export const showStudent = async (req,res) => {
    try{
        const student = await Student.findById(req.params.id)
        res.send("request is working" + student)
    }
    catch(error){
        res.send(error.message)
    }
}