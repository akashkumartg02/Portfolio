import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Work from '../Work/Work';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import './style.scss';

const Main = () => {
    return (
        <div id="main" className="relative h-screen px-6" style={{
            width: 'calc(100% - 360px)',
            marginLeft: '360px'
        }}>
            <div className='max-w-[750px] w-full m-auto relative h-screen'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    )
}

export default Main;