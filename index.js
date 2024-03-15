const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("User connected");
  console.log("");
  socket.on("message", (data) => {
    socket.emit.broadcast("message", data);
    console.log(data);
  });
});

http.listen(3000);
