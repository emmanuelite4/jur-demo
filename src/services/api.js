import axiosHelper from "../utils/axiosHelper";
import localService from "./localService";

const API_USER = "/contacts";
const API_CONVERSATIONS = "/conversations";

class Api {
  getUsers() {
    return axiosHelper.get(API_USER);
  }

  getConversations() {
    const user_id = localService.getUserID();
    return axiosHelper.get(API_CONVERSATIONS, {
      headers: { user_id: user_id },
    });
  }

  addConversation(data) {
    const user_id = localService.getUserID();
    return axiosHelper.post(API_CONVERSATIONS, data, {
      headers: { user_id: user_id },
    });
  }

  getActiveConversation(id) {
    const user_id = localService.getUserID();
    return axiosHelper.get(`${API_CONVERSATIONS}/${id}`, {
      headers: { user_id: user_id },
    });
  }

  postMessage({ id, content }) {
    console.log(id, content);
    const user_id = localService.getUserID();
    return axiosHelper.post(
      `${API_CONVERSATIONS}/${id}/messages`,
      { content },
      {
        headers: { user_id: user_id },
      }
    );
  }

  getMessages(id) {
    const user_id = localService.getUserID();
    return axiosHelper.get(`${API_CONVERSATIONS}/${id}/messages`, {
      headers: { user_id: user_id },
    });
  }
}

export default new Api();
