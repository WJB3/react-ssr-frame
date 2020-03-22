var http = require("http");
var fs =require("fs");
var Path=require("path");
import Routes from './../router/index';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter,Route } from 'react-router-dom';

const server = http.createServer(function (req, res) {
    const content = renderToString((
        <StaticRouter location={req.path} context={{}}>
            {
                Routes.map(props=>(
                        <Route {...props} />
                ))
            }
        </StaticRouter>
    ))

    let path = req.url;
    console.log(path)
    if(path.split(".").length===1){
        res.writeHead(200, { 'Content-Type': "text/html; charset=utf-8" });
    
        res.end(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>REACT SSR</title>
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script src="/index.js"></script>
                </body>
            </html>
        `)
        
    }else if(path==="/index.js"){
        let filePath=Path.join("public",req.url);
        fs.readFile(filePath,function(err,data){
            if(err){
                throw err;
            }
            // 设置请求头，访问文件类型为js文件
            res.setHeader("Content-Type", "text/js");
            res.end(data);
        })
    } 

})

server.listen(3000, '127.0.0.1');