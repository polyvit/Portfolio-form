import prisma from "../prisma/lib.js";

class UserRepository {
  static async createUser({ login, hashedPassword }) {
    const user = { email: login, password: hashedPassword };
    return prisma.user.create({
      data: user,
    });
  }
  static async getUserData(login) {
    return prisma.user.findUnique({
      where: {
        email: login,
      },
    });
  }
}

export default UserRepository;
