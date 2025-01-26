const tmp = require("tmp");

const tempFile = tmp.fileSync();
console.log(tempFile.name); // Temporary file path

// Write to the temporary file
const fs = require("fs");
fs.writeFileSync(tempFile.name, "Temporary data");

// Read from the temporary file
console.log(fs.readFileSync(tempFile.name, "utf8")); // Output: Temporary data
