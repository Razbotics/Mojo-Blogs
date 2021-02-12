import http from "./httpService";

const postsEndpoint = "/posts";

export async function getPost(id) {
  const { data } = await http.get(`${postsEndpoint}/${id}`);
  return data;
}

export async function getPostComments(id) {
  const { data } = await http.get(`${postsEndpoint}/${id}/comments`);
  return data;
}

export async function getUserPosts(id) {
  const { data } = await http.get(`${postsEndpoint}?userId=${id}`);
  return data;
}

export async function getUserPostsByLimit(id, skip = 0, limit = 5) {
  return await http.get(
    `${postsEndpoint}?userId=${id}&_start=${skip}&_limit=${limit}`
  );
}

export async function deletePost(id) {
  const { data } = await http.delete(`${postsEndpoint}/${id}`);
  return data;
}
