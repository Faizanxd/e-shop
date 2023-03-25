import axios from "axios";

export async function useAuth() {
  const url = "http://localhost:8000";
  let auth = false;

  const res = await axios.get(`${url}/auth`);

  if (res.data.auth) {
    auth = true;
  }

  console.log(auth);
  return auth;
}
