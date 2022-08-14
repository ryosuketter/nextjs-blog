import Head from "next/head"
import Image from "next/image"
import style from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"

const name = "ryosuketter"

export const siteTitle = "Blog"

const Layout = ({ children, home }) => {
  return (
    <div className={style.container}>
      <Head>
        <title>First</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={style.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              alt="profile Logo"
              className={`${utilStyles.borderCircle} ${style.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/profile.png"
              alt="profile Logo"
              className={utilStyles.borderCircle}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <>
          <Link href="/">Home</Link>
        </>
      )}
    </div>
  )
}

export default Layout
