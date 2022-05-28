const bcrypt = require('bcrypt');

async function hashPassword () {

  const customerPassword = 'admin12358493200'
  const generateHash = await bcrypt.hash(customerPassword, 10)
  console.log(generateHash)
}

hashPassword()
