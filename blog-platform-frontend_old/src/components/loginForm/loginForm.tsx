"use client";

import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

interface LoginFormProps {
  login: any;
}
const LoginForm: React.FC<LoginFormProps> = ({login}) => {

  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error && <div className={styles.error}>{state.error}</div>}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
