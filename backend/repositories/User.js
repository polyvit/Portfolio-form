import prisma from "../prisma/lib.js";

class UserRepository {
  static async createUser({ email, hashedPassword }) {
    const user = { email, password: hashedPassword };
    return prisma.user.create({
      data: user,
    });
  }
  static async getUserData(email) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}

export default UserRepository;
