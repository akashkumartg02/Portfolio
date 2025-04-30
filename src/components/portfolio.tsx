import { FaLinkedin, FaDownload, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Portfolio() {
    return (
        <div className="relative min-h-screen bg-gray-50 text-gray-800 py-8 ps-13 pe-8 font-sans">
            {/* Side Widget */}
            <div className="fixed top-1/3 left-4 flex flex-col space-y-4 z-50">
                <a href="https://github.com/akashkumartg02" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-xl">
                    <FaGithub />
                </a>
                <a href="https://twitter.com/akashkumartg02" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-xl">
                    <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/in/akashtg02" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-600 text-xl">
                    <FaLinkedin />
                </a>
                <a href="/Akash Resume.pdf" download rel="noopener noreferrer" className="text-green-600 hover:text-blue-600 text-xl">
                    <FaDownload />
                </a>
            </div>

            {/* Hero Section */}
            <motion.header
                className="text-center min-h-screen flex flex-col justify-center bg-gradient-to-br from-indigo-100 to-white rounded-xl shadow-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-bold mb-4">Hi, I'm Akash Kumar TG</h1>
                <p className="text-lg mb-6">Front-End Developer | React.js | Next.js | Passionate about crafting intuitive web experiences</p>
            </motion.header>

            {/* About Me Section */}
            <motion.section
                className="max-w-3xl mx-auto mb-16 bg-white p-6 rounded-lg shadow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">About Me</h2>
                <p>
                    Passionate front-end developer with over three years of experience in building and optimizing user-friendly web applications.
                    Proficient in JavaScript, React.js, and Next.js, crafting intuitive and high-performance interfaces. Skilled in translating design concepts into responsive and accessible web experiences.
                    Adept at collaborating with designers and backend teams to ensure seamless integration and functionality. Continuously eager to learn and adapt to new technologies in a dynamic environment.
                </p>
            </motion.section>

            {/* Experience Section */}
            <motion.section
                className="max-w-3xl mx-auto mb-16 bg-white p-6 rounded-lg shadow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Experience</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li><strong>ThyQuill (2023 - Present)</strong>: Front-End Developer responsible for building a modern blog platform with Next.js, Vercel, and TailwindCSS. Developed dynamic components and real-time preview editor.</li>
                    <li><strong>Freelance Projects</strong>: Delivered client-centric websites using React.js, ensuring performance, responsiveness, and pixel-perfect design.</li>
                </ul>
            </motion.section>

            {/* Projects Section */}
            <motion.section
                className="max-w-3xl mx-auto mb-16 bg-white p-6 rounded-lg shadow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Projects</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li><strong>Thy Quill - Dynamic Blog Platform</strong>: Built using Next.js, this platform enables users to create, edit, and manage content effortlessly. Integrated WorkOS for authentication and custom domain support.</li>
                    <li><strong>CMDK - Universal Search Widget</strong>: Developed a developer tool enabling easy setup of a Universal Search widget with customizable UI and seamless data integration.</li>
                    <li><strong>Cricketronics E-commerce Dashboard</strong>: Built an end-to-end dashboard for managing e-commerce operations, focusing on performance, scalability, and ease of use.</li>
                </ul>
            </motion.section>

            {/* Skills Section */}
            <motion.section
                className="max-w-3xl mx-auto mb-16 bg-white p-6 rounded-lg shadow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Skills</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>HTML, CSS, SCSS - Responsive and accessible web design</li>
                    <li>JavaScript (ES6+), React.js, Next.js - UI development and performance optimization</li>
                    <li>MongoDB, Mongoose - Database integration</li>
                    <li>API Integration - RESTful services consumption</li>
                    <li>Authentication & Security - JWT, OAuth, role-based access control</li>
                    <li>SDK Development - NPM package creation for reusable components</li>
                    <li>Redis & Job Scheduling - Efficient caching and API execution scheduling</li>
                </ul>
            </motion.section>

            {/* Contact Section */}
            <motion.section
                className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Contact</h2>
                <p>Email: <a href="mailto:akashkumartg02@gmail.com" className="text-blue-600 hover:underline">akashkumartg02@gmail.com</a></p>
                <p>Phone: <a href="tel:+919976872067" className="text-blue-600 hover:underline">+91 99768 72067</a></p>
            </motion.section>

            {/* Footer */}
            <footer className="text-center text-sm mt-16 text-gray-500">
                &copy; {new Date().getFullYear()} Akash Kumar TG. All rights reserved.
            </footer>
        </div>
    );
}