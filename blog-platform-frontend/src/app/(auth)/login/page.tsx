"use client"
import LoginForm from "@/components/loginForm/loginForm";
import styles from "./login.module.css";
import axios from "axios";
import { apiPoint } from "@/lib/apiPoint";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'

const LoginPage = () => {
  const router=useRouter()
  const login = async (prevState: any, formData: FormData) => {
    const { email, password } = Object.fromEntries(formData);
  
    return await axios
      .post(apiPoint.base + "/api/login", { email: email, password: password })
      .then(async (res) => {
        await localStorage.setItem("token", String(res.data.token));
        await localStorage.setItem("authorId", String(res.data.authorId));
        Cookies.set('loggedin', "true")
        router.replace("/dashboard")
        router.refresh()

      })
      .catch((err) => {
        console.log(err);
        return { error: err.response?.data };
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm login={login} />
      </div>
    </div>
  );
};

export default LoginPage;
