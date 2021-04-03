import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>こんにちは</h1>
    <p>これはtwtwtw-gjが作成したGitHub Pages Gatsby.jsのページです。</p>
    <p><a href="github.com/twtwtw-gj">GitHub URL</a></p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">単体ページへ行く</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
