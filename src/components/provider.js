import React, { useState } from 'react'; 

export const myContext = React.createContext(); 

const Provider = props => {
    const [projects, setprojects] = useState([ ])

    return (
        <myContext.Provider
            value={{
                projects: projects,
            }}
        >
            {props.children}
        </myContext.Provider>
    )
}

export default ({ element }) => (
    <Provider>
        {element}
    </Provider>
);