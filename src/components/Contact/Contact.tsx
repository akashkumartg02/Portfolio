/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef<any>(null);

    const sendEmail = (e: any) => {
        // e.preventDefault();

        // emailjs.sendForm('service_qs9ta1q', 'template_lblf0uc', form.current, {
        //         publicKey: 'Djq_PRjC1Aj5vxcEV',
        //     })
        //     .then(
        //         () => {
        //             console.log('SUCCESS!');
        //         },
        //         (error) => {
        //             console.log('FAILED...', error.text);
        //         },
        //     );
    };

    return (
        <motion.section id="about" className="mt-20 pb-10"
            initial={{ opacity: 0, marginLeft: -40 }}
            whileInView={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}>
            <div className="bg-[#ffffff0a] text-xs p-2 inline">CONTACT</div>

            <h1 className="mt-5 text-[30px] font-medium text-white">Get in Touch</h1>

            <form ref={form} onSubmit={sendEmail}>
                <div className="mt-6">
                    <input aria-label='name' placeholder='Name' className='border border-[#ffffff0a] w-full p-2' type="text" name="name" required />
                </div>
                <div className="mt-6">
                    <input aria-label='email' placeholder='Email' className='border border-[#ffffff0a] w-full p-2' type="email" name="email" required />
                </div>
                <div className="mt-6">
                    <textarea aria-label='message' placeholder='Message' className='border border-[#ffffff0a] w-full p-2' name="message" required />
                </div>
                <div className='mt-6'>
                    <button type="submit" className='bg-white text-black px-6 py-3'>Send Message</button>
                </div>
            </form>

        </motion.section>
    );
};

export default Contact;