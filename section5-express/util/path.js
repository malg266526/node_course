const path = require("node:path");

// module.exports = path.dirname(require.main.filename);
module.exports = path.dirname(process.mainModule.filename);