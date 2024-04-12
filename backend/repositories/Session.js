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
  static async deleteRefreshSession(refreshToken) {
    return prisma.session.delete({
      where: {
        refresh_token: refreshToken,
      },
    });
  }
}

export default SessionRepository;
