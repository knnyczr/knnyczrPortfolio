import { createContext } from 'react'; 

export const initialValues = {
    allProjects: [],
}

export const GlobalContext = createContext(initialValues);