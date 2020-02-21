import React from 'react'
import { Image } from 'react-bootstrap'
import PropTypes from "prop-types"


const Poster = ({ poster }) => {
    // console.log(poster)
    return (
        <Image 
            className="posterClass"
            src={poster}
            fluid
            rounded
        />
    )
}

Poster.propTypes = {
    poster: PropTypes.string,
}

export default Poster; 