var express = require('express')
const SERVER_PORT = 8089
var app = express()

app.get("/", (req, res) =>{
    //res.status(200).send("<h1>Welcome to Express Server</h1>")
    res.send("<h1>Welcome to Express Server</h1>")
    //res.end() ends the response but not nessesary rn
})
app.get("/home", (req, res) =>{
    res.send("<h1>Home Page</h1>")
})

app.post("/employees", (req, res) => {
    const e = {
        e_id: 1,
        e_fname: "Ryan",
        e_lname: "Lee",
        e_email: "ryan.lee3@georgebrown.ca",
        e_gender: "Male",
        e_salary: 33.25
    }
    //res.send(p)
    //res.send(JSON.stringify(p))
    res.json(e)
})

//http://localhost:8089/emp/employees/Ryan/Lee
app.get("emp/employees/:e_fname/:e_lname", (req, res) => {
    req.json(req.params)
})
app.listen(SERVER_PORT, () =>{
    console.log(`Server running at localhost:${SERVER_PORT}`)
})
/**
 * app.post("/signup", (req, res) =>{})
 * app.post("/login", (req, res) => {})
 * app.get("/employees", (req, res) => {})
 * app.post("/employees", (req, res) =>{})
 * app.get("/employees/{eid}", (req, res) =>{})
 * app.put("/employees/{eid}", (req, res) => {})
 * app.delete("/employees?eid=xxx", (req,res) => {})
 */


