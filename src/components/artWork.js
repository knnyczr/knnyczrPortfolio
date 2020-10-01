import React from 'react'
import Img from "gatsby-image"
import SEO from './seo'
import './scss/artWork.scss'
import { graphql } from 'gatsby'


export default function artWork(props) {
    let base = props.data.allContentfulWork.edges[0].node
    let title = base.title
    let medium = base.medium
    let type = base.type
    let description = base.description.internal.content
    // console.log(base)
    return (
        <div className="design">
            <SEO title={title} />
            <h2>{title}</h2>
            <h6>{type}</h6>
            <h6>{medium}</h6>
            <p>{description}</p>
            {
                base.images.map((img, idx) => (
                    <Img
                        key={img.id}
                        fluid={img.fluid} 
                        style={{
                            width: '100%',
                            marginBottom: '3%',
                        }}
                    />
                ))
            }
        </div>
    )
}

export const pageQuery = graphql`
    query workPostQuery ($contextURL: String){
        allContentfulWork(filter: {url: {eq: $contextURL}, node_locale: { eq: "en-US" }}) {
            edges {
                node {
                    title
                    type
                    medium
                    heroImage{
                        id
                    }
                    description{
                        internal{
                            content
                        }
                    }
                    images{
                        id
                        fluid{
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`