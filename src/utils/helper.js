import localService from "../services/localService";

export const isUser = (id) => id === localService.getUserID();
export const isUserInArray = (arr) =>
  arr.find((id) => id === localService.getUserID());
