import React from 'react';
import { Link } from 'gatsby'
import ThemeContext from '../../context/ThemeContext'

import SEO from "../../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import '../../components/scss/works.scss'
import { Card, Button } from 'react-bootstrap'


const Index = () => {

  const data = useStaticQuery(graphql`
      {
        allContentfulWork(filter:{node_locale: { eq: "en-US" }}) {
          edges {
            node {
              url
              title
              type
              medium
              deployedLink
              githubLink
              heroImage{
                fluid{
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <ThemeContext.Consumer>
      {
        theme =>(
            <div className="works">
              <SEO title="Works" />
              <h1>work</h1>
              {
                data.allContentfulWork.edges.map((project, index) => (
                  <Card 
                    text={theme.dark ? 'dark' : 'light'}
                    bg={theme.dark ? 'light' : 'dark'}
                    className="text-white"
                    style={{
                      
                  }}>
                    <Link
                      to={`/works/${project.node.url}`}
                    > 
                    {
                      project.node.heroImage &&
                      <Img 
                        key={`works_${index}_${project.node.title}`}
                        fluid={project.node.heroImage.fluid}  
                        alt="Card image" 
                      /> 
                    }
                    </Link>
                    <Card.Body>
                      <h5
                        style={{
                          color: `${theme.dark ? '#2a2b2d' : '#fefefe'}`,
                        }}
                      >{project.node.title}</h5>
                      <p>
                        {project.node.type}
                      </p>
                      {
                        project.node.deployedLink &&
                        <p>
                          {project.node.medium}
                        </p>
                      }
                      {
                        project.node.deployedLink &&
                        <Button 
                          href={`${project.node.deployedLink}`}
                          variant={theme.dark ? 'dark' : 'light'}>Live Link</Button>
                      }
                      {
                        project.node.githubLink &&
                        <Button 
                          href={`${project.node.githubLink}`}
                          variant={theme.dark ? 'dark' : 'light'}>Github</Button>
                          
                      }
                    </Card.Body>
                  </Card>
                ))
              }
            </div> 
          )
        }
      </ThemeContext.Consumer>
  );
}

export default Index; 