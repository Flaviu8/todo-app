import pg from "pg"

const  { Pool } = pg


export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres", 
    password: "flaviu8",
    port: "5432"

})