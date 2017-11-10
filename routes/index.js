module.exports = function Route(app, server) {
    app.get('/', function (req, res){
        res.render("index");
    })
    io.sockets.on('connection', function (socket) {
        // console.log("Client/socket is connected!");
        // console.log("Client/socket id is: ", socket.id);

        socket.on("count", function (data) {
            count++;
            socket.emit('counter', {response: count});
        });

        socket.on("reset", function(data) {
            count = 0;
            socket.emit('counter', {response: count});
        });
    });
};