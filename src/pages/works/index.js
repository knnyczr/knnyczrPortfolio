import React from 'react';
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Card } from 'react-bootstrap'
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

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

  const projects = data.allDataJson.edges;

  return (
    <Layout>
      <SEO title="Works" />
      <h1>{`<Works />`}</h1>
        {
          projects.map(works => (
            <Card 
            border="light" key={works.node.id}
            style={{
              marginBottom: '1.5em',
            }}
            >
             <Link to={`works/${works.node.title}`}>
                <Img 
                fluid={works.node.image.childImageSharp.fluid} 
                style={{
                  height: '40vh',
                }}
            />
              </Link>
              <Card.Body>
                <Link to={`works/${works.node.title}`}>
                  <Card.Title>{works.node.title}</Card.Title>
                </Link> 
                <Card.Text>{works.node.description}</Card.Text>
              </Card.Body>
            </Card>
          ))
        }
    </Layout>
  );
}

export default Index; 