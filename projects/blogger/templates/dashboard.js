import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import MTLButton from '../../../components/button';

const TemplatesDashboard = () => {
    const navigate = useNavigate();
    console.log('--== TemplatesDashboard ==--');
    const handleNewTemplate = () => {
        console.log('--== TemplatesDashboard <:::> new ==--');
        navigate('/new')
    }
    return (
        <>
            <div className="flex justify-end w-full mr-4">
                <MTLButton displayName="New Template" onClick={handleNewTemplate} />
            </div>
        </>
    )
}

export default TemplatesDashboard;