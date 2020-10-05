import React from 'react'
import SEO from './seo'
import Img from "gatsby-image"
import { graphql } from 'gatsby'

import './scss/artWork.scss'

export default function artWork(props) {
    let base = props.data.allContentfulWork.edges[0].node
    let title = base.title
    let medium = base.medium
    let description = base.description.internal.content
    // console.log(base)
    return (
        <div className="design">
            <SEO title={title} />
            <h2>{title}</h2>
            <h6>{medium}</h6>
            <p>{description}</p>
            <div className="images">
                {
                    base.images !== null ?
                    base.images.sort(() => Math.random() - 0.5).map((img, idx) => (
                        <Img
                            key={`${idx}_${img.id}_${img.title}`}
                            fluid={img.fluid}
                        />
                    ))
                    :
                    false
                }
            </div>
        </div>
    )
}

export const pageQuery = graphql`
    query workPostQuery ($contextURL: String){
        allContentfulWork(filter: {url: {eq: $contextURL}, node_locale: { eq: "en-US" }}) {
            edges {
                node {
                    title
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