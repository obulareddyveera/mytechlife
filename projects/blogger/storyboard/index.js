import { faClose, faImage, faSave, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TagEditor from '../../../components/fields/tagEditor'

import MtlBadge from "./../../../components/badge"
import { imGurSvgIcon } from "./../../../components/icons/svg"
import { getImgurAlbum } from './../../../store/imgurSlice'

const Storyboard = ({ breadcrumb }) => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(0)
    const imgurState = useSelector((state) => state.imgur)
    console.log('--== imgurState ', imgurState);
    const navList = [
        {
            displayName: 'Storyboard',
            link: 'storyboard'
        }
    ]

    useEffect(() => {
        breadcrumb.set(navList)
        getImgurAlbum(dispatch)
    }, [])

    return (
        <div className="flex flex-col mt-2 mb-4">
            <Formik
                initialValues={{ imageUrl: '', editorContent: `<p>Hello Bro</p>` }}
            >
                {
                    ({ values, handleBlur, handleChange }) => {
                        console.log('--== Storyboard ', values);
                        return (
                            <>
                                <div className="card w-full bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <div className="flex justify-between">
                                            <h2 className="card-title">Storyboard</h2>
                                            <button className="btn btn-primary">Save</button>
                                        </div>
                                        <div className="flex flex-col w-full border-opacity-50">
                                            <div className="mb-2">
                                                <label className="input-group">
                                                    <span>Name</span>
                                                    <input type="text" placeholder="Storyboard Name" className="input input-bordered w-full" />
                                                </label>
                                            </div>
                                            <div className="mb-2">
                                                <label className="input-group">
                                                    <span>Image</span>
                                                    <input type="text" placeholder="Storyboard Name" className="input input-bordered w-full" />
                                                </label>
                                            </div>
                                            <div className="form-control mb-3">
                                                <label className="label">
                                                    <span className="label-text">Description</span>
                                                </label>
                                                <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                                            </div>
                                            <div className="divider">
                                                <button className="btn btn-success gap-2">
                                                    Add Page
                                                    <div className="badge">+1</div>
                                                </button>
                                            </div>
                                            <div className="flex justify-end">
                                                <div className="btn-group">
                                                    <button className="btn btn-sm btn-active">1</button>
                                                </div>
                                            </div>
                                            <div className="bg-gray-100 mt-2 p-2">
                                                <div className="mt-2">
                                                    <div className="grid  grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2">
                                                        <div className="ml-2">
                                                            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                                                                <a href="https://imgur.com/user/tagveera" target="_blank">
                                                                    #Imgur
                                                                </a>
                                                            </span>
                                                            <span className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-orange-700 mr-2 mb-2">#Preview</span>
                                                            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">#Templates</span>
                                                        </div>
                                                        <div className="form-control w-full">
                                                            <label className="label">
                                                                <span className="label-text">Pick the best sutable template</span>
                                                            </label>
                                                            <select className="select select-bordered">
                                                                <option disabled selected>Pick one</option>
                                                                <option>Star Wars</option>
                                                                <option>Harry Potter</option>
                                                                <option>Lord of the Rings</option>
                                                                <option>Planet of the Apes</option>
                                                                <option>Star Trek</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between tab-bordered">
                                                        <div className="tabs">
                                                            <button className={`tab ${activeTab === 0 && 'tab-active'} tab-bordered`} onClick={() => setActiveTab(0)}>Preview</button>
                                                            <button className={`tab ${activeTab === 1 && 'tab-active'} tab-bordered`} onClick={() => setActiveTab(1)}>Editor</button>
                                                        </div>

                                                    </div>
                                                    <div className="w-full">
                                                        {
                                                            activeTab === 0 ? (
                                                                <div className="flex flex-col p-3 m-1 mb-0">
                                                                    <figure><img src="https://api.lorem.space/image/shoes" className="w-full h-full" alt="Shoes" /></figure>
                                                                    <div dangerouslySetInnerHTML={{ __html: values.editorContent }} />
                                                                </div>
                                                            ) : (
                                                                <div className="w-full">
                                                                    <TagEditor />
                                                                </div>
                                                            )
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </>
                        )
                    }
                }

            </Formik>

        </div>
    )
}

export default Storyboard;