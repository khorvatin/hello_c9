var sys = require("sys");
var http = require("http");

http.createServer(function(request, response) {
    var d = new Date();
    var dateString = d.toString();
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hello World!<BR>");
    response.write("Platform: " + process.platform + "<BR>");
    response.write(dateString);
    response.end();
}).listen(process.env.PORT);

sys.puts("Server running at http://hello_c9.khorvatin.c9.io:"+process.env.PORT+"/");
