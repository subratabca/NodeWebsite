var fs=require('fs');
var http=require('http');


var server=http.createServer(function (req,res) {
    if(req.url=="/"){
        var myData = fs.readFileSync('Home.html');
        res.writeHead(200,{'content-type':'text/html'});
        res.write(myData);
        res.end();
    }
    else if(req.url=="/About"){
        var myData = fs.readFileSync('About.html');
        res.writeHead(200,{'content-type':'text/html'});
        res.write(myData);
        res.end();
    }
    else if(req.url=="/Contact"){
        var myData = fs.readFileSync('Contact.html');
        res.writeHead(200,{'content-type':'text/html'});
        res.write(myData);
        res.end();
    }
    else if(req.url=="/Terms"){
        var myData = fs.readFileSync('Terms.html');
        res.writeHead(200,{'content-type':'text/html'});
        res.write(myData);
        res.end();
    }
});

server.listen(5050);
console.log("server is running")