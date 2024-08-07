
"use client"
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'
const links = [
  {
    title: "Homepage",
    path: "/",
  },
];

interface LinksProps {
  session: String|null|undefined;
}
const Links: React.FC<LinksProps> = ({ session }) => {
  const router=useRouter()
  console.log(session)
  const handleLogout = async () => {
   await localStorage.removeItem("token");
   await localStorage.removeItem("authorId");
   Cookies.remove('loggedin')
   router.replace("/")
   router.refresh()
  };
  return (
    <div className={styles.container} suppressHydrationWarning >
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session=='true' ? (
          <>
            <NavLink item={{ title: "Dashboard", path: "/dashboard" }} />
              <button onClick={handleLogout} className={styles.logout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink item={{ title: "Login", path: "/login" }} />
            
          </>
        )}
      </div>
      
    </div>
  );
};

export default Links;
