const net = require('net');

async function portScan(ip, port) {
  return new Promise((resolve, reject) => {
    const socket = new net.Socket();

    socket.on('error', (error) => {
      resolve(false);
    });

    socket.connect(port, ip, () => {
      resolve(true);
      socket.destroy();
    });
  });
}

module.exports = {
  portScan
};