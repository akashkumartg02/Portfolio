import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import { useState } from "react";

const SideBar = () => {
    const { hash } = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleNavigate = (path: string) => {
        navigate(`#${path}`);
        setOpen(false);
    }

    const Navigations = () => {
        return (
            <ul className="menus text-[gray] text-[22px] font-medium w-max" >
                <li className={(!hash || (hash === '#home')) ? 'active' : ''} onClick={() => handleNavigate('home')}>Home</li>
                <li className={hash === '#about' ? 'active' : ''} onClick={() => handleNavigate('about')}>About</li>
                <li className={hash === '#work' ? 'active' : ''} onClick={() => handleNavigate('work')}>My Work</li>
                <li className={hash === '#skills' ? 'active' : ''} onClick={() => handleNavigate('skills')}>What I'm Good At</li>
                <li className={hash === '#contact' ? 'active' : ''} onClick={() => handleNavigate('contact')}>Contact Me</li>
            </ul>
        )
    }

    return (
        <>
            <div id="side-bar-container" className="fixed w-90 h-screen left-0 top-0 p-6">
                <div className="absolute w-[1px] bg-lime-500 rounded right-0 top-1/2 translate-y-[-50%] h-40 opacity-80"></div>
                <div className="rounded-4xl shadow-amber-50 w-full h-full side-bar relative">
                    <span className="animated-line" />
                    {/* <h1 className="text-lime-500 text-4xl font-bold absolute top-20 left-27 transform -translate-x-1/2 -translate-y-1/2">AK</h1> */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Navigations />
                    </div>
                </div>
            </div>

            <div id="side-menu-btn" className="fixed top-6 right-6 bg-[#ffffff0a] p-2 cursor-pointer z-10 hover:bg-[#ffffff14]" onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            <div id="side-popup">
                {open && <div className="bg-[#000c] w-screen h-screen z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" onClick={() => setOpen(false)} />}
                <div className={`fixed top-0 right-0 bg-[#34353a] transition-[width,padding] duration-[300ms] ease-out ${open ? 'w-[200px] p-6' : 'w-0 p-0'} h-screen z-10`}>
                    {open && <div className="absolute left-[-50px] top-2 border p-1 rounded-md cursor-pointer" onClick={() => setOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>}
                    <div className="side-popup-navigations">
                        <Navigations />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar;