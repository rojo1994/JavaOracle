import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,rest)=> {
    rest.send("<h1> Hello </h1>");
});

app.get("/contact", (req,rest)=> {
    rest.send("<h1> Contact Me </h1>");
});

app.get("/about", (req,rest)=> {
    rest.send("<h1> About Me </h1>");
});

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});