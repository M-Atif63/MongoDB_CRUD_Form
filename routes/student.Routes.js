import express from 'express'
import { addStudents, addStudentsPage, showStudent, students } from '../constroller/student.Conroller.js'
const router = express.Router()

router.get('/students',students)

router.get('/students/:id',showStudent)

router.get('/add-students',addStudentsPage)

router.post('/add-students',addStudents)

// router.get('/update-students/:id',updateStudentsPage)

// router.put('/update-students/:id',addStudents)

export default router