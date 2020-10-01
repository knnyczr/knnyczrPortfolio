import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import SEO from "../components/seo"
import ReactTypingEffect from 'react-typing-effect';


const IndexPage = () => {
  return(
    <div className="landing">
    <SEO title="Home" />
      <p>
        Hello world, my name is <span>Kenneth Cruz</span>. I'm a 
        <ReactTypingEffect
          speed={100}
          typingDelay={200}
          text={[
            " Software Engineer", 
            " Visual Artist",
            " Front End Developer",
            " Graphic Designer",
            " UI Developer",
            " Packaging Designer",
          ]}
        />
        , NYC native, and plant dad. <br /><br />
        And I build and design awesome apps.
      </p>
    </div>
  )
}

export default IndexPage
