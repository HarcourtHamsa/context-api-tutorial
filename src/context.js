import React, { createContext, useState } from "react";
// createContext is used to create a new context

export const AppContext = createContext()
// AppContext is the name of my context and can be renamed

const AppProvider = (props) => {
    const [displayName, setDisplayName] = useState();

    return (
        // Whatever we pass into value will be available throughout your app
        <AppContext.Provider value={[displayName, setDisplayName]}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider
