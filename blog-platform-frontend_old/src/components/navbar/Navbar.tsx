'use client'
import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import auth from "@/lib/auth";
import { Suspense, useEffect } from "react";
import Cookies from 'js-cookie'
const Navbar: React.FC = () => {
  const session = Cookies.get("loggedin")
  console.log(session)

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Blogs</Link>
      <div>
      <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
