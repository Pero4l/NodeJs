const fs = require("fs");
const path = require("path");


const folderPath = "./watched";


if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
  console.log(`Created folder: ${folderPath}`);
}

fs.watch(folderPath, (eventType, filename) => {
  if (filename) {
    const filePath = path.join(folderPath, filename);
    let action = "";

    if (eventType === "rename") {
      
      if (fs.existsSync(filePath)) {
        action = "added";
      } else {
        action = "deleted";
      }
    } else if (eventType === "change") {
      action = "modified";
    }

    console.log(
      `[${new Date().toLocaleString()}] File "${filename}" was ${action}.`
    );
  } else {
    console.log("Filename not provided");
  }
});

console.log(`Watching folder: ${folderPath}`);
