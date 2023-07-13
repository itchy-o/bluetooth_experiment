require('dotenv').config()

const { Server } = require("socket.io");

const io = new Server({ /* options */ });

io.on("connection", (socket) => {
  console.log("connection found" + socket.id)

  socket.on('detection', (row) => {
    console.log(row)
  })

});

io.listen(process.env.PORT);
