import express  from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var todoArray = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    res.render("./index.ejs");
})


app.post("/submit", (req, res)=>{
    todoArray.push(req.body["Todo"]);
    res.render("./index.ejs", {TextDisplay: todoArray});

});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

