const noble = require('@abandonware/noble');
require('dotenv').config()
const { io } = require("socket.io-client");

const scannerId = process.env.SCANNER_ID || 'TEST';
const serverAddress = process.env.SERVER_IP + ':' + process.env.PORT
const toTimeString = (date) => {
  return date.getHours()
  + ':'
  + date.getMinutes().toString().padStart(2, "0")
  + ':'
  + date.getSeconds().toString().padStart(2, "0")
  + ':'
  + date.getMilliseconds().toString().padStart(3, "0");
}

const socket = io(serverAddress);
console.log('connecting to ' + serverAddress)

socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});


noble.on('stateChange', async (state) => {
  console.log(state)
  if (state === 'poweredOn') {
    await noble.startScanningAsync([], true);
  }
});

noble.on('discover', async (peripheral) => {
  // if (peripheral.advertisement.localName)
  //   console.log('Found: ' + peripheral.advertisement.localName)

  if (
    peripheral.uuid === 'ee205aea6ae6063b179b455255982909' // mac
    || peripheral.uuid === '77907a1baad1' // linux
  ) {
    const address = peripheral.address && peripheral.address !== ''
      ? peripheral.address
      : peripheral.uuid;
    const row = `${scannerId},${address},${peripheral.rssi},${toTimeString(new Date())}`
    console.log(row)
    socket.emit('detection', row)
  }
});

