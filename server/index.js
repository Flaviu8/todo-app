import express from "express";
import  coursesRoutes  from "./src/courses/routes.js"



const app = express()
const PORT = 5005

app.use(express.json())


app.listen(PORT, () => console.log(`Server is listening to ${PORT}`))


app.use('/courses', coursesRoutes)