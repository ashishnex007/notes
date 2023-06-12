import express from 'express'

const app= express()
const port= 5555

import {
    getNotes,getNote,createNote
} from "./test.js"

app.get("/notes",(req,res)=>{
    res.send("this is the notes")
    const notes = getNotes()
    res.send(notes)
})

// app.use((err,req,res,next)=>{

// })

app.listen(port,()=>{
    console.log(`app listening at port ${port}`)
})