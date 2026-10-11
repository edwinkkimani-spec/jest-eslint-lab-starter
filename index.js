function capitalizeWords(input) {
  const int = capitalizeWords(input);
  return int;
}
console.log(capitalizeWords("edwin"));

function filterActiveUsers(users) {
  return users.filter((user) => {
    return user.isActive === true;
  });
}

const users = [
  { name: "Neema", isActive: true },
  { name: "Aleko", isActive: false },
];

console.log(filterActiveUsers(users));

function filterinActiveUsers(users) {
  return users.filter((user) => {
    return user.isActive === false;
  });
}
console.log(filterinActiveUsers(users));

function Users1() {
  return users1;
}

const users1 = [{}, {}];
console.log(Users1(users1));

function logAction(action, name) {
  const timestamp = new Date().toLocaleString();
  console.log(`${name} Just made  ${action} at ${timestamp}`);
}
logAction("100million","Edwin");

// Utility Functions

/**
 * Capitalizes the first letter of each word in the input string.
 * @param {string} input - The input string.
 * @returns {string} - The formatted string.
 */
function capitalizeWords(input) {
  return input.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Filters active users from the array.
 * @param {Array} users - An array of user objects.
 * @returns {Array} - An array of active user objects.
 */
function filterActiveUsers(users) {
  return users.filter((user) => user.isActive);
}

/**
 * Logs an action performed by a user with a timestamp.
 * @param {string} action - The action performed.
 * @param {string} username - The name of the user.
 * @returns {string} - The log message.
 */


module.exports = { capitalizeWords, filterActiveUsers, logAction };
