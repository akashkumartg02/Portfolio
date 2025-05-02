import { motion } from 'framer-motion';
import './style.scss';

const Home = () => {
    return (
        <motion.section className='flex justify-center items-center w-full min-h-screen'
            initial={{ opacity: 0, marginLeft: -40 }}
            whileInView={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}>
            <div id="home" className='flex justify-center items-center w-full min-h-screen'>
                <div className="profile min-w-[220px] min-h-[220px] rounded-full relative" data-type="wave">
                    <div className="image absolute inset-0 bg-no-repeat bg-center bg-cover" data-img-url="src/assets/profile.jpg" style={{ backgroundImage: 'url("/profile.jpg")' }}>
                    </div>
                </div>
                <div className='profile-details ml-10'>
                    <h3 className="font-bold text-[40px] tracking-[2px] rowdies-font"><span className="text-lime-500">A</span>KASH <span className="ml-2"><span className="text-lime-500">K</span>UMAR</span></h3>
                    <h6 className="font-light text-3xl text-[gray] text-[18px] max-w-[450px]">I&apos;m a front-end developer who loves building clean, user-friendly interfaces that just work.</h6>
                    <div className="social-icons flex w-full gap-4 mt-4">
                        <a href="https://www.linkedin.com/in/akashtg02" target='_black'><img src="/linkedin.svg" alt="Linkedin" className='w-5 h-5' /></a>
                        <a href="https://github.com/akashkumartg02" target='_black'><img src="/github.svg" alt="Github" className='w-5 h-5' /></a>
                        <a href="mailto:akashtg.inbox@gmail.com" target='_black'><img src="/gmail.svg" alt="Gmail" className='w-5 h-5' /></a>
                        <a href="https://x.com/Akash_Kumar_02" target='_black'><img src="/x.svg" alt="X" className='w-5 h-5' /></a>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}


export default Home;