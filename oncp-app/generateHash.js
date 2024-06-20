const bcrypt = require('bcryptjs');

async function generateHashedPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);
}

generateHashedPassword('123123'); // Replace 'yourpasswogitrd' with the desired password
