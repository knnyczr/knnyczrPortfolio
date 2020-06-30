import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Image } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby';
import "../components/scss/about.scss"

const About = () => {
  const data = useStaticQuery(graphql`
    query Self {
      allFile(
            filter: {
                absolutePath: { regex: "images/self/"}
                extension: { regex: "/(jpg)/" }
            }
            ) {
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
      <SEO title="About" />
      <h1>about</h1>
      <div className="about">
        <section>
          <Image src={data.allFile.edges[0].node.publicURL} roundedCircle thumbnail/>
        </section>
        <div>
          <h2>Kenny Cruzer</h2>
          <p>
          My name is Kenneth Cruz, but my friends call me Kenny. I am a dog dad, plant dad, and an aquarium enthusiast. I was born and raised in NYC. I’m a Full Stack Developer and Graphic Designer with three years of real-world experience designing and building innovative products. 
          <br />
          <br />
          I’ve co-taught five successful cohorts on full-stack technologies; with an average hiring rate of 91.9% within 6 months after graduation. I specialize in Branding, UI/UX Design, Design for Social Media, Packaging Design and related Visual Communication for Branding.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;