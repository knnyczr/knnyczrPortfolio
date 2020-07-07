import React, { useEffect, useState } from 'react';
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Menu from '../../components/worksMenu'
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import '../../components/scss/works.scss'

// import {worksPage} from '../../components/fragments'

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
            type
            links {
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

  const [uniqueTypes, setUniqueTypes] = useState([])
  const [displayProjects, setdisplayProjects] = useState(projects)

  useEffect(() => {
    const onlyUniques = (value, indx, array) => array.indexOf(value) === indx;

    // this maps over project types, flattens the two dimensional array, and then filters by unique types
    console.log(projects.map((work, index)=> work.node.type))
    const projectTypes = projects.map((work, index)=> work.node.type).flat().filter(onlyUniques)
    setUniqueTypes(projectTypes)
  }, [projects])

  return (
    <Layout>
      <SEO title="Works" />
      <div className="works">
        <h1>work</h1>
        <Menu types={uniqueTypes}  />
        {
          displayProjects &&
          displayProjects.map((project, index) => (
            <Link 
              // to={`works/${project.node.title}`}
              key={`works_${index}_${project.node.title}`}
              >
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