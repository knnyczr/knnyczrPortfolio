import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import Poster from '../../components/poster'
import "../../components/scss/posters.scss"

const Posters = () => {
// need svg images
// needs a
    const data = useStaticQuery(graphql`
        query Posters {
            allFile(
            filter: {
                absolutePath: { regex: "/posters/"}
                extension: { regex: "/(jpg)|(png)/" }
            }
            ) {
            totalCount
                edges{
                    node {
                        publicURL
                    }
                }
            }
        }
    `)
    return (
        <Layout>
        {
            data.allFile.edges.map(poster => (
                <Poster poster={poster.node.publicURL} key={poster.node.id}/>
            ))
        }
        </Layout>
    )
}



export default Posters; 