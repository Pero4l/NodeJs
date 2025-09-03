const { log } = require("console");
const fs = require("fs");

// NO.1 Create and Write to a File
// - Create a new file named students.txt.
// - Write a list of at least 5 student names inside it (one per line).

fs.writeFileSync("students.txt", "1. Peter\n2. Promise\n3. Nanbam\n4. NewKing\n5. Joshua");

  console.log("--------------1------------------");
  

  console.log("File created successfully");

  


// NO.2. Append Data to the File
// - Add 2 more student names at the end of the same file 
//  without overwriting the existing content.


fs.appendFileSync("students.txt", "\n6. Unique\n7. Chinemerem")
  
  console.log("--------------2------------------");

  console.log("Appending student successfully");
  


// NO.3. Read the File
// - Read the contents of students.txt.
// - Print each student's name on a new line in the console.


try {
  const data = fs.readFileSync("students.txt", "utf8"); 
  
  console.log("--------------3------------------");

  console.log("File content:\n", data);

} catch (err) {

  console.error("Error reading file:", err);
}


// 4. Rename the File
// - Rename students.txt to web2.txt.


try{
  fs.renameSync("students.txt", "web2.txt");

  console.log("--------------4------------------");

  console.log("Students.txt successfully renamed");

} catch (err) {

  console.log("Error renaming students.txt");

}



// 5. Copy the File
// - Make a copy of web2.txt and name it web2-advance.txt.


try {
  fs.copyFileSync("web2.txt", "web2-advance.txt");

  console.log("--------------5------------------");

  console.log("File copied successfully");

} catch (err) {

  console.error("Error copying file:", err);

}



  try{

  fs.writeFileSync("classB.txt", "Hello")

  console.log("File classB.txt successfully created");

  } catch (err){

    console.log("Error creating classB.txt");
    
  }




// 6. Delete a File
// - Delete classB.txt from the folder.


try{
  fs.unlinkSync("classB.txt")

  console.log("--------------6------------------");

  console.log("File successfully deleted");

} catch (err) {

  console.log("Error deleting file");
  
}




// 7. Move a File
// - Create a folder called backup.
// - Move (not copy) web2.txt into the backup folder.



fs.mkdir("backup", (err) => {

  if(err){

    console.log("Error creating folder");

    return
    
  }

  console.log("--------------7------------------");

  console.log("Folder created successfully");
  

})


try{

  fs.renameSync("web2.txt", "backup/web2.txt");

  console.log("--------------7------------------");

     console.log("File moved successfully to backup");

} catch (err) {

  console.log("Error moving file to backup");
  

}


