import React from 'react';

const MtlCard = ({ children }) => {
    return (
        <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 min-w-max">
            {children}
        </div>
    )
}

export default MtlCard;