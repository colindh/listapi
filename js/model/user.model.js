/**
 * User model with constructor to allow copying or creating new users.
 **/
class User {
  constructor(userData) {
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
    this.email = userData.email;
    this.password = userData.password;
    this.permissionLevel = userData.permissionLevel;
  }
}

const userSchema = new Schema({
   firstName: String,
   lastName: String,
   email: String,
   password: String,
   permissionLevel: Number
});

exports.User = User;
exports.userSchema = userSchema;
