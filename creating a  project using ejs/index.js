let express=require("express")
let app=express()

let port=4000


// when we work with form body
app.use(express.urlencoded({extended:true}))


// set the view engine to ejs
app.set("view engine","ejs")



let nameList=[]

// getting file
app.get("/",(req,res)=>{
   res.render("home",{
    users:nameList
   })
})


// posting data
app.post("/",(req,res)=>{
    let name=req.body.name
    nameList.push(name)
    res.redirect("/")
})


app.listen(port,()=>{
    console.log(`your server is running at http://localhost:${port}`)
})