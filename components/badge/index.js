import React from 'react'
import ReactTooltip from "react-tooltip";

const MtlBadge = ({ children, tooltip, path, id, ...props }) => {
    return (
        <>
            <span 
                data-for={`${id}_MtlBadgeTooltip`}  
                className="text-gray-800 text-xs shadow-md font-medium inline-flex items-center px-2.5 py-0.5 break-words rounded mr-2 bg-gray-100  dark:bg-gray-700 dark:text-gray-300"
            >
                {path && <img className="w-6 h-6 m-1" src={path} />}
                {children}
            </span>
            <ReactTooltip id={`${id}_MtlBadgeTooltip`} {...props} effect='solid'>
                <span>{tooltip}</span>
            </ReactTooltip>
        </>
    )
}

export default MtlBadge;