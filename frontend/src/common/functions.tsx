import axios from "axios";
import { useState } from "react";

export function useAuth() {
  const url = "http://localhost:8000";
  const [auth, setAuth] = useState(false);

  axios
    .get(`${url}/auth`)
    .then((res) => {
      if (res.data.auth) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    })
    .catch((err) => {
      setAuth(false);
      console.log(err);
    });

  return auth;
}
