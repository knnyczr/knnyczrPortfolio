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
    <h1>Visual Artist</h1>
    <h1>Typography</h1>
    <h1>Print Work</h1>
    <h1>Branding</h1>
    <h1>Software Development</h1>
    <h1>UI/UX</h1>
    <h1>Packaging Design</h1>
  </div>
  </Layout>
  )
}

export default IndexPage
