import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import SEO from "../components/seo"
import Typewriter from 'typewriter-effect';


export default class IndexPage extends Component {
  render(){
    return(
      <div className="landing">
      <SEO title="Home" />
        <p>
          Hello world, my name is <span>Kenneth Cruz</span>. I'm a 
          <Typewriter
            options={{
              strings: [
                ' Software Engineer', 
                ' Visual Artist', 
                ' Front End Developer',
                ' React Developer',
                ' Graphic Designer',
                ' UI Developer',
                ' Packaging Designer', 
              ],
              autoStart: true,
              loop: true,
            }}
          />
          , NYC native, and plant dad. <br /><br />
          And I build and design awesome apps.
        </p>
      </div>
    )
  }
}
