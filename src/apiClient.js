import axios from "axios";
// const url = "https://events-app-api.onrender.com";
const url = "http://localhost:3001/";

export class ApiClient {
  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: true,
      },
      data,
    }).catch((error) => {
      if (error.response.status === 403) {
        this.logoutHandler();
        return Promise.reject();
      } else {
        throw error;
      }
    });
  }

  addEvent(name, location, info, date, time) {
    return this.authenticatedCall("post", url + "events", {
      name,
      location,
      info,
      date,
      time,
    });
  }
}
