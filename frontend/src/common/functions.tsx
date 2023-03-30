import axios from "axios";
import { useState } from "react";
import Loader from "../components/loader";

export function Loading(value: boolean) {
  const [isLoading, setIsLoading] = useState(false);
  if (value === true) {
    setIsLoading(true);
  } else {
    setIsLoading(false);
  }

  return <>{isLoading === true ? <Loader /> : null}</>;
}

export function checkAuth() {
  const url = "http://localhost:8000";
  const [isAuth, setIsAuth] = useState(false);
  axios.get(`${url}/checkAuth`).then((res) => {
    if (res.status === 200) {
      return setIsAuth(true);
    } else {
      return setIsAuth(false);
    }
  });
  return isAuth;
}
