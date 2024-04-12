import Cookies from 'js-cookie'
import { TokensEnum } from '../../types'

class AuthHelper {
    static getAccessToken() {
        const accessToken = Cookies.get(TokensEnum.ACCESS_TOKEN)
        return accessToken || null
    }
    static saveAccessToken(accessToken: string) {
        Cookies.set(TokensEnum.ACCESS_TOKEN, accessToken, {
            sameSite: "none",
            secure: true,
            expires: 7
        })
    }
    static deleteAccessToken() {
        Cookies.remove(TokensEnum.ACCESS_TOKEN)
    }
}

export default AuthHelper