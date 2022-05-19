import React, { useEffect } from 'react'

const Storyboard = ({ breadcrumb }) => {
    const navList = [
        {
            displayName: 'Storyboard',
            link: 'storyboard'
        }
    ]

    useEffect(() => {
        breadcrumb.set(navList)
    }, [])

    return (
        <div className="flex flex-col bg-white">
            <div>Hello</div>
        </div>
    )
}

export default Storyboard;