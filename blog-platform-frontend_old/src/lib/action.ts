"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const apiEndpoint: String = "http://localhost:5000";

export const handleLogout = async () => {
  localStorage.removeItem("token");
};

export const login = async (prevState: any, formData: FormData) => {
  const { username, password } = Object.fromEntries(formData);

  return await axios
    .post(apiEndpoint + "/api/login", { email: username, password: password })
    .then(async (res) => {
      console.log(JSON.stringify(res.data));
      await window.localStorage.setItem("token", String(res.data.token));

      const router = useRouter();
      router.refresh();
      router.push("/dashboard");
    })
    .catch((err) => {
      console.log(err);
      return { error: err.response?.data };
    });
};
export const register = async () => {
  localStorage.setItem("token", "");
};
