import React from 'react';
import MtlBadge from '../../../components/badge';

const ProfileTechStack = () => {
    console.log('--== welcome to ProfileTechStack ==--');

    return (
        <div className="flex flex-col justify-center items-center mb-4 pt-[2rem]">
            <div className="m-4 p-4 pb-0 flex justify-center md:justify-end">
                <h2 className="text-4xl text-center font-MsMadi text-gray-500">JavaScript FullStack Developer</h2>
            </div>
            <div className="flex justify-center md:justify-end">
                <h2 className="text-2xl text-center font-MsMadi text-gray-500">A product-focused javascript fullstack developer based in Bangalore.</h2>
            </div>
            <div className="flex justify-center ">
                <div className="relative w-24 h-24">
                    <img className="rounded-full shadow-md border border-gray-100 w-24 h-24" src="/images/profile/veera.jpeg" alt="user image" />
                </div>
            </div>
            <div className="m-2 grid grid-rows-1 grid-cols-1 gap2">
                <MtlBadge id="javascript" type='warning' path={"./images/icons/javascript.png"} tooltip="Javascript">
                    Javascript (9+ years)
                </MtlBadge>
            </div>
            <div className="m-2 grid grid-rows-1 gap-4 grid-cols-2 md:grid-cols-3 gap4 items-center">
                <MtlBadge id="nodeJS" type='warning' path={"./images/icons/nodeJs.png"} tooltip="Node.JS">
                    Node.js (2+ years)
                </MtlBadge>
                <MtlBadge id="graphQL" type='warning' path={"./images/icons/graphql.png"} tooltip="GraphQL">
                    GraphQL (2 years)
                </MtlBadge>
                <MtlBadge id="nextJS" type='warning' path={"./images/icons/nextJs.jpeg"} tooltip="Next.JS">
                    Next.JS (3+ years)
                </MtlBadge>
            </div>
            <div className="m-2 grid grid-rows-2 gap-4 grid-cols-2 md:grid-cols-4">
                <MtlBadge id="reactJS" type='warning' path={"./images/icons/react-js.png"} tooltip="React.JS">
                    React.JS (9+ years)
                </MtlBadge>
                <MtlBadge id="redux" type='warning' path={"./images/icons/redux.svg"} tooltip="Redux">
                    Redux (6+ years)
                </MtlBadge>
                <MtlBadge id="mobx" type='warning' path={"./images/icons/mobx.png"} tooltip="Mobx">
                    Mobx (1+ years)
                </MtlBadge>
                <MtlBadge id="formik" type='warning' path={"./images/icons/formik.svg"} tooltip="Formik">
                    Formik (3+ years)
                </MtlBadge>
                <MtlBadge id="mui" type='warning' tooltip="Mui">
                    <span className="m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 32" fill="none" className="css-1170n61"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#007FFF"></path></svg>
                    </span>
                    Mui-Ui (3 years)
                </MtlBadge>
                <MtlBadge id="tailwind" type='warning' path={"./images/icons/tailwind-css.png"} tooltip="Tailwind CSS">
                    Tailwind CSS (2 years)
                </MtlBadge>
                <MtlBadge id="bootstrap" type='warning' path={"./images/icons/bootstrap-5-logo.png"} tooltip="Bootstrap">
                    Bootstrap 4,5  (5 years)
                </MtlBadge>
                <MtlBadge id="CSS" type='warning' path={"./images/icons/css.png"} tooltip="CSS">
                    CSS3 (9+ years)
                </MtlBadge>
            </div>
            <div className="m-2 grid grid-rows-1 grid-cols-1 gap2">
                <MtlBadge id="html5" type='warning' path={"./images/icons/html.png"} tooltip="HTML5">
                    HTML5 (9+ years)
                </MtlBadge>
            </div>
        </div>
    )
}

export default ProfileTechStack;