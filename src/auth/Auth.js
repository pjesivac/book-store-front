import axios from "axios";
import apiCall from "./apiCall";

class Auth {
  getAuthStatus() {
    let token = JSON.parse(localStorage.getItem("login"));
    if (!!token) this.setJwt(token);
    return !!token ? true : false;
  }
  setJwt(token) {
    apiCall.defaults.headers.common["Authorization"] = `Token ${token}`;
  }
  async login(loginData) {
    axios
      .post("http://bd474173e194.ngrok.io/auth/token/login/", loginData)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem(
            "login",
            JSON.stringify(response.data.auth_token)
          );
          window.location.href = "/";
        } else console.log("Some error ocurred");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  logout() {
    localStorage.removeItem("login");
    window.location.href = "/login";
    //   let tok = JSON.parse(localStorage.getItem("login"));
    //   const headers = (apiCall.defaults.headers.common[
    //     "Authorization"
    //   ] = `Token ${tok}`);
    //   console.log(headers);
    //   axios
    //     .post("http://7d9575348cd9.ngrok.io/auth/token/logout/", {
    //       headers: headers,
    //     })
    //     .then(function (response) {
    //       if (response.status === 200) {
    //         localStorage.removeItem("login");
    //         return <Redirect to="/login" />;
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
  }
}

export const auth = new Auth();
