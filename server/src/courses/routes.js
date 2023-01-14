import express  from "express";
import { getCourses, getCoursesById, createCourse, updateCourse, deleteCourse } from "./controllers.js"

const router = express.Router()


router.get('/', getCourses )
router.get('/:id',  getCoursesById)
router.post('/', createCourse)
router.put('/:id', updateCourse)
router.delete('/:id', deleteCourse)


export default router


