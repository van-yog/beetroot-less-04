const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

// function readFile(path, encoding) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, encoding, (err, data) => {
//       if (err) throw reject(err);
//       else resolve(data);
//     });
//   });
// }

readFile(__filename, "utf-8")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
