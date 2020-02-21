import React from 'react';
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Card } from 'react-bootstrap'


const Index = () => {
  return (
    <Layout>
      <h1>works</h1>
        <Card border="light">
          <Link to="works/posters">
            <Card.Img variant="top" src="/static/05242017-d8106fb2b16f454fbfda0e8302536dde.jpg" />
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