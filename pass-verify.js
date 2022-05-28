const bcrypt = require('bcrypt');

async function verifyPassword () {

  const customerPassword = 'admin12358493200'
  const hash = '$2b$10$aChnVVnTAqIg4BnKW6dyeuszdRm4SYvE2b2.bFbo8vYYbzqSlnWcm'
  const isMatch = await bcrypt.compare(customerPassword, hash)
  console.log(isMatch)
}

verifyPassword()
