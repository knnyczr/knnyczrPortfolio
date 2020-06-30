import React from 'react';
// import { Link } from "gatsby"
import Layout from "../../components/layout"
// import { Card } from 'react-bootstrap'
import SEO from "../../components/seo"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'

const Index = () => {

  // const data = useStaticQuery(graphql`
  //   {
  //     allDataJson{
  //       edges {
  //         node {
  //           title
  //           description
  //           summary
  //           tools
  //           links{
  //             github
  //           }
  //           image {
  //             childImageSharp{
  //               fluid(maxWidth: 2000){
  //                 ...GatsbyImageSharpFluid
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const context = useContext(DataContext)
  // const projects = data.allDataJson.edges;
  return (
    <Layout>
      {/* <DataContext.Consumer> */}
      <SEO title="Works" />
      <h1>works</h1>
        {/* {
          projects.map((works, index) => (
            <Card 
            border="light" 
            key={works.node.id}
            style={{
              marginBottom: '2em',
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
        } */}
        {/* </DataContext.Consumer> */}
    </Layout>
  );
}

export default Index; 