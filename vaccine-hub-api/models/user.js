const { UnauthorizedError } = require("../utils/errors");

class User {
  static async login(creds) {
    // user submit username and password
    // if fields are missing throw error

    // lookup user in db by email
    // if user is found, compare passwords
    // if match return user

    // if fields don't match
    throw new UnauthorizedError("Invalid email/password");
  }

  static async register(creds) {}
}

module.exports = User;
