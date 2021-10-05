import Cookies from "js-cookie";

class LocalService {
  setUserID(user_id) {
    Cookies.set("user_id", user_id);
  }

  getUserID() {
    return parseInt(Cookies.get("user_id"));
  }
}

const localService = new LocalService();

export default localService;
