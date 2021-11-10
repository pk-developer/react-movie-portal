import axios from "axios";
import { CookieStorage } from "cookie-storage";
import { ApiEndpoint } from "../services/https/ApiEndpoint";
const cookies = new CookieStorage();

export class AuthService {
  public setAuthorizationToken = (token: any) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };
  public loginAndSetToken = (loginData: any): any => {
    return new Promise((resolve, reject) => {
      axios
      .get(ApiEndpoint.SIGN_IN.api()).then((res: any) => {
          if (res && res.data) {
            const date = new Date();
            const days = 30;
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            cookies.clear();
            cookies.setItem("access_token", res.data.access_token, {
              expires: date,
            });
            cookies.setItem("remember", loginData.rememberme, {
              expires: date,
            });
            this.setAuthorizationToken(res.data.access_token);
            resolve(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  public logout() {
    cookies.clear();
  }
}
