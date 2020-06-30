import React from 'react';
import { Link } from "gatsby"
import Layout from "../../components/layout"
// import { Card } from 'react-bootstrap'
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import '../../components/scss/works.scss'

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson{
        edges {
          node {
            title
            description
            summary
            tools
            links{
              github
            }
            image {
              childImageSharp{
                fluid(maxWidth: 2000){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allDataJson.edges
  console.log(projects)
  return (
    <Layout>
      <SEO title="Works" />
      <div className="works">
        <h1>work</h1>
        <ul>
          <li>All</li>
          <li>Branding</li>
          <li>Digital Art</li>
          <li>Print Work</li>
          <li>Software Development</li>
        </ul>
        {
          projects.map((project, index) => (
            <Link to={`works/${project.node.title}`}>
                <Img 
                  fluid={project.node.image.childImageSharp.fluid} 
                  style={{
                    height: '20vh',
                  }}
                />
                <h2>{project.node.title}</h2>
            </Link>
          ))
        }
      </div> 
    </Layout>
  );
}

export default Index; 