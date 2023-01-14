import { pool } from "../../db.js"
import { getCoursesQuery, getCoursesByIdQuery, createCourseQuery, updateCourseQuery, deleteCourseQuery } from "./queries.js"


export const getCourses = (req, res) => {
    pool.query(getCoursesQuery, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })

}


export const  getCoursesById = (req, res) => {
    // const { id } = req.params

    const id = parseInt(req.params.id)
    
    pool.query(getCoursesByIdQuery, [id], (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
   
    })
    
}

export const createCourse = (req,res) => {
    const { title, age } = req.body

    pool.query(createCourseQuery, [title,age], (error, results) => {
        if(error) throw error

        res.status(201).send('The course was added succesfully')
    })
}


export const updateCourse = (req,res) => {
    const id = parseInt(req.params.id)

    const { title } = req.body

    pool.query(updateCourseQuery, [title, id], (error, results) => {
        if(error) throw error
        res.status(200).send('The course was updated')
    })
}

export const deleteCourse = (req,res) => {
    const id = parseInt(req.params.id)


    pool.query(deleteCourseQuery, [id], (error, results) => {
        if(error) throw error
        res.status(200).send('The course was deleted')
    })
}
