import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Carousel } from 'react-bootstrap'
import '../components/scss/landingIndex.scss'

const IndexPage = () => {

  const data = useStaticQuery(graphql`{
    allFile(
        filter: {
          absolutePath: { regex: "/landing/"}
          extension: { regex: "/(png)/" }
        }
      ) {
        edges{
          node {
            publicURL
          }
        }
      }
  }
  `)
console.log(data)
  return(
    <Layout>
    <SEO title="Home" />
    <Carousel
      style={{
        // height: '80vh'
      }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.allFile.edges[4].node.publicURL}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.allFile.edges[6].node.publicURL}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.allFile.edges[7].node.publicURL}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Layout>
  )
}

export default IndexPage
