const app = require("express")();
const cors = require("cors");

app.use(cors({
    origin: "*"
}))

app.get("/sections",(req,res)=>{
    res.send({
        marketing: [
            {
                name: "Google Ads",code: "0a"
            },
            {
                name: "FB Pixel",code: "1c"
            },
        ],
        advertising: [
            {
                name: "ADRoll",code: "2b"
            },
            {
                name: "DoubleClick",code: "3b"
            },
        ]
    })
})

app.get("/",(req,res)=>{
    res.send("home server")
})


app.listen(5000,console.log("running on port 5000"))