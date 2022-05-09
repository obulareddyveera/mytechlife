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
                <div className="text-2xl text-white bg-gray-900 w-full bg-opacity-80 mt-[10rem]">
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
                            <button type="button">
                                <MtlBadge id="html5" type='warning' tooltip="HTML5" className="text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd" />
                                    </svg>
                                    Resume
                                </MtlBadge>
                            </button>
                        </div>
                        <div className="m-4 grid grid-rows-1 grid-cols-2 gap2">
                            <MtlBadge id="html5" type='warning' path={"./images/icons/youtube.png"} tooltip="HTML5">
                                My Youtube Life
                            </MtlBadge>
                            <MtlBadge id="html5" type='warning' path={"./images/icons/blogger.png"} tooltip="HTML5">
                                My Blogger Life
                            </MtlBadge>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileIntro;