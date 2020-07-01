import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return(
    <Layout>
    <SEO title="Home" />
    <div className="landing">
      <h3>Visual Artist</h3>
      <h3>Typography</h3>
      <h3>Print Work</h3>
      <h3>Branding</h3>
      <h3>Software Development</h3>
      <h3>UI/UX</h3>
      <h3>Packaging Design</h3>
    </div>
    </Layout>
  )
}

export default IndexPage
