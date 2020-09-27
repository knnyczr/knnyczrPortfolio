import React, { Component } from 'react';
import { useStaticQuery, graphql } from "gatsby"

const defaultContextValue = {
    data: {

    },
    set: () => {}
}

const { Provider, Consumer } = React.createContext(defaultContextValue)


class ContextProviderComponent extends Component{
    constructor() {
        super()
        this.state = {
            ...defaultContextValue, 
            set: setData()
        }
    }
    setData = () => {
        // data = useStaticQuery(graphql`
        //     {
        //     site {
        //         siteMetadata {
        //             title
        //         }
        //     }
        //     allFile(filter: {name:{regex: "/logo/"} , extension: {regex: "/(svg)/"}}) {
        //         edges {
        //             node {
        //                 publicURL
        //             }
        //         }
        //     }
        // `)
    }

    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>
    }
}

export { Consumer as default, ContextProviderComponent }