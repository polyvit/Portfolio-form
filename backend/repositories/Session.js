import Session from "../models/Session.js";

class SessionRepository {
  static async createRefreshSession({ id, refreshToken, fingerprint }) {
    const newSession = new Session({
      userId: String(id),
      refresh_token: refreshToken,
      fingerprint: fingerprint.hash,
    });
    await newSession.save();
    return newSession;
  }
  static async deleteRefreshSession(refreshToken) {
    const result = await Session.findOneAndDelete({ refreshToken });
    return result;
  }
}

export default SessionRepository;
