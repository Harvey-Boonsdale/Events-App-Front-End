import axios from "axios";
// const url = "https://events-app-api.onrender.com";
const url = "http://localhost:3001/";

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }
  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: "secretString",
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

  // listEvents() {
  //   return this.authenticatedCall("get", url + "events", {
  //     headers: { authorization: "secretString" },
  //   });
  // }

  addEvent(name, location, info, date, time) {
    return this.authenticatedCall("post", url + "events", {
      name,
      location,
      info,
      date,
      time,
    });
  }

  // Function to edit event

  // Using Insomnia, send edit request to back end
  // Recreate request using Axios and send from this function
  // Inside that request, needs to be new post data
  // Send post inside Axios request
  editEvent(post, id) {
    return this.authenticatedCall("put", url + `events/${id}`, post);
  }

  // Function to delete event

  deleteEvent(id) {
    return this.authenticatedCall("delete", url + `events/${id}`);
  }
}
