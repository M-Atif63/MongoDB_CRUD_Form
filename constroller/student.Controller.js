import mongoose from "mongoose"
import Student from "../model/student.Schema.js"


export const students = async (req, res) => {
    try {
        const studentsData = await Student.find()
        // const stuData = 
        res.render('students', { studentsData })
    }
    catch (error) {
        res.send(error.message)
    }
}


export const showStudentPage = async (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.render('pageNotFound', { message: "Invalid Id" })
    }

    try {
        const studentData = await Student.findById(req.params.id)
        if (!studentData) return res.render('pageNotFound', { message: "Student Not Found" })
        res.render('student', { studentData })
    }
    catch(error){
        res.render('ISE', { error: error })
    }
}


export const addStudentsPage = async (req, res) => {
    try {
        res.render('addStudentsPage', { message: null })
    }
    catch (error) {
        res.send(error.message)
    }
}


export const addStudents = async (req, res) => {
    try {
        const studentData = await Student.create(req.body)
        res.render('addStudentsPage', { message: "Student Added Successfully" })
    }
    catch (error) {
        res.send(error.message)
    }
}


export const updateStudentsPage = async (req, res) => {
    
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.render('pageNotFound', { message: "Invalid Id" })
    }
    
    try {
        const studentId = await Student.findById(req.params.id)
        if (!studentId) return res.render('pageNotFound', { message: "Student Not Found" })
        res.render('updateStudent', { message: null, studentId })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const updateStudents = async (req, res) => {
    
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.render('pageNotFound', { message: "Invalid Id" })
    }
    
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body)
        if (!student) return res.render('pageNotFound', { message: "Student Not Found" })
        res.redirect('/students')
    } catch (error) {
        res.status(500).send(error.messsage)
    }   
}


export const deleteStudent = async (req, res) => {
    
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.render('pageNotFound', { message: "Invalid Id" })
    }
    
    try {
        const { id } = req.params
        const student = await Student.findByIdAndDelete(id);
        if (!student) return res.render('pageNotFound', { message: "Student Not Found" })
        res.redirect('/students')
    } catch (error) {
        res.status(500).send(error.messsage)
    }
}

