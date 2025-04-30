import Home from '../Home';
import './style.scss';

const Main = () => {
    return (
        <div id="main" className="relative h-screen" style={{
            width: 'calc(100% - 360px)',
            marginLeft: '360px'
        }}>
            <Home />
        </div>
    )
}

export default Main;