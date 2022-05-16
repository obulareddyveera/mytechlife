import React, { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from "react-router-dom";

const Templates = ({ breadcrumb }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const navList = [
        {
            displayName: 'Dashboard',
            link: 'dashboard'
        },
        {
            displayName: 'New',
            link: 'new'
        }
    ]

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('dashboard')
        }
        const linkList = [...navList]
        const activeIndex = navList.findIndex(rec => location.pathname === `/${rec.link}`)
        linkList.splice(activeIndex + 1)
        breadcrumb.set(linkList)
    }, [location])

    console.log('--== I am at templates ==--');

    return (
        <div className="flex flex-col items-center justify-start">
            <Outlet />
        </div>
    )
}

export default Templates;