import { APIDef, ApiInput } from "./ApiEndpoint";
import axios from "axios";
import { AuthService } from "../../auth/auth.interceptor";
import { JwtServices } from "../../auth/jwt.services";

export class RestApiService {
  public authSerivce = new AuthService();
  public jwtServices = new JwtServices();

  public invoke<T>(
    def: APIDef,
    apiInput: ApiInput = {},
    data?: T,
    queryParam?: any,
  ) {
    if (!def.isBlackListed) {
      this.authSerivce.setAuthorizationToken(
        `Bearer ${this.jwtServices.getJWTToken()}`
      );
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
    return this.invokeAPI(def.api(apiInput), def.method, data, queryParam);
  }

  private invokeAPI<T>(api: string, method: string, body?: T, queryMap?: any) {
    const headers: any = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };
    const httpOptions = { headers: headers, params: queryMap, observe: "body" };
    switch (method) {
      case "POST":
        return this.post<T>(api, body, httpOptions);
      case "GET":
        return this.get<T>(api, httpOptions);
      case "PUT":
        return this.put<T>(api, body, httpOptions);
      case "DELETE":
        return this.delete<T>(api, httpOptions);
      default:
        break;
    }
  }

  private post<T>(apiUrl: any, body: any, httpOptions: any) {
    return axios({
      method: "post",
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
      data: body,
    }).catch((err: any) => this.handleError<T>(err));
  }

  private get<T>(apiUrl: any, httpOptions: any) {
    return axios({
      method: "get",
      url: apiUrl,
      params: httpOptions.params,
      headers: httpOptions.headers,
    }).catch((err: any) => this.handleError<T>(err));
  }

  private put<T>(apiUrl: any, body: any, httpOptions: any) {
    return axios({
      method: "put",
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
      data: body,
    }).catch((err: any) => this.handleError<T>(err));
  }

  private delete<T>(apiUrl: any, httpOptions: any) {
    return axios({
      method: "delete",
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
    }).catch((err: any) => this.handleError<T>(err));
  }

  private handleError<T>(error: any) {
    return Promise.reject(error);
  }
}
