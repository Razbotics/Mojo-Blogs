import http from "./httpService";

const userEndpoint = "/users";

export async function getUsers() {
  return await http.get(userEndpoint);
}
