import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

// create context and export 
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    
    // set allContext
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;