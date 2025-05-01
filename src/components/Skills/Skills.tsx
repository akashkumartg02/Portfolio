import APP_CONSTANTS from '../../scripts/constants';
import './style.scss';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <motion.section id="work" className="mt-20 pb-10"
            initial={{ opacity: 0, marginLeft: -40 }}
            whileInView={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}>
            <div className="bg-[#ffffff0a] text-xs p-2 inline">Skills</div>

            <h1 className="mt-5 text-[30px] font-medium text-white">What I'm Good At</h1>

            {/* <hr className="my-6 text-lime-500 opacity-60" /> */}

            <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-10">
                {APP_CONSTANTS.SKILLS.map((skill: { skill: string, level: string }, key: number) => {
                    return (
                        <div className='' key={key}>
                            <div className='flex justify-between'>
                                <p className='text-white'>{skill.skill}</p>
                                <p className='text-white'>{skill.level}</p>
                            </div>
                            <div className="bg-[#ffffff0a] w-full h-[2px] mt-2">
                                <div className={`bg-white w-[${skill.level}] h-[2px]`}></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.section>
    )
}

export default Skills;