import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import ThemeContext from '../context/ThemeContext'
import Header from "./header"
import Footer from "./Footer"
import "./scss/layout.scss"


const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allFile(filter: {name:{regex: "/logo/"} , extension: {regex: "/(svg)/"}}) {
        edges {
          node {
            publicURL
          }
        }
      }

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
  return (
    <ThemeContext.Consumer>
      {
        theme => (
          <div className={theme.dark ? 'dark' : 'light'}>
            <Header siteTitle={data.site.siteMetadata.title} logo={data.allFile.edges} />
            <div
              // className="inLayout"
              style={{
                margin: `0 auto`,
                maxWidth: 1000,
                padding: `1.45rem 1.0875rem`,
              }}
            >
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        )
      }
    </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
