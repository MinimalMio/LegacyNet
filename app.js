const net = require('net');

let count = 0;
let serverName = "LegacyNet";

let server = net.createServer(function (conn) {
    count++;

    conn.write(
        '> Welcome to ' + serverName + '!\n'
        + '> ' + count + ' other people has connected this server.\n'
        + '> For start, type your nickname here: '
    );

});

server.listen(3000, function() {
    console.log("> Server is listening on port 3000");
});