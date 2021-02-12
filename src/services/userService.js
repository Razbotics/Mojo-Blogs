import http from "./httpService";

const userEndpoint = "/users";

export async function getUsers() {
  return await http.get(userEndpoint);
}

export async function getUserById(id) {
  return await http.get(`${userEndpoint}/${id}`);
}
