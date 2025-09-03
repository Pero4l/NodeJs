
const fs = require("fs");

const FILE_PATH = "./users.json";


function readUsers() {
  try {
    const data = fs.readFileSync(FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading users:", err);
    return [];
  }
}





function writeUsers(users) {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error("Error writing users:", err);
  }
}


function addUser(id, name, email) {
  const users = readUsers();
  users.push({ id, name, email });
  writeUsers(users);
  console.log(`User ${name} added!`);
}




function updateUserEmail(id, newEmail) {
  const users = readUsers();
  const user = users.find((u) => u.id === id);
  if (user) {
    user.email = newEmail;
    writeUsers(users);
    console.log(`User ${id}'s email updated!`);
  } else {
    console.log(`User with id ${id} not found.`);
  }
}


function deleteUser(id) {
  let users = readUsers();
  const initialLength = users.length;
  users = users.filter((u) => u.id !== id);
  if (users.length < initialLength) {
    writeUsers(users);
    console.log(`User ${id} deleted!`);
  } else {
    console.log(`User with id ${id} not found.`);
  }
}


function getAllUsers() {
  const users = readUsers();
  console.log("All Users:", users);
  return users;
}


module.exports = { addUser, updateUserEmail, deleteUser, getAllUsers };



