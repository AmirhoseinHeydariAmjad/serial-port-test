// Import dependencies
const {SerialPort} = require("serialport");

// Defining the serial port
const port = new SerialPort({
    path: 'COM5',
    baudRate: 57600,
  })
// Read the data from the serial port
port.on("data", (line) => console.log(JSON.parse(line.toString("utf8"))));