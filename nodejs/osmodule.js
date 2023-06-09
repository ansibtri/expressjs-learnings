const { Console } = require('console');
const os = require('os');
console.log("Free memory:"+os.freemem());
console.log("Home Directory:"+os.homedir());
console.log("Platform: "+os.platform());
console.log(os.networkInterfaces());
console.log("OS Type: "+os.type());
console.log("Total Memory: "+os.totalmem());
console.log("Total usage: "+os.uptime());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.release());
console.log(os.machine())
console.log(os.arch());