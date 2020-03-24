var http = require("http");
var fs =require("fs");
var Path=require("path");
import Routes from './../router/index';
import React from 'react';
import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { StaticRouter,Route,Switch, matchPath } from 'react-router-dom';

const server = http.createServer(function (req, res) {

    let context={
        css:[]
    };
 
    const matchRoutes=[];//定义匹配的路由

    Routes.some(route=>{
        //遍历匹配相应的路由
        const match=matchPath(req.url,route);
        //如果匹配到了，就将匹配到的路由推进matchRoutes
        if(match){
            matchRoutes.push(route)
        }
    })

    matchRoutes.forEach(item=>{
        item&&item.loadData&&item.loadData()
    })

   
    const content = renderToString((
        <StaticRouter location={req.url} context={context}>
            <Switch>
                {
                    Routes.map(props=>(
                            <Route {...props} />
                    ))
                }
            </Switch>
        </StaticRouter>
    ));

    let cssStr = context.css.length ? context.css.join('\n') : '';

    const helmet=Helmet.renderStatic();

    let path = req.url;

    if(path.split(".").length===1){

        if (context.NotFound) {//404
            res.writeHead(404, { 'Content-Type': "text/html; charset=utf-8" });
            res.end(`
                <!DOCTYPE html>
                <html>
                    <head>
                        ${helmet.title.toString()}
                        ${helmet.meta.toString()}
                        <style>${cssStr}</style>
                    </head>
                    <body>
                        <div id="root">${content}</div>
                        <script src="/index.js"></script>
                    </body>
                </html>
            `)
            return ;
        }

        if (context.action==="REPLACE") {//404
            res.writeHead(302,{
                'Location': context.url
            })
            res.end();
            return ;
        }
         
        res.writeHead(200, { 'Content-Type': "text/html; charset=utf-8" });
    
        res.end(`
            <!DOCTYPE html>
            <html>
                <head>
                    ${helmet.title.toString()}
                    ${helmet.meta.toString()}
                    <style>${cssStr}</style>
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script src="/index.js"></script>
                </body>
            </html>
        `)
        
    }else if(path.split(".").length===2&&path.split(".")[1]==="js"){
        let filePath=Path.join("public",req.url);
        fs.readFile(filePath,function(err,data){
            if(err){
                throw err;
            }
            // 设置请求头，访问文件类型为js文件
            res.setHeader("Content-Type", "text/js");
            res.end(data);
        })
    }else if(path.split(".").length===2&&path.split(".")[1]==="ico"){
        let filePath=Path.join("public",req.url);
        fs.readFile(filePath,function(err,data){
            if(err){
                throw err;
            }
            // 设置请求头，访问文件类型为icon文件
            res.setHeader("Content-Type", "image/x-icon");
            res.end(data);
        })
    } 

})

server.listen(3000, '127.0.0.1',function(){
    console.log("node is listening...")
});