import React from 'react';
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Card } from 'react-bootstrap'
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"

// import works from "../../components/works"

const Index = () => {

  const data = useStaticQuery(graphql`
    {
      allDataJson{
        edges {
          node {
            title
            description
            summary
            hero
            tools
            links{
              github
            }
          }
        }
      }
    }
  `)

// trying to load json onto this component 
// trying to use gatsby-config > lines 10 - 16
// after querying json then loop over array to display works, pass json data onto other routes/component pages. 
// each component will expect proptypes
  return (
    <Layout>
    {console.log(data.allDataJson)}
      <SEO title="Works" />
      <h1>{`<Works />`}</h1>

        {
          data.allDataJson.edges.map((works, index) => (
            <Card border="light" key={works.node.id}>
             <Link to={`works/${works.node.name}`}>
                <Card.Img variant="top" src={works.node.hero} />
              </Link>
              <Card.Body>
                <Link to={`works/${works.node.name}`}>
                  <Card.Title>{works.node.title}</Card.Title>
                </Link> 
                <Card.Text>{works.node.description}</Card.Text>
              </Card.Body>
            </Card>
          ))
        }

        <Card border="light">
          <Link to="works/posters">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1582289545106-efecf907f21e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          </Link> 
          <Card.Body>
            <Link to="works/posters">
              <Card.Title>356 Posters</Card.Title>
            </Link> 
            <Card.Text>
              One poster everyday for a year to develop aesthetics, refine story telling, and share beautiful design.
            </Card.Text>
          </Card.Body>
        </Card>

    </Layout>
  );
}

export default Index; 