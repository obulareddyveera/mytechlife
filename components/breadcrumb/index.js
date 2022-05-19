import React from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const MtlBreadcrumb = ({ breadcrumb }) => {
    const navigate = useNavigate();
    const mtlLinks = breadcrumb.get();
    const handleNavigate = (index, item) => {
        const temp = [...mtlLinks];
        temp.splice(index)
        breadcrumb.set(temp)
        navigate(item.link)
    }

    return (
        <div className="ml-4">
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>
                        <Link href="/">
                            <FontAwesomeIcon className="w-4 h-4" icon={faHome} />
                        </Link>
                    </li>
                    {
                        mtlLinks && mtlLinks.map((item, index) => {
                            return (
                                <li key={`breadcrumLink${index}`}>
                                    <button onClick={() => handleNavigate(index, item)}>
                                        {item.displayName}
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default MtlBreadcrumb