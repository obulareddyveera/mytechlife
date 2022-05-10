import React from 'react';
import MtlCard from '../../../components/card';

const PowerPoint = () => {
    return (
        <>

            <header>
                <nav className="bg-gray-900 bg-opacity-80 p-[1rem] fixed  border-b w-full">
                    <div className="flex justify-center md:justify-start items-center text-white">
                        <a href="/">
                            <span className="self-center text-xl font-MsMadi">My Tech Life</span>
                        </a>
                    </div>
                </nav>
            </header>
            <main>
                <section className="bg-[#ecebe7] h-screen w-screen">
                    <div className="flex flex-col">
                        <div className="mt-[4rem]">
                            <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-1">
                                <MtlCard
                                    className="h-80 m-2"
                                    bgImage="/images/background/myTechLife.jpeg"
                                    title="I am your card baby boy"
                                >
                                </MtlCard>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PowerPoint;