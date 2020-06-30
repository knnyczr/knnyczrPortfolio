import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Carousel } from 'react-bootstrap'

const IndexPage = () => {

  // const data = useStaticQuery(graphql`{
  //   allFile(
  //       filter: {
  //         absolutePath: { regex: "/landing/"}
  //         extension: { regex: "/(png)/" }
  //       }
  //     ) {
  //       edges{
  //         node {
  //           publicURL
  //         }
  //       }
  //     }
  // }
  // `)
// console.log(data)
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
