import React from 'react';
import moment from 'moment';

const Portfolio = () => {
    return (

        <section
            className="bg-scroll bg-cover bg-top md:bg-fixed md:bg-center"
            style={{ backgroundImage: "url('/images/background/horseMen.jpeg')" }}
        >

            <div className="p-5 pb-0 text-2xl text-white bg-gray-900 h-full w-full bg-opacity-80">
                <div className="p-4 pb-0 flex flex-col items-center justify-center">
                    <h2 className="text-2xl md:text-4xl font-MsMadi text-center p-2 border-b mb-2">My Work Experience</h2>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        {
                            [
                                {
                                    name: 'Yodlee Infotech Pvt Ltd',
                                    role: 'Member Of Technical Staff',
                                    icon: '/images/icons/envestnet.svg',
                                    from: { month: '04', year: '2020', day: '01', displayVal: 'April, 2020' },
                                    to: { month: moment().format('MM'), year: moment().format('yyyy'), day: moment().format('DD'), displayVal: 'till date' },
                                    about: `Envestnet | Yodlee, provides industry leading data aggregation and data analytics platforms. 
                            I have made a contribution to the core Engineering team as a Full-Stack Developer with Next.js, React.js, Redux frameworks.`
                                },
                                {
                                    name: 'GE Digital',
                                    role: 'Sr Software Engineer',
                                    icon: '/images/icons/ge.png',
                                    from: { month: '09', year: '2016', day: '01', displayVal: 'September 2016' },
                                    to: { month: '08', year: '2019', day: '30', displayVal: 'August 2019' },
                                    about: `GE Digital is a subsidiary of the General Electric, builds various Industrial software solutions. 
                            I have worked with "Asset Performance Management (APM)" solution as a UI-Developer with React.js, Redux, Hightcharts visualization frameworks.`
                                },
                                {
                                    name: 'Wipro Technologies',
                                    role: 'Sr Software Engineer',
                                    icon: '/images/icons/wipro.png',
                                    from: { month: '06', year: '2015', day: '01', displayVal: 'June 2016' },
                                    to: { month: '09', year: '2016', day: '30', displayVal: 'September 2016' },
                                    about: `Wipro Technologies, is a consulting and outsourcing business of Wipro Limited. 
                            I have worked with VISA client as a UI-Developer with React.js, Redux, Express.js frameworks.`
                                },
                                {
                                    name: 'Davizta India PVT Ltd',
                                    role: 'Programmer Analyst',
                                    icon: '/images/icons/green-tick.png',
                                    from: { month: '05', year: '2013', day: '01', displayVal: 'May 2013' },
                                    to: { month: '01', year: '2015', day: '30', displayVal: 'January 2015' },
                                    about: `daVIZta is a provider of Enterprise Revenue Analytics solutions and services to the life sciences industry. 
                                I have worked as a UI-Developer with AngluarJS v1.6.`,
                                },
                                {
                                    name: 'Tripod Software Solutions PTV Limited',
                                    role: 'Software Developer',
                                    icon: '/images/icons/envestnet.svg',
                                    from: { month: '09', year: '2008', day: '01', displayVal: 'September 2008' },
                                    to: { month: '12', year: '2012', day: '30', displayVal: 'December 2012' },
                                    about: `daVIZta is a provider of Enterprise Revenue Analytics solutions and services to the life sciences industry. 
                                I have worked as a UI-Developer with AngluarJS v1.6.`,
                                    isInActive: true,
                                }
                            ].map((item) => {
                                const startDate = moment(`${item.from.year}-${item.from.month}-${item.from.day}`, 'YYYY-MM-DD');
                                const endDate = moment(`${item.to.year}-${item.to.month}-${item.to.day}`, 'YYYY-MM-DD');
                                const duration = moment.duration(endDate.diff(startDate));
                                const years = Math.round(duration.asYears() * 10) / 10;

                                if (item.isInActive) return null;
                                return (

                                    <li className="mb-10 ml-6">
                                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                            <img src={item.icon} />
                                        </span>
                                        <h3 className="flex items-center mb-1 text-lg font-RobotoSlab text-white dark:text-white">
                                            {item.name}
                                            <span className="bg-orange-400 text-blue-800 text-sm font-RobotoSlab mr-2 px-2.5 py-0.5 rounded dark:bg-orange-500 dark:text-blue-800 ml-3">{years}</span>
                                        </h3>
                                        <time className="block mb-2 text-sm font-RobotoSlab leading-none text-gray-400 dark:text-gray-500">{item.role}, {item.from.displayVal} to {item.to.displayVal}</time>
                                        <p className="mb-4 text-base font-RobotoSlab break-words w-2/3 text-gray-500 dark:text-gray-400">{item.about}</p>
                                    </li>
                                )
                            })
                        }
                    </ol>

                </div>
            </div>
        </section>
    )
}

export default Portfolio;