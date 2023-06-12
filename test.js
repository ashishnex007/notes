import mysql from "mysql2"
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
}).promise()


//for displaying all notes
export async function getNotes(){
    const [rows] = await pool.query ("SELECT * FROM notex");
    return rows;
}

//for displaying 1 note based on id
export async function getNote(id){
    const [rows]= await pool.query(`
    select * from notex
    where id = ?
    `,[id])
    return rows;
}

//to create a note
export async function createNote(title,content){
   const result= await pool.query(`
    insert into notex(title,content) values(?,?)`,[title,content])
    return result;
}

const result=await getNotes()
console.log(result)