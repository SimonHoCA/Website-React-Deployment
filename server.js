let expressModule = require("express");
let {createProxyMiddleware} = require("http-proxy-middleware");

let serverPort = 80

let server = expressModule();

server.use(expressModule.static(__dirname+"/public"));

server.use(
    '/proxy2',
    createProxyMiddleware({
        target: 'http://localhost:2605',
        changeOrigin: true,
    }),
)

server.get("*",(request,response)=>{
    response.sendFile(__dirname+"/public/index.html")
})

server.listen(serverPort,()=>{
    console.log("React server started");
});