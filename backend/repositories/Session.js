import prisma from "../prisma/lib.js";

class SessionRepository {
  static async createRefreshSession({ id, refreshToken, fingerprint }) {
    const session = {
      userId: id,
      refresh_token: refreshToken,
      fingerprint: fingerprint.hash,
    };
    return prisma.session.create({
      data: session,
    });
  }
  // static async getUserData(login) {
  //   return prisma.user.findUnique({
  //     where: {
  //       email: login,
  //     },
  //   });
  // }
}

export default SessionRepository;
