import React, { useEffect, useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {
    const [displayCount, setDisplayCount] = useState(3);
    const [showComplete, setShowComplete] = useState(false);
    const [sort, setSort] = useState('difficulty');

    const saveLocally = () => {
        localStorage.setItem(
            'todo',
            JSON.stringify({displayCount, showComplete, sort})
        );
    }

    useEffect(() => {
        let storage = JSON.parse(localStorage.getItem('todo'));
        if(storage){
            setDisplayCount(storage.displayCount);
            setSort(storage.sort);
            setShowComplete(storage.showComplete);
        }
    }, []);

    const values = {
        displayCount,
        showComplete,
        sort,
        setDisplayCount,
        setShowComplete,
        setSort,
        saveLocally,
    }

    return(
        <SettingsContext.Provider value={values}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsProvider;