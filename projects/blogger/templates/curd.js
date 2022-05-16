import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';

const TemplatesCurd = () => {
    const [toogleTab, setToogleTab] = useState('template')
    const handleToggleTab = (e) => {
        const selectedEntity = e.target.getAttribute('id')
        setToogleTab(selectedEntity)
    }

    const formik = useFormik({
        initialValues: {
            title: 'Hello Veera',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="flex justify-end h-full w-full">
            <form className="bg-[#ecebe7] shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full w-full">
                <div className="flex justify-start mt-2 border-b border-white font-MsMadi">
                    <button className={`text-xl p-2  ${toogleTab.toLowerCase() === 'template' && 'bg-white border border-white'} hover:bg-blue-300 hover:border-white rounded-t-md`} onClick={handleToggleTab} id="template">Template</button>
                    <button className={`ml-2 text-xl p-2  ${toogleTab.toLowerCase() === 'preview' && 'bg-white border border-white'} hover:bg-blue-300 hover:border-white rounded-t-md`} onClick={handleToggleTab} id="preview">Preview</button>
                </div>
                <div className="flex flex-col border bg-white shadow-xl border-white font-RobotoSlab h-fit w-full">
                    <div className="m-4 p-4">
                        <input 
                            id="title" 
                            onChange={formik.handleChange}
                            value={formik.values.title} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Title" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TemplatesCurd;