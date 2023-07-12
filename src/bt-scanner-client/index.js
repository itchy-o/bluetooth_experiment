const noble = require('@abandonware/noble');
require('dotenv').config()

noble.on('stateChange', async (state) => {
  console.log(state)
  if (state === 'poweredOn') {
    await noble.startScanningAsync([], true);
  }
});

const toTimeString = (date) => {
  return date.getHours()
  + ':'
  + date.getMinutes().toString().padStart(2, "0")
  + ':'
  + date.getSeconds().toString().padStart(2, "0")
  + ':'
  + date.getMilliseconds().toString().padStart(3, "0");
}

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
    console.log(
      `${process.env.SCANNER_ID ?? 'TEST'},${address},${peripheral.rssi},${toTimeString(new Date())}`
    )
  }

});
