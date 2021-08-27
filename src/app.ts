import express from "express";
import db from "./config/database";
import studentRouter from './student/route'



db.authenticate().then(async () => {
    console.log('database connected')
}).catch((e: any) => {
    console.log(e.message)
})


const app = express();
const port = 3000;

app.use(express.json());


app.use(studentRouter);


app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`)
})