import React from 'react';
import { Link } from "gatsby"
// import Layout from "../../components/layout"
// import Menu from '../../components/worksMenu'
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import '../../components/scss/works.scss'
import { Card } from 'react-bootstrap'


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

    console.log(data)
  // const [uniqueTypes, setUniqueTypes] = useState([])
  // const [displayProjects, setdisplayProjects] = useState(projects)

  // useEffect(() => {
  //   const onlyUniques = (value, indx, array) => array.indexOf(value) === indx;

  //   // this maps over project types, flattens the two dimensional array, and then filters by unique types
  //   console.log(projects.map((work, index)=> work.node.type))
  //   const projectTypes = projects.map((work, index)=> work.node.type).flat().filter(onlyUniques)
  //   setUniqueTypes(projectTypes)
  // }, [projects])

  return (
    <div className="works">
      <SEO title="Works" />
      <h1>work</h1>
      {/* <Menu types={uniqueTypes}  /> */}
      {
        data.allContentfulWork.edges.map((project, index) => (
          <Link 
            to={`/works/${project.node.url}`}
            key={`works_${index}_${project.node.title}`}
            >
              <Card
                className="text-white"
              >
                <Img fluid={project.node.heroImage.fluid}  alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>{project.node.title}</Card.Title>
                  <Card.Text>
                    {project.node.type}
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
          </Link>
        ))
      }
    </div> 
  );
}

export default Index; 