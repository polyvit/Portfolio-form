import Cookies from 'js-cookie'
import { TokensEnum } from '../../types'

// export const getAccessToken = () => {
//     const accessToken = Cookies.get(TokensEnum.ACCESS_TOKEN)
//     return accessToken || null
// }

// export const saveAccessToken = (accessToken: string) => {
//     Cookies.set(TokensEnum.ACCESS_TOKEN, accessToken, {
//         sameSite: 'strict',
//         domain: 'localhost',
//         expires: 7
//     })
// }

// export const deleteAccessToken = () => {
//     Cookies.remove(TokensEnum.ACCESS_TOKEN)
// }

class AuthHelper {
    static getAccessToken() {
        const accessToken = Cookies.get(TokensEnum.ACCESS_TOKEN)
        return accessToken || null
    }
    static saveAccessToken(accessToken: string) {
        Cookies.set(TokensEnum.ACCESS_TOKEN, accessToken, {
            sameSite: "none",
            expires: 7
        })
    }
    static deleteAccessToken() {
        Cookies.remove(TokensEnum.ACCESS_TOKEN)
    }
}

export default AuthHelper