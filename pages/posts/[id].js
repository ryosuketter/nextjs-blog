import Head from "next/head"
import Layout from "../../components/Layout"
import { getAllPostIds, getPostData } from "../../lib/post"
import utilStyles from "../../styles/utils.module.css"

export async function getStaticPaths() {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData,
    },
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.title} />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <span className={utilStyles.lightText}>{postData.date}</span>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }}></div>
      </article>
    </Layout>
  )
}
