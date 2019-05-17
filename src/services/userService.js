import http from "./httpService";

export function register({ username, password, name }) {
  return http.post("/users", {
    email: username,
    password,
    name
  });
}
