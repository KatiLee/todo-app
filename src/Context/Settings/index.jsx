import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {
    const [displayCount, setDisplayCount] = useState(3);
    const [showCompleted, setShowCompleted] = useState(false);
    const [sort, setSort] = useState('difficulty');

    const values = {
        displayCount,
        showCompleted,
        sort,
    }

    return(
        <SettingsContext.Provider value={values}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsProvider;