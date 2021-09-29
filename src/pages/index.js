import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  // const { markdownRemark } = data // data.markdownRemark holds our post data
  // const { frontmatter, html } = markdownRemark

  // console.log({ frontmatter, html })
  console.log(data)

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/about/">About</Link> <br />
        <Link to="/service/">Service</Link> <br />
      </p>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allFile {
      nodes {
        name
      }
    }
  }
`
