import axios from "axios";

class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
    this.loginData = JSON.parse(localStorage.getItem("login"));
  }

  registerUser(registrationData) {
    return this.client.post(this.url + "/users", registrationData);
  }

  getAllMessages(limit = 20) {
    return this.client.get(`${this.url}/messages?limit=${limit}`);
  }

  postUserMessages(message) {
    return this.client.post(
      `${this.url}/messages`,
      { text: message },
      { headers: { Authorization: `Bearer ${this.loginData.result.token}` } }
    );
  }
}

export default DataService;
