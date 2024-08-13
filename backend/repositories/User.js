import User from "../models/User.js";

class UserRepository {
  static async createUser({ email, hashedPassword }) {
    const user = new User({ email, password: hashedPassword });
    const result = await user.save();
    return result;
  }
  static async getUserData(email) {
    const user = await User.findOne({ email });
    return user;
  }
}

export default UserRepository;
