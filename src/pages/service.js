// Step 1: Import your component
import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

// Step 2: Define your component
const ServicePage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo
        title="Service"
        description="Description about services of this website"
      >
        Service
      </Seo>
      <h1>{data.site.siteMetadata.title}</h1>
      <h1>Service</h1>
      <Link to="/">Home</Link> <br />
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  )
}
// Step 3: Export your component
export default ServicePage
