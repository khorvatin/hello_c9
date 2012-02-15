var sys = require("sys");
var http = require("http");
var port = 1337;

http.createServer(function(request, response) {
    var d = new Date();
    var dateString = d.toString();
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hello World!<BR><BR>");
    var header;
    for (header in request.headers)
    {
        response.write("<b>request header " + header + ":</b> " + request.headers[header]+"<BR>");
    }
    response.write("Hello World!<BR><BR>");
    response.write("Platform: " + process.platform + "<BR>");
    response.write(dateString);
    response.end();
}).listen(port);

sys.puts("Server running at http://localhost:"+port+"/");
