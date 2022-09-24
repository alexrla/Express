import express from 'express';
import exphbs from 'express-handlebars';

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

const courses = [

    {
        id: "1",
        name: "JavaScript",
        price: 27
    },
    {
        id: "2",
        name: "PHP",
        price: 33
    },
    {
        id: "3",
        name: "Python",
        price: 45
    }

];

app.get("/course/:id", (req, res) => {

    const id = req.params.id;

    const course = courses[parseInt(id) - 1];

    res.render("course", { course });

});

app.get("/", (req, res) => {

    res.render("home", { courses });

});

app.listen(3000, console.log("App funcionando!"));