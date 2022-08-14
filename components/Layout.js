import Head from "next/head"
import Image from "next/image"
import style from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"

const name = "ryosuketter"

export const siteTitle = "HOME"

const Layout = ({ children, home }) => {
  return (
    <div className={style.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={style.header}>
        {home ? (
          <>
            <Image
              src="/images/icon.png"
              alt="profile Logo"
              width={96}
              height={96}
              className={`${utilStyles.borderCircle} ${style.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                src="/images/icon.png"
                alt="profile Logo"
                width={76}
                height={76}
                className={utilStyles.borderCircle}
              />
            </Link>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={style.footer}>
          <Link href="/">Homeへ</Link>
        </div>
      )}
    </div>
  )
}

export default Layout
