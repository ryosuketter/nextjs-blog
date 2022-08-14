import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Layout, { siteTitle } from "../components/Layout"
import utilStyles from "../styles/utils.module.css"
import styles from "../styles/Home.module.css"
import { getPostsData } from "../lib/post"

// SSG
export async function getStaticProps() {
  const allPostsData = getPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>私です</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>📝</h2>
        <div className={`${styles.grid}`}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id} className={styles.card}>
              <div>
                <Link href={`/posts/${id}`}>
                  <Image
                    src={`${thumbnail}`}
                    alt="thumbnail"
                    className={styles.thumbnailImage}
                    width={600}
                    height={300}
                  />
                </Link>
              </div>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.boldText}>{title}</a>
              </Link>
              <div>
                <small className={utilStyles.lightText}>{date}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
