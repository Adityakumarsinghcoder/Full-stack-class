const http=require('http')
const PORT=3000
const server=http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='GET'){
        res.end("root route")
    }
    if(req.url==='/students' && req.method==='GET'){
        res.write(JSON.stringify({name:"John",age:20}))
        res.end()
    }
})
server.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})
