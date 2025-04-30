import LinkedIn from '../assets/linkedin.svg';
import Github from '../assets/github.svg';
import Gmail from '../assets/gmail.svg';
import X from '../assets/x.svg';

const Home = () => {
    return (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center w-max'>
            <div className="avatar w-[220px] h-[220px] rounded-full relative" data-type="wave">
                <div className="image absolute inset-0 bg-no-repeat bg-center bg-cover" data-img-url="src/assets/profile.jpg" style={{ backgroundImage: 'url("src/assets/profile.jpg")' }}>
                </div>
            </div>
            <div className='ml-10'>
                <h3 className="font-bold text-[40px] tracking-[2px]"><span className="text-lime-500">A</span>KASH <span className="ml-2"><span className="text-lime-500">K</span>UMAR</span></h3>
                <h3 className="font-light text-3xl text-[gray] text-[18px] w-90">I&apos;m a front-end developer who loves building clean, user-friendly interfaces that just work.</h3>
                <div className="flex w-full gap-4 mt-4">
                    <a href="https://www.linkedin.com/in/akashtg02" target='_black'><img src={LinkedIn} alt="Linkedin" className='w-5 h-5' /></a>
                    <a href="https://github.com/akashkumartg02" target='_black'><img src={Github} alt="Github" className='w-5 h-5' /></a>
                    <a href="mailto:akashtg.inbox@gmail.com" target='_black'><img src={Gmail} alt="Gmail" className='w-5 h-5' /></a>
                    <a href="https://x.com/Akash_Kumar_02" target='_black'><img src={X} alt="X" className='w-5 h-5' /></a>
                </div>
            </div>
        </div>
    )
}


export default Home;