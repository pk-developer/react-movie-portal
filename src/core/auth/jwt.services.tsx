import jwtDecode from "jwt-decode";
import { CookieStorage } from "cookie-storage";
const cookies = new CookieStorage();
export class JwtServices {
  public getJWTToken() {
    return cookies.getItem("access_token");
  }

  public getDecodedJWTToken(): any {
    try {
      let result: any = this.getJWTToken();
      return jwtDecode(result);
    } catch {
      console.log("not the valid jwt token");
    }
  }

  public isLogin() {
    return this.getJWTToken() != null;
  }

  public isRememberMe() {
    return cookies.getItem('remember');
  }

}
