let fs = require('fs'); 
let requestHandeler= (req,res)=>{
    let url = req.url;
    let method = req.method;
    if(url === '/'){
        console.log("main wala part")
    
        res.write('<html>');
        res.write('<head> <title> Enter message </title> </head>');
        res.write(' <body> <form action="/message" method="POST"> <input type="text" name="message"/><button type="submit">Send</button> </body>');
        res.write('</html>');
        return res.end();   
  }
  else if(url==='/message' && method ==='POST'){
    console.log("message wala part")
     const body = [];
     req.on('data',(chunk)=>{
        body.push(chunk)
     });
    return req.on('end',()=>{
        const parsedBody = Buffer.concat(body).toString();
       let message= parsedBody.split('=')[1]
        console.log(parsedBody);
 
 
        fs.writeFile('file.txt', message, err =>{
           res.statusCode = 302;
           res.setHeader('location','/');
           return res.end();
        });
     })
 }
    console.log("else wala part")
         res.write('<html>');
         res.write('<head> <title> Hello TutorialsPoint </title> </head>');
         res.write(' <body> Hello </body>');
         res.write('</html>');
         res.end();
}
module.exports= requestHandeler;
// module.exports={
//    handeler:requestHandeler,
//    text:"this is text"
// }
// module.exports.handeler=requestHandeler;