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
    }
  `)
  return (
    <ThemeContext.Consumer>

      {
        theme => (
          <div className={theme.dark ? 'dark' : 'light'}>
            <Header siteTitle={data.site.siteMetadata.title} logo={data.allFile.edges} />
              <main>{children}</main>
              <Footer />
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
