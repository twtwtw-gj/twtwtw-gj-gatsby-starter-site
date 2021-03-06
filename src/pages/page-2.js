import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <p>こちらは単体記事のページである。</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
