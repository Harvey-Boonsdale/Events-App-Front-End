import axios from "axios";
const url = "http://localhost:3001/";

export class ApiClient {
  addEvent(name, location, info, date, time, _id) {
    return this.authenticatedCall("post", url, {
      name,
      location,
      info,
      date,
      time,
      _id,
    });
  }
}
