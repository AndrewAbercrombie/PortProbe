const net = require('net');

async function portScan(ip, port, timeout = 3000) {
  return new Promise((resolve, reject) => {
    const socket = new net.Socket();

    socket.setTimeout(timeout);
    socket.on('timeout', () => {
      resolve(false);
      socket.destroy();
    });

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