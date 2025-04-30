import './style.scss';

const About = () => {
    return (
        <div id="about" className="mt-20 pb-10">
            <div className="bg-[#ffffff0a] text-xs p-2 inline">ABOUT</div>

            <h1 className="mt-5 text-[30px] font-medium text-white">About Me</h1>

            <div className="mt-10">
                <img src="/profile2.jpg" alt="profile2" className="w-full h-[400px] object-cover opacity-70" />
                <h3 className="font-bold text-[22px] tracking-[2px] rowdies-font mt-6 text-white">Akash <span className="ml-2">Kumar</span></h3>
                <h3 className="font-light text-3xl text-[15px] w-90">Front-end developer</h3>
            </div>

            <hr className="my-6 text-lime-500 opacity-60" />

            <p className="text-[15px]">Hi, my name is Akash Kumar — a Front-End Developer with 3+ years of experience building responsive and accessible web applications using React.js and Next.js.</p>
            <p className="text-[15px] mt-3">Proficient in transforming design concepts into intuitive user interfaces, writing clean, maintainable code, and optimizing performance across browsers and devices. Skilled in collaborating closely with designers and backend developers to ensure seamless integration and user experience. Continuously exploring new technologies to stay current in the evolving front-end ecosystem.</p>

            <hr className="my-6 text-lime-500 opacity-60" />

            <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <div className="w-full pr-[50px]">
                    <div className="w-full h-auto">
                        <ul className="m-0 list-none">
                            <li className="mb-2 flex">
                                <span className="min-w-[100px] mr-[10px] text-white">Birthday:</span>
                                <span>02.11.2000</span>
                            </li>
                            <li className="mb-2 flex">
                                <span className="min-w-[100px] mr-[10px] text-white">Age:</span>
                                <span>24</span>
                            </li>
                            <li className="mb-2 flex">
                                <span className="min-w-[100px] mr-[10px] text-white">Address:</span>
                                <span>Bangalore, India</span>
                            </li>
                            <li className="mb-2 flex">
                                <span className="min-w-[100px] mr-[10px] text-white">Email:</span>
                                <span>
                                    <a className="text-[#767676] transition-all duration-300 hover:text-white" href="mailto:akashtg.inbox@gmail.com">akashtg.inbox@gmail.com</a>
                                </span>
                            </li>
                            <li className="mb-2 flex">
                                <span className="min-w-[100px] mr-[10px] text-white">Phone:</span>
                                <span><a className="text-[#767676] transition-all duration-300 hover:text-white" href="tel:+91 99768 72067">+91 99768 72067</a></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full">
                    <div className="">
                        <ul className="m-0 list-none">
                            <li className="mb-2 flex">
                                <span className="min-w-[100px] mr-[10px] text-white">Nationality:</span>
                                <span>India</span>
                            </li>
                            <li className="mb-2 flex">
                                <span className="min-w-[100px] mr-[10px] text-white">Study:</span>
                                <span>The Madura College</span>
                            </li>
                            <li className="mb-2 flex">
                                <span className="min-w-[100px] mr-[10px] text-white">Degree:</span>
                                <span>Bsc</span>
                            </li>
                            <li className="mb-2 flex">
                                <span className="min-w-[100px] mr-[10px] text-white">Interest:</span>
                                <span>Playing Badminton</span>
                            </li>
                            <li className="mb-2 flex">
                                <span className="min-w-[100px] mr-[10px] text-white">Freelance:</span>
                                <span>Available</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="my-6 text-lime-500 opacity-60" />

            <div className="bg-white inline-block px-6 py-3">
                <a href="assets/img/cv/1.jpg" className="text-black" download=""><span>Download CV</span></a>
            </div>

            <hr className="my-6 text-lime-500 opacity-60" />

            <div className="pt-2">
                <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    <div className="w-full">
                        <div className="w-full h-auto mb-[40px]">
                            <h3 className="text-[20px] font-bold">Education</h3>
                        </div>
                        <div className="w-full h-auto border-l education-details border-[#ffffff0a]">
                            <ul className="m-0 list-none relative w-full inline-block pt-[10px]">
                                <li className="m-0 w-full relative pl-[20px] pb-[45px]">
                                    <div className=" w-full h-auto relative flex">
                                        <div className="time w-1/2 pr-[20px]">
                                            <span className="inline-block py-[5px] px-[25px] bg-[#ffffff0a] rounded-[50px] text-[12px] whitespace-nowrap">2018 - 2021</span>
                                        </div>
                                        <div className="place w-1/2 pl-[20px]">
                                            <h3 className="text-[12px] mb-[2px] text-white font-semibold">The Madura College</h3>
                                            <span className="text-[12px]">Bachelor Degree</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="m-0 w-full relative pl-[20px] pb-[45px]">
                                    <div className=" w-full h-auto relative flex">
                                        <div className="time w-1/2 pr-[20px]">
                                            <span className="inline-block py-[5px] px-[25px] bg-[#ffffff0a] rounded-[50px] text-[12px] whitespace-nowrap">2017 - 2018</span>
                                        </div>
                                        <div className="place w-1/2 pl-[20px]">
                                            <h3 className="text-[12px] mb-[2px] text-white font-semibold">MAVMM HR SEC SCHOOL</h3>
                                            <span className="text-[12px]">12 <sup>th</sup></span>
                                        </div>
                                    </div>
                                </li>
                                <li className="m-0 w-full relative pl-[20px] ">
                                    <div className=" w-full h-auto relative flex">
                                        <div className="time w-1/2 pr-[20px]">
                                            <span className="inline-block py-[5px] px-[25px] bg-[#ffffff0a] rounded-[50px] text-[12px] whitespace-nowrap">2015 - 2016</span>
                                        </div>
                                        <div className="place w-1/2 pl-[20px]">
                                            <h3 className="text-[12px] mb-[2px] text-white font-semibold">MAVMM HR SEC SCHOOL</h3>
                                            <span className="text-[12px]">10 <sup>th</sup></span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full h-auto mb-[40px]">
                            <h3 className="text-[20px] font-bold">Experience</h3>
                        </div>
                        <div className="w-full h-auto border-l experience-details border-[#ffffff0a]">
                            <ul className="m-0 list-none relative w-full inline-block pt-[10px]">
                                <li className="m-0 w-full relative pl-[20px] pb-[45px]">
                                    <div className=" w-full h-auto clear-both relative flex">
                                        <div className="time w-1/2 pr-[20px]">
                                            <span className="inline-block py-[5px] px-[25px] bg-[#ffffff0a] rounded-[50px] text-[12px] whitespace-nowrap">2024 - Now</span>
                                        </div>
                                        <div className="place w-1/2 pl-[20px]">
                                            <h3 className="text-[12px] mb-[2px] text-white">Thy Quill</h3>
                                            <span className="text-[12px]">Front-end developer</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="m-0 w-full relative pl-[20px] pb-[45px]">
                                    <div className=" w-full h-auto clear-both relative flex">
                                        <div className="time w-1/2 pr-[20px]">
                                            <span className="inline-block py-[5px] px-[25px] bg-[#ffffff0a] rounded-[50px] text-[12px] whitespace-nowrap">2022 - 2024</span>
                                        </div>
                                        <div className="place w-1/2 pl-[20px]">
                                            <h3 className="text-[12px] mb-[2px] text-white">CMDK Inc</h3>
                                            <span className="text-[12px]">Front-end developer</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="m-0 w-full relative pl-[20px] ">
                                    <div className=" w-full h-auto clear-both relative flex">
                                        <div className="time w-1/2 pr-[20px]">
                                            <span className="inline-block py-[5px] px-[25px] bg-[#ffffff0a] rounded-[50px] text-[12px] whitespace-nowrap">2021 - 2022</span>
                                        </div>
                                        <div className="place w-1/2 pl-[20px]">
                                            <h3 className="text-[12px] mb-[2px] text-white">Cricketronics PVT LTD</h3>
                                            <span className="text-[12px]">Web Developer</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;