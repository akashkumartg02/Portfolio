/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef<any>(null);
    const [spinner, setSpinner] = useState(false);
    const [message, setMessage] = useState('');

    const sendEmail = (e: any) => {
        e.preventDefault();
        setSpinner(true);
        emailjs.sendForm('service_qs9ta1q', 'template_lblf0uc', form.current, {
            publicKey: 'Djq_PRjC1Aj5vxcEV',
        })
            .then(
                () => {
                    setMessage('Your message has been received!');
                    setSpinner(false);
                },
                (error) => {
                    setMessage('Something went wrong!')
                    console.log('FAILED...', error.text);
                    setSpinner(false);
                },
            );
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
                    <input aria-label='name' placeholder='Name' className='border border-[#ffffff0a] w-full p-2 focus-visible:outline-0 focus-visible:border-[var(--primary)] hover:border-[var(--primary)]' type="text" name="name" required />
                </div>
                <div className="mt-6">
                    <input aria-label='email' placeholder='Email' className='border border-[#ffffff0a] w-full p-2 focus-visible:outline-0 focus-visible:border-[var(--primary)] hover:border-[var(--primary)]' type="email" name="email" required />
                </div>
                <div className="mt-6">
                    <textarea aria-label='message' placeholder='Message' className='border border-[#ffffff0a] w-full p-2 min-h-50 focus-visible:outline-0 focus-visible:border-[var(--primary)] hover:border-[var(--primary)]' name="message" required />
                </div>
                {<p>{message}</p>}
                <div className='mt-6'>
                    <button disabled={spinner} type="submit" className='bg-white text-black px-6 py-3 cursor-pointer w-40 '>
                        {!spinner && 'Send Message'}
                        {spinner &&
                            <svg aria-hidden="true" className="text-center m-auto w-6 h-6 text-white animate-spin dark:text-white fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>}
                    </button>
                </div>
            </form>

        </motion.section>
    );
};

export default Contact;