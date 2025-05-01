import { useLocation } from 'react-router-dom';
import Home from '../Home';
import './style.scss';
import About from '../About/About';
import Work from '../Work/Work';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const Main = () => {
    const { hash } = useLocation();

    return (
        <div id="main" className="relative h-screen px-6" style={{
            width: 'calc(100% - 360px)',
            marginLeft: '360px'
        }}>
            <div className='max-w-[750px] m-auto'>
                {(!hash || (hash === '#home')) && <Home />}
                {hash === '#about' && <About />}
                {hash === '#work' && <Work />}
                {hash === '#skills' && <Skills />}
                {hash === '#contact' && <Contact />}
            </div>
        </div>
    )
}

export default Main;