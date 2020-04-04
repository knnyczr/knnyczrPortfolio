/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./scss/layout.scss"


const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allFile(filter: {name:{eq:"logo"} , extension: {regex: "/(svg)/"}}) {
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} logo={data.allFile.edges[0].node.publicURL} />
      <div
        className="inLayout"
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer>
          © Kenneth Cruz  {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
