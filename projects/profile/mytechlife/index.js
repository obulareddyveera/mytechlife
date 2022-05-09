import React from 'react';
import MtlBadge from '../../../components/badge';

const MyTechLifeStack = () => {
    console.log('--== welcome to MyTechLifeStack ==--');

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-white w-full">
                <div className="p-4 flex justify-center md:justify-end">
                    <h2 className="text-4xl text-center font-MsMadi text-gray-500">My Tech Life</h2>
                </div>
                <div className="m-4 grid grid-rows-1 grid-cols-2 gap2">
                    <a href="/life/youtuber">
                        <MtlBadge id="youtuber" type='warning' path={"./images/icons/youtube.png"} tooltip="HTML5">
                            My Youtube Life
                        </MtlBadge>
                    </a>
                    <a href="/life/blogger">
                        <MtlBadge id="blogger" type='warning' path={"./images/icons/blogger.png"} tooltip="HTML5">
                            My Blogger Life
                        </MtlBadge>
                    </a>
                </div>
                <div className="flex flex-col items-center justify-around mt-[3rem] w-full">
                    <div className="flex flex-col items-center bg-[#ecebe7] w-full font-RobotoSlab p-8 md:p-24">
                        <div className="flex flex-col items-center">
                            <span className="font-MsMadi text-3xl">I believe,</span>
                            <span className="text-1xl md:text-2xl mr-1 border-b border-red-500">Good code is its own best documentation.</span>
                            <span>As you’re about to add a comment, ask yourself, “How can I improve the code so that this comment isn’t needed?”</span>
                        </div>
                        <div className="mt-[2rem] border-t border-white pt-12">
                            <span className="font-MsMadi text-4xl">Find Me Here</span>
                        </div>
                        <div className="flex justify-center mt-6">
                            <img className="w-6 h-6 m-1" src={"./images/icons/googlePlus.png"} />
                            <img className="w-6 h-6 m-1" src={"./images/icons/facebook.png"} />
                            <img className="w-6 h-6 m-1" src={"./images/icons/linkedIn.png"} />
                            <img className="w-6 h-6 m-1" src={"./images/icons/telegram.png"} />
                        </div>
                    </div>
                    <div className="flex justify-around mt-[3rem] text-gray-400 mb-4 font-RobotoSlab">
                        <span>© Copyright 2022 VBR, Veera Bhargava Reddy.</span>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MyTechLifeStack;