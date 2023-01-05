const net = require('net');
const commonPorts = [20, 21, 22, 23, 25, 53, 80, 110, 119, 123, 143, 161, 443, 465, 587, 993, 995, 3306];

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

async function scanCommonPorts(ip, timeout=3000, additionalPorts=[]) {
  const results = [];
  let res = {};

  res.opened = [];
  res.closed = [];

  if (additionalPorts.length > 0) {
    var allPorts = [...commonPorts, ...additionalPorts];
  } else {
    var allPorts = commonPorts;
  }

  allPorts.sort(function(a, b){return a-b});

  console.log(allPorts);

  for (const port of allPorts) {
    const isOpen = await portScan(ip, port, timeout);
    if (isOpen) {
      results.push(port + ": Open");
      res.opened.push(port);

    } else {
      results.push(port + ": Closed");
      res.closed.push(port);
    }
  }
  return res;
}

module.exports = {
  portScan,
  scanCommonPorts
};