const express = require ("express");
const app = express();

app.get("/", (req, res, next)=> {
    res.json({
        message:"Did you GET it?",
        metadata:{
            host: req.hostname,
            port: process.env.port,
            method: req.method,
        }
    });
})

app.get("/:id", (req, res, next)=> {
    res.json({
        message:"Did you GET it with id?",
        metadata:{
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: req.params.id
        }
    });
})

app.post("/", (req, res, next)=> {
    res.json({
        message:"Did you POST it?",
        metadata:{
            host: req.hostname,
            port: process.env.port,
            method: req.method,
        }
    });
})

app.patch("/:id", (req, res, next)=> {
    res.json({
        message:"Did you PATCH it with id?",
        metadata:{
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: req.params.id
        }
    });
})

app.delete("/:id", (req, res, next)=> {
    res.json({
        message:"Did you DELETE it with id?",
        metadata:{
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: req.params.id
        }
    });
})

//middleware modules
app.use((req, res, next)=>{
    const error = new Error("not found");
    error.status=404;
    next(error);
})
//middleware to send error nicely
app.use((error, req, res, next)=>{
    res.status(error.status || 500).json({
        error:{
            message:error.message, 
            status:error.status,
            method: req.method
        }});
})

module.exports = app;