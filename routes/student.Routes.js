import express from 'express'
import { addStudents, addStudentsPage, showStudentPage, students, updateStudentsPage } from '../constroller/student.Controller.js'
const router = express.Router()

router.get('/students',students)

router.get('/students/:id',showStudentPage)

router.get('/add-students',addStudentsPage)

router.post('/add-students',addStudents)

router.get('/update-students/:id',updateStudentsPage)

router.put('/update-students/:id',addStudents)

export default router