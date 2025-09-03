const { addUser, updateUserEmail, deleteUser, getAllUsers } = require("./users-functions.js");


addUser(1, "Alice", "alice@example.com");
addUser(2, "Bob", "bob@example.com");
addUser(3, "Peter", "test@gmail.com")
updateUserEmail(1, "alice@newmail.com");
deleteUser(1);
getAllUsers();
