let express = require("express")
let app=express()
let port=4000

// how to use ejs in nodejs 
// 1st,  make the view engine of the app is ejs==> app.set("view engine", "ejs")
app.set("view engine","ejs")



app.get("/",(req,res)=>{
    let newUser="ibrahim"
    res.render("home",{      //the ejs file must include in views folder
        user:newUser
    })
})


app.listen(port,()=>{
    console.log(`your server is running at http://localhost:${port}`)
})
