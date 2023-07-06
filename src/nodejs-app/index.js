const noble = require('@abandonware/noble');

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
  + date.getSeconds().toString().padStart(2, "0");
}

noble.on('discover', async (peripheral) => {
  console.log(
    peripheral.uuid,
    peripheral.rssi,
    toTimeString(new Date())
  )
});
