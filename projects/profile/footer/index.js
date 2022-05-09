import React from 'react';
import moment from 'moment';

const Footer = () => {
    return (

        <section
            className="flex flex-col items-center justify-center h-fit bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/images/background/freelancersetup.jpeg')" }}
        >
            <div className="p-5 text-2xl text-white bg-gray-900 w-full bg-opacity-80">
                <div className="flex text-1xl justify-center font-MsMadi text-gray-400 m-[2rem]">
                    <span>© Copyright 2022 VBR (Veera Bhargava Reddy).</span>
                </div>
            </div>
        </section>
    )
}

export default Footer;