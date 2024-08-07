"use client";

import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface RegisterFormProps {
  register: any;
}
const RegisterForm: React.FC<RegisterFormProps> = ({register}) => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button>Register</button>
      {state?.error && <div>{state.error}</div>}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
