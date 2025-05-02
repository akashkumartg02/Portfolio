/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import APP_CONSTANTS from '../../scripts/constants';
import Modal from '../ui/Modal';
import './style.scss';
import { motion } from 'framer-motion';

const Work = () => {
    const [open, setOpen] = useState(false);
    const [project, setProject] = useState<any>('');

    return (
        <motion.section id="work" className="mt-20 pb-10"
            initial={{ opacity: 0, marginLeft: -40 }}
            whileInView={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}>
            <div className="bg-[#ffffff0a] text-xs p-2 inline">WORK</div>

            <h1 className="mt-5 text-[30px] font-medium text-white">My Work</h1>

            {/* <hr className="my-6 text-lime-500 opacity-60" /> */}

            <div className="mt-10">
                <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                    {APP_CONSTANTS.MY_WORKS.map((work: { title: string, description: string }, key: number) => {
                        return (
                            <div key={key} onClick={() => {
                                setOpen(true)
                                setProject(work);
                            }} className="work-container h-[300px] w-full bg-[#ffffff0a] relative px-[30px] py-[40px] cursor-pointer">
                                <span className="number text-white inline-block mb-[20px] w-[60px] bg-[#ffffff08] h-[60px] leading-[60px] text-center rounded-full font-bold font-montserrat transition-all duration-300">0{key + 1}</span>
                                <h2 className='text-white'>{work.title}</h2>
                                <p className='line-clamp-4 text-sm mt-2'>{work.description}</p>
                                <div className="read-more">
                                    <div>
                                        <span>Read More</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {open && <Modal setOpen={setOpen}>
                <h2 className='text-white'>{project.title}</h2>
                {project.content.map((content: string, key: number) => {
                    return <p key={key} className='text-sm mt-2'>{content}</p>
                })}
                {project.link && <div className="bg-white inline-block px-6 py-2 mt-4">
                    <a href={project.link} className="text-black" target='_blank'><span>View</span></a>
                </div>}
            </Modal>}
        </motion.section>
    )
}

export default Work;