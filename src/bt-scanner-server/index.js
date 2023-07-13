require('dotenv').config()

const { Server } = require("socket.io");

const io = new Server({ /* options */ });

io.on("connection", (socket) => {
  // ...
  console.log(socket)
});

io.listen(process.env.PORT);
