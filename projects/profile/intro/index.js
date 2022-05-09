import React from 'react';
import MtlBadge from '../../../components/badge';
import MTLButton from '../../../components/button';

const ProfileIntro = () => {
    console.log('--== welcome to profileIntro ==--');

    return (
        <div
            className="bg-fixed bg-center bg-cover bg-[#ecebe7] bg-no-repeat"
            style={{ backgroundImage: "url('./images/background/myTechLife.jpeg')" }}
        >
            <div className="flex flex-col items-center justify-around md:justify-center pt-[5rem]">
                <div className="p-5 text-2xl text-white bg-gray-900 w-full bg-opacity-80 mt-[10rem]">
                    <div className="flex flex-col items-center justify-around p-4">
                        <p className="font-MsMadi md:text-3xl">I'm</p>
                        <p className="font-MsMadi text-2xl md:text-4xl text-center text-red-400 md:text-red-600">
                            Veera Bhargava Reddy Obulareddy
                        </p>
                        <p className="font-RobotoSlab mt-6 break-words text-center md:text-2xl max-w-full md:max-w-screen-md">
                            A product-focused javascript fullstack developer based in Bangalore.

                        </p>
                        <p className="font-RobotoSlab break-words text-center md:text-2xl max-w-full md:max-w-screen-md">
                            I specialise in creating interactive experiences and functional interfaces using React, Canvas, Atomic Architecture and Design Systems.
                        </p>
                        <div className="flex justify-center m-4">
                            <button type="button" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800">
                                Download Resume
                            </button>
                        </div>
                <div className="m-4 grid grid-rows-1 grid-cols-3 gap2">
                    <MtlBadge id="html5" type='warning' path={"./images/icons/youtube.png"} tooltip="HTML5">
                        My Youtube Life
                    </MtlBadge>
                    <MtlBadge id="html5" type='warning' path={"./images/icons/blogger.png"} tooltip="HTML5">
                        My Blogger Life
                    </MtlBadge>
                    <MtlBadge id="html5" type='warning' path={"./images/icons/farmer.png"} tooltip="HTML5">
                        My Farm Life
                    </MtlBadge>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileIntro;