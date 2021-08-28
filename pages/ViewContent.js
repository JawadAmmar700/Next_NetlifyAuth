import React from "react"
import Header from "../components/Header"
import { useStateValue } from "../Store"
import styles from "../styles/Home.module.css"
import { useRouter } from "next/router"

const ViewContent = () => {
  const [{ user }, dispatch] = useStateValue()
  const router = useRouter()
  if (!user) router.push("/")
  return (
    <div>
      <Header />
      <img
        src="https://images.ctfassets.net/rnum3hpw9twb/2Uf2PdlUCcewOWEa88u2Ck/1fd31f2696350c1c6dc40d12ed4f6a2d/banner_copy.png"
        alt=""
        className={styles.img}
      />
      <p className={styles.content}>
        {user &&
          "Netlify's Identity service is a plug-and-play microservice for handling site functionalities like signups, logins, password recovery, user metadata, and roles. You can use it from single page apps instead of rolling your own, and integrate with any service that understands JSON Web Tokens (JWTs)."}
      </p>
    </div>
  )
}

export default ViewContent
