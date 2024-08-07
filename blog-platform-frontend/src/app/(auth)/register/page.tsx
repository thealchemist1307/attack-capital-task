"use client"

import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";
import axios from "axios";
import { apiPoint } from "@/lib/apiPoint";
import { useRouter } from "next/navigation";
const RegisterPage = () => {
  const router=useRouter()
  const register = async (prevState: any, formData: FormData) => {
    const { email, password } = Object.fromEntries(formData);
  
    return await axios
      .post(apiPoint.base + "/api/signup", { email: email, password: password })
      .then(async (res) => {
        router.replace("/login")
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
        <RegisterForm register={register}/>
      </div>
    </div>
  );
};

export default RegisterPage;
