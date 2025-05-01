import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";

const SideBar = () => {
    const { hash } = useLocation();
    const navigate = useNavigate();

    return (
        <div id="side-bar-container" className="fixed w-90 h-screen left-0 top-0 p-6">
            <div className="absolute w-[1px] bg-lime-500 rounded right-0 top-1/2 translate-y-[-50%] h-40 opacity-80"></div>
            <div className="rounded-4xl shadow-amber-50 w-full h-full side-bar relative">
                <span className="animated-line" />
                {/* <h1 className="text-lime-500 text-4xl font-bold absolute top-20 left-27 transform -translate-x-1/2 -translate-y-1/2">AK</h1> */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <ul className="menus text-[gray] text-[22px] font-medium w-max">
                        <li className={hash === '#home' ? 'active' : ''} onClick={() => navigate('#home')}>Home</li>
                        <li className={hash === '#about' ? 'active' : ''} onClick={() => navigate('#about')}>About</li>
                        <li className={hash === '#work' ? 'active' : ''} onClick={() => navigate('#work')}>My Work</li>
                        <li className={hash === '#skills' ? 'active' : ''} onClick={() => navigate('#skills')}>What I'm Good At</li>
                        <li className={hash === '#contact' ? 'active' : ''} onClick={() => navigate('#contact')}>Contact Me</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar;